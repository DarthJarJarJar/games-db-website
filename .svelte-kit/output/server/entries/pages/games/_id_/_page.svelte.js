import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../../chunks/index.js";
import { a as app } from "../../../../chunks/fb.js";
import { getFirestore } from "firebase/firestore";
/* empty css                                                           */import { getAuth } from "firebase/auth";
import "firebase/app";
const Rating_svelte_svelte_type_style_lang$1 = "";
const Star_svelte_svelte_type_style_lang = "";
const Rating_svelte_svelte_type_style_lang = "";
const ReviewTest_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-1u2tj57.svelte-1u2tj57{color:red;font-size:medium}.user-options.svelte-1u2tj57.svelte-1u2tj57{display:block;margin:auto}.user-options.svelte-1u2tj57>button.svelte-1u2tj57{margin-right:0.5rem;margin-top:0.5rem;margin-bottom:0.5rem}h1.svelte-1u2tj57.svelte-1u2tj57{padding:1rem 0rem 2rem}p.svelte-1u2tj57.svelte-1u2tj57{padding:1rem 0rem}img.svelte-1u2tj57.svelte-1u2tj57{width:100%;border-radius:1rem}.game-info.svelte-1u2tj57.svelte-1u2tj57{margin:2rem 20%}span.svelte-1u2tj57.svelte-1u2tj57{font-weight:bold}a.svelte-1u2tj57.svelte-1u2tj57{text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchedGame = data.searchedGame;
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
  console.log(searchedGame);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"game-info svelte-1u2tj57"}"><div id="${"carouselExampleControls"}" class="${"carousel slide"}" data-bs-ride="${"carousel"}" style="${"border-radius: 0.5rem;"}"><div class="${"carousel-indicators"}">${each(hashArray, (hashthing, index) => {
    return `${index === 0 ? `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators"}"${add_attribute("data-bs-slide-to", index, 0)} class="${"active"}" aria-current="${"true"}"${add_attribute("aria-label", `Screenshot ${index + 1}`, 0)}></button>` : `<button type="${"button"}" data-bs-target="${"#carouselExampleIndicators"}"${add_attribute("data-bs-slide-to", index, 0)}${add_attribute("aria-label", `Screenshot ${index + 1}`, 0)}></button>`}`;
  })}</div>

		<div class="${"carousel-inner"}">${each(hashArray, (hashitem, index) => {
    return `${index === 0 ? `<div class="${"carousel-item active"}"><img style="${"border-radius: 0.5rem;"}"${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`, 0)}${add_attribute("alt", searchedGame.name, 0)} class="${"d-block w-100 svelte-1u2tj57"}">
					</div>` : `<div class="${"carousel-item"}"><img style="${"border-radius: 0.5rem;"}"${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${hashitem}.jpg`, 0)}${add_attribute("alt", searchedGame.name, 0)} class="${"d-block w-100 svelte-1u2tj57"}">
					</div>`}`;
  })}</div>
		<button class="${"carousel-control-prev"}" type="${"button"}" data-bs-target="${"#carouselExampleControls"}" data-bs-slide="${"prev"}"><span class="${"carousel-control-prev-icon svelte-1u2tj57"}" aria-hidden="${"true"}"></span>
			<span class="${"visually-hidden svelte-1u2tj57"}">Previous</span></button>
		<button class="${"carousel-control-next"}" type="${"button"}" data-bs-target="${"#carouselExampleControls"}" data-bs-slide="${"next"}"><span class="${"carousel-control-next-icon svelte-1u2tj57"}" aria-hidden="${"true"}"></span>
			<span class="${"visually-hidden svelte-1u2tj57"}">Next</span></button></div>

	<div class="${"text-container"}"><h1 class="${"svelte-1u2tj57"}">${escape(searchedGame.name)}</h1>
		<p class="${"overview svelte-1u2tj57"}">${escape(searchedGame.summary)}</p>
		<p class="${"svelte-1u2tj57"}"><span class="${"svelte-1u2tj57"}">Developers/Publishers</span>
			${escape(comapanies)} <br>
			<span class="${"svelte-1u2tj57"}">Platform(s)</span>
			${escape(platformsString)}<br>
			<span class="${"svelte-1u2tj57"}">Genre(s):</span>
			${escape(genresString)}</p>

		${signedIn ? `<div class="${"user-options svelte-1u2tj57"}">${`<button type="${"button"}" class="${"btn btn-primary svelte-1u2tj57"}">Add to backlog</button>`}

				${`<button type="${"button"}" class="${"btn btn-primary svelte-1u2tj57"}">Add to favourites</button>`}

				<p class="${"error svelte-1u2tj57"}">${escape(errorMessage)}</p></div>

			${name ? `${``}` : ``}` : `<strong><a href="${"/profile"}" class="${"svelte-1u2tj57"}">Sign In</a> to log, rate, review and more.</strong>`}</div>
</div>`;
});
export {
  Page as default
};
