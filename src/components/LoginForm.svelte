<script>
	import { goto } from '$app/navigation';
	import {
		getAuth,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import App from '../fb';
	import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
	const db = getFirestore();

	let errorMessage;
	export let title;
	const auth = getAuth(App);
	const createUserDocument = async (db, user, displayName) => {
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				uid: user.uid,
				backlog: [],
				displayName: displayName,
				favourites: [],
				played: [],
				ratings: [],
				name: displayName.toLowerCase()
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	async function checkUsername(displayName) {
		let unique = true;
		const querySnapshot = await getDocs(collection(db, 'users'));
		querySnapshot.forEach((doc) => {
			if (doc.data().displayName === displayName) {
				unique = false;
			}
		});
		return unique;
	}

	checkUsername('anwar').then((unique) => console.log(unique));

	async function checkUsernameForUniqueness(displayName) {
		await checkUsername(displayName);
	}
	checkUsernameForUniqueness('ayaan');
	console.log(checkUsername('ayaan'));
	async function login() {
		let displayName;
		let email = document.getElementById('emailInput').value;
		let password = document.getElementById('passInput').value;

		if (title == 'Login') {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					localStorage.setItem('uid', user.uid);
					goto('/profile/');
				})
				.catch((error) => {
					if (error.code === 'auth/user-not-found') {
						errorMessage = 'Invalid email';
					} else if (error.code === 'auth/wrong-password') {
						errorMessage = 'Incorrect Password';
					} else {
						errorMessage = error;
					}
				});
		} else {
			displayName = document.getElementById('displayName').value;
			console.log(displayName);
			checkUsername(displayName).then((unique) => {
				console.log(unique);
				if (unique === true) {
					createUserWithEmailAndPassword(auth, email, password)
						.then((userCredential) => {
							const user = userCredential.user;
							localStorage.setItem('uid', user.uid);
							displayName = document.getElementById('displayName').value;
							createUserDocument(db, user, displayName);
							goto('/profile/');
						})
						.catch((error) => {
							if (error.code === 'auth/email-already-in-use') {
								errorMessage = 'This email is already registered';
							} else {
								errorMessage = error;
							}
						});
				} else {
					errorMessage = 'This name is already in use';
				}
			});
		}
	}
</script>

<form on:submit|preventDefault={login}>
	<div class="mb-3">
		{#if title != 'Login'}
			<label for="exampleInputEmail1" class="form-label">Username</label>
			<input id="displayName" class="form-control" aria-describedby="emailHelp" />
		{/if}
	</div>
	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label">Email address</label>
		<input id="emailInput" type="email" class="form-control" aria-describedby="emailHelp" />
		{#if title != 'Login'}
			<div id="emailHelp" class="form-text">
				Your email will be visible to me. Consider using a throwaway email address since there's no
				verification.
			</div>
		{/if}
	</div>
	<div class="mb-3">
		<label for="exampleInputPassword1" class="form-label">Password</label>
		<input id="passInput" type="password" class="form-control" />
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
{#if title == 'Login'}
	<p class="float-end mt-3">
		Not a user? <a href="/signup" class="card-link">Sign Up</a>
	</p>
{:else}
	<p class="float-end mt-3">
		Already a user? <a href="/login" class="card-link">Sign In</a>
	</p>
{/if}

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{/if}

<style>
	.error {
		color: red;
		margin-top: 16px;
	}
</style>
