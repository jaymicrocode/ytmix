(function(){function M(a,e){var b=arguments.length,c=1==b?a:e,d,g={};h.isArr(c)?(b=c.length,d=function(a){for(var d=0;d<b;d++)if(-1<r(a,c[d]))return!0;return!1}):d=function(a){return-1<r(a,c)};return 2==b?(g={},g[a]=d,g):d}function u(){var a=n.call(arguments),e,b,c,d,g,k,j,f;b=h.isArr(this)?this:a.shift();f=b.length?n.call(b):v(b);2==a.length&&h.isStr(a[0])&&(c={},c[a[0]]=a[1],a=[p({},c)]);for(b=0;b<a.length;b++)if(e=a[b],h.isFun(e)){e=e.single||e;g=f.length;for(j=g-1;0<=j;j--)c=f[j],e(c)&&(g-(j+
1)&&(k=j+1,f.splice(k,g-k)),g=j);k=j+1;g-k&&f.splice(k,g-k)}else l(e,function(a,b){if(h.isFun(b)){g=f.length;for(j=g-1;0<=j;j--)c=f[j],a in c&&(d=c[a],h.isFun(d)&&(d=d()),b(d,c)&&(g-(j+1)&&(k=j+1,f.splice(k,g-k)),g=j))}else{g=f.length;for(j=g-1;0<=j;j--)c=f[j],d=c[a],h.isFun(d)&&(d=d()),a in c&&d===b&&(g-(j+1)&&(k=j+1,f.splice(k,g-k)),g=j)}k=j+1;g-k&&f.splice(k,g-k)});f.first=f[0];f.last=f[f.length-1];return f}function B(a){var e={};l(a,function(a){e[a]=!0});return function(a){for(var c in e)if(c in
a)return!1;return!0}}function C(a,e){var b,c=arguments.length,d,g={};1==c?d=a:2==c&&(d=e);d=d.toString().toLowerCase();b=function(a){return-1<a.toString().toLowerCase().search(d)};return 2==c?(g={},g[a]=b,g):b}function D(a){var e={x:a};return function(a,c){2==arguments.length&&(e[a]=c);return e[a]}}function v(a){var e=[],b;for(b in a)e.push(a[b]);return e}function N(a,e){var b,c=this;e!==E&&(b=a,a={},a[b]=e);h.isFun(a)?l(c,a):l(a,function(a,b){h.isFun(b)?l(c,function(c){if(h.isFun(c[a]))c[a](b(c));
else c[a]=b(c)}):l(c,function(c){if(h.isFun(c[a]))c[a](b);else c[a]=b})});return this}function p(a,e){for(var b,c,d,g,k=arguments.length,j=0;j<k;j++){b=arguments[j];for(var f in b)c=a[f],d=b[f],a!==d&&(d&&(d.constructor==Object||(g=h.isArr(d)))?(g?(g=!1,c=c&&h.isArr(constructor)?c:[]):c=c&&c.constructor==Object?c:{},a[f]=p(c,d)):d!==E&&(a[f]=d))}return a}function w(a,e){var b=[],c;2==arguments.length?(c=a,a=e):c=this;if(h.isArr(c))b=F(c,a);else{var b={},d;for(d in c)h.isFun(c[d])||(b[d]=a.call(this,
c[d]))}return b}function G(a){s++;for(var e=0,b=a.length;e<b;e++)a[e].constructor("i",s)}var E,n=Array.prototype.slice,x=Object.prototype.toString,H={},I={},s=0,h={isFun:function(a){return!(!a||!a.constructor||!a.call||!a.apply)},isStr:function(a){return!!(""===a||a&&a.charCodeAt&&a.substr)},isNum:function(a){return"[object Number]"===x.call(a)},isArr:[].isArray||function(a){return"[object Array]"===x.call(a)},isObj:function(a){return null==a?"object"==String(a):"[object Object]"===x.call(a)||!0}},
r=[].indexOf?function(a,e){return a.indexOf(e)}:function(a,e){for(var b=a.length-1;-1!=b&&e!=a[b];b--);return b},O={}.keys||function(a){var e=[],b;for(b in a)e.push(b);return e},F=[].map?function(a,e){return a.map(e)}:function(a,e){for(var b=[],c=0,d=a.length;c<d;c++)b.push(e(a[c],c));return b},l=[].forEach?function(a,e){if(h.isArr(a))a.forEach(e);else for(var b in a)e(b,a[b])}:function(a,e){if(h.isArr(a))for(var b=0,c=a.length;b<c;b++)e(a[b],b);else for(b in a)e(b,a[b])};l("< <= > >= == === != !==".split(" "),
function(a){I[a]=Function("rhs","return function(x){return x"+a+"rhs}")});var y,z={};y=function(a,e){var b,c=arguments.length,d=1==c?a:e||[],g={};if(!h.isArr(d))throw new TypeError("isin's argument is wrong. ",d);d.length?20>d.length&&h.isNum(d[0])?(b=d.join(","),b=z[b]?z[b]:z[b]=new Function("x","return x=="+d.join("||x=="))):b=h.isStr(d)?new Function("x","return indexOf("+d+", x) > -1"):function(a){return-1<r(d,a)}:b=h.isFun(d)?function(a){return-1<r(d(),a)}:d;return 2==c?(g={},g[a]=b,g):b};var J,
P=/^\s*([=<>!]+)['"]*(.*)$/,A,q={};J=function(){return function(a,e){var b,c;if(h.isStr(a)){c=a;if(1==arguments.length)if(q[c])b=q[c];else{try{b=new Function("x,rec","return x "+c)}catch(d){b={}}try{b.single=new Function("rec","return "+a)}catch(g){}q[c]=b}2==arguments.length&&h.isStr(e)&&(b={},c=e,q[c]||(q[c]=null!==(A=c.match(P))?I[A[1]](A[2].replace(/['"]$/,"")):new Function("x,rec","return x "+c)),b[a]=q[c]);return b}}};var K,L={};l("has hasKey insert invert missing isin group keyBy remove update where select find sort orderBy order each like".split(" "),
function(a){L[a]=!0});K=L;self.DB=function(a,e){function b(){k||(k=!0,l(g,function(a){a.call(f,m)}),k=!1)}function c(a){for(var b in K)a[b]=f[b];return a}var d={},g=[],k=!1,j=!1,f=J(),m=[];p(f,{transaction:{start:function(){k=!0},end:function(){k=!1;b()}},schema:function(){for(var a={},b=m.length,c,d=0;d<b;d+=10,c=m[d])for(var e in c)a[e]=void 0;return O(a)},constrain:function(){var a=p,b=d,c;c=arguments;var e={};2==c.length?(e[c[0]]=c[1],c=e):c=1==c.length?c[0]:void 0;a(b,c)},each:w,findFirst:function(){var a=
f.find.apply(this,n.call(arguments));return a.length?a[0]:{}},has:M,hasKey:function(){return this.find(B(n.call(arguments))).invert()},isin:y,like:C,invert:function(a){var b=m,d=[];G(a||this);a=0;for(var e=b.length;a<e;a++)b[a].constructor("i")==s||d.push(b[a]);return c(d)},map:w,missing:function(){var a=B(n.call(arguments));return h.isArr(this)?this.find(a):a},sync:function(a){a?g.push(a):b()},template:{create:function(a){j=a},update:function(a){p(j||{},a)},get:function(){return j},destroy:function(){j=
!1}},update:function(){var a=N.apply(h.isArr(this)?this:f.find(),n.call(arguments));b();return c(a)}});f.not=function(){return f.apply(this,n(arguments))};f.group=function(a){var b={},d=h.isArr(this)?this:f.find();l(d,function(d){a in d&&(b[d[a]]||(b[d[a]]=c([])),b[d[a]].push(d))});return b};f.keyBy=function(a){var b=f.group.apply(this,arguments);l(b,function(a,c){b[a]=c[0]});return b};f.order=f.sort=f.orderBy=function(a,b){var d,e=arguments.length,g,j=h.isArr(this)?this:f.find();h.isFun(a)?d=a:h.isStr(a)&&
(1==e?g="x-y":2==e&&(g=h.isStr(b)?{asc:"x-y",desc:"y-x"}[b.toLowerCase()]:b),h.isStr(g)&&!H[g]&&(H[g]=new Function("x,y","return "+g)),eval("fnSort=function(a,b){return order(a."+a+", b."+a+")}"));return c(n.call(j).sort(d))};f.where=f.find=function(){var a=n.call(arguments||[]);h.isArr(this)||(a=[m].concat(a));return c(u.apply(this,a))};f.view=function(a){var c={};f.sync(function(b){var d={},e;l(b,function(b){a in b&&(d[b[a]]=b)});for(e in d)e in c?c[e]!==d[e]&&(c[e]=d[e]):c[e]=d[e];for(e in c)e in
d||delete c[e]});b();return c};f.select=function(a){var b=h.isArr(this)?this:f.find(),d,e={};1<arguments.length?a=n.call(arguments):h.isStr(a)&&(a=[a]);d=a.length;l(a,function(a,c){if("*"==a)e=F(b,v);else for(var f=0,g=b.length;f<g;f++)row=b[f],a in row&&(1<d?(e[f]||(e[f]=[]),e[f][c]=row[a]):e[f]=row[a])});return c(v(e))};f.insert=function(a){var e={},f=[],g=[];1<arguments.length?f=n.call(arguments):h.isArr(a)?f=a:f.push(a);l(f,function(a){if(d.unique&&(e={},l(m,function(a,b){e[a[d.unique]]=b}),a[d.unique]in
e)){g.push(e[a[d.unique]]);return}var b=m.length,c;if(j){var f={};l(j,function(a,b){f[a]=h.isFun(b)?b():b});a=p(f,a)}try{c=new (D(b)),p(c,a),m.push(c)}catch(k){a.constructor=D(b),m.push(a)}g.push(b)});b();for(var f=g,k=[],t=0,q=f.length;t<q;t++)k[t]=m[f[t]];return c(k)};f.remove=function(a,e){var d,g,j=[];d=h.isArr(this)?this:h.isArr(a)?a:0<arguments.length?f.find.apply(this,n.call(arguments)):f.find();G(d);var k=m.length-1;for(d=m.length;0<=k;k--)m[k].constructor("i")==s?j.push(m[k]):(d-(k+1)&&(g=
k+1,m.splice(g,d-g)),d=k);g=k+1;d-g&&m.splice(g,d-g);b();return c(j.reverse())};if(1==arguments.length)if(h.isArr(a))f.insert(a);else if(h.isFun(a))f.insert(a());else{if(h.isStr(a))return f.apply(this,arguments);h.isObj(a)&&f.insert(a)}else 1<arguments.length&&f.insert(n.call(arguments));f.__raw__=m;return f};p(DB,{find:u,each:w,like:C,trace:function(a,e){a.__$$tracer$$__={};l(a,function(b,c){h.isFun(c)&&(a.__$$tracer$$__[b]=c,a[b]=function(){console.log.apply(this,[b+":"].concat(n.call(arguments)));
e&&e.apply(this,arguments);return a.__$$tracer$$__[b].apply(this,arguments)})})},isin:y,objectify:function(a,e){var b=[];l(e,function(c){var d={};l(a,function(a,b){d[a]=c[b]});b.push(d)});return b},findFirst:function(){var a=u.apply(this,n.call(arguments));return a.length?a[0]:{}},reduceLeft:function(a,e){var b=h.isStr(e)?new Function("y,x","return y "+e):e;return function(c){for(var d=a,e=0,h=c.length;e<h;e++)c[e]&&(d=b(d,c[e]));return d}},reduceRight:function(a,e){e=DB.reduceLeft(a,e);return function(a){return e(a.reverse())}}})})();
