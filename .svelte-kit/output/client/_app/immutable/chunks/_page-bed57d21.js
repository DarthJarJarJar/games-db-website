async function t({fetch:e,params:a}){return{searchResults:await(await e("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer sd089a9azgftad7tbbaroxitu6x71k","X-Requested-With":"XMLHttpRequest"},body:`fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; sort follows desc; where platforms = ${a.id} & follows != null;`})).json()}}const r=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{r as _,t as l};
