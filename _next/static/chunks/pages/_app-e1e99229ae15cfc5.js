(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{6170:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(144)}])},5157:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(7677),l=n(4848),i=r._(n(6540)),s=n(6847),o=n(7785),a=n(2772),c=n(1278),u=n(6185),d=n(7644),f=n(6334),h=n(5157),p=n(296),x=n(1903),m=new Set;function g(e,t,n,r){if((0,o.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let l=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(l))return;m.add(l)}e.prefetch(t,n,r).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:j,prefetch:b=null,passHref:w,replace:y,shallow:k,scroll:_,locale:M,onClick:C,onMouseEnter:N,onTouchStart:P,legacyBehavior:q=!1,...A}=e;n=j,q&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let O=i.default.useContext(d.RouterContext),E=!1!==b,{href:T,as:L}=i.default.useMemo(()=>{if(!O){let e=v(a);return{href:e,as:m?v(m):e}}let[e,t]=(0,s.resolveHref)(O,a,!0);return{href:e,as:m?(0,s.resolveHref)(O,m):t||e}},[O,a,m]),S=i.default.useRef(T),Z=i.default.useRef(L);q&&(r=i.default.Children.only(n));let H=q?r&&"object"==typeof r&&r.ref:t,[I,R,z]=(0,f.useIntersection)({rootMargin:"200px"}),B=i.default.useCallback(e=>{(Z.current!==L||S.current!==T)&&(z(),Z.current=L,S.current=T),I(e)},[L,T,z,I]),U=(0,x.useMergedRef)(B,H);i.default.useEffect(()=>{O&&R&&E&&g(O,T,L,{locale:M})},[L,T,R,M,E,null==O?void 0:O.locale,O]);let D={ref:U,onClick(e){q||"function"!=typeof C||C(e),q&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,n,r,l,i,s,a){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,o.isLocalURL)(n))||(e.preventDefault(),(()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:a,scroll:e}):t[l?"replace":"push"](r||n,{scroll:e})})())}(e,O,T,L,y,k,_,M)},onMouseEnter(e){q||"function"!=typeof N||N(e),q&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&g(O,T,L,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){q||"function"!=typeof P||P(e),q&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&g(O,T,L,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(L))D.href=L;else if(!q||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&(0,h.getDomainLocale)(L,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);D.href=t||(0,p.addBasePath)((0,u.addLocale)(L,e,null==O?void 0:O.defaultLocale))}return q?i.default.cloneElement(r,D):(0,l.jsx)("a",{...A,...D,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(6540),l=n(4959),i="function"==typeof IntersectionObserver,s=new Map,o=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!i,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:l,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let l=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:l},o.push(n),s.set(n,t),t}(n);return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),s.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!u){let e=(0,l.requestIdleCallback)(()=>d(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,n,t,u,f.current]),[h,u,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let r=n(6540);function l(e,t){let n=(0,r.useRef)(()=>{}),l=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),l.current()):(n.current=i(e,r),l.current=i(t,r))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3345:()=>{},417:()=>{},1453:()=>{},7418:()=>{},2916:()=>{},3368:(e,t,n)=>{e.exports=n(6085)},1106:(e,t,n)=>{e.exports=n(6397)},7894:(e,t,n)=>{"use strict";n.d(t,{Kq:()=>l,ob:()=>i});let r=(0,n(6540).createContext)([{},()=>{}]),l=r.Provider;r.Consumer;let i=r},845:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});let r=JSON.parse('{"author":{"name":"Brian Holt","company":"Neon"},"title":"Next.js Course Starter Kit","subtitle":"for Frontend Masters","frontendMastersLink":"https://frontendmasters.com/courses/complete-react-v9/","social":{"linkedin":"btholt","github":"btholt","twitter":"holtbt","bluesky":"brianholt.me"},"description":"A starter kit for making really amazing courses, optimized for Frontend Masters","keywords":["your","Google","keywords","here"],"productionBaseUrl":"/next-course-starter","csvPath":"./out/lessons.csv"}'),l={author:{name:"An Author",company:"An Author's Company"},title:"A Superb Course",subtitle:"That Teaches Nice Things",frontendMastersLink:"",description:"A nice course for nice people.",keywords:["a nice course","for people","to learn","nice things"],social:{linkedin:"btholt",github:"btholt",twitter:"holtbt",bluesky:"brianholt.me"},productionBaseUrl:"/"};function i(){return Object.assign({},l,r)}},144:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(4848),l=n(3368);n(3345),n(417),n(2916),n(7418),n(1453);var i=n(6540);function s(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-github-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"github-social",clipPath:"url(#clip-github-social)",children:(0,r.jsxs)("g",{id:"Group_272","data-name":"Group 272",transform:"translate(13522.5 -6994)",children:[(0,r.jsx)("path",{id:"Subtraction_33","data-name":"Subtraction 33",d:"M-24967.5,8041a15.9,15.9,0,0,1-11.312-4.688A15.893,15.893,0,0,1-24983.5,8025a15.893,15.893,0,0,1,4.689-11.315A15.894,15.894,0,0,1-24967.5,8009a15.894,15.894,0,0,1,11.313,4.686A15.893,15.893,0,0,1-24951.5,8025a15.893,15.893,0,0,1-4.689,11.313A15.9,15.9,0,0,1-24967.5,8041Zm-3.781-4.571h0v3.918h7.895v-6.665a1.836,1.836,0,0,0-1.2-1.718c5.1-.617,7.467-2.975,7.467-7.424a7.176,7.176,0,0,0-1.637-4.728,6.74,6.74,0,0,0,.275-1.812,4.34,4.34,0,0,0-.52-2.452.574.574,0,0,0-.359-.1c-1.061,0-3.465,1.411-3.936,1.694a16.644,16.644,0,0,0-4.2-.489,16.379,16.379,0,0,0-3.969.445c-.846-.5-2.91-1.649-3.859-1.649a.566.566,0,0,0-.354.095,4.3,4.3,0,0,0-.521,2.452,6.7,6.7,0,0,0,.244,1.718,7.346,7.346,0,0,0-1.6,4.822,7.263,7.263,0,0,0,1.533,4.985c1.193,1.359,3.115,2.165,5.871,2.464a1.826,1.826,0,0,0-1.129,1.693v.5h0l-.006,0a7.121,7.121,0,0,1-2.033.363,2.608,2.608,0,0,1-.965-.158,4.438,4.438,0,0,1-1.836-1.881,2.361,2.361,0,0,0-1.248-1.091,3.472,3.472,0,0,0-1.217-.3.584.584,0,0,0-.545.224.282.282,0,0,0,.027.367,1.875,1.875,0,0,0,.447.307,4.732,4.732,0,0,1,.561.355,10.726,10.726,0,0,1,1.682,2.755c.043.092.078.163.105.217a3.876,3.876,0,0,0,2.42,1.185,6.036,6.036,0,0,0,.607.025c.875,0,1.988-.124,2-.125Z",transform:"translate(11461 -1015)",fill:"var(--footer-icons)"}),(0,r.jsxs)("g",{id:"Ellipse_670","data-name":"Ellipse 670",transform:"translate(-13522.5 6994)",fill:"none",stroke:"var(--footer-icons)",strokeWidth:"1",children:[(0,r.jsx)("circle",{cx:"16",cy:"16",r:"16",stroke:"none"}),(0,r.jsx)("circle",{cx:"16",cy:"16",r:"15.5",fill:"none"})]})]})})]})}function o(){return(0,r.jsx)("svg",{fill:"none",height:"100%",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0.254 0.25 500 451.95400000000006",children:(0,r.jsx)("path",{d:"M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z",fill:"var(--footer-icons)"})})}function a(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-linkedin-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"linkedin-social",clipPath:"url(#clip-linkedin-social)",children:(0,r.jsx)("g",{id:"Group_270","data-name":"Group 270",transform:"translate(-86.349 -633.073)",children:(0,r.jsx)("path",{id:"Path_375","data-name":"Path 375",d:"M115.789,633.073a2.324,2.324,0,0,1,1.682.676,2.194,2.194,0,0,1,.695,1.627V662.8a2.131,2.131,0,0,1-.695,1.609,2.314,2.314,0,0,1-1.646.659H88.69a2.307,2.307,0,0,1-1.646-.659,2.128,2.128,0,0,1-.695-1.609V635.376a2.19,2.19,0,0,1,.695-1.627,2.322,2.322,0,0,1,1.682-.676h27.063Zm-20.224,9.672a2.561,2.561,0,0,0,0-3.584,2.658,2.658,0,0,0-1.938-.712,2.724,2.724,0,0,0-1.957.712,2.371,2.371,0,0,0-.75,1.792,2.4,2.4,0,0,0,.731,1.792,2.605,2.605,0,0,0,1.9.713h.037A2.7,2.7,0,0,0,95.565,642.745ZM96,645.434H91.213V659.88H96Zm17.3,6.144a7.007,7.007,0,0,0-1.573-4.9,5.68,5.68,0,0,0-6.839-.769,5.663,5.663,0,0,0-1.426,1.573v-2.048H98.674q.036.841,0,7.717v6.728h4.791V651.8a3.592,3.592,0,0,1,.146-1.17,2.913,2.913,0,0,1,.878-1.206,2.429,2.429,0,0,1,1.609-.549,2.108,2.108,0,0,1,1.865.914,4.265,4.265,0,0,1,.549,2.341v7.752H113.3Z",fill:"var(--footer-icons)"})})})]})}function c(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -3.268 64 68.414",width:"38",height:"100%",children:(0,r.jsx)("path",{fill:"var(--footer-icons)",d:"M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"})})}function u(){let[e,t]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches;t(e||(n?"dark":"light"))},[]),(0,i.useEffect)(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]),(0,r.jsx)("button",{onClick:()=>{t(e=>"light"===e?"dark":"light")},"aria-label":"Activate ".concat("light"===e?"dark":"light"," mode"),title:"Activate ".concat("light"===e?"dark":"light"," mode"),className:"theme-toggle",children:"light"===e?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36px",height:"100%",viewBox:"0 -960 960 960",fill:"var(--text-footer)",role:"img",children:[(0,r.jsx)("title",{children:"Dark Mode Icon"}),(0,r.jsx)("path",{d:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Z"})]}):(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36px",height:"100%",viewBox:"0 -960 960 960",fill:"var(--text-footer)",role:"img",children:[(0,r.jsx)("title",{children:"Light Mode Icon"}),(0,r.jsx)("path",{d:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"})]})})}function d(e){let{twitter:t,linkedin:n,github:l,bluesky:i}=e;return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("ul",{className:"socials",children:[t?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://twitter.com/".concat(t),children:(0,r.jsx)(o,{})})}):null,i?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://bsky.app/profile/".concat(i),children:(0,r.jsx)(c,{})})}):null,l?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://github.com/".concat(l),children:(0,r.jsx)(s,{})})}):null,n?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://linkedin.com/in/".concat(n),children:(0,r.jsx)(a,{})})}):null,(0,r.jsx)("li",{className:"social",children:(0,r.jsxs)("div",{className:"terms",children:[(0,r.jsx)("p",{children:"Content Licensed Under CC-BY-NC-4.0"}),(0,r.jsx)("p",{children:"Code Samples and Exercises Licensed Under Apache 2.0"}),(0,r.jsxs)("p",{children:["Site Designed by"," ",(0,r.jsx)("a",{href:"https://www.alexdanielson.com/",children:"Alex Danielson"})]})]})})]}),(0,r.jsx)("div",{className:"theme-icons",children:(0,r.jsx)(u,{})})]})}var f=n(1106),h=n(7894);let p=(0,i.createContext)([{},()=>{}]),x=p.Provider;function m(e){let[{section:t,title:n,icon:l}]=(0,i.useContext)(h.ob),{frontendMastersLink:s}=(0,i.useContext)(p);return(0,r.jsxs)("header",{className:"navbar",children:[(0,r.jsx)("h1",{className:"navbar-brand",children:(0,r.jsx)(f,{href:"/",children:e.title})}),(0,r.jsxs)("div",{className:"navbar-info",children:[s?(0,r.jsx)("a",{href:s,className:"cta-btn",children:"Watch on Frontend Masters"}):null,t?(0,r.jsxs)("h2",{children:[t," ",(0,r.jsx)("i",{className:"fas fa-".concat(l)})," ",n]}):null]})]})}p.Consumer;var g=n(845);function v(e){let{children:t}=e,n=(0,g.A)(),l=(0,i.useState)({});return(0,r.jsx)(x,{value:n,children:(0,r.jsx)(h.Kq,{value:l,children:(0,r.jsxs)("div",{className:"remix-app",children:[(0,r.jsx)(m,{title:n.title}),(0,r.jsx)("div",{className:"content-container",children:(0,r.jsx)("div",{className:"main",children:t})}),(0,r.jsx)(d,{twitter:n.social.twitter,github:n.social.github,linkedin:n.social.linkedin,bluesky:n.social.bluesky})]})})})}function j(e){let{children:t}=e;return(0,r.jsx)(v,{children:t})}function b(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(j,{children:[(0,r.jsxs)(l,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("/next-course-starter","/images/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("/next-course-starter","/images/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/next-course-starter","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/next-course-starter","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/next-course-starter","/images/favicon.ico")})]}),(0,r.jsx)(t,{...n})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6170),t(8440))),_N_E=e.O()}]);