(this["webpackJsonpnaor-client"]=this["webpackJsonpnaor-client"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),s=n.n(c),o=(n(75),n(9)),i=n(18),l=n.n(i),u=n(28),j=n(8),d=n(2),b=n(6),h=n(111),p=n(115),m=n(63),O=n(110),f=n(1),x=function(e){var t=e.inputname,n=e.label,r=e.type,a=e.handleChange;return Object(f.jsx)(O.a,{className:"col-md-4",children:Object(f.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(p.a.Label,{children:n}),Object(f.jsx)(p.a.Control,{type:r,placeholder:"\u05d4\u05db\u05e0\u05e1 ".concat(n),name:t,onChange:function(e){return a(e)},required:!0})]})})},v=function(e){var t=e.options,n=e.handleChange;return Object(f.jsx)(O.a,{className:"col-md-4",children:Object(f.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(p.a.Label,{children:"\u05d1\u05d7\u05e8 \u05e1\u05e4\u05e7"}),Object(f.jsxs)(p.a.Select,{onChange:function(e){return n(e)},name:"provider_name",children:[Object(f.jsx)("option",{children:"\u05d1\u05d7\u05e8"}),t.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})]})})},g=function(e){var t=e.inputs,n=e.handleSubmit,r=e.handleChange,a=e.title,c=e.selectOptions;return Object(f.jsxs)(h.a,{className:"mt-5 mr-5",children:[Object(f.jsx)("h1",{className:"display-5",children:a}),Object(f.jsxs)(p.a,{onSubmit:function(e){return n(e)},children:[t.map((function(e){return Object(f.jsx)(x,{type:e.type,label:e.label,handleChange:r,inputname:e.name},e.name)})),c?Object(f.jsx)(v,{options:c,handleChange:r}):null,Object(f.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},_=n(64),y=n.n(_),w=window.location.origin;w.includes("local")&&(w="http://localhost:5000");var C=w,N=y.a.create({baseURL:C}),S=function(){var e=Object(r.useState)({provider_name:"",more_info:"",product_price:"",product_name:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(b.a)(c,2),o=s[0],i=s[1];Object(r.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/get_providers");case 3:t=e.sent,n=t.data.providers,i(n.map((function(e){return e.name}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var h=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.post("/add_product",{state:n}).then((function(e){e.msg||alert("\u05d4\u05de\u05d5\u05e6\u05e8 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(g,{inputs:[{label:'\u05de\u05e7"\u05d8/\u05e9\u05dd \u05d4\u05de\u05d5\u05e6\u05e8',name:"product_name",type:"text"},{label:"\u05de\u05d7\u05d9\u05e8",name:"product_price",type:"number"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,r=t.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,r))}))},handleSubmit:h,title:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8 \u05dc\u05d6\u05d9\u05db\u05d5\u05d9",selectOptions:o})},k=function(){var e=Object(r.useState)({provider_name:"",more_info:""}),t=Object(b.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){return function(){console.log(n)}}),[n]);var c=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.post("/add_provider",{state:n}).then((function(e){e.msg||alert("\u05d4\u05e1\u05e4\u05e7 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(g,{inputs:[{label:"\u05e9\u05dd \u05d4\u05e1\u05e4\u05e7",name:"provider_name",type:"text"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,r=t.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,r))}))},handleSubmit:c,title:"\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e4\u05e7"})},I=n(112),L=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/get_last_month");case 3:t=e.sent,n=t.data,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);return Object(f.jsxs)(I.a,{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:["\u05ea\u05d0\u05e8\u05d9\u05da","\u05d4\u05de\u05d5\u05e6\u05e8","\u05d4\u05e1\u05e4\u05e7","\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2","\u05de\u05d7\u05d9\u05e8"].map((function(e){return Object(f.jsx)("th",{scope:"col",className:"border-1",children:e})}))})}),Object(f.jsx)("tbody",{children:n.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{scope:"col",className:"border-1",children:e.provider}),Object(f.jsx)("td",{scope:"col",className:"border-1",children:e.product}),Object(f.jsx)("td",{scope:"col",className:"border-1",children:e.info}),Object(f.jsx)("td",{scope:"col",className:"border-1",children:e.date})]})}))})]})},E=n(114),B=n(116),F=n(113),D=function(){return Object(f.jsx)(E.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(E.a.Brand,{href:"#home",children:"Rafi's warehouse"}),Object(f.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(B.a,{className:"me-auto",children:[Object(f.jsx)(B.a.Link,{href:"/",children:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8 \u05dc\u05d6\u05d9\u05db\u05d5\u05d9"}),Object(f.jsx)(B.a.Link,{href:"/add_provider",children:"\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e4\u05e7"}),Object(f.jsxs)(F.a,{title:"More Actions",id:"basic-nav-dropdown",children:[Object(f.jsx)(F.a.Item,{href:"/last_month",children:"\u05e6\u05e4\u05d4 \u05d1\u05d7\u05d5\u05d3\u05e9 \u05d4\u05d0\u05d7\u05e8\u05d5\u05df"}),Object(f.jsx)(F.a.Item,{href:"/info_provider",children:"\u05de\u05d9\u05d3\u05e2 \u05dc\u05e4\u05d9 \u05e1\u05e4\u05e7"}),Object(f.jsx)(F.a.Item,{href:"/export_csv",children:"\u05d9\u05d9\u05e6\u05d5\u05d0 \u05d3\u05d5\u05d7 \u05d3\u05d9\u05e0\u05de\u05d9 \u05dc\u05d0\u05e7\u05e1\u05dc"})]})]})})]})})},T=(n(101),function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(D,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(S,{})}}),Object(f.jsx)(o.a,{exact:!0,path:"/add_provider",render:function(){return Object(f.jsx)(k,{})}}),Object(f.jsx)(o.a,{exact:!0,path:"/last_month",render:function(){return Object(f.jsx)(L,{})}})]})]})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},J=n(41);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(J.a,{children:Object(f.jsx)(T,{})})}),document.getElementById("root")),G()},75:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.fb83220c.chunk.js.map