---
title:  "Null Aware Operators in Dart"
cover: "https://unsplash.it/1152/300/?random?Async"
type: "Post" 
category: "Dart"
date: 11/14/2017
year: 2017
month: November
tags:
    - javascript
    - dart
    - web development
---


One of my favorite features of Dart that is absent from JavaScript is *null-aware operators*. To me, they're exciting for the same reason the ternary operator is--a lot less typing. 

The main point (in my mind) that you should consider when choosing among languages that can accomplish the same goal, is how productive will you be writing in it? These little bits of syntactic sugar can go a long way. 

A common move in development is to write something like this:

```dart
 var x; 
 if (x != null) {
    // call a function on x or something
  } else {
    x = "default value"
  }
```
That's a lot of code. (relatively). 

This is commonly just a safety net. The thinking would be something like this: *This value is dynamic based on user input, but there's no guarantee that the information will be there when the page is built. If it's type is `null` at build time, it will throw an error. We need to make sure that it's never null.

Null-aware operators seek to solve this problem a bit, though. There are three null aware operators in Dart.

## ??

This is the first operator, and the one that I use most often, simplifies the code above. 

```dart
// assign newValue to x, unless newValue is null, then assign it to 1;
int x = newValue ?? 1;
```

Many languages have this operator. I believe it was first written into C#. Ruby has something similar: the lazy assignment operator. But JavaScript doesn't have anything similar.

I use this operator quite often. In the wild, you'll see it all the time when handling data asynchronously.  

## ??=

The second operator is kind of the opposite. In a way, it accomplishes a very similar problem.

```dart
// assign newValue to x, but only if x is currently null. Otherwise, ignore.
var x; 
x ??= newValue;

// this is literally just syntactic sugar for:
x = x ?? newValue;
```

So in both cases, we're protecting ourselves against null values.

## ?.

This last one is pretty handy. It's used to call a method or getter only if the expression you're calling it on isn't null.

```dart
// if parent is null, don't even try to call method, just return null.
parent?.method();

// these can be chained:
// if parent is null, return, then check child. is it null? finally call the getter.
parent?.child?.getter;
```

## IRL

The power of these guys are probably best seen in larger, 'real life' example.

Let's say you have this form:
[first name][middlename][lastname]
[zipcode][email]

When the form is filled out, you should verify the data before you submit it to your database:
```dart
void submitData(formData) {
  var newUser = {
     "firstname": formData.firstName,
     // middle name is optional, but your database is expecting a string
     "middlename": formData.middleName ?? "",
     "lastname": formData.lastName,
     "email": formData.email ?? "",
     "zipcode": formData.zipCode ?? 00000
  };
  
  addNewUserToDataBase(newUser);
 }
```

That's the simplest example. Let's take it a bit further. Let's say that a user can sign up for an email list simply by clicking a button.


```dart
// now that we have our database full of users we can hold a special lottery for those who have given us their email address.
// we may want to do this as a slimey marketing trick to get more email addresses.
void drawWinner() {
  var winner = null;
  // select a random user. But if their email is null, then winner won't be reassigned and the loop starts over.
  while (winner = null) {
    winner = selectRandomUser().email?.name;  
  }
  
  return winner; 
} 
```

I find null-aware operators to be a big help. Try it today!