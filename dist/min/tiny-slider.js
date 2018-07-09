var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var t=window,yi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,xi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function bi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function wi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ci(t,e,n){return n&&localStorage.setItem(t,e),e}function Ai(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Mi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ti(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Ei(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function ki(t){return("insertRule"in t?t.cssRules:t.rules).length}function Oi(t,e){return Math.atan2(t,e)*(180/Math.PI)}function Ni(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return 90-e<=i?n="horizontal":i<=e&&(n="vertical"),n}function Bi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Di=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Li=i?function(t,e){Di(t,e)||t.classList.add(e)}:function(t,e){Di(t,e)||(t.className+=" "+e)},Si=i?function(t,e){Di(t,e)&&t.classList.remove(e)}:function(t,e){Di(t,e)&&(t.className=t.className.replace(e,""))};function Ii(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Pi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ri(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Wi(t){t.style.cssText=""}function Hi(t){Ii(t,"hidden")||Pi(t,{hidden:""})}function zi(t){Ii(t,"hidden")&&Ri(t,"hidden")}function qi(t){return 0<t.offsetWidth&&0<t.offsetHeight}function ji(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Fi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Qi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Vi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Xi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}var Yi=function(x){x=bi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},x||{});var k=document,b=window,s=13,l=32,u=33,c=34,f=35,d=36,v=37,h=38,p=39,m=40,e={},n=x.useLocalStorage;if(n){var t=navigator.userAgent;try{(e=localStorage).tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t}catch(t){n=!1}n&&!localStorage&&(n=!(e={}))}for(var i,a,r,o,g,y,w,C=e.tC?wi(e.tC):Ci("tC",function(){var t=document,e=Ai(),n=Mi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ti(e,n):i.remove(),a}(),n),A=e.tPL?wi(e.tPL):Ci("tPL",function(){var t,e=document,n=Ai(),i=Mi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ti(n,i):a.remove(),t}(),n),O=e.tMQ?wi(e.tMQ):Ci("tMQ",(a=document,r=Ai(),o=Mi(r),g=a.createElement("div"),y=a.createElement("style"),w="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",y.type="text/css",g.className="tns-mq-test",r.appendChild(y),r.appendChild(g),y.styleSheet?y.styleSheet.cssText=w:y.appendChild(a.createTextNode(w)),i=window.getComputedStyle?window.getComputedStyle(g).position:g.currentStyle.position,r.fake?Ti(r,o):g.remove(),"absolute"===i),n),M=e.tTf?wi(e.tTf):Ci("tTf",ji("transform"),n),T=e.t3D?wi(e.t3D):Ci("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ai(),a=Mi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ti(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(M),n),E=e.tTDu?wi(e.tTDu):Ci("tTDu",ji("transitionDuration"),n),N=e.tTDe?wi(e.tTDe):Ci("tTDe",ji("transitionDelay"),n),B=e.tADu?wi(e.tADu):Ci("tADu",ji("animationDuration"),n),D=e.tADe?wi(e.tADe):Ci("tADe",ji("animationDelay"),n),L=e.tTE?wi(e.tTE):Ci("tTE",Fi(E,"Transition"),n),S=e.tAE?wi(e.tAE):Ci("tAE",Fi(B,"Animation"),n),I=b.console&&"function"==typeof b.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R=P.length;R--;){var W=P[R];if("string"==typeof x[W]){var H=k.querySelector(x[W]);if(!H||!H.nodeName)return void(I&&console.warn("Can't find",x[W]));x[W]=H}}if(!(x.container.children.length<1)){if(x.responsive){var z={},q=x.responsive;for(var j in q){var F=q[j];z[j]="number"==typeof F?{items:F}:F}x.responsive=z,z=null,0 in x.responsive&&delete(x=bi(x,x.responsive[0])).responsive[0]}var Q="carousel"===x.mode;if(!Q){x.axis="horizontal",x.edgePadding=!1;var V="tns-fadeIn",X="tns-fadeOut",Y=!1,K=x.animateNormal||"tns-normal";L&&S&&(V=x.animateIn||V,X=x.animateOut||X,Y=x.animateDelay||Y)}var U,G,J="horizontal"===x.axis,_=k.createElement("div"),Z=k.createElement("div"),$=x.container,tt=$.parentNode,et=$.children,nt=et.length,it=fn(tt),at=x.responsive,rt=[],ot=!1,st=0,lt=cn();if(at){(ot=Object.keys(at).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){rt=rt.concat(Object.keys(at[t]))});var ut=[];rt.forEach(function(t){ut.indexOf(t)<0&&ut.push(t)}),rt=ut,Tn()}var ct,ft,dt,vt,ht,pt,mt,gt,yt,xt=Math.floor(hn("items")),bt="page"===hn("slideBy")?xt:hn("slideBy"),wt=x.nested,Ct=hn("gutter"),At=hn("edgePadding"),Mt=x.autoWidth,Tt=hn("fixedWidth"),Et=x.viewportMax||x.fixedWidthViewportWidth,kt=hn("arrowKeys"),Ot=hn("speed"),Nt=x.rewind,Bt=!Nt&&x.loop,Dt=hn("autoHeight"),Lt=(yt=document.createElement("style"),gt&&yt.setAttribute("media",gt),document.querySelector("head").appendChild(yt),yt.sheet?yt.sheet:yt.styleSheet),St=x.lazyload,It=[],Pt=vn("edgePadding"),Rt=Bt?(pt=function(){{if(Mt||Tt&&!Et)return nt-1;var n=Tt?"fixedWidth":"items",i=[];return(Tt||x[n]<nt)&&i.push(x[n]),ot&&0<=rt.indexOf(n)&&ot.forEach(function(t){var e=at[t][n];e&&(Tt||e<nt)&&i.push(e)}),i.length||i.push(0),Math.ceil(Tt?Et/Math.min.apply(null,i):Math.max.apply(null,i))}}(),mt=Q?Math.ceil((5*pt-nt)/2):4*pt-nt,mt=Math.max(pt,mt),Pt?mt+1:mt):0,Wt=Q?nt+2*Rt:nt+Rt,Ht=!(!Tt&&!Mt||Bt),zt=!Q||!Bt,qt=J?"left":"top",jt="",Ft="",Qt=hn("startIndex"),Vt=Qt?function(t){(t%=nt)<0&&(t+=nt);return t=Math.min(t,Wt-xt)}(Qt):Q?Rt:0,Xt=Vt,Yt=0,Kt=Tt||Mt?null:ln(),Ut=x.swipeAngle,Gt=!Ut||"?",Jt=!1,_t=x.onInit,Zt=new Xi,$t=$.id,te=" tns-slider tns-"+x.mode,ee=$.id||(ht=window.tnsId,window.tnsId=ht?ht+1:1,"tns"+window.tnsId),ne=hn("disable"),ie=x.freezable,ae=!!ne||!!ie&&nt<=xt,re="inner"===wt?" !important":"",oe={click:$n,keydown:function(t){switch((t=li(t)).keyCode){case v:case h:case u:ke.disabled||$n(t,-1);break;case p:case m:case c:Oe.disabled||$n(t,1);break;case d:Zn("first",t);break;case f:Zn(nt-1,t)}}},se={click:function(t){Jt&&_n();var e,n=(t=li(t)).target||t.srcElement;for(;n!==De&&!Ii(n,"data-nav");)n=n.parentNode;Ii(n,"data-nav")&&(e=Ie=[].indexOf.call(Ne,n),Zn(Q?e+Rt:e,t))},keydown:function(t){var e=k.activeElement;if(!Ii(e,"data-nav"))return;var n=(t=li(t)).keyCode,i=[].indexOf.call(Ne,e),a=Le.length,r=Le.indexOf(i);x.navContainer&&(a=nt,r=i);function o(t){return x.navContainer?t:Le[t]}switch(n){case v:case u:0<r&&oi(Ne[o(r-1)]);break;case h:case d:0<r&&oi(Ne[o(0)]);break;case p:case c:r<a-1&&oi(Ne[o(r+1)]);break;case m:case f:r<a-1&&oi(Ne[o(a-1)]);break;case s:case l:Zn((Ie=i)+Rt,t)}}},le={mouseover:function(){ze&&(ei(),qe=!0)},mouseout:function(){qe&&(ti(),qe=!1)}},ue={visibilitychange:function(){k.hidden?ze&&(ei(),Fe=!0):Fe&&(ti(),Fe=!1)}},ce={keydown:function(t){switch((t=li(t)).keyCode){case v:$n(t,-1);break;case p:$n(t,1)}}},fe={touchstart:di,touchmove:vi,touchend:hi,touchcancel:hi},de={mousedown:di,mousemove:vi,mouseup:hi,mouseleave:hi},ve=vn("controls"),he=vn("nav"),pe=x.navAsThumbnails,me=vn("autoplay"),ge=vn("touch"),ye=vn("mouseDrag"),xe="tns-slide-active",be="tns-complete",we={load:Bn,error:Bn};if(ve)var Ce,Ae,Me=hn("controls"),Te=hn("controlsText"),Ee=x.controlsContainer,ke=x.prevButton,Oe=x.nextButton;if(he)var Ne,Be=hn("nav"),De=x.navContainer,Le=[],Se=Le,Ie=-1,Pe=un(),Re=Pe,We="tns-nav-active";if(me)var He,ze,qe,je,Fe,Qe=hn("autoplay"),Ve=hn("autoplayTimeout"),Xe="forward"===x.autoplayDirection?1:-1,Ye=hn("autoplayText"),Ke=hn("autoplayHoverPause"),Ue=x.autoplayButton,Ge=hn("autoplayResetOnVisibility"),Je=["<span class='tns-visually-hidden'>"," animation</span>"];if(ge||ye)var _e,Ze={},$e={},tn=!1,en=0,nn=J?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(ge)var an=hn("touch");if(ye)var rn=hn("mouseDrag");ae&&(Me=Be=an=rn=kt=Qe=Ke=Ge=!1),M&&(qt=M,jt="translate",T?(jt+=J?"3d(":"3d(0px, ",Ft=J?", 0px, 0px)":", 0px)"):(jt+=J?"X(":"Y(",Ft=")")),function(){vn("gutter");if(_.className="tns-outer",Z.className="tns-inner",Z.id=ee+"-iw",Dt&&(Z.className+=" tns-ah"),""===$.id&&($.id=ee),te+=A||Mt?" tns-subpixel":" tns-no-subpixel",te+=C?" tns-calc":" tns-no-calc",Q&&(te+=" tns-"+x.axis),$.className+=te,Q){var t=k.createElement("div");t.className="tns-ovh",_.appendChild(t),t.appendChild(Z)}else _.appendChild(Z);if(tt.insertBefore(_,$),Z.appendChild($),U=dn(),Tt&&(ft=Xn(),Kt=ln()),Q&&L){var e={};e[L]=_n,Qi($,e)}for(var n=0;n<nt;n++){(p=et[n]).id||(p.id=ee+"-item"+n),Li(p,"tns-item"),!Q&&K&&Li(p,K),Pi(p,{"aria-hidden":"true",tabindex:"-1"})}if(Bt||At){for(var i=k.createDocumentFragment(),a=k.createDocumentFragment(),r=Rt;r--;){var o=r%nt,s=et[o].cloneNode(!0);if(Ri(s,"id"),a.insertBefore(s,a.firstChild),Q){var l=et[nt-1-o].cloneNode(!0);Ri(l,"id"),i.appendChild(l)}}$.insertBefore(i,$.firstChild),$.appendChild(a),et=$.children}if(vn("autoHeight")||!Q||Mt||!J){var u=$.querySelectorAll("img");Bi(u,function(t){var e=t.src;e.indexOf("data:image")<0?(Qi(t,we),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Li(t,be)}),yi(function(){Sn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(u),function(){vt=!0,ne||(J&&!Mt||(Wn(),Nn(),Mt&&(ft=Xn(),Kt=ln()),J||pi()),Q&&Yn())})})}Q&&J&&!Mt&&Yn();for(var c=Vt,f=Vt+Math.min(nt,xt);c<f;c++){Pi(p=et[c],{"aria-hidden":"false"}),Ri(p,["tabindex"]),Li(p,xe),Q||(p.style.left=100*(c-Vt)/xt+"%",Li(p,V),Si(p,K))}if(Q&&J&&(A||Mt?(Ei(Lt,"#"+ee+" > .tns-item","font-size:"+b.getComputedStyle(et[0]).fontSize+";",ki(Lt)),Ei(Lt,"#"+ee,"font-size:0;",ki(Lt))):Bi(et,function(t,e){var n;t.style.marginLeft=(n=e,C?C+"("+100*n+"% / "+Wt+")":100*n/Wt+"%")})),O){var d=mn(x.edgePadding,x.gutter,x.fixedWidth,x.speed);Ei(Lt,"#"+ee+"-iw",d,ki(Lt)),Q&&(d=J&&!Mt?"width:"+gn(x.fixedWidth,x.gutter,x.items)+";":"",E&&(d+=wn(Ot)),Ei(Lt,"#"+ee,d,ki(Lt))),d=J&&!Mt?yn(x.fixedWidth,x.gutter,x.items):"",x.gutter&&(d+=xn(x.gutter)),Q||(E&&(d+=wn(Ot)),B&&(d+=Cn(Ot))),d&&Ei(Lt,"#"+ee+" > .tns-item",d,ki(Lt))}else{Z.style.cssText=mn(At,Ct,Tt),Q&&J&&!Mt&&($.style.width=gn(Tt,Ct,xt));d=J&&!Mt?yn(Tt,Ct,xt):"";Ct&&(d+=xn(Ct)),d&&Ei(Lt,"#"+ee+" > .tns-item",d,ki(Lt))}if(at&&O&&ot.forEach(function(t){var e,n=at[t],i="",a="",r="",o=hn("items",t),s=hn("fixedWidth",t),l=hn("speed",t),u=hn("edgePadding",t),c=hn("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+ee+"-iw{"+mn(u,c,s,l)+"}"),Q&&J&&!Mt&&("fixedWidth"in n||"items"in n||Tt&&"gutter"in n)&&(a="width:"+gn(s,c,o)+";"),E&&"speed"in n&&(a+=wn(l)),a&&(a="#"+ee+"{"+a+"}"),("fixedWidth"in n||Tt&&"gutter"in n||!Q&&"items"in n)&&(r+=yn(s,c,o)),"gutter"in n&&(r+=xn(c)),!Q&&"speed"in n&&(E&&(r+=wn(l)),B&&(r+=Cn(l))),r&&(r="#"+ee+" > .tns-item{"+r+"}"),(e=i+a+r)&&Lt.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",Lt.cssRules.length)}),navigator.msMaxTouchPoints&&(Li($,"ms-touch"),Qi($,{scroll:si}),Hn()),me){var v=Qe?"stop":"start";Ue?Pi(Ue,{"data-action":v}):x.autoplayButtonOutput&&(_.insertAdjacentHTML("afterbegin",'<button data-action="'+v+'" type="button">'+Je[0]+v+Je[1]+Ye[0]+"</button>"),Ue=_.querySelector("[data-action]")),Ue&&Qi(Ue,{click:ri}),Qe?(ii(),Ke&&Qi($,le),Ge&&Qi($,ue)):Ue&&Hi(Ue)}if(he){var h=Q?Rt:0;if(De){Pi(De,{"aria-label":"Carousel Pagination"}),Ne=De.children;for(c=0;c<nt;c++){var p;(p=Ne[c])&&Pi(p,{"data-nav":c,tabindex:"-1","aria-selected":"false","aria-controls":et[h+c].id})}}else{var m="",g=pe?"":"hidden";for(c=0;c<nt;c++)m+='<button data-nav="'+c+'" tabindex="-1" aria-selected="false" aria-controls="'+et[h+c].id+'" '+g+' type="button"></button>';m='<div class="tns-nav" aria-label="Carousel Pagination">'+m+"</div>",_.insertAdjacentHTML("afterbegin",m),De=_.querySelector(".tns-nav"),Ne=De.children}if(mi(),E){var y=E.substring(0,E.length-18).toLowerCase();d="transition: all "+Ot/1e3+"s";y&&(d="-"+y+"-"+d),Ei(Lt,"[aria-controls^="+ee+"-item]",d,ki(Lt))}Pi(Ne[Pe],{tabindex:"0","aria-selected":"true"}),Li(Ne[Pe],We),Qi(De,se),Be||Hi(De)}ve&&(Ee||ke&&Oe?(Ee&&(ke=Ee.children[0],Oe=Ee.children[1],Pi(Ee,{"aria-label":"Carousel Navigation",tabindex:"0"}),Pi(Ee.children,{"aria-controls":ee,tabindex:"-1"})),Pi(ke,{"data-controls":"prev"}),Pi(Oe,{"data-controls":"next"})):(_.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ee+'" type="button">'+Te[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ee+'" type="button">'+Te[1]+"</button></div>"),Ee=_.querySelector(".tns-controls"),ke=Ee.children[0],Oe=Ee.children[1]),Ce=qn(ke),Ae=qn(Oe),Qn(),Ee?Qi(Ee,oe):(Qi(ke,oe),Qi(Oe,oe)),Me||Hi(Ee)),an&&Qi($,fe),rn&&Qi($,de),kt&&Qi(k,ce),"inner"===wt?Zt.on("outerResized",function(){Mn(),Zt.emit("innerLoaded",gi())}):Qi(b,{resize:An}),"outer"===wt?Zt.on("innerLoaded",Ln):!Dt&&Q||ne||Ln(),Mt||Nn(),En(),kn(),Zt.on("indexChanged",In),"function"==typeof _t&&_t(gi()),"inner"===wt&&Zt.emit("innerLoaded",gi()),ne&&On(!0),G=!0}();var on=Bt?Q?function(){var t=Yt,e=Kt;if(t+=bt,e-=bt,At)t+=1,e-=1;else if(Tt){var n=Ct||0;n<it%(Tt+n)&&(e-=1)}Rt&&(e<Vt?Vt-=nt:Vt<t&&(Vt+=nt))}:function(){if(Kt<Vt)for(;Yt+nt<=Vt;)Vt-=nt;else if(Vt<Yt)for(;Vt<=Kt-nt;)Vt+=nt}:function(){Vt=Math.max(Yt,Math.min(Kt,Vt))},sn=Q?function(t,e){var n,i,a,r,o,s,l,u,c,f,d;null==t&&(t=Ot),E||!t?(Kn(e),t&&qi($)||_n()):(n=$,i=qt,a=jt,r=Ft,o=e,s=Ot,l=_n,u=Math.min(s,10),c=0<=o.indexOf("%")?"%":"px",o=o.replace(c,""),f=Number(n.style[i].replace(a,"").replace(r,"").replace(c,"")),d=(o-f)/s*u,setTimeout(function t(){s-=u,f+=d,n.style[i]=a+f+c+r,0<s?setTimeout(t,u):l()},u)),J||pi()}:function(t){null==t&&(t=Ot),It=[];var e={};e[L]=e[S]=_n,Vi(et[Xt],e),Qi(et[Vt],e),Un(Xt,V,X,!0),Un(Vt,K,V),L&&S&&t&&qi($)||_n()};return{getInfo:gi,events:Zt,goTo:Zn,play:function(){Qe&&!ze&&(ii(),je=!1)},pause:function(){ze&&(ai(),je=!0)},isOn:G,updateSliderHeight:Rn,rebuild:function(){return Yi(x)},destroy:function(){if(Vi(b,{resize:An}),Vi(k,ce),Lt.disabled=!0,Bt)for(var t=Rt;t--;)Q&&et[0].remove(),et[et.length-1].remove();var e=["tns-item",xe];Q||(e=e.concat("tns-normal",V));for(var n=nt;n--;){var i=et[n];0<=i.id.indexOf(ee+"-item")&&(i.id=""),e.forEach(function(t){Si(i,t)})}if(Ri(et,["style","aria-hidden","tabindex"]),et=ee=nt=Wt=Rt=null,Me&&(Vi(Ee,oe),x.controlsContainer&&(Ri(Ee,["aria-label","tabindex"]),Ri(Ee.children,["aria-controls","aria-disabled","tabindex"])),Ee=ke=Oe=null),Be&&(Vi(De,se),x.navContainer&&(Ri(De,["aria-label"]),Ri(Ne,["aria-selected","aria-controls","tabindex"])),De=Ne=null),Qe&&(clearInterval(He),Ue&&Vi(Ue,{click:ri}),Vi($,le),Vi($,ue),x.autoplayButton&&Ri(Ue,["data-action"])),$.id=$t||"",$.className=$.className.replace(te,""),Wi($),Q&&L){var a={};a[L]=_n,Vi($,a)}Vi($,fe),Vi($,de),tt.insertBefore($,_),_.remove(),_=Z=$=Vt=Xt=xt=bt=Pe=Re=ve=Le=Se=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=G=!1}}}function ln(){if(!Tt&&!Mt)return Bt||Q?Math.max(0,Wt-Math.ceil(hn("items"))):Wt-1;if(Tt)return Math.floor(-ft/(Tt+Ct))+1;if(Mt){for(var t=Wt-1,e=t;ct[t]>-ft;)e=--t;return e}}function un(t){void 0===t&&(t=Vt);for(var e=Q?Rt:0;t<e;)t+=nt;return Q&&(t-=Rt),t?Math.floor(t%nt):t}function cn(){return b.innerWidth||k.documentElement.clientWidth||k.body.clientWidth}function fn(t){return t.clientWidth||fn(t.parentNode)}function dn(){return At?Tt?it-2*pn(Tt,Ct):it-(2*At+Ct):it}function vn(e){var n=x[e];return!n&&ot&&0<=rt.indexOf(e)&&ot.forEach(function(t){at[t][e]&&(n=!0)}),n}function hn(t,e){e=e||lt;var n,i={slideBy:"page",edgePadding:!1};if(!Q&&t in i)n=i[t];else if("items"===t&&hn("fixedWidth"))n=Math.floor(it/(hn("fixedWidth")+hn("gutter")));else if("autoHeight"===t&&"outer"===wt)n=!0;else if(n=x[t],ot&&0<=rt.indexOf(t))for(var a=0,r=ot.length;a<r;a++){var o=ot[a];if(!(o<=e))break;t in at[o]&&(n=at[o][t])}return"slideBy"===t&&"page"===n&&(n=hn("items")),Q||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e){return(it%(t+e)+e)/2}function mn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=n?"margin: 0px "+pn(n,e)+"px;":J?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(J?o+" 0 0":"0 "+o+" 0")+";"}return E&&i&&(a+=wn(i)),a}function gn(t,e,n){return t?(t+e)*Wt+"px":C?C+"("+100*Wt+"% / "+n+")":100*Wt/n+"%"}function yn(t,e,n){var i;if(t)i=t+e+"px";else{Q||(n=Math.floor(n));var a=Q?Wt:n;i=C?C+"(100% / "+a+")":100/a+"%"}return"width:"+i+re+";"}function xn(t){var e="";!1!==t&&(e=(J?"padding-":"margin-")+(J?"right":"bottom")+": "+t+"px;");return e}function bn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function wn(t){return bn(E,18)+"transition-duration:"+t/1e3+"s;"}function Cn(t){return bn(B,17)+"animation-duration:"+t/1e3+"s;"}function An(t){yi(function(){Mn(li(t))})}function Mn(t){if(G){lt=cn(),"outer"===wt&&Zt.emit("outerResized",gi(t));var e,n,i=st,a=Vt,r=xt,o=ae,s=!1;if(it=fn(_),U=dn(),ot&&Tn(),i!==st&&Zt.emit("newBreakpointStart",gi(t)),J&&!Mt||ne||(Wn(),J||(pi(),s=!0)),(Tt||Mt)&&(ft=Xn(),Kt=ln()),i!==st||Tt||Mt){var l=kt,u=Dt,c=Tt,f=At,d=Ct,v=ne;if(xt=hn("items"),bt=hn("slideBy"),ne=hn("disable"),Ht&&(s=!0),ae=!!ne||!!ie&&(Tt||Mt?!ft:nt<=xt),xt!==r&&(Tt||Mt||(Kt=ln()),on()),ne!==v&&On(ne),ae!==o&&(ae?Yn(0):s=!0,En()),i!==st&&(Ot=hn("speed"),At=hn("edgePadding"),Ct=hn("gutter"),Tt=hn("fixedWidth"),ne||Tt===c||(s=!0),(Dt=hn("autoHeight"))!==u&&(Dt||(Z.style.height=""))),(kt=!ae&&hn("arrowKeys"))!==l&&(kt?Qi(k,ce):Vi(k,ce)),ve){var h=Me,p=Te;Me=!ae&&hn("controls"),Te=hn("controlsText"),Me!==h&&(Me?zi(Ee):Hi(Ee)),Te!==p&&(ke.innerHTML=Te[0],Oe.innerHTML=Te[1])}if(he){var m=Be;(Be=!ae&&hn("nav"))!==m&&(Be?(zi(De),mi()):Hi(De))}if(ge){var g=an;(an=!ae&&hn("touch"))!==g&&Q&&(an?Qi($,fe):Vi($,fe))}if(ye){var y=rn;(rn=!ae&&hn("mouseDrag"))!==y&&Q&&(rn?Qi($,de):Vi($,de))}if(me){var x=Qe,b=Ke,w=Ge,C=Ye;if(ae?Qe=Ke=Ge=!1:(Qe=hn("autoplay"))?(Ke=hn("autoplayHoverPause"),Ge=hn("autoplayResetOnVisibility")):Ke=Ge=!1,Ye=hn("autoplayText"),Ve=hn("autoplayTimeout"),Qe!==x&&(Qe?(Ue&&zi(Ue),ze||je||ii()):(Ue&&Hi(Ue),ze&&ai())),Ke!==b&&(Ke?Qi($,le):Vi($,le)),Ge!==w&&(Ge?Qi(k,ue):Vi(k,ue)),Ue&&Ye!==C){var A=Qe?1:0,M=Ue.innerHTML,T=M.length-C[A].length;M.substring(T)===C[A]&&(Ue.innerHTML=M.substring(0,T)+Ye[A])}}if(!O){if(ae||At===f&&Ct===d||(Z.style.cssText=mn(At,Ct,Tt)),J&&!Tt){Q&&($.style.width=gn(!1,null,xt));var E=yn(Tt,Ct,xt)+xn(Ct);n=ki(e=Lt)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),Ei(Lt,"#"+ee+" > .tns-item",E,ki(Lt))}Tt||(s=!0)}Vt!==a&&(Zt.emit("indexChanged",gi()),s=!0),(xt!==r||Mt)&&(In(),function(){if(!Q){for(var t=Vt+Math.min(nt,xt),e=Wt;e--;){var n=et[e];Vt<=e&&e<t?(Li(n,"tns-moving"),n.style.left=100*(e-Vt)/xt+"%",Li(n,V),Si(n,K)):n.style.left&&(n.style.left="",Li(n,K),Si(n,V)),Si(n,X)}setTimeout(function(){Bi(et,function(t){Si(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&Hn())}kn(!0),s&&(Yn(),Xt=Vt),!Dt&&Q||ne||Ln(),i!==st&&Zt.emit("newBreakpointEnd",gi(t))}}function Tn(){st=0,ot.forEach(function(t,e){t<=lt&&(st=e+1)})}function En(){var t="tns-transparent";if(ae){if(!dt){if(At&&(Z.style.margin="0px"),Rt)for(var e=Rt;e--;)Q&&Li(et[e],t),Li(et[Wt-e-1],t);dt=!0}}else if(dt){if(At&&!Tt&&O&&(Z.style.margin=""),Rt)for(e=Rt;e--;)Q&&Si(et[e],t),Si(et[Wt-e-1],t);dt=!1}}function kn(t){Tt&&At&&(ae||it<=Tt+Ct?"0px"!==Z.style.margin&&(Z.style.margin="0px"):t&&(Z.style.cssText=mn(At,Ct,Tt)))}function On(t){var e=et.length;if(t){if(Lt.disabled=!0,$.className=$.className.replace(te.substring(1),""),Wi($),Bt)for(var n=Rt;n--;)Q&&Hi(et[n]),Hi(et[e-n-1]);if(J&&Q||Wi(Z),!Q)for(var i=Vt,a=Vt+nt;i<a;i++){Wi(r=et[i]),Si(r,V),Si(r,K)}}else{if(Lt.disabled=!1,$.className+=te,J&&!Mt||(Wn(),Mt&&(ft=Xn(),Kt=ln())),Yn(),Bt)for(n=Rt;n--;)Q&&zi(et[n]),zi(et[e-n-1]);if(!Q)for(i=Vt,a=Vt+nt;i<a;i++){var r=et[i],o=i<Vt+xt?V:K;r.style.left=100*(i-Vt)/xt+"%",Li(r,o)}}}function Nn(){if(St&&!ne){var t=Vt;if(Mt)for(var e=Vt+1,n=e,i=ct[Vt]+U+At-Ct;ct[e]<i;)n=++e;else n=Vt+xt;for(At&&(t-=1,Mt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Wt)),console.log(t,n);t<n;t++)Bi(et[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[L]=function(t){t.stopPropagation()},Qi(t,n),Di(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Li(t,"loaded"))})}}function Bn(t){var e=ui(t);Li(e,be),Vi(e,we)}function Dn(t,e){for(var n=[],i=t,a=Math.min(t+e,Wt);i<a;i++)Bi(et[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Ln(){var t=Dt?Dn(Vt,xt):Dn(Rt,nt);yi(function(){Sn(t,Rn)})}function Sn(n,t){return vt?t():(n.forEach(function(t,e){Di(t,be)&&n.splice(e,1)}),n.length?void yi(function(){Sn(n,t)}):t())}function In(){Nn(),function(){for(var t=Vt+Math.min(nt,xt),e=Wt;e--;){var n=et[e];Vt<=e&&e<t?Ii(n,"tabindex")&&(Pi(n,{"aria-hidden":"false"}),Ri(n,["tabindex"]),Li(n,xe)):(Ii(n,"tabindex")||Pi(n,{"aria-hidden":"true",tabindex:"-1"}),Di(n,xe)&&Si(n,xe))}}(),Qn(),mi(),function(){if(Be&&(Pe=-1!==Ie?Ie:un(),Ie=-1,Pe!==Re)){var t=Ne[Re],e=Ne[Pe];Pi(t,{tabindex:"-1","aria-selected":"false"}),Pi(e,{tabindex:"0","aria-selected":"true"}),Si(t,We),Li(e,We),Re=Pe}}()}function Pn(t,e){for(var n=[],i=t,a=Math.min(t+e,Wt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function Rn(){var t=Dt?Pn(Vt,xt):Pn(Rt,nt);Z.style.height!==t&&(Z.style.height=t+"px")}function Wn(){ct=[0];for(var t,e=J?"left":"top",n=et[0].getBoundingClientRect()[e],i=1;i<Wt;i++)t=et[i].getBoundingClientRect()[e],ct.push(t-n)}function Hn(){_.style.msScrollSnapPointsX="snapInterval(0%, "+100/xt+"%)"}function zn(t){return t.nodeName.toLowerCase()}function qn(t){return"button"===zn(t)}function jn(t){return"true"===t.getAttribute("aria-disabled")}function Fn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Qn(){if(Me&&!Nt&&!Bt){var t=Ce?ke.disabled:jn(ke),e=Ae?Oe.disabled:jn(Oe),n=Vt===Yt,i=!Nt&&Vt===Kt;n&&!t&&Fn(Ce,ke,!0),!n&&t&&Fn(Ce,ke,!1),i&&!e&&Fn(Ae,Oe,!0),!i&&e&&Fn(Ae,Oe,!1)}}function Vn(t,e){E&&(t.style[E]=e)}function Xn(){var t=-((Tt?(Tt+Ct)*Wt-Ct:ct[Wt-1]+et[Wt-1].getBoundingClientRect().width-Ct)-U);return 0<t&&(t=0),t}function Yn(t){Vn($,"0s"),Kn(t),setTimeout(function(){Vn($,"")},10)}function Kn(t){var e;null==t&&(e=J&&!Mt?Tt?-(Tt+Ct)*Vt:100*-Vt/(M?Wt:xt):-ct[Vt],Ht&&(e=Math.max(e,ft)),t=e+=!J||Mt||Tt?"px":"%"),$.style[qt]=jt+t+Ft}function Un(t,e,n,i){var a=t+xt;Bt||(a=Math.min(a,Wt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Vt)/xt+"%"),Y&&N&&(o.style[N]=o.style[D]=Y*(r-t)/1e3+"s"),Si(o,e),Li(o,n),i&&It.push(o)}}function Gn(t,e){zt&&on(),(Vt!==Xt||e)&&(Zt.emit("indexChanged",gi()),Zt.emit("transitionStart",gi()),ze&&t&&0<=["click","keydown"].indexOf(t.type)&&ai(),Jt=!0,sn())}function Jn(t){return t.toLowerCase().replace(/-/g,"")}function _n(t){if(Q||Jt){if(Zt.emit("transitionEnd",gi(t)),!Q&&0<It.length)for(var e=0;e<It.length;e++){var n=It[e];n.style.left="",D&&N&&(n.style[D]="",n.style[N]=""),Si(n,X),Li(n,K)}if(!t||!Q&&t.target.parentNode===$||t.target===$&&Jn(t.propertyName)===Jn(qt)){if(!zt){var i=Vt;on(),Vt!==i&&(Zt.emit("indexChanged",gi()),Yn())}Dt&&Ln(),"inner"===wt&&Zt.emit("innerLoaded",gi()),Jt=!1,Xt=Vt}}}function Zn(t,e){if(!ae)if("prev"===t)$n(e,-1);else if("next"===t)$n(e,1);else{Jt&&_n();var n=un(),i=0;if(n<0&&(n+=nt),"first"===t)i=-n;else if("last"===t)i=Q?nt-xt-n:nt-1-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){e||(t-=1,Q&&Rt&&(t+=Rt));var a=un(t);a<0&&(a+=nt),i=a-n}if(!Q&&i&&Math.abs(i)<xt){var r=0<i?1:-1;i+=Yt<=Vt+i-nt?nt*r:2*nt*r*-1}Vt+=i,Q&&Bt&&(Vt<Yt&&(Vt+=nt),Kt<Vt&&(Vt-=nt)),un(Vt)!==un(Xt)&&Gn(e)}}function $n(t,e){var n;if(Jt&&_n(),!e){for(var i=(t=li(t)).target||t.srcElement;i!==Ee&&[ke,Oe].indexOf(i)<0;)i=i.parentNode;var a=[ke,Oe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Nt){if(Vt===Yt&&-1===e)return void Zn("last",t);if(Vt===Kt&&1===e)return void Zn("first",t)}e&&(Vt+=bt*e,Mt&&(Vt=Math.floor(Vt)),Gn(n||t&&"keydown"===t.type?t:null))}function ti(){He=setInterval(function(){$n(null,Xe)},Ve),ze=!0}function ei(){clearInterval(He),ze=!1}function ni(t,e){Pi(Ue,{"data-action":t}),Ue.innerHTML=Je[0]+t+Je[1]+e}function ii(){ti(),Ue&&ni("stop",Ye[1])}function ai(){ei(),Ue&&ni("start",Ye[0])}function ri(){ze?(ai(),je=!0):(ii(),je=!1)}function oi(t){t.focus()}function si(){sn(0,$.scrollLeft),Xt=Vt}function li(t){return ci(t=t||b.event)?t.changedTouches[0]:t}function ui(t){return t.target||b.event.srcElement}function ci(t){return 0<=t.type.indexOf("touch")}function fi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function di(t){Jt&&_n(),tn=!0,Q&&(xi(en),en=0);var e=li(t);Zt.emit(ci(t)?"touchStart":"dragStart",gi(t)),!ci(t)&&0<=["img","a"].indexOf(zn(ui(t)))&&fi(t),$e.x=Ze.x=parseInt(e.clientX),$e.y=Ze.y=parseInt(e.clientY),Q&&(_e=parseFloat($.style[qt].replace(jt,"").replace(Ft,"")),Vn($,"0s"))}function vi(t){if(tn){var e=li(t);$e.x=parseInt(e.clientX),$e.y=parseInt(e.clientY)}Q&&!en&&(en=yi(function(){!function t(e){if(!Gt)return void(tn=!1);xi(en);tn&&(en=yi(function(){t(e)}));"?"===Gt&&$e.x!==Ze.x&&$e.y!==Ze.y&&(Gt=Ni(Oi($e.y-Ze.y,$e.x-Ze.x),Ut)===x.axis);if(Gt){try{e.type&&Zt.emit(ci(e)?"touchMove":"dragMove",gi(e))}catch(t){}var n=_e,i=nn($e,Ze);if(!J||Tt||Mt)n+=i,n+="px";else{var a=M?i*xt*100/(U*Wt):100*i/U;n+=a,n+="%"}$.style[qt]=jt+n+Ft}}(t)}))}function hi(i){if(Ut&&(Gt="?"),tn){Q&&(xi(en),Vn($,"")),tn=!1;var t=li(i);$e.x=parseInt(t.clientX),$e.y=parseInt(t.clientY);var a=nn($e,Ze);if(5<=Math.abs(a)){if(!ci(i)){var n=ui(i);Qi(n,{click:function t(e){fi(e),Vi(n,{click:t})}})}Q?en=yi(function(){if(J&&!Mt){var t=-a*xt/U;t=0<a?Math.floor(t):Math.ceil(t),Vt+=t}else{var e=-(_e+a);if(e<=0)Vt=Yt;else if(e>=ct[ct.length-1])Vt=Kt;else for(var n=0;n++,Vt=a<0?n+1:n,n<Wt&&e>=ct[n+1];);}Gn(i,a),Zt.emit(ci(i)?"touchEnd":"dragEnd",gi(i))}):("?"===Gt&&$e.x!==Ze.x&&$e.y!==Ze.y&&(Gt=Ni(Oi($e.y-Ze.y,$e.x-Ze.x),Ut)===x.axis),Gt&&$n(i,0<a?-1:1))}}}function pi(){Z.style.height=ct[Vt+xt]-ct[Vt]+"px"}function mi(){Be&&!pe&&(!function(){Le=[];for(var t=un()%xt;t<nt;)Q&&!Bt&&nt<t+xt&&(t=nt-xt),Le.push(t),t+=xt;(Bt&&Le.length*xt<nt||!Bt&&0<Le[0])&&Le.unshift(0)}(),Le!==Se&&(Bi(Ne,function(t,e){Le.indexOf(e)<0?Hi(t):zi(t)}),Se=Le))}function gi(t){return{container:$,slideItems:et,navContainer:De,navItems:Ne,controlsContainer:Ee,hasControls:ve,prevButton:ke,nextButton:Oe,items:xt,slideBy:bt,cloneCount:Rt,slideCount:nt,slideCountNew:Wt,index:Vt,indexCached:Xt,navCurrentIndex:Pe,navCurrentIndexCached:Re,visibleNavIndexes:Le,visibleNavIndexesCached:Se,sheet:Lt,event:t||{}}}I&&console.warn("No slides found in",x.container)};return Yi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
