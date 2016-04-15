var module=module||{},EvDa=module.exports=function(){"use strict";var n=Array.prototype.slice,t=Object.prototype.toString,e=[].isArray||function(n){return"[object Array]"===t.call(n)},r=function(n){return!!(n&&n.constructor&&n.call&&n.apply)},u=function(n){return!!(""===n||n&&n.charCodeAt&&n.substr)},o=function(n){return"[object Number]"===t.call(n)},c=function(n){return u(n)||o(n)},i=function(n){return r(n)||u(n)||o(n)||e(n)?!1:null==n?"object"===String(n):"[object Object]"===t.call(n)||!0},a=function(t){return n.call(t)},l=[].forEach?function(n,t){if(c(n))return l([n],t);if(e(n)||n.length)a(n).forEach(t);else for(var r in n)t(r,n[r])}:function(n,t){if(c(n))return l([n],t);if(e(n))for(var r=0,u=n.length;u>r;r++)t(n[r],r);else for(var o in n)t(o,n[o])},f=function(n){return n.length?n[n.length-1]:void 0},s=function(n){var t=[];for(var e in n)t.push(n[e]);return t},v={}.keys||function(n){if(e(n))return n;var t=[];for(var r in n)t.push(r);return t},d=function(n,t){var e=[];return l(n,function(n){n!==t&&e.push(n)}),e},p=function(n){var t,e=[];return l(v(n).sort(),function(n){n!=t&&(t=n,e.push(n))}),e},h=function(n,t){var e=[];return l(n,function(n){t(n)&&e.push(n)}),e},g=function(n){return n&&"length"in n?n.length:0},x=[].map?function(n,t){return n.map(t)}:function(n,t){for(var e=[],r=0,u=n.length;u>r;r++)e.push(t(n[r],r));return e},y=function(t){return e(t)?n.call(t):i(t)?b(t,{}):t},b=function(t){return l(n.call(arguments,1),function(n){for(var e in n)void 0!==n[e]&&(t[e]=n[e])}),t},m=function(n){return n.match(/[?*]/)},$=function(n,t){return m(n)?h(v(t?t:data),function(t){return t.match(n)}):n},j=function(n,t){var r={};return e(n)?(l(n,function(n){r[n]=t(n)}),r):t(n)},w="first",_="on",k="after",A="test",D="or",E="set",O=[w,_,k,A,D],P={once:1},S=function(t){function c(n){if(n in z)return z[n];var t=n.split("."),e=t.pop(),r=t.join(".");if(r){var u=c(r);if(i(u)&&e in u)return u[e]}}function C(t,u,o,a){var f=n.call(arguments);if(void 0===t)throw"Undefined passed in as first argument.";if(e(t))return f.shift(),x(t,function(n){return C.apply(C.context,[n].concat(f))});if(i(t)){if(1===f.length&&-1===t.constructor.toString().search(/{\s+\[native code\]\s+}/))return void(C.context=t);var s={};return a=o||{},o=u,a.noexec=1,l(t,function(n,t){s[n]=C(n,t,o,a)}),a.bypass||l(s,function(n,e){r(s[n])&&!r(t[n])&&(t[n]=s[n]())}),N(v(s)[0]),t}return 1===f.length?j(t,c):C[r(u)||e(u)&&r(u[0])?_:E].apply(this,f)}function F(n,t){Q[n]||(Q[n]=[]),Q[n].push([t,new Date]),Q[n].length>J&&Q[n].shift()}function R(n){l(n.$.ref,function(t){var e=m(t)?H:V;e[t]=d(e[t],n)})}function L(n,t,r){if(e(n)){var u=n.pop();return L($(u),function(e,r){var u=1===n.length?n[0]:n;return L(u,t,r)},r)}if(i(n))return l(n,function(t,e){m(t)?b(t,j(t,function(n){return L(t,e,r)})):n[t]=L(t,e,r)}),n;var o=E+n;return V[o]&&(n in z||V[o](function(t){C.set.call(C.context,n,t,r)}),delete V[o]),t?n in z?t.call(C.context,z[n],r):C(n,t,b(r||{},P)):n in z}function M(n,t,e,r){if(!n.$.norun){r.order++;var u=n.call(t,e,r,r.meta);return n.once&&R(n),n.$.ix++,n.$.last=new Date,u}}function N(t){var e=t.split("."),r=e.pop(),u=[];u[r]=z[t],C.extend.apply(C.context,[e.join("."),u].concat(n.call(arguments,1)))}function T(n,t,r,u,c){c=c||0;var i=x(e(n)?n:[n],function(n){var e=o(z[n])?z[n]:c;return C.set(n,t(e,r),u)});return e(n)?i:i[0]}var U={},q={},z={},B={},G=[],H={},I=[],J=10,K={},Q={},V={},W={data:z,events:V,log:Q,lastReturn:K,locks:U,testLocks:q,trace:I,globs:H};return l(O,function(t){C[t]=function(u,o,c){if(e(o)){var i=n.call(arguments,2);return x(o,function(n){return C[t].apply(C.context,[u,n].concat(i))})}var a=V;return o?(o.$||(o.$={ref:[],ix:0,last:!1,line:[]}),o.$.ref.push(t+u),o.$.line.push((new Error).stack),m(u)&&(a=H),(a[t+u]||(a[t+u]=[])).push(o),l(O,function(t){t in o||(o[t]=function(e){var c=n.call(arguments);return r(e)&&(c=[u].concat(c)),"len"in o||(o[0]=o,o.len=0),o.len++,o[o.len]=C[t].apply(C.context,c),o})}),b(o,c)):a[t+u]}}),T.add=function(n,t){return n+t},b(C,{_:{},context:this,list:{},isPaused:!1,db:z,debug:function(n,t){if(!n)return W;var e={lastReturn:K[n],lock:U[n],log:Q[n],value:z[n]};return t?e.events=V[t+n]:e.events=j(O.concat([E]),function(t){return V[t+n]}),e},del:R,whenSet:L,isset:L,pause:function(){return C.isPaused?!1:(C.isPaused=!0,C._.set=C.set,C.set=function(){G.push([E,arguments])},!0)},play:function(){if(C.isPaused){C.isPaused=!1;var n=S();return C.set=C._.set,l(G,function(t){n[t[0]].apply(n,t[1])}),G=[],C(n.db),!0}return!1},setter:function(n,t){return V[E+n]=t,V[_+n]?L(n):void 0},when:function(t,o,c){if(i(t)){var a={},f={},v=function(n,t){f[t.key]=!1,t()},d=function(t,e){f[e.key]=!0,-1===s(f).indexOf(!1)&&o.apply(C.context,n.call(arguments))};return l(t,function(n,t){a[n+"-test"]=C.test(n,v),a[n]=C.when(n,t,d),f[n]=!1}),a}if(u(o))try{var p=new Function("x","return x"+o);p(),o=p}catch(h){}else if(2===arguments.length)return C.isset(t,o);return C(t,function(t){(e(o)&&o.sort().join("")===t.sort().join("")||r(o)&&o(t)||t===o)&&c.apply(C.context,n.call(arguments))})},empty:function(n){if(0===arguments.length)for(var n in z)delete z[n];else l(arguments,function(n){n in z&&(e(z[n])?C.set(n,[],{},{bypass:1,noexec:1}):C.set(n,null,{},{bypass:1,noexec:1}))})},incr:function(n,t,e){var r=u(t)?new Function("val","return val"+t):T.add;return T(n,r,t||1,e)},decr:function(n,t,e){return t=t||1,T(n,T.add,-(t||1),e,1)},push:function(n,t,e){return C.set(n,[].concat(z[n]||[],[t]),e)},pop:function(n,t){return C.set(n,z[n].slice(0,-1),t)},group:function(n){var t=a(arguments),n=t.shift(),e=C.apply(0,t);return C.list[n]||(C.list[n]=[]),r(e)?C.list[n].push(e):l(e,function(t,e){C.list[n].push(t)}),function(){return C.group.apply(0,[n].concat(a(arguments)))}},extend:function(t,e){return C.set.apply(C.context,[t,b({},z[t]||{},e)].concat(n.call(arguments,2)))},count:function(n){return 0===arguments.length?Math.max.apply(this,s(B)):B[n]},setContext:function(n){C.context=n},set:function(t,e,r,u){u=u||{};var o,c=u.bypass,i=u.coroutine||function(){return!0},a="value"in u,f=u.noexec;if(1===arguments.length){var s=function(){C.set.apply(C.context,[t].concat(n.call(arguments)))};return C.set.call(C.context,t,void 0),s}if(U[t]>0)return l(I,function(n){n.call(C.context,b({locked:t},h))}),z[t];U[t]=(U[t]||0)+1;try{var v,d,p=A+t,h=n.call(arguments),x=g(V[p]),m=0,$=x&&!c,j=function(){l(V[D+t]||[],function(n){M(n,C.context,a?u.value:E.value,E)})},E=$?function(n){var e;return d|=n===!1,--x?(m++,i(E,!1)?(e=M(V[p][m],C.context,a?u.value:E.value,E),e!==!0&&e!==!1||E(e)):j()):d?j():i(E,!0)?C.set(t,E.value,E.meta,{bypass:1,order:E.order}):j(),n}:{};if(E.old=y(z[t]),b(E,{order:"order"in u?u.order:-1,meta:r||{},done:E,result:E,key:t,value:e}),$)U[t]--,q[t]!==!0&&(q[t]=!0,i(E,!1)?(o=M(V[p][m],C.context,a?u.value:E.value,E),o!==!0&&o!==!1||E(o)):j(),q[t]=!1),v=z[t];else if(l(I,function(n){n.call(C.context,h)}),i(E,!0)&&(e=E.value,!u.onlychange||e!==z[t])){u.noset||(F(t,e),z[t]=e,""!=t&&(B[t]=(B[t]||0)+1));var O=arguments,P=function(){return l((V[w+t]||[]).concat(V[_+t]||[]),function(n){E.last=M(n,C.context,e,E)}),t.length>0&&(delete u.coroutine,N.apply(C.context,[t].concat(n.call(O,2)))),l(V[k+t]||[],function(n){E.last=M(n,C.context,e,E)}),K[t]=E.last,e};f?(N.apply(C.context,[t].concat(n.call(O,2))),v=P):v=P.call(C.context)}}catch(S){throw S}finally{U[t]=0}return v},fire:function(n,t){l(n,function(n){C.set(n,z[n],t,{noset:!0})})},once:function(n,t,r){return i(n)&&(n=s(n)),e(n)?x(n,function(n){C.once.call(C.context,n,t,r)}):t?C.once(C(n,t,r)):b(n,P)},enable:function(n){return l(C.list[n],function(t){t.$.norun&&t.$.norun[n]&&delete t.$.norun[n],0===g(t.$.norun)&&delete t.$.norun}),C.list[n]},osetadd:function(n,t,r){var u=z[n]||[];return C(n,t,r,{coroutine:function(n,r){var o=e(n.value)?n.value:[n.value];return n.set=y(u),l(o,function(t){-1===n.set.indexOf(t)&&n.set.push(t)}),r&&(n.value=n.set),n.oper={name:"osetadd",value:t},u.length!=n.set.length}})},setadd:function(n,t,r){var u=z[n]||[];return C(n,t,r,{coroutine:function(n,r){var o=e(n.value)?n.value:[n.value];return n.set=p(u.concat(o)),r&&(n.value=n.set),n.oper={name:"setadd",value:t},u.length!=n.set.length}})},settoggle:function(n,t,e){var r=-1===(z[n]||[]).indexOf(t)?"add":"del";return C[E+r](n,t,e)},setdel:function(n,t,e){var r=z[n]||[],u=d(r,t);return r.length!=u.length?C(n,u,e,{coroutine:function(n,e){return e&&(n.oper={name:"setdel",value:t}),!0},value:t}):u},disable:function(n){return l(C.list[n],function(t){(t.$.norun||(t.$.norun={}))[n]=!0}),C.list[n]},unset:function(){var n=!0;return l(arguments,function(t){n&=t in z;var e,r,u,o=t.split("."),c="",i=o.length,a=o[i-1];for(e=0;i>e;e++)if(c=o.slice(0,e).join("."),u=z[c]){for(r=e;i-1>r;r++)u=u[o[r]];delete u[a]}delete z[t]}),n},find:function(n){return h(v(z),function(t){return t.match(n)})},changed:function(n,t){return C.on(n,function(n,e){var r=g(n),u=g(e.old);r-u===1?t.call(C.context,f(n)):r>u&&t.call(C.context,a(n).slice(u))})},sniff:function(){var t={"":1},e=function(n){return t[n[0]]||console.log(n)},r=function(){},o=e;return I.unshift(function(n){o(n)}),C.sniff=function(){var c=n.call(arguments),i=[];return l(c,function(n){u(n)?(t[n]?delete t[n]:t[n]=1,i.push([n,t[n]])):(o=n?e:r,i.push(n))}),c.length?i:v(t)},C.sniff.apply(C.context,arguments)}}),C.setAdd=C.setadd,C.setToggle=C.settoggle,C.osetAdd=C.osetadd,C.osetdel=C.setdel,C.osetDel=C.setdel,C.setDel=C.setdel,C.isSet=C.isset,C.mod=C.incr,C.get=C,C.change=C.on,C.add=C.push,l(S._ext,function(t,e){C[t]=function(){e.apply(C.context,[C].concat(n.call(arguments)))}}),arguments.length>0&&C(t),C};return S._ext={},S.extend=function(n,t){S._ext[n]=t},S.isArray=e,S}();EvDa.__version__="0.2-unified-debugging-1-gc8fb598";
//# sourceMappingURL=evda.map.js
