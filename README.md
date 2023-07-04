# anime.js
JavaScript Animations with Anime.js
# Exploring Anime.js with an example site animation project

### What is Anime.js?

- Anime.js is a lightweight library with over 43k starts on github that animates CSS attributes, DOM elements, and SVG on a webpage. Creating site animations is an easy process with Anime.js.
- This library possesses a built-in staggering system that generates ripples and reduces the complexity of overlapping animations. You can use it to create simple and complex animation effects of your choice, synchronize multiple instances and control all animation features.

### Understanding Anime.js properties

- Targets refer to the element or elements we want to animate. These could be CSS selectors such as a div, class, or id, DOM nodes or node arrays, or simple JavaScript objects. It is also possible to use a combination of the aforementioned in an array.
- Properties specify which visual aspects of an element should be animated, such as its color, size or position. We can define the properties to be animated using the following types of data:
  1. **Standard CSS properties**, such as _color_ or _font-size_.
  2. **CSS transform properties**, such as _rotate_ or _scale_.
  3. **Object properties**, such as the properties of a JavaScript object.
  4. **DOM attributes**, such as the value attribute of an input element.
  5. **SVG attributes**, such as the points attribute of a circle element.
- It is important not to confuse property parameters with properties in Anime.js. While properties refer to the visual aspects of an element that we want to animate, property parameters are settings that we define for the properties, controlling how the animation should behave. Examples of property parameters include the _duration_ of the animation, a _delay_ before the animation starts, and the _easing_ function to use.
- Animation parameters in Anime.js are used to control the _direction_, _loop_, and _autoplay_ behavior of the animation before and after it plays:
  1. _direction_ specifies whether the animation should play forward or backward.
  2. _loop_ specifies the number of times the animation should repeat, or if it should loop indefinitely.
  3. _autoplay_ determines whether the animation should start automatically when it is created.

### How to set up Anime.js for your project

- You can set up Anime.js by downloading the library directly, installing it with an npm command, or via a CDN.
- If you are downloading the library from the Anime.js website, include the Anime.js JavaScript file in your HTML code, like so:
    <script src="path/to/anime.min.js"></script>
- The **Node Package Manager(npm)** is another option. If you use npm, the script will be located in node modules/animejs/lib/anime.min.js
  **_$ npm install animejs --save_**
- Another option is to utilize the most recent release of the library provided on CDN:
    <script src="https://cdnjs.cloudflare.com/ajax/lib/animejs/3.2.1/anime.min.js"></script>

### Benefite of Anime.js

- To start with, it is quite simple to use. Everything is based on a single function call, and you only need to feed parameters into it, which is incredibly convenient.

### Anime.js Documentation
<a href="https://animejs.com/documentation/">Anime.js Documentation</a>
