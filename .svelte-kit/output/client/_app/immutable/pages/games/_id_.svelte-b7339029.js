import{S as je,i as ze,s as Le,R as Ke,t as F,T as Je,a as b,h as j,d as m,b as c,Z as ut,g as A,H as f,J as te,j as fe,n as se,L as $e,_ as Ze,x as Ne,y as Se,z as Ue,r as z,p as Y,C as Ae,e as _,c as g,o as re,q as ae,W as Ce,k as P,m as O,$ as Rt,l as $,f as K,a0 as Dt,a1 as Nt,I as Fe,U as St,V as Ut,w as At,X as Bt,Y as Tt}from"../../chunks/index-12679752.js";import"../../chunks/navigation-0e6511d1.js";import{B as Qe,a as xe,V as oe,U as ne,K as ce,w as ue,y as Pt,D as qe,p as De,g as Ot}from"../../chunks/fb-07f3109e.js";/* empty css                                                            */import{f as ft}from"../../chunks/index-124bdde0.js";import{S as It}from"../../chunks/StarRating-87018281.js";import"../../chunks/singletons-d1fb5791.js";function Vt(a){let e,t,s,l,r,n;return{c(){e=Ke("svg"),t=Ke("title"),s=F(a[0]),l=Ke("path"),this.h()},l(o){e=Je(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0,"data-starid":!0});var i=b(e);t=Je(i,"title",{});var d=b(t);s=j(d,a[0]),d.forEach(m),l=Je(i,"path",{"data-starid":!0,class:!0,d:!0}),b(l).forEach(m),i.forEach(m),this.h()},h(){c(l,"data-starid",a[2]),c(l,"class","starPath svelte-1rhz5xd"),c(l,"d","m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"),ut(l,"filled",a[1]),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","20"),c(e,"height","20"),c(e,"viewBox","0 0 51 48"),c(e,"class","star svelte-1rhz5xd"),c(e,"data-starid",a[2])},m(o,i){A(o,e,i),f(e,t),f(t,s),f(e,l),r||(n=[te(e,"mouseover",a[3]),te(e,"mouseleave",a[4]),te(e,"click",a[5])],r=!0)},p(o,[i]){i&1&&fe(s,o[0]),i&4&&c(l,"data-starid",o[2]),i&2&&ut(l,"filled",o[1]),i&4&&c(e,"data-starid",o[2])},i:se,o:se,d(o){o&&m(e),r=!1,$e(n)}}}function Ct(a,e,t){let{title:s="star"}=e,{filled:l=!1}=e,{starId:r}=e;function n(d){Ze.call(this,a,d)}function o(d){Ze.call(this,a,d)}function i(d){Ze.call(this,a,d)}return a.$$set=d=>{"title"in d&&t(0,s=d.title),"filled"in d&&t(1,l=d.filled),"starId"in d&&t(2,r=d.starId)},[s,l,r,n,o,i]}class Ft extends je{constructor(e){super(),ze(this,e,Ct,Vt,Le,{title:0,filled:1,starId:2})}}function dt(a,e,t){const s=a.slice();return s[7]=e[t],s}function mt(a){let e,t;return e=new Ft({props:{filled:a[1]?a[1]>=a[7]:a[0]>=a[7],starId:a[7]}}),e.$on("mouseover",a[2](a[7])),e.$on("mouseleave",a[6]),e.$on("click",a[3](a[7])),{c(){Ne(e.$$.fragment)},l(s){Se(e.$$.fragment,s)},m(s,l){Ue(e,s,l),t=!0},p(s,l){const r={};l&3&&(r.filled=s[1]?s[1]>=s[7]:s[0]>=s[7]),e.$set(r)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Y(e.$$.fragment,s),t=!1},d(s){Ae(e,s)}}}function jt(a){let e,t,s,l=a[4],r=[];for(let o=0;o<l.length;o+=1)r[o]=mt(dt(a,l,o));const n=o=>Y(r[o],1,1,()=>{r[o]=null});return{c(){e=_("div"),t=_("span");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=g(o,"DIV",{class:!0});var i=b(e);t=g(i,"SPAN",{class:!0});var d=b(t);for(let v=0;v<r.length;v+=1)r[v].l(d);d.forEach(m),i.forEach(m),this.h()},h(){c(t,"class","starContainer svelte-dffvs7"),c(e,"class","feedback svelte-dffvs7")},m(o,i){A(o,e,i),f(e,t);for(let d=0;d<r.length;d+=1)r[d].m(t,null);s=!0},p(o,[i]){if(i&31){l=o[4];let d;for(d=0;d<l.length;d+=1){const v=dt(o,l,d);r[d]?(r[d].p(v,i),z(r[d],1)):(r[d]=mt(v),r[d].c(),z(r[d],1),r[d].m(t,null))}for(re(),d=l.length;d<r.length;d+=1)n(d);ae()}},i(o){if(!s){for(let i=0;i<l.length;i+=1)z(r[i]);s=!0}},o(o){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)Y(r[i]);s=!1},d(o){o&&m(e),Ce(r,o)}}}function zt(a,e,t){let{rating:s=null}=e,{num:l=5}=e,r=null;const n=v=>()=>{t(1,r=v)},o=v=>()=>{t(0,s=v)};let i=Array.from({length:l},(v,p)=>p+1);const d=()=>t(1,r=null);return a.$$set=v=>{"rating"in v&&t(0,s=v.rating),"num"in v&&t(5,l=v.num)},[s,r,n,o,i,l,d]}class Lt extends je{constructor(e){super(),ze(this,e,zt,jt,Le,{rating:0,num:5})}}function ht(a,e,t){const s=a.slice();return s[5]=e[t],s}function pt(a){let e,t,s,l,r;function n(i){a[13](i)}let o={num:"10"};return a[0]!==void 0&&(o.rating=a[0]),e=new Lt({props:o}),Dt.push(()=>Nt(e,"rating",n)),{c(){Ne(e.$$.fragment),s=P(),l=_("br")},l(i){Se(e.$$.fragment,i),s=O(i),l=g(i,"BR",{})},m(i,d){Ue(e,i,d),A(i,s,d),A(i,l,d),r=!0},p(i,d){const v={};!t&&d&1&&(t=!0,v.rating=i[0],Rt(()=>t=!1)),e.$set(v)},i(i){r||(z(e.$$.fragment,i),r=!0)},o(i){Y(e.$$.fragment,i),r=!1},d(i){Ae(e,i),i&&m(s),i&&m(l)}}}function Gt(a){let e,t,s,l,r,n,o,i,d,v,p,T,y,I,q;e=new It({props:{rating:parseFloat(a[0]),config:a[6]}});function w(u,h){return u[5]?Mt:Ht}let R=w(a),k=R(a);return{c(){Ne(e.$$.fragment),t=P(),k.c(),s=P(),l=_("div"),r=_("button"),n=F("Review submitted!"),o=P(),i=_("button"),d=F("Edit"),v=P(),p=_("button"),T=F("Delete"),this.h()},l(u){Se(e.$$.fragment,u),t=O(u),k.l(u),s=O(u),l=g(u,"DIV",{class:!0});var h=b(l);r=g(h,"BUTTON",{type:!0,class:!0,style:!0});var V=b(r);n=j(V,"Review submitted!"),V.forEach(m),o=O(h),i=g(h,"BUTTON",{type:!0,class:!0,style:!0});var B=b(i);d=j(B,"Edit"),B.forEach(m),v=O(h),p=g(h,"BUTTON",{type:!0,class:!0,style:!0});var S=b(p);T=j(S,"Delete"),S.forEach(m),h.forEach(m),this.h()},h(){r.disabled=!0,c(r,"type","submit"),c(r,"class","btn btn-success"),K(r,"margin-top","0.5rem"),c(i,"type","submit"),c(i,"class","btn btn-primary"),K(i,"margin-top","0.5rem"),K(i,"margin-left","0.5rem"),c(p,"type","button"),c(p,"class","btn btn-danger"),K(p,"margin-top","0.5rem"),K(p,"margin-left","0.5rem"),c(l,"class","buttons svelte-18qqude")},m(u,h){Ue(e,u,h),A(u,t,h),k.m(u,h),A(u,s,h),A(u,l,h),f(l,r),f(r,n),f(l,o),f(l,i),f(i,d),f(l,v),f(l,p),f(p,T),y=!0,I||(q=[te(r,"click",a[7]),te(i,"click",a[8])],I=!0)},p(u,h){const V={};h&1&&(V.rating=parseFloat(u[0])),e.$set(V),R===(R=w(u))&&k?k.p(u,h):(k.d(1),k=R(u),k&&(k.c(),k.m(s.parentNode,s)))},i(u){y||(z(e.$$.fragment,u),y=!0)},o(u){Y(e.$$.fragment,u),y=!1},d(u){Ae(e,u),u&&m(t),k.d(u),u&&m(s),u&&m(l),I=!1,$e(q)}}}function Yt(a){let e,t,s,l,r,n,o,i,d,v,p,T,y,I,q,w,R,k;return{c(){e=_("details"),t=_("summary"),s=F("Include a review?"),l=P(),r=_("textarea"),n=P(),o=_("div"),i=_("div"),d=_("input"),v=P(),p=_("label"),T=F("Spoilers"),I=P(),q=_("button"),w=F("Submit"),this.h()},l(u){e=g(u,"DETAILS",{class:!0});var h=b(e);t=g(h,"SUMMARY",{class:!0});var V=b(t);s=j(V,"Include a review?"),V.forEach(m),l=O(h),r=g(h,"TEXTAREA",{class:!0,placeholder:!0,id:!0,style:!0}),b(r).forEach(m),n=O(h),o=g(h,"DIV",{class:!0});var B=b(o);i=g(B,"DIV",{class:!0});var S=b(i);d=g(S,"INPUT",{type:!0,id:!0,name:!0}),v=O(S),p=g(S,"LABEL",{for:!0});var E=b(p);T=j(E,"Spoilers"),E.forEach(m),S.forEach(m),B.forEach(m),h.forEach(m),I=O(u),q=g(u,"BUTTON",{type:!0,class:!0,style:!0});var D=b(q);w=j(D,"Submit"),D.forEach(m),this.h()},h(){c(t,"class","svelte-18qqude"),c(r,"class","form-control"),c(r,"placeholder","Write your review"),c(r,"id","floatingTextarea2"),K(r,"height","150px"),c(d,"type","checkbox"),c(d,"id","spoilers"),c(d,"name","interest"),c(p,"for","music"),c(i,"class","check svelte-18qqude"),c(o,"class","spoilers svelte-18qqude"),e.open=y=!!a[5],c(e,"class","svelte-18qqude"),c(q,"type","submit"),c(q,"class","btn btn-primary"),K(q,"margin-top","0.5rem")},m(u,h){A(u,e,h),f(e,t),f(t,s),f(e,l),f(e,r),Fe(r,a[5]),f(e,n),f(e,o),f(o,i),f(i,d),d.checked=a[2],f(i,v),f(i,p),f(p,T),A(u,I,h),A(u,q,h),f(q,w),R||(k=[te(r,"input",a[14]),te(d,"change",a[15]),te(q,"click",a[7])],R=!0)},p(u,h){h&32&&Fe(r,u[5]),h&4&&(d.checked=u[2]),h&32&&y!==(y=!!u[5])&&(e.open=y)},i:se,o:se,d(u){u&&m(e),u&&m(I),u&&m(q),R=!1,$e(k)}}}function Mt(a){let e,t,s;return{c(){e=_("textarea"),this.h()},l(l){e=g(l,"TEXTAREA",{class:!0,placeholder:!0,id:!0,style:!0}),b(e).forEach(m),this.h()},h(){e.disabled=!0,c(e,"class","form-control"),c(e,"placeholder","Leave a comment here"),c(e,"id","floatingTextarea2"),K(e,"height","100px")},m(l,r){A(l,e,r),Fe(e,a[5]),t||(s=te(e,"input",a[16]),t=!0)},p(l,r){r&32&&Fe(e,l[5])},d(l){l&&m(e),t=!1,s()}}}function Ht(a){let e,t;return{c(){e=_("p"),t=F("You haven't reviewed this game yet"),this.h()},l(s){e=g(s,"P",{class:!0});var l=b(e);t=j(l,"You haven't reviewed this game yet"),l.forEach(m),this.h()},h(){c(e,"class","svelte-18qqude")},m(s,l){A(s,e,l),f(e,t)},p:se,d(s){s&&m(e)}}}function vt(a){let e,t;return{c(){e=_("p"),t=F("This game does not have any reviews yet."),this.h()},l(s){e=g(s,"P",{class:!0});var l=b(e);t=j(l,"This game does not have any reviews yet."),l.forEach(m),this.h()},h(){c(e,"class","svelte-18qqude")},m(s,l){A(s,e,l),f(e,t)},d(s){s&&m(e)}}}function _t(a){let e,t,s=!a[4]&&gt(a);return{c(){s&&s.c(),e=$()},l(l){s&&s.l(l),e=$()},m(l,r){s&&s.m(l,r),A(l,e,r),t=!0},p(l,r){l[4]?s&&(re(),Y(s,1,1,()=>{s=null}),ae()):s?(s.p(l,r),r&16&&z(s,1)):(s=gt(l),s.c(),z(s,1),s.m(e.parentNode,e))},i(l){t||(z(s),t=!0)},o(l){Y(s),t=!1},d(l){s&&s.d(l),l&&m(e)}}}function gt(a){let e,t,s=a[3],l=[];for(let n=0;n<s.length;n+=1)l[n]=bt(ht(a,s,n));const r=n=>Y(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=$()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=$()},m(n,o){for(let i=0;i<l.length;i+=1)l[i].m(n,o);A(n,e,o),t=!0},p(n,o){if(o&72){s=n[3];let i;for(i=0;i<s.length;i+=1){const d=ht(n,s,i);l[i]?(l[i].p(d,o),z(l[i],1)):(l[i]=bt(d),l[i].c(),z(l[i],1),l[i].m(e.parentNode,e))}for(re(),i=s.length;i<l.length;i+=1)r(i);ae()}},i(n){if(!t){for(let o=0;o<s.length;o+=1)z(l[o]);t=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)Y(l[o]);t=!1},d(n){Ce(l,n),n&&m(e)}}}function Xt(a){let e,t;return{c(){e=_("p"),t=F("No"),this.h()},l(s){e=g(s,"P",{class:!0});var l=b(e);t=j(l,"No"),l.forEach(m),this.h()},h(){c(e,"class","card-text svelte-18qqude")},m(s,l){A(s,e,l),f(e,t)},p:se,i:se,o:se,d(s){s&&m(e)}}}function Wt(a){let e,t,s,l=a[5].reviewer+"",r,n,o,i,d,v,p=a[5].reviewTime.toLocaleString("en-us",{month:"long"})+" "+a[5].reviewTime.getDate()+" "+a[5].reviewTime.getFullYear(),T,y,I,q;i=new It({props:{rating:parseFloat(a[5].rating),config:a[6]}});function w(u,h){return u[5].spoiler?Jt:Kt}let R=w(a),k=R(a);return{c(){e=_("h5"),t=F("Review by "),s=_("a"),r=F(l),o=P(),Ne(i.$$.fragment),d=P(),v=_("h6"),T=F(p),y=P(),k.c(),I=$(),this.h()},l(u){e=g(u,"H5",{class:!0});var h=b(e);t=j(h,"Review by "),s=g(h,"A",{href:!0,class:!0});var V=b(s);r=j(V,l),V.forEach(m),h.forEach(m),o=O(u),Se(i.$$.fragment,u),d=O(u),v=g(u,"H6",{class:!0});var B=b(v);T=j(B,p),B.forEach(m),y=O(u),k.l(u),I=$(),this.h()},h(){c(s,"href",n=`/user/home/${a[5].reviewer.toLowerCase()}`),c(s,"class","svelte-18qqude"),c(e,"class","card-title"),c(v,"class","card-subtitle mb-2 text-muted")},m(u,h){A(u,e,h),f(e,t),f(e,s),f(s,r),A(u,o,h),Ue(i,u,h),A(u,d,h),A(u,v,h),f(v,T),A(u,y,h),k.m(u,h),A(u,I,h),q=!0},p(u,h){(!q||h&8)&&l!==(l=u[5].reviewer+"")&&fe(r,l),(!q||h&8&&n!==(n=`/user/home/${u[5].reviewer.toLowerCase()}`))&&c(s,"href",n);const V={};h&8&&(V.rating=parseFloat(u[5].rating)),i.$set(V),(!q||h&8)&&p!==(p=u[5].reviewTime.toLocaleString("en-us",{month:"long"})+" "+u[5].reviewTime.getDate()+" "+u[5].reviewTime.getFullYear())&&fe(T,p),R===(R=w(u))&&k?k.p(u,h):(k.d(1),k=R(u),k&&(k.c(),k.m(I.parentNode,I)))},i(u){q||(z(i.$$.fragment,u),q=!0)},o(u){Y(i.$$.fragment,u),q=!1},d(u){u&&m(e),u&&m(o),Ae(i,u),u&&m(d),u&&m(v),u&&m(y),k.d(u),u&&m(I)}}}function Kt(a){let e,t=a[5].review+"",s;return{c(){e=_("p"),s=F(t),this.h()},l(l){e=g(l,"P",{class:!0});var r=b(e);s=j(r,t),r.forEach(m),this.h()},h(){c(e,"class","card-text svelte-18qqude")},m(l,r){A(l,e,r),f(e,s)},p(l,r){r&8&&t!==(t=l[5].review+"")&&fe(s,t)},d(l){l&&m(e)}}}function Jt(a){let e,t,s,l,r,n=a[5].review+"",o;return{c(){e=_("details"),t=_("summary"),s=F("This review has spoilers. Click to see"),l=P(),r=_("p"),o=F(n),this.h()},l(i){e=g(i,"DETAILS",{class:!0});var d=b(e);t=g(d,"SUMMARY",{class:!0});var v=b(t);s=j(v,"This review has spoilers. Click to see"),v.forEach(m),l=O(d),r=g(d,"P",{class:!0});var p=b(r);o=j(p,n),p.forEach(m),d.forEach(m),this.h()},h(){c(t,"class","svelte-18qqude"),c(r,"class","card-text svelte-18qqude"),c(e,"class","svelte-18qqude")},m(i,d){A(i,e,d),f(e,t),f(t,s),f(e,l),f(e,r),f(r,o)},p(i,d){d&8&&n!==(n=i[5].review+"")&&fe(o,n)},d(i){i&&m(e)}}}function bt(a){let e,t,s,l,r,n,o,i;const d=[Wt,Xt],v=[];function p(T,y){return y&8&&(l=null),l==null&&(l=T[5].reviewer.toLowerCase()!=""),l?0:1}return r=p(a,-1),n=v[r]=d[r](a),{c(){e=_("div"),t=_("div"),s=_("div"),n.c(),o=P(),this.h()},l(T){e=g(T,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0,style:!0});var I=b(t);s=g(I,"DIV",{class:!0});var q=b(s);n.l(q),q.forEach(m),I.forEach(m),o=O(y),y.forEach(m),this.h()},h(){c(s,"class","card-body"),c(t,"class","card"),K(t,"width","95%"),K(t,"margin-left","auto"),K(t,"margin-right","auto"),c(e,"class","card-body")},m(T,y){A(T,e,y),f(e,t),f(t,s),v[r].m(s,null),f(e,o),i=!0},p(T,y){let I=r;r=p(T,y),r===I?v[r].p(T,y):(re(),Y(v[I],1,1,()=>{v[I]=null}),ae(),n=v[r],n?n.p(T,y):(n=v[r]=d[r](T),n.c()),z(n,1),n.m(s,null))},i(T){i||(z(n),i=!0)},o(T){Y(n),i=!1},d(T){T&&m(e),v[r].d()}}}function Zt(a){let e,t,s,l,r,n,o,i,d,v,p,T,y,I,q,w,R,k=!a[1]&&pt(a);const u=[Yt,Gt],h=[];function V(E,D){return E[1]?1:0}i=V(a),d=h[i]=u[i](a);let B=a[4]&&vt(),S=a[3]&&_t(a);return{c(){e=_("div"),t=_("div"),s=_("h5"),l=F("Rate and Review"),r=P(),k&&k.c(),n=P(),o=_("div"),d.c(),v=P(),p=_("div"),T=_("div"),y=_("h5"),I=F("User reviews"),q=P(),B&&B.c(),w=P(),S&&S.c(),this.h()},l(E){e=g(E,"DIV",{class:!0,style:!0});var D=b(e);t=g(D,"DIV",{class:!0});var N=b(t);s=g(N,"H5",{class:!0});var M=b(s);l=j(M,"Rate and Review"),M.forEach(m),r=O(N),k&&k.l(N),n=O(N),o=g(N,"DIV",{class:!0});var U=b(o);d.l(U),U.forEach(m),N.forEach(m),D.forEach(m),v=O(E),p=g(E,"DIV",{class:!0,style:!0});var X=b(p);T=g(X,"DIV",{class:!0});var L=b(T);y=g(L,"H5",{class:!0});var H=b(y);I=j(H,"User reviews"),H.forEach(m),q=O(L),B&&B.l(L),w=O(L),S&&S.l(L),L.forEach(m),X.forEach(m),this.h()},h(){c(s,"class","card-title"),c(o,"class","form-floating"),c(t,"class","card-body"),c(e,"class","card"),K(e,"width","100%"),K(e,"margin-top","1rem"),c(y,"class","card-title"),c(T,"class","card-body"),c(p,"class","card"),K(p,"width","100%"),K(p,"margin-top","2rem")},m(E,D){A(E,e,D),f(e,t),f(t,s),f(s,l),f(t,r),k&&k.m(t,null),f(t,n),f(t,o),h[i].m(o,null),A(E,v,D),A(E,p,D),f(p,T),f(T,y),f(y,I),f(T,q),B&&B.m(T,null),f(T,w),S&&S.m(T,null),R=!0},p(E,[D]){E[1]?k&&(re(),Y(k,1,1,()=>{k=null}),ae()):k?(k.p(E,D),D&2&&z(k,1)):(k=pt(E),k.c(),z(k,1),k.m(t,n));let N=i;i=V(E),i===N?h[i].p(E,D):(re(),Y(h[N],1,1,()=>{h[N]=null}),ae(),d=h[i],d?d.p(E,D):(d=h[i]=u[i](E),d.c()),z(d,1),d.m(o,null)),E[4]?B||(B=vt(),B.c(),B.m(T,w)):B&&(B.d(1),B=null),E[3]?S?(S.p(E,D),D&8&&z(S,1)):(S=_t(E),S.c(),z(S,1),S.m(T,null)):S&&(re(),Y(S,1,1,()=>{S=null}),ae())},i(E){R||(z(k),z(d),z(S),R=!0)},o(E){Y(k),Y(d),Y(S),R=!1},d(E){E&&m(e),k&&k.d(),h[i].d(),E&&m(v),E&&m(p),B&&B.d(),S&&S.d()}}}function Qt(a,e,t){let{game:s}=e,{uid:l}=e,{name:r}=e,{gamename:n}=e;console.log(r),console.log(l);const o=s;let i=new Date;const d=Qe(xe);let v,p,T=!1,y=!1;const I={showText:!0};async function q(){v>0&&v<=10?(p||t(5,p=""),t(1,T=!0),await Pt(qe(d,"games",`${o+l}`),{gameId:o,reviewBy:l,review:p,reviewAt:i.getTime(),rating:v,spoiler:y,reviewerName:l.toLowerCase(),gameName:n}),R(l,o,v),V()):alert("Rating must be between 0 and 5!")}function w(){t(1,T=!1)}async function R(N,M,U){const X=Qe(xe),L=oe(X,"users");let H=ne(L,ce("displayName","==",N));const de=await ue(H);let ie,Z;de.forEach(ee=>{ie=ee.id,Z=ee.data().ratings});let be=!1;for(let ee of Z)if(ee.id===M){be=!0;const pe={};pe.id=M,pe.rating=ee.rating;const Ee=Z.indexOf(pe);Z.splice(Ee,1);const ve={};ve.id=M,ve.rating=parseInt(U),Z.push(ve)}if(!be){const ee={};ee.id=M,ee.rating=parseInt(U),Z.push(ee)}const me=qe(X,"users",ie);await De(me,{ratings:Z})}async function k(){const N=oe(d,"games");let M=ne(N,ce("reviewBy","==",l));const U=await ue(M);let X=[];U.forEach(L=>{L.id;let H={};H.id=L.data().gameId,H.review=L.data().review,H.rating=L.data().rating,H.spoiler=L.data().spoiler,X.push(H)});for(let L of X)o===L.id&&(t(1,T=!0),t(5,p=L.review),t(2,y=L.spoiler),t(0,v=L.rating))}k();let u,h=!0;async function V(){const N=oe(d,"games");let M=ne(N,ce("gameId","==",o));const U=await ue(M);U.empty?t(4,h=!0):t(4,h=!1);let X=[];U.forEach(L=>{L.id;let H={};H.reviewer=L.data().reviewBy,H.review=L.data().review,H.reviewTime=new Date(L.data().reviewAt),H.rating=L.data().rating,H.spoiler=L.data().spoiler,X.push(H)}),t(3,u=X)}V(),V().then(()=>console.log(h));function B(N){v=N,t(0,v)}function S(){p=this.value,t(5,p)}function E(){y=this.checked,t(2,y)}function D(){p=this.value,t(5,p)}return a.$$set=N=>{"game"in N&&t(9,s=N.game),"uid"in N&&t(10,l=N.uid),"name"in N&&t(11,r=N.name),"gamename"in N&&t(12,n=N.gamename)},[v,T,y,u,h,p,I,q,w,s,l,r,n,B,S,E,D]}class xt extends je{constructor(e){super(),ze(this,e,Qt,Zt,Le,{game:9,uid:10,name:11,gamename:12})}}function kt(a,e,t){const s=a.slice();return s[24]=e[t],s[26]=t,s}function $t(a,e,t){const s=a.slice();return s[27]=e[t],s[26]=t,s}function es(a){let e;return{c(){e=_("button"),this.h()},l(t){e=g(t,"BUTTON",{type:!0,"data-bs-target":!0,"data-bs-slide-to":!0,"aria-label":!0}),b(e).forEach(m),this.h()},h(){c(e,"type","button"),c(e,"data-bs-target","#carouselExampleIndicators"),c(e,"data-bs-slide-to",a[26]),c(e,"aria-label",`Screenshot ${a[26]+1}`)},m(t,s){A(t,e,s)},d(t){t&&m(e)}}}function ts(a){let e;return{c(){e=_("button"),this.h()},l(t){e=g(t,"BUTTON",{type:!0,"data-bs-target":!0,"data-bs-slide-to":!0,class:!0,"aria-current":!0,"aria-label":!0}),b(e).forEach(m),this.h()},h(){c(e,"type","button"),c(e,"data-bs-target","#carouselExampleIndicators"),c(e,"data-bs-slide-to",a[26]),c(e,"class","active"),c(e,"aria-current","true"),c(e,"aria-label",`Screenshot ${a[26]+1}`)},m(t,s){A(t,e,s)},d(t){t&&m(e)}}}function ss(a){let e;function t(r,n){return r[26]===0?ts:es}let l=t(a)(a);return{c(){l.c(),e=$()},l(r){l.l(r),e=$()},m(r,n){l.m(r,n),A(r,e,n)},p:se,d(r){l.d(r),r&&m(e)}}}function ls(a){let e,t,s,l,r;return{c(){e=_("div"),t=_("img"),r=P(),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);t=g(o,"IMG",{style:!0,src:!0,alt:!0,class:!0}),r=O(o),o.forEach(m),this.h()},h(){K(t,"border-radius","0.5rem"),Tt(t.src,s=`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${a[24]}.jpg`)||c(t,"src",s),c(t,"alt",l=a[0].name),c(t,"class","d-block w-100 svelte-kssepx"),c(e,"class","carousel-item")},m(n,o){A(n,e,o),f(e,t),f(e,r)},p(n,o){o&1&&l!==(l=n[0].name)&&c(t,"alt",l)},d(n){n&&m(e)}}}function rs(a){let e,t,s,l,r;return{c(){e=_("div"),t=_("img"),r=P(),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);t=g(o,"IMG",{style:!0,src:!0,alt:!0,class:!0}),r=O(o),o.forEach(m),this.h()},h(){K(t,"border-radius","0.5rem"),Tt(t.src,s=`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${a[24]}.jpg`)||c(t,"src",s),c(t,"alt",l=a[0].name),c(t,"class","d-block w-100 svelte-kssepx"),c(e,"class","carousel-item active")},m(n,o){A(n,e,o),f(e,t),f(e,r)},p(n,o){o&1&&l!==(l=n[0].name)&&c(t,"alt",l)},d(n){n&&m(e)}}}function yt(a){let e;function t(r,n){return r[26]===0?rs:ls}let l=t(a)(a);return{c(){l.c(),e=$()},l(r){l.l(r),e=$()},m(r,n){l.m(r,n),A(r,e,n)},p(r,n){l.p(r,n)},d(r){l.d(r),r&&m(e)}}}function wt(a){let e,t,s,l,r,n,o,i;function d(w,R){return w[2]?as:is}let v=d(a),p=v(a);function T(w,R){return w[3]?os:ns}let y=T(a),I=y(a),q=a[5]&&qt(a);return{c(){e=_("div"),p.c(),t=P(),I.c(),s=P(),l=_("p"),r=F(a[1]),n=P(),q&&q.c(),o=$(),this.h()},l(w){e=g(w,"DIV",{class:!0});var R=b(e);p.l(R),t=O(R),I.l(R),s=O(R),l=g(R,"P",{class:!0});var k=b(l);r=j(k,a[1]),k.forEach(m),R.forEach(m),n=O(w),q&&q.l(w),o=$(),this.h()},h(){c(l,"class","error svelte-kssepx"),c(e,"class","user-options svelte-kssepx")},m(w,R){A(w,e,R),p.m(e,null),f(e,t),I.m(e,null),f(e,s),f(e,l),f(l,r),A(w,n,R),q&&q.m(w,R),A(w,o,R),i=!0},p(w,R){v===(v=d(w))&&p?p.p(w,R):(p.d(1),p=v(w),p&&(p.c(),p.m(e,t))),y===(y=T(w))&&I?I.p(w,R):(I.d(1),I=y(w),I&&(I.c(),I.m(e,s))),(!i||R&2)&&fe(r,w[1]),w[5]?q?(q.p(w,R),R&32&&z(q,1)):(q=qt(w),q.c(),z(q,1),q.m(o.parentNode,o)):q&&(re(),Y(q,1,1,()=>{q=null}),ae())},i(w){i||(z(q),i=!0)},o(w){Y(q),i=!1},d(w){w&&m(e),p.d(),I.d(),w&&m(n),q&&q.d(w),w&&m(o)}}}function as(a){let e,t,s,l;return{c(){e=_("button"),t=F("Remove from backlog"),this.h()},l(r){e=g(r,"BUTTON",{type:!0,class:!0});var n=b(e);t=j(n,"Remove from backlog"),n.forEach(m),this.h()},h(){c(e,"type","button"),c(e,"class","btn btn-danger svelte-kssepx")},m(r,n){A(r,e,n),f(e,t),s||(l=te(e,"click",a[8]),s=!0)},p:se,d(r){r&&m(e),s=!1,l()}}}function is(a){let e,t,s,l;return{c(){e=_("button"),t=F("Add to backlog"),this.h()},l(r){e=g(r,"BUTTON",{type:!0,class:!0});var n=b(e);t=j(n,"Add to backlog"),n.forEach(m),this.h()},h(){c(e,"type","button"),c(e,"class","btn btn-primary svelte-kssepx")},m(r,n){A(r,e,n),f(e,t),s||(l=te(e,"click",a[7]),s=!0)},p:se,d(r){r&&m(e),s=!1,l()}}}function os(a){let e,t,s,l;return{c(){e=_("button"),t=F("Remove from favourites"),this.h()},l(r){e=g(r,"BUTTON",{type:!0,class:!0});var n=b(e);t=j(n,"Remove from favourites"),n.forEach(m),this.h()},h(){c(e,"type","button"),c(e,"class","btn btn-danger svelte-kssepx")},m(r,n){A(r,e,n),f(e,t),s||(l=te(e,"click",a[10]),s=!0)},p:se,d(r){r&&m(e),s=!1,l()}}}function ns(a){let e,t,s,l;return{c(){e=_("button"),t=F("Add to favourites"),this.h()},l(r){e=g(r,"BUTTON",{type:!0,class:!0});var n=b(e);t=j(n,"Add to favourites"),n.forEach(m),this.h()},h(){c(e,"type","button"),c(e,"class","btn btn-primary svelte-kssepx")},m(r,n){A(r,e,n),f(e,t),s||(l=te(e,"click",a[9]),s=!0)},p:se,d(r){r&&m(e),s=!1,l()}}}function qt(a){let e,t,s=a[6]&&Et(a);return{c(){s&&s.c(),e=$()},l(l){s&&s.l(l),e=$()},m(l,r){s&&s.m(l,r),A(l,e,r),t=!0},p(l,r){l[6]?s?(s.p(l,r),r&64&&z(s,1)):(s=Et(l),s.c(),z(s,1),s.m(e.parentNode,e)):s&&(re(),Y(s,1,1,()=>{s=null}),ae())},i(l){t||(z(s),t=!0)},o(l){Y(s),t=!1},d(l){s&&s.d(l),l&&m(e)}}}function Et(a){let e,t;return e=new xt({props:{game:a[0].id,uid:a[5],name:a[6],gamename:a[0].name}}),{c(){Ne(e.$$.fragment)},l(s){Se(e.$$.fragment,s)},m(s,l){Ue(e,s,l),t=!0},p(s,l){const r={};l&1&&(r.game=s[0].id),l&32&&(r.uid=s[5]),l&64&&(r.name=s[6]),l&1&&(r.gamename=s[0].name),e.$set(r)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Y(e.$$.fragment,s),t=!1},d(s){Ae(e,s)}}}function cs(a){let e,t,s,l,r,n,o,i,d,v,p,T,y,I,q,w,R,k,u,h,V=a[0].name+"",B,S,E,D=a[0].summary+"",N,M,U,X,L,H,de,ie,Z,be,me,ee,pe,Ee,ve,Ge,ke,Ye,Me,He,Xe,ye,Te=a[0].aggregated_rating+"",Be,We,Pe,Ie,_e,et=a[12],he=[];for(let C=0;C<et.length;C+=1)he[C]=ss($t(a,et,C));let we=a[12],J=[];for(let C=0;C<we.length;C+=1)J[C]=yt(kt(a,we,C));let W=a[4]&&wt(a);return{c(){e=_("div"),t=_("div"),s=_("div");for(let C=0;C<he.length;C+=1)he[C].c();l=P(),r=_("div");for(let C=0;C<J.length;C+=1)J[C].c();n=P(),o=_("button"),i=_("span"),d=P(),v=_("span"),p=F("Previous"),T=P(),y=_("button"),I=_("span"),q=P(),w=_("span"),R=F("Next"),k=P(),u=_("div"),h=_("h1"),B=F(V),S=P(),E=_("p"),N=F(D),M=P(),U=_("p"),X=_("span"),L=F("Developers/Publishers"),H=P(),de=F(a[11]),ie=P(),Z=_("br"),be=P(),me=_("span"),ee=F("Platform(s)"),pe=P(),Ee=F(a[13]),ve=_("br"),Ge=P(),ke=_("span"),Ye=F("Genre(s):"),Me=P(),He=F(a[14]),Xe=P(),ye=_("p"),Be=F(Te),We=P(),W&&W.c(),this.h()},l(C){e=g(C,"DIV",{class:!0});var x=b(e);t=g(x,"DIV",{id:!0,class:!0,"data-bs-ride":!0,style:!0});var G=b(t);s=g(G,"DIV",{class:!0});var Re=b(s);for(let ge=0;ge<he.length;ge+=1)he[ge].l(Re);Re.forEach(m),l=O(G),r=g(G,"DIV",{class:!0});var tt=b(r);for(let ge=0;ge<J.length;ge+=1)J[ge].l(tt);tt.forEach(m),n=O(G),o=g(G,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var Oe=b(o);i=g(Oe,"SPAN",{class:!0,"aria-hidden":!0}),b(i).forEach(m),d=O(Oe),v=g(Oe,"SPAN",{class:!0});var st=b(v);p=j(st,"Previous"),st.forEach(m),Oe.forEach(m),T=O(G),y=g(G,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var Ve=b(y);I=g(Ve,"SPAN",{class:!0,"aria-hidden":!0}),b(I).forEach(m),q=O(Ve),w=g(Ve,"SPAN",{class:!0});var lt=b(w);R=j(lt,"Next"),lt.forEach(m),Ve.forEach(m),G.forEach(m),k=O(x),u=g(x,"DIV",{class:!0});var le=b(u);h=g(le,"H1",{class:!0});var rt=b(h);B=j(rt,V),rt.forEach(m),S=O(le),E=g(le,"P",{class:!0});var at=b(E);N=j(at,D),at.forEach(m),M=O(le),U=g(le,"P",{class:!0});var Q=b(U);X=g(Q,"SPAN",{class:!0});var it=b(X);L=j(it,"Developers/Publishers"),it.forEach(m),H=O(Q),de=j(Q,a[11]),ie=O(Q),Z=g(Q,"BR",{}),be=O(Q),me=g(Q,"SPAN",{class:!0});var ot=b(me);ee=j(ot,"Platform(s)"),ot.forEach(m),pe=O(Q),Ee=j(Q,a[13]),ve=g(Q,"BR",{}),Ge=O(Q),ke=g(Q,"SPAN",{class:!0});var nt=b(ke);Ye=j(nt,"Genre(s):"),nt.forEach(m),Me=O(Q),He=j(Q,a[14]),Q.forEach(m),Xe=O(le),ye=g(le,"P",{class:!0});var ct=b(ye);Be=j(ct,Te),ct.forEach(m),We=O(le),W&&W.l(le),le.forEach(m),x.forEach(m),this.h()},h(){c(s,"class","carousel-indicators"),c(r,"class","carousel-inner"),c(i,"class","carousel-control-prev-icon svelte-kssepx"),c(i,"aria-hidden","true"),c(v,"class","visually-hidden svelte-kssepx"),c(o,"class","carousel-control-prev"),c(o,"type","button"),c(o,"data-bs-target","#carouselExampleControls"),c(o,"data-bs-slide","prev"),c(I,"class","carousel-control-next-icon svelte-kssepx"),c(I,"aria-hidden","true"),c(w,"class","visually-hidden svelte-kssepx"),c(y,"class","carousel-control-next"),c(y,"type","button"),c(y,"data-bs-target","#carouselExampleControls"),c(y,"data-bs-slide","next"),c(t,"id","carouselExampleControls"),c(t,"class","carousel slide"),c(t,"data-bs-ride","carousel"),K(t,"border-radius","0.5rem"),c(h,"class","svelte-kssepx"),c(E,"class","overview svelte-kssepx"),c(X,"class","svelte-kssepx"),c(me,"class","svelte-kssepx"),c(ke,"class","svelte-kssepx"),c(U,"class","svelte-kssepx"),c(ye,"class","svelte-kssepx"),c(u,"class","text-container"),c(e,"class","game-info svelte-kssepx")},m(C,x){A(C,e,x),f(e,t),f(t,s);for(let G=0;G<he.length;G+=1)he[G].m(s,null);f(t,l),f(t,r);for(let G=0;G<J.length;G+=1)J[G].m(r,null);f(t,n),f(t,o),f(o,i),f(o,d),f(o,v),f(v,p),f(t,T),f(t,y),f(y,I),f(y,q),f(y,w),f(w,R),f(e,k),f(e,u),f(u,h),f(h,B),f(u,S),f(u,E),f(E,N),f(u,M),f(u,U),f(U,X),f(X,L),f(U,H),f(U,de),f(U,ie),f(U,Z),f(U,be),f(U,me),f(me,ee),f(U,pe),f(U,Ee),f(U,ve),f(U,Ge),f(U,ke),f(ke,Ye),f(U,Me),f(U,He),f(u,Xe),f(u,ye),f(ye,Be),f(u,We),W&&W.m(u,null),_e=!0},p(C,[x]){if(x&4097){we=C[12];let G;for(G=0;G<we.length;G+=1){const Re=kt(C,we,G);J[G]?J[G].p(Re,x):(J[G]=yt(Re),J[G].c(),J[G].m(r,null))}for(;G<J.length;G+=1)J[G].d(1);J.length=we.length}(!_e||x&1)&&V!==(V=C[0].name+"")&&fe(B,V),(!_e||x&1)&&D!==(D=C[0].summary+"")&&fe(N,D),(!_e||x&1)&&Te!==(Te=C[0].aggregated_rating+"")&&fe(Be,Te),C[4]?W?(W.p(C,x),x&16&&z(W,1)):(W=wt(C),W.c(),z(W,1),W.m(u,null)):W&&(re(),Y(W,1,1,()=>{W=null}),ae())},i(C){_e||(z(W),St(()=>{Ie&&Ie.end(1),Pe=Bt(e,ft,{y:50,duration:400,delay:500}),Pe.start()}),_e=!0)},o(C){Y(W),Pe&&Pe.invalidate(),Ie=Ut(e,ft,{duration:500}),_e=!1},d(C){C&&m(e),Ce(he,C),Ce(J,C),W&&W.d(),C&&Ie&&Ie.end()}}}async function gs({fetch:a,params:e}){return{props:{searchedGame:(await(await a("https://https://cors-dun.vercel.app/https://api.igdb.com/v4/games/",{method:"POST",headers:{"Client-ID":"o5xvtlqq670n8hhzz05rvwpbr7hjt4",Authorization:"Bearer sd089a9azgftad7tbbaroxitu6x71k","X-Requested-With":"XMLHttpRequest"},body:`fields name, genres.name, aggregated_rating, platforms.name, platforms.id, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; where id = ${e.id};`})).json())[0]}}}function us(a,e,t){const s=Qe(),l=Ot(xe);let r="",n,o,i=!1,d,v;l.onAuthStateChanged(function(h){h?(t(4,i=!0),l.currentUser.uid,t(5,d=l.currentUser.displayName)):t(4,i=!1)});let{searchedGame:p}=e;p.id,console.log(p);const T=async()=>{let h=l.currentUser;const V=oe(s,"users");console.log("step 1");let B=ne(V,ce("uid","==",h.uid));console.log("step 2");const S=await ue(B);let E,D;S.forEach(M=>{E=M.id,D=M.data().backlog}),console.log([...D,p.id]);const N=qe(s,"users",E);await De(N,{backlog:[...D,p.id]}),console.log("all done"),t(2,n=!0)},y=async()=>{let h=l.currentUser;const V=oe(s,"users");let B=ne(V,ce("uid","==",h.uid));const S=await ue(B);let E,D;S.forEach(U=>{E=U.id,D=U.data().backlog});const N=D.indexOf(p.id);D.splice(N,1);const M=qe(s,"users",E);await De(M,{backlog:D}),console.log("all done"),t(2,n=!1)},I=async()=>{let h=l.currentUser;const V=oe(s,"users");console.log("step 1");let B=ne(V,ce("uid","==",h.uid));console.log("step 2");const S=await ue(B);let E,D;if(S.forEach(N=>{E=N.id,D=N.data().favourites}),D.length<=3){console.log([...D,p.id]);const N=qe(s,"users",E);await De(N,{favourites:[...D,p.id]}),console.log("all done"),t(3,o=!0)}else t(1,r="You can only favourite 4 games"),setTimeout(()=>{t(1,r=" ")},5e3)},q=async()=>{let h=l.currentUser;const V=oe(s,"users");let B=ne(V,ce("uid","==",h.uid));const S=await ue(B);let E,D;S.forEach(U=>{E=U.id,D=U.data().favourites});const N=D.indexOf(p.id);D.splice(N,1);const M=qe(s,"users",E);await De(M,{favourites:D}),console.log("all done"),t(3,o=!1)};At(async()=>{l.currentUser,l.onAuthStateChanged(async function(h){if(h){const V=oe(s,"users");let B=ne(V,ce("uid","==",h.uid));const S=await ue(B);let E,D,N;S.forEach(U=>{U.id,E=U.data().backlog,D=U.data().favourites,N=U.data().played}),E.indexOf(p.id)===-1?(console.log("no tin backlog"),t(2,n=!1)):t(2,n=!0),D.indexOf(p.id)===-1?(console.log("no tin backlog"),t(3,o=!1)):t(3,o=!0),N.indexOf(p.id)===-1&&console.log("no tin backlog");async function M(){let U=l.currentUser;if(U){const X=oe(s,"users");let L=ne(X,ce("uid","==",U.uid));const H=await ue(L);let de,ie;H.forEach(Z=>{Z.id,de=Z.data().displayName,ie=Z.data().name}),t(5,d=de),t(6,v=ie)}}return M(),E}})});let w=[];p.screenshots[0].image_id;let R=[];for(let h of p.screenshots)R.push(h.image_id);try{for(let h of p.involved_companies)w.push(" "+h.company.name)}catch{w.push("No companies found.")}let k=[];for(let h of p.platforms)k.push(" "+h.name);let u=[];try{for(let h of p.genres)u.push(" "+h.name)}catch{u.push("No genres found.")}return console.log(p),a.$$set=h=>{"searchedGame"in h&&t(0,p=h.searchedGame)},[p,r,n,o,i,d,v,T,y,I,q,w,R,k,u]}class bs extends je{constructor(e){super(),ze(this,e,us,cs,Le,{searchedGame:0})}}export{bs as default,gs as load};