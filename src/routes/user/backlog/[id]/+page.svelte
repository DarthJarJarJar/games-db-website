<script>

	import { goto, invalidate } from '$app/navigation';
	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PopularGame from '../../../../components/PopularGame.svelte';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

	let favs;
	let continents;
	export let data
	let arrayofgames = data.arrayofgames;
	let name = arrayofgames.displayName;

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

	onMount(async () => {
		await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
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
