import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { getAuth } from "firebase/auth";
import { a as app } from "../../chunks/fb.js";
import "firebase/app";
import "firebase/firestore";
const global = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');\n\n* {\n	margin: 0;\n	padding: 0;\n	box-sizing: border-box;\n}\n\nbody {\n	margin: 0 10%;\n}\n\nmain {\n	position: absolute;\n	width: 100%;\n}\n";
const SearchBox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-1x69fyp{padding:2rem}",
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
  return `${path.includes("/search/") ? `<form class="${"d-flex svelte-1x69fyp"}" role="${"search"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search Games"}" aria-label="${"Search Games"}"${add_attribute("value", searchKey, 0)}>
		<button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form>` : `<form class="${"d-flex svelte-1x69fyp"}" role="${"search"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search Games"}" aria-label="${"Search Games"}"${add_attribute("value", searchKey, 0)}>
		<button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form>`}`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-stuff.svelte-p5lmyt{margin:16px}#buttonsubmit.svelte-p5lmyt{margin-top:16px;margin-bottom:16px}#usernamesearch.svelte-p5lmyt{width:10rem}",
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
					<ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><a class="${"dropdown-item"}" sveltekit:prefetch href="${"/browse/"}">All Games</a></li>
						<li><a class="${"dropdown-item"}" href="${"/upcoming/"}">Upcoming Games</a></li></ul></li>

				<li class="${"nav-item"}"><a class="${"nav-link active"}" aria-current="${"page"}" href="${"/profile"}">Profile</a></li>

				<li class="${"nav-item dropdown"}">
					<a class="${"nav-link dropdown-toggle"}" href="${"#"}" id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">Search Users
					</a>

					<ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><h6 class="${"dropdown-header"}">Search users</h6></li>
						

						<div class="${"form-stuff svelte-p5lmyt"}"><div class="${"form-group"}"><label for="${"exampleDropdownFormEmail1"}">Username</label>
								<input class="${"form-control svelte-p5lmyt"}" id="${"usernamesearch"}" autocomplete="${"off"}"${add_attribute("value", searchedUser, 0)}></div>

							<div class="${"form-group"}"><a${add_attribute("href", `/user/home/${searchedUser.toLowerCase()}`, 0)} rel="${"external"}"><button type="${"submit"}" class="${"btn btn-primary svelte-p5lmyt"}" id="${"buttonsubmit"}">Search</button></a></div></div>
						</ul></li></ul>
			${validate_component(SearchBox, "SearchBox").$$render($$result, {}, {}, {})}</div></div></nav>

`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Games DB</title>`, ""}`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
