(this.webpackJsonpleopatrone=this.webpackJsonpleopatrone||[]).push([[5],{106:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return i}));n(0);var e=n(44),a=n(1),o=[n(49),n(50),n(51),n(52),n(53),n(54),n(55),n(56),n(57),n(58),n(59),n(60)].map((function(t){return t.default}));function i(){return Object(a.jsx)(e.a,{images:o})}},39:function(t,r,n){var e;e=function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05;return t+(r-t)*n}function a(t){if(!t)return 0;var r=Math.abs(t),n=Math.ceil(Math.log(r)/Math.LN10),e=Math.log10(r);return e===Math.floor(e)&&n++,n}function o(t,r,n){return(n-t)/(r-t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=0;if(n){for(var o=Math.ceil(Math.min(t,r)),i=Math.floor(Math.max(t,r)),c=0;c<e;c++)a+=Math.random()*((i+1-o)/e);return Math.floor(o+a)}for(var u=0;u<e;u++)a+=Math.random()*((r-t)/e);return t+a}Object.defineProperty(r,"__esModule",{value:!0}),r.average=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var e=r[0],a="number"===typeof e?r:e,o=0,i=!0,c=!1,u=void 0;try{for(var s,l=a[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var f=s.value;o+=f}}catch(d){c=!0,u=d}finally{try{!i&&l.return&&l.return()}finally{if(c)throw u}}return o/a.length},r.ceil=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.ceil(t/r)},r.circleIntersection=function(t,r,n,e){var a=n.x-t.x,o=n.y-t.y,i=Math.sqrt(o*o+a*a);if(i>r+e||i<Math.abs(r-e))return[];var c=(r*r-e*e+i*i)/(2*i),u=t.x+a*c/i,s=t.y+o*c/i,l=Math.sqrt(r*r-c*c),f=l/i*-o,d=a*(l/i),h={x:u+f,y:s+d},p={x:u-f,y:s-d},v=[h];return h.x===p.x&&h.y===p.y||v.push(p),v},r.ease=e,r.easeProp=function(t,r,n,a){var o=e(t[r],n,a);return t[r]=o,o},r.euclid=function t(r,n){return 0===n?r:t(n,r%n)},r.floor=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.floor(t/r)},r.intLength=a,r.luhn=function(t){for(var r=void 0,n=!0,e=0;t>1;){var a=t%10;t=(t-a)/10,void 0===r?r=a:(n||(a*=2)>9&&(a-=9),e+=a),n=!n}return r===(10-e%10)%10},r.modulo=function(t,r){if(!r)return 0;var n=t%r;return t>=0?n:n<0?(n+r)%r:0},r.normalize=o,r.primes=function(t){for(var r=[],n=[],e=2;e<=t;++e)if(!r[e]){n.push(e);for(var a=2*e;a<=t;a+=e)r[a]=!0}return n},r.random=i,r.randomItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t[i(0,t.length-1,!0,r)]},r.randomDirection=function(){return Math.random()>.5?1:-1},r.randomBoolean=function(){return Math.random()>.5},r.relativePercentage=function(t,r,n){return console.log("relativePercentage is deprecated. plz switch to normalize"),o(t,r,n)},r.round=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.round(t/r)},r.shuffle=function(t,r){for(var n=r?[].concat(function(t){if(Array.isArray(t)){for(var r=0,n=Array(t.length);r<t.length;r++)n[r]=t[r];return n}return Array.from(t)}(t)):t,e=0,a=t.length;e<a;e++){var o=Math.floor(Math.random()*(a-e)),i=n[a-1-e];n[a-1-e]=n[o],n[o]=i}return n},r.sortAscending=function(t,r){return t>r?1:t<r?-1:0},r.sortDescending=function(t,r){return t>r?-1:t<r?1:0},r.splitUint=function(t){for(var r=a(t),n=[],e=0;e<r;e++){var o=t%10;n.unshift(o),t=(t-o)/10}return n},r.toDegrees=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 180*(-t+(r?Math.PI/2:0))/Math.PI},r.toRadians=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(-t-(r?90:0))*Math.PI/180},r.total=function(t){for(var r=0,n=0,e=t.length;n<e;n++){var a=t[n];"number"!==typeof a||isNaN(a)?a&&r++:r+=a}return r}}])},t.exports=e()},40:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t,r){if(t){if("string"===typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}n.d(r,"a",(function(){return a}))},41:function(t,r,n){t.exports={margin:"12px",borderWidth:"1px",root:"GalleryScrollProjector_root__1dpLV",imgWrapper:"GalleryScrollProjector_imgWrapper__3wppA",img:"GalleryScrollProjector_img__2tDWt",indicatorFixed:"GalleryScrollProjector_indicatorFixed__i4KLt",indicatorAbsolute:"GalleryScrollProjector_indicatorAbsolute__2eMst"}},42:function(t,r){t.exports=function(t){return t*t*t}},43:function(t,r,n){t.exports={root:"Indicator_root__3IK1I",current:"Indicator_current__pS2Hv",total:"Indicator_total__3Hqzu",divider:"Indicator_divider__-MGRo"}},44:function(t,r,n){"use strict";n.d(r,"a",(function(){return A}));var e=n(40);var a=n(12),o=n(13),i=n(15),c=n(14),u=n(0),s=n.n(u),l=n(41),f=n.n(l),d=n(39);function h(t,r,n,e){var a,o;if(t/r>n/e?(a=n,o=n/(t/r)):(a=e*(t/r),o=e),a!==n&&o!==e)throw new Error("containRect 1: ".concat(t,", ").concat(r,", ").concat(n,", ").concat(e));if(Object(d.round)(a/o,1e3)!==Object(d.round)(t/r,1e3))throw new Error("containRect 2: ".concat(t,", ").concat(r,", ").concat(n,", ").concat(e,", ").concat(a/o,", ").concat(t/r));if(a>n||o>e)throw new Error("containRect 3: ".concat(t,", ").concat(r,", ").concat(n,", ").concat(e,", ").concat(a,", ").concat(o));return{width:a,height:o}}var p=n(42),v=n.n(p),m=n(43),g=n.n(m),b=n(10),y=n.n(b),j=n(1);function M(t){var r=t.className,n=t.current,e=t.total;return Object(j.jsxs)("aside",{className:y()(g.a.root,r),children:[Object(j.jsx)("div",{className:g.a.current,children:n}),Object(j.jsx)("div",{className:g.a.divider,children:"/"}),Object(j.jsx)("div",{className:g.a.total,children:e})]})}var x=n(2),_=parseInt(f.a.margin),w=parseInt(f.a.borderWidth),A=function(t){Object(i.a)(n,t);var r=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=r.call.apply(r,[this].concat(o))).state={},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t,r=this,n=this.props.images,a=[],o=Number.MAX_VALUE,i=0,c=function(t,r){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(e.a)(t))||r&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}(n);try{var u=function(){var r=t.value;a.push(new Promise((function(t,n){var e=new Image;e.addEventListener("load",(function(r){var n=r.target,e=n.width,a=n.height,c=e/a;o=Math.min(c,o),i=Math.max(c,i),t({width:e,height:a,ratio:c})})),e.src=r})))};for(c.s();!(t=c.n()).done;)u()}catch(s){c.e(s)}finally{c.f()}Promise.all(a).then((function(t){r.setState({imageDimensions:t,maxAspectRatio:i,minAspectRatio:o})}))}},{key:"render",value:function(){var t=this,r=this.state,n=r.maxAspectRatio,e=r.minAspectRatio;return Object(j.jsx)(x.k.Consumer,{children:function(r){var a=r.innerHeight,o=r.innerWidth,i=r.scrollY,c=r.headerHeight,u=r.footerHeight;if(!a||!o||!c||!u||!n||!e)return null;var s,l,p,m,g,b,y=t.props.images,x=t.state.imageDimensions,A=2*(_+w),O=Math.max(0,o-2*A),I=Math.max(0,a-c-2*A),P=h(n,1,O,I),N=h(e,1,O,I),S=P.width*P.height,R=N.width*N.height,E=Math.min(S,R),D=N.height,L=.5*c,W=Number.MAX_VALUE,G=y.map((function(t,r){var n,e=x[r],o=function(t,r,n){var e=t*r,a=Math.sqrt(n/e),o=t*a,i=r*a,c=o*i,u=Math.abs(c-n);if(u>1)throw new Error("scaleRectToArea 1: ".concat(t,", ").concat(r,", ").concat(n,", ").concat(c,", ").concat(u));return{width:o,height:i}}(e.width,e.height,E),h=2*Math.ceil(.5*(o.height+A));0===r?(n=0,g=Math.round(.5*(a-h)-c)):n=m+.5*p+.5*h+_,r===y.length-1&&(b=Math.round(.5*(a-h-u)),s=(n+=.5*u)-u);var M=Math.abs(i-n);M<W&&(W=M,l=r);var w={width:"".concat(o.width,"px"),height:"".concat(o.height,"px")},O=n-.5*D,I=n+.5*D;if(i>=O&&i<=I){var P=2*Object(d.normalize)(O,I,i)-1,N=v()(P);w.opacity=1-Math.abs(N),w.transform="translate(".concat(0,"px, ").concat(L+0,"px)")}else w.visibility="hidden";return p=h,m=n,Object(j.jsx)("div",{className:f.a.imgWrapper,style:{height:"".concat(h,"px")},children:Object(j.jsx)("img",{alt:"",className:f.a.img,src:t,style:w})},t)}));return Object(j.jsxs)("div",{className:f.a.root,style:{paddingTop:g,paddingBottom:b},children:[G,Object(j.jsx)(M,{className:i>s?f.a.indicatorAbsolute:f.a.indicatorFixed,current:l+1,total:y.length})]})}})}}]),n}(s.a.Component)},49:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/001.001938f5.jpg"},50:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/002.57def00e.jpg"},51:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/003.1d8e3b45.jpg"},52:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/004.9ee2ee5f.jpg"},53:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/005.893c3552.jpg"},54:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/006.0d0b8520.jpg"},55:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/007.f11badfa.jpg"},56:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/008.b24ed53b.jpg"},57:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/009.2ed72252.jpg"},58:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/010.87f4b54d.jpg"},59:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/011.51d9ef9f.jpg"},60:function(t,r,n){"use strict";n.r(r),r.default=n.p+"static/media/012.fbcc6b3b.jpg"}}]);
//# sourceMappingURL=5.fa57134a.chunk.js.map