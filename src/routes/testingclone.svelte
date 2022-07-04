

<script>
    import { onMount } from 'svelte';
    import PopularGame from "../components/PopularGame.svelte";
    import Game from "../components/Game.svelte";
    import { getAuth, onAuthStateChanged, } from 'firebase/auth';
   import { updateDoc,doc, getFirestore,collection, addDoc, query, where, getDoc, getDocs } from "firebase/firestore"; 
   import App from './fb';
import { fly } from "svelte/transition";

    const auth = getAuth(App)
    const db = getFirestore()

    let arrayGames = []

    const backlogArrayGetter =  async () => {
        
        let user = auth.currentUser
        const usersDoc = collection(db, "users")
        let q = query(usersDoc, where("uid", "==", user.uid));

        const querySnapshot = await getDocs(q);
        let docId;
        let currentBacklog;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
            currentBacklog = doc.data().backlog
}); 


return currentBacklog

}

auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log(backlogArrayGetter().then())
  } }
)


  let continents;
  onMount(async () => {
      const auth = getAuth(App);
    auth.onAuthStateChanged(async function(user) {
  if (user) {


    let user = auth.currentUser
        const usersDoc = collection(db, "users")
        let q = query(usersDoc, where("uid", "==", user.uid));

        const querySnapshot = await getDocs(q);
        let docId;
        let currentBacklog;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
            currentBacklog = doc.data().backlog
}); 
    let arrayofgames = currentBacklog
    await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
          method: 'POST',
          headers: {
            'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
        'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
        "X-Requested-With": "XMLHttpRequest"
          },
          body: `fields name, cover.image_id, follows;  where id=(${arrayofgames});`
          })
      .then(r => r.json())
      .then(data => {
        continents = data;
        for(let c of data) {
            console.log(c)
        }  
      });
  } else {
    // No user is signed in.
  }
});
    
  })
    
</script>



<!---
<h2>Backlog</h2>
<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
    {#if continents}
  {#each continents as game }  
  <div class="game">
    <PopularGame {game}></PopularGame>
  </div>
    
 
        
  {/each}
{:else}
  
  <div class="game">
    <p class="loading">loading...</p>
  </div>
{/if}
   
</section>
-->






<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
    <h2>Backlog</h2>
    <div class="games" >
    {#if continents}
    {#each continents as game}
    <PopularGame {game} />
  {/each}
  {:else}
  
  <div class="game">
    <p class="loading">loading...</p>
  </div>
    {/if}
      
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


