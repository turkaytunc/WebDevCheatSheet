# Javascript Cheatsheet

## Bazi Fonksiyonlarin kullanimi ve notlar

### Degiskenlerin degerlerini birbirleri ile degistirme

```javascript
let a = 8,
  b = 6;
(() => {
  [b, a] = [a, b];
})();
console.log(a);
console.log(b);
```

### Bir dizinin ilk iki elemanini alma

```javascript
[b, a] = [...arr];
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

### Her virgul bir elemani temsil ediyor, bu sekilde bir dizinin iceriginin bir kismi baska bir diziye aktarilabiliyor

```javascript
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

### Elemanlarin ilk ikisini a ve b degiskenlerine atanmasi, geri kalan elemanlarin ise arr dizisine doldurulmasi

```javascript
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr, a, b;
[a, b, ...arr] = source;
```

### Arr arrayinin iceriginin belli bir kismini deger adli degisken ile doldurma

> arr.fill(deger, baslangic, son)

### Diziye eleman ekleme ve cikarma

> arr.push(deger), arr.pop()

### Dizi iceriginde bir degeri arama, eleman bulunur ise bulundugu indexi dondurur, bulamaz ise -1 dondurur

> arr.indexOf(deger)

### Dizi elemanlari arasina istenen karakterin eklenmesi

> arr.join(",")

### Dizinin bir kisminin ayrilmasi

> arr.slice(baslangic, bitis)

### Dizi elemanlarini siralama

> arr.sort(function(a,b){ return a-b;})

### Dizi elemanlarinin siralamasini tersine cevirme

> arr.reverse()

### forEach dongusu kullanimi

> arr.forEach(function(element, index){console.log(element, index)})

### forEach ile cok boyutlu array kullanimi

```javascript
arr.forEach(function(row){
    row.forEach(function(col){
    console.log(col);});
```

### Asenkron callback fonksiyon kullanimi

```javascript
let callbackFunc = () => {
  console.log("done");
};
setTimeout(callbackFunc, 2000); //milisaniye
setTimeout(() => console.log("done"), 2000);
```

### Belirsiz sayida parametre alan fonksiyon

```javascript
let calc = (a, b, ...extra) => {
  if (a === undefined || b === undefined) {
    return "error";
  }
  let sum = a + b;

  for (i = 0; i < extra.length; i++) {
    sum += extra[i];
  }
  return sum;
};

console.log(calc(3, 5, 8, 10, 20));
```

### Try-catch-finally kullanimi

```javascript
let deneme = () => console.log("Baglanmaya Calis");
try {
  deneme;
} catch (e) {
  console.log("Hata: ", e.toString().slice(11, 50));
} finally {
  setTimeout(() => console.log("Baglanti kesildi"), 2000);
}
```

## Siniflar

### Sinif tanimi ve bu siniftan nesne olusturma

```javascript
class YeniSinif {
  constructor() {
    console.log("nesne olusturuldu");
  }
}

let yeniNesne = new YeniSinif();
console.log(yeniNesne);
```

## DOM kullanimi ve bazi methodlar

### Bir html tag'inin sahip oldugu class ve id ismini kullanarak secme

```javascript
let docID = document.getElementById("idAdi");
let docClass = document.getElementByClassName("classAdi");

console.log(docID);
console.log(docClass);
```

### innerHTML - innerText - textContent

```javascript
let doc = document.getElementById("id");

doc.innerText = "hi"; // sadece text icerik ile ilgilenir
doc.textContent = "hello"; // css stillerini de dikkate alir
doc.innerHTML = `<p>hey</p>`; // cocuk uye olarak paragraf ekler
```

### Sik kullanilan property'ler

```javascript
let itemList = document.querySelector("#items");

console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
```

### DOM style ile css ozelligi degistirme

```javascript
let docClass = document.getElementByClassName("classAdi");

docClass.style.border = "solid 5px #111";
```

### HTMLcollection'dan array uretme

```javascript
let doc = document.getElementsByClassName("list-group-item");

let arr = [...doc]; // ES6 ile
//veya
let arr = Array.from(doc);

arr.forEach((element) => {
  element.style.backgroundColor = "aliceblue";
});
```

### Yeni bir node olusturup icerik ekleme

```javascript
let newDiv = document.createElement("div");

newDiv.className = "yeniClass";
newDiv.id = "yeniID";
newDiv.setAttribute("type", "input");

newDiv.appendChild(document.createTextNode("Ana Sayfa"));

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);
```

### EventListener kullanimi

```javascript
document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick() {
  doSomethingFunction();
}
```

### EventListener ile mouse+tus seklinde bir kombinasyon ile tiklama

```javascript
document.getElementById("button").addEventListener("click", buttonClick);

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
  console.log("HI");
})(); // (fonk)() seklinde kullanilir
```

### Nesne parcalama

```javascript
const address = {
  street: "",
  city: "",
  country: "",
};

const { street: streetVarAlias, city, country } = address; // streetVarAlias ismi stree degisken ismi yerine kullanilmasi icin yazildi
console.log(streetVarAlias, city, country);
```

### Icice olan nesneleri parcalama

```javascript
const regularPerson = {
  firstname: "Ali",
  lastname: "Yilmaz",
  spouse: {
    firstname: "Ece",
    lastname: "Yilmaz",
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
  console.log(this.destination + " | " + this.length + " days");
};
const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days
```

### importing modules

You can scope module variables locally under different variable names

```javascript
import { print as p, log as l } from "./text-helpers";
p("printing a message");
l("logging a message");
```

You can also import everything into a single variable using \*:

```javascript
import * as fns from './text-helpers`
```

### higher order function

```javascript
const createScream = (logger) => (message) =>
  logger(message.toUpperCase() + "!!!");

const scream = createScream((message) => console.log(message));
scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");
```
