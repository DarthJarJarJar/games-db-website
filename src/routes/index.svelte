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
    import {popgames} from './store'
    import Browse from '../components/Browse.svelte';
    let searchKey = '';
    import {goto} from '$app/navigation';
import PopularGame from '../components/PopularGame.svelte';
import { onMount } from "svelte";

  
    function onSubmit() {
        goto('/search/'+searchKey);
    }
    
  </script>
  

 


<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
    <h2>Popular Games</h2>
    <div class="games" >
    
      {#each searchResults as game}
      <PopularGame {game} />
    {/each}
    </div>

    
</section>


<style>
  .games{
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