<script>
	export let game;
</script>

<body>
	<div class="game-card" id="gamecard">
		<a sveltekit:prefetch href={'/games/' + game.game.id}>
			<img
				id="image"
				src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.game.cover.image_id}.jpg`}
				alt={game.name}
			/></a
		>
		<div class="description">
			<h2>{game.name}</h2>
		</div>
	</div>
</body>

<!---<a href={"/games/"+game.game.id}><img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.game.cover.image_id}.jpg`} alt = {game.name}></a><br>   
-->
<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
		font-weight: bolder;
	}
	.description {
		height: 5vh;
	}

	.game-card {
		display: inline-block;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
		max-height: 448px;
		max-width: 306px;
	}
</style>
