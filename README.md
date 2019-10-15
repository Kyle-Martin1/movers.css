<h2 align="center">Movers.css - CSS-Animations library</h2>

![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-Green.svg) [![Chat](https://img.shields.io/badge/Chat-Gitter-Purple.svg)](https://gitter.im/movers-css/community)

`movers.css` is a collection of CSS based animations designed to make life easier! Please see below for a full list of current animations and a guide on how to use the library and add the animations to your own code.

<h2 align="center">How to use</h2>

There are three main ways to use the `movers.css` library:
- Install via NPM and add the link to the HTML head tags
- Clone the library and add the link the the HTML tags
- Copy the code from the library and insert directly into your project CSS file and HTML

<h2 align="center">Npm</h2>

Install the movers.css package via npm
```
npm install movers.css --save
```
Then link the `movers.css` file in the head of your HTML
```html
<head>
  <link href="node_modules/movers.css/movers.css" rel="stylesheet">
</head>
```
Add the animation class to the element you wish to animate
```html
<div class="helloWorldContainer fadeIn">
  <p>Hello World</p>
</div>
```
<br>

<h2 align="center">Clone</h2>

First clone the library from GitHub
```
git clone https://github.com/Kyle-Martin1/movers.css.git
```
Then link the `movers.css` file in the head of your HTML
```html
<head>
  <link href="../movers.css/movers.css" rel="stylesheet">
</head>
```
Add the animation class to the element you wish to animate
```html
<div class="helloWorldContainer fadeIn">
  <p>Hello World</p>
</div>
```
<br>

<h2 align="center">Copy</h2>

The other way to use any animation from the library is to copy the code into your CSS file such as in the example below:

```css
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-fill-mode: backwards;
          animation-fill-mode: backwards;
}
```

Then add the animation class (e.g `.fadeIn`) to the `element` of the item you would like to animate.

<h2 align="center">Customisation</h2>

Each animation can be customised and tweaked by changing the CSS properties such as `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-fill-mode` etc. You can also tweak colours, border-colours and anything else within your own stylesheet to truly customise your work.

<br>

<h2 align="center">Animations list</h2>

| Animations Class list   |                             |
| ----------------------- | ----------------------------|
| Entry Animations        |                             |
|                         | `.fadeIn`                   |
|                         | `.enterTop`                 |
|                         | `.enterBottom`              |
|                         | `.enterRight`               |
|                         | `.enterLeft`                |
|                         | `.rotateClockwise`          |
|                         | `.rotateAntiClockwise`      |
|                         | `.shrinkAndFadeIn`          |
|                         | `.growAndFadeIn`            |
|                         | `.flip`                     |
|                         | `.flipAlternate`            |
|                         | `.hingeUpLeft`              |
|                         | `.hingeUpRight`             |
|                         | `.hingeDownRight`           |
|                         | `.hingeDownLeft`            |
|                         | `.enterTopLeft`             |
|                         | `.enterTopRight`            |
|                         | `.enterTottomLeft`          |
|                         | `.enterBottomRight`         |
| Exit Animations         |                             |
|                         | `.exitTop`                  |
|                         | `.exitBottom`               |
|                         | `.exitRight`                |
|                         | `.exitLeft`                 |
|                         | `.fadeOut`                  |
|                         | `.giantFadeExit`            |
|                         | `.shrinkExit`               |
|                         | `.spinExit`                 |
|                         | `.spinShrinkExit`           |
| Special Animations      |                             |
|                         | `.shakeHorizontal`          |
|                         | `.shakeVertical`            |
|                         | `.madShake`                 |
|                         | `.swingRight`               |
|                         | `.swingLeft`                |
|                         | `.fontColorShift`           |
|                         | `.bgColorShift`             |
|                         | `.shapeShift1`              |
|                         | `.pendulum`                 |
|                         | `.rocking`                  |  
|                         | `.spinRightLeft`            |
|                         | `.rockLeft`                 |
|                         | `.rockRight`                |  
|                         | `.elastic1`                 |
|                         | `.elastic2`                 |
|                         | `.pulse`                    |
|                         | `.suprise`                  |
|                         | `.moveSquare`               |
|                         | `.vibrate`                  |
|                         | `.focusLeft`                |
|                         | `.focusRight`               |
|                         | `.focusUp`                  |
|                         | `.focusDown`                |
|                         | `.vanishAppear`             |


<br>
<h3 align="center">Enjoy! :)</h3>
