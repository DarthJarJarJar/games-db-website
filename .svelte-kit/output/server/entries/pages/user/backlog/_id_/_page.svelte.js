import { c as create_ssr_component, e as escape } from "../../../../../chunks/index.js";
/* empty css                                                               */import "firebase/auth";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-1y12tz{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-1y12tz{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-1y12tz{display:inline-flex;width:100%}h1.svelte-1y12tz{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let arrayofgames = data.arrayofgames;
  let name = arrayofgames.displayName;
  arrayofgames.backlog;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section>${name ? `<div class="${"akd svelte-1y12tz"}"><h1 class="${"svelte-1y12tz"}">${escape(name)}&#39;s Profile
			</h1>

			<div class="${"buttons svelte-1y12tz"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Profile</button>
				<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
				<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>
				<button disabled id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button></div></div>
		<h2>Backlog</h2>

		<div class="${"games svelte-1y12tz"}">${``}</div>` : `<h1 class="${"svelte-1y12tz"}">Loading...</h1>`}
</section>`;
});
export {
  Page as default
};
