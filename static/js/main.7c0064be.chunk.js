(this.webpackJsonptodoslist=this.webpackJsonptodoslist||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),d=(n(15),n(16),n(6)),r=n(3),s=n(1);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var d=function(t){i(t.target.value)};return Object(s.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")},children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Add a Todo",value:c,name:"text",className:"todo-input edit",onChange:d,ref:a}),Object(s.jsx)("button",{className:"todo-button edit",children:"update todo"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Add a Todo",value:c,name:"text",className:"todo-input",onChange:d,ref:a}),Object(s.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),d=Object(r.a)(a,2),b=d[0],f=d[1];return b.id?Object(s.jsx)(u,{edit:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(s.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"What's the plan for today"}),Object(s.jsx)(u,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var o=[t].concat(Object(d.a)(n));c(o),(e=console).log.apply(e,Object(d.a)(n))}}}),Object(s.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(f,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.7c0064be.chunk.js.map