(this.webpackJsonpycmentoring=this.webpackJsonpycmentoring||[]).push([[0],{26:function(e,t,n){e.exports=n(46)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),o=n.n(r),i=n(9),l=(n(31),n(3)),u=n(4),s=n(6),m=n(5),b=n(7),h=(n(32),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"Home")}}]),t}(c.a.Component)),v=(n(33),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"Video")}}]),t}(c.a.Component)),g=(n(34),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"About")}}]),t}(c.a.Component)),p=(n(35),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"Blog")}}]),t}(c.a.Component)),f=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"Book")}}]),t}(c.a.Component)),E=(n(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,"Contact")}}]),t}(c.a.Component)),d=n(12),O=n(24),j=n(18),k=n(25),w=(n(38),n(39),n(40),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"center"},c.a.createElement("input",{type:"checkbox",name:""}))}}]),t}(c.a.Component)),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={currentView:"/",hamburgerActive:!1},n.setView=function(e){n.setState({currentView:e})},n.toggleHamburger=function(){var e=n.state.hamburgerActive;n.setState({hamburgerActive:!e})},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.currentView,a=t.hamburgerActive,r=a?"hamburger hamburger--collapse is-active":"hamburger hamburger--collapse",o=a?"side-nav active-side-nav":"side-nav";return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:o},c.a.createElement("div",{className:"side-nav-block"},c.a.createElement("div",{className:"side-nav-links"},c.a.createElement("div",{className:"side-links"},c.a.createElement(i.b,{onClick:function(){e.setView("/blog"),e.toggleHamburger()},to:"/blog"},"Blog"),c.a.createElement(i.b,{onClick:function(){e.setView("/about"),e.toggleHamburger()},to:"/about"},"About"),c.a.createElement("a",{href:"https://www.overdrive.com/media/2180549/\uc601\uc6d0\ud788-\uc80a\uc740-\uc544\ubc84\uc9c0\uc758-\uc774\uc57c\uae30-forever-young-a-fathers-tale",rel:"noopener noreferrer",target:"_blank",onClick:this.toggleHamburger},"Book"),c.a.createElement(w,null)),c.a.createElement("div",{className:"side-links"},c.a.createElement(i.b,{onClick:function(){e.setView("/video"),e.toggleHamburger()},to:"/video"},"Video"),c.a.createElement(i.b,{onClick:function(){e.setView("/contact"),e.toggleHamburger()},to:"/contact"},"Reach Out"),c.a.createElement("a",{href:"http://young-chung.blogspot.com/",rel:"noopener noreferrer",target:"_blank",onClick:this.toggleHamburger,to:"/"},"Past Posts"))),c.a.createElement("div",{className:"side-nav-icons"},c.a.createElement("div",{className:"sidecon"},c.a.createElement(j.a,null)),c.a.createElement("div",{className:"sidecon"},c.a.createElement(j.b,null)),c.a.createElement("div",{className:"sidecon"},c.a.createElement(O.a,null)),c.a.createElement("div",{className:"sidecon"},c.a.createElement(k.a,null))))),c.a.createElement("nav",{className:"navbar"},c.a.createElement(i.b,{className:"/blog"===n?"nav-active":"",onClick:function(){return e.setView("/blog")},to:"/blog"},"Blog"),c.a.createElement(i.b,{className:"/video"===n?"nav-active":"",onClick:function(){return e.setView("/video")},to:"/video"},"Video Series"),c.a.createElement(i.b,{className:"/"===n?"name nav-active":"name",onClick:function(){return e.setView("/")},to:"/"},c.a.createElement("span",{className:"name"},"YC Mentoring")),c.a.createElement(i.b,{className:"/about"===n?"nav-active":"",onClick:function(){return e.setView("/about")},to:"/about"},"About"),c.a.createElement(i.b,{className:"/contact"===n?"nav-active":"",onClick:function(){return e.setView("/contact")},to:"/contact"},"Work With Me"),c.a.createElement("h1",{className:"mobile-name"},"YC Mentoring"),c.a.createElement("button",{onClick:this.toggleHamburger,className:r,type:"button"},c.a.createElement("span",{className:"hamburger-box"},c.a.createElement("span",{className:"hamburger-inner"})))),c.a.createElement("main",null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:h}),c.a.createElement(d.a,{path:"/blog",component:p}),c.a.createElement(d.a,{path:"/video",component:v}),c.a.createElement(d.a,{path:"/about",component:g}),c.a.createElement(d.a,{path:"/contact",component:E}),c.a.createElement(d.a,{path:"/book",component:f}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.06f2aa91.chunk.js.map