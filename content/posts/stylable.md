---
title:  "Stylable CSS Preprocessor"
cover: "https://unsplash.it/1152/300/?random?Async"
type: "Post"
category: "CSS"
date: 12/10/2017
year: 2017
month: December
tags:
    - CSS
    - Wix
    - Stylable
---

Wix, the company behind 'drag and drop' websites, joined the CSS tooling armsrace a few weeks ago with [Stylable](https://stylable.io/).

The CSS debate has shifted, it seems, from 'best css-in-js' tool, to modular, scoped styles. As a big fan of Vue, I welcome this kind of preprocessor.

Stylable aims to allow you to write scoped styles per component, but then makes them global. The way its mapped on build ensures that styles won't clash.

>What is Stylable?
>
>Stylable is a CSS preprocessor that enables you to write reusable, highly-performant, styled components. Each component exposes a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability.
>
> * Scopes styles to components so they don’t “leak” and clash with other styles.
> * Enables custom pseudo-classes and pseudo-elements that abstract the internal structure of a component. These can then be styled externally.
> * Uses themes so you can apply different look and feel across your web application.
>
> At build time, the preprocessor converts the Stylable CSS into flat, static, valid, vanilla CSS that works cross-browser.

I like CSS syntax. Most JS engineers complain about CSS. But it's a nice, simple declarative 'language'. Its super easy to use (but hard to master).

That in mind, one of the main issues with CSS, especially in giant SPAs, is that your styles will often bleed into components that you didn't want them to.

In fact, this is one of the biggest reasons that I use Vue as my framework of choice. The `<style scoped>` is just too valuable.

If Stylable thinks they can solve that problem *without* making me use CSS in JS, then I'm rooting for them.

At the time, Stylable can be used in any component based frmework, but you'll only find help to get started with `create-react-app`.


