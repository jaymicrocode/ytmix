(function(){function r(a){n(q.call(arguments,1),function(c){if(c)for(var d in c)a[d]=c[d]});return a}function z(a){var c={};n(a,function(a){c[a]=!0});return c}function J(a){return a.length?q.call(a):s(a)}function w(a,c){var d=[];A(c);for(var b=0,f=a.length;b<f;b++)a[b].constructor("i")!=t&&d.push(a[b]);return d}function A(a){t++;for(var c=0,d=a.length;c<d;c++)a[c].constructor("i",t)}function K(a,c){var d=arguments.length,b=1==d?a:c,f,e={};g.isArr(b)?(d=b.length,f=function(a){for(var c=0;c<d;c++)if(-1<
u(a,b[c]))return!0;return!1}):f=function(a){return-1<u(a,b)};return 2==d?(e={},e[a]=f,e):f}function v(){var a=q.call(arguments),c,d,b,f,e,h,k,m=J(g.isArr(this)?this:a.shift());2==a.length&&g.isStr(a[0])&&(b={},b[a[0]]=a[1],a=[b]);for(d=0;d<a.length;d++)if(c=a[d],g.isArr(c)){var l=[],p=m;for(k=0;k<c.length;k++)l=l.concat(v(p,c[k])),p=w(p,l);m=l}else if(g.isFun(c)){c=c.single||c;e=m.length;for(k=e-1;0<=k;k--)b=m[k],c(b)&&(e-(k+1)&&(h=k+1,m.splice(h,e-h)),e=k);h=k+1;e-h&&m.splice(h,e-h)}else n(c,function(a,
d){if(g.isFun(d))for(e=m.length,k=e-1;0<=k;k--)b=m[k],a in b&&(f=b[a],g.isFun(f)&&(f=f()),d(f,b)&&(e-(k+1)&&(h=k+1,m.splice(h,e-h)),e=k));else for(e=m.length,k=e-1;0<=k;k--)b=m[k],f=b[a],g.isFun(f)&&(f=f()),a in b&&f===d&&(e-(k+1)&&(h=k+1,m.splice(h,e-h)),e=k);h=k+1;e-h&&m.splice(h,e-h)});m.first=m[0];m.last=m[m.length-1];return m}function B(a){var c=z(a);return function(a){for(var b in c)if(b in a)return!1;return!0}}function C(a,c){var d,b=arguments.length,f,e={};1==b?f=a:2==b&&(f=c);f=f.toString().toLowerCase();
d=function(a){return-1<a.toString().toLowerCase().search(f)};return 2==b?(e={},e[a]=d,e):d}function D(a){var c={x:a};return function(a,b){2==arguments.length&&(c[a]=b);return c[a]}}function L(a,c){var d,b=this;c!==E&&(d=a,a={},a[d]=c);g.isFun(a)?n(b,a):n(a,function(a,d){g.isFun(d)?n(b,function(b){if(g.isFun(b[a]))b[a](d(b));else b[a]=d(b)}):n(b,function(b){if(g.isFun(b[a]))b[a](d);else b[a]=d})});return this}function x(a,c){var d=[],b;2==arguments.length?(b=a,a=c):b=this;if(g.isArr(b))d=F(b,a);else{var d=
{},f;for(f in b)g.isFun(b[f])||(d[f]=a.call(0,b[f]))}return d}var E,q=Array.prototype.slice,y=Object.prototype.toString,G={},H={},t=0,g={isFun:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},isStr:function(a){return!!(""===a||a&&a.charCodeAt&&a.substr)},isNum:function(a){return"[object Number]"===y.call(a)},isArr:[].isArray||function(a){return"[object Array]"===y.call(a)},isObj:function(a){return null==a?"object"==String(a):"[object Object]"===y.call(a)||!0}},u=[].indexOf?function(a,c){return a.indexOf(c)}:
function(a,c){for(var d=a.length-1;-1!=d&&c!=a[d];d--);return d},M={}.keys||function(a){var c=[],d;for(d in a)c.push(d);return c},s=function(a){var c=[],d;for(d in a)c.push(a[d]);return c},F=[].map?function(a,c){return a.map(c)}:function(a,c){for(var d=[],b=0,g=a.length;b<g;b++)d.push(c(a[b],b));return d},n=[].forEach?function(a,c){if(0!==a.length)if(g.isArr(a))a.forEach(c);else for(var d in a)c(d,a[d])}:function(a,c){if(0!==a.length)if(g.isArr(a))for(var d=0,b=a.length;d<b;d++)c(a[d],d);else for(d in a)c(d,
a[d])};n("< <= > >= == === != !==".split(" "),function(a){H[a]=Function("rhs","return function(x){return x"+a+"rhs}")});var I=function(){var a={};return function(c,d){var b,f=arguments.length,e=1==f?c:d||[],h={};if(!g.isArr(e))throw new TypeError("isin's argument is wrong. ",e);e.length?20>e.length&&g.isNum(e[0])?(b=e.join(","),b=a[b]?a[b]:a[b]=new Function("x","return x=="+e.join("||x=="))):b=g.isStr(e)?new Function("x","return indexOf("+e+", x) > -1"):function(a){return-1<u(e,a)}:b=g.isFun(e)?function(a){return-1<
u(e(),a)}:e;return 2==f?(h={},h[c]=b,h):b}}(),N=function(){var a=/^\s*([=<>!]+)['"]*(.*)$/,c,d={};return function(){return function(b,f){var e,h;if(g.isStr(b)){h=b;if(1==arguments.length)if(d[h])e=d[h];else{try{e=new Function("x,rec","try { return x "+h+"} catch(e) {}")}catch(k){e={}}try{e.single=new Function("rec","try { return "+b+"} catch(e) {}")}catch(m){}d[h]=e}2==arguments.length&&g.isStr(f)&&(e={},h=f,d[h]||(null!==(c=h.match(a))?d[h]=H[c[1]](c[2].replace(/['"]$/,"")):d[h]=new Function("x,rec",
"try { return x "+h+"} catch(e) {}")),e[b]=d[h]);return e}}}}(),O=z("each find group has hasKey indexBy insert invert isin keyBy like missing order orderBy remove select sort unset update where".split(" "));self.DB=function(a,c){function d(){k||(k=!0,n(h,function(a){a.call(l,p)}),k=!1)}function b(a){for(var b in O)a[b]=l[b];return a}function f(a){for(var b=[],d=0,c=a.length;d<c;d++)b[d]=p[a[d]];return b}var e={addIf:[]},h=[],k=!1,m=!1,l=N(),p=[];r(l,{transaction:{start:function(){k=!0},end:function(){k=
!1;d()}},schema:function(){for(var a={},b=p.length,d,c=0;c<b;c+=10,d=p[c])for(var e in d)a[e]=E;return M(a)},constrain:function(){var a=e,b;b=arguments;var d={};2==b.length?(d[b[0]]=b[1],b=d):b=1==b.length?b[0]:void 0;r(a,b)},addIf:function(a){a&&e.addIf.push(a);return e.addIf},beforeAdd:function(a){return l.addIf(a?function(){a.apply(0,arguments);return!0}:!1)},unset:function(a){if(g.isArr(a))return n(a,arguments.callee);var c=g.isArr(this)?this:l.find();n(c,function(b){a in b&&delete b[a]});d();
return b(c)},each:x,findFirst:function(){var a=l.find.apply(this,q.call(arguments));return a.length?a[0]:{}},has:K,hasKey:function(){return this.find(B(q.call(arguments))).invert()},isin:I,like:C,invert:function(a){return b(w(p,a||this))},map:x,missing:function(){var a=B(q.call(arguments));return g.isArr(this)?this.find(a):a},sync:function(a){a?h.push(a):d();return l},template:{create:function(a){m=a},update:function(a){r(m||{},a)},get:function(){return m},destroy:function(){m=!1}},update:function(){var a=
L.apply(g.isArr(this)?this:l.find(),q.call(arguments));d();return b(a)}});l.group=function(a){var d={},c=g.isArr(this)?this:l.find();n(c,function(c){a in c&&(d[c[a]]||(d[c[a]]=b([])),d[c[a]].push(c))});return d};l.keyBy=function(a){var b=l.group.apply(this,arguments);n(b,function(a,d){b[a]=d[0]});return b};l.indexBy=function(){var a=b;b=function(a){return a};l.__raw__=p=l.order.apply(this,arguments);b=a};l.order=l.sort=l.orderBy=function(a,d){var c,e=arguments.length,f,h=g.isArr(this)?this:l.find();
g.isFun(a)?c=a:g.isStr(a)&&(1==e?f="x-y":2==e&&(f=g.isStr(d)?{asc:"x-y",desc:"y-x"}[d.toLowerCase()]:d),g.isStr(f)&&!G[f]&&(G[f]=new Function("x,y","return "+f)),eval("fnSort=function(a,b){return order(a."+a+", b."+a+")}"));return b(q.call(h).sort(c))};l.where=l.find=function(){var a=q.call(arguments||[]);g.isArr(this)||(a=[p].concat(a));return b(v.apply(this,a))};l.view=function(a){var b={};l.sync(function(d){var c={},e;n(d,function(b){a in b&&(c[b[a]]=b)});for(e in c)e in b?b[e]!==c[e]&&(b[e]=c[e]):
b[e]=c[e];for(e in b)e in c||delete b[e]});d();return b};l.lazyView=function(a){function b(){var d={};n(p,function(c){a in c&&(d[c[a]]=b[c[a]]=c)});for(var c in b)c in d||delete b[c]}b();return b};l.select=function(a){var d=g.isArr(this)?this:l.find(),c,e={};1<arguments.length?a=q.call(arguments):g.isStr(a)&&(a=[a]);c=a.length;n(a,function(a,b){if("*"==a)e=F(d,s);else for(var f=0,g=d.length;f<g;f++)row=d[f],a in row&&(1<c?(e[f]||(e[f]=[]),e[f][b]=row[a]):e[f]=row[a])});return b(s(e))};l.insert=function(a){var c,
h={},l=[],k=[],l=1<arguments.length?q.call(arguments):g.isArr(a)?a:[a];n(l,function(a){var b=!0;e.unique&&(h={},n(p,function(a,b){h[a[e.unique]]=b}),a[e.unique]in h&&(k.push(h[a[e.unique]]),b=!1));n(e.addIf,function(d){b&=d(a)});if(b){c=p.length;var d;if(m){var f={};n(m,function(a,b){g.isFun(b)?f[a]=b():f[a]=b});a=r(f,a)}try{d=new (D(c)),r(d,a),p.push(d)}catch(l){a.constructor=D(c),p.push(a)}k.push(c)}});d();return b(f(k))};l.remove=function(a,c){var e,f,h=[];e=g.isArr(this)?this:g.isArr(a)?a:0<arguments.length?
l.find.apply(this,q.call(arguments)):l.find();A(e);var k=p.length-1;for(e=p.length;0<=k;k--)p[k].constructor("i")==t?h.push(p[k]):(e-(k+1)&&(f=k+1,p.splice(f,e-f)),e=k);f=k+1;e-f&&p.splice(f,e-f);d();return b(h.reverse())};if(1==arguments.length)if(g.isArr(a))l.insert(a);else if(g.isFun(a))l.insert(a());else{if(g.isStr(a))return l.apply(this,arguments);g.isObj(a)&&l.insert(a)}else 1<arguments.length&&l.insert(q.call(arguments));l.__raw__=p;return l};r(DB,{find:v,diff:w,each:x,like:C,trace:function(a,
c){a.__trace__={};n(a,function(d,b){g.isFun(b)&&(a.__trace__[d]=b,a[d]=function(){console.log([d+":"].concat(q.call(arguments)));c&&c.apply(this,arguments);return a.__trace__[d].apply(this,arguments)})})},values:s,isin:I,objectify:function(a,c){var d=[];n(c,function(b){var c={};n(a,function(a,d){c[a]=b[d]});d.push(c)});return d},findFirst:function(){var a=v.apply(this,q.call(arguments));return a.length?a[0]:{}},reduceLeft:function(a,c){var d=g.isStr(c)?new Function("y,x","return y "+c):c;return function(b){for(var c=
a,e=0,g=b.length;e<g;e++)b[e]&&(c=d(c,b[e]));return c}},reduceRight:function(a,c){c=DB.reduceLeft(a,c);return function(a){return c(a.reverse())}}})})();
