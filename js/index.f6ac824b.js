(function(t){function e(e){for(var a,i,c=e[0],l=e[1],u=e[2],s=0,v=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={index:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"25d41b7f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/touchMap/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("47b1")},"3ac3":function(t,e,n){},"47b1":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={class:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",style:{"backdrop-filter":"blur(5px)"}},r={class:"container-fluid"},i=Object(a["g"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),c=Object(a["g"])("i",{class:"fas fa-plus"},null,-1),l=Object(a["e"])('<div id="log"></div><div id="po"></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Features</a></li><li class="nav-item"><a class="nav-link" href="#">Pricing</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div>',4);function u(t,e,n,u,s,p){var v=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("nav",o,[Object(a["g"])("div",r,[i,Object(a["g"])("div",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),class:"btn"},[c,Object(a["f"])(" clicked: "+Object(a["x"])(t.counter),1)]),l])]),Object(a["g"])(v,{style:{height:"100vh"}})],64)}var s=Object(a["t"])({count:0}),p={state:s},v=Object(a["h"])({setup:function(){var t=p.state,e=function(){t.count+=1},n=Object(a["b"])((function(){return t.count}));return{counter:n,gogo:e}}});v.render=u;var d=v,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=Object(a["A"])("data-v-0ed29ea3");Object(a["s"])("data-v-0ed29ea3");var g={id:"map-wrap",class:"w-100"},h={id:"map",class:"position-absolute",style:{left:"-50%",top:"-50%"}},y={class:"position-relative h-100"},m=Object(a["g"])("i",{class:"fas fa-flag"},null,-1),j=Object(a["g"])("i",{class:"fas fa-flag"},null,-1);Object(a["q"])();var O=b((function(t,e,n,o,r,i){return Object(a["p"])(),Object(a["d"])("div",g,[Object(a["g"])("div",h,[Object(a["g"])("div",y,[Object(a["g"])("button",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[2]||(e[2]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"30%",top:"30%"}},[m],32),Object(a["g"])("button",{onClick:e[3]||(e[3]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[4]||(e[4]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"20%",top:"20%"}},[j],32)])])])})),x=(n("4057"),n("b680"),n("a9e3"),4584),w=3056,E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#map",e=[0,0],n=!1,o=-1,r=document.querySelector(t);if(!r)throw new Error("Map is not exists!.");var i=Object(a["u"])(1),c=window.innerWidth||document.documentElement.clientWidth,l=window.innerHeight||document.documentElement.clientHeight,u=Object(a["b"])((function(){return x*i.value})),s=Object(a["b"])((function(){return w*i.value}));function p(t){var e=t.deltaY<0;e&&1===i.value||(e&&i.value<1?O(!0):O(!1))}function v(){r.style.transition="width 0.3s, height 0.3s"}function d(){n=!1}function f(t){if(1===t.which){n=!0;var a=t.clientX,o=t.clientY;e=[r.offsetLeft-a,r.offsetTop-o]}}function b(t){t.stopPropagation(),n=!0;var a=t.touches[0].clientX,o=t.touches[0].clientY;e=[r.offsetLeft-a,r.offsetTop-o]}function g(t){if(1===t.which&&n){var e=[t.clientX,t.clientY],a=e[0],o=e[1],i=y({x:a,y:o});r.style.left="".concat(i.left,"px"),r.style.top="".concat(i.top,"px");var c=document.querySelector("#po");c.textContent=r.style.left}}function h(t){if(t.stopPropagation(),t.preventDefault(),n){var e=0,a=0,o=t.touches;o&&(e=o[0].clientX||0,a=o[0].clientY||0);var i=y({x:e,y:a});r.style.left="".concat(i.left,"px"),r.style.top="".concat(i.top,"px");var c=document.querySelector("#po");c.textContent=r.style.left}}function y(t){var n=0,a=t.x+e[0];a<0&&(n=a),a<c-u.value&&(n=c-u.value);var o=0,r=t.y+e[1];return r<0&&(o=r),r<l-s.value&&(o=l-s.value),{left:n,top:o}}function m(){c=window.innerWidth||document.documentElement.clientWidth,l=window.innerHeight||document.documentElement.clientHeight}function j(t){var e=t.touches;if(2==e.length){var n=Math.hypot(e[0].pageX-e[1].pageX,e[0].pageY-e[1].pageY),a=n>o;if(o=n,a&&1===i.value)return;if(a&&i.value<1)return void O(!0,2);O(!1,2)}}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(t)return i.value=(100*i.value+e)/100,a(),o(!0),void p();var n=(100*i.value-e)/100;function a(){r.style.width="".concat(u.value,"px"),r.style.height="".concat(s.value,"px")}function o(t){var e=document.querySelector("#log"),n=.1*x,a=.1*w,o=parseInt(r.style.left),i=parseInt(r.style.top),p=c/2,v=l/2;if(e&&(e.textContent="X: ".concat(o.toFixed())),t){var d=Number(((o-p-n/2)/u.value).toFixed(3)),f=Number(((i-v-a/2)/s.value).toFixed(3));return r.style.left=o+d*n+"px",void(r.style.top=i+f*a+"px")}var b=Number(((o-p+n/2)/u.value).toFixed(3)),g=Number(((i-v+a/2)/s.value).toFixed(3));r.style.left=o-b*n+"px",r.style.top=i-g*a+"px"}function p(){r.style.transition="all .3s";var t=parseInt(r.style.left),e=parseInt(r.style.top);c-t>u.value&&(r.style.left=c-u.value+"px"),l-e>s.value&&(r.style.top=l-s.value+"px"),t>0&&(r.style.left="0px"),e>0&&(r.style.top="0px")}x*n<c||w*n<l||(i.value=n,a(),o(!1),p())}window.onresize=m,r.style.width="".concat(u.value,"px"),r.style.height="".concat(s.value,"px"),r.style.transform="scale(".concat(i.value,")"),r.addEventListener("transitionend",v,!0),r.addEventListener("touchstart",b,!0),r.addEventListener("touchmove",h,!0),r.addEventListener("touchmove",j,!0),document.addEventListener("touchend",d,!0),r.addEventListener("mousedown",f,!0),document.addEventListener("mousemove",g,!0),document.addEventListener("mouseup",d,!0),r.addEventListener("wheel",p,!0)},k=Object(a["h"])({setup:function(){var t=p.state,e=function(){t.count+=1};return Object(a["l"])((function(){E()})),{gogo:e}}});n("949f");k.render=O,k.__scopeId="data-v-0ed29ea3";var L=k,P=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"7513"))}}],S=Object(f["a"])({history:Object(f["b"])("/touchMap/"),routes:P}),T=S;Object(a["c"])(d).use(T).mount("#app")},"949f":function(t,e,n){"use strict";n("3ac3")}});
//# sourceMappingURL=index.f6ac824b.js.map