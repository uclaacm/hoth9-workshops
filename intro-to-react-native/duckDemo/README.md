# Hack on the Hill 9 - Intro to React Native

**Date**: February 26, 2022

**Location**: Virtual

**Teacher**: [James Wu](https://github.com/jamesmwu)

Hello and welcome to our Intro to React Native workshop README! We'll be covering the basics of React Native in a way that I hope is simple to understand and impactful enough to teach some key features of app development. Happy hacking!

## Resources
- [Slides](https://docs.google.com/presentation/d/1hPfBtJzcgahXPLuJlQ6y0HcmpqrflBbZPpmL5e1vTQE/edit?usp=sharing)
- Workshop Recording (coming soon)

## What we'll be learning today
- [Hack on the Hill 9 - Intro to React Native](#hack-on-the-hill-9---intro-to-react-native)
  - [Resources](#resources)
  - [What we'll be learning today](#what-well-be-learning-today)
  - [Introducing React Native](#introducing-react-native)
    - [Native Development](#native-development)
    - [Cross Platform Development](#cross-platform-development)
    - [React Native](#react-native)
  - [Basic Setup](#basic-setup)
    - [Installations](#installations)
    - [Expo Go](#expo-go)
    - [Creating a Project](#creating-a-project)
  - [JSX](#jsx)
    - [What is JSX](#what-is-jsx)
  - [Views, Components, and Stylesheets](#views-components-and-stylesheets)
    - [Components](#components)
    - [Views](#views)
    - [Imports](#imports)
    - [Stylesheets](#stylesheets)
  - [Custom Components](#custom-components)
  - [Functionality](#functionality)
    - [TouchableOpacity](#touchableopacity)
    - [useState()](#usestate)
  - [Closing Comments](#closing-comments)

## Introducing React Native
Disclaimer: React Native is EXTREMELY dense, and has a lot of material to cover. An understanding of basic JavaScript, HTML, and CSS will be beneficial for this, though it's not required! However, I'd strongly recommend checking out our other workshop on those topics if you haven't already.

### Native Development
To understand what exactly React Native does, first we must understand what it means to natively develop an app.

*Native apps* are apps that are directly installed on your mobile device. This means, apps that are created particularly for your kind of device. An issue with native development is that it was (previously) only able to be created with *platform-specific* tools and languages.

This means that to develop an iOS app, for example, you might write your entire program in Swift. But to develop for Android, you might write your entire program in Java, with no easy way to go from one into another. You'd basically have to rewrite the same app twice!

So, what's the solution for this problem?

### Cross Platform Development
Cross platform development is a way to build apps across multiple platforms using *one codebase*. This means that you can only write your code once, and then have it work equally well for both iOS and Android! (Or any other phone.) 

### React Native
React Native is a JavaScript tool backed by Facebook (now Meta) that builds these native apps. Essentially, JavaScript is translated into the native code for each platform!

React Native is a very popular option for cross platform development. However, there are other alternatives such as Ionic, Flutter, or Xamarin that are available as well. 

There are plenty of apps that are developed in React Native, including Facebook, Instagram, Discord, Shopify, Tesla, Uber Eats, and many, many more!

Here is a showcase of dozens more apps, if you're curious: https://reactnative.dev/showcase

## Basic Setup
### Installations
React Native requires several things installed in order to properly get your development environment up and ready. Here are the core things needed!

- VSCode: https://code.visualstudio.com/download
  - The text editor we'll be using to type our code!
  - Install the appropriate version for your device (Mac, Windows, etc.)
- Node.JS: https://nodejs.org/en/
  - Starts up a server for us to host and run our code on! (Basically, lets you look at the results of what you code on a simulator.)
  - Install LTS version-- this is just the most tested version.
- Expo Go: https://expo.dev/client
  - Only use this download link if you plan to simulate your code directly on your phone!
  - There are more steps required to install Expo Go. Read further to find out!

### Expo Go
Open the terminal in VSCode.

FOR WINDOWS:
- Type `npm i -g expo-cli` to install expo
- FOR MAC:
Type `sudo npm i -g expo-cli` to install expo

Like the other installations, this is only needed once! After you install it initially, you should be good to go.

### Creating a Project
Open a folder in VSCode, and open a folder you want your project file to be located in. When we create a new project, the project will automatically create its own folder with all the particular files in it.

After this, in your terminal on VSCode, type `expo init name`, where `name` is just whatever you want to call your project. So, for example, you could replace `name` with `myFirstApp` or `hackathonApp` or just any name you want.

![Expo Start Project Terminal](./images/../../Images/Expo%20Start%20Project%20Terminal.png)

Press enter after typing that into the terminal, and you should see a screen similar to this. Navigate using the arrow keys, and select the `blank` template.

Then, to run your code, type `Expo start`! You can use a simulator to test your code (if you have XCode on a Macbook), or you can scan the QR code to directly see the app on your phone. However, to scan the QR code, you must have the Expo Go app installed on your phone (link posted under installs.)

## JSX
### What is JSX
JSX is the programming language used in React Native. However, it is essentially a combination of JavaScript and XML-- which is pretty much a combination of JavaScript and HTML. If you don't know what either of those are, that's ok! All you need to know is that JSX lets us write user interface components using JavaScript. In other words, we can quickly edit how our app looks by using JSX.

It does this by storing something called "markup" code into variables, before directly writing it into JavaScript. ("Markup" is just a fancy term for how we format our screen.)

A brief example of what JSX looks like:
```jsx
<View> 
  <Text>Hello!</Text>
</View>
```

Of course, this is only a very fundamental example, but there's so much syntax that it'd be difficult to give an example of every single one (and I doubt that's much fun to read, either). Instead, as you follow through this workshop, you hopefully will gain a better understanding and feel of syntax, and of course if you're ever stuck-- this isn't some math test. Google is your friend.

## Views, Components, and Stylesheets
These are the meat and potatoes of React Native. They're how we'll be putting things onto our screen, and formatting them!
### Components
Components are basic app elements that React Native provides to us. Some basic examples of this include `<Text><Text/>` and `<Image/>`-- or text and images. However, there are dozens of components, including buttons, scrollView, textInput, and so much more. 

Text and Image are two of the most used components. Their syntax is as follows:
```JSX
<Text> Good luck at this Hackathon! </Text>
<Image source={require("duck.png")} />
```
...where the first line of code will show "Good Luck at this Hackathon!" and the second line will show an image of some file named "duck.png". For images, you also often need to include the filepath to the image-- such as "./assets/duck.png" if the image was in your assets folder, as an example. If you're still confused about this, I recommend looking at the video for a clearer demonstration!
### Views
Views are containers that hold components! However, views themselves are invisible. Basically, views are useful in that we can sandwich multiple things within them in order to format things are group things together. The syntax for a view is:
```JSX
<View>
// stuff goes inside here
</View>
```
Example of putting multiple components inside a view:
```JSX
<View>
  <Text> Good luck at this Hackathon! </Text>
  <Image source={require("duck.png")} />
</View>
```
### Imports
Remember how React Native is cross platform? Well, because of this, it uses bits and pieces of other code from different places. This is because the program needs to know where you're getting certain functions from. For example, to use an `Image` component, you must import it at the top of your code.

React Native usually automatically does this for us, but occasionally it misses something, which results in errors when we try running our program.

An example of an import is as follows:
```JSX
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
```
This is from the program we created in the demo, and if you're just reading through this README you might not understand what all of those components are (like what the heck is a TouchableOpacity or useState??). Don't worry about what those particular things are, but just know that this syntax is what imports tend to look like! Your imports will likely look very different from mine, depending on what kind of app you make.

### Stylesheets
Now, we're able to put components onto our screen, but they may not look how we want them to at all! Say you wanted the background of your text to be blue, or your image to be aligned a certain way. How do we do that?

Stylesheets! Stylesheets are the most common way to format views and components in React Native. We put all the formatting for a view under one "style" that we get to name, and can include multiple styles under one stylesheet. As an example, let's take a look at the following code:

```JSX
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.chickenButtStyle}>Guess what? Chicken butt</Text>
      <Image style={styles.duckStabbyImageStyle} source={require('./assets/DuckStabby.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chickenButtStyle: {
    backgroundColor: 'pink',
    padding: 20,
    borderColor: 'blue',
    borderWidth: 5,
  },

  duckStabbyImageStyle: {
    borderWidth: 10,
    borderColor: 'red',
  },

});
```
WOAH! That's a lot of code. But DON'T LET THIS INTIMIDATE YOU! Let's break it down. At the beginning, we have our app code on its own-- a view, holding a Text and Image component. However, now there's something new. At the bottom of our total code, there's a constant called `styles` that's declared. Notice that inside this stylesheet, there are three styles I created-- one named `container`, one named `chickenButtStyle`, and one named `duckStabbyImageStyle`. Inside each of these styles are particular formattings that specify "flex" (which is just like alignment on the screen), backgroundColor, borderColor, and so on.

I won't get into the specifics of all the formats possible (mostly because it's a lot and we're already pressed for time), but there are plenty of different formatting settings and you can look up one that meets your particular need if you want to do something beyond what I listed here!

But notice that after I declared each style, I needed to specify what component to apply each style to. The overall view that contains everything has the "container" style applied to it, which you can observe in the syntax:
```JSX
<View> style={styles.container}>
//A bunch of stuff inside
</View>
```
This is basically telling the program "HEY! THIS VIEW SHOULD BE FORMATTED WITH ALL THE STUFF UNDER THIS THING CALLED 'container'!"

And the same goes for `chickenButtStyle` and `duckStabbyImageStyle`.

Notice the curly brackets we use in the declaration? Those are examples of JSX being applied into our code! JSX basically lets us use those curly brackets to take something from the styles sheet ("container", in this case) and apply it to a component.

This is what the final product looked like:
![Stylesheet End](../Images/Stylesheet%20End.png)

You can apply styles to most components (I'm not 100% that you can apply them to ALL components, but every single one I've encountered so far can have a style applied as of right now), so you are given more freedom to customize how your app looks!
## Custom Components
Custom components are functions that YOU make, that you can re-insert anywhere in your code. This is important because it allows you to reference many, many components at once with the simple call to one function, rather than typing the same components over and over and over again.

Essentially, custom components are useful to put multiple of the same UI elements onto the screen at once. Unfortunately, I didn't have time to cover much of custom components in this workshop, but I'd recommend checking out this Youtube video to get started:
https://youtu.be/LEa48P-KtCw

## Functionality
Now that we've set up the majority of how we want our app to work, let's give it some functionality!

### TouchableOpacity
TouchableOpacity is a type of button component in React Native. There's another component that is plainly called "button", but I'm choosing to use TouchableOpacity here because the difference is that TouchableOpacity will slightly dim when you press it, which is just more aesthetic than a normal button.

The declaration for this component might look something like:
```JSX
<TouchableOpacity onPress={()=>
  console.log("Hello")
}>
  <Text>The user will see this text</Text>
</TouchableOpacity>
```
In this case, we are using JSX to give this TouchableOpacity an action-- we are saying "when the user presses this, print "Hello" to the terminal". However, what the user will see on the screen is `The user will see this text`. That will be a clickable component on the simulator, and after clicking it, the button will slightly dim and the console will print "Hello". 

You can apply the same concept to the Button component as well!

### useState()
Now, we have the TouchableOpacity component set up, and we can press it and have something print to the terminal. But how can we actually make something on our screen change after a button is pressed?

This is done with the `useState()` command. `useState()` is something called a "hook" in React Native, which essentially will allow us to update the screen upon a specified action. As such, when it is called, the entire screen is re-rendered so we can see changes!

The declaration of this may look something like this:
```JSX
const[duckState, setDuckState] = useState("Duck")
```
And is declared above the return statement in your `App()` function. In this example, "duckState" is the current state of the component, "setDuckState" is a function to change that component's current state, and "useState('Duck')" is setting the initial value of the component to "Duck". 

To make use of this, we can assign a component to contain the value "duckState" using JSX, as follows:
```JSX
<Text>{duckState}</Text>
```
And when changing a component, you would reference "setDuckState". An example would be:
```JSX
<TouchableOpacity style={styles.duckContainer} onPress={()=>
          setDuckState("Duck.")
        }>
          <Text>Duck!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.duckContainer} onPress={()=>
          setDuckState("Not a duck.")
        }>
          <Text>No more duck!</Text>
        </TouchableOpacity>
```
This would create two buttons (using TouchableOpacity), formatted with a style I created called "duckContainer". When we press the first button, which says "Duck!", the text component from earlier that displays `{duckState}` would change to say "Duck.", and when we press the second button, which says "Not a duck.", that text component would change to "Not a duck."

If this sounds confusing, I'd HIGHLY RECOMMEND you watch the video-- the demo may be much clearer as to what's happening than trying to understand this just by looking at plain code.

## Closing Comments
Congrats! You've completed the workshop on React Native, and hopefully gained an understanding of some basic concepts (or at least have been encouraged to learn more, and try implementing them into your project). 

We covered a lot of things in this workshop, so don't feel bad if it takes you a couple rewatches or Youtube tutorials to get the whole picture-- this is a lot to take in!!

That being said, there are even more things beyond the scope of this workshop that we didn't have time to cover. If you're curious, I'd recommend looking more into things such as
- Organization
- Navigation
- Component Documentation
- Props

... just to start. 

Also, by now, whether you've been coding along or have just been absorbing information, it's important to note: YOU WILL HAVE ERRORS AT SOME POINT! Unless you're just built different. Occasionally, you will spend a while trying to find the source of an error just to realize it was something simpler than you thought. So, from personal experience, I'd recommend double checking these things first when encountering a pesky issue:
- Is all your syntax correct? (Got all your `{}`? What about `[]`? Maybe even a `()`? Or a `,`? Any typos?)
- Has everything been imported correctly?
- Are you only returning one thing in your App return statement? (Remember, we can put components within each other, but at the end of the day you can only return one component. So it's ok to return a huge massive 1000 line component filled with other components, but try to return two text components and you'll run into issues.

Lastly, *Google is your friend*!!!! Never be afraid to search for something online, or ask a mentor or officer for help.

Good luck with your projects, and happy hacking!
