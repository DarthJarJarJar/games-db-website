import { c as create_ssr_component } from "../../chunks/index-38cedc01.js";
/* empty css                                                              *//* empty css                                                             *//* empty css                                                        */import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "../endpoints/fb.js";
import "firebase/app";
var mygames_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttons.svelte-1i11psd{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-1i11psd{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-1i11psd{display:inline-flex;width:100%}h1.svelte-1i11psd{margin-bottom:2rem}")();
const css = {
  code: ".buttons.svelte-1i11psd{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-1i11psd{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-1i11psd{display:inline-flex;width:100%}h1.svelte-1i11psd{margin-bottom:2rem}",
  map: null
};
const Mygames = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth(app);
  getFirestore();
  $$result.css.add(css);
  return `<section>${`<h1 class="${"svelte-1i11psd"}">Loading...</h1>`}
</section>`;
});
export { Mygames as default };
