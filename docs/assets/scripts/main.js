/*! For license information please see main.js.LICENSE */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){(function(e){!function(e,n){t.exports=n()}(0,function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach(function(e){return delete t[e]})};"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n(function(t,e){t.exports=function(){function t(t){var e=t&&"object"==typeof t;return e&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o=n&&!0===n.clone;return o&&t(e)?r(function(t){return Array.isArray(t)?[]:{}}(e),e,n):e}function n(n,o,i){var a=n.slice();return o.forEach(function(o,u){void 0===a[u]?a[u]=e(o,i):t(o)?a[u]=r(n[u],o,i):-1===n.indexOf(o)&&a.push(e(o,i))}),a}function r(o,i,a){var u=Array.isArray(i),s=a||{arrayMerge:n},c=s.arrayMerge||n;return u?Array.isArray(o)?c(o,i,a):e(i,a):function(n,o,i){var a={};return t(n)&&Object.keys(n).forEach(function(t){a[t]=e(n[t],i)}),Object.keys(o).forEach(function(u){t(o[u])&&n[u]?a[u]=r(n[u],o[u],i):a[u]=e(o[u],i)}),a}(o,i,a)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,n){return r(t,n,e)})},r}()}),o=n(function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default}),i=o.svg,a=o.xlink,u={};u[i.name]=i.uri,u[a.name]=a.uri;var s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map(function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'}).join(" ")}(r(u,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)})}).call(this,n(2))},function(t,e,n){(function(e){!function(e,n){t.exports=n()}(0,function(){"use strict";"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;function t(t,e){return t(e={exports:{}},e.exports),e.exports}var n=t(function(t,e){t.exports=function(){function t(t){var e=t&&"object"==typeof t;return e&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o=n&&!0===n.clone;return o&&t(e)?r(function(t){return Array.isArray(t)?[]:{}}(e),e,n):e}function n(n,o,i){var a=n.slice();return o.forEach(function(o,u){void 0===a[u]?a[u]=e(o,i):t(o)?a[u]=r(n[u],o,i):-1===n.indexOf(o)&&a.push(e(o,i))}),a}function r(o,i,a){var u=Array.isArray(i),s=a||{arrayMerge:n},c=s.arrayMerge||n;return u?Array.isArray(o)?c(o,i,a):e(i,a):function(n,o,i){var a={};return t(n)&&Object.keys(n).forEach(function(t){a[t]=e(n[t],i)}),Object.keys(o).forEach(function(u){t(o[u])&&n[u]?a[u]=r(n[u],o[u],i):a[u]=e(o[u],i)}),a}(o,i,a)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,n){return r(t,n,e)})},r}()});var r=t(function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default}),o=r.svg,i=r.xlink,a={};a[o.name]=o.uri,a[i.name]=i.uri;var u,s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map(function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'}).join(" ")}(n(a,e||{}))+">"+t+"</svg>"},c=r.svg,l=r.xlink,d={attrs:(u={style:["position: absolute","width: 0","height: 0"].join("; ")},u[c.name]=c.uri,u[l.name]=l.uri,u)},f=function(t){this.config=n(d,t||{}),this.symbols=[]};f.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},f.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},f.prototype.find=function(t){return this.symbols.filter(function(e){return e.id===t})[0]||null},f.prototype.has=function(t){return null!==this.find(t)},f.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map(function(t){return t.stringify()}).join("");return s(e,t)},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){this.symbols.forEach(function(t){return t.destroy()})};var p=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach(function(e){return delete t[e]})};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},v=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),y={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},m=function(t){return Array.prototype.slice.call(t,0)},g={isChrome:function(){return/chrome/i.test(navigator.userAgent)},isFirefox:function(){return/firefox/i.test(navigator.userAgent)},isIE:function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},isEdge:function(){return/edge/i.test(navigator.userAgent)}},w=function(t){var e=[];return m(t.querySelectorAll("style")).forEach(function(t){t.textContent+="",e.push(t)}),e},b=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",function(e,n,r){!function(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(t,!1,!1,e),window.dispatchEvent(n)}(t,{oldUrl:r,newUrl:n})})}])},_=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern"),m(t.querySelectorAll("symbol")).forEach(function(t){m(t.querySelectorAll(e)).forEach(function(e){t.parentNode.insertBefore(e,t)})}),t};var E=r.xlink.uri,M="xlink:href",O=/[{}|\\\^\[\]`"<>]/g;function S(t){return t.replace(O,function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()})}var C,L=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],A=L.map(function(t){return"["+t+"]"}).join(","),B=function(t,e,n,r){var o=S(n),i=S(r);(function(t,e){return m(t).reduce(function(t,n){if(!n.attributes)return t;var r=m(n.attributes),o=e?r.filter(e):r;return t.concat(o)},[])})(t.querySelectorAll(A),function(t){var e=t.localName,n=t.value;return-1!==L.indexOf(e)&&-1!==n.indexOf("url("+o)}).forEach(function(t){return t.value=t.value.replace(new RegExp(function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(o),"g"),i)}),function(t,e,n){m(t).forEach(function(t){var r=t.getAttribute(M);if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(E,M,o)}})}(e,o,i)},j={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},N=function(t){function e(e){var r=this;void 0===e&&(e={}),t.call(this,n(y,e));var o=function(t){return t=t||Object.create(null),{on:function(e,n){(t[e]||(t[e]=[])).push(n)},off:function(e,n){t[e]&&t[e].splice(t[e].indexOf(n)>>>0,1)},emit:function(e,n){(t[e]||[]).map(function(t){t(n)}),(t["*"]||[]).map(function(t){t(e,n)})}}}();this._emitter=o,this.node=null;var i=this.config;if(i.autoConfigure&&this._autoConfigure(e),i.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");o.on(j.MOUNT,function(){return r.updateUrls("#",a)})}var u=this._handleLocationChange.bind(this);this._handleLocationChange=u,i.listenLocationChangeEvent&&window.addEventListener(i.locationChangeEvent,u),i.locationChangeAngularEmitter&&x(i.locationChangeEvent),o.on(j.MOUNT,function(t){i.moveGradientsOutsideSymbol&&_(t)}),o.on(j.SYMBOL_MOUNT,function(t){i.moveGradientsOutsideSymbol&&_(t.parentNode),(g.isIE()||g.isEdge())&&w(t)})}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter="angular"in window),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=g.isFirefox())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(j.SYMBOL_MOUNT,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach(function(t){t.mount(n.node),e._emitter.emit(j.SYMBOL_MOUNT,t.node)}),m(r.querySelectorAll("symbol")).forEach(function(t){var e=v.createFromExistingNode(t);e.node=t,n.add(e)}),this._emitter.emit(j.MOUNT,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach(function(t){return t.destroy()}),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1);if(this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(j.MOUNT,r),r},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return B(this.node,n,b(t)+"#",b(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(f),F=t(function(t){t.exports=function(){var t,e=[],n=document,r=(n.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener("DOMContentLoaded",t=function(){for(n.removeEventListener("DOMContentLoaded",t),r=1;t=e.shift();)t()}),function(t){r?setTimeout(t,0):e.push(t)}}()});!!window.__SVG_SPRITE__?C=window.__SVG_SPRITE__:(C=new N({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=C);var T=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?C.attach(t):C.mount(document.body,!0)};return document.body?T():F(T),C})}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n(4),n(5),n(6),n(7),function(t){t.keys().forEach(t)}(n(8))},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){var r={"./arrow-right.svg":9,"./ig.svg":10,"./logo.svg":11,"./piramida-part.svg":12,"./piramida-part2.svg":13,"./piramida-part3.svg":14,"./piramida.svg":15,"./vk.svg":16,"./youtube.svg":17};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=8},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"arrow-right",use:"arrow-right-usage",viewBox:"0 0 15.6 27",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.6 27" id="arrow-right"><path d="M.4 23.6l.3-.3 9.9-9.9L.8 3.5C-.1 2.8-.1 1.4.7.6c.4-.4 1-.6 1.5-.6s1 .3 1.4.6L15 12c.8.8.8 2.1 0 2.9L3.7 26.2c-.7.9-2 1-2.9.3s-1.1-2-.4-2.9z" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"ig",use:"ig-usage",viewBox:"0 0 130.12 130.12",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.12 130.12" id="ig"><defs><style>#ig .cls-1{fill:#fff}</style></defs><path class="cls-1" d="M65.06 11.72c17.37 0 19.43.07 26.29.38a36 36 0 0112.08 2.24 20.16 20.16 0 017.48 4.87 20.16 20.16 0 014.87 7.48A36 36 0 01118 38.77c.31 6.86.38 8.92.38 26.29s-.07 19.43-.38 26.29a36 36 0 01-2.24 12.08 21.55 21.55 0 01-12.35 12.35A36 36 0 0191.35 118c-6.86.31-8.92.38-26.29.38s-19.43-.07-26.29-.38a36 36 0 01-12.08-2.24 20.16 20.16 0 01-7.48-4.87 20.16 20.16 0 01-4.87-7.48 36 36 0 01-2.24-12.06c-.31-6.86-.38-8.92-.38-26.29s.07-19.43.38-26.29a36 36 0 012.24-12.08 20.16 20.16 0 014.87-7.48 20.16 20.16 0 017.48-4.87 36 36 0 0112.08-2.24c6.86-.31 8.92-.38 26.29-.38m0-11.72C47.39 0 45.18.07 38.24.39a47.75 47.75 0 00-15.79 3 31.89 31.89 0 00-11.52 7.5 31.89 31.89 0 00-7.5 11.52 47.76 47.76 0 00-3 15.79C.07 45.18 0 47.39 0 65.06s.07 19.89.39 26.83a47.76 47.76 0 003 15.79 31.89 31.89 0 007.5 11.52 31.89 31.89 0 0011.52 7.5 47.76 47.76 0 0015.79 3c6.94.32 9.15.39 26.82.39s19.89-.07 26.82-.39a47.76 47.76 0 0015.79-3 33.27 33.27 0 0019-19 47.75 47.75 0 003-15.79c.32-6.94.39-9.15.39-26.82s-.07-19.89-.39-26.82a47.75 47.75 0 00-3-15.79 31.89 31.89 0 00-7.5-11.52 31.89 31.89 0 00-11.52-7.5 47.75 47.75 0 00-15.79-3C84.95.07 82.73 0 65.06 0z" /><path class="cls-1" d="M65.06 31.65a33.41 33.41 0 1033.41 33.41 33.41 33.41 0 00-33.41-33.41zm0 55.1a21.69 21.69 0 1121.69-21.69 21.69 21.69 0 01-21.69 21.69z" /><circle class="cls-1" cx="99.79" cy="30.33" r="7.81" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"logo",use:"logo-usage",viewBox:"0 0 250 250",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" id="logo"><style>#logo .st1{fill:#fff}</style><path fill="#b4263e" d="M0 0h250v250H0z" /><path class="st1" d="M216.9 130.1l23.3 31.8h-23.6l-19-27.8h-.3v27.8H178V0h19.2v127.4h.3l18.5-23.5h23.2l-22.3 26.2zM162.7 161.9h-17.6v-7.6h-.2c-1.9 2.9-4.5 5.1-8 6.8s-7.1 2.4-11 2.4c-8.4 0-15.1-3-20.1-9-5-6-7.5-13.3-7.5-21.8 0-8.4 2.5-15.5 7.6-21.5 5-5.9 11.6-8.9 19.8-8.9 7.4 0 13.3 2.6 17.7 7.8h.2V0h19.1v161.9zm-18.2-29.1c0-3.9-1.3-7.3-3.9-10.4-2.6-3-6-4.5-10.1-4.5-4.3 0-7.6 1.5-10.1 4.4-2.4 2.9-3.7 6.4-3.7 10.4 0 4.1 1.2 7.7 3.7 10.6 2.4 3 5.8 4.4 10.1 4.4 4.1 0 7.5-1.5 10.1-4.5 2.6-3 3.9-6.5 3.9-10.4zM86 156.9c-9.1 4.7-19.7 7.1-31.8 7.1-13.3 0-24.1-4-32.6-12.1-8.5-8-12.7-18.5-12.7-31.4 0-13 4.2-23.4 12.7-31.4s19.2-11.9 32-11.9c6.4 0 12.4 1 18 3 5.7 2 10.2 4.6 13.7 8l-12.6 14.3c-4.4-5.1-10.6-7.7-18.5-7.7-7 0-12.8 2.4-17.4 7.3-4.6 4.9-6.9 11-6.9 18.4 0 7.8 2.2 14 6.6 18.8 4.4 4.8 10.6 7.2 18.5 7.2 4.9 0 9-.7 12.5-2.2v-15H52v-16.1h34v43.7z" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"piramida-part",use:"piramida-part-usage",viewBox:"0 0 322 116",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 116" id="piramida-part"><defs><linearGradient id="piramida-part_a" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#FFF" stop-opacity=".25" /><stop offset="100%" stop-color="#FFF" stop-opacity="0" /></linearGradient><linearGradient id="piramida-part_b" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-opacity=".1" /><stop offset="100%" stop-opacity="0" /></linearGradient></defs><path fill-rule="evenodd" fill="#005593" d="M41 49l-.351-29.81L159 0l122.351 19.003L281 51 41 49z" /><path fill="url(#piramida-part_a)" d="M41 49l-.351-29.81L159 0l122.351 19.003L281 51 41 49z" /><path fill-rule="evenodd" fill="#FFF" d="M40.649 19.19L161 47.644V116L0 77.414 40.649 19.19z" /><path fill="url(#piramida-part_b)" d="M40.649 19.19L161 47.644V116L0 77.414 40.649 19.19z" /><path fill-rule="evenodd" fill="#EEE" d="M281.351 19.003L161 47.512V116l161-38.66-40.649-58.337z" /><path fill="url(#piramida-part_b)" d="M281.351 19.003L161 47.512V116l161-38.66-40.649-58.337z" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"piramida-part2",use:"piramida-part2-usage",viewBox:"0 0 266 102",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 102" id="piramida-part2"><defs><linearGradient id="piramida-part2_a" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#FFF" stop-opacity=".25" /><stop offset="100%" stop-color="#FFF" stop-opacity="0" /></linearGradient><linearGradient id="piramida-part2_b" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-opacity=".1" /><stop offset="100%" stop-opacity="0" /></linearGradient><filter id="piramida-part2_c"><feOffset in="SourceAlpha" dy="3"></feOffset><feGaussianBlur result="blurOut" stdDeviation="4.243"></feGaussianBlur><feFlood flood-color="#000" result="floodOut"></feFlood><feComposite operator="out" in="floodOut" in2="blurOut" result="compOut"></feComposite><feComposite operator="in" in="compOut" in2="SourceAlpha"></feComposite><feComponentTransfer><feFuncA type="linear" slope=".35"></feFuncA></feComponentTransfer><feBlend mode="multiply" in2="SourceGraphic"></feBlend></filter></defs><path fill-rule="evenodd" fill="#005593" d="M9.038 25.091L130.94 5.325l126.022 19.573-123.734 26.779L9.038 25.091z" /><path fill="url(#piramida-part2_a)" d="M9.038 25.091L130.94 5.325l126.022 19.573-123.734 26.779L9.038 25.091z" /><path fill-rule="evenodd" fill="#EEE" d="M8.961 24.666L133.031 51v51L0 70l8.961-45.334z" /><path fill="url(#piramida-part2_b)" d="M8.961 24.666L133.031 51v51L0 70l8.961-45.334z" /><path fill-rule="evenodd" fill="#EEE" d="M257.041 25.009L133 51.227V102l133-31.858-8.959-45.133z" /><path fill="url(#piramida-part2_b)" d="M257.041 25.009L133 51.227V102l133-31.858-8.959-45.133z" /><g filter="url(#piramida-part2_c)"><path fill="none" d="M9.038 25.091L130.94 5.325l126.022 19.573-123.734 26.779L9.038 25.091z" /></g></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"piramida-part3",use:"piramida-part3-usage",viewBox:"0 0 285 56",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 56" id="piramida-part3"><defs><filter filterUnits="userSpaceOnUse" id="piramida-part3_a" x="0" y="0" width="285" height="56"><feOffset in="SourceAlpha" dy="2"></feOffset><feGaussianBlur result="blurOut" stdDeviation="3.162"></feGaussianBlur><feFlood flood-color="#000" result="floodOut"></feFlood><feComposite operator="atop" in="floodOut" in2="blurOut"></feComposite><feComponentTransfer><feFuncA type="linear"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g filter="url(#piramida-part3_a)"><path fill-rule="evenodd" fill="#EEE" d="M275 12.142L142.031 43.993V44l-.015-.004L142 44v-.008L9 12l132.987-5L275 12.142z" /></g></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"piramida",use:"piramida-usage",viewBox:"0 0 82 69",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 69" id="piramida"><defs><linearGradient id="piramida_a" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stop-opacity=".1" /><stop offset="100%" stop-opacity="0" /></linearGradient></defs><path fill-rule="evenodd" fill="#FFF" d="M41 68.241L0 58.414 40.649.19 41 .273v67.968z" /><path fill="url(#piramida_a)" d="M41 68.241L0 58.414 40.649.19 41 .273v67.968z" /><path fill-rule="evenodd" fill="#EEE" d="M41 67.991l41-9.818L41.351.003 41 .086v67.905z" /><path fill="url(#piramida_a)" d="M41 67.991l41-9.818L41.351.003 41 .086v67.905z" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"vk",use:"vk-usage",viewBox:"0 0 160.91 91.8",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.91 91.8" id="vk"><path d="M78.73 91.42h9.62s2.91-.32 4.39-1.92 1.32-4.22 1.32-4.22-.19-12.9 5.8-14.81 13.49 12.47 21.52 18c6.08 4.17 10.69 3.26 10.69 3.26l21.49-.3s11.24-.69 5.91-9.53c-.44-.72-3.1-6.54-16-18.49-13.47-12.52-11.64-10.5 4.59-32.13 9.88-13.18 13.84-21.22 12.6-24.66-1.18-3.28-8.45-2.42-8.45-2.42L128 4.35a5.5 5.5 0 00-3.12.55 6.76 6.76 0 00-2.13 2.6 140.39 140.39 0 01-8.94 18.87C103.05 44.66 98.74 45.63 97 44.49c-4.1-2.65-3.07-10.64-3.07-16.31 0-17.73 2.69-25.12-5.24-27C86 .51 84.11.09 77.38 0 68.75-.07 61.44 0 57.3 2.07c-2.75 1.35-4.88 4.35-3.58 4.52 1.6.21 5.22 1 7.14 3.59 2.48 3.37 2.39 10.95 2.39 10.95S64.68 42 59.93 44.6c-3.26 1.78-7.74-1.85-17.34-18.45a154.35 154.35 0 01-8.64-17.9 7.19 7.19 0 00-2-2.7 10 10 0 00-3.72-1.5l-23 .15s-3.44.1-4.7 1.6C-.6 7.14.44 9.9.44 9.9S18.43 52 38.82 73.23c18.69 19.46 39.91 18.19 39.91 18.19z" /></symbol>'});a.a.add(u);e.default=u},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=new o.a({id:"youtube",use:"youtube-usage",viewBox:"0 0 511.147 511.147",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.147 511.147" id="youtube"><path d="M505.027 146.2c0-1.707-5.12-39.253-21.333-57.173-19.627-21.333-40.96-23.893-52.053-24.747h-3.413c-69.12-5.12-172.373-5.973-174.08-5.973-.853 0-104.96.853-173.227 7.68h-2.56C66.413 66.84 45.08 69.4 26.307 90.733 9.24 108.653 4.12 147.053 4.12 148.76c0 0-5.12 43.52-5.12 87.04v40.107c0 42.667 5.12 86.187 5.12 87.04 0 1.707 5.12 39.253 21.333 57.173 17.92 20.48 39.253 23.04 52.907 24.747 2.56 0 4.267 0 6.827.853 39.253 3.413 163.84 5.12 168.96 5.12.853 0 104.96 0 174.08-7.68h2.56c11.947-.853 33.28-3.413 52.053-24.747 17.067-17.92 22.187-56.32 22.187-58.027 0 0 5.12-43.52 5.12-87.04V233.24c0-42.667-5.12-86.187-5.12-87.04zM493.08 275.053c0 42.667-5.12 85.333-5.12 85.333-1.707 9.387-6.827 36.693-17.92 48.64-14.507 17.067-31.573 18.773-40.96 19.627h-2.56c-68.267 5.12-171.52 5.12-172.373 5.12s-128.853-1.707-166.4-5.973c-2.56 0-5.12-.853-7.68-.853-11.947-.853-29.013-3.413-42.667-18.773-10.24-11.093-16.213-38.4-17.067-47.787 0-.853-5.12-43.52-5.12-85.333v-40.107c0-42.667 5.12-85.333 5.12-85.333.853-9.387 6.827-36.693 17.067-48.64C52.76 83.907 68.973 82.2 79.213 81.347h2.56c68.267-5.12 171.52-5.973 172.373-5.973s104.107.853 172.373 5.973h3.413c9.387.853 26.453 2.56 40.96 19.627 10.24 11.947 15.36 39.253 17.067 48.64.853 1.707 5.12 44.373 5.12 85.333v40.106z" /><path d="M360.813 255.427l-162.133-94.72c-2.56-1.707-5.973-1.707-8.533 0s-4.267 4.267-4.267 7.68V353.56c0 3.413 1.707 5.973 4.267 7.68 1.707.853 2.56.853 4.267.853s2.56 0 4.267-.853l162.133-90.453c2.56-1.707 4.267-4.267 4.267-7.68s-1.708-5.974-4.268-7.68zm-157.866 83.626v-156.16l136.533 80.213-136.533 75.947z" /></symbol>'});a.a.add(u);e.default=u}]);