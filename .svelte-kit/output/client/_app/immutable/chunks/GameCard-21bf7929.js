import{S as k,i as y,s as G,e as h,b as p,A as f,h as m,k as _,q as C,l as d,m as u,r as q,C as g,Q as b,n as o}from"./index-4fb290ec.js";function E(i){let e,r;return{c(){e=_("p"),r=C("No Games added to favourites yet.")},l(t){e=d(t,"P",{});var a=u(e);r=q(a,"No Games added to favourites yet."),a.forEach(m)},m(t,a){p(t,e,a),g(e,r)},p:f,d(t){t&&m(e)}}}function N(i){let e,r,t,a,s,l;return{c(){e=_("div"),r=_("a"),t=_("img"),this.h()},l(c){e=d(c,"DIV",{class:!0});var n=u(e);r=d(n,"A",{"sveltekit:prefetch":!0,href:!0});var v=u(r);t=d(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(m),n.forEach(m),this.h()},h(){b(t.src,a=`https://images.igdb.com/igdb/image/upload/t_cover_big/${i[0].cover.image_id}.jpg`)||o(t,"src",a),o(t,"alt",s=i[0].name),o(t,"class","svelte-1xvlh2x"),o(r,"sveltekit:prefetch",""),o(r,"href",l="/games/"+i[0].id),o(e,"class","game-card svelte-1xvlh2x")},m(c,n){p(c,e,n),g(e,r),g(r,t)},p(c,n){n&1&&!b(t.src,a=`https://images.igdb.com/igdb/image/upload/t_cover_big/${c[0].cover.image_id}.jpg`)&&o(t,"src",a),n&1&&s!==(s=c[0].name)&&o(t,"alt",s),n&1&&l!==(l="/games/"+c[0].id)&&o(r,"href",l)},d(c){c&&m(e)}}}function j(i){let e;function r(s,l){return s[0].id?N:E}let t=r(i),a=t(i);return{c(){a.c(),e=h()},l(s){a.l(s),e=h()},m(s,l){a.m(s,l),p(s,e,l)},p(s,[l]){t===(t=r(s))&&a?a.p(s,l):(a.d(1),a=t(s),a&&(a.c(),a.m(e.parentNode,e)))},i:f,o:f,d(s){a.d(s),s&&m(e)}}}function x(i,e,r){let{game:t}=e;return i.$$set=a=>{"game"in a&&r(0,t=a.game)},[t]}class I extends k{constructor(e){super(),y(this,e,x,j,G,{game:0})}}export{I as G};
