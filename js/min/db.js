!function(){function escapeRegExp(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function extend(a){"use strict";return each(slice.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a}function kvarg(a){var b={};return 2==a.length?(b[a[0]]=a[1],b):1==a.length?a[0]:void 0}function hash(a){var b={};return each(a,function(a){b[a]=!0}),b}function trace(a,b){a.__trace__={},each(a,function(c,d){_.isFun(d)&&(a.__trace__[c]=d,a[c]=function(){return console.log([c+":"].concat(slice.call(arguments))),b&&b.apply(this,arguments),a.__trace__[c].apply(this,arguments)})})}function copy(a){return"length"in a?slice.call(a):values(a)}function setdiff(a,b){var c=[];stain(b);for(var d=0,e=a.length;e>d;d++)isStained(a[d])?unstain(a[d]):c.push(a[d]);return c}function stain(a){_stainID++,each(a,function(a){a[_stainKey]=_stainID})}function unstain(a){delete a[_stainKey]}function isStained(a){return a[_stainKey]==_stainID}function has(a,b){var e,c=arguments.length,d=1==c?a:b,f={};if(_.isArr(d)){var c=d.length;e=function(a){for(var b=0;c>b;b++)if(indexOf(a,d[b])>-1)return!0;return!1}}else e=function(a){return indexOf(a,d)>-1};return 2==c?(f={},f[a]=e,f):e}function find(){var b,c,d,e,f,a=slice.call(arguments),h=_.isArr(this)?this:a.shift();for(2==a.length&&_.isStr(a[0])&&(e={},e[a[0]]=a[1],a=[e]),c=0;c<a.length;c++)if(b=a[c],_.isArr(b)){if(_.isScalar(b[0])&&2==a.length){var i,j=b,k=a.pop();d=[function(a){for(var b=0;b<j.length;b++)if(equal(a[j[b]],k))return!0}]}else d=map(b,expression());i=d.length,h=_filter.call(h,function(a){for(var b=!0,c=0;i>c;c++){if(d[c](a))return!0;b=!1}return b})}else _.isFun(b)?h=_filter.call(h,b):each(b,function(a,b){if(_.isObj(b)){var c=keys(b)[0],e=c.slice(1);if(!(e in DB))throw new Error(e+" is an unknown function");b=DB[e](b[c])}else _.isArr(b)&&(b=isin(b));d=_.isFun(b)?function(c){return a in c?(f=c[a],_.isFun(f)&&(f=f()),b(f,c)):void 0}:function(c){return f=c[a],_.isFun(f)&&(f=f()),a in c&&f===b},h=_filter.call(h,d)});return h}function missing(a){var b=hash(a);return function(a){for(var c in b)if(c in a)return!1;return!0}}function equal(a,b){return a===b||!_.isUndef(a)&&a.join&&b.join&&a.sort().toString()===b.sort().toString()||JSON.stringify(a)===JSON.stringify(b)}function isArray(a){var b=a.sort().join("");return function(a){return a.sort().join("")===b}}function like(a,b){var c,e,f,d=arguments.length,g={};return 1==d?e=a:2==d&&(e=b),e=e.toString(),c=function(a){if(null===a)return!1;try{f=new RegExp(e,"img")}catch(b){f=new RegExp(escapeRegExp(e),"img")}return a.toString().search(f)>-1},2==d?(g={},g[a]=c,g):c}function update(a,b){var c,d=this;return b!==_u&&(c=a,a={},a[c]=b),_.isFun(a)?each(d,a):each(a,function(a,b){_.isFun(b)?each(d,function(c){_.isFun(c[a])?c[a](b(c)):c[a]=b(c)}):each(d,function(c){_.isFun(c[a])?c[a](b):c[a]=b})}),this}function not(a){return function(){return!a.apply(this,arguments)}}function ewrap(arg,str){var key=str+":"+arg;if(!(key in _eCache))try{_eCache[key]=eval("(function("+arg+"){"+str+"})")}catch(ex){_eCache[key]=!1}return _eCache[key]}function fwrap(a,b){var c=b+":"+a;if(!(c in _fCache))try{_fCache[c]=new Function(a,"try{return "+b+"}catch(e){}")}catch(d){_fCache[c]=!1}return _fCache[c]}function eachRun(a,b){var e,c=0,d=[];if(2==arguments.length?(e=a,a=b):e=_.isArr(this)?this:this.find(),_.isArr(a)&&2==a.length&&(c=a[0],a=a[1]),_.isArr(e))d=mapSoft(e,a);else{d={};for(var f in e)_.isFun(e[f])||(d[f]=a.call(c,e[f]))}return d}var _u,slice=Array.prototype.slice,toString=Object.prototype.toString,_orderCache={},_compProto={},_stainID=0,_stainKey="_4ab92bf03191c585f182",_={isFun:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},isStr:function(a){return!!(""===a||a&&a.charCodeAt&&a.substr)},isNum:function(a){return"[object Number]"===toString.call(a)},isUndef:function(a){return isNaN(a)||null===a||void 0===a},isScalar:function(a){return _.isStr(a)||_.isNum(a)||_.isBool(a)},isArr:[].isArray||function(a){return"[object Array]"===toString.call(a)},isBool:function(a){return a===!0||a===!1||"[object Boolean]"===toString.call(a)},isObj:function(a){return _.isFun(a)||_.isStr(a)||_.isNum(a)||_.isArr(a)?!1:null==a?"object"===String(a):"[object Object]"===toString.call(a)||!0}},proxy=function(a,b){return function(){b.apply(a,slice.call(arguments))}},indexOf=[].indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=a.length-1;-1!==c&&b!==a[c];c--);return c},keys=Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b},values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},obj=function(a,b){var c={};return c[a]=b,c},mapSoft=function(a,b){"use strict";for(var c=[],d=0,e=a.length;e>d;d++)c.push(b(a[d],d));return c},map=[].map?function(a,b){return a.map(b)}:mapSoft,_filterThrow=function(a){"use strict";for(var b=this.length,c=0;b>c;c++)if(a(this[c]))throw this[c];return[]},_filter=function(a){"use strict";for(var b=this.length,c=0,d=[],e=0;b>e;e++)a(this[e])||(c!==e&&d.splice.apply(d,[e,e].concat(this.slice(c,e))),c=e+1);return c!==e&&d.splice.apply(d,[e,e].concat(this.slice(c,e))),d},each=[].forEach?function(a,b){"use strict";if(_.isArr(a)){if(0===a.length)return;a.forEach(b)}else if(_.isStr(a)||_.isNum(a)||_.isBool(a))b(a);else for(var c in a)b(c,a[c])}:function(a,b){if(0!==a.length)if(_.isArr(a))for(var c=0,d=a.length;d>c;c++)b(a[c],c);else for(var e in a)b(e,a[e])};each("< <= > >= == === != !==".split(" "),function(a){_compProto[a]=Function("rhs","return function(x){return x"+a+"rhs}")});var isin=function(){return function(a,b){var c,d=arguments.length,e=1==d?a:b||[],f=[],g=[],h={};if(!_.isArr(e))throw new TypeError("isin's argument is wrong. ",e);return e.length?(each(e,function(a){_.isFun(a)?f.push(a):g.push(a)}),c=function(a){for(var b=indexOf(g,a)>-1,c=0;c<f.length&&!b;c++)b=f[c](a);return b}):c=_.isFun(e)?function(a){return indexOf(e(),a)>-1}:e,2==d?(h={},h[a]=c,h):c}}(),_fCache={},_eCache={},expression=function(){return function(a,b){var c,d;if(_.isStr(a))return d=a,2===arguments.length&&_.isStr(b)?(d=b,c=fwrap("x,rec","x."+a+d),c[a]=fwrap("x,rec","x "+d)):(c=fwrap("x,rec","x "+d),c||(c=fwrap("rec",a))),c;if(_.isObj(a)){var f,e=[];for(var g in a)_.isScalar(a[g])?(f=a[g],_.isStr(f)&&(f='"'+f+'"'),e.push("rec['"+g+"']==="+f)):e.push("equal(rec['"+g+"'],arg0['"+g+"'])");return ewrap("rec","return "+e.join("&&"))}}},chainList=hash(["distinct","each","find","findFirst","group","has","hasKey","indexBy","insert","invert","isin","keyBy","lazyView","like","missing","order","orderBy","remove","schema","select","slice","sort","unset","update","view","where"]);self.DB=function(arg0,arg1){function sync(){syncLock||(syncLock=!0,each(syncList,function(a){a.call(ret,raw)}),syncLock=!1)}function chain(a){for(var b in chainList)a[b]=ret[b];return a.first=a[0],a.last=a[a.length-1],a}function list2data(a){for(var b=[],c=0,d=a.length;d>c;c++)b[c]=raw[a[c]];return b}var constraints={addIf:[]},constrainCache={},syncList=[],syncLock=!1,_ix={ins:0,del:0},_template=!1,ret=expression(),_g={},raw=[];if(extend(ret,{slice:function(){var a=_.isArr(this)?this:ret.find();return chain(slice.apply(a,arguments))},transaction:{start:function(){syncLock=!0},end:function(){syncLock=!1,sync()}},schema:function(){for(var e,a={},b=_.isArr(this)?this:ret.find(),c=b.length,d=Math.ceil(Math.min(10,c/3)),f=0;c>f;f+=d){e=b[f];for(var g in e)a[g]=_u}return keys(a)},constrain:function(){extend(constraints,kvarg(arguments))},addIf:function(a){return a&&constraints.addIf.push(a),constraints.addIf},beforeAdd:function(a){return ret.addIf(a?function(){return a.apply(0,arguments),!0}:!1)},unset:function(a){if(_.isArr(a))return each(a,arguments.callee);var b=_.isArr(this)?this:ret.find();return each(b,function(b){a in b&&delete b[a]}),sync(),chain(b)},each:eachRun,isFunction:_.isFun,isString:_.isStr,map:eachRun,not:not,findFirst:function(){var b,a=_filter;_filter=_filterThrow;try{b=ret.find.apply(this,arguments)}catch(c){b=c}return _filter=a,b},has:has,hasKey:function(){var a=_.isArr(this)?this:this.find(),b=a.find(missing(slice.call(arguments)));return this.invert(b,a)},isin:isin,like:like,invert:function(a,b){return chain(setdiff(b||raw,a||this))},missing:function(){var a=missing(slice.call(arguments));return _.isArr(this)?this.find(a):a},sync:function(a){return a?syncList.push(a):sync(),ret},template:function(a){return _template=a,ret},update:function(){var a=update.apply(_.isArr(this)?this:ret.find(),arguments);return sync(),chain(a)}}),extend(ret.template,{create:ret.template,update:function(a){return extend(_template||{},a),ret},get:function(){return _template},destroy:function(){return _template=!1,ret}}),ret.group=function(){var a=slice.call(arguments||[]),b=a.shift(),c={},d=_.isArr(this)?this:ret.find();return each(d,function(a){var d=b in a?a[b]:[void 0];each(d,function(b){b in c||(c[b]=chain([])),c[b].push(a)})}),a.length&&each(c,function(b,d){c[b]=ret.group.apply(d,a)}),c},ret.keyBy=function(a){var b=ret.group.apply(this,arguments);return each(b,function(a,c){b[a]=c[0]}),b},ret.distinct=function(a){return keys(ret.keyBy(a))},ret.indexBy=function(){var a=chain;chain=function(a){return a},ret.__raw__=raw=ret.order.apply(this,arguments),chain=a},ret.order=ret.sort=ret.orderBy=function(arg0,arg1){var key,fnSort,len=arguments.length,order,filter=_.isArr(this)?this:ret.find();return _.isFun(arg0)?fnSort=arg0:_.isStr(arg0)&&(key=arg0,1===len?order="x-y":2===len&&(order=_.isStr(arg1)?{asc:"x-y",desc:"y-x"}[arg1.toLowerCase()]:arg1),_.isStr(order)&&(order=_orderCache[order]?_orderCache[order]:_orderCache[order]=new Function("x,y","return "+order)),eval("fnSort=function(a,b){return order(a."+key+", b."+key+")}")),chain(slice.call(filter).sort(fnSort))},ret.where=ret.find=function(){var a=slice.call(arguments||[]);return _.isArr(this)||(a=[raw].concat(a)),chain(find.apply(this,a))},ret.lazyView=function(field,type){var myix={del:_ix.del,ins:_ix.ins},res={},keyer;return-1===field.search(/[()]/)?(("["!==field.charAt(0)||"."!==field.charAt(0))&&(field="."+field),eval("keyer = function(r,ref){try{ref[rX] = res[rX] = r;} catch(x){}}".replace(/X/g,field))):eval("keyer = function(r,ref){with(r) { var val = X };try{ref[val] = res[val] = r;} catch(x){}}".replace(/X/g,field)),Object.defineProperty(res,"update",{enumerable:!1,configurable:!1,writable:!1,value:function(a){if(a){if("del"===a&&myix.del===_ix.del)return;if("ins"===a&&myix.ins===_ix.ins)return}myix={del:_ix.del,ins:_ix.ins};var b={};each(raw,function(a){keyer(a,b)});for(var c in res)c in b||"update"==c||delete res[c];Object.defineProperty(res,"length",{enumerable:!1,configurable:!1,writable:!0,value:Object.keys(res).length})}}),res.update(),res},ret.view=function(a,b){var c=ret.lazyView(a,b);return ret.sync(c.update),c},ret.select=function(a){var c,b=_.isArr(this)?this:ret.find(),d={};return arguments.length>1?a=slice.call(arguments):_.isStr(a)&&(a=[a]),c=a.length,each(a,function(a,e){if("*"===a)d=map(b,values);else for(var f=0,g=b.length;g>f;f++)row=b[f],a in row&&(c>1?(d[f]||(d[f]=[]),d[f][e]=row[a]):d[f]=row[a])}),chain(values(d))},ret.insert=function(a){var b,c=constraints.unique,d=[],e=[],f=[];return e=arguments.length>1?slice.call(arguments):_.isArr(a)?a:[a],each(e,function(a){var e=!0;if(c&&c in a){var i,h="c-"+c;_g[h]?_g[h].update("del"):_g[h]=ret.lazyView(c),i=_g[h],a[c]in i?(d.push(i[a[c]]),f.push(i[a[c]]),e=!1):i[a[c]]=a}if(each(constraints.addIf,function(b){e&=b(a)}),e){if(_ix.ins++,b=raw.length,_template){var j={};each(_template,function(a,b){_.isFun(b)?j[a]=b():j[a]=b}),a=extend(j,a)}raw.push(a),f.push(b)}}),sync(),extend(chain(list2data(f)),{existing:d})},ret.flash=function(a){ret.__raw__=raw=raw.concat(a)},ret.remove=function(a,b){var d,e,f,c=!1,g=[];if(_.isArr(this))f=this;else if(_.isArr(a))f=a;else{if(arguments.length>0)return g=ret.find.apply(this,arguments),g.length&&(ret.__raw__=raw=ret.invert(g),_ix.del++,sync()),chain(g.reverse());f=ret.find()}stain(f);for(var h=raw.length-1,d=raw.length;h>=0;h--)isStained(raw[h])?(unstain(raw[h]),g.push(raw[h])):(d-(h+1)&&(e=h+1,raw.splice(e,d-e),c=!0),d=h);return e=h+1,d-e&&(raw.splice(e,d-e),c=!0),c&&(_ix.del++,sync()),chain(g.reverse())},1===arguments.length)if(_.isArr(arg0))ret.insert(arg0);else if(_.isFun(arg0))ret.insert(arg0());else{if(_.isStr(arg0))return ret.apply(this,arguments);if(_.isObj(arg0)){var fails=!1;each(arg0,function(a,b){ret[a]||(fails=!0),fails||ret[a](b)}),fails&&ret.insert(arg0)}}else arguments.length>1&&ret.insert(slice.call(arguments));return ret.__raw__=raw,DB.all.push(ret),ret},extend(DB,{all:[],find:find,expr:expression(),diff:setdiff,each:eachRun,map:map,not:not,like:like,trace:trace,values:values,isin:isin,isArray:isArray,local:function(){return"(function(){ return "+DB.apply(this,arguments).toString()+";})()"},copy:function(a){return map(a,function(a){return extend({},a)})},objectify:function(a,b){var c=[];return each(b,function(b){var d={};each(a,function(a,c){d[a]=b[c]}),c.push(d)}),c},reduceLeft:function(a,b){1==arguments.length&&(b=a,a=0);var c=_.isStr(b)?new Function("y,x","return y "+b):b;return function(b,d){for(var e=a,f=0,g=b.length;g>f;f++)b[f]&&(e=c(e,b[f],d));return e}},reduceRight:function(a,b){return 1==arguments.length&&(b=a,a=0),b=DB.reduceLeft(a,b),function(a){return b(a.reverse())}}})}(),DB.__version__="0.0.1-298-g189f723";