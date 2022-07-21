import { c as create_ssr_component } from "./index-38cedc01.js";
import { getAuth } from "firebase/auth";
import app from "../entries/endpoints/fb.js";
import { getFirestore, getDocs, collection } from "firebase/firestore";
var LoginForm_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".error.svelte-toajgc{color:red;margin-top:16px}")();
const css = {
  code: ".error.svelte-toajgc{color:red;margin-top:16px}",
  map: null
};
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const db = getFirestore();
  let { title } = $$props;
  getAuth(app);
  async function checkUsername(displayName) {
    let unique = true;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.data().displayName === displayName) {
        unique = false;
      }
    });
    return unique;
  }
  checkUsername("anwar").then((unique) => console.log(unique));
  async function checkUsernameForUniqueness(displayName) {
    await checkUsername(displayName);
  }
  checkUsernameForUniqueness("ayaan");
  console.log(checkUsername("ayaan"));
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<form><div class="${"mb-3"}">${title != "Login" ? `<label for="${"exampleInputEmail1"}" class="${"form-label"}">Username</label>
      <input id="${"displayName"}" class="${"form-control"}" aria-describedby="${"emailHelp"}">` : ``}</div>
    <div class="${"mb-3"}"><label for="${"exampleInputEmail1"}" class="${"form-label"}">Email address</label>
      <input id="${"emailInput"}" type="${"email"}" class="${"form-control"}" aria-describedby="${"emailHelp"}">
        ${title != "Login" ? `<div id="${"emailHelp"}" class="${"form-text"}">Your email will be visible to me. Consider using a throwaway email address since there&#39;s no verification.</div>` : ``}</div>
    <div class="${"mb-3"}"><label for="${"exampleInputPassword1"}" class="${"form-label"}">Password</label>
      <input id="${"passInput"}" type="${"password"}" class="${"form-control"}"></div>
    <button type="${"submit"}" class="${"btn btn-primary"}">Submit</button></form>
  ${title == "Login" ? `<p class="${"float-end mt-3"}">Not a user? <a href="${"/signup"}" class="${"card-link"}">Sign Up</a></p>` : `<p class="${"float-end mt-3"}">Already a user? <a href="${"/login"}" class="${"card-link"}">Sign In</a></p>`}


  ${``}`;
});
export { LoginForm as L };
