(this.webpackJsonpleopatrone=this.webpackJsonpleopatrone||[]).push([[0],{1:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return c})),t.d(n,"l",(function(){return l})),t.d(n,"m",(function(){return s})),t.d(n,"g",(function(){return u})),t.d(n,"j",(function(){return d})),t.d(n,"h",(function(){return f})),t.d(n,"i",(function(){return h})),t.d(n,"e",(function(){return p})),t.d(n,"f",(function(){return m})),t.d(n,"b",(function(){return v})),t.d(n,"k",(function(){return g}));var a=t(0),r=t.n(a),o="/",i="leo@leopatrone.com",c="801-360-7786",l=new Date,s=l.getFullYear(),u="/",d="/weddings",f="/lifestyle",h="/portraits",p="/about",m="/contact",v="https://www.instagram.com/leopatrone/",g=r.a.createContext({innerHeight:69,innerWidth:420,scrollY:12345})},16:function(e,n,t){e.exports={root:"App_root__nWMuC",headerWrapper:"App_headerWrapper__26s3p",contentWrapper:"App_contentWrapper__eB_vL",footerWrapper:"App_footerWrapper__3YLye"}},17:function(e,n,t){e.exports={root:"Footer_root__2mdXY"}},26:function(e,n,t){e.exports=t(37)},3:function(e,n,t){e.exports={root:"Header_root__2EhaM",homeLink:"Header_homeLink__2jZvP",selected:"Header_selected__FQe7k",h1:"Header_h1__13r5W",pageLinks:"Header_pageLinks__2aiSR",link:"Header_link__2D4T8"}},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),c=t(11),l=t(12),s=t(13),u=t(14),d=t(16),f=t.n(d),h=t(3),p=t.n(h),m=t(7),v=t(8),g=t(1),_=t(9),E=t.n(_);var w=Object(v.f)((function(e){var n=e.location.pathname;return r.a.createElement("nav",{className:p.a.root},r.a.createElement(m.b,{className:E()(p.a.homeLink,n===g.g&&p.a.selected),to:g.g},r.a.createElement("h1",{className:p.a.h1},"Leo Patrone")),r.a.createElement("div",{className:p.a.pageLinks},r.a.createElement(m.b,{className:E()(p.a.link,n===g.j&&p.a.selected),to:g.j},"Weddings"),r.a.createElement(m.b,{className:E()(p.a.link,n===g.h&&p.a.selected),to:g.h},"Lifestyle"),r.a.createElement(m.b,{className:E()(p.a.link,n===g.i&&p.a.selected),to:g.i},"Portraits"),r.a.createElement(m.b,{className:E()(p.a.link,n===g.e&&p.a.selected),to:g.e},"About"),r.a.createElement(m.b,{className:E()(p.a.link,n===g.f&&p.a.selected),to:g.f},"Contact"),r.a.createElement("a",{className:p.a.link,href:g.b,target:"_blank",rel:"noopener noreferrer"},"Instagram")))})),b=t(17),k=t.n(b);function W(){return r.a.createElement("footer",{className:k.a.root},r.a.createElement("a",{className:k.a.link,href:"mailto:".concat(g.c)},g.c)," ","\u2022"," ",r.a.createElement("a",{className:k.a.link,href:"tel:+1".concat(g.d)},g.d)," ","\u2022 Made in U.S.A. \u2022 \xa9",g.m)}t(36);var O=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;Object(c.a)(this,t),(a=n.call(this,e))._onResize=function(){var e=a.props.win,n=e.innerHeight,t=e.innerWidth;console.log("_onResize",t,n),a.setState({innerHeight:n,innerWidth:t})};var r=e.win;return a.state={innerHeight:r.innerHeight,innerWidth:r.innerWidth},r.addEventListener("resize",a._onResize),a}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.win.removeEventListener("resize",this._onResize)}},{key:"render",value:function(){var e=this.state,n=e.innerHeight,t=e.innerWidth;return(0,this.props.children)(t,n)}}]),t}(r.a.Component);O.defaultProps={win:"undefined"!==typeof window?window:{addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}}};var H=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;Object(c.a)(this,t),(a=n.call(this,e))._onScroll=function(){var e=a.props.win,n=e.pageXOffset,t=e.pageYOffset;console.log("_onScroll",n,t),a.setState({scrollX:n,scrollY:t})};var r=e.win;return a.state={scrollX:r.pageXOffset,scrollY:r.pageYOffset},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.win.addEventListener("scroll",this._onScroll)}},{key:"componentWillUnmount",value:function(){this.props.win.removeEventListener("scroll",this._onScroll)}},{key:"render",value:function(){var e=this.state,n=e.scrollX,t=e.scrollY;return(0,this.props.children)(n,t)}}]),t}(r.a.Component);H.defaultProps={win:"undefined"!==typeof window?window:{addEventListener:function(){},pageXOffset:0,pageYOffset:0,removeEventListener:function(){}}};var j=0,N=0,y=window.innerWidth,L=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate(),setTimeout((function(){console.log("timeout:",{"window.innerWidth":window.innerWidth,"window.innerHeight":window.innerHeight,pageYOffset:window.pageYOffset})}))}},{key:"render",value:function(){var e=this,n=this.props.children;return r.a.createElement(O,null,(function(t,a){return r.a.createElement(H,null,(function(o,i){return t!==y&&(j=e._headerNode.offsetHeight,N=e._footerNode.offsetHeight,y=t),console.log("App.render:",{innerWidth:t,innerHeight:a,scrollY:i,headerHeight:j,footerHeight:N}),r.a.createElement(g.k.Provider,{value:{innerWidth:t,innerHeight:a,scrollY:i,headerHeight:j,footerHeight:N}},r.a.createElement("div",{className:f.a.root},r.a.createElement("div",{className:f.a.headerWrapper,ref:function(n){n!==e._headerNode&&(e._headerNode=n,n&&(j=n.offsetHeight))}},r.a.createElement(w,null)),r.a.createElement("div",{className:f.a.contentWrapper},n),r.a.createElement("div",{className:f.a.footerWrapper,ref:function(n){n!==e._footerNode&&(e._footerNode=n,n&&(N=n.offsetHeight))}},r.a.createElement(W,null))))}))}))}}]),t}(r.a.Component),Y=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,110))})),z=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,105))})),x=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,106))})),S=Object(a.lazy)((function(){return t.e(4).then(t.bind(null,107))})),A=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,108))})),X=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,109))}));function C(){return r.a.createElement(m.a,{basename:g.a},r.a.createElement(L,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(v.c,null,r.a.createElement(v.a,{component:Y,exact:!0,path:g.g}),r.a.createElement(v.a,{component:z,exact:!0,path:g.j}),r.a.createElement(v.a,{component:x,exact:!0,path:g.h}),r.a.createElement(v.a,{component:S,exact:!0,path:g.i}),r.a.createElement(v.a,{component:A,exact:!0,path:g.e}),r.a.createElement(v.a,{component:X,exact:!0,path:g.f})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,3]]]);
//# sourceMappingURL=main.f35da595.chunk.js.map