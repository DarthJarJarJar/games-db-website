<script>
	export let data;
	
	let searchResults = data.searchResults;
	import { fly } from 'svelte/transition';
	import PopularGame from '../../../components/PopularGame.svelte';

	import Game from '../../../components/Game.svelte';
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if searchResults}
		<div class="games">
			{#each searchResults as game}
				<PopularGame game={game.game} />
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
