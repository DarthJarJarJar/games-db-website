import{S as d,i as _,s as k,e as f,k as b,t as y,c as u,m as $,a as x,h as v,d as c,b as o,g as h,H as C,J as H,j as S,n as m}from"../chunks/index-12679752.js";function g(i){let t,l,a,n,r,p;return{c(){t=f("input"),l=b(),a=f("h1"),n=y(i[0]),this.h()},l(e){t=u(e,"INPUT",{class:!0,type:!0,"aria-label":!0}),l=$(e),a=u(e,"H1",{});var s=x(a);n=v(s,i[0]),s.forEach(c),this.h()},h(){o(t,"class","form-check-input mt-0"),o(t,"type","checkbox"),o(t,"aria-label","Checkbox for following text input")},m(e,s){h(e,t,s),t.checked=i[0],h(e,l,s),h(e,a,s),C(a,n),r||(p=H(t,"change",i[1]),r=!0)},p(e,[s]){s&1&&(t.checked=e[0]),s&1&&S(n,e[0])},i:m,o:m,d(e){e&&c(t),e&&c(l),e&&c(a),r=!1,p()}}}function j(i,t,l){let a=!1;function n(){a=this.checked,l(0,a)}return[a,n]}class w extends d{constructor(t){super(),_(this,t,j,g,k,{})}}export{w as default};
