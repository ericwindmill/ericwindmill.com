---
title: "Zero to One with Flutter: Google Maps App (Pt. 2)"
cover: "https://unsplash.it/1152/300/?random?Javascript"
type: "Post" 
category: "Flutter"
date: 12/02/2017
year: 2017
month: December
tags:
    - flutter
    - mobile
    - google
    - maps
---

This post is the second part of a two part series on settings up a basic app in Flutter that uses Google Static Maps. [Checkout part one.](/zero-to-one-with-flutter-google-maps-app-pt-1).

Also, this post is inspired by [this post about using Flutter Animations](https://medium.com/flutter-io/zero-to-one-with-flutter-43b13fd7b354).


### Make the Map Dynamic

Where we left off, we're simply rendering a static map of the United States. Let's add the functionality for the map to display your current location. This step has multiple parts:

1. Install Flutter location package.
2. Add a button that will get our location when pressed.
3. Rerender the map.  

### Flutter Location Package

We'll be using this package: [Flutter Location](https://github.com/Lyokone/flutterlocation). 

This package is easy to use. Which is great if you're like me and have never developed natively on mobile.

To install the package:

In `pubspec.yaml`, under dependencies, add the package: 
```yaml
dependencies:
  flutter:
    sdk: flutter
  location: ^1.1.6
```

Then, install the package:

```text
pub get
```

Then, you have to add the permissions to use the device location: 

In the file tree, go to `ios/runner/info.plist`.

Add these lines four lines under the `<dict>` tag.

```yaml 
<dict>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>The app would like to use your location</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>The app would like to use your location</string>
    // ...
```

That's all for set up on iOS. To set up for Android also, follow the instructions [here](https://github.com/Lyokone/flutterlocation).

### Using the Package

The package is super easy to use. Simply import the package in your `main.dart` file. You'll also need to import Dart's async library, so might as well pull that in:

```dart
import 'dart:async';
import 'package:location/location.dart';
```

Then, in your App's HomepageState widget, establish a new instance of the Location class. I'm also establishing a variable that we can assign our location values to. 

```dart
Location _location = new Location();
dynamic deviceLocation;
```

Now, we can access the tools that this library gives us. I simply wrote a helper function that finds the devices current location.

```dart 
  Future<Null> findUserLocation() async {
    Map<String, double> location;
    try {
      location = await _location.getLocation;
      setState(() {
        deviceLocation = location;
      });
    } catch (exception) {}
  }
```

This library will return a map full of key's, which are location attributes (`latitude`, `longitude`, `altitude`, etc) and values which are `double` representations of the keys. As long as the user allows the app to use location data, then your `deviceLocation` will now look someting like this: 

```dart
{
  "latitude": 0.0,
  "longitude": 0.0,
  "altitude": 0.0,
  "accuracy": 0.0,
}
```

### Hook it up to the map:

Finally we need to add a button that: 
1. Fetches our location.
2. Set's the state with the new location.
3. When the state is set, it will rebuild our staticMapProvider Widget, so we need to refactor that a bit too.
    
#### Refactor your StaticMapProvider

The SMP now needs to take in a location, and render the location it's given, or a default if none is given. To acheive this, give the SMP an optional argument: 

```dart
    class StaticMapsProvider extends StatefulWidget {
      final String googleMapsApiKey;
      final Map<String, double> currentLocation;
      
      StaticMapsProvider(this.googleMapsApiKey, {this.currentLocation});
      
      // ...
```

Now in our _buildUrl() method, we'll want to keep the base URL, but then add query parameters if theres a location. 

```dart 
  _buildUrl() {
    var baseUri = new Uri(
        scheme: 'https',
        host: 'maps.googleapis.com',
        port: 443,
        path: '/maps/api/staticmap',
        queryParameters: {
          'size': '${defaultWidth}x$defaultHeight',
          'center':
              '${defaultLocation['latitude']},${defaultLocation['longitude']}',
          'zoom': '4',
          '${widget.googleMapsApiKey}': ''
        });
    var finalUrl = baseUri;

    if (widget.currentLocation != null) {
    // this replaces the entire `queryParameters` property, so we have to pass in size, zoom, and apiKey again.
      finalUrl = baseUri.replace(queryParameters: {
        'center': '${widget.currentLocation['latitude']},${widget
            .currentLocation['longitude']}',
        'zoom': '4',
        '${widget.googleMapsApiKey}': '',
        'size': '${defaultWidth}x$defaultHeight',
      });
    }

    setState(() {
      renderUrl = finalUrl.toString();
    });
  }
```


This is not necessarily 'good code'. I realize that. It's contrived and not DRY. That's fine, because we're just going to keep refactoring this until we can handle all the functionality we need to.

### Add the Button

Finally, back in our `main.dart`, add the raised button we'll need:

```dart
    //... the build method in _MyHomePageState:
    
      @override
      Widget build(BuildContext context) {
        return new Scaffold(
          appBar: new AppBar(
            title: new Text(widget.title),
          ),
          body: new Container(
            child: new Column(
              children: <Widget>[
                new StaticMapsProvider(googleMapsApiKey, currentLocation:deviceLocation),
                new Container(
                  // Some extra layout code to save us time in the future:
                  margin: const EdgeInsets.only(top: 5.0),
                  child: new Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      new RaisedButton(
                        onPressed: findUserLocation,
                        child: new Text('Get My Current Location'),
                        color: Theme.of(context).primaryColor,
                      ),
                    ],
                  ),
                ),
              ],
            )
          )
        );
      }
    }
    
    //... 
```

#### What You Have So Far:

![Gif demonstration](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1513448014/get_location_z0pvdy.gif)

Nice! An app that renders static maps based on device location. This is nice, but we need to add *a bit* more functionality to see how this can be useful.

Aso, this is obviously ugly, but Flutter makes it really easy to solve that problem with transitions and animations. [Here's an article I wrote on making those useful](http://ericwindmill.com/ux-transitions-in-flutter-fade-in-image-animated-cross-fade-and-hero-transitions). 

### Reset Button

First, let's add the reset button quickly. This button will let you re-render the app back to default, which is nice for testing. Start by adding the Button to your `main.dart` build function:

```dart
    //...
    new Container(
      margin: const EdgeInsets.only(top: 5.0),
      child: new Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          new RaisedButton(
            onPressed: findUserLocation,
            child: new Text('Get My Current Location'),
            color: Theme.of(context).primaryColor,
          ),
          // The new code:
          new RaisedButton(
            onPressed: resetMap,
            child: new Text('Reset Map'),
            color: Theme.of(context).primaryColor,
          ),
        ],
        //...
```

And now, add the `resetMap` method. 


```dart
  void resetMap() {
    // Flutter knows to rerender, but it's passing null to our StaticMapsProvider, which means it'll render the default values.
    setState(() {
      deviceLocation = null;
    });
  }
```

### Add Markers

If you look at the finished product, which can be found in [this repository](https://github.com/ericwindmill/flutter-static-maps-demo), you'll see that there are several different pieces of functionality we can add. I believe that dynamically rendering markers is the most useful and the most difficult, so let's tackle that for now.

Unforunately, this requires quite a bit of refactor. 

Right now, our StaticMapProvider is expecting to possibly receive a location to center on. In order to place markers, you may want to pass multiple locations. So the first thing we need to do it refactor the SMP to accept that. 

In the SMP, change the widget's `currentLocation` to a list of locations:

```dart
class StaticMapsProvider extends StatefulWidget {
  final String googleMapsApiKey;
  final List locations;

  StaticMapsProvider(this.googleMapsApiKey, {this.locations});
  //...
```

Then we need to change our `buildUrl` method.

* You can remove the query params from the baseUri declaration. From here on out, we will use the same baseUri no matter what, then add query params based on the locations passed in.
* We need to check if this is picture without markers or with. The difference between this maps is that without markers there is only one location. So if there is only one location, we'll add certain query params. 
    * When there are no markers: The SMP class will **always** take an array of locations. Even if there is only one location. There for, whether it's the devices current location or the default, hardcorded location, we'll want want to render the `longitude` and `latitude` associated with the first location in the `locations` list.

```dart
  _buildUrl() {
  var finalUrl;  
  var baseUri = new Uri(
        scheme: 'https',
        host: 'maps.googleapis.com',
        port: 443,
        path: '/maps/api/staticmap',
    

    if (widget.locations.length == 1) {
      finalUrl = baseUri.replace(queryParameters: {
        'center': '${widget.location[0]['latitude']},${widget
            .location[0]['longitude']}',
        'zoom': '4',
        '${widget.googleMapsApiKey}': '',
        'size': '${defaultWidth}x$defaultHeight',
      });
    }

    setState(() {
      renderUrl = finalUrl.toString();
    });
  }
  
  // .. And then add a check in your build method:
  Widget build(BuildContext context) {
    // If locations is empty, then we need to render the default map.
    if (widget.locations.length == 0) {
      widget.locations.add(defaultLocation);
    }
    _buildUrl();
    return new Image.network(renderUrl);
  }
```

Until we refactor `main.dart` to pass our StaticMapsProvider a list of locations, this won't work. Let's do that next:

We need to change... 
* ... the device location to a list of locations.
* ... the `setState` methods of `findUserLocation` and `resetMap`.
* ... what we pass into our StaticMapProvider widget.

```dart
class _MyHomePageState extends State<MyHomePage> {
  String googleMapsApiKey = 'AIzaSyCzxj6UFfx8uvDaaE9OSSPkjJXdou3jD9I';
  Location _location = new Location();
  // This needs to be initialized as an empty List or the SMP widget will break. 
  List locations = [];

  Future<Null> findUserLocation() async {
    Map<String, double> location;
    try {
      location = await _location.getLocation;
      setState(() {
        // this is now what SMP will expect
        locations = [location];
      });
    } catch (exception) {}
  }

  void resetMap() {
    setState(() {
      // We never want to pass null to SMP, this will do: 
      locations = [];
    });
  }
  //...
```

Then, in the build method, simply change the second argument to StaticMapsProvider constructor:
```dart
children: <Widget>[
  new StaticMapsProvider(googleMapsApiKey, locations: locations),
```

### Add Markers

This refactor gets us back to where we need to be in order to start giving the map some markers.

Let's start by adding the UI, where the user can insert a Lat and Lng. Underneath your `Current Location` and `Settings` buttons, add this code to the `Column` widget's children. 

```dart
 new Container(
    margin: new EdgeInsets.symmetric(horizontal: 25.0, vertical: 25.0),
    child: new Column(
      children: <Widget>[
        new TextField(
            controller: _latController,
            decoration: const InputDecoration(
              labelText: 'latitude',
            )),
        new TextField(
            controller: _lngController,
            decoration: const InputDecoration(
              labelText: 'longitude',
            )),
        new Container(
          margin: const EdgeInsets.symmetric(vertical: 10.0),
          child: new RaisedButton(
            onPressed: handleSubmitNewMarker,
            child: new Text('Place Marker'),
            color: Theme.of(context).primaryColor,
          ),
        ),
      ],
    ),
    ),
```

And, in order to make this work, we need to add some more functionality to our Widget. Add these text editing controllers to the widget:

```dart
class _MyHomePageState extends State<MyHomePage> {
  Location _location = new Location();
  List locations = [];
  String googleMapsApi = 'AIzaSyCzxj6UFfx8uvDaaE9OSSPkjJXdou3jD9I';
  TextEditingController _latController = new TextEditingController();
  TextEditingController _lngController = new TextEditingController();
```

Text editing controllers are what allow us to get the values of text fields, clear text fields, etc. They're a bit outside the scope of this tutorial, but this is pretty much the extent of their use in 90% of cases I've come across.

We'll also need to write the method that gets the information from these text fields and turns it into something useful for us. This is what I wrote:



```dart
  void handleSubmitNewMarker() {
    String lat;
    String lng;
    // grab the values out of the text fields: 
    lat = _latController.text;
    lng = _lngController.text;

    // Add the new location to the locations List.
    // Doing this inside SetState will cause a re-render:
    setState(() {
      locations.add({"latitude": lat, "longitude": lng});
    });
    
    // clear the text fields so its more user friendly: 
    _lngController.clear();
    _latController.clear();
  }
```

This is all that the `main.app` state needs to do. But right now, if you try to add a marker, all of the checks in StaticMapProvider class will fail. We've only written what to do if there's only one location in our `locations` List. By adding a marker, there are now two locations. Let's fix that. 

The bulk of the work is in the `_buildUrl` method.

Google's Static Maps api expects each marker's lat and lng to be passed in as a query parameter, separated by pipes (`|`). The approach here changes the way we build the query params -- the base URI stays the same.

1. Check the length of the `location` List. (If it's 1, we've already handled that.)
2. If it's more than 1, we need to build the `markers` portion of query params.
3. For each location, build a new String formatted like this: `'latitude,longitude'`.
4. Join each of those mini strings with a `|`.

The conditional statement that checks width should now look like this: 

```dart
if (widget.locations.length == 1) {
  finalUrl = baseUri.replace(queryParameters: {
    'center': '${widget.locations[0]['latitude']},${widget
        .locations[0]['longitude']}',
    'zoom': '4',
    '${widget.googleMapsApiKey}': '',
    'size': '${defaultWidth}x$defaultHeight',
  });
} else {
  List<String> markers = new List();
  widget.locations.forEach((location) {
    var lat = location['latitude'];
    var lng = location['longitude'];
    String marker = '$lat,$lng';
    markers.add(marker);
  });
  String markersString = markers.join('|');
  finalUrl = baseUri.replace(queryParameters: {
    'markers': markersString,
    'size': '${defaultWidth}x$defaultHeight',
    '${widget.googleMapsApiKey}': ''
  });
}
``` 

Now, you should be able to Focus on your current location, reset the map, and place markers anywhere. Here's a screen shot:

![Maps App](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1513448013/Simulator_Screen_Shot_-_iPhone_8_Plus_-_2017-12-16_at_10.09.08_cpyfaw.png)


### Fin

It's fairly simple to make use of Google Maps, even though we're faking it. And this is just the very basics of it. If you look at the finished product, you can see that I've implemented `zoom` functionality, fading map re-renders for a smoother experience, and buttons disabled based on what you can do. If you'd like to see how I've implemented that, checkout [the repo on github](https://github.com/ericwindmill/flutter-static-maps-demo).