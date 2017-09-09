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

<p data-height="350" data-theme-id="0" data-slug-hash="gxEJwj" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="Flex-Tut: display: flex" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/gxEJwj/">Flex-Tut: display: flex</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


**What's actually happening here?** Setting `display: flex` creates a flexible element whos width is 100% (like a block element), and whos height is as tall as it needs to be to fix the content. It also automatically makes the children 'flex items', which we'll learn how to manipulate a little later on.

As I mentioned, `display: inline-flex` also exists. It's the same as `flex`, except the flex-container is made an inline-element, so the width takes up only as much space as it needs, and it doesn't force a new line-break.


<p data-height="350" data-theme-id="0" data-slug-hash="zdbVrp" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-tut: display: inline-flex" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/zdbVrp/">flex-tut: display: inline-flex</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
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

<p data-height="400" data-theme-id="0" data-slug-hash="XaQJRQ" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex axis and direction" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/XaQJRQ/">flex axis and direction</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


The directions of the axes is the base for all the flex properties. At anytime if you're getting guff from flex, it helps a lot to stop and think about what your axis is.



-----
# 2: flex-wrap

You can probably guess what 'wrap' does. It allows elements to wrap. I would argue that it's more important to understand how the elements behave when wrap is set to `nowrap`, which is the default. 

Wrap comes into play when your flex-items are combined to be wider than your flex-container. This is true even if you explicity set a width on your items!

`flex-wrap` takes one of three values:
  * `no-wrap` (default)
  * `wrap`
  * `wrap-reverse` (more on this later)

When you set `flex-wrap: wrap`, the elements will respect their width, and wrap into as many rows as needed to fit all elements. 

The wrap changes when you change `flex-direction` to `column`. As you'd expect, the flex-items now wrap into columns. 

<p data-height="400" data-theme-id="0" data-slug-hash="qXeBZr" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-wrap" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/qXeBZr/">flex-wrap</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In this codepen I've set the `height` and `width` to `100px` for all flex-items, but the container `width` is only 500px. First, if you toggle `wrap` you can see how the width declaration on the items isn't respected unless wrap is set. The same goes for when you switch the axis using `flex-direction`.

There are two important points here: First, theres further explanation and exampels of how the axes work. This is *everything* in flexbox! Second, flex is (obviously) short for 'flexible'! So, you should expect items to behave in a flexible way unless you tell flex not to. 

Finally, we have wrap-reverse. Go ahead and toggle Wrap/Wrap-Reverse on in this CodePen:

<p data-height="400" data-theme-id="0" data-slug-hash="qXeBmj" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="qXeBmj" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/qXeBmj/">qXeBmj</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

`Wrap-reverse` reverses the *cross-axis*. If you toggle wrap and wrap-revese, you'll see that the the items are, in a way, backwards. I like to think of it like a book. If `flex-direction` is set to `column`, and then you apply wrap-reverse, the pages will still read top to bottom, but you'll read from right to left. 

---
# 3: flex-flow

There is a shorthand for combining flex-direction and flex-wrap. It's called `flex-flow`.

`flex-flow` can take any direction or wrap property on its own, or you can use both by putting the direction first, followed by the wrap value you want to use. All of the following are valid:

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
```

This information is plucked right from [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow).

---


# Termiology Aside: Flex-Item alignments

Before you learn about Alignment, you need to know the lingo. There are several alignment values that the properties can take. When we get to the individual properties we'll explore which property accepts which values. But here's the terminology and the primer:

First, lets explore `center`, `flex-start`, and `flex-end`

Let's use this as a set-up:

```css

.container {
  display: flex;
  width: 900px;
}

.flex-item {
  width: 200px;
}

```

* `center` is the center of a container
* `flex-start` is the beginning of the main axis
* `flex-end` is the end of the main axis

![flex alignment values](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908728/blog_posts/alignment_props_row.png)
![flex alignment values](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908723/blog_posts/alignment_props_col.png)


And, next we have `stretch`, `space-around` and `space-between`. These will definitely change depending on what alignment property you're using, but the concept remains constant.

![flex alignment values](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908734/blog_posts/justify_props.png)

* `stretch` will stretch out all of the flex items to ensure that they take up the space needed.

* `space-between` will respect all widths, and then evenly distribute the remaining space between each item.

![flex space-between](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504909536/blog_posts/justify_props-between.png)

* `space-around` will respect all widths, and then evenly distribute the remaining space between each item AND put 1/2 the space around the edges.

![flex space-around](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504909541/blog_posts/justify_props-detail.png)

There's one other value, `baseline`, but it only applies to one property, so we'll see it later.

---
# Alignment: Justify-Content

Alignment in flex is really the main learning curve, and its mostly a matter of knowing your options. One of the properties you'll use almost every time you use flex is `justify-content`. 

Justify-conent takes 5 possible values, which are all easy enough to work with in a basic case. 

<p data-height="400" data-theme-id="0" data-slug-hash="jLgBxm" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex: justify-content" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/jLgBxm/">flex: justify-content</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


But, things can get hairy when we toss in other factors, like setting ` { flex-direction: column }`. Again, it all comes down to the axes switching. Every property in flexbox alignment works along a certain axis. Justify-content works along the **main** axis. In the example above, when you have no choice in changing the axis, so you can see the changes it makes the contents justification.

In this pen, though, you'll notice that when you toggle the direction, it just breaks. No matter which value you choose, the elements don't budge. 

<p data-height="400" data-theme-id="0" data-slug-hash="oeKZOr" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="justify-content w/ direction" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/oeKZOr/">justify-content w/ direction</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


Let's think about what's actually happening here. 
* First, the axis is switching. That's the main idea behind switching the direction from row to column.
* When the axis switches, the property `justify-content` is now dictating where the items are painted from top to bottom, rather than side to side.
* Flex containers are *flexible*, so the container is resizing to fit all the content.
* The width of the content is greater than the width of the container, so there's no extra space to distribute. So, no matter what value you pass to `justify-content`, the content is taking up 100% of the available space. Justification is all about the relationship between the items and the white space. 

This becomes clearer when you toggle on an explicit height for the flex-container.

<p data-height="400" data-theme-id="0" data-slug-hash="EvqmZz" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="justify-content-3 (height)" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/EvqmZz/">justify-content-3 (height)</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


---
# Alignment: Align-Items

I like to think of `align-items` as the cross-axis equivelent of `justify-content`. 

Align-items takes 5 values:
  * stretch (default)
  * center
  * flex-start
  * flex-end
  * baseline (we'll cover this in a bit...)



align items is more concerned with cross axis.
by default, align-items: center wont do anything. It will if you give the parent containter height.

baseline is different. it makes sure that the baseline of the content is aligned. Extremely handy if you have different size fonts you want to align.



---
# Alignment: Align-Content
# Alignment: Align-Self
# Flex-Items: Order
# Flex-Items: Flex (intro)
# Flex-Items: Flex-Basis
# Flex-Items: Flex-Shrink (intro)
# Flex-Items: Flex-Grow (intro)
# Flex-Items: Flex shorthand
# Flex-Basis and Wrap together
# Masonry Layout
# Vertical Masonry!
<!-- 

IDEA: At the beginning of each property, give a quick API and image, then proceed with the explanation and codepen...
points:
* It's available in ALL browsers [http://caniuse.com/#feat=flexbox]
* React-Native has their own implementation that's very similar. So if you're planning on being part of the mobile future, flex is a great thing to master.
* 1d layouts
* margins + width is important think about iwth flex!



  * this vision means that the overall lesson should be broken up into minii lessons:

  ##Lessons
  * one: set up and display: felx
  * two: flex-direction / cross axis and main axis
  * three: flex-wrap.
  * five: alignment  justify content 
  * sxc: align item
  * four: flex ordering (maybe shift to later)



  * masonry
  * bonus: vertical masonry!


----- What the flexbox notes:

vid 4: ADD TO END
order: takes a number.
- it works similarly to Z index (the way numbers work, anyway)
    default order is 0 on ALL!
* so, if you set box 3 to order: 1, its moved to the end.
* this is useful for responsive design. It allows you to take things out of DOM order.


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
 -->
