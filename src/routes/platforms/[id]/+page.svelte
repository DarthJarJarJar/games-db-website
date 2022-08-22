<script>
	//throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import PopularGame from '../../../components/PopularGame.svelte';
	import { fly } from 'svelte/transition';
	import Game from '../../../components/Game.svelte';
	export let searchResults;
	console.log(searchResults);
	$: genreName = searchResults[0].platforms[0].name;
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if searchResults}
		<h2>Top {genreName} Games</h2>
		<div class="games">
			{#each searchResults as game}
				<PopularGame {game} />
			{:else}
				<h2>No search results</h2>
			{/each}
		</div>
	{/if}
</section>

<style>
	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
	}
</style>
