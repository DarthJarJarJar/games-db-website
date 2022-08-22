import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../../../chunks/index.js";
/* empty css                                                              */import "firebase/app";
import "firebase/auth";
const isNumber = (n) => typeof n === "number" && n === Number(n) && Number.isFinite(n);
const makeUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);
const css$2 = {
  code: "svg.svelte-o6qd5f{width:var(--width);height:var(--height);margin-right:2px}",
  map: null
};
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { full } = $$props;
  let { id } = $$props;
  let { config = {} } = $$props;
  const fullColor = config.fullColor || "#ffcf00";
  const emptyColor = config.emptyColor || "#7f7f7f";
  let width = config.size && isNumber(config.size) ? config.size : 20;
  width = width + "px";
  const height = width;
  if ($$props.full === void 0 && $$bindings.full && full !== void 0)
    $$bindings.full(full);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$2);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"249.748"}" viewBox="${"0 -10 187.673 179.503"}" height="${"239.338"}" style="${"--width:" + escape(width, true) + ";--height:" + escape(height, true)}" class="${"svelte-o6qd5f"}">${full !== 1 && full !== 0 ? `<defs><linearGradient id="${"grad-" + escape(id, true)}" x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}"><stop offset="${"0%"}" style="${"stop-color:" + escape(fullColor, true) + ";stop-opacity:1"}"></stop><stop offset="${escape(full * 100, true) + "%"}" style="${"stop-color:" + escape(fullColor, true) + ";stop-opacity:1"}"></stop><stop offset="${escape(full * 100, true) + "%"}" style="${"stop-color:" + escape(emptyColor, true) + ";stop-opacity:1"}"></stop></linearGradient></defs>` : ``}<path${add_attribute(
    "fill",
    full === 1 ? fullColor : full === 0 ? emptyColor : `url(#grad-${id})`,
    0
  )} d="${"M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"}"></path></svg>`;
});
const css$1 = {
  code: "div.svelte-drjfrl{display:flex;margin-bottom:14px}span.svelte-drjfrl{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px;margin-top:4.5px}",
  map: null
};
const StarRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let full;
  let half;
  let empty;
  let fullArr;
  let halfArr;
  let emptyArr;
  let stars;
  let { id = makeUniqueId() } = $$props;
  let { rating } = $$props;
  let { style = "" } = $$props;
  let { config = {} } = $$props;
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$1);
  {
    if (!isNumber(rating) || rating < 0 || rating > 10) {
      throw new Error("rating value is not valid! \u{1F645}\u200D\u2640\uFE0F");
    }
  }
  full = Math.floor(rating);
  half = Math.round((rating - full) * 100) / 100;
  empty = Math.floor(10 - rating);
  fullArr = Array(full).fill(1);
  halfArr = half !== 0 ? [half] : [];
  emptyArr = Array(empty).fill(0);
  stars = fullArr.concat(halfArr).concat(emptyArr);
  return `<div${add_attribute("style", style, 0)} class="${"svelte-drjfrl"}">${each(stars, (star) => {
    return `${validate_component(Star, "Star").$$render($$result, { id, full: star, config }, {}, {})}`;
  })}
	${config.showText ? `<span style="${"font-size:" + escape(fontSize, true) + "px"}" class="${"svelte-drjfrl"}">${escape(rating)}</span>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons.svelte-1wllusd.svelte-1wllusd{align-items:right;justify-content:right;align-content:right;margin-left:auto}.akd.svelte-1wllusd.svelte-1wllusd{display:inline-flex;width:100%}h1.svelte-1wllusd.svelte-1wllusd{margin-bottom:2rem}a.svelte-1wllusd.svelte-1wllusd{text-decoration:none}p.svelte-1wllusd.svelte-1wllusd{white-space:pre-wrap}details.svelte-1wllusd.svelte-1wllusd{border:1px solid #aaa;border-radius:4px;padding:0.5em 0.5em 0}summary.svelte-1wllusd.svelte-1wllusd{font-weight:bold;margin:-0.5em -0.5em 0;padding:0.5em}details[open].svelte-1wllusd.svelte-1wllusd{padding:0.5em}details[open].svelte-1wllusd summary.svelte-1wllusd{border-bottom:1px solid #aaa;margin-bottom:0.5em}",
  map: null
};
function getProperDate(timestamp) {
  let properDate = "";
  const date = new Date(timestamp);
  const month = date.toLocaleString("en-us", { month: "long" });
  const datedate = date.getDate();
  const year = date.getFullYear();
  properDate = month + " " + datedate + " " + year;
  return properDate;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let reviewData = data.reviewData;
  let userName = data.userName;
  console.log(userName);
  for (let review of reviewData) {
    review.reviewBy;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"akd svelte-1wllusd"}"><h1 class="${"svelte-1wllusd"}">${escape(userName)}&#39;s Profile
		</h1>

		<div class="${"buttons svelte-1wllusd"}"><button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Profile</button>
			<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Games</button>
			<button disabled id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Reviews</button>
			<button id="${"backlog"}" type="${"button"}" class="${"btn btn-primary"}">Backlog</button></div></div>
	<h2>Reviews</h2>

	${reviewData ? `${each(reviewData, (review) => {
    return `<div class="${"card-body"}"><div class="${"card"}" style="${"width: 95%; margin-left: auto; margin-right: auto; margin-top: 2rem;"}"><div class="${"card-body"}"><h5 class="${"card-title"}"><a${add_attribute("href", `/games/${review.gameId}`, 0)} class="${"svelte-1wllusd"}">${escape(review.gameName)}</a></h5>

						${validate_component(StarRating, "StarRating").$$render($$result, { rating: parseFloat(review.rating) }, {}, {})}
						<h6 class="${"card-subtitle mb-2 text-muted"}">${escape(getProperDate(review.reviewAt))}</h6>
						${review.spoiler ? `<details class="${"svelte-1wllusd"}"><summary class="${"svelte-1wllusd"}">This review has spoilers. Click to see</summary>
								<p class="${"card-text svelte-1wllusd"}">${escape(review.review)}</p>
							</details>` : `<p class="${"card-text svelte-1wllusd"}">${escape(review.review)}</p>`}
					</div></div>
			</div>`;
  })}` : `<p class="${"svelte-1wllusd"}">No reviews yet</p>`}

	<br> <br>
</section>`;
});
export {
  Page as default
};
