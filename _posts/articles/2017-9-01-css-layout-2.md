---
layout: post
title:  "A Complete Guide to CSS Layout in 2017 - 201: Flex Box"
date:   2017-08-25 09:10:08 -0700
categories: css front-end layout
type: article
front-page: true
permalink: blog/css-layout-2
---

# Intro: What is Flexbox and Why Use Flexbox?
Flex has become the go-to layout tool for web developers. It's the first tool built into CSS that has all the tools you need to build entire layouts. 

It's also complicated and can be a real source of pain. Like most thing, I simply jumped into flex without trying to understand how it works. It's not until I went back and really paid attention that I realized how truly bad-ass it is.

Before learning flex, maybe you're asking *why*? Isn't it more trouble than it's worth? Is it supported widely enough? How much of a learning curve is it, really? 

My arguments for flexbox:
* It really is becoming *the* layout standard. You're bound to run into over and over again.
* It's the quickest way to go from brand-new-to-CSS to great layouts.
* It's so popular that it's the default display for all elements in React Native, which is probably going to be pave the way for the future of mobile development. If you're a new-ish developer today, you should have your eyes on mobile / React Native. It's the future (in my humble opinion).

In order to use flexbox, you kind of have to take all your knowledge about floats, percentages and previous layout tools and disregard them for a minute. That probably isn't too hard to do if you're learning CSS in 2017, because you may have jumped straight into advanced tools like flex and grid. I would actually argue that this is an advantage, but your ideas about layout may cause a mental hump.

Before flex, the `display` property was pretty straight forward. You most likely just used `block`, `inline block` and `inline`. Now, you can set a containers `display` to `flex` and `inline-flex`. These are entirely new ways to think about an elements role on a page. 


---
# 1: Set up and display: flex;

Before we learn about how to use flexbox, let's just take a look at the basic set up and `display: flex` property. Flexbox requires a certain format when setting up.

1. The basic set up it: you have a parent HTML element, which is the 'container'.  
2. Set the containers `display` to `flex`.
3. All of the *immediate* children are the 'flex-items'. They don't need any specific properties.

Click the 'Toggle Flex' button to add `display: flex` to the following container.

<p data-height="300" data-theme-id="0" data-slug-hash="gxEJwj" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="Flex-Tut: display: flex" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/gxEJwj/">Flex-Tut: display: flex</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


**What's actually happening here?** Setting `display: flex` creates a flexible element whos width is 100% (like a block element), and whos height is as tall as it needs to be to fix the content. It also automatically makes the children 'flex items', which we'll learn how to manipulate a little later on.

As I mentioned, `display: inline-flex` also exists. It's the same as `flex`, except the flex-container is made an inline-element, so the width takes up only as much space as it needs, and it doesn't force a new line-break.


<p data-height="300" data-theme-id="0" data-slug-hash="zdbVrp" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-tut: display: inline-flex" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/zdbVrp/">flex-tut: display: inline-flex</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

-----
# 2: Axes and flex-direction

This is perhaps the most important thing to understand to be able to work with flex effectively. The good news is, it's not a hard concept.

Flex is based on the idea that layouts are 2d, and there are two axis. The main-axis, and the cross-axis. By default, the main-axis is horizontal, and the cross-axis is vertical.

![axes on flex-direction: row](http://res.cloudinary.com/ericwindmill/image/upload/v1504824862/blog_posts/Artboard.png)

This photo is hopefully pretty easy to digest. There are no tricks here. Until you change the axis' directions with `flex-direction`. 

`flex-direction` is simply that, a property that allows you to switch the direction that flex items are laid out. By default, `flex-direction` is set to `row`. When set to row, the items are laid out side by side, forming... a row.

So far, this is our flex-box setup:
```css
  .container {
    display: flex;
    flex-direction: row
  }
```

But, you can change the flex-direction to `column`, and then the axes switch:
![axes on flex-direction: column](http://res.cloudinary.com/ericwindmill/image/upload/v1504824860/blog_posts/flex-direction_column.png)

```css
  .container {
    display: flex;
    flex-direction: column;
  }
```

In total, flex-direction has 4 possible values:
  * row (default)
  * column
  * row-reverse
  * column-reverse

The second two simply flip the order in which flex-items are laidout. This is easiest to imaging with images or a list. Reverse the order of the list without having to touch HTML or content!

<p data-height="358" data-theme-id="0" data-slug-hash="XaQJRQ" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex axis and direction" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/XaQJRQ/">flex axis and direction</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


The directions of the axes is the base for all the flex properties. At anytime if you're getting guff from flex, it helps a lot to stop and think about what your axis is.



-----
# 2: flex-wrap

You can probably guess what 'wrap' does. It allows elements to wrap. I would argue that it's more important to understand how the elements behave when wrap is set to `no-wrap`, which is the default. 

Wrap comes into play when your flex-items are combined to be wider than your flex-container. This is true even if you explicity set a width on your items!




---


points:
* It's available in ALL browsers [http://caniuse.com/#feat=flexbox]
* React-Native has their own implementation that's very similar. So if you're planning on being part of the mobile future, flex is a great thing to master.
* 1d layouts
* margins + width is important think about iwth flex!

* images:
  * basic terminology: 
    * items / parents
    * cross-axis v main-axis
    * all the parent properties
    * all the children properties
    *

* The vision:
  * For each property, have a codepen, much like gridbyexample
  * this vision means that the overall lesson should be broken up into minii lessons:

  ##Lessons
  * one: set up and display: felx
  * two: flex-direction / cross axis and main axis
  * three: flex-wrap.
  * four: flex ordering (maybe shift to later)
  * five: alignment --> justify content 
  * sxc: align item



  * masonry
  * bonus: vertical masonry!


----- What the flexbox notes:


vid 3:
flex-wrap: default - nowrap, wrap, wrap-reverse... it reverses the CROSS axis.
-if you give each item a width and its less than the width of the container, its going to give each box a smaller width so it all fits on one line.
- BUT if you set it to wrap, the boxes will respect it's given width.

-throw your idea of floats out in the way that it forces new lines if the boxes widths width is greater than the containers

vid 4:
order: takes a number.
- it works similarly to Z index (the way numbers work, anyway)
    default order is 0 on ALL!
* so, if you set box 3 to order: 1, its moved to the end.
* this is useful for responsive design. It allows you to take things out of DOM order.

vid 5: justify-content
  default: flex-start
    flex-end: puts it at the end of the main axic
    center: centers it in the main axix
    space-between: divy up the white - space equally.
    space-around: same but also adds space before and after. (1/2 of a normal white space column)

When you change the flex direction, it totally changes things. WTF?
When we switch the main-axis to column, justify-content doesn't really have an effect unless the total content height is less than the total size of the parent.

This is because flex alignment properties CHANGE with the direction. Justify always affects the main axis. 

vid 6: align-items
default: stretch
  * center
  * flex-start
  * flex-end
  * baseline

align items is more concerned with cross axis.
by default, align-items: center wont do anything. It will if you give the parent containter height.

baseline is different. it makes sure that the baseline of the content is aligned. Extremely handy if you have different size fonts you want to align.

vid 7: align content:
default: stretch. 
the difference between align content and justify content.
same choices as justify content.
align content takes the extra space on the cross axis.
align content only works when there are multiple lines of elements. So essentially there has to be wrapping.

vid 8: align self
align self overwrites the align-items for individual items.

vid 9: flex: 
What qustion does this property answer? 
 *  what do I do when I have extra space or not enough space?
flex: 1;

the flex property works by ratio. So a box with flex 2 will take twice as much space as the boxes with flex 1

* can take decimal points. all proportion. not pixels, percentages, etc.
* important: flex works with **extra** space. 
shorthand: 
flex: 1 1 200px;
grow, shrink, basis. 
vid 10:
flex: 1, flex-grow and flex-shrink to one.
flex-grow
  * if we have extra room.... do this.
  * default: 0; When there's extra room, don't do anything....

flex-shrink, 
  * if we have less than the ideal width, then do this.... 
  * default again is 0. 
  * shrink sets how much of myself should I give up in proportion to the other one.

flex basis.
  * sets the 'starting' width. 
  * 'in an ideal world, where we know exactly how much width we have, set it to this.'


  vid11:
  wrap and basis totgether:
  * when multiple rows exist (because wrap),
  flex-grow, shrnik and basis only work on the row that they're on. 
  Which is pretty insane and super helpful.

vid12:
browser support:

---  
*Checkout the other guides in this series:*
* [Layout Prereq: Display, Width, BoxModel](/blog/css-layout-0) 
* [Layout 201: Intro to Flexbox](#) *coming soon*
* [Layout 202: Intro to CSS Grid](#) *coming soon*
* [Layout 301: Choosing the Right Tools](#) *coming soon*
* [Layout 401: Combining the Tools for the Modern Layout](#) *coming soon*

