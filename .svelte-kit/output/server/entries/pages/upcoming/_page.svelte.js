import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index.js";
import { P as PopularGame } from "../../../chunks/PopularGame.js";
/* empty css                                                         */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".games.svelte-v4sc0e{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}h2.svelte-v4sc0e{margin-top:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let upcoming = data.upcoming;
  for (let game of upcoming) {
    console.log(game);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><h2 class="${"svelte-v4sc0e"}">Upcoming Games</h2>
	<div class="${"games svelte-v4sc0e"}">${each(upcoming, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game }, {}, {})}`;
  })}</div></section>

`;
});
export {
  Page as default
};
