/* Modernizr 2.7.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-svg-shiv-mq-cssclasses-teststyles-load
 */window.Modernizr=function(e,t,n){function r(e){d.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}var a="2.7.2",f={},l=!0,c=t.documentElement,h="modernizr",p=t.createElement(h),d=p.style,v,m={}.toString,g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,o,u,a,f=t.createElement("div"),l=t.body,p=l||t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:h+(r+1),f.appendChild(u);return s=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),f.id=h,(l?f:p).innerHTML+=s,p.appendChild(f),l||(p.style.background="",p.style.overflow="hidden",a=c.style.overflow,c.style.overflow="hidden",c.appendChild(p)),o=n(f,e),l?f.parentNode.removeChild(f):(p.parentNode.removeChild(p),c.style.overflow=a),!!o},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return T("@media "+t+" { #"+h+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},C={}.hasOwnProperty,k;!s(C,"undefined")&&!s(C.call,"undefined")?k=function(e,t){return C.call(e,t)}:k=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=S.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(S.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(S.call(arguments)))};return r}),y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect};for(var L in y)k(y,L)&&(x=L.toLowerCase(),f[x]=y[L](),E.push((f[x]?"":"no-")+x));return f.addTest=function(e,t){if(typeof e=="object")for(var r in e)k(e,r)&&f.addTest(r,e[r]);else{e=e.toLowerCase();if(f[e]!==n)return f;t=typeof t=="function"?t():t,typeof l!="undefined"&&l&&(c.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),p=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=m[e[d]];return t||(t={},v++,e[d]=v,m[v]=t),t}function s(e,n,r){n||(n=t);if(g)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():h.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!c.test(e)&&!s.tagUrn?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(g)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function a(e){e||(e=t);var r=i(e);return y.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||u(e,r),e}var f="3.7.0",l=e.html5||{},c=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,d="_html5shiv",v=0,m={},g;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,g=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){p=!0,g=!0}})();var y={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:l.shivCSS!==!1,supportsUnknownElements:g,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=y,a(t)}(this,t),f._version=a,f.mq=N,f.testStyles=T,c.className=c.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+E.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var swfobject=function(){function C(){if(b)return;try{var e=a.getElementsByTagName("body")[0].appendChild(U("span"));e.parentNode.removeChild(e)}catch(t){return}b=!0;var n=c.length;for(var r=0;r<n;r++)c[r]()}function k(e){b?e():c[c.length]=e}function L(t){if(typeof u.addEventListener!=e)u.addEventListener("load",t,!1);else if(typeof a.addEventListener!=e)a.addEventListener("load",t,!1);else if(typeof u.attachEvent!=e)z(u,"onload",t);else if(typeof u.onload=="function"){var n=u.onload;u.onload=function(){n();t()}}else u.onload=t}function A(){l?O():M()}function O(){var n=a.getElementsByTagName("body")[0],r=U(t);r.setAttribute("type",i);var s=n.appendChild(r);if(s){var o=0;(function(){if(typeof s.GetVariable!=e){var t=s.GetVariable("$version");if(t){t=t.split(" ")[1].split(",");T.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)]}}else if(o<10){o++;setTimeout(arguments.callee,10);return}n.removeChild(r);s=null;M()})()}else M()}function M(){var t=h.length;if(t>0)for(var n=0;n<t;n++){var r=h[n].id,i=h[n].callbackFn,s={success:!1,id:r};if(T.pv[0]>0){var o=R(r);if(o)if(W(h[n].swfVersion)&&!(T.wk&&T.wk<312)){V(r,!0);if(i){s.success=!0;s.ref=_(r);i(s)}}else if(h[n].expressInstall&&D()){var u={};u.data=h[n].expressInstall;u.width=o.getAttribute("width")||"0";u.height=o.getAttribute("height")||"0";o.getAttribute("class")&&(u.styleclass=o.getAttribute("class"));o.getAttribute("align")&&(u.align=o.getAttribute("align"));var a={},f=o.getElementsByTagName("param"),l=f.length;for(var c=0;c<l;c++)f[c].getAttribute("name").toLowerCase()!="movie"&&(a[f[c].getAttribute("name")]=f[c].getAttribute("value"));P(u,a,r,i)}else{H(o);i&&i(s)}}else{V(r,!0);if(i){var p=_(r);if(p&&typeof p.SetVariable!=e){s.success=!0;s.ref=p}i(s)}}}}function _(n){var r=null,i=R(n);if(i&&i.nodeName=="OBJECT")if(typeof i.SetVariable!=e)r=i;else{var s=i.getElementsByTagName(t)[0];s&&(r=s)}return r}function D(){return!w&&W("6.0.65")&&(T.win||T.mac)&&!(T.wk&&T.wk<312)}function P(t,n,r,i){w=!0;g=i||null;y={success:!1,id:r};var o=R(r);if(o){if(o.nodeName=="OBJECT"){v=B(o);m=null}else{v=o;m=r}t.id=s;if(typeof t.width==e||!/%$/.test(t.width)&&parseInt(t.width,10)<310)t.width="310";if(typeof t.height==e||!/%$/.test(t.height)&&parseInt(t.height,10)<137)t.height="137";a.title=a.title.slice(0,47)+" - Flash Player Installation";var f=T.ie&&T.win?"ActiveX":"PlugIn",l="MMredirectURL="+u.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+a.title;typeof n.flashvars!=e?n.flashvars+="&"+l:n.flashvars=l;if(T.ie&&T.win&&o.readyState!=4){var c=U("div");r+="SWFObjectNew";c.setAttribute("id",r);o.parentNode.insertBefore(c,o);o.style.display="none";(function(){o.readyState==4?o.parentNode.removeChild(o):setTimeout(arguments.callee,10)})()}j(t,n,r)}}function H(e){if(T.ie&&T.win&&e.readyState!=4){var t=U("div");e.parentNode.insertBefore(t,e);t.parentNode.replaceChild(B(e),t);e.style.display="none";(function(){e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)})()}else e.parentNode.replaceChild(B(e),e)}function B(e){var n=U("div");if(T.win&&T.ie)n.innerHTML=e.innerHTML;else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++)(i[o].nodeType!=1||i[o].nodeName!="PARAM")&&i[o].nodeType!=8&&n.appendChild(i[o].cloneNode(!0))}}}return n}function j(n,r,s){var o,u=R(s);if(T.wk&&T.wk<312)return o;if(u){typeof n.id==e&&(n.id=s);if(T.ie&&T.win){var a="";for(var f in n)n[f]!=Object.prototype[f]&&(f.toLowerCase()=="data"?r.movie=n[f]:f.toLowerCase()=="styleclass"?a+=' class="'+n[f]+'"':f.toLowerCase()!="classid"&&(a+=" "+f+'="'+n[f]+'"'));var l="";for(var c in r)r[c]!=Object.prototype[c]&&(l+='<param name="'+c+'" value="'+r[c]+'" />');u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>";p[p.length]=n.id;o=R(n.id)}else{var h=U(t);h.setAttribute("type",i);for(var d in n)n[d]!=Object.prototype[d]&&(d.toLowerCase()=="styleclass"?h.setAttribute("class",n[d]):d.toLowerCase()!="classid"&&h.setAttribute(d,n[d]));for(var v in r)r[v]!=Object.prototype[v]&&v.toLowerCase()!="movie"&&F(h,v,r[v]);u.parentNode.replaceChild(h,u);o=h}}return o}function F(e,t,n){var r=U("param");r.setAttribute("name",t);r.setAttribute("value",n);e.appendChild(r)}function I(e){var t=R(e);if(t&&t.nodeName=="OBJECT")if(T.ie&&T.win){t.style.display="none";(function(){t.readyState==4?q(e):setTimeout(arguments.callee,10)})()}else t.parentNode.removeChild(t)}function q(e){var t=R(e);if(t){for(var n in t)typeof t[n]=="function"&&(t[n]=null);t.parentNode.removeChild(t)}}function R(e){var t=null;try{t=a.getElementById(e)}catch(n){}return t}function U(e){return a.createElement(e)}function z(e,t,n){e.attachEvent(t,n);d[d.length]=[e,t,n]}function W(e){var t=T.pv,n=e.split(".");n[0]=parseInt(n[0],10);n[1]=parseInt(n[1],10)||0;n[2]=parseInt(n[2],10)||0;return t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function X(n,r,i,s){if(T.ie&&T.mac)return;var o=a.getElementsByTagName("head")[0];if(!o)return;var u=i&&typeof i=="string"?i:"screen";if(s){E=null;S=null}if(!E||S!=u){var f=U("style");f.setAttribute("type","text/css");f.setAttribute("media",u);E=o.appendChild(f);T.ie&&T.win&&typeof a.styleSheets!=e&&a.styleSheets.length>0&&(E=a.styleSheets[a.styleSheets.length-1]);S=u}T.ie&&T.win?E&&typeof E.addRule==t&&E.addRule(n,r):E&&typeof a.createTextNode!=e&&E.appendChild(a.createTextNode(n+" {"+r+"}"))}function V(e,t){if(!x)return;var n=t?"visible":"hidden";b&&R(e)?R(e).style.visibility=n:X("#"+e,"visibility:"+n)}function $(t){var n=/[\\\"<>\.;]/,r=n.exec(t)!=null;return r&&typeof encodeURIComponent!=e?encodeURIComponent(t):t}var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s="SWFObjectExprInst",o="onreadystatechange",u=window,a=document,f=navigator,l=!1,c=[A],h=[],p=[],d=[],v,m,g,y,b=!1,w=!1,E,S,x=!0,T=function(){var s=typeof a.getElementById!=e&&typeof a.getElementsByTagName!=e&&typeof a.createElement!=e,o=f.userAgent.toLowerCase(),c=f.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(o),p=c?/mac/.test(c):/mac/.test(o),d=/webkit/.test(o)?parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,v=!1,m=[0,0,0],g=null;if(typeof f.plugins!=e&&typeof f.plugins[n]==t){g=f.plugins[n].description;if(g&&(typeof f.mimeTypes==e||!f.mimeTypes[i]||!!f.mimeTypes[i].enabledPlugin)){l=!0;v=!1;g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1");m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10);m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10);m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else if(typeof u.ActiveXObject!=e)try{var y=new ActiveXObject(r);if(y){g=y.GetVariable("$version");if(g){v=!0;g=g.split(" ")[1].split(",");m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}}}catch(b){}return{w3:s,pv:m,wk:d,ie:v,win:h,mac:p}}(),N=function(){if(!T.w3)return;(typeof a.readyState!=e&&a.readyState=="complete"||typeof a.readyState==e&&(a.getElementsByTagName("body")[0]||a.body))&&C();if(!b){typeof a.addEventListener!=e&&a.addEventListener("DOMContentLoaded",C,!1);if(T.ie&&T.win){a.attachEvent(o,function(){if(a.readyState=="complete"){a.detachEvent(o,arguments.callee);C()}});u==top&&function(){if(b)return;try{a.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}C()}()}T.wk&&function(){if(b)return;if(!/loaded|complete/.test(a.readyState)){setTimeout(arguments.callee,0);return}C()}();L(C)}}(),J=function(){T.ie&&T.win&&window.attachEvent("onunload",function(){var e=d.length;for(var t=0;t<e;t++)d[t][0].detachEvent(d[t][1],d[t][2]);var n=p.length;for(var r=0;r<n;r++)I(p[r]);for(var i in T)T[i]=null;T=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(T.w3&&e&&t){var i={};i.id=e;i.swfVersion=t;i.expressInstall=n;i.callbackFn=r;h[h.length]=i;V(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(T.w3)return _(e)},embedSWF:function(n,r,i,s,o,u,a,f,l,c){var h={success:!1,id:r};if(T.w3&&!(T.wk&&T.wk<312)&&n&&r&&i&&s&&o){V(r,!1);k(function(){i+="";s+="";var p={};if(l&&typeof l===t)for(var d in l)p[d]=l[d];p.data=n;p.width=i;p.height=s;var v={};if(f&&typeof f===t)for(var m in f)v[m]=f[m];if(a&&typeof a===t)for(var g in a)typeof v.flashvars!=e?v.flashvars+="&"+g+"="+a[g]:v.flashvars=g+"="+a[g];if(W(o)){var y=j(p,v,r);p.id==r&&V(r,!0);h.success=!0;h.ref=y}else{if(u&&D()){p.data=u;P(p,v,r,c);return}V(r,!0)}c&&c(h)})}else c&&c(h)},switchOffAutoHideShow:function(){x=!1},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:W,createSWF:function(e,t,n){return T.w3?j(e,t,n):undefined},showExpressInstall:function(e,t,n,r){T.w3&&D()&&P(e,t,n,r)},removeSWF:function(e){T.w3&&I(e)},createCSS:function(e,t,n,r){T.w3&&X(e,t,n,r)},addDomLoadEvent:k,addLoadEvent:L,getQueryParamValue:function(e){var t=a.location.search||a.location.hash;if(t){/\?/.test(t)&&(t=t.split("?")[1]);if(e==null)return $(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return $(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(w){var e=R(s);if(e&&v){e.parentNode.replaceChild(v,e);if(m){V(m,!0);T.ie&&T.win&&(v.style.display="block")}g&&g(y)}w=!1}}}}(),VPR=VPR||{};VPR.update_interval=6e5;VPR.update_billboard=function(){$.get("/apps/audio-player/billboard",function(e){var t=$("#billboard"),n=t.attr("data-length"),r=e.length.toString(),i=$(e);if(n!==r){t.replaceWith(i.hide().fadeIn());$("#billboard").attr("data-length",r)}})};VPR.update_callout=function(){$.get("/apps/audio-player/callout",function(e){var t=$("#callout"),n=t.attr("data-length"),r=e.length.toString(),i=$(e);if(n!==r){t.replaceWith(i.hide().fadeIn());$("#callout").attr("data-length",r)}})};VPR.repositioned=!1;VPR.move_more_info=function(){if(Modernizr.mq("(max-width: 768px)")){$("#more_info").insertAfter("#underwriter").hide().fadeIn();VPR.repositioned=!0}else if(VPR.repositioned&&Modernizr.mq("(min-width: 769px)")){$("#more_info").insertAfter("#player").hide().fadeIn();VPR.repositioned=!1}};VPR.update_schedule=function(){$.ajax({type:"GET",url:"http://www.vpr.net/xml/vpr-mix-stream/vprmix.xml",datatype:"xml",success:function(e){var t=$(e),n=t.find("PLAY[INDEX=0]"),r=t.find("PLAY[INDEX=6]"),i={artist:n.children("ARTIST").text(),title:n.children("TITLE").text()},s={artist:r.children("ARTIST").text(),title:r.children("TITLE").text()},o=$('<span id="on_now" />'),u=$('<span id="up_next" />');o.text(i.artist+" - "+i.title);u.text(s.artist+" - "+s.title);$("#on_now").replaceWith(o.hide().fadeIn());$("#up_next").replaceWith(u.hide().fadeIn())}})};VPR.init_updates=function(){var e=new Date,t=e.getMinutes();VPR.update_billboard();VPR.update_callout();VPR.update_schedule();VPR.move_more_info();var n=window.setInterval(function(){t<3&&VPR.update_schedule()},18e4),r=window.setInterval(function(){VPR.update_billboard();VPR.update_callout();VPR.move_more_info()},VPR.update_interval)};VPR.init_audio_support=function(){var e=$("#recommended_format"),t=swfobject.hasFlashPlayerVersion("1"),n=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);n?e.text("AAC+"):t&&e.text("Flash")};$(document).ready(function(){VPR.init_updates();VPR.init_audio_support()});