"use strict";(self.webpackChunklisp_docs_github_io=self.webpackChunklisp_docs_github_io||[]).push([[6103],{5203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(7294);var i=t(6010),r=t(1944),l=t(5281),s=t(9460),o=t(1460),a=t(390),c=t(5999),u=t(2244),d=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,d.jsx)(u.Z,{...t,subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,d.jsx)(u.Z,{...n,subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function f(){const{assets:e,metadata:n}=(0,s.C)(),{title:t,description:i,date:l,tags:o,authors:a,frontMatter:c}=n,{keywords:u}=c,m=e.image??c.image;return(0,d.jsxs)(r.d,{title:t,description:i,keywords:u,image:m,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:l}),a.some((e=>e.url))&&(0,d.jsx)("meta",{property:"article:author",content:a.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=t(9407),g=t(2212);function p(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:r}=(0,s.C)(),{nextItem:l,prevItem:c,frontMatter:u,unlisted:f}=i,{hide_table_of_contents:p,toc_min_heading_level:x,toc_max_heading_level:v}=u;return(0,d.jsxs)(o.Z,{sidebar:n,toc:!p&&r.length>0?(0,d.jsx)(h.Z,{toc:r,minHeadingLevel:x,maxHeadingLevel:v}):void 0,children:[f&&(0,d.jsx)(g.Z,{}),(0,d.jsx)(a.Z,{children:t}),(l||c)&&(0,d.jsx)(m,{nextItem:l,prevItem:c})]})}function x(e){const n=e.content;return(0,d.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(r.FG,{className:(0,i.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage),children:[(0,d.jsx)(f,{}),(0,d.jsx)(p,{sidebar:e.sidebar,children:(0,d.jsx)(n,{})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var i=t(6010),r=t(3743);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(5893);const o="table-of-contents__link toc-highlight",a="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,i.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(r.Z,{...t,linkClassName:o,linkActiveClassName:a})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>g});var i=t(7294),r=t(6668);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function a(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let r=n;r<=t;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),c=a(o,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var d=t(9960),m=t(5893);function f(e){let{toc:n,className:t,linkClassName:i,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:d,...f}=e;const g=(0,r.L)(),p=c??g.tableOfContents.minHeadingLevel,x=d??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:p,maxHeadingLevel:x});return u((0,i.useMemo)((()=>{if(o&&a)return{linkClassName:o,linkActiveClassName:a,minHeadingLevel:p,maxHeadingLevel:x}}),[o,a,p,x])),(0,m.jsx)(h,{toc:v,className:t,linkClassName:o,...f})}},2212:(e,n,t)=>{t.d(n,{Z:()=>f});t(7294);var i=t(6010),r=t(5999),l=t(5742),s=t(5893);function o(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(l.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var u=t(5281),d=t(9047);function m(e){let{className:n}=e;return(0,s.jsx)(d.Z,{type:"caution",title:(0,s.jsx)(o,{}),className:(0,i.Z)(n,u.k.common.unlistedBanner),children:(0,s.jsx)(a,{})})}function f(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},9199:(e,n,t)=>{t.d(n,{Z:()=>u});t(7294);var i=t(8750),r=t(9960),l=t(6971),s=t(1262),o=(t(8846),t(5893));function a(e){let{children:n,styled:t,term:i}=e;function s(){if(null!=i&&"string"==typeof i){const e=(0,l.uJ)(i);if(null!=e)return e}if("string"==typeof n&&null!==n){if(n.endsWith("s")){const e=n.trim(),t=e.substring(0,e.length-1);return(0,l.uJ)(e)||(0,l.uJ)(t)}{const e=n.trim();return(0,l.uJ)(e)}}return null}function a(){if(null!=i&&"string"==typeof i)return i.trim();if("string"==typeof n&&null!==n){if(n.endsWith("s")){const e=n.trim(),t=e.substring(0,e.length-1);return(0,l.uJ)(e)?e:(0,l.uJ)(t)?t:null}return n.trim()}return null}function c(){const e=a(),t=s();return null===t?(0,o.jsx)("span",{children:n}):(0,o.jsx)(r.Z,{to:t,children:(0,o.jsx)(l.FO,{term:e,children:n})})}return function(){const e=a();return null!=t&&null!==e&&(0,l.mg)(e)?(0,o.jsx)("i",{children:c()}):c()}()}function c(e){let{children:n,styled:t,term:i}=e;function s(){if(null!=i&&"string"==typeof i){const e=(0,l.cp)(i);if(null!=e)return e}if("string"==typeof n&&null!==n){if(n.endsWith("s")){const e=n.trim(),t=e.substring(0,e.length-1);return(0,l.cp)(e)||(0,l.cp)(t)}{const e=n.trim();return(0,l.cp)(e)}}return null}function a(){if(null!=i&&"string"==typeof i)return i.trim();if("string"==typeof n&&null!==n){if(n.endsWith("s")){const e=n.trim(),t=e.substring(0,e.length-1);return(0,l.cp)(e)?e:(0,l.cp)(t)?t:null}return n.trim()}return null}function c(){a();const e=s();return null===e?(0,o.jsx)("span",{children:n}):(0,o.jsx)(r.Z,{to:e,children:n})}return function(){const e=a();return null!=t&&null!==e&&(0,l.F$)(e)?(0,o.jsx)("b",{children:c()}):c()}()}const u={...i.Z,DictionaryLink:function(e){let{children:n,styled:t,term:i}=e;return(0,o.jsx)(s.Z,{fallback:(0,o.jsx)("span",{children:n}),children:()=>(0,o.jsx)(c,{term:i,styled:t,children:n})})},GlossaryTerm:function(e){let{children:n,styled:t,term:i}=e;return(0,o.jsx)(s.Z,{fallback:(0,o.jsx)("span",{children:n}),children:()=>(0,o.jsx)(a,{term:i,styled:t,children:n})})}}}}]);