---
layout: post
title:  "Intro to Flutter for Mobile Apps pt 2: Start Your First Project"
date:   2017-09-11 09:10:08 -0700
categories: flutter mobile google
type: article
front-page: true
permalink: blog/intro-to-flutter-2
---

This is the exact steps I took to start my first Flutter project. I'm completely new to native mobile development, so I'm going to do my best to understand everything, and explain everything. If you're looking for a quick start, here's the step by step without the low-level explanations. 

First, you have to install the Flutter SDK. It's made pretty easy for you, and I suggest just following [these steps]() from the Flutter docs.

This is what you're installing if you follow those steps:

  * thing 1
  * thing 2


Next, I followed these directions to make my first app. These are the steps and an indepth explanation of what you're doing. 

### 1. create your app 

```bash
  create flutter first_project
```

### 2. What's In the File Tree?

Running create flutter first_project creates a file tree with 50 or so files. 

* this file
* that file
* another file

For this first project, we'll stick with the main.dart file, as well as it's siblings that we'll create.


### 3. Launch the Simulator
for iOS: 

```bash
open -a Simulator run
```

This will bring up a simple counter app. The first thing you should do is read through the `main.dart` file's comments. 

r and p in the terminal for hotreload and the Widget grid.

### 4. Main.dart

Reading through this `main.dart` file is my first look at useful Dart code and my first look into Flutter widgets. Coming from the world of JavaScript frameworks like React and Vue, it looks completely alien. Let's walk through the code bit by bit:


The following code is just the set up. It pulss in Flutter's MaterialUI, then it produces the function that will wrap the entire app: ```main(){}``. This function is the root of any Dart code. It's run automatically when a dart file is ran. I consider it the same as `document.ready()` in JavaScript (when building web-applications).

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(new MyApp());
}
//...
```

Next, theres the the root of your actual app (according to the inline comments provided by Flutter's team). This is the first time I've seen a Widget, and it's more or less a component if you're coming from literally any other front-end framework. 

`@override` is a Dart instance member that's used to override a class' super declaration of the same member. This is new to me, but I believe that because we're using Widget Build over and over, we'll be overriding it for each nested widget.

From here, there's the `Widget build(BuildContext context) {}` line. This is the function that (mabye obviously) builds the widget.

`BuildContext` is an important part of this line. It's an object provided by Flutter that keeps track of where the widget is in the tree. In laymans terms, it gives us the ability to inherit from its super. There are some built in methods and properties that you can pass `context` to, that allows the current widget to inherit the properties of the parent. In this particular mini-app, `context` is passed  later on to a function called `Theme.of(context)`. It's inheriting the theme of its parents, which in this case makes the color `blue`.

From there, it looks like we;re just passing in some basic meta data: the title of the App, the theme detail (using what I assume is a widget provided by the MaterialUI library), then of course, setting the primary color of the app and setting the title for the home page. 

**SCREEN SHOT HERE**

Looking at this screen shot of the current demo app, it looks to me like the `primarySwatch` property is used with MaterialUI is set the color in predefinied ways by Flutter. That certainly makes it really easy to design an app with strong UI. We shall see. You can also change the string in the home page title field and see it change in the app.

```dart
//...
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or press Run > Flutter Hot Reload in IntelliJ). Notice that the
        // counter didn't reset back to zero; the application is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
//...
```

The next bit of the application is the home page of your app (as the comments point out). The first difference you'll notice is that its class is `StatefulWidget` rather than the previous `StatelessWidget`. The comments also point out that a StatefulWidgets have a State Object, which basically hold data that could potentially change. As it points out, in this example its simply the title of the Homepage.

In the above code snippet, a `new MyHomePage` is created (and nested inside the root widget, and this part actually defines that MyHomePage.

The last little bit is perhaps the strangest looking part to me, but it seems that it's creating the state object for this widget, which we'll define in the next code snippet. I'm assuming that `_MyHomePageState` is a convention for naming state objects.

```dart
//...
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}
//...
```

So this is the definition of the MyHomePage widget's state object. This is a very simple usecase for state (luckily), but there's some important stuff here. The biggest takeaway is the `setState()` function. `setState()` is the function that tells flutter to change the state and it automatically fires `build` methods to rerender the widgets. This is the main magic of Flutter. This is the React/Redux equivelent of updating a reducer. Luckily, its a pretty simple implementation.

**write some stuff about setState**

```
//...
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }
//...
```

This Widget build call is nested in our `_myHomePageState()` (and therefor nested in `myHomePage()`). This build call is what will be refired everytime `setState()` is called.

```dart
//...
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
///...
```

This part is where something interesting happens that I've read about Flutter, that I (to be honest) don't like the idea of. 

This cose is nested in the Widget above, and it's starting to build the actual layout. appBar is a Widget provided by MaterialUI that sets the top section. Its pulling in the title from up the chain of nested Widgets. That's cool, I'm into it. 

Then we move onto the body, where we create a new Widget called `Center`.
```dart
//...
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return new Scaffold(
      appBar: new AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: new Text(widget.title),
      ),
      body: new Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
//...
```

Then, nested inside of Center, we have a `child` called `Column`. This is where I'm skeptical. This is how you create layouts in Flutter. Perhaps this a thing in native mobile development, but I don't like the idea of removing CSS from the equaition. It seems like it'd get complicated and conveluted to be nesting Widgets inside of Widgets that simply *center* part of a layout.

```dart
//...
          child: new Column(
          // Column is also layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug paint" (press "p" in the console where you ran
          // "flutter run", or select "Toggle Debug Paint" from the Flutter tool
          // window in IntelliJ) to see the wireframe for each widget.
          //
//...
```

This comment further explains how to control layout in Flutter, as well as shows us how to add content to the Widgets. Here the ket `text` is used twice to add text to the widget. 

The second time text is added, the app also passes a `style` attribute, and we see our call to `context`. This sheds some interesting light on `context`. `Context` is referring to the BuildContext of the widget all the way up the tree. It keeps looking to its parent Widget until it finally finds some properties (such as `primarySwatch`) in the App element. This property has been passed down many layers seemingly behind the scenes, with no work done by us. That's nice, particularly for mobile apps (where styling and design is cleaner and simpler).

```dart
//...
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text(
              'You have pushed the button this many times:',
            ),
            new Text(
              '${_counter}',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
//...
```

Lastly in this mini app, we;re adding a button to the screen that will increment the counter when pressed. This style of passing it props is nice and readble, which I like. It reminds me more of Vue than React (a big plus, in my opinon.) This is another place where we're seeing closures at work (similar to context in the paragraph above). That `_incrementCounter()` function is available for us without much work, thanks to the fact that Dart is lexically scoped.

```dart
//...
      floatingActionButton: new FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
//..
```

That's what's going on the simple app that's created when you run the `create flutter` command. But that's just the beginning. Let's dig in.

----
