<h2 align="center">CSS-Animations</h2>

`movers.css` is a collection of CSS based animations free to a good home! Please see below for a full list of current animations.

<h2 align="center">How to use</h2>
To use any animation from the collection copy the code into your CSS file such as in the example below:

```
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.selector {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease;
}
```

Then change `.selector` to the `element`, `ID` or `class` of the item you would like to animate.

>**Browser compatibility** - to ensure cross-browser compatibility i would recommend adding the necessary CSS vendor prefixes as not all animation effects are currently available in all browsers without these.

<h2 align="center">Animations list</h2>

| Animations list   |                    |
| ----------------- | ------------------ |
| Entry Animations  |                    |
|                   | `Fade in`          |
|                   | `Enter from top`   |
|                   | `Enter from bottom`|
|                   | `Enter from right` |
|                   | `Enter from left`  |
|                   | `Rotate clockwise` |
|                   | `Rotate anticlockwise`|
|                   | `Shrink and fade in`  |
|                   | `Grow and fade in` |
|                   | `Word flip`        |
|                   | `Word flip alternate` |
| Exit Animations   |                    |
|                   | `Exit top`         |
|                   | `Exit bottom`      |
|                   | `Exit right`       |
|                   | `Exit left`        |
| Other Animations  |                    |
|                   | `Shake`            |


<br>
<h3 align="center">Enjoy! :)</h3>
