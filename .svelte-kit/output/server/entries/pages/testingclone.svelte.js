import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../chunks/index-38cedc01.js";
/* empty css                                                              */import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import app from "../endpoints/fb.js";
import { S as StarRating } from "../../chunks/StarRating-28dc5200.js";
/* empty css                                                              */import "firebase/app";
const css$2 = {
  code: ".star.svelte-1rhz5xd{margin-right:4px}.starPath.svelte-1rhz5xd{fill:none;stroke:#999}.filled.svelte-1rhz5xd{fill:#ffcf00}",
  map: null
};
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "star" } = $$props;
  let { filled = false } = $$props;
  let { starId } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.filled === void 0 && $$bindings.filled && filled !== void 0)
    $$bindings.filled(filled);
  if ($$props.starId === void 0 && $$bindings.starId && starId !== void 0)
    $$bindings.starId(starId);
  $$result.css.add(css$2);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 51 48"}" class="${"star svelte-1rhz5xd"}"${add_attribute("data-starid", starId, 0)}><title>${escape(title)}</title><path${add_attribute("data-starid", starId, 0)} class="${["starPath svelte-1rhz5xd", filled ? "filled" : ""].join(" ").trim()}" d="${"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"}"></path></svg>`;
});
const css$1 = {
  code: ".feedback.svelte-dffvs7{position:relative}.starContainer.svelte-dffvs7{display:inline-block;border-radius:8px;padding:4px 6px 0}button{cursor:pointer}",
  map: null
};
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rating = null } = $$props;
  let { num = 5 } = $$props;
  let stars = Array.from({ length: num }, (__, i) => i + 1);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.num === void 0 && $$bindings.num && num !== void 0)
    $$bindings.num(num);
  $$result.css.add(css$1);
  return `<div class="${"feedback svelte-dffvs7"}"><span class="${"starContainer svelte-dffvs7"}">${each(stars, (star) => {
    return `${validate_component(Star, "Star").$$render($$result, {
      filled: rating >= star,
      starId: star
    }, {}, {})}`;
  })}</span></div>`;
});
const css = {
  code: ".buttons.svelte-5vne1y.svelte-5vne1y{display:inline-flex;flex-wrap:wrap}details.svelte-5vne1y.svelte-5vne1y{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary.svelte-5vne1y.svelte-5vne1y{font-weight:bold;margin:-.5em -.5em 0;padding:.5em}details[open].svelte-5vne1y.svelte-5vne1y{padding:.5em}details[open].svelte-5vne1y summary.svelte-5vne1y{border-bottom:1px solid #aaa;margin-bottom:.5em}.spoilers.svelte-5vne1y.svelte-5vne1y{margin-bottom:1rem}.check.svelte-5vne1y.svelte-5vne1y{display:block;width:fit-content}p.svelte-5vne1y.svelte-5vne1y{white-space:pre-wrap}",
  map: null
};
const ReviewTest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  let { uid } = $$props;
  let { name } = $$props;
  let { gamename } = $$props;
  console.log(name);
  console.log(uid);
  const gameId = game;
  const db = getFirestore(app);
  let ratingNum;
  let review;
  let isRated = false;
  let spoiler = false;
  const config = { showText: true };
  async function checkIfGameIsCurrentlyRated() {
    const usersDoc = collection(db, "games");
    let q = query(usersDoc, where("reviewBy", "==", uid));
    const querySnapshot = await getDocs(q);
    let ratingsArray = [];
    querySnapshot.forEach((doc) => {
      doc.id;
      let pushObj = {};
      pushObj.id = doc.data().gameId;
      pushObj.review = doc.data().review;
      pushObj.rating = doc.data().rating;
      pushObj.spoiler = doc.data().spoiler;
      ratingsArray.push(pushObj);
    });
    for (let gameobj of ratingsArray) {
      if (gameId === gameobj.id) {
        isRated = true;
        review = gameobj.review;
        spoiler = gameobj.spoiler;
        ratingNum = gameobj.rating;
      }
    }
  }
  checkIfGameIsCurrentlyRated();
  let currentReviews;
  let noRevs = true;
  async function getReviews() {
    const usersDoc = collection(db, "games");
    let q = query(usersDoc, where("gameId", "==", gameId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      noRevs = true;
    } else {
      noRevs = false;
    }
    let ratingsArray = [];
    querySnapshot.forEach((doc) => {
      doc.id;
      let pushObj = {};
      pushObj.reviewer = doc.data().reviewBy;
      pushObj.review = doc.data().review;
      pushObj.reviewTime = new Date(doc.data().reviewAt);
      pushObj.rating = doc.data().rating;
      pushObj.spoiler = doc.data().spoiler;
      ratingsArray.push(pushObj);
    });
    currentReviews = ratingsArray;
  }
  getReviews();
  getReviews().then(() => console.log(noRevs));
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
    $$bindings.uid(uid);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.gamename === void 0 && $$bindings.gamename && gamename !== void 0)
    $$bindings.gamename(gamename);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"card"}" style="${"width: 100%; margin-top:1rem;"}"><div class="${"card-body"}"><h5 class="${"card-title"}">Rate and Review</h5>
                   ${!isRated ? `${validate_component(Rating, "Rating").$$render($$result, { num: "10", rating: ratingNum }, {
      rating: ($$value) => {
        ratingNum = $$value;
        $$settled = false;
      }
    }, {})}
                   <br>` : ``}

   
   
   
  

   
                   <div class="${"form-floating"}">${!isRated ? `<details ${(review ? true : false) ? "open" : ""} class="${"svelte-5vne1y"}"><summary class="${"svelte-5vne1y"}">Include a review?
                        </summary>
                    
                        <textarea class="${"form-control"}" placeholder="${"Write your review"}" id="${"floatingTextarea2"}" style="${"height: 150px"}">${review || ""}</textarea>
                                       
                       
                      
                       
                    
                    <div class="${"spoilers svelte-5vne1y"}"><div class="${"check svelte-5vne1y"}"><input type="${"checkbox"}" id="${"spoilers"}" name="${"interest"}"${add_attribute("checked", spoiler, 1)}>
                            <label for="${"music"}">Spoilers</label></div></div></details>
                      <button type="${"submit"}" class="${"btn btn-primary"}" style="${"margin-top: 0.5rem;"}">Submit</button>` : `${validate_component(StarRating, "StarRating").$$render($$result, { rating: parseFloat(ratingNum), config }, {}, {})}
                     ${!review ? `<p class="${"svelte-5vne1y"}">You haven&#39;t reviewed this game yet</p>` : `<textarea disabled class="${"form-control"}" placeholder="${"Leave a comment here"}" id="${"floatingTextarea2"}" style="${"height: 100px"}">${review || ""}</textarea>`}
                       <div class="${"buttons svelte-5vne1y"}"><button disabled type="${"submit"}" class="${"btn btn-success"}" style="${"margin-top: 0.5rem;"}">Review submitted!</button>
                           <button type="${"submit"}" class="${"btn btn-primary"}" style="${"margin-top: 0.5rem; margin-left: 0.5rem;"}">Edit</button>
                           <button type="${"button"}" class="${"btn btn-danger"}" style="${"margin-top: 0.5rem; margin-left: 0.5rem;"}">Delete</button></div>`}</div></div></div>
     <div class="${"card"}" style="${"width: 100%; margin-top:2rem;"}"><div class="${"card-body"}"><h5 class="${"card-title"}">User reviews</h5>

         
            ${noRevs ? `<p class="${"svelte-5vne1y"}">This game does not have any reviews yet. </p>` : ``}
            ${currentReviews ? `${!noRevs ? `${each(currentReviews, (review2) => {
      return `<div class="${"card-body"}"><div class="${"card"}" style="${"width: 95%; margin-left: auto; margin-right: auto;"}"><div class="${"card-body"}">${review2.reviewer.toLowerCase() != "" ? `<h5 class="${"card-title"}">Review by <a${add_attribute("href", `/user/home/${review2.reviewer.toLowerCase()}`, 0)}>${escape(review2.reviewer)}</a></h5>
                  
                        ${validate_component(StarRating, "StarRating").$$render($$result, {
        rating: parseFloat(review2.rating),
        config
      }, {}, {})}
                        <h6 class="${"card-subtitle mb-2 text-muted"}">${escape(review2.reviewTime.toLocaleString("en-us", { month: "long" }) + " " + review2.reviewTime.getDate() + " " + review2.reviewTime.getFullYear())}</h6>
                        ${review2.spoiler ? `<details class="${"svelte-5vne1y"}"><summary class="${"svelte-5vne1y"}">This review has spoilers. Click to see</summary>
                                <p class="${"card-text svelte-5vne1y"}">${escape(review2.review)}</p>
                        </details>` : `<p class="${"card-text svelte-5vne1y"}">${escape(review2.review)}</p>`}` : `<p class="${"card-text svelte-5vne1y"}">No</p>`}
                    </div></div>
              </div>`;
    })}` : ``}` : ``}</div>
    </div>`;
  } while (!$$settled);
  return $$rendered;
});
var Reviews_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "details.svelte-imu5t6.svelte-imu5t6{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary.svelte-imu5t6.svelte-imu5t6{font-weight:bold;margin:-.5em -.5em 0;padding:.5em}details[open].svelte-imu5t6.svelte-imu5t6{padding:.5em}details[open].svelte-imu5t6 summary.svelte-imu5t6{border-bottom:1px solid #aaa;margin-bottom:.5em}p.svelte-imu5t6.svelte-imu5t6{white-space:pre-wrap}")();
const Testingclone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ReviewTest, "ReviewTest").$$render($$result, {
    game: 420,
    uid: "DarthJarJar",
    name: "darthjarjar",
    gamename: "Halo: Combat Evolved"
  }, {}, {})}`;
});
export { Testingclone as default };
