import{S as b,i as q,s as w,k as u,q as S,l as d,m as p,r as C,h,n as k,b as z,C as m,A,M as D,N as E,o as L,P as $}from"../../../chunks/index-4fb290ec.js";import{g as _}from"../../../chunks/navigation-417ed16c.js";import{g}from"../../../chunks/index-90ebcfae-1d2b0ced.js";import"../../../chunks/index.esm2017-57c490d6.js";import{a as v,U as j,D as M,K as N,Q as P,g as U}from"../../../chunks/fb-599afce9.js";import{f as y}from"../../../chunks/index-6273de8d.js";/* empty css                                                                */import"../../../chunks/singletons-5dc88023.js";import"../../../chunks/index.esm-e3c7d839.js";function H(f){let t,a,o,s,r,i;return{c(){t=u("section"),a=u("h1"),o=S("Loading profile..."),this.h()},l(e){t=d(e,"SECTION",{});var l=p(t);a=d(l,"H1",{class:!0});var c=p(a);o=C(c,"Loading profile..."),c.forEach(h),l.forEach(h),this.h()},h(){k(a,"class","svelte-1bnxxrh")},m(e,l){z(e,t,l),m(t,a),m(a,o),i=!0},p:A,i(e){i||(D(()=>{r&&r.end(1),s=$(t,y,{y:50,duration:400,delay:500}),s.start()}),i=!0)},o(e){s&&s.invalidate(),r=E(t,y,{duration:500}),i=!1},d(e){e&&h(t),e&&r&&r.end()}}}function I(f){g(v);let t,a,o;return L(()=>{const s=g(v);s.onAuthStateChanged(async function(r){if(r){let i=s.currentUser,e=j();const l=M(e,"users");let c=N(l,P("uid","==",i.uid));(await U(c)).forEach(n=>{t=n.data().displayName,a=n.data().favourites,console.log(n.data())}),_(`/user/home/${t.toLowerCase()}`),o=a,console.log(o),o!=[]&&await fetch("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8","X-Requested-With":"XMLHttpRequest"},body:`fields name, cover.image_id, follows;  where id=(${o});`}).then(n=>n.json()).then(n=>{for(let x of n)console.log(x)})}else _("/login")})}),[]}class J extends b{constructor(t){super(),q(this,t,I,H,w,{})}}export{J as default};
