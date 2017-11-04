---
title:  "Javascript Async Functions"
cover: "https://unsplash.it/1152/300/?random?Async"
type: "Post" 
category: "Programming"
date: 02/01/2017
year: 2015
month: February
tags:
    - javascript
    - career
    - algorithms
    - study
---
# Using Async and Await in JavaScript
*I originally published this article on [CSS Tricks](http://csstricks.com).*
ES2017 was finalized in June, and with it came wide support for my new favorite JavaScript feature: async functions! If you've ever struggled with reasoning about asynchronous JavaScript, this is for you. If you haven't, then, well, you're probably a super-genius.

Async functions more or less let you write sequenced JavaScript code, without wrapping all your logic in callbacks, generators, or promises. Consider this:

```javascript
function logger() {
    let data = fetch('http://sampleapi.com/posts')
    console.log(data)
}

logger()
```

This code doesn't do what you expect. If you've built anything in JS, you probably know why.

But this code does do what you'd expect.

```javascript
async function logger() {
    let data = await fetch('http://sampleapi.com/posts')
    console.log(data)
}

logger()
```

That intuitive (and pretty) code works, and its only two additional words!

# Async JavaScript before ES6

Before we dive into async and await, it's important that you understand promises. And to appreciate promises, we need go back one more step to just plain ol' callbacks.

Promises were introduced in ES6, and made great improvements to writing asynchronous code in JavaScript. No more "callback hell", as it is sometimes affectionately referred to.

A callback is a function that can be passed into a function and called within that function as a response to any event. It's fundamental to JS.

```javascript
function readFile('file.txt', (data) => {
  // This is inside the callback function
  console.log(data)
}
```

That function is simply logging the data from a file, which isn't possible until the file is finished being read. It seems simple, but what if you wanted to read and log five different files in sequence?

Before promises, in order to execute sequential tasks, you would need to nest callbacks, like so:

```javascript
// This is officially callback hell
function combineFiles(file1, file2, file3, printFileCallBack) {
    let newFileText = ''
    readFile(string1, (text) => {
        newFileText += text
        readFile(string2, (text) => {
            newFileText += text
            readFile(string3, (text) => {
                newFileText += text
                printFileCallBack(newFileText)
            }
        }
    } 
}
```
It's hard to reason about and difficult to follow. This doesn't even include error handling for the entirely possible scenario that one of the files doesn't exist.

# I Promise It Get's Better

This is where a `promise` can help. A Promise is a way to reason about data that doesn't yet exist, but you know it will. Kyle Simpson, author of [You Don't Know JS series](https://github.com/getify/You-Dont-Know-JS), is well known for giving async JavaScript talks. [His explanation](https://www.youtube.com/watch?v=Qg1SvpIau6U) of promises from this talk is spot on: It's like ordering food a fast-food restaurant.

1. Order your food.
2. Pay for your food and receive a ticket with an order number.
3. Wait for your food.
4. When your food is ready, they call your ticket number.
5. Receive the food.
As he points out, you may not be able to eat your food while you're waiting for it, but you can think about it, and you can prepare for it. You can proceed with your day knowing that food is going to come, even if you don't have it yet, because the food has been "promised" to you. That's all a Promise is. An object that represents data that will eventually exist.

```javascript
readFile(file1)
  .then((file1-data) => { /* do something */ })
  .then((previous-promise-data) => { /* do the next thing */ })
  .catch( /* handle errors */ )
```

That's the `promise` syntax. Its main benefit is that it allows an intuitive way to chain together sequential events. This basic example is alright, but you can see that we're still using callbacks. Promises are just thin wrappers on callbacks that make it a bit more intuitive.

# The (new) Best Way: Async / Await
A couple years ago, async functions made their way into the JavaScript ecosystem. As of last month, its an official feature of the language and widely supported.

The `async` and `await` keywords are a thin wrapper built on promises and generators. Essentially, it allows us to "pause" our function anywhere we want, using the await keyword.

```javascript
async function logger() {
  // pause until fetch returns
  let data = await fetch('http://sampleapi.com/posts')
  console.log(data)
}
```

This code runs and does what you'd want. It logs the data from the API call. If your brain didn't just explode, I don't know how to please you.

The benefit to this is that it's intuitive. You write code the way your brain thinks about it, telling the script to pause where it needs to.

The other advantages are that you can use `try` and `catch` in a way that we couldn't with promises:
```javascript
async function logger ()  {
    try {
        let user_id = await fetch('/api/users/username')
        let posts = await fetch('/api/`${user_id}`')
        let object = JSON.parse(user.posts.toString())
        console.log(posts)
    } catch (error) {
        console.error('Error:', error) 
    }
}
```

This is a contrived example, but it proves a point: catch will catch the error that occurs in any step during the process. There are at least 3 places that the try block could fail, making this by far the cleanest way to handle errors in async code.

We can also use async functions with loops and conditionals without much of a headache:

```javascript
async function count() {
    let counter = 1
    for (let i = 0; i < 100; i++) {
        counter += 1
        console.log(counter)
        await sleep(1000)
    }
}
```

This is a silly example, but that will run how you'd expect and it's easy to read. If you run this in the console, you'll see that the code will pause on the sleep call, and the next loop iteration won't start for one second.

# The Nitty Gritty
Now that you're convinced of the beauty of async and await, lets dive into the details:

* async and await are built on promises. A function that uses async will always itself return a promise. This is important to keep in mind, and probably the biggest "gotcha" you'll run into.
* When we await, it pauses the function, not the entire code.
* async and await are non-blocking.
* You can still use Promise helpers such as Promise.all(). Here's our earlier example:
```javascript
async function logPosts ()  {
    try {
        let user_id = await fetch('/api/users/username')
        let post_ids = await fetch('/api/posts/<code>${user_id}')
        let promises = post_ids.map(post_id => {
            return  fetch('/api/posts/${post_id}')
        }
        let posts = await Promise.all(promises)
        console.log(posts)
    } catch (error) {
        console.error('Error:', error) 
    }
}
```
* Await can only be used in functions that have been declared Async.
* Therefore, you can't use await in the global scope.
```javascript
// throws an error
function logger (callBack) {
    console.log(await callBack)
}
// works!
async function logger () {
    console.log(await callBack)
}
```

# Available now!
The async and await keywords are available in almost every browser as of June 2017. Even better, to ensure your code works everywhere, use Babel to preprocess your JavaScript into and older syntax that older browsers do support.

If you're interested in more of what ES2017 has to offer, [you can see a full list of ES2017 features here](http://2ality.com/2016/02/ecmascript-2017.html).