import{S as z,i as A,s as M,l as $,g as N,o as P,p as q,q as T,r as I,d as p,e as v,t as H,c as b,a as y,h as V,H as d,n as j,k as w,x as Y,m as C,y as B,Y as D,b as m,z as F,j as J,C as K}from"./index-12679752.js";import{S as L}from"./StarRating-87018281.js";/* empty css                                                */function O(n){let e,t;return{c(){e=v("p"),t=H("No Games added to favourites yet.")},l(a){e=b(a,"P",{});var r=y(e);t=V(r,"No Games added to favourites yet."),r.forEach(p)},m(a,r){N(a,e,r),d(e,t)},p:j,i:j,o:j,d(a){a&&p(e)}}}function Q(n){let e,t,a,r,_,i,h,s,l,f=n[0].name+"",E,S,u,g;return u=new L({props:{rating:n[1],config:n[2]}}),{c(){e=v("div"),t=v("a"),a=v("img"),h=w(),s=v("div"),l=v("h2"),E=H(f),S=w(),Y(u.$$.fragment),this.h()},l(o){e=b(o,"DIV",{class:!0});var c=y(e);t=b(c,"A",{"sveltekit:prefetch":!0,href:!0});var k=y(t);a=b(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(p),h=C(c),s=b(c,"DIV",{class:!0});var G=y(s);l=b(G,"H2",{class:!0});var R=y(l);E=V(R,f),R.forEach(p),S=C(G),B(u.$$.fragment,G),G.forEach(p),c.forEach(p),this.h()},h(){D(a.src,r=`https://images.igdb.com/igdb/image/upload/t_cover_big/${n[0].cover.image_id}.jpg`)||m(a,"src",r),m(a,"alt",_=n[0].name),m(a,"class","svelte-1eobm24"),m(t,"sveltekit:prefetch",""),m(t,"href",i="/games/"+n[0].id),m(l,"class","svelte-1eobm24"),m(s,"class","description svelte-1eobm24"),m(e,"class","game-card svelte-1eobm24")},m(o,c){N(o,e,c),d(e,t),d(t,a),d(e,h),d(e,s),d(s,l),d(l,E),d(s,S),F(u,s,null),g=!0},p(o,c){(!g||c&1&&!D(a.src,r=`https://images.igdb.com/igdb/image/upload/t_cover_big/${o[0].cover.image_id}.jpg`))&&m(a,"src",r),(!g||c&1&&_!==(_=o[0].name))&&m(a,"alt",_),(!g||c&1&&i!==(i="/games/"+o[0].id))&&m(t,"href",i),(!g||c&1)&&f!==(f=o[0].name+"")&&J(E,f);const k={};c&2&&(k.rating=o[1]),u.$set(k)},i(o){g||(I(u.$$.fragment,o),g=!0)},o(o){q(u.$$.fragment,o),g=!1},d(o){o&&p(e),K(u)}}}function U(n){let e,t,a,r;const _=[Q,O],i=[];function h(s,l){return s[0].id?0:1}return e=h(n),t=i[e]=_[e](n),{c(){t.c(),a=$()},l(s){t.l(s),a=$()},m(s,l){i[e].m(s,l),N(s,a,l),r=!0},p(s,[l]){let f=e;e=h(s),e===f?i[e].p(s,l):(P(),q(i[f],1,1,()=>{i[f]=null}),T(),t=i[e],t?t.p(s,l):(t=i[e]=_[e](s),t.c()),I(t,1),t.m(a.parentNode,a))},i(s){r||(I(t),r=!0)},o(s){q(t),r=!1},d(s){i[e].d(s),s&&p(a)}}}function W(n,e,t){let{game:a}=e,{rating:r}=e;console.log(r);const _={showText:!0};return n.$$set=i=>{"game"in i&&t(0,a=i.game),"rating"in i&&t(1,r=i.rating)},[a,r,_]}class ee extends z{constructor(e){super(),A(this,e,W,U,M,{game:0,rating:1})}}export{ee as R};
