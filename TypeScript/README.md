# :rocket: Typescript

## :pencil: Index

- [Classes](#Classes)
- [Class inheritance](#Class-inheritance)
- [Static variables](#Static-variables)
- [Access Modifiers](#Access-Modifiers)
- [Constructor shorthand](#Constructor-shorthand)
- [Arrow function with classes](#Arrow-function-with-classes)
- [Async error handling](#Async-error-handling)
- [Return promise](#Return-promise)
- [Nodejs promise returning function](#Nodejs-promise-returning-function)
- [Generator functions](#Generator-functions)
- [Iterator next value injection](#Iterator-next-value-injection)
- [Iterator throw error](#Iterator-throw-error)
- [Async await](#Async-await)
- [Include exclude files using typescript config file](#Include-exclude-files-using-typescript-config-file)
- [EsModules export](#EsModules-export)
- [EsModules import](#EsModules-import)
- [Default exports imports](#Default-exports-imports)
- [Declare a module globally](#Declare-a-module-globally)
- [Namespaces](#Namespaces)
- [Interfaces](#Interfaces)
- [Tuples](#Tuples)
- [Intersection types](#Intersection-types)

### Classes

```ts
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}
```

### Class inheritance

```ts
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  add(point: Point3D) {
    var point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}
```

### Static variables

```ts
class Something {
  static instances = 0;
  constructor() {
    Something.instances++;
  }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2
```

### Access Modifiers

```ts
class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
  constructor() {
    super();
    this.x; // okay
    this.y; // ERROR: private
    this.z; // okay
  }
}
```

### Constructor shorthand

```ts
class Foo {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
}

// Code below this line does same thing as above

class Foo {
  constructor(public x: number) {}
}
```

### Arrow function with classes

```ts
class Person {
  constructor(public age: number) {}
  growOld = () => {
    this.age++;
  };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
```

### Async error handling

```ts
import fs = require('fs');
function loadJSON(filename: string, cb: (error: Error) => void) {
  fs.readFile(filename, function (err, data) {
    if (err) return cb(err);
    // Contain all your sync code in a try catch
    try {
      var parsed = JSON.parse(data);
    } catch (err) {
      return cb(err);
    }
    // except when you call the callback
    return cb(null, parsed);
  });
}
```

### Return promise

```ts
import fs = require('fs');
function readFileAsync(filename: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
```

### Nodejs promise returning function

```ts
import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);
```

### Generator functions

```ts
function* idMaker() {
  let index = 0;
  while (index < 3) yield index++;
}
let gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { done: true }
```

### Iterator next value injection

```ts
function* generator() {
  const bar = yield 'foo'; // bar may be *any* type
  console.log(bar); // bar!
}
const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // foo
// Resume execution injecting bar
const nextThing = iterator.next('bar');
```

### Iterator throw error

```ts
function* generator() {
  try {
    yield 'foo';
  } catch (err) {
    console.log(err.message); // bar!
  }
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution throwing an exception 'bar'
var nextThing = iterator.throw(new Error('bar'));
```

### Async await

```ts
async function foo() {
  try {
    var val = await getMeAPromise();
    console.log(val);
  } catch (err) {
    console.log('Error: ', err.message);
  }
}
```

### Include exclude files using typescript config file

```json
{
  "include": ["./folder"],
  "exclude": ["./folder/**/*.spec.ts", "./folder/someSubFolder"]
}
```

### EsModules export

```ts
export let someVar = 100;
export type SomeType = {
  foo: number;
};

// or
let someVar = 23;
type SomeType = {
  foo: string;
};
export { someVar, SomeType };

// with renaming

let someVar = 53;
export { someVar as aDifferentName };
```

### EsModules import

```ts
import { someVar, SomeType } from './foo';

// import with renaming

import { someVar as aDifferentName } from './foo';

// import everything

import * as foo from './foo';
```

### Default exports imports

```ts
// some var
export default someVar = 123;
// OR Some function
export default function someFunction() {}
// OR Some class
export default class SomeClass {}

import someLocalNameForThisFile from '../foo'; // Doesn't contain {}
```

### Declare a module globally

```ts
// global.d.ts
declare module 'foo' {
  export var bar: number;
}

// anyOtherTsFileInYourProject.ts
import * as foo from 'foo'; // TypeScript assumes (without doing any lookup) that foo is {bar:number}
```

### Namespaces

```ts
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.error(msg);
  }
}

// Usage
Utility.log('Call me');
Utility.error('maybe!');
```

### Interfaces

```ts
interface Name {
  first: string;
  second: string;
}

let name: Name;
```

### Tuples

```ts
let nameNumber: [string, number];
```

### Intersection types

```ts
function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}
const x = extend({ a: 'hello' }, { b: 42 });
// x now has both `a` and `b`
const a = x.a;
const b = x.b;
```
