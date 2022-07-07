import { c as create_ssr_component, b as add_attribute, e as escape } from "../../chunks/index-38cedc01.js";
/* empty css                                                              */var igdb_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".form-form.svelte-9oirau{display:inline}label.svelte-9oirau{margin:16px}#button.svelte-9oirau{margin-top:16px;margin-bottom:16px}.text.svelte-9oirau{margin-top:16px;font-weight:bolder}.form-range.svelte-9oirau{width:10%}")();
const css = {
  code: ".form-form.svelte-9oirau{display:inline}label.svelte-9oirau{margin:16px}#button.svelte-9oirau{margin-top:16px;margin-bottom:16px}.text.svelte-9oirau{margin-top:16px;font-weight:bolder}.form-range.svelte-9oirau{width:10%}",
  map: null
};
const Igdb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rating = 0;
  $$result.css.add(css);
  return `<div class="${"form-form svelte-9oirau"}"><input type="${"range"}" class="${"form-range svelte-9oirau"}" min="${"0"}" max="${"5"}" step="${"0.1"}" id="${"customRange3"}"${add_attribute("value", rating, 0)}>
  <label for="${"customRange3"}" class="${"form-label svelte-9oirau"}"><p class="${"text svelte-9oirau"}">${escape(rating)}</p></label></div>

<br>
${``}
${``}`;
});
export { Igdb as default };
