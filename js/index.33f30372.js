(function(t){function e(e){for(var o,c,i=e[0],l=e[1],u=e[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={index:0},r=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"25d41b7f"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}a[t]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/touchMap/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("47b1")},"3ac3":function(t,e,n){},"47b1":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",style:{"backdrop-filter":"blur(5px)"}},r={class:"container-fluid"},c=Object(o["g"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),i=Object(o["f"])(" PH "),l=Object(o["g"])("i",{class:"fas fa-plus"},null,-1),u=Object(o["e"])('<div id="log"></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Features</a></li><li class="nav-item"><a class="nav-link" href="#">Pricing</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div>',3);function s(t,e,n,s,f,p){var v=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("nav",a,[Object(o["g"])("div",r,[c,i,Object(o["g"])("div",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),class:"btn"},[l,Object(o["f"])(" clicked: "+Object(o["x"])(t.counter),1)]),u])]),Object(o["g"])(v,{style:{height:"100vh"}})],64)}var f=Object(o["t"])({count:0}),p={state:f},v=Object(o["h"])({setup:function(){var t=p.state,e=function(){t.count+=1},n=Object(o["b"])((function(){return t.count}));return{counter:n,gogo:e}}});v.render=s;var d=v,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g=Object(o["A"])("data-v-0ed29ea3");Object(o["s"])("data-v-0ed29ea3");var h={id:"map-wrap",class:"w-100"},m={id:"map",class:"position-absolute",style:{left:"-50%",top:"-50%"}},y={class:"position-relative h-100"},O=Object(o["g"])("i",{class:"fas fa-flag"},null,-1),j=Object(o["g"])("i",{class:"fas fa-flag"},null,-1);Object(o["q"])();var x=g((function(t,e,n,a,r,c){return Object(o["p"])(),Object(o["d"])("div",h,[Object(o["g"])("div",m,[Object(o["g"])("div",y,[Object(o["g"])("button",{onClick:e[1]||(e[1]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[2]||(e[2]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"30%",top:"30%"}},[O],32),Object(o["g"])("button",{onClick:e[3]||(e[3]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),onTouchstart:e[4]||(e[4]=function(){return t.gogo&&t.gogo.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"20%",top:"20%"}},[j],32)])])])})),w=(n("a9e3"),n("b680"),n("99af"),4584),E=3056,k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#map",e=[0,0],n=!1,a=document.querySelector(t);if(!a)throw new Error("Map is not exists!.");var r=Object(o["u"])(1),c=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,l=Object(o["b"])((function(){return w*r.value})),u=Object(o["b"])((function(){return E*r.value}));function s(t){var e=t.deltaY<0;if(!e||1!==r.value){if(e&&r.value<1)return r.value=(10*r.value+1)/10,o(),s(!0),void f();var n=(10*r.value-1)/10;w*n<c||E*n<i||(r.value=n,o(),s(!1),f())}function o(){a.style.width="".concat(l.value,"px"),a.style.height="".concat(u.value,"px")}function s(t){var e=.1*w,n=.1*E,o=parseInt(a.style.left),r=parseInt(a.style.top),s=c/2,f=i/2;if(t){var p=Number(((o-s-e/2)/l.value).toFixed(3)),v=Number(((r-f-n/2)/u.value).toFixed(3));return a.style.left=o+p*e+"px",void(a.style.top=r+v*n+"px")}var d=Number(((o-s+e/2)/l.value).toFixed(3)),b=Number(((r-f+n/2)/u.value).toFixed(3));a.style.left=o-d*e+"px",a.style.top=r-b*n+"px"}function f(){a.style.transition="all .3s";var t=parseInt(a.style.left),e=parseInt(a.style.top);c-t>l.value&&(a.style.left=c-l.value+"px"),i-e>u.value&&(a.style.top=i-u.value+"px"),t>0&&(a.style.left="0px"),e>0&&(a.style.top="0px")}}function f(){a.style.transition="width 0.3s, height 0.3s"}function p(){n=!1}function v(t){if(1===t.which){n=!0;var o=t.clientX,r=t.clientY;e=[a.offsetLeft-o,a.offsetTop-r]}}function d(t){t.stopPropagation(),n=!0;var o=t.touches[0].clientX,r=t.touches[0].clientY;e=[a.offsetLeft-o,a.offsetTop-r]}function b(t){if(1===t.which&&n){var e=[t.clientX,t.clientY],o=e[0],r=e[1],c=h({x:o,y:r});a.style.left="".concat(c.left,"px"),a.style.top="".concat(c.top,"px")}}function g(t){if(t.stopPropagation(),t.preventDefault(),n){var e=0,o=0;if(t.touches){var r=document.getElementById("log"),c=t.touches;r.textContent="".concat(c.length,", ").concat(Math.floor((c[0]||{}).clientX),", ").concat(Math.floor((c[1]||{}).clientX)),e=t.touches[0].clientX||0,o=t.touches[0].clientY||0}var i=h({x:e,y:o});a.style.left="".concat(i.left,"px"),a.style.top="".concat(i.top,"px")}}function h(t){var n=0,o=t.x+e[0];o<0&&(n=o),o<c-l.value&&(n=c-l.value);var a=0,r=t.y+e[1];return r<0&&(a=r),r<i-u.value&&(a=i-u.value),{left:n,top:a}}function m(){c=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight}window.onresize=m,a.style.width="".concat(l.value,"px"),a.style.height="".concat(u.value,"px"),a.style.transform="scale(".concat(r.value,")"),a.addEventListener("transitionend",f,!0),a.addEventListener("touchstart",d,!0),a.addEventListener("touchmove",g,!0),a.addEventListener("touchmove",P,!0),document.addEventListener("touchend",p,!0),a.addEventListener("mousedown",v,!0),document.addEventListener("mousemove",b,!0),document.addEventListener("mouseup",p,!0),a.addEventListener("wheel",s,!0)};function P(t){for(var e=new Array,n=-1,o=0;o<e.length;o++)if(t.pointerId==e[o].pointerId){e[o]=t;break}if(2==e.length){var a=Math.abs(e[0].clientX-e[1].clientX);n>0&&(a>n&&(console.log("Pinch moving OUT -> Zoom in",t),alert("zoom in")),a<n&&(console.log("Pinch moving IN -> Zoom out",t),alert("zoom out"))),n=a}}var L=Object(o["h"])({setup:function(){var t=p.state,e=function(){t.count+=1};return Object(o["l"])((function(){k()})),{gogo:e}}});n("949f");L.render=x,L.__scopeId="data-v-0ed29ea3";var M=L,T=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"7513"))}}],I=Object(b["a"])({history:Object(b["b"])("/touchMap/"),routes:T}),N=I;Object(o["c"])(d).use(N).mount("#app")},"949f":function(t,e,n){"use strict";n("3ac3")}});
//# sourceMappingURL=index.33f30372.js.map