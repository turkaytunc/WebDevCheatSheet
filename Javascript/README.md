# Javascript Cheatsheet

## Bazi Fonksiyonlarin kullanimi ve notlar

### Degiskenlerin degerlerini birbirleri ile degistirme

```javascript
let a = 8,b = 6;
(() => {[b, a] = [a, b];})();
console.log(a);
console.log(b);
```

### Bir dizinin ilk iki elemanini alma

```javascript
[b, a] = [...arr]
const [a, b] = [1, 2, 3, 4, 5, 6];  
console.log(a, b); // 1, 2
```

### Her virgul bir elemani temsil ediyor, bu sekilde bir dizinin iceriginin bir kismi baska bir diziye aktarilabiliyor

```javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];  
console.log(a, b, c); // 1, 2, 5
```

### Elemanlarin ilk ikisini a ve b degiskenlerine atanmasi, geri kalan elemanlarin ise arr dizisine doldurulmasi

```javascript
const source = [1,2,3,4,5,6,7,8,9,10];  
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
let callbackFunc = () => {console.log("done");};
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

## DOM kullanimi ve bazi methodlar

### Bir html tag'inin sahip oldugu class ve id ismini kullanarak secme

```javascript
let docID    =  document.getElementById("idAdi");
let docClass =  document.getElementByClassName("classAdi");

console.log(docID);
console.log(docClass);
```

### innerHTML - innerText - textContent

```javascript
let doc = document.getElementById("id");

doc.innerText = "hi";// sadece text icerik ile ilgilenir
doc.textContent = "hello";// css stillerini de dikkate alir
doc.innerHTML = `<p>hey</p>`;// cocuk uye olarak paragraf ekler
```

### DOM style ile css ozelligi degistirme

```javascript
let docClass =  document.getElementByClassName("classAdi");

docClass.style.border = "solid 5px #111";

```

### HTMLcollection'dan array uretme

```javascript
let doc = document.getElementsByClassName("list-group-item");

let arr = [...doc];
let arr = Array.from(doc);

arr.forEach(element => {
    element.style.backgroundColor = "aliceblue";
});

```
