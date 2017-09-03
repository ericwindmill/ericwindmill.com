---
layout: post
title:  "A Complete Guide to CSS Layout in 2017: Prereq: Display, Width, Box - Model"
date:   2017-08-24 09:10:08 -0700
categories: css front-end
type: article
front-page: true
permalink: blog/css-layout-0
---

When I first started learning CSS, my tactic was basically: try things and tweak things until it works. It usually took hours to make layouts work correectly. I would spend entire days just messing with flex-box. No matter how many times I read about flex-box preoperties, I would have issues. 

Then I realized that if I spent a bit of time understanding the basics of layout, then these problems would be much easier, and my tweaks to CSS would be based in intelligence.

Abe Lincoln once said "Give me 4 hours to chop down a tree, and I'll spend the first three sharpening the axe". (Or something along those lines). The point is, it's super beneficial to learn the foundation of CSS layout, even if most of your layout relies on modern properties. 

CSS layout has come a long way. Today, CSS 'frameworks' or libraries like Bootstrap and Foundation aren't necessary. Standard CSS provides us with multiple ways to make complex layouts fairly easily. In fact, I would say its easier to learn flex-box and grid than it is to learn Bootstrap. The blessing and curse of this is the variety of approaches one can take to create their layout. 

When referring to layout, I'm specifically talking about the size and positioning of different elements on a web page. Heights/widths, padding/margin, and display properties are essentially what I want to address. 

 The secret (and pain) of mastering layout in pure CSS is understanding nuance. Understanding when max-width will have an effect and when it won't is important. Similarly, some elements won't respect margins and some will. You will save yourself so much time and headache if you start to understand these nuances. 

This series of posts will cover the ins-and-outs of:
* The Basics and Beginnings of CSS Layouts 
* Margins, widths, and more basics.
* Positioning
* Floats
* The Table Hack
* Flexbox
* Grid
* When to Use What
* Combining Tools

## Layout Pre-Requisite: Display, Widths, and the Box Model.

### The Basics
Today, the CSS creators have given us some amazing tools, but once upon a time creating layouts was pretty hacky. But even before those hacks we had really basic webpages, that by today's standard had no layout at all. It was simply 'laid' out like the page of a book. The content flowed from left to right, top to bottom.

Much of the layout cusomization was done by using semantic HTML, and relying on the standard `display` properties of those HTML elements (such as `block`, `inline`, and `inline-block`.)

* `display: block` makes an element take up the entire width of its parent element. Therefor no other elements will be on the same line. Block ites respect margins and padding, and can have a width and height. Even when a width is set, the element still forces a link break.
* `display: inline` makes an element take up only the width that it needs, allowing multiple items to be horizontally aligned. These elements respect right and left margins, but not top and bottom, and you cannot set a height and width.
* `display: inline-block` is more or less a combination of the two. It doesn't force a line-break, so elements can sit at it's right and left, but in all other regards it's a 'block' level element.

<img src='http://res.cloudinary.com/ericwindmill/image/upload/v1503687483/blog_posts/Screen_Shot_2017-08-25_at_10.32.59_AM.png' style='margin:auto;display:block;' height='100px'>

Perhaps the first step to writing good CSS and semantic HTML is knowing each elements default display style. Here's a non-exhaustive list:
* `block`
  * `<article>`
  * `<aside>`
  * `<body>`
  * `<div>`
  * `<dl>`
    * `<dt>`
    * `<dd>`
  * `<figure>`
  * `<form>`
  * `<h1>` through `<h6>`
  * `<header>`
  * `<html>`
  * `<nav>`
  * `<ol>` and `<ul>`
  * `<p>`
  * `<section>`

* `inline`
  * `<a>`
  * `<q>`
  * `<span>`

* `inline-block`
  * `<img>`

* `none`
  * `<datalist>`
  * `<head>`
  * `<style>`
  * `<title>`


Good resources:
* [Exaustive list of default element values from W3Schools.](https://www.w3schools.com/cssref/css_default_values.asp)
* [Exaustive list of default display property values from MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

---- 


In addition to these, pre-layout web developers organized content using `tables` and `lists`. (While the internet would be a much more boring place if that's what we were still using, it would be refreshing to see HTML that was so semantic.)

Certain CSS properties and 'hacks' can be used with these standard elements in order to do some basic layout work. This includes manipulating the `margin` (specifically centering using `margin: auto`, and using the `align` property on images and tables (no longer supported)).

In addition to aligning elements, there's nuance in controlling widths and heights of elements. As mentioned, certain elements will respect some of these properties, and others won't. Making sure that your element takes up the proper space is one of the bains of my existence, so let's dive into that.

When thinking about width and height, there are a couple things to consider.
 * How do parent elements (or browser window) affect the width?
 * How does display property effect width options? 
 * Where do you want the item placed?
 * Box-model?
 * Cascades?

Unforuntataely, it's rarely as easy as setting: `width: 100%` and having an element that takes up all available space. And all of the above considerations can also effect positioning.

I'm going to break this down into the most important nuggets, because this could be an entire course on its own.
* Box-Model, Margins, Padding

  * All CSS layout theory is based on the foundation of the box-model. Every element rendered to the DOM is box.  The size of that box is based on the content within the tag + the `padding`, `border`, and `margin`. In the past, this meant that when laying out a page, you had to do math in order to account for the padding and margin of an element. Setting the `width` property simply maniupulates the content width.

  Open up your dev-tools, go to `elements` and click on `computed` and you'll see this:


<img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1503687474/blog_posts/CSSBoxModel.png' style='margin:auto;display:block;' height='300px'>

  This helpful thing is showing you the true size of your item, not the width or height you explicitly set.


  * `Padding` is the space in between the content and the border.
  *  `Border` is the physical border you can put around the conent and padding. Theoretically you can give it as much thickness as you'd like, but its generally not used to add significant size to an element.
  * `Margin` is the property that surrounds the border. I like to think about the element itself being content, border and padding, and the margin being the the elements 'personal' space. It's important to note that in different situations margin may or may not collapse! Check out this example of both collapsing and non-collapsing margins.
  * `box-sizing: border-box` is a property added later to CSS that makes the box-model more intuitive. Remember when I said that I like to think of the element itself as the content, padding and border? That's exactly what the `border-box` fix does. It's used very, very often.

<img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1503687474/blog_posts/CSSBoxBoxModel-BordeRBox.png' style='margin:auto;display:block;' height='300px'>


* Width
  * Width is pretty self-explanitroy *at first*. Simply set `width: auto | 10px | 10%` etc, and your element will take that width. 
  * Explicit widths are *super* self explanitory. `10px` is `10px`. No tricks here.
  * Percentage widths are fairly straight forward. You need only consider the percentage of *what?*. The parent element. So a `<div style='width:50%>` nested in a `<div style='width: 500px'>` will have a width of 250px. The only catch is in absolutely positioned elements. The child of an absolutely positioned item will take the width of the <strong>padding-box</strong>. This may sound crazy, but we'll look into positioning more later.
  * `width: auto` is very similar to `width: 100%` except that adding margin will not add extra width, but rather shorten the width of the content. The 100% part refers to the <strong>content</strong> of the element, without regard to its padding, margin, and border.
* Max and Min Width
  * `max-width` and `min-width` are easy enough. And extremely useful.
  * It's first worth noting that these properties override the `width` property.
  * min and max width are both useful when working with responsive layouts. Later, when we talk about flex and grid, you'll see how useful they can be. Essentially, though, elements with % widths will change width based on parent element (or browser window size). But and element that's supposed to be 50% would look ridiculously different on a tablet compared to large monitor. So you may want the element to stop changing size based on certain screen sizes. 

  

<p data-height="188" data-theme-id="0" data-slug-hash="BdOopG" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="min-max-width" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/BdOopG/">min-max-width</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


* `margin: auto` trick
  * This is a seriously useful trick, but its not without it's issues. Basically, if you give an element a width, and then set its margin to `auto`, it will automatically put equal margin on both the right and left. You just centered an element.
  * This only works on block-level elements. Which makes sense, because an inline element can't be given a width.
  
*The above CodePen uses margin-auto if you'd like to check it out.*

--- 
*Checkout the other guides in this series:*
* [Layout 101: Floats, Tables, Display](/blog/css-layout-1) 
* [Layout 201: Intro to Flexbox](#) *coming soon*
* [Layout 202: Intro to CSS Grid](#) *coming soon*
* [Layout 301: Choosing the Right Tools](#) *coming soon*
* [Layout 401: Combining the Tools for the Modern Layout](#) *coming soon*


