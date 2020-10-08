# 🎉 Javascript Cheatsheet

## 📝 Index

- [Change values between two variables](#Change-variable-values-with-eachother)
- [Fill an array with given value](#Filling-an-array-with-given-value)
- [Add or remove an element from end of an array](#Add-or-remove-an-element-from-end-of-an-array)
- [Slice string](#Slice-string)
- [Sort array](#Sort-array)
- [Array.find](#Array-find)
- [How to use forEach](#How-to-use-forEach)
- [Iterating multidimensional array with forEach](#Iterating-multidimensional-array-with-forEach)
- [Asynchronous callback](#Asynchronous-callback)
- [Unknown amount of parameters](#Unknown-amount-of-parameters)
- [Try catch finally](#Try-catch-finally)
- [Creating class and object](#Creating-class-and-object)
- [DOM](#Document-Object-Model)
  - [Select an html element with classname or id](#Select-an-html-element-with-classname-or-id)
  - [innerHTML - innerText - textContent](#innerHTML---innerText---textContent)
  - [Useful properties](#Useful-properties)
  - [DOM change style](#DOM-change-style)
  - [Creating array from HTMLcollection](#Creating-array-from-HTMLcollection)
  - [Adding new node](#Adding-new-node)
  - [Using EventListener](#Using-EventListener)
  - [EventListener mouse+keypress](#EventListener-mouse-keypress)
- [Immediately invoked function expression](#Immediately-invoked-function-expression)
- [Object destructuring](#Object-destructuring)
- [Object destructuring inside an object](#Object-destructuring-inside-an-object)
- [Custom type with functions](#Custom-type-with-functions)
- [Importing modules](#Importing-modules)
- [Higher order function](#Higher-order-function)
- [Pure function - effect object](#Pure-function---effect-object)
- [Pure function - effect array](#Pure-function---effect-array)
- [Filter function](#Filter-function)
- [Reduce function](#Reduce-function)
- [Currying](#Currying)
- [Optional chaining operator "?."](#Optional-chaining-operator)
- [Proper use of localstorage](#Proper-use-of-localstorage)
- [Get current day's name or given date's name](#Get-current-days-name-or-given-dates-name)
- [Distinct items from array with Set](#Distinct-items-from-array-with-reduce)
- [Distinct items from array with Set](#Distinct-items-from-array-with-Set)
- [Find deepest children in object](#Find-deepest-children-in-object)
- [Wait x amount of seconds](#Wait-x-amount-of-seconds)
- [Arguments keyword](#Arguments-keyword)
- [URI encoding](#URI-encoding)
- [Object prototype](#Object-prototype)
- [Prototypal Inheritance](#Prototypal-Inheritance)
- [Prototypal Inheritance binding constructor](#Prototypal-Inheritance-binding-constructor)
- [Prototype mixin](#Prototype-mixin)
- [useReducer](#useReducer)
- [Commonjs import-export](#Commonjs-import-export)
- [Bind Call Apply](#bind-call-apply)
- [Private fields](#private-fields)
- [Factory function](#Factory-function)
- [Flatten array recursively](#Flatten-array-recursively)
- [Object composed from key-value](#Object-composed-from-key-value)
- [Creates an array of unique values from all given arrays](#Creates-an-array-of-unique-values-from-all-given-arrays)
- [Curry](#Curry)
- [Creates a function that negates the result of the predicate](#Creates-a-function-that-negates-the-result-of-the-predicate)
- [Partials](#Partials)
- [D3 library](#D3-Library)
  - [D3 select and selectAll](#D3-select-and-selectAll)
  - [D3 style and append](#D3-style-and-append)
  - [D3 attr function and add class dynamically](#D3-attr-function-and-add-class-dynamically)
  - [D3 basic use case](#D3-basic-use-case)
  - [D3 adding rectangle](#D3-adding-rectangle)

### Change variable values with eachother

```javascript
let a = 8,
  b = 6;
(() => {
  [b, a] = [a, b];
})(); //extra parens for invoking function
console.log(a); //6
console.log(b); //8
```

### Get first two element of an array

```javascript
[b, a] = [...arr]; //es6
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

### Every comma represents an element of an array

```javascript
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

### Getting first #amount elements

```javascript
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr, a, b;
[a, b, ...arr] = source;
```

### Filling an array with given value

```javascript
arr.fill(value, start, end);
```

### Add or remove an element from end of an array

```javascript
arr.push(value), arr.pop();
```

### Search a value in array. If it finds element returns element. If it can not find given value in array returns -1

```javascript
arr.indexOf(value);
```

### Adding value between array elements

```javascript
arr.join(',');
```

### Slice string

```javascript
arr.slice(start, end);
//If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
arr.slice(-3);
```

### Sort array

```javascript
//sorts numeric values
arr.sort((a, b) => a - b); //low to high
arr.sort((a, b) => b - a); //high to low
```

### Reverse the given array

```javascript
arr.reverse();
```

### Array find

```javascript
arr.find((element) => element == 5); //finds array element where element equals to five. returns first occurrence
```

### How to use forEach

```javascript
arr.forEach(function (element, index) {
  console.log(element, index);
});
```

### Iterating multidimensional array with forEach

```javascript
arr.forEach(function(row){
    row.forEach(function(col){
    console.log(col);});
```

### Asynchronous callback

```javascript
let callbackFunc = () => {
  console.log('done');
};
setTimeout(callbackFunc, 2000); //2000 milliseconds
setTimeout(() => console.log('done'), 2000);
```

### Unknown amount of parameters

```javascript
let sum = (a, b, ...extra) => {
  if (a === undefined || b === undefined) {
    return 'error';
  }
  let sum = a + b;

  for (i = 0; i < extra.length; i++) {
    sum += extra[i];
  }
  return sum;
};

console.log(sum(3, 5, 8, 10, 20));
```

### Try catch finally

```javascript
let tryToConnect = () => console.log('Try to connect');
try {
  tryToConnect;
} catch (e) {
  console.log('Error: ', e.toString().slice(11, 50));
} finally {
  setTimeout(() => console.log('Connection lost'), 2000);
}
```

## Classes

### Creating class and object

```javascript
class MyClass {
  constructor() {
    console.log('Object created!');
  }
}

let newObject = new MyClass();
console.log(newObject);
```

## Document Object Model

### Select an html element with classname or id

```javascript
let docID = document.getElementById('id');
let docClass = document.getElementByClassName('class');

console.log(docID);
console.log(docClass);
```

### innerHTML - innerText - textContent

```javascript
let doc = document.getElementById('id');

doc.innerText = 'hi'; // only text content
doc.textContent = 'hello'; // also includes css content
doc.innerHTML = `<p>hey</p>`; // adds child
```

### Useful properties

```javascript
let itemList = document.querySelector('#items');

console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
```

### DOM change style

```javascript
let docClass = document.getElementByClassName('classname');

docClass.style.border = 'solid 5px #111';
```

### Creating array from HTMLcollection

```javascript
let doc = document.getElementsByClassName('list-group-item');

let arr = [...doc]; // ES6 ile
//veya
let arr = Array.from(doc);

arr.forEach((element) => {
  element.style.backgroundColor = 'aliceblue';
});
```

### Adding new node

```javascript
let newDiv = document.createElement('div');

newDiv.className = 'newClass';
newDiv.id = 'newID';
newDiv.setAttribute('type', 'input');

newDiv.appendChild(document.createTextNode('Homepage'));

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
```

### Using EventListener

```javascript
document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
  doSomethingFunction();
}
```

### EventListener mouse keypress

```javascript
document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.offsetX);
  console.log(e.offsetY);
}
```

### Immediately invoked function expression

```javascript
(function sayHi() {
  console.log('HI');
})(); // (fonk)() seklinde kullanilir
```

### Object destructuring

```javascript
const address = {
  street: '',
  city: '',
  country: '',
};

const { street: streetVarAlias, city, country } = address; // streetVarAlias
console.log(streetVarAlias, city, country);
```

### Object destructuring inside an object

```javascript
const regularPerson = {
  firstname: 'Ali',
  lastname: 'Yilmaz',
  spouse: {
    firstname: 'Ece',
    lastname: 'Yilmaz',
  },
};

const lordify = ({ spouse: { firstname } }) => {
  console.log(`${firstname}`);
};
```

### Custom type with functions

```javascript
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}
Vacation.prototype.print = function () {
  console.log(this.destination + ' | ' + this.length + ' days');
};
const maui = new Vacation('Maui', 7);
maui.print(); // Maui | 7 days
```

### Importing modules

```javascript
//You can scope module variables locally under different variable names
import { print as p, log as l } from './text-helpers';
p('printing a message');
l('logging a message');
```

```javascript
//You can also import everything into a single variable using *:
import * as fns from './text-helpers`
```

### Higher order function

```javascript
const createScream = (logger) => (message) =>
  logger(message.toUpperCase() + '!!!');

const scream = createScream((message) => console.log(message));
scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');
```

### Pure function - effect object

```javascript
let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0,
};

const rateColor = (color, rating) => ({ ...color, rating: rating });
console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0
```

### Pure function - effect array

```javascript
let list = [{ title: 'Rad Red' }, { title: 'Lawn' }, { title: 'PartyPink' }];

const addColor = (title, colors) => [...colors, { title: title }];
console.log(addColor('GlamGreen', list).length); // 4
console.log(list.length); // 3
```

### Filter function

```javascript
const numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

// const findSmallNumber = (number, smallThanThis) => number < smallThanThis;

// function filterArray(listOfNumbers, smallThanThis) {
//   return listOfNumbers.filter((number) => findSmallNumber(number, smallThanThis));
// }

function findSmallNumber(number) {
  return number < this;
}
const filterArray = (listOfNumbers, smallThanThis) =>
  listOfNumbers.filter(findSmallNumber, smallThanThis); // second argument can be used as this;

const filteredArray = filterArray(numbers, 7);
console.log(filteredArray); // [2, 5, 1, 3, 0];
console.log(numbers); // [10, 9, 8, 2, 7, 5, 1, 3, 0]
```

### Reduce function

```javascript
var values = [1, 2, -3, -4, 5, 6];

const sum = (acc, current) => acc + current; // reduce takes (accumulator, currentValue, index)

const sumOfValues = values.map(Math.abs).reduce(sum, 0); // reduce(callback, initialValue)

console.log(sumOfValues);
```

### Currying

```javascript
function curriedDot(vector1) {
  return function (vector2) {
    return vector1.reduce(
      (sum, element, index) => (sum += element * vector2[index]),
      0
    );
  };
}

// Taking the dot product of any vector with [1, 1, 1]
// is equivalent to summing up the elements of the other vector.
const sumElements = curriedDot([1, 1, 1]);

console.log(sumElements([1, 3, -5])); // -1
console.log(sumElements([4, -2, -1])); // 1
```

### Optional chaining operator

```javascript
// check if myObj.prop1 is defined before trying to access prop2
myObj.prop1?.prop2; // will give undefined if either prop1 or prop2 doesn't exist

// check if myObj.prop1 is defined before trying to access "prop 2"
myObj.prop1?.['prop 2'];

// check if myObj.method is defined before trying to call it
myObj.method?.();

// check if myArr[5] is defined before trying to access its 8th index
myArr[5]?.[8];
```

### Proper use of localstorage

```javascript
​​const obj = { name: "JavaScript" };

​​window.localStorage.setItem("test-object", JSON.stringify(obj));
​​const objInStorage = window.localStorage.getItem("test-object");

​​console.log(JSON.parse(objInStorage));​​// {name: 'JavaScript'}

​​const arr = ["JavaScript", "programming", 45];

​​window.localStorage.setItem("test-array", JSON.stringify(arr));
​​const arrInStorage = window.localStorage.getItem("test-array");

​​console.log(JSON.parse(arrInStorage));​​// JavaScript, programming, 45
```

### Get current day's name or given date's name

```javascript
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function getDayName(dateString) {
  const currentDate = new Date(dateString);
  const dayName = daysOfTheWeek[currentDate.getUTCDay()];
  return dayName;
}
```

### Distinct items from array with reduce

```javascript
const colors = ['red', 'red', 'green', 'blue', 'green'];
const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);
console.log(uniqueColors); // ["red", "green", "blue"]
```

### Distinct items from array with Set

```javascript
function findDistinct(nums) {
  const distinctArray = [...new Set(nums)];

  return distinctArray;
}
```

### Find deepest children in object

```javascript
const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first];
};
```

### Wait x amount of seconds

```javascript
function waitMiliseconds(amount) {
  console.time('calc');
  console.log('function started!');

  let ms = amount + new Date().getTime();

  while (new Date() < ms) {}

  console.log('function finished');
  console.timeEnd('calc');
}

waitSeconds(5000);
```

### Arguments keyword

```javascript
function sayHello(firstName, lastName) {
  if (arguments.length === 0) {
    console.log('Missing parameters!!');
    return;
  }
  console.log(`Hello ${firstName} ${lastName}!`);
}

sayHello('Erik', 'Shawn'); // Hello Erik Shawn!
sayHello(); // Missing parameters!!
```

### URI encoding

```javascript
let params = encodeURIComponent('mango & pineapple');
let url = 'http://mysite.com/?search=' + params; //http://mysite.com/?search=mango%20%26%20pineapple
```

### String concat

```javascript
finalString = firstString.concat(secondString);
```

### Object prototype

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};
```

### Prototypal Inheritance

```js
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
```

### Prototypal Inheritance binding constructor

```js
function Animal() {}

//adding eat function
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype); //inheriting from animal class
Dog.prototype.constructor = Dog; //use Dog class constructor

//adding bark function to Dog class
Dog.prototype.bark = function () {
  console.log('Woof!');
};

let beagle = new Dog();
```

### Prototype mixin

```js
let bird = {
  name: 'Kek',
  numLegs: 2,
};

let boat = {
  name: 'Oruc',
  type: 'race-boat',
};

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('gliding');
  };
};

glideMixin(bird);
glideMixin(boat);
```

### useReducer

```js

function User() {
const [user, setUser] = useReducer(
(user, newDetails) => ({ ...user, ...newDetails }),
firstUser
);

```

### Commonjs import export

```js
//export
const getName = () => {
  return 'Mike';
};

exports.getName = getName;

//import
const user = require('./user');
console.log(`User: ${user.getName()}`);
```

```js
const getName = () => {
  return 'Jim';
};

const getLocation = () => {
  return 'Munich';
};

const dateOfBirth = '12.01.1982';

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
```

```js
//export
exports.getName = () => {
  return 'Jim';
};

exports.getLocation = () => {
  return 'Munich';
};

exports.dob = '12.01.1982';

//import
const { getName, dob } = require('./user');
console.log(`${getName()} was born on ${dob}.`);
```

```js
//export
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
  }
}

module.exports = User;

//import

const User = require('./user');
const jim = new User('Jim', 37, 'jim@example.com');

console.log(jim.getUserStats());
```

### Bind-call-apply

```js
let person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

let logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
};

let logPersonName = logName.bind(person); //binding this keyword, returns copy of function.
logPersonName('en');

logName.call(person, 'en', 'es'); //binds this keyword to given object and calls function
logName.apply(person, ['en', 'es']); //same as call but takes arguments as an array

//IIFE
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
}.apply(person, ['es', 'en']));

// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log(person.getFullName.apply(person2)); //borrowed person object's getFullName function. Property names must match, in this case person and person2 objects have firstName and lastName

// function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
```

### private fields

```js
function hide() {
  let name = 'bilal';
  let surname = 'ERDOGAN';

  let nameObj = {
    get fullName() {
      return name + ' ' + surname;
    },
  };

  return nameObj;
}

let bf = hide();

console.log(bf.fullName);
```

### Factory function

```js
function Calculator(a = 5, b = 10) {
  return {
    sum: () => console.log(a + b),
  };
}

Calculator(2, 3).sum(); // output 5

// const calc = Calculator(2, 10);
// calc.sum();
```

### Flatten array recursively

```js
const flattenDeep = (arr) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...flattenDeep(a), ...flattenDeep(b)], [])
    : [arr];

flattenDeep([1, [[2], [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
```

### Object composed from key-value

```js
Object.fromEntries([
  ['a', 1],
  ['b', 2],
]); // => { 'a': 1, 'b': 2 }
```

### Creates an array of unique values from all given arrays

```js
const union = (arr, ...args) => [...new Set(arr.concat(...args))];

union([2], [1, 2], [1, 2]); // => [2, 1]
```

### Curry

```js
const curry = (func) => {
  // define the number of expected arguments
  const expectedArgs = func.length;
  const curried = (...args) => {
    // if enough arugments has been passed return the
    // result of the function execution, otherwise
    // continue adding arguments to the list
    return args.length >= expectedArgs
      ? func(...args)
      : (...args2) => curried(...args.concat(args2));
  };
  return curried;
};

const abc = (a, b, c) => [a, b, c];

const curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]
```

### Creates a function that negates the result of the predicate

```js
const negate = (func) => (...args) => !func(...args);

const isEven = (n) => n % 2 === (0)[(1, 2, 3, 4, 5, 6)].filter(negate(isEven)); // => [1, 3, 5]
```

### Partials

```js
const partial = (func, ...args) => (...furtherArgs) =>
  func(...args, ...furtherArgs);

const greet = (greeting, name) => `${greeting} ${name}`;

const sayHelloTo = partial(greet, 'hello');
sayHelloTo('fred'); // => 'hello fred'
```

### D3 Library

### D3 select and selectAll

```js
d3.select('body').selectAll('h2').text('hello world!');
```

### D3 style and append

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select('body')
  .selectAll('h2')
  .data(dataset)
  .enter()
  .append('h2')
  .style('color', (d) => (d < 20 ? 'red' : 'green'))
  .text((d) => d + ' USD');
```

### D3 attr function and add class dynamically

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar');
```

### D3 basic use case

```scss
.bar {
  width: 25px;
  height: 100px;
  margin: 2px;
  display: inline-block;
  background-color: blue;
}
```

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', (d) => d * 10 + 'px');
```

### D3 adding rectangle

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', w) // Width of svg element
  .attr('height', h) // Height of svg element
  .append('rect') // Add rectangle
  .attr('width', '25px') // Rectangle width
  .attr('height', '100px') // Rectangle height
  .attr('x', '0') // Rectangle offset x : origin point is top-left corner
  .attr('y', '0'); // Rectangle offset y : origin point is top-left corner
```
