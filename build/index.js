module.exports=function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=1)}([function(r,n){r.exports=require("react")},function(r,n,e){"use strict";e.r(n);var t=e(0),o=e.n(t);e(2);n.default=function(r){return o.a.createElement(o.a.Fragment,null,"rsc-overlay"===r.cardType?o.a.createElement("div",{class:"rsc-overlay-card rsc-flex"},r.imgSrc?o.a.createElement("img",{class:"rsc-overlay-card-img",src:"".concat(r.imgSrc),alt:"".concat(r.altText)}):null,o.a.createElement("div",{class:"rsc-overlay-card-content"},r.title?o.a.createElement("p",{class:"rsc-overlay-card-title rsc-card-title",style:{color:"".concat(r.titleColor)}},r.title):null,r.des?o.a.createElement("p",{class:"rsc-overlay-card-text rsc-card-des",style:{color:"".concat(r.desColor)}},r.des):null,r.subText?o.a.createElement("p",{class:"rsc-overlay-card-text rsc-card-des",style:{color:"".concat(r.subTextColor)}},r.subText):null,r.linkText?o.a.createElement("a",{href:"".concat(r.linkUrl),className:"rsc-card-link ".concat(r.linkTheme),style:{color:"".concat(r.linkColor)}},r.linkText):null,r.btnText?o.a.createElement("div",{className:"rsc-ovelay-btn-container"},o.a.createElement("a",{href:"".concat(r.btnUrl),className:"rsc-card-btn ".concat(r.btnTheme),style:{backgroundColor:"".concat(r.btnBg),color:"".concat(r.btnColor)}},r.btnText)):null)):(r.cardType,o.a.createElement("div",{className:"rsc-flex rsc-border rsc-border-gray ".concat(r.cardType)},o.a.createElement("div",{className:"rsc-flex-child"},o.a.createElement("img",{className:"rsc-side-img",src:"".concat(r.imgSrc),alt:"".concat(r.altText)})),o.a.createElement("div",{className:"rsc-flex-child"},o.a.createElement("div",{className:"rsc-right-content rsc-pad rsc-list"},r.title?o.a.createElement("p",{className:"rsc-card-title rsc-font-bold rsc-p-b"},r.title):null,r.des?o.a.createElement("p",{className:"rsc-card-des"},r.des):null),r.authorImg||r.subText?o.a.createElement("div",{className:"rsc-bottom-content rsc-list rsc-flex-container rsc-pad"},r.authorImg?o.a.createElement("img",{class:"rsc-author-image rsc-m-r",src:"".concat(r.authorImg),alt:"".concat(r.authorName)}):null,o.a.createElement("div",{className:"rsc-author-content"},r.authorName?o.a.createElement("p",{className:"rsc-card-des"},r.authorName):null,r.subText?o.a.createElement("p",{className:"rsc-card-des"},r.subText):null)):null,r.linkText?o.a.createElement("div",{className:"rsc-p-rl rsc-p-b"},o.a.createElement("a",{href:"".concat(r.linkUrl),className:"rsc-card-link"},r.linkText)):null,r.btnText?o.a.createElement("div",{className:"rsc-pad rsc-m-b"},o.a.createElement("a",{href:"".concat(r.btnUrl),className:"rsc-card-btn"},r.btnText)):null))))}},function(r,n,e){var t=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),c=[];function i(r){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===r){n=e;break}return n}function l(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],l=n.base?a[0]+n.base:a[0],s=e[l]||0,d="".concat(l," ").concat(s);e[l]=s+1;var u=i(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(m)):c.push({identifier:d,updater:g(m,n),references:1}),t.push(d)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var c=a(r.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var d,u=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function m(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),c=r.childNodes;c[n]&&r.removeChild(c[n]),c.length?r.insertBefore(a,c[n]):r.appendChild(a)}}function p(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var f=null,b=0;function g(r,n){var e,t,o;if(n.singleton){var a=b++;e=f||(f=s(n)),t=m.bind(null,e,a,!1),o=m.bind(null,e,a,!0)}else e=s(n),t=p.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=l(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=i(e[t]);c[o].references--}for(var a=l(r,n),s=0;s<e.length;s++){var d=i(e[s]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}e=a}}}},function(r,n,e){(n=e(5)(!1)).push([r.i,"p {\r\n  margin: 0px;\r\n}\r\n.rsc-card {\r\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px 1px;\r\n  background: rgb(255, 255, 255);\r\n}\r\n@media (min-width: 355px) {\r\n  .rsc-pad {\r\n    padding: 12px !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .rsc-pad {\r\n    padding: 18px !important;\r\n  }\r\n}\r\n@media (min-width: 1024px) {\r\n  .rsc-pad {\r\n    padding: 20px !important;\r\n  }\r\n}\r\n.rsc-p-b {\r\n  padding-bottom:20px;\r\n}\r\n.rsc-p-rl {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n.rsc-m-r {\r\n  margin-right: 20px;\r\n}\r\n.rsc-m-b {\r\n  margin-bottom: 20px;\r\n}\r\n.rsc-font-bold {\r\n  font-weight: 700 !important;\r\n}\r\n.rsc-flex {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex !important;\r\n}\r\n.rsc-flex-column {\r\n  flex-direction: column !important;\r\n}\r\n.rsc-flex-justify-between {\r\n  justify-content: space-between !important;\r\n}\r\n.rsc-list>:not(:last-child) {\r\n  margin-bottom: 20px;\r\n}\r\n.rsc-card-image-wrapper {\r\n  background-color: #fff!important;\r\n  position: relative !important;\r\n}\r\n.rsc-card-image {\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n.rsc-card-title {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n.rsc-card-des {\r\n  font-size: .9375rem;\r\n  line-height: 1.375rem;\r\n  font-weight: 400;\r\n}\r\n.rsc-card-link {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  transition: color 0.25s ease-out 0s, background-color 0.25s ease-out 0s;\r\n  touch-action: manipulation;\r\n  color: rgb(0,111,207);\r\n}\r\n.rsc-card-link:hover {\r\n  text-decoration: underline;\r\n}\r\n.rsc-card-btn {\r\n  cursor: pointer;\r\n  font-weight: 400;\r\n  max-width: 17.5rem;\r\n  position: relative;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  font-size: 1rem;\r\n  line-height: 1.375rem;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: transparent;\r\n  border-image: initial;\r\n  overflow: hidden;\r\n  transition: color 0.2s ease-in-out 0s, background-color, border-color;\r\n  padding: 0.8125rem 1.875rem;\r\n  border-radius: 0.25rem;\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(0, 111, 207);\r\n  text-decoration: none;\r\n}\r\n.rsc-link-green {\r\n  color: rgba(0, 135, 103, 1)\r\n}\r\n.rsc-link-red {\r\n  color: rgba(180, 44, 1, 1);\r\n}\r\n.rsc-btn-green {\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgba(0, 135, 103, 1)\r\n}\r\n.rsc-btn-red {\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgba(180, 44, 1, 1);\r\n}\r\n.rsc-overlay-card {\r\n    color: #fff;\r\n    position: relative;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n}\r\n.rsc-overlay-card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-position: 50% 50%;\r\n  background-size: cover;\r\n  position: absolute;\r\n}\r\n.rsc-overlay-card-content {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    padding: 1.25rem;\r\n}\r\n.rsc-overlay-card-title {\r\n    font-weight: 600;\r\n    padding-bottom: 20px;\r\n    color: white;\r\n}\r\n.rsc-overlay-card-text {\r\n    padding-bottom: 20px;\r\n}\r\n.rsc-ovelay-btn-container {\r\n  padding-top:10px;\r\n  padding-bottom:20px;\r\n}\r\n.rsc-flex-child:first-child {\r\n    width: 30%;\r\n}\r\n.rsc-flex-child:last-child {\r\n    width: 70%;\r\n}\r\n.rsc-author-image {\r\n  max-width: 100%;\r\n  width: 2.5rem!important;\r\n  height: 2.5rem!important;\r\n  border-radius: 9999px!important;\r\n  box-sizing: border-box;\r\n  border: 0 solid #e2e8f0 /* 2 */;\r\n\r\n}\r\n.rsc-border {\r\n  border: 0 solid #e2e8f0 /* 2 */;\r\n  border-top-left-radius: .5rem!important;\r\n  border-top-right-radius: .5rem!important;\r\n  border-top-width: 1px!important;\r\n  border-right-width: 1px!important;\r\n  border-left-width: 1px!important;\r\n  border-bottom-width: 1px!important;\r\n  border-bottom-left-radius: .5rem!important;\r\n  border-bottom-right-radius: .5rem!important;\r\n  box-sizing: border-box;\r\n}\r\n.rsc-border-gray {\r\n  border: 0 solid #e2e8f0 /* 2 */;\r\n  --border-opacity: 1!important;\r\n  border-color: rgba(203,213,224,var(--border-opacity))!important;\r\n}\r\n.rsc-image-right .rsc-flex-child:first-child {\r\n  order: 2;\r\n}\r\n.rsc-image-left .rsc-flex-child:last-child {\r\n  order: 2;\r\n}\r\n.rsc-side-img {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.rsc-image-right .rsc-side-img {\r\n  border-top-right-radius: .5rem!important;\r\n  border-bottom-right-radius: .5rem!important;\r\n}\r\n.rsc-image-left .rsc-side-img {\r\n  border-top-left-radius: .5rem!important;\r\n  border-bottom-left-radius: .5rem!important;\r\n}\r\n",""]),r.exports=n},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var o=(c=t,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),a=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[e].concat(a).concat([o]).join("\n")}var c,i,l;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<r.length;i++){var l=[].concat(r[i]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}}]);