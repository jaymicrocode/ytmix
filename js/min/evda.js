!function(){"use strict";if(!self.EvDa){var n=Array.prototype.slice,t=Object.prototype.toString,e=[].isArray||function(n){return"[object Array]"===t.call(n)},r=function(n){return!!(n&&n.constructor&&n.call&&n.apply)},u=function(n){return!!(""===n||n&&n.charCodeAt&&n.substr)},o=function(n){return"[object Number]"===t.call(n)},c=function(n){return u(n)||o(n)},i=function(n){return r(n)||u(n)||o(n)||e(n)?!1:null==n?"object"==String(n):"[object Object]"===t.call(n)||!0},a=function(t){return n.call(t)},l=[].forEach?function(n,t){if(c(n))return l([n],t);if(e(n)||n.length)a(n).forEach(t);else for(var r in n)t(r,n[r])}:function(n,t){if(c(n))return l([n],t);if(e(n))for(var r=0,u=n.length;u>r;r++)t(n[r],r);else for(var o in n)t(o,n[o])},f=function(n){return n.length?n[n.length-1]:void 0},s=function(n){var t=[];for(var e in n)t.push(n[e]);return t},v={}.keys||function(n){if(e(n))return n;var t=[];for(var r in n)t.push(r);return t},p=function(n,t){var e=[];return l(n,function(n){n!==t&&e.push(n)}),e},h=function(n){var t,e=[];return l(v(n).sort(),function(n){n!=t&&(t=n,e.push(n))}),e},d=function(n,t){var e=[];return l(n,function(n){t(n)&&e.push(n)}),e},x=function(n){return n&&"length"in n?n.length:0},g=[].map?function(n,t){return n.map(t)}:function(n,t){for(var e=[],r=0,u=n.length;u>r;r++)e.push(t(n[r],r));return e},y=function(t){return e(t)?n.call(t):i(t)?b(t,{}):t},b=function(t){return l(n.call(arguments,1),function(n){for(var e in n)void 0!==n[e]&&(t[e]=n[e])}),t},$=function(n){return n.match(/[?*]/)},m=function(n,t){return $(n)?d(v(t?t:data),function(t){return t.match(n)}):n},j=function(n,t){var r={};return e(n)?(l(n,function(n){r[n]=t(n)}),r):t(n)},_="first",k="on",w="after",A="test",E="or",D="set",O=[_,k,w,A,E],P={once:1},S=function(t){function c(n){if(n in B)return B[n];var t=n.split("."),e=t.pop(),r=t.join(".");if(r){var u=c(r);if(i(u)&&e in u)return u[e]}}function C(t,u,o,a){var f=n.call(arguments);if(0===f.length)return Q;if(e(t))return f.shift(),g(t,function(n){return C.apply(C.context,[n].concat(f))});if(i(t)){if(1===f.length&&-1===t.constructor.toString().search(/{\s+\[native code\]\s+}/))return void(C.context=t);var s={};return a=o||{},o=u,a.noexec=1,l(t,function(n,t){s[n]=C(n,t,o,a)}),a.bypass||l(s,function(n,e){r(s[n])&&!r(t[n])&&(t[n]=s[n]())}),T(v(s)[0]),t}return 1==f.length?j(t,c):C[r(u)||e(u)&&r(u[0])?k:D].apply(this,f)}function F(n){l(n.$.ref,function(t){var e=$(t)?I:L;e[t]=p(e[t],n)})}function M(n,t,r){if(e(n)){var u=n.pop();return M(m(u),function(e,r){var u=1==n.length?n[0]:n;return M(u,t,r)},r)}if(i(n))return l(n,function(t,e){$(t)?b(t,j(t,function(n){return M(t,e,r)})):n[t]=M(t,e,r)}),n;var o=D+n;return L[o]&&(n in B||L[o](function(t){C.set.call(C.context,n,t,r)}),delete L[o]),t?n in B?t.call(C.context,B[n],r):C(n,t,b(r||{},P)):n in B}function N(n,t,e,r){if(!n.$.norun){var u=n.call(t,e,r);return n.once&&F(n),n.$.ix++,n.$.last=new Date,u}}function T(t){var e=t.split("."),r=e.pop(),u=[];u[r]=B[t],C.extend.apply(C.context,[e.join("."),u].concat(n.call(arguments,1)))}var q={},z={},B={},G={},H=[],I={},J=[],K={},L={},Q={data:B,events:L,locks:q,last:K,trace:J,globs:I};return l(O,function(t){C[t]=function(u,o,c){if(e(o)){var i=n.call(arguments,2);return g(o,function(n){return C[t].apply(C.context,[u,n].concat(i))})}var a=L;return o?(o.$||(o.$={ref:[],ix:0,last:!1,line:[]}),o.$.ref.push(t+u),o.$.line.push((new Error).stack),$(u)&&(a=I),(a[t+u]||(a[t+u]=[])).push(o),l(O,function(t){t in o||(o[t]=function(e){var c=n.call(arguments);return r(e)&&(c=[u].concat(c)),"len"in o||(o[0]=o,o.len=0),o.len++,o[o.len]=C[t].apply(C.context,c),o})}),b(o,c)):a[t+u]}}),b(C,{_:{},context:this,list:{},isPaused:!1,db:B,events:function(n,t){return t?L[t+n]:n?j(O.concat([D]),function(t){return L[t+n]}):L},del:F,whenSet:M,isset:M,pause:function(){return C.isPaused?!1:(C.isPaused=!0,C._.set=C.set,C.set=function(){H.push([D,arguments])},!0)},play:function(){if(C.isPaused){C.isPaused=!1;var n=S();return C.set=C._.set,l(H,function(t){n[t[0]].apply(n,t[1])}),H=[],C(n.db),!0}return!1},setter:function(n,t){return L[D+n]=t,L[k+n]?M(n):void 0},when:function(t,o,c){if(i(t)){var a={},f={},v=function(n,t){f[t.key]=!1,t()},p=function(t,e){f[e.key]=!0,-1==s(f).indexOf(!1)&&o.apply(C.context,n.call(arguments))};return l(t,function(n,t){a[n+"-test"]=C.test(n,v),a[n]=C.when(n,t,p),f[n]=!1}),a}if(u(o))try{var h=new Function("x","return x"+o);h(),o=h}catch(d){}else if(2==arguments.length)return C.isset(t,o);return C(t,function(t){(e(o)&&o.sort().join("")===t.sort().join("")||r(o)&&o(t)||t===o)&&c.apply(C.context,n.call(arguments))})},empty:function(){for(var n in B)delete B[n]},incr:function(n,t,e){return t=t||1,C.set(n,o(B[n])?B[n]+t:t,e)},decr:function(n,t,e){return t=t||1,C.set(n,B[n]-t||0,e)},push:function(n,t,e){return C.set(n,[].concat(B[n]||[],[t]),e)},pop:function(n,t){return C.set(n,B[n].slice(0,-1),t)},group:function(n){var t=a(arguments),n=t.shift(),e=C.apply(0,t);return C.list[n]||(C.list[n]=[]),r(e)?C.list[n].push(e):l(e,function(t,e){C.list[n].push(t)}),function(){return C.group.apply(0,[n].concat(a(arguments)))}},extend:function(t,e){return C.set.apply(C.context,[t,b({},B[t]||{},e)].concat(n.call(arguments,2)))},count:function(n){return 0===arguments.length?Math.max.apply(this,s(G)):G[n]},setContext:function(n){C.context=n},set:function(t,e,r,u){u=u||{};var o,c=u.bypass,i=u.coroutine||function(){return!0},a="value"in u,f=u.noexec;if(1==arguments.length){var s=function(){C.set.apply(C.context,[t].concat(n.call(arguments)))};return C.set.call(C.context,t,void 0),s}if(q[t]>0)return l(J,function(n){n.call(C.context,b({locked:t},d))}),B[t];q[t]=(q[t]||0)+1;try{var v,p,h=A+t,d=n.call(arguments),g=x(L[h]),$=0,m=g&&!c,j=function(){l(L[E+t]||[],function(n){N(n,C.context,a?u.value:D.value,D,D.meta)})},D=m?function(n){return p|=n===!1,--g?($++,i(D,!1)?(o=L[h][$].call(C.context,a?u.value:D.value,D,D.meta),o!==!0&&o!==!1||D(o)):j()):p?j():i(D,!0)?C.set(t,D.value,D.meta,{bypass:1}):j(),n}:{};if(D.old=y(B[t]),b(D,{meta:r||{},done:D,result:D,key:t,value:e}),m)q[t]--,z[t]!==!0&&(z[t]=!0,i(D,!1)?(o=L[h][$].call(C.context,a?u.value:D.value,D,D.meta),o!==!0&&o!==!1||D(o)):j(),z[t]=!1),v=B[t];else if(l(J,function(n){n.call(C.context,d)}),i(D,!0)&&(e=D.value,!u.onlychange||e!==B[t])){u.noset||(B[t]=e,""!=t&&(G[t]=(G[t]||0)+1));var O=arguments,P=function(){return l((L[_+t]||[]).concat(L[k+t]||[]),function(n){D.last=N(n,C.context,e,D)}),t.length>0&&(delete u.coroutine,T.apply(C.context,[t].concat(n.call(O,2)))),l(L[w+t]||[],function(n){D.last=N(n,C.context,e,D)}),K[t]=D.last,e};v=f?P:P.call(C.context)}}catch(S){throw S}finally{q[t]=0}return v},fire:function(n,t){l(n,function(n){C.set(n,B[n],t,{noset:!0})})},once:function(n,t,r){return i(n)&&(n=s(n)),e(n)?g(n,function(n){C.once.call(C.context,n,t,r)}):t?C.once(C(n,t,r)):b(n,P)},enable:function(n){return l(C.list[n],function(t){t.$.norun&&t.$.norun[n]&&delete t.$.norun[n],0==x(t.$.norun)&&delete t.$.norun}),C.list[n]},osetadd:function(n,t,r){var u=B[n]||[];return C(n,t,r,{coroutine:function(n,t){var r=e(n.value)?n.value:[n.value];return n.set=y(u),l(r,function(t){-1==n.set.indexOf(t)&&n.set.push(t)}),t&&(n.value=n.set),u.length!=n.set.length}})},setadd:function(n,t,r){var u=B[n]||[];return C(n,t,r,{coroutine:function(n,t){var r=e(n.value)?n.value:[n.value];return n.set=h(u.concat(r)),t&&(n.value=n.set),u.length!=n.set.length}})},settoggle:function(n,t,e){var r=-1===(B[n]||[]).indexOf(t)?"add":"del";return C[D+r](n,t,e)},setdel:function(n,t,e){var r=B[n]||[],u=p(r,t);return r.length!=u.length?C(n,u,e,{value:t}):u},disable:function(n){return l(C.list[n],function(t){(t.$.norun||(t.$.norun={}))[n]=!0}),C.list[n]},unset:function(){var n=!0;return l(arguments,function(t){n&=t in B;var e,r,u,o=t.split("."),c="",i=o.length,a=o[i-1];for(e=0;i>e;e++)if(c=o.slice(0,e).join("."),u=B[c]){for(r=e;i-1>r;r++)u=u[o[r]];delete u[a]}delete B[t]}),n},find:function(n){return d(v(B),function(t){return t.match(n)})},changed:function(n,t){return C.on(n,function(n,e){var r=x(n),u=x(e.old);r-u==1?t.call(C.context,f(n)):r>u&&t.call(C.context,a(n).slice(u))})},sniff:function(){var t={"":1},e=function(n){return t[n[0]]||console.log(n)},r=function(){},o=e;return J.unshift(function(n){o(n)}),C.sniff=function(){var c=n.call(arguments),i=[];return l(c,function(n){u(n)?(t[n]?delete t[n]:t[n]=1,i.push([n,t[n]])):(o=n?e:r,i.push(n))}),c.length?i:v(t)},C.sniff.apply(C.context,arguments)}}),C.setAdd=C.setadd,C.setToggle=C.settoggle,C.osetAdd=C.osetadd,C.setDel=C.setdel,C.isSet=C.isset,C.get=C,C.change=C.on,C.add=C.push,l(S._ext,function(t,e){C[t]=function(){e.apply(C.context,[C].concat(n.call(arguments)))}}),arguments.length>0&&C(t),C};S._ext={},S.extend=function(n,t){S._ext[n]=t},S.isArray=e,self.EvDa=S}}(),EvDa.__version__="0.1-versioning-added-71-g06f648e";
//# sourceMappingURL=evda.map.js
