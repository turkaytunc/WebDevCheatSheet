# Javascript

let a = 8, b = 6;
(() => {

[b, a] = [a, b];

})();
console.log(a);
console.log(b);

--

[b, a] = [...arr]
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

--

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

--

const source = [1,2,3,4,5,6,7,8,9,10];
let arr, a, b;
[a, b, ...arr] = source;