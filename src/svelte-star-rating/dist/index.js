!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((n = 'undefined' != typeof globalThis ? globalThis : n || self).StarRating = t());
})(this, function () {
	'use strict';
	function n(n) {
		return n();
	}
	let t;
	function e(n) {
		t = n;
	}
	Promise.resolve();
	const i = new Set([
			'allowfullscreen',
			'allowpaymentrequest',
			'async',
			'autofocus',
			'autoplay',
			'checked',
			'controls',
			'default',
			'defer',
			'disabled',
			'formnovalidate',
			'hidden',
			'ismap',
			'loop',
			'multiple',
			'muted',
			'nomodule',
			'novalidate',
			'open',
			'playsinline',
			'readonly',
			'required',
			'reversed',
			'selected'
		]),
		o = { '"': '&quot;', "'": '&#39;', '&': '&amp;', '<': '&lt;', '>': '&gt;' };
	function r(n) {
		return String(n).replace(/["'&<>]/g, (n) => o[n]);
	}
	let l;
	function s(i) {
		function o(n, o, r, s, a) {
			const f = t;
			e({
				$$: {
					on_destroy: l,
					context: new Map(a || (f ? f.$$.context : [])),
					on_mount: [],
					before_update: [],
					after_update: [],
					callbacks: Object.create(null)
				}
			});
			const d = i(n, o, r, s);
			return e(f), d;
		}
		return {
			render: (t = {}, { $$slots: e = {}, context: i = new Map() } = {}) => {
				l = [];
				const r = { title: '', head: '', css: new Set() },
					s = o(r, t, {}, e, i);
				return (
					l.forEach(n),
					{
						html: s,
						css: {
							code: Array.from(r.css)
								.map((n) => n.code)
								.join('\n'),
							map: null
						},
						head: r.title + r.head
					}
				);
			},
			$$render: o
		};
	}
	function a(n, t, e) {
		return null == t || (e && !t)
			? ''
			: ` ${n}${
					!0 === t && i.has(n) ? '' : `=${'string' == typeof t ? JSON.stringify(r(t)) : `"${t}"`}`
			  }`;
	}
	var f = (n) => 'number' == typeof n && n === Number(n) && Number.isFinite(n),
		d = () => '_' + Math.random().toString(36).substr(2, 9);
	const c = {
			code: 'svg.svelte-7nhlqv{width:var(--width);height:var(--height);margin-right:2px}',
			map: '{"version":3,"file":"Star.svelte","sources":["Star.svelte"],"sourcesContent":["<script>\\n  import isNumber from \'./utils/isNumber\';\\n  export let full; // array of Numbers from 0 to 1\\n  // use id in the \'half\' gradient id to make it unique and avoid same gradient in all \'half\' stars\\n  export let id;\\n  export let config = {};\\n\\n  const fullColor = config.fullColor || \'#ffcf00\';\\n  const emptyColor = config.emptyColor || \'#7f7f7f\';\\n\\n  // check (and use) user size input\\n  let width = config.size && isNumber(config.size) ? config.size : 20;\\n  width = width + \'px\';\\n  const height = width;\\n</script>\\n\\n<svg\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\n  width=\\"249.748\\"\\n  viewBox=\\"0 -10 187.673 179.503\\"\\n  height=\\"239.338\\"\\n  style=\\"--width:{width};--height:{height}\\"\\n>\\n  \x3c!-- if not whole number, create gradient --\x3e\\n  {#if full !== 1 && full !== 0}\\n    <defs>\\n      <linearGradient id=\\"grad-{id}\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"0%\\">\\n        <stop offset=\\"0%\\" style=\\"stop-color:{fullColor};stop-opacity:1\\" />\\n        <stop\\n          offset=\\"{full * 100}%\\"\\n          style=\\"stop-color:{fullColor};stop-opacity:1\\"\\n        />\\n        <stop\\n          offset=\\"{full * 100}%\\"\\n          style=\\"stop-color:{emptyColor};stop-opacity:1\\"\\n        />\\n      </linearGradient>\\n    </defs>\\n  {/if}\\n  <path\\n    fill={full === 1 ? fullColor : full === 0 ? emptyColor : `url(#grad-${id})`}\\n    d=\\"M187.183 57.47a9.955 9.955 0\\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\\n    002.925-10.604zm0 0\\"\\n  />\\n</svg>\\n\\n<style>\\n  svg {\\n    width: var(--width);\\n    height: var(--height);\\n    margin-right: 2px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqDE,GAAG,cAAC,CAAC,AACH,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,YAAY,CAAE,GAAG,AACnB,CAAC"}'
		},
		A = s((n, t, e, i) => {
			let { full: o } = t,
				{ id: l } = t,
				{ config: s = {} } = t;
			const d = s.fullColor || '#ffcf00',
				A = s.emptyColor || '#7f7f7f';
			let p = s.size && f(s.size) ? s.size : 20;
			p += 'px';
			const u = p;
			return (
				void 0 === t.full && e.full && void 0 !== o && e.full(o),
				void 0 === t.id && e.id && void 0 !== l && e.id(l),
				void 0 === t.config && e.config && void 0 !== s && e.config(s),
				n.css.add(c),
				`<svg xmlns="http://www.w3.org/2000/svg" width="249.748" viewBox="0 -10 187.673 179.503" height="239.338" style="${
					'--width:' + r(p) + ';--height:' + r(u)
				}" class="svelte-7nhlqv">${
					1 !== o && 0 !== o
						? `<defs><linearGradient id="${
								'grad-' + r(l)
						  }" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="${
								'stop-color:' + r(d) + ';stop-opacity:1'
						  }"></stop><stop offset="${r(100 * o) + '%'}" style="${
								'stop-color:' + r(d) + ';stop-opacity:1'
						  }"></stop><stop offset="${r(100 * o) + '%'}" style="${
								'stop-color:' + r(A) + ';stop-opacity:1'
						  }"></stop></linearGradient></defs>`
						: ''
				}<path${a(
					'fill',
					1 === o ? d : 0 === o ? A : `url(#grad-${l})`,
					0
				)} d="M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"></path></svg>`
			);
		}),
		p = {
			code: 'div.svelte-g1srw1{display:flex;margin-bottom:14px}span.svelte-g1srw1{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px}',
			map: '{"version":3,"file":"StarRating.svelte","sources":["StarRating.svelte"],"sourcesContent":["<script>\\n  import isNumber from \'./utils/isNumber\';\\n  import makeUniqueId from \'./utils/makeUniqueId\';\\n  import Star from \'./Star.svelte\';\\n\\n  export let id = makeUniqueId();\\n  export let rating;\\n  export let style = \'\';\\n  export let config = {};\\n  // check if rating prop is number and between 0 and 5\\n  $: if (!isNumber(rating) || rating < 0 || rating > 5) {\\n    throw new Error(\'rating value is not valid! 🙅‍♀️\');\\n  }\\n\\n  // number of full, \'half\' and empty stars\\n  $: full = Math.floor(rating);\\n  $: half = Math.round((rating - full) * 100) / 100;\\n  $: empty = Math.floor(5 - rating);\\n  // partial arrays\\n  $: fullArr = Array(full).fill(1);\\n  $: halfArr = half !== 0 ? [half] : [];\\n  $: emptyArr = Array(empty).fill(0);\\n  // array of star-to-be numbers\\n  $: stars = fullArr.concat(halfArr).concat(emptyArr);\\n  // do all this array thing a little more efficiently, maybe?\\n\\n  // font size of rating text will be half of the star size, with a min value of 16px\\n  let fontSize = config.size && isNumber(config.size) ? config.size : 20;\\n  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;\\n</script>\\n\\n<div {style}>\\n  {#each stars as star}\\n    <Star {id} full={star} {config} />\\n  {/each}\\n  {#if config.showText}<span style=\\"font-size:{fontSize}px\\">{rating}</span>{/if}\\n</div>\\n\\n<style>\\n  div {\\n    display: flex;\\n    margin-bottom: 14px;\\n  }\\n  span {\\n    color: #7f7f7f;\\n    line-height: 1;\\n    align-self: center;\\n    margin-left: 8px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuCE,GAAG,cAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,IAAI,cAAC,CAAC,AACJ,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,AAClB,CAAC"}'
		};
	return s((n, t, e, i) => {
		let o,
			l,
			s,
			c,
			u,
			g,
			h,
			{ id: m = d() } = t,
			{ rating: y } = t,
			{ style: v = '' } = t,
			{ config: C = {} } = t,
			w = C.size && f(C.size) ? C.size : 20;
		if (
			((w = w / 2 < 16 ? 16 : w / 2),
			void 0 === t.id && e.id && void 0 !== m && e.id(m),
			void 0 === t.rating && e.rating && void 0 !== y && e.rating(y),
			void 0 === t.style && e.style && void 0 !== v && e.style(v),
			void 0 === t.config && e.config && void 0 !== C && e.config(C),
			n.css.add(p),
			!f(y) || y < 0 || y > 5)
		)
			throw new Error('rating value is not valid! 🙅‍♀️');
		return (
			(o = Math.floor(y)),
			(l = Math.round(100 * (y - o)) / 100),
			(s = Math.floor(5 - y)),
			(c = Array(o).fill(1)),
			(u = 0 !== l ? [l] : []),
			(g = Array(s).fill(0)),
			(h = c.concat(u).concat(g)),
			`<div${a('style', v, 0)} class="svelte-g1srw1">${(function (n, t) {
				let e = '';
				for (let i = 0; i < n.length; i += 1) e += t(n[i], i);
				return e;
			})(
				h,
				(t) =>
					`${(function (n, t) {
						if (!n || !n.$$render)
							throw (
								('svelte:component' === t && (t += ' this={...}'),
								new Error(
									`<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`
								))
							);
						return n;
					})(A, 'Star').$$render(n, { id: m, full: t, config: C }, {}, {})}`
			)}\n  ${
				C.showText
					? `<span style="${'font-size:' + r(w) + 'px'}" class="svelte-g1srw1">${r(y)}</span>`
					: ''
			}\n</div>`
		);
	});
});
