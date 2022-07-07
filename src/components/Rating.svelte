<script>
    import App from "../routes/fb";
    import { where, getFirestore,collection, updateDoc, setDoc, doc, query, getDocs } from "firebase/firestore"; 
    import { onMount } from "svelte";
    const db = getFirestore(App);
    export let game;
    export let uid;
    let played;
    console.log(game)
    import StarRating from '../svelte-star-rating';
    
    let rating = 0;
    let submittedRating;

   async function checkIfGameIsCurrentlyRated() {
    const usersDoc = collection(db, "users")
        let q = query(usersDoc, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
        let docId;
        let ratingsArray;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
            ratingsArray = doc.data().ratings

        for(let gameobj of ratingsArray) {
            if(gameobj.id===game) {
                submittedRating=gameobj.rating
            }
        }
}); 
   }

checkIfGameIsCurrentlyRated()

    async function submitRating() {
        const usersDoc = collection(db, "users")
        console.log("step 1")
        let q = query(usersDoc, where("uid", "==", uid));
        console.log("step 2")

        const querySnapshot = await getDocs(q);
        let docId;
        let ratingsArray;
        let playedGames;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
            ratingsArray = doc.data().ratings
            playedGames = doc.data().played
}); 
    submittedRating = rating
    let ratingObject = {}
    ratingObject.id = game
    ratingObject.rating = submittedRating
    console.log(ratingObject); 

    ratingsArray = [...ratingsArray, ratingObject]
    playedGames = [...playedGames, game]
    

    const currentUserRef = doc(db, "users", docId);
await updateDoc(currentUserRef, {
  ratings: ratingsArray,
  played: playedGames
});  

    played = true
    }

async function updateRating() {
    const usersDoc = collection(db, "users")
        console.log("step 1")
        let q = query(usersDoc, where("uid", "==", uid));
        console.log("step 2")

        const querySnapshot = await getDocs(q);
        let docId;
        let ratingsArray;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
            ratingsArray = doc.data().ratings
}); 
let newgameobj;
    submittedRating = rating
   for(let gameobj of ratingsArray) {
       if(gameobj.id===game){
           let index = ratingsArray.indexOf(gameobj)
           ratingsArray.splice(index, 1)
           gameobj.rating = submittedRating
           newgameobj = gameobj
       }
   }
    
ratingsArray = [...ratingsArray, newgameobj];
    const currentUserRef = doc(db, "users", docId);
await updateDoc(currentUserRef, {
  ratings: ratingsArray
});  

}

export const dubey = played; 
  </script>













  <div class="card" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title">Rate this game</h5>
      <div class="slider-and-label">
        <label id="label" for="customRange3" class="form-label"><p class="text">{rating}</p></label> 
        <input bind:value={rating} type="range" class="form-range slider" min="0" max="5" step="0.5" id="customRange3"> 
      </div>

      <div class="submit-and-stars">
        {#if (!submittedRating)}
        <button on:click={submitRating} type="button" class="btn btn-primary" id="button">Submit Rating</button>
        <StarRating rating={0} />
        {:else} <button on:click={updateRating} type="button" class="btn btn-primary update-submit" id="button">Update Rating</button>
        <StarRating rating={submittedRating} />      
        {/if}

      </div>


        
    </div>
  </div>
  

 
  
  
  
  
  
  <style>


#label {
  position: absolute;
  right: 15rem;
  font-weight: bolder;

  

}

.submit-and-stars {
  margin-top: 5rem;
}

.slider {
  position: absolute;
  left: 0px;
  width: 60%;
  padding: 10px;
}
  .slider-and-label {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
      margin-bottom: 4rem;
    }

    button {
      margin-bottom: 1rem;
    }



/*    .text {
      margin-top: 16px;
      font-weight: bolder;
      padding: 16px;
    }
   .form-range {
      width: 100%;
    }*/
  </style>