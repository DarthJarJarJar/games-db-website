
<script>
	import App from '../../../../fb';
	import { goto, invalidate } from '$app/navigation';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PopularGame from '../../../../components/PopularGame.svelte';
	let doesUserExist;
	let favs;
	let continents;
	
	let name;
	let backlogButton;
	let gamesButton;
	export let data;
	let arrayofgames = data.arrayofgames;
	let arraygames;
	let homeButton;
	let reviewsButton;

	const auth = getAuth(App);
	let loggedIn;
	auth.onAuthStateChanged((user) => {
		if (user) {
			if (user.uid === arrayofgames.uid) {
				loggedIn = true;
			}
		}
	});
	if (arrayofgames) {
		doesUserExist = true;
		name = arrayofgames.displayName;

		arraygames = arrayofgames.favourites;
		backlogButton = () => {
			goto(`../../user/backlog/${name.toLowerCase()}`);
		};
		gamesButton = () => {
			goto(`../../user/games/${name.toLowerCase()}`);
		};
		homeButton = () => {
			goto(`../../user/home/${name.toLowerCase()}`);
		};
		reviewsButton = () => {
			goto(`../../user/reviews/${name.toLowerCase()}`);
		};
		onMount(async () => {
			await fetch(`https://web-production-6d47.up.railway.app/https://api.igdb.com/v4/games/`, {
				method: 'POST',
				headers: {
					'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
					Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: `fields name, cover.image_id, follows;  where id=(${arraygames});`
			})
				.then((r) => r.json())
				.then((data) => {
					continents = data;
					for (let c of data) {
					}
				});
		});
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

	function getProperDate(timestamp) {
		let properDate = '';
		const date = new Date(timestamp);
		const month = date.toLocaleString('en-us', { month: 'long' });
		const datedate = date.getDate();
		const year = date.getFullYear();
		properDate = month + ' ' + datedate + ' ' + year;

		return properDate;
	}
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if arrayofgames}
		{#if name}
			<div class="akdd">
				<h1>
					{name}'s Profile
				</h1>

				<div class="buttons">
					<button id="backlog" type="button" class="btn btn-primary" disabled>Profile</button>
					<button on:click={gamesButton} id="backlog" type="button" class="btn btn-primary"
						>Games</button
					>
					<button on:click={reviewsButton} id="backlog" type="button" class="btn btn-primary"
						>Reviews</button
					>

					<button on:click={backlogButton} id="backlog" type="button" class="btn btn-primary"
						>Backlog</button
					>
					{#if loggedIn}
						<button on:click={logout} id="backlog" type="button" class="btn btn-danger"
							>Sign Out</button
						>
					{/if}
				</div>
			</div>
			<h2>Favourites</h2>

			<div class="games">
				{#if continents}
					{#if arraygames != []}
						{#each continents as game}
							<PopularGame {game} />
						{/each}
					{:else}
						<div class="game">
							<p class="loading">loading...</p>
						</div>
					{/if}
				{/if}
			</div>
		{:else}
			<h1>Loading...</h1>
		{/if}
	{:else}
		<h1>User not found</h1>
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
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
		margin-top: 2rem;
	}

	.akdd {
		display: inline-flex;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
	}
</style>
