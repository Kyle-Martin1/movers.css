<h2 align="center">Movers.css - CSS-Animations library</h2>

![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-Green.svg) [![Chat](https://img.shields.io/badge/Chat-Gitter-Purple.svg)](https://gitter.im/movers-css/community)

`movers.css` is a collection of CSS based animations designed to make life easier! Please see below for a full list of current animations and a guide on how to use the library and add the animations to your own code.

This library is currently still a work in progress so please continue to check back for updates and new animations.

<h2 align="center">How to use</h2>
To use any animation from the collection copy the code into your CSS file such as in the example below:

```css
@-webkit-keyframes enterRight {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

@keyframes enterRight {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

.selector {
  -webkit-animation-name: enterRight;
          animation-name: enterRight;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-timing-function: cubic-bezier(.64,.03,.39,1.49);
          animation-timing-function: cubic-bezier(.64,.03,.39,1.49);
}
```

Then change `.selector` to the `element`, `#id` or `.class` of the item you would like to animate.

Each animation can be customised and tweaked by changing the CSS properties such as `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-fill-mode` etc. You can also tweak colours, border-colours and anything else within your own stylesheet to truly customise your work.

**Due to the number of animations included and the size of the `movers.css` file, i recommend only adding the code for the animations that you wish to use to maximise performance and minimise any impact on loading time from an extra css file.**

<h2 align="center">Animations list</h2>

| Animations list   |                       |
| ----------------- | ----------------------|
| Entry Animations  |                       |
|                   | `Fade in`             |
|                   | `Enter from top`      |
|                   | `Enter from bottom`   |
|                   | `Enter from right`    |
|                   | `Enter from left`     |
|                   | `Rotate clockwise`    |
|                   | `Rotate anticlockwise`|
|                   | `Shrink and fade in`  |
|                   | `Grow and fade in`    |
|                   | `Flip`                |
|                   | `Flip alternate`      |
|                   | `Hinge up left`       |
|                   | `Hinge up right`      |
|                   | `Hinge down right`    |
|                   | `Hinge down left`     |
|                   | `Enter top left`      |
|                   | `Enter top right`     |
|                   | `Enter bottom left`   |
|                   | `Enter bottom right`  |
| Exit Animations   |                       |
|                   | `Exit top`            |
|                   | `Exit bottom`         |
|                   | `Exit right`          |
|                   | `Exit left`           |
|                   | `Fade out`            |
|                   | `Giant fade exit`     |
| Special Animations|                       |
|                   | `Shake horizontal`    |
|                   | `Shake vertical`      |
|                   | `Mad shake`           |
|                   | `Swing right`         |
|                   | `Swing left`          |
|                   | `Color Shift`         |
|                   | `Shape shift 1`       |
|                   | `Pendulum`            |
|                   | `Rocking`             |
|                   | `Elastic 1`           |
|                   | `Elastic 2`           |
|                   | `Suprise`             |


<br>
<h3 align="center">Enjoy! :)</h3>
