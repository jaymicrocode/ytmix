function EvDa(t){function o(a,b,i){var j=c[a],f,d={};c[a]=b;g(m,function(c){f=e[c][a];g(f,function(c,f){d[f]=c(b,{meta:i,old:j,current:b,key:a,remove:function(){c.rm=!0}})});g(f,function(a){a.rm&&n(a)})});k[a]=!1;return d}function u(a,b,i){function d(c){f--;h+=c===!1;f||(h||o(a,b,i),k[a]=!1)}var f=e.test[a].length,h=0;g(e.test[a],function(f){f(b,{meta:i,old:c[a],callback:d,key:a,remove:function(){n(f)}})})}function v(a){a.refs=[];p[a.ix=++w]=a}function h(a,b,c){var d={};g(q([a]),function(a){k[a]||
(k[a]=!0,d[a]=e.test[a]?u(a,b,c):o(a,b,c))});return d}function n(a){g(a.refs,function(b){var c=b[0],b=b[1];e[c][b]=_.without(e[c][b],a)});delete p[a.ix]}function x(a){var b={};a.scope=a.scope?[a.scope]:[];a.meta=a.meta||[];g(r(d),function(c){b[c]=function(){d[c].apply(this,a.scope.concat(_.toArray(arguments),a.meta));return b}});return b}function d(a,b){var i=arguments.length,j={};if(i==0)return[c,e];if(_.isObject(a))return g(a,function(a,b){j[b]=d(b,a)}),j;if(i==1)return a.search(/[*?]/)+1?_.select(r(c),
function(b){return b.match(a)}):c[a];j=x({scope:a});_.isFunction(b)?j.when(b):i>1&&j.run(b);return j}var g=_.each,r=_.keys,s=_.extend,q=_.flatten,c=t||{},l={},w=0,p={},m=["test","when","after"],e={},k={};g(m,function(a){e[a]={};d[a]=function(b,c){v(c);g(q([b]),function(b){e[a][b]=(e[a][b]||[]).concat(c);c.refs.push([a,b])});return s(d,{handle:c})}});m.shift();d.on=d.when;return s(d,{push:function(a,b){c[a]=c[a]||[];c[a].current=c[a].push(b);return h(a,c[a])},pop:function(a){c[a].pop();c[a].current=
_.last(c[a]);return h(a,c[a])},incr:function(a){return h(a,_.isNumber(c[a])?c[a]+1:1)},decr:function(a){return h(a,c[a]-1||0)},once:function(a,b){var c=d.when(a,b);c.handle.rm=!0;return c},setter:function(a,b){e.when[a]?b():l[a]=b},isset:function(a,b){if(!(a in c)){if(b)var e=d.once(a,b);l[a]&&(l[a](),delete l[a]);return e}b&&b(c[a]);return a in c},firstset:d.isset,run:h,emit:h,get:d,onset:d,set:function(a,b){arguments.length==1&&(b=!0);return d(a,b)},unset:function(a){delete c[a]},remove:n})};
