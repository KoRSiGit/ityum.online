import{S as I,i as B,s as S,k as p,x as d,l as $,m as v,y as C,h as f,n as b,b as _,z as k,f as i,t as u,A as y,g as w,d as x,_ as D,a as E,c as P,C as V}from"../../../../chunks/index-9808abb9.js";import{C as q,B as z}from"../../../../chunks/ContentSection-31827fa1.js";function h(o,t,l){const a=o.slice();return a[2]=t[l],a}function g(o){let t,l,a;return t=new z({props:{title:o[2].title,coverImage:o[2].coverImage,excerpt:o[2].excerpt,slug:o[2].slug,tags:o[2].tags}}),{c(){d(t.$$.fragment),l=E()},l(e){C(t.$$.fragment,e),l=P(e)},m(e,r){k(t,e,r),_(e,l,r),a=!0},p:V,i(e){a||(i(t.$$.fragment,e),a=!0)},o(e){u(t.$$.fragment,e),a=!1},d(e){y(t,e),e&&f(l)}}}function A(o){let t,l,a=o[0],e=[];for(let n=0;n<a.length;n+=1)e[n]=g(h(o,a,n));const r=n=>u(e[n],1,1,()=>{e[n]=null});return{c(){t=p("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=$(n,"DIV",{class:!0});var c=v(t);for(let s=0;s<e.length;s+=1)e[s].l(c);c.forEach(f),this.h()},h(){b(t,"class","grid svelte-1mrrl9u")},m(n,c){_(n,t,c);for(let s=0;s<e.length;s+=1)e[s].m(t,null);l=!0},p(n,c){if(c&1){a=n[0];let s;for(s=0;s<a.length;s+=1){const m=h(n,a,s);e[s]?(e[s].p(m,c),i(e[s],1)):(e[s]=g(m),e[s].c(),i(e[s],1),e[s].m(t,null))}for(w(),s=a.length;s<e.length;s+=1)r(s);x()}},i(n){if(!l){for(let c=0;c<a.length;c+=1)i(e[c]);l=!0}},o(n){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)u(e[c]);l=!1},d(n){n&&f(t),D(e,n)}}}function j(o){let t,l,a;return l=new q({props:{title:"Все записи журнала",$$slots:{default:[A]},$$scope:{ctx:o}}}),{c(){t=p("div"),d(l.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var r=v(t);C(l.$$.fragment,r),r.forEach(f),this.h()},h(){b(t,"class","container")},m(e,r){_(e,t,r),k(l,t,null),a=!0},p(e,[r]){const n={};r&32&&(n.$$scope={dirty:r,ctx:e}),l.$set(n)},i(e){a||(i(l.$$.fragment,e),a=!0)},o(e){u(l.$$.fragment,e),a=!1},d(e){e&&f(t),y(l)}}}function F(o,t,l){let{data:a}=t,{posts:e}=a;return o.$$set=r=>{"data"in r&&l(1,a=r.data)},[e,a]}class J extends I{constructor(t){super(),B(this,t,F,j,S,{data:1})}}export{J as default};
