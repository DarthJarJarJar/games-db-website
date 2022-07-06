<script context="module">
    import App from "../../fb"
   import { updateDoc,doc, getFirestore,collection, addDoc, query, where, getDoc, getDocs, orderBy, Firestore} from "firebase/firestore"; 
const db = getFirestore(App);
    export async function load({params}) {
        const q = query(collection(db, "games"), 
        where("reviewerName", "==", params.id),
        orderBy("reviewAt", "desc")
        );
      

let data;
const querySnapshot = await getDocs(q);
let array = []
querySnapshot.forEach((doc) => {
data = doc.data()
array.push(data)

    
});

        return {
            props : {reviewData : array}
        }
    }

</script>
<script>
import StarRating from 'svelte-star-rating';
import { fly } from 'svelte/transition'
import {goto} from '$app/navigation';
import { FirebaseError } from "firebase/app";
export let reviewData;
console.log(reviewData)
function getProperDate(timestamp) {
    let properDate = ""
    const date = new Date(timestamp)
    const month = date.toLocaleString('en-us', { month: 'long' })
    const datedate = date.getDate()
    const year = date.getFullYear()
    properDate = month + " " + datedate + " " + year

    return properDate
}
let name;
for(let review of reviewData) {
    name = review.reviewBy
}

function homeButton() {
    goto(`../../user/home/${name.toLowerCase()}`)
}
function gamesButton() {
    goto(`../../user/games/${name.toLowerCase()}`)
}
function backlogButton() {
    goto(`../../user/backlog/${name.toLowerCase()}`)

}
function reviewsButton() {
    goto(`../../user/reviews/${name.toLowerCase()}`)

}

</script>

<section in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
   
    <div class= "akd">
    <h1>
        {name}'s Profile
    </h1>
    
    <div class="buttons">
        <button id= "backlog" type="button" class="btn btn-primary" on:click={homeButton}>Profile</button>
        <button on:click={gamesButton} id= "backlog" type="button" class="btn btn-primary">Games</button>
        <button disabled id= "backlog" type="button" class="btn btn-primary">Reviews</button>
        <button on:click={backlogButton} id= "backlog" type="button" class="btn btn-primary">Backlog</button>
    </div>
    
    
    </div>
    <h2>Reviews</h2>
    
   {#if reviewData}
   {#each reviewData as review}
                   
   <div class="card-body">
       <div class="card" style="width: 95%; margin-left: auto; margin-right: auto; margin-top: 2rem;">
           <div class="card-body">
      
               <h5 class="card-title"><a href={`/games/${review.gameId}`}>{review.gameName}</a></h5>
         
               <StarRating rating={parseFloat(review.rating)}></StarRating>
               <h6 class="card-subtitle mb-2 text-muted">{getProperDate(review.reviewAt)}</h6>
               {#if review.spoiler} 
               <details>
                   <summary> This review has spoilers. Click to see</summary>
                       <p class="card-text">{review.review}</p>
               </details>
               {:else} <p class="card-text">{review.review}</p>
               {/if}
             
           </div>
       </div>
     </div>
   {/each}
   {/if}

    
    <br> <br>
    
      
    
    
    
    </section>
    








<style>
    .buttons {
   align-items: right;
   justify-content: right;
   align-content: right;
   margin-left: auto;
   
}


.akd {
    display: inline-flex;
    width: 100%;
}

h1 {
    margin-bottom: 2rem;
}
    a {
        text-decoration: none;
    }
    p {
    white-space: pre-wrap;
}
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}


summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}


details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}

</style>