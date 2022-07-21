import { c as create_ssr_component, v as validate_component } from "../../chunks/index-38cedc01.js";
import { L as LoginForm } from "../../chunks/LoginForm-6c849788.js";
import "firebase/auth";
import "../endpoints/fb.js";
import "firebase/app";
import "firebase/firestore";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h1>Login
</h1>

${validate_component(LoginForm, "LoginForm").$$render($$result, { title: "Login" }, {}, {})}</section>`;
});
export { Login as default };
