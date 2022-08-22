import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                                                        *//* empty css                                                       *//* empty css                                                  */import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { a as app } from "../../../chunks/fb.js";
import "firebase/app";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-1y12tz{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-1y12tz{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-1y12tz{display:inline-flex;width:100%}h1.svelte-1y12tz{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth(app);
  getFirestore();
  $$result.css.add(css);
  return `<section>${`<h1 class="${"svelte-1y12tz"}">Loading...</h1>`}
</section>`;
});
export {
  Page as default
};
