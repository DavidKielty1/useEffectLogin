(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__1gPgy",control:"Login_control__11BNv",invalid:"Login_invalid__BnFol",actions:"Login_actions__a3O0m"}},,,function(e,t,n){e.exports={card:"Card_card__1gz7u"}},function(e,t,n){e.exports={button:"Button_button__2zmAH"}},function(e,t,n){e.exports={home:"Home_home__3Pyf6"}},function(e,t,n){e.exports={nav:"Navigation_nav__1p3Pj"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__2HrO6"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(5),i=n.n(o),s=(n(15),n(2)),l=n(6),r=n.n(l),j=n(0),u=function(e){return Object(j.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},d=n(3),b=n.n(d),g=n(7),h=n.n(g),O=function(e){return Object(j.jsx)("button",{type:e.type||"button",className:"".concat(h.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},m=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(),l=Object(s.a)(i,2),r=l[0],d=l[1],g=Object(c.useState)(""),h=Object(s.a)(g,2),m=h[0],x=h[1],f=Object(c.useState)(),_=Object(s.a)(f,2),p=_[0],v=_[1],L=Object(c.useState)(!1),N=Object(s.a)(L,2),I=N[0],S=N[1];return Object(j.jsx)(u,{className:b.a.login,children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(a,m)},children:[Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===r?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(j.jsx)("input",{type:"email",id:"email",value:a,onChange:function(e){o(e.target.value),S(e.target.value.includes("@")&&m.trim().length>6)},onBlur:function(){d(a.includes("@"))}})]}),Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===p?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",value:m,onChange:function(e){x(e.target.value),S(e.target.value.trim().length>6&&a.includes("@"))},onBlur:function(){v(m.trim().length>6)}})]}),Object(j.jsx)("div",{className:b.a.actions,children:Object(j.jsx)(O,{type:"submit",className:b.a.btn,disabled:!I,children:"Login"})})]})})},x=n(8),f=n.n(x),_=function(e){return Object(j.jsx)(u,{className:f.a.home,children:Object(j.jsx)("h1",{children:"Welcome back!"})})},p=n(9),v=n.n(p),L=function(e){return Object(j.jsx)("nav",{className:v.a.nav,children:Object(j.jsxs)("ul",{children:[e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),I=n.n(N),S=function(e){return Object(j.jsxs)("header",{className:I.a["main-header"],children:[Object(j.jsx)("h1",{children:"A Typical Page"}),Object(j.jsx)(L,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],i=function(){localStorage.removeItem("isLoggedIn"),o(!1)};return Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&o(!0)}),[]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(S,{isAuthenticated:n,onLogout:i}),Object(j.jsxs)("main",{children:[!n&&Object(j.jsx)(m,{onLogin:function(e,t){localStorage.setItem("isLoggedIn","1"),o(!0)}}),n&&Object(j.jsx)(_,{onLogout:i})]})]})};i.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.be8cbb65.chunk.js.map