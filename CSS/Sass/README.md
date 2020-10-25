# CSS cheatsheet

## Sass compile

```js
sass --watch input.scss output.css
```

```js
sass --watch app/sass:public/stylesheets
```

## Flexbox Deconstructed Pancake

```scss
// flex: <flex-grow> <flex-shrink> <flex-basis>;
// flex: 1 1 100px;

.parent {
  display: flex;
}

.child {
  flex: 0 1 150px;
}
```

## Grid auto resize

```scss
.grid-container {
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
}
```

```scss
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
```

## Transform-translate

```scss
@keyframes transform-translate {
  0% {
    transform: translateX(-100px);
  }

  50% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(-100px);
  }
}

.logo {
  animation: transform-translate infinite 0.5s linear;
}
```

## Transform-rotate

```scss
@keyframes transform-translate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.logo {
  animation: transform-translate infinite 0.5s linear;
}
```

## String interpolation

```scss
// #{}
$medium: 768px;
$screen-medium-wide: 'only screen and (min-width: #{$medium}) and (max-device-aspect-ratio: 9 / 16)';

@media #{$screen-medium-wide} {
  body {
    font-size: 20px;
  }
}
```

## Mixins

```scss
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px); // Call mixin with two values
}

.myNotes {
  @include bordered(red, 2px); // Call mixin with two values
}

// With default values
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}

// Mixin includes other mixins

@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}

// Example

@mixin rad($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.card-wrapper {
  @include rad(15px);
}
```

## If-Else

```scss
@mixin border-stroke($val) {
  @if $val == light {
    border: 1px solid black;
  } @else if $val == medium {
    border: 3px solid black;
  } @else if $val == heavy {
    border: 6px solid black;
  } @else {
    border: none;
  }
}

.card-wrapper {
  @include border-stroke(light);
}
```

## For loop

```scss
// 12 included
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100%/12 * $i;
  }
}

// 12 excluded
@for $i from 1 to 12 {
  .col-#{$i} {
    width: 100%/12 * $i;
  }
}
```

## Each

```scss
//set color to blue then red then green
@each $color in blue, red, green {
  .#{$color}-text {
    color: $color;
  }
}

// Using with set/map

$colors: (
  color1: blue,
  color2: red,
  color3: green,
);

// Note that the $key variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it.
@each $key, $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}

// Example
<style type='text/scss'>

$colors: (color1: blue, color2: black, color3: red);

@each $key, $color in $colors{
  .#{$color}-bg{background-color: $color;}
}

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

```

## While loop

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} {
    width: 100%/12 * $x;
  }
  $x: $x + 1;
}
```

## Partials

```scss
// In the _variables.scss
$red-color: red;

// In the main.scss file

@import 'variables'; // Dont use underscore and file extension
```

## Extend

```scss
// Borrow properties using exdend keyword

.info {
  width: 200px;
  border: 1px solid black;
  margin: 0 auto;
}
.info-important {
  @extend .info;
  background-color: magenta;
}
```
