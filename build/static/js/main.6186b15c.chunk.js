(this["webpackJsonpnaor-client"]=this["webpackJsonpnaor-client"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(26),s=n.n(a),o=(n(75),n(9)),i=n(18),l=n.n(i),j=n(28),u=n(8),d=n(2),b=n(6),p=n(111),h=n(115),m=n(63),O=n(110),x=n(1),f=function(e){var t=e.inputname,n=e.label,c=e.type,r=e.handleChange;return Object(x.jsx)(O.a,{className:"col-md-4",children:Object(x.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(h.a.Label,{children:n}),Object(x.jsx)(h.a.Control,{type:c,placeholder:"\u05d4\u05db\u05e0\u05e1 ".concat(n),name:t,onChange:function(e){return r(e)},required:!0})]})})},v=function(e){var t=e.options,n=e.handleChange;return Object(x.jsx)(O.a,{className:"col-md-4",children:Object(x.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(h.a.Label,{children:"\u05d1\u05d7\u05e8 \u05e1\u05e4\u05e7"}),Object(x.jsxs)(h.a.Select,{onChange:function(e){return n(e)},name:"provider_name",children:[Object(x.jsx)("option",{children:"\u05d1\u05d7\u05e8"}),t.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))]})]})})},g=function(e){var t=e.inputs,n=e.handleSubmit,c=e.handleChange,r=e.title,a=e.selectOptions;return Object(x.jsxs)(p.a,{className:"mt-5 mr-5",children:[Object(x.jsx)("h1",{className:"display-5",children:r}),Object(x.jsxs)(h.a,{onSubmit:function(e){return n(e)},children:[t.map((function(e){return Object(x.jsx)(f,{type:e.type,label:e.label,handleChange:c,inputname:e.name},e.name)})),a?Object(x.jsx)(v,{options:a,handleChange:c}):null,Object(x.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},_=n(64),y=n.n(_),N=window.location.origin;N.includes("local")&&(N="http://localhost:5000"),console.log(N);var w=N,C=y.a.create({baseURL:w}),S=function(){var e=Object(c.useState)({provider_name:"",more_info:"",product_price:"",product_name:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(b.a)(a,2),o=s[0],i=s[1];Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/get_providers");case 3:t=e.sent,n=t.data.providers,i(n.map((function(e){return e.name}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var p=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C.post("/add_product",{state:n}).then((function(e){e.msg||alert("\u05d4\u05de\u05d5\u05e6\u05e8 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(g,{inputs:[{label:'\u05de\u05e7"\u05d8/\u05e9\u05dd \u05d4\u05de\u05d5\u05e6\u05e8',name:"product_name",type:"text"},{label:"\u05de\u05d7\u05d9\u05e8",name:"product_price",type:"number"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},n,c))}))},handleSubmit:p,title:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8 \u05dc\u05d6\u05d9\u05db\u05d5\u05d9",selectOptions:o})},k=function(){var e=Object(c.useState)({provider_name:"",more_info:""}),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){return function(){console.log(n)}}),[n]);var a=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C.post("/add_provider",{state:n}).then((function(e){e.msg||alert("\u05d4\u05e1\u05e4\u05e7 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(g,{inputs:[{label:"\u05e9\u05dd \u05d4\u05e1\u05e4\u05e7",name:"provider_name",type:"text"},{label:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2",name:"more_info",type:"text"}],handleChange:function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},n,c))}))},handleSubmit:a,title:"\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e4\u05e7"})},I=n(112),L=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/get_last_month");case 3:t=e.sent,n=t.data,r(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);return null===n?Object(x.jsx)("div",{children:"Still loading..."}):Object(x.jsx)(p.a,{className:"p-5",children:Object(x.jsxs)(I.a,{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:["\u05ea\u05d0\u05e8\u05d9\u05da","\u05d4\u05de\u05d5\u05e6\u05e8","\u05d4\u05e1\u05e4\u05e7","\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2","\u05de\u05d7\u05d9\u05e8"].map((function(e){return Object(x.jsx)("th",{scope:"col",className:"border-1",children:e})}))})}),Object(x.jsx)("tbody",{children:n.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{scope:"col",className:"border-1",children:e.created_at.replace("T"," ").replace("Z","").replace(".000","")}),Object(x.jsx)("td",{scope:"col",className:"border-1",children:e.product_name}),Object(x.jsx)("td",{scope:"col",className:"border-1",children:e.provider}),Object(x.jsx)("td",{scope:"col",className:"border-1",children:e.more_data}),Object(x.jsxs)("td",{scope:"col",className:"border-1",children:[e.product_price,' \u05e9"\u05d7']})]})}))})]})})},E=n(114),B=n(116),F=n(113),T=function(){return Object(x.jsx)(E.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(E.a.Brand,{href:"#home",children:"Rafi's warehouse"}),Object(x.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(B.a,{className:"me-auto",children:[Object(x.jsx)(B.a.Link,{href:"/",children:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8 \u05dc\u05d6\u05d9\u05db\u05d5\u05d9"}),Object(x.jsx)(B.a.Link,{href:"/add_provider",children:"\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e4\u05e7"}),Object(x.jsxs)(F.a,{title:"More Actions",id:"basic-nav-dropdown",children:[Object(x.jsx)(F.a.Item,{href:"/last_month",children:"\u05e6\u05e4\u05d4 \u05d1\u05d7\u05d5\u05d3\u05e9 \u05d4\u05d0\u05d7\u05e8\u05d5\u05df"}),Object(x.jsx)(F.a.Item,{href:"/info_provider",children:"\u05de\u05d9\u05d3\u05e2 \u05dc\u05e4\u05d9 \u05e1\u05e4\u05e7"}),Object(x.jsx)(F.a.Item,{href:"/export_csv",children:"\u05d9\u05d9\u05e6\u05d5\u05d0 \u05d3\u05d5\u05d7 \u05d3\u05d9\u05e0\u05de\u05d9 \u05dc\u05d0\u05e7\u05e1\u05dc"})]})]})})]})})},D=(n(101),function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(S,{})}}),Object(x.jsx)(o.a,{exact:!0,path:"/add_provider",render:function(){return Object(x.jsx)(k,{})}}),Object(x.jsx)(o.a,{exact:!0,path:"/last_month",render:function(){return Object(x.jsx)(L,{})}})]})]})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},J=n(41);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(J.a,{children:Object(x.jsx)(D,{})})}),document.getElementById("root")),G()},75:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.6186b15c.chunk.js.map