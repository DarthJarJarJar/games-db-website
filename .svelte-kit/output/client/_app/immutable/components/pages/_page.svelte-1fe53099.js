import{S as P,i as S,s as q,k as y,q as I,a as N,l as $,m as x,r as O,h,c as B,n as k,b as D,C as p,f as g,d as H,M,t as w,N as T,O as V,v as j,w as z,x as A,y as F,g as J,P as K}from"../../chunks/index-4fb290ec.js";import{f as b}from"../../chunks/index-6273de8d.js";import"../../chunks/navigation-417ed16c.js";/* empty css                                                             */import{G as L}from"../../chunks/GameCard-21bf7929.js";import"../../chunks/singletons-5dc88023.js";function C(c,t,l){const a=c.slice();return a[2]=t[l],a}function E(c){let t,l;return t=new L({props:{game:c[2]}}),{c(){j(t.$$.fragment)},l(a){z(t.$$.fragment,a)},m(a,o){A(t,a,o),l=!0},p(a,o){const i={};o&1&&(i.game=a[2]),t.$set(i)},i(a){l||(g(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){F(t,a)}}}function Q(c){let t,l,a,o,i,m,u,d,_=c[0],s=[];for(let e=0;e<_.length;e+=1)s[e]=E(C(c,_,e));const G=e=>w(s[e],1,1,()=>{s[e]=null});return{c(){t=y("section"),l=y("h2"),a=I("Popular Games"),o=N(),i=y("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=$(e,"SECTION",{class:!0});var r=x(t);l=$(r,"H2",{class:!0});var n=x(l);a=O(n,"Popular Games"),n.forEach(h),o=B(r),i=$(r,"DIV",{class:!0});var f=x(i);for(let v=0;v<s.length;v+=1)s[v].l(f);f.forEach(h),r.forEach(h),this.h()},h(){k(l,"class","svelte-1tpisuw"),k(i,"class","games svelte-1tpisuw"),k(t,"class","svelte-1tpisuw")},m(e,r){D(e,t,r),p(t,l),p(l,a),p(t,o),p(t,i);for(let n=0;n<s.length;n+=1)s[n].m(i,null);d=!0},p(e,[r]){if(r&1){_=e[0];let n;for(n=0;n<_.length;n+=1){const f=C(e,_,n);s[n]?(s[n].p(f,r),g(s[n],1)):(s[n]=E(f),s[n].c(),g(s[n],1),s[n].m(i,null))}for(J(),n=_.length;n<s.length;n+=1)G(n);H()}},i(e){if(!d){for(let r=0;r<_.length;r+=1)g(s[r]);M(()=>{u&&u.end(1),m=K(t,b,{y:50,duration:400,delay:500}),m.start()}),d=!0}},o(e){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)w(s[r]);m&&m.invalidate(),u=T(t,b,{duration:500}),d=!1},d(e){e&&h(t),V(s,e),e&&u&&u.end()}}}function R(c,t,l){let{data:a}=t;return a=a[0],c.$$set=o=>{"data"in o&&l(0,a=o.data)},[a]}class et extends P{constructor(t){super(),S(this,t,R,Q,q,{data:0})}}export{et as default};