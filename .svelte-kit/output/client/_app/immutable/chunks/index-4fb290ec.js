function b(){}const J=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function x(t){t.forEach(K)}function B(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Pt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Tt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):b;const g=new Set;function X(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(X)}function Y(t){let e;return g.size===0&&F(X),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let D=!1;function dt(){D=!0}function ht(){D=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:mt(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return bt(Z(t),e),e.sheet}function bt(t,e){yt(t.head||t,e)}function xt(t,e){if(D){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){D&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Wt(){return H(" ")}function Gt(){return H("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t){return t===""?null:+t}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return nt(t,e,n,tt)}function Xt(t,e,n){return nt(t,e,n,wt)}function kt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Yt(t){return kt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e){t.value=e==null?"":e}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return q.set(t,n),n}function it(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const A=e+(n-e)*u(m);c+=m*100+`%{${s(A,1-A)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${o}`,_=Z(t),{stylesheet:d,rules:h}=q.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){F(()=>{M||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let E;function v(t){E=t}function rt(){if(!E)throw new Error("Function called outside component initialization");return E}function re(t){rt().$$.on_mount.push(t)}function se(t){rt().$$.after_update.push(t)}function le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],G=[],C=[],T=[],st=Promise.resolve();let z=!1;function lt(){z||(z=!0,st.then(ct))}function ce(){return lt(),st}function k(t){C.push(t)}function ue(t){T.push(t)}const P=new Set;let S=0;function ct(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(w.length);for(;T.length;)T.pop()();z=!1,P.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function ut(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function oe(){y={r:0,c:[],p:y}}function ae(){y.r||x(y.c),y=y.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function _e(t,e,n){let i=e(t,n),r=!1,u,s,o=0;function l(){u&&L(t,u)}function c(){const{delay:a=0,duration:_=300,easing:d=J,tick:h=b,css:p}=i||ot;p&&(u=it(t,0,1,_,a,d,p,o++)),h(0,1);const m=V()+a,A=m+_;s&&s.abort(),r=!0,k(()=>R(t,!0,"start")),s=Y(O=>{if(r){if(O>=A)return h(1,0),R(t,!0,"end"),l(),r=!1;if(O>=m){const I=d((O-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,L(t),B(i)?(i=i(),ut().then(c)):c())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function de(t,e,n){let i=e(t,n),r=!0,u;const s=y;s.r+=1;function o(){const{delay:l=0,duration:c=300,easing:f=J,tick:a=b,css:_}=i||ot;_&&(u=it(t,1,0,c,l,f,_));const d=V()+l,h=d+c;k(()=>R(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),R(t,!1,"end"),--s.r||x(s.c),!1;if(p>=d){const m=f((p-d)/c);a(1-m,m)}}return r})}return B(i)?ut().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),r&&(u&&L(t,u),r=!1)}}}function he(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||k(()=>{const l=u.map(K).filter(B);s?s.push(...l):x(l),t.$$.on_mount=[]}),o.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,r,u,s,o=[-1]){const l=E;v(t);const c=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Dt(t,a)),_}):[],c.update(),f=!0,x(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const a=vt(e.target);c.fragment&&c.fragment.l(a),a.forEach($t)}else c.fragment&&c.fragment.c();e.intro&&qt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),ct()}v(l)}class ge{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{b as A,Lt as B,xt as C,te as D,Jt as E,Kt as F,x as G,Tt as H,ie as I,Bt as J,Ft as K,zt as L,k as M,de as N,It as O,_e as P,Pt as Q,wt as R,ge as S,Xt as T,ne as U,le as V,G as W,he as X,ue as Y,Ut as Z,B as _,Wt as a,Ht as b,Yt as c,ae as d,Gt as e,qt as f,oe as g,$t as h,ye as i,se as j,tt as k,Vt as l,vt as m,Qt as n,re as o,ee as p,H as q,kt as r,Ot as s,fe as t,Zt as u,me as v,pe as w,Mt as x,Rt as y,ce as z};
