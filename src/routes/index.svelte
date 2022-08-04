<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/popularGames');

		if (res.ok) return { props: { searchResults: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	export let searchResults;
	let searchKey = '';
	import { goto } from '$app/navigation';
	import PopularGame from '../components/PopularGame.svelte';
	import { onMount } from 'svelte';
import GameCard from '../components/GameCard.svelte';

	function onSubmit() {
		goto('/search/' + searchKey);
	}
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	<h2>Popular Games</h2>
	<div class="games">
		{#each searchResults as game}
			<GameCard {game} />
		{/each}
	</div>
</section>

<style>
	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-column-gap: 0.3rem;
		grid-row-gap: 0.3rem;
		height: 20vh;
	}

	h2 {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
