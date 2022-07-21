import { c as create_ssr_component } from "../../chunks/index-38cedc01.js";
import { getAuth } from "firebase/auth";
import app from "../endpoints/fb.js";
import "firebase/firestore";
/* empty css                                                               */import "firebase/app";
var profile_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttons.svelte-zzxh2p{align-items:right;justify-content:right;align-content:right;margin-left:auto}button.svelte-zzxh2p{margin-top:0.3rem;margin-bottom:0.3rem}.games.svelte-zzxh2p{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-zzxh2p{display:inline-flex;width:100%}h1.svelte-zzxh2p{margin-bottom:2rem;margin-right:2rem}")();
const css = {
  code: ".buttons.svelte-zzxh2p{align-items:right;justify-content:right;align-content:right;margin-left:auto}button.svelte-zzxh2p{margin-top:0.3rem;margin-bottom:0.3rem}.games.svelte-zzxh2p{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-zzxh2p{display:inline-flex;width:100%}h1.svelte-zzxh2p{margin-bottom:2rem;margin-right:2rem}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth(app);
  $$result.css.add(css);
  return `<section>${`<h1 class="${"svelte-zzxh2p"}">Loading...</h1>`}




</section>`;
});
export { Profile as default };
