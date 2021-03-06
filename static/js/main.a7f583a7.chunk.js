(this.webpackJsonpnetninjablog=this.webpackJsonpnetninjablog||[]).push([[0],{15:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(17),s=c.n(i),a=(c(15),c(7)),o=c(0),j=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:"The React Blog"}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(a.b,{to:"/",children:"Home"}),Object(o.jsx)(a.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},l=function(e){var t=e.blogs,c=e.title;e.handleDelete;return Object(o.jsxs)("div",{className:"blog-list",children:[Object(o.jsx)("h2",{children:c}),t.map((function(e){return Object(o.jsx)("div",{className:"blog-preview",children:Object(o.jsxs)(a.b,{to:"/blogs/".concat(e.id),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("p",{children:["Written By ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(!0),a=Object(b.a)(s,2),o=a[0],j=a[1],l=Object(n.useState)(null),d=Object(b.a)(l,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){console.log(e),i(e),j(!1),u(!1)})).catch((function(e){"AbortError"===e.name?console.log("Fetch Aborted"):(u(e.message),j(!1))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:o,error:h}},h=function(){var e=d("https://my-json-server.typicode.com/ShahzaibQadir/ReactBlogJSONServer/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(o.jsxs)("div",{className:"home",children:[n&&Object(o.jsx)("div",{children:n}),c&&Object(o.jsx)("div",{children:"Loading...."}),t&&Object(o.jsx)(l,{blogs:t,title:"All Blogs !"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(b.a)(i,2),a=s[0],j=s[1],l=Object(n.useState)("Shahzaib"),d=Object(b.a)(l,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),v=g[0],f=g[1],p=Object(u.f)();return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{children:"Add a New Blog"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:a,author:h};f(!0),fetch("https://my-json-server.typicode.com/ShahzaibQadir/ReactBlogJSONServer/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("New Blog Added"),f(!1),p.push("/")}))},children:[Object(o.jsx)("label",{children:"Blog title: "}),Object(o.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("label",{children:"Blog body: "}),Object(o.jsx)("textarea",{required:"required",value:a,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{children:"Blog author: "}),Object(o.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(o.jsx)("option",{value:"Shahzaib",children:"Shahzaib"}),Object(o.jsx)("option",{value:"Mehmam",children:"Mehmam"})]}),!v&&Object(o.jsx)("button",{children:"Add Blog"}),v&&Object(o.jsx)("button",{disabled:!0,children:"Adding Blog...."})]})]})},x=function(){var e=Object(u.g)().id,t=d("https://my-json-server.typicode.com/ShahzaibQadir/ReactBlogJSONServer/blogs/"+e),c=t.data,n=t.isPending,r=t.error,i=Object(u.f)();return Object(o.jsxs)("div",{className:"blog-details",children:[n&&Object(o.jsx)("div",{children:"Loading..."}),r&&Object(o.jsx)("div",{children:r}),c&&Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:c.title}),Object(o.jsxs)("p",{children:["Written by ",c.author]}),Object(o.jsx)("div",{children:c.body}),Object(o.jsx)("button",{onClick:function(){fetch("https://my-json-server.typicode.com/ShahzaibQadir/ReactBlogJSONServer/blogs/"+c.id,{method:"DELETE"}).then((function(){i.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(o.jsxs)("div",{className:"not-found",children:[Object(o.jsx)("h2",{children:"Sorry"}),Object(o.jsx)("p",{children:"That page cannot be found"}),Object(o.jsx)(a.b,{to:"/",children:"Back to the homepage..."})]})};var v=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{path:"/create",children:Object(o.jsx)(O,{})}),Object(o.jsx)(u.a,{path:"/blogs/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(u.a,{path:"*",children:Object(o.jsx)(g,{})})]})})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a7f583a7.chunk.js.map