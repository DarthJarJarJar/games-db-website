import { c as create_ssr_component, e as escape } from "../../../../chunks/index-38cedc01.js";
import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
import app from "../../../endpoints/fb.js";
/* empty css                                                                     */import "firebase/auth";
import "firebase/app";
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttons.svelte-94uyur{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-94uyur{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-94uyur{display:inline-flex;width:100%}h1.svelte-94uyur{margin-bottom:2rem}")();
const css = {
  code: ".buttons.svelte-94uyur{align-items:right;justify-content:right;align-content:right;margin-left:auto}.games.svelte-94uyur{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh;margin-top:2rem}.akd.svelte-94uyur{display:inline-flex;width:100%}h1.svelte-94uyur{margin-bottom:2rem}",
  map: null
};
const db = getFirestore(app);
async function load({ params }) {
  const q = query(collection(db, "users"), where("name", "==", params.id));
  let data;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    data = doc.data();
    console.log(data);
  });
  return { props: { arrayofgames: data } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { arrayofgames } = $$props;
  let name = arrayofgames.displayName;
  arrayofgames.backlog;
  if ($$props.arrayofgames === void 0 && $$bindings.arrayofgames && arrayofgames !== void 0)
    $$bindings.arrayofgames(arrayofgames);
  $$result.css.add(css);
  return `<section>${name ? `<div class="${"akd svelte-94uyur"}"><h1 class="${"svelte-94uyur"}">${escape(name)}&#39;s Profile
</h1>

<div class="${"buttons svelte-94uyur"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Profile</button>
    <button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
    <button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>
    <button disabled id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button></div></div>
<h2>Backlog</h2>


<div class="${"games svelte-94uyur"}">${``}</div>` : `<h1 class="${"svelte-94uyur"}">Loading...</h1>`}




</section>`;
});
export { U5Bidu5D as default, load };
