import { c as create_ssr_component, f as each, v as validate_component } from "../../chunks/index.js";
/* empty css                                                      */import { G as GameCard } from "../../chunks/GameCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".games.svelte-1tpisuw{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));grid-column-gap:0.3rem;grid-row-gap:0.3rem;height:20vh}section.svelte-1tpisuw{height:fit-content}h2.svelte-1tpisuw{margin-top:0rem;margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data = data["0"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="${"svelte-1tpisuw"}"><h2 class="${"svelte-1tpisuw"}">Popular Games</h2>
		<div class="${"games svelte-1tpisuw"}">${each(data, (game) => {
    return `${validate_component(GameCard, "GameCard").$$render($$result, { game }, {}, {})}`;
  })}</div>
		
	</section>`;
});
export {
  Page as default
};
