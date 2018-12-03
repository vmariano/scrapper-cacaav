

/* ------------------------------- lib/jquery-3.2.1.js ------------------------------- */
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/* ------------------------------- lib/1jquery.cycle2.js ------------------------------- */
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).load(function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);


/* ------------------------------- lib/2jquery.cycle2.center.js ------------------------------- */
/*! center plugin for Cycle2;  version: 20140121 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    centerHorz: false,
    centerVert: false
});

$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    if ( !opts.centerHorz && !opts.centerVert )
        return;

    // throttle resize event
    var timeout, timeout2;

    $(window).on( 'resize orientationchange load', resize );

    opts.container.on( 'cycle-destroyed', destroy );

    opts.container.on( 'cycle-initialized cycle-slide-added cycle-slide-removed', function( e, opts, slideOpts, slide ) {
        resize();
    });

    adjustActive();

    function resize() {
        clearTimeout( timeout );
        timeout = setTimeout( adjustActive, 50 );
    }

    function destroy( e, opts ) {
        clearTimeout( timeout );
        clearTimeout( timeout2 );
        $( window ).off( 'resize orientationchange', resize );
    }

    function adjustAll() {
        if(opts._sentinel)
        	adjustSlide.apply( opts._sentinel );
        opts.slides.each( adjustSlide );
    }

    function adjustActive() {
        /*jshint validthis: true */
        adjustSlide.apply( opts.container.find( '.' + opts.slideActiveClass ) );
        clearTimeout( timeout2 );
        timeout2 = setTimeout( adjustAll, 50 );
    }

    function adjustSlide() {
        /*jshint validthis: true */
        var slide = $(this);
        var contW = opts.container.width();
        var contH = opts.container.height();
        var w = slide.outerWidth();
        var h = slide.outerHeight();
        if (w) {
            if (opts.centerHorz && w <= contW)
                slide.css( 'marginLeft', (contW - w) / 2 );
            if (opts.centerVert && h <= contH)
                slide.css( 'marginTop', (contH - h) / 2 );
        }
    }
});

})(jQuery);

/* ------------------------------- lib/2jquery.cycle2.swipe.min.js ------------------------------- */
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);

/* ------------------------------- lib/cookie.js ------------------------------- */
/*!
 * JavaScript Cookie v2.1.2
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api(key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/* ------------------------------- lib/fontfaceobserver.js ------------------------------- */
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function q(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function x(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;x(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);x(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,D=null;function H(){if(null===C){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}C=""!==a.style.font}return C}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",y=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){null===D&&(D=!!window.FontFace);if(D){var J=new Promise(function(a,b){function e(){(new Date).getTime()-E>=y?b():document.fonts.load(I(c,c.family),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){setTimeout(c,y)});Promise.race([K,J]).then(function(){a(c)},function(){b(c)})}else m(function(){function r(){var b;if(b=-1!=f&&
-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==t&&g==t&&h==t||f==u&&g==u&&h==u||f==v&&g==v&&h==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=y)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===
a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,r();G=setTimeout(F,50)}}var e=new q(k),n=new q(k),p=new q(k),f=-1,g=-1,h=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),G=0;d.dir="ltr";w(e,I(c,"sans-serif"));w(n,I(c,"serif"));w(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=e.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;F();z(e,function(a){f=a;r()});w(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;r()});w(n,I(c,'"'+
c.family+'",serif'));z(p,function(a){h=a;r()});w(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


/* ------------------------------- lib/jquery.ba-throttle-debounce.min.js ------------------------------- */
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/* ------------------------------- lib/jquery.dotdotdot-1.8.3.min.js ------------------------------- */
/*
 *	jQuery dotdotdot 1.8.3
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,m=g.length-1;for(o.fallbackToLetter&&0==b&&0==m&&(p="",g=h.split(p),m=g.length-1);m>=b&&(0!=b||0!=m);){var y=Math.floor((b+m)/2);if(y==w)break;w=y,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(m=w,o.fallbackToLetter&&0==b&&0==m&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,m=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var C=d&&d.closest(x).length?d.length:0;if(x.contents().length>C?c=u(x.contents().eq(-1-C),n):(c=u(x,n,!0),C||x.detach()),c&&(h=i(s(c),o),l(c,h),C&&d)){var T=d.parent();t(c).parent().append(d),t.trim(T.html())||T.remove()}}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this,i=o.contents();o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);c.width==t.width&&c.height==t.height||(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery),jQuery(document).ready(function(t){t(".dot-ellipsis").each(function(){var e=t(this).hasClass("dot-resize-update"),n=t(this).hasClass("dot-timer-update"),r=0,o=t(this).attr("class").split(/\s+/);t.each(o,function(t,e){var n=e.match(/^dot-height-(\d+)$/);null!==n&&(r=Number(n[1]))});var a=new Object;n&&(a.watch=!0),e&&(a.watch="window"),r>0&&(a.height=r),t(this).dotdotdot(a)})}),jQuery(window).on("load",function(){jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")});


/* ------------------------------- lib/jquery.lazyloadxt.custom.js ------------------------------- */
/*! Lazy Load XT v1.1.0 2016-01-12
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */

(function ($, window, document, undefined) {
    // options
    var lazyLoadXT = 'lazyLoadXT',
        dataLazied = 'lazied',
        load_error = 'load error',
        classLazyHidden = 'lazy-hidden',
        docElement = document.documentElement || document.body,
    //  force load all images in Opera Mini and some mobile browsers without scroll event or getBoundingClientRect()
        forceLoad = (window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect),
        options = {
            autoInit: true, // auto initialize in $.ready
            selector: 'img[data-src]', // selector for lazyloading elements
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            throttle: 99, // interval (ms) for changes check
            forceLoad: forceLoad, // force auto load all images

            loadEvent: 'pageshow', // check AJAX-loaded content in jQueryMobile
            updateEvent: 'load orientationchange resize scroll touchmove focus', // page-modified events
            forceEvent: 'lazyloadall', // force loading of all elements

            //onstart: null,
            oninit: {removeClass: 'lazy'}, // init handler
            onshow: {addClass: classLazyHidden}, // start loading handler
            onload: {removeClass: classLazyHidden, addClass: 'lazy-loaded'}, // load success handler
            onerror: {removeClass: classLazyHidden}, // error handler
            //oncomplete: null, // complete handler

            //scrollContainer: undefined,
            checkDuplicates: true
        },
        elementOptions = {
            srcAttr: 'data-src',
            edgeX: 0,
            edgeY: 0,
            visibleOnly: true
        },
        $window = $(window),
        $isFunction = $.isFunction,
        $extend = $.extend,
        $data = $.data || function (el, name) {
            return $(el).data(name);
        },
        elements = [],
        topLazy = 0,
    /*
     waitingMode=0 : no setTimeout
     waitingMode=1 : setTimeout, no deferred events
     waitingMode=2 : setTimeout, deferred events
     */
        waitingMode = 0;

    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]);

    /**
     * Return options.prop if obj.prop is undefined, otherwise return obj.prop
     * @param {*} obj
     * @param {*} prop
     * @returns *
     */
    function getOrDef(obj, prop) {
        return obj[prop] === undefined ? options[prop] : obj[prop];
    }

    /**
     * @returns {number}
     */
    function scrollTop() {
        var scroll = window.pageYOffset;
        return (scroll === undefined) ? docElement.scrollTop : scroll;
    }

    /**
     * Add new elements to lazy-load list:
     * $(elements).lazyLoadXT() or $(window).lazyLoadXT()
     *
     * @param {object} [overrides] override global options
     */
    $.fn[lazyLoadXT] = function (overrides) {
        overrides = overrides || {};

        var blankImage = getOrDef(overrides, 'blankImage'),
            checkDuplicates = getOrDef(overrides, 'checkDuplicates'),
            scrollContainer = getOrDef(overrides, 'scrollContainer'),
            forceShow = getOrDef(overrides, 'show'),
            elementOptionsOverrides = {},
            prop;

        // empty overrides.scrollContainer is supported by both jQuery and Zepto
        $(scrollContainer).on('scroll', queueCheckLazyElements);

        for (prop in elementOptions) {
            elementOptionsOverrides[prop] = getOrDef(overrides, prop);
        }

        return this.each(function (index, el) {
            if (el === window) {
                $(options.selector).lazyLoadXT(overrides);
            } else {
                var duplicate = checkDuplicates && $data(el, dataLazied),
                    $el = $(el).data(dataLazied, forceShow ? -1 : 1);

                // prevent duplicates
                if (duplicate) {
                    queueCheckLazyElements();
                    return;
                }

                if (blankImage && el.tagName === 'IMG' && !el.src) {
                    el.src = blankImage;
                }

                // clone elementOptionsOverrides object
                $el[lazyLoadXT] = $extend({}, elementOptionsOverrides);

                triggerEvent('init', $el);

                elements.push($el);
                queueCheckLazyElements();
            }
        });
    };


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0]);
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass);
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass);
                }
            }
        }

        $el.trigger('lazy' + event, [$el]);

        // queue next check as images may be resized after loading of actual file
        queueCheckLazyElements();
    }


    /**
     * Trigger onload/onerror handler
     * @param {Event} e
     */
    function triggerLoadOrError(e) {
        triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError));
    }


    /**
     * Load visible elements
     * @param {bool} [force] loading of all elements
     */
    function checkLazyElements(force) {
        if (!elements.length) {
            return;
        }

        force = force || options.forceLoad;

        topLazy = Infinity;

        var viewportTop = scrollTop(),
            viewportHeight = window.innerHeight || docElement.clientHeight,
            viewportWidth = window.innerWidth || docElement.clientWidth,
            i,
            length;

        for (i = 0, length = elements.length; i < length; i++) {
            var $el = elements[i],
                el = $el[0],
                objData = $el[lazyLoadXT],
                removeNode = false,
                visible = force || $data(el, dataLazied) < 0,
                topEdge;

            // remove items that are not in DOM
            if (!$.contains(docElement, el)) {
                removeNode = true;
            } else if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {

                if (!visible) {
                    var elPos = el.getBoundingClientRect(),
                        edgeX = objData.edgeX,
                        edgeY = objData.edgeY;

                    topEdge = (elPos.top + viewportTop - edgeY) - viewportHeight;

                    visible = (topEdge <= viewportTop && elPos.bottom > -edgeY &&
                        elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX);
                }

                if (visible) {
                    $el.on(load_error, triggerLoadOrError);

                    triggerEvent('show', $el);

                    var srcAttr = objData.srcAttr,
                        src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);

                    if (src) {
                        el.src = src;
                    }

                    removeNode = true;
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge;
                    }
                }
            }

            if (removeNode) {
                $data(el, dataLazied, 0);
                elements.splice(i--, 1);
                length--;
            }
        }

        if (!length) {
            triggerEvent('complete', $(docElement));
        }
    }


    /**
     * Run check of lazy elements after timeout
     */
    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle);
        } else {
            waitingMode = 0;
        }
    }


    /**
     * Queue check of lazy elements because of event e
     * @param {Event} [e]
     */
    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return;
        }

        // fast check for scroll event without new visible elements
        if (e && e.type === 'scroll' && e.currentTarget === window) {
            if (topLazy >= scrollTop()) {
                return;
            }
        }

        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0);
        }
        waitingMode = 2;
    }


    /**
     * Initialize list of hidden elements
     */
    function initLazyElements() {
        $window.lazyLoadXT();
    }


    /**
     * Loading of all elements
     */
    function forceLoadAll() {
        checkLazyElements(true);
    }


    /**
     * Initialization
     */
    $(document).ready(function () {
        triggerEvent('start', $window);

        $window
            .on(options.updateEvent, queueCheckLazyElements)
            .on(options.forceEvent, forceLoadAll);

        $(document).on(options.updateEvent, queueCheckLazyElements);

        if (options.autoInit) {
            $window.on(options.loadEvent, initLazyElements);
            initLazyElements(); // standard initialization
        }
    });

})(window.jQuery || window.Zepto || window.$, window, document);


(function ($) {
    var options = $.lazyLoadXT;

    options.selector += ',video,iframe[data-src]';
    options.videoPoster = 'data-poster';

    $(document).on('lazyshow', 'video', function (e, $el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr),
            changed = false;

        $el.attr('poster', $el.attr(options.videoPoster));
        $el.children('source,track')
            .each(function (index, el) {
                var $child = $(el),
                    src = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr);
                if (src) {
                    $child.attr('src', src);
                    changed = true;
                }
            });

        // reload video
        if (changed) {
            this.load();
        }
    });

})(window.jQuery || window.Zepto || window.$);

/*! Lazy Load XT v1.1.0 2016-01-12
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT,
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + ']';

    $(document).on('lazyshow', function (e) {
        var $this = $(e.target),
            url = $this.attr(bgAttr);
        if (!!url) {
            $this
                .css('background-image', "url('" + url + "')")
                .removeAttr(bgAttr)
                .triggerHandler('load');
        }
    });

})(window.jQuery || window.Zepto || window.$);


/* ------------------------------- lib/jsonlite.js ------------------------------- */
var jsonlite;
(function (jsonlite) {
    function parse(source) {
        var at = 0;
        var ch = ' ';
        var chp = ' ';
        var escapee = {
            "'": "'",
            '\\': '\\',
            '/': '/',
            b: '\b',
            f: '\f',
            n: '\n',
            r: '\r',
            t: '\t'
        };
        var balanced = '';
        if(source[0] != '{' && source[0] != '[')
            source = "{" + source + "}";
        var text = source;
        var result = readValue();
        skipWhitespace();
        if(ch) {
            raiseError("Syntax error");
        }
        return result;
        function raiseError(m) {
            throw "jsonlite: "+m+", at: " + at + ", text: \"" + text + "\"";
        }
        function next(c) {
            if(c && c !== ch) {
                raiseError("Expected '" + c + "' instead of '" + ch + "'");
            }
            chp = ch;
            ch = text.charAt(at);
            at += 1;
            return ch;
        }
        function readString() {
            var s = '';
            if(ch === "'") {
                while(next()) {
                    if(ch === "'") {
                        next();
                        return s;
                    }
                    if(ch === '\\') {
                        next();
                        if(ch === 'u') {
                            var uffff = 0;
                            for(var i = 0; i < 4; i += 1) {
                                var hex = parseInt(next(), 16);
                                if(!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            s += String.fromCharCode(uffff);
                        } else if(typeof escapee[ch] === 'string') {
                            s += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        s += ch;
                    }
                }
            }
            raiseError("Bad string");
        }
        function skipWhitespace() {
            while(ch && ch <= ' ') {
                next();
            }
        }
        function readWord() {
            var s = '';
            var r;
            while(r = allowedInWord()) {
                if(r == 2)
                    s = s.slice(0, -1);
                s += ch;
                next();
            }
            if(s === "true") {
                return true;
            }
            if(s === "false") {
                return false;
            }
            if(s === "null") {
                return null;
            }
            if(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(s)) {
                return parseFloat(s);
            }
            return s;
        }
        function readArray() {
            var array = [];
            if(ch === '[') {
                next('[');
                balanced += '[';
                skipWhitespace();
                if(ch === ']') {
                    next(']');
                    return array;
                }
                while(ch) {
                    array.push(readValue());
                    skipWhitespace();
                    if(ch === ']') {
                        next(']');
                        return array;
                    }
                    next(',');
                    skipWhitespace();
                }
            }
            raiseError("Bad array");
        }
        function readObject() {
            var o = {
            };
            if(ch === '{') {
                next('{');
                balanced += '{';
                skipWhitespace();
                if(ch === '}') {
                    next('}');
                    return o;
                }
                while(ch) {
                    var key = ch === "'" ? readString() : readWord();
                    if(typeof key !== 'string') {
                        raiseError('Bad object key: ' + key);
                    }
                    skipWhitespace();
                    next(':');
                    if(Object.hasOwnProperty.call(o, key)) {
                        raiseError('Duplicate key: "' + key + '"');
                    }
                    o[key] = readValue();
                    skipWhitespace();
                    if(ch === '}') {
                        next('}');
                        return o;
                    }
                    next(',');
                    skipWhitespace();
                }
            }
            raiseError("Bad object");
        }
        function readValue() {
            skipWhitespace();
            switch(ch) {
                case '{':
                    return readObject();
                case '[':
                    return readArray();
                case "'":
                    return readString();
                default:
                    return readWord();
            }
        }
        function allowedInWord() {
            switch(ch) {
                case "'":
                //case '\\':
                case '\t':
                case '\n':
                case '\r':
                case ',':
                case ':':
                    return false;
                case '[':
                case ']':
                case '{':
                case '}':
                    return chp == '\\' ? 2 : 0;
            }
            return ch >= ' ';
        }
    }
    jsonlite.parse = parse;
})(jsonlite || (jsonlite = {}));


/* ------------------------------- lib/magnificpopup-1.1.0.min.js ------------------------------- */
// Magnific Popup v1.1.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+imagezoom
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var S=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery";n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=T(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?T(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),e=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m);d.click(function(){n.prev()}),e.click(function(){n.next()}),n.container.append(d.add(e))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=S(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=S(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=S(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}}),A()});


/* ------------------------------- lib/tippy.js ------------------------------- */
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.tippy=t()})(this,function(){'use strict';function t(e){Pe.forEach(function(t){var i=t.popper,o=t.tippyInstance,n=t.settings,r=n.appendTo,s=n.hideOnClick,a=n.trigger;if(r.contains(i)){var p=!0===s||-1!==a.indexOf('focus'),d=!e||i!==e.popper;p&&d&&o.hide(i)}})}function o(t,i){var o=Element.prototype.closest||function(t){for(var i=this;i;){if(e.call(i,t))return i;i=i.parentElement}};return o.call(t,i)}function n(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function r(){var i=function(){Ae.touch=!0,Ae.iOS()&&document.body.classList.add('tippy-touch'),Ae.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',r)},r=function(){var e;return function(){var t=performance.now();20>t-e&&(Ae.touch=!1,document.removeEventListener('mousemove',r),!Ae.iOS()&&document.body.classList.remove('tippy-touch')),e=t}}();document.addEventListener('click',function(e){if(!(e.target instanceof Element))return t();var i=o(e.target,Ce.TOOLTIPPED_EL),r=o(e.target,Ce.POPPER);if(r){var s=n(Pe,function(e){return e.popper===r}),a=s.settings.interactive;if(a)return}if(i){var p=n(Pe,function(e){return e.el===i}),d=p.settings,l=d.hideOnClick,c=d.multiple,f=d.trigger;if(!c&&Ae.touch||!c&&-1!==f.indexOf('click'))return t(p);if(!0!==l||-1!==f.indexOf('click'))return}o(e.target,Ce.CONTROLLER)||!document.querySelector(Ce.POPPER)||t()}),document.addEventListener('touchstart',i),window.addEventListener('blur',function(){var t=document,i=t.activeElement;i&&i.blur&&e.call(i,Ce.TOOLTIPPED_EL)&&i.blur()}),!Ae.SUPPORTS_TOUCH&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',i)}function s(){return!s.done&&(s.done=!0,ke.appendTo=document.body,r(),!0)}function a(e){window.requestAnimationFrame(function(){setTimeout(e,0)})}function p(e){for(var t=[!1,'webkit'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function d(e,t){return Array.prototype.findIndex?e.findIndex(t):e.indexOf(n(e,t))}function l(e){var t=e.getAttribute('title');e.setAttribute('data-original-title',t||'html'),e.removeAttribute('title')}function c(e){var t=e.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(e,t){t?window.getComputedStyle(t)[p('transform')]:window.getComputedStyle(e).opacity}function m(e,t){e.forEach(function(e){e&&t(e.classList)})}function h(t,i){t.forEach(function(t){if(t){var o=e.call(t,Ce.CONTENT),n=o?xe(i/1.3):i;t.style[p('transitionDuration')]=n+'ms'}})}function u(e){return'visible'===e.style.visibility}function g(){}function b(e){return e.replace(/-.+/,'')}function y(t){var e,i,o=this,r=n(Pe,function(e){return e.el===o}),s=r.popper,a=r.settings.offset,d=b(s.getAttribute('x-placement')),l=xe(s.offsetWidth/2),c=xe(s.offsetHeight/2),f=5,m=document.documentElement.offsetWidth||document.body.offsetWidth,h=t.pageX,u=t.pageY;'top'===d?(e=h-l+a,i=u-2.25*c):'left'===d?(e=h-2*l-10,i=u-c+a):'right'===d?(e=h+c,i=u-c+a):'bottom'===d?(e=h-l+a,i=u+c/1.5):void 0;('top'===d||'bottom'===d)&&(h+f+l+a>m&&(e=m-f-2*l),0>h-f-l+a&&(e=f)),s.style[p('transform')]='translate3d('+e+'px, '+i+'px, 0)'}function v(e){return e instanceof Element?[e]:Array.isArray(e)?e:[].slice.call(document.querySelectorAll(e))}function E(e,t,i){if(!t)return i();var o=e.popper.querySelector(Ce.TOOLTIP),n=!1,r=function t(r){r.target!==o||(n=!0,o.removeEventListener('webkitTransitionEnd',t),o.removeEventListener('transitionend',t),i())};o.addEventListener('webkitTransitionEnd',r),o.addEventListener('transitionend',r),clearTimeout(e._transitionendTimeout),e._transitionendTimeout=setTimeout(function(){n||i()},t)}function O(e){return e&&'[object Function]'==={}.toString.call(e)}function w(e,t){if(1!==e.nodeType)return[];var i=window.getComputedStyle(e,null);return t?i[t]:i}function T(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function L(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var t=w(e),i=t.overflow,o=t.overflowX,n=t.overflowY;return /(auto|scroll)/.test(i+n+o)?e:L(T(e))}function S(e){var t=e&&e.offsetParent,i=t&&t.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(t.nodeName)&&'static'===w(t,'position')?S(t):t:window.document.documentElement}function x(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||S(e.firstElementChild)===e)}function A(e){return null===e.parentNode?e:A(e.parentNode)}function P(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=i?e:t,n=i?t:e,r=document.createRange();r.setStart(o,0),r.setEnd(n,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||o.contains(n))return x(s)?s:S(s);var a=A(e);return a.host?P(a.host,t):P(e,A(t).host)}function C(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',i='top'===t?'scrollTop':'scrollLeft',o=e.nodeName;if('BODY'===o||'HTML'===o){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[i]}return e[i]}function k(e,t){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=C(t,'top'),n=C(t,'left'),r=i?-1:1;return e.top+=o*r,e.bottom+=o*r,e.left+=n*r,e.right+=n*r,e}function I(e,t){var i='x'===t?'Left':'Top',o='Left'==i?'Right':'Bottom';return+e['border'+i+'Width'].split('px')[0]+ +e['border'+o+'Width'].split('px')[0]}function D(e,t,i,o){return Se(t['offset'+e],i['client'+e],i['offset'+e],_e()?i['offset'+e]+o['margin'+('Height'===e?'Top':'Left')]+o['margin'+('Height'===e?'Bottom':'Right')]:0)}function R(){var e=window.document.body,t=window.document.documentElement,i=_e()&&window.getComputedStyle(t);return{height:D('Height',e,t,i),width:D('Width',e,t,i)}}function H(e){return je({},e,{right:e.left+e.width,bottom:e.top+e.height})}function N(e){var t={};if(_e())try{t=e.getBoundingClientRect();var i=C(e,'top'),o=C(e,'left');t.top+=i,t.left+=o,t.bottom+=i,t.right+=o}catch(e){}else t=e.getBoundingClientRect();var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?R():{},s=r.width||e.clientWidth||n.right-n.left,a=r.height||e.clientHeight||n.bottom-n.top,p=e.offsetWidth-s,d=e.offsetHeight-a;if(p||d){var l=w(e);p-=I(l,'x'),d-=I(l,'y'),n.width-=p,n.height-=d}return H(n)}function M(e,t){var i=_e(),o='HTML'===t.nodeName,n=N(e),r=N(t),s=L(e),a=w(t),p=+a.borderTopWidth.split('px')[0],d=+a.borderLeftWidth.split('px')[0],l=H({top:n.top-r.top-p,left:n.left-r.left-d,width:n.width,height:n.height});if(l.marginTop=0,l.marginLeft=0,!i&&o){var c=+a.marginTop.split('px')[0],f=+a.marginLeft.split('px')[0];l.top-=p-c,l.bottom-=p-c,l.left-=d-f,l.right-=d-f,l.marginTop=c,l.marginLeft=f}return(i?t.contains(s):t===s&&'BODY'!==s.nodeName)&&(l=k(l,t)),l}function B(e){var t=window.document.documentElement,i=M(e,t),o=Se(t.clientWidth,window.innerWidth||0),n=Se(t.clientHeight,window.innerHeight||0),r=C(t),s=C(t,'left'),a={top:r-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:n};return H(a)}function W(e){var t=e.nodeName;return'BODY'===t||'HTML'===t?!1:'fixed'===w(e,'position')||W(T(e))}function U(e,t,i,o){var n={top:0,left:0},r=P(e,t);if('viewport'===o)n=B(r);else{var s;'scrollParent'===o?(s=L(T(e)),'BODY'===s.nodeName&&(s=window.document.documentElement)):'window'===o?s=window.document.documentElement:s=o;var a=M(s,r);if('HTML'===s.nodeName&&!W(r)){var p=R(),d=p.height,l=p.width;n.top+=a.top-a.marginTop,n.bottom=d+a.top,n.left+=a.left-a.marginLeft,n.right=l+a.left}else n=a}return n.left+=i,n.top+=i,n.right-=i,n.bottom-=i,n}function q(e){var t=e.width,i=e.height;return t*i}function _(e,t,i,o,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var s=U(i,o,r,n),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map(function(e){return je({key:e},a[e],{area:q(a[e])})}).sort(function(e,t){return t.area-e.area}),d=p.filter(function(e){var t=e.width,o=e.height;return t>=i.clientWidth&&o>=i.clientHeight}),l=0<d.length?d[0].key:p[0].key,c=e.split('-')[1];return l+(c?'-'+c:'')}function F(e,t,i){var o=P(t,i);return M(i,o)}function Y(e){var t=window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+o,height:e.offsetHeight+i};return n}function z(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function j(e,t,i){i=i.split('-')[0];var o=Y(e),n={width:o.width,height:o.height},r=-1!==['right','left'].indexOf(i),s=r?'top':'left',a=r?'left':'top',p=r?'height':'width',d=r?'width':'height';return n[s]=t[s]+t[p]/2-o[p]/2,n[a]=i===a?t[a]-o[d]:t[z(a)],n}function K(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function X(e,t,i){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===i});var o=K(e,function(e){return e[t]===i});return e.indexOf(o)}function G(e,t,i){var o=void 0===i?e:e.slice(0,X(e,'name',i));return o.forEach(function(e){e.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=e.function||e.fn;e.enabled&&O(i)&&(t.offsets.popper=H(t.offsets.popper),t.offsets.reference=H(t.offsets.reference),t=i(t,e))}),t}function V(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=F(this.state,this.popper,this.reference),e.placement=_(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=j(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=G(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function J(e,t){return e.some(function(e){var i=e.name,o=e.enabled;return o&&i===t})}function Z(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function $(){return this.state.isDestroyed=!0,J(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[Z('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Q(e,t,i,o){var n='BODY'===e.nodeName,r=n?window:e;r.addEventListener(t,i,{passive:!0}),n||Q(L(r.parentNode),t,i,o),o.push(r)}function ee(e,t,i,o){i.updateBound=o,window.addEventListener('resize',i.updateBound,{passive:!0});var n=L(e);return Q(n,'scroll',i.updateBound,i.scrollParents),i.scrollElement=n,i.eventsEnabled=!0,i}function te(){this.state.eventsEnabled||(this.state=ee(this.reference,this.options,this.state,this.scheduleUpdate))}function ie(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function oe(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=ie(this.reference,this.state))}function ne(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function re(e,t){Object.keys(t).forEach(function(i){var o='';-1!==['width','height','top','right','bottom','left'].indexOf(i)&&ne(t[i])&&(o='px'),e.style[i]=t[i]+o})}function se(e,t){Object.keys(t).forEach(function(i){var o=t[i];!1===o?e.removeAttribute(i):e.setAttribute(i,t[i])})}function ae(e,t,i){var o=K(e,function(e){var i=e.name;return i===t}),n=!!o&&e.some(function(e){return e.name===i&&e.enabled&&e.order<o.order});if(!n){var r='`'+t+'`';console.warn('`'+i+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function pe(e){return'end'===e?'start':'start'===e?'end':e}function de(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=Xe.indexOf(e),o=Xe.slice(i+1).concat(Xe.slice(0,i));return t?o.reverse():o}function le(e,t,i,o){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],s=n[2];if(!r)return e;if(0===s.indexOf('%')){var a;switch(s){case'%p':a=i;break;case'%':case'%r':default:a=o;}var p=H(a);return p[t]/100*r}if('vh'===s||'vw'===s){var d;return d='vh'===s?Se(document.documentElement.clientHeight,window.innerHeight||0):Se(document.documentElement.clientWidth,window.innerWidth||0),d/100*r}return r}function ce(e,t,i,o){var n=[0,0],r=-1!==['right','left'].indexOf(o),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(K(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var p=/\s*,\s*|\s+/,d=-1===a?[s]:[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1],s.slice(a+1)]];return d=d.map(function(e,o){var n=(1===o?!r:r)?'height':'width',s=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return le(e,n,t,i)})}),d.forEach(function(e,t){e.forEach(function(i,o){ne(i)&&(n[t]+=i*('-'===e[o-1]?-1:1))})}),n}function fe(e){return-(e-ke.distance)+'px'}function me(e){var t=e.el,i=e.popper,o=e.settings,n=o.position,r=o.popperOptions,s=o.offset,a=o.distance,p=o.flipDuration,d=i.querySelector(Ce.TOOLTIP),l=$e({placement:n},r||{},{modifiers:$e({},r?r.modifiers:{},{flip:$e({padding:a+5},r&&r.modifiers?r.modifiers.flip:{}),offset:$e({offset:s},r&&r.modifiers?r.modifiers.offset:{})}),onUpdate:function(){var e=d.style;e.top='',e.bottom='',e.left='',e.right='',e[b(i.getAttribute('x-placement'))]=fe(a)}});return new Ve(t,i,l)}function he(e){var t=e.el,i=e.popper,o=e.settings,n=o.appendTo,r=o.followCursor,s=o.flipDuration;if(!n.contains(i)){if(n.appendChild(i),!!e.popperInstance)e.popperInstance.update(),(!r||Ae.touch)&&e.popperInstance.enableEventListeners();else if(e.popperInstance=me(e),window.MutationObserver){var d=i.style,l=new MutationObserver(function(){d[p('transitionDuration')]='0ms',e.popperInstance.update(),a(function(){d[p('transitionDuration')]=s+'ms'})});l.observe(i,{childList:!0,subtree:!0,characterData:!0}),e._mutationObserver=l}r&&!Ae.touch&&(t.addEventListener('mousemove',y),e.popperInstance.disableEventListeners())}}function ue(e){var t=e.popper,i=e.popperInstance,o=e.settings.stickyDuration,n=function(){return t.style[p('transitionDuration')]=o+'ms'},r=function(){return t.style[p('transitionDuration')]=''};a(function e(){i&&i.scheduleUpdate(),n(),u(t)?window.requestAnimationFrame(e):r()})}function ge(e,t){var i=Ie.reduce(function(i,o){var n=e.getAttribute('data-'+o.toLowerCase())||t[o];return'false'===n&&(n=!1),'true'===n&&(n=!0),isFinite(n)&&!isNaN(parseFloat(n))&&(n=parseFloat(n)),'string'==typeof n&&'['===n.trim().charAt(0)&&(n=JSON.parse(n)),i[o]=n,i},{});return $e({},t,i)}function be(e,t,i){var o=i.position,n=i.distance,r=i.arrow,s=i.animateFill,a=i.inertia,p=i.animation,d=i.arrowSize,l=i.size,c=i.theme,f=i.html,m=i.zIndex,h=i.interactive,u=document.createElement('div');u.setAttribute('class','tippy-popper'),u.setAttribute('role','tooltip'),u.setAttribute('aria-hidden','true'),u.setAttribute('id','tippy-tooltip-'+e),u.style.zIndex=m;var g=document.createElement('div');if(g.setAttribute('class','tippy-tooltip tippy-tooltip--'+l+' leave'),g.setAttribute('data-animation',p),c.split(' ').forEach(function(e){g.classList.add(e+'-theme')}),r){var y=document.createElement('div');y.setAttribute('class','arrow-'+d),y.setAttribute('x-arrow',''),g.appendChild(y)}if(s){g.setAttribute('data-animatefill','');var v=document.createElement('div');v.setAttribute('class','leave'),v.setAttribute('x-circle',''),g.appendChild(v)}a&&g.setAttribute('data-inertia',''),h&&g.setAttribute('data-interactive','');var E=document.createElement('div');if(E.setAttribute('class','tippy-tooltip-content'),f){var O;f instanceof Element?(E.appendChild(f),O='#'+f.id||'tippy-html-template'):(E.innerHTML=document.getElementById(f.replace('#','')).innerHTML,O=f),u.classList.add('html-template'),h&&u.setAttribute('tabindex','-1'),g.setAttribute('data-template-id',O)}else E.innerHTML=t;return g.style[b(o)]=fe(n),g.appendChild(E),u.appendChild(g),u}function ye(e,t,i,o){var n=[];return'manual'===e?n:(t.addEventListener(e,i.handleTrigger),n.push({event:e,handler:i.handleTrigger}),'mouseenter'===e&&(Ae.SUPPORTS_TOUCH&&o&&(t.addEventListener('touchstart',i.handleTrigger),n.push({event:'touchstart',handler:i.handleTrigger}),t.addEventListener('touchend',i.handleMouseleave),n.push({event:'touchend',handler:i.handleMouseleave})),t.addEventListener('mouseleave',i.handleMouseleave),n.push({event:'mouseleave',handler:i.handleMouseleave})),'focus'===e&&(t.addEventListener('blur',i.handleBlur),n.push({event:'blur',handler:i.handleBlur})),n)}function ve(e,t,i){if(!t.getAttribute('x-placement'))return!0;var o=e.clientX,n=e.clientY,r=i.interactiveBorder,s=i.distance,a=t.getBoundingClientRect(),p=b(t.getAttribute('x-placement')),d=r+s,l={top:a.top-n>r,bottom:n-a.bottom>r,left:a.left-o>r,right:o-a.right>r};return'top'===p?l.top=a.top-n>d:'bottom'===p?l.bottom=n-a.bottom>d:'left'===p?l.left=a.left-o>d:'right'===p?l.right=o-a.right>d:void 0,l.top||l.bottom||l.left||l.right}function Ee(e,t,i){var n,r,s=this,a=i.position,p=i.delay,d=i.duration,l=i.interactive,c=i.interactiveBorder,f=i.distance,m=i.hideOnClick,h=i.trigger,g=i.touchHold,b=i.touchWait,y=function(){clearTimeout(n),clearTimeout(r)},v=function(){if(y(),!u(t)){var e=Array.isArray(p)?p[0]:p;p?n=setTimeout(function(){return s.show(t)},e):s.show(t)}},E=function(e){return s.callbacks.wait?s.callbacks.wait.call(t,v,e):v()},O=function(){y();var e=Array.isArray(p)?p[1]:p;p?r=setTimeout(function(){return s.hide(t)},e):s.hide(t)};return{handleTrigger:function(i){var o='mouseenter'===i.type&&Ae.SUPPORTS_TOUCH&&Ae.touch;if(!(o&&g)){var n='click'===i.type;n&&u(t)&&'persistent'!==m?O():E(i),o&&Ae.iOS()&&e.click&&e.click()}},handleMouseleave:function(n){if(!('mouseleave'===n.type&&Ae.SUPPORTS_TOUCH&&Ae.touch&&g)){if(l){var r=function n(r){var s=function(){document.body.removeEventListener('mouseleave',O),document.removeEventListener('mousemove',n),O()},a=o(r.target,Ce.TOOLTIPPED_EL),p=o(r.target,Ce.POPPER)===t,d=-1!==h.indexOf('click');return a&&a!==e?s():void(p||a===e||d||ve(r,t,i)&&s())};return document.body.addEventListener('mouseleave',O),void document.addEventListener('mousemove',r)}O()}},handleBlur:function(e){!e.relatedTarget||Ae.touch||o(e.relatedTarget,Ce.POPPER)||O()}}}function Oe(e){var t=this;return e.reduce(function(e,i){var o=Qe,n=t.settings.performance?t.settings:ge(i,t.settings);n.arrow&&(n.animateFill=!1);var r=n.html,s=n.trigger,a=n.touchHold,p=i.getAttribute('title');if(!p&&!r)return e;i.setAttribute('data-tooltipped',''),i.setAttribute('aria-describedby','tippy-tooltip-'+o),l(i);var d=be(o,p,n),c=Ee.call(t,i,d,n),f=[];return s.trim().split(' ').forEach(function(e){return f=f.concat(ye(e,i,c,a))}),e.push({id:o,el:i,popper:d,settings:n,listeners:f,tippyInstance:t}),Qe++,e},[])}function we(e,t){return new et(e,t)}var Te=Math.min,Le=Math.floor,Se=Math.max,xe=Math.round,Ae={};'undefined'!=typeof window&&(Ae.SUPPORTED='requestAnimationFrame'in window,Ae.SUPPORTS_TOUCH='ontouchstart'in window,Ae.touch=!1,Ae.dynamicInputDetection=!0,Ae.iOS=function(){return /iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream});for(var Pe=[],Ce={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-tooltip-content',CIRCLE:'[x-circle]',ARROW:'[x-arrow]',TOOLTIPPED_EL:'[data-tooltipped]',CONTROLLER:'[data-tippy-controller]'},ke={html:!1,position:'top',animation:'shift',animateFill:!0,arrow:!1,arrowSize:'regular',delay:0,trigger:'mouseenter focus',duration:350,interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,flipDuration:350,sticky:!1,stickyDuration:200,appendTo:null,zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,popperOptions:{}},Ie=Ae.SUPPORTED&&Object.keys(ke),De=Element.prototype,e=De.matches||De.matchesSelector||De.webkitMatchesSelector||De.mozMatchesSelector||De.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return-1<o},Re=['native code','[object MutationObserverConstructor]'],He=function(e){return Re.some(function(t){return-1<(e||'').toString().indexOf(t)})},Ne='undefined'!=typeof window,Me=['Edge','Trident','Firefox'],Be=0,We=0;We<Me.length;We+=1)if(Ne&&0<=navigator.userAgent.indexOf(Me[We])){Be=1;break}var i,Ue=Ne&&He(window.MutationObserver),qe=Ue?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Be))}},_e=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},Fe=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Ye=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),ze=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},je=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ke=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],Xe=Ke.slice(3),Ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},Ve=function(){function e(t,i){var o=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Fe(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=qe(this.update.bind(this)),this.options=je({},e.Defaults,n),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(je({},e.Defaults.modifiers,n.modifiers)).forEach(function(t){o.options.modifiers[t]=je({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return je({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&O(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ye(e,[{key:'update',value:function(){return V.call(this)}},{key:'destroy',value:function(){return $.call(this)}},{key:'enableEventListeners',value:function(){return te.call(this)}},{key:'disableEventListeners',value:function(){return oe.call(this)}}]),e}();Ve.Utils=('undefined'==typeof window?global:window).PopperUtils,Ve.placements=Ke,Ve.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,i=t.split('-')[0],o=t.split('-')[1];if(o){var n=e.offsets,r=n.reference,s=n.popper,a=-1!==['bottom','top'].indexOf(i),p=a?'left':'top',d=a?'width':'height',l={start:ze({},p,r[p]),end:ze({},p,r[p]+r[d]-s[d])};e.offsets.popper=je({},s,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var i,o=t.offset,n=e.placement,r=e.offsets,s=r.popper,a=r.reference,p=n.split('-')[0];return i=ne(+o)?[+o,0]:ce(o,s,a,p),'left'===p?(s.top+=i[0],s.left-=i[1]):'right'===p?(s.top+=i[0],s.left+=i[1]):'top'===p?(s.left+=i[0],s.top-=i[1]):'bottom'===p&&(s.left+=i[0],s.top+=i[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var i=t.boundariesElement||S(e.instance.popper);e.instance.reference===i&&(i=S(i));var o=U(e.instance.popper,e.instance.reference,t.padding,i);t.boundaries=o;var n=t.priority,r=e.offsets.popper,s={primary:function(e){var i=r[e];return r[e]<o[e]&&!t.escapeWithReference&&(i=Se(r[e],o[e])),ze({},e,i)},secondary:function(e){var i='right'===e?'left':'top',n=r[i];return r[e]>o[e]&&!t.escapeWithReference&&(n=Te(r[i],o[e]-('right'===e?r.width:r.height))),ze({},i,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';r=je({},r,s[t](e))}),e.offsets.popper=r,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,i=t.popper,o=t.reference,n=e.placement.split('-')[0],r=Le,s=-1!==['top','bottom'].indexOf(n),a=s?'right':'bottom',p=s?'left':'top',d=s?'width':'height';return i[a]<r(o[p])&&(e.offsets.popper[p]=r(o[p])-i[d]),i[p]>r(o[a])&&(e.offsets.popper[p]=r(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!ae(e.instance.modifiers,'arrow','keepTogether'))return e;var i=t.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var o=e.placement.split('-')[0],n=e.offsets,r=n.popper,s=n.reference,a=-1!==['left','right'].indexOf(o),p=a?'height':'width',d=a?'top':'left',l=a?'left':'top',c=a?'bottom':'right',f=Y(i)[p];s[c]-f<r[d]&&(e.offsets.popper[d]-=r[d]-(s[c]-f)),s[d]+f>r[c]&&(e.offsets.popper[d]+=s[d]+f-r[c]);var m=s[d]+s[p]/2-f/2,h=m-H(e.offsets.popper)[d];return h=Se(Te(r[p]-f,h),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[d]=xe(h),e.offsets.arrow[l]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(J(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var i=U(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split('-')[0],n=z(o),r=e.placement.split('-')[1]||'',s=[];switch(t.behavior){case Ge.FLIP:s=[o,n];break;case Ge.CLOCKWISE:s=de(o);break;case Ge.COUNTERCLOCKWISE:s=de(o,!0);break;default:s=t.behavior;}return s.forEach(function(a,p){if(o!==a||s.length===p+1)return e;o=e.placement.split('-')[0],n=z(o);var d=e.offsets.popper,l=e.offsets.reference,c=Le,f='left'===o&&c(d.right)>c(l.left)||'right'===o&&c(d.left)<c(l.right)||'top'===o&&c(d.bottom)>c(l.top)||'bottom'===o&&c(d.top)<c(l.bottom),m=c(d.left)<c(i.left),h=c(d.right)>c(i.right),u=c(d.top)<c(i.top),g=c(d.bottom)>c(i.bottom),b='left'===o&&m||'right'===o&&h||'top'===o&&u||'bottom'===o&&g,y=-1!==['top','bottom'].indexOf(o),v=!!t.flipVariations&&(y&&'start'===r&&m||y&&'end'===r&&h||!y&&'start'===r&&u||!y&&'end'===r&&g);(f||b||v)&&(e.flipped=!0,(f||b)&&(o=s[p+1]),v&&(r=pe(r)),e.placement=o+(r?'-'+r:''),e.offsets.popper=je({},e.offsets.popper,j(e.instance.popper,e.offsets.reference,e.placement)),e=G(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,i=t.split('-')[0],o=e.offsets,n=o.popper,r=o.reference,s=-1!==['left','right'].indexOf(i),a=-1===['top','left'].indexOf(i);return n[s?'left':'top']=r[t]-(a?n[s?'width':'height']:0),e.placement=z(t),e.offsets.popper=H(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!ae(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,i=K(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var i=t.x,o=t.y,n=e.offsets.popper,r=K(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,a,p=void 0===r?t.gpuAcceleration:r,d=S(e.instance.popper),l=N(d),c={position:n.position},f={left:Le(n.left),top:Le(n.top),bottom:Le(n.bottom),right:Le(n.right)},m='bottom'===i?'top':'bottom',h='right'===o?'left':'right',u=Z('transform');if(a='bottom'==m?-l.height+f.bottom:f.top,s='right'==h?-l.width+f.right:f.left,p&&u)c[u]='translate3d('+s+'px, '+a+'px, 0)',c[m]=0,c[h]=0,c.willChange='transform';else{var g='bottom'==m?-1:1,b='right'==h?-1:1;c[m]=a*g,c[h]=s*b,c.willChange=m+', '+h}var y={"x-placement":e.placement};return e.attributes=je({},y,e.attributes),e.styles=je({},c,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return re(e.instance.popper,e.styles),se(e.instance.popper,e.attributes),e.offsets.arrow&&re(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,i,o,n){var r=F(n,t,e),s=_(i.placement,r,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return t.setAttribute('x-placement',s),re(t,{position:'absolute'}),i},gpuAcceleration:void 0}}};var Je=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Ze=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),$e=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Qe=1,et=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};Je(this,e),Ae.SUPPORTED&&(s(),this.state={destroyed:!1},this.selector=t,this.settings=$e({},ke,i),this.callbacks={wait:i.wait,show:i.onShow||i.show||g,shown:i.onShown||i.shown||g,hide:i.onHide||i.hide||g,hidden:i.onHidden||i.hidden||g},this.store=Oe.call(this,v(t)),Pe.push.apply(Pe,this.store))}return Ze(e,[{key:'getPopperElement',value:function(e){try{return n(this.store,function(t){return t.el===e}).popper}catch(t){console.error('[getPopperElement]: Element passed as the argument does not exist in the instance')}}},{key:'getReferenceElement',value:function(e){try{return n(this.store,function(t){return t.popper===e}).el}catch(t){console.error('[getReferenceElement]: Popper passed as the argument does not exist in the instance')}}},{key:'getReferenceData',value:function(e){return n(this.store,function(t){return t.el===e||t.popper===e})}},{key:'show',value:function(e,t){var i=this;if(!this.state.destroyed){this.callbacks.show.call(e);var o=n(this.store,function(t){return t.popper===e}),r=e.querySelector(Ce.TOOLTIP),s=e.querySelector(Ce.CIRCLE),p=e.querySelector(Ce.CONTENT),d=o.el,c=o.settings,g=c.appendTo,b=c.sticky,y=c.interactive,v=c.followCursor,O=c.flipDuration,w=c.duration,T=c.dynamicTitle;if(T){var L=d.getAttribute('title');L&&(p.innerHTML=L,l(d))}var S=void 0===t?Array.isArray(w)?w[0]:w:t;h([e,r,s],0),he(o),e.style.visibility='visible',e.setAttribute('aria-hidden','false'),a(function(){u(e)&&((!v||Ae.touch)&&o.popperInstance.update(),h([r,s],S),(!v||Ae.touch)&&h([e],O),s&&(p.style.opacity=1),y&&d.classList.add('active'),b&&ue(o),f(r,s),m([r,s],function(e){e.contains('tippy-notransition')&&e.remove('tippy-notransition'),e.remove('leave'),e.add('enter')}),E(o,S,function(){!u(e)||o._onShownFired||(y&&e.focus(),r.classList.add('tippy-notransition'),o._onShownFired=!0,i.callbacks.shown.call(e))}))})}}},{key:'hide',value:function(e,t){var i=this;if(!this.state.destroyed){this.callbacks.hide.call(e);var o=n(this.store,function(t){return t.popper===e}),r=e.querySelector(Ce.TOOLTIP),s=e.querySelector(Ce.CIRCLE),a=e.querySelector(Ce.CONTENT),p=o.el,d=o.settings,l=d.appendTo,f=d.sticky,g=d.interactive,b=d.followCursor,v=d.html,O=d.trigger,w=d.duration,T=void 0===t?Array.isArray(w)?w[1]:w:t;o._onShownFired=!1,g&&p.classList.remove('active'),e.style.visibility='hidden',e.setAttribute('aria-hidden','true'),h([r,s,s?a:null],T),s&&(a.style.opacity=0),m([r,s],function(e){e.contains('tippy-tooltip')&&e.remove('tippy-notransition'),e.remove('enter'),e.add('leave')}),v&&-1!==O.indexOf('click')&&c(p)&&p.focus(),E(o,T,function(){u(e)||!l.contains(e)||(p.removeEventListener('mousemove',y),o.popperInstance.disableEventListeners(),l.removeChild(e),i.callbacks.hidden.call(e))})}}},{key:'update',value:function(e){if(!this.state.destroyed){var t=n(this.store,function(t){return t.popper===e}),i=e.querySelector(Ce.CONTENT),o=t.el,r=t.settings.html;return r instanceof Element?void console.warn('Aborted: update() should not be used if `html` is a DOM element'):void(i.innerHTML=r?document.getElementById(r.replace('#','')).innerHTML:o.getAttribute('title')||o.getAttribute('data-original-title'),!r&&l(o))}}},{key:'destroy',value:function(e,t){var i=this;if(!this.state.destroyed){var o=n(this.store,function(t){return t.popper===e}),r=o.el,s=o.popperInstance,a=o.listeners,p=o._mutationObserver;u(e)&&this.hide(e,0),a.forEach(function(e){return r.removeEventListener(e.event,e.handler)}),r.setAttribute('title',r.getAttribute('data-original-title')),r.removeAttribute('data-original-title'),r.removeAttribute('data-tooltipped'),r.removeAttribute('aria-describedby'),s&&s.destroy(),p&&p.disconnect(),Pe.splice(d(Pe,function(t){return t.popper===e}),1),(void 0===t||t)&&(this.store=Pe.filter(function(e){return e.tippyInstance===i}))}}},{key:'destroyAll',value:function(){var e=this;if(!this.state.destroyed){var t=this.store.length;this.store.forEach(function(i,o){var n=i.popper;e.destroy(n,o===t-1)}),this.store=null,this.state.destroyed=!0}}}]),e}();return we.Browser=Ae,we.Defaults=ke,we.disableDynamicInputDetection=function(){return Ae.dynamicInputDetection=!1},we.enableDynamicInputDetection=function(){return Ae.dynamicInputDetection=!0},we});


/* ------------------------------- plugins/jquery.animatecss.js ------------------------------- */
(function($){
'use strict';
	function AnimateCSS(element, settings){
		this.element = element;
		this.settings = settings;
		this.transitionEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		
		this._cancelCompleteCB = $.noop;
		this._nextInstance;
		this.hasStarted = false;
		this.hasFinished = false;
		this.skip = false;
		this.setOptions(this.settings);
	}
	AnimateCSS.prototype.setOptions = function(settings){
		this.settings = $.extend(this.settings, settings);
		if(settings.effect || settings.easing || settings.infinite) {
			this._cssClass = this.settings.effect + ' animated';
			if(this.settings.easing)
				this._cssClass += ' ' + this.settings.easing;
			if (this.settings.infinite === true)
				this._cssClass += ' infinite';
		}
	}
	AnimateCSS.prototype.init = function(){
		return this.animate();
	}
	AnimateCSS.prototype.animate = function(){
		var that = this;
		this.hasStarted = true;
		if(this.skip)
			return this.next();
		return setTimeout(function() {
			that.setDuration();
			that.unhide();
			that.addClass();
			return that.complete();
		}, this.settings.delay);
	}
	AnimateCSS.prototype.queueInstance = function(instance){
		var curr = this;
		var last = curr;
		while(curr = curr._nextInstance){
			last = curr;
		}
		last._nextInstance = instance;
	}
	AnimateCSS.prototype.addClass = function(){
		this.element.removeClass(this.element.data('animatecss_prevClass'));
		this.element[0].offsetWidth;
		this.element.data('animatecss_prevClass', this._cssClass);
		return this.element.addClass( this._cssClass );
	}
	AnimateCSS.prototype.unhide = function(){
		if (this.element.css('visibility') === 'hidden') {
			this.element.css('visibility', 'visible');
		}
		if (this.element.is(':hidden')) {
			return this.element.show();
		}
	}
	AnimateCSS.prototype.setDuration = function(){
		return this.element.css({
			'-webkit-animation-duration': this.settings.duration + 'ms',
			'-moz-animation-duration': this.settings.duration + 'ms',
			'-o-animation-duration': this.settings.duration + 'ms',
			'animation-duration': this.settings.duration + 'ms'
		});
	}
	AnimateCSS.prototype.callback = function(){
		if (this.settings.infinite === false) {
			//this.removeClass();
		}
		this.settings.onComplete.call(this);
		this.finish();
	}
	AnimateCSS.prototype.complete = function(){
		var that = this;
		var cb = function() {
			return that.callback();
		};
		this._cancelCompleteCB = function(){ that.element.off(that.transitionEnd, cb) };
		this.element.one(this.transitionEnd, cb);
	}
	AnimateCSS.prototype.cancel = function(){
		this._cancelCompleteCB();
		this.element.removeClass(this.element.data('animatecss_prevClass'));
		this._nextInstance = null;
		this.finish();
	}
	AnimateCSS.prototype.finish = function(){
		this.settings.onFinished.call(this);
		this.next();
		this.destroy();
	}
	AnimateCSS.prototype.next = function(){
		this.hasFinished = true;
		if(this._nextInstance){
			this.element.data('animatecss_instance', this._nextInstance);
			this._nextInstance.init();
		} else {
			this.element.removeData('animatecss_instance');
		}
	}
	AnimateCSS.prototype.destroy = function(){
		this._cancelCompleteCB();
		this._nextInstance = null;
	}


    $.fn.animateCSS = function(options) {

		var instance = $(this).data('animatecss_instance');

		if(options == 'cancel'){
			if(instance){
				instance.cancel();
			}
			return;				
		}

		var settings = {
			effect: null,
			easing: null,
			delay: 0,
			infinite: false,
			onFinished: $.noop,
			onComplete: $.noop,
			duration: 1000,
			debug: false
		};
		settings = $.extend(settings, options);

		var prevInstance = instance;
		instance = new AnimateCSS($(this), settings);
		if(prevInstance && !prevInstance.hasFinished){
			prevInstance.queueInstance(instance);
		} else {
			$(this).data('animatecss_instance', instance);
			instance.init();
		}
		return instance;

    }
})(jQuery);

/* ------------------------------- plugins/jquery.cycle2.carousel.custom.js ------------------------------- */
/*! carousel transition plugin for Cycle2;  version: 20130528 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    carouselHops: 1
});

$( document ).on('cycle-bootstrap', function( e, opts, API ) {
    if ( opts.fx !== 'carousel' )
        return;

    API.getSlideIndex = function( el ) {
        var slides = this.opts()._carouselWrap.children();
        var i = slides.index( el );
        return i % this.opts().slideCount;
    };

    // override default 'next' function
    API.next = function() {
        if ( opts.busy && ! opts.manualTrump )
            return;
        var count = opts.reverse ? -1 : 1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) > opts.slideCount - opts.carouselVisible )
            return;

        opts.API.advanceSlide( count * opts.carouselHops );
        opts.API.trigger('cycle-next', [ opts ]).log('cycle-next');
    };

    API.prev = function() {
        if ( opts.busy && ! opts.manualTrump )
            return;
        var count = opts.reverse ? 1 : -1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) < 0 )
            return;

        opts.API.advanceSlide( count * opts.carouselHops );
        opts.API.trigger('cycle-prev', [ opts ]).log('cycle-prev');
    };


    API.calcFirstSlide = function() {
        var opts = this.opts();
        var firstSlideIndex;
        firstSlideIndex = parseInt( opts.startingSlide || 0, 10 );
        if (firstSlideIndex >= opts.slides.length || firstSlideIndex < 0)
            firstSlideIndex = 0;

        opts.currSlide = firstSlideIndex;
        var count = opts.carouselHops * (opts.reverse ? -1 : 1);
        opts.nextSlide = _calcNextSlide( firstSlideIndex, count );
    };
    
    API.calcNextSlide = function(){
        opts.currSlide = opts.nextSlide;
        var count = opts.carouselHops * (opts.reverse ? -1 : 1);
        opts.nextSlide = _calcNextSlide( opts.currSlide, count );
    }

    API.advanceSlide = function( val ) {
        var opts = this.opts();
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.nextSlide = _calcNextSlide( opts.currSlide, val );

        opts.API.prepareTx( true,  val >= 0 );
        return false;
    };
    
    // Helper for the previous 3 methods
    function _calcNextSlide(start, count){
        if(opts.allowWrap)
            return _modulo( start + count, opts.slideCount );
        else
            return _between( start + count, 0, opts.slideCount - opts.carouselVisible );
    }

    function _modulo(m,n) {
        return ((m%n)+n)%n;
    }

    function _between(value, min, max){
        return Math.max(Math.min(value, max), min);
    }
});


$.fn.cycle.transitions.carousel = {
    // transition API impl
    preInit: function( opts ) {
        opts.hideNonActive = false;
        
        opts.container.on('cycle-destroyed', $.proxy(this.onDestroy, opts.API));
        // override default API implementation
        opts.API.stopTransition = this.stopTransition;

        // issue #10
        for (var i=0; i < opts.startingSlide; i++) {
            opts.container.append( opts.slides[0] );
        }        
    },

    // transition API impl
    postInit: function( opts ) {
        var i, j, slide, pagerCutoffIndex, wrap;
        var vert = opts.carouselVertical;
        if (opts.carouselVisible && opts.carouselVisible > opts.slideCount)
            opts.carouselVisible = opts.slideCount - 1;
        var visCount = opts.carouselVisible || opts.slides.length;
        var slideCSS = { display: vert ? 'block' : 'inline-block', position: 'static' };

        // required styles
        opts.container.css({ position: 'relative', overflow: 'hidden' });
        opts.slides.css( slideCSS );

        opts._currSlide = opts.currSlide;

        // wrap slides in a div; this div is what is animated
        wrap = $('<div class="cycle-carousel-wrap"></div>')
            .prependTo( opts.container )
            .css({ margin: 0, padding: 0, top: 0, left: 0, position: 'absolute' })
            .append( opts.slides );

        opts._carouselWrap = wrap;

        if ( !vert )
            wrap.css('white-space', 'nowrap');

        if ( opts.allowWrap !== false ) {
            // prepend and append extra slides so we don't see any empty space when we
            // near the end of the carousel.  for fluid containers, add even more clones
            // so there is plenty to fill the screen
            // @todo: optimzie this based on slide sizes

            for ( j=0; j < (opts.carouselVisible === undefined ? 2 : 1); j++ ) {
                for ( i=0; i < opts.slideCount; i++ ) {
                    wrap.append( opts.slides[i].cloneNode(true) );
                }
                i = opts.slideCount;
                while ( i-- ) { // #160, #209
                    wrap.prepend( opts.slides[i].cloneNode(true) );
                }
            }

            wrap.find('.cycle-slide-active').removeClass('cycle-slide-active');
            opts.slides.eq(opts.startingSlide).addClass('cycle-slide-active');
        }

        if ( opts.pager && opts.allowWrap === false ) {
            // hide "extra" pagers
            pagerCutoffIndex = opts.slideCount - visCount;
            $( opts.pager ).children().filter( ':gt('+pagerCutoffIndex+')' ).hide();
        }

        if( opts.carouselVisible )
            opts.carouselHops = Math.min(opts.carouselHops || 1, opts.slideCount - opts.carouselVisible + 1);
        else
            opts.carouselHops = Math.min(opts.carouselHops || 1, opts.slideCount - 1);

        opts._nextBoundry = opts.slideCount - opts.carouselVisible;

        this.prepareDimensions( opts );
    },

    prepareDimensions: function( opts ) {
        var dim, offset, pagerCutoffIndex, tmp, j;
        var vert = opts.carouselVertical;
        var visCount = opts.carouselVisible || opts.slides.length;

        if ( opts.carouselFluid && opts.carouselVisible ) {
            if ( ! opts._carouselResizeThrottle ) {
            // fluid container AND fluid slides; slides need to be resized to fit container
                this.fluidSlides( opts );
            }
        }
        else if ( opts.carouselVisible && opts.carouselSlideDimension ) {
            dim = visCount * opts.carouselSlideDimension;
            opts.container[ vert ? 'height' : 'width' ]( dim );
        }
        else if ( opts.carouselVisible ) {
            dim = visCount * $(opts.slides[0])[vert ? 'outerHeight' : 'outerWidth'](true);
            opts.container[ vert ? 'height' : 'width' ]( dim );
        }
        // else {
        //     // fluid; don't size the container
        // }

        offset = ( opts.carouselOffset || 0 );
        if ( opts.allowWrap !== false ) {
            if ( opts.carouselSlideDimension ) {
                offset -= ( (opts.slideCount + opts.currSlide) * opts.carouselSlideDimension );
            }
            else {
                // calculate offset based on actual slide dimensions
                tmp = opts._carouselWrap.children();
                for (j=0; j < (opts.slideCount + opts.currSlide); j++) {
                    offset -= $(tmp[j])[vert?'outerHeight':'outerWidth'](true);
                }
            }
        }

        opts._carouselWrap.css( vert ? 'top' : 'left', offset );
    },

    fluidSlides: function( opts ) {
        var timeout;
        var slide = opts.slides.eq(0);
        var adjustment = slide.outerWidth(true) - slide.width();
        var prepareDimensions = this.prepareDimensions;

        // throttle resize event
        $(window).on( 'resize', resizeThrottle);

        opts._carouselResizeThrottle = resizeThrottle;
        onResize();

        function resizeThrottle() {
            clearTimeout( timeout );
            timeout = setTimeout( onResize, 20 );
        }

        function onResize() {
            opts._carouselWrap.stop( false, true );
            var slideWidth = opts.container.width() / opts.carouselVisible;
            slideWidth = Math.ceil( slideWidth - adjustment );
            opts._carouselWrap.children().width( slideWidth );
            if ( opts._sentinel )
                opts._sentinel.width( slideWidth );
            prepareDimensions( opts );
        }
    },

    // transition API impl
    transition: function( opts, curr, next, fwd, callback ) {
        var moveBy, props = {};
        var hops = opts.nextSlide - opts.currSlide;
        var vert = opts.carouselVertical;
        var speed = opts.speed;

        // handle all the edge cases for wrapping & non-wrapping
        if ( opts.allowWrap === false ) {
            fwd = hops > 0;
            var currSlide = opts._currSlide;
            var maxCurr = opts.slideCount - opts.carouselVisible;
            if ( hops > 0 && opts.nextSlide > maxCurr && currSlide == maxCurr ) {
                hops = 0;
            }
            else if ( hops > 0 && opts.nextSlide > maxCurr ) {
                hops = opts.nextSlide - currSlide - (opts.nextSlide - maxCurr);
            }
            else if ( hops < 0 && opts.currSlide > maxCurr && opts.nextSlide > maxCurr ) {
                hops = 0;
            }
            else if ( hops < 0 && opts.currSlide > maxCurr ) {
                hops += opts.currSlide - maxCurr;
            }
            else 
                currSlide = opts.currSlide;

            moveBy = this.getScroll( opts, vert, currSlide, hops );
            opts.API.opts()._currSlide = opts.nextSlide > maxCurr ? maxCurr : opts.nextSlide;
        }
        else {
            if ( fwd && opts.nextSlide < opts.currSlide ) {
                // wrap around on the right
                moveBy = this.getScroll( opts, vert, opts.currSlide, opts.slideCount-opts.currSlide );
                moveBy += this.getScroll( opts, vert, 0, opts.nextSlide );
                callback = this.genCallback( opts, fwd, vert, callback );
            }
            else if ( !fwd && opts.nextSlide > opts.currSlide ) {
                // wrap around on the left
                moveBy = this.getScroll( opts, vert, opts.nextSlide, opts.slideCount-opts.nextSlide );
                moveBy += this.getScroll( opts, vert, 0, opts.currSlide );
                callback = this.genCallback( opts, fwd, vert, callback );
            }
            else {
                moveBy = this.getScroll( opts, vert, opts.currSlide, hops );
            }
        }

        props[ vert ? 'top' : 'left' ] = fwd ? ( "-=" + moveBy ) : ( "+=" + moveBy );

        // throttleSpeed means to scroll slides at a constant rate, rather than
        // a constant speed
        if ( opts.throttleSpeed )
            speed = (moveBy / $(opts.slides[0])[vert ? 'height' : 'width']() ) * opts.speed;

        opts._carouselWrap.animate( props, speed, opts.easing, callback );
    },

    getDim: function( opts, index, vert ) {
        var slide = $( opts.slides[index] );
        return slide[ vert ? 'outerHeight' : 'outerWidth'](true);
    },

    getScroll: function( opts, vert, currSlide, hops ) {
        var i, moveBy = 0;

        if (hops > 0) {
            for (i=currSlide; i < currSlide+hops; i++)
                moveBy += this.getDim( opts, i, vert);
        }
        else {
            for (i=currSlide; i > currSlide+hops; i--)
                moveBy += this.getDim( opts, i, vert);
        }
        return moveBy;
    },

    genCallback: function( opts, fwd, vert, callback ) {
        // returns callback fn that resets the left/top wrap position to the "real" slides
        return function() {
            var pos = $(opts.slides[opts.nextSlide]).position();
            var offset = 0 - pos[vert?'top':'left'] + (opts.carouselOffset || 0);
            opts._carouselWrap.css( opts.carouselVertical ? 'top' : 'left', offset );
            callback();
        };
    },

    // core API override
    stopTransition: function() {
        var opts = this.opts();
        opts.slides.stop( false, true );
        opts._carouselWrap.stop( false, true );
    },

    // core API supplement
    onDestroy: function( e ) {
        var opts = this.opts();
        if ( opts._carouselResizeThrottle )
            $( window ).off( 'resize', opts._carouselResizeThrottle );
        opts.slides.prependTo( opts.container );
        opts._carouselWrap.remove();
    }
};

})(jQuery);


/* ------------------------------- plugins/jquery.cycle2.carousel-glide.js ------------------------------- */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    carouselGlide: false,
    carouselGlideThreshold: 8,
});

$(document).on( 'cycle-initialized', function(e, opts) {
    if ( !opts.carouselGlide )
        return;

    var vert = opts.carouselVertical;

    opts.container.on( 'touchstart', function(e) {

        if ( opts.busy )
            return;

        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;

        opts.busy = true;

        var data = e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e;
        var startCoords = vert ? data.pageY : data.pageX;

        var left = opts._carouselWrap.position()[vert ? 'top' : 'left'];

        var containerW = opts.container[vert ? 'height' : 'width']();
        var wrapperW = opts._carouselWrap[vert ? 'height' : 'width']();
        var maxDelta = -left;
        var minDelta = -(wrapperW - containerW + left);

        function _moveHandler(e){

            var data = e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e;
            var coords = vert ? data.pageY : data.pageX;

            var delta = coords - startCoords;

            // "Resistance" when reaching beginning or end
            if(opts.allowWrap === false){
                if( delta > maxDelta) delta = maxDelta + (delta-maxDelta) / 5;
                else if( delta < minDelta) delta = minDelta + (delta-minDelta) / 5;
            }

            var newPos = left + delta;

            opts._carouselWrap.css(vert ? 'top' : 'left', newPos);

        }
        _moveHandler(e);

        opts.container.on( 'touchmove', _moveHandler);

        var maxSlide = opts.slideCount - opts.carouselVisible;

        opts.container.one( 'touchend', function(e) {
            opts.container.unbind( 'touchmove', _moveHandler );

            var scroll = opts._carouselWrap.position()[vert ? 'top' : 'left'] * -1;
            var bestChild;
            var bestSlide;
            var bestDist = Number.POSITIVE_INFINITY;

            var children = opts._carouselWrap.children();
            if(!opts.allowWrap)
                children = children.filter(":lt(" + ( maxSlide + 1 ) + ")");

            children.each(function(slideIndex){
                var slideNum = slideIndex % opts.slideCount;
                var dim = $.fn.cycle.transitions.carousel.getDim(opts, slideNum, vert);
                var left = $(this).position()[vert ? 'top' : 'left'];

                var dist = Math.abs(scroll - left);
                if(opts.currSlide == slideNum)
                    dist *= opts.carouselGlideThreshold;
                if( dist < bestDist){
                    bestChild = slideIndex;
                    bestSlide = slideNum;
                    bestDist = dist;
                }
            });

            opts.currSlide = bestSlide;
            opts.nextSlide = bestSlide + 1;

            if(!opts.allowWrap && opts.nextSlide > maxSlide)
                opts.nextSlide = 0;

            var slideOpts = opts.API.getSlideOpts( opts.currSlide );
            var speed = slideOpts.manualSpeed || slideOpts.speed;

            var props = {};
            props[vert ? 'top' : 'left'] = $(children[bestChild]).position()[vert ? 'top' : 'left'] * - 1;

            var after = function(){
                opts.API.queueTransition( slideOpts );
                opts.API.updateView( true );
                opts.busy = false;
            }

            if(opts.allowWrap){
                slideOpts.nextSlide = opts.currSlide; // Because of issue with genCallback
                opts._carouselWrap.animate(props, speed,
                    $.fn.cycle.transitions.carousel.genCallback( slideOpts, null, vert, after)
                );
            } else {
                opts._carouselWrap.animate(props, speed, after());
            }


        });

    });

});

})(jQuery);


/* ------------------------------- plugins/jquery.cycle2.lookahead.custom.js ------------------------------- */
/*! Cycle2 lookahead plugin; Copyright (c) M.Alsup, 2013; version: 20130317 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    lookahead: false
});

$(document).on( 'cycle-initialized', function(e, opts) {
    if(!opts.lookahead) return;

    var key = 'cycle-look-ahead';

    opts.API.lookahead = function(opts, index){
        var slide = $( opts.slides[ index ] );
        if ( slide.length && ! slide.data( key ) ) {
            slide.data( key, true );
            // handle both cases: 1) slide is an image, 2) slide contains one or more images
            var images = slide.is( 'img[data-src]' ) ? slide : slide.find( 'img[data-src]' );
            slide.removeClass("cycle-defer-load");
            var loading = [];
            images.each(function() {
                var img = $(this);
                var deferred = $.Deferred();
                loading.push(deferred);
                img.on('load error', function(){
                    deferred.resolve();
                });
                img.attr( 'src', img.attr('data-src') );
                img.removeAttr( 'data-src' );
            });
            slide.data( key + '-loading', loading);
        }
    }

    opts.API.lookahead(opts, opts.startingSlide);
    opts.API.lookahead(opts, opts.nextSlide);

    var index = opts.startingSlide;
    _updateLoadingStatus(opts, opts.API.getSlideOpts(index), opts.slides[index]);

    opts.container.on( 'cycle-before.lookahead', function( e, opts ) {
        opts.API.lookahead(opts, opts.nextSlide);
    });
    opts.container.on( 'cycle-update-view-after.lookahead', function( e, opts ) {
        opts.API.lookahead(opts, opts.nextSlide);
    });
    opts.container.on( 'cycle-update-view-before.lookahead', function( e, opts, slideOpts, slide ) {
        _updateLoadingStatus(opts, slideOpts, slide);
    });

    function _updateLoadingStatus(opts, slideOpts, slide){
        opts.container.removeClass('cycle-loading');
        var loading = $(slide).data(key + '-loading');
        if(!loading) return;

        opts.container.addClass('cycle-loading');
        $.when.apply($, loading).then(function(){
            $(slide).removeData(key + '-loading');
            if(opts.currSlide == slideOpts.currSlide)
                opts.container.removeClass('cycle-loading');
        });
    }
});

$(document).on( 'cycle-destroyed', function( e, opts ) {
    if(!opts.lookahead) return;
    opts.container.off( 'cycle-before.lookahead' );
    opts.container.off( 'cycle-update-view-after.lookahead' );
    opts.container.off( 'cycle-update-view-before.lookahead' );
});
})(jQuery);


/* ------------------------------- plugins/widget.js ------------------------------- */
(function($){

	var uuid = 0;
	$.SimpleWidget = function(){};
	$.SimpleWidget.prototype = {
		_dataAttr: null,
		_defaults: {},
		_htmlOptions: [],
		_prepare: $.noop,
		_create: $.noop,
		_initialize: $.noop,
		_destroy: $.noop,
		_createWidget: function(){
			this.eventNamespace = this.widgetName;
			this.uuid = uuid;
			uuid++;
			this.eventInstanceNamespace = '.' + this.widgetName + this.uuid;
			this._bindings = $();

			this._create();
		},
		destroy: function(){
			this._destroy();
			this.trigger('_destroy');

			$(this).off(this.eventInstanceNamespace);
			this._bindings.off(this.eventInstanceNamespace);
			this._bindings = null;

			this.el.removeData( 'instance_'+this.widgetName );
		},
		_on: function(el, eventName, handler){
			el.on(eventName+'.'+this.eventInstanceNamespace, handler);
			this._bindings = this._bindings.add(el);
		},
		_off: function(el, eventName, handler){
			el.off(eventName+'.'+this.eventInstanceNamespace, handler);
			this._bindings = this._bindings.not(el);
		},
		_one: function(el, eventName, handler){
			var that = this;
			el.one(eventName+'.'+this.eventInstanceNamespace, function(){
				that._bindings = that._bindings.not(el);
				handler.apply(this, arguments);
			});
			this._bindings = this._bindings.add(el);
		},
		trigger: function(eventName){
			params = $.makeArray(arguments);
			params.shift();
			params.unshift(this);
			$(this).trigger(this.eventNamespace+':'+eventName, params);
		},
		on: function(eventName, handler){
			$(this).on(this.eventNamespace+':'+eventName+'.'+this.eventInstanceNamespace, handler);
		},
		off: function(eventName, handler){
			$(this).off(this.eventNamespace+':'+eventName+'.'+this.eventInstanceNamespace, handler);
		},
		one: function(eventName, handler){
			$(this).one(this.eventNamespace+':'+eventName+'.'+this.eventInstanceNamespace, handler);
		},
		setOptions: $.noop,
		_getTheme: function() {
			return this._class._getTheme(this.el);
		}
	};
	$.SimpleWidget._getTheme = function($src) {
		var themes = [];
		$src.closest("[class^='theme-'], [class*=' theme-']").each(function(){
			var r = /(^| )(theme-\S+)/g;
			while(m = r.exec($(this).attr('class'))){
				themes.push(m[2]);
			}
		});
		return themes.join(' ');
	}

	$.simpleWidget = function( widget_name, widget, parent ) {

		if(!parent)
			parent = $.SimpleWidget;

		var proxiedPrototype = {};
		$.each( widget, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = ( function() {
				function _super() {
					return parent.prototype[ prop ].apply( this, arguments );
				}

				function _superApply( args ) {
					return parent.prototype[ prop ].apply( this, args );
				}

				return function() {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			} )();
		});
		proxiedPrototype._dataAttr = proxiedPrototype._dataAttr || uncamelize(widget_name, '-');

		var Widget = function(){};
		Widget.prototype = new parent();
		Widget.prototype.widgetName = widget_name;
		Widget.prototype._parent = parent;
		Widget.prototype._class = Widget;
		$.extend(Widget, $.SimpleWidget);
		$.extend(Widget.prototype, proxiedPrototype);

		// Create selector.
		$.expr[':'][ widget_name ] = function( elem ) {
			return !!$.data( elem, widget_name );
		};

		// Create plugin method.
		$.fn[ widget_name ] = function( options ) {
			var returnValue = this;

			// Call the appropriate method in the context of each passed element's
			// instance.
			if ( typeof options === 'string' ){
				this.each(function(){
					var elem = $(this),
						instance = elem.data( 'instance_'+widget_name );

					var args = Array.prototype.slice.call( arguments, 1 );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if(!instance)
						throw "cannot call methods on " + widget_name + " prior to initialization; " +"attempted to call method '" + options + "'";

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" )
						throw "no such method '" + options + "' for " + widget_name + " widget instance";

					returnValue = instance[ options ].apply( instance, args );

					if ( returnValue !== instance && returnValue !== undefined ) {
						// If method returned a non-undefined value, break out of the each.
						return false;
					}
				});
			} else {
				this.each(function(){
					var elem = $(this),
						instance = elem.data( 'instance_'+widget_name );

					// If widget has no data, initialize instance data.
					if(instance){
						$.extend(instance.options, options || {});
						instance.setOptions(options || {});
						instance._initialize();
					} else {
						var instance = new Widget();
						instance.el = elem;

						instance.options = mergeOptions(instance, options);
						instance._prepare();
						instance._createWidget();
						instance._initialize();
						elem.data( 'instance_'+widget_name, instance);
					}

				});
			}

			return returnValue;
		};

		$.fn[ widget_name ].defaults = proxiedPrototype._defaults;
		$.fn[ widget_name ].dataAttr = proxiedPrototype._dataAttr;
		$.fn[ widget_name ].parseOptions = parseOptions;

		function parseOptions(string){
			return jsonlite.parse(string);
		}
		function mergeOptions(instance, options){
			var _dataAttr = instance._dataAttr;

			// Inline Options
			var inlineOptsString = instance.el.data(_dataAttr) || "";
			var inlineOpts = {};
			if(inlineOptsString && inlineOptsString.indexOf(':') == -1){
				var keys = Object.keys($.fn[ widget_name ].defaults);
				inlineOpts[keys[0]] = inlineOptsString;
			} else {
				inlineOpts = parseOptions(inlineOptsString);
			}

			// data-* options
			var dataOpts = {};
			$.each($.fn[ widget_name ].defaults, function(key, val){
				var attr = _dataAttr+'-'+uncamelize(key, '-');
				var value = instance.el.data(attr);
				if(!value) return;
				dataOpts[key] = value;
			});

			// html options
			var htmlOpts = {};
			$.each(instance._htmlOptions, function(i, key){
				if(key in inlineOpts || key in dataOpts) return;
				var find = '.'+_dataAttr+'-'+uncamelize(key, '-');
				var until = '[data-'+_dataAttr+']';
				var value = instance.el.nextUntil(until, find);
				if(!value.length) return;
				if(value.prop('nodeName') == 'SCRIPT')
					value = value.text().trim();
				htmlOpts[key] = value;
			});

			options = $.extend( true, {}, $.fn[ widget_name ].defaults, htmlOpts, inlineOpts, dataOpts, options);

			// jquery / selector options
			$.each(instance._htmlOptions, function(i, key){
				if(!options[key]) return;
				if(options[key].constructor == String && options[key][0] != '<'){
					options[key] = $("<div>").html(options[key]);
				} else if(!(options[key] instanceof jQuery)) {
					options[key] = $(options[key]);
				}
			});
/*			$.each(instance._elementOptions, function(i, key){
				if(!(options[key] instanceof jQuery)) {
					options[key] = $(options[key]);
				}
			});*/

			return options;
		}

	};

	function uncamelize(text, separator) {

	  // Assume separator is _ if no one has been provided.
	  if(typeof(separator) == "undefined") {
	    separator = "_";
	  }

	  // Replace all capital letters by separator followed by lowercase one
	  var text = text.replace(/[A-Z]/g, function (letter) {
	    return separator + letter.toLowerCase();
	  });

	  // Remove first separator (to avoid _hello_world name)
	  return text.replace("/^" + separator + "/", '');

	}
})(jQuery);


/* ------------------------------- globals/magnificpopup.js ------------------------------- */
$.extend(true, $.magnificPopup.defaults, {
	tClose: 'Cerrar (Esc)',
	tLoading: 'Cargando...',
	gallery: {
		tPrev: 'Anterior', // Alt text on left arrow
		tNext: 'Siguiente', // Alt text on right arrow
		tCounter: '%curr% de %total%' // Markup for "1 of 7" counter
	},
	image: {
		tError: '<a href="%url%">No se ha podido cargar la imagen</a>.'
	},
	ajax: {
		tError: '<a href="%url%">No se ha podido cargar el contenido</a>.'
	}
});


/* ------------------------------- globals/utils.js ------------------------------- */
/* ----------------------- TOUCH SUPPORT ------------------------------- */
if ("ontouchstart" in document.documentElement) {
	document.documentElement.classList.add("touch");
}


/* ----------------------- JS SUPPORT ------------------------------- */
document.documentElement.classList.add("js");
document.documentElement.classList.remove("nojs");


/* ----------------------- IS TABBING ------------------------------- */
document.documentElement.classList.remove('is-tabbing');

function handleFirstTab(e) {
    if (e.keyCode === 9) { // TAB
        document.documentElement.classList.add('is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

/* ------------------------------- components/ajaxform.js ------------------------------- */
(function($){
	$.fn.ajaxForm = function(options) {

		options = options || {};
		var $that = $(this);
		var $container = $that.closest(options.selector);
		$container.addClass('BlockLoading');
		$that.on('submit', function(e){
			var method = $(this).attr('method') || 'GET';
			var action = $(this).attr('action') || options.url;
			var enctype = $(this).attr('enctype');
			var formData = new FormData(this);
			var $button = $("[type='submit']", this).first();
			formData.append($button.attr('name'), $button.attr('value'));
			$container.addClass('isActive');

			$.ajax({
				url: action,
				data: formData,
				method: method,
				contentType: false,
				processData: false,
				complete: function(response){
					var $newContent = $(response.responseText).find(options.selector);
					$container.replaceWith($newContent);
					$.runJS.newContent($newContent);
					$newContent.find('form').ajaxForm(options);
				}
			});
			e.preventDefault();
		});
	}
})(jQuery);


/* ------------------------------- components/back-to-top.js ------------------------------- */
(function($){
	$.backToTop = function() {

			var $container = $('body');
			var $button = $("<button class='BackToTop'></button>");
			$container.append($button);

			var watch = function(){
				if($(window).scrollTop() > $(window).height() / 2){
					$button.addClass('BackToTop--visible');
				} else {
					$button.removeClass('BackToTop--visible');
				}
			}
			$(window).on('scroll', $.throttle(500, watch));

			$button.on('click', function(e){
				e.preventDefault();
				$.scrollTo({position: 0, speed: 300});
			});
	}

})(jQuery);


/* ------------------------------- components/carousel.js ------------------------------- */
(function($){

$.simpleWidget('carousel', {
	_defaults: {
		arrows:     true,
		wrap:       true,
		speed:      500,
		timeout:    0,
		fit:        true,
		autoDetect: true,
		pager:      false,
		hops:       .5,
		vertical: false,
	},
	_prepare: function(){
		this.options.manualSpeed = this.options.speed * .75;
		if(this.options.pager === true || this.options.pager == 1) this.options.pager = 'center';
		this.options.hops = Math.max(.01, Math.min(1, this.options.hops));
	},
	_create: function(){
		
		var that = this;
		this._outerSizeProp = this.options.vertical ? 'outerHeight' : 'outerWidth';
		this._sizeProp = this.options.vertical ? 'height' : 'width';
		this._offsetSizeProp = this.options.vertical ? 'offsetHeight' : 'offsetWidth';
		this._offsetStartProp = this.options.vertical ? 'offsetTop' : 'offsetLeft';

		this.container = $("<div class='Carousel-container'>").append(this.el.children());
		this.el.append(this.container);


		this._slideSize = this.container.children('.Carousel-slide:first')[this._outerSizeProp](true);

		this._opts = {
			fx:            'carousel',
			slides:        ' > .Carousel-slide',
			pauseOnHover:  true,
			carouselFluid: this.options.fit,
			carouselGlide: true,
			carouselVertical:     this.options.vertical,
			speed:         this.options.speed,
			manualSpeed:   this.options.manualSpeed,
			timeout:       this.options.timeout,
			allowWrap:     this.options.wrap,
			log:           false,
		};

		this.container.on('cycle-post-initialize', function(){
			that.el.addClass('isReady');
		});

		if(this.options.autoDetect)
			this._autoDetect();
		else
			this._enable();
	},

	_autoDetect: function(){
		var that = this;
		var _reqSize = this._slideSize * this.container.children('.Carousel-slide').length;
	
		function detect(){
			if(that.container[that._sizeProp]() < _reqSize)
				that._enable();
			else 
				that._disable();
		}
		var tDetect = $.throttle(100, detect);
		tDetect();
		$(window).on('resize orientationchange', tDetect);
	},
	_enable: function(){
		if(this.isEnabled) return;
		this.isEnabled = true;
		this._createArrows();
		this._createPager();
		this._setupFit();
		this._setupHops();
		this.el.removeClass('isDisabled');

		this.container.cycle(this._opts);
		this._cycleOpts = this.container.data('cycle.opts');
		this._cycleApi = this.container.data('cycle.API');
	},
	_disable: function(){
		if(this.isEnabled === false) return;
		this.isEnabled = false;
		this._destroyArrows();
		this._destroyPager();
		this._unsetupFit();
		this.el.addClass('isDisabled');

		if(this._cycleOpts) {
			this.container.cycle('destroy');
			this._cycleOpts = null;
			this._cycleApi = null;
		}
	},

	_createArrows: function(){
		this._opts.prev = $();
		this._opts.prev = $();
		if(!this.options.arrows) return;

		this._opts.prev = $("<button type='button' class='Carousel-prev' aria-label='Back'>");
		this._opts.next = $("<button type='button' class='Carousel-next' aria-label='Forward'>");
		this.el.append(this._opts.prev).append(this._opts.next);
	},
	_destroyArrows: function(){
		if(this._opts.prev) this._opts.prev.remove();
		if(this._opts.next) this._opts.next.remove();
	},

	_createPager: function(){
		var that = this;
		if(!this.options.pager) return;
		this._opts.pager = null;

		this._opts.pager = $("<div class='Carousel-pager'>");
		this.options.pager.split(' ').forEach(function(a){
			that._opts.pager.addClass('Carousel-pager--'+a);
		});
		this.el.append(this._opts.pager);
	},
	_destroyPager: function(){
		if(this._opts.pager) this._opts.pager.remove();
	},

	_setupFit: function(){
		var that = this;

		function fitFn(){
			var containerSize = that.container[that._sizeProp]();
			var num = Math.floor(containerSize / that._slideSize);
			var opts = that._cycleOpts || that._opts;
			if(opts.carouselVisible != num){
				opts.carouselVisible = num;
				that.trigger('visibleCountChange');
			}
		}

		if(this.options.fit){
			var tFitFn = $.throttle(100, fitFn);
			tFitFn();
			$(window).on('resize orientationchange', tFitFn);
			this._unsetupFit = function(){
				$(window).off('resize orientationchange', tFitFn);
			}
		}
	},
	_unsetupFit: function(){},

	_setupHops: function(){
		var that = this;
		if(this.options.hops){
			function fn(){
				var opts = that._cycleOpts || that._opts;
				opts.carouselHops = Math.ceil(opts.carouselVisible * that.options.hops);
			}
			fn();
			this.on('visibleCountChange', fn);
		}
	},
	
	getSlides: function(all){
		if(this.isEnabled)
			return all ? this._cycleOpts._carouselWrap.children() : this._cycleOpts.slides;
		else
			return this.container.find('.Carousel-slide');
	},
	getSlide: function(index, all){
		var that = this;
		if(this.isEnabled)
			return this.getSlides(all).filter(function(i){ return i % that._cycleOpts.slideCount == index; });
		else
			return this.getSlides().eq(index);
	},
	goTo: function(index){
		if(this.isEnabled)
			this.container.cycle('goto', index);
	},
	getSlideIndex: function(slide){
		if(this.isEnabled)
			return this._cycleApi.getSlideIndex(slide);
		else
			return this.getSlides().index(slide);
	},

	makeVisible: function(index, fwd) {
		var that = this;
		if(!this.isEnabled) return;

		var from = this._cycleOpts._carouselWrap.get(0)[this._offsetStartProp]*-1;
		var to = from + this.container[that._sizeProp]();
		function distanceToVisible(slide){
			var fromStart = slide[that._offsetStartProp] - from;
			var fromEnd = slide[that._offsetStartProp] + slide[that._offsetSizeProp] - to;
			if(Math.sign(fromStart) != Math.sign(fromEnd))
				return 0;
			else if(Math.abs(fromStart) < Math.abs(fromEnd))
				return fromStart;
			else
				return fromEnd;
		}

		var minDist = null; var nearest, noop;
		this.getSlide(index, true).each(function(){
			if(noop) return;
			var distance = distanceToVisible(this);
			if(distance == 0){
				noop = true;
				nearest = this;
				return;
			}
			if( (!minDist || Math.abs(distance) < Math.abs(minDist)) && (fwd && distance > 0 || !fwd && distance < 0)){
				nearest = this;
				minDist = distance;
			}
		});
		if(!noop){
			if(minDist < 0)
				this._cycleApi.prev();
			else
				this._cycleApi.next();
		}
	},

	getVisible: function(index) {
		var that = this;
		if(!this.isEnabled) return this.getSlide(index);

		var from = this._cycleOpts._carouselWrap.get(0)[this._offsetStartProp]*-1;
		var to = from + this.container[that._sizeProp]();
		return this.getSlide(index, true).filter(function(){
			return this[that._offsetStartProp] + this[that._offsetSizeProp] > from && this[that._offsetStartProp] < to;
		});
	}

});



})(jQuery);


/* ------------------------------- components/checkbox.js ------------------------------- */
(function($){
	$.fn.checkbox = function() {

		return $(this).each(function(){
	        var $check = $(this);
			var inlineOpts = jsonlite.parse($(this).attr('data-checkbox') || "");

			var type = $check.attr('type');
			$check.wrap("<div class='"+type+"'></div>");
			$check.after($("<ins>", {class: type+'-fake'}));
			$(this).addClass(type+'-real');

			if(type == 'radio' && inlineOpts.uncheck){
				$check.attr('type', 'checkbox');
				$check.on('change', function(){
					if(this.checked){
						$("[name='"+this.name+"']", this.form).not(this).prop('checked', false);
					}
				});
			}
		});
	}
})(jQuery);


/* ------------------------------- components/dropdown.js ------------------------------- */
(function($){
	var KEY_ENTER = 13,
		KEY_SPACE = 32,
		KEY_LEFT = 37,
		KEY_UP = 38,
		KEY_RIGHT = 39,
		KEY_DOWN = 40,
		KEY_ESCAPE = 27;

$.simpleWidget('dropdown', {
	_defaults: {
		content: '<ul>',
		position:  'bottom',
		trigger:   'click',
		arrow:     true,
		animation: 'fade',
		width:     null,
		class: null,
		duration: 100,
		updateText: false,
	},
	_htmlOptions: ['content', 'appendTo'],
	_create: function(){

		this.$list = this.options.content;

		this.el.attr('tabindex', '0');
		this.$list.attr('tabindex', '-1');

		this._selectedOption = this._getHighlighted();
		this._setText(this._selectedOption.text())

		this.tip = tippy(this.el.get(0), this._tippyOptions());
		this.popper = this.tip.getPopperElement(this.el.get(0));
		this.$popper = $(this.popper);

		this._attachEvents();
	},

	_tippyOptions: function(){
		var that = this;
		var options = {
			animateFill: false,
			performance: true,
			interactive: true,
			theme:	     'none',
			duration:    this.options.duration,
			position:    this.options.position,
			trigger:     this.options.trigger,
			arrow:       this.options.arrow,
			animation:   this.options.animation,
			distance:	 this.options.arrow ? 8 : 1,
		};
		if(this.options.appendTo)
			options.appendTo = this.options.appendTo.get(0);

		var theme;
		if(this.options.theme)
			theme = 'theme-'+this.options.theme;
		else
			theme = this._getTheme();

		options.onShow = function(){
			if(that.options.width)
				$(this).width(that.options.width);

			if(that.options.class)
				$(this).addClass(that.options.class);

			$(this).addClass(theme);
			$(this).find('.tippy-tooltip').addClass('popover dropdown');

			that.trigger('open');
		};

		options.html = this.$list.get(0);

		return options;
	},

	_attachEvents: function(){
		var that = this;

		this.el.on('keyup', function(e){
			e.preventDefault();
		});

		this.el.on('keydown', function(e){
			switch (e.which) {
				case KEY_SPACE:
					that.open();
					e.preventDefault();
				break;
				case KEY_RIGHT:
				case KEY_DOWN:
					if(!that.isOpen())
						that.open();
					e.preventDefault();
				break;
			}
		});

		this.$popper.on('keydown', function(e){
			switch (e.which) {
				case KEY_SPACE:
					//that._select(that._getHighlighted());
					//that._followHref(that._getHighlighted());
					//that.close();
					//e.preventDefault();
					that._getHighlighted().get(0).click();
				break;
				case KEY_ESCAPE:
					that.close();
					e.preventDefault();
				break;
				case KEY_LEFT:
				case KEY_UP:
					e.preventDefault();
					that._moveFocus(false);
				break;

				case KEY_RIGHT:
				case KEY_DOWN:
					e.preventDefault();
					that._moveFocus(true);
				break;
			}
		});

		this.on('open', function(){
			that.highlight(that._selectedOption);
		});

		this.$list.on('click', ".dropdown-item:not(.isDisabled)", function(){
			that._select($(this));
			that.close();
		});

		this.$list.on('mouseover', '.dropdown-item:not(.isDisabled)', function(){
			that._clearHighlighted();
		});

		this.$list.on('mouseleave', function(){
			that.highlight(that._selectedOption);
		});
	},

	getOptions: function(){
		return this.$list.find('.dropdown-item');
	},

	_moveFocus: function(fwd){
		var $options = this.getOptions();
		var index = $options.index(this._getHighlighted());
		var $next = $options.filter(function(i){
			if(fwd && i <= index || !fwd && i >= index || $(this).is('.isDisabled')) return false;
			return true;
		});
		if(!$next.length) return;

		if(fwd) $next = $next.first();
		else $next = $next.last();
		this.highlight($next);
		$next.focus();
	},

	_getHighlighted: function(){
		return this.getOptions().filter('.isSelected')
	},

	_clearHighlighted: function(){
		this._getHighlighted().removeClass('isSelected');
	},

	highlight: function($option){
		this._clearHighlighted();
		$option.addClass('isSelected');
	},

	_select: function($option){
		this._selectedOption = $option;
		var index = this.getOptions().index($option);
		this._setText($option.text());
		this.highlight($option);
		this.trigger('selected', $option);
	},

/*	_followHref: function($option){
		if($option.attr('href'))
			$option.get(0).click();
	},*/

	_setText: function(text){
		if(this.options.updateText)
			this.el.text(text);
	},

	open: function(){
		this.tip.show(this.popper);
	},

	close: function(){
		this.tip.hide(this.popper);
	},

	isOpen: function(){
		return this.popper.style.visibility == 'visible';
	},

});

})(jQuery);


/* ------------------------------- components/facebook.js ------------------------------- */
 (function($){
	$.fn.facebook = function() {

		if(!$(this).find('.fb-comments, .fb-like-box, .fb-page').length) return;

		if(window.FB){
				FB.XFBML.parse();
				return;
		}

		var lang;
		switch($('html').attr('lang')){
			case 'es-AR': lang = 'es_LA'; break;
			default:      lang = 'en_US'; break;
		}

		$('body').append('<div id="fb-root"></div>');
		(function(d, id) {
		    if (d.getElementById(id)) return;
		    var js = d.createElement('script'); js.id = id;
		    js.src = "//connect.facebook.net/"+lang+"/sdk.js#xfbml=1&version=v2.6";
		    d.head.appendChild(js);
		}(document, 'facebook-jssdk'));

	}
})(jQuery);


/* ------------------------------- components/fixed-header.js ------------------------------- */
(function($){
	$.fn.fixedHeader = function(options) {

		return this.each(function() {

			var $placeholder = $("<div>");
			var $this = $(this);

			$placeholder.css({width: $this.width(), height: $this.height()});
			//$this.before($placeholder);

			var watch = function(){
				if($this.css('position') == 'fixed' && $(window).scrollTop() > options.threshold){
					$this.addClass('isScrolled');
				} else {
					$this.removeClass('isScrolled');
				}
			}

			$(window).on('scroll', $.throttle(50, watch));
			watch();

		});
	}
})(jQuery);


/* ------------------------------- components/form-toggle.js ------------------------------- */
(function($){
$.simpleWidget('formToggle', {

	_defaults: {
		trigger: null,
		context: 'form,body',
		effect: 'slidefade', //slide, slidefade, none, disable
		disable: true,
		operator: '=',
		value: 1
	},

	_create: function(){
		if(!(this.options.trigger instanceof jQuery)) {
			this.options.trigger = this.el.closest(this.options.context).find(this.options.trigger).filter('input, select');
		}

		if(!this.options.trigger) return;
		this.trigger = this.options.trigger;

		this._targetInputs = this.el.find('input, select, button, textarea').addBack('input, select, button, textarea');

		// Oculto por default por CSS
		if(this.options.effect == 'disable')
			this.el.show();

		switch(this.options.effect){
			case 'slide':
				this._showFn = $.proxy(this._showTarget, this, 'slideDown');
				this._hideFn = $.proxy(this._hideTarget, this, 'slideUp');
			break;
			case 'slidefade':
				this._showFn = $.proxy(this._showTarget, this, 'show');
				this._hideFn = $.proxy(this._hideTarget, this, 'hide');
			break;
			case 'none':
				this._showFn = $.proxy(this._showTarget, this, 'show', {duration: 0});
				this._hideFn = $.proxy(this._hideTarget, this, 'hide', {duration: 0});
			break;
			case 'disable':
				this._showFn = this._enableTarget;
				this._hideFn = this._disableTarget;
			break;
			default:
				throw "Invalid effect: " + this.options.effect;
		}

		switch(this.options.operator){
			case '=':
				this._operatorFn = function(x,y){ return x == y; }
			break;
			case '!=':
				this._operatorFn = function(x,y){ return x != y; }
			break;
			default:
				throw "Invalid operator";
		}

		var fn = $.proxy($.throttle(100, this._changed), this);
		this.trigger.on('change', fn).on('keyup', fn).on('toggle-update', fn);
		fn();

	},

	_changed: function(){
		var selectedValue = this._getValue();

		if(this._matches(this.options.value, selectedValue))
			this._showFn();
		else
			this._hideFn();
	},

	_getValue: function(){
		if(this.trigger.data('hiding.formToggle') || this.trigger.is(':hidden') && this.el.parent().is(':visible')) return null;

		return this.trigger.filter(function(){
			return this.checked || !/^(?:checkbox|radio)/i.test(this.type)
		}).map(function(){
			var val = $(this).val();
			return val;
		}).get();
	},

	_matches: function(v1, v2){
		var that = this;
		if(!Array.isArray(v1)) v1 = [v1];
		if(!Array.isArray(v2)) v2 = [v2];
		return v1.some(function(x) {
		    return v2.some(function(y){
		    	return that._operatorFn(x, y);
		    });
		});
	},

	_showTarget: function(fn, params){
		if(this.el.is(':visible')) return;
		if(!params) params = {};

		this._targetInputs.trigger('toggle-update');

		this.el[fn](params);
		if(this.options.disable)
			this._targetInputs.attr('disabled', false);
	},

	_hideTarget: function(fn, params){
		var that = this;
		if(this.el.is(':hidden') && this.el.parent().is(':visible')) return;
		if(!params) params = {};

		this._targetInputs.data('hiding.formToggle', 1).trigger('toggle-update');

		params.complete = function(){
			if(that.options.disable)
				that._targetInputs.data('hiding.formToggle', 0).attr('disabled', true);
		}
		this.el[fn](params);
	},

	_enableTarget: function(){
		this._targetInputs.trigger('toggle-update').attr('disabled', false);
	},

	_disableTarget: function(){
		this._targetInputs.trigger('toggle-update').attr('disabled', true);
	}
});

})(jQuery);


/* ------------------------------- components/form-validation.js ------------------------------- */
(function($){

var SCROLL_INITIAL = 1 << 0;
var SCROLL_SUBMIT = 1 << 1;
var SCROLL_ALWAYS = SCROLL_INITIAL | SCROLL_SUBMIT;

$.simpleWidget('formValidation', {

	_defaults: {
		scrollOffset: {top: 0, bottom: 50, left: 0, right: 0},
		scroll: 'always' // always, submit, initial
	},

	_prepare: function(){
		this._scrollMask = {
			'always': SCROLL_ALWAYS,
			'submit': SCROLL_SUBMIT,
			'initial': SCROLL_INITIAL,
			'falsy': 0
		}[this.options.scroll || 'falsy'];
	},
	_create: function(){
		this.inputs = $('input, textarea, select', this.el);
		this._loadExistingErrors();
		this._initializeInputs();
	},

	_loadExistingErrors: function(){
		var that = this;
		$('[data-form-errors] [data-error-attribute]', this.el).each(function(){
			var attribute = $(this).attr('data-error-attribute');
			var message = $(this).attr('data-error-message');
			var $input = $(".attribute-"+attribute, that.el).find('input, textarea, select').add($("[name='"+attribute+"']", that.el));
			if($input.length){
				that._displayError($input[0], message, that._scrollMask & SCROLL_INITIAL);
				var container = $(this).closest('[data-form-errors]');
				$(this).remove();
				if(!container.find('[data-error-attribute]').length) container.remove();
			}
		});
	},

	_initializeInputs: function(){
		var that = this;
		this.inputs.attr('title', '');
		this.inputs.on('input change blur invalid', function(e){
			that.clearError(this);
		});
		this.inputs.on('blur', function(e){
			if(this.validationMessage){
				that._displayError(this, this.validationMessage);
				e.preventDefault();
			}
		});
		this.inputs.on('invalid', function(e){
			that._displayError(this, this.validationMessage, that._scrollMask & SCROLL_SUBMIT);
			e.preventDefault();
		});
	},

	_displayError: function(input, message, scroll){
		var $control = $(input).closest('.Form-control');
		var $row = $(input).closest('.Form-row');

		if( input.validity.patternMismatch && $(input).attr('data-pattern-msg')) message = $(input).attr('data-pattern-msg');
		var bubble = $("<ul></ul>").addClass('validation-tooltip').append("<li>"+message+"</li>");

		$control.children('.validation-tooltip').remove();
		$control.append(bubble);

		$(input).addClass('hasError');
		$row.addClass('isInvalid');

		if(scroll)
			this._scrollToFirstError();
	},

	clearError: function(input){
		$(input).removeClass('hasError');
		var invalid = $(input).closest('.Form-row');
		invalid.removeClass('isInvalid');
		invalid.find('.validation-tooltip').remove();
	},

	_scrollToFirstError: $.debounce(100, function(){
		var $first = $(this.el).find('.isInvalid').first();
		this._scrollIntoView($first, function(){
			$first.find('input, textarea, select').first().focus();
		});
		var $tooltip = $first.find('.validation-tooltip');
		$tooltip.addClass('isActive');
		this.el.one('mouseover', '.Form-control, .Form-row', function(e){
			$tooltip.removeClass('isActive');
		});
	}),

	_scrollIntoView: function($el, callback){
		var that = this;
		function _distanceToEdges(){
		   var win = $(window);

		   var viewport = {
		        top: win.scrollTop() + that.options.scrollOffset.top + 20
		   };
		   viewport.bottom = win.scrollTop() + win.height() - that.options.scrollOffset.bottom - 20;

		   var bounds = $el.offset();
		   bounds.bottom = bounds.top + $el.height();

		   return {toTop: bounds.top - viewport.top, toBottom: viewport.bottom - bounds.bottom};
		}

		var distance = _distanceToEdges();
		var moveBy = 0;
		if(distance.toTop < 0){
			moveBy = distance.toTop;
		} else if(distance.toBottom < 0){
			moveBy = -distance.toBottom;
		}
		if(moveBy){
			$("html, body").animate({scrollTop: "+="+moveBy}, callback);
		} else {
			callback();
		}
	}

});

})(jQuery);


/* ------------------------------- components/gallery.js ------------------------------- */
(function($){

$.simpleWidget('gallery', {
	_defaults: {
		fx:         'scrollHorz',
		speed:      500,
		timeout:    0,
		pager:      null,
		arrows:     null,
		align:      'center',
		caption:    null,
		captionFx:  'fade',
		background: null,
		thumbnails: null,
		// css3: null
	},
	_prepare: function(){
		this.options.manualSpeed = this.options.speed * .75;
	},
	_create: function(){

		this.container = this.el.wrapInner("<div class='Gallery-container'>").children();
		this._createPager();
		this._createArrows();
		this._createCaption();

		this._createThumbnailsSlide();

		this._initCycle();

		this.el.addClass('Gallery--align-'+this.options.align);

		this._syncWithPopup();

		this._createBackgroundsSlide();


/*		if(this.options.css3){
			this.container.on('cycle-before', function(e, opts, currSlide, nextSlide){
				$(currSlide).addClass('out');
				$(nextSlide).find('[data-animate]').css('visibility', 'hidden');
			});
			this.container.on('cycle-after', function(e, opts, currSlide, nextSlide){
				$(currSlide).addClass('in');
				$(nextSlide).find('[data-animate]').each(function(){
					var args = $(this).attr('data-animate').split(' ');
					var opts = {};
					opts.effect = args[0];
					opts.duration = parseFloat(args[1]) * 1000;
					opts.delay = parseFloat(args[2]) * 1000;
					console.log(opts);
					$(this).animateCSS(opts.effect, opts);
				});
				$(currSlide).removeClass('out').removeClass('in');
			});

		}*/
	},

	_initCycle: function(){
		var that = this;
		this.container.css('height', this.container.get(0).clientHeight);
		this.container.on('cycle-initialized', function(){
			setTimeout(function(){
				that.container.css('height', '');
			}, 40);
		});
		this.container.on('cycle-post-initialize', function(){
			that.el.addClass('isReady');
		});
		this.container.cycle({
			fx:           this.options.fx,
			slides:       '> .Gallery-slide',
			pauseOnHover: true,
			swipe:        true,
			speed:        this.options.speed,
			manualSpeed:  this.options.manualSpeed,
			timeout:      this.options.timeout,
			autoHeight:   'calc',
			pager:        this._pager,
			prev:         this._prev,
			next:         this._next,
			log:          false,
			lookahead:    true
		});
		this._cycleOpts = this.container.data('cycle.opts');
	},

	_createPager: function(){
		var that = this;
		this._pager = null;
		if(!this.options.pager) return;

		this._pager = $("<div class='Gallery-pager'>");
		this.options.pager.split(' ').forEach(function(a){
			that._pager.addClass('Gallery-pager--'+a);
		});
		this.el.append(this._pager);
	},

	_createArrows: function(){
		this._prev = $();
		this._next = $();
		if(!this.options.arrows) return;

		this._prev = $("<div class='Gallery-prev'>");
		this._next = $("<div class='Gallery-next'>");
		this.el.addClass('Gallery--arrows-'+this.options.arrows);
		this.el.append(this._prev).append(this._next);
	},

	_createCaption: function(){
		var that = this;
		this._caption = $();
		if(!this.options.caption || this.options.caption.indexOf('outside') == -1) return;

		this._caption = $("<div class='Gallery-caption Gallery-caption-"+this.options.caption+"'>");
		this.container.find('.Gallery-caption').hide();
		this.container.append(this._caption);

		var fx = {show: ['show','hide'], fade: ['fadeIn','fadeOut'], slide: ['slideDown','slideUp']};
		var fxIn = fx[this.options.captionFx][0];
		var fxOut = fx[this.options.captionFx][1];
		this.container.on('cycle-update-view-before', function(e, opts, slideOpts, currSlide){
			var origCaption = $('.Gallery-caption', currSlide);
			that._caption[fxOut](opts.speed/2, function(){
				if(!origCaption.length) return;

				that._caption.html(origCaption.html());
				that._caption[fxIn](opts.speed/2);
				
			});
		});
		this.container.one('cycle-update-view-after', function(e, opts, slideOpts, currSlide){
			var origCaption = $('.Gallery-caption', currSlide);
			that._caption.html(origCaption.html());
		});
	},

	_syncWithPopup: function(){
		var that = this;

		this.el.on('popup:open', function(e){
			that.container.cycle('pause');
		});
		this.el.on('popup:beforeClose', function(e, popup, item){
			that._cycleOpts.slides.each(function(index, slide){
				if($.contains(slide, item.el.get(0))){
					that.container.one('cycle-before', function (e, slideOpts) { slideOpts.speed = 1; });
					that._cycleOpts.API.jump( index );
				}
			});
			that.container.cycle('resume');
		});
	},
	
	_createBackgroundsSlide: function(){
		var that = this;
		if(!this.options.background) return;

		this.bgContainer = $("<div>").addClass('Gallery-bgcontainer');
		this.el.append(this.bgContainer);

		for(var i = 0; i < that._cycleOpts.slides.length; i++){
			var bgURL = $(that._cycleOpts.slides[i]).attr('data-gallery-background');
			var bg = $("<div>").addClass('Gallery-bgslide cycle-defer-load').css('background-image', "url('"+bgURL+"')");
			this.bgContainer.append(bg);
		}

		this.bgContainer.cycle({
			fx:          this.options.background.fx || 'fadeout',
			slides:      '> .Gallery-bgslide',
			autoHeight:  -1,
			speed:       this.options.speed,
			manualSpeed: this.options.speed *.75,
			paused:      true,
			log:         false,
			lookahead:   true
		});

		this.container.on('cycle-before', function(e, opts) {
			that.bgContainer.cycle('goto', opts.nextSlide);
		});
	},
	
	_createThumbnailsSlide: function(){
		var that = this;
		if(!this.options.thumbnails) return;

		this.thumbContainer = $("<div>").addClass('Gallery-thumbnails').addClass('Carousel');
		this.el.append(this.thumbContainer);

		this.container.find('.Gallery-thumbslide').each(function(){
			var thumb = $(this).addClass('Carousel-slide');
			that.thumbContainer.append(thumb);
		});

		this.thumbContainer.carousel();
		var carousel = that.thumbContainer.carousel('instance');

		this.container.on('cycle-initialized', function(e, opts){
			carousel.getSlide(opts.currSlide, true).addClass('isSelected');
		});

		this.thumbContainer.on('click', '.Gallery-thumbslide', function(){
			var selectedThumb = carousel.getVisible(that._cycleOpts.currSlide);
			var fwd = this.offsetLeft > selectedThumb[0].offsetLeft;
			var currIndex = carousel.getSlideIndex(selectedThumb);
			var nextIndex = carousel.getSlideIndex(this);

			var mod = _modulo(nextIndex-currIndex, that._cycleOpts.slideCount);
			var move;
			if(fwd)
				move = mod;
			else
				move = (that._cycleOpts.slideCount - mod) * -1;
			
			that.container.cycle('advanceSlide', move);
		});

		this.container.on('cycle-before', function(e, opts, curr, next, fwd) {
			carousel.getSlides(true).removeClass('isSelected');
			carousel.getSlide(opts.nextSlide, true).addClass('isSelected');

			carousel.makeVisible(opts.nextSlide, fwd);
		});
	}
});

function _modulo(m,n) {
    return ((m%n)+n)%n;
}


})(jQuery);


/* ------------------------------- components/hscroll.js ------------------------------- */
(function($){
    $.fn.hScroll = function(options) {

        return this.each(function() {
            var that = this;
            var $leftShadow = $("<div class='HScroll-leftshadow'>");
            var $rightShadow = $("<div class='HScroll-rightshadow'>");
            $(that).children().wrapAll("<div class='HScroll-content'>");
            $(that).append($leftShadow).append($rightShadow);
            var $content = $('.HScroll-content', that);

            leftShadowWidth = $leftShadow.width();
            rightShadowWidth = $rightShadow.width();

            var fn = function () {
                var left = this.scrollLeft;
                var max = this.scrollWidth - this.clientWidth;
                $leftShadow.css('left', Math.min(left - leftShadowWidth , 0) + 'px');
                $rightShadow.css('right', Math.min(max - left - rightShadowWidth , 0) + 'px');
            }
            $content.on('scroll', fn);
            $(window).on('load resize', $.debounce(500, function(){
                fn.apply($content[0]);
            }));
        });
    }
})(jQuery);


/* ------------------------------- components/lazyload.js ------------------------------- */
$.lazyLoadXT.autoInit=false;
(function($){

$.simpleWidget('cLazyload', {
	_dataAttr: 'lazyload',
	_defaults: {

	},
	_htmlOptions: [],
	_create: function(){
		var that = this;
		that.el.find($.lazyLoadXT.selector).lazyLoadXT({
			edgeY:  300,
		});
	},

});

})(jQuery);


/* ------------------------------- components/popover.js ------------------------------- */
(function($){

$.simpleWidget('popover', {
	_defaults: {
		content:   '',
		position:  'auto',
		duration:  200,
		delay:     100,
		animation: 'shift',
		theme:     null,
		title:     false,
		closeable: false,
		width:     false,
	},
	_htmlOptions: ['content'],
	_create: function(){
		var that = this;
		var options = {
			arrow:       true,
			animateFill: false,
			performance: true,
			interactive: true,
			trigger:     'click',
			arrowSize:   'big',
			distance:    13,
			position:    this.options.position,
			duration:    this.options.duration,
			delay:       this.options.delay,
			animation:   this.options.animation,
			theme:       'none',
		};
		if(this.options.animation == 'pop'){
			options.animation = 'scale';
			options.inertia = true;
		}

		var $html = this.options.content;
		
		if(this.options.title){
			var $title = $("<h3>", {class: 'popover-title'}).html(this.options.title);
		}
		if(this.options.closeable){
			var $close = $("<i>", {class: 'popover-close'});
			if(this.options.title) $close.addClass('popover-close--with-title')
			$close.on('click', function(){
				var popper = tip.getPopperElement(that.el.get(0));
				tip.hide(popper);
			});
		}

		var theme;
		if(this.options.theme)
			theme = 'theme-'+this.options.theme;
		else
			theme = this._getTheme();

		options.onShow = function(){
			if(that.options.title)
				$(this).find('.tippy-tooltip').prepend($title);

			if(that.options.closeable)
				$(this).find('.tippy-tooltip').prepend($close);

			if(that.options.width)
				$(this).width(that.options.width);

			$(this).addClass(theme);
			$(this).find('.tippy-tooltip').addClass('popover');
		};
		options.onShown = function(){
			$(this).find("input[type!='submit']").first().focus();
		};

		options.html = $html.get(0);
		var tip = tippy(this.el.get(0), options);
	}

});

})(jQuery);

/* ------------------------------- components/popup.js ------------------------------- */
(function($){


/* ---------------------------------------- BASE TYPE ---------------------------------------- */
var BaseType = {
};
BaseType.elementParse = $.noop;
BaseType.parseAjax = $.noop;
BaseType.change = $.noop;
BaseType.beforeChange = $.noop;
BaseType.beforeClose = function(){ this.beforeChange.apply(this, arguments); };
BaseType.afterCreated = $.noop;
/*BaseType._copyTheme = function($content, $target){
	$content.closest("[class^='theme-'], [class*=' theme-']").each(function(){
		var r = /(^| )(theme-\S+)/g;
		var m = r.exec($(this).attr('class'));
		var theme = m[2];
		$target.addClass(theme);
	});
}*/


/* ---------------------------------------- TYPE IMAGE ---------------------------------------- */

var TypeImage = $.extend({}, BaseType);
TypeImage.makeItem = function(item){
	item.type = 'image';
	return item;
}
TypeImage.makeItemFromEl = function($el, options){
	return {
		type: 'image',
		ptype: 'image',
		src: $el.attr('href'),
		caption: options.caption,
		el: $el
	};
}


/* ---------------------------------------- TYPE IFRAME ---------------------------------------- */

var TypeIframe = $.extend({}, BaseType);
TypeIframe.makeItem = function(item){
	item.type = 'iframe';
	return item;
}
TypeIframe.makeItemFromEl = function($el){
	return {
		type: 'iframe',
		ptype: 'iframe',
		src: $el.attr('href'),
		el: $el
	};
}


/* ---------------------------------------- TYPE AJAX ---------------------------------------- */

var TypeAjax = $.extend({}, BaseType);
TypeAjax.makeItem = function(item){
	item.type = 'ajax';
	return item;
}
TypeAjax.makeItemFromEl = function($el){
	return {
		type: 'ajax',
		ptype: 'ajax',
		src: $el.attr('href'),
		el: $el
	};
}
TypeAjax.parseAjax = function(options, mfp, mfpResponse){
	var $container = $("<div>").addClass('mfp-popup-ajax');

	var $maincontent = $(mfpResponse.data).find('#maincontent').addBack('#maincontent');
	$maincontent.addClass($.SimpleWidget._getTheme($maincontent));
	$.runJS.newContent($maincontent);
	$maincontent.find('.Form').ajaxForm({
		url: mfp.currItem.src,
		selector: '#maincontent'
	});

	$container.append($maincontent);

	if(options.closeBtn){
		var btn = $("<button class='btn btn--primary'>Cerrar</button>").click(function(){ $.magnificPopup.close() });
		$container.append($("<div class='Form-action'></div>").append(btn));
	}

	mfpResponse.data = $container;
}
TypeAjax.change = function(options, mfp){
	history.pushState({}, "", mfp.currItem.src);
	$(window).one('popstate.popup', function(e){
		$.magnificPopup.instance._close();
	});

}
TypeAjax.beforeChange = function(){
	$(window).off('popstate.popup');
	window.history.back();
}


/* ---------------------------------------- TYPE INLINE ---------------------------------------- */

var TypeInline = $.extend({}, BaseType);
TypeInline.makeItem = function(item){
	item.type = 'inline';
	return item;
}
TypeInline.makeItemFromEl = function($el){
	var href = $el.attr('href');
	var $src = href && href[0] == '#' ? $(href) : $el.next();
	var item = {
		type: 'inline',
		ptype: 'inline',
		src: $src,
		el: $el
	};
	if($src.prop('nodeName') == 'SCRIPT')
		item.src = $.parseHTML("<div>"+$src.text()+"</div>");

	return item;
}
TypeInline.elementParse = function(options, mfp, item) {
	$(item.src).addClass('mfp-popup-inline');
}
TypeInline.change = function(options, mfp, a){
	var el = mfp.currItem.data.el;
	// LAZY LOADING
/*	$('img[data-src]', mfp.contentContainer).each(function(){
		$(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
	});*/

	// HERENCIA THEME
	mfp.content.addClass($.SimpleWidget._getTheme(el));

	hashHistory.open(mfp, el.attr('href'));
}
TypeInline.beforeChange = function(options, mfp){
	var el = mfp.currItem.data.el;
	hashHistory.close(mfp, el.attr('href'));
}
TypeInline.afterCreated = function(options, el){
	hashHistory.listen(el, this.href);
}


/* ---------------------------------------- TYPE VIDEO ---------------------------------------- */

var TypeVideo = $.extend({}, BaseType);
TypeVideo.makeItem = TypeInline.makeItem;
TypeVideo.makeItemFromEl = function($el){
	var href = $el.attr('href');
	var $src = href && href[0] == '#' ? $(href) : $el.next();
	var item = {
		type: 'inline',
		ptype: 'video',
		src: $src,
		el: $el
	};
	if($src.prop('nodeName') == 'SCRIPT')
		item.src = $src.text();

	return item;
}
TypeVideo.elementParse = function(options, mfp, item){
	var $newSrc = $('<div class="mfp-popup-video">');
	$newSrc.append(item.data.src);

	if(options.caption) {
		var $caption = $.parseHTML("<div class='mfp-video-caption'>"+options.caption+"</div>");
		$newSrc.addClass('mfp-video-with-caption');
		$newSrc.append($caption);
	}
	item.src = $newSrc;
}
TypeVideo.change = function(options, mfp){
	var el = mfp.currItem.data.el;
	hashHistory.open(mfp, el.attr('href'));
}
TypeVideo.beforeChange = TypeInline.beforeChange;
TypeVideo.afterCreated = TypeInline.afterCreated;


/* ---------------------------------------- HISTORY ---------------------------------------- */

var hashHistory = {
	open: function(el, href){
		if(!href) return;
		var hash = '#p-' + href.replace(/#/, '');
		location.hash = hash;
		$(window).on('hashchange.popup', function(){
			if(location.hash != hash){
				$magnificPopup.close();
			}
		});
	},
	close: function(el, href){
		if(!href) return;
		var hash = '#p-' + href.replace(/#/, '');

		$(window).off('hashchange.popup');
		if(location.hash == hash){
			window.history.back();
		}
	},
	listen: function(el, href){
		if(!href) return;
		var hash = '#p-' + href.replace(/#/, '');

		if(window.location.hash == hash){
			el.magnificPopup('open');
		}
	}
};

var _types = {
	image: TypeImage,
	ajax: TypeAjax,
	inline: TypeInline,
	iframe: TypeIframe,
	video: TypeVideo
};
var _defaults = {
	type: null,
	caption: null,
	closeBtn: false,
	autoOpen: false,
	width: 800,
	height: 400,
	gallery: null,
	disableOn: 400,
	class: null
};

function createMP(items, options, instance){
	var mp = {
		image: {
			verticalFit: false,
			titleSrc: function(a){
				return a.data.caption;
			}
		},
		gallery: {
			enabled: true
		}
	};

	mp.items = items;

	mp.callbacks = {
		elementParse: getCallback('elementParse'),
		parseAjax: getCallback('parseAjax'),
		change: function(a) {
			if(instance) instance.trigger('change', a.data, this.content);
			if(this.content && options.class)
				this.content.addClass(options.class+'-content');

			getCallback('change').apply(this, a);
		},
		beforeClose: function() {
			if(instance) instance.trigger('beforeClose', this.currItem.data);
			getCallback('beforeClose').apply(this);
		},
		beforeChange: function(){
			if(options.class)
				this.contentContainer.addClass(options.class);

			getCallback('beforeChange').apply(this);
		}
	};

	function getCallback(eventName){
		return function(a){
			var item;
			if(eventName == 'elementParse')
				item = a.data;
			else if(this.currItem)
				item = this.currItem.data;

			callFn(eventName, item, arguments, this);
		};
	}

	function callFn(fn, item, args, mfp){
		if(!item) return;

		var type = _types[item.ptype];

		var args = $.makeArray(args);
		args.unshift(mfp);
		args.unshift(options);
		type[fn].apply(type, args);
	}

	if(options.autoOpen){
		if(options.autoOpen !== true){
			if(!Cookies.get(options.autoOpen)){
				$.magnificPopup.open(mp);
				Cookies.set(options.autoOpen, '1', { path: '/' });
			}
		} else {
			$.magnificPopup.open(mp);
		}
	}

	return mp;
}

$.popup = function(items, options){
	options = $.extend({}, _defaults, options);

	if(!$.isArray(items)) items = [items];
	options.autoOpen = options.autoOpen || true;

	for(i in items){
		var type = _types[items[i].ptype];
		items[i] = type.makeItem(items[i]);
	}

	return createMP(items, options);
};

$.simpleWidget('popup', {
	_defaults: _defaults,
	_htmlOptions: [
		'caption'
	],
	_galleries: {},
	_create: function(){
		if(this.el.data('magnificPopup')) return;

		switch(this.options.type){
			case 'image':
			case 'ajax':
			case 'inline':
			case 'iframe':
			case 'video':
				this._createMP();
			break;
			case 'window':
				this._createTypeWindow();
			break;
		}

	},
	_createMP: function(){
		var that = this;

		var type = _types[this.options.type];
		var item = type.makeItemFromEl(this.el, this.options);

		if(this.options.gallery && this.options.gallery in this._galleries){
			this.mp = this._galleries[this.options.gallery];
			this.mp.items.push(item);
		} else {
			this.mp = createMP([item], that.options, that);
		}

		this.el.click(function(e){
			var href = $(this).attr('href');
			if( !(href && href[0] != '#' && $(window).width() < that.options.disableOn) ){
				e.preventDefault();
				$.magnificPopup.close();
				var index = that.mp.items.indexOf(item);
				$.magnificPopup.open(that.mp, index);
				that.trigger('open');
			}
		});

		type.afterCreated(this.el);

		if(this.options.gallery && !(this.options.gallery in this._galleries)){
			this._galleries[this.options.gallery] = that.mp;
		}
	},

	_createTypeWindow: function(){
		var that = this;
		this.el.on('click', function(e){
			if( $(window).width() >= that.options.disableOn ){
				var href = $(this).attr('href');
				window.open(href, '', 'top=100,left=100,width='+that.options.width+',height='+that.options.height+',scrollbars=yes');
				e.preventDefault();
			} else {
				$(this).attr('target', '_blank');
			}
		});
	},

	currentItem: function(){
		console.log(this.mp.currItem);
	}
});



})(jQuery);


/* ------------------------------- components/runjs.js ------------------------------- */
(function($){
	var fns = [];
	$.runJS = {
		push: function(fn) {
			fns.push(fn);
		},
		onReady: function(fn) {
			$(document).ready(function(){
				fn($(document));
				fns.push(fn);
			});
		},
		onLoad: function(fn) {
			$(window).on('load', function(){
				fn($(document));
				fns.push(fn);
			});
		},
		now: function(fn) {
			fn($(document));
			fns.push(fn);
		},
		onFonts: function(fonts, fn){
			fn($(document));

			Promise.all(
				fonts.map(function(f){ return (new FontFaceObserver(f.name, f)).load() })
			).then(function() {
				fn($(document), true);
			});

		},
		newContent: function($context) {
			for(var i = 0; i < fns.length; i++){
				fns[i]($context);
			}
		}
	};

})(jQuery);


/* ------------------------------- components/scrollto.js ------------------------------- */
(function($){
	$.scrollTo = function(options) {
		if( $.type(options) == 'number' || $.type(options) == 'string' || options instanceof jQuery )
			options = {position: options};

		options = $.extend(true, {}, $.scrollTo.defaults, options);


		if($.type(options.position) == 'string') {
			options.position = $(options.position);
		}

		var fixedHeaderOffset = 0;
		if(options.position instanceof jQuery){

			if(!options.position.is('a[name]') && options.fixedHeader){
				var $fixedHeader = $(options.fixedHeader);
				var pos = $fixedHeader.css('position');
				if( pos == 'fixed' || pos == 'sticky' )
					fixedHeaderOffset = $fixedHeader.outerHeight() * -1;
			}

			options.position = options.position.offset().top;
		}

		if($('body').hasClass('isSidebarOpen'))
			$('body').removeClass('isSidebarOpen');

		$(options.container).animate({scrollTop: options.position + fixedHeaderOffset - options.offset}, options.speed, _easeOutExpo);
	}

	$.scrollTo.defaults = {
		position: 0,
		fixedHeader: '.Header',
		offset: 0,
		speed: 400,
		container: 'html,body'
	};

	function _easeOutExpo(x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}

})(jQuery);

/* ------------------------------- components/select.js ------------------------------- */
(function($){
var KEY_ENTER = 13,
	KEY_SPACE = 32,
	KEY_LEFT = 37,
	KEY_UP = 38,
	KEY_RIGHT = 39,
	KEY_DOWN = 40,
	KEY_ESCAPE = 27;

$.simpleWidget('cSelect', {

	_dataAttr: 'select',

	_defaults: {
		swap: null
	},

	_create: function(){
		this._createElements();

		if(this.options.swap){
			this.el.addClass('hide@'+this.options.swap+'-down');
			this.$wrapper.addClass('hide@'+this.options.swap+'-up');
		}
		
		this._attachEvents();
	},

	_createElements: function(){
		if(this.el.is('select')){
			this.$select = this.el;
			this.$list = this._select2List(this.el);
		} else {
			this.$list = this._links2List(this.el);
			this.$select = this._list2Select(this.$list);
			if(!this.options.swap)
				this.el.hide();
		}

		this.$select.addClass('input select cSelect-select');

		/* Crear fake select */
		this.$textbox = $('<div>', {class: 'input select cSelect-textbox'});
		this.$combo = $('<div>', {class: 'cSelect-combo'}).append(this.$textbox);

		this._createDropdown();

		this.$wrapper = $("<div>", {class: 'cSelect'});
		this.el.after(this.$wrapper);
		this.$wrapper.append(this.$select).append(this.$combo);
	},

	_createDropdown: function(){
		var that = this;
		/* Crear dropdown */
		this.$dropdown = $('<div>').append(this.$list);
		this.$textbox.dropdown({
			content:  this.$dropdown,
			position: 'bottom',
			arrow:    false,
			appendTo: this.$combo,
			class:    'cSelect-listbox',
			duration: 0,
			updateText: true,
		});
		this.dropdown = this.$textbox.dropdown('instance');

	},

	_attachEvents: function(){
		var that = this;

		this.$select.on('change', function(){
			that._select($(this));
		});

	},

	_select: function($option){
		if($option.attr('data-href'))
			window.location.href = $option.attr('data-href');
	},


	_select2List: function($select){
		var that = this;
		function walk($elements){
			return $elements.map(function(){
				var $element = $(this);

				if( $element.is('optgroup') ) {
					return that._createListGroup({
						title: $element.attr('label'),
						children: walk($element.children())
					}).get();
				} else if($element.is('option')){
					return that._createListOption({
						text: $element.text(),
						value: $element.attr('value'),
						isSelected: $element.prop('selected'),
						isDisabled: $element.prop('disabled')
					}).get();
				}
			});
		}
		return $("<ul>").append(walk($select.children()));
	},

	_links2List: function($links){
		var that = this;
		function walk($elements){
			return $elements.map(function(){
				var $element =  $(this);
				var $firstElement =  $(this).children().first();
				var $subelements =  $(this).children('ul');

				if( $subelements.length ) {
					return that._createListGroup({
						title: $firstElement.text(),
						children: walk($subelements.children())
					}).get();
				} else if($element.is('li')){
					return that._createListOption({
						text: $firstElement.text(),
						href: $firstElement.attr('href'),
						isSelected: $firstElement.hasClass('isSelected'),
						isDisabled: $firstElement.hasClass('isDisabled')
					}).get();
				}
			});
		}
		return $('<ul>').append(walk($links.children('li')));
	},

	_list2Select: function($list){
		var that = this;
		function walk($elements){
			return $elements.map(function(){
				var $element =  $(this);
				var $firstElement = $element.children().first();
				var $subelements =  $(this).children('ul');

				if( $subelements.length ) {
					return that._createSelectGroup({
						title: $firstElement.text(),
						children: walk($subelements.children('li'))
					}).get();
				} else if($element.is('li')){
					return that._createSelectOption({
						text: $firstElement.text(),
						value: $firstElement.attr('data-value'),
						href: $firstElement.attr('data-href'),
						isSelected: $firstElement.hasClass('isSelected'),
						isDisabled: $firstElement.hasClass('isDisabled')
					}).get();
				}
			});
		}
		return $('<select>').append(walk($list.children('li')));

	},

	_createListGroup: function(opts){
		return $('<li>')
				.attr('tabindex', '-1')
				.append($('<div>', {class: 'dropdown-group-title'}).text(opts.title))
				.append($('<ul>').append(opts.children))
				.addClass('dropdown-group');
	},
	_createSelectGroup: function(opts){
		return $('<optgroup>')
				.attr('label', opts.title)
				.append(opts.children);
	},

	_createListOption: function(opts){
		var $item;
		if(opts.href){
			$item = $('<a>')
				.attr('href', opts.href);
		} else {
			$item = $('<button>')
				.attr('value', opts.value);
		}
		$item.text(opts.text)
			.addClass('dropdown-item');
		if(opts.isSelected)
				$item.addClass('isSelected');
		if(opts.isDisabled)
				$item.addClass('isDisabled');
		return $('<li>').append($item);
	},
	_createSelectOption: function(opts){
		return $('<option>')
				.text(opts.text)
				.attr('value', opts.value)
				.attr('data-href', opts.href)
				.prop('selected', opts.isSelected)
				.prop('disabled', opts.isDisabled);
	},

});

})(jQuery);


/* ------------------------------- components/send-once.js ------------------------------- */
(function($){

$.simpleWidget('sendOnce', {
	_defaults: {
		msg:	false
	},
	_create: function(){
		var btnSelector = "[type='submit'],button:not([type])";
		var $form = this.el;
		var $buttons = $form.find(btnSelector);

		$buttons.attr('autocomplete', 'off')
		var that = this;
		$form.on('submit', function(e){
			setTimeout(function(){
				$buttons.attr('disabled', 'disabled');
			}, 1);
			var $clickedBtn = $(e.originalEvent.explicitOriginalTarget).filter(btnSelector);
			if(that.options.msg && $clickedBtn.length) {
				if($clickedBtn.is('input'))
					$clickedBtn.val(that.options.msg);
				else
					$clickedBtn.text(that.options.msg);
			}
		});
	}

});

})(jQuery);


/* ------------------------------- components/sidebar.js ------------------------------- */
$(document).ready(function(){
	var $sidebar = $("#sidebar");

	$sidebar.on('click', function(e){
		e.stopPropagation();
	});
	$('body').on('click', '.sidebar-trigger', function(e){
		if(!$('body').hasClass('isSidebarOpen')){
			open();
			e.stopPropagation();
		}
	});

	$sidebar.on('click.menu', '.SidebarSecondaryMenu-link-level-0, SidebarSecondaryMenu-link-level-1', function(e){
		var menu = $(this).next('.menu');
		if(menu.length){
			menu.toggle();
			$(this).parent().toggleClass('isOpen');
			e.preventDefault();
		}
	});

	function open(){
		$('body').addClass('isSidebarOpen');

		$('body').on('click.sidebar', function(e){
			close();
		});

		location.hash = '#sidebar';
		$(window).on('hashchange.sidebar', function(){
			if(location.hash != '#sidebar'){
				close();
			}
		});
	}
	function close(){
		$('body').removeClass('isSidebarOpen');
		$('body').off('click.sidebar');
		$(window).off('hashchange.sidebar');
		if(location.hash == '#sidebar'){
			window.history.back();
		}
	}
});


/* ------------------------------- components/smooth-scroll.js ------------------------------- */
(function($){
	$.fn.smoothScroll = function(options) {
		
		this.on('click', "a[href*='#']", function(e){
			var baseURL = location.origin+location.pathname+location.search;
			if(this.href.indexOf(baseURL+'#') === 0) {
			    e.preventDefault();
			    var id = this.hash.substr(1);
			    options.position = $("a[name='"+id+"'], #"+id);
			    $.scrollTo(options);
			}

		});
	}

})(jQuery);

/* ------------------------------- components/stickyScroll.js ------------------------------- */
(function( $ ) {
var uniqueid = 0;
$.fn.stickyScroll = function(opts) {

	$(this).each(function(){
		
		var content = this;
		var $content = $(content);

		if(opts == 'destroy'){
			var data = $content.data('stickyScroll');
			$content.data('stickyScroll', null);
			data.$scrollbar.remove();
			$content.off('scroll.stickyScroll');
			$(window).off('scroll.stickyScroll'+data.id);
			$(window).off('resize.stickyScroll'+data.id);
			return;
		}
		if($content.data('stickyScroll'))
			return;
		
		uniqueid++;

		var data = {id: uniqueid};
		$content.data('stickyScroll', data);

		//$content.css({'overflow-x': 'auto'});

		var $scrollbar = data.$scrollbar = $('<div><div></div></div>');
		$scrollbar.css({
			overflowX:'scroll',
			position:'fixed',
			bottom:0,
			zIndex: 1000,
			opacity: 0,
			//transition: 'opacity .1s'
		});
		var fakecontent = $scrollbar.find('div');
		fakecontent.height(1);
		$('body').append($scrollbar);
		
		function getOffsets(){
			var offset = $content.offset();
			offset.width = content.clientWidth;
			offset.bottom = offset.top + $content.outerHeight();
			return offset;
		}
		
		function getWindowOffsets(){
			return {top: $(window).scrollTop(), bottom: $(window).scrollTop() + $(window).height() };
		}
		function should_activate() {
			var windowOffsets = getWindowOffsets();
			var offsets = getOffsets();

			return content.scrollWidth > offsets.width && offsets.top < windowOffsets.bottom && offsets.bottom > windowOffsets.bottom;
		}
		
		function fit() {
			var offsets = getOffsets();
			fakecontent.width(content.scrollWidth);
			$scrollbar.css({left: offsets.left, width: offsets.width });
		}

		var is_active = false;
		function activate() {
			$scrollbar.css('opacity', '1');
			is_active = true;
		}
		function deactivate(){
			$scrollbar.css('opacity', '0');
			is_active = false;
		}

		function onMainscroll(){
			if(!is_active && should_activate()){
				activate();
				fit();
			} else if (is_active && !should_activate()){
				deactivate();
			}
		}
		
		var lastScroll;
		function onFakeScroll() {
			if ($scrollbar.get(0).scrollLeft === lastScroll) return;
			content.scrollLeft = lastScroll = $scrollbar.get(0).scrollLeft;
		}
		
		function sync() {
			if (content.scrollLeft === lastScroll) return;
			$scrollbar.get(0).scrollLeft = lastScroll = content.scrollLeft;
		}
		
		$scrollbar.on('scroll.stickyScroll', onFakeScroll);
		$content.on('scroll.stickyScroll', sync);

		onMainscroll();
		$(window).on('scroll.stickyScroll.stickyScroll'+data.id, $.throttle(100, onMainscroll));
		$(window).on('resize.stickyScroll.stickyScroll'+data.id, $.throttle(100, onMainscroll));
	});

/*    function getScrollParent($el){
		var position = $el.css( "position" ),
			excludeStaticParent = position === "absolute",
			overflowRegex = /(auto|scroll)/,
			scrollParent = $el.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $(document.body) : scrollParent;
	}*/
};
})( jQuery );

/* ------------------------------- components/tarjetas.js ------------------------------- */
/*var maxHeight = -1;

$('.Tarjetas-item').each(function(){
 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
});

$('.Tarjetas-item').each(function() {
 $(this).height(maxHeight);
});*/


/* ------------------------------- components/tooltip.js ------------------------------- */
(function($){

$.simpleWidget('tooltip', {
	_defaults: {
		arrow:    true,
		position: 'auto',
		theme:    'dark',
		duration: 200,
		delay:    100,
		animation:'shift',
	},
	_create: function(){
		var options = {
			animateFill: false,
			performance: true,
			arrow:       this.options.arrow,
			position:    this.options.position,
			theme:       this.options.theme,
			duration:    this.options.duration,
			delay:       this.options.delay,
			animation:   this.options.animation,
		};
		if(options.animation == 'pop'){
			options.animation = 'scale';
			options.inertia = true;
		}
		tippy(this.el.get(0), options);
	}

});

})(jQuery);

/* ------------------------------- classes/common.js ------------------------------- */
/* NO IMAGE */
$('.ViewFull-children--line').each(function(){
	var $images = $('.ViewLine-image > img', this);
	if(!$images.length)
		$(this).addClass('ViewFull-children--no-images');
});
$('.ViewFull-children--grid').each(function(){
	var $images = $('.ViewLine-image > img', this);
	if(!$images.length)
		$(this).addClass('ViewFull-children--no-images');
});

/* DOT DOT DOT */
$('.ViewLine-ellipsis, .ViewGrid-title, .ViewGrid-overlay').dotdotdot({watch: 'window'});


/* ------------------------------- section/mapa.js ------------------------------- */
$(".sectionMapa").each(function(){

	var locations = $.parseJSON($('.locations', this).text());

	var $mapa = $('.sectionMapa-map', this);
	$mapa.addClass('BlockLoading');
	var geocoder = new google.maps.Geocoder();



	var map = new google.maps.Map($('.sectionMapa-map', this).get(0), {
	});
	var oms = new OverlappingMarkerSpiderfier(map, { 
	  markersWontMove: true, 
	  markersWontHide: true,
	  basicFormatEvents: true
	});
	// Add a marker clusterer to manage the markers.
	var markerCluster = new MarkerClusterer(map, [], {
		imagePath: '/design/cacaav_com_ar2/images/markerclusterer/m',
		maxZoom:15,
		averageCenter:true,
		gridSize: 30,
		minimumClusterSize: 3
	});

	locations.forEach(function(ubicacion){
		ubicacion.latlng = {lat: parseFloat(ubicacion.lat), lng: parseFloat(ubicacion.lng)};
		delete ubicacion.lat;
		delete ubicacion.lng;
	});

	$('#provincia', this).on('change', function(){
		var provincia = {id: $(this).val(), nombre: $(':selected', this).text()};
		update(provincia.id ? provincia : null);
	});




	update();


	function update(provincia){
		var bounds = showLocations(provincia);

		if(bounds.isEmpty()){
			$mapa.addClass('isActive');
			geocoder.geocode({componentRestrictions:{country:'AR', administrativeArea: provincia.nombre}},function(result,status){
				map.fitBounds(result[0].geometry.bounds);
				showLocations();
				$mapa.removeClass('isActive');
			});
		} else {
			// Don't zoom in too far on only one marker
			if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
			   var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.05, bounds.getNorthEast().lng() + 0.05);
			   var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.05, bounds.getNorthEast().lng() - 0.05);
			   bounds.extend(extendPoint1);
			   bounds.extend(extendPoint2);
			}
			map.fitBounds(bounds);
		}
	}

	function showLocations(provincia){
		markerCluster.clearMarkers();
		
		var bounds = new google.maps.LatLngBounds();
		var markers = [];

		locations.forEach(function(ubicacion) {
			if( !provincia || ubicacion.provincia == provincia.id){
				bounds.extend(ubicacion.latlng);
				var marker = createMarker(ubicacion);
				oms.addMarker(marker);
				markers.push(marker);
			}
		});
		markerCluster.addMarkers(markers);
		return bounds;
	}

	function createMarker(ubicacion){
		var marker = new google.maps.Marker({
			position: ubicacion.latlng,
			provincia: ubicacion.provincia
		});
		marker.addListener('spider_click', function() {
			$mapa.addClass('isActive');
            $.get(ubicacion.link, function(response){
				$mapa.removeClass('isActive');
				var $content = $('#maincontent', response).children().wrapAll("<div>").parent();
				$.runJS.newContent($content);
                $.magnificPopup.open({
                  items: {
                    src: $content,
                    type: 'inline'
                  }
                });
            });
		});
		return marker;
	}	
});
