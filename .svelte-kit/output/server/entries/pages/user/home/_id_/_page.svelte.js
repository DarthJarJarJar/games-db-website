import { c as create_ssr_component, e as escape } from "../../../../../chunks/index.js";
import { a as app } from "../../../../../chunks/fb.js";
import { getAuth } from "firebase/auth";
/* empty css                                                               */import "firebase/app";
import "firebase/firestore";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-49hro1{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-49hro1{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akdd.svelte-49hro1{display:inline-flex;width:100%}h1.svelte-49hro1{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let { data } = $$props;
  let arrayofgames = data.arrayofgames;
  const auth = getAuth(app);
  let loggedIn;
  auth.onAuthStateChanged((user) => {
    if (user) {
      if (user.uid === arrayofgames.uid) {
        loggedIn = true;
      }
    }
  });
  if (arrayofgames) {
    name = arrayofgames.displayName;
    arrayofgames.favourites;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section>${arrayofgames ? `${name ? `<div class="${"akdd svelte-49hro1"}"><h1 class="${"svelte-49hro1"}">${escape(name)}&#39;s Profile
				</h1>

				<div class="${"buttons svelte-49hro1"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}" disabled>Profile</button>
					<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
					<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>

					<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button>
					${loggedIn ? `<button id="${"backlog"}" type="${"button"}" class="${"btn btn-danger"}">Sign Out</button>` : ``}</div></div>
			<h2>Favourites</h2>

			<div class="${"games svelte-49hro1"}">${``}</div>` : `<h1 class="${"svelte-49hro1"}">Loading...</h1>`}` : `<h1 class="${"svelte-49hro1"}">User not found</h1>`}
</section>`;
});
export {
  Page as default
};
