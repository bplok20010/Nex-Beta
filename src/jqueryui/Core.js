(function(b){"function"===typeof $define?$define(["Nex/jqueryui/themes/default/jqueryui.css"],function(){b(jQuery)}):b(jQuery)})(function(b){function s(a,c){var e,d;e=a.nodeName.toLowerCase();if("area"===e){e=a.parentNode;d=e.name;if(!a.href||!d||"map"!==e.nodeName.toLowerCase())return!1;e=b("img[usemap='#"+d+"']")[0];return!!e&&w(e)}return(/^(input|select|textarea|button|object)$/.test(e)?!a.disabled:"a"===e?a.href||c:c)&&w(a)}function w(a){return b.expr.filters.visible(a)&&!b(a).parents().addBack().filter(function(){return"hidden"===
b.css(this,"visibility")}).length}b.ui=b.ui||{};b.extend(b.ui,{version:"1.11.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});b.fn.extend({scrollParent:function(a){var c=this.css("position"),e="absolute"===c,d=a?/(auto|scroll|hidden)/:/(auto|scroll)/;a=this.parents().filter(function(){var a=b(this);return e&&"static"===a.css("position")?!1:d.test(a.css("overflow")+a.css("overflow-y")+a.css("overflow-x"))}).eq(0);
return"fixed"!==c&&a.length?a:b(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&b(this).removeAttr("id")})}});b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(a){return function(c){return!!b.data(c,a)}}):function(a,c,e){return!!b.data(a,e[3])},focusable:function(a){return s(a,!isNaN(b.attr(a,
"tabindex")))},tabbable:function(a){var c=b.attr(a,"tabindex"),e=isNaN(c);return(e||0<=c)&&s(a,!e)}});b("<a>").outerWidth(1).jquery||b.each(["Width","Height"],function(a,c){function e(a,c,e,f){b.each(d,function(){c-=parseFloat(b.css(a,"padding"+this))||0;e&&(c-=parseFloat(b.css(a,"border"+this+"Width"))||0);f&&(c-=parseFloat(b.css(a,"margin"+this))||0)});return c}var d="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,
outerHeight:b.fn.outerHeight};b.fn["inner"+c]=function(a){return void 0===a?g["inner"+c].call(this):this.each(function(){b(this).css(f,e(this,a)+"px")})};b.fn["outer"+c]=function(a,d){return"number"!==typeof a?g["outer"+c].call(this,a):this.each(function(){b(this).css(f,e(this,a,!0,d)+"px")})}});b.fn.addBack||(b.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))});b("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(b.fn.removeData=function(a){return function(c){return arguments.length?
a.call(this,b.camelCase(c)):a.call(this)}}(b.fn.removeData));b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());b.fn.extend({focus:function(a){return function(c,e){return"number"===typeof c?this.each(function(){var a=this;setTimeout(function(){b(a).focus();e&&e.call(a)},c)}):a.apply(this,arguments)}}(b.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),
enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(a){if(void 0!==a)return this.css("zIndex",a);if(this.length){a=b(this[0]);for(var c;a.length&&a[0]!==document;){c=a.css("position");if("absolute"===c||"relative"===c||"fixed"===c)if(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c)return c;a=a.parent()}}return 0}});b.ui.plugin={add:function(a,c,e){var d;a=b.ui[a].prototype;for(d in e)a.plugins[d]=a.plugins[d]||[],a.plugins[d].push([c,e[d]])},call:function(a,b,e,
d){if((b=a.plugins[b])&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(d=0;d<b.length;d++)a.options[b[d][0]]&&b[d][1].apply(a.element,e)}};var A=0,y=Array.prototype.slice;b.cleanData=function(a){return function(c){var e,d,f;for(f=0;null!=(d=c[f]);f++)try{(e=b._data(d,"events"))&&e.remove&&b(d).triggerHandler("remove")}catch(g){}a(c)}}(b.cleanData);b.widget=function(a,c,e){var d,f,g,l,m={},k=a.split(".")[0];a=a.split(".")[1];d=k+"-"+a;e||(e=c,c=b.Widget);b.expr[":"][d.toLowerCase()]=
function(a){return!!b.data(a,d)};b[k]=b[k]||{};f=b[k][a];g=b[k][a]=function(a,b){if(!this._createWidget)return new g(a,b);arguments.length&&this._createWidget(a,b)};b.extend(g,f,{version:e.version,_proto:b.extend({},e),_childConstructors:[]});l=new c;l.options=b.widget.extend({},l.options);b.each(e,function(a,d){b.isFunction(d)?m[a]=function(){var b=function(){return c.prototype[a].apply(this,arguments)},e=function(b){return c.prototype[a].apply(this,b)};return function(){var a=this._super,c=this._superApply,
r;this._super=b;this._superApply=e;r=d.apply(this,arguments);this._super=a;this._superApply=c;return r}}():m[a]=d});g.prototype=b.widget.extend(l,{widgetEventPrefix:f?l.widgetEventPrefix||a:a},m,{constructor:g,namespace:k,widgetName:a,widgetFullName:d});f?(b.each(f._childConstructors,function(a,c){var d=c.prototype;b.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g);b.widget.bridge(a,g);return g};b.widget.extend=function(a){for(var c=y.call(arguments,
1),e=0,d=c.length,f,g;e<d;e++)for(f in c[e])g=c[e][f],c[e].hasOwnProperty(f)&&void 0!==g&&(b.isPlainObject(g)?a[f]=b.isPlainObject(a[f])?b.widget.extend({},a[f],g):b.widget.extend({},g):a[f]=g);return a};b.widget.bridge=function(a,c){var e=c.prototype.widgetFullName||a;b.fn[a]=function(d){var f="string"===typeof d,g=y.call(arguments,1),l=this;f?this.each(function(){var c,f=b.data(this,e);if("instance"===d)return l=f,!1;if(!f)return b.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+
d+"'");if(!b.isFunction(f[d])||"_"===d.charAt(0))return b.error("no such method '"+d+"' for "+a+" widget instance");c=f[d].apply(f,g);if(c!==f&&void 0!==c)return l=c&&c.jquery?l.pushStack(c.get()):c,!1}):(g.length&&(d=b.widget.extend.apply(null,[d].concat(g))),this.each(function(){var a=b.data(this,e);a?(a.option(d||{}),a._init&&a._init()):b.data(this,e,new c(d,this))}));return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",
options:{disabled:!1,create:null},_createWidget:function(a,c){c=b(c||this.defaultElement||this)[0];this.element=b(c);this.uuid=A++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=b();this.hoverable=b();this.focusable=b();c!==this&&(b.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===c&&this.destroy()}}),this.document=b(c.style?c.ownerDocument:c.document||c),this.window=b(this.document[0].defaultView||this.document[0].parentWindow));this.options=
b.widget.extend({},this.options,this._getCreateOptions(),a);this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(a,c){var e=a,d,f,g;if(0===arguments.length)return b.widget.extend({},this.options);if("string"===typeof a)if(e={},d=a.split("."),a=d.shift(),d.length){f=e[a]=b.widget.extend({},this.options[a]);for(g=0;g<d.length-1;g++)f[d[g]]=f[d[g]]||{},f=f[d[g]];a=d.pop();if(1===arguments.length)return void 0===
f[a]?null:f[a];f[a]=c}else{if(1===arguments.length)return void 0===this.options[a]?null:this.options[a];e[a]=c}this._setOptions(e);return this},_setOptions:function(a){for(var b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){this.options[a]=b;"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")));return this},enable:function(){return this._setOptions({disabled:!1})},
disable:function(){return this._setOptions({disabled:!0})},_on:function(a,c,e){var d,f=this;"boolean"!==typeof a&&(e=c,c=a,a=!1);e?(c=d=b(c),this.bindings=this.bindings.add(c)):(e=c,c=this.element,d=this.widget());b.each(e,function(e,l){function m(){if(a||!0!==f.options.disabled&&!b(this).hasClass("ui-state-disabled"))return("string"===typeof l?f[l]:l).apply(f,arguments)}"string"!==typeof l&&(m.guid=l.guid=l.guid||m.guid||b.guid++);var k=e.match(/^([\w:-]*)\s*(.*)$/),v=k[1]+f.eventNamespace;(k=k[2])?
d.delegate(k,v,m):c.bind(v,m)})},_off:function(a,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;a.unbind(c).undelegate(c);this.bindings=b(this.bindings.not(a).get());this.focusable=b(this.focusable.not(a).get());this.hoverable=b(this.hoverable.not(a).get())},_delay:function(a,b){var e=this;return setTimeout(function(){return("string"===typeof a?e[a]:a).apply(e,arguments)},b||0)},_hoverable:function(a){this.hoverable=this.hoverable.add(a);this._on(a,{mouseenter:function(a){b(a.currentTarget).addClass("ui-state-hover")},
mouseleave:function(a){b(a.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(a){this.focusable=this.focusable.add(a);this._on(a,{focusin:function(a){b(a.currentTarget).addClass("ui-state-focus")},focusout:function(a){b(a.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(a,c,e){var d,f=this.options[a];e=e||{};c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();c.target=this.element[0];if(a=c.originalEvent)for(d in a)d in c||
(c[d]=a[d]);this.element.trigger(c,e);return!(b.isFunction(f)&&!1===f.apply(this.element[0],[c].concat(e))||c.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(a,c){b.Widget.prototype["_"+a]=function(e,d,f){"string"===typeof d&&(d={effect:d});var g,l=d?!0===d||"number"===typeof d?c:d.effect||c:a;d=d||{};"number"===typeof d&&(d={duration:d});g=!b.isEmptyObject(d);d.complete=f;d.delay&&e.delay(d.delay);if(g&&b.effects&&b.effects.effect[l])e[a](d);else if(l!==a&&e[l])e[l](d.duration,
d.easing,f);else e.queue(function(c){b(this)[a]();f&&f.call(e[0]);c()})}});var p=!1;b(document).mouseup(function(){p=!1});b.widget("ui.mouse",{version:"1.11.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(c){if(!0===b.data(c.target,a.widgetName+".preventClickEvent"))return b.removeData(c.target,a.widgetName+".preventClickEvent"),
c.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(a){if(!p){this._mouseMoved=!1;this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=1===a.which,d="string"===typeof this.options.cancel&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:
!1;if(!e||d||!this._mouseCapture(a))return!0;this.mouseDelayMet=!this.options.delay;this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=!1!==this._mouseStart(a),!this._mouseStarted))return a.preventDefault(),!0;!0===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return c._mouseMove(a)};
this._mouseUpDelegate=function(a){return c._mouseUp(a)};this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return p=!0}},_mouseMove:function(a){if(this._mouseMoved&&(b.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button||!a.which))return this._mouseUp(a);if(a.which||a.button)this._mouseMoved=!0;if(this._mouseStarted)return this._mouseDrag(a),a.preventDefault();this._mouseDistanceMet(a)&&
this._mouseDelayMet(a)&&((this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,a))?this._mouseDrag(a):this._mouseUp(a));return!this._mouseStarted},_mouseUp:function(a){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a));return p=!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-
a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});(function(){function a(a,b,c){return[parseFloat(a[0])*(s.test(a[0])?b/100:1),parseFloat(a[1])*(s.test(a[1])?c/100:1)]}function c(a){var c=a[0];return 9===c.nodeType?{width:a.width(),height:a.height(),offset:{top:0,left:0}}:b.isWindow(c)?{width:a.width(),height:a.height(),
offset:{top:a.scrollTop(),left:a.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}}b.ui=b.ui||{};var e,d,f=Math.max,g=Math.abs,l=Math.round,m=/left|center|right/,k=/top|center|bottom/,v=/[\+\-]\d+(\.[\d]+)?%?/,p=/^\w+/,s=/%$/,w=b.fn.position;b.position={scrollbarWidth:function(){if(void 0!==e)return e;var a,c,d=b("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
c=d.children()[0];b("body").append(d);a=c.offsetWidth;d.css("overflow","scroll");c=c.offsetWidth;a===c&&(c=d[0].clientWidth);d.remove();return e=a-c},getScrollInfo:function(a){var c=a.isWindow||a.isDocument?"":a.element.css("overflow-x"),d=a.isWindow||a.isDocument?"":a.element.css("overflow-y"),c="scroll"===c||"auto"===c&&a.width<a.element[0].scrollWidth;return{width:"scroll"===d||"auto"===d&&a.height<a.element[0].scrollHeight?b.position.scrollbarWidth():0,height:c?b.position.scrollbarWidth():0}},
getWithinInfo:function(a){a=b(a||window);var c=b.isWindow(a[0]),d=!!a[0]&&9===a[0].nodeType;return{element:a,isWindow:c,isDocument:d,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c||d?a.width():a.outerWidth(),height:c||d?a.height():a.outerHeight()}}};b.fn.position=function(e){if(!e||!e.of)return w.apply(this,arguments);e=b.extend({},e);var t,r,u,x,q,h,B=b(e.of),D=b.position.getWithinInfo(e.within),E=b.position.getScrollInfo(D),s=(e.collision||"flip").split(" "),
C={};h=c(B);B[0].preventDefault&&(e.at="left top");r=h.width;u=h.height;x=h.offset;q=b.extend({},x);b.each(["my","at"],function(){var a=(e[this]||"").split(" "),b,c;1===a.length&&(a=m.test(a[0])?a.concat(["center"]):k.test(a[0])?["center"].concat(a):["center","center"]);a[0]=m.test(a[0])?a[0]:"center";a[1]=k.test(a[1])?a[1]:"center";b=v.exec(a[0]);c=v.exec(a[1]);C[this]=[b?b[0]:0,c?c[0]:0];e[this]=[p.exec(a[0])[0],p.exec(a[1])[0]]});1===s.length&&(s[1]=s[0]);"right"===e.at[0]?q.left+=r:"center"===
e.at[0]&&(q.left+=r/2);"bottom"===e.at[1]?q.top+=u:"center"===e.at[1]&&(q.top+=u/2);t=a(C.at,r,u);q.left+=t[0];q.top+=t[1];return this.each(function(){var c,h,k=b(this),m=k.outerWidth(),p=k.outerHeight(),v=parseInt(b.css(this,"marginLeft"),10)||0,w=parseInt(b.css(this,"marginTop"),10)||0,y=m+v+(parseInt(b.css(this,"marginRight"),10)||0)+E.width,A=p+w+(parseInt(b.css(this,"marginBottom"),10)||0)+E.height,n=b.extend({},q),z=a(C.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?n.left-=m:"center"===
e.my[0]&&(n.left-=m/2);"bottom"===e.my[1]?n.top-=p:"center"===e.my[1]&&(n.top-=p/2);n.left+=z[0];n.top+=z[1];d||(n.left=l(n.left),n.top=l(n.top));c={marginLeft:v,marginTop:w};b.each(["left","top"],function(a,d){if(b.ui.position[s[a]])b.ui.position[s[a]][d](n,{targetWidth:r,targetHeight:u,elemWidth:m,elemHeight:p,collisionPosition:c,collisionWidth:y,collisionHeight:A,offset:[t[0]+z[0],t[1]+z[1]],my:e.my,at:e.at,within:D,elem:k})});e.using&&(h=function(a){var b=x.left-n.left,c=b+r-m,d=x.top-n.top,t=
d+u-p,h={target:{element:B,left:x.left,top:x.top,width:r,height:u},element:{element:k,left:n.left,top:n.top,width:m,height:p},horizontal:0>c?"left":0<b?"right":"center",vertical:0>t?"top":0<d?"bottom":"middle"};r<m&&g(b+c)<r&&(h.horizontal="center");u<p&&g(d+t)<u&&(h.vertical="middle");f(g(b),g(c))>f(g(d),g(t))?h.important="horizontal":h.important="vertical";e.using.call(this,a,h)});k.offset(b.extend(n,{using:h}))})};b.ui.position={fit:{left:function(a,b){var c=b.within,d=c.isWindow?c.scrollLeft:
c.offset.left,e=c.width,g=a.left-b.collisionPosition.marginLeft,c=d-g,h=g+b.collisionWidth-e-d;b.collisionWidth>e?0<c&&0>=h?(d=a.left+c+b.collisionWidth-e-d,a.left+=c-d):a.left=0<h&&0>=c?d:c>h?d+e-b.collisionWidth:d:a.left=0<c?a.left+c:0<h?a.left-h:f(a.left-g,a.left)},top:function(a,b){var c=b.within,d=c.isWindow?c.scrollTop:c.offset.top,e=b.within.height,g=a.top-b.collisionPosition.marginTop,c=d-g,h=g+b.collisionHeight-e-d;b.collisionHeight>e?0<c&&0>=h?(d=a.top+c+b.collisionHeight-e-d,a.top+=c-d):
a.top=0<h&&0>=c?d:c>h?d+e-b.collisionHeight:d:a.top=0<c?a.top+c:0<h?a.top-h:f(a.top-g,a.top)}},flip:{left:function(a,b){var c=b.within,d=c.offset.left+c.scrollLeft,e=c.width,f=c.isWindow?c.scrollLeft:c.offset.left,h=a.left-b.collisionPosition.marginLeft,c=h-f,l=h+b.collisionWidth-e-f,h="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,k="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,m=-2*b.offset[0];if(0>c){if(d=a.left+h+k+m+b.collisionWidth-e-d,0>d||d<g(c))a.left+=
h+k+m}else 0<l&&(d=a.left-b.collisionPosition.marginLeft+h+k+m-f,0<d||g(d)<l)&&(a.left+=h+k+m)},top:function(a,b){var c=b.within,d=c.offset.top+c.scrollTop,e=c.height,f=c.isWindow?c.scrollTop:c.offset.top,h=a.top-b.collisionPosition.marginTop,c=h-f,l=h+b.collisionHeight-e-f,h="top"===b.my[1]?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,k="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,m=-2*b.offset[1];if(0>c){if(d=a.top+h+k+m+b.collisionHeight-e-d,0>d||d<g(c))a.top+=h+k+m}else 0<
l&&(d=a.top-b.collisionPosition.marginTop+h+k+m-f,0<d||g(d)<l)&&(a.top+=h+k+m)}},flipfit:{left:function(){b.ui.position.flip.left.apply(this,arguments);b.ui.position.fit.left.apply(this,arguments)},top:function(){b.ui.position.flip.top.apply(this,arguments);b.ui.position.fit.top.apply(this,arguments)}}};(function(){var a,c,e,f,g=document.getElementsByTagName("body")[0];e=document.createElement("div");a=document.createElement(g?"div":"body");c={visibility:"hidden",width:0,height:0,border:0,margin:0,
background:"none"};g&&b.extend(c,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in c)a.style[f]=c[f];a.appendChild(e);c=g||document.documentElement;c.insertBefore(a,c.firstChild);e.style.cssText="position: absolute; left: 10.7432222px;";e=b(e).offset().left;d=10<e&&11>e;a.innerHTML="";c.removeChild(a)})()})()});