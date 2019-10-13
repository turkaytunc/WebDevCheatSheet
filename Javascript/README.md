# Javascript

### changing values of two variables with eachother

let a = 8, b = 6;
(() => {

[b, a] = [a, b];

})();
console.log(a);
console.log(b);

### slicing first 2 element of an array

[b, a] = [...arr]
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

### every comma represents one element

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

### slicing first 2 element of an array to new variables and rest of them to new array

const source = [1,2,3,4,5,6,7,8,9,10];
let arr, a, b;
[a, b, ...arr] = source;
