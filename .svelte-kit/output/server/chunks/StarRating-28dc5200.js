import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "./index-38cedc01.js";
/* empty css                                                   */var isNumber = (n) => typeof n === "number" && n === Number(n) && Number.isFinite(n);
var makeUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);
const css$1 = {
  code: "svg.svelte-7nhlqv{width:var(--width);height:var(--height);margin-right:2px}",
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
  $$result.css.add(css$1);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"249.748"}" viewBox="${"0 -10 187.673 179.503"}" height="${"239.338"}" style="${"--width:" + escape(width) + ";--height:" + escape(height)}" class="${"svelte-7nhlqv"}">${full !== 1 && full !== 0 ? `<defs><linearGradient id="${"grad-" + escape(id)}" x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}"><stop offset="${"0%"}" style="${"stop-color:" + escape(fullColor) + ";stop-opacity:1"}"></stop><stop offset="${escape(full * 100) + "%"}" style="${"stop-color:" + escape(fullColor) + ";stop-opacity:1"}"></stop><stop offset="${escape(full * 100) + "%"}" style="${"stop-color:" + escape(emptyColor) + ";stop-opacity:1"}"></stop></linearGradient></defs>` : ``}<path${add_attribute("fill", full === 1 ? fullColor : full === 0 ? emptyColor : `url(#grad-${id})`, 0)} d="${"M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"}"></path></svg>`;
});
const css = {
  code: "div.svelte-meesdf{display:flex;margin-bottom:14px}span.svelte-meesdf{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px;margin-top:4.5px}",
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
  $$result.css.add(css);
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
  return `<div${add_attribute("style", style, 0)} class="${"svelte-meesdf"}">${each(stars, (star) => {
    return `${validate_component(Star, "Star").$$render($$result, { id, full: star, config }, {}, {})}`;
  })}
  ${config.showText ? `<span style="${"font-size:" + escape(fontSize) + "px"}" class="${"svelte-meesdf"}">${escape(rating)}</span>` : ``}
</div>`;
});
export { StarRating as S };
