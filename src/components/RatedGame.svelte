<script>
	export let game;
	export let rating;
	console.log(rating);
	import StarRating from '../../src/svelte-star-rating';
	const config = {
		showText: true
	};
</script>

{#if game.id}
	<div class="game-card">
		<a sveltekit:prefetch href={'/games/' + game.id}>
			<img
				src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
				alt={game.name}
			/></a
		>
		<div class="description">
			<StarRating {rating} />
		</div>
	</div>
{:else}
	<p>No Games added to favourites yet.</p>
{/if}

<!---<a href={"/games/"+game.game.id}><img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.game.cover.image_id}.jpg`} alt = {game.name}></a><br>   
-->
<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 0.4rem;
		margin-bottom: 0.3rem;
	}
	
	.description {
		height: 5vh;
		font-weight: bolder;
	}

	.game-card {
		display: inline-block;
		flex-direction: column;
		justify-content: space-around;
		max-height: 448px;
		max-width: 306px;
		padding-left: 0.5rem;
	}
</style>
