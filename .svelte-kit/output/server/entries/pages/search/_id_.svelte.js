import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/index-38cedc01.js";
import { P as PopularGame } from "../../../chunks/PopularGame-f786c5fc.js";
/* empty css                                                           *//* empty css                                                                  */var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".games.svelte-7acep0{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}")();
const css = {
  code: ".games.svelte-7acep0{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/search/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `search "${params.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`
  });
  const data = await res.json();
  console.log(data);
  return { props: { searchResults: data } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchResults } = $$props;
  if ($$props.searchResults === void 0 && $$bindings.searchResults && searchResults !== void 0)
    $$bindings.searchResults(searchResults);
  $$result.css.add(css);
  return `<section>${searchResults ? `<div class="${"games svelte-7acep0"}">${searchResults.length ? each(searchResults, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game: game.game }, {}, {})}`;
  }) : `<h2>No search results</h2>`}</div>` : ``}
</section>`;
});
export { U5Bidu5D as default, load };
