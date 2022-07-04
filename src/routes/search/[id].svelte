
<script context="module">
   export async function load({fetch, params}) {
       const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/search/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `search "${params.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`
         })
       
       const data = await res.json();
         console.log(data)
       return {
           props : {searchResults : data}
       }
   }
</script>
<script>
    export let searchResults;
    import { fly } from 'svelte/transition';
   import PopularGame from "../../components/PopularGame.svelte"
    
import Game from "../../components/Game.svelte";
</script>
<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
    {#if searchResults}
    <div class="games">
        {#each searchResults as game}

        <PopularGame game={game.game}></PopularGame>
        {:else} <h2>No search results</h2>
    {/each}
    </div>
    
    {/if}
</section>




<style>
    .games{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
</style>




   
