# Javascript Cheatsheet

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

### arr arrayinin iceriginin belli bir kismini deger adli degisken ile doldurma

arr.fill(deger, baslangic, son)

### arraye eleman ekleme ve cikarma

arr.push(deger), arr.pop()

### array iceriginde bir degeri arama, eleman bulunur ise bulundugu indexi dondurur, bulamaz ise -1 dondurur

arr.indexOf(deger)

### array elemanlari arasina istenen karakterin eklenmesi

arr.join(",")

### arrayin bir kisminin ayrilmasi

arr.slice(baslangic, bitis)

### array elemanlarini siralama

arr.sort(function(a,b){ return a-b;})

### array elemanlarinin siralamasini tersine cevirme

arr.reverse()

### forEach dongusu kullanimi

arr.forEach(function(element, index){console.log(element, index)})

### forEach ile cok boyutlu array kullanimi

arr.forEach(function(row){row.forEach(function(col){console.log(col);});

### Callback function async

let callbackFunc = () => {
console.log("done");
};

setTimeout(callbackFunc, 2000); //milisec
setTimeout(() => console.log("done"), 2000);
