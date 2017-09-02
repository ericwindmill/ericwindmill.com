---
layout: post
title:  "Learning Dart from JavaScript"
date:   2017-09-01 19:10:08 -0700
categories: language dart
type: article
front-page: false
external_url: 
external_site: 
---

### Hellow, Orld
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

### Variables
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


Fundamental Types in Dart:

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

