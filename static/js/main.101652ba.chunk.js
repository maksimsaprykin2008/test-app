(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),s=t.n(c),i=(t(11),t(12),t(2)),l=t(3),m=t(1),u=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"hr"}),r.a.createElement("div",{className:"kolba"}))},o=[{username:"maksim_saprykin",password:"chemistry"},{username:"samaksim208@mail.ru",password:"chemistry"},{username:"test-user",password:"chemistry"}],d=function(e){var a=e.form,t=e.handleChange,c=e.handleLoginClick,s=a.username,i=a.password,l=Object(n.useState)(!1),u=Object(m.a)(l,2),d=u[0],p=u[1],f=function(){p(!1)},E=function(e){o.map(function(a){e.username===a.username&&e.password===a.password||p(!0)})};return r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{style:{fontSize:"40px"}},"Log In"),r.a.createElement("div",{style:{height:"40px"}}),r.a.createElement("input",{name:"username",value:s,type:"text",placeholder:"Username",onChange:function(e){t(e),f()}}),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement("input",{name:"password",value:i,type:"password",placeholder:"Password",onChange:function(e){t(e),f()}}),r.a.createElement("div",{style:{height:"60px"}}),r.a.createElement("button",{type:"submit",onClick:function(e){c(e),function(e){e.preventDefault(),E(a)}(e)}},"Submit"),d&&r.a.createElement("div",{className:"alert"},"Wrong credentials, please try again!"))},p=function(){return r.a.createElement("div",{className:"lead-board"},"Leadboard")},f=(t(13),function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),f=Object(m.a)(s,2),E=f[0],b=f[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),g=h[0],w=h[1],O={username:"",password:""},j=Object(n.useState)(O),y=Object(m.a)(j,2),N=y[0],_=y[1];Object(n.useEffect)(function(){setTimeout(function(){return c(!0)},3e3),setTimeout(function(){return b(!0)},4e3)},[]);var k=function(e){o.map(function(a){e.username===a.username&&e.password===a.password&&w(!0)})};return r.a.createElement("div",{className:"container"},g&&r.a.createElement(p,null),E?r.a.createElement("div",{className:"animate__animated animate__fadeInUp"},!g&&r.a.createElement(d,{handleLoginClick:function(e){e.preventDefault(),k(N),_(O)},handleChange:function(e){_(Object(l.a)(Object(l.a)({},N),{},Object(i.a)({},e.target.name,e.target.value)))},form:N,valid:g})):r.a.createElement("div",null,r.a.createElement("div",{className:t?"subcontainer animate__animated animate__backOutUp":"subcontainer"},r.a.createElement("div",{className:"cork"}),r.a.createElement("h1",{className:"header"},"Chem"),r.a.createElement(u,null),r.a.createElement("h1",{className:"header"},"stry")),r.a.createElement("div",{className:t?"subtext animate__animated animate__backOutUp":"subtext"},"\u0425\u0438\u043c\u0438\u044f")))});var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)})};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),b()},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.101652ba.chunk.js.map