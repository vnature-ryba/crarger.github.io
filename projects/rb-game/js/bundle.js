/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
 * Bootstrap v3.4.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.0",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.0",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.0",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.0",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&a(document).find(e);return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.0",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.0",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.0",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){return(t=g.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var t=g.fn.tooltip;g.fn.tooltip=function e(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=t,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.0",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.0",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.0",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.0",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/**
 * open and close sidebars
 */
$( document ).ready(function() {
  var openedSidebar = 0;
  $('.app-open-sidebar').click(
    function () {
      if (openedSidebar === 0) {
        this.classList.add('opened');
        this.parentElement.classList.add('opened');
        openedSidebar = 1;
      }
      else {
        this.classList.remove('opened');
        this.parentElement.classList.remove('opened');
        openedSidebar = 0;
      }
    }
  );
});

/**
 * add and remove gradient
 */
$( document ).ready(function() {
    var openedCard = 0;
    $('.app-card').find('a').click(
        function () {
            if (openedCard === 0) {
                this.parentElement.classList.add('opened');
                openedCard = 1;
            }
            else {
                this.parentElement.classList.remove('opened');
                openedCard = 0;
            }
        }
    );
});

/**
 * Слайдер навигации
 */
$('.app-titles-slideshow').slick({
    dots: false,
    fade: false,
    autoplay: false,
    infinite: false,
    asNavFor: '.app-game-type-slideshow',
    speed: 800,
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                infinite: true,
                centerMode: true
            }
        }
    ]
});


/**
 * Слайдер контента
 */
$('.app-game-type-slideshow').slick({
    dots: false,
    fade: false,
    autoplay: false,
    infinite: false,
    asNavFor: '.app-titles-slideshow',
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        }
    ]
});


function Counter(selector){
    this.el = $(selector);
    this.numbers = this.el.find('> b').toArray().reverse();
}

Counter.prototype.count = function(newVal){
    var reversedArr, className;
    // update instance's value
    this.value = newVal || this.el.attr('data-value')|0;

    if( !this.value ) return;
    // convert value into an array of numbers
    reversedArr = (this.value+'').split('').reverse();
    // loop on each number element and change it
    this.numbers.forEach(function(item, i){
        setTimeout(function(){
            className = 'd' + reversedArr[i] || 0;
            //if( item.className != className)
            item.className = className;
        }, i + 1);
    });
};

/////////////// create new counter for this demo ///////////////////////

var counter = new Counter('.numCounter');
randomCount();

function randomCount(){
    counter.count( randomNum(1,500000) );
    setTimeout(randomCount,4000);
}

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}



/**
 * init tooltips
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My4zLjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXHJcbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVtdLHI9ZS5kb2N1bWVudCxpPU9iamVjdC5nZXRQcm90b3R5cGVPZixvPW4uc2xpY2UsYT1uLmNvbmNhdCxzPW4ucHVzaCx1PW4uaW5kZXhPZixsPXt9LGM9bC50b1N0cmluZyxmPWwuaGFzT3duUHJvcGVydHkscD1mLnRvU3RyaW5nLGQ9cC5jYWxsKE9iamVjdCksaD17fSxnPWZ1bmN0aW9uIGUodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJudW1iZXJcIiE9dHlwZW9mIHQubm9kZVR5cGV9LHk9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gbnVsbCE9dCYmdD09PXQud2luZG93fSx2PXt0eXBlOiEwLHNyYzohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gbShlLHQsbil7dmFyIGksbz0odD10fHxyKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLG4pZm9yKGkgaW4gdiluW2ldJiYob1tpXT1uW2ldKTt0LmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB4KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9sW2MuY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGI9XCIzLjMuMVwiLHc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHcuZm4uaW5pdChlLHQpfSxUPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZzt3LmZuPXcucHJvdG90eXBlPXtqcXVlcnk6XCIzLjMuMVwiLGNvbnN0cnVjdG9yOncsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBvLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9vLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PXcubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiB3LmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayh3Lm1hcCh0aGlzLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4sdCl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8uYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4+PTAmJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6cyxzb3J0Om4uc29ydCxzcGxpY2U6bi5zcGxpY2V9LHcuZXh0ZW5kPXcuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8ZyhhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpbj1hW3RdLGEhPT0ocj1lW3RdKSYmKGwmJnImJih3LmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8oaT8oaT0hMSxvPW4mJkFycmF5LmlzQXJyYXkobik/bjpbXSk6bz1uJiZ3LmlzUGxhaW5PYmplY3Qobik/bjp7fSxhW3RdPXcuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSx3LmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhcIjMuMy4xXCIrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09Yy5jYWxsKGUpKSYmKCEodD1pKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj1mLmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmcC5jYWxsKG4pPT09ZCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlKXttKGUpfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKEMoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKFQsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYoQyhPYmplY3QoZSkpP3cubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6cy5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOnUuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixpPVtdLG89MCxhPWUubGVuZ3RoLHM9IW47bzxhO28rKykocj0hdChlW29dLG8pKSE9PXMmJmkucHVzaChlW29dKTtyZXR1cm4gaX0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxzPVtdO2lmKEMoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJnMucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZzLnB1c2goaSk7cmV0dXJuIGEuYXBwbHkoW10scyl9LGd1aWQ6MSxzdXBwb3J0Omh9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih3LmZuW1N5bWJvbC5pdGVyYXRvcl09bltTeW1ib2wuaXRlcmF0b3JdKSx3LmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2xbXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIEMoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj14KGUpO3JldHVybiFnKGUpJiYheShlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmdD4wJiZ0LTEgaW4gZSl9dmFyIEU9ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHMsdSxsLGMsZixwLGQsaCxnLHksdixtLHgsYj1cInNpenpsZVwiKzEqbmV3IERhdGUsdz1lLmRvY3VtZW50LFQ9MCxDPTAsRT1hZSgpLGs9YWUoKSxTPWFlKCksRD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGY9ITApLDB9LE49e30uaGFzT3duUHJvcGVydHksQT1bXSxqPUEucG9wLHE9QS5wdXNoLEw9QS5wdXNoLEg9QS5zbGljZSxPPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxQPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixSPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixJPVwiXFxcXFtcIitNK1wiKihcIitSK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK1IrXCIpKXwpXCIrTStcIipcXFxcXVwiLFc9XCI6KFwiK1IrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK0krXCIpKil8LiopXFxcXCl8KVwiLCQ9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSxCPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLEY9bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCI9XCIrTStcIiooW15cXFxcXSdcXFwiXSo/KVwiK00rXCIqXFxcXF1cIixcImdcIiksWD1uZXcgUmVnRXhwKFcpLFU9bmV3IFJlZ0V4cChcIl5cIitSK1wiJFwiKSxWPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrUitcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitSK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrUitcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitJKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitXKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUCtcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LEc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxZPS9eaFxcZCQvaSxRPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sSj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxLPS9bK35dLyxaPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitNK1wiP3woXCIrTStcIil8LilcIixcImlnXCIpLGVlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1cIjB4XCIrdC02NTUzNjtyZXR1cm4gciE9PXJ8fG4/dDpyPDA/U3RyaW5nLmZyb21DaGFyQ29kZShyKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEwfDU1Mjk2LDEwMjMmcnw1NjMyMCl9LHRlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLG5lPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LHJlPWZ1bmN0aW9uKCl7cCgpfSxpZT1tZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJihcImZvcm1cImluIGV8fFwibGFiZWxcImluIGUpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtMLmFwcGx5KEE9SC5jYWxsKHcuY2hpbGROb2Rlcyksdy5jaGlsZE5vZGVzKSxBW3cuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0w9e2FwcGx5OkEubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7cS5hcHBseShlLEguY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIG9lKGUsdCxyLGkpe3ZhciBvLHMsbCxjLGYsaCx2LG09dCYmdC5vd25lckRvY3VtZW50LFQ9dD90Lm5vZGVUeXBlOjk7aWYocj1yfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgZXx8IWV8fDEhPT1UJiY5IT09VCYmMTEhPT1UKXJldHVybiByO2lmKCFpJiYoKHQ/dC5vd25lckRvY3VtZW50fHx0OncpIT09ZCYmcCh0KSx0PXR8fGQsZykpe2lmKDExIT09VCYmKGY9Si5leGVjKGUpKSlpZihvPWZbMV0pe2lmKDk9PT1UKXtpZighKGw9dC5nZXRFbGVtZW50QnlJZChvKSkpcmV0dXJuIHI7aWYobC5pZD09PW8pcmV0dXJuIHIucHVzaChsKSxyfWVsc2UgaWYobSYmKGw9bS5nZXRFbGVtZW50QnlJZChvKSkmJngodCxsKSYmbC5pZD09PW8pcmV0dXJuIHIucHVzaChsKSxyfWVsc2V7aWYoZlsyXSlyZXR1cm4gTC5hcHBseShyLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSkpLHI7aWYoKG89ZlszXSkmJm4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBMLmFwcGx5KHIsdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG8pKSxyfWlmKG4ucXNhJiYhU1tlK1wiIFwiXSYmKCF5fHwheS50ZXN0KGUpKSl7aWYoMSE9PVQpbT10LHY9ZTtlbHNlIGlmKFwib2JqZWN0XCIhPT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhjPXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2M9Yy5yZXBsYWNlKHRlLG5lKTp0LnNldEF0dHJpYnV0ZShcImlkXCIsYz1iKSxzPShoPWEoZSkpLmxlbmd0aDt3aGlsZShzLS0paFtzXT1cIiNcIitjK1wiIFwiK3ZlKGhbc10pO3Y9aC5qb2luKFwiLFwiKSxtPUsudGVzdChlKSYmZ2UodC5wYXJlbnROb2RlKXx8dH1pZih2KXRyeXtyZXR1cm4gTC5hcHBseShyLG0ucXVlcnlTZWxlY3RvckFsbCh2KSkscn1jYXRjaChlKXt9ZmluYWxseXtjPT09YiYmdC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiB1KGUucmVwbGFjZShCLFwiJDFcIiksdCxyLGkpfWZ1bmN0aW9uIGFlKCl7dmFyIGU9W107ZnVuY3Rpb24gdChuLGkpe3JldHVybiBlLnB1c2gobitcIiBcIik+ci5jYWNoZUxlbmd0aCYmZGVsZXRlIHRbZS5zaGlmdCgpXSx0W24rXCIgXCJdPWl9cmV0dXJuIHR9ZnVuY3Rpb24gc2UoZSl7cmV0dXJuIGVbYl09ITAsZX1mdW5jdGlvbiB1ZShlKXt2YXIgdD1kLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBsZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLGk9bi5sZW5ndGg7d2hpbGUoaS0tKXIuYXR0ckhhbmRsZVtuW2ldXT10fWZ1bmN0aW9uIGNlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBmZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJpbnB1dFwiPT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBwZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1ufHxcImJ1dHRvblwiPT09bikmJnQudHlwZT09PWV9fWZ1bmN0aW9uIGRlKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImZvcm1cImluIHQ/dC5wYXJlbnROb2RlJiYhMT09PXQuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gdD9cImxhYmVsXCJpbiB0LnBhcmVudE5vZGU/dC5wYXJlbnROb2RlLmRpc2FibGVkPT09ZTp0LmRpc2FibGVkPT09ZTp0LmlzRGlzYWJsZWQ9PT1lfHx0LmlzRGlzYWJsZWQhPT0hZSYmaWUodCk9PT1lOnQuZGlzYWJsZWQ9PT1lOlwibGFiZWxcImluIHQmJnQuZGlzYWJsZWQ9PT1lfX1mdW5jdGlvbiBoZShlKXtyZXR1cm4gc2UoZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3Qsc2UoZnVuY3Rpb24obixyKXt2YXIgaSxvPWUoW10sbi5sZW5ndGgsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0pbltpPW9bYV1dJiYobltpXT0hKHJbaV09bltpXSkpfSl9KX1mdW5jdGlvbiBnZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9bj1vZS5zdXBwb3J0PXt9LG89b2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiEhdCYmXCJIVE1MXCIhPT10Lm5vZGVOYW1lfSxwPW9lLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LGksYT1lP2Uub3duZXJEb2N1bWVudHx8ZTp3O3JldHVybiBhIT09ZCYmOT09PWEubm9kZVR5cGUmJmEuZG9jdW1lbnRFbGVtZW50PyhkPWEsaD1kLmRvY3VtZW50RWxlbWVudCxnPSFvKGQpLHchPT1kJiYoaT1kLmRlZmF1bHRWaWV3KSYmaS50b3AhPT1pJiYoaS5hZGRFdmVudExpc3RlbmVyP2kuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLHJlLCExKTppLmF0dGFjaEV2ZW50JiZpLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixyZSkpLG4uYXR0cmlidXRlcz11ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksbi5nZXRFbGVtZW50c0J5VGFnTmFtZT11ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChkLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxuLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9US50ZXN0KGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksbi5nZXRCeUlkPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBoLmFwcGVuZENoaWxkKGUpLmlkPWIsIWQuZ2V0RWxlbWVudHNCeU5hbWV8fCFkLmdldEVsZW1lbnRzQnlOYW1lKGIpLmxlbmd0aH0pLG4uZ2V0QnlJZD8oci5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKFosZWUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxyLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmZyl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KHIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShaLGVlKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIG4mJm4udmFsdWU9PT10fX0sci5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJmcpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxyLmZpbmQuVEFHPW4uZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOm4ucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sci5maW5kLkNMQVNTPW4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZnKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHY9W10seT1bXSwobi5xc2E9US50ZXN0KGQucXVlcnlTZWxlY3RvckFsbCkpJiYodWUoZnVuY3Rpb24oZSl7aC5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrYitcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK2IrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnkucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx5LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUCtcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitiK1wiLV1cIikubGVuZ3RofHx5LnB1c2goXCJ+PVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHkucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrYitcIisqXCIpLmxlbmd0aHx8eS5wdXNoKFwiLiMuK1srfl1cIil9KSx1ZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnkucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxoLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikseS5wdXNoKFwiLC4qOlwiKX0pKSwobi5tYXRjaGVzU2VsZWN0b3I9US50ZXN0KG09aC5tYXRjaGVzfHxoLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8aC5tb3pNYXRjaGVzU2VsZWN0b3J8fGgub01hdGNoZXNTZWxlY3Rvcnx8aC5tc01hdGNoZXNTZWxlY3RvcikpJiZ1ZShmdW5jdGlvbihlKXtuLmRpc2Nvbm5lY3RlZE1hdGNoPW0uY2FsbChlLFwiKlwiKSxtLmNhbGwoZSxcIltzIT0nJ106eFwiKSx2LnB1c2goXCIhPVwiLFcpfSkseT15Lmxlbmd0aCYmbmV3IFJlZ0V4cCh5LmpvaW4oXCJ8XCIpKSx2PXYubGVuZ3RoJiZuZXcgUmVnRXhwKHYuam9pbihcInxcIikpLHQ9US50ZXN0KGguY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHg9dHx8US50ZXN0KGguY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sRD10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGY9ITAsMDt2YXIgcj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gcnx8KDEmKHI9KGUub3duZXJEb2N1bWVudHx8ZSk9PT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhbi5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1yP2U9PT1kfHxlLm93bmVyRG9jdW1lbnQ9PT13JiZ4KHcsZSk/LTE6dD09PWR8fHQub3duZXJEb2N1bWVudD09PXcmJngodyx0KT8xOmM/TyhjLGUpLU8oYyx0KTowOjQmcj8tMToxKX06ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gZj0hMCwwO3ZhciBuLHI9MCxpPWUucGFyZW50Tm9kZSxvPXQucGFyZW50Tm9kZSxhPVtlXSxzPVt0XTtpZighaXx8IW8pcmV0dXJuIGU9PT1kPy0xOnQ9PT1kPzE6aT8tMTpvPzE6Yz9PKGMsZSktTyhjLHQpOjA7aWYoaT09PW8pcmV0dXJuIGNlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9jZShhW3JdLHNbcl0pOmFbcl09PT13Py0xOnNbcl09PT13PzE6MH0sZCk6ZH0sb2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBvZShlLG51bGwsbnVsbCx0KX0sb2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoKGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpLHQ9dC5yZXBsYWNlKHosXCI9JyQxJ11cIiksbi5tYXRjaGVzU2VsZWN0b3ImJmcmJiFTW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoIXl8fCF5LnRlc3QodCkpKXRyeXt2YXIgcj1tLmNhbGwoZSx0KTtpZihyfHxuLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIHJ9Y2F0Y2goZSl7fXJldHVybiBvZSh0LGQsbnVsbCxbZV0pLmxlbmd0aD4wfSxvZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKSx4KGUsdCl9LG9lLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSk7dmFyIGk9ci5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0sbz1pJiZOLmNhbGwoci5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/aShlLHQsIWcpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09bz9vOm4uYXR0cmlidXRlc3x8IWc/ZS5nZXRBdHRyaWJ1dGUodCk6KG89ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmby5zcGVjaWZpZWQ/by52YWx1ZTpudWxsfSxvZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZSh0ZSxuZSl9LG9lLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxvZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LHI9W10saT0wLG89MDtpZihmPSFuLmRldGVjdER1cGxpY2F0ZXMsYz0hbi5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChEKSxmKXt3aGlsZSh0PWVbbysrXSl0PT09ZVtvXSYmKGk9ci5wdXNoKG8pKTt3aGlsZShpLS0pZS5zcGxpY2UocltpXSwxKX1yZXR1cm4gYz1udWxsLGV9LGk9b2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLG89ZS5ub2RlVHlwZTtpZihvKXtpZigxPT09b3x8OT09PW98fDExPT09byl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPWkoZSl9ZWxzZSBpZigzPT09b3x8ND09PW8pcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9aSh0KTtyZXR1cm4gbn0sKHI9b2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86c2UsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZShaLGVlKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKFosZWUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fG9lLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJm9lLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBWLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1hKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKFosZWUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9RVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmRShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIGk9b2UuYXR0cihyLGUpO3JldHVybiBudWxsPT1pP1wiIT1cIj09PXQ6IXR8fChpKz1cIlwiLFwiPVwiPT09dD9pPT09bjpcIiE9XCI9PT10P2khPT1uOlwiXj1cIj09PXQ/biYmMD09PWkuaW5kZXhPZihuKTpcIio9XCI9PT10P24mJmkuaW5kZXhPZihuKT4tMTpcIiQ9XCI9PT10P24mJmkuc2xpY2UoLW4ubGVuZ3RoKT09PW46XCJ+PVwiPT09dD8oXCIgXCIraS5yZXBsYWNlKCQsXCIgXCIpK1wiIFwiKS5pbmRleE9mKG4pPi0xOlwifD1cIj09PXQmJihpPT09bnx8aS5zbGljZSgwLG4ubGVuZ3RoKzEpPT09bitcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbz1cIm50aFwiIT09ZS5zbGljZSgwLDMpLGE9XCJsYXN0XCIhPT1lLnNsaWNlKC00KSxzPVwib2YtdHlwZVwiPT09dDtyZXR1cm4gMT09PXImJjA9PT1pP2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxmLHAsZCxoLGc9byE9PWE/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIseT10LnBhcmVudE5vZGUsdj1zJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksbT0hdSYmIXMseD0hMTtpZih5KXtpZihvKXt3aGlsZShnKXtwPXQ7d2hpbGUocD1wW2ddKWlmKHM/cC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09djoxPT09cC5ub2RlVHlwZSlyZXR1cm4hMTtoPWc9XCJvbmx5XCI9PT1lJiYhaCYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKGg9W2E/eS5maXJzdENoaWxkOnkubGFzdENoaWxkXSxhJiZtKXt4PShkPShsPShjPShmPShwPXkpW2JdfHwocFtiXT17fSkpW3AudW5pcXVlSURdfHwoZltwLnVuaXF1ZUlEXT17fSkpW2VdfHxbXSlbMF09PT1UJiZsWzFdKSYmbFsyXSxwPWQmJnkuY2hpbGROb2Rlc1tkXTt3aGlsZShwPSsrZCYmcCYmcFtnXXx8KHg9ZD0wKXx8aC5wb3AoKSlpZigxPT09cC5ub2RlVHlwZSYmKyt4JiZwPT09dCl7Y1tlXT1bVCxkLHhdO2JyZWFrfX1lbHNlIGlmKG0mJih4PWQ9KGw9KGM9KGY9KHA9dClbYl18fChwW2JdPXt9KSlbcC51bmlxdWVJRF18fChmW3AudW5pcXVlSURdPXt9KSlbZV18fFtdKVswXT09PVQmJmxbMV0pLCExPT09eCl3aGlsZShwPSsrZCYmcCYmcFtnXXx8KHg9ZD0wKXx8aC5wb3AoKSlpZigocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT12OjE9PT1wLm5vZGVUeXBlKSYmKyt4JiYobSYmKChjPShmPXBbYl18fChwW2JdPXt9KSlbcC51bmlxdWVJRF18fChmW3AudW5pcXVlSURdPXt9KSlbZV09W1QseF0pLHA9PT10KSlicmVhaztyZXR1cm4oeC09aSk9PT1yfHx4JXI9PTAmJngvcj49MH19fSxQU0VVRE86ZnVuY3Rpb24oZSx0KXt2YXIgbixpPXIucHNldWRvc1tlXXx8ci5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fG9lLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gaVtiXT9pKHQpOmkubGVuZ3RoPjE/KG49W2UsZSxcIlwiLHRdLHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP3NlKGZ1bmN0aW9uKGUsbil7dmFyIHIsbz1pKGUsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0pZVtyPU8oZSxvW2FdKV09IShuW3JdPW9bYV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSwwLG4pfSk6aX19LHBzZXVkb3M6e25vdDpzZShmdW5jdGlvbihlKXt2YXIgdD1bXSxuPVtdLHI9cyhlLnJlcGxhY2UoQixcIiQxXCIpKTtyZXR1cm4gcltiXT9zZShmdW5jdGlvbihlLHQsbixpKXt2YXIgbyxhPXIoZSxudWxsLGksW10pLHM9ZS5sZW5ndGg7d2hpbGUocy0tKShvPWFbc10pJiYoZVtzXT0hKHRbc109bykpfSk6ZnVuY3Rpb24oZSxpLG8pe3JldHVybiB0WzBdPWUscih0LG51bGwsbyxuKSx0WzBdPW51bGwsIW4ucG9wKCl9fSksaGFzOnNlKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gb2UoZSx0KS5sZW5ndGg+MH19KSxjb250YWluczpzZShmdW5jdGlvbihlKXtyZXR1cm4gZT1lLnJlcGxhY2UoWixlZSksZnVuY3Rpb24odCl7cmV0dXJuKHQudGV4dENvbnRlbnR8fHQuaW5uZXJUZXh0fHxpKHQpKS5pbmRleE9mKGUpPi0xfX0pLGxhbmc6c2UoZnVuY3Rpb24oZSl7cmV0dXJuIFUudGVzdChlfHxcIlwiKXx8b2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIitlKSxlPWUucmVwbGFjZShaLGVlKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3ZhciBuO2Rve2lmKG49Zz90Lmxhbmc6dC5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8dC5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybihuPW4udG9Mb3dlckNhc2UoKSk9PT1lfHwwPT09bi5pbmRleE9mKGUrXCItXCIpfXdoaWxlKCh0PXQucGFyZW50Tm9kZSkmJjE9PT10Lm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24odCl7dmFyIG49ZS5sb2NhdGlvbiYmZS5sb2NhdGlvbi5oYXNoO3JldHVybiBuJiZuLnNsaWNlKDEpPT09dC5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWh9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09ZC5hY3RpdmVFbGVtZW50JiYoIWQuaGFzRm9jdXN8fGQuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6ZGUoITEpLGRpc2FibGVkOmRlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIXIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBZLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBHLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6aGUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OmhlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTpoZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOmhlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOmhlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6aGUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47LS1yPj0wOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDpoZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9ci5wc2V1ZG9zLmVxO2Zvcih0IGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KXIucHNldWRvc1t0XT1mZSh0KTtmb3IodCBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KXIucHNldWRvc1t0XT1wZSh0KTtmdW5jdGlvbiB5ZSgpe315ZS5wcm90b3R5cGU9ci5maWx0ZXJzPXIucHNldWRvcyxyLnNldEZpbHRlcnM9bmV3IHllLGE9b2UudG9rZW5pemU9ZnVuY3Rpb24oZSx0KXt2YXIgbixpLG8sYSxzLHUsbCxjPWtbZStcIiBcIl07aWYoYylyZXR1cm4gdD8wOmMuc2xpY2UoMCk7cz1lLHU9W10sbD1yLnByZUZpbHRlcjt3aGlsZShzKXtuJiYhKGk9Ri5leGVjKHMpKXx8KGkmJihzPXMuc2xpY2UoaVswXS5sZW5ndGgpfHxzKSx1LnB1c2gobz1bXSkpLG49ITEsKGk9Xy5leGVjKHMpKSYmKG49aS5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOmlbMF0ucmVwbGFjZShCLFwiIFwiKX0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2ZvcihhIGluIHIuZmlsdGVyKSEoaT1WW2FdLmV4ZWMocykpfHxsW2FdJiYhKGk9bFthXShpKSl8fChuPWkuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTphLG1hdGNoZXM6aX0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P3MubGVuZ3RoOnM/b2UuZXJyb3IoZSk6ayhlLHUpLnNsaWNlKDApfTtmdW5jdGlvbiB2ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gbWUoZSx0LG4pe3ZhciByPXQuZGlyLGk9dC5uZXh0LG89aXx8cixhPW4mJlwicGFyZW50Tm9kZVwiPT09byxzPUMrKztyZXR1cm4gdC5maXJzdD9mdW5jdGlvbih0LG4saSl7d2hpbGUodD10W3JdKWlmKDE9PT10Lm5vZGVUeXBlfHxhKXJldHVybiBlKHQsbixpKTtyZXR1cm4hMX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMsZixwPVtULHNdO2lmKHUpe3doaWxlKHQ9dFtyXSlpZigoMT09PXQubm9kZVR5cGV8fGEpJiZlKHQsbix1KSlyZXR1cm4hMH1lbHNlIHdoaWxlKHQ9dFtyXSlpZigxPT09dC5ub2RlVHlwZXx8YSlpZihmPXRbYl18fCh0W2JdPXt9KSxjPWZbdC51bmlxdWVJRF18fChmW3QudW5pcXVlSURdPXt9KSxpJiZpPT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXQ9dFtyXXx8dDtlbHNle2lmKChsPWNbb10pJiZsWzBdPT09VCYmbFsxXT09PXMpcmV0dXJuIHBbMl09bFsyXTtpZihjW29dPXAscFsyXT1lKHQsbix1KSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24geGUoZSl7cmV0dXJuIGUubGVuZ3RoPjE/ZnVuY3Rpb24odCxuLHIpe3ZhciBpPWUubGVuZ3RoO3doaWxlKGktLSlpZighZVtpXSh0LG4scikpcmV0dXJuITE7cmV0dXJuITB9OmVbMF19ZnVuY3Rpb24gYmUoZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylvZShlLHRbcl0sbik7cmV0dXJuIG59ZnVuY3Rpb24gd2UoZSx0LG4scixpKXtmb3IodmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7czx1O3MrKykobz1lW3NdKSYmKG4mJiFuKG8scixpKXx8KGEucHVzaChvKSxsJiZ0LnB1c2gocykpKTtyZXR1cm4gYX1mdW5jdGlvbiBUZShlLHQsbixyLGksbyl7cmV0dXJuIHImJiFyW2JdJiYocj1UZShyKSksaSYmIWlbYl0mJihpPVRlKGksbykpLHNlKGZ1bmN0aW9uKG8sYSxzLHUpe3ZhciBsLGMsZixwPVtdLGQ9W10saD1hLmxlbmd0aCxnPW98fGJlKHR8fFwiKlwiLHMubm9kZVR5cGU/W3NdOnMsW10pLHk9IWV8fCFvJiZ0P2c6d2UoZyxwLGUscyx1KSx2PW4/aXx8KG8/ZTpofHxyKT9bXTphOnk7aWYobiYmbih5LHYscyx1KSxyKXtsPXdlKHYsZCkscihsLFtdLHMsdSksYz1sLmxlbmd0aDt3aGlsZShjLS0pKGY9bFtjXSkmJih2W2RbY11dPSEoeVtkW2NdXT1mKSl9aWYobyl7aWYoaXx8ZSl7aWYoaSl7bD1bXSxjPXYubGVuZ3RoO3doaWxlKGMtLSkoZj12W2NdKSYmbC5wdXNoKHlbY109Zik7aShudWxsLHY9W10sbCx1KX1jPXYubGVuZ3RoO3doaWxlKGMtLSkoZj12W2NdKSYmKGw9aT9PKG8sZik6cFtjXSk+LTEmJihvW2xdPSEoYVtsXT1mKSl9fWVsc2Ugdj13ZSh2PT09YT92LnNwbGljZShoLHYubGVuZ3RoKTp2KSxpP2kobnVsbCxhLHYsdSk6TC5hcHBseShhLHYpfSl9ZnVuY3Rpb24gQ2UoZSl7Zm9yKHZhciB0LG4saSxvPWUubGVuZ3RoLGE9ci5yZWxhdGl2ZVtlWzBdLnR5cGVdLHM9YXx8ci5yZWxhdGl2ZVtcIiBcIl0sdT1hPzE6MCxjPW1lKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dH0scywhMCksZj1tZShmdW5jdGlvbihlKXtyZXR1cm4gTyh0LGUpPi0xfSxzLCEwKSxwPVtmdW5jdGlvbihlLG4scil7dmFyIGk9IWEmJihyfHxuIT09bCl8fCgodD1uKS5ub2RlVHlwZT9jKGUsbixyKTpmKGUsbixyKSk7cmV0dXJuIHQ9bnVsbCxpfV07dTxvO3UrKylpZihuPXIucmVsYXRpdmVbZVt1XS50eXBlXSlwPVttZSh4ZShwKSxuKV07ZWxzZXtpZigobj1yLmZpbHRlcltlW3VdLnR5cGVdLmFwcGx5KG51bGwsZVt1XS5tYXRjaGVzKSlbYl0pe2ZvcihpPSsrdTtpPG87aSsrKWlmKHIucmVsYXRpdmVbZVtpXS50eXBlXSlicmVhaztyZXR1cm4gVGUodT4xJiZ4ZShwKSx1PjEmJnZlKGUuc2xpY2UoMCx1LTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1lW3UtMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoQixcIiQxXCIpLG4sdTxpJiZDZShlLnNsaWNlKHUsaSkpLGk8byYmQ2UoZT1lLnNsaWNlKGkpKSxpPG8mJnZlKGUpKX1wLnB1c2gobil9cmV0dXJuIHhlKHApfWZ1bmN0aW9uIEVlKGUsdCl7dmFyIG49dC5sZW5ndGg+MCxpPWUubGVuZ3RoPjAsbz1mdW5jdGlvbihvLGEscyx1LGMpe3ZhciBmLGgseSx2PTAsbT1cIjBcIix4PW8mJltdLGI9W10sdz1sLEM9b3x8aSYmci5maW5kLlRBRyhcIipcIixjKSxFPVQrPW51bGw9PXc/MTpNYXRoLnJhbmRvbSgpfHwuMSxrPUMubGVuZ3RoO2ZvcihjJiYobD1hPT09ZHx8YXx8Yyk7bSE9PWsmJm51bGwhPShmPUNbbV0pO20rKyl7aWYoaSYmZil7aD0wLGF8fGYub3duZXJEb2N1bWVudD09PWR8fChwKGYpLHM9IWcpO3doaWxlKHk9ZVtoKytdKWlmKHkoZixhfHxkLHMpKXt1LnB1c2goZik7YnJlYWt9YyYmKFQ9RSl9biYmKChmPSF5JiZmKSYmdi0tLG8mJngucHVzaChmKSl9aWYodis9bSxuJiZtIT09dil7aD0wO3doaWxlKHk9dFtoKytdKXkoeCxiLGEscyk7aWYobyl7aWYodj4wKXdoaWxlKG0tLSl4W21dfHxiW21dfHwoYlttXT1qLmNhbGwodSkpO2I9d2UoYil9TC5hcHBseSh1LGIpLGMmJiFvJiZiLmxlbmd0aD4wJiZ2K3QubGVuZ3RoPjEmJm9lLnVuaXF1ZVNvcnQodSl9cmV0dXJuIGMmJihUPUUsbD13KSx4fTtyZXR1cm4gbj9zZShvKTpvfXJldHVybiBzPW9lLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9W10sbz1TW2UrXCIgXCJdO2lmKCFvKXt0fHwodD1hKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkobz1DZSh0W25dKSlbYl0/ci5wdXNoKG8pOmkucHVzaChvKTsobz1TKGUsRWUoaSxyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIG99LHU9b2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvLHUsbCxjLGYscD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGQ9IWkmJmEoZT1wLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1kLmxlbmd0aCl7aWYoKHU9ZFswXT1kWzBdLnNsaWNlKDApKS5sZW5ndGg+MiYmXCJJRFwiPT09KGw9dVswXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJmcmJnIucmVsYXRpdmVbdVsxXS50eXBlXSl7aWYoISh0PShyLmZpbmQuSUQobC5tYXRjaGVzWzBdLnJlcGxhY2UoWixlZSksdCl8fFtdKVswXSkpcmV0dXJuIG47cCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2UodS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9bz1WLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6dS5sZW5ndGg7d2hpbGUoby0tKXtpZihsPXVbb10sci5yZWxhdGl2ZVtjPWwudHlwZV0pYnJlYWs7aWYoKGY9ci5maW5kW2NdKSYmKGk9ZihsLm1hdGNoZXNbMF0ucmVwbGFjZShaLGVlKSxLLnRlc3QodVswXS50eXBlKSYmZ2UodC5wYXJlbnROb2RlKXx8dCkpKXtpZih1LnNwbGljZShvLDEpLCEoZT1pLmxlbmd0aCYmdmUodSkpKXJldHVybiBMLmFwcGx5KG4saSksbjticmVha319fXJldHVybihwfHxzKGUsZCkpKGksdCwhZyxuLCF0fHxLLnRlc3QoZSkmJmdlKHQucGFyZW50Tm9kZSl8fHQpLG59LG4uc29ydFN0YWJsZT1iLnNwbGl0KFwiXCIpLnNvcnQoRCkuam9pbihcIlwiKT09PWIsbi5kZXRlY3REdXBsaWNhdGVzPSEhZixwKCksbi5zb3J0RGV0YWNoZWQ9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSx1ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxsZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLG4uYXR0cmlidXRlcyYmdWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGxlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSx1ZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxsZShQLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLG9lfShlKTt3LmZpbmQ9RSx3LmV4cHI9RS5zZWxlY3RvcnMsdy5leHByW1wiOlwiXT13LmV4cHIucHNldWRvcyx3LnVuaXF1ZVNvcnQ9dy51bmlxdWU9RS51bmlxdWVTb3J0LHcudGV4dD1FLmdldFRleHQsdy5pc1hNTERvYz1FLmlzWE1MLHcuY29udGFpbnM9RS5jb250YWlucyx3LmVzY2FwZVNlbGVjdG9yPUUuZXNjYXBlO3ZhciBrPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZ3KGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sUz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0sRD13LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIE4oZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBBPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSx0LG4pe3JldHVybiBnKHQpP3cuZ3JlcChlLGZ1bmN0aW9uKGUscil7cmV0dXJuISF0LmNhbGwoZSxyLGUpIT09bn0pOnQubm9kZVR5cGU/dy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10IT09bn0pOlwic3RyaW5nXCIhPXR5cGVvZiB0P3cuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiB1LmNhbGwodCxlKT4tMSE9PW59KTp3LmZpbHRlcih0LGUsbil9dy5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1yLm5vZGVUeXBlP3cuZmluZC5tYXRjaGVzU2VsZWN0b3IocixlKT9bcl06W106dy5maW5kLm1hdGNoZXMoZSx3LmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LHcuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj10aGlzLmxlbmd0aCxpPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHcoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PHI7dCsrKWlmKHcuY29udGFpbnMoaVt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0Kyspdy5maW5kKGUsaVt0XSxuKTtyZXR1cm4gcj4xP3cudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmRC50ZXN0KGUpP3coZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgcSxMPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyh3LmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLG87aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxxLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKGk9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06TC5leGVjKGUpKXx8IWlbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihpWzFdKXtpZih0PXQgaW5zdGFuY2VvZiB3P3RbMF06dCx3Lm1lcmdlKHRoaXMsdy5wYXJzZUhUTUwoaVsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpyLCEwKSksQS50ZXN0KGlbMV0pJiZ3LmlzUGxhaW5PYmplY3QodCkpZm9yKGkgaW4gdClnKHRoaXNbaV0pP3RoaXNbaV0odFtpXSk6dGhpcy5hdHRyKGksdFtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuKG89ci5nZXRFbGVtZW50QnlJZChpWzJdKSkmJih0aGlzWzBdPW8sdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6ZyhlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZSh3KTp3Lm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPXcuZm4scT13KHIpO3ZhciBIPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLE89e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07dy5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD13KGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPG47ZSsrKWlmKHcuY29udGFpbnModGhpcyx0W2VdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPVwic3RyaW5nXCIhPXR5cGVvZiBlJiZ3KGUpO2lmKCFELnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/YS5pbmRleChuKT4tMToxPT09bi5ub2RlVHlwZSYmdy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhvLmxlbmd0aD4xP3cudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/dS5jYWxsKHcoZSksdGhpc1swXSk6dS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayh3LnVuaXF1ZVNvcnQody5tZXJnZSh0aGlzLmdldCgpLHcoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSk7ZnVuY3Rpb24gUChlLHQpe3doaWxlKChlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9dy5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBrKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBQKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGsoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGsoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gUygoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFMoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIE4oZSxcImlmcmFtZVwiKT9lLmNvbnRlbnREb2N1bWVudDooTihlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksdy5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKGUsdCl7dy5mbltlXT1mdW5jdGlvbihuLHIpe3ZhciBpPXcubWFwKHRoaXMsdCxuKTtyZXR1cm5cIlVudGlsXCIhPT1lLnNsaWNlKC01KSYmKHI9biksciYmXCJzdHJpbmdcIj09dHlwZW9mIHImJihpPXcuZmlsdGVyKHIsaSkpLHRoaXMubGVuZ3RoPjEmJihPW2VdfHx3LnVuaXF1ZVNvcnQoaSksSC50ZXN0KGUpJiZpLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soaSl9fSk7dmFyIE09L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIFIoZSl7dmFyIHQ9e307cmV0dXJuIHcuZWFjaChlLm1hdGNoKE0pfHxbXSxmdW5jdGlvbihlLG4pe3Rbbl09ITB9KSx0fXcuQ2FsbGJhY2tzPWZ1bmN0aW9uKGUpe2U9XCJzdHJpbmdcIj09dHlwZW9mIGU/UihlKTp3LmV4dGVuZCh7fSxlKTt2YXIgdCxuLHIsaSxvPVtdLGE9W10scz0tMSx1PWZ1bmN0aW9uKCl7Zm9yKGk9aXx8ZS5vbmNlLHI9dD0hMDthLmxlbmd0aDtzPS0xKXtuPWEuc2hpZnQoKTt3aGlsZSgrK3M8by5sZW5ndGgpITE9PT1vW3NdLmFwcGx5KG5bMF0sblsxXSkmJmUuc3RvcE9uRmFsc2UmJihzPW8ubGVuZ3RoLG49ITEpfWUubWVtb3J5fHwobj0hMSksdD0hMSxpJiYobz1uP1tdOlwiXCIpfSxsPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gbyYmKG4mJiF0JiYocz1vLmxlbmd0aC0xLGEucHVzaChuKSksZnVuY3Rpb24gdChuKXt3LmVhY2gobixmdW5jdGlvbihuLHIpe2cocik/ZS51bmlxdWUmJmwuaGFzKHIpfHxvLnB1c2gocik6ciYmci5sZW5ndGgmJlwic3RyaW5nXCIhPT14KHIpJiZ0KHIpfSl9KGFyZ3VtZW50cyksbiYmIXQmJnUoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHcuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgobj13LmluQXJyYXkodCxvLG4pKT4tMSlvLnNwbGljZShuLDEpLG48PXMmJnMtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT93LmluQXJyYXkoZSxvKT4tMTpvLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBvJiYobz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBpPWE9W10sbz1uPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hb30sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPWE9W10sbnx8dHx8KG89bj1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsbil7cmV0dXJuIGl8fChuPVtlLChuPW58fFtdKS5zbGljZT9uLnNsaWNlKCk6bl0sYS5wdXNoKG4pLHR8fHUoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBsLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhcn19O3JldHVybiBsfTtmdW5jdGlvbiBJKGUpe3JldHVybiBlfWZ1bmN0aW9uIFcoZSl7dGhyb3cgZX1mdW5jdGlvbiAkKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZnKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJmcoaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX13LmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24odCl7dmFyIG49W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIix3LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSx3LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsdy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIix3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxyPVwicGVuZGluZ1wiLGk9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBvLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBpLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cztyZXR1cm4gdy5EZWZlcnJlZChmdW5jdGlvbih0KXt3LmVhY2gobixmdW5jdGlvbihuLHIpe3ZhciBpPWcoZVtyWzRdXSkmJmVbcls0XV07b1tyWzFdXShmdW5jdGlvbigpe3ZhciBlPWkmJmkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJmcoZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyh0Lm5vdGlmeSkuZG9uZSh0LnJlc29sdmUpLmZhaWwodC5yZWplY3QpOnRbclswXStcIldpdGhcIl0odGhpcyxpP1tlXTphcmd1bWVudHMpfSl9KSxlPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxyLGkpe3ZhciBvPTA7ZnVuY3Rpb24gYSh0LG4scixpKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcz10aGlzLHU9YXJndW1lbnRzLGw9ZnVuY3Rpb24oKXt2YXIgZSxsO2lmKCEodDxvKSl7aWYoKGU9ci5hcHBseShzLHUpKT09PW4ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7bD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sZyhsKT9pP2wuY2FsbChlLGEobyxuLEksaSksYShvLG4sVyxpKSk6KG8rKyxsLmNhbGwoZSxhKG8sbixJLGkpLGEobyxuLFcsaSksYShvLG4sSSxuLm5vdGlmeVdpdGgpKSk6KHIhPT1JJiYocz12b2lkIDAsdT1bZV0pLChpfHxuLnJlc29sdmVXaXRoKShzLHUpKX19LGM9aT9sOmZ1bmN0aW9uKCl7dHJ5e2woKX1jYXRjaChlKXt3LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJncuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLGMuc3RhY2tUcmFjZSksdCsxPj1vJiYociE9PVcmJihzPXZvaWQgMCx1PVtlXSksbi5yZWplY3RXaXRoKHMsdSkpfX07dD9jKCk6KHcuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYoYy5zdGFja1RyYWNlPXcuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLGUuc2V0VGltZW91dChjKSl9fXJldHVybiB3LkRlZmVycmVkKGZ1bmN0aW9uKGUpe25bMF1bM10uYWRkKGEoMCxlLGcoaSk/aTpJLGUubm90aWZ5V2l0aCkpLG5bMV1bM10uYWRkKGEoMCxlLGcodCk/dDpJKSksblsyXVszXS5hZGQoYSgwLGUsZyhyKT9yOlcpKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT93LmV4dGVuZChlLGkpOml9fSxvPXt9O3JldHVybiB3LmVhY2gobixmdW5jdGlvbihlLHQpe3ZhciBhPXRbMl0scz10WzVdO2lbdFsxXV09YS5hZGQscyYmYS5hZGQoZnVuY3Rpb24oKXtyPXN9LG5bMy1lXVsyXS5kaXNhYmxlLG5bMy1lXVszXS5kaXNhYmxlLG5bMF1bMl0ubG9jayxuWzBdWzNdLmxvY2spLGEuYWRkKHRbM10uZmlyZSksb1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBvW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1vP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sb1t0WzBdK1wiV2l0aFwiXT1hLmZpcmVXaXRofSksaS5wcm9taXNlKG8pLHQmJnQuY2FsbChvLG8pLG99LHdoZW46ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPXQscj1BcnJheShuKSxpPW8uY2FsbChhcmd1bWVudHMpLGE9dy5EZWZlcnJlZCgpLHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JbZV09dGhpcyxpW2VdPWFyZ3VtZW50cy5sZW5ndGg+MT9vLmNhbGwoYXJndW1lbnRzKTpuLC0tdHx8YS5yZXNvbHZlV2l0aChyLGkpfX07aWYodDw9MSYmKCQoZSxhLmRvbmUocyhuKSkucmVzb2x2ZSxhLnJlamVjdCwhdCksXCJwZW5kaW5nXCI9PT1hLnN0YXRlKCl8fGcoaVtuXSYmaVtuXS50aGVuKSkpcmV0dXJuIGEudGhlbigpO3doaWxlKG4tLSkkKGlbbl0scyhuKSxhLnJlamVjdCk7cmV0dXJuIGEucHJvbWlzZSgpfX0pO3ZhciBCPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3cuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbih0LG4pe2UuY29uc29sZSYmZS5jb25zb2xlLndhcm4mJnQmJkIudGVzdCh0Lm5hbWUpJiZlLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK3QubWVzc2FnZSx0LnN0YWNrLG4pfSx3LnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKHQpe2Uuc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHR9KX07dmFyIEY9dy5EZWZlcnJlZCgpO3cuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGUpe3cucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSx3LmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tdy5yZWFkeVdhaXQ6dy5pc1JlYWR5KXx8KHcuaXNSZWFkeT0hMCwhMCE9PWUmJi0tdy5yZWFkeVdhaXQ+MHx8Ri5yZXNvbHZlV2l0aChyLFt3XSkpfX0pLHcucmVhZHkudGhlbj1GLnRoZW47ZnVuY3Rpb24gXygpe3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixfKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXyksdy5yZWFkeSgpfVwiY29tcGxldGVcIj09PXIucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1yLnJlYWR5U3RhdGUmJiFyLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9lLnNldFRpbWVvdXQody5yZWFkeSk6KHIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixfKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXykpO3ZhciB6PWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXgobikpe2k9ITA7Zm9yKHMgaW4gbil6KGUsdCxzLG5bc10sITAsbyxhKX1lbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLGcocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwodyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxYPS9eLW1zLS8sVT0vLShbYS16XSkvZztmdW5jdGlvbiBWKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBHKGUpe3JldHVybiBlLnJlcGxhY2UoWCxcIm1zLVwiKS5yZXBsYWNlKFUsVil9dmFyIFk9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBRKCl7dGhpcy5leHBhbmRvPXcuZXhwYW5kbytRLnVpZCsrfVEudWlkPTEsUS5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sWShlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtHKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW0cocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bRyh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChHKToodD1HKHQpKWluIHI/W3RdOnQubWF0Y2goTSl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHx3LmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiF3LmlzRW1wdHlPYmplY3QodCl9fTt2YXIgSj1uZXcgUSxLPW5ldyBRLFo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLGVlPS9bQS1aXS9nO2Z1bmN0aW9uIHRlKGUpe3JldHVyblwidHJ1ZVwiPT09ZXx8XCJmYWxzZVwiIT09ZSYmKFwibnVsbFwiPT09ZT9udWxsOmU9PT0rZStcIlwiPytlOloudGVzdChlKT9KU09OLnBhcnNlKGUpOmUpfWZ1bmN0aW9uIG5lKGUsdCxuKXt2YXIgcjtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoZWUsXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPXRlKG4pfWNhdGNoKGUpe31LLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn13LmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gSy5oYXNEYXRhKGUpfHxKLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBLLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtLLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEouYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtKLnJlbW92ZShlLHQpfX0pLHcuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1lKXtpZih0aGlzLmxlbmd0aCYmKGk9Sy5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFKLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7bj1hLmxlbmd0aDt3aGlsZShuLS0pYVtuXSYmMD09PShyPWFbbl0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1HKHIuc2xpY2UoNSkpLG5lKG8scixpW3JdKSk7Si5zZXQobyxcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gaX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT90aGlzLmVhY2goZnVuY3Rpb24oKXtLLnNldCh0aGlzLGUpfSk6eih0aGlzLGZ1bmN0aW9uKHQpe3ZhciBuO2lmKG8mJnZvaWQgMD09PXQpe2lmKHZvaWQgMCE9PShuPUsuZ2V0KG8sZSkpKXJldHVybiBuO2lmKHZvaWQgMCE9PShuPW5lKG8sZSkpKXJldHVybiBufWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Sy5zZXQodGhpcyxlLHQpfSl9LG51bGwsdCxhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe0sucmVtb3ZlKHRoaXMsZSl9KX19KSx3LmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9Si5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1KLmFjY2VzcyhlLHQsdy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj13LnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPXcuX3F1ZXVlSG9va3MoZSx0KSxhPWZ1bmN0aW9uKCl7dy5kZXF1ZXVlKGUsdCl9O1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxhLG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gSi5nZXQoZSxuKXx8Si5hY2Nlc3MoZSxuLHtlbXB0eTp3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe0oucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksdy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiZnhcIixuLS0pLGFyZ3VtZW50cy5sZW5ndGg8bj93LnF1ZXVlKHRoaXNbMF0sZSk6dm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBuPXcucXVldWUodGhpcyxlLHQpO3cuX3F1ZXVlSG9va3ModGhpcyxlKSxcImZ4XCI9PT1lJiZcImlucHJvZ3Jlc3NcIiE9PW5bMF0mJncuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3cuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPXcuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1KLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIHJlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxpZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIityZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG9lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxhZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmdy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSkmJlwibm9uZVwiPT09dy5jc3MoZSxcImRpc3BsYXlcIil9LHNlPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYT17fTtmb3IobyBpbiB0KWFbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107aT1uLmFwcGx5KGUscnx8W10pO2ZvcihvIGluIHQpZS5zdHlsZVtvXT1hW29dO3JldHVybiBpfTtmdW5jdGlvbiB1ZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwody5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9KHcuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJmllLmV4ZWMody5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKXcuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9Mix3LnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIGxlPXt9O2Z1bmN0aW9uIGNlKGUpe3ZhciB0LG49ZS5vd25lckRvY3VtZW50LHI9ZS5ub2RlTmFtZSxpPWxlW3JdO3JldHVybiBpfHwodD1uLmJvZHkuYXBwZW5kQ2hpbGQobi5jcmVhdGVFbGVtZW50KHIpKSxpPXcuY3NzKHQsXCJkaXNwbGF5XCIpLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxcIm5vbmVcIj09PWkmJihpPVwiYmxvY2tcIiksbGVbcl09aSxpKX1mdW5jdGlvbiBmZShlLHQpe2Zvcih2YXIgbixyLGk9W10sbz0wLGE9ZS5sZW5ndGg7bzxhO28rKykocj1lW29dKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGlbb109Si5nZXQocixcImRpc3BsYXlcIil8fG51bGwsaVtvXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihpW29dPWNlKHIpKSk6XCJub25lXCIhPT1uJiYoaVtvXT1cIm5vbmVcIixKLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKG89MDtvPGE7bysrKW51bGwhPWlbb10mJihlW29dLnN0eWxlLmRpc3BsYXk9aVtvXSk7cmV0dXJuIGV9dy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gZmUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gZmUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT93KHRoaXMpLnNob3coKTp3KHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxnZT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2dlLm9wdGdyb3VwPWdlLm9wdGlvbixnZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkO2Z1bmN0aW9uIHllKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJk4oZSx0KT93Lm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHZlKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKUouc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fEouZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX12YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXgobykpdy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXSt3Lmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7dy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmdy5pbkFycmF5KG8scik+LTEpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD13LmNvbnRhaW5zKG8ub3duZXJEb2N1bWVudCxvKSxhPXllKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmdmUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfSFmdW5jdGlvbigpe3ZhciBlPXIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKHIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdD1yLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSx0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksZS5hcHBlbmRDaGlsZCh0KSxoLmNoZWNrQ2xvbmU9ZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsaC5ub0Nsb25lQ2hlY2tlZD0hIWUuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBiZT1yLmRvY3VtZW50RWxlbWVudCx3ZT0vXmtleS8sVGU9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLENlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gRWUoKXtyZXR1cm4hMH1mdW5jdGlvbiBrZSgpe3JldHVybiExfWZ1bmN0aW9uIFNlKCl7dHJ5e3JldHVybiByLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX1mdW5jdGlvbiBEZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7XCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApO2ZvcihzIGluIHQpRGUoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1rZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gdygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPXcuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7dy5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfXcuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9Si5nZXQoZSk7aWYoeSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmdy5maW5kLm1hdGNoZXNTZWxlY3RvcihiZSxpKSxuLmd1aWR8fChuLmd1aWQ9dy5ndWlkKyspLCh1PXkuZXZlbnRzKXx8KHU9eS5ldmVudHM9e30pLChhPXkuaGFuZGxlKXx8KGE9eS5oYW5kbGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHcmJncuZXZlbnQudHJpZ2dlcmVkIT09dC50eXBlP3cuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZSxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KHQ9KHR8fFwiXCIpLm1hdGNoKE0pfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPUNlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPXcuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPXcuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz13LmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZ3LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKGUscixoLGEpfHxlLmFkZEV2ZW50TGlzdGVuZXImJmUuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwoZSxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksdy5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx5PUouaGFzRGF0YShlKSYmSi5nZXQoZSk7aWYoeSYmKHU9eS5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChNKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKHM9Q2UuZXhlYyh0W2xdKXx8W10sZD1nPXNbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPXcuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgseS5oYW5kbGUpfHx3LnJlbW92ZUV2ZW50KGUsZCx5LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSl3LmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO3cuaXNFbXB0eU9iamVjdCh1KSYmSi5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdD13LmV2ZW50LmZpeChlKSxuLHIsaSxvLGEscyx1PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxsPShKLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbdC50eXBlXXx8W10sYz13LmV2ZW50LnNwZWNpYWxbdC50eXBlXXx8e307Zm9yKHVbMF09dCxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl1W25dPWFyZ3VtZW50c1tuXTtpZih0LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdCkpe3M9dy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdCxsKSxuPTA7d2hpbGUoKG89c1tuKytdKSYmIXQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dC5jdXJyZW50VGFyZ2V0PW8uZWxlbSxyPTA7d2hpbGUoKGE9by5oYW5kbGVyc1tyKytdKSYmIXQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl0LnJuYW1lc3BhY2UmJiF0LnJuYW1lc3BhY2UudGVzdChhLm5hbWVzcGFjZSl8fCh0LmhhbmRsZU9iaj1hLHQuZGF0YT1hLmRhdGEsdm9pZCAwIT09KGk9KCh3LmV2ZW50LnNwZWNpYWxbYS5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGEuaGFuZGxlcikuYXBwbHkoby5lbGVtLHUpKSYmITE9PT0odC5yZXN1bHQ9aSkmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHQpLHQucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmZS5idXR0b24+PTEpKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/dyhpLHRoaXMpLmluZGV4KGwpPi0xOncuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LkV2ZW50LnByb3RvdHlwZSxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Zyh0KT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdCh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W2VdfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsZSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbdy5leHBhbmRvXT9lOm5ldyB3LkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09U2UoKSYmdGhpcy5mb2N1cylyZXR1cm4gdGhpcy5mb2N1cygpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzPT09U2UoKSYmdGhpcy5ibHVyKXJldHVybiB0aGlzLmJsdXIoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZihcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJk4odGhpcyxcImlucHV0XCIpKXJldHVybiB0aGlzLmNsaWNrKCksITF9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3JldHVybiBOKGUudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSx3LnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSx3LkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2Ygdy5FdmVudCkpcmV0dXJuIG5ldyB3LkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/RWU6a2UsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmdy5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW3cuZXhwYW5kb109ITB9LHcuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjp3LkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDprZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDprZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDprZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1FZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1FZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9RWUsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LHcuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmd2UudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJlRlLnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSx3LmV2ZW50LmFkZFByb3ApLHcuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLHQpe3cuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4scj10aGlzLGk9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7cmV0dXJuIGkmJihpPT09cnx8dy5jb250YWlucyhyLGkpKXx8KGUudHlwZT1vLm9yaWdUeXBlLG49by5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9dCksbn19fSksdy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBEZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIERlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLHcoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPWtlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt3LmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBOZT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxBZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxqZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLHFlPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBMZShlLHQpe3JldHVybiBOKGUsXCJ0YWJsZVwiKSYmTigxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKT93KGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGU6ZX1mdW5jdGlvbiBIZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBPZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gUGUoZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihKLmhhc0RhdGEoZSkmJihvPUouYWNjZXNzKGUpLGE9Si5zZXQodCxvKSxsPW8uZXZlbnRzKSl7ZGVsZXRlIGEuaGFuZGxlLGEuZXZlbnRzPXt9O2ZvcihpIGluIGwpZm9yKG49MCxyPWxbaV0ubGVuZ3RoO248cjtuKyspdy5ldmVudC5hZGQodCxpLGxbaV1bbl0pfUsuaGFzRGF0YShlKSYmKHM9Sy5hY2Nlc3MoZSksdT13LmV4dGVuZCh7fSxzKSxLLnNldCh0LHUpKX19ZnVuY3Rpb24gTWUoZSx0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09biYmcGUudGVzdChlLnR5cGUpP3QuY2hlY2tlZD1lLmNoZWNrZWQ6XCJpbnB1dFwiIT09biYmXCJ0ZXh0YXJlYVwiIT09bnx8KHQuZGVmYXVsdFZhbHVlPWUuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiBSZShlLHQsbixyKXt0PWEuYXBwbHkoW10sdCk7dmFyIGksbyxzLHUsbCxjLGY9MCxwPWUubGVuZ3RoLGQ9cC0xLHk9dFswXSx2PWcoeSk7aWYodnx8cD4xJiZcInN0cmluZ1wiPT10eXBlb2YgeSYmIWguY2hlY2tDbG9uZSYmamUudGVzdCh5KSlyZXR1cm4gZS5lYWNoKGZ1bmN0aW9uKGkpe3ZhciBvPWUuZXEoaSk7diYmKHRbMF09eS5jYWxsKHRoaXMsaSxvLmh0bWwoKSkpLFJlKG8sdCxuLHIpfSk7aWYocCYmKGk9eGUodCxlWzBdLm93bmVyRG9jdW1lbnQsITEsZSxyKSxvPWkuZmlyc3RDaGlsZCwxPT09aS5jaGlsZE5vZGVzLmxlbmd0aCYmKGk9byksb3x8cikpe2Zvcih1PShzPXcubWFwKHllKGksXCJzY3JpcHRcIiksSGUpKS5sZW5ndGg7ZjxwO2YrKylsPWksZiE9PWQmJihsPXcuY2xvbmUobCwhMCwhMCksdSYmdy5tZXJnZShzLHllKGwsXCJzY3JpcHRcIikpKSxuLmNhbGwoZVtmXSxsLGYpO2lmKHUpZm9yKGM9c1tzLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LHcubWFwKHMsT2UpLGY9MDtmPHU7ZisrKWw9c1tmXSxoZS50ZXN0KGwudHlwZXx8XCJcIikmJiFKLmFjY2VzcyhsLFwiZ2xvYmFsRXZhbFwiKSYmdy5jb250YWlucyhjLGwpJiYobC5zcmMmJlwibW9kdWxlXCIhPT0obC50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP3cuX2V2YWxVcmwmJncuX2V2YWxVcmwobC5zcmMpOm0obC50ZXh0Q29udGVudC5yZXBsYWNlKHFlLFwiXCIpLGMsbCkpfXJldHVybiBlfWZ1bmN0aW9uIEllKGUsdCxuKXtmb3IodmFyIHIsaT10P3cuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHx3LmNsZWFuRGF0YSh5ZShyKSksci5wYXJlbnROb2RlJiYobiYmdy5jb250YWlucyhyLm93bmVyRG9jdW1lbnQscikmJnZlKHllKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9dy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShOZSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jbG9uZU5vZGUoITApLHU9dy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSk7aWYoIShoLm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHx3LmlzWE1MRG9jKGUpKSlmb3IoYT15ZShzKSxyPTAsaT0obz15ZShlKSkubGVuZ3RoO3I8aTtyKyspTWUob1tyXSxhW3JdKTtpZih0KWlmKG4pZm9yKG89b3x8eWUoZSksYT1hfHx5ZShzKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKVBlKG9bcl0sYVtyXSk7ZWxzZSBQZShlLHMpO3JldHVybihhPXllKHMsXCJzY3JpcHRcIikpLmxlbmd0aD4wJiZ2ZShhLCF1JiZ5ZShlLFwic2NyaXB0XCIpKSxzfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPXcuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFkobikpe2lmKHQ9bltKLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP3cuZXZlbnQucmVtb3ZlKG4scik6dy5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bSi5leHBhbmRvXT12b2lkIDB9bltLLmV4cGFuZG9dJiYobltLLmV4cGFuZG9dPXZvaWQgMCl9fX0pLHcuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIEllKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gSWUodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3cudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBSZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8TGUodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1MZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJih3LmNsZWFuRGF0YSh5ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdy5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIUFlLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPXcuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJih3LmNsZWFuRGF0YSh5ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBSZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbih0KXt2YXIgbj10aGlzLnBhcmVudE5vZGU7dy5pbkFycmF5KHRoaXMsZSk8MCYmKHcuY2xlYW5EYXRhKHllKHRoaXMpKSxuJiZuLnJlcGxhY2VDaGlsZCh0LHRoaXMpKX0sZSl9fSksdy5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsdCl7dy5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIG4scj1bXSxpPXcoZSksbz1pLmxlbmd0aC0xLGE9MDthPD1vO2ErKyluPWE9PT1vP3RoaXM6dGhpcy5jbG9uZSghMCksdyhpW2FdKVt0XShuKSxzLmFwcGx5KHIsbi5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIpfX0pO3ZhciBXZT1uZXcgUmVnRXhwKFwiXihcIityZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSwkZT1mdW5jdGlvbih0KXt2YXIgbj10Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIG4mJm4ub3BlbmVyfHwobj1lKSxuLmdldENvbXB1dGVkU3R5bGUodCl9LEJlPW5ldyBSZWdFeHAob2Uuam9pbihcInxcIiksXCJpXCIpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtpZihjKXtsLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsYy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLGJlLmFwcGVuZENoaWxkKGwpLmFwcGVuZENoaWxkKGMpO3ZhciB0PWUuZ2V0Q29tcHV0ZWRTdHlsZShjKTtpPVwiMSVcIiE9PXQudG9wLHU9MTI9PT1uKHQubWFyZ2luTGVmdCksYy5zdHlsZS5yaWdodD1cIjYwJVwiLHM9MzY9PT1uKHQucmlnaHQpLG89MzY9PT1uKHQud2lkdGgpLGMuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGE9MzY9PT1jLm9mZnNldFdpZHRofHxcImFic29sdXRlXCIsYmUucmVtb3ZlQ2hpbGQobCksYz1udWxsfX1mdW5jdGlvbiBuKGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBpLG8sYSxzLHUsbD1yLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1yLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5zdHlsZSYmKGMuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGMuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGguY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWMuc3R5bGUuYmFja2dyb3VuZENsaXAsdy5leHRlbmQoaCx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLG99LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxzfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxpfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLHV9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLGF9fSkpfSgpO2Z1bmN0aW9uIEZlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8JGUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fHcuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHwoYT13LnN0eWxlKGUsdCkpLCFoLnBpeGVsQm94U3R5bGVzKCkmJldlLnRlc3QoYSkmJkJlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gX2UoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fXZhciB6ZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sWGU9L14tLS8sVWU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFZlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sR2U9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFllPXIuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBRZShlKXtpZihlIGluIFllKXJldHVybiBlO3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49R2UubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1HZVtuXSt0KWluIFllKXJldHVybiBlfWZ1bmN0aW9uIEplKGUpe3ZhciB0PXcuY3NzUHJvcHNbZV07cmV0dXJuIHR8fCh0PXcuY3NzUHJvcHNbZV09UWUoZSl8fGUpLHR9ZnVuY3Rpb24gS2UoZSx0LG4pe3ZhciByPWllLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBaZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPXcuY3NzKGUsbitvZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09dy5jc3MoZSxcInBhZGRpbmdcIitvZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT13LmNzcyhlLFwiYm9yZGVyXCIrb2VbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPXcuY3NzKGUsXCJwYWRkaW5nXCIrb2VbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPXcuY3NzKGUsXCJib3JkZXJcIitvZVthXStcIldpZHRoXCIsITAsaSk6cys9dy5jc3MoZSxcImJvcmRlclwiK29lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJm8+PTAmJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSkpLHV9ZnVuY3Rpb24gZXQoZSx0LG4pe3ZhciByPSRlKGUpLGk9RmUoZSx0LHIpLG89XCJib3JkZXItYm94XCI9PT13LmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksYT1vO2lmKFdlLnRlc3QoaSkpe2lmKCFuKXJldHVybiBpO2k9XCJhdXRvXCJ9cmV0dXJuIGE9YSYmKGguYm94U2l6aW5nUmVsaWFibGUoKXx8aT09PWUuc3R5bGVbdF0pLChcImF1dG9cIj09PWl8fCFwYXJzZUZsb2F0KGkpJiZcImlubGluZVwiPT09dy5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJihpPWVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0sYT0hMCksKGk9cGFyc2VGbG9hdChpKXx8MCkrWmUoZSx0LG58fChvP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGEscixpKStcInB4XCJ9dy5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1GZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9Ryh0KSx1PVhlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PUplKHMpKSxhPXcuY3NzSG9va3NbdF18fHcuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT0obz10eXBlb2YgbikmJihpPWllLmV4ZWMobikpJiZpWzFdJiYobj11ZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT09biYmKFwibnVtYmVyXCI9PT1vJiYobis9aSYmaVszXXx8KHcuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSksaC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9Ryh0KTtyZXR1cm4gWGUudGVzdCh0KXx8KHQ9SmUocykpLChhPXcuY3NzSG9va3NbdF18fHcuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9RmUoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBWZSYmKGk9VmVbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksdy5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx0KXt3LmNzc0hvb2tzW3RdPXtnZXQ6ZnVuY3Rpb24oZSxuLHIpe2lmKG4pcmV0dXJuIXplLnRlc3Qody5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP2V0KGUsdCxyKTpzZShlLFVlLGZ1bmN0aW9uKCl7cmV0dXJuIGV0KGUsdCxyKX0pfSxzZXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG89JGUoZSksYT1cImJvcmRlci1ib3hcIj09PXcuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxvKSxzPXImJlplKGUsdCxyLGEsbyk7cmV0dXJuIGEmJmguc2Nyb2xsYm94U2l6ZSgpPT09by5wb3NpdGlvbiYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLXBhcnNlRmxvYXQob1t0XSktWmUoZSx0LFwiYm9yZGVyXCIsITEsbyktLjUpKSxzJiYoaT1pZS5leGVjKG4pKSYmXCJweFwiIT09KGlbM118fFwicHhcIikmJihlLnN0eWxlW3RdPW4sbj13LmNzcyhlLHQpKSxLZShlLG4scyl9fX0pLHcuY3NzSG9va3MubWFyZ2luTGVmdD1fZShoLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoRmUoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtc2UoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksdy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oZSx0KXt3LmNzc0hvb2tzW2UrdF09e2V4cGFuZDpmdW5jdGlvbihuKXtmb3IodmFyIHI9MCxpPXt9LG89XCJzdHJpbmdcIj09dHlwZW9mIG4/bi5zcGxpdChcIiBcIik6W25dO3I8NDtyKyspaVtlK29lW3JdK3RdPW9bcl18fG9bci0yXXx8b1swXTtyZXR1cm4gaX19LFwibWFyZ2luXCIhPT1lJiYody5jc3NIb29rc1tlK3RdLnNldD1LZSl9KSx3LmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHoodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj0kZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT13LmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/dy5zdHlsZShlLHQsbik6dy5jc3MoZSx0KX0sZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gdHQoZSx0LG4scixpKXtyZXR1cm4gbmV3IHR0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9dy5Ud2Vlbj10dCx0dC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnR0LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fHcuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwody5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT10dC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6dHQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49dHQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PXcuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTp0dC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSx0dC5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9dHQucHJvdG90eXBlLHR0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PXcuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7dy5meC5zdGVwW2UucHJvcF0/dy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbD09ZS5lbGVtLnN0eWxlW3cuY3NzUHJvcHNbZS5wcm9wXV0mJiF3LmNzc0hvb2tzW2UucHJvcF0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6dy5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0sdHQucHJvcEhvb2tzLnNjcm9sbFRvcD10dC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSx3LmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sdy5meD10dC5wcm90b3R5cGUuaW5pdCx3LmZ4LnN0ZXA9e307dmFyIG50LHJ0LGl0PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxvdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGF0KCl7cnQmJighMT09PXIuaGlkZGVuJiZlLnJlcXVlc3RBbmltYXRpb25GcmFtZT9lLnJlcXVlc3RBbmltYXRpb25GcmFtZShhdCk6ZS5zZXRUaW1lb3V0KGF0LHcuZnguaW50ZXJ2YWwpLHcuZngudGljaygpKX1mdW5jdGlvbiBzdCgpe3JldHVybiBlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtudD12b2lkIDB9KSxudD1EYXRlLm5vdygpfWZ1bmN0aW9uIHV0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1vZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gbHQoZSx0LG4pe2Zvcih2YXIgcixpPShwdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChwdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGN0KGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSkseT1KLmdldChlLFwiZnhzaG93XCIpO24ucXVldWV8fChudWxsPT0oYT13Ll9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sdy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihyIGluIHQpaWYoaT10W3JdLGl0LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwheXx8dm9pZCAwPT09eVtyXSljb250aW51ZTtnPSEwfWRbcl09eSYmeVtyXXx8dy5zdHlsZShlLHIpfWlmKCh1PSF3LmlzRW1wdHlPYmplY3QodCkpfHwhdy5pc0VtcHR5T2JqZWN0KGQpKXtmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXkmJnkuZGlzcGxheSkmJihsPUouZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPXcuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihmZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9dy5jc3MoZSxcImRpc3BsYXlcIiksZmUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PXcuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITE7Zm9yKHIgaW4gZCl1fHwoeT9cImhpZGRlblwiaW4geSYmKGc9eS5oaWRkZW4pOnk9Si5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYoeS5oaWRkZW49IWcpLGcmJmZlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Z3x8ZmUoW2VdKSxKLnJlbW92ZShlLFwiZnhzaG93XCIpO2ZvcihyIGluIGQpdy5zdHlsZShlLHIsZFtyXSl9KSksdT1sdChnP3lbcl06MCxyLHApLHIgaW4geXx8KHlbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX19ZnVuY3Rpb24gZnQoZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYocj1HKG4pLGk9dFtyXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPXcuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSl7bz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXTtmb3IobiBpbiBvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpfWVsc2UgdFtyXT1pfWZ1bmN0aW9uIHB0KGUsdCxuKXt2YXIgcixpLG89MCxhPXB0LnByZWZpbHRlcnMubGVuZ3RoLHM9dy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoaSlyZXR1cm4hMTtmb3IodmFyIHQ9bnR8fHN0KCksbj1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tdCkscj0xLShuL2wuZHVyYXRpb258fDApLG89MCxhPWwudHdlZW5zLmxlbmd0aDtvPGE7bysrKWwudHdlZW5zW29dLnJ1bihyKTtyZXR1cm4gcy5ub3RpZnlXaXRoKGUsW2wscixuXSkscjwxJiZhP246KGF8fHMubm90aWZ5V2l0aChlLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgoZSxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06ZSxwcm9wczp3LmV4dGVuZCh7fSx0KSxvcHRzOncuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzp3LmVhc2luZy5fZGVmYXVsdH0sbiksb3JpZ2luYWxQcm9wZXJ0aWVzOnQsb3JpZ2luYWxPcHRpb25zOm4sc3RhcnRUaW1lOm50fHxzdCgpLGR1cmF0aW9uOm4uZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKHQsbil7dmFyIHI9dy5Ud2VlbihlLGwub3B0cyx0LG4sbC5vcHRzLnNwZWNpYWxFYXNpbmdbdF18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKHIpLHJ9LHN0b3A6ZnVuY3Rpb24odCl7dmFyIG49MCxyPXQ/bC50d2VlbnMubGVuZ3RoOjA7aWYoaSlyZXR1cm4gdGhpcztmb3IoaT0hMDtuPHI7bisrKWwudHdlZW5zW25dLnJ1bigxKTtyZXR1cm4gdD8ocy5ub3RpZnlXaXRoKGUsW2wsMSwwXSkscy5yZXNvbHZlV2l0aChlLFtsLHRdKSk6cy5yZWplY3RXaXRoKGUsW2wsdF0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcihmdChjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtvPGE7bysrKWlmKHI9cHQucHJlZmlsdGVyc1tvXS5jYWxsKGwsZSxjLGwub3B0cykpcmV0dXJuIGcoci5zdG9wKSYmKHcuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1yLnN0b3AuYmluZChyKSkscjtyZXR1cm4gdy5tYXAoYyxsdCxsKSxnKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKGUsbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksdy5meC50aW1lcih3LmV4dGVuZCh1LHtlbGVtOmUsYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfXcuQW5pbWF0aW9uPXcuZXh0ZW5kKHB0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiB1ZShuLmVsZW0sZSxpZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe2coZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChNKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0scHQudHdlZW5lcnNbbl09cHQudHdlZW5lcnNbbl18fFtdLHB0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2N0XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P3B0LnByZWZpbHRlcnMudW5zaGlmdChlKTpwdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksdy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/dy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxnKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFnKHQpJiZ0fTtyZXR1cm4gdy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiB3LmZ4LnNwZWVkcz9yLmR1cmF0aW9uPXcuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249dy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXtnKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZ3LmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sdy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9dy5pc0VtcHR5T2JqZWN0KGUpLG89dy5zcGVlZCh0LG4sciksYT1mdW5jdGlvbigpe3ZhciB0PXB0KHRoaXMsdy5leHRlbmQoe30sZSksbyk7KGl8fEouZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZ0LnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihlLHQsbil7dmFyIHI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChuKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihuPXQsdD1lLGU9dm9pZCAwKSx0JiYhMSE9PWUmJnRoaXMucXVldWUoZXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0hMCxpPW51bGwhPWUmJmUrXCJxdWV1ZUhvb2tzXCIsbz13LnRpbWVycyxhPUouZ2V0KHRoaXMpO2lmKGkpYVtpXSYmYVtpXS5zdG9wJiZyKGFbaV0pO2Vsc2UgZm9yKGkgaW4gYSlhW2ldJiZhW2ldLnN0b3AmJm90LnRlc3QoaSkmJnIoYVtpXSk7Zm9yKGk9by5sZW5ndGg7aS0tOylvW2ldLmVsZW0hPT10aGlzfHxudWxsIT1lJiZvW2ldLnF1ZXVlIT09ZXx8KG9baV0uYW5pbS5zdG9wKG4pLHQ9ITEsby5zcGxpY2UoaSwxKSk7IXQmJm58fHcuZGVxdWV1ZSh0aGlzLGUpfSl9LGZpbmlzaDpmdW5jdGlvbihlKXtyZXR1cm4hMSE9PWUmJihlPWV8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQsbj1KLmdldCh0aGlzKSxyPW5bZStcInF1ZXVlXCJdLGk9bltlK1wicXVldWVIb29rc1wiXSxvPXcudGltZXJzLGE9cj9yLmxlbmd0aDowO2ZvcihuLmZpbmlzaD0hMCx3LnF1ZXVlKHRoaXMsZSxbXSksaSYmaS5zdG9wJiZpLnN0b3AuY2FsbCh0aGlzLCEwKSx0PW8ubGVuZ3RoO3QtLTspb1t0XS5lbGVtPT09dGhpcyYmb1t0XS5xdWV1ZT09PWUmJihvW3RdLmFuaW0uc3RvcCghMCksby5zcGxpY2UodCwxKSk7Zm9yKHQ9MDt0PGE7dCsrKXJbdF0mJnJbdF0uZmluaXNoJiZyW3RdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBuLmZpbmlzaH0pfX0pLHcuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSx0KXt2YXIgbj13LmZuW3RdO3cuZm5bdF09ZnVuY3Rpb24oZSxyLGkpe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKHV0KHQsITApLGUscixpKX19KSx3LmVhY2goe3NsaWRlRG93bjp1dChcInNob3dcIiksc2xpZGVVcDp1dChcImhpZGVcIiksc2xpZGVUb2dnbGU6dXQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHQpe3cuZm5bZV09ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0aGlzLmFuaW1hdGUodCxlLG4scil9fSksdy50aW1lcnM9W10sdy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49dy50aW1lcnM7Zm9yKG50PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8dy5meC5zdG9wKCksbnQ9dm9pZCAwfSx3LmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe3cudGltZXJzLnB1c2goZSksdy5meC5zdGFydCgpfSx3LmZ4LmludGVydmFsPTEzLHcuZnguc3RhcnQ9ZnVuY3Rpb24oKXtydHx8KHJ0PSEwLGF0KCkpfSx3LmZ4LnN0b3A9ZnVuY3Rpb24oKXtydD1udWxsfSx3LmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSx3LmZuLmRlbGF5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9dy5meD93LmZ4LnNwZWVkc1t0XXx8dDp0LG49bnx8XCJmeFwiLHRoaXMucXVldWUobixmdW5jdGlvbihuLHIpe3ZhciBpPWUuc2V0VGltZW91dChuLHQpO3Iuc3RvcD1mdW5jdGlvbigpe2UuY2xlYXJUaW1lb3V0KGkpfX0pfSxmdW5jdGlvbigpe3ZhciBlPXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHQ9ci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKHIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7ZS50eXBlPVwiY2hlY2tib3hcIixoLmNoZWNrT249XCJcIiE9PWUudmFsdWUsaC5vcHRTZWxlY3RlZD10LnNlbGVjdGVkLChlPXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixlLnR5cGU9XCJyYWRpb1wiLGgucmFkaW9WYWx1ZT1cInRcIj09PWUudmFsdWV9KCk7dmFyIGR0LGh0PXcuZXhwci5hdHRySGFuZGxlO3cuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHoodGhpcyx3LmF0dHIsZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3cucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksdy5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP3cucHJvcChlLHQsbik6KDE9PT1vJiZ3LmlzWE1MRG9jKGUpfHwoaT13LmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwody5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9kdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgdy5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj13LmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIWgucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmTihlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKE0pO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLGR0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD93LnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSx3LmVhY2gody5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIG49aHRbdF18fHcuZmluZC5hdHRyO2h0W3RdPWZ1bmN0aW9uKGUsdCxyKXt2YXIgaSxvLGE9dC50b0xvd2VyQ2FzZSgpO3JldHVybiByfHwobz1odFthXSxodFthXT1pLGk9bnVsbCE9bihlLHQscik/YTpudWxsLGh0W2FdPW8pLGl9fSk7dmFyIGd0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2kseXQ9L14oPzphfGFyZWEpJC9pO3cuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHoodGhpcyx3LnByb3AsZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3cucHJvcEZpeFtlXXx8ZV19KX19KSx3LmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJncuaXNYTUxEb2MoZSl8fCh0PXcucHJvcEZpeFt0XXx8dCxpPXcucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmd0LnRlc3QoZS5ub2RlTmFtZSl8fHl0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksaC5vcHRTZWxlY3RlZHx8KHcucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSx3LmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7dy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIHZ0KGUpe3JldHVybihlLm1hdGNoKE0pfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIHh0KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5tYXRjaChNKXx8W106W119dy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzLHU9MDtpZihnKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7dyh0aGlzKS5hZGRDbGFzcyhlLmNhbGwodGhpcyx0LG10KHRoaXMpKSl9KTtpZigodD14dChlKSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9bXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPXRbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHMsdT0wO2lmKGcoZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt3KHRoaXMpLnJlbW92ZUNsYXNzKGUuY2FsbCh0aGlzLHQsbXQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKCh0PXh0KGUpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT1tdChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89dFthKytdKXdoaWxlKHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKT4tMSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dHlwZW9mIGUscj1cInN0cmluZ1wiPT09bnx8QXJyYXkuaXNBcnJheShlKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJnI/dD90aGlzLmFkZENsYXNzKGUpOnRoaXMucmVtb3ZlQ2xhc3MoZSk6ZyhlKT90aGlzLmVhY2goZnVuY3Rpb24obil7dyh0aGlzKS50b2dnbGVDbGFzcyhlLmNhbGwodGhpcyxuLG10KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQsaSxvLGE7aWYocil7aT0wLG89dyh0aGlzKSxhPXh0KGUpO3doaWxlKHQ9YVtpKytdKW8uaGFzQ2xhc3ModCk/by5yZW1vdmVDbGFzcyh0KTpvLmFkZENsYXNzKHQpfWVsc2Ugdm9pZCAwIT09ZSYmXCJib29sZWFuXCIhPT1ufHwoKHQ9bXQodGhpcykpJiZKLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHQpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdHx8ITE9PT1lP1wiXCI6Si5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJihcIiBcIit2dChtdChuKSkrXCIgXCIpLmluZGV4T2YodCk+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGJ0PS9cXHIvZzt3LmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHI9ZyhlKSx0aGlzLmVhY2goZnVuY3Rpb24obil7dmFyIGk7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0oaT1yP2UuY2FsbCh0aGlzLG4sdyh0aGlzKS52YWwoKSk6ZSk/aT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBpP2krPVwiXCI6QXJyYXkuaXNBcnJheShpKSYmKGk9dy5tYXAoaSxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwodD13LnZhbEhvb2tzW3RoaXMudHlwZV18fHcudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiB0JiZ2b2lkIDAhPT10LnNldCh0aGlzLGksXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9aSkpfSk7aWYoaSlyZXR1cm4odD13LnZhbEhvb2tzW2kudHlwZV18fHcudmFsSG9va3NbaS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiB0JiZ2b2lkIDAhPT0obj10LmdldChpLFwidmFsdWVcIikpP246XCJzdHJpbmdcIj09dHlwZW9mKG49aS52YWx1ZSk/bi5yZXBsYWNlKGJ0LFwiXCIpOm51bGw9PW4/XCJcIjpufX19KSx3LmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PXcuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90OnZ0KHcudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IU4obi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PXcobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz13Lm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9dy5pbkFycmF5KHcudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKT4tMSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLHcuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXt3LnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9dy5pbkFycmF5KHcoZSkudmFsKCksdCk+LTF9fSxoLmNoZWNrT258fCh3LnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLGguZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gZTt2YXIgd3Q9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFR0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O3cuZXh0ZW5kKHcuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24odCxuLGksbyl7dmFyIGEscyx1LGwsYyxwLGQsaCx2PVtpfHxyXSxtPWYuY2FsbCh0LFwidHlwZVwiKT90LnR5cGU6dCx4PWYuY2FsbCh0LFwibmFtZXNwYWNlXCIpP3QubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihzPWg9dT1pPWl8fHIsMyE9PWkubm9kZVR5cGUmJjghPT1pLm5vZGVUeXBlJiYhd3QudGVzdChtK3cuZXZlbnQudHJpZ2dlcmVkKSYmKG0uaW5kZXhPZihcIi5cIik+LTEmJihtPSh4PW0uc3BsaXQoXCIuXCIpKS5zaGlmdCgpLHguc29ydCgpKSxjPW0uaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK20sdD10W3cuZXhwYW5kb10/dDpuZXcgdy5FdmVudChtLFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0KSx0LmlzVHJpZ2dlcj1vPzI6Myx0Lm5hbWVzcGFjZT14LmpvaW4oXCIuXCIpLHQucm5hbWVzcGFjZT10Lm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIreC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCx0LnJlc3VsdD12b2lkIDAsdC50YXJnZXR8fCh0LnRhcmdldD1pKSxuPW51bGw9PW4/W3RdOncubWFrZUFycmF5KG4sW3RdKSxkPXcuZXZlbnQuc3BlY2lhbFttXXx8e30sb3x8IWQudHJpZ2dlcnx8ITEhPT1kLnRyaWdnZXIuYXBwbHkoaSxuKSkpe2lmKCFvJiYhZC5ub0J1YmJsZSYmIXkoaSkpe2ZvcihsPWQuZGVsZWdhdGVUeXBlfHxtLHd0LnRlc3QobCttKXx8KHM9cy5wYXJlbnROb2RlKTtzO3M9cy5wYXJlbnROb2RlKXYucHVzaChzKSx1PXM7dT09PShpLm93bmVyRG9jdW1lbnR8fHIpJiZ2LnB1c2godS5kZWZhdWx0Vmlld3x8dS5wYXJlbnRXaW5kb3d8fGUpfWE9MDt3aGlsZSgocz12W2ErK10pJiYhdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWg9cyx0LnR5cGU9YT4xP2w6ZC5iaW5kVHlwZXx8bSwocD0oSi5nZXQocyxcImV2ZW50c1wiKXx8e30pW3QudHlwZV0mJkouZ2V0KHMsXCJoYW5kbGVcIikpJiZwLmFwcGx5KHMsbiksKHA9YyYmc1tjXSkmJnAuYXBwbHkmJlkocykmJih0LnJlc3VsdD1wLmFwcGx5KHMsbiksITE9PT10LnJlc3VsdCYmdC5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gdC50eXBlPW0sb3x8dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8ZC5fZGVmYXVsdCYmITEhPT1kLl9kZWZhdWx0LmFwcGx5KHYucG9wKCksbil8fCFZKGkpfHxjJiZnKGlbbV0pJiYheShpKSYmKCh1PWlbY10pJiYoaVtjXT1udWxsKSx3LmV2ZW50LnRyaWdnZXJlZD1tLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaC5hZGRFdmVudExpc3RlbmVyKG0sVHQpLGlbbV0oKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmgucmVtb3ZlRXZlbnRMaXN0ZW5lcihtLFR0KSx3LmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsdSYmKGlbY109dSkpLHQucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXcuZXh0ZW5kKG5ldyB3LkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO3cuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksdy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gdy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSxoLmZvY3VzaW58fHcuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oZSl7dy5ldmVudC5zaW11bGF0ZSh0LGUudGFyZ2V0LHcuZXZlbnQuZml4KGUpKX07dy5ldmVudC5zcGVjaWFsW3RdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciByPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxpPUouYWNjZXNzKHIsdCk7aXx8ci5hZGRFdmVudExpc3RlbmVyKGUsbiwhMCksSi5hY2Nlc3Mocix0LChpfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgcj10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsaT1KLmFjY2VzcyhyLHQpLTE7aT9KLmFjY2VzcyhyLHQsaSk6KHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4sITApLEoucmVtb3ZlKHIsdCkpfX19KTt2YXIgQ3Q9ZS5sb2NhdGlvbixFdD1EYXRlLm5vdygpLGt0PS9cXD8vO3cucGFyc2VYTUw9ZnVuY3Rpb24odCl7dmFyIG47aWYoIXR8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiBudWxsO3RyeXtuPShuZXcgZS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LFwidGV4dC94bWxcIil9Y2F0Y2goZSl7bj12b2lkIDB9cmV0dXJuIG4mJiFuLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHx3LmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK3QpLG59O3ZhciBTdD0vXFxbXFxdJC8sRHQ9L1xccj9cXG4vZyxOdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksQXQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIGp0KGUsdCxuLHIpe3ZhciBpO2lmKEFycmF5LmlzQXJyYXkodCkpdy5lYWNoKHQsZnVuY3Rpb24odCxpKXtufHxTdC50ZXN0KGUpP3IoZSxpKTpqdChlK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgaSYmbnVsbCE9aT90OlwiXCIpK1wiXVwiLGksbixyKX0pO2Vsc2UgaWYobnx8XCJvYmplY3RcIiE9PXgodCkpcihlLHQpO2Vsc2UgZm9yKGkgaW4gdClqdChlK1wiW1wiK2krXCJdXCIsdFtpXSxuLHIpfXcucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1nKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIXcuaXNQbGFpbk9iamVjdChlKSl3LmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKWp0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSx3LmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHcucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT13LnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP3cubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXcodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkF0LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFOdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj13KHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT93Lm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2UoRHQsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShEdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgcXQ9LyUyMC9nLEx0PS8jLiokLyxIdD0vKFs/Jl0pXz1bXiZdKi8sT3Q9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxQdD0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxNdD0vXig/OkdFVHxIRUFEKSQvLFJ0PS9eXFwvXFwvLyxJdD17fSxXdD17fSwkdD1cIiovXCIuY29uY2F0KFwiKlwiKSxCdD1yLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0J0LmhyZWY9Q3QuaHJlZjtmdW5jdGlvbiBGdChlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiKlwiKTt2YXIgcixpPTAsbz10LnRvTG93ZXJDYXNlKCkubWF0Y2goTSl8fFtdO2lmKGcobikpd2hpbGUocj1vW2krK10pXCIrXCI9PT1yWzBdPyhyPXIuc2xpY2UoMSl8fFwiKlwiLChlW3JdPWVbcl18fFtdKS51bnNoaWZ0KG4pKTooZVtyXT1lW3JdfHxbXSkucHVzaChuKX19ZnVuY3Rpb24gX3QoZSx0LG4scil7dmFyIGk9e30sbz1lPT09V3Q7ZnVuY3Rpb24gYShzKXt2YXIgdTtyZXR1cm4gaVtzXT0hMCx3LmVhY2goZVtzXXx8W10sZnVuY3Rpb24oZSxzKXt2YXIgbD1zKHQsbixyKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgbHx8b3x8aVtsXT9vPyEodT1sKTp2b2lkIDA6KHQuZGF0YVR5cGVzLnVuc2hpZnQobCksYShsKSwhMSl9KSx1fXJldHVybiBhKHQuZGF0YVR5cGVzWzBdKXx8IWlbXCIqXCJdJiZhKFwiKlwiKX1mdW5jdGlvbiB6dChlLHQpe3ZhciBuLHIsaT13LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZ3LmV4dGVuZCghMCxlLHIpLGV9ZnVuY3Rpb24gWHQoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119ZnVuY3Rpb24gVXQoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX13LmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6Q3QuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpQdC50ZXN0KEN0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjokdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6dy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/enQoenQoZSx3LmFqYXhTZXR0aW5ncyksdCk6enQody5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoSXQpLGFqYXhUcmFuc3BvcnQ6RnQoV3QpLGFqYXg6ZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgdCYmKG49dCx0PXZvaWQgMCksbj1ufHx7fTt2YXIgaSxvLGEscyx1LGwsYyxmLHAsZCxoPXcuYWpheFNldHVwKHt9LG4pLGc9aC5jb250ZXh0fHxoLHk9aC5jb250ZXh0JiYoZy5ub2RlVHlwZXx8Zy5qcXVlcnkpP3coZyk6dy5ldmVudCx2PXcuRGVmZXJyZWQoKSxtPXcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikseD1oLnN0YXR1c0NvZGV8fHt9LGI9e30sVD17fSxDPVwiY2FuY2VsZWRcIixFPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoYyl7aWYoIXMpe3M9e307d2hpbGUodD1PdC5leGVjKGEpKXNbdFsxXS50b0xvd2VyQ2FzZSgpXT10WzJdfXQ9c1tlLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT10P251bGw6dH0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGM/YTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWMmJihlPVRbZS50b0xvd2VyQ2FzZSgpXT1UW2UudG9Mb3dlckNhc2UoKV18fGUsYltlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1jJiYoaC5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoYylFLmFsd2F5cyhlW0Uuc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXhbdF09W3hbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fEM7cmV0dXJuIGkmJmkuYWJvcnQodCksaygwLHQpLHRoaXN9fTtpZih2LnByb21pc2UoRSksaC51cmw9KCh0fHxoLnVybHx8Q3QuaHJlZikrXCJcIikucmVwbGFjZShSdCxDdC5wcm90b2NvbCtcIi8vXCIpLGgudHlwZT1uLm1ldGhvZHx8bi50eXBlfHxoLm1ldGhvZHx8aC50eXBlLGguZGF0YVR5cGVzPShoLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChNKXx8W1wiXCJdLG51bGw9PWguY3Jvc3NEb21haW4pe2w9ci5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7bC5ocmVmPWgudXJsLGwuaHJlZj1sLmhyZWYsaC5jcm9zc0RvbWFpbj1CdC5wcm90b2NvbCtcIi8vXCIrQnQuaG9zdCE9bC5wcm90b2NvbCtcIi8vXCIrbC5ob3N0fWNhdGNoKGUpe2guY3Jvc3NEb21haW49ITB9fWlmKGguZGF0YSYmaC5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGguZGF0YSYmKGguZGF0YT13LnBhcmFtKGguZGF0YSxoLnRyYWRpdGlvbmFsKSksX3QoSXQsaCxuLEUpLGMpcmV0dXJuIEU7KGY9dy5ldmVudCYmaC5nbG9iYWwpJiYwPT13LmFjdGl2ZSsrJiZ3LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksaC50eXBlPWgudHlwZS50b1VwcGVyQ2FzZSgpLGguaGFzQ29udGVudD0hTXQudGVzdChoLnR5cGUpLG89aC51cmwucmVwbGFjZShMdCxcIlwiKSxoLmhhc0NvbnRlbnQ/aC5kYXRhJiZoLnByb2Nlc3NEYXRhJiYwPT09KGguY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihoLmRhdGE9aC5kYXRhLnJlcGxhY2UocXQsXCIrXCIpKTooZD1oLnVybC5zbGljZShvLmxlbmd0aCksaC5kYXRhJiYoaC5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIGguZGF0YSkmJihvKz0oa3QudGVzdChvKT9cIiZcIjpcIj9cIikraC5kYXRhLGRlbGV0ZSBoLmRhdGEpLCExPT09aC5jYWNoZSYmKG89by5yZXBsYWNlKEh0LFwiJDFcIiksZD0oa3QudGVzdChvKT9cIiZcIjpcIj9cIikrXCJfPVwiK0V0KysrZCksaC51cmw9bytkKSxoLmlmTW9kaWZpZWQmJih3Lmxhc3RNb2RpZmllZFtvXSYmRS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIix3Lmxhc3RNb2RpZmllZFtvXSksdy5ldGFnW29dJiZFLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsdy5ldGFnW29dKSksKGguZGF0YSYmaC5oYXNDb250ZW50JiYhMSE9PWguY29udGVudFR5cGV8fG4uY29udGVudFR5cGUpJiZFLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixoLmNvbnRlbnRUeXBlKSxFLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixoLmRhdGFUeXBlc1swXSYmaC5hY2NlcHRzW2guZGF0YVR5cGVzWzBdXT9oLmFjY2VwdHNbaC5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PWguZGF0YVR5cGVzWzBdP1wiLCBcIiskdCtcIjsgcT0wLjAxXCI6XCJcIik6aC5hY2NlcHRzW1wiKlwiXSk7Zm9yKHAgaW4gaC5oZWFkZXJzKUUuc2V0UmVxdWVzdEhlYWRlcihwLGguaGVhZGVyc1twXSk7aWYoaC5iZWZvcmVTZW5kJiYoITE9PT1oLmJlZm9yZVNlbmQuY2FsbChnLEUsaCl8fGMpKXJldHVybiBFLmFib3J0KCk7aWYoQz1cImFib3J0XCIsbS5hZGQoaC5jb21wbGV0ZSksRS5kb25lKGguc3VjY2VzcyksRS5mYWlsKGguZXJyb3IpLGk9X3QoV3QsaCxuLEUpKXtpZihFLnJlYWR5U3RhdGU9MSxmJiZ5LnRyaWdnZXIoXCJhamF4U2VuZFwiLFtFLGhdKSxjKXJldHVybiBFO2guYXN5bmMmJmgudGltZW91dD4wJiYodT1lLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFLmFib3J0KFwidGltZW91dFwiKX0saC50aW1lb3V0KSk7dHJ5e2M9ITEsaS5zZW5kKGIsayl9Y2F0Y2goZSl7aWYoYyl0aHJvdyBlO2soLTEsZSl9fWVsc2UgaygtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBrKHQsbixyLHMpe3ZhciBsLHAsZCxiLFQsQz1uO2N8fChjPSEwLHUmJmUuY2xlYXJUaW1lb3V0KHUpLGk9dm9pZCAwLGE9c3x8XCJcIixFLnJlYWR5U3RhdGU9dD4wPzQ6MCxsPXQ+PTIwMCYmdDwzMDB8fDMwND09PXQsciYmKGI9WHQoaCxFLHIpKSxiPVV0KGgsYixFLGwpLGw/KGguaWZNb2RpZmllZCYmKChUPUUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKHcubGFzdE1vZGlmaWVkW29dPVQpLChUPUUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKHcuZXRhZ1tvXT1UKSksMjA0PT09dHx8XCJIRUFEXCI9PT1oLnR5cGU/Qz1cIm5vY29udGVudFwiOjMwND09PXQ/Qz1cIm5vdG1vZGlmaWVkXCI6KEM9Yi5zdGF0ZSxwPWIuZGF0YSxsPSEoZD1iLmVycm9yKSkpOihkPUMsIXQmJkN8fChDPVwiZXJyb3JcIix0PDAmJih0PTApKSksRS5zdGF0dXM9dCxFLnN0YXR1c1RleHQ9KG58fEMpK1wiXCIsbD92LnJlc29sdmVXaXRoKGcsW3AsQyxFXSk6di5yZWplY3RXaXRoKGcsW0UsQyxkXSksRS5zdGF0dXNDb2RlKHgpLHg9dm9pZCAwLGYmJnkudHJpZ2dlcihsP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtFLGgsbD9wOmRdKSxtLmZpcmVXaXRoKGcsW0UsQ10pLGYmJih5LnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbRSxoXSksLS13LmFjdGl2ZXx8dy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gRX0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHcuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHcuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksdy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLHQpe3dbdF09ZnVuY3Rpb24oZSxuLHIsaSl7cmV0dXJuIGcobikmJihpPWl8fHIscj1uLG49dm9pZCAwKSx3LmFqYXgody5leHRlbmQoe3VybDplLHR5cGU6dCxkYXRhVHlwZTppLGRhdGE6bixzdWNjZXNzOnJ9LHcuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLHcuX2V2YWxVcmw9ZnVuY3Rpb24oZSl7cmV0dXJuIHcuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sdy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihnKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9dyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3codGhpcykud3JhcElubmVyKGUuY2FsbCh0aGlzLHQpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PXcodGhpcyksbj10LmNvbnRlbnRzKCk7bi5sZW5ndGg/bi53cmFwQWxsKGUpOnQuYXBwZW5kKGUpfSl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9ZyhlKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3codGhpcykud3JhcEFsbCh0P2UuY2FsbCh0aGlzLG4pOmUpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7dyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSx3LmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIXcuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LHcuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSx3LmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBlLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBWdD17MDoyMDAsMTIyMzoyMDR9LEd0PXcuYWpheFNldHRpbmdzLnhocigpO2guY29ycz0hIUd0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gR3QsaC5hamF4PUd0PSEhR3Qsdy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKHQpe3ZhciBuLHI7aWYoaC5jb3JzfHxHdCYmIXQuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oaSxvKXt2YXIgYSxzPXQueGhyKCk7aWYocy5vcGVuKHQudHlwZSx0LnVybCx0LmFzeW5jLHQudXNlcm5hbWUsdC5wYXNzd29yZCksdC54aHJGaWVsZHMpZm9yKGEgaW4gdC54aHJGaWVsZHMpc1thXT10LnhockZpZWxkc1thXTt0Lm1pbWVUeXBlJiZzLm92ZXJyaWRlTWltZVR5cGUmJnMub3ZlcnJpZGVNaW1lVHlwZSh0Lm1pbWVUeXBlKSx0LmNyb3NzRG9tYWlufHxpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGEgaW4gaSlzLnNldFJlcXVlc3RIZWFkZXIoYSxpW2FdKTtuPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe24mJihuPXI9cy5vbmxvYWQ9cy5vbmVycm9yPXMub25hYm9ydD1zLm9udGltZW91dD1zLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/cy5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHMuc3RhdHVzP28oMCxcImVycm9yXCIpOm8ocy5zdGF0dXMscy5zdGF0dXNUZXh0KTpvKFZ0W3Muc3RhdHVzXXx8cy5zdGF0dXMscy5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHMucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBzLnJlc3BvbnNlVGV4dD97YmluYXJ5OnMucmVzcG9uc2V9Ont0ZXh0OnMucmVzcG9uc2VUZXh0fSxzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxzLm9ubG9hZD1uKCkscj1zLm9uZXJyb3I9cy5vbnRpbWVvdXQ9bihcImVycm9yXCIpLHZvaWQgMCE9PXMub25hYm9ydD9zLm9uYWJvcnQ9cjpzLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1zLnJlYWR5U3RhdGUmJmUuc2V0VGltZW91dChmdW5jdGlvbigpe24mJnIoKX0pfSxuPW4oXCJhYm9ydFwiKTt0cnl7cy5zZW5kKHQuaGFzQ29udGVudCYmdC5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihuKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe24mJm4oKX19fSksdy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSx3LmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gdy5nbG9iYWxFdmFsKGUpLGV9fX0pLHcuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksdy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7aWYoZS5jcm9zc0RvbWFpbil7dmFyIHQsbjtyZXR1cm57c2VuZDpmdW5jdGlvbihpLG8pe3Q9dyhcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6ZS5zY3JpcHRDaGFyc2V0LHNyYzplLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLG49ZnVuY3Rpb24oZSl7dC5yZW1vdmUoKSxuPW51bGwsZSYmbyhcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksci5oZWFkLmFwcGVuZENoaWxkKHRbMF0pfSxhYm9ydDpmdW5jdGlvbigpe24mJm4oKX19fX0pO3ZhciBZdD1bXSxRdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3cuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPVl0LnBvcCgpfHx3LmV4cGFuZG8rXCJfXCIrRXQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLHcuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbih0LG4scil7dmFyIGksbyxhLHM9ITEhPT10Lmpzb25wJiYoUXQudGVzdCh0LnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgdC5kYXRhJiYwPT09KHQuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlF0LnRlc3QodC5kYXRhKSYmXCJkYXRhXCIpO2lmKHN8fFwianNvbnBcIj09PXQuZGF0YVR5cGVzWzBdKXJldHVybiBpPXQuanNvbnBDYWxsYmFjaz1nKHQuanNvbnBDYWxsYmFjayk/dC5qc29ucENhbGxiYWNrKCk6dC5qc29ucENhbGxiYWNrLHM/dFtzXT10W3NdLnJlcGxhY2UoUXQsXCIkMVwiK2kpOiExIT09dC5qc29ucCYmKHQudXJsKz0oa3QudGVzdCh0LnVybCk/XCImXCI6XCI/XCIpK3QuanNvbnArXCI9XCIraSksdC5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gYXx8dy5lcnJvcihpK1wiIHdhcyBub3QgY2FsbGVkXCIpLGFbMF19LHQuZGF0YVR5cGVzWzBdPVwianNvblwiLG89ZVtpXSxlW2ldPWZ1bmN0aW9uKCl7YT1hcmd1bWVudHN9LHIuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09bz93KGUpLnJlbW92ZVByb3AoaSk6ZVtpXT1vLHRbaV0mJih0Lmpzb25wQ2FsbGJhY2s9bi5qc29ucENhbGxiYWNrLFl0LnB1c2goaSkpLGEmJmcobykmJm8oYVswXSksYT1vPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSxoLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBlPXIuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09ZS5jaGlsZE5vZGVzLmxlbmd0aH0oKSx3LnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpO3ZhciBpLG8sYTtyZXR1cm4gdHx8KGguY3JlYXRlSFRNTERvY3VtZW50PygoaT0odD1yLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9ci5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChpKSk6dD1yKSxvPUEuZXhlYyhlKSxhPSFuJiZbXSxvP1t0LmNyZWF0ZUVsZW1lbnQob1sxXSldOihvPXhlKFtlXSx0LGEpLGEmJmEubGVuZ3RoJiZ3KGEpLnJlbW92ZSgpLHcubWVyZ2UoW10sby5jaGlsZE5vZGVzKSl9LHcuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuIHM+LTEmJihyPXZ0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxnKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksYS5sZW5ndGg+MCYmdy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj93KFwiPGRpdj5cIikuYXBwZW5kKHcucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sdy5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXt3LmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksdy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHcuZ3JlcCh3LnRpbWVycyxmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuZWxlbX0pLmxlbmd0aH0sdy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYz13LmNzcyhlLFwicG9zaXRpb25cIiksZj13KGUpLHA9e307XCJzdGF0aWNcIj09PWMmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1mLm9mZnNldCgpLG89dy5jc3MoZSxcInRvcFwiKSx1PXcuY3NzKGUsXCJsZWZ0XCIpLChsPShcImFic29sdXRlXCI9PT1jfHxcImZpeGVkXCI9PT1jKSYmKG8rdSkuaW5kZXhPZihcImF1dG9cIik+LTEpPyhhPShyPWYucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksZyh0KSYmKHQ9dC5jYWxsKGUsbix3LmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYocC50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYocC5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxwKTpmLmNzcyhwKX19LHcuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oZSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09ZT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbih0KXt3Lm9mZnNldC5zZXRPZmZzZXQodGhpcyxlLHQpfSk7dmFyIHQsbixyPXRoaXNbMF07aWYocilyZXR1cm4gci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8odD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6dC50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OnQubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PXcuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT13LmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9dyhlKS5vZmZzZXQoKSkudG9wKz13LmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz13LmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLXcuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LXcuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT13LmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8YmV9KX19KSx3LmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGUsdCl7dmFyIG49XCJwYWdlWU9mZnNldFwiPT09dDt3LmZuW2VdPWZ1bmN0aW9uKHIpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSxyLGkpe3ZhciBvO2lmKHkoZSk/bz1lOjk9PT1lLm5vZGVUeXBlJiYobz1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1pKXJldHVybiBvP29bdF06ZVtyXTtvP28uc2Nyb2xsVG8obj9vLnBhZ2VYT2Zmc2V0Omksbj9pOm8ucGFnZVlPZmZzZXQpOmVbcl09aX0sZSxyLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHcuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSx0KXt3LmNzc0hvb2tzW3RdPV9lKGgucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLG4pe2lmKG4pcmV0dXJuIG49RmUoZSx0KSxXZS50ZXN0KG4pP3coZSkucG9zaXRpb24oKVt0XStcInB4XCI6bn0pfSksdy5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7dy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6dCxcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihuLHIpe3cuZm5bcl09ZnVuY3Rpb24oaSxvKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoJiYobnx8XCJib29sZWFuXCIhPXR5cGVvZiBpKSxzPW58fCghMD09PWl8fCEwPT09bz9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiB6KHRoaXMsZnVuY3Rpb24odCxuLGkpe3ZhciBvO3JldHVybiB5KHQpPzA9PT1yLmluZGV4T2YoXCJvdXRlclwiKT90W1wiaW5uZXJcIitlXTp0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT10Lm5vZGVUeXBlPyhvPXQuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KHQuYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSx0LmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6dm9pZCAwPT09aT93LmNzcyh0LG4scyk6dy5zdHlsZSh0LG4saSxzKX0sdCxhP2k6dm9pZCAwLGEpfX0pfSksdy5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe3cuZm5bdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24odCxudWxsLGUsbik6dGhpcy50cmlnZ2VyKHQpfX0pLHcuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSx3LmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfX0pLHcucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksZyhlKSlyZXR1cm4gcj1vLmNhbGwoYXJndW1lbnRzLDIpLGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KG8uY2FsbChhcmd1bWVudHMpKSl9LGkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHx3Lmd1aWQrKyxpfSx3LmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP3cucmVhZHlXYWl0Kys6dy5yZWFkeSghMCl9LHcuaXNBcnJheT1BcnJheS5pc0FycmF5LHcucGFyc2VKU09OPUpTT04ucGFyc2Usdy5ub2RlTmFtZT1OLHcuaXNGdW5jdGlvbj1nLHcuaXNXaW5kb3c9eSx3LmNhbWVsQ2FzZT1HLHcudHlwZT14LHcubm93PURhdGUubm93LHcuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PXcudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gd30pO3ZhciBKdD1lLmpRdWVyeSxLdD1lLiQ7cmV0dXJuIHcubm9Db25mbGljdD1mdW5jdGlvbih0KXtyZXR1cm4gZS4kPT09dyYmKGUuJD1LdCksdCYmZS5qUXVlcnk9PT13JiYoZS5qUXVlcnk9SnQpLHd9LHR8fChlLmpRdWVyeT1lLiQ9dyksd30pO1xyXG5cclxuLyohXHJcbiAqIEJvb3RzdHJhcCB2My40LjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnlcIik7IWZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciBlPWpRdWVyeS5mbi5qcXVlcnkuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiLlwiKTtpZihlWzBdPDImJmVbMV08OXx8MT09ZVswXSYmOT09ZVsxXSYmZVsyXTwxfHwzPGVbMF0pdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkgdmVyc2lvbiAxLjkuMSBvciBoaWdoZXIsIGJ1dCBsb3dlciB0aGFuIHZlcnNpb24gNFwiKX0oKSxmdW5jdGlvbihuKXtcInVzZSBzdHJpY3RcIjtuLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKHQpe3ZhciBlPSExLGk9dGhpcztuKHRoaXMpLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7ZT0hMH0pO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZXx8bihpKS50cmlnZ2VyKG4uc3VwcG9ydC50cmFuc2l0aW9uLmVuZCl9LHQpLHRoaXN9LG4oZnVuY3Rpb24oKXtuLnN1cHBvcnQudHJhbnNpdGlvbj1mdW5jdGlvbiBvKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvb3RzdHJhcFwiKSxlPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9O2Zvcih2YXIgaSBpbiBlKWlmKHQuc3R5bGVbaV0hPT11bmRlZmluZWQpcmV0dXJue2VuZDplW2ldfTtyZXR1cm4hMX0oKSxuLnN1cHBvcnQudHJhbnNpdGlvbiYmKG4uZXZlbnQuc3BlY2lhbC5ic1RyYW5zaXRpb25FbmQ9e2JpbmRUeXBlOm4uc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxkZWxlZ2F0ZVR5cGU6bi5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGhhbmRsZTpmdW5jdGlvbih0KXtpZihuKHQudGFyZ2V0KS5pcyh0aGlzKSlyZXR1cm4gdC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihzKXtcInVzZSBzdHJpY3RcIjt2YXIgZT0nW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJyxhPWZ1bmN0aW9uKHQpe3ModCkub24oXCJjbGlja1wiLGUsdGhpcy5jbG9zZSl9O2EuVkVSU0lPTj1cIjMuNC4wXCIsYS5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxhLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbih0KXt2YXIgZT1zKHRoaXMpLGk9ZS5hdHRyKFwiZGF0YS10YXJnZXRcIik7aXx8KGk9KGk9ZS5hdHRyKFwiaHJlZlwiKSkmJmkucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSksaT1cIiNcIj09PWk/W106aTt2YXIgbz1zKGRvY3VtZW50KS5maW5kKGkpO2Z1bmN0aW9uIG4oKXtvLmRldGFjaCgpLnRyaWdnZXIoXCJjbG9zZWQuYnMuYWxlcnRcIikucmVtb3ZlKCl9dCYmdC5wcmV2ZW50RGVmYXVsdCgpLG8ubGVuZ3RofHwobz1lLmNsb3Nlc3QoXCIuYWxlcnRcIikpLG8udHJpZ2dlcih0PXMuRXZlbnQoXCJjbG9zZS5icy5hbGVydFwiKSksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KG8ucmVtb3ZlQ2xhc3MoXCJpblwiKSxzLnN1cHBvcnQudHJhbnNpdGlvbiYmby5oYXNDbGFzcyhcImZhZGVcIik/by5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixuKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChhLlRSQU5TSVRJT05fRFVSQVRJT04pOm4oKSl9O3ZhciB0PXMuZm4uYWxlcnQ7cy5mbi5hbGVydD1mdW5jdGlvbiBvKGkpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1zKHRoaXMpLGU9dC5kYXRhKFwiYnMuYWxlcnRcIik7ZXx8dC5kYXRhKFwiYnMuYWxlcnRcIixlPW5ldyBhKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgaSYmZVtpXS5jYWxsKHQpfSl9LHMuZm4uYWxlcnQuQ29uc3RydWN0b3I9YSxzLmZuLmFsZXJ0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gcy5mbi5hbGVydD10LHRoaXN9LHMoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYWxlcnQuZGF0YS1hcGlcIixlLGEucHJvdG90eXBlLmNsb3NlKX0oalF1ZXJ5KSxmdW5jdGlvbihzKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1mdW5jdGlvbih0LGUpe3RoaXMuJGVsZW1lbnQ9cyh0KSx0aGlzLm9wdGlvbnM9cy5leHRlbmQoe30sbi5ERUZBVUxUUyxlKSx0aGlzLmlzTG9hZGluZz0hMX07ZnVuY3Rpb24gaShvKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9cyh0aGlzKSxlPXQuZGF0YShcImJzLmJ1dHRvblwiKSxpPVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvO2V8fHQuZGF0YShcImJzLmJ1dHRvblwiLGU9bmV3IG4odGhpcyxpKSksXCJ0b2dnbGVcIj09bz9lLnRvZ2dsZSgpOm8mJmUuc2V0U3RhdGUobyl9KX1uLlZFUlNJT049XCIzLjQuMFwiLG4uREVGQVVMVFM9e2xvYWRpbmdUZXh0OlwibG9hZGluZy4uLlwifSxuLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbih0KXt2YXIgZT1cImRpc2FibGVkXCIsaT10aGlzLiRlbGVtZW50LG89aS5pcyhcImlucHV0XCIpP1widmFsXCI6XCJodG1sXCIsbj1pLmRhdGEoKTt0Kz1cIlRleHRcIixudWxsPT1uLnJlc2V0VGV4dCYmaS5kYXRhKFwicmVzZXRUZXh0XCIsaVtvXSgpKSxzZXRUaW1lb3V0KHMucHJveHkoZnVuY3Rpb24oKXtpW29dKG51bGw9PW5bdF0/dGhpcy5vcHRpb25zW3RdOm5bdF0pLFwibG9hZGluZ1RleHRcIj09dD8odGhpcy5pc0xvYWRpbmc9ITAsaS5hZGRDbGFzcyhlKS5hdHRyKGUsZSkucHJvcChlLCEwKSk6dGhpcy5pc0xvYWRpbmcmJih0aGlzLmlzTG9hZGluZz0hMSxpLnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoZSkucHJvcChlLCExKSl9LHRoaXMpLDApfSxuLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt2YXIgdD0hMCxlPXRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpO2lmKGUubGVuZ3RoKXt2YXIgaT10aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKTtcInJhZGlvXCI9PWkucHJvcChcInR5cGVcIik/KGkucHJvcChcImNoZWNrZWRcIikmJih0PSExKSxlLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIikpOlwiY2hlY2tib3hcIj09aS5wcm9wKFwidHlwZVwiKSYmKGkucHJvcChcImNoZWNrZWRcIikhPT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYodD0hMSksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSksaS5wcm9wKFwiY2hlY2tlZFwiLHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLHQmJmkudHJpZ2dlcihcImNoYW5nZVwiKX1lbHNlIHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtcHJlc3NlZFwiLCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSx0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpfTt2YXIgdD1zLmZuLmJ1dHRvbjtzLmZuLmJ1dHRvbj1pLHMuZm4uYnV0dG9uLkNvbnN0cnVjdG9yPW4scy5mbi5idXR0b24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBzLmZuLmJ1dHRvbj10LHRoaXN9LHMoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLGZ1bmN0aW9uKHQpe3ZhciBlPXModC50YXJnZXQpLmNsb3Nlc3QoXCIuYnRuXCIpO2kuY2FsbChlLFwidG9nZ2xlXCIpLHModC50YXJnZXQpLmlzKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpfHwodC5wcmV2ZW50RGVmYXVsdCgpLGUuaXMoXCJpbnB1dCxidXR0b25cIik/ZS50cmlnZ2VyKFwiZm9jdXNcIik6ZS5maW5kKFwiaW5wdXQ6dmlzaWJsZSxidXR0b246dmlzaWJsZVwiKS5maXJzdCgpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KS5vbihcImZvY3VzLmJzLmJ1dHRvbi5kYXRhLWFwaSBibHVyLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbih0KXtzKHQudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0blwiKS50b2dnbGVDbGFzcyhcImZvY3VzXCIsL15mb2N1cyhpbik/JC8udGVzdCh0LnR5cGUpKX0pfShqUXVlcnkpLGZ1bmN0aW9uKHApe1widXNlIHN0cmljdFwiO3ZhciBjPWZ1bmN0aW9uKHQsZSl7dGhpcy4kZWxlbWVudD1wKHQpLHRoaXMuJGluZGljYXRvcnM9dGhpcy4kZWxlbWVudC5maW5kKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIiksdGhpcy5vcHRpb25zPWUsdGhpcy5wYXVzZWQ9bnVsbCx0aGlzLnNsaWRpbmc9bnVsbCx0aGlzLmludGVydmFsPW51bGwsdGhpcy4kYWN0aXZlPW51bGwsdGhpcy4kaXRlbXM9bnVsbCx0aGlzLm9wdGlvbnMua2V5Ym9hcmQmJnRoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmJzLmNhcm91c2VsXCIscC5wcm94eSh0aGlzLmtleWRvd24sdGhpcykpLFwiaG92ZXJcIj09dGhpcy5vcHRpb25zLnBhdXNlJiYhKFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpJiZ0aGlzLiRlbGVtZW50Lm9uKFwibW91c2VlbnRlci5icy5jYXJvdXNlbFwiLHAucHJveHkodGhpcy5wYXVzZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlLmJzLmNhcm91c2VsXCIscC5wcm94eSh0aGlzLmN5Y2xlLHRoaXMpKX07ZnVuY3Rpb24gcihuKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9cCh0aGlzKSxlPXQuZGF0YShcImJzLmNhcm91c2VsXCIpLGk9cC5leHRlbmQoe30sYy5ERUZBVUxUUyx0LmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgbiYmbiksbz1cInN0cmluZ1wiPT10eXBlb2Ygbj9uOmkuc2xpZGU7ZXx8dC5kYXRhKFwiYnMuY2Fyb3VzZWxcIixlPW5ldyBjKHRoaXMsaSkpLFwibnVtYmVyXCI9PXR5cGVvZiBuP2UudG8obik6bz9lW29dKCk6aS5pbnRlcnZhbCYmZS5wYXVzZSgpLmN5Y2xlKCl9KX1jLlZFUlNJT049XCIzLjQuMFwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj02MDAsYy5ERUZBVUxUUz17aW50ZXJ2YWw6NWUzLHBhdXNlOlwiaG92ZXJcIix3cmFwOiEwLGtleWJvYXJkOiEwfSxjLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKHQpe2lmKCEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKXtzd2l0Y2godC53aGljaCl7Y2FzZSAzNzp0aGlzLnByZXYoKTticmVhaztjYXNlIDM5OnRoaXMubmV4dCgpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXQucHJldmVudERlZmF1bHQoKX19LGMucHJvdG90eXBlLmN5Y2xlPWZ1bmN0aW9uKHQpe3JldHVybiB0fHwodGhpcy5wYXVzZWQ9ITEpLHRoaXMuaW50ZXJ2YWwmJmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpcy5vcHRpb25zLmludGVydmFsJiYhdGhpcy5wYXVzZWQmJih0aGlzLmludGVydmFsPXNldEludGVydmFsKHAucHJveHkodGhpcy5uZXh0LHRoaXMpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpLHRoaXN9LGMucHJvdG90eXBlLmdldEl0ZW1JbmRleD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kaXRlbXM9dC5wYXJlbnQoKS5jaGlsZHJlbihcIi5pdGVtXCIpLHRoaXMuJGl0ZW1zLmluZGV4KHR8fHRoaXMuJGFjdGl2ZSl9LGMucHJvdG90eXBlLmdldEl0ZW1Gb3JEaXJlY3Rpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldEl0ZW1JbmRleChlKTtpZigoXCJwcmV2XCI9PXQmJjA9PT1pfHxcIm5leHRcIj09dCYmaT09dGhpcy4kaXRlbXMubGVuZ3RoLTEpJiYhdGhpcy5vcHRpb25zLndyYXApcmV0dXJuIGU7dmFyIG89KGkrKFwicHJldlwiPT10Py0xOjEpKSV0aGlzLiRpdGVtcy5sZW5ndGg7cmV0dXJuIHRoaXMuJGl0ZW1zLmVxKG8pfSxjLnByb3RvdHlwZS50bz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9dGhpcy5nZXRJdGVtSW5kZXgodGhpcy4kYWN0aXZlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSk7aWYoISh0PnRoaXMuJGl0ZW1zLmxlbmd0aC0xfHx0PDApKXJldHVybiB0aGlzLnNsaWRpbmc/dGhpcy4kZWxlbWVudC5vbmUoXCJzbGlkLmJzLmNhcm91c2VsXCIsZnVuY3Rpb24oKXtlLnRvKHQpfSk6aT09dD90aGlzLnBhdXNlKCkuY3ljbGUoKTp0aGlzLnNsaWRlKGk8dD9cIm5leHRcIjpcInByZXZcIix0aGlzLiRpdGVtcy5lcSh0KSl9LGMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKHQpe3JldHVybiB0fHwodGhpcy5wYXVzZWQ9ITApLHRoaXMuJGVsZW1lbnQuZmluZChcIi5uZXh0LCAucHJldlwiKS5sZW5ndGgmJnAuc3VwcG9ydC50cmFuc2l0aW9uJiYodGhpcy4kZWxlbWVudC50cmlnZ2VyKHAuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksdGhpcy5jeWNsZSghMCkpLHRoaXMuaW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzfSxjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuc2xpZGluZylyZXR1cm4gdGhpcy5zbGlkZShcIm5leHRcIil9LGMucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXtpZighdGhpcy5zbGlkaW5nKXJldHVybiB0aGlzLnNsaWRlKFwicHJldlwiKX0sYy5wcm90b3R5cGUuc2xpZGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIiksbz1lfHx0aGlzLmdldEl0ZW1Gb3JEaXJlY3Rpb24odCxpKSxuPXRoaXMuaW50ZXJ2YWwscz1cIm5leHRcIj09dD9cImxlZnRcIjpcInJpZ2h0XCIsYT10aGlzO2lmKG8uaGFzQ2xhc3MoXCJhY3RpdmVcIikpcmV0dXJuIHRoaXMuc2xpZGluZz0hMTt2YXIgcj1vWzBdLGw9cC5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6cixkaXJlY3Rpb246c30pO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihsKSwhbC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYodGhpcy5zbGlkaW5nPSEwLG4mJnRoaXMucGF1c2UoKSx0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCl7dGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgaD1wKHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGlzLmdldEl0ZW1JbmRleChvKV0pO2gmJmguYWRkQ2xhc3MoXCJhY3RpdmVcIil9dmFyIGQ9cC5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpyLGRpcmVjdGlvbjpzfSk7cmV0dXJuIHAuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwic2xpZGVcIik/KG8uYWRkQ2xhc3ModCksXCJvYmplY3RcIj09dHlwZW9mIG8mJm8ubGVuZ3RoJiZvWzBdLm9mZnNldFdpZHRoLGkuYWRkQ2xhc3Mocyksby5hZGRDbGFzcyhzKSxpLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7by5yZW1vdmVDbGFzcyhbdCxzXS5qb2luKFwiIFwiKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIiksaS5yZW1vdmVDbGFzcyhbXCJhY3RpdmVcIixzXS5qb2luKFwiIFwiKSksYS5zbGlkaW5nPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthLiRlbGVtZW50LnRyaWdnZXIoZCl9LDApfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKSk6KGkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksby5hZGRDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLnNsaWRpbmc9ITEsdGhpcy4kZWxlbWVudC50cmlnZ2VyKGQpKSxuJiZ0aGlzLmN5Y2xlKCksdGhpc319O3ZhciB0PXAuZm4uY2Fyb3VzZWw7cC5mbi5jYXJvdXNlbD1yLHAuZm4uY2Fyb3VzZWwuQ29uc3RydWN0b3I9YyxwLmZuLmNhcm91c2VsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gcC5mbi5jYXJvdXNlbD10LHRoaXN9O3ZhciBlPWZ1bmN0aW9uKHQpe3ZhciBlPXAodGhpcyksaT1lLmF0dHIoXCJocmVmXCIpO2kmJihpPWkucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSk7dmFyIG89ZS5hdHRyKFwiZGF0YS10YXJnZXRcIil8fGksbj1wKGRvY3VtZW50KS5maW5kKG8pO2lmKG4uaGFzQ2xhc3MoXCJjYXJvdXNlbFwiKSl7dmFyIHM9cC5leHRlbmQoe30sbi5kYXRhKCksZS5kYXRhKCkpLGE9ZS5hdHRyKFwiZGF0YS1zbGlkZS10b1wiKTthJiYocy5pbnRlcnZhbD0hMSksci5jYWxsKG4scyksYSYmbi5kYXRhKFwiYnMuY2Fyb3VzZWxcIikudG8oYSksdC5wcmV2ZW50RGVmYXVsdCgpfX07cChkb2N1bWVudCkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGVdXCIsZSkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGUtdG9dXCIsZSkscCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7cCgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciB0PXAodGhpcyk7ci5jYWxsKHQsdC5kYXRhKCkpfSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1mdW5jdGlvbih0LGUpe3RoaXMuJGVsZW1lbnQ9YSh0KSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sci5ERUZBVUxUUyxlKSx0aGlzLiR0cmlnZ2VyPWEoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyt0LmlkKydcIl0sW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJyt0LmlkKydcIl0nKSx0aGlzLnRyYW5zaXRpb25pbmc9bnVsbCx0aGlzLm9wdGlvbnMucGFyZW50P3RoaXMuJHBhcmVudD10aGlzLmdldFBhcmVudCgpOnRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsdGhpcy4kdHJpZ2dlciksdGhpcy5vcHRpb25zLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX07ZnVuY3Rpb24gbih0KXt2YXIgZSxpPXQuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoZT10LmF0dHIoXCJocmVmXCIpKSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpO3JldHVybiBhKGRvY3VtZW50KS5maW5kKGkpfWZ1bmN0aW9uIGwobyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWEodGhpcyksZT10LmRhdGEoXCJicy5jb2xsYXBzZVwiKSxpPWEuZXh0ZW5kKHt9LHIuREVGQVVMVFMsdC5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIG8mJm8pOyFlJiZpLnRvZ2dsZSYmL3Nob3d8aGlkZS8udGVzdChvKSYmKGkudG9nZ2xlPSExKSxlfHx0LmRhdGEoXCJicy5jb2xsYXBzZVwiLGU9bmV3IHIodGhpcyxpKSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJmVbb10oKX0pfXIuVkVSU0lPTj1cIjMuNC4wXCIsci5UUkFOU0lUSU9OX0RVUkFUSU9OPTM1MCxyLkRFRkFVTFRTPXt0b2dnbGU6ITB9LHIucHJvdG90eXBlLmRpbWVuc2lvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwid2lkdGhcIik/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9LHIucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiYhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgdCxlPXRoaXMuJHBhcmVudCYmdGhpcy4kcGFyZW50LmNoaWxkcmVuKFwiLnBhbmVsXCIpLmNoaWxkcmVuKFwiLmluLCAuY29sbGFwc2luZ1wiKTtpZighKGUmJmUubGVuZ3RoJiYodD1lLmRhdGEoXCJicy5jb2xsYXBzZVwiKSkmJnQudHJhbnNpdGlvbmluZykpe3ZhciBpPWEuRXZlbnQoXCJzaG93LmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihpKSwhaS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7ZSYmZS5sZW5ndGgmJihsLmNhbGwoZSxcImhpZGVcIiksdHx8ZS5kYXRhKFwiYnMuY29sbGFwc2VcIixudWxsKSk7dmFyIG89dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VcIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpW29dKDApLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRyaWdnZXIucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIG49ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpW29dKFwiXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIG4uY2FsbCh0aGlzKTt2YXIgcz1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixvXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KG4sdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHIuVFJBTlNJVElPTl9EVVJBVElPTilbb10odGhpcy4kZWxlbWVudFswXVtzXSl9fX19LHIucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciB0PWEuRXZlbnQoXCJoaWRlLmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcih0KSwhdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGU9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50W2VdKHRoaXMuJGVsZW1lbnRbZV0oKSlbMF0ub2Zmc2V0SGVpZ2h0LHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgaT1mdW5jdGlvbigpe3RoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2VcIikudHJpZ2dlcihcImhpZGRlbi5icy5jb2xsYXBzZVwiKX07aWYoIWEuc3VwcG9ydC50cmFuc2l0aW9uKXJldHVybiBpLmNhbGwodGhpcyk7dGhpcy4kZWxlbWVudFtlXSgwKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGksdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHIuVFJBTlNJVElPTl9EVVJBVElPTil9fX0sci5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpc1t0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIik/XCJoaWRlXCI6XCJzaG93XCJdKCl9LHIucHJvdG90eXBlLmdldFBhcmVudD1mdW5jdGlvbigpe3JldHVybiBhKGRvY3VtZW50KS5maW5kKHRoaXMub3B0aW9ucy5wYXJlbnQpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJyt0aGlzLm9wdGlvbnMucGFyZW50KydcIl0nKS5lYWNoKGEucHJveHkoZnVuY3Rpb24odCxlKXt2YXIgaT1hKGUpO3RoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKG4oaSksaSl9LHRoaXMpKS5lbmQoKX0sci5wcm90b3R5cGUuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5oYXNDbGFzcyhcImluXCIpO3QuYXR0cihcImFyaWEtZXhwYW5kZWRcIixpKSxlLnRvZ2dsZUNsYXNzKFwiY29sbGFwc2VkXCIsIWkpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsaSl9O3ZhciB0PWEuZm4uY29sbGFwc2U7YS5mbi5jb2xsYXBzZT1sLGEuZm4uY29sbGFwc2UuQ29uc3RydWN0b3I9cixhLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5jb2xsYXBzZT10LHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLGZ1bmN0aW9uKHQpe3ZhciBlPWEodGhpcyk7ZS5hdHRyKFwiZGF0YS10YXJnZXRcIil8fHQucHJldmVudERlZmF1bHQoKTt2YXIgaT1uKGUpLG89aS5kYXRhKFwiYnMuY29sbGFwc2VcIik/XCJ0b2dnbGVcIjplLmRhdGEoKTtsLmNhbGwoaSxvKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciByPSdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsbz1mdW5jdGlvbih0KXthKHQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIix0aGlzLnRvZ2dsZSl9O2Z1bmN0aW9uIGwodCl7dmFyIGU9dC5hdHRyKFwiZGF0YS10YXJnZXRcIik7ZXx8KGU9KGU9dC5hdHRyKFwiaHJlZlwiKSkmJi8jW0EtWmEtel0vLnRlc3QoZSkmJmUucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGk9ZSYmYShkb2N1bWVudCkuZmluZChlKTtyZXR1cm4gaSYmaS5sZW5ndGg/aTp0LnBhcmVudCgpfWZ1bmN0aW9uIHMobyl7byYmMz09PW8ud2hpY2h8fChhKFwiLmRyb3Bkb3duLWJhY2tkcm9wXCIpLnJlbW92ZSgpLGEocikuZWFjaChmdW5jdGlvbigpe3ZhciB0PWEodGhpcyksZT1sKHQpLGk9e3JlbGF0ZWRUYXJnZXQ6dGhpc307ZS5oYXNDbGFzcyhcIm9wZW5cIikmJihvJiZcImNsaWNrXCI9PW8udHlwZSYmL2lucHV0fHRleHRhcmVhL2kudGVzdChvLnRhcmdldC50YWdOYW1lKSYmYS5jb250YWlucyhlWzBdLG8udGFyZ2V0KXx8KGUudHJpZ2dlcihvPWEuRXZlbnQoXCJoaWRlLmJzLmRyb3Bkb3duXCIsaSkpLG8uaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0LmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxlLnJlbW92ZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKGEuRXZlbnQoXCJoaWRkZW4uYnMuZHJvcGRvd25cIixpKSkpKSl9KSl9by5WRVJTSU9OPVwiMy40LjBcIixvLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24odCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgaT1sKGUpLG89aS5oYXNDbGFzcyhcIm9wZW5cIik7aWYocygpLCFvKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhaS5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwiZHJvcGRvd24tYmFja2Ryb3BcIikuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLHMpO3ZhciBuPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKGkudHJpZ2dlcih0PWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsbikpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UudHJpZ2dlcihcImZvY3VzXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGkudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoYS5FdmVudChcInNob3duLmJzLmRyb3Bkb3duXCIsbikpfXJldHVybiExfX0sby5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbih0KXtpZigvKDM4fDQwfDI3fDMyKS8udGVzdCh0LndoaWNoKSYmIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSkpe3ZhciBlPWEodGhpcyk7aWYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksIWUuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIGk9bChlKSxvPWkuaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKCFvJiYyNyE9dC53aGljaHx8byYmMjc9PXQud2hpY2gpcmV0dXJuIDI3PT10LndoaWNoJiZpLmZpbmQocikudHJpZ2dlcihcImZvY3VzXCIpLGUudHJpZ2dlcihcImNsaWNrXCIpO3ZhciBuPWkuZmluZChcIi5kcm9wZG93bi1tZW51IGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYVwiKTtpZihuLmxlbmd0aCl7dmFyIHM9bi5pbmRleCh0LnRhcmdldCk7Mzg9PXQud2hpY2gmJjA8cyYmcy0tLDQwPT10LndoaWNoJiZzPG4ubGVuZ3RoLTEmJnMrKyx+c3x8KHM9MCksbi5lcShzKS50cmlnZ2VyKFwiZm9jdXNcIil9fX19O3ZhciB0PWEuZm4uZHJvcGRvd247YS5mbi5kcm9wZG93bj1mdW5jdGlvbiBlKGkpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1hKHRoaXMpLGU9dC5kYXRhKFwiYnMuZHJvcGRvd25cIik7ZXx8dC5kYXRhKFwiYnMuZHJvcGRvd25cIixlPW5ldyBvKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgaSYmZVtpXS5jYWxsKHQpfSl9LGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9byxhLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kcm9wZG93bj10LHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixzKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIscixvLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLHIsby5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24tbWVudVwiLG8ucHJvdG90eXBlLmtleWRvd24pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBzPWZ1bmN0aW9uKHQsZSl7dGhpcy5vcHRpb25zPWUsdGhpcy4kYm9keT1hKGRvY3VtZW50LmJvZHkpLHRoaXMuJGVsZW1lbnQ9YSh0KSx0aGlzLiRkaWFsb2c9dGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKSx0aGlzLiRiYWNrZHJvcD1udWxsLHRoaXMuaXNTaG93bj1udWxsLHRoaXMub3JpZ2luYWxCb2R5UGFkPW51bGwsdGhpcy5zY3JvbGxiYXJXaWR0aD0wLHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSx0aGlzLmZpeGVkQ29udGVudD1cIi5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbVwiLHRoaXMub3B0aW9ucy5yZW1vdGUmJnRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1jb250ZW50XCIpLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSxhLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpfSx0aGlzKSl9O2Z1bmN0aW9uIHIobyxuKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9YSh0aGlzKSxlPXQuZGF0YShcImJzLm1vZGFsXCIpLGk9YS5leHRlbmQoe30scy5ERUZBVUxUUyx0LmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgbyYmbyk7ZXx8dC5kYXRhKFwiYnMubW9kYWxcIixlPW5ldyBzKHRoaXMsaSkpLFwic3RyaW5nXCI9PXR5cGVvZiBvP2Vbb10obik6aS5zaG93JiZlLnNob3cobil9KX1zLlZFUlNJT049XCIzLjQuMFwiLHMuVFJBTlNJVElPTl9EVVJBVElPTj0zMDAscy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxzLkRFRkFVTFRTPXtiYWNrZHJvcDohMCxrZXlib2FyZDohMCxzaG93OiEwfSxzLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9LHMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oaSl7dmFyIG89dGhpcyx0PWEuRXZlbnQoXCJzaG93LmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6aX0pO3RoaXMuJGVsZW1lbnQudHJpZ2dlcih0KSx0aGlzLmlzU2hvd258fHQuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0aGlzLmlzU2hvd249ITAsdGhpcy5jaGVja1Njcm9sbGJhcigpLHRoaXMuc2V0U2Nyb2xsYmFyKCksdGhpcy4kYm9keS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIiksdGhpcy5lc2NhcGUoKSx0aGlzLnJlc2l6ZSgpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsYS5wcm94eSh0aGlzLmhpZGUsdGhpcykpLHRoaXMuJGRpYWxvZy5vbihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtvLiRlbGVtZW50Lm9uZShcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKHQpe2EodC50YXJnZXQpLmlzKG8uJGVsZW1lbnQpJiYoby5pZ25vcmVCYWNrZHJvcENsaWNrPSEwKX0pfSksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe3ZhciB0PWEuc3VwcG9ydC50cmFuc2l0aW9uJiZvLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtvLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aHx8by4kZWxlbWVudC5hcHBlbmRUbyhvLiRib2R5KSxvLiRlbGVtZW50LnNob3coKS5zY3JvbGxUb3AoMCksby5hZGp1c3REaWFsb2coKSx0JiZvLiRlbGVtZW50WzBdLm9mZnNldFdpZHRoLG8uJGVsZW1lbnQuYWRkQ2xhc3MoXCJpblwiKSxvLmVuZm9yY2VGb2N1cygpO3ZhciBlPWEuRXZlbnQoXCJzaG93bi5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0Oml9KTt0P28uJGRpYWxvZy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe28uJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZSl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChzLlRSQU5TSVRJT05fRFVSQVRJT04pOm8uJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZSl9KSl9LHMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24odCl7dCYmdC5wcmV2ZW50RGVmYXVsdCgpLHQ9YS5FdmVudChcImhpZGUuYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC50cmlnZ2VyKHQpLHRoaXMuaXNTaG93biYmIXQuaXNEZWZhdWx0UHJldmVudGVkKCkmJih0aGlzLmlzU2hvd249ITEsdGhpcy5lc2NhcGUoKSx0aGlzLnJlc2l6ZSgpLGEoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImluXCIpLm9mZihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIikub2ZmKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIpLHRoaXMuJGRpYWxvZy5vZmYoXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KHRoaXMuaGlkZU1vZGFsLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChzLlRSQU5TSVRJT05fRFVSQVRJT04pOnRoaXMuaGlkZU1vZGFsKCkpfSxzLnByb3RvdHlwZS5lbmZvcmNlRm9jdXM9ZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLm9uKFwiZm9jdXNpbi5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24odCl7ZG9jdW1lbnQ9PT10LnRhcmdldHx8dGhpcy4kZWxlbWVudFswXT09PXQudGFyZ2V0fHx0aGlzLiRlbGVtZW50Lmhhcyh0LnRhcmdldCkubGVuZ3RofHx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKX0sdGhpcykpfSxzLnByb3RvdHlwZS5lc2NhcGU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5rZXlib2FyZD90aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbih0KXsyNz09dC53aGljaCYmdGhpcy5oaWRlKCl9LHRoaXMpKTp0aGlzLmlzU2hvd258fHRoaXMuJGVsZW1lbnQub2ZmKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpfSxzLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24/YSh3aW5kb3cpLm9uKFwicmVzaXplLmJzLm1vZGFsXCIsYS5wcm94eSh0aGlzLmhhbmRsZVVwZGF0ZSx0aGlzKSk6YSh3aW5kb3cpLm9mZihcInJlc2l6ZS5icy5tb2RhbFwiKX0scy5wcm90b3R5cGUuaGlkZU1vZGFsPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLiRlbGVtZW50LmhpZGUoKSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7dC4kYm9keS5yZW1vdmVDbGFzcyhcIm1vZGFsLW9wZW5cIiksdC5yZXNldEFkanVzdG1lbnRzKCksdC5yZXNldFNjcm9sbGJhcigpLHQuJGVsZW1lbnQudHJpZ2dlcihcImhpZGRlbi5icy5tb2RhbFwiKX0pfSxzLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcD1mdW5jdGlvbigpe3RoaXMuJGJhY2tkcm9wJiZ0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKSx0aGlzLiRiYWNrZHJvcD1udWxsfSxzLnByb3RvdHlwZS5iYWNrZHJvcD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/XCJmYWRlXCI6XCJcIjtpZih0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5iYWNrZHJvcCl7dmFyIG89YS5zdXBwb3J0LnRyYW5zaXRpb24mJmk7aWYodGhpcy4kYmFja2Ryb3A9YShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5hZGRDbGFzcyhcIm1vZGFsLWJhY2tkcm9wIFwiK2kpLmFwcGVuZFRvKHRoaXMuJGJvZHkpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbih0KXt0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s/dGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExOnQudGFyZ2V0PT09dC5jdXJyZW50VGFyZ2V0JiYoXCJzdGF0aWNcIj09dGhpcy5vcHRpb25zLmJhY2tkcm9wP3RoaXMuJGVsZW1lbnRbMF0uZm9jdXMoKTp0aGlzLmhpZGUoKSl9LHRoaXMpKSxvJiZ0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCx0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcyhcImluXCIpLCF0KXJldHVybjtvP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHQpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6dCgpfWVsc2UgaWYoIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3Ape3RoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIik7dmFyIG49ZnVuY3Rpb24oKXtlLnJlbW92ZUJhY2tkcm9wKCksdCYmdCgpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsbikuZW11bGF0ZVRyYW5zaXRpb25FbmQocy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpuKCl9ZWxzZSB0JiZ0KCl9LHMucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe3RoaXMuYWRqdXN0RGlhbG9nKCl9LHMucHJvdG90eXBlLmFkanVzdERpYWxvZz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OiF0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZ0P3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIixwYWRkaW5nUmlnaHQ6dGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmIXQ/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwifSl9LHMucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHM9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6XCJcIixwYWRkaW5nUmlnaHQ6XCJcIn0pfSxzLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhcj1mdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5pbm5lcldpZHRoO2lmKCF0KXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dD1lLnJpZ2h0LU1hdGguYWJzKGUubGVmdCl9dGhpcy5ib2R5SXNPdmVyZmxvd2luZz1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoPHQsdGhpcy5zY3JvbGxiYXJXaWR0aD10aGlzLm1lYXN1cmVTY3JvbGxiYXIoKX0scy5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIHQ9cGFyc2VJbnQodGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpfHwwLDEwKTt0aGlzLm9yaWdpbmFsQm9keVBhZD1kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodHx8XCJcIjt2YXIgbj10aGlzLnNjcm9sbGJhcldpZHRoO3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJih0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIix0K24pLGEodGhpcy5maXhlZENvbnRlbnQpLmVhY2goZnVuY3Rpb24odCxlKXt2YXIgaT1lLnN0eWxlLnBhZGRpbmdSaWdodCxvPWEoZSkuY3NzKFwicGFkZGluZy1yaWdodFwiKTthKGUpLmRhdGEoXCJwYWRkaW5nLXJpZ2h0XCIsaSkuY3NzKFwicGFkZGluZy1yaWdodFwiLHBhcnNlRmxvYXQobykrbitcInB4XCIpfSkpfSxzLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3RoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLHRoaXMub3JpZ2luYWxCb2R5UGFkKSxhKHRoaXMuZml4ZWRDb250ZW50KS5lYWNoKGZ1bmN0aW9uKHQsZSl7dmFyIGk9YShlKS5kYXRhKFwicGFkZGluZy1yaWdodFwiKTthKGUpLnJlbW92ZURhdGEoXCJwYWRkaW5nLXJpZ2h0XCIpLGUuc3R5bGUucGFkZGluZ1JpZ2h0PWl8fFwiXCJ9KX0scy5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9XCJtb2RhbC1zY3JvbGxiYXItbWVhc3VyZVwiLHRoaXMuJGJvZHkuYXBwZW5kKHQpO3ZhciBlPXQub2Zmc2V0V2lkdGgtdC5jbGllbnRXaWR0aDtyZXR1cm4gdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZCh0KSxlfTt2YXIgdD1hLmZuLm1vZGFsO2EuZm4ubW9kYWw9cixhLmZuLm1vZGFsLkNvbnN0cnVjdG9yPXMsYS5mbi5tb2RhbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ubW9kYWw9dCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLm1vZGFsLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpLGk9ZS5hdHRyKFwiaHJlZlwiKSxvPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxpJiZpLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIiksbj1hKGRvY3VtZW50KS5maW5kKG8pLHM9bi5kYXRhKFwiYnMubW9kYWxcIik/XCJ0b2dnbGVcIjphLmV4dGVuZCh7cmVtb3RlOiEvIy8udGVzdChpKSYmaX0sbi5kYXRhKCksZS5kYXRhKCkpO2UuaXMoXCJhXCIpJiZ0LnByZXZlbnREZWZhdWx0KCksbi5vbmUoXCJzaG93LmJzLm1vZGFsXCIsZnVuY3Rpb24odCl7dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5vbmUoXCJoaWRkZW4uYnMubW9kYWxcIixmdW5jdGlvbigpe2UuaXMoXCI6dmlzaWJsZVwiKSYmZS50cmlnZ2VyKFwiZm9jdXNcIil9KX0pLHIuY2FsbChuLHMsdGhpcyl9KX0oalF1ZXJ5KSxmdW5jdGlvbihnKXtcInVzZSBzdHJpY3RcIjt2YXIgbT1mdW5jdGlvbih0LGUpe3RoaXMudHlwZT1udWxsLHRoaXMub3B0aW9ucz1udWxsLHRoaXMuZW5hYmxlZD1udWxsLHRoaXMudGltZW91dD1udWxsLHRoaXMuaG92ZXJTdGF0ZT1udWxsLHRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluU3RhdGU9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsdCxlKX07bS5WRVJTSU9OPVwiMy40LjBcIixtLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLG0uREVGQVVMVFM9e2FuaW1hdGlvbjohMCxwbGFjZW1lbnQ6XCJ0b3BcIixzZWxlY3RvcjohMSx0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wiLHRpdGxlOlwiXCIsZGVsYXk6MCxodG1sOiExLGNvbnRhaW5lcjohMSx2aWV3cG9ydDp7c2VsZWN0b3I6XCJib2R5XCIscGFkZGluZzowfX0sbS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbih0LGUsaSl7aWYodGhpcy5lbmFibGVkPSEwLHRoaXMudHlwZT10LHRoaXMuJGVsZW1lbnQ9ZyhlKSx0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGkpLHRoaXMuJHZpZXdwb3J0PXRoaXMub3B0aW9ucy52aWV3cG9ydCYmZyhkb2N1bWVudCkuZmluZChnLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnZpZXdwb3J0KT90aGlzLm9wdGlvbnMudmlld3BvcnQuY2FsbCh0aGlzLHRoaXMuJGVsZW1lbnQpOnRoaXMub3B0aW9ucy52aWV3cG9ydC5zZWxlY3Rvcnx8dGhpcy5vcHRpb25zLnZpZXdwb3J0KSx0aGlzLmluU3RhdGU9e2NsaWNrOiExLGhvdmVyOiExLGZvY3VzOiExfSx0aGlzLiRlbGVtZW50WzBdaW5zdGFuY2VvZiBkb2N1bWVudC5jb25zdHJ1Y3RvciYmIXRoaXMub3B0aW9ucy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJgc2VsZWN0b3JgIG9wdGlvbiBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIGluaXRpYWxpemluZyBcIit0aGlzLnR5cGUrXCIgb24gdGhlIHdpbmRvdy5kb2N1bWVudCBvYmplY3QhXCIpO2Zvcih2YXIgbz10aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdChcIiBcIiksbj1vLmxlbmd0aDtuLS07KXt2YXIgcz1vW25dO2lmKFwiY2xpY2tcIj09cyl0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixnLnByb3h5KHRoaXMudG9nZ2xlLHRoaXMpKTtlbHNlIGlmKFwibWFudWFsXCIhPXMpe3ZhciBhPVwiaG92ZXJcIj09cz9cIm1vdXNlZW50ZXJcIjpcImZvY3VzaW5cIixyPVwiaG92ZXJcIj09cz9cIm1vdXNlbGVhdmVcIjpcImZvY3Vzb3V0XCI7dGhpcy4kZWxlbWVudC5vbihhK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsZy5wcm94eSh0aGlzLmVudGVyLHRoaXMpKSx0aGlzLiRlbGVtZW50Lm9uKHIrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixnLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfX10aGlzLm9wdGlvbnMuc2VsZWN0b3I/dGhpcy5fb3B0aW9ucz1nLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse3RyaWdnZXI6XCJtYW51YWxcIixzZWxlY3RvcjpcIlwifSk6dGhpcy5maXhUaXRsZSgpfSxtLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBtLkRFRkFVTFRTfSxtLnByb3RvdHlwZS5nZXRPcHRpb25zPWZ1bmN0aW9uKHQpe3JldHVybih0PWcuZXh0ZW5kKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLiRlbGVtZW50LmRhdGEoKSx0KSkuZGVsYXkmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmRlbGF5JiYodC5kZWxheT17c2hvdzp0LmRlbGF5LGhpZGU6dC5kZWxheX0pLHR9LG0ucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucz1mdW5jdGlvbigpe3ZhciBpPXt9LG89dGhpcy5nZXREZWZhdWx0cygpO3JldHVybiB0aGlzLl9vcHRpb25zJiZnLmVhY2godGhpcy5fb3B0aW9ucyxmdW5jdGlvbih0LGUpe29bdF0hPWUmJihpW3RdPWUpfSksaX0sbS5wcm90b3R5cGUuZW50ZXI9ZnVuY3Rpb24odCl7dmFyIGU9dCBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/dDpnKHQuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7aWYoZXx8KGU9bmV3IHRoaXMuY29uc3RydWN0b3IodC5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGcodC5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGUpKSx0IGluc3RhbmNlb2YgZy5FdmVudCYmKGUuaW5TdGF0ZVtcImZvY3VzaW5cIj09dC50eXBlP1wiZm9jdXNcIjpcImhvdmVyXCJdPSEwKSxlLnRpcCgpLmhhc0NsYXNzKFwiaW5cIil8fFwiaW5cIj09ZS5ob3ZlclN0YXRlKWUuaG92ZXJTdGF0ZT1cImluXCI7ZWxzZXtpZihjbGVhclRpbWVvdXQoZS50aW1lb3V0KSxlLmhvdmVyU3RhdGU9XCJpblwiLCFlLm9wdGlvbnMuZGVsYXl8fCFlLm9wdGlvbnMuZGVsYXkuc2hvdylyZXR1cm4gZS5zaG93KCk7ZS50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluXCI9PWUuaG92ZXJTdGF0ZSYmZS5zaG93KCl9LGUub3B0aW9ucy5kZWxheS5zaG93KX19LG0ucHJvdG90eXBlLmlzSW5TdGF0ZVRydWU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5pblN0YXRlKWlmKHRoaXMuaW5TdGF0ZVt0XSlyZXR1cm4hMDtyZXR1cm4hMX0sbS5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24odCl7dmFyIGU9dCBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/dDpnKHQuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7aWYoZXx8KGU9bmV3IHRoaXMuY29uc3RydWN0b3IodC5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGcodC5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGUpKSx0IGluc3RhbmNlb2YgZy5FdmVudCYmKGUuaW5TdGF0ZVtcImZvY3Vzb3V0XCI9PXQudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMSksIWUuaXNJblN0YXRlVHJ1ZSgpKXtpZihjbGVhclRpbWVvdXQoZS50aW1lb3V0KSxlLmhvdmVyU3RhdGU9XCJvdXRcIiwhZS5vcHRpb25zLmRlbGF5fHwhZS5vcHRpb25zLmRlbGF5LmhpZGUpcmV0dXJuIGUuaGlkZSgpO2UudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJvdXRcIj09ZS5ob3ZlclN0YXRlJiZlLmhpZGUoKX0sZS5vcHRpb25zLmRlbGF5LmhpZGUpfX0sbS5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciB0PWcuRXZlbnQoXCJzaG93LmJzLlwiK3RoaXMudHlwZSk7aWYodGhpcy5oYXNDb250ZW50KCkmJnRoaXMuZW5hYmxlZCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKHQpO3ZhciBlPWcuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0aGlzLiRlbGVtZW50WzBdKTtpZih0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHwhZSlyZXR1cm47dmFyIGk9dGhpcyxvPXRoaXMudGlwKCksbj10aGlzLmdldFVJRCh0aGlzLnR5cGUpO3RoaXMuc2V0Q29udGVudCgpLG8uYXR0cihcImlkXCIsbiksdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLG4pLHRoaXMub3B0aW9ucy5hbmltYXRpb24mJm8uYWRkQ2xhc3MoXCJmYWRlXCIpO3ZhciBzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQ/dGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsb1swXSx0aGlzLiRlbGVtZW50WzBdKTp0aGlzLm9wdGlvbnMucGxhY2VtZW50LGE9L1xccz9hdXRvP1xccz8vaSxyPWEudGVzdChzKTtyJiYocz1zLnJlcGxhY2UoYSxcIlwiKXx8XCJ0b3BcIiksby5kZXRhY2goKS5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLmFkZENsYXNzKHMpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsdGhpcyksdGhpcy5vcHRpb25zLmNvbnRhaW5lcj9vLmFwcGVuZFRvKGcoZG9jdW1lbnQpLmZpbmQodGhpcy5vcHRpb25zLmNvbnRhaW5lcikpOm8uaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCksdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiaW5zZXJ0ZWQuYnMuXCIrdGhpcy50eXBlKTt2YXIgbD10aGlzLmdldFBvc2l0aW9uKCksaD1vWzBdLm9mZnNldFdpZHRoLGQ9b1swXS5vZmZzZXRIZWlnaHQ7aWYocil7dmFyIHA9cyxjPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO3M9XCJib3R0b21cIj09cyYmbC5ib3R0b20rZD5jLmJvdHRvbT9cInRvcFwiOlwidG9wXCI9PXMmJmwudG9wLWQ8Yy50b3A/XCJib3R0b21cIjpcInJpZ2h0XCI9PXMmJmwucmlnaHQraD5jLndpZHRoP1wibGVmdFwiOlwibGVmdFwiPT1zJiZsLmxlZnQtaDxjLmxlZnQ/XCJyaWdodFwiOnMsby5yZW1vdmVDbGFzcyhwKS5hZGRDbGFzcyhzKX12YXIgZj10aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQocyxsLGgsZCk7dGhpcy5hcHBseVBsYWNlbWVudChmLHMpO3ZhciB1PWZ1bmN0aW9uKCl7dmFyIHQ9aS5ob3ZlclN0YXRlO2kuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK2kudHlwZSksaS5ob3ZlclN0YXRlPW51bGwsXCJvdXRcIj09dCYmaS5sZWF2ZShpKX07Zy5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/by5vbmUoXCJic1RyYW5zaXRpb25FbmRcIix1KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChtLlRSQU5TSVRJT05fRFVSQVRJT04pOnUoKX19LG0ucHJvdG90eXBlLmFwcGx5UGxhY2VtZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy50aXAoKSxvPWlbMF0ub2Zmc2V0V2lkdGgsbj1pWzBdLm9mZnNldEhlaWdodCxzPXBhcnNlSW50KGkuY3NzKFwibWFyZ2luLXRvcFwiKSwxMCksYT1wYXJzZUludChpLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLDEwKTtpc05hTihzKSYmKHM9MCksaXNOYU4oYSkmJihhPTApLHQudG9wKz1zLHQubGVmdCs9YSxnLm9mZnNldC5zZXRPZmZzZXQoaVswXSxnLmV4dGVuZCh7dXNpbmc6ZnVuY3Rpb24odCl7aS5jc3Moe3RvcDpNYXRoLnJvdW5kKHQudG9wKSxsZWZ0Ok1hdGgucm91bmQodC5sZWZ0KX0pfX0sdCksMCksaS5hZGRDbGFzcyhcImluXCIpO3ZhciByPWlbMF0ub2Zmc2V0V2lkdGgsbD1pWzBdLm9mZnNldEhlaWdodDtcInRvcFwiPT1lJiZsIT1uJiYodC50b3A9dC50b3Arbi1sKTt2YXIgaD10aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShlLHQscixsKTtoLmxlZnQ/dC5sZWZ0Kz1oLmxlZnQ6dC50b3ArPWgudG9wO3ZhciBkPS90b3B8Ym90dG9tLy50ZXN0KGUpLHA9ZD8yKmgubGVmdC1vK3I6MipoLnRvcC1uK2wsYz1kP1wib2Zmc2V0V2lkdGhcIjpcIm9mZnNldEhlaWdodFwiO2kub2Zmc2V0KHQpLHRoaXMucmVwbGFjZUFycm93KHAsaVswXVtjXSxkKX0sbS5wcm90b3R5cGUucmVwbGFjZUFycm93PWZ1bmN0aW9uKHQsZSxpKXt0aGlzLmFycm93KCkuY3NzKGk/XCJsZWZ0XCI6XCJ0b3BcIiw1MCooMS10L2UpK1wiJVwiKS5jc3MoaT9cInRvcFwiOlwibGVmdFwiLFwiXCIpfSxtLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy50aXAoKSxlPXRoaXMuZ2V0VGl0bGUoKTt0LmZpbmQoXCIudG9vbHRpcC1pbm5lclwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oZSksdC5yZW1vdmVDbGFzcyhcImZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0XCIpfSxtLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1nKHRoaXMuJHRpcCksbz1nLkV2ZW50KFwiaGlkZS5icy5cIit0aGlzLnR5cGUpO2Z1bmN0aW9uIG4oKXtcImluXCIhPWUuaG92ZXJTdGF0ZSYmaS5kZXRhY2goKSxlLiRlbGVtZW50JiZlLiRlbGVtZW50LnJlbW92ZUF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuXCIrZS50eXBlKSx0JiZ0KCl9aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKG8pLCFvLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybiBpLnJlbW92ZUNsYXNzKFwiaW5cIiksZy5zdXBwb3J0LnRyYW5zaXRpb24mJmkuaGFzQ2xhc3MoXCJmYWRlXCIpP2kub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsbikuZW11bGF0ZVRyYW5zaXRpb25FbmQobS5UUkFOU0lUSU9OX0RVUkFUSU9OKTpuKCksdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpc30sbS5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRlbGVtZW50Oyh0LmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZ0LmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsdC5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxtLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0sbS5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24odCl7dmFyIGU9KHQ9dHx8dGhpcy4kZWxlbWVudClbMF0saT1cIkJPRFlcIj09ZS50YWdOYW1lLG89ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtudWxsPT1vLndpZHRoJiYobz1nLmV4dGVuZCh7fSxvLHt3aWR0aDpvLnJpZ2h0LW8ubGVmdCxoZWlnaHQ6by5ib3R0b20tby50b3B9KSk7dmFyIG49d2luZG93LlNWR0VsZW1lbnQmJmUgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCxzPWk/e3RvcDowLGxlZnQ6MH06bj9udWxsOnQub2Zmc2V0KCksYT17c2Nyb2xsOmk/ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6dC5zY3JvbGxUb3AoKX0scj1pP3t3aWR0aDpnKHdpbmRvdykud2lkdGgoKSxoZWlnaHQ6Zyh3aW5kb3cpLmhlaWdodCgpfTpudWxsO3JldHVybiBnLmV4dGVuZCh7fSxvLGEscixzKX0sbS5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldD1mdW5jdGlvbih0LGUsaSxvKXtyZXR1cm5cImJvdHRvbVwiPT10P3t0b3A6ZS50b3ArZS5oZWlnaHQsbGVmdDplLmxlZnQrZS53aWR0aC8yLWkvMn06XCJ0b3BcIj09dD97dG9wOmUudG9wLW8sbGVmdDplLmxlZnQrZS53aWR0aC8yLWkvMn06XCJsZWZ0XCI9PXQ/e3RvcDplLnRvcCtlLmhlaWdodC8yLW8vMixsZWZ0OmUubGVmdC1pfTp7dG9wOmUudG9wK2UuaGVpZ2h0LzItby8yLGxlZnQ6ZS5sZWZ0K2Uud2lkdGh9fSxtLnByb3RvdHlwZS5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGE9ZnVuY3Rpb24odCxlLGksbyl7dmFyIG49e3RvcDowLGxlZnQ6MH07aWYoIXRoaXMuJHZpZXdwb3J0KXJldHVybiBuO3ZhciBzPXRoaXMub3B0aW9ucy52aWV3cG9ydCYmdGhpcy5vcHRpb25zLnZpZXdwb3J0LnBhZGRpbmd8fDAsYT10aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtpZigvcmlnaHR8bGVmdC8udGVzdCh0KSl7dmFyIHI9ZS50b3Atcy1hLnNjcm9sbCxsPWUudG9wK3MtYS5zY3JvbGwrbztyPGEudG9wP24udG9wPWEudG9wLXI6bD5hLnRvcCthLmhlaWdodCYmKG4udG9wPWEudG9wK2EuaGVpZ2h0LWwpfWVsc2V7dmFyIGg9ZS5sZWZ0LXMsZD1lLmxlZnQrcytpO2g8YS5sZWZ0P24ubGVmdD1hLmxlZnQtaDpkPmEucmlnaHQmJihuLmxlZnQ9YS5sZWZ0K2Eud2lkdGgtZCl9cmV0dXJuIG59LG0ucHJvdG90eXBlLmdldFRpdGxlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZWxlbWVudCxlPXRoaXMub3B0aW9ucztyZXR1cm4gdC5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGUudGl0bGU/ZS50aXRsZS5jYWxsKHRbMF0pOmUudGl0bGUpfSxtLnByb3RvdHlwZS5nZXRVSUQ9ZnVuY3Rpb24odCl7Zm9yKDt0Kz1+figxZTYqTWF0aC5yYW5kb20oKSksZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk7KTtyZXR1cm4gdH0sbS5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7aWYoIXRoaXMuJHRpcCYmKHRoaXMuJHRpcD1nKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSksMSE9dGhpcy4kdGlwLmxlbmd0aCkpdGhyb3cgbmV3IEVycm9yKHRoaXMudHlwZStcIiBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IVwiKTtyZXR1cm4gdGhpcy4kdGlwfSxtLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLnRvb2x0aXAtYXJyb3dcIil9LG0ucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0sbS5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMX0sbS5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZD1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hdGhpcy5lbmFibGVkfSxtLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0JiYoKGU9Zyh0LmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpKXx8KGU9bmV3IHRoaXMuY29uc3RydWN0b3IodC5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGcodC5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGUpKSksdD8oZS5pblN0YXRlLmNsaWNrPSFlLmluU3RhdGUuY2xpY2ssZS5pc0luU3RhdGVUcnVlKCk/ZS5lbnRlcihlKTplLmxlYXZlKGUpKTplLnRpcCgpLmhhc0NsYXNzKFwiaW5cIik/ZS5sZWF2ZShlKTplLmVudGVyKGUpfSxtLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSx0aGlzLmhpZGUoZnVuY3Rpb24oKXt0LiRlbGVtZW50Lm9mZihcIi5cIit0LnR5cGUpLnJlbW92ZURhdGEoXCJicy5cIit0LnR5cGUpLHQuJHRpcCYmdC4kdGlwLmRldGFjaCgpLHQuJHRpcD1udWxsLHQuJGFycm93PW51bGwsdC4kdmlld3BvcnQ9bnVsbCx0LiRlbGVtZW50PW51bGx9KX07dmFyIHQ9Zy5mbi50b29sdGlwO2cuZm4udG9vbHRpcD1mdW5jdGlvbiBlKG8pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1nKHRoaXMpLGU9dC5kYXRhKFwiYnMudG9vbHRpcFwiKSxpPVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvOyFlJiYvZGVzdHJveXxoaWRlLy50ZXN0KG8pfHwoZXx8dC5kYXRhKFwiYnMudG9vbHRpcFwiLGU9bmV3IG0odGhpcyxpKSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJmVbb10oKSl9KX0sZy5mbi50b29sdGlwLkNvbnN0cnVjdG9yPW0sZy5mbi50b29sdGlwLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZy5mbi50b29sdGlwPXQsdGhpc319KGpRdWVyeSksZnVuY3Rpb24obil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHM9ZnVuY3Rpb24odCxlKXt0aGlzLmluaXQoXCJwb3BvdmVyXCIsdCxlKX07aWYoIW4uZm4udG9vbHRpcCl0aHJvdyBuZXcgRXJyb3IoXCJQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanNcIik7cy5WRVJTSU9OPVwiMy40LjBcIixzLkRFRkFVTFRTPW4uZXh0ZW5kKHt9LG4uZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUyx7cGxhY2VtZW50OlwicmlnaHRcIix0cmlnZ2VyOlwiY2xpY2tcIixjb250ZW50OlwiXCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLCgocy5wcm90b3R5cGU9bi5leHRlbmQoe30sbi5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPXMpLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBzLkRFRkFVTFRTfSxzLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy50aXAoKSxlPXRoaXMuZ2V0VGl0bGUoKSxpPXRoaXMuZ2V0Q29udGVudCgpO3QuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShlKSx0LmZpbmQoXCIucG9wb3Zlci1jb250ZW50XCIpLmNoaWxkcmVuKCkuZGV0YWNoKCkuZW5kKClbdGhpcy5vcHRpb25zLmh0bWw/XCJzdHJpbmdcIj09dHlwZW9mIGk/XCJodG1sXCI6XCJhcHBlbmRcIjpcInRleHRcIl0oaSksdC5yZW1vdmVDbGFzcyhcImZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluXCIpLHQuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKXx8dC5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaGlkZSgpfSxzLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKXx8dGhpcy5nZXRDb250ZW50KCl9LHMucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRlbGVtZW50LGU9dGhpcy5vcHRpb25zO3JldHVybiB0LmF0dHIoXCJkYXRhLWNvbnRlbnRcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNvbnRlbnQ/ZS5jb250ZW50LmNhbGwodFswXSk6ZS5jb250ZW50KX0scy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi5hcnJvd1wiKX07dmFyIHQ9bi5mbi5wb3BvdmVyO24uZm4ucG9wb3Zlcj1mdW5jdGlvbiBlKG8pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1uKHRoaXMpLGU9dC5kYXRhKFwiYnMucG9wb3ZlclwiKSxpPVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvOyFlJiYvZGVzdHJveXxoaWRlLy50ZXN0KG8pfHwoZXx8dC5kYXRhKFwiYnMucG9wb3ZlclwiLGU9bmV3IHModGhpcyxpKSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJmVbb10oKSl9KX0sbi5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yPXMsbi5mbi5wb3BvdmVyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gbi5mbi5wb3BvdmVyPXQsdGhpc319KGpRdWVyeSksZnVuY3Rpb24ocyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe3RoaXMuJGJvZHk9cyhkb2N1bWVudC5ib2R5KSx0aGlzLiRzY3JvbGxFbGVtZW50PXModCkuaXMoZG9jdW1lbnQuYm9keSk/cyh3aW5kb3cpOnModCksdGhpcy5vcHRpb25zPXMuZXh0ZW5kKHt9LG4uREVGQVVMVFMsZSksdGhpcy5zZWxlY3Rvcj0odGhpcy5vcHRpb25zLnRhcmdldHx8XCJcIikrXCIgLm5hdiBsaSA+IGFcIix0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5zY3JvbGxIZWlnaHQ9MCx0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKFwic2Nyb2xsLmJzLnNjcm9sbHNweVwiLHMucHJveHkodGhpcy5wcm9jZXNzLHRoaXMpKSx0aGlzLnJlZnJlc2goKSx0aGlzLnByb2Nlc3MoKX1mdW5jdGlvbiBlKG8pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1zKHRoaXMpLGU9dC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIpLGk9XCJvYmplY3RcIj09dHlwZW9mIG8mJm87ZXx8dC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIsZT1uZXcgbih0aGlzLGkpKSxcInN0cmluZ1wiPT10eXBlb2YgbyYmZVtvXSgpfSl9bi5WRVJTSU9OPVwiMy40LjBcIixuLkRFRkFVTFRTPXtvZmZzZXQ6MTB9LG4ucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodHx8TWF0aC5tYXgodGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl9LG4ucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG89XCJvZmZzZXRcIixuPTA7dGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLnNjcm9sbEhlaWdodD10aGlzLmdldFNjcm9sbEhlaWdodCgpLHMuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSl8fChvPVwicG9zaXRpb25cIixuPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkpLHRoaXMuJGJvZHkuZmluZCh0aGlzLnNlbGVjdG9yKS5tYXAoZnVuY3Rpb24oKXt2YXIgdD1zKHRoaXMpLGU9dC5kYXRhKFwidGFyZ2V0XCIpfHx0LmF0dHIoXCJocmVmXCIpLGk9L14jLi8udGVzdChlKSYmcyhlKTtyZXR1cm4gaSYmaS5sZW5ndGgmJmkuaXMoXCI6dmlzaWJsZVwiKSYmW1tpW29dKCkudG9wK24sZV1dfHxudWxsfSkuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0WzBdLWVbMF19KS5lYWNoKGZ1bmN0aW9uKCl7dC5vZmZzZXRzLnB1c2godGhpc1swXSksdC50YXJnZXRzLnB1c2godGhpc1sxXSl9KX0sbi5wcm90b3R5cGUucHJvY2Vzcz1mdW5jdGlvbigpe3ZhciB0LGU9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSt0aGlzLm9wdGlvbnMub2Zmc2V0LGk9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxvPXRoaXMub3B0aW9ucy5vZmZzZXQraS10aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpLG49dGhpcy5vZmZzZXRzLHM9dGhpcy50YXJnZXRzLGE9dGhpcy5hY3RpdmVUYXJnZXQ7aWYodGhpcy5zY3JvbGxIZWlnaHQhPWkmJnRoaXMucmVmcmVzaCgpLG88PWUpcmV0dXJuIGEhPSh0PXNbcy5sZW5ndGgtMV0pJiZ0aGlzLmFjdGl2YXRlKHQpO2lmKGEmJmU8blswXSlyZXR1cm4gdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLmNsZWFyKCk7Zm9yKHQ9bi5sZW5ndGg7dC0tOylhIT1zW3RdJiZlPj1uW3RdJiYoblt0KzFdPT09dW5kZWZpbmVkfHxlPG5bdCsxXSkmJnRoaXMuYWN0aXZhdGUoc1t0XSl9LG4ucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKHQpe3RoaXMuYWN0aXZlVGFyZ2V0PXQsdGhpcy5jbGVhcigpO3ZhciBlPXRoaXMuc2VsZWN0b3IrJ1tkYXRhLXRhcmdldD1cIicrdCsnXCJdLCcrdGhpcy5zZWxlY3RvcisnW2hyZWY9XCInK3QrJ1wiXScsaT1zKGUpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtpLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmKGk9aS5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGkudHJpZ2dlcihcImFjdGl2YXRlLmJzLnNjcm9sbHNweVwiKX0sbi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtzKHRoaXMuc2VsZWN0b3IpLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIHQ9cy5mbi5zY3JvbGxzcHk7cy5mbi5zY3JvbGxzcHk9ZSxzLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3Rvcj1uLHMuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gcy5mbi5zY3JvbGxzcHk9dCx0aGlzfSxzKHdpbmRvdykub24oXCJsb2FkLmJzLnNjcm9sbHNweS5kYXRhLWFwaVwiLGZ1bmN0aW9uKCl7cygnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciB0PXModGhpcyk7ZS5jYWxsKHQsdC5kYXRhKCkpfSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1mdW5jdGlvbih0KXt0aGlzLmVsZW1lbnQ9cih0KX07ZnVuY3Rpb24gZShpKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9cih0aGlzKSxlPXQuZGF0YShcImJzLnRhYlwiKTtlfHx0LmRhdGEoXCJicy50YWJcIixlPW5ldyBhKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgaSYmZVtpXSgpfSl9YS5WRVJTSU9OPVwiMy40LjBcIixhLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGEucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsZW1lbnQsZT10LmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLGk9dC5kYXRhKFwidGFyZ2V0XCIpO2lmKGl8fChpPShpPXQuYXR0cihcImhyZWZcIikpJiZpLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpLCF0LnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXt2YXIgbz1lLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKSxuPXIuRXZlbnQoXCJoaWRlLmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OnRbMF19KSxzPXIuRXZlbnQoXCJzaG93LmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0Om9bMF19KTtpZihvLnRyaWdnZXIobiksdC50cmlnZ2VyKHMpLCFzLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYhbi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGE9cihkb2N1bWVudCkuZmluZChpKTt0aGlzLmFjdGl2YXRlKHQuY2xvc2VzdChcImxpXCIpLGUpLHRoaXMuYWN0aXZhdGUoYSxhLnBhcmVudCgpLGZ1bmN0aW9uKCl7by50cmlnZ2VyKHt0eXBlOlwiaGlkZGVuLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6dFswXX0pLHQudHJpZ2dlcih7dHlwZTpcInNob3duLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6b1swXX0pfSl9fX0sYS5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24odCxlLGkpe3ZhciBvPWUuZmluZChcIj4gLmFjdGl2ZVwiKSxuPWkmJnIuc3VwcG9ydC50cmFuc2l0aW9uJiYoby5sZW5ndGgmJm8uaGFzQ2xhc3MoXCJmYWRlXCIpfHwhIWUuZmluZChcIj4gLmZhZGVcIikubGVuZ3RoKTtmdW5jdGlvbiBzKCl7by5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5maW5kKFwiPiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxuPyh0WzBdLm9mZnNldFdpZHRoLHQuYWRkQ2xhc3MoXCJpblwiKSk6dC5yZW1vdmVDbGFzcyhcImZhZGVcIiksdC5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJnQuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGkmJmkoKX1vLmxlbmd0aCYmbj9vLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHMpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGEuVFJBTlNJVElPTl9EVVJBVElPTik6cygpLG8ucmVtb3ZlQ2xhc3MoXCJpblwiKX07dmFyIHQ9ci5mbi50YWI7ci5mbi50YWI9ZSxyLmZuLnRhYi5Db25zdHJ1Y3Rvcj1hLHIuZm4udGFiLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gci5mbi50YWI9dCx0aGlzfTt2YXIgaT1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5jYWxsKHIodGhpcyksXCJzaG93XCIpfTtyKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGkpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLGkpfShqUXVlcnkpLGZ1bmN0aW9uKGwpe1widXNlIHN0cmljdFwiO3ZhciBoPWZ1bmN0aW9uKHQsZSl7dGhpcy5vcHRpb25zPWwuZXh0ZW5kKHt9LGguREVGQVVMVFMsZSk7dmFyIGk9dGhpcy5vcHRpb25zLnRhcmdldD09PWguREVGQVVMVFMudGFyZ2V0P2wodGhpcy5vcHRpb25zLnRhcmdldCk6bChkb2N1bWVudCkuZmluZCh0aGlzLm9wdGlvbnMudGFyZ2V0KTt0aGlzLiR0YXJnZXQ9aS5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLGwucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpKS5vbihcImNsaWNrLmJzLmFmZml4LmRhdGEtYXBpXCIsbC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLHRoaXMpKSx0aGlzLiRlbGVtZW50PWwodCksdGhpcy5hZmZpeGVkPW51bGwsdGhpcy51bnBpbj1udWxsLHRoaXMucGlubmVkT2Zmc2V0PW51bGwsdGhpcy5jaGVja1Bvc2l0aW9uKCl9O2Z1bmN0aW9uIGkobyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWwodGhpcyksZT10LmRhdGEoXCJicy5hZmZpeFwiKSxpPVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvO2V8fHQuZGF0YShcImJzLmFmZml4XCIsZT1uZXcgaCh0aGlzLGkpKSxcInN0cmluZ1wiPT10eXBlb2YgbyYmZVtvXSgpfSl9aC5WRVJTSU9OPVwiMy40LjBcIixoLlJFU0VUPVwiYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbVwiLGguREVGQVVMVFM9e29mZnNldDowLHRhcmdldDp3aW5kb3d9LGgucHJvdG90eXBlLmdldFN0YXRlPWZ1bmN0aW9uKHQsZSxpLG8pe3ZhciBuPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxzPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCksYT10aGlzLiR0YXJnZXQuaGVpZ2h0KCk7aWYobnVsbCE9aSYmXCJ0b3BcIj09dGhpcy5hZmZpeGVkKXJldHVybiBuPGkmJlwidG9wXCI7aWYoXCJib3R0b21cIj09dGhpcy5hZmZpeGVkKXJldHVybiBudWxsIT1pPyEobit0aGlzLnVucGluPD1zLnRvcCkmJlwiYm90dG9tXCI6IShuK2E8PXQtbykmJlwiYm90dG9tXCI7dmFyIHI9bnVsbD09dGhpcy5hZmZpeGVkLGw9cj9uOnMudG9wO3JldHVybiBudWxsIT1pJiZuPD1pP1widG9wXCI6bnVsbCE9byYmdC1vPD1sKyhyP2E6ZSkmJlwiYm90dG9tXCJ9LGgucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldD1mdW5jdGlvbigpe2lmKHRoaXMucGlubmVkT2Zmc2V0KXJldHVybiB0aGlzLnBpbm5lZE9mZnNldDt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGguUkVTRVQpLmFkZENsYXNzKFwiYWZmaXhcIik7dmFyIHQ9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGU9dGhpcy4kZWxlbWVudC5vZmZzZXQoKTtyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ9ZS50b3AtdH0saC5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGwucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpLDEpfSxoLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uPWZ1bmN0aW9uKCl7aWYodGhpcy4kZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKXt2YXIgdD10aGlzLiRlbGVtZW50LmhlaWdodCgpLGU9dGhpcy5vcHRpb25zLm9mZnNldCxpPWUudG9wLG89ZS5ib3R0b20sbj1NYXRoLm1heChsKGRvY3VtZW50KS5oZWlnaHQoKSxsKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpKTtcIm9iamVjdFwiIT10eXBlb2YgZSYmKG89aT1lKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1lLnRvcCh0aGlzLiRlbGVtZW50KSksXCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKG89ZS5ib3R0b20odGhpcy4kZWxlbWVudCkpO3ZhciBzPXRoaXMuZ2V0U3RhdGUobix0LGksbyk7aWYodGhpcy5hZmZpeGVkIT1zKXtudWxsIT10aGlzLnVucGluJiZ0aGlzLiRlbGVtZW50LmNzcyhcInRvcFwiLFwiXCIpO3ZhciBhPVwiYWZmaXhcIisocz9cIi1cIitzOlwiXCIpLHI9bC5FdmVudChhK1wiLmJzLmFmZml4XCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihyKSxyLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybjt0aGlzLmFmZml4ZWQ9cyx0aGlzLnVucGluPVwiYm90dG9tXCI9PXM/dGhpcy5nZXRQaW5uZWRPZmZzZXQoKTpudWxsLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoaC5SRVNFVCkuYWRkQ2xhc3MoYSkudHJpZ2dlcihhLnJlcGxhY2UoXCJhZmZpeFwiLFwiYWZmaXhlZFwiKStcIi5icy5hZmZpeFwiKX1cImJvdHRvbVwiPT1zJiZ0aGlzLiRlbGVtZW50Lm9mZnNldCh7dG9wOm4tdC1vfSl9fTt2YXIgdD1sLmZuLmFmZml4O2wuZm4uYWZmaXg9aSxsLmZuLmFmZml4LkNvbnN0cnVjdG9yPWgsbC5mbi5hZmZpeC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGwuZm4uYWZmaXg9dCx0aGlzfSxsKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtsKCdbZGF0YS1zcHk9XCJhZmZpeFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1sKHRoaXMpLGU9dC5kYXRhKCk7ZS5vZmZzZXQ9ZS5vZmZzZXR8fHt9LG51bGwhPWUub2Zmc2V0Qm90dG9tJiYoZS5vZmZzZXQuYm90dG9tPWUub2Zmc2V0Qm90dG9tKSxudWxsIT1lLm9mZnNldFRvcCYmKGUub2Zmc2V0LnRvcD1lLm9mZnNldFRvcCksaS5jYWxsKHQsZSl9KX0pfShqUXVlcnkpO1xyXG5cclxuLypcclxuICAgICBfIF8gICAgICBfICAgICAgIF9cclxuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXHJcbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcclxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcclxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXHJcbiAgICAgICAgICAgICAgICAgICB8X18vXHJcblxyXG4gVmVyc2lvbjogMS44LjBcclxuICBBdXRob3I6IEtlbiBXaGVlbGVyXHJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cclxuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xyXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xyXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcclxuXHJcbiAqL1xyXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXHJcbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xyXG4gICAgfVxyXG5cclxufShmdW5jdGlvbigkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XHJcblxyXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXHJcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcclxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcclxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xyXG5cclxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XHJcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XHJcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcclxuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XHJcblxyXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcblxyXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XHJcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XHJcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XHJcblxyXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcclxuXHJcbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXHJcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcclxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxyXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xyXG5cclxuXHJcbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFNsaWNrO1xyXG5cclxuICAgIH0oKSk7XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xyXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xyXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcclxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXHJcbiAgICAgICAgICAgIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XHJcblxyXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIGRvdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XHJcblxyXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVyXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcclxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xyXG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XHJcblxyXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xyXG5cclxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcclxuXHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG5cclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG5cclxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuXHJcblxyXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcclxuXHJcbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcclxuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcclxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxyXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cclxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcclxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXHJcbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cclxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XHJcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcclxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XHJcblxyXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcclxuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcclxuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcclxuXHJcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xyXG5cclxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xyXG5cclxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cykge1xyXG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy4kbmV4dEFycm93XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcclxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcclxuXHJcbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighcmVmcmVzaCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcblxyXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyXHJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxyXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcclxuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRhcmdldExlZnQsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXHJcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxyXG4gICAgICAgICAgICBjb2VmO1xyXG5cclxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XHJcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxyXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxyXG4gICAgICAgICAgICBtYXg7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcclxuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XHJcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcclxuXHJcbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcblxyXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xyXG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XHJcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcclxuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcclxuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLmluaXRBREEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcclxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcclxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcclxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xyXG4gICAgICAgICAgICB9KS5lbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcclxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxyXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xyXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xyXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xyXG5cclxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcclxuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XHJcblxyXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xyXG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgXy5pbml0VUkoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xyXG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XHJcblxyXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxyXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcclxuXHJcbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcblxyXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXHJcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxyXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcclxuXHJcbiAgICAgICAgXy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xyXG5cclxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG5cclxuICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcclxuXHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XHJcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcclxuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcclxuICAgICAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xyXG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XHJcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcclxuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XHJcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XHJcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxyXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XHJcblxyXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcclxuXHJcbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICBfLnNldEhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XHJcblxyXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XHJcblxyXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcclxuXHJcbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXHJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAuZXEoaW5kZXgpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XHJcblxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xyXG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cclxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XHJcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXHJcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XHJcblxyXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcclxuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcclxuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xyXG5cclxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xyXG5cclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcclxuXHJcbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcclxuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xyXG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xyXG5cclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXHJcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcblxyXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XHJcblxyXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XHJcblxyXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcclxuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0b3VjaGVzO1xyXG5cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcclxuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcclxuICAgICAgICBfLmRlc3Ryb3koKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxyXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxyXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICByZXQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXztcclxuICAgIH07XHJcblxyXG59KSk7XHJcblxyXG4vKipcclxuICogb3BlbiBhbmQgY2xvc2Ugc2lkZWJhcnNcclxuICovXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG9wZW5lZFNpZGViYXIgPSAwO1xyXG4gICQoJy5hcHAtb3Blbi1zaWRlYmFyJykuY2xpY2soXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChvcGVuZWRTaWRlYmFyID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgICAgICAgb3BlbmVkU2lkZWJhciA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgb3BlbmVkU2lkZWJhciA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBhZGQgYW5kIHJlbW92ZSBncmFkaWVudFxyXG4gKi9cclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBvcGVuZWRDYXJkID0gMDtcclxuICAgICQoJy5hcHAtY2FyZCcpLmZpbmQoJ2EnKS5jbGljayhcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcGVuZWRDYXJkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWRDYXJkID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIG9wZW5lZENhcmQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSk7XHJcblxyXG4vKipcclxuICog0KHQu9Cw0LnQtNC10YAg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAqL1xyXG4kKCcuYXBwLXRpdGxlcy1zbGlkZXNob3cnKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgYXNOYXZGb3I6ICcuYXBwLWdhbWUtdHlwZS1zbGlkZXNob3cnLFxyXG4gICAgc3BlZWQ6IDgwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA1NDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqINCh0LvQsNC50LTQtdGAINC60L7QvdGC0LXQvdGC0LBcclxuICovXHJcbiQoJy5hcHAtZ2FtZS10eXBlLXNsaWRlc2hvdycpLnNsaWNrKHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgZmFkZTogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICBhc05hdkZvcjogJy5hcHAtdGl0bGVzLXNsaWRlc2hvdycsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvdW50ZXIoc2VsZWN0b3Ipe1xyXG4gICAgdGhpcy5lbCA9ICQoc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5udW1iZXJzID0gdGhpcy5lbC5maW5kKCc+IGInKS50b0FycmF5KCkucmV2ZXJzZSgpO1xyXG59XHJcblxyXG5Db3VudGVyLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uKG5ld1ZhbCl7XHJcbiAgICB2YXIgcmV2ZXJzZWRBcnIsIGNsYXNzTmFtZTtcclxuICAgIC8vIHVwZGF0ZSBpbnN0YW5jZSdzIHZhbHVlXHJcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsIHx8IHRoaXMuZWwuYXR0cignZGF0YS12YWx1ZScpfDA7XHJcblxyXG4gICAgaWYoICF0aGlzLnZhbHVlICkgcmV0dXJuO1xyXG4gICAgLy8gY29udmVydCB2YWx1ZSBpbnRvIGFuIGFycmF5IG9mIG51bWJlcnNcclxuICAgIHJldmVyc2VkQXJyID0gKHRoaXMudmFsdWUrJycpLnNwbGl0KCcnKS5yZXZlcnNlKCk7XHJcbiAgICAvLyBsb29wIG9uIGVhY2ggbnVtYmVyIGVsZW1lbnQgYW5kIGNoYW5nZSBpdFxyXG4gICAgdGhpcy5udW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnZCcgKyByZXZlcnNlZEFycltpXSB8fCAwO1xyXG4gICAgICAgICAgICAvL2lmKCBpdGVtLmNsYXNzTmFtZSAhPSBjbGFzc05hbWUpXHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIH0sIGkgKyAxKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vIGNyZWF0ZSBuZXcgY291bnRlciBmb3IgdGhpcyBkZW1vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG52YXIgY291bnRlciA9IG5ldyBDb3VudGVyKCcubnVtQ291bnRlcicpO1xyXG5yYW5kb21Db3VudCgpO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ291bnQoKXtcclxuICAgIGNvdW50ZXIuY291bnQoIHJhbmRvbU51bSgxLDUwMDAwMCkgKTtcclxuICAgIHNldFRpbWVvdXQocmFuZG9tQ291bnQsNDAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bShtaW4sbWF4KXtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogaW5pdCB0b29sdGlwc1xyXG4gKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxufSk7Il0sImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
