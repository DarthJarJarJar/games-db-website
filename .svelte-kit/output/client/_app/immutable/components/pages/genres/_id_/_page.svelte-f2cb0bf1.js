import{S as H,i as I,s as O,k as $,l as E,m as N,h,b as g,f as p,t as v,d as T,M as A,N as B,q as k,a as D,r as b,c as M,n as V,C as y,u as j,g as q,O as x,A as z,v as F,w as J,x as K,y as L,P as Q}from"../../../../chunks/index-4fb290ec.js";import{P as U}from"../../../../chunks/PopularGame-5dc6c243.js";import{f as P}from"../../../../chunks/index-6273de8d.js";/* empty css                                                            *//* empty css                                                                   */function R(f,e,o){const t=f.slice();return t[2]=e[o],t}function C(f){let e,o,t,i,l,s,_,m=f[0],n=[];for(let a=0;a<m.length;a+=1)n[a]=S(R(f,m,a));const w=a=>v(n[a],1,1,()=>{n[a]=null});let u=null;return m.length||(u=G()),{c(){e=$("h2"),o=k("Top "),t=k(f[1]),i=k(" Games"),l=D(),s=$("div");for(let a=0;a<n.length;a+=1)n[a].c();u&&u.c(),this.h()},l(a){e=E(a,"H2",{});var c=N(e);o=b(c,"Top "),t=b(c,f[1]),i=b(c," Games"),c.forEach(h),l=M(a),s=E(a,"DIV",{class:!0});var r=N(s);for(let d=0;d<n.length;d+=1)n[d].l(r);u&&u.l(r),r.forEach(h),this.h()},h(){V(s,"class","games svelte-pr1u4i")},m(a,c){g(a,e,c),y(e,o),y(e,t),y(e,i),g(a,l,c),g(a,s,c);for(let r=0;r<n.length;r+=1)n[r].m(s,null);u&&u.m(s,null),_=!0},p(a,c){if((!_||c&2)&&j(t,a[1]),c&1){m=a[0];let r;for(r=0;r<m.length;r+=1){const d=R(a,m,r);n[r]?(n[r].p(d,c),p(n[r],1)):(n[r]=S(d),n[r].c(),p(n[r],1),n[r].m(s,null))}for(q(),r=m.length;r<n.length;r+=1)w(r);T(),!m.length&&u?u.p(a,c):m.length?u&&(u.d(1),u=null):(u=G(),u.c(),u.m(s,null))}},i(a){if(!_){for(let c=0;c<m.length;c+=1)p(n[c]);_=!0}},o(a){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)v(n[c]);_=!1},d(a){a&&h(e),a&&h(l),a&&h(s),x(n,a),u&&u.d()}}}function G(f){let e,o;return{c(){e=$("h2"),o=k("No search results")},l(t){e=E(t,"H2",{});var i=N(e);o=b(i,"No search results"),i.forEach(h)},m(t,i){g(t,e,i),y(e,o)},p:z,d(t){t&&h(e)}}}function S(f){let e,o;return e=new U({props:{game:f[2]}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,i){K(e,t,i),o=!0},p(t,i){const l={};i&1&&(l.game=t[2]),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),o=!1},d(t){L(e,t)}}}function W(f){let e,o,t,i,l=f[0]&&C(f);return{c(){e=$("section"),l&&l.c()},l(s){e=E(s,"SECTION",{});var _=N(e);l&&l.l(_),_.forEach(h)},m(s,_){g(s,e,_),l&&l.m(e,null),i=!0},p(s,[_]){s[0]?l?(l.p(s,_),_&1&&p(l,1)):(l=C(s),l.c(),p(l,1),l.m(e,null)):l&&(q(),v(l,1,1,()=>{l=null}),T())},i(s){i||(p(l),A(()=>{t&&t.end(1),o=Q(e,P,{y:50,duration:400,delay:500}),o.start()}),i=!0)},o(s){v(l),o&&o.invalidate(),t=B(e,P,{duration:500}),i=!1},d(s){s&&h(e),l&&l.d(),s&&t&&t.end()}}}function X(f,e,o){let t,{searchResults:i}=e;return console.log(i),f.$$set=l=>{"searchResults"in l&&o(0,i=l.searchResults)},f.$$.update=()=>{f.$$.dirty&1&&o(1,t=i[0].genres[0].name)},[i,t]}class ae extends H{constructor(e){super(),I(this,e,X,W,O,{searchResults:0})}}export{ae as default};