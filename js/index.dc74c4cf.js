(function(t){function e(e){for(var c,l,r=e[0],i=e[1],u=e[2],f=0,d=[];f<r.length;f++)l=r[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(c=!1)}c&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var c={},o={index:0},a=[];function l(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=c,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(n,c,function(e){return t[e]}.bind(null,c));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/touchMap/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("47b1")},1060:function(t,e,n){},"12be":function(t,e,n){t.exports=n.p+"img/collection.ec66fa99.svg"},"3fa9":function(t,e,n){"use strict";n("ba39")},"457d":function(t,e,n){"use strict";n("1060")},"47b1":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=Object(c["e"])('<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" style="backdrop-filter:blur(5px);"><div class="container-fluid"><a class="navbar-brand" href="#">One Piece</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></div></nav>',1);function a(t,e,n,a,l,r){var i=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[o,Object(c["f"])(i,{style:{height:"100vh"}})],64)}var l=Object(c["u"])({count:0}),r={state:l},i=Object(c["g"])({setup:function(){var t=r.state,e=function(){t.count+=1},n=Object(c["b"])((function(){return t.count}));return{counter:n,gogo:e}}});i.render=a;var u=i,s=n("6c02"),f=Object(c["C"])("data-v-21f1c7c7");Object(c["t"])("data-v-21f1c7c7");var d={class:"position-relative"};Object(c["r"])();var b=f((function(t,e,n,o,a,l){var r=Object(c["x"])("clock"),i=Object(c["x"])("collection"),u=Object(c["x"])("mapA");return Object(c["q"])(),Object(c["d"])("div",d,[Object(c["f"])(r,{id:"clock",class:"position-absolute"}),Object(c["f"])(i,{id:"collection",class:"position-absolute"}),Object(c["f"])(u)])})),p=n("12be"),v=n.n(p),h=Object(c["C"])("data-v-d6dbf180");Object(c["t"])("data-v-d6dbf180");var O={class:"collection d-flex align-items-center"},j={class:"collection-wrap d-flex"},y=Object(c["f"])("img",{src:v.a,class:"collection-img img-fluid",alt:"寶物"},null,-1),g={class:"collection-progress"};Object(c["r"])();var m=h((function(t,e,n,o,a,l){return Object(c["q"])(),Object(c["d"])("div",O,[Object(c["f"])("div",j,[(Object(c["q"])(),Object(c["d"])(c["a"],null,Object(c["w"])(6,(function(e){return Object(c["f"])("div",{key:"collect_".concat(e),class:[{active:t.counter>=e},"collection-item"]},[y],2)})),64))]),Object(c["f"])("div",g,Object(c["z"])(t.counter)+"/6",1)])})),x=Object(c["g"])({setup:function(){var t=r.state,e=Object(c["b"])((function(){return t.count<=6?t.count:6})),n=function(t){t>=6&&alert("Success!")};return Object(c["B"])(e,n),{counter:e}}});n("c31d");x.render=m,x.__scopeId="data-v-d6dbf180";var k=x,w=Object(c["C"])("data-v-07d95c45");Object(c["t"])("data-v-07d95c45");var C={class:"timer"};Object(c["r"])();var B,E=w((function(t,e,n,o,a,l){return Object(c["q"])(),Object(c["d"])("div",C,Object(c["z"])(t.clock),1)})),_=(n("99af"),Object(c["g"])({setup:function(){var t=Object(c["v"])(100),e=Object(c["b"])((function(){var e=Math.floor(t.value/60),n=t.value%60,c=function(t){return t<=9?"0".concat(t):t};return"".concat(c(e),":").concat(c(n))})),n=function(){B=setInterval(o,1e3)},o=function(){t.value=t.value-1||0},a=function(){clearInterval(B)};return Object(c["B"])(t,(function(t){0===t&&(alert("TIME UP!"),a())})),Object(c["o"])((function(){n()})),Object(c["m"])((function(){a()})),{clock:e}}}));n("6595");_.render=E,_.__scopeId="data-v-07d95c45";var I=_,M=Object(c["C"])("data-v-d05338ae");Object(c["t"])("data-v-d05338ae");var T={id:"map-wrap",class:"w-100 h-100"},L={class:"position-absolute btn-group-vertical rounded",style:{right:"5px",top:"45%","z-index":"2","background-color":"rgba(0, 0, 0, 0.4)","backdrop-filter":"blur(2px)"}},P=Object(c["f"])("i",{class:"fas fa-plus"},null,-1),F=Object(c["f"])("i",{class:"fas fa-minus"},null,-1),S={id:"map",class:"position-absolute"},q={class:"position-relative h-100"},N=Object(c["f"])("i",{class:"fas fa-flag"},null,-1),Y=Object(c["f"])("i",{class:"fas fa-flag"},null,-1),X=Object(c["f"])("i",{class:"fas fa-flag"},null,-1),Z=Object(c["f"])("i",{class:"fas fa-flag"},null,-1),H=Object(c["f"])("i",{class:"fas fa-flag"},null,-1);Object(c["r"])();var z=M((function(t,e,n,o,a,l){return Object(c["q"])(),Object(c["d"])("div",T,[Object(c["f"])("div",L,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(e){return t.ZoomIn(!0)}),class:"btn btn-outline-light border-dark"},[P]),Object(c["f"])("button",{onClick:e[2]||(e[2]=function(e){return t.ZoomOut(!1)}),class:"btn btn-outline-light border-dark"},[F])]),Object(c["f"])("div",S,[Object(c["f"])("div",q,[Object(c["f"])("button",{onClick:e[3]||(e[3]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),onTouchstart:e[4]||(e[4]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"30%",top:"30%"}},[N],32),Object(c["f"])("button",{onClick:e[5]||(e[5]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),onTouchstart:e[6]||(e[6]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{left:"20%",top:"20%"}},[Y],32),Object(c["f"])("button",{onClick:e[7]||(e[7]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),onTouchstart:e[8]||(e[8]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{right:"20%",top:"20%"}},[X],32),Object(c["f"])("button",{onClick:e[9]||(e[9]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),onTouchstart:e[10]||(e[10]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{right:"20%",bottom:"20%"}},[Z],32),Object(c["f"])("button",{onClick:e[11]||(e[11]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),onTouchstart:e[12]||(e[12]=function(){return t.handleBtnClick&&t.handleBtnClick.apply(t,arguments)}),type:"button",class:"position-absolute btn btn-primary",style:{right:"50%",bottom:"50%"}},[H],32)])])])})),W=(n("b680"),n("4057"),n("a9e3"),4e3),A=2250,D=1,J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#map",e=[0,0],n=!1,o=-1,a=document.querySelector(t);if(!a)throw new Error("Map is not exists!.");var l=Object(c["v"])(.5),r=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,u=Object(c["b"])((function(){return W*l.value})),s=Object(c["b"])((function(){return A*l.value}));function f(t){var e=t.deltaY<0;m(!!e)}function d(){a.style.transition="width 0.3s, height 0.3s"}function b(){n=!1}function p(t){if(1===t.which){n=!0;var c=t.clientX,o=t.clientY;e=[a.offsetLeft-c,a.offsetTop-o]}}function v(t){t.stopPropagation(),n=!0;var c=t.touches[0].clientX,o=t.touches[0].clientY;e=[a.offsetLeft-c,a.offsetTop-o]}function h(t){if(1===t.which&&n){var e=[t.clientX,t.clientY],c=e[0],o=e[1],l=j({x:c,y:o});a.style.left="".concat(l.left.toFixed(3),"px"),a.style.top="".concat(l.top.toFixed(3),"px")}}function O(t){if(t.stopPropagation(),t.preventDefault(),n){var e=0,c=0,o=t.touches;o&&(e=o[0].clientX||0,c=o[0].clientY||0);var l=j({x:e,y:c});a.style.left="".concat(l.left.toFixed(3),"px"),a.style.top="".concat(l.top.toFixed(3),"px")}}function j(t){var n=0,c=t.x+e[0];c<0&&(n=c),c<r-u.value&&(n=r-u.value);var o=0,a=t.y+e[1];return a<0&&(o=a),a<i-s.value&&(o=i-s.value),{left:n,top:o}}function y(){r=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight}function g(t){var e=t.touches;if(2==e.length){n=!1;var c=Math.hypot(e[0].pageX-e[1].pageX,e[0].pageY-e[1].pageY),a=c>o;if(o=c,a)return void m(!0);m(!1)}}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(!t||l.value!==D){if(t)return l.value=R((100*l.value+e)/100,1),c(),o(!0,e),void f();var n=R((100*l.value-e)/100,1);W*n<r||A*n<i||(l.value=n,c(),o(!1,e),f())}function c(){a.style.width="".concat(u.value,"px"),a.style.height="".concat(s.value,"px")}function o(t,e){var n=W*(e/100),c=A*(e/100),o=parseInt(a.style.left),l=parseInt(a.style.top),f=r/2,d=i/2;if(t){var b=Number(((o-f-n/2)/u.value).toFixed(3)),p=Number(((l-d-c/2)/s.value).toFixed(3));return a.style.left=o+b*n+"px",void(a.style.top=l+p*c+"px")}var v=Number(((o-f+n/2)/u.value).toFixed(3)),h=Number(((l-d+c/2)/s.value).toFixed(3));a.style.left=o-v*n+"px",a.style.top=l-h*c+"px"}function f(){a.style.transition="all .3s";var t=parseInt(a.style.left),e=parseInt(a.style.top);r-t>u.value&&(a.style.left=r-u.value+"px"),i-e>s.value&&(a.style.top=i-s.value+"px"),t>0&&(a.style.left="0px"),e>0&&(a.style.top="0px")}}return window.onresize=y,a.style.width="".concat(u.value,"px"),a.style.height="".concat(s.value,"px"),a.style.left="-".concat((u.value-r)/2,"px"),a.style.top="-".concat((s.value-i)/2,"px"),a.addEventListener("transitionend",d,!0),a.addEventListener("touchstart",v,!0),a.addEventListener("touchmove",O,!0),a.addEventListener("touchmove",g,!0),document.addEventListener("touchend",b,!0),a.addEventListener("mousedown",p,!0),document.addEventListener("mousemove",h,!0),document.addEventListener("mouseup",b,!0),a.addEventListener("wheel",f,!0),{handleZoom:m}};function R(t,e){return Math.round(Math.round(t*Math.pow(10,(e||0)+1))/10)/Math.pow(10,e||0)}var U=Object(c["g"])({setup:function(){var t=r.state,e=Object(c["v"])(null),n=Object(c["v"])(null),o=function(){t.count+=1,alert("FIND TREASURE!")};return Object(c["k"])((function(){var t=J(),c=t.handleZoom;e.value=c,n.value=c})),{handleBtnClick:o,ZoomIn:e,ZoomOut:n}}});n("3fa9");U.render=z,U.__scopeId="data-v-d05338ae";var G=U,K=Object(c["g"])({components:{clock:I,mapA:G,collection:k},setup:function(){return{}}});n("457d");K.render=b,K.__scopeId="data-v-21f1c7c7";var Q=K,V=[{path:"/",name:"Home",component:Q}],$=Object(s["a"])({history:Object(s["b"])("/touchMap/"),routes:V}),tt=$;Object(c["c"])(u).use(tt).mount("#app")},6595:function(t,e,n){"use strict";n("964b")},"8bc5":function(t,e,n){},"964b":function(t,e,n){},ba39:function(t,e,n){},c31d:function(t,e,n){"use strict";n("8bc5")}});
//# sourceMappingURL=index.dc74c4cf.js.map