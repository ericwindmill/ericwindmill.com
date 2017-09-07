---
layout: post
title:  "Learning Dart Basics from JavaScript"
date:   2017-09-01 19:10:08 -0700
categories: language dart
type: article
front-page: false
permalink: blog/dart 
---

## Contents:
* <a href='#intro'>Intro</a>
* <a href='#resources'>Resources</a>
* <a href='#helloworld'>Hello, world!</a>
* <a href='#variables'>Variables</a>
* <a href='#operators'>Opererators</a>
  * <a href='#null-aware'>Null-Aware Operators</a>
* <a href='#types'>Objects and Types</a>
  * <a href='#strings'>Strings</a>
  * <a href='#boolean-vals'>Booleans</a>
  * <a href='#lists'>Lists</a>
  * <a href='#maps'>Maps</a>
  * <a href='#structures'>More Data Structures</a>
* <a href='#conditionals'>Conditionals</a>
* <a href='#loops'>Loops</a>
* <a href='#functions'>Functions</a>
* <a href='#scope'>Scope</a>
* <a href='#exceptions'>Exceptions</a>

<div id='intro'></div>

## Why Dart
I've recently accepted a position with a company that's doing something challenging and also interesting. Most interesting is their stack. They're basically all in on Google (Go, Dart, Angular, and even flutter). So I'm studying Dart to prepare. 

My initial thoughts, having only read a few articles, is that Dart is basically TypeScript. It looks a lot like JavaScript, but its more opinionated. It also has quite a bit of features that backend languages have that JavaScript lacks. 

I can already tell that my desire to use JavaScript 'Standard' style as my syntax is going to be a big pain in the ass. Semicolons and extra spacing that I'm use to from Standard throws warnings in Dart. 

# What is Dart?
From WikiPedia:
'Dart is a general-purpose programming language originally developed by Google and later approved as a standard by Ecma. It is used to build web, server and mobile applications, and for Internet of Things devices.

Dart is an object-oriented, class defined, single inheritance language using a C-style syntax that transcompiles optionally into JavaScript. It supports interfaces, mixins, abstract classes, reified generics, optional typing, and a sound type system' 

### In Laymans Terms
It seems that Dart *can* compile into JavaScript, but doesn't have to. I'm not sure what the advantage of this, becuase JavaScript already can be run in browsers or server side. 

Like TypeScript, Dart seems to be a language that combines the useability of JavaScript with the opinions of slightly-lower-level and application languages like Java. I'd assume that a lot of Dart users fancy it over JS because its Object Oriented and supports all the Object Oriented Programming features. (I think prototypes are superior to classical inheretence, but that's another conversation for another day...).

<div id='resources'></div>

## Resources
The first resource I went through when looking into dart was [Dart Academy Boot Camp](https://da-bootcamp.firebaseapp.com/?course=start_programming_dart). This resource is probably meant for a brand new developer who's learning Dart as their first language. Nevertheless, there was some valuable insight into the basic syntax similarities and basic language functionality.

The second resouce I ran into is [Dart by Example](http://jpryan.me/dartbyexample/). Funny enough, the creator of this is a Sr. Engineer at my new job. This definitely get's deeper into the language. I'm glad I started with the previous resource, but this is where the real learning happened.

There's a nifty tool that's similar to JSFiddle or CodePen, but for Dart called [DartPad](https://dartpad.dartlang.org/4ea67cfb5294c146a541).

<div class='aside'>
  <p>The format of this post is 'constantly-updated'. I go out on the internet, I read and learn, and then I update the content inline. It isn't sequential, but rather building up from basic to more advanced. By the end, I hope its a one-stop shop for someones first forray into Dart from JavaScript.</p>
</div>

<hr />

<div id='helloworld'></div>

## Hello, World
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

<div id='variables'></div>

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

<div id='operators'></div>

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

<div id='null-aware'></div>

### Null Aware Operators

This is something new to me. These operators were added to dart to help you deal with potentially null objects. I guess what these operators really provide are some syntatic sugar, because you can accomplish these goals quite easily anyway. Writing less code is always a win, so I'm on board.

### ??

The operator `??` is kind of short hand for a ternary. It gives you a 'backup' to return if the expression you're working with resolves to null.

`exp ?? otherExp`

This is similar to 

`((x) => x == null ? otherExp : x)(exp)`

If `exp` is `null`, return `otherExp`, otherwise use `exp`.

### ??=
This is a very welcomed expression. Assign an expression a value only if its `null`. It's just like the lazy operator in ruby (and presumably many languages).

`a ??= b`

The above expression means 'assign the value of b to a if a is `null`, otherwise return `a` as is.

### ?.

The `?.` is used to call a method on an object is that object isn't `null`, otherwise it returns null. This is exciting to me.

`object?.method()`

That's really neat. The purpose it serves is useful, and the syntax is readable. I'm into it. 

And, you can chain calls.

`object?.child?.method()`

If the object or the child of the object are null, it returns `null`. Cool!

 Here is my very, very contrived example:

 ``` dart
 void main() {
  List myArr = [1, 2, 3];
  print(myArr);
  myArr?.add(4);
  print(myArr);
  myArr = null;
  myArr?.add(5);
  print(myArr);
}
```

Which outputs:
``` dart
[1, 2, 3]
[1, 2, 3, 4]
null
```

But if you remove that `?` from line 7, the second time that `add()` is called, this is the output:

```dart
[1, 2, 3]
[1, 2, 3, 4]
Uncaught TypeError: C.JSNull_methods.add$1 is not a function
```


Nice!

| Operater | JS Equivelent | Description |
|----------|---------------|------------|
| ??       |     -          | null check before using an object |
|----------|---------------|------------|
| ??=       |      -         | null check before assigning an expression |
|----------|---------------|------------|
| ?.       |     -          | null check an object before using an method |
|----------|---------------|------------|

<hr />
<div id='types'></div>

## Types

<div id='strings'></div>

### Strings

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

<div id='boolean-vals'></div>

### Boolean Values
Boolean values are arguably not like Javascript. This is the first major difference I've seen in how you can use the language. In JavaScript, there are multiple values that can evaluate to `true`. In fact, most values are considered 'truthy'.

The 'falsy' values in JS are 0, false, null, '', undefinied, and NaN. Everything else is 'truthy'.

In Dart, true evaluates to true. **Everything** else is false.

### Lists 
Lists are basically arrays. The same JavaScript syntax that you see in arrays carries over to Dart.

`List fruit = new List(3)`

That sets up a fixed-length list, then you can access properties via bracket notation. `fruit[0] = 'banana';`
You can leave out the argument when establishing a `new List` in order to establish a dynamic list.
 
Or, you can just create a list using literal syntax.
`List fruit = ['banana', 'apple', 'tomato']`

Lists are extended with the 'iterable' class, which gives them quite a few built in methods and properties. Some of the most important:

#### Properties:
`length`
`reversed`
`first`
`isEmpty`
`isNotEmpty`
`last`

#### Methods:
`add`
`addAll`
`clear`
`indexOf`
`insert`
`remove`
`shuffle`
`sort`
`any`
`contains`
`every`
`firstWhere`
`forEach`
`join`
`map`
`reduce`
`toSet`
`toString`

There are a lot of methods, and variations of many...
[Dart Lang List class API](https://api.dartlang.org/stable/1.24.2/dart-core/List-class.html)


### Maps
Maps seem to be more or less the same, too.

`Map fruit = new Map();` works, as do using braces for map literals.

```dart
var fruit = {
  'banana': 'yellow',
  'apple': 'red'
}
```

You can use `for...in` loops to loop over Map in arbitrary order. More on loops soon.

<div id='structures'></div>
### More Data Structures
The only two languages that I know well are Ruby and JavaScript. And both of those languages require you to implement classes like Stack and Queue manually. I've always been jealous of languages like Python that have them built in. Dart also has some built int, which is pretty awesome.

These are some of the basic structures you can use:

#### Sets
Sets are the same as JS, and equality is determinted with `==`

#### Queue
Queues are Lists' with Queue-like properties. You can't lookup by index, but you can get the start and end elements quickly.


<hr />
<div id='conditionals'></div>

##Conditionals

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
<div id='loops'></div>
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

<div id='functions'></div>

## Functions
Functions are actually pretty different in Dart. Obviously, a function is a function no matter the language, but Dart is more opinionated, which means there are optionally more details to tackle.

A basic function looks exactly the same:
``` dart
peanutButter () {
  return 'crunchy'
}

var pbType = peanutButter();
``` 

Fat-arrows can explicitly return: 

```dart
peanutButter() => 'crunchy';
```

Functions return `null` if no return value is specified.


### Annotating Functions

This is something I haven't delt with. You can annotate functions with what the type of both the argument and the return value are going to be.

```dart
String peanutButter(String type) {
  return type
}
```

This is contrived, becuase all this function is doing is returning it's argument, but the syntax is sound for the point. The first use of `String` establishes what the type of the return value will be, while the second use of `String` tells the functions to expect a string as an argument. 

### Optional Arguments
One of the biggest quirks of JavaScript is that is has no opinions about what arguments are required or what it expects or whatever. You can pass a function 0 arguments, even when it expects some, and it will fail silently. You can pass a function 50 arguments, and it will just use the the first however-many that its expecting.

Dart is fairly more sane. Arguments are either required or optional, but you have to be explicit in establishing which ones are required and which are optional. 

```dart
String peanutButter(String type, [String brand]) {
  String returnVal = 'My favorite pb is ';
  if (brand != null ) {
    returnVal + brand + ' ';
  }

  return returnVal + type;
}

var pb1 = peanutButter('crunchy') // My favorite pb is crunchy
var pb2 = peanutButter('crunchy', ['Jif']) // My favorite pb is Jif crunchy
```

That second paramenter is option, as denoted by the square brackets. 

There's a second way to establish optional parameters, and tahts with curly braces: 

```dart
String peanutButter(String type,  {String brand}) {
  // ...
}
```

If you use the curly brackets, then when you call the function you call it like so:
```dart
var pb3 = peanutButter('crunchy', brand: 'Jif');
```

This is simply to make the code more readable.

In curly-bracket optional arguments, you can give default values. I love default values from ruby, so this makes me very happy.

```dart
String peanutButter(String type,  {String brand: 'Jif'}) {
  // ...
}
```

(This example is contrived, because you'd never want to assume that a users default favorite brand is 'Jif'.)

Finally, you can check wether an optional parameter has been passed in (opposed to a default value set in the code) by preceeding the name with a `?`


```dart
String peanutButter(String type, {brand: 'Jif'}) {
  String returnVal = 'My favorite pb is ';
  if (?brand) { // will run only if brand has been passed in specifically by the user.
    returnVal + brand + ' ';
  }

  return returnVal + type;
}
```


<div id='scope'></div>

## Scope
Like JavaScript, Dart is **lexically** scoped. This is a huge relief for me, because its one of the things about JS that's the most important to understand, the most difficult to learn correctly, and one of my favorite parts of using JS. 

One of the 'gotchas' of JavaScript is the use of `var` vs `let` in a loop with setTimeout. It's one of the classic ways to show what a `block` scoped variable is. (This isn't a JS tutorial, so check out a good example [here](http://wesbos.com/for-of-es6/))

The point of that article to keep in mind is that `let` is a block-scoped variable. So each new iteration of a loop produces a new version of the variable.

Dart is the same way, as this is lexical scoping.

```dart
main() {
  
  printInt(num) {
    print(num)
  }

  for (int i = 0; i < 3; i++) {
    printInt() => i;
  }

}
//  0
//  1
//  2
```


<div id='exceptions'></div>

## Exceptions
Handling errors is fun in any language. It's actually pretty simple in Dart. Almost all exceptions are Errors. 

Dart has four types of exceptions to explore:
* Throw
* Try
* Catch
* Finally

### Throw
To signal an error or exceptions occured, use `throw`.

```dart
  driveCar() {
    if (tankEmpty) {
      throw new StateError('there's no gas!')
    }
  }
```

You can throw any non-null object as an exception! But, Dart gives us a bunch of built in objects like 'StateError'. You can also extend Exception class to make specific exceptions.

### Try / Catch
The try block allows you to handle exceptions more gracefully. You can tackle forseeable problems before they occrur.
```dart
try {
  car.start();
  car.drive();
} catch(exception, stackTrace) {
  print(exception);
  print(stackTrace);
}
```
This is pretty standard stuff here. Like JS, if the exception is thrown on line 2 ( `car.start()` ), then `drive()` is never called.


### On

In a `try` block, you can use `on` to specify the type of exception you're trying to catch. 

```dart
try {
  car.start(key);
  car.drive();
} on StateError catch(exception) {
  car.retryStart();
} on ArgumentError catch(exception) {
  print('wrong key!')
} catch(exception) {
  print(exception);
}
```

### Finally
The finally clause makes sure that no matter what, something runs at the end.

```dart
try {
  car.start(key);
  car.drive();
  // ...
} catch(exception) {
  // ...
} finally {
  car.exit();
}
```

Wether the car starts or not, you're evenutally going to get out of the car and get on with your day. 

