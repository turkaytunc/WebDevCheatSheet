# CSS cheatsheet

## Sass compile

```js
sass --watch input.scss output.css
```

```js
sass --watch app/sass:public/stylesheets
```

## Grid auto resize

```scss
grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
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
  -webkit-box-border-radius: $radius;
  -moz-box-border-radius: $radius;
  -ms-box-border-radius: $radius;
  border-radius: $radius;
}

.card-wrapper {
  @include rad(15px);
}
```
