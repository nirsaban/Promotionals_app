(this["webpackJsonpnaor-client"]=this["webpackJsonpnaor-client"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),o=(n(75),n(9)),s=n(26),l=n.n(s),u=n(32),j=n(8),d=n(2),b=n(6),h=n(111),p=n(114),m=n(63),f=n(110),O=n(1),x=function(e){var t=e.inputname,n=e.label,a=e.type,r=e.handleChange;return Object(O.jsx)(f.a,{className:"col-md-4",children:Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:n}),Object(O.jsx)(p.a.Control,{type:a,placeholder:"\u05d4\u05db\u05e0\u05e1 ".concat(n),name:t,onChange:function(e){return r(e)},required:!0})]})})},v=function(e){var t=e.options,n=e.handleChange;return Object(O.jsx)(f.a,{className:"col-md-4",children:Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"\u05d1\u05d7\u05e8 \u05e1\u05e4\u05e7"}),Object(O.jsxs)(p.a.Select,{onChange:function(e){return n(e)},name:"provider_name",children:[Object(O.jsx)("option",{children:"\u05d1\u05d7\u05e8"}),t.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))]})]})})},g=function(e){var t=e.inputs,n=e.handleSubmit,a=e.handleChange,r=e.title,c=e.selectOptions;return Object(O.jsxs)(h.a,{className:"mt-5 mr-5",children:[Object(O.jsx)("h1",{className:"display-5",children:r}),Object(O.jsxs)(p.a,{onSubmit:function(e){return n(e)},children:[t.map((function(e){return Object(O.jsx)(x,{type:e.type,label:e.label,handleChange:a,inputname:e.name},e.name)})),c?Object(O.jsx)(v,{options:c,handleChange:a}):null,Object(O.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},_=n(64),y=n.n(_),w=window.location.origin;w.includes("local")&&(w="http://localhost:5000");var C=w,S=y.a.create({baseURL:C}),k=function(){var e=Object(a.useState)({provider_name:"",more_info:"",product_price:"",product_name:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(b.a)(c,2),o=i[0],s=i[1];Object(a.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/get_providers");case 3:t=e.sent,n=t.data.providers,s(n.map((function(e){return e.name}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var h=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S.post("http://localhost:5000/add_product",{state:n}).then((function(e){e.msg||alert("\u05d4\u05de\u05d5\u05e6\u05e8 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(g,{inputs:[{label:'\u05de\u05e7"\u05d8/\u05e9\u05dd \u05d4\u05de\u05d5\u05e6\u05e8',name:"product_name",type:"text"},{label:"\u05de\u05d7\u05d9\u05e8",name:"product_price",type:"number"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,a))}))},handleSubmit:h,title:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8 \u05dc\u05d6\u05d9\u05db\u05d5\u05d9",selectOptions:o})},L=function(){var e=Object(a.useState)({provider_name:"",more_info:""}),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){return function(){console.log(n)}}),[n]);var c=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S.post("/add_provider",{state:n}).then((function(e){e.msg||alert("\u05d4\u05e1\u05e4\u05e7 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(g,{inputs:[{label:"\u05e9\u05dd \u05d4\u05e1\u05e4\u05e7",name:"provider_name",type:"text"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,a))}))},handleSubmit:c,title:"\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e4\u05e7"})},I=n(113),N=n(115),E=n(112),B=function(){return Object(O.jsx)(I.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(I.a.Brand,{href:"#home",children:"Rafi's warehouse"}),Object(O.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(I.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(N.a,{className:"me-auto",children:[Object(O.jsx)(N.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(N.a.Link,{href:"/add_provider",children:"Add Provider"}),Object(O.jsxs)(E.a,{title:"More Actions",id:"basic-nav-dropdown",children:[Object(O.jsx)(E.a.Item,{href:"#action/3.1",children:"Show Last month"}),Object(O.jsx)(E.a.Item,{href:"#action/3.2",children:"show per Provider"}),Object(O.jsx)(E.a.Item,{href:"#action/3.3",children:"Export Dynamic Report"})]})]})})]})})},D=(n(101),function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(B,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(k,{})}}),Object(O.jsx)(o.a,{exact:!0,path:"/add_provider",render:function(){return Object(O.jsx)(L,{})}})]})]})}),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},P=n(40);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(P.a,{children:Object(O.jsx)(D,{})})}),document.getElementById("root")),F()},75:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.109224b7.chunk.js.map