# Intro to Backend: Databases

**Date**: February 26, 2022

**Teacher**: [Nathan Zhang](https://github.com/nathanzzhang)

Welcome to the HOTH9 databases workshop!

## Resources
- [Slides](https://docs.google.com/presentation/d/1hDHHENCtzvLnjwS8mYuapRBkFIEbIU_g7SKLQwU6Vnc/edit?usp=sharing)
- [Recording]()

## Topics Covered
- [What Databases Are](#what-databases-are)
- [Why We Use Databases](#why-we-use-databases)
- [Walkthrough with Firestore](#walkthrough)

## What are databases?
A database is any structured set of data held in a computer, especially one that is accessible in different ways. A good database will have certain characteristics that preserve access, integrity, and security. 

### Examples
- SQL
    - Microsoft SQL Server
    - MySQL
    - Microsoft Azure SQL Database
- NoSQL
    - MongoDB
    - Firebase

## Why we use databases
- When we need to store large amounts of data, and a single abstract data type is not enough. An example would be if we needed to store a list of users of an app. 
- When different sets of data need to be linked together and we can use the relationship between each data set to our advantage. An example would be if we needed to store users as well as each user's username, email, and password. 
- A good database will have 3 main characteristics: access, integrity, and security. 
    - Access: A good database will ensure that the data from the database is available to authorized users. 
    - Integrity: A good database will ensure that the data that is stored in the database is correct and that the data isn't tampered in any way while it is stored in the database. 
    - Security: A good database will ensure that only authorized users will have access to the database. 
Since our app that we create will need all of these characterisics, we will choose to implement a Firebase Firestore database for our app. 

## What is Firebase Firestore?
Firebase is a service of Google that aids in app development. Google has an entire suite of apps under Firebase to help app development. We will be using the app that is geared toward databases: Firestore. 
Firestore is a database in the cloud that is flexible, scalable, and doesn't require the language of SQL to use. It can also easily be adapted to web, mobile, and server applications. 
In Firestore, the data is stored in collections, and each collection has values that are called documents. 
[Link to Firebase](https://firebase.google.com)

## Setting up Firebase
1) Sign in to Firebase
2) Create a Project
3) Link your project to a Web App
4) Create a new Firestore database
5) Link the new Firestore database to your app
- In a new file named "firebase.js", paste your configuration code.
- We will need to make the following edits:
    - Add the import statement to firebase.js
    ```JavaScript
    import { getFirestore } from "firebase/firestore";
    ```
    - Define your database and export it in firebase.js
    ```JavaScript
    const db = getFirestore(app);
    export default db;
    ```
    - Import your newly created database in App.js
    ```JavaScript
    import db from "./firebase";
    ```
Refer to the [slides](https://docs.google.com/presentation/d/1hDHHENCtzvLnjwS8mYuapRBkFIEbIU_g7SKLQwU6Vnc/edit?usp=sharing) if you are having trouble setting up Firestore. 

## Walkthrough
First, we will be using our React app to add a value to our new database. Then, we will be retrieving a value from our database and displaying it in our app. To do this, we must import a few methods from firestore.
```JavaScript
import { doc, setDoc, getDoc } from "firebase/firestore";
```

### Adding a value to our database
We must first define what type of value we are going to add to our database. In the app, we are defining a user, and each user is going to have a username, an email, and a password. Thus, we will declare a class called **User** so we can pass data around.
```JavaScript
class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
}
```

Now that we have a class named User, we can use this as a data value to pass into our database. However, since this class is an object, we must give Firestore a way to translate the object into it's respective data quantities. In this case, they are all strings. To do this, we use a *converter* method. 
```JavaScript
const userConverter = {
	toFirestore: (user) => {
		return {
			username: user.username,
			email: user.email,
			password: user.password,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new User(data.username, data.email, data.password);
	}
};
```

Now we have a class **User** and it's corresponding *converter* method. 
Let's get to actually adding a **User** to our database.
To do so, we are going to create a temporary array of strings named **values** and use React's *useState()* method. This temporary array will then be used to add data to the database. 
```JavaScript
const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
	});
```

To make changes to this temporary array, we will define a new method named *handleChange()* and pass in props to edit the fields of our temporary array.
```JavaScript
const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
```

The *handleChange()* method is called every time a text field gets updated. Here, *TextField* is a custom component that has been used from MaterialUI. That can be seen here:
```JavaScript
<TextField
	id='outlined-name'
	label='Name'
	value={values.name}
	onChange={handleChange('name')}
/>
```

Now that we have the temporary array **values** being updated every time the user makes an edit in the text field, we must define a way to push all of the edited data into the database. To do this, we will define a method called *addToDB(values)* and pass in the temporary array. 
Here, *doc()* creates a new document in our database. We must also remember to use our *converter* method. The method *setDoc()* sets the values of the document with the passed in parameters (in this case it's a user).
```JavaScript
function addToDb(values) {
	const ref = doc(db, "users", values.name).withConverter(userConverter);
	setDoc(ref, new User(values.name, values.email, values.password));
}
```

We must call this function in order to add the values to the database. We will do this when the user clicks the "submit" button. That can be seen here:
```JavaScript
<Button variant='contained' onClick={() => { addToDb(values) }}>Submit</Button>
```

That's it! When the user inputs values for the text fields and clicks submit, the values will be populated in the database! You can confirm this by manually checking contents of the database in your browser. 

## Displaying a value from our database
In order to display a value from our database, we have to create a method that retrieves it first. This method will update a temporary object named **users**, which we will define with React's *useState()* method. 
```JavaScript
const [users, setUsers] = useState({})
```

Let's then define a method named *fetchUsers()*. This method will be responsible for taking data from the database and updating **users** with the correct values. We will use our *converter* method from before, and retrieve the most recent user. 
```JavaScript
const fetchUsers = async () => {
	const docRef = doc(db, "users", values.name).withConverter(userConverter);
	const docSnap = await getDoc(docRef);
	setUsers(docSnap.data());
};
```

The *fetchUsers()* method will need to be called when the user clicks the "submit" button, so we'll add it there. 
```JavaScript
<Button variant='contained' onClick={() => { addToDb(values); fetchUsers(); }}>Submit</Button>
```

Now, we have a react state component called **users** that holds the user that we are interested in. To display this, we can simply use *{users.name}* in our function. 
```JavaScript
<Typography variant='h4'>Hello {users.username},</Typography>
<Typography variant='h4'>Your associated email is {users.email}.</Typography>
<Typography variant='h4'>Your password is {users.password}.</Typography>
```

And that's all! This walkthrough created a data value, stored it in the database, retrieved that data value, and displayed the data value in the app. 

## Further Resources
[Adding a Value API](https://firebase.google.com/docs/firestore/manage-data/add-data)

[Retrieving a Value API](https://firebase.google.com/docs/firestore/query-data/get-data)

[Full API](https://firebase.google.com/docs/firestore)

## As always, Happy Hacking!