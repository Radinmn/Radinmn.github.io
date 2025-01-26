import{j as a}from"./jsx-runtime.CLpGMVip.js";import{B as p,F as x,a as f}from"./button.D1YLL_n1.js";import{r as s}from"./index.D15Q2Owl.js";import"./iconBase.FQPqCX9B.js";import"./index.BztePVNi.js";/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:l="",children:n,iconNode:d,...m},h)=>s.createElement("svg",{ref:h,...w,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:c("lucide",l),...m},[...d.map(([u,k])=>s.createElement(u,k)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(e,t)=>{const o=s.forwardRef(({className:r,...l},n)=>s.createElement(b,{ref:n,iconNode:t,className:c(`lucide-${g(e)}`,r),...l}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],j=i("Moon",y);/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],N=i("Sun",v);function M(){const[e,t]=s.useState("theme-light"),o=()=>{const r=e==="dark"?"theme-light":"dark";t(r),localStorage.setItem("theme",r)};return s.useEffect(()=>{const r=document.documentElement.classList.contains("dark");t(r?"dark":"theme-light")},[]),s.useEffect(()=>{const r=e==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList[r?"add":"remove"]("dark")},[e]),a.jsx(p,{variant:"outline",size:"icon",className:"rounded-full",onClick:o,children:e==="theme-light"?a.jsx(j,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}):a.jsx(N,{className:"h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})})}const E=[{name:"Github",url:"https://github.com/Radinmn",icon:x},{name:"LinkedIn",url:"https://www.linkedin.com/in/radin-mydn/",icon:f}],A=()=>a.jsx("nav",{className:"z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md",children:a.jsxs("ul",{className:"flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl",children:[E.map((e,t)=>a.jsx("li",{className:"hover:scale-90 duration-150",children:a.jsx("a",{href:e.url,target:"_blank",rel:"noreferrer",children:a.jsx(e.icon,{})})},t)),a.jsx("li",{children:a.jsx(M,{})})]})});export{A as default};
