(this.webpackJsonpseidlserver_main_frontend=this.webpackJsonpseidlserver_main_frontend||[]).push([[0],{193:function(e,t,n){},260:function(e,t,n){},290:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},324:function(e,t,n){},328:function(e,t,n){},331:function(e,t,n){},335:function(e,t){},337:function(e,t){},349:function(e,t){},351:function(e,t){},379:function(e,t){},381:function(e,t){},382:function(e,t){},387:function(e,t){},389:function(e,t){},408:function(e,t){},420:function(e,t){},423:function(e,t){},440:function(e,t,n){},458:function(e,t,n){},591:function(e,t,n){},592:function(e,t,n){},593:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(33),a=n.n(s),r=n(11),i=(n(321),n(70),n(193),n(322),n(1));var o=function(e){return Object(i.jsx)("div",{className:"topbar",children:Object(i.jsx)("h1",{className:"servername noselect",children:e.servername})})},j=(n(324),n(26)),l=n(31),d=(n(328),n(42));var b=function(e){return Object(i.jsx)(d.b,{to:e.link,children:Object(i.jsxs)("div",{className:"sidebar-item",children:[Object(i.jsx)("div",{className:"sidebar-icon-container",children:Object(i.jsx)("button",{className:"bt-icon",children:Object(i.jsx)(j.a,{icon:e.icon,className:"icon"})})}),Object(i.jsx)("div",{className:"sidebar-text ".concat(e.open?"":"text-hidden"),children:Object(i.jsx)("span",{children:e.text})})]})})};var u=function(e){var t=e.open,n=e.setOpen;return Object(i.jsxs)("div",{className:"sidebar noselect ".concat(t?"sidebar-open":"sidebar-closed"),children:[Object(i.jsx)("button",{onClick:function(){return n(!t)},className:"bt-icon",children:Object(i.jsx)(j.a,{icon:t?l.i:l.a})}),Object(i.jsxs)("div",{className:"container-sidebar-items",children:[Object(i.jsx)(b,{icon:l.f,text:"Gameservers",open:t,link:"/gameservers"}),Object(i.jsx)(b,{icon:l.b,text:"Statistics",open:t,link:"/statistics"}),Object(i.jsx)(b,{icon:l.d,text:"Settings",open:t,link:"/settings"})]})]})},h=(n(331),n(183)),O=n(291);var m=function(){return Object(i.jsx)("div",{className:"footer-container noselect",children:Object(i.jsxs)("div",{className:"footer-content",children:[Object(i.jsxs)("div",{className:"github-plug",children:[Object(i.jsx)("a",{href:"https://github.com/elBoch",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsxs)("div",{className:"footer-item",children:[Object(i.jsx)(j.a,{icon:h.a}),"\xa0",Object(i.jsx)("p",{children:"elBoch"})]})}),Object(i.jsx)("a",{href:"https://github.com/Ionas208/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsxs)("div",{className:"footer-item",children:[Object(i.jsx)(j.a,{icon:h.a}),"\xa0",Object(i.jsx)("p",{children:"Ionas208"})]})})]}),Object(i.jsxs)("div",{children:["Seidlserver ",Object(i.jsx)(j.a,{icon:O.a})]})]})})},x=function(e){var t=e.servername,n=e.open,c=e.setOpen,s=e.children;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(u,{open:n,setOpen:c}),Object(i.jsxs)("div",{className:"actual-content",children:[Object(i.jsx)(o,{servername:t}),Object(i.jsx)("div",{className:"content-style children",children:s}),Object(i.jsx)(m,{})]})]})},f=n(22),v=n(130),p=n.n(v),g=function(){var e=new Date,t=p.a.decode(localStorage.getItem("jwt"));return!t||1e3*t.exp<e.getTime()},N=(n(440),n(35)),S=n.n(N);var y=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},w=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});var E=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=function(){w.get("/server/state").then((function(e){console.log("refreshing..."),"STARTING"!==n&&"STOPPING"!==n&&"RESTARTING"!==n&&s(e.data)})).catch((function(e){console.log(e),s("CONNECTION FAILED")}))};return Object(c.useEffect)((function(){a()}),[]),y((function(){a()}),5e3),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"status-container",children:[Object(i.jsxs)("div",{className:"status-status-container",children:[Object(i.jsxs)("h1",{children:["Status:","\xa0"]}),Object(i.jsx)("div",{className:"".concat(""===n?"loader":"")}),Object(i.jsx)("h1",{children:n})]}),Object(i.jsx)("div",{className:"icon-status",children:Object(i.jsx)(j.a,{icon:l.c,className:"icon-status ".concat("DOWN"===n?"status-down":"UP"===n?"status-up":""===n?"hidden":"status-no-connection")})}),Object(i.jsxs)("div",{className:"align-right",children:[Object(i.jsx)("button",{className:"bt-standard ".concat("UP"===n||""===n?"":"bt-disabled"),onClick:function(){if("UP"===n){s("RESTARTING");var e=setTimeout((function(){s(""),a()}),3e4);w.post("/server/restart").then((function(e){console.log("restarting...")})).catch((function(t){clearTimeout(e),console.log(t),s("CONNECTION FAILED")}))}},children:Object(i.jsx)(j.a,{icon:l.h})}),Object(i.jsx)("button",{className:"bt-standard ".concat("DOWN"===n?"bt-red":"UP"===n||""===n?"bt-green":"bt-disabled"),onClick:function(){if("DOWN"===n){s("STARTING");var e=setTimeout((function(){s(""),a()}),35e3);w.post("/server/start").then((function(e){console.log("starting...")})).catch((function(t){clearTimeout(e),s("CONNECTION FAILED"),console.log(t)}))}else if("UP"===n){s("STOPPING");e=setTimeout((function(){s(""),a()}),1e4);w.post("/server/stop").then((function(e){console.log("stopping...")})).catch((function(t){clearTimeout(e),s("CONNECTION FAILED"),console.log(t)}))}},children:Object(i.jsx)(j.a,{icon:l.e})})]})]}),Object(i.jsx)("hr",{})]})},C=(n(260),n(616)),I=n(618),k=n(615);var L=function(e){var t=e.item,n=e.getServerList,s=Object(c.useState)(!1),a=Object(r.a)(s,2),o=a[0],d=a[1],b=Object(c.useState)(!1),u=Object(r.a)(b,2),h=u[0],O=u[1],m=Object(c.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1],g=p.a.decode(localStorage.getItem("jwt")),N=t.owner===g.sub,y=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}),w=function(){y.get("gameserver/state",{params:{id:t.id}}).then((function(e){d("ONLINE"===e.data||"STARTED"===e.data),console.log(e.data)})).catch((function(e){console.log(e.message),d(!1)}))},E=function(){console.log("start"),y.post("gameserver/start?id="+t.id).then((function(e){d(!0)})).catch((function(e){console.log(e),d(!1)}))},L=function(){console.log("stop"),y.post("gameserver/stop?id="+t.id).then((function(e){d(!1)})).catch((function(e){console.log(e),d(!1)}))};Object(c.useEffect)((function(){w()}),[h]);var R=function(e){e.preventDefault(),y.post("/gameserver/share?serverid="+t.id+"&email="+f).then((function(e){O(!1),v("")})).catch((function(e){console.error(e),400==e.response.status?alert("Server is already shared with the user."):alert("Sharing was not successful.")}))};return Object(i.jsxs)("div",{className:"gameserver-item-container gameserver-item-game",children:[Object(i.jsxs)("div",{className:"gameserver-item-header",children:[Object(i.jsx)("img",{src:t.type.url,alt:""}),Object(i.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(i.jsx)("h1",{className:"gameserver-item-h1",children:t.servername}),Object(i.jsxs)("p",{children:["/home/",t.linuxuser]})]})]}),Object(i.jsx)("div",{className:"gameserver-item-operator",children:Object(i.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)("h2",{children:o?"ONLINE":"OFFLINE"}),Object(i.jsx)(j.a,{icon:l.c,className:"icon-status ".concat(o?"status-up":"status-down")})]}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(i.jsx)("button",{className:"bt-standard bt-gameserver-item",onClick:w,children:Object(i.jsx)(j.a,{icon:l.h})}),Object(i.jsx)("button",{className:"bt-standard bt-gameserver-item",onClick:function(){N?y.post("gameserver/remove?id="+t.id).then((function(e){console.log(e),n()})).catch((function(e){console.log(e)})):y.post("gameserver/unshare?serverid="+t.id).then((function(e){console.log(e),n()})).catch((function(e){console.log(e)}))},children:Object(i.jsx)(j.a,{icon:l.j})}),Object(i.jsx)("button",{className:"bt-standard bt-gameserver-item",onClick:function(){w(),o?L():E()},children:Object(i.jsx)(j.a,{icon:l.e})})]})]})}),Object(i.jsx)("button",{className:"bt-gameserver-share",style:N?{visibility:"visible"}:{visibility:"hidden"},onClick:function(){O(!0)},children:Object(i.jsx)(j.a,{icon:l.g,className:"icon-share"})}),Object(i.jsx)(C.a,{open:h,onClose:function(){return O(!1)},closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500},children:Object(i.jsx)(I.a,{in:h,children:Object(i.jsxs)("div",{className:"modal-container",children:[Object(i.jsx)("h1",{children:"Share Gameserver"}),Object(i.jsxs)("form",{onSubmit:R,children:[Object(i.jsx)("p",{className:"form-header",children:"Email"}),Object(i.jsx)("input",{type:"text",value:f,onChange:function(e){return v(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"bt-standard",style:{marginLeft:"auto"},onClick:R,children:"Share"})]})]})})})]})};var R=function(e){var t=e.getServerList,n=Object(c.useState)([]),s=Object(r.a)(n,2),a=(s[0],s[1]),o=Object(c.useState)(!1),j=Object(r.a)(o,2),l=j[0],d=j[1],b=Object(c.useState)(""),u=Object(r.a)(b,2),h=u[0],O=u[1],m=Object(c.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1],p=Object(c.useState)(""),g=Object(r.a)(p,2),N=g[0],y=g[1],w=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});Object(c.useEffect)((function(){w.get("/gameserver/types").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]);var E=function(e){e.preventDefault(),w.post("/gameserver/add",{linuxuser:h,servername:f,type:N}).then((function(e){t(),d(!1)})).catch((function(e){console.error(e),alert("scriptname must be unique")}))};return Object(i.jsxs)("div",{className:"gameserver-item-container gameserver-item-add",children:[Object(i.jsx)("button",{className:"bt-add-server",onClick:function(){d(!0)},children:"+"}),Object(i.jsx)(C.a,{open:l,onClose:function(){return d(!1)},closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500},children:Object(i.jsx)(I.a,{in:l,children:Object(i.jsxs)("div",{className:"modal-container",children:[Object(i.jsx)("h1",{children:"Add server"}),Object(i.jsx)("form",{onSubmit:E,children:Object(i.jsxs)("div",{className:"modal-add-server-container",children:[Object(i.jsx)("p",{className:"form-header",children:"Type"}),Object(i.jsxs)("select",{value:N,onChange:function(e){return y(e.target.value)},children:[Object(i.jsx)("option",{children:"Ark"}),Object(i.jsx)("option",{children:"Minecraft"}),Object(i.jsx)("option",{children:"TS3"})]}),Object(i.jsx)("p",{className:"form-header",children:"Linuxuser"}),Object(i.jsx)("input",{type:"text",value:h,onChange:function(e){return function(e){var t=/[a-zA-Z0-9]+/.exec(e.target.value);null===t&&(t=[""]),O(t.join(""))}(e)}}),Object(i.jsx)("p",{className:"form-header",children:"Servername"}),Object(i.jsx)("input",{type:"text",value:f,onChange:function(e){return v(e.target.value)}}),Object(i.jsx)("button",{className:"bt-standard",style:{marginLeft:"auto"},onClick:E,children:"Add"})]})})]})})})]})};var T=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}),o=function(){a.get("gameserver/list").then((function(e){s(e.data)})).catch((function(e){console.log(e),s([])}))};return Object(c.useEffect)((function(){o()}),[]),Object(i.jsxs)("div",{className:"gameserver-list-container noselect",children:[n.map((function(e){return Object(i.jsx)(L,{item:e,getServerList:o},e.id)})),Object(i.jsx)(R,{getServerList:o})]})};var A=function(e){var t=e.open,n=e.setOpen;return g()?Object(i.jsx)(f.a,{to:"/login"}):Object(i.jsxs)(x,{servername:"SEIDLSERVER",open:t,setOpen:n,children:[Object(i.jsx)("h1",{className:"stat-h1",children:"Gameservers"}),Object(i.jsx)(E,{}),Object(i.jsx)(T,{})]})},P=(n(458),n(610)),D=n(309),U=n(614),B=n(306),G=n(307),F=n(110);var _=function(e){var t=e.open,n=e.setOpen,s=Object(c.useState)(null),a=Object(r.a)(s,2),o=a[0],j=a[1],l=Object(c.useState)(null),d=Object(r.a)(l,2),b=d[0],u=d[1],h=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}),O=24;return Object(c.useEffect)((function(){h.get("/stats/mem").then((function(e){var t=[];e.data.forEach((function(e){var n=e.timestamp.split("T")[1];n=n.split(":")[0]+":"+n.split(":")[1],console.log(e),O=e.memTotal;var c=e.memFree,s={time:n,memUsed:Math.round(100*(O-c))/100};t.push(s)})),j(t)})).catch((function(e){console.log(e)})),h.get("/stats/cpu").then((function(e){console.log(e.data);var t=[];e.data.forEach((function(e){var n=e.timestamp.split("T")[1];n=n.split(":")[0]+":"+n.split(":")[1];var c=100-e.load.idle,s={time:n,usage:Math.round(100*c)/100};t.push(s)})),u(t)})).catch((function(e){console.log(e)}))}),[]),g()?Object(i.jsx)(f.a,{to:"/login"}):Object(i.jsxs)(x,{servername:"SEIDLSERVER",open:t,setOpen:n,children:[Object(i.jsx)("h1",{className:"stat-h1",children:"Statistics"}),Object(i.jsxs)("div",{className:"stat-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"stat-h2",children:"RAM"}),Object(i.jsxs)(P.a,{width:650,height:300,data:o,children:[Object(i.jsx)(D.a,{type:"linear",dataKey:"memUsed",stroke:"#2B890D",dot:!1,strokeWidth:2}),Object(i.jsx)(U.a,{stroke:"#ccc"}),Object(i.jsx)(B.a,{dataKey:"time"}),Object(i.jsx)(G.a,{unit:"GB",type:"number",domain:[0,O]}),Object(i.jsx)(F.a,{})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"stat-h2",children:"CPU"}),Object(i.jsxs)(P.a,{width:650,height:300,data:b,children:[Object(i.jsx)(D.a,{type:"linear",dataKey:"usage",stroke:"#31A5E1",dot:!1,strokeWidth:2}),Object(i.jsx)(U.a,{stroke:"#ccc"}),Object(i.jsx)(B.a,{dataKey:"time"}),Object(i.jsx)(G.a,{unit:"%",type:"number",domain:[0,100]}),Object(i.jsx)(F.a,{})]})]})]})]})},z=function(e){var t=e.servername,n=e.children;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"actual-content",children:[Object(i.jsx)(o,{servername:t}),Object(i.jsx)("div",{className:"content-style children",children:n}),Object(i.jsx)(m,{})]})})};n(290);var V=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),j=o[0],l=o[1],b=Object(c.useState)(!1),u=Object(r.a)(b,2),h=u[0],O=u[1],m=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/"});if(!g()||h)return Object(i.jsx)(f.a,{to:"/gameservers"});var x=function(e){e.preventDefault(),m.post("/auth/login",{email:n,password:j}).then((function(e){localStorage.setItem("jwt",e.data),O(!0)})).catch((function(e){alert("Login failed")}))};return Object(i.jsx)(z,{servername:"SEIDLSERVER",children:Object(i.jsx)("form",{onSubmit:x,children:Object(i.jsx)("div",{className:"login-container noselect",children:Object(i.jsxs)("div",{className:"login-content",children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsx)("p",{children:"Email"}),Object(i.jsx)("input",{type:"email",value:n,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("p",{children:"Password"}),Object(i.jsx)("input",{type:"password",value:j,onChange:function(e){return l(e.target.value)}}),Object(i.jsxs)("div",{className:"text-and-bt",children:[Object(i.jsxs)("span",{className:"small-txt",children:["No Account? ",Object(i.jsx)(d.b,{to:"/register",children:"Register"})]}),Object(i.jsx)("button",{onClick:x,className:"bt-standard align-right",children:"Login"})]})]})})})})};var W=function(){var e=S.a.create({baseURL:"http://seidlserver.ddns.net:8080/"}),t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),l=j[0],b=j[1],u=Object(c.useState)(""),h=Object(r.a)(u,2),O=h[0],m=h[1],x=Object(c.useState)(!1),v=Object(r.a)(x,2),p=v[0],N=v[1],y=function(){l===O?e.post("/auth/register",{first_name:"",last_name:"",email:s,password:l}).then((function(t){e.post("/auth/login",{email:s,password:l}).then((function(e){localStorage.setItem("jwt",e.data),N(!0)})).catch((function(e){alert("Login failed")}))})).catch((function(e){alert("Registration failed"),console.log(e)})):alert("Passwords are not the same")};return!g()||p?Object(i.jsx)(f.a,{to:"/login"}):Object(i.jsx)(z,{servername:"SEIDLSERVER",children:Object(i.jsx)("form",{onSubmit:y,children:Object(i.jsx)("div",{className:"login-container noselect",children:Object(i.jsxs)("div",{className:"login-content",children:[Object(i.jsx)("h1",{children:"Register"}),Object(i.jsx)("p",{children:"Email"}),Object(i.jsx)("input",{type:"email",value:s,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("p",{children:"Password"}),Object(i.jsx)("input",{type:"password",value:l,onChange:function(e){return b(e.target.value)}}),Object(i.jsx)("p",{children:"Repeat Password"}),Object(i.jsx)("input",{type:"password",value:O,onChange:function(e){return m(e.target.value)}}),Object(i.jsxs)("div",{className:"text-and-bt",children:[Object(i.jsxs)("span",{className:"small-txt",children:["Already have an Account? ",Object(i.jsx)(d.b,{to:"/login",children:"Login"})]}),Object(i.jsx)("button",{className:"bt-standard align-right",onClick:y,children:"Register"})]})]})})})})};n(591);var K=function(e){var t=e.open,n=e.setOpen;return g()?Object(i.jsx)(f.a,{to:"/login"}):Object(i.jsx)(x,{servername:"SEIDLSERVER",open:t,setOpen:n,children:Object(i.jsxs)("div",{className:"settings-container",children:[Object(i.jsxs)("div",{className:"settings-section",children:[Object(i.jsx)("h2",{children:"Change Username"}),Object(i.jsx)("p",{children:"New Username"}),Object(i.jsx)("input",{type:"text"}),Object(i.jsx)("p",{children:"Password"}),Object(i.jsx)("input",{type:"password"}),Object(i.jsx)("button",{className:"bt-standard",children:"Change"}),Object(i.jsx)("hr",{})]}),Object(i.jsxs)("div",{className:"settings-section",children:[Object(i.jsx)("h2",{children:"Change Password"}),Object(i.jsx)("p",{children:"New Password"}),Object(i.jsx)("input",{type:"password"}),Object(i.jsx)("p",{children:"Repeat Password"}),Object(i.jsx)("input",{type:"password"}),Object(i.jsx)("p",{children:"Old Password"}),Object(i.jsx)("input",{type:"password"}),Object(i.jsx)("button",{className:"bt-standard",children:"Change"}),Object(i.jsx)("hr",{})]}),Object(i.jsx)("button",{onClick:function(){localStorage.removeItem("jwt")},className:"bt-standard",children:Object(i.jsx)(d.b,{to:"/login",children:"logout"})})]})})};var M=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(i.jsx)(d.a,{children:Object(i.jsxs)(f.d,{children:[Object(i.jsx)(f.b,{path:"/gameservers",exact:!0,render:function(){return Object(i.jsx)(A,{setOpen:s,open:n})}}),Object(i.jsx)(f.b,{path:"/settings",exact:!0,render:function(){return Object(i.jsx)(K,{setOpen:s,open:n})}}),Object(i.jsx)(f.b,{path:"/statistics",exact:!0,render:function(){return Object(i.jsx)(_,{setOpen:s,open:n})}}),Object(i.jsx)(f.b,{path:"/login",exact:!0,component:V}),Object(i.jsx)(f.b,{path:"/register",exact:!0,component:W}),Object(i.jsx)(f.b,{path:"/",exact:!0,render:function(){return Object(i.jsx)(A,{setOpen:s,open:n})}})]})})};n(592);a.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(M,{})}),document.getElementById("root"))},70:function(e,t,n){}},[[593,1,2]]]);
//# sourceMappingURL=main.62f30d68.chunk.js.map