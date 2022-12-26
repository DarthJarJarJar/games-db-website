<script>

	import { goto, invalidate } from '$app/navigation';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import RatedGame from '../../../../components/RatedGame.svelte';
	import StarRating from '../../../../svelte-star-rating';

	let favs;
	
	export let data;
	let continents = data.continents;
	
	let arrayofgames=data.arrayofgames;
	console.log(arrayofgames.name);
	let ratingsObject = arrayofgames.ratings;
	let name = arrayofgames.displayName;
	let arraygames = [];
	for (let gameObj of ratingsObject) {
		arraygames.push(gameObj.id);
	}


	console.log("HERE IS THE ARRAY")
	console.log(data.continents)

	function homeButton() {
		goto(`../../user/home/${name.toLowerCase()}`);
	}
	function gamesButton() {
		goto(`../../user/games/${name.toLowerCase()}`);
	}
	function backlogButton() {
		goto(`../../user/backlog/${name.toLowerCase()}`);
	}
	function reviewsButton() {
		goto(`../../user/reviews/${name.toLowerCase()}`);
	}

	// onMount(async () => {
	// 	await fetch(`https://api.igdb.com/v4/games/`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
	// 			Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
	// 			'X-Requested-With': 'XMLHttpRequest'
	// 		},
	// 		body: `fields name, cover.image_id, follows;  where id=(${arraygames}); limit 500;`
	// 	})
	// 		.then((r) => r.json())
	// 		.then((data) => {
	// 			console.log("HERE IS THE DATa", data)
	// 			continents = data;
	// 			for (let c of data) {
	// 			}
	// 		});
	// });

	function getRating(game) {
		for (let gameobject of ratingsObject) {
			if (game.id === gameobject.id) {
				return gameobject.rating;
			}
		}
	}
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if name}
		<div class="akd">
			<h1>
				{name}'s Profile
			</h1>

			<div class="buttons">
				<button id="backlog" type="button" class="btn btn-primary" on:click={homeButton}
					>Profile</button
				>
				<button disabled id="backlog" type="button" class="btn btn-primary">Games</button>
				<button on:click={reviewsButton} id="backlog" type="button" class="btn btn-primary"
					>Reviews</button
				>
				<button on:click={backlogButton} id="backlog" type="button" class="btn btn-primary"
					>Backlog</button
				>
			</div>
		</div>
		<h2>Games</h2>

		<div class="games">
			{#if continents}
				{#if arraygames != []}
					{#each continents as game}
						<RatedGame {game} rating={getRating(game)} gamename={game.name} />
					{/each}
					<br />
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
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		height: 20vh;
		margin-top: 0.5rem;
	}

	.akd {
		display: inline-flex;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
	}
	h2 {
		margin-bottom: 2rem;
	}
</style>
