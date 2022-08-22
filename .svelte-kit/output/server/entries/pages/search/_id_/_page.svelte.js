import { c as create_ssr_component, f as each, v as validate_component } from "../../../../chunks/index.js";
import { P as PopularGame } from "../../../../chunks/PopularGame.js";
/* empty css                                                     *//* empty css                                                            */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".games.svelte-pr1u4i{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchResults = data.searchResults;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section>${searchResults ? `<div class="${"games svelte-pr1u4i"}">${searchResults.length ? each(searchResults, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game: game.game }, {}, {})}`;
  }) : `<h2>No search results</h2>`}</div>` : ``}
</section>`;
});
export {
  Page as default
};
