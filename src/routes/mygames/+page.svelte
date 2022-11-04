<script>
	import { onMount } from 'svelte';
	import RatedGame from '../../components/RatedGame.svelte';
	import Game from '../../components/Game.svelte';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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
	import App from '../../fb';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	const auth = getAuth(App);
	const db = getFirestore();

	let arrayGames = [];

	let arrayofratings = [];
	let name;
	let continents;
	let currentBacklog;
	onMount(async () => {
		const auth = getAuth(App);
		auth.onAuthStateChanged(async function (user) {
			if (user) {
				let user = auth.currentUser;
				const usersDoc = collection(db, 'users');
				let q = query(usersDoc, where('uid', '==', user.uid));

				const querySnapshot = await getDocs(q);
				let docId;
				querySnapshot.forEach((doc) => {
					docId = doc.id;
					currentBacklog = doc.data().ratings;
					name = doc.data().displayName;
				});
				let range = [0, 1, 2, 3, 4, 5];
				for (let ind of range) {
					console.log(currentBacklog[ind]);
				}

				let arrayofgames = [];

				for (let gameobj of currentBacklog) {
					arrayofgames.push(gameobj.id);
					arrayofratings.push(gameobj.rating);
				}

				await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
					method: 'POST',
					headers: {
						'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
						Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
						'X-Requested-With': 'XMLHttpRequest'
					},
					body: `fields name, cover.image_id, follows;  where id=(${arrayofgames});`
				})
					.then((r) => r.json())
					.then((data) => {
						continents = data;
						for (let c of data) {
						}
					});
			} else {
				// No user is signed in.
			}
		});
	});

	function getRating(game, gameobjarray) {
		for (let gameobj of gameobjarray)
			if (gameobj.id === game.id) {
				return gameobj.rating;
			}
	}

	function homeButton() {
		goto('/profile');
	}

	function backlogButton() {
		goto('/testing');
	}
	const logout = async () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				console.error(error);
			});
	};
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if name}
		<div class="akd">
			<h1>
				Welcome {name}
			</h1>

			<div class="buttons">
				<button on:click={homeButton} id="backlog" type="button" class="btn btn-primary"
					>Profile</button
				>
				<button disabled id="backlog" type="button" class="btn btn-primary">Games</button>
				<button on:click={backlogButton} id="backlog" type="button" class="btn btn-primary"
					>Backlog</button
				>
				<button id="signout" on:click={logout} type="button" class="btn btn-danger">Sign Out</button
				>
			</div>
		</div>
		<h2>Games</h2>
		<div class="games">
			{#if currentBacklog}
				{#if continents}
					{#each continents as game, index}
						<RatedGame {game} rating={getRating(game, currentBacklog)} />
					{/each}
				{:else}
					<div class="game">
						<p class="loading">loading...</p>
					</div>
				{/if}
			{:else}
				<p class="loading">Loading...</p>
			{/if}
		</div>
	{:else}
		<h1>Loading...</h1>
	{/if}
</section>

<style>
	.buttons {
		align-items: right;
		justify-content: right;
		align-content: right;
		margin-left: auto;
	}

	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
		margin-top: 2rem;
	}

	.akd {
		display: inline-flex;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
	}
</style>
