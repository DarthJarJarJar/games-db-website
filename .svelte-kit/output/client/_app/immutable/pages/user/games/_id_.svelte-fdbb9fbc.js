import{S as se,i as ne,s as ie,e as b,c as g,a as w,d as f,g as B,r as q,U as ce,p as C,V as ue,w as fe,X as me,t as $,h as T,b as p,H as _,n as N,l as Z,k as U,m as j,J as K,o as oe,q as le,L as de,x as _e,y as pe,z as he,C as be,W as ge}from"../../../chunks/index-12679752.js";import{B as ye,a as ve,U as ke,K as we,V as Be,w as Ee}from"../../../chunks/fb-07f3109e.js";import{g as M}from"../../../chunks/navigation-0e6511d1.js";import{f as ee}from"../../../chunks/index-124bdde0.js";import{R as $e}from"../../../chunks/RatedGame-9bf86d35.js";/* empty css                                                               */import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/StarRating-87018281.js";/* empty css                                                              */function te(c,e,a){const t=c.slice();return t[11]=e[a],t}function Te(c){let e,a;return{c(){e=b("h1"),a=$("Loading..."),this.h()},l(t){e=g(t,"H1",{class:!0});var r=w(e);a=T(r,"Loading..."),r.forEach(f),this.h()},h(){p(e,"class","svelte-94uyur")},m(t,r){B(t,e,r),_(e,a)},p:N,i:N,o:N,d(t){t&&f(e)}}}function qe(c){let e,a,t,r,o,i,l,s,n,u,y,h,v,P,S,E,z,V,L,G,D,O,I,H,W,d=c[0]&&ae(c);return{c(){e=b("div"),a=b("h1"),t=$(c[1]),r=$("'s Profile"),o=U(),i=b("div"),l=b("button"),s=$("Profile"),n=U(),u=b("button"),y=$("Games"),h=U(),v=b("button"),P=$("Reviews"),S=U(),E=b("button"),z=$("Backlog"),V=U(),L=b("h2"),G=$("Games"),D=U(),O=b("div"),d&&d.c(),this.h()},l(m){e=g(m,"DIV",{class:!0});var k=w(e);a=g(k,"H1",{class:!0});var X=w(a);t=T(X,c[1]),r=T(X,"'s Profile"),X.forEach(f),o=j(k),i=g(k,"DIV",{class:!0});var R=w(i);l=g(R,"BUTTON",{id:!0,type:!0,class:!0});var A=w(l);s=T(A,"Profile"),A.forEach(f),n=j(R),u=g(R,"BUTTON",{id:!0,type:!0,class:!0});var J=w(u);y=T(J,"Games"),J.forEach(f),h=j(R),v=g(R,"BUTTON",{id:!0,type:!0,class:!0});var x=w(v);P=T(x,"Reviews"),x.forEach(f),S=j(R),E=g(R,"BUTTON",{id:!0,type:!0,class:!0});var F=w(E);z=T(F,"Backlog"),F.forEach(f),R.forEach(f),k.forEach(f),V=j(m),L=g(m,"H2",{});var Q=w(L);G=T(Q,"Games"),Q.forEach(f),D=j(m),O=g(m,"DIV",{class:!0});var Y=w(O);d&&d.l(Y),Y.forEach(f),this.h()},h(){p(a,"class","svelte-94uyur"),p(l,"id","backlog"),p(l,"type","button"),p(l,"class","btn btn-primary"),u.disabled=!0,p(u,"id","backlog"),p(u,"type","button"),p(u,"class","btn btn-primary"),p(v,"id","backlog"),p(v,"type","button"),p(v,"class","btn btn-primary"),p(E,"id","backlog"),p(E,"type","button"),p(E,"class","btn btn-primary"),p(i,"class","buttons svelte-94uyur"),p(e,"class","akd svelte-94uyur"),p(O,"class","games svelte-94uyur")},m(m,k){B(m,e,k),_(e,a),_(a,t),_(a,r),_(e,o),_(e,i),_(i,l),_(l,s),_(i,n),_(i,u),_(u,y),_(i,h),_(i,v),_(v,P),_(i,S),_(i,E),_(E,z),B(m,V,k),B(m,L,k),_(L,G),B(m,D,k),B(m,O,k),d&&d.m(O,null),I=!0,H||(W=[K(l,"click",c[3]),K(v,"click",c[5]),K(E,"click",c[4])],H=!0)},p(m,k){m[0]?d?(d.p(m,k),k&1&&q(d,1)):(d=ae(m),d.c(),q(d,1),d.m(O,null)):d&&(oe(),C(d,1,1,()=>{d=null}),le())},i(m){I||(q(d),I=!0)},o(m){C(d),I=!1},d(m){m&&f(e),m&&f(V),m&&f(L),m&&f(D),m&&f(O),d&&d.d(),H=!1,de(W)}}}function ae(c){let e,a,t,r;const o=[Re,Oe],i=[];function l(s,n){return s[2]!=[]?0:1}return e=l(c),a=i[e]=o[e](c),{c(){a.c(),t=Z()},l(s){a.l(s),t=Z()},m(s,n){i[e].m(s,n),B(s,t,n),r=!0},p(s,n){a.p(s,n)},i(s){r||(q(a),r=!0)},o(s){C(a),r=!1},d(s){i[e].d(s),s&&f(t)}}}function Oe(c){let e,a,t;return{c(){e=b("div"),a=b("p"),t=$("loading..."),this.h()},l(r){e=g(r,"DIV",{class:!0});var o=w(e);a=g(o,"P",{class:!0});var i=w(a);t=T(i,"loading..."),i.forEach(f),o.forEach(f),this.h()},h(){p(a,"class","loading"),p(e,"class","game")},m(r,o){B(r,e,o),_(e,a),_(a,t)},p:N,i:N,o:N,d(r){r&&f(e)}}}function Re(c){let e,a,t,r=c[0],o=[];for(let l=0;l<r.length;l+=1)o[l]=re(te(c,r,l));const i=l=>C(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=U(),a=b("br")},l(l){for(let s=0;s<o.length;s+=1)o[s].l(l);e=j(l),a=g(l,"BR",{})},m(l,s){for(let n=0;n<o.length;n+=1)o[n].m(l,s);B(l,e,s),B(l,a,s),t=!0},p(l,s){if(s&65){r=l[0];let n;for(n=0;n<r.length;n+=1){const u=te(l,r,n);o[n]?(o[n].p(u,s),q(o[n],1)):(o[n]=re(u),o[n].c(),q(o[n],1),o[n].m(e.parentNode,e))}for(oe(),n=r.length;n<o.length;n+=1)i(n);le()}},i(l){if(!t){for(let s=0;s<r.length;s+=1)q(o[s]);t=!0}},o(l){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)C(o[s]);t=!1},d(l){ge(o,l),l&&f(e),l&&f(a)}}}function re(c){let e,a;return e=new $e({props:{game:c[11],rating:c[6](c[11]),gamename:c[11].name}}),{c(){_e(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,r){he(e,t,r),a=!0},p(t,r){const o={};r&1&&(o.game=t[11]),r&1&&(o.rating=t[6](t[11])),r&1&&(o.gamename=t[11].name),e.$set(o)},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){be(e,t)}}}function Ue(c){let e,a,t,r,o,i;const l=[qe,Te],s=[];function n(u,y){return u[1]?0:1}return a=n(c),t=s[a]=l[a](c),{c(){e=b("section"),t.c()},l(u){e=g(u,"SECTION",{});var y=w(e);t.l(y),y.forEach(f)},m(u,y){B(u,e,y),s[a].m(e,null),i=!0},p(u,[y]){t.p(u,y)},i(u){i||(q(t),ce(()=>{o&&o.end(1),r=me(e,ee,{y:50,duration:400,delay:500}),r.start()}),i=!0)},o(u){C(t),r&&r.invalidate(),o=ue(e,ee,{duration:500}),i=!1},d(u){u&&f(e),s[a].d(),u&&o&&o.end()}}}const je=ye(ve);async function He({params:c}){const e=ke(Be(je,"users"),we("name","==",c.id));let a;return(await Ee(e)).forEach(r=>{console.log(r.id," => ",r.data()),a=r.data(),console.log(a)}),{props:{arrayofgames:a}}}function Ce(c,e,a){let t,{arrayofgames:r}=e;console.log(r.name);let o=r.ratings,i=r.displayName,l=[];for(let h of o)l.push(h.id);console.log(l);function s(){M(`../../user/home/${i.toLowerCase()}`)}function n(){M(`../../user/backlog/${i.toLowerCase()}`)}function u(){M(`../../user/reviews/${i.toLowerCase()}`)}fe(async()=>{await fetch("https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer sd089a9azgftad7tbbaroxitu6x71k","X-Requested-With":"XMLHttpRequest"},body:`fields name, cover.image_id, follows;  where id=(${l});`}).then(h=>h.json()).then(h=>{a(0,t=h);for(let v of h);})});function y(h){for(let v of o)if(h.id===v.id)return v.rating}return c.$$set=h=>{"arrayofgames"in h&&a(7,r=h.arrayofgames)},[t,i,l,s,n,u,y,r]}class Xe extends se{constructor(e){super(),ne(this,e,Ce,Ue,ie,{arrayofgames:7})}}export{Xe as default,He as load};
