import { c as create_ssr_component, d as add_attribute } from "./index.js";
const GameCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1xvlh2x{width:100%;object-fit:cover;border-radius:0.5rem;margin-bottom:0.5rem}img.svelte-1xvlh2x:hover{border:3px solid #4bb543}.game-card.svelte-1xvlh2x{display:inline-block;flex-direction:column;justify-content:space-around;padding:0.4rem;max-height:448px;max-width:306px}",
  map: null
};
const GameCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  $$result.css.add(css);
  return `${game.id ? `<div class="${"game-card svelte-1xvlh2x"}"><a sveltekit:prefetch${add_attribute("href", "/games/" + game.id, 0)}><img${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`, 0)}${add_attribute("alt", game.name, 0)} class="${"svelte-1xvlh2x"}"></a></div>` : `<p>No Games added to favourites yet.</p>`}

`;
});
export {
  GameCard as G
};
