# Hack on the Hill 9 - Intro to Web Development: React.js

**Date**: February 26, 2022

**Location**: Zoom

**Teacher**: [Maggie Li](https://github.com/maggieelli)

Hello! Welcome to this introduction to web development using React.js workshop! If you aren't familiar with HTML/CSS/Javascript, make sure you watch the Intro to Frontend workshop first :)

## Resources
- [Slides](https://docs.google.com/presentation/d/1Q6-zbYOSTcvS5uN2GZHnxcpBYevpkj2HTGZImfVUEPc/edit?usp=sharing)
- Workshop Recording (coming soon)

## What we'll be learning today
- [Introducing React](#introducing-react)
    - [What is React?](#what-is-react)
    - [Why do we use React?](#why-do-we-use-react)
    - [JSX](#jsx)
    - [Setting up your React App](#setting-up-your-react-app)
    - [Set up demo](#set-up-demo)
- [Components](#components)
    - [What is a component?](#what-is-a-component)
    - [Functional components](#functional-components)
    - [Import and export](#import-and-export)
    - [Rendering](#rendering)
    - [Component demo](#component-demo)
- [Props](#props)
    - [What is a prop?](#what-is-a-prop)
    - [Using props](#using-props)
    - [Props demo](#props-demo)
- [State](#state)
    - [What is state?](#what-is-state)
    - [useState()](#usestate)
    - [State demo](#state-demo)
- [Other Resources](#other-resources)
    - [Node.js website](https://nodejs.org/en/download/)
    - [React.js website](https://reactjs.org/)

## Introducing React
### What is React?
React, which you will often see as React.js or ReactJS, is a **free and open-source front-end JavaScript library**. This means that anyone in the public, including you or me, can contribute to their code, as long as someone on their team approves it. React is becoming more and more widely used in web development. In fact, some of your favorite websites, including Facebook, Instagram, and Netflix are made with React. It is also one of the most sought-out skills in the industry, so it's great that you are taking the time to learn more about it!

### Why do we use React?
One of the main reasons that React is so popular is because of its ability to create **reusable UI components**. In the grand scheme of this, this means that we will have less repeated code - one of the main principles of software development. Another benefit of React is that it allows for very **efficient DOM updates**. This is because rather than updating the entire website every time there is a change, React only updates the individual components that have changed in an efficient manner. There are a couple main reasons why React is so powerful!

### JSX
In order to use React, you're going to need to learn some new syntax (sorry!). Luckily, this new syntax, JSX, is simply an add-on to Javascript, so some of it may look familiar. JSX **combines HTML and Javscript** to give us the ability to describe what UI components should look like. An example of this is the following line of code:
```
const message = <h1>Welcome to HOTH!</h1>;
```
This line of code, which sets a variable message to what looks like an HTML tag, is completely normal JSX syntax. Furthermore, in JSX, we can **insert any valid Javascript expression using curly braces**. An example of this would be the following:

```
const year = 9;
const message = <h1>Welcome to HOTH{year}!</h1>
```
This would display "Welcome to HOTH9!" We can also do this with functions, for example:
```
const nameFunction = () => {
   return 'Hack';
};
const element = <h1>I love {nameFunction()}!</h1>;
```
This would display "I love Hack!" If we need to insert a JavaScript expression as an attribute, we can also do so with curly braces, like this:
```
const url = 'https://pbs.twimg.com/media/DkFgGKXXcAAbOn8.jpg';
const element = <img src={url}/>;
```

### Rendering


### Setting up your React App

### Set up Demo

## Components
### What is a component?

### Functional components

### Import and export

### Component Demo

## Props
### What is a prop?

### Using props

### Props demp

## State
### What is state?

### useState()

### State Demo

## Other Resources
- [Node.js website](https://nodejs.org/en/download/)
- [React.js website](https://reactjs.org/)