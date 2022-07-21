import { c as create_ssr_component, d as each, v as validate_component } from "./index-38cedc01.js";
import { P as PopularGame } from "./PopularGame-66520997.js";
const proxyURL = "https://powerful-fjord-21607.herokuapp.com/";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".games.svelte-abfciu{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}h2.svelte-abfciu{margin-top:2rem}")();
const css = {
  code: ".games.svelte-abfciu{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}h2.svelte-abfciu{margin-top:2rem}",
  map: null
};
const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 157788e5;
console.log(recentTimeStamp);
async function load({ fetch, params }) {
  const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(recentTimeStamp / 1e3)} & first_release_date<${Math.floor(currentDate.getTime() / 1e3)}; limit 200;`
  });
  const data = await res.json();
  return { props: { searchResults: data } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchResults } = $$props;
  for (let game of searchResults) {
    console.log(game);
  }
  if ($$props.searchResults === void 0 && $$bindings.searchResults && searchResults !== void 0)
    $$bindings.searchResults(searchResults);
  $$result.css.add(css);
  return `<section><h2 class="${"svelte-abfciu"}">Popular Games</h2>
    <div class="${"games svelte-abfciu"}">${each(searchResults, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game }, {}, {})}`;
  })}</div>
</section>`;
});
export { Routes as R, load as l, proxyURL as p };
