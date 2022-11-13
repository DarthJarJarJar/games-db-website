<script>

	import { fly } from 'svelte/transition';
	export let data;
	let upcoming = data.upcoming
	let searchKey = '';
	import { goto } from '$app/navigation';
	import PopularGame from '../../components/PopularGame.svelte';

	function onSubmit() {
		goto('/search/' + searchKey);
	}
	for (let game of upcoming) {
		console.log(game);
	}
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	<h2>Upcoming Games</h2>
	<div class="games">
		{#each upcoming as game}
			<PopularGame {game} />
		{/each}
	</div>
</section>

<!---{#each searchResults as popularGame}
<a href={"/games/"+popularGame.id}><img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${popularGame.cover.image_id}.jpg`} alt = {popularGame.name}></a><br>   
{/each}-->
<style>
	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
		margin-top: 2rem;
	}

	h2 {
		margin-top: 2rem;
	}
</style>
