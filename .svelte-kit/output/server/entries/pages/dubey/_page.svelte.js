import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spoiler = false;
  return `<input class="${"form-check-input mt-0"}" type="${"checkbox"}" aria-label="${"Checkbox for following text input"}"${add_attribute("checked", spoiler, 1)}>
<h1>${escape(spoiler)}</h1>`;
});
export {
  Page as default
};
