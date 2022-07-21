import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-38cedc01.js";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import app from "../endpoints/fb.js";
import "firebase/app";
var global = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    margin: 0 10%;\n}\n\nmain {\n    position: absolute;\n    width: 100%;\n}")();
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var SearchBox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "form.svelte-u3yke7{padding:2rem}")();
const css$1 = {
  code: "form.svelte-u3yke7{padding:2rem}",
  map: null
};
const SearchBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let searchKey = "";
  $$result.css.add(css$1);
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `${path.includes("/search/") ? `<form class="${"d-flex svelte-u3yke7"}" role="${"search"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search Games"}" aria-label="${"Search Games"}"${add_attribute("value", searchKey, 0)}>
        <button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form>` : `<form class="${"d-flex svelte-u3yke7"}" role="${"search"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search Games"}" aria-label="${"Search Games"}"${add_attribute("value", searchKey, 0)}>
            <button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form>`}`;
});
var Navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".form-stuff.svelte-1ycxdcs{margin:16px}#buttonsubmit.svelte-1ycxdcs{margin-top:16px;margin-bottom:16px}#usernamesearch.svelte-1ycxdcs{width:10rem}")();
const css = {
  code: ".form-stuff.svelte-1ycxdcs{margin:16px}#buttonsubmit.svelte-1ycxdcs{margin-top:16px;margin-bottom:16px}#usernamesearch.svelte-1ycxdcs{width:10rem}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  getAuth(app);
  let searchedUser = "";
  $$result.css.add(css);
  $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="${"navbar navbar-expand-lg "}"><div class="${"container-fluid"}"><a class="${"navbar-brand"}" href="${"/"}">Games DB</a>
      <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
      <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item"}"><a class="${"nav-link active"}" aria-current="${"page"}" href="${"/"}">Home</a></li>
          
          <li class="${"nav-item dropdown"}">
            <a class="${"nav-link dropdown-toggle"}" href="${"#"}" id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">Browse
            </a>
            <ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><a class="${"dropdown-item"}" href="${"/upcoming/"}">Upcoming Games</a></li>
                <li><hr class="${"dropdown-divider"}"></li>
                <li><h6 class="${"dropdown-header"}">Genres</h6></li>
              <li><a class="${"dropdown-item"}" href="${"/genres/31"}">Adventure</a></li>
              <li><a class="${"dropdown-item"}" href="${"/genres/4"}">Fighting</a></li>
              <li><a class="${"dropdown-item"}" href="${"/genres/12"}">RPGs</a></li>
              <li><a class="${"dropdown-item"}" href="${"/genres/10"}">Racing</a></li>
              <li><hr class="${"dropdown-divider"}"></li>
              <li><h6 class="${"dropdown-header"}">Platforms</h6></li>
              <li><a class="${"dropdown-item"}" href="${"/platforms/6"}">PC</a></li>
              <li><a class="${"dropdown-item"}" href="${"/platforms/167"}">Playstation 5</a></li>
              <li><a class="${"dropdown-item"}" href="${"/platforms/49"}">Xbox One</a></li>
              <li><a class="${"dropdown-item"}" href="${"/platforms/130"}">Nintendo Switch</a></li></ul></li>
    
          <li class="${"nav-item"}"><a class="${"nav-link active"}" aria-current="${"page"}" href="${"/profile"}">Profile</a></li>

          <li class="${"nav-item dropdown"}">
            <a class="${"nav-link dropdown-toggle"}" href="${"#"}" id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">Search Users
            </a>

         
            <ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><h6 class="${"dropdown-header"}">Search users</h6></li>
            

              <div class="${"form-stuff svelte-1ycxdcs"}"><div class="${"form-group"}"><label for="${"exampleDropdownFormEmail1"}">Username</label>
                  <input class="${"form-control svelte-1ycxdcs"}" id="${"usernamesearch"}" autocomplete="${"off"}"${add_attribute("value", searchedUser, 0)}></div>
                
                <div class="${"form-group"}"><a${add_attribute("href", `/user/home/${searchedUser.toLowerCase()}`, 0)} rel="${"external"}"><button type="${"submit"}" class="${"btn btn-primary svelte-1ycxdcs"}" id="${"buttonsubmit"}">Search</button></a></div></div>
            </ul></li></ul>
        ${validate_component(SearchBox, "SearchBox").$$render($$result, {}, {}, {})}</div></div></nav>
  `;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Games DB</title>`, ""}`, ""}





  


${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}



${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
