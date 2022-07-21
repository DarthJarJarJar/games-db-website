import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/index-38cedc01.js";
import { P as PopularGame } from "../../../chunks/PopularGame-66520997.js";
/* empty css                                                           *//* empty css                                                                  */var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".games.svelte-7acep0{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}")();
const css = {
  code: ".games.svelte-7acep0{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}",
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
    body: `fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; sort follows desc; where genres = ${params.id} & follows != null;`
  });
  const data = await res.json();
  return { props: { searchResults: data } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let platformName;
  let { searchResults } = $$props;
  console.log(searchResults);
  if ($$props.searchResults === void 0 && $$bindings.searchResults && searchResults !== void 0)
    $$bindings.searchResults(searchResults);
  $$result.css.add(css);
  platformName = searchResults[0].genres[0].name;
  return `<section>${searchResults ? `<h2>Top ${escape(platformName)} Games</h2>
    <div class="${"games svelte-7acep0"}">${searchResults.length ? each(searchResults, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game }, {}, {})}`;
  }) : `<h2>No search results</h2>`}</div>` : ``}
</section>`;
});
export { U5Bidu5D as default, load };
