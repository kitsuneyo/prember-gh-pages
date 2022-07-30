/*! For license information please see chunk.977.087655b13875c12cad5d.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[977],{202:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>_,afterRead:()=>g,afterWrite:()=>T,applyStyles:()=>R,arrow:()=>$,auto:()=>s,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>m,beforeWrite:()=>x,bottom:()=>o,clippingParents:()=>l,computeStyles:()=>ee,createPopper:()=>Se,createPopperBase:()=>Pe,createPopperLite:()=>ke,detectOverflow:()=>ve,end:()=>f,eventListeners:()=>ne,flip:()=>be,hide:()=>ge,left:()=>a,main:()=>O,modifierPhases:()=>A,offset:()=>we,placements:()=>b,popper:()=>d,popperGenerator:()=>je,popperOffsets:()=>Oe,preventOverflow:()=>_e,read:()=>y,reference:()=>h,right:()=>i,start:()=>u,top:()=>r,variationPlacements:()=>v,viewport:()=>p,write:()=>E})
var r="top",o="bottom",i="right",a="left",s="auto",c=[r,o,i,a],u="start",f="end",l="clippingParents",p="viewport",d="popper",h="reference",v=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+f])}),[]),b=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+f])}),[]),m="beforeRead",y="read",g="afterRead",w="beforeMain",O="main",_="afterMain",x="beforeWrite",E="write",T="afterWrite",A=[m,y,g,w,O,_,x,E,T]
function j(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function S(e){return e instanceof P(e).Element||e instanceof Element}function k(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function D(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}const R={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
k(o)&&j(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
k(r)&&j(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function N(e){return e.split("-")[0]}var F=Math.max,C=Math.min,M=Math.round
function L(e,t){void 0===t&&(t=!1)
var n=e.getBoundingClientRect(),r=1,o=1
if(k(e)&&t){var i=e.offsetHeight,a=e.offsetWidth
a>0&&(r=M(n.width)/a||1),i>0&&(o=M(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function I(e){var t=L(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function B(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&D(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function G(e){return P(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(j(e))>=0}function H(e){return((S(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||H(e)}function q(e){return k(e)&&"fixed"!==G(e).position?e.offsetParent:null}function V(e){for(var t=P(e),n=q(e);n&&W(n)&&"static"===G(n).position;)n=q(n)
return n&&("html"===j(n)||"body"===j(n)&&"static"===G(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&k(e)&&"fixed"===G(e).position)return null
var n=U(e)
for(D(n)&&(n=n.host);k(n)&&["html","body"].indexOf(j(n))<0;){var r=G(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e,t,n){return F(e,C(t,n))}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const $={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,u=e.options,f=n.elements.arrow,l=n.modifiersData.popperOffsets,p=N(n.placement),d=Y(p),h=[a,i].indexOf(p)>=0?"height":"width"
if(f&&l){var v=function(e,t){return z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,c))}(u.padding,n),b=I(f),m="y"===d?r:a,y="y"===d?o:i,g=n.rects.reference[h]+n.rects.reference[d]-l[d]-n.rects.popper[h],w=l[d]-n.rects.reference[d],O=V(f),_=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,x=g/2-w/2,E=v[m],T=_-b[h]-v[y],A=_/2-b[h]/2+x,j=K(E,A,T),P=d
n.modifiersData[s]=((t={})[P]=j,t.centerOffset=j-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&B(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function J(e){return e.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function Z(e){var t,n=e.popper,s=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,p=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,b=e.isFixed,m=l.x,y=void 0===m?0:m,g=l.y,w=void 0===g?0:g,O="function"==typeof v?v({x:y,y:w}):{x:y,y:w}
y=O.x,w=O.y
var _=l.hasOwnProperty("x"),x=l.hasOwnProperty("y"),E=a,T=r,A=window
if(h){var j=V(n),S="clientHeight",k="clientWidth"
j===P(n)&&"static"!==G(j=H(n)).position&&"absolute"===p&&(S="scrollHeight",k="scrollWidth"),(c===r||(c===a||c===i)&&u===f)&&(T=o,w-=(b&&j===A&&A.visualViewport?A.visualViewport.height:j[S])-s.height,w*=d?1:-1),c!==a&&(c!==r&&c!==o||u!==f)||(E=i,y-=(b&&j===A&&A.visualViewport?A.visualViewport.width:j[k])-s.width,y*=d?1:-1)}var D,R=Object.assign({position:p},h&&Q),N=!0===v?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1
return{x:M(t*r)/r||0,y:M(n*r)/r||0}}({x:y,y:w}):{x:y,y:w}
return y=N.x,w=N.y,d?Object.assign({},R,((D={})[T]=x?"0":"",D[E]=_?"0":"",D.transform=(A.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",D)):Object.assign({},R,((t={})[T]=x?w+"px":"",t[E]=_?y+"px":"",t.transform="",t))}const ee={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:N(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var te={passive:!0}
const ne={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=P(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,te)})),s&&c.addEventListener("resize",n.update,te),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),s&&c.removeEventListener("resize",n.update,te)}},data:{}}
var re={left:"right",right:"left",bottom:"top",top:"bottom"}
function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return re[e]}))}var ie={start:"end",end:"start"}
function ae(e){return e.replace(/start|end/g,(function(e){return ie[e]}))}function se(e){var t=P(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(e){return L(H(e)).left+se(e).scrollLeft}function ue(e){var t=G(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function fe(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:k(e)&&ue(e)?e:fe(U(e))}function le(e,t){var n
void 0===t&&(t=[])
var r=fe(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=P(r),a=o?[i].concat(i.visualViewport||[],ue(r)?r:[]):r,s=t.concat(a)
return o?s:s.concat(le(U(a)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t){return t===p?pe(function(e){var t=P(e),n=H(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0
return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+ce(e),y:s}}(e)):S(t)?function(e){var t=L(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,n=H(e),r=se(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ce(e),c=-r.scrollTop
return"rtl"===G(o||n).direction&&(s+=F(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(H(e)))}function he(e){var t,n=e.reference,s=e.element,c=e.placement,l=c?N(c):null,p=c?J(c):null,d=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2
switch(l){case r:t={x:d,y:n.y-s.height}
break
case o:t={x:d,y:n.y+n.height}
break
case i:t={x:n.x+n.width,y:h}
break
case a:t={x:n.x-s.width,y:h}
break
default:t={x:n.x,y:n.y}}var v=l?Y(l):null
if(null!=v){var b="y"===v?"height":"width"
switch(p){case u:t[v]=t[v]-(n[b]/2-s[b]/2)
break
case f:t[v]=t[v]+(n[b]/2-s[b]/2)}}return t}function ve(e,t){void 0===t&&(t={})
var n=t,a=n.placement,s=void 0===a?e.placement:a,u=n.boundary,f=void 0===u?l:u,v=n.rootBoundary,b=void 0===v?p:v,m=n.elementContext,y=void 0===m?d:m,g=n.altBoundary,w=void 0!==g&&g,O=n.padding,_=void 0===O?0:O,x=z("number"!=typeof _?_:X(_,c)),E=y===d?h:d,T=e.rects.popper,A=e.elements[w?E:y],P=function(e,t,n){var r="clippingParents"===t?function(e){var t=le(U(e)),n=["absolute","fixed"].indexOf(G(e).position)>=0&&k(e)?V(e):e
return S(n)?t.filter((function(e){return S(e)&&B(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=de(e,n)
return t.top=F(r.top,t.top),t.right=C(r.right,t.right),t.bottom=C(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),de(e,i))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(S(A)?A:A.contextElement||H(e.elements.popper),f,b),D=L(e.elements.reference),R=he({reference:D,element:T,strategy:"absolute",placement:s}),N=pe(Object.assign({},T,R)),M=y===d?N:D,I={top:P.top-M.top+x.top,bottom:M.bottom-P.bottom+x.bottom,left:P.left-M.left+x.left,right:M.right-P.right+x.right},W=e.modifiersData.offset
if(y===d&&W){var q=W[s]
Object.keys(I).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x"
I[e]+=q[n]*t}))}return I}const be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,f=e.name
if(!t.modifiersData[f]._skip){for(var l=n.mainAxis,p=void 0===l||l,d=n.altAxis,h=void 0===d||d,m=n.fallbackPlacements,y=n.padding,g=n.boundary,w=n.rootBoundary,O=n.altBoundary,_=n.flipVariations,x=void 0===_||_,E=n.allowedAutoPlacements,T=t.options.placement,A=N(T),j=m||(A!==T&&x?function(e){if(N(e)===s)return[]
var t=oe(e)
return[ae(e),t,ae(t)]}(T):[oe(T)]),P=[T].concat(j).reduce((function(e,n){return e.concat(N(n)===s?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=void 0===u?b:u,l=J(r),p=l?s?v:v.filter((function(e){return J(e)===l})):c,d=p.filter((function(e){return f.indexOf(e)>=0}))
0===d.length&&(d=p)
var h=d.reduce((function(t,n){return t[n]=ve(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[N(n)],t}),{})
return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:g,rootBoundary:w,padding:y,flipVariations:x,allowedAutoPlacements:E}):n)}),[]),S=t.rects.reference,k=t.rects.popper,D=new Map,R=!0,F=P[0],C=0;C<P.length;C++){var M=P[C],L=N(M),I=J(M)===u,B=[r,o].indexOf(L)>=0,G=B?"width":"height",W=ve(t,{placement:M,boundary:g,rootBoundary:w,altBoundary:O,padding:y}),H=B?I?i:a:I?o:r
S[G]>k[G]&&(H=oe(H))
var U=oe(H),q=[]
if(p&&q.push(W[L]<=0),h&&q.push(W[H]<=0,W[U]<=0),q.every((function(e){return e}))){F=M,R=!1
break}D.set(M,q)}if(R)for(var V=function(e){var t=P.find((function(t){var n=D.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return F=t,"break"},Y=x?3:1;Y>0&&"break"!==V(Y);Y--);t.placement!==F&&(t.modifiersData[f]._skip=!0,t.placement=F,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}const ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),c=me(a,r),u=me(s,o,i),f=ye(c),l=ye(u)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,s=n.offset,c=void 0===s?[0,0]:s,u=b.reduce((function(e,n){return e[n]=function(e,t,n){var o=N(e),s=[a,r].indexOf(o)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],f=c[1]
return u=u||0,f=(f||0)*s,[a,i].indexOf(o)>=0?{x:f,y:u}:{x:u,y:f}}(n,t.rects,c),e}),{}),f=u[t.placement],l=f.x,p=f.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=u}},Oe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=he({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},_e={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,c=n.mainAxis,f=void 0===c||c,l=n.altAxis,p=void 0!==l&&l,d=n.boundary,h=n.rootBoundary,v=n.altBoundary,b=n.padding,m=n.tether,y=void 0===m||m,g=n.tetherOffset,w=void 0===g?0:g,O=ve(t,{boundary:d,rootBoundary:h,padding:b,altBoundary:v}),_=N(t.placement),x=J(t.placement),E=!x,T=Y(_),A="x"===T?"y":"x",j=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,k="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,D="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0}
if(j){if(f){var L,B="y"===T?r:a,G="y"===T?o:i,W="y"===T?"height":"width",H=j[T],U=H+O[B],q=H-O[G],z=y?-S[W]/2:0,X=x===u?P[W]:S[W],$=x===u?-S[W]:-P[W],Q=t.elements.arrow,Z=y&&Q?I(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[B],ne=ee[G],re=K(0,P[W],Z[W]),oe=E?P[W]/2-z-re-te-D.mainAxis:X-re-te-D.mainAxis,ie=E?-P[W]/2+z+re+ne+D.mainAxis:$+re+ne+D.mainAxis,ae=t.elements.arrow&&V(t.elements.arrow),se=ae?"y"===T?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(L=null==R?void 0:R[T])?L:0,ue=H+ie-ce,fe=K(y?C(U,H+oe-ce-se):U,H,y?F(q,ue):q)
j[T]=fe,M[T]=fe-H}if(p){var le,pe="x"===T?r:a,de="x"===T?o:i,he=j[A],be="y"===A?"height":"width",me=he+O[pe],ye=he-O[de],ge=-1!==[r,a].indexOf(_),we=null!=(le=null==R?void 0:R[A])?le:0,Oe=ge?me:he-P[be]-S[be]-we+D.altAxis,_e=ge?he+P[be]+S[be]-we-D.altAxis:ye,xe=y&&ge?function(e,t,n){var r=K(e,t,n)
return r>n?n:r}(Oe,he,_e):K(y?Oe:me,he,y?_e:ye)
j[A]=xe,M[A]=xe-he}t.modifiersData[s]=M}},requiresIfExists:["offset"]}
function xe(e,t,n){void 0===n&&(n=!1)
var r,o,i=k(t),a=k(t)&&function(e){var t=e.getBoundingClientRect(),n=M(t.width)/e.offsetWidth||1,r=M(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),s=H(t),c=L(e,a),u={scrollLeft:0,scrollTop:0},f={x:0,y:0}
return(i||!i&&!n)&&(("body"!==j(t)||ue(s))&&(u=(r=t)!==P(r)&&k(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:se(r)),k(t)?((f=L(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=ce(s))),{x:c.left+u.scrollLeft-f.x,y:c.top+u.scrollTop-f.y,width:c.width,height:c.height}}function Ee(e){var t=new Map,n=new Set,r=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Te={placement:"bottom",modifiers:[],strategy:"absolute"}
function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function je(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Te:o
return function(e,t,n){void 0===n&&(n=i)
var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,f={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n
l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:S(e)?le(e):e.contextElement?le(e.contextElement):[],popper:le(t)}
var a,u,p=function(e){var t=Ee(e)
return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),u=a.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))))
return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:s,name:t,instance:f,options:r})
c.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper
if(Ae(t,n)){s.rects={reference:xe(t,V(n),"fixed"===s.options.strategy),popper:I(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name
"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:f})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),u=!0}}
if(!Ae(e,t))return f
function l(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Pe=je(),Se=je({defaultModifiers:[ne,Oe,ee,R,we,be,_e,$,ge]}),ke=je({defaultModifiers:[ne,Oe,ee,R]})},836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F})
var r=n(927),o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),a="undefined"==typeof Element,s=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i))
return t&&s.call(e,i)&&r.unshift(e),r.filter(n)},f=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var c=a.shift()
if("SLOT"===c.tagName){var u=c.assignedElements(),f=e(u.length?u:c.children,!0,r)
r.flatten?o.push.apply(o,f):o.push({scope:c,candidates:f})}else{s.call(c,i)&&r.filter(c)&&(n||!t.includes(c))&&o.push(c)
var l=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),p=!r.shadowRootFilter||r.shadowRootFilter(c)
if(l&&p){var d=e(!0===l?c.children:l.children,!0,r)
r.flatten?o.push.apply(o,d):o.push({scope:c,candidates:d})}else a.unshift.apply(a,c.children)}}return o},l=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},v=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var o=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(o,"details:not([open]) *"))return!0
var i=c(e).host,a=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var u=e;e;){var f=e.parentElement,l=c(e)
if(f&&!f.shadowRoot&&!0===r(f))return h(e)
e=e.assignedSlot?e.assignedSlot:f||l===e.ownerDocument?f:l.host}e=u}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!s.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},b=function(e,t){return!(function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!o||o===e}(e)}(t)||l(t)<0||!v(e,t))},m=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],r=[]
return t.forEach((function(t,o){var i=!!t.scope,a=i?t.scope:t,s=l(a,i),c=i?e(t.candidates):a
0===s?i?n.push.apply(n,c):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:c})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=function(e,t){var n
return n=(t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:b.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:m}):u(e,t.includeContainer,b.bind(null,t)),y(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,i)&&b(t,e)},O=o.concat("iframe").join(","),_=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,O)&&v(t,e)}
function x(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?x(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A,j=(A=[],{activateTrap:function(e){if(A.length>0){var t=A[A.length-1]
t!==e&&t.pause()}var n=A.indexOf(e);-1===n||A.splice(n,1),A.push(e)},deactivateTrap:function(e){var t=A.indexOf(e);-1!==t&&A.splice(t,1),A.length>0&&A[A.length-1].unpause()}}),P=function(e){return setTimeout(e,0)},S=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},D=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},R=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=E({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},s=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},c=function(e){var t=o[e]
if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a]
t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},l=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(r.activeElement)>=0)e=r.activeElement
else{var t=i.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,r=g(e,o.tabbableOptions),i=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?f([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):u(t,n.includeContainer,v.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(t){return t===e}))
if(!(n<0))return t?i.slice(n+1).find((function(e){return w(e,o.tabbableOptions)})):i.slice(0,n).reverse().find((function(e){return w(e,o.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(l()))},h=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},b=function(e){var t=D(e)
s(t)>=0||(k(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!_(t,o.tabbableOptions)}):k(o.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=D(e),n=s(t)>=0
n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(i.mostRecentlyFocusedNode||l()))},y=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==k(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=D(e)
p()
var n=null
if(i.tabbableGroups.length>0){var r=s(t),a=r>=0?i.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var u=S(i.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(u<0&&(a.container===t||_(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(u=r),u>=0){var f=0===u?i.tabbableGroups.length-1:u-1
n=i.tabbableGroups[f].lastTabbableNode}}else{var l=S(i.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(l<0&&(a.container===t||_(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!a.nextTabbableNode(t))&&(l=r),l>=0){var h=l===i.tabbableGroups.length-1?0:l+1
n=i.tabbableGroups[h].firstTabbableNode}}}else n=c("fallbackFocus")
n&&(e.preventDefault(),d(n))}(e)},O=function(e){var t=D(e)
s(t)>=0||k(o.clickOutsideDeactivates,e)||k(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(i.active)return j.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?P((function(){d(l())})):d(l()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",b,{capture:!0,passive:!1}),r.addEventListener("touchstart",b,{capture:!0,passive:!1}),r.addEventListener("click",O,{capture:!0,passive:!1}),r.addEventListener("keydown",y,{capture:!0,passive:!1}),n},T=function(){if(i.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0),r.removeEventListener("click",O,!0),r.removeEventListener("keydown",y,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this
var t=a(e,"onActivate"),n=a(e,"onPostActivate"),o=a(e,"checkCanFocusTrap")
o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var s=function(){o&&p(),x(),n&&n()}
return o?(o(i.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!i.active)return this
var t=E({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,T(),i.active=!1,i.paused=!1,j.deactivateTrap(n)
var r=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),c=a(t,"checkCanReturnFocus"),u=a(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var f=function(){P((function(){u&&d(h(i.nodeFocusedBeforeActivation)),s&&s()}))}
return u&&c?(c(h(i.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,T()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),x(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&p(),this}}).updateContainerElements(e),n}
let N
try{N=(0,r.capabilities)("3.22")}catch{N=(0,r.capabilities)("3.13")}var F=(0,r.setModifierManager)((()=>({capabilities:N,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,n){let{named:{isActive:r,isPaused:o,shouldSelfFocus:i,focusTrapOptions:a,_createFocusTrap:s}}=n
e.focusTrapOptions={...a}||{},void 0!==r&&(e.isActive=r),void 0!==o&&(e.isPaused=o),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let c=R
s&&(c=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,t){let{named:n}=t
const r=n.focusTrapOptions||{}
if(e.isActive&&!n.isActive){const{returnFocusOnDeactivate:t}=r,n=void 0===t
e.focusTrap.deactivate({returnFocus:n})}else!e.isActive&&n.isActive&&e.focusTrap.activate()
e.isPaused&&!n.isPaused?e.focusTrap.unpause():!e.isPaused&&n.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=r,void 0!==n.isActive&&(e.isActive=n.isActive),void 0!==n.isPaused&&(e.isPaused=n.isPaused)},destroyModifier(e){let{focusTrap:t}=e
t.deactivate()}})),class{})},22:(e,t,n)=>{function r(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}n.r(t),n.d(t,{EventTarget:()=>o,Promise:()=>k,all:()=>I,allSettled:()=>G,asap:()=>ie,async:()=>_e,cast:()=>Oe,configure:()=>a,default:()=>je,defer:()=>z,denodeify:()=>F,filter:()=>ne,hash:()=>q,hashSettled:()=>Y,map:()=>$,off:()=>Ee,on:()=>xe,race:()=>W,reject:()=>Q,resolve:()=>J,rethrow:()=>K})
var o={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=r(this),o=n[e]
o||(o=n[e]=[]),-1===o.indexOf(t)&&o.push(t)},off:function(e,t){var n=r(this)
if(t){var o=n[e],i=o.indexOf(t);-1!==i&&o.splice(i,1)}else n[e]=[]},trigger:function(e,t,n){var o=r(this)[e]
if(o)for(var i=0;i<o.length;i++)(0,o[i])(t,n)}},i={instrument:!1}
function a(e,t){if(2!==arguments.length)return i[e]
i[e]=t}o.mixin(i)
var s=[]
function c(e,t,n){1===s.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:i["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<s.length;e++){var t=s[e],n=t.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),i.trigger(t.name,t.payload)}s.length=0}),50)}function u(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(f,t)
return y(n,e),n}function f(){}var l=void 0,p={error:null}
function d(e){try{return e.then}catch(e){return p.error=e,p}}var h=void 0
function v(){try{var e=h
return h=null,e.apply(this,arguments)}catch(e){return p.error=e,p}}function b(e){return h=e,v}function m(e,t,n){if(t.constructor===e.constructor&&n===T&&e.constructor.resolve===u)!function(e,t){1===t._state?w(e,t._result):2===t._state?(t._onError=null,O(e,t._result)):_(t,void 0,(function(n){t===n?w(e,n):y(e,n)}),(function(t){return O(e,t)}))}(e,t)
else if(n===p){var r=p.error
p.error=null,O(e,r)}else"function"==typeof n?function(e,t,n){i.async((function(e){var r=!1,o=b(n).call(t,(function(n){r||(r=!0,t===n?w(e,n):y(e,n))}),(function(t){r||(r=!0,O(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!r&&o===p){r=!0
var i=p.error
p.error=null,O(e,i)}}),e)}(e,t,n):w(e,t)}function y(e,t){var n,r
e===t?w(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?w(e,t):m(e,t,d(t)))}function g(e){e._onError&&e._onError(e._result),x(e)}function w(e,t){e._state===l&&(e._result=t,e._state=1,0===e._subscribers.length?i.instrument&&c("fulfilled",e):i.async(x,e))}function O(e,t){e._state===l&&(e._state=2,e._result=t,i.async(g,e))}function _(e,t,n,r){var o=e._subscribers,a=o.length
e._onError=null,o[a]=t,o[a+1]=n,o[a+2]=r,0===a&&e._state&&i.async(x,e)}function x(e){var t=e._subscribers,n=e._state
if(i.instrument&&c(1===n?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,o=void 0,a=e._result,s=0;s<t.length;s+=3)r=t[s],o=t[s+n],r?E(n,r,o,a):o(a)
e._subscribers.length=0}}function E(e,t,n,r){var o,i="function"==typeof n
if(o=i?b(n)(r):r,t._state!==l);else if(o===t)O(t,new TypeError("A promises callback cannot return that same promise."))
else if(o===p){var a=p.error
p.error=null,O(t,a)}else i?y(t,o):1===e?w(t,o):2===e&&O(t,o)}function T(e,t,n){var r=this,o=r._state
if(1===o&&!e||2===o&&!t)return i.instrument&&c("chained",r,r),r
r._onError=null
var a=new r.constructor(f,n),s=r._result
if(i.instrument&&c("chained",r,a),o===l)_(r,a,e,t)
else{var u=1===o?e:t
i.async((function(){return E(o,a,u,s)}))}return a}var A=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(f,r),this._abortOnReject=n,this._isUsingOwnPromise=e===k,this._isUsingOwnResolve=e.resolve===u,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,n=this.promise,r=0;n._state===l&&r<t;r++)this._eachEntry(e[r],r,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
w(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var o=d(e)
if(o===T&&e._state!==l)e._onError=null,this._settledAt(e._state,t,e._result,n)
else if("function"!=typeof o)this._settledAt(1,t,e,n)
else if(this._isUsingOwnPromise){var i=new r(f)
m(i,e,o),this._willSettleAt(i,t,n)}else this._willSettleAt(new r((function(t){return t(e)})),t,n)}else this._willSettleAt(r.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(1,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var o=this.promise
o._state===l&&(this._abortOnReject&&2===e?O(o,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n,r){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
_(e,void 0,(function(e){return r._settledAt(1,t,e,n)}),(function(e){return r._settledAt(2,t,e,n)}))},e}()
function j(e,t,n){this._remaining--,this._result[t]=1===e?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var P="rsvp_"+Date.now()+"-",S=0,k=function(){function e(t,n){this._id=S++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],i.instrument&&c("created",this),f!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t((function(t){n||(n=!0,y(e,t))}),(function(t){n||(n=!0,O(e,t))}))}catch(t){O(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
i.after((function(){t._onError&&i.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this,r=n.constructor
return"function"==typeof e?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}()
function D(e,t){for(var n={},r=e.length,o=new Array(r),i=0;i<r;i++)o[i]=e[i]
for(var a=0;a<t.length;a++)n[t[a]]=o[a+1]
return n}function R(e){for(var t=e.length,n=new Array(t-1),r=1;r<t;r++)n[r-1]=e[r]
return n}function N(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function F(e,t){var n=function(){for(var n=arguments.length,r=new Array(n+1),o=!1,i=0;i<n;++i){var a=arguments[i]
if(!o){if((o=L(a))===p){var s=p.error
p.error=null
var c=new k(f)
return O(c,s),c}o&&!0!==o&&(a=N(o,a))}r[i]=a}var u=new k(f)
return r[n]=function(e,n){e?O(u,e):void 0===t?y(u,n):!0===t?y(u,R(arguments)):Array.isArray(t)?y(u,D(arguments,t)):y(u,n)},o?M(u,r,e,this):C(u,r,e,this)}
return n.__proto__=e,n}function C(e,t,n,r){if(b(n).apply(r,t)===p){var o=p.error
p.error=null,O(e,o)}return e}function M(e,t,n,r){return k.all(t).then((function(t){return C(e,t,n,r)}))}function L(e){return null!==e&&"object"==typeof e&&(e.constructor===k||d(e))}function I(e,t){return k.all(e,t)}k.cast=u,k.all=function(e,t){return Array.isArray(e)?new A(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},k.race=function(e,t){var n=new this(f,t)
if(!Array.isArray(e))return O(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===l&&r<e.length;r++)_(this.resolve(e[r]),void 0,(function(e){return y(n,e)}),(function(e){return O(n,e)}))
return n},k.resolve=u,k.reject=function(e,t){var n=new this(f,t)
return O(n,e),n},k.prototype._guidKey=P,k.prototype.then=T
var B=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(A)
function G(e,t){return Array.isArray(e)?new B(k,e,t).promise:k.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function W(e,t){return k.race(e,t)}function H(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}B.prototype._setResultAt=j
var U=function(e){function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3]
return H(this,e.call(this,t,n,r,o))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),n=t.length,r=this.promise
this._remaining=n
for(var o=void 0,i=void 0,a=0;r._state===l&&a<n;a++)i=e[o=t[a]],this._eachEntry(i,o,!0)
this._checkFullfillment()},t}(A)
function q(e,t){return k.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("Promise.hash must be called with an object")
return new U(k,e,t).promise}))}var V=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(U)
function Y(e,t){return k.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("hashSettled must be called with an object")
return new V(k,e,!1,t).promise}))}function K(e){throw setTimeout((function(){throw e})),e}function z(e){var t={resolve:void 0,reject:void 0}
return t.promise=new k((function(e,n){t.resolve=e,t.reject=n}),e),t}V.prototype._setResultAt=j
var X=function(e){function t(t,n,r,o){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!0,o,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,n,r,o){var i=t.length||0
this.length=i,this._remaining=i,this._result=new Array(i),this._mapFn=o,this._enumerate(t)},t.prototype._setResultAt=function(e,t,n,r){if(r){var o=b(this._mapFn)(n,t)
o===p?this._settledAt(2,t,o.error,!1):this._eachEntry(o,t,!1)}else this._remaining--,this._result[t]=n},t}(A)
function $(e,t,n){return"function"!=typeof t?k.reject(new TypeError("map expects a function as a second argument"),n):k.resolve(e,n).then((function(e){if(!Array.isArray(e))throw new TypeError("map must be called with an array")
return new X(k,e,t,n).promise}))}function J(e,t){return k.resolve(e,t)}function Q(e,t){return k.reject(e,t)}function Z(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ee={},te=function(e){function t(){return Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==ee}))
w(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,n,r){if(r){this._result[t]=n
var o=b(this._mapFn)(n,t)
o===p?this._settledAt(2,t,o.error,!1):this._eachEntry(o,t,!1)}else this._remaining--,n||(this._result[t]=ee)},t}(X)
function ne(e,t,n){return"function"!=typeof t?k.reject(new TypeError("filter expects function as a second argument"),n):k.resolve(e,n).then((function(e){if(!Array.isArray(e))throw new TypeError("filter must be called with an array")
return new te(k,e,t,n).promise}))}var re=0,oe=void 0
function ie(e,t){pe[re]=e,pe[re+1]=t,2===(re+=2)&&we()}var ae="undefined"!=typeof window?window:void 0,se=ae||{},ce=se.MutationObserver||se.WebKitMutationObserver,ue="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),fe="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function le(){return function(){return setTimeout(de,1)}}var pe=new Array(1e3)
function de(){for(var e=0;e<re;e+=2)(0,pe[e])(pe[e+1]),pe[e]=void 0,pe[e+1]=void 0
re=0}var he,ve,be,me,ye,ge,we=void 0
ue?(ye=process.nextTick,ge=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(ge)&&"0"===ge[1]&&"10"===ge[2]&&(ye=setImmediate),we=function(){return ye(de)}):ce?(ve=0,be=new ce(de),me=document.createTextNode(""),be.observe(me,{characterData:!0}),we=function(){return me.data=ve=++ve%2}):fe?((he=new MessageChannel).port1.onmessage=de,we=function(){return he.port2.postMessage(0)}):we=void 0===ae?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(oe=e.runOnLoop||e.runOnContext)?function(){oe(de)}:le()}catch(e){return le()}}():le(),i.async=ie,i.after=function(e){return setTimeout(e,0)}
var Oe=J,_e=function(e,t){return i.async(e,t)}
function xe(){i.on.apply(i,arguments)}function Ee(){i.off.apply(i,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Te=window.__PROMISE_INSTRUMENTATION__
for(var Ae in a("instrument",!0),Te)Te.hasOwnProperty(Ae)&&xe(Ae,Te[Ae])}const je={asap:ie,cast:Oe,Promise:k,EventTarget:o,all:I,allSettled:G,race:W,hash:q,hashSettled:Y,rethrow:K,defer:z,denodeify:F,configure:a,on:xe,off:Ee,resolve:J,reject:Q,map:$,async:_e,filter:ne}}}])
