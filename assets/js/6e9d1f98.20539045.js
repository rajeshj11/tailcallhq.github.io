"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3001],{695:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),s=i(8453);const o={title:"Telemetry",description:"Discover how to elevate application observability with Tailcall's comprehensive guide on implementing telemetry using the OpenTelemetry specification. This guide provides a detailed overview of using Rust crates such as rust-opentelemetry, tracing, and tracing-opentelemetry for effective data collection and export. It includes specific examples and best practices for tracing significant operations, naming spans accurately, and adhering to semantic conventions. Perfect for developers seeking to enhance monitoring and debugging capabilities in their applications, this resource is your go-to for integrating advanced observability features efficiently. Learn more about how to optimize your development process by visiting Tailcall's contributor guidelines."},r=void 0,a={id:"contributors/telemetry",title:"Telemetry",description:"Discover how to elevate application observability with Tailcall's comprehensive guide on implementing telemetry using the OpenTelemetry specification. This guide provides a detailed overview of using Rust crates such as rust-opentelemetry, tracing, and tracing-opentelemetry for effective data collection and export. It includes specific examples and best practices for tracing significant operations, naming spans accurately, and adhering to semantic conventions. Perfect for developers seeking to enhance monitoring and debugging capabilities in their applications, this resource is your go-to for integrating advanced observability features efficiently. Learn more about how to optimize your development process by visiting Tailcall's contributor guidelines.",source:"@site/docs/contributors/telemetry.md",sourceDirName:"contributors",slug:"/contributors/telemetry",permalink:"/docs/contributors/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/contributors/telemetry.md",tags:[],version:"current",lastUpdatedAt:1720142878e3,frontMatter:{title:"Telemetry",description:"Discover how to elevate application observability with Tailcall's comprehensive guide on implementing telemetry using the OpenTelemetry specification. This guide provides a detailed overview of using Rust crates such as rust-opentelemetry, tracing, and tracing-opentelemetry for effective data collection and export. It includes specific examples and best practices for tracing significant operations, naming spans accurately, and adhering to semantic conventions. Perfect for developers seeking to enhance monitoring and debugging capabilities in their applications, this resource is your go-to for integrating advanced observability features efficiently. Learn more about how to optimize your development process by visiting Tailcall's contributor guidelines."},sidebar:"docs",previous:{title:"Mutability",permalink:"/docs/contributors/mutability"},next:{title:"Micro Benchmarks",permalink:"/docs/contributors/micro-benchmark"}},c={},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["At Tailcall, we adhere to high observability standards in line with the ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io",children:"OpenTelemetry"})," specification. Our implementation utilizes several key Rust crates:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.rs/opentelemetry/latest/opentelemetry/index.html",children:"rust-opentelemetry"})," and associated crates are used to support the collection and export of telemetry data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.rs/tracing/latest/tracing/index.html",children:"tracing"})," and ",(0,n.jsx)(t.a,{href:"https://docs.rs/tracing-opentelemetry/latest/tracing_opentelemetry/index.html",children:"tracing-opentelemetry"})," facilitate the definition of logs and traces. Integration with OpenTelemetry allows for the automatic transfer of this data to the OpenTelemetry system. This layered approach ensures that the ",(0,n.jsx)(t.code,{children:"tracing"})," library, which is effective across various scenarios, can also function as a standalone telemetry system for logging when OpenTelemetry integration is not required."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When developing any features that necessitate observability, consider the following guidelines:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Implement traces for tasks that represent a significant operation. This practice aids in the efficient diagnosis of issues and performance bottlenecks."}),"\n",(0,n.jsxs)(t.li,{children:["Name spans clearly and specifically, adhering to the guidelines outlined in the ",(0,n.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md#span",children:"OpenTelemetry specifications"}),". Avoid names that introduce a high cardinality of potential values."]}),"\n",(0,n.jsxs)(t.li,{children:["Due to the constraints of tracing libraries, span names must be static strings. This limitation can be overcome by adding an extra field named ",(0,n.jsx)(t.code,{children:"otel.name"})," to provide more dynamic descriptions (see the ",(0,n.jsx)(t.a,{href:"https://github.com/tokio-rs/tracing-opentelemetry",children:"tracing-opentelemetry"})," documentation for more details)."]}),"\n",(0,n.jsxs)(t.li,{children:["Attribute naming should follow OpenTelemetry's ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/semantic-conventions/",children:"semantic conventions"}),". Utilize constants available in the ",(0,n.jsx)(t.a,{href:"https://docs.rs/opentelemetry-semantic-conventions/latest/opentelemetry_semantic_conventions/index.html",children:"opentelemetry_semantic_conventions"})," crate for standardized attribute names."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);