const e=new Date;let o=e.getTime()-157788e5;console.log(o);async function a({fetch:t,params:r}){return{upcoming:await(await t("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer sd089a9azgftad7tbbaroxitu6x71k","X-Requested-With":"XMLHttpRequest"},body:`fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(e.getTime()/1e3)};`})).json()}}const n=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{n as _,a as l};
