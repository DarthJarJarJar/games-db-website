import{S as C,i as D,s as E,x as U,y as j,z as G,r as _,p as x,C as H,e as b,t as I,k as P,c as y,a as w,h as X,d as h,m as B,b as $,g as M,H as d,q as O,U as R,V,W,o as A,X as L}from"../chunks/index-12679752.js";import{f as k}from"../chunks/index-124bdde0.js";import"../chunks/navigation-0e6511d1.js";import{P as N}from"../chunks/PopularGame-abf69d70.js";import"../chunks/singletons-d1fb5791.js";function q(i,e,s){const a=i.slice();return a[2]=e[s],a}function z(i){let e,s;return e=new N({props:{game:i[2]}}),{c(){U(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,l){G(e,a,l),s=!0},p(a,l){const c={};l&1&&(c.game=a[2]),e.$set(c)},i(a){s||(_(e.$$.fragment,a),s=!0)},o(a){x(e.$$.fragment,a),s=!1},d(a){H(e,a)}}}function F(i){let e,s,a,l,c,p,u,g,m=i[0],o=[];for(let t=0;t<m.length;t+=1)o[t]=z(q(i,m,t));const T=t=>x(o[t],1,1,()=>{o[t]=null});return{c(){e=b("section"),s=b("h2"),a=I("Upcoming Games"),l=P(),c=b("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=y(t,"SECTION",{});var r=w(e);s=y(r,"H2",{class:!0});var n=w(s);a=X(n,"Upcoming Games"),n.forEach(h),l=B(r),c=y(r,"DIV",{class:!0});var f=w(c);for(let v=0;v<o.length;v+=1)o[v].l(f);f.forEach(h),r.forEach(h),this.h()},h(){$(s,"class","svelte-abfciu"),$(c,"class","games svelte-abfciu")},m(t,r){M(t,e,r),d(e,s),d(s,a),d(e,l),d(e,c);for(let n=0;n<o.length;n+=1)o[n].m(c,null);g=!0},p(t,[r]){if(r&1){m=t[0];let n;for(n=0;n<m.length;n+=1){const f=q(t,m,n);o[n]?(o[n].p(f,r),_(o[n],1)):(o[n]=z(f),o[n].c(),_(o[n],1),o[n].m(c,null))}for(A(),n=m.length;n<o.length;n+=1)T(n);O()}},i(t){if(!g){for(let r=0;r<m.length;r+=1)_(o[r]);R(()=>{u&&u.end(1),p=L(e,k,{y:50,duration:400,delay:500}),p.start()}),g=!0}},o(t){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)x(o[r]);p&&p.invalidate(),u=V(e,k,{duration:500}),g=!1},d(t){t&&h(e),W(o,t),t&&u&&u.end()}}}const S=new Date;let J=S.getTime()-157788e5;console.log(J);async function ae({fetch:i,params:e}){return{props:{upcoming:await(await i("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer sd089a9azgftad7tbbaroxitu6x71k","X-Requested-With":"XMLHttpRequest"},body:`fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(S.getTime()/1e3)};`})).json()}}}function K(i,e,s){let{upcoming:a}=e;for(let l of a)console.log(l);return i.$$set=l=>{"upcoming"in l&&s(0,a=l.upcoming)},[a]}class oe extends C{constructor(e){super(),D(this,e,K,F,E,{upcoming:0})}}export{oe as default,ae as load};