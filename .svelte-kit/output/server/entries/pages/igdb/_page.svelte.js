import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
/* empty css                                                        */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-form.svelte-h4bc1u{display:inline}label.svelte-h4bc1u{margin:16px}#button.svelte-h4bc1u{margin-top:16px;margin-bottom:16px}.text.svelte-h4bc1u{margin-top:16px;font-weight:bolder}.form-range.svelte-h4bc1u{width:10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rating = 0;
  $$result.css.add(css);
  return `<div class="${"form-form svelte-h4bc1u"}"><input type="${"range"}" class="${"form-range svelte-h4bc1u"}" min="${"0"}" max="${"5"}" step="${"0.1"}" id="${"customRange3"}"${add_attribute("value", rating, 0)}>
	<label for="${"customRange3"}" class="${"form-label svelte-h4bc1u"}"><p class="${"text svelte-h4bc1u"}">${escape(rating)}</p></label></div>

<br>
${``}
${``}`;
});
export {
  Page as default
};
