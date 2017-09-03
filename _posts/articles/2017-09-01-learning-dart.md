---
layout: post
title:  "Learning Dart from JavaScript"
date:   2017-09-01 19:10:08 -0700
categories: language dart
type: article
front-page: false
permalink: blog/dart 
---

compiles to JavaScript
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



