# Javascript Cheatsheet

### degiskenlerin degerlerini birbirleri ile degistirme

> let a = 8, b = 6;
> (() => {
> [b, a] = [a, b];
> })();  
> console.log(a);  
> console.log(b);

### bir arrayin ilk iki elemanini alma

> [b, a] = [...arr]  
> const [a, b] = [1, 2, 3, 4, 5, 6];  
> console.log(a, b); // 1, 2

### her virgul bir elemani temsil ediyor

> const [a, b,,, c] = [1, 2, 3, 4, 5, 6];  
> console.log(a, b, c); // 1, 2, 5

### elemanlarin ilk ikisini a ve b degiskenine atanmasi, geri kalan elemanlarin ise arr arrayine doldurulmasi

> const source = [1,2,3,4,5,6,7,8,9,10];  
> let arr, a, b;  
> [a, b, ...arr] = source;

### arr arrayinin iceriginin belli bir kismini deger adli degisken ile doldurma

> arr.fill(deger, baslangic, son)

### arraye eleman ekleme ve cikarma

> arr.push(deger), arr.pop()

### array iceriginde bir degeri arama, eleman bulunur ise bulundugu indexi dondurur, bulamaz ise -1 dondurur

> arr.indexOf(deger)

### array elemanlari arasina istenen karakterin eklenmesi

> arr.join(",")

### arrayin bir kisminin ayrilmasi

> arr.slice(baslangic, bitis)

### array elemanlarini siralama

> arr.sort(function(a,b){ return a-b;})

### array elemanlarinin siralamasini tersine cevirme

> arr.reverse()

### forEach dongusu kullanimi

> arr.forEach(function(element, index){console.log(element, index)})

### forEach ile cok boyutlu array kullanimi

> arr.forEach(function(row){  
>  row.forEach(function(col){  
>  console.log(col);});

### Callback function async

> let callbackFunc = () => {
> console.log("done");
> };  
> setTimeout(callbackFunc, 2000); //milisec  
> setTimeout(() => console.log("done"), 2000);

### Belirsiz sayida argunman alan fonksiyon

> let calc = (a, b, ...extra) => {  
> if (a === undefined || b === undefined) {
> return "error";
> }  
> let sum = a + b;  
> for (i = 0; i < extra.length; i++) {
> sum += extra[i];
> }  
> return sum;  
> };  
> console.log(calc(3, 5, 8, 10, 20));
