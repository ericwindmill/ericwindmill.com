---
title: "Step By Step: Planning a Web Application"
category: "Programming"
type: "Post"
date: 06/13/2017
year: 2017
month: June
tags:
    - programming
    - web application
    - react
    - rails
    - planning
---

# How I Plan A Web Application

Someone with much more experience told me that the most common mistake they see new programmers make is not taking the planning phase seriously. 

I’m definitely guilty of this. 

It’s a bad habit, but sometimes I just get so excited I jump in.  Call me over-zealous. Usually, this ends up in confusion and frustration. And ultimately, it usually ends in abandonment. 

I’m starting a new project today, so I thought I’d document my planning process.

## The Project
The project I’ll be making will allow users to see concerts that are happening in their city that night, and then make a Spotify playlist based on the ones they’re interested in. The working title is Live Tonight. 

This app will have very little stored data, but relies on 3 different APIs: Google Maps, BandsInTown (or song kick) and Spotify. Essentially, the user will land on a page, and see a map of their city. The map will have markers showing the locations of all the bands playing in the area tonight. Using the Spotify API, there will be a playlist on the screen that allows you to check out the bands playing in your area tonight, so you can make an informed decision to impulsively see a band tonight. 

## Start Planning
Like my man Abraham Lincoln once said: Give me 6 hours to chop down a tree, I’ll spend the first 4 sharpening my axe. 

When I start planning, I usually start with a really basic wireframe. I like to develop from a ‘user-story’ approach, so it helps me to think about the UX from the jump.

These are the questions I think about when laying out a new app: 

1. **Who’s going to be using the app?** 
When considering the ‘who’, I’m thinking about the following questions: 
		* How tech-savvy are the people using this app? 
		* How long will people generally want to spend on the app?
		* In what environment will people most likely be using the app?
		* In what mindset will most users be in?
	
2. **What are they going to be using it for?**
For example: When I created my personal website, I considered the fact that its mainly used for clients or companies to see my work. So it needs to focus on my portfolio. Therefor, I removed about 90% of the functionality, I took my ego out of it, and I just listed my portfolio in an interesting way. The client looking at my page is going to want to spend about 15 seconds on my page, so it’s in the best interest of the website to remove all the barriers from seeing that portfolio.

NB: This is my rule of thumb for UX: Get the content to the user with the least resistance possible.

3. **How can it be arranged in an intuitive way?**
Once you know how and who will be using the page, how can you lay it out in a way that your target user will ‘get it’ in just a couple seconds. 

This phase usually comes in the form of thinking and scribbling in a notebook.  It’s my pre-wireframing wire framing.  (Pictures below).


#### Brainstorm the Audience
People using my app will most likely be younger, because it will be people looking to spontaneously go to a concert. So I can predict that my users will be anywhere from 20 to 40. More importantly, they’re people who are very comfortable with using technology.

I imagine the mindset the average user is in will probably generally positive and in the mood to have fun. 

It helps me to imagine a very specific person using my app (or a very specific situation in which I would use the app.)

For this application, I imagine my brother and his friends at the beginning of weekend night sitting in his living room drinking beers, deciding wether they should go out that night. They’re music lovers, so concerts will probably come in the conversation. At this point, they’d want to see what’s going on around town, and check out the options. 

My brother and his friends are in their early 30s, can afford to spend money on concerts and beer, are tech savvy, etc… I’ve deduced a lot about my target user by imaging someone specific and the situation in which they would actually want to use the app. 

An important point here is that the user will most likely not be my grandma. That would fundamentally change how the app was laid out and designed.

Now that I’ve thought through this, I start doodling a layout:

![](http://res.cloudinary.com/ericwindmill/image/upload/v1499019865/blog_posts/live-tonight-sketch-2.jpg)

You might have noticed that I have measurements on the x and y axis of the large drawing. 12” wide is approximately what I develop for, because 13” MacBooks are the standard. (This is backed by no research what-so-ever, but it’s an assumption).

### Planning and Re-Planning
If you look at the ‘wireframes’ above, you may see that there are some things crossed out.
This is a perfect example of why I do UX planning and wireframe sketches first.

I have an idea of what the app will look like in my mind, and I know (to a degree) what functionality and data that will require. 

For this app, I thought I would have a ‘shows’ component that simply lists the shows going on tonight, and has radio selectors that allow the user to select which shows they’re interested in.

When I started drawing, I realized two things: 
	1. There’s a quite a bit of ‘show info’ for each show listed.
	2. The app would be really ugly and image-less with my current idea. 

These lead me to the realization that I need a ‘show detail’ slice of state that renders when a show is clicked. 

Now, I change directions.  I need a really simple <li> for each show that has an image of the artist, the artist name, the venue, and maybe the openers. 

Then, when you click the <li>, you’ll be able to see more information, such as time, cost, genre, etc. 

![](http://res.cloudinary.com/ericwindmill/image/upload/v1499019863/blog_posts/live-tonight-sketch.jpg)

This changes the way that this app will function, so it’s a good thing that I had this realization now, and not after I started coding. 

NB: These early hand-drawn sketches simply need to make sense to ME. Before I share them with anyone, I’ll make real wireframes on my computer. They’re mainly to think through ideas. 

After a bit more drawing, I think I have a basic outline, which means I can move onto wire framing in Sketch. 

NB: Sketch is expensive and has a learning curve. If you don’t have sketch, I suggest using Balsamiq, which you can use for a month for free. I’ve used it once at a hackathon and it’s fantastic.

When I start wire framing, I set my artboard in sketch to 1200 x 750 pxs, to roughly develop for the standard screen size. It’s hard to do these days.

NB: Wire-framing and lay outing are NOT designing. No color, no typography!

Here’s my first wireframe. This is more detailed than most wireframes, to be honest. I’m obsessed with details though, so it took all I had to stop here. 
![](http://res.cloudinary.com/ericwindmill/image/upload/v1499019863/blog_posts/live-tonight-wireframe.png)

This app has a pretty simple user-facing page. There’s basically only one view. That makes wire framing easy. For some past apps, I have 5 - 10 wireframe art boards, if its more complex.

This wireframe completes the UX planning, so its time to move on to functionality planning!

## The Functionality
### 1. The Minimum Viable Product
 What are the minimum functionality requirements for making this product? What features are absolutely necessary for this  app to work? 

When you’ve decided on these, you should build your app based on these features only. If comments would enhance the experience, but aren’t core functionality, skip the comments. 

My MVPS are: 
- [ ] Users can see a map that displays shows in town tonight.
- [ ] Users can select which shows they’re interested in.
- [ ] Users can listen to a playlist based on those selections.
- [ ] README.md (This is essentially to remind myself not to get lazy about the Read Me. They’re incredibly important if you expect anyone to ever look at or work on your project. 

Thats it. Should users be able to see shows happening next week? Probably, but that isn’t core functionality.  It’d be nice if users could filter the map markers by genres they’re interested in. 

Maybe a user should be able to change location, incase they’re making travel plans. All of this is nice, but not core.  If you need to add more features, your users will tell you AFTER you’ve gotten a beta out. 

**Common MVPs to consider:**
Do your users have accounts and will you need authentication?
What should your user because to create, read, update and destroy?
How does the the user interact with other data? (i.e. can they like posts or follow other users?)

I always take the ‘user-story’ approach to MVPs. ‘Users can…’



### 2. The DB Schema
What kind of data are we going to store, in what kind of database?

The type of backend you’re using matters here. If you’re using noSQL database, this may not translate perfectly.

Otherwise, this step is backend technology and (SQL) database agnostic.

Think about your schema. This is probably, in my opinion, the most important step to planning out your backend. I think about data flowing from the database forward to the user-facing rendered components.  That means that if you have to change your database later on, you have to change every single thing in the data flow. You don’t want to have to do that. 

**First DB question: What tables will your database have?**

My app doesn’t have persisted user data, and it’s getting most of its information from API’s. So I’ll only be using one table.
```javascript
// shows table
	artist_name: string
	artist_img: string (url)
	support_name: string
	venue: string (venue name)
	location: coordinates
	city: string	
	date: date object	
	price: integer
```
I could potentially use a ‘venues’ table as well, and then connect the venue to the show, but I don’t think that’s necessary because each and every show will have venue information from the API I’m getting. The location is a property of the show, not something that exists (in my app) without it.

An example second table that I could have is a Users table that allows the user to keep track of future and past shows. That would require a joining table called User_shows. 


### 3. What technology do we want to use on the front end? 
For a single page app that relies completely on re-rendering components when new data comes in, I don’t think there’s a better framework than React. And because I like being able to trace data for debugging, I’ll throw Redux in for good measure.


### 4. What API endpoints are we going to need to interact with the database?

In what ways do we need to interact with the data? We need to be able to create new shows, and view the shows. That’s about it. 

`POST /shows/`
`GET /shows/id`

For this app, I won’t need to update shows, because that information is coming straight from SongKick. I won’t need to delete shows, for the same reason. There is very little user interaction, so all of the database interaction will be simply fetching or writing data. 

### 5. What is your front-end state going to look like?
This is so crucial.

Seriously, I’ve spent more time paying code debt because I planned my state poorly…

A good state is a flat state. A flat state is any that isn’t deeply nested. I’d say if you’re nesting data a third level, you should refactor. 

**Here’s an example of a very poor state:**

```
VERY POOR STATE:
Shows: {
	1: {
		venue: {
			name: MAdison Square Garden,
			x-coordinate: 56.9438545,
			y-coordinate: -112.3903284,
		},
		artist: {
			name: Conor Oberst,
			genre: folk rock
		},
		attending: {
			users: {
				45: {
					user_name: jane_smith,
					location: san_francisco,
					email: jane@gmail.com
					attends: {
						1: {
							artist: conor_oberst,
							venue: madison_square_garden
						}
					}
				}
			}
		}
```

Whats wrong with this state? It’s obvious that it’s nested very deeply, but why is that an issue?

A few reasons. First, accessing this data is going to be a pain in the ass in the code. In redux you may find yourself typing something like:
`attending_count = this.props.shows[0].attending.users.forEach... `

And that wouldn’t even work. You’d first have to make some functions that translates your users object into an array. But you get the point. 

The second issue is worse, because it actually affects the users. Each time you land on the ‘Shows Index’ page (where all the shows for tonight are listed), you’d have to query all the shows, and within each of those you’d have to query all the users who’re attending each show. And within that you’d have to query all the shows that this user is attending!

So how do you get around this issue?
Basically, decouple the slices of state, and query based on ‘joins tables’ in your state. 

Rather than have users nested under the show, there should be a users-shows slice of state where each user is connected to a show, and then query all the users who have a connection to that show via the ‘joins’ slice of state.

This is a fantastic and short read in the Redux documentation:
[Normalizing State Shape · Redux](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)

I’ve gotten to far off track… this isn’t a lesson in Redux.

Long story short: Plan your state!

My state will be simple because the data is completely relational.  The size of my state at any given point will rely on the number of shows happening based on the view size of the map. 

```JSON
shows: {
	1: {
		artist_name: 'Conor Oberst'
		artist_img: 'http://pictureofconnor.jpg'
		support_name: 'Jim James'
		venue: 'The Filmore'
		location: {
			x : 34.435435,
			y: -10.234234
		},
		city: 'San Francisco',
		date: 2017:12:31:21:00:00,
		price: 30
	},
	2: {...}
	3: {...}
}
```



### 6. Plan The Component Hierarchy
NB: This step applies only to single-page apps, but its 2017, so I assume that’s what you’re building.

The next thing I do is plan exactly what my component hierarchy is. Which components will be nested under which? Which will replace others on re-renders? 

First, I’ll take my wireframes and identify the components that I can see on the page:
![](http://res.cloudinary.com/ericwindmill/image/upload/v1499019862/blog_posts/live-tonight-heirarchy.png)



This visual is all I need to write down the hierarchy. And, thanks to this brilliant article in the React docs, I know exactly how to lay out my hierarchy. 

[Thinking in React - React](https://facebook.github.io/react/docs/thinking-in-react.html)

Anyways, based on that wireframe, I’ll end up with a hierarchy like this: 

```markdown
* App
	+ Nav
	 	- Logo
		 -Search Bar
	+ Map
		- Show Detail Bubble
	+ Shows Index
		- Show List Item
		- Show Detail (renders on <li> click)
	+ Playlist Index
		- List container
		- Now Playing Container
```

This is, again, a very simple hierarchy. This app will do only one thing. If your hierarchy is much larger, thats okay!

### 7. Start building… 
That’s it. That’s my process.  If you’ve done all this, you should have enough direction to get started.

What do you think? If you have comments or questions, reach out! I’m always looking to improve my processes and practices. 