(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{174:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return p})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return l}));var r=n(2),o=n(9),i=(n(0),n(187)),a=n(189),c={id:"proxy",title:"Proxy"},p={id:"proxy",title:"Proxy",description:"The included HTTPClient has full proxy configuration support:",source:"@site/docs/proxy.md",permalink:"/SpotifyAPI-NET/docs/next/proxy",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/proxy.md",version:"next",lastUpdatedBy:"Tim Ittermann",lastUpdatedAt:1598449080,sidebar:"docs",previous:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/next/logging"},next:{title:"Pagination",permalink:"/SpotifyAPI-NET/docs/next/pagination"}},u=[],s={rightToc:u};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The included ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPClient")," has full proxy configuration support:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n')),Object(i.b)("p",null,"As an example, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mitmproxy.org/"}),"mitmproxy")," can be used to inspect the requests and responses:"),Object(i.b)("img",{alt:"mitmproxy",src:Object(a.a)("img/mitmproxy.png")}))}l.isMDXComponent=!0},187:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),s=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},l=function(t){var e=s(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},y=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),l=s(n),y=r,d=l["".concat(a,".").concat(y)]||l[y]||f[y]||i;return n?o.a.createElement(d,c({ref:e},u,{components:n})):o.a.createElement(d,c({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},188:function(t,e,n){"use strict";var r=n(0),o=n(49);e.a=function(){return Object(r.useContext)(o.a)}},189:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(190);var r=n(188);function o(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},190:function(t,e,n){"use strict";var r=n(17),o=n(35),i=n(191),a="".startsWith;r(r.P+r.F*n(192)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},191:function(t,e,n){var r=n(69),o=n(23);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},192:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}}}]);