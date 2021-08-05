(function(t){function e(e){for(var a,c,i=e[0],l=e[1],u=e[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={index:0},r=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"25d41b7f"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/touchMap/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("47b1")},"3ac3":function(t,e,n){},"47b1":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={class:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",style:{"backdrop-filter":"blur(5px)"}},r={class:"container-fluid"},c=Object(a["g"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),i=Object(a["g"])("i",{class:"fas fa-plus"},null,-1),l=Object(a["e"])('<div id="log"></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Features</a></li><li class="nav-item"><a class="nav-link" href="#">Pricing</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div>',3);function u(t,e,n,u,s,f){var d=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("nav",o,[Object(a["g"])("div",r,[c,Object(a["g"])("div",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),class:"btn"},[i,Object(a["f"])(" clicked: "+Object(a["x"])(t.counter),1)]),l])]),Object(a["g"])(d,{style:{height:"100vh"}})],64)}var s=Object(a["t"])({count:0}),f={state:s},d=Object(a["h"])({setup:function(){var t=f.state,e=function(){t.count+=1},n=Object(a["b"])((function(){return t.count}));return{counter:n,gogo:e}}});d.render=u;var p=d,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=Object(a["A"])("data-v-0ed29ea3");Object(a["s"])("data-v-0ed29ea3");var g={id:"map-wrap",class:"w-100"},h={id:"map",class:"position-absolute",style:{left:"-50%",top:"-50%"}},m={class:"position-relative h-100"},y=Object(a["g"])("i",{class:"fas fa-flag"},null,-1),j=Object(a["g"])("i",{class:"fas fa-flag"},null,-1);Object(a["q"])();var O=b((function(t,e,n,o,r,c){return Object(a["p"])(),Object(a["d"])("div",g,[Object(a["g"])("div",h,[Object(a["g"])("div",m,[Object(a["g"])("button",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[2]||(e[2]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"30%",top:"30%"}},[y],32),Object(a["g"])("button",{onClick:e[3]||(e[3]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[4]||(e[4]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"20%",top:"20%"}},[j],32)])])])})),w=(n("99af"),4584),x=3056,E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#map",e=[0,0],n=!1,o=document.querySelector(t);if(!o)throw new Error("Map is not exists!.");var r=Object(a["u"])(1),c=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,l=Object(a["b"])((function(){return w*r.value})),u=Object(a["b"])((function(){return x*r.value}));function s(t){var e=t.deltaY<0;if(!e||1!==r.value){if(e&&r.value<1)return r.value=(10*r.value+1)/10,void f();var n=(10*r.value-1)/10;w*n<c||x*n<i||(r.value=n,f())}}function f(){o.style.width="".concat(l.value,"px"),o.style.height="".concat(u.value,"px"),c-parseInt(o.style.left)>l.value&&(o.style.transition="all .3s",o.style.left=c-l.value+"px"),i-parseInt(o.style.top)>u.value&&(o.style.transition="all .3s",o.style.top=i-u.value+"px")}function d(){o.style.transition="width 0.3s, height 0.3s"}function p(){n=!1}function v(t){if(1===t.which){n=!0;var a=t.clientX,r=t.clientY;e=[o.offsetLeft-a,o.offsetTop-r]}}function b(t){t.stopPropagation(),n=!0;var a=t.touches[0].clientX,r=t.touches[0].clientY;e=[o.offsetLeft-a,o.offsetTop-r]}function g(t){if(1===t.which&&n){var e=[t.clientX,t.clientY],a=e[0],r=e[1],c=m({x:a,y:r});o.style.left="".concat(c.left,"px"),o.style.top="".concat(c.top,"px")}}function h(t){if(t.stopPropagation(),n){var e=0,a=0;if(t.touches){var r=document.getElementById("log"),c=t.touches;r.textContent="".concat(c.length,", ").concat(Math.floor((c[0]||{}).clientX),", ").concat(Math.floor((c[1]||{}).clientX)),e=t.touches[0].clientX||0,a=t.touches[0].clientY||0}var i=m({x:e,y:a});o.style.left="".concat(i.left,"px"),o.style.top="".concat(i.top,"px")}}function m(t){var n=0,a=t.x+e[0];a<0&&(n=a),a<c-l.value&&(n=c-l.value);var o=0,r=t.y+e[1];return r<0&&(o=r),r<i-u.value&&(o=i-u.value),{left:n,top:o}}function y(){c=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight}window.onresize=y,o.style.width="".concat(l.value,"px"),o.style.height="".concat(u.value,"px"),o.style.transform="scale(".concat(r.value,")"),o.addEventListener("transitionend",d,!0),o.addEventListener("touchstart",b,!0),o.addEventListener("touchmove",h,!0),document.addEventListener("touchend",p,!0),o.addEventListener("mousedown",v,!0),document.addEventListener("mousemove",g,!0),document.addEventListener("mouseup",p,!0),o.addEventListener("wheel",s,!0)},k=Object(a["h"])({setup:function(){var t=f.state,e=function(){t.count+=1};return Object(a["l"])((function(){E()})),{gogo:e}}});n("949f");k.render=O,k.__scopeId="data-v-0ed29ea3";var L=k,P=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"7513"))}}],M=Object(v["a"])({history:Object(v["b"])("/touchMap/"),routes:P}),T=M;Object(a["c"])(p).use(T).mount("#app")},"949f":function(t,e,n){"use strict";n("3ac3")}});
//# sourceMappingURL=index.1eb3a5db.js.map