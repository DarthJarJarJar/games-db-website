import { c as create_ssr_component, e as escape } from "../../../../../chunks/index.js";
import "firebase/auth";
/* empty css                                                              *//* empty css                                                             */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-ixxdgf{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-ixxdgf{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));grid-column-gap:0.5rem;grid-row-gap:0.5rem;height:20vh;margin-top:0.5rem}.akd.svelte-ixxdgf{display:inline-flex;width:100%}h1.svelte-ixxdgf{margin-bottom:2rem}h2.svelte-ixxdgf{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let arrayofgames = data.arrayofgames;
  console.log(arrayofgames.name);
  let ratingsObject = arrayofgames.ratings;
  let name = arrayofgames.displayName;
  let arraygames = [];
  for (let gameObj of ratingsObject) {
    arraygames.push(gameObj.id);
  }
  console.log(arraygames);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section>${name ? `<div class="${"akd svelte-ixxdgf"}"><h1 class="${"svelte-ixxdgf"}">${escape(name)}&#39;s Profile
			</h1>

			<div class="${"buttons svelte-ixxdgf"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Profile</button>
				<button disabled id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
				<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>
				<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button></div></div>
		<h2 class="${"svelte-ixxdgf"}">Games</h2>

		<div class="${"games svelte-ixxdgf"}">${``}</div>` : `<h1 class="${"svelte-ixxdgf"}">Loading...</h1>`}
</section>`;
});
export {
  Page as default
};
