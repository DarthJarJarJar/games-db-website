import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/index-38cedc01.js";
import { P as PopularGame } from "../../chunks/PopularGame-66520997.js";
/* empty css                                                               */var upcoming_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".games.svelte-abfciu{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}h2.svelte-abfciu{margin-top:2rem}")();
const css = {
  code: ".games.svelte-abfciu{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}h2.svelte-abfciu{margin-top:2rem}",
  map: null
};
const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 157788e5;
console.log(recentTimeStamp);
async function load({ fetch, params }) {
  const res2 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(currentDate.getTime() / 1e3)};`
  });
  const data2 = await res2.json();
  return { props: { upcoming: data2 } };
}
const Upcoming = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { upcoming } = $$props;
  for (let game of upcoming) {
    console.log(game);
  }
  if ($$props.upcoming === void 0 && $$bindings.upcoming && upcoming !== void 0)
    $$bindings.upcoming(upcoming);
  $$result.css.add(css);
  return `<section><h2 class="${"svelte-abfciu"}">Upcoming Games</h2>
    <div class="${"games svelte-abfciu"}">${each(upcoming, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game }, {}, {})}`;
  })}</div></section>

  


`;
});
export { Upcoming as default, load };
