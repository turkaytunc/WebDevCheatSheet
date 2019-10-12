# Javascript

let a = 8, b = 6;
(() => {

[b, a] = [a, b];

})();
console.log(a);
console.log(b);
