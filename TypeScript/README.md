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
