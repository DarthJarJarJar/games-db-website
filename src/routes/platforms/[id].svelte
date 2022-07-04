<script context="module">
    export async function load({fetch, params}) {
       const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; sort follows desc; where platforms = ${params.id} & follows != null;`
         })
       
       const data = await res.json();

   
       return {
           props : {searchResults : data}
       }
   }
   
   </script>

   <script>
import PopularGame from "../../components/PopularGame.svelte";
import { fly } from 'svelte/transition';
import Game from "../../components/Game.svelte";
       export let searchResults;
       console.log(searchResults)
       $: genreName = searchResults[0].platforms[0].name;
       
   </script>

<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
    {#if searchResults}
    <h2>Top {genreName} Games</h2>
    <div class="games">
        
        {#each searchResults as game}
        <PopularGame {game} />
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