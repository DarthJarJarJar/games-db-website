<script context="module">
    import proxyURL from "../proxy"
    const currentDate = new Date();
    let recentTimeStamp = currentDate.getTime()-15778800000
    console.log(recentTimeStamp);
    export async function load({fetch, params}) {
        const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
          method: 'POST',
          headers: {
            'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
        'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
        "X-Requested-With": "XMLHttpRequest"
          },
          body: `fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(recentTimeStamp/1000)} & first_release_date<${Math.floor(currentDate.getTime()/1000)};`
          })
        
        const data = await res.json();

        

        return {
            props : {searchResults : data}
        }
    }
 </script>


<script>
  
  import { fly } from 'svelte/transition';
    export let searchResults;
    import Browse from '../components/Browse.svelte';
    let searchKey = '';
    import {goto} from '$app/navigation';
import PopularGame from '../components/PopularGame.svelte';

    
    function onSubmit() {
        goto('/search/'+searchKey);
    }
    for(let game of searchResults) {
      console.log(game);
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