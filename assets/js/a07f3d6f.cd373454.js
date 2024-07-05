"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6802],{6662:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(4848),i=r(8453);const s={title:"Micro Benchmarks",description:"Explore Tailcall's comprehensive guide to benchmarking for continuous integration (CI) systems. Learn how to seamlessly integrate and run performance tests on every commit to the main branch using Criterion. The guide covers installation of essential tools like cargo-criterion and rust-script, provides step-by-step instructions for executing benchmarks, and details procedures for comparing benchmark results across different code branches. Ensure code efficiency and detect performance degradations early with Tailcall's benchmarking strategies, essential for developers seeking to maintain and improve software performance consistently. Visit the complete guide to start optimizing your CI pipeline today."},o=void 0,a={id:"contributors/micro-benchmark",title:"Micro Benchmarks",description:"Explore Tailcall's comprehensive guide to benchmarking for continuous integration (CI) systems. Learn how to seamlessly integrate and run performance tests on every commit to the main branch using Criterion. The guide covers installation of essential tools like cargo-criterion and rust-script, provides step-by-step instructions for executing benchmarks, and details procedures for comparing benchmark results across different code branches. Ensure code efficiency and detect performance degradations early with Tailcall's benchmarking strategies, essential for developers seeking to maintain and improve software performance consistently. Visit the complete guide to start optimizing your CI pipeline today.",source:"@site/docs/contributors/micro-benchmark.md",sourceDirName:"contributors",slug:"/contributors/micro-benchmark",permalink:"/docs/contributors/micro-benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/contributors/micro-benchmark.md",tags:[],version:"current",lastUpdatedAt:1720149515e3,frontMatter:{title:"Micro Benchmarks",description:"Explore Tailcall's comprehensive guide to benchmarking for continuous integration (CI) systems. Learn how to seamlessly integrate and run performance tests on every commit to the main branch using Criterion. The guide covers installation of essential tools like cargo-criterion and rust-script, provides step-by-step instructions for executing benchmarks, and details procedures for comparing benchmark results across different code branches. Ensure code efficiency and detect performance degradations early with Tailcall's benchmarking strategies, essential for developers seeking to maintain and improve software performance consistently. Visit the complete guide to start optimizing your CI pipeline today."},sidebar:"docs",previous:{title:"Telemetry",permalink:"/docs/contributors/telemetry"},next:{title:"Macro Benchmarks",permalink:"/docs/contributors/wrk-benchmark"}},c={},l=[{value:"Running Benchmarks",id:"running-benchmarks",level:2},{value:"Comparing Benchmarks",id:"comparing-benchmarks",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Benchmarking infrastructure is crucial for Tailcall. We run a suite of benchmarks on our continuous integration (CI) system for every commit made to the ",(0,t.jsx)(n.code,{children:"main"})," branch using ",(0,t.jsx)(n.a,{href:"https://bheisler.github.io/criterion.rs/book/",children:"Criterion"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"running-benchmarks",children:"Running Benchmarks"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/cargo-criterion",children:"cargo-criterion"})," and ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/rust-script",children:"rust-script"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo install cargo-criterion rust-script\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the benchmarks:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo bench\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will run all benchmarks and display the results. To run a specific benchmark you could modify the command and pass a pattern to the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo bench -- 'foo.*bar'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"comparing-benchmarks",children:"Comparing Benchmarks"}),"\n",(0,t.jsx)(n.p,{children:"To facilitate benchmark comparison, we have developed a Rust script capable of contrasting the outcomes of two benchmarks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Checkout the base branch\ngit checkout main\n\n# Run the benchmarks for the main branch and store the result in a file\ncargo bench --message-format=json > main.json\n\n# Checkout the feature branch\ngit checkout feature\n\n# Run the benchmarks again in your feature branch\ncargo bench --message-format=json > feature.json\n\n# Perform a comparison check between the two branches\n./scripts/criterion_compare.rs main.json feature.json table\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the benchmarks indicate a degradation exceeding ",(0,t.jsx)(n.strong,{children:"10%"}),", the script will terminate with an error. You can refer to the automatically generated ",(0,t.jsx)(n.code,{children:"benches/benchmark.md"})," file to identify which benchmarks underperformed and investigate the corresponding code changes before submitting a pull request."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);