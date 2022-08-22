import { c as create_ssr_component } from "../../../chunks/index.js";
import { getAuth } from "firebase/auth";
import { a as app } from "../../../chunks/fb.js";
import "firebase/firestore";
/* empty css                                                         */import "firebase/app";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1bnxxrh{margin-bottom:2rem;margin-right:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth(app);
  $$result.css.add(css);
  return `<section><h1 class="${"svelte-1bnxxrh"}">Loading profile...</h1>
</section>`;
});
export {
  Page as default
};
