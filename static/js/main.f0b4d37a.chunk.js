(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n,r=c(0),a=c(14),s=c.n(a),i=(c(37),c(38),c(1)),l=function(){return Object(i.jsx)("div",{className:"wrapper__header",children:Object(i.jsxs)("p",{children:["\u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 ",Object(i.jsx)("a",{rel:"noreferrer",href:"https://www.youtube.com/watch?v=0W6i5LYKCSI",target:"_blank",children:"\u043f\u0440\u043e\u0435\u043a\u0442\u0430"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c typescript. \u041c\u0438\u043d\u0438\u043c\u0443\u043c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e redux."]})})},d=c(10),o=c(2),j=c(8),p=c(12),u=c.n(p),O=c(21);!function(e){e.SET_LOADING="SET_LOADING",e.FETCH_PRODUCTS="FETCH_PRODUCTS",e.FETCH_SELECTED_PRODUCT="FETCH_SELECTED_PRODUCT",e.REMOVE_SELECTED_PRODUCT="REMOVE_SELECTED_PRODUCT"}(n||(n={}));var b=c(22),x=c.n(b),v=j.c,f=(c(69),function(){return Object(i.jsx)("div",{className:"loaderWrap",children:Object(i.jsx)("div",{className:"loadingio-spinner-blocks-mty7grqp7kl",children:Object(i.jsxs)("div",{className:"ldio-qw2vmiyfhg",children:[Object(i.jsx)("div",{style:{left:"38px",top:"38px",animationDelay:"0s"}}),Object(i.jsx)("div",{style:{left:"80px",top:"38px",animationDelay:"0.125s"}}),Object(i.jsx)("div",{style:{left:"122px",top:"38px",animationDelay:"0.25s"}}),Object(i.jsx)("div",{style:{left:"38px",top:"80px",animationDelay:"0.875s"}}),Object(i.jsx)("div",{style:{left:"122px",top:"80px",animationDelay:"0.375s"}}),Object(i.jsx)("div",{style:{left:"38px",top:"122px",animationDelay:"0.75s"}}),Object(i.jsx)("div",{style:{left:"80px",top:"122px",animationDelay:"0.625s"}}),Object(i.jsx)("div",{style:{left:"122px",top:"122px",animationDelay:"0.5s"}})]})})})}),h=function(){var e=Object(j.b)(),t=v((function(e){return e})).product;return Object(r.useEffect)((function(){e(function(){var e=Object(O.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://fakestoreapi.com/products");case 3:c=e.sent,t({type:n.FETCH_PRODUCTS,payload:c.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,t({type:n.SET_LOADING,payload:!1}),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),t.loading?Object(i.jsx)(f,{}):Object(i.jsx)("div",{className:"wrapper__list",children:t.products.map((function(e){return Object(i.jsxs)("div",{className:"wrapper__list-item",children:[Object(i.jsx)("p",{children:e.title}),Object(i.jsx)(d.b,{to:"/item/".concat(e.id),children:Object(i.jsx)("img",{src:e.image,alt:""})}),Object(i.jsx)("span",{children:e.category})]},e.id)}))})},E=c(6),m=c(7),y=function(){var e=Object(o.h)().id,t=Object(j.b)(),c=Object(o.g)(),a=Object(r.useState)({category:null,description:null,price:null,rating:null}),s=Object(m.a)(a,2),l=s[0],d=s[1],p=v((function(e){return e})).product;Object(r.useEffect)((function(){e&&t(function(e){return function(){var t=Object(O.a)(u.a.mark((function t(c){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("https://fakestoreapi.com/products/".concat(e));case 3:r=t.sent,c({type:n.FETCH_SELECTED_PRODUCT,payload:r.data}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,c({type:n.SET_LOADING,payload:!1}),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,7,9,12]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),Object(r.useEffect)((function(){var e,t,c,n,r;d(Object(E.a)(Object(E.a)({},l),{},{category:null===p||void 0===p||null===(e=p.selectedProduct)||void 0===e?void 0:e.category,description:null===p||void 0===p||null===(t=p.selectedProduct)||void 0===t?void 0:t.description,price:null===p||void 0===p||null===(c=p.selectedProduct)||void 0===c?void 0:c.price,rating:null===p||void 0===p||null===(n=p.selectedProduct)||void 0===n||null===(r=n.rating)||void 0===r?void 0:r.rate}))}),[p]);return p.selectedProduct?Object(i.jsxs)("div",{className:"wrapper__item",children:[Object(i.jsxs)("div",{className:"wrapper__item-credentials",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){c("/"),t({type:n.REMOVE_SELECTED_PRODUCT})},children:"back"}),Object(i.jsx)("h1",{children:p.selectedProduct.title})]}),Object(i.jsxs)("div",{className:"wrapper__item-data",children:[Object(i.jsx)("img",{src:p.selectedProduct.image,alt:""}),Object(i.jsx)("div",{children:l.category&&Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:Object.entries(l).map((function(e){var t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:c}),Object(i.jsx)("td",{title:"description"===c&&n?n:"",children:Object(i.jsx)("p",{children:n})})]},c)}))})})})]})]}):Object(i.jsx)(h,{})};var _=function(){return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{path:"/",element:Object(i.jsx)(h,{})}),Object(i.jsx)(o.b,{path:"item/:id",element:Object(i.jsx)(y,{})}),Object(i.jsx)(o.b,{path:"*",element:Object(i.jsx)(o.a,{replace:!0,to:"/"})})]})]})})},D=c(11),T={loading:!1,products:[],selectedProduct:{}},C=Object(D.b)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_LOADING:return Object(E.a)(Object(E.a)({},e),{},{loading:t.payload});case n.FETCH_PRODUCTS:return Object(E.a)(Object(E.a)({},e),{},{products:t.payload});case n.FETCH_SELECTED_PRODUCT:return Object(E.a)(Object(E.a)({},e),{},{selectedProduct:t.payload});case n.REMOVE_SELECTED_PRODUCT:return Object(E.a)(Object(E.a)({},e),{},{selectedProduct:null});default:return e}}}),g=c(32),P=Object(D.c)(C,Object(D.a)(g.a));s.a.render(Object(i.jsx)(j.a,{store:P,children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.f0b4d37a.chunk.js.map