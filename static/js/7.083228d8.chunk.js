(this.webpackJsonpleopatrone=this.webpackJsonpleopatrone||[]).push([[7],{107:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return y}));var e=n(40),o=n(0),i=n.n(o),a=n(41),u=n.n(a),c=n(38);function f(t,r){if(null==t)return{};var n,e,o=function(t,r){if(null==t)return{};var n,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||(o[n]=t[n]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=n(11),l=n(12),s=n(13),d=n(14),v=n(22),p=n.n(v),g=function(t){Object(d.a)(n,t);var r=Object(s.a)(n);function n(){var t;Object(h.a)(this,n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=r.call.apply(r,[this].concat(o))).state={height:0,innerHeight:0,innerWidth:0,width:0},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,r=t.innerWidth,n=t.innerHeight;r&&n&&this._rootNode&&this.setState({height:this._rootNode.offsetHeight,width:this._rootNode.offsetWidth})}},{key:"componentDidUpdate",value:function(t,r){var n=this.props,e=n.innerHeight,o=n.innerWidth,i=t.innerHeight,a=t.innerWidth;!this._rootNode||o===a&&e===i||this.setState({height:this._rootNode.offsetHeight,width:this._rootNode.offsetWidth})}},{key:"render",value:function(){var t=this,r=this.props,n=r.children,e=r.component,o=(r.innerWidth,r.innerHeight,f(r,["children","component","innerWidth","innerHeight"])),a=this.state,u=a.height,c=a.width;return i.a.createElement(e,Object.assign({ref:function(r){t._rootNode=p.a.findDOMNode(r)}},o),n(c,u))}}],[{key:"getDerivedStateFromProps",value:function(t,r){var n=t.innerHeight,e=t.innerWidth,o=r.innerHeight;return e!==r.innerWidth||n!==o?{innerHeight:n,innerWidth:e}:null}}]),n}(i.a.Component);g.defaultProps={component:"div"};var b=n(1);function y(){return i.a.createElement(b.j.Consumer,null,(function(t){var r=t.innerHeight,n=t.innerWidth;return i.a.createElement(g,{className:u.a.root,innerWidth:n,innerHeight:r},(function(t,r){for(var n=Math.round(t/50),o=Math.round(r/50),a=t/n,f={height:"".concat(r/o,"px"),width:"".concat(a,"px")},h=n*o,l=[],s=0;s<h;s++)l.push(i.a.createElement("div",{className:u.a.block,style:Object(e.a)({},f,{backgroundColor:"rgba(".concat(Object(c.random)(0,255,!0),",").concat(Object(c.random)(0,255,!0),",").concat(Object(c.random)(0,255,!0),",1)")}),key:s}));return l}))}))}},38:function(t,r,n){var e;e=function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05;return t+(r-t)*n}function o(t){if(!t)return 0;var r=Math.abs(t),n=Math.ceil(Math.log(r)/Math.LN10),e=Math.log10(r);return e===Math.floor(e)&&n++,n}function i(t,r,n){return(n-t)/(r-t)}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=0;if(n){for(var i=Math.ceil(Math.min(t,r)),a=Math.floor(Math.max(t,r)),u=0;u<e;u++)o+=Math.random()*((a+1-i)/e);return Math.floor(i+o)}for(var c=0;c<e;c++)o+=Math.random()*((r-t)/e);return t+o}Object.defineProperty(r,"__esModule",{value:!0}),r.average=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var e=r[0],o="number"===typeof e?r:e,i=0,a=!0,u=!1,c=void 0;try{for(var f,h=o[Symbol.iterator]();!(a=(f=h.next()).done);a=!0){var l=f.value;i+=l}}catch(s){u=!0,c=s}finally{try{!a&&h.return&&h.return()}finally{if(u)throw c}}return i/o.length},r.ceil=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.ceil(t/r)},r.circleIntersection=function(t,r,n,e){var o=n.x-t.x,i=n.y-t.y,a=Math.sqrt(i*i+o*o);if(a>r+e||a<Math.abs(r-e))return[];var u=(r*r-e*e+a*a)/(2*a),c=t.x+o*u/a,f=t.y+i*u/a,h=Math.sqrt(r*r-u*u),l=h/a*-i,s=o*(h/a),d={x:c+l,y:f+s},v={x:c-l,y:f-s},p=[d];return d.x===v.x&&d.y===v.y||p.push(v),p},r.ease=e,r.easeProp=function(t,r,n,o){var i=e(t[r],n,o);return t[r]=i,i},r.euclid=function t(r,n){return 0===n?r:t(n,r%n)},r.floor=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.floor(t/r)},r.intLength=o,r.luhn=function(t){for(var r=void 0,n=!0,e=0;t>1;){var o=t%10;t=(t-o)/10,void 0===r?r=o:(n||(o*=2)>9&&(o-=9),e+=o),n=!n}return r===(10-e%10)%10},r.modulo=function(t,r){if(!r)return 0;var n=t%r;return t>=0?n:n<0?(n+r)%r:0},r.normalize=i,r.primes=function(t){for(var r=[],n=[],e=2;e<=t;++e)if(!r[e]){n.push(e);for(var o=2*e;o<=t;o+=e)r[o]=!0}return n},r.random=a,r.randomItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t[a(0,t.length-1,!0,r)]},r.randomDirection=function(){return Math.random()>.5?1:-1},r.randomBoolean=function(){return Math.random()>.5},r.relativePercentage=function(t,r,n){return console.log("relativePercentage is deprecated. plz switch to normalize"),i(t,r,n)},r.round=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r*Math.round(t/r)},r.shuffle=function(t,r){for(var n=r?[].concat(function(t){if(Array.isArray(t)){for(var r=0,n=Array(t.length);r<t.length;r++)n[r]=t[r];return n}return Array.from(t)}(t)):t,e=0,o=t.length;e<o;e++){var i=Math.floor(Math.random()*(o-e)),a=n[o-1-e];n[o-1-e]=n[i],n[i]=a}return n},r.sortAscending=function(t,r){return t>r?1:t<r?-1:0},r.sortDescending=function(t,r){return t>r?-1:t<r?1:0},r.splitUint=function(t){for(var r=o(t),n=[],e=0;e<r;e++){var i=t%10;n.unshift(i),t=(t-i)/10}return n},r.toDegrees=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 180*(-t+(r?Math.PI/2:0))/Math.PI},r.toRadians=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(-t-(r?90:0))*Math.PI/180},r.total=function(t){for(var r=0,n=0,e=t.length;n<e;n++){var o=t[n];"number"!==typeof o||isNaN(o)?o&&r++:r+=o}return r}}])},t.exports=e()},39:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}n.d(r,"a",(function(){return e}))},40:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(39);function o(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){Object(e.a)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}},41:function(t,r,n){t.exports={root:"Home_root__3_fX1",block:"Home_block__1j4K9"}}}]);
//# sourceMappingURL=7.083228d8.chunk.js.map