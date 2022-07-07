import { c as create_ssr_component, d as each, e as escape, b as add_attribute } from "../../../chunks/index-38cedc01.js";
import app from "../../endpoints/fb.js";
import { getFirestore } from "firebase/firestore";
/* empty css                                                                 *//* empty css                                                                 */import { getAuth } from "firebase/auth";
import "firebase/app";
var Rating_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#label.svelte-fa29e6{position:absolute;right:15rem;font-weight:bolder}.submit-and-stars.svelte-fa29e6{margin-top:5rem}.slider.svelte-fa29e6{position:absolute;left:0px;width:60%;padding:10px}.slider-and-label.svelte-fa29e6{width:90%;margin-left:auto;margin-right:auto;margin-top:2rem;margin-bottom:4rem}button.svelte-fa29e6{margin-bottom:1rem}")();
var ReviewCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttons.svelte-cait7m.svelte-cait7m.svelte-cait7m{display:inline-flex;flex-wrap:wrap}details.svelte-cait7m.svelte-cait7m.svelte-cait7m{border:1px solid #aaa;border-radius:4px;padding:.5em .5em 0}summary.svelte-cait7m.svelte-cait7m.svelte-cait7m{font-weight:bold;margin:-.5em -.5em 0;padding:.5em}details[open].svelte-cait7m.svelte-cait7m.svelte-cait7m{padding:.5em}details[open].svelte-cait7m summary.svelte-cait7m.svelte-cait7m{border-bottom:1px solid #aaa;margin-bottom:.5em}.spoilers.svelte-cait7m.svelte-cait7m.svelte-cait7m{margin-bottom:1rem}.check.svelte-cait7m.svelte-cait7m.svelte-cait7m{display:block;width:fit-content}p.svelte-cait7m.svelte-cait7m.svelte-cait7m{white-space:pre-wrap}.form-floating.svelte-cait7m>.form-control.svelte-cait7m:not(:-moz-placeholder-shown)~label.svelte-cait7m{opacity:1;color:rgba(0, 0, 0, 0.5);background-color:#fff;height:auto;padding:0px;padding:0px 0px 0px 10px;width:100%;transform:scale(0.982) translateY(0.045rem) translateX(0.1rem);border-radius:5px 0 0 0}.form-floating.svelte-cait7m>.form-control.svelte-cait7m:focus~label.svelte-cait7m,.form-floating.svelte-cait7m>.form-control.svelte-cait7m:not(:placeholder-shown)~label.svelte-cait7m,.form-floating.svelte-cait7m>.form-control.svelte-cait7m:-webkit-autofill~label.svelte-cait7m{opacity:1;color:rgba(0, 0, 0, 0.5);height:auto;padding:0px;padding:0px 0px 0px 10px;width:100%;transform:scale(0.982) translateY(0.045rem) translateX(0.1rem);border-radius:5px 0 0 0}")();
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".error.svelte-kssepx.svelte-kssepx{color:red;font-size:medium}.user-options.svelte-kssepx.svelte-kssepx{display:block;margin:auto}.user-options.svelte-kssepx>button.svelte-kssepx{margin-right:0.5rem;margin-top:0.5rem;margin-bottom:0.5rem}h1.svelte-kssepx.svelte-kssepx{padding:1rem 0rem 2rem}p.svelte-kssepx.svelte-kssepx{padding:1rem 0rem}img.svelte-kssepx.svelte-kssepx{width:100%;border-radius:1rem}.game-info.svelte-kssepx.svelte-kssepx{margin:2rem 20%}span.svelte-kssepx.svelte-kssepx{font-weight:bold}")();
const css = {
  code: ".error.svelte-kssepx.svelte-kssepx{color:red;font-size:medium}.user-options.svelte-kssepx.svelte-kssepx{display:block;margin:auto}.user-options.svelte-kssepx>button.svelte-kssepx{margin-right:0.5rem;margin-top:0.5rem;margin-bottom:0.5rem}h1.svelte-kssepx.svelte-kssepx{padding:1rem 0rem 2rem}p.svelte-kssepx.svelte-kssepx{padding:1rem 0rem}img.svelte-kssepx.svelte-kssepx{width:100%;border-radius:1rem}.game-info.svelte-kssepx.svelte-kssepx{margin:2rem 20%}span.svelte-kssepx.svelte-kssepx{font-weight:bold}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; where id = ${params.id};`
  });
  const data = await res.json();
  return { props: { searchedGame: data[0] } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getFirestore();
  const auth = getAuth(app);
  let errorMessage = "";
  let signedIn = false;
  let name;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      signedIn = true;
      auth.currentUser.uid;
      name = auth.currentUser.displayName;
    } else {
      signedIn = false;
    }
  });
  let { searchedGame } = $$props;
  searchedGame.id;
  console.log(searchedGame);
  let comapanies = [];
  searchedGame.screenshots[0].image_id;
  let hashArray = [];
  for (let hash of searchedGame.screenshots) {
    hashArray.push(hash.image_id);
  }
  try {
    for (let company of searchedGame.involved_companies) {
      comapanies.push(" " + company.company.name);
    }
  } catch {
    comapanies.push("No companies found.");
  }
  let platformsString = [];
  for (let platformObject of searchedGame.platforms) {
    platformsString.push(" " + platformObject.name);
  }
  let genresString = [];
  try {
    for (let genreObject of searchedGame.genres) {
      genresString.push(" " + genreObject.name);
    }
  } catch {
    genresString.push("No genres found.");
  }
  if ($$props.searchedGame === void 0 && $$bindings.searchedGame && searchedGame !== void 0)
    $$bindings.searchedGame(searchedGame);
  $$result.css.add(css);
  return `<div class="${"game-info svelte-kssepx"}"><div id="${"carouselExampleControls"}" class="${"carousel slide"}" data-bs-ride="${"carousel"}" style="${"border-radius: 0.5rem;"}"><div class="${"carousel-indicators"}">${each(hashArray, (hashthing, index) => {
    return `${index === 0 ? `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators"}"${add_attribute("data-bs-slide-to", index, 0)} class="${"active"}" aria-current="${"true"}"${add_attribute("aria-label", `Screenshot ${index + 1}`, 0)}></button>` : `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators"}"${add_attribute("data-bs-slide-to", index, 0)}${add_attribute("aria-label", `Screenshot ${index + 1}`, 0)}></button>`}`;
  })}</div>
 
     <div class="${"carousel-inner"}">${each(hashArray, (hashitem, index) => {
    return `${index === 0 ? `<div class="${"carousel-item active"}"><img style="${"border-radius: 0.5rem;"}"${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`, 0)}${add_attribute("alt", searchedGame.name, 0)} class="${"d-block w-100 svelte-kssepx"}">
     </div>` : `<div class="${"carousel-item"}"><img style="${"border-radius: 0.5rem;"}"${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`, 0)}${add_attribute("alt", searchedGame.name, 0)} class="${"d-block w-100 svelte-kssepx"}">
 
         </div>`}`;
  })}</div>
     <button class="${"carousel-control-prev"}" type="${"button"}" data-bs-target="${"#carouselExampleControls"}" data-bs-slide="${"prev"}"><span class="${"carousel-control-prev-icon svelte-kssepx"}" aria-hidden="${"true"}"></span>
       <span class="${"visually-hidden svelte-kssepx"}">Previous</span></button>
     <button class="${"carousel-control-next"}" type="${"button"}" data-bs-target="${"#carouselExampleControls"}" data-bs-slide="${"next"}"><span class="${"carousel-control-next-icon svelte-kssepx"}" aria-hidden="${"true"}"></span>
       <span class="${"visually-hidden svelte-kssepx"}">Next</span></button></div>
 
    <div class="${"text-container"}"><h1 class="${"svelte-kssepx"}">${escape(searchedGame.name)}</h1>
     <p class="${"overview svelte-kssepx"}">${escape(searchedGame.summary)}</p>
     <p class="${"svelte-kssepx"}"><span class="${"svelte-kssepx"}">Developers/Publishers</span>
         ${escape(comapanies)} <br>
         <span class="${"svelte-kssepx"}">Platform(s)</span> ${escape(platformsString)}<br>
         <span class="${"svelte-kssepx"}">Genre(s):</span>
         ${escape(genresString)}</p>
     ${signedIn ? `<div class="${"user-options svelte-kssepx"}">${`<button type="${"button"}" class="${"btn btn-primary svelte-kssepx"}">Add to backlog</button>`} 
     
 ${`<button type="${"button"}" class="${"btn btn-primary svelte-kssepx"}">Add to favourites</button>`} 
 

 
         <p class="${"error svelte-kssepx"}">${escape(errorMessage)}</p></div>
 
 


 ${name ? `${``}` : ``}` : ``}</div>
 </div>`;
});
export { U5Bidu5D as default, load };
