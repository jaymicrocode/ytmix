var _inject=function(){function f(){var b=[],a;for(a in _inject)b.push(a);b.clear=function(){for(a in _inject)delete _inject[a]};return b}return function(b,a){var c=b,g=0;if(!b)return f();if(a)return _inject[c](a);for(;_inject[c];)c=b+g++;return('self._inject["'+c+'"] = ('+function(b,a){var c=Array.prototype.slice.call(a),e,d;return function(a){e=a;return function(){d=eval("("+e+")");return"function"===typeof d?d.apply(b,c):d}.apply(b,c)}}+")(this, arguments)").replace(/_RAND_/g,"__INJECT__"+Math.random().toString().substr(2))}}();
