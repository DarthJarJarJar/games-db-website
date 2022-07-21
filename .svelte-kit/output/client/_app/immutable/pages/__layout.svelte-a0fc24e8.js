import{F as va,S as _t,i as bt,s as gt,l as la,g as re,n as oa,d as a,G as ia,e as s,k as _,t as E,c as l,a as n,m as b,h as y,b as t,H as e,I as se,J as Q,K as ca,L as ua,x as da,y as fa,z as ha,r as mt,p as vt,C as pa,M as _a,N as ba,O as ga,P as Ea,Q as ya}from"../chunks/index-12679752.js";import{g as na}from"../chunks/navigation-0e6511d1.js";import{g as wa,a as Sa}from"../chunks/fb-07f3109e.js";import"../chunks/singletons-d1fb5791.js";const Ia=()=>{const f=va("__svelte__");return{page:{subscribe:f.page.subscribe},navigating:{subscribe:f.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:f.navigating.subscribe}},session:f.session,updated:f.updated}},ma={subscribe(f){return Ia().page.subscribe(f)}};function La(f){let i,r,h,u,d,o,c;return{c(){i=s("form"),r=s("input"),h=_(),u=s("button"),d=E("Search"),this.h()},l(m){i=l(m,"FORM",{class:!0,role:!0});var v=n(i);r=l(v,"INPUT",{class:!0,type:!0,placeholder:!0,"aria-label":!0}),h=b(v),u=l(v,"BUTTON",{class:!0,type:!0});var w=n(u);d=y(w,"Search"),w.forEach(a),v.forEach(a),this.h()},h(){t(r,"class","form-control me-2"),t(r,"type","search"),t(r,"placeholder","Search Games"),t(r,"aria-label","Search Games"),t(u,"class","btn btn-outline-success"),t(u,"type","submit"),t(i,"class","d-flex svelte-u3yke7"),t(i,"role","search")},m(m,v){re(m,i,v),e(i,r),se(r,f[0]),e(i,h),e(i,u),e(u,d),o||(c=[Q(r,"input",f[7]),Q(u,"click",f[8]),Q(i,"submit",ca(f[2]))],o=!0)},p(m,v){v&1&&se(r,m[0])},d(m){m&&a(i),o=!1,ua(c)}}}function $a(f){let i,r,h,u,d,o,c;return{c(){i=s("form"),r=s("input"),h=_(),u=s("button"),d=E("Search"),this.h()},l(m){i=l(m,"FORM",{class:!0,role:!0});var v=n(i);r=l(v,"INPUT",{class:!0,type:!0,placeholder:!0,"aria-label":!0}),h=b(v),u=l(v,"BUTTON",{class:!0,type:!0});var w=n(u);d=y(w,"Search"),w.forEach(a),v.forEach(a),this.h()},h(){t(r,"class","form-control me-2"),t(r,"type","search"),t(r,"placeholder","Search Games"),t(r,"aria-label","Search Games"),t(u,"class","btn btn-outline-success"),t(u,"type","submit"),t(i,"class","d-flex svelte-u3yke7"),t(i,"role","search")},m(m,v){re(m,i,v),e(i,r),se(r,f[0]),e(i,h),e(i,u),e(u,d),o||(c=[Q(r,"input",f[5]),Q(u,"click",f[6]),Q(i,"submit",ca(f[3]))],o=!0)},p(m,v){v&1&&se(r,m[0])},d(m){m&&a(i),o=!1,ua(c)}}}function Aa(f){let i,r;function h(o,c){return c&2&&(i=null),i==null&&(i=!!o[1].includes("/search/")),i?$a:La}let u=h(f,-1),d=u(f);return{c(){d.c(),r=la()},l(o){d.l(o),r=la()},m(o,c){d.m(o,c),re(o,r,c)},p(o,[c]){u===(u=h(o,c))&&d?d.p(o,c):(d.d(1),d=u(o),d&&(d.c(),d.m(r.parentNode,r)))},i:oa,o:oa,d(o){d.d(o),o&&a(r)}}}function ka(f,i,r){let h,u;ia(f,ma,$=>r(4,u=$));let d="";function o(){na("/search/"+d),r(0,d="")}function c(){na("/search/"+d),r(0,d="")}function m(){d=this.value,r(0,d)}const v=()=>o;function w(){d=this.value,r(0,d)}const x=()=>o;return f.$$.update=()=>{f.$$.dirty&16&&r(1,h=u.url.pathname)},[d,h,o,c,u,m,v,w,x]}class xa extends _t{constructor(i){super(),bt(this,i,ka,Aa,gt,{})}}function Pa(f){let i,r,h,u,d,o,c,m,v,w,x,$,xe,Pe,P,I,Ue,Ne,p,le,O,Ge,De,oe,Ee,Be,ne,W,Te,Ce,ie,H,Oe,He,ce,R,Re,Fe,ue,F,Ve,Me,de,V,qe,ze,fe,ye,Ke,he,j,Xe,Je,pe,M,Qe,We,me,q,je,Ye,ve,z,Ze,et,_e,K,tt,at,Y,U,rt,st,N,L,lt,ot,k,be,Z,nt,it,G,D,ee,ct,ut,A,dt,te,B,T,ft,we,ht,X,ge,pt,Et;return X=new xa({}),{c(){i=s("nav"),r=s("div"),h=s("a"),u=E("Games DB"),d=_(),o=s("button"),c=s("span"),m=_(),v=s("div"),w=s("ul"),x=s("li"),$=s("a"),xe=E("Home"),Pe=_(),P=s("li"),I=s("a"),Ue=E("Browse"),Ne=_(),p=s("ul"),le=s("li"),O=s("a"),Ge=E("Upcoming Games"),De=_(),oe=s("li"),Ee=s("hr"),Be=_(),ne=s("li"),W=s("h6"),Te=E("Genres"),Ce=_(),ie=s("li"),H=s("a"),Oe=E("Adventure"),He=_(),ce=s("li"),R=s("a"),Re=E("Fighting"),Fe=_(),ue=s("li"),F=s("a"),Ve=E("RPGs"),Me=_(),de=s("li"),V=s("a"),qe=E("Racing"),ze=_(),fe=s("li"),ye=s("hr"),Ke=_(),he=s("li"),j=s("h6"),Xe=E("Platforms"),Je=_(),pe=s("li"),M=s("a"),Qe=E("PC"),We=_(),me=s("li"),q=s("a"),je=E("Playstation 5"),Ye=_(),ve=s("li"),z=s("a"),Ze=E("Xbox One"),et=_(),_e=s("li"),K=s("a"),tt=E("Nintendo Switch"),at=_(),Y=s("li"),U=s("a"),rt=E("Profile"),st=_(),N=s("li"),L=s("a"),lt=E("Search Users"),ot=_(),k=s("ul"),be=s("li"),Z=s("h6"),nt=E("Search users"),it=_(),G=s("div"),D=s("div"),ee=s("label"),ct=E("Username"),ut=_(),A=s("input"),dt=_(),te=s("div"),B=s("a"),T=s("button"),ft=E("Search"),ht=_(),da(X.$$.fragment),this.h()},l(S){i=l(S,"NAV",{class:!0});var J=n(i);r=l(J,"DIV",{class:!0});var ae=n(r);h=l(ae,"A",{class:!0,href:!0});var yt=n(h);u=y(yt,"Games DB"),yt.forEach(a),d=b(ae),o=l(ae,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var wt=n(o);c=l(wt,"SPAN",{class:!0}),n(c).forEach(a),wt.forEach(a),m=b(ae),v=l(ae,"DIV",{class:!0,id:!0});var Se=n(v);w=l(Se,"UL",{class:!0});var C=n(w);x=l(C,"LI",{class:!0});var St=n(x);$=l(St,"A",{class:!0,"aria-current":!0,href:!0});var It=n($);xe=y(It,"Home"),It.forEach(a),St.forEach(a),Pe=b(C),P=l(C,"LI",{class:!0});var Ie=n(P);I=l(Ie,"A",{class:!0,href:!0,id:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0});var Lt=n(I);Ue=y(Lt,"Browse"),Lt.forEach(a),Ne=b(Ie),p=l(Ie,"UL",{class:!0,"aria-labelledby":!0});var g=n(p);le=l(g,"LI",{});var $t=n(le);O=l($t,"A",{class:!0,href:!0});var At=n(O);Ge=y(At,"Upcoming Games"),At.forEach(a),$t.forEach(a),De=b(g),oe=l(g,"LI",{});var kt=n(oe);Ee=l(kt,"HR",{class:!0}),kt.forEach(a),Be=b(g),ne=l(g,"LI",{});var xt=n(ne);W=l(xt,"H6",{class:!0});var Pt=n(W);Te=y(Pt,"Genres"),Pt.forEach(a),xt.forEach(a),Ce=b(g),ie=l(g,"LI",{});var Ut=n(ie);H=l(Ut,"A",{class:!0,href:!0});var Nt=n(H);Oe=y(Nt,"Adventure"),Nt.forEach(a),Ut.forEach(a),He=b(g),ce=l(g,"LI",{});var Gt=n(ce);R=l(Gt,"A",{class:!0,href:!0});var Dt=n(R);Re=y(Dt,"Fighting"),Dt.forEach(a),Gt.forEach(a),Fe=b(g),ue=l(g,"LI",{});var Bt=n(ue);F=l(Bt,"A",{class:!0,href:!0});var Tt=n(F);Ve=y(Tt,"RPGs"),Tt.forEach(a),Bt.forEach(a),Me=b(g),de=l(g,"LI",{});var Ct=n(de);V=l(Ct,"A",{class:!0,href:!0});var Ot=n(V);qe=y(Ot,"Racing"),Ot.forEach(a),Ct.forEach(a),ze=b(g),fe=l(g,"LI",{});var Ht=n(fe);ye=l(Ht,"HR",{class:!0}),Ht.forEach(a),Ke=b(g),he=l(g,"LI",{});var Rt=n(he);j=l(Rt,"H6",{class:!0});var Ft=n(j);Xe=y(Ft,"Platforms"),Ft.forEach(a),Rt.forEach(a),Je=b(g),pe=l(g,"LI",{});var Vt=n(pe);M=l(Vt,"A",{class:!0,href:!0});var Mt=n(M);Qe=y(Mt,"PC"),Mt.forEach(a),Vt.forEach(a),We=b(g),me=l(g,"LI",{});var qt=n(me);q=l(qt,"A",{class:!0,href:!0});var zt=n(q);je=y(zt,"Playstation 5"),zt.forEach(a),qt.forEach(a),Ye=b(g),ve=l(g,"LI",{});var Kt=n(ve);z=l(Kt,"A",{class:!0,href:!0});var Xt=n(z);Ze=y(Xt,"Xbox One"),Xt.forEach(a),Kt.forEach(a),et=b(g),_e=l(g,"LI",{});var Jt=n(_e);K=l(Jt,"A",{class:!0,href:!0});var Qt=n(K);tt=y(Qt,"Nintendo Switch"),Qt.forEach(a),Jt.forEach(a),g.forEach(a),Ie.forEach(a),at=b(C),Y=l(C,"LI",{class:!0});var Wt=n(Y);U=l(Wt,"A",{class:!0,"aria-current":!0,href:!0});var jt=n(U);rt=y(jt,"Profile"),jt.forEach(a),Wt.forEach(a),st=b(C),N=l(C,"LI",{class:!0});var Le=n(N);L=l(Le,"A",{class:!0,href:!0,id:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0});var Yt=n(L);lt=y(Yt,"Search Users"),Yt.forEach(a),ot=b(Le),k=l(Le,"UL",{class:!0,"aria-labelledby":!0});var $e=n(k);be=l($e,"LI",{});var Zt=n(be);Z=l(Zt,"H6",{class:!0});var ea=n(Z);nt=y(ea,"Search users"),ea.forEach(a),Zt.forEach(a),it=b($e),G=l($e,"DIV",{class:!0});var Ae=n(G);D=l(Ae,"DIV",{class:!0});var ke=n(D);ee=l(ke,"LABEL",{for:!0});var ta=n(ee);ct=y(ta,"Username"),ta.forEach(a),ut=b(ke),A=l(ke,"INPUT",{class:!0,id:!0,autocomplete:!0}),ke.forEach(a),dt=b(Ae),te=l(Ae,"DIV",{class:!0});var aa=n(te);B=l(aa,"A",{href:!0,rel:!0});var ra=n(B);T=l(ra,"BUTTON",{type:!0,class:!0,id:!0});var sa=n(T);ft=y(sa,"Search"),sa.forEach(a),ra.forEach(a),aa.forEach(a),Ae.forEach(a),$e.forEach(a),Le.forEach(a),C.forEach(a),ht=b(Se),fa(X.$$.fragment,Se),Se.forEach(a),ae.forEach(a),J.forEach(a),this.h()},h(){t(h,"class","navbar-brand"),t(h,"href","/"),t(c,"class","navbar-toggler-icon"),t(o,"class","navbar-toggler"),t(o,"type","button"),t(o,"data-bs-toggle","collapse"),t(o,"data-bs-target","#navbarSupportedContent"),t(o,"aria-controls","navbarSupportedContent"),t(o,"aria-expanded","false"),t(o,"aria-label","Toggle navigation"),t($,"class","nav-link active"),t($,"aria-current","page"),t($,"href","/"),t(x,"class","nav-item"),t(I,"class","nav-link dropdown-toggle"),t(I,"href","#"),t(I,"id","navbarDropdown"),t(I,"role","button"),t(I,"data-bs-toggle","dropdown"),t(I,"aria-expanded","false"),t(O,"class","dropdown-item"),t(O,"href","/upcoming/"),t(Ee,"class","dropdown-divider"),t(W,"class","dropdown-header"),t(H,"class","dropdown-item"),t(H,"href","/genres/31"),t(R,"class","dropdown-item"),t(R,"href","/genres/4"),t(F,"class","dropdown-item"),t(F,"href","/genres/12"),t(V,"class","dropdown-item"),t(V,"href","/genres/10"),t(ye,"class","dropdown-divider"),t(j,"class","dropdown-header"),t(M,"class","dropdown-item"),t(M,"href","/platforms/6"),t(q,"class","dropdown-item"),t(q,"href","/platforms/167"),t(z,"class","dropdown-item"),t(z,"href","/platforms/49"),t(K,"class","dropdown-item"),t(K,"href","/platforms/130"),t(p,"class","dropdown-menu"),t(p,"aria-labelledby","navbarDropdown"),t(P,"class","nav-item dropdown"),t(U,"class","nav-link active"),t(U,"aria-current","page"),t(U,"href","/profile"),t(Y,"class","nav-item"),t(L,"class","nav-link dropdown-toggle"),t(L,"href","#"),t(L,"id","navbarDropdown"),t(L,"role","button"),t(L,"data-bs-toggle","dropdown"),t(L,"aria-expanded","false"),t(Z,"class","dropdown-header"),t(ee,"for","exampleDropdownFormEmail1"),t(A,"class","form-control svelte-1ycxdcs"),t(A,"id","usernamesearch"),t(A,"autocomplete","off"),t(D,"class","form-group"),t(T,"type","submit"),t(T,"class","btn btn-primary svelte-1ycxdcs"),t(T,"id","buttonsubmit"),t(B,"href",we=`/user/home/${f[0].toLowerCase()}`),t(B,"rel","external"),t(te,"class","form-group"),t(G,"class","form-stuff svelte-1ycxdcs"),t(k,"class","dropdown-menu"),t(k,"aria-labelledby","navbarDropdown"),t(N,"class","nav-item dropdown"),t(w,"class","navbar-nav me-auto mb-2 mb-lg-0"),t(v,"class","collapse navbar-collapse"),t(v,"id","navbarSupportedContent"),t(r,"class","container-fluid"),t(i,"class","navbar navbar-expand-lg ")},m(S,J){re(S,i,J),e(i,r),e(r,h),e(h,u),e(r,d),e(r,o),e(o,c),e(r,m),e(r,v),e(v,w),e(w,x),e(x,$),e($,xe),e(w,Pe),e(w,P),e(P,I),e(I,Ue),e(P,Ne),e(P,p),e(p,le),e(le,O),e(O,Ge),e(p,De),e(p,oe),e(oe,Ee),e(p,Be),e(p,ne),e(ne,W),e(W,Te),e(p,Ce),e(p,ie),e(ie,H),e(H,Oe),e(p,He),e(p,ce),e(ce,R),e(R,Re),e(p,Fe),e(p,ue),e(ue,F),e(F,Ve),e(p,Me),e(p,de),e(de,V),e(V,qe),e(p,ze),e(p,fe),e(fe,ye),e(p,Ke),e(p,he),e(he,j),e(j,Xe),e(p,Je),e(p,pe),e(pe,M),e(M,Qe),e(p,We),e(p,me),e(me,q),e(q,je),e(p,Ye),e(p,ve),e(ve,z),e(z,Ze),e(p,et),e(p,_e),e(_e,K),e(K,tt),e(w,at),e(w,Y),e(Y,U),e(U,rt),e(w,st),e(w,N),e(N,L),e(L,lt),e(N,ot),e(N,k),e(k,be),e(be,Z),e(Z,nt),e(k,it),e(k,G),e(G,D),e(D,ee),e(ee,ct),e(D,ut),e(D,A),se(A,f[0]),e(G,dt),e(G,te),e(te,B),e(B,T),e(T,ft),e(v,ht),ha(X,v,null),ge=!0,pt||(Et=Q(A,"input",f[2]),pt=!0)},p(S,[J]){J&1&&A.value!==S[0]&&se(A,S[0]),(!ge||J&1&&we!==(we=`/user/home/${S[0].toLowerCase()}`))&&t(B,"href",we)},i(S){ge||(mt(X.$$.fragment,S),ge=!0)},o(S){vt(X.$$.fragment,S),ge=!1},d(S){S&&a(i),pa(X),pt=!1,Et()}}}function Ua(f,i,r){let h;ia(f,ma,o=>r(1,h=o)),wa(Sa);let u="";function d(){u=this.value,r(0,u)}return f.$$.update=()=>{f.$$.dirty&2&&h.url.pathname},[u,h,d]}class Na extends _t{constructor(i){super(),bt(this,i,Ua,Pa,gt,{})}}function Ga(f){let i,r,h,u;r=new Na({});const d=f[1].default,o=_a(d,f,f[0],null);return{c(){i=_(),da(r.$$.fragment),h=_(),o&&o.c(),this.h()},l(c){ba('[data-svelte="svelte-19gn4ao"]',document.head).forEach(a),i=b(c),fa(r.$$.fragment,c),h=b(c),o&&o.l(c),this.h()},h(){document.title="Games DB"},m(c,m){re(c,i,m),ha(r,c,m),re(c,h,m),o&&o.m(c,m),u=!0},p(c,[m]){o&&o.p&&(!u||m&1)&&ga(o,d,c,c[0],u?ya(d,c[0],m,null):Ea(c[0]),null)},i(c){u||(mt(r.$$.fragment,c),mt(o,c),u=!0)},o(c){vt(r.$$.fragment,c),vt(o,c),u=!1},d(c){c&&a(i),pa(r,c),c&&a(h),o&&o.d(c)}}}function Da(f,i,r){let{$$slots:h={},$$scope:u}=i;return f.$$set=d=>{"$$scope"in d&&r(0,u=d.$$scope)},[u,h]}class Ha extends _t{constructor(i){super(),bt(this,i,Da,Ga,gt,{})}}export{Ha as default};