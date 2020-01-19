# Javascript Cheatsheet

## Basit Fonksiyonlar ve islevleri

### Degiskenlerin degerlerini birbirleri ile degistirme

> let a = 8, b = 6;
> (() => {
> [b, a] = [a, b];
> })();  
> console.log(a);  
> console.log(b);

### Bir arrayin ilk iki elemanini alma

> [b, a] = [...arr]  
> const [a, b] = [1, 2, 3, 4, 5, 6];  
> console.log(a, b); // 1, 2

### Her virgul bir elemani temsil ediyor, bu sekilde bir arrayin iceriginin bir kismi baska bir arrraye aktarilabiliyor

> const [a, b,,, c] = [1, 2, 3, 4, 5, 6];  
> console.log(a, b, c); // 1, 2, 5

### Elemanlarin ilk ikisini a ve b degiskenine atanmasi, geri kalan elemanlarin ise arr arrayine doldurulmasi

> const source = [1,2,3,4,5,6,7,8,9,10];  
> let arr, a, b;  
> [a, b, ...arr] = source;

### Arr arrayinin iceriginin belli bir kismini deger adli degisken ile doldurma

> arr.fill(deger, baslangic, son)

### Arraye eleman ekleme ve cikarma

> arr.push(deger), arr.pop()

### Array iceriginde bir degeri arama, eleman bulunur ise bulundugu indexi dondurur, bulamaz ise -1 dondurur

> arr.indexOf(deger)

### Array elemanlari arasina istenen karakterin eklenmesi

> arr.join(",")

### Arrayin bir kisminin ayrilmasi

> arr.slice(baslangic, bitis)

### Array elemanlarini siralama

> arr.sort(function(a,b){ return a-b;})

### Array elemanlarinin siralamasini tersine cevirme

> arr.reverse()

### forEach dongusu kullanimi

> arr.forEach(function(element, index){console.log(element, index)})

### forEach ile cok boyutlu array kullanimi

<pre>
    <code>
    arr.forEach(function(row){  
        row.forEach(function(col){  
        console.log(col);});
    </code>
</pre>

### Callback function async

<pre>
    <code>
    let callbackFunc = () => {
        console.log("done");
    };
    setTimeout(callbackFunc, 2000); //milisaniye
    setTimeout(() => console.log("done"), 2000);
    </code>
</pre>

### Belirsiz sayida parametre alan fonksiyon

<pre>
    <code>
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
    </code>
</pre>
