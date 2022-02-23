import './App.css';
import React, { useState } from 'react';
import db from "./firebase";
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import Collapse from "@mui/material/Collapse";
import { doc, setDoc, getDoc } from "firebase/firestore";

class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
}

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

function addToDB(values) {
	const ref = doc(db, "users", values.name).withConverter(userConverter);
	setDoc(ref, new User(values.name, values.email, values.password));
}

function App() {
	const [values, setValues] = useState({
		name:'',
		email:'',
		password:'',
	});

	const [users, setUsers] = useState({});
	const fetchUsers = async () => {
		const docRef = doc(db, "users", values.name).withConverter(userConverter);
		const docSnap = await getDoc(docRef);
		setUsers(docSnap.data());
	}
	const handleChange = (prop) => (event) => {
		setValues({...values, [prop]: event.target.value})
	};

	const [submitted, changeVisibility] = useState(false);
	return (
		<Container maxwidth='lg'>
			<Grid container spacing={4} direction='column' justifyContent='center' alignItems='center'>
				<Grid item>
					<TextField
						id='outlined-name'
						label='Name'
						value={values.name}
						onChange={handleChange('name')}
					/>
				</Grid>
				<Grid item>
					<TextField
						id='outlined-email'
						label='Email'
						value={values.email}
						onChange={handleChange('email')}
					/>
				</Grid>
				<Grid item>
					<TextField
						id='outlined-password'
						label='Password'
						value={values.password}
						onChange={handleChange('password')}
					/>
				</Grid>
				<Grid container spacing={3} direction='row' justifyContent='center' padding={3}>
					<Grid item>
						<Button variant='contained' onClick={() => { changeVisibility(a => !a); addToDB(values); fetchUsers();}}>
							Submit
						</Button>
					</Grid>
					<Grid item>
						<Button variant='contained' onClick={() => {
							values.name = '';
							values.email = '';
							values.password = '';
							values.confirmPassword = '';
							changeVisibility(a =>  a ? !a : a);
						}}>
							Reset
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Collapse in={submitted} timeout='auto'>
				<Container padding={15}>
					<Grid container direction='column'>
						<Grid item padding={3}>
							<Typography variant='h4'>Hello {users.username},</Typography>
							<Typography variant='h4'>Your associated email is {users.email}.</Typography>
							<Typography variant='h4'>Your password is {users.password}.</Typography>
							<Typography variant='h2' color='#C900FF' textAlign='center'>Happy Hacking!</Typography>
						</Grid>
					</Grid>
				</Container>
			</Collapse>
		</Container>
	);
}

export default App;
