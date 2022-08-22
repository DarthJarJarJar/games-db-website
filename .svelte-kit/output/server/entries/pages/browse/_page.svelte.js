import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/index.js";
import { G as GameCard } from "../../../chunks/GameCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".games.svelte-hwx82w{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));grid-column-gap:0.3rem;grid-row-gap:0.3rem;height:20vh}.searchbutton.svelte-hwx82w{margin-top:1rem}.main.svelte-hwx82w{float:right;width:90%}.arrow.svelte-hwx82w{position:fixed;margin-right:5rem;-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-top:10rem}.arr.svelte-hwx82w{display:block;float:left;height:100%}",
  map: null
};
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data_const = {
    props: {
      g: [
        { id: 4, name: "Fighting" },
        { id: 5, name: "Shooter" },
        { id: 7, name: "Music" },
        { id: 8, name: "Platform" },
        { id: 9, name: "Puzzle" },
        { id: 10, name: "Racing" },
        { id: 11, name: "Real Time Strategy (RTS)" },
        { id: 12, name: "Role-playing (RPG)" },
        { id: 13, name: "Simulator" },
        { id: 14, name: "Sport" },
        { id: 15, name: "Strategy" },
        {
          id: 16,
          name: "Turn-based strategy (TBS)"
        },
        { id: 24, name: "Tactical" },
        { id: 26, name: "Quiz/Trivia" },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up"
        },
        { id: 30, name: "Pinball" },
        { id: 31, name: "Adventure" },
        { id: 33, name: "Arcade" },
        { id: 34, name: "Visual Novel" },
        { id: 32, name: "Indie" },
        { id: 35, name: "Card & Board Game" },
        { id: 36, name: "MOBA" },
        { id: 2, name: "Point-and-click" }
      ],
      p: [
        { id: 406, name: "Sinclair QL" },
        { id: 405, name: "Windows Mobile" },
        { id: 390, name: "PlayStation VR2" },
        { id: 389, name: "AirConsole" },
        { id: 388, name: "Gear VR" },
        { id: 387, name: "Oculus Go" },
        { id: 386, name: "Oculus Quest 2" },
        { id: 385, name: "Oculus Rift" },
        { id: 384, name: "Oculus Quest" },
        { id: 382, name: "Intellivision Amico" },
        { id: 381, name: "Playdate" },
        { id: 380, name: "Casio Loopy" },
        { id: 379, name: "Game.com" },
        { id: 378, name: "Gamate" },
        { id: 377, name: "Plug & Play" },
        {
          id: 376,
          name: "Epoch Super Cassette Vision"
        },
        { id: 375, name: "Epoch Cassette Vision" },
        { id: 374, name: "Sharp MZ-2200" },
        { id: 373, name: "Sinclair ZX81" },
        { id: 372, name: "OOParts" },
        { id: 339, name: "Sega Pico" },
        { id: 307, name: "Game & Watch" },
        { id: 306, name: "Satellaview" },
        { id: 309, name: "Evercade" },
        { id: 308, name: "Playdia" },
        { id: 274, name: "PC-FX" },
        { id: 240, name: "Zeebo" },
        { id: 239, name: "Blu-ray Player" },
        { id: 238, name: "DVD Player" },
        { id: 237, name: "Sol-20" },
        { id: 236, name: "Exidy Sorcerer" },
        { id: 203, name: "DUPLICATE Stadia" },
        {
          id: 170,
          abbreviation: "Stadia",
          name: "Google Stadia"
        },
        {
          id: 169,
          abbreviation: "Series X",
          name: "Xbox Series X|S"
        },
        {
          id: 167,
          abbreviation: "PS5",
          name: "PlayStation 5"
        },
        { id: 166, name: "Pok\xE9mon mini" },
        {
          id: 165,
          abbreviation: "PlayStation VR",
          name: "PlayStation VR"
        },
        {
          id: 162,
          abbreviation: "Oculus VR",
          name: "Oculus VR"
        },
        { id: 164, name: "Daydream" },
        {
          id: 163,
          abbreviation: "Steam VR",
          name: "SteamVR"
        },
        { id: 161, name: "Windows Mixed Reality" },
        { id: 159, name: "Nintendo DSi" },
        { id: 158, name: "Commodore CDTV" },
        { id: 157, name: "NEC PC-6000 Series" },
        { id: 156, name: "Thomson MO5" },
        { id: 155, name: "Tatung Einstein" },
        { id: 154, name: "Amstrad PCW" },
        { id: 153, name: "Dragon 32/64" },
        { id: 152, name: "FM-7" },
        { id: 151, name: "TRS-80 Color Computer" },
        {
          id: 150,
          name: "Turbografx-16/PC Engine CD"
        },
        { id: 149, name: "PC-98" },
        { id: 148, name: "AY-3-8607" },
        { id: 147, name: "AY-3-8606" },
        { id: 146, name: "AY-3-8605" },
        { id: 145, name: "AY-3-8603" },
        { id: 144, name: "AY-3-8710" },
        { id: 143, name: "AY-3-8760" },
        { id: 142, name: "PC-50X Family" },
        { id: 141, name: "AY-3-8610" },
        { id: 140, name: "AY-3-8500" },
        {
          id: 139,
          name: "1292 Advanced Programmable Video System"
        },
        { id: 138, name: "VC 4000" },
        { id: 137, name: "New Nintendo 3DS" },
        { id: 136, name: "Neo Geo CD" },
        { id: 135, name: "Hyper Neo Geo 64" },
        { id: 134, name: "Acorn Electron" },
        { id: 133, name: "Philips Videopac G7000" },
        { id: 132, name: "Amazon Fire TV" },
        { id: 131, name: "Nintendo PlayStation" },
        {
          id: 130,
          abbreviation: "Switch",
          name: "Nintendo Switch"
        },
        {
          id: 129,
          abbreviation: "ti-99",
          name: "Texas Instruments TI-99"
        },
        {
          id: 128,
          abbreviation: "supergrafx",
          name: "PC Engine SuperGrafx"
        },
        { id: 127, name: "Fairchild Channel F" },
        { id: 126, name: "TRS-80" },
        { id: 125, name: "PC-8801" },
        { id: 123, name: "WonderSwan Color" },
        { id: 124, name: "SwanCrystal" },
        { id: 122, name: "Nuon" },
        { id: 120, name: "Neo Geo Pocket Color" },
        { id: 119, name: "Neo Geo Pocket" },
        { id: 121, name: "Sharp X68000" },
        { id: 118, name: "FM Towns" },
        { id: 117, name: "Philips CD-i" },
        { id: 116, name: "Acorn Archimedes" },
        { id: 115, name: "Apple IIGS" },
        { id: 114, name: "Amiga CD32" },
        { id: 113, name: "OnLive Game System" },
        {
          id: 112,
          abbreviation: "microcomputer",
          name: "Microcomputer"
        },
        {
          id: 111,
          abbreviation: "imlac-pds1",
          name: "Imlac PDS-1"
        },
        {
          id: 110,
          abbreviation: "plato",
          name: "PLATO"
        },
        {
          id: 109,
          abbreviation: "cdccyber70",
          name: "CDC Cyber 70"
        },
        {
          id: 108,
          abbreviation: "pdp11",
          name: "PDP-11"
        },
        {
          id: 107,
          abbreviation: "call-a-computer",
          name: "Call-A-Computer time-shared mainframe computer system"
        },
        {
          id: 106,
          abbreviation: "sdssigma7",
          name: "SDS Sigma 7"
        },
        {
          id: 105,
          abbreviation: "hp3000",
          name: "HP 3000"
        },
        {
          id: 104,
          abbreviation: "hp2100",
          name: "HP 2100"
        },
        {
          id: 103,
          abbreviation: "pdp-7",
          name: "PDP-7"
        },
        {
          id: 102,
          abbreviation: "edsac",
          name: "EDSAC"
        },
        {
          id: 101,
          abbreviation: "nimrod",
          name: "Ferranti Nimrod Computer"
        },
        {
          id: 100,
          abbreviation: "analogueelectronics",
          name: "Analogue electronics"
        },
        {
          id: 99,
          abbreviation: "famicom",
          name: "Family Computer"
        },
        {
          id: 98,
          abbreviation: "gt40",
          name: "DEC GT40"
        },
        {
          id: 97,
          abbreviation: "pdp-8",
          name: "PDP-8"
        },
        {
          id: 96,
          abbreviation: "pdp10",
          name: "PDP-10"
        },
        {
          id: 95,
          abbreviation: "pdp1",
          name: "PDP-1"
        },
        {
          id: 93,
          abbreviation: "C16",
          name: "Commodore 16"
        },
        {
          id: 94,
          abbreviation: "C+4",
          name: "Commodore Plus/4"
        },
        {
          id: 91,
          abbreviation: "astrocade",
          name: "Bally Astrocade"
        },
        {
          id: 90,
          abbreviation: "cpet",
          name: "Commodore PET"
        },
        {
          id: 89,
          abbreviation: "microvision",
          name: "Microvision"
        },
        {
          id: 88,
          abbreviation: "odyssey",
          name: "Odyssey"
        },
        {
          id: 87,
          abbreviation: "virtualboy",
          name: "Virtual Boy"
        },
        {
          id: 86,
          abbreviation: "turbografx16",
          name: "TurboGrafx-16/PC Engine"
        },
        {
          id: 85,
          abbreviation: "donner30",
          name: "Donner Model 30"
        },
        {
          id: 84,
          abbreviation: "sg1000",
          name: "SG-1000"
        },
        {
          id: 82,
          abbreviation: "browser",
          name: "Web browser"
        },
        {
          id: 80,
          abbreviation: "neogeoaes",
          name: "Neo Geo AES"
        },
        {
          id: 79,
          abbreviation: "neogeomvs",
          name: "Neo Geo MVS"
        },
        {
          id: 78,
          abbreviation: "segacd",
          name: "Sega CD"
        },
        {
          id: 77,
          abbreviation: "x1",
          name: "Sharp X1"
        },
        {
          id: 75,
          abbreviation: "Apple][",
          name: "Apple II"
        },
        {
          id: 74,
          abbreviation: "Win Phone",
          name: "Windows Phone"
        },
        {
          id: 73,
          abbreviation: "blackberry",
          name: "BlackBerry OS"
        },
        {
          id: 72,
          abbreviation: "Ouya",
          name: "Ouya"
        },
        {
          id: 69,
          abbreviation: "bbcmicro",
          name: "BBC Microcomputer System"
        },
        {
          id: 71,
          abbreviation: "vic-20",
          name: "Commodore VIC-20"
        },
        {
          id: 70,
          abbreviation: "vectrex",
          name: "Vectrex"
        },
        {
          id: 68,
          abbreviation: "colecovision",
          name: "ColecoVision"
        },
        {
          id: 67,
          abbreviation: "intellivision",
          name: "Intellivision"
        },
        {
          id: 66,
          abbreviation: "Atari5200",
          name: "Atari 5200"
        },
        {
          id: 65,
          abbreviation: "Atari8bit",
          name: "Atari 8-bit"
        },
        {
          id: 64,
          abbreviation: "SMS",
          name: "Sega Master System"
        },
        {
          id: 63,
          abbreviation: "Atari-ST",
          name: "Atari ST/STE"
        },
        {
          id: 59,
          abbreviation: "Atari2600",
          name: "Atari 2600"
        },
        {
          id: 62,
          abbreviation: "Jaguar",
          name: "Atari Jaguar"
        },
        {
          id: 61,
          abbreviation: "Lynx",
          name: "Atari Lynx"
        },
        {
          id: 60,
          abbreviation: "Atari7800",
          name: "Atari 7800"
        },
        {
          id: 58,
          abbreviation: "SFAM",
          name: "Super Famicom"
        },
        {
          id: 57,
          abbreviation: "WonderSwan",
          name: "WonderSwan"
        },
        {
          id: 55,
          abbreviation: "Mobile",
          name: "Legacy Mobile Device"
        },
        {
          id: 53,
          abbreviation: "MSX2",
          name: "MSX2"
        },
        {
          id: 52,
          abbreviation: "Arcade",
          name: "Arcade"
        },
        {
          id: 51,
          abbreviation: "fds",
          name: "Family Computer Disk System"
        },
        {
          id: 50,
          abbreviation: "3DO",
          name: "3DO Interactive Multiplayer"
        },
        {
          id: 49,
          abbreviation: "XONE",
          name: "Xbox One"
        },
        {
          id: 48,
          abbreviation: "PS4",
          name: "PlayStation 4"
        },
        {
          id: 47,
          abbreviation: "VC",
          name: "Virtual Console (Nintendo)"
        },
        {
          id: 46,
          abbreviation: "Vita",
          name: "PlayStation Vita"
        },
        {
          id: 44,
          abbreviation: "zod",
          name: "Tapwave Zodiac"
        },
        {
          id: 42,
          abbreviation: "NGage",
          name: "N-Gage"
        },
        {
          id: 41,
          abbreviation: "WiiU",
          name: "Wii U"
        },
        { id: 39, abbreviation: "iOS", name: "iOS" },
        {
          id: 38,
          abbreviation: "PSP",
          name: "PlayStation Portable"
        },
        {
          id: 37,
          abbreviation: "3DS",
          name: "Nintendo 3DS"
        },
        {
          id: 35,
          abbreviation: "Game Gear",
          name: "Sega Game Gear"
        },
        {
          id: 34,
          abbreviation: "Android",
          name: "Android"
        },
        {
          id: 33,
          abbreviation: "Game Boy",
          name: "Game Boy"
        },
        {
          id: 32,
          abbreviation: "Saturn",
          name: "Sega Saturn"
        },
        {
          id: 30,
          abbreviation: "Sega32",
          name: "Sega 32X"
        },
        {
          id: 29,
          abbreviation: "Genesis",
          name: "Sega Mega Drive/Genesis"
        },
        {
          id: 23,
          abbreviation: "DC",
          name: "Dreamcast"
        },
        {
          id: 22,
          abbreviation: "GBC",
          name: "Game Boy Color"
        },
        { id: 27, abbreviation: "MSX", name: "MSX" },
        {
          id: 26,
          abbreviation: "ZXS",
          name: "ZX Spectrum"
        },
        {
          id: 25,
          abbreviation: "ACPC",
          name: "Amstrad CPC"
        },
        {
          id: 24,
          abbreviation: "GBA",
          name: "Game Boy Advance"
        },
        {
          id: 21,
          abbreviation: "NGC",
          name: "Nintendo GameCube"
        },
        {
          id: 20,
          abbreviation: "NDS",
          name: "Nintendo DS"
        },
        {
          id: 19,
          abbreviation: "SNES",
          name: "Super Nintendo Entertainment System (SNES)"
        },
        {
          id: 18,
          abbreviation: "NES",
          name: "Nintendo Entertainment System (NES)"
        },
        {
          id: 15,
          abbreviation: "C64",
          name: "Commodore C64/128"
        },
        {
          id: 16,
          abbreviation: "Amiga",
          name: "Amiga"
        },
        { id: 13, abbreviation: "DOS", name: "DOS" },
        { id: 14, abbreviation: "Mac", name: "Mac" },
        {
          id: 12,
          abbreviation: "X360",
          name: "Xbox 360"
        },
        {
          id: 9,
          abbreviation: "PS3",
          name: "PlayStation 3"
        },
        {
          id: 7,
          abbreviation: "PS1",
          name: "PlayStation"
        },
        { id: 5, abbreviation: "Wii", name: "Wii" },
        {
          id: 11,
          abbreviation: "XBOX",
          name: "Xbox"
        },
        {
          id: 8,
          abbreviation: "PS2",
          name: "PlayStation 2"
        },
        {
          id: 6,
          abbreviation: "PC",
          name: "PC (Microsoft Windows)"
        },
        {
          id: 4,
          abbreviation: "N64",
          name: "Nintendo 64"
        },
        {
          id: 3,
          abbreviation: "Linux",
          name: "Linux"
        }
      ],
      modes: [
        { id: 6, name: "Battle Royale" },
        {
          id: 5,
          name: "Massively Multiplayer Online (MMO)"
        },
        { id: 4, name: "Split screen" },
        { id: 3, name: "Co-operative" },
        { id: 2, name: "Multiplayer" },
        { id: 1, name: "Single player" }
      ],
      themes: [
        { id: 20, name: "Thriller" },
        { id: 18, name: "Science fiction" },
        { id: 1, name: "Action" },
        { id: 19, name: "Horror" },
        { id: 21, name: "Survival" },
        { id: 17, name: "Fantasy" },
        { id: 22, name: "Historical" },
        { id: 23, name: "Stealth" },
        { id: 27, name: "Comedy" },
        { id: 28, name: "Business" },
        { id: 31, name: "Drama" },
        { id: 32, name: "Non-fiction" },
        { id: 35, name: "Kids" },
        { id: 33, name: "Sandbox" },
        { id: 38, name: "Open world" },
        { id: 39, name: "Warfare" },
        {
          id: 41,
          name: "4X (explore, expand, exploit, and exterminate)"
        },
        { id: 34, name: "Educational" },
        { id: 43, name: "Mystery" },
        { id: 40, name: "Party" },
        { id: 44, name: "Romance" },
        { id: 42, name: "Erotic" }
      ],
      perspectives: [
        { id: 1, name: "First person" },
        { id: 2, name: "Third person" },
        { id: 3, name: "Bird view / Isometric" },
        { id: 5, name: "Text" },
        { id: 4, name: "Side view" },
        { id: 7, name: "Virtual Reality" },
        { id: 6, name: "Auditory" }
      ]
    }
  };
  let modes = data_const.props.modes;
  let searchGenre;
  let searchCategory;
  let searchModes;
  let themes = data_const.props.themes;
  let perspectives = data_const.props.perspectives;
  let searchPerspectives;
  let g = data_const.props.g;
  let p = data_const.props.p;
  let { data } = $$props;
  let popularGames = data["0"];
  const genres = g;
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"arr svelte-hwx82w"}"><button class="${"btn btn-light arrow svelte-hwx82w"}" type="${"button"}" data-bs-toggle="${"offcanvas"}" data-bs-target="${"#offcanvasScrolling"}" aria-controls="${"offcanvasScrolling"}">Filters
			<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-caret-up-fill"}" viewBox="${"0 0 16 16"}"><path d="${"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}"></path></svg></button></div>

	<div class="${"main svelte-hwx82w"}"><div class="${"offcanvas offcanvas-start"}" data-bs-scroll="${"true"}" data-bs-backdrop="${"false"}" tabindex="${"-1"}" id="${"offcanvasScrolling"}" aria-labelledby="${"offcanvasScrollingLabel"}"><div class="${"offcanvas-header"}"><h5 class="${"offcanvas-title"}" id="${"offcanvasScrollingLabel"}">Browse Games</h5>

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

				<button type="${"button"}" class="${"btn btn-primary searchbutton svelte-hwx82w"}" data-bs-dismiss="${"offcanvas"}" aria-label="${"Close"}">Search</button> <br></div></div>
		${`<h2>Popular Games</h2>
			<p>Add filters to refine your search</p>`}

		<div class="${"games svelte-hwx82w"}">${`${each(popularGames, (game) => {
    return `${validate_component(GameCard, "GameCard").$$render($$result, { game }, {}, {})}`;
  })}`}</div></div>
</section>`;
});
export {
  Page as default
};
