<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`,
			{
				method: 'POST',
				headers: {
					'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
					Authorization: 'Bearer sd089a9azgftad7tbbaroxitu6x71k',
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: `fields name, genres.name, aggregated_rating, platforms.name, platforms.id, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; where id = ${params.id};`
			}
		);

		const data = await res.json();

		return {
			props: { searchedGame: data[0] }
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Rating from '../../components/Rating.svelte';
	import ReviewCard from '../../components/ReviewCard.svelte';
	import App from '../fb';
	import ReviewTest from '../../components/ReviewTest.svelte';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import {
		updateDoc,
		doc,
		getFirestore,
		collection,
		addDoc,
		query,
		where,
		getDoc,
		getDocs
	} from 'firebase/firestore';
	import dubey from '../../components/Rating.svelte';
	import 'ui-progress-circle';

	const db = getFirestore();
	let value = 10;
	const auth = getAuth(App);
	let uid;

	let errorMessage = '';
	let isInBacklog;
	let isFav;
	let signedIn = false;
	let isPlayed;
	let name;
	let uniqueName;

	auth.onAuthStateChanged(function (user) {
		if (user) {
			signedIn = true;
			uid = auth.currentUser.uid;
			name = auth.currentUser.displayName;
		} else {
			signedIn = false;
		}
	});

	export let searchedGame;
	let game = searchedGame.id;
	console.log(searchedGame);

	const backlogFunction = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		console.log('step 1');
		let q = query(usersDoc, where('uid', '==', user.uid));
		console.log('step 2');

		const querySnapshot = await getDocs(q);
		let docId;
		let currentBacklog;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentBacklog = doc.data().backlog;
		});
		console.log([...currentBacklog, searchedGame.id]);
		const currentUserRef = doc(db, 'users', docId);

		await updateDoc(currentUserRef, {
			backlog: [...currentBacklog, searchedGame.id]
		});
		console.log('all done');
		isInBacklog = true;
	};

	const backlogFunctionRemove = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		let q = query(usersDoc, where('uid', '==', user.uid));
		const querySnapshot = await getDocs(q);
		let docId;
		let currentBacklog;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentBacklog = doc.data().backlog;
		});

		const indexOf = currentBacklog.indexOf(searchedGame.id);
		currentBacklog.splice(indexOf, 1);
		const currentUserRef = doc(db, 'users', docId);
		await updateDoc(currentUserRef, {
			backlog: currentBacklog
		});
		console.log('all done');
		isInBacklog = false;
		// goto("/testing/")
	};

	const favouriteFunction = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		console.log('step 1');
		let q = query(usersDoc, where('uid', '==', user.uid));
		console.log('step 2');

		const querySnapshot = await getDocs(q);
		let docId;
		let currentFavs;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentFavs = doc.data().favourites;
		});

		if (currentFavs.length <= 3) {
			console.log([...currentFavs, searchedGame.id]);
			const currentUserRef = doc(db, 'users', docId);

			await updateDoc(currentUserRef, {
				favourites: [...currentFavs, searchedGame.id]
			});
			console.log('all done');
			isFav = true;
		} else {
			//  alert("You can only favourite 4 games")
			errorMessage = 'You can only favourite 4 games';
			setTimeout(() => {
				errorMessage = ' ';
			}, 5000);
		}
	};

	const favouriteFunctionRemove = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		let q = query(usersDoc, where('uid', '==', user.uid));
		const querySnapshot = await getDocs(q);
		let docId;
		let currentFavs;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentFavs = doc.data().favourites;
		});

		const indexOf = currentFavs.indexOf(searchedGame.id);
		currentFavs.splice(indexOf, 1);
		const currentUserRef = doc(db, 'users', docId);
		await updateDoc(currentUserRef, {
			favourites: currentFavs
		});
		console.log('all done');
		isFav = false;
		// goto("/testing/")
	};

	const playedFunction = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		console.log('step 1');
		let q = query(usersDoc, where('uid', '==', user.uid));
		console.log('step 2');

		const querySnapshot = await getDocs(q);
		let docId;
		let currentPlayed;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentPlayed = doc.data().played;
		});
		const currentUserRef = doc(db, 'users', docId);

		await updateDoc(currentUserRef, {
			played: [...currentPlayed, searchedGame.id]
		});
		console.log('all done');
		isPlayed = true;
	};

	const playedFunctionRemove = async () => {
		let user = auth.currentUser;

		const usersDoc = collection(db, 'users');
		let q = query(usersDoc, where('uid', '==', user.uid));
		const querySnapshot = await getDocs(q);
		let docId;
		let currentPlayed;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			currentPlayed = doc.data().played;
		});

		const indexOf = currentPlayed.indexOf(searchedGame.id);
		currentPlayed.splice(indexOf, 1);
		const currentUserRef = doc(db, 'users', docId);
		await updateDoc(currentUserRef, {
			played: currentPlayed
		});
		console.log('all done');
		isPlayed = false;
		// goto("/testing/")
	};

	onMount(async () => {
		let user = auth.currentUser;
		auth.onAuthStateChanged(async function (user) {
			if (user) {
				const usersDoc = collection(db, 'users');
				let q = query(usersDoc, where('uid', '==', user.uid));
				const querySnapshot = await getDocs(q);
				let docId;
				let currentBacklog;
				let currentFavs;
				let currentPlayed;
				querySnapshot.forEach((doc) => {
					docId = doc.id;
					currentBacklog = doc.data().backlog;
					currentFavs = doc.data().favourites;
					currentPlayed = doc.data().played;
				});
				if (currentBacklog.indexOf(searchedGame.id) === -1) {
					console.log('no tin backlog');
					isInBacklog = false;
				} else {
					isInBacklog = true;
				}

				if (currentFavs.indexOf(searchedGame.id) === -1) {
					console.log('no tin backlog');
					isFav = false;
				} else {
					isFav = true;
				}

				if (currentPlayed.indexOf(searchedGame.id) === -1) {
					console.log('no tin backlog');
					isPlayed = false;
				} else {
					isPlayed = true;
				}

				async function getName() {
					let user = auth.currentUser;
					if (user) {
						const usersDoc = collection(db, 'users');
						let q = query(usersDoc, where('uid', '==', user.uid));
						const querySnapshot = await getDocs(q);
						let docId;
						let currentPlayed;
						let currentName;
						querySnapshot.forEach((doc) => {
							docId = doc.id;
							currentPlayed = doc.data().displayName;
							currentName = doc.data().name;
						});
						name = currentPlayed;
						uniqueName = currentName;
					}
				}

				getName();

				return currentBacklog;
			}
		});
	});

	async function checkIfPlayed() {
		let user = auth.currentUser;
		if (user) {
			const usersDoc = collection(db, 'users');
			let q = query(usersDoc, where('uid', '==', user.uid));
			const querySnapshot = await getDocs(q);
			let docId;
			let currentPlayed;
			querySnapshot.forEach((doc) => {
				docId = doc.id;
				currentPlayed = doc.data().played;
			});
			if (currentPlayed.indexOf(searchedGame.id) === -1) {
				console.log('no tin backlog');
				return false;
			} else {
				return true;
			}
		}
	}

	let comapanies = [];
	let hash = searchedGame.screenshots[0].image_id;
	let hashArray = [];
	for (let hash of searchedGame.screenshots) {
		hashArray.push(hash.image_id);
	}
	try {
		for (let company of searchedGame.involved_companies) {
			comapanies.push(' ' + company.company.name);
		}
	} catch {
		comapanies.push('No companies found.');
	}
	let platformsString = [];
	for (let platformObject of searchedGame.platforms) {
		platformsString.push(' ' + platformObject.name);
	}
	let genresString = [];
	try {
		for (let genreObject of searchedGame.genres) {
			genresString.push(' ' + genreObject.name);
		}
	} catch {
		genresString.push('No genres found.');
	}
	console.log(searchedGame);
</script>

<div class="game-info" in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	<div
		id="carouselExampleControls"
		class="carousel slide"
		data-bs-ride="carousel"
		style="border-radius: 0.5rem;"
	>
		<div class="carousel-indicators">
			{#each hashArray as hashthing, index}
				{#if index === 0}
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={index}
						class="active"
						aria-current="true"
						aria-label={`Screenshot ${index + 1}`}
					/>
				{:else}
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={index}
						aria-label={`Screenshot ${index + 1}`}
					/>
				{/if}
			{/each}
		</div>

		<div class="carousel-inner">
			{#each hashArray as hashitem, index}
				{#if index === 0}
					<div class="carousel-item active">
						<img
							style="border-radius: 0.5rem;"
							src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`}
							alt={searchedGame.name}
							class="d-block w-100"
						/>
					</div>
				{:else}
					<div class="carousel-item">
						<img
							style="border-radius: 0.5rem;"
							src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`}
							alt={searchedGame.name}
							class="d-block w-100"
						/>
					</div>
				{/if}
			{/each}
		</div>
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>

	<div class="text-container">
		<h1>{searchedGame.name}</h1>
		<p class="overview">{searchedGame.summary}</p>
		<p>
			<span>Developers/Publishers</span>
			{comapanies} <br />
			<span>Platform(s)</span>
			{platformsString}<br />
			<span>Genre(s):</span>
			{genresString}
		</p>

		{#if signedIn}
			<div class="user-options">
				{#if !isInBacklog}
					<button on:click={backlogFunction} type="button" class="btn btn-primary"
						>Add to backlog</button
					>
				{:else}
					<button on:click={backlogFunctionRemove} type="button" class="btn btn-danger"
						>Remove from backlog</button
					>
				{/if}

				{#if !isFav}
					<button on:click={favouriteFunction} type="button" class="btn btn-primary"
						>Add to favourites</button
					>
				{:else}
					<button on:click={favouriteFunctionRemove} type="button" class="btn btn-danger"
						>Remove from favourites</button
					>
				{/if}

				<p class="error">{errorMessage}</p>
			</div>

			{#if name}
				{#if uniqueName}
					<ReviewTest
						game={searchedGame.id}
						uid={name}
						name={uniqueName}
						gamename={searchedGame.name}
					/>
				{/if}
			{/if}
		{:else}
			<strong><a href="/profile">Sign In</a> to log, rate, review and more.</strong>
		{/if}
	</div>
</div>

<style>
	.error {
		color: red;
		font-size: medium;
	}

	.user-options {
		display: block;
		margin: auto;
	}

	.user-options > button {
		margin-right: 0.5rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}
	.game-info {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
	a {
		text-decoration: none;
	}
</style>
