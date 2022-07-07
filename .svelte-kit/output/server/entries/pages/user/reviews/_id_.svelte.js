import { c as create_ssr_component, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../../chunks/index-38cedc01.js";
import { getFirestore, query, collection, where, orderBy, getDocs } from "firebase/firestore";
import app from "../../../endpoints/fb.js";
import { S as StarRating } from "../../../../chunks/StarRating-28dc5200.js";
import "firebase/app";
import "firebase/auth";
/* empty css                                                                    */var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttons.svelte-158vabh.svelte-158vabh{align-items:right;justify-content:right;align-content:right;margin-left:auto}.akd.svelte-158vabh.svelte-158vabh{display:inline-flex;width:100%}h1.svelte-158vabh.svelte-158vabh{margin-bottom:2rem}a.svelte-158vabh.svelte-158vabh{text-decoration:none}p.svelte-158vabh.svelte-158vabh{white-space:pre-wrap}details.svelte-158vabh.svelte-158vabh{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary.svelte-158vabh.svelte-158vabh{font-weight:bold;margin:-.5em -.5em 0;padding:.5em}details[open].svelte-158vabh.svelte-158vabh{padding:.5em}details[open].svelte-158vabh summary.svelte-158vabh{border-bottom:1px solid #aaa;margin-bottom:.5em}")();
const css = {
  code: ".buttons.svelte-158vabh.svelte-158vabh{align-items:right;justify-content:right;align-content:right;margin-left:auto}.akd.svelte-158vabh.svelte-158vabh{display:inline-flex;width:100%}h1.svelte-158vabh.svelte-158vabh{margin-bottom:2rem}a.svelte-158vabh.svelte-158vabh{text-decoration:none}p.svelte-158vabh.svelte-158vabh{white-space:pre-wrap}details.svelte-158vabh.svelte-158vabh{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary.svelte-158vabh.svelte-158vabh{font-weight:bold;margin:-.5em -.5em 0;padding:.5em}details[open].svelte-158vabh.svelte-158vabh{padding:.5em}details[open].svelte-158vabh summary.svelte-158vabh{border-bottom:1px solid #aaa;margin-bottom:.5em}",
  map: null
};
const db = getFirestore(app);
async function load({ params }) {
  const q = query(collection(db, "games"), where("reviewerName", "==", params.id), orderBy("reviewAt", "desc"));
  let username;
  console.log("testing");
  const userQ = query(collection(db, "users"), where("name", "==", params.id));
  const userQuerySnapshot = await getDocs(userQ);
  userQuerySnapshot.forEach((doc) => {
    username = doc.data().displayName;
    console.log(username);
  });
  let data;
  const querySnapshot = await getDocs(q);
  let array = [];
  querySnapshot.forEach((doc) => {
    data = doc.data();
    array.push(data);
  });
  return {
    props: { reviewData: array, userName: username }
  };
}
function getProperDate(timestamp) {
  let properDate = "";
  const date = new Date(timestamp);
  const month = date.toLocaleString("en-us", { month: "long" });
  const datedate = date.getDate();
  const year = date.getFullYear();
  properDate = month + " " + datedate + " " + year;
  return properDate;
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reviewData } = $$props;
  let { userName } = $$props;
  console.log(userName);
  for (let review of reviewData) {
    review.reviewBy;
  }
  if ($$props.reviewData === void 0 && $$bindings.reviewData && reviewData !== void 0)
    $$bindings.reviewData(reviewData);
  if ($$props.userName === void 0 && $$bindings.userName && userName !== void 0)
    $$bindings.userName(userName);
  $$result.css.add(css);
  return `<section><div class="${"akd svelte-158vabh"}"><h1 class="${"svelte-158vabh"}">${escape(userName)}&#39;s Profile
    </h1>
    
    <div class="${"buttons svelte-158vabh"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Profile</button>
        <button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
        <button disabled id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>
        <button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button></div></div>
    <h2>Reviews</h2>
    
   ${reviewData ? `${each(reviewData, (review) => {
    return `<div class="${"card-body"}"><div class="${"card"}" style="${"width: 95%; margin-left: auto; margin-right: auto; margin-top: 2rem;"}"><div class="${"card-body"}"><h5 class="${"card-title"}"><a${add_attribute("href", `/games/${review.gameId}`, 0)} class="${"svelte-158vabh"}">${escape(review.gameName)}</a></h5>
         
               ${validate_component(StarRating, "StarRating").$$render($$result, { rating: parseFloat(review.rating) }, {}, {})}
               <h6 class="${"card-subtitle mb-2 text-muted"}">${escape(getProperDate(review.reviewAt))}</h6>
               ${review.spoiler ? `<details class="${"svelte-158vabh"}"><summary class="${"svelte-158vabh"}">This review has spoilers. Click to see</summary>
                       <p class="${"card-text svelte-158vabh"}">${escape(review.review)}</p>
               </details>` : `<p class="${"card-text svelte-158vabh"}">${escape(review.review)}</p>`}
             
           </div></div>
     </div>`;
  })}` : `<p class="${"svelte-158vabh"}">No reviews yet</p>`}

    
    <br> <br>
    
      
    
    
    
    </section>`;
});
export { U5Bidu5D as default, load };
