"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[5072],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Query subscriptions"},u=void 0,c={unversionedId:"api/start/api.query.subs",id:"api/start/api.query.subs",title:"Query subscriptions",description:"Previously we explained the concepts between api.query. In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in api.rpc) to stream results from the state, as it changes between blocks.",source:"@site/docs/api/start/api.query.subs.md",sourceDirName:"api/start",slug:"/api/start/api.query.subs",permalink:"/docs/api/start/api.query.subs",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.subs.md",tags:[],version:"current",frontMatter:{title:"Query subscriptions"},sidebar:"reference",previous:{title:"RPC queries",permalink:"/docs/api/start/api.rpc"},next:{title:"Multi queries",permalink:"/docs/api/start/api.query.multi"}},l=[{value:"Subscriptions",id:"subscriptions",children:[],level:2},{value:"Subscriptions with params",id:"subscriptions-with-params",children:[],level:2},{value:"Multiple queries",id:"multiple-queries",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previously we explained the concepts between ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query"),". In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc"),") to stream results from the state, as it changes between blocks."),(0,i.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"As in the case with ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc")," subscriptions, query subscriptions follow exactly the same form - an actual call is augmented with a callback to return the current state value that is updated as the underlying value changes. As an example, we can extend on what we had previously -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve the current timestamp via subscription\nconst unsub = await api.query.timestamp.now((moment) => {\n  console.log(`The last block has a timestamp of ${moment}`);\n});\n")),(0,i.kt)("p",null,"The form is exactly the same as the subscriptions we have seen previously, instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," returning the actual once-off value, it returns a subscription ",(0,i.kt)("inlineCode",{parentName:"p"},"unsub()")," function that can be used to stop the subscription and clear up any underlying RPC connections. The supplied callback will contain the value as it changes, streamed from the node."),(0,i.kt)("h2",{id:"subscriptions-with-params"},"Subscriptions with params"),(0,i.kt)("p",null,"If we had a query with parameters, i.e. where we wish to perform a query for a specific account, the form is exactly the same - the last parameter contains the actual callback, after all other parameters. To retrieve the balances for an account as it changes, we could do the following -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Subscribe to balance changes for our account\nconst unsub = await api.query.system.account(ADDR, ({ nonce, data: balance }) => {\n  console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);\n});\n")),(0,i.kt)("p",null,"By now this subscription form should be familiar to you, including the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"unsub"),"."),(0,i.kt)("h2",{id:"multiple-queries"},"Multiple queries"),(0,i.kt)("p",null,"In most non-trivial applications, it is useful to optimize both our code in terms of callbacks as well as node resources, for instance by ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.query.multi"},"performing multiple queries at once, over the same RPC call"),"."))}m.isMDXComponent=!0}}]);