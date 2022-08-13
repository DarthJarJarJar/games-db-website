<script context="module">
	import proxyURL from '../proxy'
	let currentDate = new Date()
	let recentTimeStamp = currentDate.getTime() - 31557600000;

	/*export async function load({ fetch }) {
		const res = await fetch('/popularGames');

		if (res.ok) return { props: { searchResults: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}*/
	export async function load({ fetch }) {
		const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
		method: 'POST',
		headers: {
			'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
			Authorization: 'Bearer sd089a9azgftad7tbbaroxitu6x71k',
			'X-Requested-With': 'XMLHttpRequest'
		},
		body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(
			recentTimeStamp / 1000
		)} & first_release_date<${Math.floor(currentDate.getTime() / 1000)}; limit 21;`
	});

		const data = await res.json();

		return {
			props: {
				searchResults: data
			}
		}
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


	async function addGames() {
		const res = await fetch('https://gamescg.netlify.app/popularGames');

		if (res.ok) return { props: { searchResults: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}

	async function main() {
		searchResults = await (await addGames()).props.searchResults
	}

	main()
	
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
	section {
		height: fit-content;
	}
	h2 {
		margin-top: 0rem;
		margin-bottom: 2rem;
	}
</style>
