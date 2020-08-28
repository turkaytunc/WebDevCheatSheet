# Javascript Cheatsheet

## Useful functions and notes

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

### Every comman represents an element of an array

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

### Sort an array

```javascript
arr.sort((a, b) => a - b); //low to high
arr.sort((a, b) => b - a); //high to low
```

### Reverse the given array

```javascript
arr.reverse();
```

### Array.find

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

doc.innerText = 'hi'; // sadece text icerik ile ilgilenir
doc.textContent = 'hello'; // css stillerini de dikkate alir
doc.innerHTML = `<p>hey</p>`; // cocuk uye olarak paragraf ekler
```

### Sik kullanilan property'ler

```javascript
let itemList = document.querySelector('#items');

console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
```

### DOM style ile css ozelligi degistirme

```javascript
let docClass = document.getElementByClassName('classAdi');

docClass.style.border = 'solid 5px #111';
```

### HTMLcollection'dan array uretme

```javascript
let doc = document.getElementsByClassName('list-group-item');

let arr = [...doc]; // ES6 ile
//veya
let arr = Array.from(doc);

arr.forEach((element) => {
  element.style.backgroundColor = 'aliceblue';
});
```

### Yeni bir node olusturup icerik ekleme

```javascript
let newDiv = document.createElement('div');

newDiv.className = 'yeniClass';
newDiv.id = 'yeniID';
newDiv.setAttribute('type', 'input');

newDiv.appendChild(document.createTextNode('Ana Sayfa'));

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
```

### EventListener kullanimi

```javascript
document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
  doSomethingFunction();
}
```

### EventListener ile mouse+tus seklinde bir kombinasyon ile tiklama

```javascript
document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.offsetX);
  console.log(e.offsetY);
}
```

## Ipucu

### Fonksiyonun aninda invoke edilmesi

```javascript
(function sayHi() {
  console.log('HI');
})(); // (fonk)() seklinde kullanilir
```

### Nesne parcalama

```javascript
const address = {
  street: '',
  city: '',
  country: '',
};

const { street: streetVarAlias, city, country } = address; // streetVarAlias ismi stree degisken ismi yerine kullanilmasi icin yazildi
console.log(streetVarAlias, city, country);
```

### Icice olan nesneleri parcalama

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

### custom type with functions

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

### importing modules

You can scope module variables locally under different variable names

```javascript
import { print as p, log as l } from './text-helpers';
p('printing a message');
l('logging a message');
```

You can also import everything into a single variable using \*:

```javascript
import * as fns from './text-helpers`
```

### higher order function

```javascript
const createScream = (logger) => (message) =>
  logger(message.toUpperCase() + '!!!');

const scream = createScream((message) => console.log(message));
scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');
```

### pure function - effect object

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

### pure function - effect array

```javascript
let list = [{ title: 'Rad Red' }, { title: 'Lawn' }, { title: 'PartyPink' }];

const addColor = (title, colors) => [...colors, { title: title }];
console.log(addColor('GlamGreen', list).length); // 4
console.log(list.length); // 3
```

### filter function

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

### reduce function

```javascript
var values = [1, 2, -3, -4, 5, 6];

const sum = (acc, current) => acc + current; // reduce takes (accumulator, currentValue, index)

const sumOfValues = values.map(Math.abs).reduce(sum, 0); // reduce(callback, initialValue)

console.log(sumOfValues);
```

### currying

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

### optional chaining operator (?.)

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

### distinct items from array

```javascript
const colors = ['red', 'red', 'green', 'blue', 'green'];
const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);
console.log(uniqueColors); // ["red", "green", "blue"]
```

### Distinct items from array

```javascript
function findDistinct(nums) {
  const distinctArray = [...new Set(nums)];

  return distinctArray;
}
```

### Find deepest children in objects

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
