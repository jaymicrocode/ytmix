var module=module||{},EvDa=module.exports=function(){"use strict";var n=Array.prototype.slice,t=Object.prototype.toString,e=[].isArray||function(n){return"[object Array]"===t.call(n)},r=function(n){return!!(n&&n.constructor&&n.call&&n.apply)},u=function(n){return!!(""===n||n&&n.charCodeAt&&n.substr)},o=function(n){return"[object Number]"===t.call(n)},c=function(n){return u(n)||o(n)},i=function(n){return r(n)||u(n)||o(n)||e(n)?!1:null==n?"object"===String(n):"[object Object]"===t.call(n)||!0},a=function(t){return n.call(t)},l=[].forEach?function(n,t){if(c(n))return l([n],t);if(e(n)||n.length)a(n).forEach(t);else for(var r in n)t(r,n[r])}:function(n,t){if(c(n))return l([n],t);if(e(n))for(var r=0,u=n.length;u>r;r++)t(n[r],r);else for(var o in n)t(o,n[o])},f=function(n){return n.length?n[n.length-1]:void 0},s=function(n){var t=[];for(var e in n)t.push(n[e]);return t},v={}.keys||function(n){if(e(n))return n;var t=[];for(var r in n)t.push(r);return t},d=function(n,t){var e=[];return l(n,function(n){n!==t&&e.push(n)}),e},p=function(n){var t,e=[];return l(v(n).sort(),function(n){n!=t&&(t=n,e.push(n))}),e},h=function(n,t){var e=[];return l(n,function(n){t(n)&&e.push(n)}),e},g=function(n){return n&&"length"in n?n.length:0},x=[].map?function(n,t){return n.map(t)}:function(n,t){for(var e=[],r=0,u=n.length;u>r;r++)e.push(t(n[r],r));return e},y=function(t){return e(t)?n.call(t):i(t)?m(t,{}):t},m=function(t){return l(n.call(arguments,1),function(n){for(var e in n)void 0!==n[e]&&(t[e]=n[e])}),t},b=function(n){return n.match(/[?*]/)},$=function(n,t){return b(n)?h(v(t?t:data),function(t){return t.match(n)}):n},j=function(n,t){var r={};return e(n)?(l(n,function(n){r[n]=t(n)}),r):t(n)},w="first",_="on",k="after",A="test",D="or",E="set",O=[w,_,k,A,D],P={once:1},S=function(t){function c(n){if(n in B)return B[n];var t=n.split("."),e=t.pop(),r=t.join(".");if(r){var u=c(r);if(i(u)&&e in u)return u[e]}}function C(t,u,o,a){var f=n.call(arguments);if(void 0===t)throw"Undefined passed in as first argument.";if(e(t))return f.shift(),x(t,function(n){return C.apply(C.context,[n].concat(f))});if(i(t)){if(1===f.length&&-1===t.constructor.toString().search(/{\s+\[native code\]\s+}/))return void(C.context=t);var s={};return a=o||{},o=u,a.noexec=1,l(t,function(n,t){s[n]=C(n,t,o,a)}),a.bypass||l(s,function(n,e){r(s[n])&&!r(t[n])&&(t[n]=s[n]())}),T(v(s)[0]),t}return 1===f.length?j(t,c):C[r(u)||e(u)&&r(u[0])?_:E].apply(this,f)}function F(n,t){X[n]||(X[n]=[]),X[n].push(t||W[n])}function R(n,t){V[n]||(V[n]=[]),V[n].push([t,new Date]),V[n].length>K&&V[n].shift()}function L(n){l(n.$.ref,function(t){var e=b(t)?I:W;e[t]=d(e[t],n),F(t,n)})}function M(n,t,r){if(e(n)){var u=n.pop();return M($(u),function(e,r){var u=1===n.length?n[0]:n;return M(u,t,r)},r)}if(i(n))return l(n,function(t,e){b(t)?m(t,j(t,function(n){return M(t,e,r)})):n[t]=M(t,e,r)}),n;var o=E+n;return W[o]&&(n in B||W[o](function(t){C.set.call(C.context,n,t,r)}),F(o),delete W[o]),t?n in B?t.call(C.context,B[n],r):C(n,t,m(r||{},P)):n in B}function N(n,t,e,r){if(!n.$.norun){r.order++;var u=n.call(t,e,r,r.meta);return n.once&&L(n),n.$.ix++,n.$.last=new Date,u}}function T(t){var e=t.split("."),r=e.pop(),u=[];u[r]=B[t],C.extend.apply(C.context,[e.join("."),u].concat(n.call(arguments,1)))}function U(n,t,r,u,c){c=c||0;var i=x(e(n)?n:[n],function(n){var e=o(B[n])?B[n]:c;return C.set(n,t(e,r),u)});return e(n)?i:i[0]}var q={},z={},B={},G={},H=[],I={},J=[],K=10,Q={},V={},W={},X={},Y={data:B,events:W,removed:X,log:V,lastReturn:Q,locks:q,testLocks:z,trace:J,globs:I};return l(O,function(t){C[t]=function(u,o,c){if(e(o)){var i=n.call(arguments,2);return x(o,function(n){return C[t].apply(C.context,[u,n].concat(i))})}var a=W;return o?(o.$||(o.$={ref:[],ix:0,last:!1,line:[]}),o.$.ref.push(t+u),o.$.line.push((new Error).stack),b(u)&&(a=I),(a[t+u]||(a[t+u]=[])).push(o),l(O,function(t){t in o||(o[t]=function(e){var c=n.call(arguments);return r(e)&&(c=[u].concat(c)),"len"in o||(o[0]=o,o.len=0),o.len++,o[o.len]=C[t].apply(C.context,c),o})}),m(o,c)):a[t+u]}}),U.add=function(n,t){return n+t},m(C,{_:{},context:this,list:{},isPaused:!1,db:B,debug:function(n,t){if(!n)return Y;var e={lastReturn:Q[n],lock:q[n],log:V[n],value:B[n]};return t?(e.events=W[t+n],e.removed=X[t+n]):(e.events=j(O.concat([E]),function(t){return W[t+n]}),e.removed=j(O.concat([E]),function(t){return X[t+n]})),e},del:L,whenSet:M,isset:M,pause:function(){return C.isPaused?!1:(C.isPaused=!0,C._.set=C.set,C.set=function(){H.push([E,arguments])},!0)},play:function(){if(C.isPaused){C.isPaused=!1;var n=S();return C.set=C._.set,l(H,function(t){n[t[0]].apply(n,t[1])}),H=[],C(n.db),!0}return!1},setter:function(n,t){return W[E+n]=t,W[_+n]?M(n):void 0},when:function(t,o,c){if(i(t)){var a={},f={},v=function(n,t){f[t.key]=!1,t()},d=function(t,e){f[e.key]=!0,-1===s(f).indexOf(!1)&&o.apply(C.context,n.call(arguments))};return l(t,function(n,t){a[n+"-test"]=C.test(n,v),a[n]=C.when(n,t,d),f[n]=!1}),a}if(u(o))try{var p=new Function("x","return x"+o);p(),o=p}catch(h){}else if(2===arguments.length)return C.isset(t,o);return C(t,function(t){(e(o)&&o.sort().join("")===t.sort().join("")||r(o)&&o(t)||t===o)&&c.apply(C.context,n.call(arguments))})},empty:function(n){if(0===arguments.length)for(var n in B)delete B[n];else l(arguments,function(n){n in B&&(e(B[n])?C.set(n,[],{},{bypass:1,noexec:1}):C.set(n,null,{},{bypass:1,noexec:1}))})},incr:function(n,t,e){var r=u(t)?new Function("val","return val"+t):U.add;return U(n,r,t||1,e)},decr:function(n,t,e){return t=t||1,U(n,U.add,-(t||1),e,1)},push:function(n,t,e){return C.set(n,[].concat(B[n]||[],[t]),e)},pop:function(n,t){return C.set(n,B[n].slice(0,-1),t)},group:function(n){var t=a(arguments),n=t.shift(),e=C.apply(0,t);return C.list[n]||(C.list[n]=[]),r(e)?C.list[n].push(e):l(e,function(t,e){C.list[n].push(t)}),function(){return C.group.apply(0,[n].concat(a(arguments)))}},extend:function(t,e){return C.set.apply(C.context,[t,m({},B[t]||{},e)].concat(n.call(arguments,2)))},count:function(n){return 0===arguments.length?Math.max.apply(this,s(G)):G[n]},setContext:function(n){C.context=n},set:function(t,e,r,u){u=u||{};var o,c=u.bypass,i=u.coroutine||function(){return!0},a="value"in u,f=u.noexec;if(1===arguments.length){var s=function(){C.set.apply(C.context,[t].concat(n.call(arguments)))};return C.set.call(C.context,t,void 0),s}if(q[t]>0)return l(J,function(n){n.call(C.context,m({locked:t},h))}),B[t];q[t]=(q[t]||0)+1;try{var v,d,p=A+t,h=n.call(arguments),x=g(W[p]),b=0,$=x&&!c,j=function(){l(W[D+t]||[],function(n){N(n,C.context,a?u.value:E.value,E)})},E=$?function(n){var e;return d|=n===!1,--x?(b++,i(E,!1)?(e=N(W[p][b],C.context,a?u.value:E.value,E),e!==!0&&e!==!1||E(e)):j()):d?j():i(E,!0)?C.set(t,E.value,E.meta,{bypass:1,order:E.order}):j(),n}:{};if(E.old=y(B[t]),m(E,{order:"order"in u?u.order:-1,meta:r||{},done:E,result:E,key:t,value:e}),$)q[t]--,z[t]!==!0&&(z[t]=!0,i(E,!1)?(o=N(W[p][b],C.context,a?u.value:E.value,E),o!==!0&&o!==!1||E(o)):j(),z[t]=!1),v=B[t];else if(l(J,function(n){n.call(C.context,h)}),i(E,!0)&&(e=E.value,!u.onlychange||e!==B[t])){u.noset||(R(t,e),B[t]=e,""!=t&&(G[t]=(G[t]||0)+1));var O=arguments,P=function(){return l((W[w+t]||[]).concat(W[_+t]||[]),function(n){E.last=N(n,C.context,e,E)}),t.length>0&&(delete u.coroutine,T.apply(C.context,[t].concat(n.call(O,2)))),l(W[k+t]||[],function(n){E.last=N(n,C.context,e,E)}),Q[t]=E.last,e};f?(T.apply(C.context,[t].concat(n.call(O,2))),v=P):v=P.call(C.context)}}catch(S){throw S}finally{q[t]=0}return v},fire:function(n,t){l(n,function(n){C.set(n,B[n],t,{noset:!0})})},once:function(n,t,r){return i(n)&&(n=s(n)),e(n)?x(n,function(n){C.once.call(C.context,n,t,r)}):t?C.once(C(n,t,r)):m(n,P)},enable:function(n){return l(C.list[n],function(t){t.$.norun&&t.$.norun[n]&&delete t.$.norun[n],0===g(t.$.norun)&&delete t.$.norun}),C.list[n]},osetadd:function(n,t,r){var u=B[n]||[];return C(n,t,r,{coroutine:function(n,r){var o=e(n.value)?n.value:[n.value];return n.set=y(u),l(o,function(t){-1===n.set.indexOf(t)&&n.set.push(t)}),r&&(n.value=n.set),n.oper={name:"osetadd",value:t},u.length!=n.set.length}})},setadd:function(n,t,r){var u=B[n]||[];return C(n,t,r,{coroutine:function(n,r){var o=e(n.value)?n.value:[n.value];return n.set=p(u.concat(o)),r&&(n.value=n.set),n.oper={name:"setadd",value:t},u.length!=n.set.length}})},settoggle:function(n,t,e){var r=-1===(B[n]||[]).indexOf(t)?"add":"del";return C[E+r](n,t,e)},setdel:function(n,t,e){var r=B[n]||[],u=d(r,t);return r.length!=u.length?C(n,u,e,{coroutine:function(n,e){return e&&(n.oper={name:"setdel",value:t}),!0},value:t}):u},disable:function(n){return l(C.list[n],function(t){(t.$.norun||(t.$.norun={}))[n]=!0}),C.list[n]},unset:function(){var n=!0;return l(arguments,function(t){n&=t in B;var e,r,u,o=t.split("."),c="",i=o.length,a=o[i-1];for(e=0;i>e;e++)if(c=o.slice(0,e).join("."),u=B[c]){for(r=e;i-1>r;r++)u=u[o[r]];delete u[a]}delete B[t]}),n},find:function(n){return h(v(B),function(t){return t.match(n)})},changed:function(n,t){return C.on(n,function(n,e){var r=g(n),u=g(e.old);r-u===1?t.call(C.context,f(n)):r>u&&t.call(C.context,a(n).slice(u))})},sniff:function(){var t={"":1},e=function(n){return t[n[0]]||console.log(n)},r=function(){},o=e;return J.unshift(function(n){o(n)}),C.sniff=function(){var c=n.call(arguments),i=[];return l(c,function(n){u(n)?(t[n]?delete t[n]:t[n]=1,i.push([n,t[n]])):(o=n?e:r,i.push(n))}),c.length?i:v(t)},C.sniff.apply(C.context,arguments)}}),C.setAdd=C.setadd,C.setToggle=C.settoggle,C.osetAdd=C.osetadd,C.osetdel=C.setdel,C.osetDel=C.setdel,C.setDel=C.setdel,C.isSet=C.isset,C.mod=C.incr,C.get=C,C.change=C.on,C.add=C.push,l(S._ext,function(t,e){C[t]=function(){e.apply(C.context,[C].concat(n.call(arguments)))}}),arguments.length>0&&C(t),C};return S._ext={},S.extend=function(n,t){S._ext[n]=t},S.isArray=e,S}();EvDa.__version__="0.2-unified-debugging-6-g4c54d8f";
//# sourceMappingURL=evda.map.js
