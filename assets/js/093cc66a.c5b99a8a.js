"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1664],{3878:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var t=i(4848),a=i(8453);const c={title:"Using HTTP Cache",description:"A comprehensive guide to leverage HTTP cache for REST APIs using Tailcall.",slug:"graphql-http-cache-guide-tailcall",sidebar_label:"HTTP Cache"},s=void 0,r={id:"http-cache",title:"Using HTTP Cache",description:"A comprehensive guide to leverage HTTP cache for REST APIs using Tailcall.",source:"@site/docs/http-cache.md",sourceDirName:".",slug:"/graphql-http-cache-guide-tailcall",permalink:"/docs/graphql-http-cache-guide-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/http-cache.md",tags:[],version:"current",lastUpdatedAt:1720149515e3,frontMatter:{title:"Using HTTP Cache",description:"A comprehensive guide to leverage HTTP cache for REST APIs using Tailcall.",slug:"graphql-http-cache-guide-tailcall",sidebar_label:"HTTP Cache"},sidebar:"docs",previous:{title:"Telemetry",permalink:"/docs/graphql-telemetry-guide"},next:{title:"Log Levels",permalink:"/docs/graphql-logging-levels-tailcall"}},l={},h=[{value:"Understanding HTTP Caching",id:"understanding-http-caching",level:3},{value:"Enabling HTTP Caching",id:"enabling-http-caching",level:3},{value:"Cache-Control headers in responses",id:"cache-control-headers-in-responses",level:3},{value:"Best Practices for Enhancing REST API Performance on GraphQL",id:"best-practices-for-enhancing-rest-api-performance-on-graphql",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"HTTP Caching in Tailcall is designed to enhance performance and minimize the frequency of requests to upstream services by caching HTTP responses. This guide explains the concept, benefits, and how to effectively implement HTTP caching within Tailcall."}),"\n",(0,t.jsx)(n.h3,{id:"understanding-http-caching",children:"Understanding HTTP Caching"}),"\n",(0,t.jsx)(n.p,{children:"HTTP Caching involves saving copies of HTTP responses to serve identical future requests directly from the cache, bypassing the need for new API calls. This reduces latency, conserves bandwidth, and alleviates the load on upstream services by utilizing a cache keyed by request URLs and headers."}),"\n",(0,t.jsxs)(n.p,{children:["By default, HTTP caching is turned off in Tailcall. Enabling it requires setting the ",(0,t.jsx)(n.code,{children:"httpCache"})," parameter to integer value which is greater than 0 in the ",(0,t.jsx)(n.code,{children:"@upstream"})," configuration. Tailcall employs a in-memory ",(0,t.jsx)(n.em,{children:"Least_Recently_Used"})," (LRU) cache mechanism to manage stored responses, adhering to upstream-provided caching directives like ",(0,t.jsx)(n.code,{children:"Cache-Control"})," to optimize the caching process and minimize redundant upstream API requests."]}),"\n",(0,t.jsx)(n.h3,{id:"enabling-http-caching",children:"Enabling HTTP Caching"}),"\n",(0,t.jsxs)(n.p,{children:["To activate HTTP caching, adjust the upstream configuration in Tailcall by setting ",(0,t.jsx)(n.code,{children:"httpCache"})," to appropriate cache size, as shown in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:'schema\n  @server(port: 4000)\n  @upstream(\n    baseURL: "https://api.example.com"\n    # highlight-start\n    httpCache: 42\n    # highlight-end\n  ) {\n  query: Query\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This configuration instructs Tailcall to cache responses from the designated upstream API."}),"\n",(0,t.jsx)(n.h3,{id:"cache-control-headers-in-responses",children:"Cache-Control headers in responses"}),"\n",(0,t.jsxs)(n.p,{children:["Enabling the ",(0,t.jsx)(n.code,{children:"cacheControl"})," setting in Tailcall ensures that ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",children:"Cache-Control"})," headers are included in the responses returned to clients. When activated, Tailcall dynamically sets the ",(0,t.jsx)(n.code,{children:"max-age"})," directive in the ",(0,t.jsx)(n.code,{children:"Cache-Control"})," header to the minimum ",(0,t.jsx)(n.code,{children:"max-age"})," value encountered in any of the responses from upstream services. This approach guarantees that the caching duration for the composite response is conservative, aligning with the shortest cache validity period provided by the upstream services. By default, this feature is disabled (",(0,t.jsx)(n.code,{children:"false"}),"), meaning Tailcall will not modify or add ",(0,t.jsx)(n.code,{children:"Cache-Control"})," headers unless explicitly instructed to do so. This setting is distinct from the general HTTP cache setting, which controls whether responses are cached internally by Tailcall; ",(0,t.jsx)(n.code,{children:"cacheControl"})," specifically controls the caching instructions sent to clients."]}),"\n",(0,t.jsxs)(n.p,{children:["Here is how you can enable the ",(0,t.jsx)(n.code,{children:"cacheControl"})," setting within your Tailcall schema to apply these caching instructions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"schema @server(headers: {cacheControl: true}) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practices-for-enhancing-rest-api-performance-on-graphql",children:"Best Practices for Enhancing REST API Performance on GraphQL"}),"\n",(0,t.jsxs)(n.p,{children:["The combination of ",(0,t.jsx)(n.code,{children:"httpCache"})," and ",(0,t.jsx)(n.code,{children:"cacheControl"})," provides a comprehensive caching solution. While ",(0,t.jsx)(n.code,{children:"httpCache"})," focuses on internal caching to reduce the impact of high latency and frequent requests, ",(0,t.jsx)(n.code,{children:"cacheControl"})," manages client-side caching policies, ensuring an optimal balance between performance, data freshness, and efficient resource use."]}),"\n",(0,t.jsx)(n.p,{children:"These caching primitives are beneficial for REST APIs that are latency-sensitive, have a high rate of request repetition, or come with explicit caching headers indicating cacheable responses. Together, they tackle the common challenges of optimizing REST API performance by minimizing unnecessary network traffic and server load while ensuring response accuracy."}),"\n",(0,t.jsxs)(n.p,{children:["To further enhance the performance of any API with Tailcall, integrating the ",(0,t.jsx)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#cache-directive",children:(0,t.jsx)(n.code,{children:"@cache"})})," directive offers protocol agnostic control over caching at the field level within a GraphQL schema."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);