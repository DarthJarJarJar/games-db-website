<script>

	import { goto, invalidate } from '$app/navigation';
	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PopularGame from '../../../../components/PopularGame.svelte';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import GameCard from '../../../../components/GameCard.svelte';

	let favs;
	let continents;
	export let data
	console.log(data)
	let arrayofgames = data.arrayofgames;
	continents = data.continents
	let name = arrayofgames.displayName;
	console.log(continents)

	let arraygames = arrayofgames.backlog;
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
				<button on:click={gamesButton} id="backlog" type="button" class="btn btn-primary"
					>Games</button
				>
				<button on:click={reviewsButton} id="backlog" type="button" class="btn btn-primary"
					>Reviews</button
				>
				<button disabled id="backlog" type="button" class="btn btn-primary">Backlog</button>
			</div>
		</div>
		<h2>Backlog</h2>

		<div class="games">
			{#if continents}
				{#if arraygames != []}
					{#each continents as game}
						<GameCard {game} />
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
