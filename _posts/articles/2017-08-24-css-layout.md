---
layout: post
title:  "A Complete Guide to CSS Layout in 2017"
date:   2017-08-24 09:10:08 -0700
categories: css front-end
type: article
front-page: true
permalink: blog/css-layout
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

 // Image of p element variation.

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


[Click here for an exaustive list of default element values from W3Schools.](https://www.w3schools.com/cssref/css_default_values.asp)


[Click here for an exaustive list of default display property values from MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

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

  **box model**

  This helpful thing is showing you the true size of your item, not the width or height you explicitly set.


  * `Padding` is the space in between the content and the border.
  *  `Border` is the physical border you can put around the conent and padding. Theoretically you can give it as much thickness as you'd like, but its generally not used to add significant size to an element.
  * `Margin` is the property that surrounds the border. I like to think about the element itself being content, border and padding, and the margin being the the elements 'personal' space. It's important to note that in different situations margin may or may not collapse! Check out this example of both collapsing and non-collapsing margins.
  * `box-sizing: border-box` is a property added later to CSS that makes the box-model more intuitive. Remember when I said that I like to think of the element itself as the content, padding and border? That's exactly what the `border-box` fix does. It's used very, very often.

  **border box** 

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


----

## Layout 101: Floats, Table Hacks, and `position`

With a little knowledge of exactly how CSS elements *sizing* works, we can finally get into the meat. How do we manipulate and elements position on a page? With so many different screen sizes and devices, accessibility, and responsive design at play, this question is ultimately not easy. In a boring world where there was only one screen size, you could realistically just use `position` in order to display a page *exactly* how you'd want. (But this isn't a boring world.)

### `position`

The next step in understanding layouts, then, is understanding the `position` property. The position property is basically used to define **exactly** where you want an element to be. Using different values for this property, you can set the position relative to its containing element, or to the browser window. The position element allows you to make something stick to the window, and doesn't respect scroll. It also allows to create complete overlays and cool features like parallax.

The most important thing to remember about positioning is that it effects the flow of the document. If you position something absolutly or fixed, it's removed from the normal flow and basically sits above the rest of your content. So, if the content around the element changes, the element itself won't. And vise versa. 

The values that `position` accetps are:
* static
* relative
* absolute
* fixed
* sticky

* `position: static` is simply the default value. It places the element in the normal 'flow' of the document. I can't think of a reason that you'd ever want to explicity set `static`. 
* `relative` places the element relative to its normal position. Essentially, if you set an elements position to relative, you can now use the properties `left`, `right`, `top`, and `bottom` on it. So you can move it 20px to the left of where it should be by setting `left: 20px`. This isn't what it's most commmonly used for though...
* `absolute` sets the element relative to its first ancestor which is not static. In laymens terms, if you set an element's position to `absolute` and also give it `left: 20px`, it will be painted 20px to the left of its closest ancestor with a `position` that's been explicity set (and not to static) * aside: Most often, you'll see `relative` put on an element simply to act as an anchor for it's absolutely positioned child. Positioning can cause major headaches when you're setting position to `absolute` without first deciphering what the anchor element is. In some cases, you may want a deeply nested element to be positioned relatively to the `body` tag, but that's rare. It usually best practice to position something relative to its direct parent. 
* `fixed` is like absolute, except that it's positioning is always relative to the browser window. so `left: 50px` places the element 50 pixels to the left of the very left of the screen. `Fixed` elements do not scroll with the page. An elemnt that's at `top: 0, left: 0` will stay fixed in the top-left corner. 

The above properties are used often in layouts. Its worth noting that when using positioning you can use values other than `px`. It's also worth nothing that using percentages and `ems` can get tricky with absolute and fixed elements. You've been warned!

The last position property is new, and awesome, but not  widely supported yet. Here's the breif rundown:

#### `position: sticky`

Often websites may want an element to switch between `relative` and `fixed` based on users scroll position. Check out this demo from MDN:

`demo`

The standard way to make this happen is to use Javascript to change the `position` property based on the users scroll position. It isn't necessarily difficult, but it does take a bit of know-how. `sticky` basically implements this for us.

As of writing (August 2017), this feature is supported in Firefox, Chrome, Safari, Opera, Edge (16 only), and iOS Safari. It has no IE support. [Complete support list](http://caniuse.com/css-sticky/embed/)

Checkout my entire post and demo of `position: sticky` here.

#### `translate: transform`

The last useful nugget with positioning that I want to throw in is using `transform: translate()`. You may have used `left` or `top` in the past with a positioned element and found something about it annoying. If you wanted to, say, get an element directly in the middle of the page, you'd have to do math. If you set `left: 50%` the element *begins* at the 50% mark. In otherwords, it's left most border will be placed at 50%. So now you have to do some calculations (either manually or using `calc()`) to make the center or the image positioned in the center of the parent element (or window). 

Or, you can use the `transform` property with the `translate` function as its value. Both `transform` and `translate` have many usecases, and I'd encourage you to checkout everything you can do with `transform`. But translate simply moves an object based on x and y axis. So `transform: translate(10px, 10px)` moves the x starting position of the forward 10px, and the y starting positon forward 20px. You can also use percentages with transform, and the percentages are relative to the *size of the element*. So a 10px x 10px div thats been translated `(-50%, -50%)` would be the same as translating it `(-5px, -5px)`. No more math with percentages and positioning.

(Okay, you may have to do some math, but not for this specific, but common need.)


### Floats

The first tool added to CSS specifically for creating better layouts was the `float` property. assigning any element the `float` property keeps it in the flow of the document and pushes it against the `left` or `right` of the containing element, depending the value you give it. It was originally designed to wrap text around tables and images, but developers being developers, they found ways to make it much more powerful. Floats can be used realistically to make entire web layouts.

Let's start from the beginning.

The `float` property accepts the following values:
* `left`
* `right`
* `inherit`

The values are pretty straight forward. A left-floated element sticks to the left of the page, a right to the right, none is default, and inherit makes the element take the value of its parent.

*** diagrams ***





You can't talk about floats without including `clear`. This property is used to control how other elements interact with floated properties. If you add `clear: left` to the next sibling of a property that's been floated to the left, the sibling will be forced to a new line.

The `clear` property accepts:
* `left`
* `right`
* `both`

*** diagramps ***
**also that super simple code pen to play with floats and clears.

Floats probably seem pretty easy thus far. And honestly... it seems easy to me right now, too. While writing this, I'm thinking 'How have I ever had problems with this?' But alas, there are some common problems.

The biggest problem comes into play when an element's size (usually height) is greater than it's containing element. Consider the original use of floats, wrapping text.

***Example image***

If the height of the text is less than that of the image, the image will bust out of the element, messing up the flow of the documnet. There are a couple ways to avoid the issue of clearing. The first, and best way is to simply use `clear`, but that only works if you know forsure what the next element it going to be, and if the page is more or less static. Here's a couple hacks:

* `overflow: hidden`
  * Setting the parent elements overflow to hidden does cause it expand to the height of the floats. Which is quite nice, but it can trigger unwanted scrollbars or hidden content depending on the browser. So it requires a lot of testing.
* `clearfix` hack
  * When I first got into CSS, before the flexbox days, some clever people came up with the `clearfix` hack. This hack has gone through a number of iterations in attempt to be supported by all browsers. It's an ugly hack, but a user would never know that the CSS was hacky, so its often used. 

This is the most modern verstion, and is supported by IE8 and up. 
```css
  .item:after {
    content: '';
    display: table;
    clear: both;
  }
```
This is the go-to hack at this point. It simply adds a tiny bit of content *after* the element, whos content is an empty string, so it's invisable. Empty string content isn't supported by older browsers,so you may have to add aditional properties for that. 

Floats come with quite a bit of 'gotchas' that are always hard to forsee, but not so hard to fix. It's always almost possible to acheive what you want, but you usually have to sarifice semantic HTML.

The good news is that you *never* have to use floats if you don't want to anymore. This was the first attempt at a powerful layout tool for CSS, but life is much better now.


### Table Hacks

In CSS2, we were given the ability to add `table` properties to any HTML container element. Which changed the game for CSS Layout. 

Essentially the table properties allow you to do what HTML table tags already could do. The compelling thing about having them as CSS properties (rather than HTML tags) is that we can use JavaScript (and Media Queries) to dynamically change the css properties to make interestesting and responsive layouts.

Here's a very simple example of using `table-cell` to make a row of columns. Toggling the button changes the elements from `display: block` to `display: table-cell`.

<p data-height="437" data-theme-id="0" data-slug-hash="QMVWBW" data-default-tab="css,result" data-user="ericwindmill" data-embed-version="2" data-pen-title="Table Hacks" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/QMVWBW/">Table Hacks</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


#### Advantages over Floats

The first big advantage here is equal height divs. Sizing elements properly is kind of nightmare when you're starting out with CSS layouts. It arguably gives me the most pain in the world of web development. Using tables for layout solves this problem with ease. Naturally, if you have a containing element set to `display: table` and the children set as `display: table-cell`, the cells automatically expand to fix the height of the table. It's a pretty sweet and easy way to solve this problem. 


<p data-height="438" data-theme-id="0" data-slug-hash="mMGyyg" data-default-tab="css,result" data-user="ericwindmill" data-embed-version="2" data-pen-title="Table Layout Pt 2" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/mMGyyg/">Table Layout Pt 2</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


You're probably starting to see how useful this would be to create layouts. Consider for a second that you needed a standard blogging layout: Header, Main section w/ a sidebar, and a footer. You could easily contol the layout of the main section and the sidebar with a `table` and `table-cell`s.

There are additional `table` rules that make this even more compelling. If you've ever worked with HTML tables, each different tag has a corresponding CSS property. 

``` css
{display: table} /* <table> */
{display: table-row} /* <tr> */
{display: table-header-group} /* <thead> */
{display: table-row-group} /* <tbody> */
{display: table-footer-group} /* <tfoot> */
{display: table-cell} /* <td>, <th> */
```

 

There area few more table properties, but these are the most important for layout. As you can imagine, you can use `table-header-group` and `table-footer-group` to manipulate a layout header and footer. So essentially, you can just wrap your page in a giant table and call it a day.

Thats not all. It's pretty damn easy to imagine how you could use media queries with table to make a responsive layout. Just look at that first codepen about tables. Remove the `table-cell` property under a certain screen size and boom, you've got a stacked layout perfect for mobile.

So right now you're probably pretty stoked. But unfortunately (and fortunately) we have to talk about why you wouldn't want to use tables for layout. 

#### The 'Gotchas'

* The first and most important: Using a table layout makes like hard for users with screen-readers. If you aren't worried about accessibility, there's an issue.. Semantic HTML matters and best practices matter.
* Page load times are generally slower. Tables usually require a bunch of markup. 
* Tables make redesign much harder. You're basically locked into using that table, or doing a complete redesign.

The HTML 5 spec says: 
 > Tables should not be used as layout aids. Historically, many Web authors have tables in HTML as a way to control their page layout making it difficult to extract tabular data from such documents. In particular, users of accessibility tools, like screen readers, are likely to find it very difficult to navigate pages with tables used for layout. If  a table is to be used for layout it must be marked with the attribute role="presentation" for a user agent to properly represent the table to an assistive technology and to properly convey the intent of the author to tools that wish to extract tabular data from the document.


### The Next Steps

So there we have it, folks. A simple intro into the CSS Layout tools of the past. Another title for this post could be 'Building a foundation so you can understand the tools you actually want' As you'll see in the next posts, CSS3 layout made a huge jump with Flexbox and Grid. They have a higher learning curve, but once you know them, they're super powerful.

--- 
*Checkout the other guides in this series:*
* [Layout 201: Intro to Flexbox](#)
* [Layout 202: Intro to CSS Grid](#)
* [Layout 301: Choosing the Right Tools](#)
* [Layout 401: Combining the Tools for the Modern Layout](#)

<!-- 
 thoughts: whats the thread or 'through line?' It should all be building up to using ALL of the power of CSS Layout, but before you can use it all together you have to learn the foundations. 

 Story / why people care / empathy => Once I was building a paralax effect, and failing miserably. At some point, it hit me: If I actually understood what was going on, maybe I wouldn't be spending hours guessing and checking.  -->


