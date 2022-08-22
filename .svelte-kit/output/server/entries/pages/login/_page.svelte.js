import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as LoginForm } from "../../../chunks/LoginForm.js";
import "firebase/auth";
import "../../../chunks/fb.js";
import "firebase/app";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h1>Login</h1>

	${validate_component(LoginForm, "LoginForm").$$render($$result, { title: "Login" }, {}, {})}</section>`;
});
export {
  Page as default
};
