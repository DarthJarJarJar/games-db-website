import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/index-38cedc01.js";
import { p as proxyURL } from "../../chunks/index-bd207af4.js";
import { P as PopularGame } from "../../chunks/PopularGame-66520997.js";
/* empty css                                                               */var b_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".games.svelte-d9vopw{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}.searchbutton.svelte-d9vopw{margin-top:1rem}.main.svelte-d9vopw{float:right;width:90%}.arrow.svelte-d9vopw{position:fixed;margin-right:5rem;-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-top:10rem}.arr.svelte-d9vopw{display:block;float:left;height:100%}")();
const css = {
  code: ".games.svelte-d9vopw{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}.searchbutton.svelte-d9vopw{margin-top:1rem}.main.svelte-d9vopw{float:right;width:90%}.arrow.svelte-d9vopw{position:fixed;margin-right:5rem;-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-top:10rem}.arr.svelte-d9vopw{display:block;float:left;height:100%}",
  map: null
};
const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 157788e5;
async function load({ fetch }) {
  const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/genres/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name; limit 31;`
  });
  const data = await res.json();
  const res2 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/platforms/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, abbreviation ; limit 500;sort created_at desc;`
  });
  const data2 = await res2.json();
  const res3 = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(recentTimeStamp / 1e3)} & first_release_date<${Math.floor(currentDate.getTime() / 1e3)}; limit 5;`
  });
  const data3 = await res3.json();
  const res4 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/game_modes/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name ; limit 500;sort created_at desc;`
  });
  const data4 = await res4.json();
  const res5 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/themes/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name ; limit 500;`
  });
  const data5 = await res5.json();
  const res6 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/player_perspectives/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      "Authorization": "Bearer sd089a9azgftad7tbbaroxitu6x71k",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name ; limit 500;`
  });
  const data6 = await res6.json();
  return {
    props: {
      g: data,
      p: data2,
      popularGames: data3,
      modes: data4,
      themes: data5,
      perspectives: data6
    }
  };
}
function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(void 0);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popularGames } = $$props;
  let { modes } = $$props;
  let searchGenre;
  let searchCategory;
  let searchModes;
  let { themes } = $$props;
  let { perspectives } = $$props;
  let searchPerspectives;
  let { g } = $$props;
  let { p } = $$props;
  for (let genre of g) {
    genre.active = false;
  }
  const genres = g;
  for (let theme of themes) {
    theme.active = false;
  }
  for (let plat of p) {
    plat.active = false;
  }
  for (let mode of modes) {
    mode.active = false;
  }
  for (let perspective of perspectives) {
    perspective.active = false;
  }
  const categories = [
    { name: "Main Game", id: 0, active: false },
    { name: "DLC/Add-on", id: 1, active: false },
    { name: "Expansion", id: 2, active: false },
    { name: "Bundle", id: 3, active: false },
    { name: "Remake", id: 8, active: false },
    { name: "Remaster", id: 9, active: false },
    {
      name: "Expanded Game",
      id: 10,
      active: false
    }
  ];
  const platforms = p;
  function getIndexOfPlatform(plat) {
    let index = 0;
    let result;
    for (let platform of platforms) {
      if (platform.name.toLowerCase() === plat) {
        result = index;
      }
      index += 1;
    }
    return result;
  }
  console.log(getIndexOfPlatform("playstation 5"));
  array_move(platforms, getIndexOfPlatform("playstation 5"), 0);
  array_move(platforms, getIndexOfPlatform("xbox series x|s"), 1);
  array_move(platforms, getIndexOfPlatform("pc (microsoft windows)"), 2);
  array_move(platforms, getIndexOfPlatform("nintendo switch"), 3);
  array_move(platforms, getIndexOfPlatform("playstation 4"), 4);
  array_move(platforms, getIndexOfPlatform("xbox one"), 5);
  array_move(platforms, getIndexOfPlatform("playstation 3"), 6);
  array_move(platforms, getIndexOfPlatform("xbox 360"), 7);
  array_move(platforms, getIndexOfPlatform("playstation 2"), 8);
  array_move(platforms, getIndexOfPlatform("xbox"), 9);
  array_move(platforms, getIndexOfPlatform("wii u"), 10);
  array_move(platforms, getIndexOfPlatform("playstation"), 11);
  let searchPlat;
  if ($$props.popularGames === void 0 && $$bindings.popularGames && popularGames !== void 0)
    $$bindings.popularGames(popularGames);
  if ($$props.modes === void 0 && $$bindings.modes && modes !== void 0)
    $$bindings.modes(modes);
  if ($$props.themes === void 0 && $$bindings.themes && themes !== void 0)
    $$bindings.themes(themes);
  if ($$props.perspectives === void 0 && $$bindings.perspectives && perspectives !== void 0)
    $$bindings.perspectives(perspectives);
  if ($$props.g === void 0 && $$bindings.g && g !== void 0)
    $$bindings.g(g);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  $$result.css.add(css);
  return `<div class="${"arr svelte-d9vopw"}"><button class="${"btn btn-light arrow svelte-d9vopw"}" type="${"button"}" data-bs-toggle="${"offcanvas"}" data-bs-target="${"#offcanvasScrolling"}" aria-controls="${"offcanvasScrolling"}">Filters
        <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-caret-up-fill"}" viewBox="${"0 0 16 16"}"><path d="${"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}"></path></svg></button></div>   

    <div class="${"main svelte-d9vopw"}"><div class="${"offcanvas offcanvas-start"}" data-bs-scroll="${"true"}" data-bs-backdrop="${"false"}" tabindex="${"-1"}" id="${"offcanvasScrolling"}" aria-labelledby="${"offcanvasScrollingLabel"}"><div class="${"offcanvas-header"}"><h5 class="${"offcanvas-title"}" id="${"offcanvasScrollingLabel"}">Browse Games</h5>
           
            <button type="${"button"}" class="${"btn-close"}" data-bs-dismiss="${"offcanvas"}" aria-label="${"Close"}"></button></div>
          <div class="${"offcanvas-body"}"><div class="${"accordion"}" id="${"accordionExample"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseOne"}" aria-expanded="${"false"}" aria-controls="${"collapseOne"}">Genres
                  </button></h2>
                <div id="${"collapseOne"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingOne"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search genres"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchGenre, 0)}>
                        ${each(genres, (genre, index) => {
    return `${`${index < 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", genre.active, 1)}>
                              <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(genre.name)}</label>
                            </div>` : ``}`}`;
  })}   
                        <details><summary>Show more</summary>
                          ${each(genres, (genre, index) => {
    return `${index > 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", genre.active, 1)}>
                            <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(genre.name)}</label>
                          </div>` : ``}`;
  })}</details></div></div></div>
                <div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingTwo"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseTwo"}" aria-expanded="${"false"}" aria-controls="${"collapseTwo"}">Platforms
                    </button></h2>
                  <div id="${"collapseTwo"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingTwo"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search platforms"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchPlat, 0)}>
                       
                      ${each(platforms, (platform, index) => {
    return `${`${index < 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", platform.active, 1)}>
                                  <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(platform.name)}</label>
                                </div>` : ``}`}`;
  })}
                        <details><summary>Show more</summary>
                          ${each(platforms, (platform, index) => {
    return `${index > 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", platform.active, 1)}>
                            <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(platform.name)}</label>
                          </div>` : ``}`;
  })}</details></div></div></div>
                <div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseThree"}" aria-expanded="${"false"}" aria-controls="${"collapseThree"}">Categories
                    </button></h2>
                  <div id="${"collapseThree"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingThree"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search categories"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchCategory, 0)}>
                          ${each(categories, (category, index) => {
    return `${`${index < 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", category.active, 1)}>
                                <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(category.name)}</label>
                              </div>` : ``}`}`;
  })}</div></div></div>
                  <div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseFour"}" aria-expanded="${"false"}" aria-controls="${"collapseFour"}">Game Modes
                      </button></h2>
                    <div id="${"collapseFour"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingFour"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search categories"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchModes, 0)}>
                            ${each(modes, (mode, index) => {
    return `${`${index < 22 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", mode.active, 1)}>
                                  <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(mode.name)}</label>
                                </div>` : ``}`}`;
  })}</div></div></div>
                    <div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseFive"}" aria-expanded="${"false"}" aria-controls="${"collapseFive"}">Themes
                        </button></h2>
                      <div id="${"collapseFive"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingFive"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search categories"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchModes, 0)}>
                              ${each(themes, (theme, index) => {
    return `${`${index < 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", theme.active, 1)}>
                                    <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(theme.name)}</label>
                                  </div>` : ``}`}`;
  })} 
                              <details><summary>Show more</summary>
                                ${each(themes, (theme, index) => {
    return `${index > 11 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", theme.active, 1)}>
                                  <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(theme.name)}</label>
                                </div>` : ``}`;
  })}</details></div></div></div>

                      <div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseSix"}" aria-expanded="${"false"}" aria-controls="${"collapseSix"}">Player Perspective
                          </button></h2>
                        <div id="${"collapseSix"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"headingSix"}" data-bs-parent="${"#accordionExample"}"><div class="${"accordion-body"}"><input type="${"text"}" placeholder="${"Search categories"}" class="${"form-control"}" style="${"margin-bottom: 0.4rem;"}"${add_attribute("value", searchPerspectives, 0)}>
                                ${each(perspectives, (perspective, index) => {
    return `${`${index < 22 ? `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDefault"}"${add_attribute("checked", perspective.active, 1)}>
                                      <label class="${"form-check-label"}" for="${"flexCheckDefault"}">${escape(perspective.name)}</label>
                                    </div>` : ``}`}`;
  })}</div></div></div></div>
             
        
            
               <button type="${"button"}" class="${"btn btn-primary searchbutton svelte-d9vopw"}" data-bs-dismiss="${"offcanvas"}" aria-label="${"Close"}">Search</button> <br></div></div>
        ${`<h2>Popular Games</h2> <p>Add filters to refine your search</p>`}

        <div class="${"games svelte-d9vopw"}">${`${each(popularGames, (game) => {
    return `${validate_component(PopularGame, "PopularGame").$$render($$result, { game }, {}, {})}`;
  })}`}</div>
    
    
    
    </div>`;
});
export { B as default, load };
