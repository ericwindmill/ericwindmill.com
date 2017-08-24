---
layout: post
title:  "A Complete Guide to CSS Layout in 2017"
date:   2017-08-24 09:10:08 -0700
categories: css front-end
type: article
front-page: true
permalink: blog/css-layout
---

CSS layout has come a long way. Today, CSS 'frameworks' or libraries such as bootstrap just aren't necessary. Standard CSS provides us with ways to make complex layouts fairly easily. The blessing and curse of this is the variety of approaches one can take to create their layout. 

CSS is always improving, like any web technology, which also gives us an issue. Its not enough to just know flexbox or grid. What happens when you inherit some legacy code that's using floats, or your tasked with removing bootstrap from an old application? It's best to have a good foundation with all layouting styles.

This series of posts will cover the ins-and-outs of:
* The Basics and Beginnings of CSS Layouts 
* Floats
* Table Hacks
* Flexbox
* Grid
* When to use what
* When to use different tools together

## Part 1: The (Relatively) Old Standards

### The Basics
Today, the CSS creators have given us some amazing tools, but once upon a time creating layouts was pretty hacky. But even before those hacks we had really basic webpages, that by today's standard had no layout at all. It was simply 'laid' out like the page of a book. The content flowed from left to right, top to bottom.

Much of the layout cusomization was done by using semantic HTML, and relying on the standard `display` properties of those HTML elements (such as `block`, `inline`, and `inline-block`.

* `display: block` makes an element take up the entire width of its parent element. Therefor no other elements will be on the same line. Block ites respect margins and padding, and can have a width and height. Even when a width is set, the element still forces a link break.
* `display: inline` makes an element take up only the width that it needs, allowing multiple items to be horizontally aligned. These elements respect right and left margins, but not top and bottom, and you cannot set a height and width.
* `display: inline-block` is more or less a combination of the two. It doesn't force a line-break, so elements can sit at it's right and left, but in all other regards it's a 'block' level element.

In addition to these, the original web developers organized content using `tables` and `lists`. (While the internet would be a much more boring place if that's what we were still using, it would be refreshing to see HTML that was so semantic.)

Certain CSS properties and 'hacks' can be used with  these standard elements in order to do some basic layout work. This includes manipulating the `margin` (specifically centering using `margin: auto`, and using the `align` property (no longer supported))

### The First Layout Tool: Floats
Some of the 

--- 
* Margin: Auto
* HTML tables
* CSS 1: Floats, postions, alignment
* CSS 2: display: Table
* CSS 3: Flex, Media Queries (bonus)


