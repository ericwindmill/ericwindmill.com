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


Flex-box is available in [ALL browsers](http://caniuse.com/#feat=flexbox).


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

![axes on flex-direction: row](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504824862/blog_posts/Artboard.png)

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
![axes on flex-direction: column](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504824860/blog_posts/flex-direction_column.png)

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

* flex-start
* center 
* flex-end
* space-around
* space-between

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

I like to think of `align-items` as the cross-axis equivelent of `justify-content`. (Technically, that isn't true, because `align-content` is the opposite, but `align-items` is the property that you'll use to manipulate the cross axis the most.)

Align-items takes 5 values:
  * stretch (default)
  * center
  * flex-start
  * flex-end
  * baseline (we'll cover this in a bit...)

<p data-height="400" data-theme-id="0" data-slug-hash="JygJbE" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="align-items" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/JygJbE/">align-items</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

All of these values are pretty self-explanetory, but there is caveate worth mentioning. `Stretch` only works if there isn't an explicit height set. If there is, it basically does what `flex-end` does. If you're ever having trouble with stretch *not stretching*, that's the first thing I'd check for.

Another common 'gotcha' is that the parent container has to have height in order for `align-items` to work. Otherwise, theres no white-space to interact with.

---
# Alignment: Align-Items: Baseline

The value `baseline` for `align-items` isn't used often, but when you need it, it's a life-saver. It aligns all the items according the base of their content. Think about the CSS box-model.

// box model pic

The bottom of the 'content' portion of an HTML element is how baseline aligns. As far as their position within the container, they're aligned so that the tallest element is flush to the flex-start.

<p data-height="400" data-theme-id="0" data-slug-hash="BdXZmv" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="align-items-2 (baseline)" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/BdXZmv/">align-items-2 (baseline)</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



---
# Alignment: Align-Content

`Align-content` is the true opposite `justify-content`. It takes the same five properties as `justify-content`, and distributes the items among the cross-axis. 

* flex-start
* center 
* flex-end
* space-around
* space-between

For this exercise, forget about flex-direction. For the sake of simplifying explanation, we're only concerned with 'row', for now. 

The difference between `align-content` and `align-items` is that `align-content` basically requires wrapping *and* that the container has a height greater than the total height of the rows. 

Think about it like this: *Content* implies that it's manipulating the entirety of the items as a group *and their relationship to eachother*, where *items* implies that it's just manipulating the individual items.  The following Codepen already has `flex-flow` set to `wrap`and explicit height. If there was no wrapping, flexbox wouldn't know how to distribute the white-space, because the content *as a whole* is being manipulated. If there's only one row, then you're actually concerned with `align-items`.

This is kind of a wonky concept to explain, but it's made much easier if you can see it:

<p data-height="400" data-theme-id="0" data-slug-hash="MvNoGa" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="align-content" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/MvNoGa/">align-content</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If you did want to switch the `flex-direction` to `column`, align-items would work the same way, but obviously on the opposite axes.

----
# Alignment: Align-Self

Align-self is the first property that we'll explore which is on the flex-item, rather than the container.

It's pretty simple. It overwrites the `align-items` property for individual items. It takes the same possible values. 

  * stretch (default)
  * center
  * flex-start
  * flex-end
  * baseline


<p data-height="400" data-theme-id="0" data-slug-hash="prMrgE" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="align-self" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/prMrgE/">align-self</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---
# Flex-Items: Order

Alright, now we're moving onto properties that live completely on flex-items. 

First we'll talk about `order`, something that isn't used terribly often (as far as I know), but it's extremely useful when you need it. Simply, giving a flex-item an `order` allows you to change the order that the flex-items appear to be painted onto the DOM (*without Javascript!*). 

I said **appear** and it's an important distinction. If you pop open the dev-tools, you'll see that the items still appear in order in the DOM. There's only one thing that this affects that I'm aware of. If you try and copy and paste anything, it will copy things in their true order. Luckily, the main purpose of this that I'm aware of removes a majority of the copy+pasting that'll be going on in your web app.

`Order` works like z-index. By default, everything is set set to 0. Then, if you change a single items `order` to 1, it will become the *last* item. 

The best use of this, or the only one that I've ever needed it for, is when making pages responsive. Sometimes you'll want sections of text or images painted in a different order on mobile and desktop. This is now easily done without a bunch of hacks or JavaScript. 

<p data-height="400" data-theme-id="0" data-slug-hash="rzXYeV" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-item-count" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/rzXYeV/">flex-item-count</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---
# Flex-Items: Flex (intro)
`flex` is the most useful of the flex-item properties. It's actually a shorthand for three properties: `flex-basis`, `flex-grow` and `flex-shrink`. 

These properties are more or less to control the size of the flex-item in relationship to the other flex-items. Using these properties you can accurately control the size of your items in arbitrarily different sized windows. 

When setting flex properties, the golden question is, 'how do I want these items to be laid out when I have extra or not-enough space?

The names are telling of what the properties do:
* `flex-basis` sets the base size for a flex-item. 
* `flex-grow` dictates how much flex-items grow in relationship to eachother when the view port is larger than expected.
* `flex-shrink` dictates how much flex-items shrink in relationship to eachother.

---
# Flex-Items: Flex-Basis

`flex-basis` sets the starting width. The point of all the `flex-*` properties is to account for different sized containers, but `flex-basis` is used to account for the *ideal* situation. If you know exactly how much space you have, what should the size of this flex-item be? 

`flex-basis` takes any value that you could pass to a value like width. ems, rems, px, % are all fair game.

When you don't use `flex-basis` on your items, it falls back to `auto`, which is what you've seen throughout this guide.

If you set the `flex-basis` on one or some (but not all) of your flex-items, the items with explicit basis will take up that much room, and all the other items are implicity set to 'auto', so they'll be distributed the remaining space by flexbox.


<p data-height="400" data-theme-id="0" data-slug-hash="mMNpMZ" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-basis" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/mMNpMZ/">flex-basis</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


What if there isn't enough room for all explicit `flex-basis` declarations? That'll come together next, on `flex-grow`...

---
# Flex-Items: Flex-Grow (intro)

`Flex-grow` dictates how much of the extra-space an individual item will be allotted. Remember that `flex-basis` is based on an 'ideal' situation where you know exactly how much space you have. `flex-grow` considers the situation where you have *more* space than you expected. 

`flex-grow` properties are based on proportions. A item with `flex-grow: 2` will grow at twice the rate of an item with `flex-item: 1`.

```css
  .flex-item-1 {
    flex-grow: 1;
  }

  .flex-item-2 {
    flex-grow: 2
  }
```

By default, all items have a `flex-grow` of 0, which means they don't grow when the container element is larger than expected. If you give a single item a `flex-grow` of 1, then it will grow, while everything else will remain unchanged:

<p data-height="400" data-theme-id="0" data-slug-hash="prMpWe" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-grow" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/prMpWe/">flex-grow</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

That's the simplest way to use to `flex-grow` -- to make some items grow and some remain the same. But the sky's the limit when it comes to setting flex-grow.

<p data-height="400" data-theme-id="0" data-slug-hash="VzoEOP" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-grow 2 (ratios)" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/VzoEOP/">flex-grow 2 (ratios)</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---
# Flex-Items: Flex-Shrink (intro)

`flex-shrink` is essentially the opposite. What happens when you have *less* space than ideal?

The default is `1`, and the values are proportion-based as they are in `flex-grow`

```css
  .flex-item-1 {
    flex-shrink: 1;
  }

  .flex-item-2 {
    flex-shrink: 2
  }
```

This can be counter-intutive, because higher-numbers make for smaller elements. A good way to think about it is: 'How much of this element should I give up if we don't have enough space?" An item with a flex-shrink of `2` will give up twice as much of itself as an item with the flex-shrink of `1`.

In this example, you can see that as as there is extra space, all the flex-items take the space evenly *except* for the item who's `flex-shrink` is 2. 


<p data-height="400" data-theme-id="0" data-slug-hash="gxVQMe" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-shrink" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/gxVQMe/">flex-shrink</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> 



---
# Flex-Items: Flex shorthand

Let's get back to the `flex` property. This can be used short hand for `flex-grow`, `flex-shrink` and `flex-basis`.

The flex property is pretty... flexible... in what it accepts as properties.

```css 
/* Explicitly set all three:
  flex-grow | flex-shrink | flex-basis
 */
.flex-item {
  flex: 1 2 10%;
}

/* One value, unitless number: flex-grow */
.flex-item {
  flex: 1;
}

/* One value, width/height number: flex-basis */
.flex-item {
  flex: 2.5em;
}

/* Two values: unitless number: flex-grow | unitless number: flex-shrink */
.flex-item {
  flex: 1 2;
}

/* Two values: unitless number: flex-grow | width/height number: flex-basis */
.flex-item {
  flex: 2 2.5em;
}
```


Remember that the default values for all three properties are set to (in `flex` terms) `1 0 auto`. So setting `flex: 1` is shorthand for `flex: 1 1 auto`. Another way to write that shorthand would be write `flex: auto`. There a handful of values that [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) refers to as 'basic values'. "For most purposes, authors should set flex to one of the following values: auto, initial, none, or a positive unitless number." - [MDN Web docks](https://developer.mozilla.org/en-US/docs/Web/CSS/flex). 


```css
.flex-item {
  flex: auto;
  /* Equivelent to 1 1 auto. 
      The item is sized according to its height and width, but absorbs extra space when space is given by flex.*/
}

.flex-item {
  flex: initial;
  /* Default value. 
    Equivelent to 0 1 auto. 
    The item is sized according to its height and width, but doesn't grow. It wil shirnk to the size of it's inner conent if necessary*/
}

.flex-item {
  flex: none;
  /* Equivelent to 0 0 auto. 
    The item is sized according to its height and width, but isn't flexible at all. */
}

.flex-item {
  flex: <positive number>;
  /* Equivelent to <positive number> 1 0.
    The item starts off by receiving it's portion of the extra space.
  */
}

```
I personally most often use `flex: positive number`, but I do think it's incredibly valuable to know these `flex` values well. 

--- 
# The Flex Property and Flex-Wrap together

When there are multiple rows (or columns) of flex items (because of `flex-wrap`), all three of the `flex` properties only work in relationship to the flex-items on the same row as them.

This is one of the most powerful aspects of flexbox. Your flex layout will look good regardless of the viewport size (in theory, of course).

In this simple codepen, you'll see that if you increase flex-grow, it only affects the row that the current element is on.

<p data-height="400" data-theme-id="0" data-slug-hash="MvNzXa" data-default-tab="result" data-user="ericwindmill" data-embed-version="2" data-pen-title="flex-wrap / flex" class="codepen">See the Pen <a href="https://codepen.io/ericwindmill/pen/MvNzXa/">flex-wrap / flex</a> by Eric Windmill (<a href="https://codepen.io/ericwindmill">@ericwindmill</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<!-- ---
# Practical Examples: Nav Bar
# Practical Examples: Modal Positioning
# Practical Examples: Responsive Ordering
# Practical Examples: Forms -->

---  
*Checkout the other guides in this series:*
* [Layout Prereq: Display, Width, BoxModel](/blog/css-layout-0) 
* [Layout 101: Floats, Tables, Position](/blog/css-layout-1)
* [Layout 202: Intro to CSS Grid](#) *coming soon*
* [Layout 301: Choosing the Right Tools](#) *coming soon*
* [Layout 401: Combining the Tools for the Modern Layout](#) *coming soon*

---