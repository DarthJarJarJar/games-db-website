<script>
    import {Rating} from 'svelte-stars-hover-rating';
   export let game;
   export let uid;
   export let name;
   export let gamename;
   console.log(name)
   console.log(uid)
   const gameId = game
   let current = new Date()
   import { element } from "svelte/internal";
   import { doc, setDoc, getFirestore, collection, addDoc, query, where, getDocs, updateDoc} from "firebase/firestore"; 
   import App from "../../src/routes/fb"
   const db = getFirestore(App)
   
   import StarRating from 'svelte-star-rating';
       let ratingNum;
       let review;
       let isRated = false;
       let spoiler = false;
       import { fade, fly } from "svelte/transition"
       const config = {
       showText: true,
     };
       async function submitReview() {
   
   if(ratingNum>0 && ratingNum<=10){
   
           isRated = true
     await setDoc(doc(db, "games", `${gameId+uid}`), {
       gameId: gameId,
     reviewBy: uid,
     review: review,
     reviewAt: current.getTime(),
     rating: ratingNum,
     spoiler: spoiler,
     reviewerName: uid.toLowerCase(),
     gameName: gamename
   
   
   });
   updateRating(uid, gameId, ratingNum)
   getReviews()
   } else {
       alert("Rating must be between 0 and 5!")
   }
       }
   
   
       function editReview() {
           isRated = false
   
       }
       async function updateRating(uid, game, rating) {
           const db = getFirestore(App)
       const usersDoc = collection(db, "users")
           let q = query(usersDoc, where("displayName", "==", uid));
       const querySnapshot = await getDocs(q);
           let docId;
           let ratings;
           querySnapshot.forEach((doc) => {
               docId = doc.id;
               ratings = doc.data().ratings
   }); 
       for(let gameobj of ratings) {
           if(gameobj.id===game) {
               const searchObject = {}
               searchObject.id = game
               searchObject.rating = gameobj.rating
               const index = ratings.indexOf(searchObject)
               ratings.splice(index, 1)
               const newObject = {}
               newObject.id = game
               newObject.rating = parseInt(rating)
               ratings.push(newObject)
   
           }
       }
   
       const gameRef = doc(db, "users", docId)
       await updateDoc(gameRef, {
           ratings: ratings
       })
   
   
      
   }
       async function checkIfGameIsCurrentlyRated() {
       const usersDoc = collection(db, "games")
           let q = query(usersDoc, where("reviewBy", "==", uid));
       const querySnapshot = await getDocs(q);
           let docId;
           let ratingsArray = []
           querySnapshot.forEach((doc) => {
               docId = doc.id;
               let pushObj = {}
               pushObj.id = doc.data().gameId
               pushObj.review = doc.data().review
               pushObj.rating = doc.data().rating
               pushObj.spoiler = doc.data().spoiler
               ratingsArray.push(pushObj)
   
          
   }); 
   
   
   
   for(let gameobj of ratingsArray) {
               if(gameId===gameobj.id) {
                   isRated = true
                   review = gameobj.review
                   spoiler = gameobj.spoiler
                   ratingNum =gameobj.rating
               }
           }
      }
      checkIfGameIsCurrentlyRated()
   
   let currentReviews;
   let noRevs = true;
   async function getReviews() {
       const usersDoc = collection(db, "games")
           let q = query(usersDoc, where("gameId", "==", gameId));
   
       
       const querySnapshot = await getDocs(q);
       if(querySnapshot.empty) {
           noRevs = true
       }   else {
           noRevs = false
       }
           let docId;
           let ratingsArray = []
           querySnapshot.forEach((doc) => {
               docId = doc.id;
               let pushObj = {}
               pushObj.reviewer = doc.data().reviewBy
               pushObj.review = doc.data().review
               pushObj.reviewTime = new Date(doc.data().reviewAt) 
               pushObj.rating = doc.data().rating
               pushObj.spoiler = doc.data().spoiler
               ratingsArray.push(pushObj)   
   });
   
   currentReviews = ratingsArray
   
   }
   getReviews()
   getReviews().then(()=>console.log(noRevs))
   
   
   
   
   
   
   </script>
   
   
   
   
   <div class="card" style="width: 100%; margin-top:2rem;">
   
   
   
   
   
               <div class="card-body">
                <h5 class="card-title">User reviews</h5>

                
                   {#if noRevs}
                       <p>This game does not have any reviews yet. </p>
                   {/if}
                   {#if (currentReviews)}
   
                   {#if !noRevs}
                   {#each currentReviews as review}
                   
                   <div class="card-body">
                       <div class="card" style="width: 95%; margin-left: auto; margin-right: auto;">
                           <div class="card-body">
                               {#if review.reviewer.toLowerCase() != ""}
                               <h5 class="card-title">Review by <a href={`/user/home/${review.reviewer.toLowerCase()}`}>{review.reviewer}</a></h5>
                         
                               <StarRating rating={parseFloat(review.rating)} {config}></StarRating>
                               <h6 class="card-subtitle mb-2 text-muted">{review.reviewTime.toLocaleString('en-us', { month: 'long' })+" "+review.reviewTime.getDate()+" "+review.reviewTime.getFullYear()}</h6>
                               {#if review.spoiler} 
                               <details>
                                   <summary> This review has spoilers. Click to see</summary>
                                       <p class="card-text">{review.review}</p>
                               </details>
                               {:else} <p class="card-text">{review.review}</p>
                               {/if}
                              {:else} <p class="card-text">No</p>
                             {/if}
                           </div>
                       </div>
                     </div>
                   {/each}
                   {/if}
                   {/if}
   
   
   
                
                 </div>
           </div>
        
   
     <style>
     
   
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
   
   
   .spoilers {
       
       margin-bottom: 1rem;
   }
   .check {
       display: block;
       width: fit-content;
   }
   p {
       white-space: pre-wrap;
   }
   .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
       opacity: 1;
       color: rgba(0, 0, 0, 0.5);
       background-color: #fff;
       height: auto;
       padding: 0px;
       padding: 0px 0px 0px 10px;
       width: 100%;
       transform: scale(0.982) translateY(0.045rem) translateX(0.1rem);
       border-radius: 5px 0 0 0;
   }
   .form-floating > .form-control:focus ~ label,
   .form-floating > .form-control:not(:placeholder-shown) ~ label,
   
   .form-floating > .form-control:-webkit-autofill ~ label {
       opacity: 1;
       color: rgba(0, 0, 0, 0.5);
     
       height: auto;
       padding: 0px;
       padding: 0px 0px 0px 10px;
       width: 100%;
       transform: scale(0.982) translateY(0.045rem) translateX(0.1rem);
       border-radius: 5px 0 0 0;
   }
     </style>