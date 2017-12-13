---
title: "UX Transitions in Flutter: FadeInImage, AnimatedCrossFade, and Hero Transitions"
cover: "https://unsplash.it/1152/300/?random?Javascript"
type: "Post"
category: "Flutter"
date: 12/05/2017
year: 2017
month: December
tags:
    - flutter
    - mobile
    - ux
    - transitions
---


Imagine sitting and your living room and a friend appearing in front of you, rather than transitioning in the room by walking through the door. That isn't natural, and human brains don't like it.

Animations and transitions are important for modern UX.

#### Three Basic Types of UX Animations
1. Natural Transitions
    - For example, when an image finally loads, just 'popping' in is unsettling. Almost any mdern app is going to load *before* the images finish loading.
2. Responsive
    - It helps the user know what's going on in your app when they can see an event happen in response to an action.
3. Associative
    - Associative animations show when certain elements on a screen are associated with eachother. When element A is pressed, Element B does something. A good example is when a button causes a modal to appear or a page chance. 'When this button is pressed, this element appears'.

## Flutter Transtions

### Image Transitions (Natural)

This transition is simple to implement. I'll argue that should always be used if you're working with a large network Image.

It's used default image while your app goes out on the internet to grab a big ol' image and download it.

<img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_250/v1512936327/blog-posts/ImageTransition.gif'>

In this gif you can see the difference between fading in an image (the profile picture), and letting them pop in (the bottom accessory images).  Notice the hat. It's a larger image file. There's some time before the image loads that it looks like the 'Favorite Hat' text is just hnaging out for no reason.

#### The Code

Having an image transition in after it loads is as easy as providing two images to a `FadeInImage` Widget.

```dart
Widget transitonImage = new FadeInImage(
    placeholder: new AssetsImage('path/to/image');
    image: new NetworkImage('url');
);
 ```

#### Customize

Flutter makes it incredibly easy on us to customize the transition. You have access to the kind of animation, and (more importantly) the duration.

```dart
Widget transitonImage = new FadeInImage(
    placeholder: new AssetsImage('path/to/image');
    src: new NetworkImage('url');
    fadeOutDuration: new Duration(milliseconds: 300),
    fadeOutCurve: Curves.decelerate
);
 ```

> #### Important Properties
> * `placeholder` must not be null. It can be any class that implements `ImageProvider`.
> * `image` must not be null. It can be any class that implements `ImageProvider`.
> * `fadeOutDuration` takes a Duration.
> * `fadeInDuration` works the same.
> * `fadeOutCurve` uses the Curves class to establish the type of animation.
> * `fadeInCurve` works the same.

**NB**: Shorter animations for UX are better. While you can set an animation to seconds, minutes, etc, under 500 milliseconds is usually best.

### AnimatedCrossFade (Responsive)

<img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_250/v1512937801/blog-posts/expanding_text.gif'>

AnimatedCrossFade is used to transition Widgets when they re-render on state change.

Expanding form fields like this is very strong use case for this type of animation. The mobile screen is small. It's important to save space where you can.

#### The Code

1. The  AnimatedCrossFade widget

This is a basic example that uses all four required properties, but nothing else.

```dart
Widget crossFade(Widget first, Widget second, bool fade ) {
    return new AnimatedCrossFade(
        duration: const Duration(milliseconds: 300),
        firstChild: first,
        secondChild: second,
        crossFadeState:
            fade ? CrossFadeState.showFirst : CrossFadeState.showSecond,
    );
}
```
`firstChild` and `secondChild` are the widgets you want to fade between.

The `crossFadeState` will always look like this. It's used to tell Flutter which of the two children to render. Using a ternary you have an easy way to switch back and forth. Here's a complete Widget that will use that animation.

```dart
class Fader extends StatefulWidget {
    ...
}

class _FaderState extends State<Fader> {
    bool fade = true;

    toggleFade() {
        setState(() {
            first = !first;
        });
    }

    Widget crossFade(Widget first, Widget second, bool fade ) {
        return new AnimatedCrossFade(
            duration: const Duration(milliseconds: 300),
            firstChild: first,
            secondChild: second,
            crossFadeState:
                fade ? CrossFadeState.showFirst : CrossFadeState.showSecond,
        );
    }

    @override
    Widget build(context) {
        return new Column(
            children: <Widget>[
                _crossFade(
                    new Text('The First Text Displayed'),
                    new Text('The Second Text Displayed'),
                    fade
                ),
                new RaisedButton(
                    child: new Text('Toggle Fade'),
                    onTap: toggleFade,
                )
            ],
        ),
    }
}
```

**Importante:**
You should put your `AnimatednCrossFade` into a function that returns it. It works this way (and not when the Widget is in the build function) because of the way Flutter's `setState` method and re-rendering work.

#### Customize

You can also customize this fade style to your liking. This is the exact code used to make the animation in the gif above.

```dart
    return new AnimatedCrossFade(
      duration: const Duration(milliseconds: 400),
      firstChild: first,
      secondChild: second,
      crossFadeState:
      fade ? CrossFadeState.showFirst : CrossFadeState.showSecond,
      firstCurve: const Interval(0.0, 0.6, curve: Curves.fastOutSlowIn),
      secondCurve: const Interval(0.4, 1.0, curve: Curves.fastOutSlowIn),
      sizeCurve: Curves.fastOutSlowIn,
    );
```

These new properties are based on animation `curves`. This intimidated me, at first. But, they're actually pretty simple.

Measuring the time within an animation, from beginning to end, is done on a scale from 0.0 to 1.0. So, 0.5 is half way through an animation. (This is the same in CSS). So, imagine the first curve as the 'fade out' and the second curve as the 'fade in'. They happen at the same time, so, in order to make the transition seem natural, they overlap slightly. The fade out is completely done 6/10ths of the way through.

Check out this very slow contrived version. The duration has been expanded, and the fades have been seperated.

<img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_250/v1512940505/blog-posts/contrived-transition.gif'>

```dart
    return new AnimatedCrossFade(
      duration: const Duration(milliseconds: 1000),
      firstChild: first,
      secondChild: second,
      crossFadeState:
      fade ? CrossFadeState.showFirst : CrossFadeState.showSecond,
      firstCurve: const Interval(0.0, 0.3, curve: Curves.fastOutSlowIn),
      secondCurve: const Interval(0.7, 1.0, curve: Curves.fastOutSlowIn),
      sizeCurve: Curves.fastOutSlowIn,
    );
```

It's easy to see that theres a gap in time where the fade out is finished and the fade in hasn't started.

The `Curves` are basically the visual effect that the fades take. For this particular animator, I encourage you to play around the Curve that you pass to the `sizeCurve` property. You can see all the different curve properties here: [Flutter Curves Class](https://docs.flutter.io/flutter/animation/Curves-class.html)

### Hero Animations (Associative)

Finally, we have Hero Animations:

![Flutter Hero Animation](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_350/v1512941315/blog-posts/heroanimation.gif)

Essentially, you're flying an image from one route or page to another. Shopping carts, detail pages for items, profile pages -- the use-cases are abundant.

Hero Animations can get a bit more complicated than transitions, but Flutter has still made it super easy.

> Flutter Hero Animations in 4 Steps
> 1. Establish an element -- most likely an image -- on your page. Wrap it in some special widgets: `Hero` and `Material`.
> 2. Make The widget tapable by wrapping it in an Inkwell.
> 3. `onTap`, push a new MaterialRoute onto the `Navigator`.
> 4. In that new route, the same element should exist, wrapped in the same special widgets, with the same tag.

The most basic of implementations:

```dart
class MyPage extends StatefulWidget {
    // ....
}

class _MyPageState extends State<MyPage> {
    @ovverride
    Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('My Transitions),
      ),
      body:
        child: new Column(
          children: <Widget>[
            new Hero(
                // Tag is required and must match exactly.
              tag: 'hero01',
                // You must wrap your Inkwell in a Material Widget
                // This is where the animation comes from.
                // It will work without it, but it simply pops from one screen to the other.
              child: new Material(
                  // Any Widget that makes it tap-able will do.
                child: new InkWell(
                  onTap: heroAnimation,
                  child: new Image.network(
                      'url to image'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  heroAnimation() {
      // Here, you're pushing to the next page when the image above is tapped.
    return Navigator.of(context).push(
      new MaterialPageRoute<Null>(builder: (BuildContext context) {
        return new Scaffold(
          appBar: new AppBar(
            title: new Text('Hero Page 2'),
          ),
          body: new Container(
              child: new Hero(
                  tag: 'hero01',
                  child: new Material(
                    child: new InkWell(
                        // On tap, go back to the other page. This isn't necessary.
                      onTap: () => Navigator.of(context).pop(),
                      child: new Image.network(
                          'same url to image'),
                    ),
                  ),
                ),
              ),
          ),
        );
      }),
    );
  }
}
```


That's it. That gives you a super basic example. You'll probably want to play around with making the photos on the separate routes different (in size, location on page, etc). Get creative with it.

#### Use Animations Well

These three animations are *never* overkill. They aren't used for delight, they're used for a great user experience.

The first two animations should be used liberally throughout an app. If we consider Pareto's Law, those two animations alone will give you 80% of the 'good ux animation' results. The Hero Animations will give you another 19%.
