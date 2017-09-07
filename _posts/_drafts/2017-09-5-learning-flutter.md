---
layout: post
title:  "An Intro (for me) to Flutter for Mobile Apps"
date:   2017-09-05 09:10:08 -0700
categories: flutter mobile google
type: article
front-page: true
permalink: blog/intro-to-flutter
---

In my [post about Dart](/blog/dart), I mentioned that I just signed on with a new company that's all in on Google. I don't start for a few weeks, so I'm taking this time to get ramped up on two technologies I know nothing about: Dart and Flutter.

The company just decided to attempt to switch their mobile apps to Flutter from native in the last couple days, so it seems like it's going to be new to everyone (which is great for me, as my ignorance will blend in).

I have little expereince with mobile... I helped build one app in React Native and Rails, which allowed me to dabble with xcode, but with no real context to what was going on. In other words, this is completely new to me, and a huge step away from my normal JS/CSS/front-end framework web development stack I'm used to.

# What and Why and How Flutter

Flutter is *alpha* right now. So finding information on it is difficult. The first question I'm asking myself is why? Or, what does flutter offer that makes it worth switching platforms?

At first glance of [flutter.io](http://flutter.io), it certainly seems like Google is matching Facebook's React Native. The big selling point of RN, in my opinion, is that its dead simple if you know React for web, and you can of course use Redux with RN. I've never touched Angular, so I can't say if this is like that (or any other Google technology).

But there are many similarities. These are the quick arguments I found for flutter:
* One codebase can be translated into iOS and Android.
* They 'embrace differences in scrolling behavior, typography, icons and more' [between iOS and Andriod].
* It's written in Dart.
  * Natrually object-oriented
  * expressive
  * Basically just a very productive language
* Development environment supports hot reload.
* It seems like there are built in component UI libraries (Material Design and Cupertino style, for Android and Apple, respectively).

# Core Principals

This is all according to [Flutter technical overview](https://flutter.io/technical-overview/).

## Everything's a **widget**.
This is hard for me to wrap my head around. Flutter doesn't seperate views, controllers, layouts or other properties. I'm with it so far. There is no seperate 'application' object. It's a bit more abstract now, but I believe this is just prefacing the fact that there is a 'root' widget, much like the way you inject a React app into a root div. But the idea of widget's is a bit unclear to me right now.

<div class='technical-quote'>
  <p>
    A widget can define:
    <ul>
      <li>a structural elements (like a button..)</li>
      <li>a stylistic element (like ... a color scheme)</li>
      <li>an aspect of a layout (like padding)</li>
      <li>some business logic</li>
      <li>and so on</li>
    </ul>
  </p>
  <a class='citation' href='https://flutter.io/technical-overview/'>-Flutter technical overview</a>
</div>

So this is where the problem starts for my brain. A widget can contain business logic OR padding? Why would I want a complete speterate object to apply padding to a layout? When I first started reading this, I thought the widget was simply what Flutter was calling a 'component', but that doesn't seem to be the case.

The next part of the outline makes sense to me, though:

<div class='technical-quote'>
  <p>
    You can respond to events, like user interaction, by telling the framework to replace a widget in the hierarchy with another widget. The framework then compares the new and old widgets and efficiently updates the user interface. 
  </p>
  <a class='citation' href='https://flutter.io/technical-overview/'>-Flutter Technical Overview</a>
</div>

So it's a reactive framework that repaints the app efficiently. The React developer in me immediately thinks 'diffing algorithm.' The difference is that React (and React Native) uses a virtual DOM, and from what I can tell, Flutter doesn't have any sort of a DOM concept. 

If you go down the rabbit hole of Flutter on Google, you'll quickly find a bunch of threads that are more or less 'React Native vs Flutter'. ( These threads are where I actually found out a lot of the high-level Flutter info. ) From what I can tell, the big selling point for Flutter is that it *doesn't* use the same 'DOM' concept as everyone else. 

<div class='technical-quote'>
  <p>
  "Flutter renders its own widgets rather than using the widgets provided by the host operating system." 
  </p>
  <a class='citation' href='https://groups.google.com/forum/#!topic/flutter-dev/49DpZm0xbNk'> Just a comment from a forum </a>
</div>
From what I can tell, this is what makes Flutter highly cusomizable and super quick. Throw that in with that fact that it ships with Widgets built by the core team, and it seems like it's Bigger Faster and Stronger. 

I'm feeling a bit lost, so lets get out of the hypotheticals and hear-says and just get down to business.

## Building Widgets

As mentioned earlier, *everything* is a widget. According to the docs, inorder to cernter align a widget, you wrap it in a Center widget. That's kind of mind blowing (and not in a good way.) I suppose it's not so insane for mobile apps, because the styling is generally much more lightweight. Especially layout styling.

I'm wondering how I would make a button green, with a border radius, centered and of a certain size. I'm pretty curious about what that'll be like...

Anyways, Widgets are 'built' with a function called `build`. When you `build` a widget, it returns a tree of widgets nested beneath it. This happens recursively from the root widget until the entire widget tree is painted. This widget tree is what I'm going to think of as the DOM.

A few technical points in building widtgets:
* The `build` function should be completely free of side effects. 
* The widget should always return a new tree, even if it returned the same tree on the previous build. The framework's 'diffing algorithm' does the heavy lifting.


## State, Stateful and Stateless

There are two broad flavors of widgets: Stateful and Stateless. This again reminds me of React, where it's a best-practice with Redux to have smart-components and dumb-components.

Stateful widgets contain state, which will need to be updated in response to user interaction. Stateless widgets are simply there for structure or to look pretty. Inside of Stateful widgets, you can call `setState`, which changes the mutable states and triggers a rerender. Under the hood, setState is calling `build`.

This [github page](https://github.com/flutter/flutter/blob/master/packages/flutter_tools/templates/create/lib/main.dart.tmpl) is a very easy to digest and well commented Flutter 'app' that makes everything make more sense. 


That's the end of the 'technical overview' from Flutter, so I guess it's time to hack something up in part two...



