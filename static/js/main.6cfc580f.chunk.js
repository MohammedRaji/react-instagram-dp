(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(42)},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(9),l=t.n(r),i=t(10),c=t(11),s=t(14),u=t(12),m=t(15),d=t(13),f=t.n(d),h=function(e){var n="https://instagram.com/".concat(e,"/?__a=1");return f.a.get(n).then(function(e){return e.data.graphql.user})},g=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"\u23f3 Loading..."))},p=function(e){var n=e.img,t=e.followers,a=e.following,r=e.bio;return o.a.createElement("div",null,o.a.createElement("p",null,"\ud83d\ude0e We found it!"),o.a.createElement("a",{target:"_blank",href:n},o.a.createElement("p",null,o.a.createElement("b",null,"Bio: "),r),o.a.createElement("p",null,o.a.createElement("b",null,"Followers: "),t," | ",o.a.createElement("b",null,"Following: "),a),o.a.createElement("div",null,o.a.createElement("img",{alt:"instagram dp",src:n})),"\ud83d\ude44 View In full size"))},v=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"\ud83d\ude22 User Not Found"))},w=function(e){return e.error?o.a.createElement(v,null):e.img?o.a.createElement(p,e):null},E=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).handleSubmit=function(n){var t=e.state.username;n.preventDefault(),t&&(e.setState({loading:!0}),e.loadUserData(t))},e.handleInput=function(n){e.setState({username:n.target.value})},e.handleClear=function(n){e.setState({username:""})},e.state={username:"",img:null,error:!1,loading:!1,followers:0,following:0,bio:""},e}return Object(m.a)(n,e),Object(c.a)(n,[{key:"loadUserData",value:function(e){var n=this;h(e).then(function(e){console.log(e.edge_follow);var t=null;t=e.profile_pic_url_hd?e.profile_pic_url_hd:e.profile_pic_url,n.setState({img:t,error:!1,loading:!1,following:e.edge_follow.count,followers:e.edge_followed_by.count,bio:e.biography})}).catch(function(e){n.setState({error:!0,loading:!1}),console.log(e)})}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.username;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"box"},o.a.createElement("h3",null,"Hey, Stalker!"),o.a.createElement("h2",null,"\ud83d\udcf8 Instagram DP"),o.a.createElement("div",{className:"form-container"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"\u270d\ufe0f Enter IG username",value:this.state.username,onChange:this.handleInput}),o.a.createElement("button",{type:"submit",className:"search-button"},"\ud83d\udd0e",o.a.createElement("span",null,"Search")),t?o.a.createElement("button",{onClick:this.handleClear,className:"close-icon",type:"reset"}):null)),o.a.createElement("div",{className:"dynamic"},n?o.a.createElement(g,null):o.a.createElement(w,this.state)))))}}]),n}(a.Component),b=(t(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-instagram-dp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-instagram-dp","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(n,e)})}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.6cfc580f.chunk.js.map