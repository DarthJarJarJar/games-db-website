async function o({fetch:t,params:a}){const e=await(await t("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/search/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8","X-Requested-With":"XMLHttpRequest"},body:`search "${a.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`})).json();return console.log(e),{searchResults:e}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{s as _,o as l};
