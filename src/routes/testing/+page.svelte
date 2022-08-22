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
	import PopularGame from '../../components/PopularGame.svelte';

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
					currentBacklog = doc.data().backlog;
					name = doc.data().displayName;
				});

				let arrayofgames = currentBacklog;

				await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
					method: 'POST',
					headers: {
						'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
						Authorization: 'Bearer sd089a9azgftad7tbbaroxitu6x71k',
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

	function homeButton() {
		goto('/profile');
	}

	function gameButton() {
		goto('/mygames');
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
				<button on:click={gameButton} id="backlog" type="button" class="btn btn-primary"
					>Games</button
				>
				<button disabled id="backlog" type="button" class="btn btn-primary">Backlog</button>
				<button id="signout" on:click={logout} type="button" class="btn btn-danger">Sign Out</button
				>
			</div>
		</div>
		<h2>Backlog</h2>
		<div class="games">
			{#if currentBacklog}
				{#if continents}
					{#each continents as game, index}
						<PopularGame {game} />
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
