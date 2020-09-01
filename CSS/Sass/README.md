# CSS cheatsheet

## sass compile

```javascript
sass --watch input.scss output.css
```

```javascript
sass --watch app/sass:public/stylesheets
```

## grid auto resize

```css
grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
```

## transform-translate

```css
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

## transform-rotate

```css
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
