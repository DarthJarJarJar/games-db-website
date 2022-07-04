<script>
    export let game;
    export let rating;
    console.log(rating)
    import StarRating from 'svelte-star-rating';

</script>

{#if (game.id)}
<div class="game-card">
    <a sveltekit:prefetch href={'/games/' + game.id}>
        <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`} alt = {game.name}></a>   
        <div class="description">
            <h2>{game.name}</h2>
            <StarRating rating={rating}></StarRating>
            
        </div>
    </div>
    {:else} <p>No Games added to favourites yet.</p>
{/if}



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
       font-weight: bolder;
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