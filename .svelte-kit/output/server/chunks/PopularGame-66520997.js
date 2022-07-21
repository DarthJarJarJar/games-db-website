import { c as create_ssr_component, b as add_attribute, e as escape } from "./index-38cedc01.js";
/* empty css                                                    */const css = {
  code: "img.svelte-1eobm24{width:100%;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-1eobm24{font-size:0.9rem;font-weight:bolder}.description.svelte-1eobm24{height:5vh;font-weight:bolder}.game-card.svelte-1eobm24{display:inline-block;flex-direction:column;justify-content:space-around;padding:1rem;max-height:448px;max-width:306px}",
  map: null
};
const PopularGame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  $$result.css.add(css);
  return `${game.id ? `<div class="${"game-card svelte-1eobm24"}"><a sveltekit:prefetch${add_attribute("href", "/games/" + game.id, 0)}><img${add_attribute("src", `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`, 0)}${add_attribute("alt", game.name, 0)} class="${"svelte-1eobm24"}"></a>   
        <div class="${"description svelte-1eobm24"}"><h2 class="${"svelte-1eobm24"}">${escape(game.name)}</h2></div></div>` : `<p>No Games added to favourites yet.</p>`}



`;
});
export { PopularGame as P };
