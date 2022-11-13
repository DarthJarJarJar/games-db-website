<script>
	export let game;
</script>

{#if game.id}
	<div class="game-card">
		<a sveltekit:prefetch href={'/games/' + game.id}>
			<img
				src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
				alt={game.name}
			/></a
		>
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
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
	}

	img:hover {
		border: 3px solid #4bb543;
	}
	

	.game-card {
		display: inline-block;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.4rem;
		max-height: 448px;
		max-width: 306px;
	}
</style>
