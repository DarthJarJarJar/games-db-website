<script>
    import App from "../routes/fb";
    import { where, getFirestore,collection, updateDoc, setDoc, doc, query, getDocs } from "firebase/firestore"; 
    import { onMount } from "svelte";
    const db = getFirestore(App);
    export let game;
    export let uid;
    let played;
    console.log(game)
    import StarRating from 'svelte-star-rating';
    
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





<div class="everything">






    <div class="form-form">
        <div class="number">
            <label for="customRange3" class="form-label"><p class="text">{rating}</p>
            </label> 
          </div>
        <input bind:value={rating} type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
       
       
        
      </div>
    
    
    
      <div class="stars-and-submit">
          
        
       
        {#if (!submittedRating)}
        <button on:click={submitRating} type="button" class="btn btn-primary" id="button">Submit Rating</button>
        <StarRating rating={0} />
        {:else} <button on:click={updateRating} type="button" class="btn btn-primary update-submit" id="button">Update Rating</button>
        <StarRating rating={submittedRating} />
        
        {/if}
      
        
       
      
      </div>

</div>

 
  
  
  
  
  
  <style>
  

  .update-submit {
    margin-left: 1rem;
  }
  .everything {
      display:inline-flex;
      width: 100%;
  }
  .form-form {
    height: 100%;
    width: 60%;
  }

  .stars-and-submit {
    align-items: right;
   justify-content: right;
   align-content: right;
   margin-left: auto;
  }
  
  .number {
      height: 60px;
      width: 60px;
      float: right;
  }
  
    #button {
        
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .text {
      margin-top: 16px;
      font-weight: bolder;
      padding: 16px;
    }
    .form-range {
      width: 100%;
    }
  </style>