(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,a,t){e.exports=t(269)},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},122:function(e,a,t){},124:function(e,a,t){e.exports=t.p+"static/media/gandhi.68c31ad8.jpeg"},125:function(e,a,t){e.exports=t.p+"static/media/leaf.e649d596.jpeg"},126:function(e,a,t){e.exports=t.p+"static/media/run.650a8fb7.jpeg"},127:function(e,a,t){e.exports=t.p+"static/media/instagram-logo.4af42c87.png"},128:function(e,a,t){e.exports=t.p+"static/media/hari.3d3e3e09.jpg"},129:function(e,a,t){e.exports=t.p+"static/media/sil.da1d052f.jpeg"},260:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},267:function(e,a,t){},269:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=(t(112),t(6)),s=t(7),i=t(9),m=t(8),u=(t(113),t(114),t(273)),p=t(274),h=t(14),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"heading"},l.a.createElement(h.b,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement("p",null," HARIPAL BALUJA "))),l.a.createElement("div",{className:"subheading"},l.a.createElement(h.b,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement("p",null,"PHOTOGRAPHY")))),l.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",className:"bg",variant:"light"},l.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(p.a,{className:"ml-auto mr-auto"},l.a.createElement(h.b,{to:"/abstract",style:{textDecoration:"none",color:"black"}},l.a.createElement("h4",{className:"navlinks"},"ABSTRACT")),l.a.createElement(h.b,{to:"/scenic",style:{textDecoration:"none",color:"black"}},l.a.createElement("h4",{className:"navlinks"},"SCENIC")),l.a.createElement(h.b,{to:"/street",style:{textDecoration:"none",color:"black"}},l.a.createElement("h4",{className:"navlinks"},"STREET")),l.a.createElement(h.b,{to:"/contact",style:{textDecoration:"none",color:"black"}},l.a.createElement("h4",{className:"navlinks"},"CONTACT")),l.a.createElement(h.b,{to:"/about",style:{textDecoration:"none",color:"black"}},l.a.createElement("h4",{className:"navlinks"},"ABOUT"))))))}}]),t}(n.Component),g=(t(122),t(40),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null," "))}}]),t}(n.Component)),b=(t(123),t(124)),f=t(125),E=t(126),v=(t(127),t(128)),y=t(129),k=t(26),j=t.n(k),O=(t(268),t(20)),w=t.n(O),N=(t(260),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={image_array:[],modalIsOpen:!1},e.toggleModal=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen}}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;w.a.get("https://gallery-backend-haripal.herokuapp.com/api/abstract/").then((function(a){e.setState({image_array:a.data})})).catch((function(e){console.log(e),console.log("some error")}))}},{key:"styleSmall",value:function(){return{display:"block",width:"100%",height:"100%",pointerEvents:"none"}}},{key:"myTileViewportStyleFn",value:function(){if(this.props.item.isSelected)return{}}},{key:"render",value:function(){console.log(this.state.image_array);this.state.modalIsOpen.modalIsOpen;return l.a.createElement("div",{className:"abstract",onContextMenu:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"galleryContainer abstract"},l.a.createElement(j.a,{images:this.state.image_array,enableImageSelection:!1,backdropClosesModal:!0,margin:10,rowHeight:220,showLightboxThumbnails:!0,thumbnailStyle:this.styleSmall})))}}]),t}(n.Component)),S=(t(261),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={image_array:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;w.a.get("https://gallery-backend-haripal.herokuapp.com/api/scenic/").then((function(a){e.setState({image_array:a.data})})).catch((function(e){console.log(e),console.log("some error")}))}},{key:"styleSmall",value:function(){return{width:"100%",height:"100%",backgroundColor:"none"}}},{key:"render",value:function(){return l.a.createElement("div",{className:"scenic"},l.a.createElement("div",{className:"galleryContainer"},l.a.createElement(j.a,{images:this.state.image_array,enableImageSelection:!1,backdropClosesModal:!0,margin:10,rowHeight:220,showLightboxThumbnails:!0,thumbnailStyle:this.styleSmall})))}}]),t}(n.Component)),x=(t(262),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={image_array:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;w.a.get("https://gallery-backend-haripal.herokuapp.com/api/street/").then((function(a){e.setState({image_array:a.data})})).catch((function(e){console.log(e),console.log("some error")}))}},{key:"styleSmall",value:function(){return{width:"100%",height:"100%",backgroundColor:"none"}}},{key:"render",value:function(){return l.a.createElement("div",{className:"street"},l.a.createElement("div",{className:"galleryContainer"},l.a.createElement(j.a,{images:this.state.image_array,enableImageSelection:!1,backdropClosesModal:!0,margin:10,rowHeight:220,showLightboxThumbnails:!0,thumbnailStyle:this.styleSmall})))}}]),t}(n.Component)),C=t(5),D=(t(263),t(264),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"categories-container"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col-lg-4 parent"},l.a.createElement("img",{src:f,alt:"abstract",className:"image"}),l.a.createElement(h.b,{to:"abstract",style:{textDecoration:"none"},className:"link"},l.a.createElement("div",{className:"centered"},l.a.createElement("span",null,"abstract")))),l.a.createElement("div",{className:"col-lg-4 parent"},l.a.createElement("img",{src:b,alt:"abstract",className:"image"}),l.a.createElement(h.b,{to:"scenic",style:{textDecoration:"none"},className:"link"},l.a.createElement("div",{className:"centered"},l.a.createElement("span",null,"scenic")))),l.a.createElement("div",{className:"col-lg-4 parent"},l.a.createElement("img",{src:E,alt:"abstract",className:"image"}),l.a.createElement(h.b,{to:"street",style:{textDecoration:"none"},className:"link"},l.a.createElement("div",{className:"centered"},l.a.createElement("span",null,"street")))))))}}]),t}(n.Component)),I=(t(265),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about-page"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-6 myimage"},l.a.createElement("img",{src:v,className:"coverimage",alt:"haripal"})),l.a.createElement("div",{class:"col-lg-6 intro"},l.a.createElement("h4",{id:"about"},"About"),l.a.createElement("div",{className:"introduction"},l.a.createElement("p",null,"Haripal Baluja"),l.a.createElement("br",null),l.a.createElement("p",null,"I've done Bachelors of Engineering in Information Technology, throughout the college I developed many hobbies unknowingly, some of them being watching and playing football and as time passed I didn't realize when I became so fond of photography,"),l.a.createElement("p",null,"As of now I don't have a concrete theme too to cover, just going about what I really like and I always wanted a place to portray my clicks on an independent platform other than instagram so I made this site here :)"),l.a.createElement("p",null,"I hope you enjoy my work! if you have any questions or want to collaborate on a project, please don't hesitate to contact me."),l.a.createElement("p",null,"Have a nice day!"),l.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/haripalbaluja",class:"fa fa-instagram fa-2x social-icons"}),l.a.createElement("a",{target:"_blank",href:"https://www.twitter.com/90minutelife",class:"fa fa-twitter fa-2x"}))))))}}]),t}(n.Component)),A=t(35),M=t(55),T=(t(266),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).changeHandler=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(M.a)(Object(M.a)({},e.state),{},Object(A.a)({},t,n)))},e.submitForm=function(a){a.preventDefault(),console.log(e.state),e.postData()},e.postData=function(){w.a.post("http://localhost:8000/api/message/",{name:e.state.name,email:e.state.email,message:e.state.message}).then((function(e){console.log(e)}))},e.state={name:"",email:"",message:""},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-page"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement("img",{src:y,alt:"haripal-shadow",className:"silh"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("form",{class:"contact-form",onSubmit:this.submitForm},l.a.createElement("div",{className:"form-group w-50"},l.a.createElement("label",{for:"name"},"NAME"),l.a.createElement("input",{onChange:this.changeHandler,name:"name",type:"text",class:"form-control"})),l.a.createElement("div",{className:"form-group w-50"},l.a.createElement("label",{for:"exampleInputEmail1"},"EMAIL ADDRESS"),l.a.createElement("input",{onChange:this.changeHandler,name:"email",type:"email",class:"form-control"})),l.a.createElement("div",{className:"form-group w-50"},l.a.createElement("label",{for:"message"},"MESSAGE"),l.a.createElement("textarea",{onChange:this.changeHandler,name:"message",type:"text",class:"form-control"})),l.a.createElement("button",{type:"submit",class:"btn btn-primary w-40"},"Submit"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("a",{className:"email-link",href:"mailto: haripalbaluja.208@gmail.com"},"MAIL ME HERE")))))))}}]),t}(n.Component)),H=(t(267),n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(h.a,null,l.a.createElement(g,null),l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:"/",component:D}),l.a.createElement(C.a,{path:"/abstract",component:N}),l.a.createElement(C.a,{path:"/scenic",component:S}),l.a.createElement(C.a,{path:"/street",component:x}),l.a.createElement(C.a,{path:"/about",component:I}),l.a.createElement(C.a,{path:"/contact",component:T}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.3d268b36.chunk.js.map