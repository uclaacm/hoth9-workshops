# Hack on the Hill 9 - Intro to Web APIs


**Date**: February 26, 2022

**Location**: Virtual

**Teacher**: [Thomas McGall](https://github.com/tmag1)

Wwelcome to our Web APIs workshop README! Today we will about what Web APIs are and how to use them. Hopefully by the end of this workshop you will be able to implement a Web API in one of your own project! Happy hacking!

## Resources
- [Slides](https://docs.google.com/presentation/d/1RwTR04cmAl1h37xs4nX4tz4w3X8sd8nLoNgUktc2-08/edit?usp=sharing)
- [Workshop Recording](https://www.youtube.com/watch?v=Nbst275dfyA)

## What we'll be learning today
- [Hack on the Hill 9 - Web APIs](#hack-on-the-hill-9---intro-to-web-apis)
  - [Resources](#resources)
  - [What we'll be learning today](#what-well-be-learning-today)
  - [Introducing Web APIs](#introducing-web-apis)
    - [What is an API?](#what-is-an-api)
    - [REST APIs](#rest-apis)
  - [HTTP Methods](#http-methods)
    - [What are HTTPS Methods?](#what-are-http-methods)
  - [Parts an API Request](#what-we-need-for-an-api-request)
    - [API Key](#api-key)
    - [Endpoints](#endpoints)
  - [JSON Files](#json-files)
    - [What are JSON Files?](#what-are-json-files)
    - [Interacting With JSON Files](#interacting-with-json-files)
  - [Making API Requests in JavaScript](#making-api-requests-in-javascript)
    - [Fetch()](#fetch)
    - [Asynchronous Functions(Async and Await)](#asynchronous-functions)
  - [PokéAPI Demo](#poke-api-demo)
  - [Pokemon Go(Googel Maps API) Demo](#google-maps-api-demo)
 
## Introducing Web APIs
### What is an API?
API stands for Application Programming Interface. While this may sounds a little intimidating, APIs are meant to be convenient and easy to use. An API is a connection between program that allows them to effectively communicate. Each API outlines the specific rules on how information can be transferred. What makes APIs so useful is that they allow us to use other programs as resources for our own projects. With APIs we are able to easily outsource requests for information and tasks.
### REST APIs
A REST API are a type of API that allows us to communicate with a cloud bases server using HTTP Methods. REST APIs are popular and useful because they are simplified and standardized. When we make requests to an API in the form of an HTTP method we are returned an object in the form of a JSON or XML file.
## HTTP Methods
### What are HTTPS Methods?
HTTP Methods are how we communicate with a REST API. Below are the following primary HTTP methods which correlate to reading, creating, updating, and deleting data.
- GET
  - GET requests are used to retrieve information only. Many popular APIs are read only which mean you will only be able to make GET requests.
- POST
  - POST requests are used to create new informaion.
- PUT
  - PUT requests update information.
- DELETE
  - DELETE delete information.
## Parts of an API Request
### API Key
In order to make API requests we need to used an API key to identify ourselves. This allows APIs to manage and authorize usage. 
### Endpoints
Endpoints are channels for communcation when working with an API. Different APIs will have differently formatted endpoints. Endpoints may come in the form of an URL link which may contain your API key and queries which specify the information you are calling for.
```html
<script
        src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA0DrpogkU5NYk0zmCT_rOuNsu1XAGrXc8&callback=initMap&libraries=&v=weekly">
</script>
```
## JSON Files
### What are JSON Files?
JSON files are used to store basic data structures. When we make requests to an API we will often recieve a JSON file in return. JSON files are standardized which allows them to be easily integrateble with several languages. Within JSON files, information is stored as a series of key-value pairs. Keys must always be strings while values can be pretty much anything.
```javascript
const hackCafe = {
    "drinks":{
      "latte":4.50,
      "coffee":5.20,
      "water":0
    },
    "baristas":{
      "Thomas": true,
      "Jody": true,
      "Einar": false
    }
  }
```
### Interacting With JSON File
We can easily interact with and update JSON files. We can do this using dot or bracket notation.
```javascript
hackCafe.drinks.latte = 6;
hackCafe.baristas["Jody"] = false;
```
## Making API Requests in JavaScript
### Fetch()
We use fetch() in order to make GET requests in JavaScript. When using fetch() we will use our intended endpoint as a parameter i.e fetch(endpoint). Fetch() will return an object that represents the result our HTTP request. In order to interact with JSON file we need to use .json() in order to extract a useful JSON file.
```javascript
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
const pokemon = await response.json();
```
### Asynchronous Functions(Async and Await)
Asynchronous functions are functions that allow our program to continue with execution without requiring completion first. This is useful for functions that may take a while to complete including GET requests and other API calls. We can specify an asynchronous function using the aysnc keyword before a funciton declaration. Within Asynchronous functions we use the await keyword to indicate on operation that may take a while to complete. Our async function will wait for these operations to complete before continuing within the async function.
```javascript
async function getPokemonImage(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
  const pokemon = await response.json();
}
```
## PokéAPI Demo
This demo uses a RESTful API called PokéAPi to source images of Pokemon. 
## Pokemon Go(Googel Maps API) Demo
This Demo is continued from the previous demo. Pokemon images are sourced from the PokéAPI and then displayed using the Google Maps API.
