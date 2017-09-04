---
layout: post
title:  "Learning Dart from JavaScript"
date:   2017-09-01 19:10:08 -0700
categories: language dart
type: article
front-page: false
permalink: blog/dart 
---

## Why Dart
I've recently accepted a position with a company that's doing something very challenging and also very interesting. Also interesting: they have a weird stack. They're basically all in on Google (Go, Dart, Angular, and even flutter). So I'm studying Dart to prepare. 

My initial thoughts, having only read a few articles, is that Dart is basically TypeScript. 

I can already tell that my desire to use JavaScript 'Standard' style as my syntax is going to be a big pain in the ass. Semicolons and extra spacing that I'm use to from Standard throws warnings in Dart. 

# What is Dart?
From WikiPedia:
'Dart is a general-purpose programming language originally developed by Google and later approved as a standard by Ecma. It is used to build web, server and mobile applications, and for Internet of Things devices.

Dart is an object-oriented, class defined, single inheritance language using a C-style syntax that transcompiles optionally into JavaScript. It supports interfaces, mixins, abstract classes, reified generics, optional typing, and a sound type system' 

### In Laymans Terms
It seems that Dart *can* compile into JavaScript, but doesn't have to. I'm not sure what the advantage of this, becuase JavaScript already can be run in browsers or server side. 

Like TypeScript, Dart seems to be a language that combines the useability of JavaScript with the opinions of slightly-lower-level and application languages like Java. I'd assume that a lot of Dart users fancy it over JS because its Object Oriented and supports all the Object Oriented Programming features. (I think prototypes are superior to classical inheretence, but that's another conversation for another day...).

## Resources

The first resource I went through when looking into dart was [Dart Academy Boot Camp](https://da-bootcamp.firebaseapp.com/?course=start_programming_dart). This resource is probably meant for a brand new developer who's learning Dart as their first language. Nevertheless, there was some valuable insight into the basic syntax similarities and basic language functionality.

The second resouce I ran into is [Dart by Example](http://jpryan.me/dartbyexample/). Funny enough, the creator of this is my future teams Sr. Engineer, and I found this while stalking his Twitter. This definitely get's much deeper into the language. I'm glad I started with the previous resource, but this is where the real learning happens.

There's a nifty tool that's similar to JSFiddle or CodePen, but for Dart called [DartPad](https://dartpad.dartlang.org/4ea67cfb5294c146a541).

<div class='aside'>
  <p>The format of this post is 'constantly-updated'. I go out on the internet, I read and learn, and then I update the content inline. It isn't sequential, but rather building up from basic to more advanced. By the end, I hope its a one-stop shop for someones first forray into Dart from JavaScript.</p>
</div>


## Hellow, Orld
Getting to 'Hello, World' in Dart looks like this.

``` dart
void main() {
  print("Hello, World");
}
```

Let's break that down.
``` dart
void main()
```

* Every Dart program starts with a function called `main()` 
* main() is called automatically when the program is run.
* `void` tells Dart that `main()` will prodocue no output.
* Semicolons matter, unlike JavaScript.
* You can also do arrow function syntax (ES6 Functions for JS devs).

```dart
void main() => print('Hello, World!');
```

*Aside:* I love arrow functions, so this is a welcomed insight.

## Variables
* Variables seem to be exactly like JavaScript
* `var x;` establishes a variable called x to `null`, just like in JS.
* Assigning values to variables looks like JS too: `var x = 5;`
* Dart variables are very similar to JS variables in 'strict' mode. 
  * If you try to maniupulate a variable that doesn't exist, it won't simply create that variable in the global scope. It'll do what you'd expect: throw a warning.
* All dart types are objects, there are no primitives.

#### Variable Types
* This is interesting. Dart is <em>optionally<em> typed. 
* By default, variables are given the type 'dynamic'.
``` dart
  void main() {
    var x = 5;
    x = 'Dart'
  }
```
This is valid. But if you change the code to give `x` a type, it wouldn't work:

```dart
void main() {
  int x = 5;
  x = 'Dart'
}
```
This is <strong> invalid </strong>. In Dart, this will throw a warning, but not an error. It the program will still run. In fact, when dart runs, all variables are dynamic. The types are for people. They make the code cleaner, but they don't effect the program. That's pretty neat, actually.


### Fundamental Types in Dart:

| Type         |Description |
| -------------|------------ |
| int          | whole number |
| -------------|------------ |
| double       | floating-point number |
| -------------|------------ |
| num          | int or double |
| -------------|------------ |
| bool         | Boolean |
| -------------|------------ |
| String       | string of 0 or more chars |
| -------------|------------ |
| List         | List of values (like array) |
| -------------|------------ |
| Map          | Map of key value-pairs |
| -------------|------------ |
| dynamic / var     | any type (detaulf )|

<style>
  table {
    width: 90%;
  }
</style>


## Operators and Symbols
Operators in Dart are similar to JavaScript.

### Arithmitic

| Operater | JS Equivelent |Description |
|----------|---------------|------------|
| +        | +             | Addition or Concatenation |
|----------|---------------|------------|
| -        | -             | Subtraction |
|----------|---------------|------------|
| *        | *             | Multiplication |
|----------|---------------|------------|
| /        | /             | Division |
|----------|---------------|------------|
| %        | %             | Modulo |
|----------|---------------|------------|
| ++       | ++            | Increment |
|----------|---------------|------------|
| --       | --            | Decrement |
|----------|---------------|------------|

### Booleans

| Operater | JS Equivelent | Description |
|----------|---------------|------------|
| !        | !             | Not operator |
|----------|---------------|------------|
| ==        | ==           | equal    |
|----------|---------------|------------|
| !=       | !=            | Not equal |
|----------|---------------|------------|
| <        | <             | less than    |
|----------|---------------|------------|
| <=       | <=            | less than or equal to |
|----------|---------------|------------|
| >        | >              | greater than    |
|----------|---------------|------------|
| >=       | >=            | greater than or equal to |
|----------|---------------|------------|

### Etc

| Operater | JS Equivelent | Description |
|----------|---------------|------------|
| //       | //            | comment    |
|----------|---------------|------------|

## Strings
Strings are also just like Javascript, with a couple cool extra features.
I could be wrong, but I don't believe some of these features are offered in JS.

establishing a string is exactly the same:
`var string = "Hello"`

Double and single quotes seem to behave the same way.
`var quote = '"Hello, World!", said Orld'`

And escaping is the same too:
`var quote = '"Hello, World! Ain\'t life grand?", said Orld'`

If you want to use variables, that's easy:
``` dart
void main() {
  String name = 'Orld';
  print(name + 'is hungry.');
}
```

But dart also gives us nice string interpolation. If you're familiar with ES6, it's only slightly different. 

ES6 interpolation: `"${name} is hungry"`
Dart interpolation: `"$name is hungry"`

But funny enough, in order to interpolate logic inside a string, you use `${}`, just like JavaScript.

*  `print(${4+5} = 5 + 4)` will print `9 = 5 + 4`
*  `print("Orld has ${contacts.length} friends")` will print however many contacts Orld has in his `contacts` list.

Its nice that Dart gives a nice shortcut, but I actually prefer the JS way. It seems easier to read. Maybe that's just my bias as a JS developer.

Another escape trick is preceeding a string with 'r'. This tells Dart that the following string will be considered *raw*.

so `print(r"$name is hungry")` would print literally `$name is hungry`. That's a nice feature forsure. 

The final to note is that Dart will automatically concat two adjacent strings.

``` dart
void main() {
  print("Hellow, " "Orld")
}
```

This will print `Hellow, Orld`. 

## Boolean Values

Boolean values are arguably not like Javascript. This is the first major difference I've seen in how you can use the language. In JavaScript, there are multiple values that can evaluate to `true`. In fact, most values are considered 'truthy'.

The 'falsy' values in JS are 0, false, null, '', undefinied, and NaN. Everything else is 'truthy'.

In Dart, true evaluates to true. **Everything** else is false.

## Logic: Conditionals
Conditionals are exactly the same in as they are in JS (and many other languages). You can conditionally execute blocks of code based on their condition's boolean value:
* `if`
* `else if`
* `else` 

And, if you conditional code get's out of hand, use a `switch` statement. 

The `switch` statement seems to be, again, exactly like JavaScript. Like most languages that offer `switch`, it's essentially a cleaner way to write a long line of `if else` conditionals. I rarely use `switch` statements when writing in plain JS, but `switch` is used in many frameworks (like React with Redux).

Here's a basic Dart `switch` statement:

``` dart 
void main() {
  int chooseANum = 2;

  switch(chooseANum) {
    case 0:
      print('zero');
      break;
    case 1:
      print('one');
      break;
    case 2:
      print('two');
      break;
    case 3:
      print('three');
      break;
    default:
      print('Thats not an integer!');
  }
}
```
This is the exact syntax for JS switch statements, down to the required 'breaks', the default exectuion block, etc. 

This post assumes you understand JavaScript, so maybe this is overkill, but I think it's important to explain why 'break' is an advantage to `switch` statements. 

Suppose you have two possible outcomes, but many ways to reach either outcome. Let's say, for example, that you want to tell whether a number between 1-10 is even or odd. Using a switch statement *without* a break in every case allows you to 'batch' your possible outcomes to a single execution block.

A very contrived example in an if-statement:  
``` dart
void main() {

  void evenOrOdd() {
    int myNum = 2;

    if (myNum == 2 || myNum == 4 || myNum == 6 || myNum == 8 || myNum == 10) {
      print('Even!');
    } else if (myNum == 1 || myNum == 3 || myNum == 5 || myNum == 7 ||  myNum == 9) {
      print('Odd!');
    } else {
      print('pick a new number!');
    }
  }


}
```

This is okay, but those conditions in the `if` and `if else` blocks aren't very pretty. They could be more readable:

```dart
void main() {

  void evenOrOdd() {
    myNum = 6;
    switch (myNum) {
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
        print('Even!');
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 9:
        print ('Odd!');
        break;
      default:
        print ('choose a different number!');
    }
  }
}
```

Again, this example is completely contrived, and this isn't the easiest way to accomplish this by any means. But, it proves a point: The way the `switch` statement works is by basically comparing the condition to EACH case, and if it matches, then it executes that code. It can and will run through and exectue all blocks of code where the condition matches. That's what makes the `break` necessary. Using `break` in every case essentailly turns your `switch` into a series of `if` and `if else`s. It ensures that only one condition (the first met that evaluates to true) will run. This is also why no break is requires under default, because its the last condition. `switch` runs (as you'd expect) from top to bottom.

The weird thing about `switch` in Dart, is that it doesn't allow you to work with `operators`. As in, you couldn't say `case myNum % 2 == 0`, or a better example... the following is an **invalid** way to test a range numbers:

```dart
  void main() {
    int myNum = 9;

    switch (myNum)
      case myNum < 10: // Not valid!!!
        print('less than 10');
        break;
        ...
```

In that case, you'd want to use an if statement:

```dart
  void main() {
    int myNum = 9
    if (myNum < 10) { // this works
      print('less than 10');
    ...
```

Dart even uses the exact JS *ternary* syntax. Woop.

```dart
var bullseye = true
var gameOver = bullseye ? 'Game over, you win!' : 'throw again'
print($gameOver)
```

## Loops
`While loops` seem to be, again, exactly the same in syntax:

```dart
void main() {
  int i = 0;
  while (i <= 10) {
    print(i);
    i++;
  }
}
```

Then there's the `do-while` loop:
A do while loop in any language simply tests the condition at the end of the loop iteration rather than the beginning. In laymans terms, the do-while loop will execute once no matter what, then at the end of that iteration it will test the condition before running the next time. 
```dart
void main() {
  int i = 1
  do {
    print(i);
  } while (i == 0);
}
```
This example is pretty contrived also, but the point is that it'll print i even though the while condition is `i == 0`. It'll just exit at the first test, which is after the first exectuion block.

And finally, `for` loops. Again, just like JavaScript. 

```dart
void main() {
  for (int i = 0; i < 10; i++) {
    print(i)
  }
}
```
This example simply prints out 0 through 9. Just like in JS and every other language, you need to be careful of off-by-one errors!

`for-in` loops are the same as well. These loops allow you to iterate over anything that that extends the mixin Iterable

```dart
void main() {
  list nums = [1,2,3]
  for (var x in collection) {
    print(x)
  }
}
```


## Scope
Like JavaScript, Dart is **lexically** scoped. This is a huge relief for me, because its one of the things about JS that's the most important to understand, the most difficult to learn correctly, and one of my favorite parts of using JS. 

Closures still apply here. 