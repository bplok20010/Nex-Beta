$.browser||($.browser={},$.browser.mozilla=/firefox/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase())),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,i,r){return jQuery.easing[jQuery.easing.def](e,t,n,i,r)},easeInQuad:function(e,t,n,i,r){return i*(t/=r)*t+n},easeOutQuad:function(e,t,n,i,r){return-i*(t/=r)*(t-2)+n},easeInOutQuad:function(e,t,n,i,r){return(t/=r/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,r){return i*(t/=r)*t*t+n},easeOutCubic:function(e,t,n,i,r){return i*((t=t/r-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,r){return(t/=r/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,r){return i*(t/=r)*t*t*t+n},easeOutQuart:function(e,t,n,i,r){return-i*((t=t/r-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,r){return(t/=r/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,r){return i*(t/=r)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,r){return i*((t=t/r-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,r){return i*Math.sin(t/r*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+n},easeInExpo:function(e,t,n,i,r){return 0==t?n:i*Math.pow(2,10*(t/r-1))+n},easeOutExpo:function(e,t,n,i,r){return t==r?n+i:i*(-Math.pow(2,-10*t/r)+1)+n},easeInOutExpo:function(e,t,n,i,r){return 0==t?n:t==r?n+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+n},easeOutCirc:function(e,t,n,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+n},easeInOutCirc:function(e,t,n,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,r){var s=1.70158,o=0,a=i;if(0==t)return n;if(1==(t/=r))return n+i;if(o||(o=.3*r),a<Math.abs(i)){a=i;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(i/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/o))+n},easeOutElastic:function(e,t,n,i,r){var s=1.70158,o=0,a=i;if(0==t)return n;if(1==(t/=r))return n+i;if(o||(o=.3*r),a<Math.abs(i)){a=i;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*t)*Math.sin((t*r-s)*(2*Math.PI)/o)+i+n},easeInOutElastic:function(e,t,n,i,r){var s=1.70158,o=0,a=i;if(0==t)return n;if(2==(t/=r/2))return n+i;if(o||(o=r*(.3*1.5)),a<Math.abs(i)){a=i;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(i/a);return 1>t?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/o))+n:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/o)*.5+i+n},easeInBack:function(e,t,n,i,r,s){return void 0==s&&(s=1.70158),i*(t/=r)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,i,r,s){return void 0==s&&(s=1.70158),i*((t=t/r-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,i,r,s){return void 0==s&&(s=1.70158),(t/=r/2)<1?i/2*(t*t*(((s*=1.525)+1)*t-s))+n:i/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,i,r){return i-jQuery.easing.easeOutBounce(e,r-t,0,i,r)+n},easeOutBounce:function(e,t,n,i,r){return(t/=r)<1/2.75?i*(7.5625*t*t)+n:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,i,r){return r/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,i,r)+n:.5*jQuery.easing.easeOutBounce(e,2*t-r,0,i,r)+.5*i+n}}),function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),r=0,s=0,o=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(r=n.wheelDelta/120),n.detail&&(r=-n.detail/3),o=r,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,s=-1*r),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(s=-1*n.wheelDeltaX/120),i.unshift(t,r,s,o),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e,t,n){function i(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r,s="hashchange",o=document,a=e.event.special,u=o.documentMode,c="on"+s in t&&(u===n||u>7);e.fn[s]=function(e){return e?this.bind(s,e):this.trigger(s)},e.fn[s].delay=50,a[s]=e.extend(a[s],{setup:function(){return c?!1:void e(r.start)},teardown:function(){return c?!1:void e(r.stop)}}),r=function(){function r(){var n=i(),o=p(l);n!==l?(h(l=n,o),e(t).trigger(s)):o!==l&&(location.href=location.href.replace(/#.*/,"")+o),a=setTimeout(r,e.fn[s].delay)}var a,u={},l=i(),f=function(e){return e},h=f,p=f;return u.start=function(){a||r()},u.stop=function(){a&&clearTimeout(a),a=n},e.browser.msie&&!c&&function(){var t,n;u.start=function(){t||(n=e.fn[s].src,n=n&&n+i(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||h(i()),r()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow,o.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=o.title)}catch(e){}})},u.stop=f,p=function(){return i(t.location.href)},h=function(n,i){var r=t.document,a=e.fn[s].domain;n!==i&&(r.title=o.title,r.open(),a&&r.write('<script>document.domain="'+a+'"</script>'),r.close(),t.location.hash=n)}}(),u}()}(jQuery,this),$.fn._display=function(e){var e=e||"nex-hide2show",t=$(this);return t.add(t.parents(":hidden")).filter(function(){return"none"==$(this).css("display")}).each(function(){$(this).addClass(e)})},$.fn._hidden=function(e){var e=e||"nex-hide2show";return this.each(function(t){$(this).removeClass(e)})},$.fn._width=function(e){if(void 0==e){var t=this[0];if(t==window||t==document||t==document.body)return this.width()||document.body.clientWidth;var n=$(t),i=n.width();return i||0}return this.width(e)},$.fn._height=function(e){if(void 0==e){var t=this[0];if(t==window||t==document||t==document.body)return this.height()||document.body.clientHeight;var n=($(t),$(t).height());return n||0}return this.height(e)},$.fn._outerWidth=function(e){if(void 0==e||e===!1||e===!0){var t=this[0];if(t==window||t==document||t==document.body)return this.width()||document.body.clientWidth;var n=($(t),this.outerWidth(!!e)||0);return n}Nex.isIE;return this.each(function(){var t=$(this);if($.support.boxModel){var n=t,i=e-(n.outerWidth()-n.width());i=0>i?0:i,n.width(i)}else t.width(e)})},$.fn._outerHeight=function(e){if(void 0==e||e===!1||e===!0){var t=this[0];if(t==window||t==document||t==document.body)return this.height()||document.body.clientHeight;var n=($(t),this.outerHeight(!!e)||0);return n}Nex.isIE;return this.each(function(){var t=$(this);if($.support.boxModel){var n=t,i=e-(n.outerHeight()-n.height());i=0>i?0:i,n.height(i)}else t.height(e)})},$.fn._position=function(e){var t;if(e===t){var n=this.eq(0),i=n.offsetParent();if(i.is("body")||i.is("html"))return n.offset();var r=n.offset(),s=i.offset(),o=parseFloat(i.css("borderLeftWidth"))||0,a=parseFloat(i.css("paddingLeft"))||0,u=parseFloat(i.css("borderTopWidth"))||0,c=parseFloat(i.css("paddingTop"))||0,l={top:r.top-s.top-u-c,left:r.left-s.left-o-a};return{top:l.top+i.scrollTop(),left:l.left+i.scrollLeft()}}return this.css(e)},$.fn._show=function(e){return this.removeClass("nex-hidden"),e&&$.isFunction(e)&&e.call(this),this},$.fn._hide=function(e){return this.addClass("nex-hidden"),e&&$.isFunction(e)&&e.call(this),this},$._isPlainObject=function(e){var t=$.isPlainObject(e);return t&&"_outerWidth"in e&&(t=!1),t},$._parseHTML=$.parseHTML=$.parseHTML||function(e,t,n){var i,r=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;return e&&"string"==typeof e?("boolean"==typeof t&&(n=t,t=0),t=t||document,(i=r.exec(e))?[t.createElement(i[1])]:(i=jQuery.buildFragment([e],$(t),n?null:[]),jQuery.merge([],i.fragment.childNodes))):null},jQuery.fn.extend({_removeStyle:function(e,t){e+="";var n=$.trim(e.toLowerCase());n=n.replace(/\s+/g,",").split(",");var e={};return $.each(n,function(t,n){e[n]=!0}),this.each(function(){var n=this.style.cssText;if(n){var i=n.split(";"),r={};$.each(i,function(e,t){if(t){var n=t.split(":");n.length&&(r[$.trim(n[0].toLowerCase())]=$.trim(n[1]))}});var s=[];for(var o in r){if(t){if(o in e)continue}else{var a=!1;for(var u in e)0===o.indexOf(u)&&(a=!0);if(a)continue}s.push(o+":"+r[o]+";")}this.style.cssText=s.join("")}})},_visible:function(e){var t;e=e===t?!0:e;var n=!!e;return this.each(function(){var e=$(this);n?e._removeStyle("visibility"):e.css("visibility","hidden")})}}),jQuery.support.selectstart=!1,jQuery.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".nex-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".nex-disableSelection")}}),void 0===jQuery.support.boxModel&&(jQuery.support.boxModel="CSS1Compat"===document.compatMode),jQuery(function(){var e=document.body,t=e.appendChild(t=document.createElement("div"));$.support.selectstart="onselectstart"in t,e.removeChild(t).style.display="none"}),function(e,t){function i(e){var t,n,i=document,e=e===n?!0:!1,r=i.getElementsByTagName("head")[0];try{a._b.c()}catch(s){if(s.sourceURL)return s.sourceURL;t=s.stack,!t&&window.opera&&(t=(String(s).match(/of linked script \S+/g)||[]).join(" "))}if(t)return t=t.split(/[@ ]/g).pop(),t="("===t[0]?t.slice(1,-1):t.replace(/\s/,""),t.replace(/(:\d+)?:\d+$/i,"");for(var o,u=e?r:i,c=u.getElementsByTagName("script"),l=c.length;o=c[--l];)if("interactive"===o.readyState)return o.src}function r(e){var e=e||{};return{cache1:{},cache2:{},helper:t.noop,ltag:e.ltag||"<%",rtag:e.rtag||"%>",simple:e.simple||!1,compile1:function(e,t,n){var i=this.cache1[e]?this.cache1[e]:new Function(n?"obj,"+n:"obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split(this.ltag).join("	").replace(new RegExp("((^|"+this.rtag+")[^	]*)'","g"),"$1\r").replace(new RegExp("	=(.*?)"+this.rtag,"g"),"',$1,'").split("	").join("');").split(this.rtag).join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return this.cache1[e]=i,t?i(t):i},compile2:function(e,t,n){var i=this.cache2[e]?this.cache2[e]:new Function(n?"obj,"+n:"obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split(this.ltag).join("	").replace(new RegExp("	(.*?)"+this.rtag,"g"),"',$1,'").split("	").join("');").split(this.rtag).join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return this.cache2[e]=i,t?i(t):i},compile:function(){return this.simple?this.compile2.apply(this,arguments):this.compile1.apply(this,arguments)}}}var s,o={},u=Object.prototype,c=u.toString,l=!0,f={toString:1};e.Nex=o,o.global=e;for(s in f)l=null;l&&(l=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"]),o.enumerables=l,o.apply=function(e,t,n){if(n&&o.apply(e,n),e&&t&&"object"==typeof t){var i,r,s;for(i in t)e[i]=t[i];if(l)for(r=l.length;r--;)s=l[r],t.hasOwnProperty(s)&&(e[s]=t[s])}return e},o.applyIf=function(e,t){var n;if(e)for(n in t)void 0===e[n]&&(e[n]=t[n]);return e};var h=navigator.userAgent.toLowerCase(),p=(/msie ([\w.]+)/.exec(h)||[],i(!1));p=p.split("/"),p.pop(),p=p.join("/"),t(document).ready(function(){if(o.isIE&&o.IEVer){var e=["nex-ie"],n=t(document.body);e.push("nex-ie"+o.IEVer),o.IEVer<8&&e.push("nex-ielt8"),o.IEVer<9&&e.push("nex-ielt9"),n.addClass(e.join(" "))}}),o.apply(o,{userAgent:h,aid:1,tabIndex:1,zIndex:99999,topzIndex:99999999,scrollbarSize:!1,resizeOnHidden:!0,easingDef:t.easing.def?t.easing.def:"swing",getTemplate:r,dirname:function(e){return e+="",e=e.split("/"),e.pop(),e=e.join("/")},baseUrl:p,getCurrentScriptUrl:function(){return this.baseUrl},template:r(),generateMixed:function(e){for(var e=e||6,t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n="",i=0;e>i;i++){var r=Math.ceil(35*Math.random());n+=t[r]}return n},unique:function(e){return this.uuid(e)},uuid:function(e){var t=o.generateMixed(e||6),n=t+"-"+o.aid++;return n},distArr:function(e){for(var t={},n=[],i=0;i<e.length;i++)t[e[i]]||(n.push(e[i]),t[e[i]]=!0);return n}}),o.apply(o,{isClass:function(e){return"function"==typeof e&&e.$isClass?!0:!1},isNexConstructor:function(e){return this.isClass(e)},isNex:function(e){return this.isInstance(e)},isInstance:function(e){return"object"==typeof e&&e.isInstance?!0:!1},isXtype:function(e){return"object"==typeof e&&"xtype"in e?!0:!1},isjQuery:function(e){return"object"===t.type(e)&&"_outerWidth"in e?!0:!1},clone:function(e,t){if(null===e||void 0===e)return e;if(void 0===t&&(t=!1),e.nodeType&&e.cloneNode)return t?e:e.cloneNode(!0);var n=c.call(e);if("[object Date]"===n)return new Date(e.getTime());var i,r,s,a,u;if("[object Array]"===n)for(i=e.length,a=[];i--;)a[i]=o.clone(e[i],t);else if("[object Object]"===n&&e.constructor===Object){a={};for(u in e)a[u]=o.clone(e[u],t);if(l)for(r=l.length;r--;)s=l[r],a[s]=e[s]}return a||e},typeOf:function(e){if(null===e)return"null";var t=typeof e;if("undefined"===t||"string"===t||"number"===t||"boolean"===t)return t;var n=c.call(e);switch(n){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Boolean]":return"boolean";case"[object Number]":return"number";case"[object RegExp]":return"regexp"}if("function"===t)return"function";if("object"===t)return void 0!==e.nodeType?3===e.nodeType?/\S/.test(e.nodeValue)?"textnode":"whitespace":"element":"object";throw new Error('Failed to determine the type of the specified value "'+e+'". This is most likely a bug.')},isEmpty:function(e,t){return null===e||void 0===e||(t?!1:""===e)||o.isArray(e)&&0===e.length},isArray:"isArray"in Array?Array.isArray:function(e){return"[object Array]"===c.call(e)},isDate:function(e){return"[object Date]"===c.call(e)},isObject:"[object Object]"===c.call(null)?function(e){return null!==e&&void 0!==e&&"[object Object]"===c.call(e)&&void 0===e.ownerDocument}:function(e){return"[object Object]"===c.call(e)},isPlainObject:function(e){return t._isPlainObject?t._isPlainObject(e):t.isPlainObject(e)},isSimpleObject:function(e){return e instanceof Object&&e.constructor===Object},isPrimitive:function(e){var t=typeof e;return"string"===t||"number"===t||"boolean"===t},isFunction:"undefined"!=typeof document&&"function"==typeof document.getElementsByTagName("body")?function(e){return"[object Function]"===c.call(e)}:function(e){return"function"==typeof e},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isElement:function(e){return e?1===e.nodeType:!1},isTextNode:function(e){return e?"#text"===e.nodeName:!1},isDefined:function(e){return"undefined"!=typeof e},isPlainObject:function(e){return t._isPlainObject(e)},unDefined:function(e,t){return void 0===e?t:e}});var d=function(e){return e.test(o.userAgent)},g="CSS1Compat"==document.compatMode,m=function(e,t){var n;return e&&(n=t.exec(o.userAgent))?parseFloat(n[1]):0},v=document.documentMode,y=d(/opera/),x=y&&d(/version\/10\.5/),b=d(/\bchrome\b/),C=d(/webkit/),N=!b&&d(/safari/),_=N&&d(/applewebkit\/4/),w=N&&d(/version\/3/),$=N&&d(/version\/4/),E=N&&d(/version\/5/),M=!y&&d(/msie/),S=M&&(d(/msie 7/)&&8!=v&&9!=v||7==v),j=M&&(d(/msie 8/)&&7!=v&&9!=v||8==v),I=M&&(d(/msie 9/)&&7!=v&&8!=v||9==v),O=(M&&(d(/msie 10/)&&7!=v&&8!=v&&9!=v||10==v),M&&d(/msie 6/)),A=!C&&d(/gecko/),T=A&&d(/rv:1\.9/),z=A&&d(/rv:2\.0/),D=A&&d(/rv:5\./),R=T&&d(/rv:1\.9\.0/),P=T&&d(/rv:1\.9\.1/),L=T&&d(/rv:1\.9\.2/),k=d(/windows|win32/),F=d(/macintosh|mac os x/),B=d(/linux/),H=m(!0,/\bchrome\/(\d+\.\d+)/),W=m(!0,/\bfirefox\/(\d+\.\d+)/),Q=m(M,/msie (\d+\.\d+)/),G=m(y,/version\/(\d+\.\d+)/),X=m(N,/version\/(\d+\.\d+)/),U=m(C,/webkit\/(\d+\.\d+)/),V=/^https/i.test(window.location.protocol);try{document.execCommand("BackgroundImageCache",!1,!0)}catch(Y){}var q=function(){};q.info=q.warn=q.error=o.emptyFn,o.apply(o,{SSL_SECURE_URL:V&&M?"javascript:''":"about:blank",USE_NATIVE_JSON:!1,isStrict:g,isIEQuirks:M&&!g,isOpera:y,isOpera10_5:x,isWebKit:C,isChrome:b,isSafari:N,isSafari3:w,isSafari4:$,isSafari5:E,isSafari2:_,IEVer:Q,isIE:M,isIE6:O,isIE7:S,isIE8:j,isIE9:I,isGecko:A,isGecko3:T,isGecko4:z,isGecko5:D,isFF3_0:R,isFF3_5:P,isFF3_6:L,isFF4:W>=4&&5>W,isFF5:W>=5&&6>W,isLinux:B,isWindows:k,isMac:F,chromeVersion:H,firefoxVersion:W,ieVersion:Q,operaVersion:G,safariVersion:X,webKitVersion:U,isSecure:V,escapeRe:function(e){return e.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},log:q,invoke:function(e,n){var i=[],r=Array.prototype.slice.call(arguments,2);return t.each(e,function(e,t){t&&"function"==typeof t[n]?i.push(t[n].apply(t,r)):i.push(void 0)}),i}}),o.apply(o,{htmlEncode:function(){var e,t,n={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;"},i=[];for(e in n)i.push(e);return t=new RegExp("("+i.join("|")+")","g"),function(e){return e?String(e).replace(t,function(e,t){return n[t]}):e}}(),htmlDecode:function(){var e,t,n={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"'},i=[];for(e in n)i.push(e);return t=new RegExp("("+i.join("|")+"|&#[0-9]{1,5};)","g"),function(e){return e?String(e).replace(t,function(e,t){return t in n?n[t]:String.fromCharCode(parseInt(t.substr(2),10))}):e}}(),addCssRules:function(e,n,i,r){function s(e,t){return(t+"").toUpperCase()}function o(e){var t=/^-ms-/,n=/-([\da-z])/gi;return e.replace(t,"ms-").replace(n,s)}function a(e,t,n){var i,n=n===i?!0:n;return n?c.apply(this,[e,t]):u.apply(this,[e,t])}function u(t,n){var i=e.styleSheet?e.styleSheet:e.sheet,r=i.cssRules||i.rules;return i.addRule?i.addRule(t,n):i.insertRule(t+"{"+n+"}",r.length),a}function c(n,i){for(var r=e.styleSheet?e.styleSheet:e.sheet,s=r.cssRules||r.rules,c=null,l=0,f=s.length;f>l;l++)s[l].selectorText.toLowerCase()===n.toLowerCase()&&(c=s[l]);if(!c)return u(n,i);for(var h=(i+"").split(";"),p=0,d=h.length;d>p;p++){var g=h[p].split(":");c.style[t.trim(o(g[0]))]=g[1]}return a}return n?a(n,i,r):a},parseUrl:function(e){var n=/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;if("object"===t.type(e))return e;var i=n.exec(e||"")||[];return{href:i[0]||"",hrefNoHash:i[1]||"",hrefNoSearch:i[2]||"",domain:i[3]||"",protocol:i[4]||"",doubleSlash:i[5]||"",authority:i[6]||"",username:i[8]||"",password:i[9]||"",host:i[10]||"",hostname:i[11]||"",port:i[12]||"",pathname:i[13]||"",directory:i[14]||"",filename:i[15]||"",search:i[16]||"",hash:i[17]||""}},monitor:function(e){var t;t=function(){var n;return t._callBefore.apply(this,arguments),n=e.apply(this,arguments),t._callAfter.apply(this,arguments),n};var n=[];return t._callBefore=function(){for(var e=0,t=n.length;t>e;e++){var i=n[e];i&&i.above&&i.fn.apply(this,arguments)}},t._callAfter=function(){for(var e=0,t=n.length;t>e;e++){var i=n[e];i&&(i.above||i.fn.apply(this,arguments))}},t.before=function(e){return n.push({above:!0,fn:e})-1},t.after=function(e){return n.push({above:!1,fn:e})-1},t.remove=function(e){return n[e]&&(n[e]=null)},t.beforeOnce=function(e){var n;n=t.before(function(){e.apply(this,arguments),t.remove(n)})},t.afterOnce=function(e){var n;n=t.after(function(){e.apply(this,arguments),t.remove(n)})},t}}),o.apply(o,{array_move:function(e,t,n,i){if(t==n)return e;var r=e,s=e=[].concat(r);e=[];for(var o=0,a=s.length;a>o;o++){var u=e.push(o);o==t?t=u-1:o==n&&(n=u-1)}var c=e[t];if(t>n){i||n++;for(var l=t;l>=0;l--){if(l==n){e[l]=c;break}e[l]=e[l-1]}}else if(n>t){i&&n--;for(var l=t;n>=l;l++)l==n?e[l]=c:e[l]=e[l+1]}var f=r;f.length=0;for(var h=0,a=e.length;a>h;h++)f.push(s[e[h]]);return e=f},array_splice:function(e,n){var i,r=this;if(!t.isArray(n))return n;var s=e;if(t.isArray(e)&&e.length<=1&&(e=e[0]),e===i)return n;if(!t.isArray(e)&&!t.isFunction(e))return isNaN(parseInt(e))?n:(n.splice(parseInt(e),1),n);var o=r.copy(n),e=t.isArray(e)?e:t.isFunction(e)?[]:[e],a={};return t.each(e,function(e,t){a[t]=!0}),n.length=0,t.each(o,function(e,i){if(t.isFunction(s)){var r=s.call(i,e,i);r===!0&&(a[e]=!0)}e in a||n.push(i)}),n},array_insert:function(e,n,i,r){var s,r=r===s?0:r;if(!t.isArray(i))return i;if(t.isArray(n)||(n=[n]),e===s)return i;var o=i.length;return o>e&&(n=r?n.concat([i[e]]):[i[e]].concat(n)),n=[e,1].concat(n),i.splice.apply(i,n),i},array_clear:function(e){return e.length=0,e},array_copy:function(e){return[].concat(e)},copyArray:function(e){return[].concat(e)},copy:function(e){return t.isArray(e)?[].concat(e):t.isPlainObject(e)?t.extend({},e):e},inArray:function(e,n){if("number"===t.type(e)&&(e+=""),n)for(var i=n.length,r=0;i>r;r++){var s=n[r];if("number"===t.type(s)&&(s+=""),r in n&&s===e)return r}return-1},str_number:function(e,n){var e=e+"";if("string"===t.type(e)){var i=e.split(".");if(i.length>1){var r=i[1].substring(0,n);e=""!==r?[i[0],r].join("."):i[0]}}return Number(e)},_checkYScrollEnd:function(e){var t=0,n=0,i=0;if(e===document.body||e===document||e===window)document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),n=document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);else{if(!e.nodeType)return!1;t=e.scrollTop,n=e.clientHeight,i=e.scrollHeight}return n>=i?!1:t+n>=i?!0:!1},_checkXScrollEnd:function(e){var t=0,n=0,i=0;if(e===document.body||e===document||e===window)document.documentElement&&document.documentElement.scrollLeft?t=document.documentElement.scrollLeft:document.body&&(t=document.body.scrollLeft),n=document.body.clientWidth&&document.documentElement.clientHeight?document.body.clientWidth<document.documentElement.clientWidth?document.body.clientWidth:document.documentElement.clientWidth:document.body.clientWidth>document.documentElement.clientWidth?document.body.clientWidth:document.documentElement.clientWidth,i=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth);else{if(!e.nodeType)return!1;t=e.scrollLeft,n=e.clientWidth,i=e.scrollWidth}return n>=i?!1:t+n>=i?!0:!1},isScrollEnd:function(e,t){var n=this;return"left"==t?n._checkXScrollEnd(e):n._checkYScrollEnd(e)},hasScroll:function(e,n,i){var e=t(e)[0];if(i!==!0)if("left"===n){if("hidden"===t(e).css("overflow-x"))return!1}else if("hidden"===t(e).css("overflow-y"))return!1;var r=n&&"left"===n?"scrollLeft":"scrollTop",s=!1;return e[r]>0?!0:(e[r]=1,s=e[r]>0,e[r]=0,s)},getScrollbarSize:function(){if(!o.scrollbarSize){var e=document.body,t=document.createElement("div");t.style.width=t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",e.appendChild(t),o.scrollbarSize={width:t.offsetWidth-t.clientWidth,height:t.offsetHeight-t.clientHeight},o.scrollbarSize.width=o.scrollbarSize.width||o.scrollbarSize.height,o.scrollbarSize.height=o.scrollbarSize.height||o.scrollbarSize.width,o.scrollbarSize.x=o.scrollbarSize.height,o.scrollbarSize.y=o.scrollbarSize.width,e.removeChild(t)}return o.scrollbarSize},util:{},addUtil:function(e,t){return o.setDefined("Nex.util."+e,t),this.util[e]=t},getUtil:function(e){return this.util[e]},extendUtil:function(e,t){return this.apply(this.util[e],t)},removeUtil:function(){return this.util[n]=null,delete this.util[n],this},mixins:{},addMixins:function(e,n){return o.setDefined("Nex.mixins."+e,n),n=t.isFunction(n)?n.call(this):n,this.mixins[e]=n},getMixins:function(e){return this.mixins[e]},extendMixins:function(e,t){return this.apply(this.mixins[e],t)},removeMixins:function(){return this.mixins[n]=null,delete this.mixins[n],this},when:function(){for(var e=[].slice.apply(arguments),n=[],i=0,r=e.length;r>i;i++){var s,a=e[i];if(o.isXtype(a)||o.isString(a)){var s=o.create(a);a=s&&s.getDeferred?s.getDeferred():null}o.isInstance(a)&&(a=a.getDeferred?a.getDeferred():null),a&&n.push(a)}return t.extend(t.when.apply(t,n),{success:function(){this.done.apply(this,arguments)},error:function(){this.fail.apply(this,arguments)},complete:function(){this.always.apply(this,arguments)}})},emptyFn:t.noop,error:function(e){var t,n=new Error(e===t?"":e);throw n}}),o.apply(o,{aliases:{},xtypes:{},classes:{},getClass:function(e){return this.classes[e]||this.aliases[e]||this.xtypes[e]},addClass:function(e,t){return this.classes[e]=t,o.setDefined(e,t),this},addXtype:function(e,t){return this.xtypes[e]=t,this},addAlias:function(e,t){return this.aliases[e]=t,o.setDefined(e,t),this},setDefined:function(e,t){return define(e,function(){return t}),this},createClass:function(){function e(e){var t=function(){};return t.prototype=e.prototype,t}return function(){var t=arguments[0],n=[].slice.call(arguments,1);if("function"!=typeof t)return null;var i=new(e(t));return t.apply(i,n),i}}(),create:function(){var e=[].slice.apply(arguments),t=e[0],n=e.slice(1),i=e.length;if(0>=i)return!1;if(o.isInstance(t))return t;if(o.isClass(t))return o.createClass.apply(o,[t].concat(n));if(o.isXtype(t)){var r=t,s=r.xtype;return delete r.xtype,t=o.getClass(s),t?o.isInstance(t)?t:o.createClass.apply(o,[t,r].concat(n)):!1}return o.isString(t)?(t=o.getClass(t),t?o.isInstance(t)?t:o.createClass.apply(o,[t].concat(n)):!1):!1},Create:function(){return this.create.apply(this,arguments)}})}(window,jQuery),function(){var e=[],t=Nex.enumerables,n=function(){},i=function(e){n.prototype=e;var t=new n;return n.prototype=null,t},r=function(){};Nex.chain=i,Nex.apply(r,{$className:"Nex.Base",$isClass:!0,xtype:"Nex.Base",superclass:null,extend:function(e){var t,n,s,o=e.prototype,a=this.$className||"";if(Nex.isObject(e))return void this.override(e);for(s in e)this[s]=e[s];if(this._optionsList=[],n=this.prototype=i(o),this.superclass=n.superclass=o,n.self=this,!e.$isClass){t=r.prototype;for(s in t)s in n&&(n[s]=t[s])}this.$className=a,n.$className=a},override:function(e){var n,i,r,s,o=this.prototype,a=[],u=function(e){return function(){return e.apply(this,arguments)}},c=this.$className||"";for(r in e)a.push(r);for(t&&a.push.apply(a,t),n=0,i=a.length;i>n;n++)r=a[n],e.hasOwnProperty(r)&&(s=e[r],"function"!=typeof s||s.$isClass||("undefined"!=typeof s.$owner&&(s=u(s)),s.$owner=this,s.$name=r),o[r]=s);return o.$className=c,o.self=this,this},addStatics:function(e){var t,n;for(n in e)e.hasOwnProperty(n)&&(t=e[n],this[n]=t);return this},addMembers:function(e){var n,i,r,s,o=this.prototype,a=[],u=this.$className||"";for(r in e)a.push(r);for(t&&a.push.apply(a,t),n=0,i=a.length;i>n;n++)r=a[n],e.hasOwnProperty(r)&&(s=e[r],"function"!=typeof s||s.$isClass||(s.$owner=this,s.$name=r),o[r]=s);return o.$className=u,o.self=this,this},addMember:function(e,t){var n={};return n[e]=t,this.addMembers(n),this},implement:function(){this.addMembers.apply(this,arguments)},borrow:function(e,t){var n,i,r,s,o,a=this.prototype,u=e.$isClass?e.prototype:(e=Nex.getClass(e))?e.prototype:{};for(t=$.isArray(t)?[].concat(t):[t],n=0,i=t.length;i>n;n++)r=t[n],o=u[r],"function"==typeof o?(s=function(){return o.apply(this,arguments)},s.$owner=this,s.$name=r,a[r]=s):a[r]=o;return a.self=this,this},setXtype:function(e){var t;return e===t?this:(this.xtype=e,Nex.addXtype(e,this),this)},setAliasName:function(e){var t=this;if(e){var n=$.trim(e).split(/\s+/g);$.each(n,function(e,n){Nex.setNamespace(n,t),Nex.addAlias(n,t)})}return t},_optionsList:[],setOptions:function(e){if(Nex.isObject(e)){var t=e;e=function(){return t}}return Nex.isFunction(e)&&this._optionsList.push(function(t,n){return e.call(this,t,n)}),this},getOptions:function(e){var t={},n=this._optionsList||[],i=this.getSuperClassOptions(e)||{};i=i.concat(n);var r=i.length;if(r)for(var s=0;r>s;s++){var o=i[s];Nex.apply(t,o.call(this,t,e||this))}return Nex.clone(t,!0)},getSuperClass:function(){return this.superclass?this.superclass.self:null},getSuperClassOptions:function(e){for(var t=this,n=[];t=t.getSuperClass();)n.push.apply(n,t._optionsList||[]);return n.reverse()},create:function(){return Nex.create.apply(Nex,[this].concat([].slice.apply(arguments)))}}),Nex.apply(r.prototype,{isInstance:!0,$className:"Nex.Base",self:r,superclass:null,callParent:function(t){var i,r=(i=this.callParent.caller)&&(i=i.$owner?i:i.caller)&&i.$owner.superclass[i.$name];return r=r||n,r.apply(this,t||e)},extend:function(e){var t=this,n=t.self;return e&&$.isPlainObject(e)&&n.override.call(t,e),t},addMixins:function(){var e=this,t=this.configs,n=[].slice.call(arguments,0),i=[],r={},s=0,o=n.length;if(!o)return e;for(;o>s;s++){var a=n[s];(!Nex.isString(a)||(a=Nex.getClass(a)))&&(Nex.isClass(a)?(i.push(function(e,t){return a.getOptions(t)}),Nex.apply(r,a.prototype||{})):Nex.isObject(a)&&(a.configs&&i.push(a.configs),delete a.configs,Nex.apply(r,a)))}if(Nex.applyIf(e,r),i.length){for(var u={},s=0,o=i.length;o>s;s++){var c=i[s];Nex.isFunction(c)&&Nex.apply(u,c(u,e)||{}),Nex.isObject(c)&&Nex.apply(u,Nex.clone(c,!0))}Nex.applyIf(t,u)}return e},initConfigs:function(e){var t=this,n=t.self,i=n.getOptions(t);Nex.isFunction(e)&&(e=e.call(t,i)||{});var r=Nex.apply({},e,i);if(t.configs=r,"mixins"in r){var s=r.mixins;delete r.mixins;var o=[];Nex.isPlainObject(s)?$.each(s,function(e,t){o.push(t)}):o=Nex.isArray(s)?s:[s],t.addMixins.apply(t,o)}var a=[];if(r.properties&&a.push(r.properties),r.override&&a.push(r.override),a.length){r.properties=null,r.override=null,delete r.properties,delete r.override;for(var u=0,c=a.length;c>u;u++){var l=a[u];l&&(Nex.isFunction(l)&&(l=l.call(t,r)),l&&Nex.isObject(l)&&t.extend(l))}}return r},C:function(e,t){if("undefined"==typeof e)return this.configs;if("undefined"==typeof t&&"object"!=typeof e)return this.configs[e];if($.isFunction(t))this.configs[e]=t.call(this,this.configs[e]);else if($.isPlainObject(e)){var n=e,i=this.configs;if(t)return $.extend(i,n),this;for(var r in n){var s=n[r],o=i[r];$.isArray(o)?o.push.apply(o,s):$.isPlainObject(o)?$.extend(o,s):i[r]=s}}else this.configs[e]=t;return this},set:function(){return this.C.apply(this,arguments)},get:function(){return this.C.apply(this,arguments)},setConfig:function(){return this.C.apply(this,arguments)},getConfig:function(){return this.C.apply(this,arguments)},constructor:function(e){return this.initConfigs.apply(this,arguments),this}}),Nex.Base=r,Nex.classes["Nex.Base"]=r}(),function(e){var t=function(){function e(){return this.constructor.apply(this,arguments)}return e},n=Nex.Base;Nex.apply(Nex,{baseChain:function(e){var i=(n.prototype,t());return n.extend.call(i,n),null===e&&(e=Nex.uuid()),e&&(i.$className=e,i.prototype.$className=e),i},extend:function(e,t,n){var i,r,s;if(2===arguments.length&&Nex.isObject(t)&&(n=t,t=null),i="function"==typeof e&&e.$isClass?e:Nex.getClass(e),i||(i=Nex.Class(e)),i.isInstance)throw new Error("class is isInstance");if(1===arguments.length)return i;n=Nex.apply({},n)||{},s=n.extend||t,delete n.extend,r=s&&"function"==typeof s&&s.$isClass?s:s?Nex.getClass(s):s,r&&i.extend(r);var o,a,u,c;"alias"in n&&n.alias&&(o=n.alias+"",delete n.alias),"xtype"in n&&n.xtype&&(a=n.xtype+"",delete n.xtype),"configs"in n&&n.configs&&(u=n.configs,delete n.configs),"mixins"in n&&n.mixins&&(c=n.mixins,delete n.mixins),u&&i.setOptions(u),i.setXtype(i.$className),i.override(n),this._setMixins(c,i);var l=!!i.prototype.singleton;return l&&(i=new i),
o&&this._setAliasName(o,i),!l&&i.$isClass&&this._setClassXtype(a,i),i},_setMixins:function(e,t){var n=[];Nex.isPlainObject(e)?$.each(e,function(e,t){n.push(t)}):n=Nex.isArray(e)?e:[e];var i=[],r={},s=0,o=n.length;if(o){for(;o>s;s++){var a=n[s];(!Nex.isString(a)||(a=Nex.getClass(a)))&&(Nex.isClass(a)?(i.push(function(e,t){return a.getOptions(t)}),Nex.apply(r,a.prototype||{})):Nex.isObject(a)&&(a.configs&&i.push(a.configs),delete a.configs,Nex.apply(r,a)))}Nex.applyIf(t.prototype,r),i.length&&t.setOptions(function(e,t){for(var e=e||{},t=t||this,n={},r=0,s=i.length;s>r;r++){var o=i[r];Nex.isFunction(o)&&Nex.apply(n,o(n,t)||{}),Nex.isObject(o)&&Nex.apply(n,Nex.clone(o,!0))}return Nex.applyIf(e,n)})}},_setAliasName:function(e,t){var n=$.trim(e).split(/\s+/g);$.each(n,function(e,n){n&&(Nex.setNamespace(n,t),Nex.addAlias(n,t))})},_setClassXtype:function(e,t){var n=$.trim(e).split(/\s+/g);$.each(n,function(e,n){n&&t.setXtype(n)})},namespace:function(t){var n,i=e,r=t+"";r=r.split(".");for(var s=0,o=r.length-1;o>s;s++){var a=r[s];a in i&&i[a]||(i[a]={}),i=i[a]}return i[r[s]]=i[r[s]]===n?{}:i[r[s]]},setNamespace:function(t,n){var i,r=e,s=t+"";n=n===i?{}:n,s=s.split(".");for(var o=0,a=s.length-1;a>o;o++){var u=s[o];u in r&&r[u]||(r[u]={}),r=r[u]}return r[s[o]]=n},getNamespace:function(t){var n,i=e,r=t+"";r=r.split(".");for(var s=0,o=r.length-1;o>s;s++){var a=r[s];if(!(a in i&&i[a]))return n;i=i[a]}return i[r[s]]},ns:function(){return this.namespace.apply(this,arguments)},Class:function(e,t,n){if(!arguments.length)throw new Error("className not exists!");var i=[];Nex.isObject(e)&&(t=e,e=null);var r=Nex.baseChain(e);return e=r.$className,this.classes[e]=r,Nex.setDefined(e,r),e&&(i[0]=e),t&&(i[1]=t),n&&(i[2]=n),this.setNamespace(e,this.extend.apply(this,i)),r},define:function(){return this.Class.apply(this,arguments)}})}(window),function(){Nex.define("Nex.EventObject",{xtype:"eventobject",configs:{context:null,stopOnFalse:!0,eventMaps:{},events:{},listeners:{}},initConfigs:function(e){var e=this.callParent(arguments);return e.self=this,this.initEvents(e),this.sysEvents(),this.bindConfigsEvnet(),e},initEvents:function(e){function t(e){if($.isPlainObject(e)&&!$.isEmptyObject(e))for(var t in e){var i=String(t),r=e[t],s=null;$.isPlainObject(r)&&!$.isEmptyObject(r)&&(s=r.scope||r.context||null,r=r.func||r.fn||r.callBack||r.callback),$.isFunction(r)&&r!==$.noop&&n.bind(i,r,s)}}var n=this,i=e.events?e.events:{};e.events={};t.call(n,i),t.call(n,e.listeners||{})},sysEvents:function(){var e=this;e.configs},bindConfigsEvnet:function(){var e=this,t=e.configs,n=(t.events?t.events:{},/^@?on[A-Z][\S|\.]*$/);for(var i in t)if(n.test(i)){var r=t[i],s=null;$.isPlainObject(r)&&!$.isEmptyObject(r)&&(s=r.context||r.scope||null,r=r.func||r.fn||r.callBack||r.callback),$.isFunction(r)&&r!==$.noop&&e.bind(i,r,s)}},$eventIndex:1,bind:function(e,t,n){if("undefined"==typeof e)return!1;if(""===e||"@"===e)return!1;var i=this,r=i.configs,s=r.events;if("object"===$.type(e)){var o=[];for(var a in e){var u=n,c=e[a];$.isPlainObject(c)&&!$.isEmptyObject(c)&&(u=c.scope||c.context||u,c=c.func||c.fn||c.callBack||c.callback);var l=i.bind(a,c,u);o.push(l)}return o}var f=String(e).split(/\s+|,/);if(f.length>1){for(var h=f.length,o=[],p=0;h>p;p++)f[p]&&o.push(i.bind(f[p],t,n));return o}var d=e.charAt(0);"@"===d&&(n=i,e=e.slice(1));var g=e.split(".");e=g[0],g=g.slice(1);var m=g.join(".");if(!e)return!1;if(e in r.eventMaps&&(e=r.eventMaps[e]),s[e]=s[e]||[],$.isFunction(s[e])&&(s[e]=[]),!$.isFunction(t)||t===$.noop)return!1;var p={scope:n?n:null,func:t,ext:m,_index:i.$eventIndex++};s[e].push(p);return p._index},on:function(){return this.bind.apply(this,arguments)},one:function(e,t,n){if("undefined"==typeof e)return!1;var t=t||$.noop,i=this,n=n?n:i,r=function(){i.unbind(r.id);var e=t.apply(this,arguments);return e},s=null;return s=i.bind(e,r,n),r.id=s,s},unbind:function(e,t){var n,i=this,r=i.configs,s=String(e).split(/\s+|,/);if(s.length>1){for(var o=s.length,a=0;o>a;a++)s[a]&&i.unbind(s[a]);return i}var u=r.events,t=t===n?!1:t;if("number"==typeof e){for(var c in u)i.unbind(c,e);return i}var l=String(e).split(".");e=l[0],l=l.slice(1);var f=l.join(".");if(""===e&&""!==f){for(var c in u)c&&i.unbind([c,f].join("."));return i}if(e in r.eventMaps&&(e=r.eventMaps[e]),!(e in u))return i;if($.isFunction(u[e]))return u[e]=[],i;var h=[];if(t===!1)if(""===f)u[e]=[];else for(var p=0;p<u[e].length;p++){var a=u[e][p];("object"!=typeof a||a.ext!==f)&&h.push(a)}else for(var p=0;p<u[e].length;p++){var a=u[e][p];("object"!=typeof a||a._index!==t)&&h.push(a)}return u[e]=h,i},off:function(){return this.unbind.apply(this,arguments)},lockEvent:function(e){var t=this,n=t._eventLocks||{};return n[e]=!0,t._eventLocks=n,!0},unLockEvent:function(e){var t=this,n=t._eventLocks||{};return n[e]=!1,t._eventLocks=n,!0},_denyEvent:!1,_eventLocks:null,_executeEventMaps:null,fireEvent:function(e,t){var n,i=this;if(!i._denyEvent){var r=i.configs,s=r.context||i,o=String(e).charAt(0),a=!1;if("@"===o&&(a=!0,e=String(e).slice(1)),e){e in r.eventMaps&&(e=r.eventMaps[e]);var u=r.events[e],t=t===n?[]:t;t=$.isArray(t)?t:"object"===$.type(t)&&"callee"in t&&"length"in t?t:[t];var c=i._eventLocks||{};if(!c[e]&&(i._executeEventMaps=i._executeEventMaps||{},!i._executeEventMaps[e])){i._executeEventMaps[e]=!0;var l=!0;if($.isArray(u))for(var f=u.length,h=0;f>h;h++){var p=u[h];if($.isPlainObject(p)?l=p.func.apply(p.scope||s,t):$.isFunction(p)&&(l=p.apply(i,t)),r.stopOnFalse&&l===!1)break}else $.isFunction(u)&&(l=u.apply(i,t));return i._executeEventMaps[e]=!1,l}}}},fire:function(){return this.fireEvent.apply(this,arguments)}})}(),function(){Nex.apply(Nex,{GET_CMPS_CLEAR:!1,RESIZE_DELAY:100,MAX_REMOVE_NUM:5}),Nex.define("Nex.ComponentManager",{singleton:!0,extend:"Nex.EventObject",constructor:function(){this.callParent(arguments),this.compRoot="root",this.components={},this._levelCmps={},this._autoResizeLevelCmps={},this.fireEvent("onCreate",[this.configs])},sysEvents:function(){this.callParent(arguments);var e=this;return $(function(){var t={width:$(window).width(),height:$(window).height()},n=0;$(window).unbind("resize.ComponentManager"),$(window).bind("resize.ComponentManager",function(){n&&(clearTimeout(n),n=0),n=setTimeout(function(){clearTimeout(n),n=0;var i=$(window).width(),r=$(window).height();(t.width!==i||t.height!==r)&&(t.width=i,t.height=r,e.fireEvent("onResize"),e.fireEvent("onBrowserResize"))},Nex.RESIZE_DELAY)})}),e.bind("onResize._sys",e._resize,e),e},_refreshCmps:function(e){var t=this,n=t.components,i=0;for(var r in n)t.isExists(r)||i++;return(e||i&&i>=Nex.MAX_REMOVE_NUM)&&t.cmpChange(),i},getCmp:function(e){var t,n=this;return e===t?(Nex.GET_CMPS_CLEAR&&n._refreshCmps(),n.components):(n.isExists(e),Nex.unDefined(n.components[e],null))},getGroup:function(e){var t,n=this;if(e===t)return[];var i=[],r=n.getCmp();if("*"===e)return $.each(r,function(e,t){i.push(t)}),i;if(e=$.trim(e+"").split(/\s+/g),!e)return i;for(var s in r){var o=r[s];if(o)for(var a=$.trim(o.C("groupName")+"").split(/\s+/g),u=String(a),c=0,l=e.length;l>c;c++){var f=e[c];if(a.length&&-1!==u.indexOf(f)){i.push(o);break}}}return i},register:function(e,t){Nex.isInstance(e)&&(t=e,e=t.configs.id),this.components[e]=t,this.cmpChange()},addCmp:function(e,t){this.register.apply(this,arguments)},cmpChange:function(){this.__disposed1=!1},removeCmp:function(e){var t=this.components[e];t&&(t.isInstance&&(t.onDestroy(),t.fireEvent("onDestroy")),this.components[e]=null,delete this.components[e])},isExists:function(e){var t=this,n=t.components[e];return n&&n.getDom().length?!0:(n&&n.C("autoDestroy")&&t.removeCmp(e),!1)},_getDomCmps:function(e){var e=$(e);if(!e.length)return!1;var t,n=this,i=[],r=e.closest(".nex-component-item");t=r.length?r.attr("id"):n.compRoot;for(var s=n.components,o=n.getLevelCmps(),a=o[t]||[],u=0,c=a.length;c>u;u++){var l=a[u],r=s[l.id];r&&i.push(r)}return i},resizeDom:function(e){var t=this._getDomCmps(e);if(t===!1)return this;for(var n=0;n<t.length;n++){var i=t[n];i&&i.isAcceptResize()&&i.resize()}return this},resize:function(e){return this._resize(e),this},refreshComponents:function(){this.refreshLevelCmps()},getChildrens:function(e){for(var t=this,n=[],i=t.components,r=t.getLevelCmps(),s=e||this.compRoot,o=r[s]||[],a=0,u=o.length;u>a;a++){var c=o[a],l=i[c.id];l&&n.push(l)}return n},getAllChildrens:function(e){var t=this,n=[],i=t.getChildrens(e);n=n.concat(i);for(var r=0,s=i.length;s>r;r++){var o=i[r];if(o){var e=o.C("id");n=n.concat(t.getAllChildrens(e))}}return n},getChildrensByDom:function(e){var t=this;return t._getDomCmps(e)||[]},getAllChildrensByDom:function(e){var t=this,n=[],i=t._getDomCmps(e)||[];n=n.concat(i);for(var r=0,s=i.length;s>r;r++){var o=i[r];if(o){var a=o.C("id");n=n.concat(t.getAllChildrens(a))}}return n},refreshLevelCmps:function(){return this.__disposed1=!1,this.getLevelCmps()},__disposed1:!1,getLevelCmps:function(){var e,t=this;if(t.__disposed1)return t._levelCmps;t._refreshCmps();var n=t.components,i=n;t._levelCmps={};var r=t._levelCmps;for(var s in i){var o=i[s];if(o){var a=t.compRoot,u=$("#"+s).parents(".nex-component-item:first");if(u.length){var c=u.attr("id"),l=n[c];l&&(a=c)}var f={id:s,pid:a};r[a]=r[a]===e?[]:r[a],r[a].push(f)}}return t.__disposed1=!0,t._levelCmps},_resize:function(e){var t,n=this,e=(n.components,e===t?n.compRoot:e),i=n.getChildrens(e);if($.isArray(i))for(var r=0;r<i.length;r++){var s=i[r];s&&s.isAcceptResize()&&s.resize()}},sendMessage:function(e,t,n,i){var r,s=this,o=s.getCmp(),n=Nex.unDefined(n,[]);if(n=$.isArray(n)?n:[n],i&&n.push(i),e===r)return!1;if("*"===e)for(var a in o){var u=o[a];u.isSleep()||u.fireEvent(t,n)}e=$.isArray(e)?e:[e];for(var c=0,l=e.length;l>c;c++){var f=e[c];Nex.isInstance(f)?f.isSleep()||f.fireEvent(t,n):(u=o[f],u&&(u.isSleep()||u.fireEvent(t,n)))}return!0},postMessage:function(e,t,n,i){var r=this;return setTimeout(function(){r.sendMessage(e,t,n,i)},0),!0},sendMessageByGroupName:function(e,t,n,i){var r,s=this;if(e===r)return!1;var o=s.getGroup(e),n=Nex.unDefined(n,[]);n=$.isArray(n)?n:[n],i&&n.push(i);for(var a=0,u=o.length;u>a;a++){var c=o[a];c.isSleep()||c.fireEvent(t,n)}return!0},sendMessageToGroup:function(){return this.sendMessageByGroupName.apply(this,arguments)},postMessageByGroupName:function(e,t,n,i){var r=this;return setTimeout(function(){r.sendMessageByGroupName(e,t,n,i)},0),!0},postMessageToGroup:function(){return this.postMessageByGroupName.apply(this,arguments)}}),$.each(["gc","removeComponent","removeServer","get","getCmp","getGroup","getChildrens","getAllChildrens","getChildrensByDom","getAllChildrensByDom","refreshComponents","resize","sendMessage","postMessage","sendMessageByGroupName","sendMessageToGroup","postMessageByGroupName","postMessageToGroup"],function(e,t){var n=Nex.ComponentManager,i={gc:"_refreshCmps",removeComponent:"removeCmp",removeServer:"removeCmp",get:"getCmp",resize:"_resize"},r={gc:!0,removeComponent:!0,removeServer:!0,resize:!0,sendMessage:!0,postMessage:!0,sendMessageByGroupName:!0,sendMessageToGroup:!0,postMessageByGroupName:!0,postMessageToGroup:!0};Nex[t]=function(){var e=n[i[t]||t].apply(n,arguments);return r[t]?this:e}}),jQuery.fn.extend({resizeCmp:function(){return this.each(function(){Nex.ComponentManager.resizeDom(this)})},sendMessage:function(e,t,n){var i=[].slice.apply(arguments);if(!i.length)return this;var r=!0;return"boolean"===$.type(i[i.length-1])&&(r=i[i.length-1],i.pop()),this.each(function(){var e=r?Nex.ComponentManager.getAllChildrensByDom(this):Nex.ComponentManager.getChildrensByDom(this);Nex.ComponentManager.sendMessage.apply(Nex.ComponentManager,[e].concat(i))})},postMessage:function(e,t,n){var i=[].slice.apply(arguments);if(!i.length)return this;var r=!0;return"boolean"===$.type(i[i.length-1])&&(r=i[i.length-1],i.pop()),this.each(function(){var e=r?Nex.ComponentManager.getAllChildrensByDom(this):Nex.ComponentManager.getChildrensByDom(this);Nex.ComponentManager.postMessage.apply(Nex.ComponentManager,[e].concat(i))})}})}(),function(){Nex.define("Nex.AbstractComponent",{extend:"Nex.EventObject",xtype:"abstractcomponent",_isInit:!1,configs:function(){return{prefix:"nex",id:"",renderTo:document.body,autoDestroy:!0,autoRender:!0,denyManager:!1,init:$.noop,renderTpl:"",renderData:{},renderSelectors:{},groupName:"",cacheData:{},tpl:{},template:Nex.getTemplate(),parent:null,deferred:$.Deferred?$.Deferred():null,views:{},plugins:[],defalutxType:"panel",defaults:{},html:"",items:[]}},getScrollbarSize:Nex.getScrollbarSize,isInit:function(){return this._isInit},constructor:function(){this.callParent(arguments);var e=this.configs;e.id=this.getId(),e.autoRender&&this.initRender()},rendered:!1,initRender:function(e,t){var n=this,i=this.configs;return this.rendered?this:(n._isInit=!0,n.initPlugins(),i.renderTo=this._undef(e,i.renderTo),i.renderAfter=this._undef(t,i.renderAfter),this.fireEvent("onStart",[i]),this.onStart(i),this.rendered=!0,i.denyManager||Nex.ComponentManager.register(n),this.initInstance(i),this)},_initPlugins:!1,initPlugins:function(){var e=this,t=this.configs,n=t.plugins||[];if(e._initPlugins)return e;e._initPlugins=!0;for(var i=0,r=n.length;r>i;i++)e.constructorPlugin(n[i]);return e},constructorPlugin:function(e){var t=e,e=Nex.create(e);return e&&"function"==typeof e.init?e.init(this):"function"==typeof t&&t(this),this},onStart:function(){},initInstance:function(e){var t=this,n=t.configs;t.onInitComponent(n),t.fireEvent("onInitComponent",[n]),t.initContainer(),t.initRenderTpl(),t.initComponent(n),t.initComponentSize(n),t.initRenderContent(n),t.onAfterRender(),t.fireEvent("onAfterRender",[n]),t.onCreate(n),t.fireEvent("onCreate",[n]),this._isInit=!1},initContainer:function(){},initRenderTpl:function(){},initComponent:function(){this.constructPlugins()},initComponentSize:function(){this.setSize()},initRenderContent:function(){},onInitComponent:function(){},onAfterRender:function(){},onCreate:function(){},constructPlugins:function(){},setSize:function(){},render:function(e,t){return this.rendered?this.renderTo.apply(this,arguments):this.initRender.apply(this,arguments),this},isRendered:function(){return this.rendered},_checkToRender:function(){this.rendered||this.render()},renderTo:function(){},_getId:function(){var e=this.configs;return e.prefix+ ++Nex.aid},getId:function(){var e=this.configs;return Nex.isEmpty(e.id)?this._getId():e.id},enableAutoResize:function(){return this.configs.autoResize=!0,this},disabledAutoResize:function(e){return this.configs.autoResize=!1,this},_undef:function(e,t){return void 0===e?t:e},resize:function(){var e=this,t=e.configs;setTimeout(function(){Nex.ComponentManager.fireEvent("onResize",[t.id])},0)},__ars:!0,isAcceptResize:function(){var e=this.configs;return e.autoResize&&this.__ars},setAcceptResize:function(e){var e=void 0===e?!0:e;return this.__ars=!!e,this},tpl:function(e,t){var n,i=this;i.configs;if(e===n&&(e=""),t===n&&(t={}),""===e)return e;var r=[].slice.apply(arguments,[1]),s=i.getTplFn(e);return s.apply(i,r)},getTplFn:function(e,t){var n=this,i=n.configs;return i.template?$.isFunction(e)?e:e in i.tpl&&i.tpl[e]?i.template.compile(i.tpl[e],null,t):e in n?n[e]:i.template.compile(e+"",null,t):$.isFunction(e)?e:e in n?n[e]:function(){return e}},denyEventInvoke:function(){var e,t=this;if(arguments.length){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);var r=n[0];r in t&&(t._denyEvent=!0,n.splice(0,1),e=t[r].apply(t,n),t._denyEvent=!1)}return e},methodInvoke:function(){var e,t=this,n=t._methodLocks||{};if(arguments.length){for(var i=[],r=0;r<arguments.length;r++)i.push(arguments[r]);var s=i[0];if(n[s])return;s in t&&(i.splice(0,1),e=t[s].apply(t,i))}return e},lockMethod:function(e){var t=this,n=t._methodLocks||{};return n[e]=!0,t._methodLocks=n,!0},unLockMethod:function(e){var t=this,n=t._methodLocks||{};return n[e]=!1,t._methodLocks=n,!0},__sleep:!1,isSleep:function(){return this.__sleep},sleep:function(){return this.__sleep=!0,this},wakeup:function(){return this.__sleep=!1,!1},getParent:function(){var e=this.configs;if(null!==e.parent){if(Nex.isInstance(e.parent))return e.parent;var t=Nex.get(e.parent);if(t)return t}return null},removeCmp:function(e){var t=this.configs;Nex.ComponentManager.removeCmp(t.id)},destroy:function(){return this.removeCmp(),this},onDestroy:function(){},getDom:function(){return[]},getDeferred:function(){var e=this.configs;return e.deferred}})}(),function(){Nex.define("Nex.Component",{extend:"Nex.AbstractComponent",xtype:"component",_isInit:!1,configs:function(){return{prefix:"component-",tag:"div",renderTo:document.body,renderAfter:!0,autoDestroy:!0,autoResize:!1,selectionable:!0,autoSize:!1,width:"",height:"",realWidth:null,realHeight:null,_width:null,_height:null,__width:0,__height:0,maxWidth:0,maxHeight:0,minHeight:0,minWidth:0,disabledItems:!1,focusable:!0,tabIndex:!1,attrs:{},style:{},"class":"",containerCls:"nex-component",borderCls:"",uiPrefix:"nex-ui",ui:"defalut",uiCls:[],cls:"",cssText:""}},onStart:function(e){this.callParent(arguments),e.__width=e.width,e.__height=e.height},renderedContainer:!1,initContainer:function(){var e=this,t=e.configs;if(e.callParent(arguments),e.renderedContainer)return e;var n,i=$($.isWindow(t.renderTo)?document.body:t.renderTo),r=[t.containerCls,"nex-component-item"];if(t.border===!0&&r.push(t.borderCls),t.ui){var s=[t.uiPrefix,t.ui].join("-");r.push(s);var o=$.isArray(t.uiCls)?t.uiCls:[t.uiCls];$.each(o,function(e,t){t&&r.push([s,t].join("-"))})}t.cls&&r.push(t.cls),t["class"]&&r.push(t["class"]);var a=t.tag||"div";return n=$(document.createElement(a)),n.attr({id:t.id,"class":r.join(" ")}),t.renderAfter?i.append(n):i.prepend(n),t.views.container=n,e.el=n,t.cssText&&(n[0].style.cssText=t.cssText),n.attr(t.attrs).css(t.style),t.selectionable||e._disableSelection(),t.focusable&&t.tabIndex!==!1&&n.attr({tabIndex:t.tabIndex}),e.renderedContainer=!0,e},onContainerCreate:function(){},initRenderTpl:function(){var e=this,t=e.configs;e.callParent(arguments);var n=e.el,i=Nex.apply({},t.renderData,t),r=t.renderTpl;return r=Nex.isFunction(r)?r.call(e,i):Nex.isArray(t.renderTpl)?e.tpl(r.join(""),i):e.tpl(r+"",i),n.html(r),$.each(t.renderSelectors,function(i,r){t.views[i]=$(r,n),e[i]=t.views[i]}),e.onContainerCreate(n,t),e.fireEvent("onContainerCreate",[n,t]),e},initRenderContent:function(){return this.doRenderContent(),this},doRenderContent:function(){var e=this,t=e.configs,n=e.getBody();if(t.disabledItems)return n;var i=t.html;e.addComponent(n,i,null,t.defaults);var i=t.items;return e.addComponent(n,i,null,t.defaults),n},setSize:function(){return this.setContainerSize.apply(this,arguments)},setContainerSize:function(e,t){var n=this,i=n.configs;i.width=Nex.unDefined(e,i.width),i.height=Nex.unDefined(t,i.height);var r={width:i.width,height:i.height};return n.fireEvent("onSetContainerSize",[r,i]),n.el.css({width:r.width,height:r.height}),this},getContainer:function(){var e=this,t=e.configs;return t.views.container},getBody:function(){var e=this,t=e.configs;return t.views.container},_disableSelection:function(){this.el.disableSelection()},isExists:function(){var e=this,t=e.configs,n=e.getDom();return e.isRendering()?n.length?!0:(t.autoDestroy&&e.removeCmp(t.id),!1):!0},parseItems:function(e,t,n,i){var r,s=this,o=s.configs,n=n===r||null===n?!0:n,i=$.extend({xtype:o.defalutxType},i||{}),a=n?"append":"prepend";$.isFunction(t)&&!Nex.isClass(t)&&(t=t.call(s,e));var u=[],t=Nex.isArray(t)?t:[t];if(e&&t.length)for(var c=0;c<t.length;c++){var l=t[c];if(""!==l&&l!==r&&(!Nex.isFunction(l)||Nex.isClass(l)||(l=l.call(s,e,o),""!==l&&"boolean"!==$.type(l)&&"null"!==$.type(l)&&"undefined"!==$.type(l))))if(Nex.isPlainObject(l)&&!Nex.isInstance(l)&&(l=$.extend({},i,l)),Nex.isInstance(l))l.render(e,a),u.push(l);else if(Nex.isClass(l)||Nex.isXtype(l)){if(!Nex.Create)continue;var f;f=Nex.isXtype(l)?Nex.Create($.extend({parent:o.id},l,{renderTo:e,autoRender:!0})):Nex.Create(l,$.extend({},i,{renderTo:e,parent:o.id,autoRender:!0})),u.push(f),n||$(e)[a](f.getDom())}else if(Nex.isjQuery(l)||Nex.isElement(l))$(e)[a](l),u.push(l);else{l+="";var h=$._parseHTML(l);h=$(h).clone(),u.push(h),$(e)[a](h)}}return u},addComponent:function(e,t,n){return this.parseItems.apply(this,arguments)},addCmp:function(e,t,n){return this.parseItems.apply(this,arguments)},renderComponent:function(e,t,n,i){return this.parseItems(t,e,n,i)},renderTo:function(e,t){var n,i=this,r=this.configs,t=t===n?!0:t,s=t?"append":"prepend";if(!e)return i;if(!i.isExists())return i;var o=!1;if(Nex.isInstance(e)&&e.isExists()){var a=e.getBody();a[s](i.getEl()),o=!0}else{var u=$(e);u.length&&(u[s](i.getEl()),o=!0)}return r.autoResize&&o&&(i.resize(),Nex.ComponentManager.cmpChange()),i},getDom:function(){var e=this,t=e.configs;return $("#"+t.id)},getEl:function(){return this.el||this.getDom()},getChildrens:function(){var e=this.configs;return Nex.ComponentManager.getChildrens(e.id)},getAllChildrens:function(){var e=this.configs;return Nex.ComponentManager.getAllChildrens(e.id)},getParent:function(){var e=this.getDom(),t=this.configs,n=null;if(!e.length)return n;if(null!==t.parent){if(Nex.isInstance(t.parent))return t.parent;var i=Nex.get(t.parent);if(i)return i}var r=e.parent(".nex-component-item"),s=r.attr("id");return n=s?Nex.get(id):null,n?n:null},_checkYScrollEnd:function(e){return Nex._checkYScrollEnd(e)},_checkXScrollEnd:function(e){return Nex._checkXScrollEnd(e)},isScrollEnd:function(e,t){return Nex.isScrollEnd(e,t)},__getCalcSize:function(e,t){var n,i=this;this.configs;return $.isFunction(e)&&(e=e.call(i)),e===n&&(e=0),e=parseInt(e),isNaN(e)?0:e},_getCutWidth:function(){var e=this,t=this.configs,n=t.cutWidth;return e.__getCalcSize(n,0)},_getCutHeight:function(){var e=this,t=this.configs,n=t.cutHeight;return e.__getCalcSize(n,1)},_getMinWidth:function(){var e=this,t=this.configs,n=t.minWidth;return e.__getCalcSize(n,0)},_getMaxWidth:function(){var e=this,t=this.configs,n=t.maxWidth;return e.__getCalcSize(n,0)},_getMinHeight:function(){var e=this,t=this.configs,n=t.minHeight;return e.__getCalcSize(n,1)},_getMaxHeight:function(){var e=this,t=this.configs,n=t.maxHeight;return e.__getCalcSize(n,1)},removeCmp:function(){this.callParent(arguments),Nex.gc()},destroy:function(){return this.el.remove(),this.callParent(),this}})}(),define('Nex/Nex',['require'],function(e){return Nex});
define('Nex', ['Nex/Nex'], function (main) { return main; });

/*
*SubmitForm处理工具 SubmitForm
*Nex.util.SubmitForm
*/
define('Nex/util/SubmitForm',['require','exports','module','Nex'],function(require, exports, module){
	require('Nex');
	var SubmitForm = {
		frame : function(f, c, isXML, doc) {
			var n = 'sf'+(Nex.aid++);//'f' + Math.floor(Math.random() * 99999);
			var d = document.createElement('DIV');
			d.innerHTML = '<iframe style="display:none" src="about:blank" id="'+n+'" name="'+n+'" onload="Nex.getUtil(\'SubmitForm\').loaded(\''+n+'\')"></iframe>';
	
			document.body.appendChild(d);
	
			var i = document.getElementById(n);
			
			f.setAttribute('target', n);
			
			i.isXML = !!isXML;
			i.docRoot = doc || 'body';
			i.onComplete = function(s){
				if (c && typeof c == 'function') {
					c(s);
				}	
				if ( d.parentNode ) {
					d.parentNode.removeChild( d );
				}
			};
			d.abort = function(){
				if ( this.parentNode ) {
					this.parentNode.removeChild( this );
				}	
			}
			return d;
		},
		/*
		* isXML=true服务器返回的是xml,格式eg:
		*   @header("Content-type: application/xml; charset=$_SC[charset]");
		*	<?xml version="1.0" encoding="UTF-8"?>";
		*	<root><![CDATA[<strong>Hello Nex!</strong>]]></root>;
		* isXML=false
		* 数据的根节点 eg:
		*	docRoot=textarea 默认 body
		*	<textarea>
		*		<strong>Hello Nex!</strong>
		*	</textarea>
		*/
		'submit' : function(f, func, isXML, doc) {
			if( typeof f !== 'object' ) {
				f = document.getElementById(f);	
			}
			
			var d = this.frame(f, func, isXML, doc);
			
			f.submit();
			return d;
		},
		//返回格式是text/html
		loaded : function(id) {
			function getDoc(frame) {
				var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
				return doc;
			}
			var i = document.getElementById(id);
			
			if( !i ) return;
			
			var s = '';
			var doc;
			try{
				doc = getDoc( i );
			} catch(e) {
				//cross-origin error
				s = "无法显示此内容,可能错误：cross-origin";
			}
			if( doc ) {
				if (doc.location.href == "about:blank") {
					return;
				}
				
				if( !i.isXML ) {
					//var docRoot = doc.body ? doc.body : doc.documentElement;
			
					var pre = doc.getElementsByTagName(i.docRoot)[0];
					
					if (pre) {
						s = pre.textContent ? pre.textContent : pre.innerText;
					}
				} else {
					try {
						s = i.contentWindow.document.XMLDocument.text;
					} catch(e) {
						try {
							s = i.contentWindow.document.documentElement.firstChild.wholeText;
						} catch(e) {
							try {
								s = i.contentWindow.document.documentElement.firstChild.nodeValue;
							} catch(e) {
									s = "无法显示此内容,可能错误：cross-origin";//如果出现这个请检查域名是否相同 
							}
						}
					}	
				}
				/*else if (b) {
				 s = b.textContent ? b.textContent : b.innerText;
				 }*/
			}
			if (typeof(i.onComplete) == 'function') {
				i.onComplete(s);
			}
		}
	};
	Nex.addUtil('SubmitForm', SubmitForm);	
	return SubmitForm;
});

/**
 * Nex.Ajax
 * @class
 * @name Nex.Ajax
 * @module Nex/Ajax
 * @extends Nex.AbstractComponent
 * @see http://www.nexui.cn
 * @author: nobo(505931977@qq.com)
 */
/**
 * 使用的是jquery.ajax提交 更多参数可以参考jquery,只列出特殊参数
 * @typedef configs
 * @property {string|function(data, success, fail, opts)} url 可以自定义获取函数
 * @property {string} [sendType=ajax] 定义请求方式,可选值:ajax,form,file(可扩展)
 * @property {boolean} [responseXML=false] 只有当sendType=form|file才有效,因为form和file都是使用iframe方式提交 
 * 											如果为true 服务端发回格式为:
 *											<pre>			
 *										    <?xml version="1.0" encoding="UTF-8"?>"
 *										    <root><![CDATA[..Response Text..]]></root> 
 *										 	</pre>
 * @property {number|string} [docRoot=body] 只有当sendType=form|file且responseXML=false才有效
 *											  examples:
 *											    <pre>
 *											 	 docRoot = 'textarea';
 *											 	 <textarea>
 *											 		<strong>Hello Nex!</strong>
 *											 	 </textarea>
 *											    </pre>
 * @property {jqselector} injectFields  sendType=form|file时有效，在提交表单把injectFields的元素移到表单内一起提交到服务器
 * @property {jqselector} fileFields sendType=file时有效，在提交表单把fileFields的元素移到表单内一起提交到服务器
 */ 
/**
 * @event onAjaxReady
 * @augments opts
 * @desc 在参数准备好时触发
 * @example on('onAjaxReady')
 */ 
/**
 * @event onBeforeSend
 * @augments opts
 * @desc 在发送请求前触发 返回false可阻止事件并终止发送
 */ 
/**
 * @event onAjaxStart
 * @augments opts
 * @desc onBeforeSend的区别是：1.不能终止发送 2.触发会比onBeforeSend晚
 */
/**
 * @event onAjaxStop
 * @augments opts
 * @desc 同onComplete 触发更早
 */
/**
 * @event onSuccessHook
 * @augments data
 * @augments statusText
 * @desc 此事件和onSuccess的区别在于 如果返回的是false 则可以阻止onSuccess事件的触发 而且data也是尚未经过dataFilter处理的 但是经过$.ajax原生的dataFilter处理
 */
/**
 * @event onSuccess
 * @augments data
 * @augments statusText
 * @desc 请求成功后触发
 */   
/**
 * @event onError
 * @augments xhr
 * @augments statusText
 * @augments throw
 * @desc 请求失败
 */  
/**
 * @event onComplete
 * @augments xhr
 * @augments textStatus
 * @desc 请求完成触发
 */ 
/**
 * @event onAbort
 * @desc 取消请求后触发
 */  
define('Nex/Ajax',['require','Nex/util/SubmitForm'],function(require){
	require('Nex/util/SubmitForm');
	
	var ajax = Nex.define('Nex.Ajax',{
		extend : 'Nex.AbstractComponent',
		xtype : 'ajax',
		/**
		 * @member
		 * @name configs
		 * 配置参数
		 */
		configs : function(opt){
			return {
				prefix : 'nexajax-',
				autoDestroy : false,
				//sendType 可选值 ajax(默认) form file
				sendType : 'ajax',//ajax默认 form 定义发送类型 默认使用$.ajax发送数据
				/*
				* @ignore
				* sendType=form
				* responseXML=true服务器返回的是xml,格式eg:
				*   @header("Content-type: application/xml; charset=$_SC[charset]");
				*	<?xml version="1.0" encoding="UTF-8"?>";
				*	<root><![CDATA[<strong>Hello Nex!</strong>]]></root>;
				*/
				responseXML : false,
				/*
				* @ignore
				* sendType=form
				* responseXML=false
				* 数据的根节点 eg:
				*	docRoot=textarea
				*	<textarea>
				*		<strong>Hello Nex!</strong>
				*	</textarea>
				*/
				docRoot : 'body',
				/*
				* @ignore
				* sendType=form
				* injectFields = $('.myform input') or '.myform input'
				* 在提交表单之前把injectFields的元素移到表单内一起提交到服务器,最后还原
				*/
				injectFields : '',
				fileFields : '',
				//contentType : 'application/x-www-form-urlencoded',//application/x-www-form-urlencoded默认 multipart/form-data text/plain ...
				ajax : null,
				_data : {},
				data : {},
				_qdata : {},
				dataFilter : null,
				events : {}
			};		
		}
	});
	/**
     * Get请求
	 * @function
	 * @static
	 * @name get
	 * @param {string|function} url	
	 * @param {object} data 可选
	 * @param {function} callback 可选
	 * @param {string} dataType 可选
	 * @return {ajax}
	 */
	/**
     * Post请求
	 * @function
	 * @name post
	 * @static
	 * @param {string|function} url	
	 * @param {object} data 可选
	 * @param {function} callback 可选
	 * @param {string} dataType 可选
	 * @return {ajax}
	 */ 
	$.each( [ "get", "post" ], function( i, method ) {
		ajax[ method ] = function( url, data, callback, type ) {
			if ( $.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return this.create({
				type: method,
				url: url,
				data: data,
				success: callback,
				dataType: type
			});
		};
	});
	ajax.addStatics({
		/**
		 * 同$.when
		 * @static
		 */
		when : function(){
			return Nex.when.apply(Nex,arguments);	
		},
		/**
		 * 请求一个脚本
		 * @static
		 * @param url
		 * @param callback
		 */
		getScript : function( url, callback ) {
			return this.get( url, null, callback, "script" );
		},
		/**
		 * 请求一个脚本
		 * @static
		 * @param url
		 * @param data
		 * @param callback
		 */
		getJSON : function( url, data, callback ) {
			return this.get( url, data, callback, "json" );
		},
		/**
		* 创建一个请求 同 return new Nex.Ajax(d)
		*/
		request : function( d ){
			return this.create( d );	
		}
	});
	ajax.override({
		initComponent : function() {
			var self = this,undef;
			var opt = this.configs;
			self.callParent(arguments);
			opt._beforeSend = opt.beforeSend || null;
			opt._error = opt.error || null;
			opt._success = opt.success || null;
			opt._abort = opt.abort || null;
			opt._complete = opt.complete || null;
			
			if( $.isPlainObject(opt.data) ) {
				opt.data = $.extend( {},opt._data,opt.data,opt._qdata );
			} else if( typeof opt.data === 'string' && typeof opt._qdata === 'string' ) {
				opt.data = opt.data.length ? '&'+opt._qdata : opt._qdata;
			}
			
			var firstUpperCase = function(string){
				return (string+"").replace( /(^|\s+)\w/g, function(s){
					return s.toUpperCase();	
				} );	
			};
			var Deferred = self.getDeferred();
			/*opt.abort = function(){
				var argvs = [];
				for( var i=0;i<arguments.length;i++ ) {
					argvs.push( arguments[i] );	
				}
				argvs.push( this );
				var r = self.fireEvent('onAbort',argvs);	
				if( r === false ) return r;	
				if( $.isFunction( opt._abort ) ) {
					return opt._abort.apply( self,argvs );
				}
			}*/
			opt.beforeSend = function(){
				self.doBeforeSend.apply(self, arguments);	
			};
			opt.success = function(){
				self.doSuccess.apply(self, arguments);	
			};
			opt.error = function(){
				self.doError.apply(self, arguments);	
			};
			opt.complete = function(){
				self.doComplete.apply(self, arguments);		
			};
			
			self.fireEvent('onAjaxReady',[ opt ]);	
			
			opt.sendType = (opt.sendType + "").toLowerCase();
			
			//检测url是否是用户自定义函数
			if( $.isFunction( opt.url ) ) {
				opt.ajax = $.Deferred ? $.Deferred() : opt.url;	
				var success = function( data ){
					var status =  Nex.unDefined(status,'success');
					var xhr =  Nex.unDefined(xhr, null);
					opt.success.apply( self,[ data, 'success', null ] );
					opt.complete.call( self, xhr, status );
				}; 
				var error = function( statusText, error ){//statusText
					var status =  Nex.unDefined(statusText,'error');
					var error =  Nex.unDefined(error,null);
					opt.error.apply( self,[ null, status, error ] );
					opt.complete.call( self, null, status );
				};
				var rf = opt.beforeSend.call( self,null,opt );
				if( rf !== false ) {
					var _opt = $.extend( {dataFilter:null},opt );
					delete _opt.beforeSend; 
					delete _opt.dataFilter;
					delete _opt.success; 
					delete _opt.error; 
					delete _opt.complete; 
					setTimeout( function(){
						var xhr = {
							abort : function(){
								error(this, 'canceled' , null);	
							}	
						};
						opt.ajax = xhr;
						var undef,d = opt.url.apply( self,[_opt.data,success,error,_opt] );	 
						if( d !== undef ) {
							if( d===false ) {
								error( 'error', null);	
							} else {
								success( d, 'success');		
							}
						}
					},0 );
				}
			} else {
				var _opt = $.extend( {},opt );
				//_opt.sendType = null;
				delete _opt.sendType; 
				_opt.beforeSend = function(xhr){
					return opt.beforeSend.call( self,xhr,opt );	
				};
				_opt.dataFilter = null;
				delete _opt.dataFilter;
				
				var xhr = {
					abort : function( TS ){
						_opt.error(this, 'canceled' , null);	
						_opt.complete(this, TS , null);	
					}	
				};
				
				function parseAjax(ajax){
					var ajax = ajax && typeof ajax === 'object' ? ajax : xhr;
					return Nex.applyIf( ajax,xhr );	
				}
				
				var _method = Nex.isFunction(opt.sendType) ? opt.sendType : self[opt.sendType+'Send'];
				if( Nex.isFunction(opt.sendType) ) {
					setTimeout(function(){
						opt.ajax = parseAjax( _method.call(self,_opt) );	
					},0);
				} else {
					opt.ajax = parseAjax( (_method||self.sendAjax).call(self,_opt) );	
				}
			}
			
		},
		doBeforeSend : function(){
			var self =  this;
			var opt = this.configs;
			
			var argvs = [];
			for( var i=0;i<arguments.length;i++ ) {
				argvs.push( arguments[i] );	
			}
			//argvs.push( this );
			var r = self.fireEvent('onBeforeSend',argvs);	
			if( r === false ) return r;
			var rf;
			if( $.isFunction( opt._beforeSend ) ) {
				rf = opt._beforeSend.apply( self,argvs );
			}
			if( rf === false ) return false;
			self.fireEvent('onAjaxStart',argvs);	
		},
		isSuccess : false,
		//data textStatus
		doSuccess : function(){
			var self =  this;
			var opt = this.configs;
			var Deferred = self.getDeferred();
			//var argvs = [];
			var argvs = [].slice.apply(arguments);
			/*for( var i=0;i<arguments.length;i++ ) {
				argvs.push( arguments[i] );	
			}*/
			
			if( self.isSuccess ) {
				return;	
			}
			
			self.isSuccess = true;
			
			if( self._customAbort === true ) {
				return;
			}
			
			if( self.fireEvent('onSuccessHook',argvs)===false ) {
				return;	
			}
			
			if( $.isFunction( opt.dataFilter ) ) {
				argvs[0] = opt.dataFilter.call( self,argvs[0],opt.dataType || 'html' );	
			}
			
			if( self.isError ) {
				return;	
			}
			
			//argvs.push( this );
			var r = self.fireEvent('onSuccess',argvs);	
			//if( r === false ) return r;	
			if( r!==false && $.isFunction( opt._success ) ) {
				opt._success.apply( self,argvs );
			}
			if( Deferred ) {
				Deferred.resolveWith.apply( Deferred, [ opt.context || self, argvs ] );	
			}
		},
		//当前请求失败
		isError : false,
		//xhr statusText throw
		doError : function(){
			var self =  this;
			var opt = this.configs;
			var Deferred = self.getDeferred();
			var argvs = [].slice.apply(arguments);
			/*for( var i=0;i<arguments.length;i++ ) {
				argvs.push( arguments[i] );	
			}*/
			//argvs.push( this );
			//不可重复执行
			if( self.isError ) {
				return;	
			}
			
			self.isError = true;
			
			if( self._customAbort === true ) {
				return;
			}
			
			if( argvs.length === 1 ) {
				argvs[2] = argvs[0];	
			}
			
			argvs[0] = self.getXHR();
			
			argvs[1] = argvs[1] || 'error';
			
			var statusText = argvs[1];//abort 的状态信息 canceled timeout
			/*if( self._customAbort === true ) {
				opt.abort.apply( this,argvs );
				return;
			}*/
			if( $.inArray( statusText, [ 'timeout', 'canceled' ] ) !== -1 ) {
				var new_argvs = [].concat(argvs);
				new_argvs[1] = statusText;
				if( self.fireEvent('onAbort',new_argvs) !== false ) {
					$.isFunction( opt._abort ) && opt._abort.apply( self,new_argvs );	
				}
			}
			var r = self.fireEvent('onError',argvs);	
			//if( r === false ) return r;
			if( r !== false && $.isFunction( opt._error ) ) {
				opt._error.apply( self,argvs );
			}
			if( Deferred ) {
				Deferred.rejectWith.apply( Deferred, [ opt.context || self, argvs ] );	
			}	
		},
		isComplete : false,
		//xhr textStatus
		doComplete : function(){
			var self =  this;
			var opt = this.configs;
			var argvs = [].slice.apply(arguments);
			/*var argvs = [];
			for( var i=0;i<arguments.length;i++ ) {
				argvs.push( arguments[i] );	
			}*/
			//argvs.push( this );
			if( self.isComplete ) {
				return;	
			}
			
			self.isComplete = true;
			
			if( self._customAbort === true ) {
				return;
			}
			
			argvs[0] = self.getXHR();
			
			self.fireEvent('onAjaxStop',argvs);
			var r = self.fireEvent('onComplete',argvs);	
			if( r !== false && $.isFunction( opt._complete ) ) {
				opt._complete.apply( self,argvs );
			}		
		},
		//设置是否用户自己调用abort来取消请求
		_customAbort : false,//--可以取消当前状态。。。
		/**
		 * 取消当前请求
		 * @paman {function} fn 可选,如果传了回调 则说明是绑定onAbort事件
		 * @return {this}
		 */
		abort : function(fn){
			var self = this;
			var argvs = arguments;
			if( argvs.length && $.isFunction(fn) ) {
				for( var i=0,len = argvs.length;i<len;i++ ) {
					if( $.isFunction( argvs[i] ) ) {
						this.bind('onAbort.deferred',argvs[i]/*,this*/);
					}		
				}
			} else {
				var ajax = self.getAjax();
				if( ajax && ajax.abort ) {
					ajax.abort( fn || 'canceled' );	
				}
				//设置取消状态
				self._customAbort = true;
			}
			return self;
		},
		/*
		*自定义发送接口
		* @ignore
		* opt.sendType = ajax;
		* prototype.sendAjax = Function
		* examples:
		*	sendAjax = function(opt){
		*		var xhr = new Http();
		*		if( opt.beforeSend(xhr) === false ) {
		*			return null;	
		*		}
		*		xhr.send(opt.url,opt.data);	
		*		xhr.success = function(data){
		*			opt.success(data, 'success', xhr );	
		*		};
		*		xhr.error = function(xhr,statueText , errorObject){
		*			opt.error(xhr, msg, errorObject);	
		*		}
		*		//opt.complete 必须要调用。。。
		*		xhr.complete = function(){
		*			opt.complete(xhr, 'success or error');	
		*		}
		*		如果xhr 不会触发abort 我们要自己实现 abort的 eg:
		*		xhr.abort = function( statueText ){//statueText=timeout|canceled
		*			opt.error(xhr, statueText, errorObject);
		*		//	opt.complete(xhr, 'success or error'); //??		
		*		}
		*		setTimeout(function(){
		*			xhr.abort('timeout');
		*		},timeout);
		*		return xhr;
		*	}	  
		*/
		//通过ajax方式提交
		ajaxSend : function(options){
			return $.ajax( options );	
		},
		//application/x-www-form-urlencoded multipart/form-data text/plain
		formEnctypeReg : /^\s*(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)/i,
		getFormEnctype : function(type){
			var matches = this.formEnctypeReg.exec( type+"" );
			return matches ? matches[1] : 'application/x-www-form-urlencoded';
		},
		//通过动态创建表单方式提交
		formSend : function(opt){
			var self = this;
			var _opt = this.configs;
			var timeoutTimer = 0;
			var opt = $.extend({ timeout:0 },$.ajaxSettings,opt);
			var fid = _opt.id+'_submitform';
			var method = (opt.type+"").toLowerCase();
			method = Nex.inArray( method, ['get','post'] ) === -1 ? 'post' : method;
			console.log(self.getFormEnctype(opt.contentType));
			var tpl = [
				'<div class="nex-hidden" style="width:0px;height:0px;overflow:hidden;">',
					'<form id="',fid,'" autocomplete="off" novalidate="novalidate" method="',method,'" action="',$.trim(opt.url),'" enctype="',self.getFormEnctype(opt.contentType),'"></form>',
				'</div>'
			];
			var fwrap = $(tpl.join(''));
			$(document.body).append( fwrap );
			var form = document.getElementById(fid);	
			//触发beforeSend
			if( opt.beforeSend(form) === false ) {
				fwrap.remove();
				return null;	
			}
			//解析URL地址取得search字符串
			var parseUrl = Nex.parseUrl(opt.url);
			var queryString = [];
			if( parseUrl.search ) {
				queryString.push( parseUrl.search );
			}
			//param数据
			if( Nex.isObject(opt.data) ) {
				var query = $.param(opt.data,!!opt.traditional);
				if( query ) {
					queryString.push( query );
				}
			} else if( opt.data && !Nex.isEmpty(opt.data) ) {
				queryString.push( opt.data );	
			}
			//生成Input
			var inputs = [];
			if( queryString.length ) {
				$.each( (queryString.join('&')).split('&'), function(i, str){
					var str = str.split('=');
					if( !str.length ) return;
					
					inputs.push(['<input type="hidden" autocomplete="off" name="',decodeURIComponent(str[0]),'" value="',decodeURIComponent(Nex.unDefined(str[1],'')),'">'].join(''));
				} );
			}
			var $form = $(form);
			if( inputs.length ) {
				$form .append( $(inputs.join('')) );	
			}
			//injectFields
			var $restoreFields = null;
			if( opt.injectFields ) {
				$restoreFields = $(opt.injectFields);
				$restoreFields.each( function(){
					var field = $(this);
					var cfield = field.clone();	//removeData
					field.data('_$restore',cfield);
					field.after( cfield );
					$form.append( field );
				} );	
			}
			function restoreFields(){
				if( $restoreFields ) {
					$restoreFields.each( function(){
						var field = $(this);
						var cfield = field.data('_$restore');	//removeData
						field.removeData('_$restore');
						cfield.after( field );
						cfield.remove();
					} );		
				}
			}
			//表单提交
			var utilsSubmit = Nex.getUtil('SubmitForm');
			
			var xhr;
			xhr = utilsSubmit.submit(form, function( data ){
				if( timeoutTimer ) {
					clearTimeout(timeoutTimer);	
				}
				
				var response = self.ajaxConvert( data, opt.dataType || 'html' );
				
				if( response.state === 'parsererror' ) {
					opt.error( xhr, 'parsererror', response.error );	
				} else {
					opt.success( response.data, 'success', xhr );		
				}
				
				opt.complete( xhr, response.state );
				
				restoreFields();
				
			}, _opt.responseXML, _opt.docRoot );
			//abort
			form.abort = function( TS ){
				if( timeoutTimer ) {
					clearTimeout(timeoutTimer);	
				}
				xhr.abort();	
				opt.error( xhr, TS, null );
				opt.complete( xhr, TS );
			}
			//timeout
			if( opt.timeout>0 ) {
				timeoutTimer = setTimeout(function(){
					timeoutTimer = 0;
					form.abort('timeout');
				}, opt.timeout);	
			}
			return form;
		},
		/*
		* @ignore
		* 上传文件
		* eg fileFields = ".file"
		*/
		fileSend : function( opt ){
			var self = this;
			if( opt.fileFields ) {
				opt.injectFields = $( opt.injectFields ).add( $(opt.fileFields) );
			}
			opt.type = "post";
			opt.contentType = "multipart/form-data";
			return self.formSend(opt);	
		},
		getAjax : function(){
			return this.C('ajax');	
		},
		getXHR : function(){
			return this.C('ajax');	
		},
		//用于Nex.when
		/*getDeferred : function(){
			return this.configs.deferred;	
		},*/
		getConverters : function(){
			var converters = $.ajaxSettings.converters;
			var conv = {
				'*' : converters['* text'],
				'text' : converters['* text'],
				'html' : function(res){return res;},
				'json' : converters['text json'],
				'xml' : converters['text xml'],
				'script' : converters['text script']
			};
			return conv;	
		},
		ajaxConvert : function(s, dataType){
			var conv = this.getConverters();
			var dataType = (dataType+"").toLowerCase();
			var response;
			dataType = conv[dataType] ? dataType : '*';
			try {
				response = conv[dataType]( s );
			} catch ( e ) {
				return { state: "parsererror", error: e };
			}
			return { state: "success", data: response };
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			self.bind("onComplete",self._removeAjax,self);
			return self;
		},
		_removeAjax : function(){
			this.configs.autoDestroy = true;
			this.configs.context = null;
			this.removeCmp();	
		},
		done : function(func){
			var defered = this.getDeferred();
			var argvs = arguments;
			for( var i=0,len = argvs.length;i<len;i++ ) {
				if( $.isFunction( argvs[i] ) ) {
					if( defered.state() === 'pending' ) {
						this.bind('onSuccess.deferred',argvs[i]/*,this*/);
					} else {
						defered.done(argvs[i]);		
					}
				}		
			}
			return this;	
		},
		success : function(){
			this.done.apply(this,arguments);	
			return this;	
		},
		fail : function(){	
			var defered = this.getDeferred();
			var argvs = arguments;
			for( var i=0,len = argvs.length;i<len;i++ ) {
				if( $.isFunction( argvs[i] ) ) {
					if( defered.state() === 'pending' ) {
						this.bind('onError.deferred',argvs[i]/*,this*/);
					} else {
						defered.fail(argvs[i]);	
					}
				}		
			}
			return this;	
		},
		error : function(){
			this.fail.apply(this,arguments);	
			return this;	
		},
		then : function(s,f,p){	
			var defered = this.getDeferred();
			if( $.isFunction( s ) ) {
				if( defered.state() === 'pending' ) {
					this.bind('onSuccess.deferred',s);
				} else {
					defered.done( s );	
				}
			}	
			if( $.isFunction( f ) ) {
				if( defered.state() === 'pending' ) {
					this.bind('onError.deferred',f);
				} else {
					defered.fail( s );		
				}
			}		
			return this;	
		},
		always : function(){
			var defered = this.getDeferred();
			var argvs = arguments;
			for( var i=0,len = argvs.length;i<len;i++ ) {
				if( $.isFunction( argvs[i] ) ) {
					if( defered.state() === 'pending' ) {//pending
						this.bind('onComplete.deferred',argvs[i]/*,this*/);
					} else {
						defered.always(argvs[i]);	
					}
				}		
			}
			return this;
		},
		complete : function(){
			return this.always.apply(this,arguments);	
		}
	});
	
	return ajax;
});
/*! jQuery UI - v1.10.4 - 2015-06-12
* http://jqueryui.com
* Includes: jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function($, undefined) {

var dataSpace = "ui-effects-";

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	// plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
	// a set of RE's that can match strings and generate color tuples.
	stringParsers = [{
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		}],

	// jQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},
	support = color.support = {},

	// element for support tests
	supportElem = jQuery( "<p>" )[ 0 ],

	// colors = jQuery.Color.names
	colors,

	// local aliases of functions called often
	each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
});

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return (allowEmpty || !prop.def) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	// IE will pass in empty strings as value for alpha,
	// which will hit this case
	if ( isNaN( value ) ) {
		return prop.def;
	}

	if ( type.mod ) {
		// we add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return (value + type.mod) % type.mod;
	}

	// for now all property types without mod have min and max
	return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// if this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// exit each( stringParsers ) here because we matched
			return false;
		}
	});

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// if this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = jQuery.type( red ),
			rgba = this._rgba = [];

		// more than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			});
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				});
			} else {
				each( spaces, function( spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// if the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// if the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// this is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					});

					// everything defined but alpha?
					if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
						// use the default of 1
						inst[ cache ][ 3 ] = 1;
						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				});
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if (isCache) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				});
			}
			return same;
		});
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		});
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// if null, don't override start value
			if ( endValue === null ) {
				return;
			}
			// if null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		});
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {
		// if we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		}));
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			});

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			});

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		}).join("");
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + (q - p) * h * 6;
	}
	if ( h * 2 < 1) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + (q - p) * ((2/3) - h) * 6;
	}
	return p;
}

spaces.hsla.to = function ( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {

		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function ( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};


each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = jQuery.type( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		});

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {
		// alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var vtype = jQuery.type( value ),
				fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
				local = this[ fn ](),
				cur = local[ prop.idx ],
				match;

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = jQuery.type( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	});
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, curElem,
					backgroundColor = "";

				if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						while (
							(backgroundColor === "" || backgroundColor === "transparent") &&
							curElem && curElem.style
						) {
							try {
								backgroundColor = jQuery.css( curElem, "backgroundColor" );
								curElem = curElem.parentNode;
							} catch ( e ) {
							}
						}

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				try {
					elem.style[ hook ] = value;
				} catch( e ) {
					// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
				}
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		});
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

})( jQuery );


/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
	$.fx.step[ prop ] = function( fx ) {
		if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
			jQuery.style( fx.elem, prop, fx.end );
			fx.setAttr = true;
		}
	};
});

function getElementStyles( elem ) {
	var key, len,
		style = elem.ownerDocument.defaultView ?
			elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
			elem.currentStyle,
		styles = {};

	if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
		len = style.length;
		while ( len-- ) {
			key = style[ len ];
			if ( typeof style[ key ] === "string" ) {
				styles[ $.camelCase( key ) ] = style[ key ];
			}
		}
	// support: Opera, IE <9
	} else {
		for ( key in style ) {
			if ( typeof style[ key ] === "string" ) {
				styles[ key ] = style[ key ];
			}
		}
	}

	return styles;
}


function styleDifference( oldStyle, newStyle ) {
	var diff = {},
		name, value;

	for ( name in newStyle ) {
		value = newStyle[ name ];
		if ( oldStyle[ name ] !== value ) {
			if ( !shorthandStyles[ name ] ) {
				if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
					diff[ name ] = value;
				}
			}
		}
	}

	return diff;
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

$.effects.animateClass = function( value, duration, easing, callback ) {
	var o = $.speed( duration, easing, callback );

	return this.queue( function() {
		var animated = $( this ),
			baseClass = animated.attr( "class" ) || "",
			applyClassChange,
			allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

		// map the animated objects to store the original styles.
		allAnimations = allAnimations.map(function() {
			var el = $( this );
			return {
				el: el,
				start: getElementStyles( this )
			};
		});

		// apply class change
		applyClassChange = function() {
			$.each( classAnimationActions, function(i, action) {
				if ( value[ action ] ) {
					animated[ action + "Class" ]( value[ action ] );
				}
			});
		};
		applyClassChange();

		// map all animated objects again - calculate new styles and diff
		allAnimations = allAnimations.map(function() {
			this.end = getElementStyles( this.el[ 0 ] );
			this.diff = styleDifference( this.start, this.end );
			return this;
		});

		// apply original class
		animated.attr( "class", baseClass );

		// map all animated objects again - this time collecting a promise
		allAnimations = allAnimations.map(function() {
			var styleInfo = this,
				dfd = $.Deferred(),
				opts = $.extend({}, o, {
					queue: false,
					complete: function() {
						dfd.resolve( styleInfo );
					}
				});

			this.el.animate( this.diff, opts );
			return dfd.promise();
		});

		// once all animations have completed:
		$.when.apply( $, allAnimations.get() ).done(function() {

			// set the final class
			applyClassChange();

			// for each animated element,
			// clear all css properties that were animated
			$.each( arguments, function() {
				var el = this.el;
				$.each( this.diff, function(key) {
					el.css( key, "" );
				});
			});

			// this is guarnteed to be there if you use jQuery.speed()
			// it also handles dequeuing the next anim...
			o.complete.call( animated[ 0 ] );
		});
	});
};

$.fn.extend({
	addClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return speed ?
				$.effects.animateClass.call( this,
					{ add: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.addClass ),

	removeClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return arguments.length > 1 ?
				$.effects.animateClass.call( this,
					{ remove: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.removeClass ),

	toggleClass: (function( orig ) {
		return function( classNames, force, speed, easing, callback ) {
			if ( typeof force === "boolean" || force === undefined ) {
				if ( !speed ) {
					// without speed parameter
					return orig.apply( this, arguments );
				} else {
					return $.effects.animateClass.call( this,
						(force ? { add: classNames } : { remove: classNames }),
						speed, easing, callback );
				}
			} else {
				// without force parameter
				return $.effects.animateClass.call( this,
					{ toggle: classNames }, force, speed, easing );
			}
		};
	})( $.fn.toggleClass ),

	switchClass: function( remove, add, speed, easing, callback) {
		return $.effects.animateClass.call( this, {
			add: add,
			remove: remove
		}, speed, easing, callback );
	}
});

})();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(function() {

$.extend( $.effects, {
	version: "1.10.4",

	// Saves a set of properties in a data storage
	save: function( element, set ) {
		for( var i=0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
			}
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function( element, set ) {
		var val, i;
		for( i=0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				val = element.data( dataSpace + set[ i ] );
				// support: jQuery 1.6.2
				// http://bugs.jquery.com/ticket/9917
				// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
				// We can't differentiate between "" and 0 here, so we just assume
				// empty string since it's likely to be a more common value...
				if ( val === undefined ) {
					val = "";
				}
				element.css( set[ i ], val );
			}
		}
	},

	setMode: function( el, mode ) {
		if (mode === "toggle") {
			mode = el.is( ":hidden" ) ? "show" : "hide";
		}
		return mode;
	},

	// Translates a [top,left] array into a baseline value
	// this should be a little more flexible in the future to handle a string & hash
	getBaseline: function( origin, original ) {
		var y, x;
		switch ( origin[ 0 ] ) {
			case "top": y = 0; break;
			case "middle": y = 0.5; break;
			case "bottom": y = 1; break;
			default: y = origin[ 0 ] / original.height;
		}
		switch ( origin[ 1 ] ) {
			case "left": x = 0; break;
			case "center": x = 0.5; break;
			case "right": x = 1; break;
			default: x = origin[ 1 ] / original.width;
		}
		return {
			x: x,
			y: y
		};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function( element ) {

		// if the element is already wrapped, return it
		if ( element.parent().is( ".ui-effects-wrapper" )) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				"float": element.css( "float" )
			},
			wrapper = $( "<div></div>" )
				.addClass( "ui-effects-wrapper" )
				.css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
			// Store the size in case width/height are defined in % - Fixes #5245
			size = {
				width: element.width(),
				height: element.height()
			},
			active = document.activeElement;

		// support: Firefox
		// Firefox incorrectly exposes anonymous content
		// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
		try {
			active.id;
		} catch( e ) {
			active = document.body;
		}

		element.wrap( wrapper );

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}

		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if ( element.css( "position" ) === "static" ) {
			wrapper.css({ position: "relative" });
			element.css({ position: "relative" });
		} else {
			$.extend( props, {
				position: element.css( "position" ),
				zIndex: element.css( "z-index" )
			});
			$.each([ "top", "left", "bottom", "right" ], function(i, pos) {
				props[ pos ] = element.css( pos );
				if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
					props[ pos ] = "auto";
				}
			});
			element.css({
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			});
		}
		element.css(size);

		return wrapper.css( props ).show();
	},

	removeWrapper: function( element ) {
		var active = document.activeElement;

		if ( element.parent().is( ".ui-effects-wrapper" ) ) {
			element.parent().replaceWith( element );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
		}


		return element;
	},

	setTransition: function( element, list, factor, value ) {
		value = value || {};
		$.each( list, function( i, x ) {
			var unit = element.cssUnit( x );
			if ( unit[ 0 ] > 0 ) {
				value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
			}
		});
		return value;
	}
});

// return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

	// allow passing all options as the first parameter
	if ( $.isPlainObject( effect ) ) {
		options = effect;
		effect = effect.effect;
	}

	// convert to an object
	effect = { effect: effect };

	// catch (effect, null, ...)
	if ( options == null ) {
		options = {};
	}

	// catch (effect, callback)
	if ( $.isFunction( options ) ) {
		callback = options;
		speed = null;
		options = {};
	}

	// catch (effect, speed, ?)
	if ( typeof options === "number" || $.fx.speeds[ options ] ) {
		callback = speed;
		speed = options;
		options = {};
	}

	// catch (effect, options, callback)
	if ( $.isFunction( speed ) ) {
		callback = speed;
		speed = null;
	}

	// add options to effect
	if ( options ) {
		$.extend( effect, options );
	}

	speed = speed || options.duration;
	effect.duration = $.fx.off ? 0 :
		typeof speed === "number" ? speed :
		speed in $.fx.speeds ? $.fx.speeds[ speed ] :
		$.fx.speeds._default;

	effect.complete = callback || options.complete;

	return effect;
}

function standardAnimationOption( option ) {
	// Valid standard speeds (nothing, number, named speed)
	if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
		return true;
	}

	// Invalid strings - treat as "normal" speed
	if ( typeof option === "string" && !$.effects.effect[ option ] ) {
		return true;
	}

	// Complete callback
	if ( $.isFunction( option ) ) {
		return true;
	}

	// Options hash (but not naming an effect)
	if ( typeof option === "object" && !option.effect ) {
		return true;
	}

	// Didn't match any standard API
	return false;
}

$.fn.extend({
	effect: function( /* effect, options, speed, callback */ ) {
		var args = _normalizeArguments.apply( this, arguments ),
			mode = args.mode,
			queue = args.queue,
			effectMethod = $.effects.effect[ args.effect ];
		
		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args.duration, args.complete );
			} else {
				return this.each( function() {
					if ( args.complete ) {
						args.complete.call( this );
					}
				});
			}
		}

		function run( next ) {
			var elem = $( this ),
				complete = args.complete,
				mode = args.mode;

			function done() {
				if ( $.isFunction( complete ) ) {
					complete.call( elem[0] );
				}
				if ( $.isFunction( next ) ) {
					next();
				}
			}

			// If the element already has the correct final state, delegate to
			// the core methods so the internal tracking of "olddisplay" works.
			if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
				elem[ mode ]();
				done();
			} else {
				effectMethod.call( elem[0], args, done );
			}
		}

		return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
	},

	show: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "show";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.show ),

	hide: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "hide";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.hide ),

	toggle: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "toggle";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.toggle ),

	// helper functions
	cssUnit: function(key) {
		var style = this.css( key ),
			val = [];

		$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
			if ( style.indexOf( unit ) > 0 ) {
				val = [ parseFloat( style ), unit ];
			}
		});
		return val;
	}
});

})();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
	baseEasings[ name ] = function( p ) {
		return Math.pow( p, i + 2 );
	};
});

$.extend( baseEasings, {
	Sine: function ( p ) {
		return 1 - Math.cos( p * Math.PI / 2 );
	},
	Circ: function ( p ) {
		return 1 - Math.sqrt( 1 - p * p );
	},
	Elastic: function( p ) {
		return p === 0 || p === 1 ? p :

			-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
	},
	Back: function( p ) {
		return p * p * ( 3 * p - 2 );
	},
	Bounce: function ( p ) {
		var pow2,
			bounce = 4;

		while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
		return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
	}
});

$.each( baseEasings, function( name, easeIn ) {
	$.easing[ "easeIn" + name ] = easeIn;
	$.easing[ "easeOut" + name ] = function( p ) {
		return 1 - easeIn( 1 - p );
	};
	$.easing[ "easeInOut" + name ] = function( p ) {
		return p < 0.5 ?
			easeIn( p * 2 ) / 2 :
			1 - easeIn( p * -2 + 2 ) / 2;
	};
});

})();

})(jQuery);
(function( $, undefined ) {

var rvertical = /up|down|vertical/,
	rpositivemotion = /up|left|vertical|horizontal/;

$.effects.effect.blind = function( o, done ) {
	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		direction = o.direction || "up",
		vertical = rvertical.test( direction ),
		ref = vertical ? "height" : "width",
		ref2 = vertical ? "top" : "left",
		motion = rpositivemotion.test( direction ),
		animation = {},
		show = mode === "show",
		wrapper, distance, margin;

	// if already wrapped, the wrapper's properties are my property. #6245
	if ( el.parent().is( ".ui-effects-wrapper" ) ) {
		$.effects.save( el.parent(), props );
	} else {
		$.effects.save( el, props );
	}
	el.show();
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	distance = wrapper[ ref ]();
	margin = parseFloat( wrapper.css( ref2 ) ) || 0;

	animation[ ref ] = show ? distance : 0;
	if ( !motion ) {
		el
			.css( vertical ? "bottom" : "right", 0 )
			.css( vertical ? "top" : "left", "auto" )
			.css({ position: "absolute" });

		animation[ ref2 ] = show ? margin : distance + margin;
	}

	// start at 0 if we are showing
	if ( show ) {
		wrapper.css( ref, 0 );
		if ( ! motion ) {
			wrapper.css( ref2, margin + distance );
		}
	}

	// Animate
	wrapper.animate( animation, {
		duration: o.duration,
		easing: o.easing,
		queue: false,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.bounce = function( o, done ) {
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

		// defaults:
		mode = $.effects.setMode( el, o.mode || "effect" ),
		hide = mode === "hide",
		show = mode === "show",
		direction = o.direction || "up",
		distance = o.distance,
		times = o.times || 5,

		// number of internal animations
		anims = times * 2 + ( show || hide ? 1 : 0 ),
		speed = o.duration / anims,
		easing = o.easing,

		// utility:
		ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
		motion = ( direction === "up" || direction === "left" ),
		i,
		upAnim,
		downAnim,

		// we will need to re-assemble the queue to stack our animations in place
		queue = el.queue(),
		queuelen = queue.length;

	// Avoid touching opacity to prevent clearType and PNG issues in IE
	if ( show || hide ) {
		props.push( "opacity" );
	}

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el ); // Create Wrapper

	// default distance for the BIGGEST bounce is the outer Distance / 3
	if ( !distance ) {
		distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
	}

	if ( show ) {
		downAnim = { opacity: 1 };
		downAnim[ ref ] = 0;

		// if we are showing, force opacity 0 and set the initial position
		// then do the "first" animation
		el.css( "opacity", 0 )
			.css( ref, motion ? -distance * 2 : distance * 2 )
			.animate( downAnim, speed, easing );
	}

	// start at the smallest distance if we are hiding
	if ( hide ) {
		distance = distance / Math.pow( 2, times - 1 );
	}

	downAnim = {};
	downAnim[ ref ] = 0;
	// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
	for ( i = 0; i < times; i++ ) {
		upAnim = {};
		upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

		el.animate( upAnim, speed, easing )
			.animate( downAnim, speed, easing );

		distance = hide ? distance * 2 : distance / 2;
	}

	// Last Bounce when Hiding
	if ( hide ) {
		upAnim = { opacity: 0 };
		upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

		el.animate( upAnim, speed, easing );
	}

	el.queue(function() {
		if ( hide ) {
			el.hide();
		}
		$.effects.restore( el, props );
		$.effects.removeWrapper( el );
		done();
	});

	// inject all the animations we just queued to be first in line (after "inprogress")
	if ( queuelen > 1) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	el.dequeue();

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.clip = function( o, done ) {
	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		direction = o.direction || "vertical",
		vert = direction === "vertical",
		size = vert ? "height" : "width",
		position = vert ? "top" : "left",
		animation = {},
		wrapper, animate, distance;

	// Save & Show
	$.effects.save( el, props );
	el.show();

	// Create Wrapper
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});
	animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
	distance = animate[ size ]();

	// Shift
	if ( show ) {
		animate.css( size, 0 );
		animate.css( position, distance / 2 );
	}

	// Create Animation Object:
	animation[ size ] = show ? distance : 0;
	animation[ position ] = show ? 0 : distance / 2;

	// Animate
	animate.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( !show ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.drop = function( o, done ) {

	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		direction = o.direction || "left",
		ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
		motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
		animation = {
			opacity: show ? 1 : 0
		},
		distance;

	// Adjust
	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );

	distance = o.distance || el[ ref === "top" ? "outerHeight": "outerWidth" ]( true ) / 2;

	if ( show ) {
		el
			.css( "opacity", 0 )
			.css( ref, motion === "pos" ? -distance : distance );
	}

	// Animation
	animation[ ref ] = ( show ?
		( motion === "pos" ? "+=" : "-=" ) :
		( motion === "pos" ? "-=" : "+=" ) ) +
		distance;

	// Animate
	el.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.explode = function( o, done ) {

	var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
		cells = rows,
		el = $( this ),
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",

		// show and then visibility:hidden the element before calculating offset
		offset = el.show().css( "visibility", "hidden" ).offset(),

		// width and height of a piece
		width = Math.ceil( el.outerWidth() / cells ),
		height = Math.ceil( el.outerHeight() / rows ),
		pieces = [],

		// loop
		i, j, left, top, mx, my;

	// children animate complete:
	function childComplete() {
		pieces.push( this );
		if ( pieces.length === rows * cells ) {
			animComplete();
		}
	}

	// clone the element for each row and cell.
	for( i = 0; i < rows ; i++ ) { // ===>
		top = offset.top + i * height;
		my = i - ( rows - 1 ) / 2 ;

		for( j = 0; j < cells ; j++ ) { // |||
			left = offset.left + j * width;
			mx = j - ( cells - 1 ) / 2 ;

			// Create a clone of the now hidden main element that will be absolute positioned
			// within a wrapper div off the -left and -top equal to size of our pieces
			el
				.clone()
				.appendTo( "body" )
				.wrap( "<div></div>" )
				.css({
					position: "absolute",
					visibility: "visible",
					left: -j * width,
					top: -i * height
				})

			// select the wrapper - make it overflow: hidden and absolute positioned based on
			// where the original was located +left and +top equal to the size of pieces
				.parent()
				.addClass( "ui-effects-explode" )
				.css({
					position: "absolute",
					overflow: "hidden",
					width: width,
					height: height,
					left: left + ( show ? mx * width : 0 ),
					top: top + ( show ? my * height : 0 ),
					opacity: show ? 0 : 1
				}).animate({
					left: left + ( show ? 0 : mx * width ),
					top: top + ( show ? 0 : my * height ),
					opacity: show ? 1 : 0
				}, o.duration || 500, o.easing, childComplete );
		}
	}

	function animComplete() {
		el.css({
			visibility: "visible"
		});
		$( pieces ).remove();
		if ( !show ) {
			el.hide();
		}
		done();
	}
};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.fade = function( o, done ) {
	var el = $( this ),
		mode = $.effects.setMode( el, o.mode || "toggle" );

	el.animate({
		opacity: mode
	}, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: done
	});
};

})( jQuery );
(function( $, undefined ) {

$.effects.effect.fold = function( o, done ) {

	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		hide = mode === "hide",
		size = o.size || 15,
		percent = /([0-9]+)%/.exec( size ),
		horizFirst = !!o.horizFirst,
		widthFirst = show !== horizFirst,
		ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
		duration = o.duration / 2,
		wrapper, distance,
		animation1 = {},
		animation2 = {};

	$.effects.save( el, props );
	el.show();

	// Create Wrapper
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});
	distance = widthFirst ?
		[ wrapper.width(), wrapper.height() ] :
		[ wrapper.height(), wrapper.width() ];

	if ( percent ) {
		size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
	}
	if ( show ) {
		wrapper.css( horizFirst ? {
			height: 0,
			width: size
		} : {
			height: size,
			width: 0
		});
	}

	// Animation
	animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
	animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

	// Animate
	wrapper
		.animate( animation1, duration, o.easing )
		.animate( animation2, duration, o.easing, function() {
			if ( hide ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		});

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.highlight = function( o, done ) {
	var elem = $( this ),
		props = [ "backgroundImage", "backgroundColor", "opacity" ],
		mode = $.effects.setMode( elem, o.mode || "show" ),
		animation = {
			backgroundColor: elem.css( "backgroundColor" )
		};

	if (mode === "hide") {
		animation.opacity = 0;
	}

	$.effects.save( elem, props );

	elem
		.show()
		.css({
			backgroundImage: "none",
			backgroundColor: o.color || "#ffff99"
		})
		.animate( animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( mode === "hide" ) {
					elem.hide();
				}
				$.effects.restore( elem, props );
				done();
			}
		});
};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.pulsate = function( o, done ) {
	var elem = $( this ),
		mode = $.effects.setMode( elem, o.mode || "show" ),
		show = mode === "show",
		hide = mode === "hide",
		showhide = ( show || mode === "hide" ),

		// showing or hiding leaves of the "last" animation
		anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
		duration = o.duration / anims,
		animateTo = 0,
		queue = elem.queue(),
		queuelen = queue.length,
		i;

	if ( show || !elem.is(":visible")) {
		elem.css( "opacity", 0 ).show();
		animateTo = 1;
	}

	// anims - 1 opacity "toggles"
	for ( i = 1; i < anims; i++ ) {
		elem.animate({
			opacity: animateTo
		}, duration, o.easing );
		animateTo = 1 - animateTo;
	}

	elem.animate({
		opacity: animateTo
	}, duration, o.easing);

	elem.queue(function() {
		if ( hide ) {
			elem.hide();
		}
		done();
	});

	// We just queued up "anims" animations, we need to put them next in the queue
	if ( queuelen > 1 ) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	elem.dequeue();
};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.puff = function( o, done ) {
	var elem = $( this ),
		mode = $.effects.setMode( elem, o.mode || "hide" ),
		hide = mode === "hide",
		percent = parseInt( o.percent, 10 ) || 150,
		factor = percent / 100,
		original = {
			height: elem.height(),
			width: elem.width(),
			outerHeight: elem.outerHeight(),
			outerWidth: elem.outerWidth()
		};

	$.extend( o, {
		effect: "scale",
		queue: false,
		fade: true,
		mode: mode,
		complete: done,
		percent: hide ? percent : 100,
		from: hide ?
			original :
			{
				height: original.height * factor,
				width: original.width * factor,
				outerHeight: original.outerHeight * factor,
				outerWidth: original.outerWidth * factor
			}
	});

	elem.effect( o );
};

$.effects.effect.scale = function( o, done ) {

	// Create element
	var el = $( this ),
		options = $.extend( true, {}, o ),
		mode = $.effects.setMode( el, o.mode || "effect" ),
		percent = parseInt( o.percent, 10 ) ||
			( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
		direction = o.direction || "both",
		origin = o.origin,
		original = {
			height: el.height(),
			width: el.width(),
			outerHeight: el.outerHeight(),
			outerWidth: el.outerWidth()
		},
		factor = {
			y: direction !== "horizontal" ? (percent / 100) : 1,
			x: direction !== "vertical" ? (percent / 100) : 1
		};

	// We are going to pass this effect to the size effect:
	options.effect = "size";
	options.queue = false;
	options.complete = done;

	// Set default origin and restore for show/hide
	if ( mode !== "effect" ) {
		options.origin = origin || ["middle","center"];
		options.restore = true;
	}

	options.from = o.from || ( mode === "show" ? {
		height: 0,
		width: 0,
		outerHeight: 0,
		outerWidth: 0
	} : original );
	options.to = {
		height: original.height * factor.y,
		width: original.width * factor.x,
		outerHeight: original.outerHeight * factor.y,
		outerWidth: original.outerWidth * factor.x
	};

	// Fade option to support puff
	if ( options.fade ) {
		if ( mode === "show" ) {
			options.from.opacity = 0;
			options.to.opacity = 1;
		}
		if ( mode === "hide" ) {
			options.from.opacity = 1;
			options.to.opacity = 0;
		}
	}

	// Animate
	el.effect( options );

};

$.effects.effect.size = function( o, done ) {

	// Create element
	var original, baseline, factor,
		el = $( this ),
		props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

		// Always restore
		props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

		// Copy for children
		props2 = [ "width", "height", "overflow" ],
		cProps = [ "fontSize" ],
		vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
		hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

		// Set options
		mode = $.effects.setMode( el, o.mode || "effect" ),
		restore = o.restore || mode !== "effect",
		scale = o.scale || "both",
		origin = o.origin || [ "middle", "center" ],
		position = el.css( "position" ),
		props = restore ? props0 : props1,
		zero = {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		};

	if ( mode === "show" ) {
		el.show();
	}
	original = {
		height: el.height(),
		width: el.width(),
		outerHeight: el.outerHeight(),
		outerWidth: el.outerWidth()
	};

	if ( o.mode === "toggle" && mode === "show" ) {
		el.from = o.to || zero;
		el.to = o.from || original;
	} else {
		el.from = o.from || ( mode === "show" ? zero : original );
		el.to = o.to || ( mode === "hide" ? zero : original );
	}

	// Set scaling factor
	factor = {
		from: {
			y: el.from.height / original.height,
			x: el.from.width / original.width
		},
		to: {
			y: el.to.height / original.height,
			x: el.to.width / original.width
		}
	};

	// Scale the css box
	if ( scale === "box" || scale === "both" ) {

		// Vertical props scaling
		if ( factor.from.y !== factor.to.y ) {
			props = props.concat( vProps );
			el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
			el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
		}

		// Horizontal props scaling
		if ( factor.from.x !== factor.to.x ) {
			props = props.concat( hProps );
			el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
			el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
		}
	}

	// Scale the content
	if ( scale === "content" || scale === "both" ) {

		// Vertical props scaling
		if ( factor.from.y !== factor.to.y ) {
			props = props.concat( cProps ).concat( props2 );
			el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
			el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
		}
	}

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );
	el.css( "overflow", "hidden" ).css( el.from );

	// Adjust
	if (origin) { // Calculate baseline shifts
		baseline = $.effects.getBaseline( origin, original );
		el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
		el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
		el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
		el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
	}
	el.css( el.from ); // set top & left

	// Animate
	if ( scale === "content" || scale === "both" ) { // Scale the children

		// Add margins/font-size
		vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
		hProps = hProps.concat([ "marginLeft", "marginRight" ]);
		props2 = props0.concat(vProps).concat(hProps);

		el.find( "*[width]" ).each( function(){
			var child = $( this ),
				c_original = {
					height: child.height(),
					width: child.width(),
					outerHeight: child.outerHeight(),
					outerWidth: child.outerWidth()
				};
			if (restore) {
				$.effects.save(child, props2);
			}

			child.from = {
				height: c_original.height * factor.from.y,
				width: c_original.width * factor.from.x,
				outerHeight: c_original.outerHeight * factor.from.y,
				outerWidth: c_original.outerWidth * factor.from.x
			};
			child.to = {
				height: c_original.height * factor.to.y,
				width: c_original.width * factor.to.x,
				outerHeight: c_original.height * factor.to.y,
				outerWidth: c_original.width * factor.to.x
			};

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
				child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
			}

			// Horizontal props scaling
			if ( factor.from.x !== factor.to.x ) {
				child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
				child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
			}

			// Animate children
			child.css( child.from );
			child.animate( child.to, o.duration, o.easing, function() {

				// Restore children
				if ( restore ) {
					$.effects.restore( child, props2 );
				}
			});
		});
	}

	// Animate
	el.animate( el.to, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( el.to.opacity === 0 ) {
				el.css( "opacity", el.from.opacity );
			}
			if( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			if ( !restore ) {

				// we need to calculate our new positioning based on the scaling
				if ( position === "static" ) {
					el.css({
						position: "relative",
						top: el.to.top,
						left: el.to.left
					});
				} else {
					$.each([ "top", "left" ], function( idx, pos ) {
						el.css( pos, function( _, str ) {
							var val = parseInt( str, 10 ),
								toRef = idx ? el.to.left : el.to.top;

							// if original was "auto", recalculate the new value from wrapper
							if ( str === "auto" ) {
								return toRef + "px";
							}

							return val + toRef + "px";
						});
					});
				}
			}

			$.effects.removeWrapper( el );
			done();
		}
	});

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.shake = function( o, done ) {

	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "effect" ),
		direction = o.direction || "left",
		distance = o.distance || 20,
		times = o.times || 3,
		anims = times * 2 + 1,
		speed = Math.round(o.duration/anims),
		ref = (direction === "up" || direction === "down") ? "top" : "left",
		positiveMotion = (direction === "up" || direction === "left"),
		animation = {},
		animation1 = {},
		animation2 = {},
		i,

		// we will need to re-assemble the queue to stack our animations in place
		queue = el.queue(),
		queuelen = queue.length;

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );

	// Animation
	animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
	animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
	animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

	// Animate
	el.animate( animation, speed, o.easing );

	// Shakes
	for ( i = 1; i < times; i++ ) {
		el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
	}
	el
		.animate( animation1, speed, o.easing )
		.animate( animation, speed / 2, o.easing )
		.queue(function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		});

	// inject all the animations we just queued to be first in line (after "inprogress")
	if ( queuelen > 1) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	el.dequeue();

};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.slide = function( o, done ) {

	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
		mode = $.effects.setMode( el, o.mode || "show" ),
		show = mode === "show",
		direction = o.direction || "left",
		ref = (direction === "up" || direction === "down") ? "top" : "left",
		positiveMotion = (direction === "up" || direction === "left"),
		distance,
		animation = {};

	// Adjust
	$.effects.save( el, props );
	el.show();
	distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

	$.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	if ( show ) {
		el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
	}

	// Animation
	animation[ ref ] = ( show ?
		( positiveMotion ? "+=" : "-=") :
		( positiveMotion ? "-=" : "+=")) +
		distance;

	// Animate
	el.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};

})(jQuery);
(function( $, undefined ) {

$.effects.effect.transfer = function( o, done ) {
	var elem = $( this ),
		target = $( o.to ),
		targetFixed = target.css( "position" ) === "fixed",
		body = $("body"),
		fixTop = targetFixed ? body.scrollTop() : 0,
		fixLeft = targetFixed ? body.scrollLeft() : 0,
		endPosition = target.offset(),
		animation = {
			top: endPosition.top - fixTop ,
			left: endPosition.left - fixLeft ,
			height: target.innerHeight(),
			width: target.innerWidth()
		},
		startPosition = elem.offset(),
		transfer = $( "<div class='ui-effects-transfer'></div>" )
			.appendTo( document.body )
			.addClass( o.className )
			.css({
				top: startPosition.top - fixTop ,
				left: startPosition.left - fixLeft ,
				height: elem.innerHeight(),
				width: elem.innerWidth(),
				position: targetFixed ? "fixed" : "absolute"
			})
			.animate( animation, o.duration, o.easing, function() {
				transfer.remove();
				done();
			});
};

})(jQuery);

define("Nex/effects/Effects", function(){});

/*
Nex.Container组件说明：
组件名称       : Nex.Container 可通过 new Nex.Container() 或者 Nex.Create('NexContainer') 来创建
组件别名xtype  : container  可通过Nex.Create('container')
加载名称       : Nex.Container 组件存放目录结构 {{nex目录}}/Container.js
*/
define('Nex/container/AbstractContainer',['require','Nex'],function(require){	
	require('Nex');
	return Nex.define('Nex.container.AbstractContainer',{
		extend : 'Nex.Component',
		alias : 'Nex.AbstractContainer',
		xtype : 'abstractcontainer',
		configs : function(opt){
			return {
				prefix : 'abscontainer',
				autoResize : true,
				containerCls : opt.containerCls+' nex-abscontainer'
			};	
		}
	});
});
/*
Nex.Container组件说明：
组件名称       : Nex.Container 可通过 new Nex.Container() 或者 Nex.Create('NexContainer') 来创建
组件别名xtype  : container  可通过Nex.Create('container')
加载名称       : Nex.Container 组件存放目录结构 {{nex目录}}/Container.js
*/
define('Nex/container/Container',['require','Nex/effects/Effects','Nex/container/AbstractContainer'],function(require){	
	require('Nex/effects/Effects');
	require('Nex/container/AbstractContainer');
	
	var container = Nex.define('Nex.container.Container',{
		extend : 'Nex.container.AbstractContainer',
		alias  : 'Nex.Container',
		xtype  : 'container',
		configs : function( opt ){
			return {
				prefix : 'nexcontainer-',
				//tag : 'div',
				autoScroll : false,
				_checkScrollBar : false,//检查是否出现滚动条 如果出现会触发onViewSizeChange
				_hasBodyView : false,//是否有view部分 html 没有这部分 应该关闭 提高效率 关闭后不会触发onViewSizeChange
				_initSetSize : false,//容器刚创建时会设置容器宽度
				tabIndex : -1,
				hideMode : 'offsets',//display visibility offsets(IE6下会使用display+offsets)
				animate : false,//开启动画显示 开启后可设置effect等参数
				animDuration : 200,
				animEasing   : Nex.easingDef,
				//effect duration easing complete  queue .....
				_effect : {},//effect可参考jquery ui effects部分
				effect : {},
				showEffect : {},
				hideEffect : {},
				showFn : null,//自定义显示函数
				hideFn : null,//自定义关闭函数
				showMethod : 'fadeIn',
				hideMethod : 'fadeOut',
				overCls : '',
				width : 'auto',// 设为auto后 大小将不会设置 宽度 高度都是auto 或者css控制的,设为0 相当于100% 
				height : 'auto',
				checkAutoSize : false,//开启后 创建时会检测最大最小 宽高
				border : false,//boolean 如果是String则动态设置样式
				borderCls : 'nex-container-border',
				borderStyle : '',
				containerCls : [opt.containerCls,'nex-container'].join(' '),
				autoScrollCls : 'nex-container-auto-scroll',
				autoWidthCls : 'nex-container-auto-width',
				autoHeightCls : 'nex-container-auto-height',
				_initMethod : [],//初始时扩展调用
				padding : null,
				margin  : null,
				overflow : '',
				_vviews : {},//竖
				_hviews : {},//横
				loadMsg : 'Loading...',
				//自定义loading显示容器
				loadContainer : null,//跟一个函数 返回一个dom元素
				//禁止绑定事件 或者指定那些事件不需要绑定 eg [ 'click',dblclick,scroll ]
				denyEvents : false
			};
		}	
	});
	//兼容以前版本
	Nex.Html = container;
	container.override({
		initComponent : function() {
			var self = this;
			var opt = this.configs;
			var methods = opt._initMethod;
			self.callParent(arguments);
			/*调用扩展api*/
			if( methods.length ) {
				var i=0,len = methods.length;
				for( ;i<len;i++ ) {
					var m = methods[i];
					if( !m ) continue;
					if( $.isFunction( m ) ) {
						m.call( self );	
					} else if( ($.type( m ) === 'string') && $.isFunction( self[m] ) ) {
						self[m].call( self );	
					}
				}	
			}
			
		},
		initRenderContent : function(){
			var self = this;
			var opt = this.configs;
			
			self.callParent(arguments);
			
			if( opt.checkAutoSize ) {
				//检查最大最小宽度
				self._checkAutoSize();
			}
			
			return this;	
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent( arguments );
			self.bind("onStart._sys",function(){
				if( opt.autoSize ) {
					opt.width = 'auto';
					opt.height = 'auto';
				}
			},self);
			self.bind("onCreate._sys",function(){
				//opt._isInit = false;	
				self._setAutoScrollCls();
				self._setScrollEvent();
			},self);
			self.bind("onMouseEnter._sys",self._setOverCls,self);
			self.bind("onMouseLeave._sys",self._unsetOverCls,self);
			return self;
		},
		onContainerCreate : function(el, opt){
			var self = this;	
			self.callParent(arguments);
			
			self._setBorder();
			self._setPadding();
			self._setMargin();
			self._setOverflow();
			
			if( opt._initSetSize ) {
				self._initSetContainerSize();
			}
			
			self.setContainerEvent();	 
		},
		_setHeightAuto : function(){
			var self = this;
			var opt = self.configs;	
			var views = opt.views;	
			var bd = self.getBody();
			var container = self.el;
			//container._removeStyle('height',true);
			container.css('height','');
			if( bd ) {
				//bd._removeStyle('height',true);	
				bd.css('height','');
			}
		},
		_setWidthAuto : function(){
			var self = this;
			var opt = self.configs;	
			var views = opt.views;	
			var bd = self.getBody();
			var container = self.el;
			//container._removeStyle('width',true);
			container.css('width','');
			if( bd ) {
				//bd._removeStyle('width',true);	
				bd.css('width','');
			}
		},
		/*如果width height 设置的是百分比那么将返回百分比值，只对resize和初始创建时有效*/
		getResizeWH : function(){
			var self = this;
			var opt = self.configs;	
			var views = opt.views;
			var container = self.el;
			var renderTo = $(opt.renderTo);
			var width =  renderTo._width();
			var height =  renderTo._height();
			//这里应该触发一个事件 可以修改 width height 
			var size = {
				width : width,
				height : height	
			};
			self.fireEvent('onGetRenderToSize',[ size,opt ]);
			
			width = size.width;
			height = size.height;
			
			var isChange = true;
			if( opt.pWidth === width && opt.pHeight === height && opt._isResize ) {//resize 时才判断 setWH 都会执行
				isChange = false;	
			}
			if( !isChange ) {
				return {
					width:opt._width,
					height:opt._height,
					isChange : isChange
				};	
			}
			
			opt.pWidth = width;
			opt.pHeight = height;
			//opt.width opt.height 等于0是 默认就是 100%
			var w = parseFloat(opt.width) === 0 ? width : opt.width
				,h = parseFloat(opt.height) === 0 ? height : opt.height;

			if( opt.width.toString().indexOf("%") != -1 ) {
				w = parseFloat(opt.width)*width/100;
			}
			if( opt.height.toString().indexOf("%") != -1 ) {
				h = parseFloat(opt.height)*height/100;
			}
			//如果opt.width 设置的是 auto时。
			var bd = self.getBody();
			if( w === 'auto' || isNaN(parseFloat(w)) ) {
				/*$.each( views , function(key,_item){
					_item._removeStyle('width',true);	
				} );*/
				if( !self.__containerCreate ) {
					self._setWidthAuto();
				}
				w = container._outerWidth();	
			}
			//如果opt.height 设置的是 auto时。
			if( h === 'auto' || isNaN(parseFloat(h)) ) {
				if( !self.__containerCreate ) {
					self._setHeightAuto();
				}
				/*$.each( views , function(key,_item){
					_item._removeStyle('height',true);	
				} );*/
				h = container._outerHeight();	
			}
			//因为浏览器会对像素进行 四舍五入 处理 所以应该用parseInt对像素取整 
			return {
				width:parseInt(w),
				height:parseInt(h),
				isChange : isChange
			};
		},
		checkSize : function(width,height){
			var self = this;
			var opt = self.configs;	
			//var renderTo = $(opt.renderTo);
			var cutHeight = self._getCutHeight(opt.cutHeight);
			var cutWidth = self._getCutWidth(opt.cutWidth);
			height -= isNaN(parseFloat(opt.cutHeight)) ? 0 : opt.cutHeight;
			width -= isNaN(parseFloat(opt.cutWidth)) ? 0 : opt.cutWidth;
			
			var minWidth = self._getMinWidth();
			var minHeight = self._getMinHeight();
			var maxHeight = self._getMaxHeight();
			var maxWidth = self._getMaxWidth();
			
			if( maxWidth>0 ) {
				width = Math.min(width,maxWidth);
			}
			if( maxHeight>0 ) {
				height = Math.min(height,maxHeight);
			}
			if( minWidth>0 ) {
				width = Math.max(width,minWidth);
			}
			if( minHeight>0 ) {
				height = Math.max(height,minHeight);
			}
			
			return {
					//width : isNaN(width)?'auto':width,
					//height : isNaN(height)?'auto':height
					width : parseInt(isNaN(width)?opt.pWidth:width),//实际上 width,height 一直不会是NaN
					height : parseInt(isNaN(height)?opt.pHeight:height)
				};
		},
		clearContainerSizeCache : function(){
			var self = this;
			self._containerWidth = null;
			self._containerHeight = null;	
		},
		setContainerSize : function(w,h){
			var self = this,
				undef,
				opt = self.configs,	
				//render = $(opt.renderTo),
				container = self.el
				;
			
			opt.width = w === undef || w === null ? opt.width : w;	
			opt.height = h === undef || h === null ? opt.height : h;
			
			var size = self.getResizeWH();
			//注：如果width,height 为auto是 size 和 wh 的 width height 应该是一样的 除非设置了 max/min/cut width height 
			var wh = self.checkSize( size.width,size.height );
			
			self.fireEvent('onSetContainerSize',[wh,opt]);
			//判断宽高大小是否有变更
			if( !size.isChange ) {
				return false;	
			}
			
			var _w = String(opt.width).toLowerCase(),
				_h = String(opt.height).toLowerCase();
			
			//缓存
			if( _h !== 'auto' && _w !== 'auto' && self._containerWidth && self._containerHeight ) {
				if( self._containerWidth === wh.width && self._containerHeight === wh.height ) {
					return false;	
				}	
			}
			
			opt._width = wh.width;
			opt._height = wh.height;
				
			//判断是否设置了 max/min/cut width height 
			if( _w === 'auto' && size.width !== wh.width ) {
				_w = wh.width;	
			}	
			if( _h === 'auto' && size.height !== wh.height ) {
				_h = wh.height;	
			}
			
			opt.realWidth = _w;
			opt.realHeight = _h;	
			
			container.removeClass(opt.autoHeightCls+' '+opt.autoWidthCls);
			
			//最终判断 如果 _w _h 已然是auto 那么参数  max/min/cut width height  根本没有设置 width heigth 可以设为auto 否则就设为对应的数
			if( _w !== 'auto') {
				container._outerWidth(opt._width);	
			} else {
				//container._removeStyle('width',true);
				container.css('width','');
				container.addClass(opt.autoWidthCls);
			}
			if( _h !== 'auto') {
				container._outerHeight(opt._height);	
			} else {
				//container._removeStyle('height',true);
				container.css('height','');
				container.addClass(opt.autoHeightCls);
			}
			//缓存
			self._containerWidth = wh.width;
			self._containerHeight = wh.height;
			
			return true;
		},
		/*
		*判断当前是否自适应高度
		*/
		isAutoHeight : function(){
			var self = this,
				opt = this.configs;
			return 	opt.realHeight === 'auto' || opt.realHeight === '' ? true : false;
		},
		/*
		*判断当前是否自适应宽度
		*/
		isAutoWidth : function(){
			var self = this,
				opt = this.configs;
			return 	opt.realWidth === 'auto' || opt.realWidth === '' ? true : false;
		},
		__resizeTimer : 0,
		/*
		*设置容器大小  @w 宽度 @h 高度 如果传的是func 则作为回调 并且只作为刷新用 @m如果为false 则触发onResize让子组件改变大小
		* resize(callback)->setContainerSize ->是/否->resetViewSize->onViewSizeChange->是/否->_setViewSize->callback
		*/
		setSize : function(w,h,m){
			var self = this,
				undef,
				container = self.el,
				opt = self.configs;
				
				
			if( Nex.isObject(w) ) {
				m = h;
				h = w.height;
				w = w.width;	
			}	
			
			m = m === undef ? true : m;	
			
			//如果不需要设置会返回false
			var r = self.setContainerSize(w,h);
			
			if( r ) {
				self.setViewSize();
				if( !self.isInit() ) {
					self.onSizeChange();
					self.fireEvent("onSizeChange",[container,opt]);	
				}
				if( Nex.ComponentManager && !self.isInit() && m ) {
					if( self.__resizeTimer ) {
						clearTimeout( self.__resizeTimer );	
					}
					self.__resizeTimer = setTimeout(function(){
						Nex.ComponentManager.fireEvent("onResize",[opt.id]);		
					},0);
				}	
			}
			if( !self.isInit() ) {
				self.fireEvent('onResize',[ opt ]);
			}
			return r;	
		},
		setViewSize : function(){
			var self = this,
				undef,
				opt = self.configs,
				vbody = self.getBody();
			
			self.methodInvoke('doSetViewSize');	
			self.onSetViewSize();
			self.fireEvent("onSetViewSize",[opt]);	
			
			var r = true;	
			
			if( !opt._hasBodyView ) {
				r = false;//return false;	
			}
			if( r ) {	
				//事件检查滚动条 滚动条出现也会触发viewSize事件
				if( opt._checkScrollBar ) {
					//缓存机制
					//因为grid特殊 所以应该判断是否出现滚动条
					var hasScrollLeft = self.hasScroll( vbody,'left' );
					var hasScrollTop = self.hasScroll( vbody,'top' );
					var barSize = self.getScrollbarSize();
					
					var _vbodyWidth = vbody._width() - ( hasScrollTop ? barSize.y : 0 );
					var _vbodyHeight = vbody._height() - ( hasScrollLeft ? barSize.x : 0 );
				} else {
					var _vbodyWidth = vbody._width();
					var _vbodyHeight = vbody._height();
				}
				
				if( opt._vbodyWidth && opt._vbodyHeight ) {
					if( (opt._vbodyWidth == _vbodyWidth) && (opt._vbodyHeight == _vbodyHeight) ) {
						r = false;//return false;
					}
				} 
			}	
			if( r ) {
				//设置缓存
				opt._vbodyWidth = _vbodyWidth;
				opt._vbodyHeight = _vbodyHeight;
				if( !self.isInit() ) {
					self.onViewSizeChange();
					self.fireEvent("onViewSizeChange",[opt]);
				}
			}
			return r;
		},
		doSetViewSize : function(){},
		//m : true 默认改变子组件的大小
		resize : function(m){
			var self = this,
				opt = self.configs,
				undef;
			
			self.__rt = self.__rt || 0;
			
			if( self.__rt ) {
				clearTimeout( self.__rt );	
			}
			
			self.__rt = setTimeout(function(){
				opt._isResize = true;
				self.setSize(undef,undef,m);
				opt._isResize = false;
			},0);
		},
		refreshViewSize : function(){
			return this.setViewSize.apply(this,arguments);
		},
		resetSize : function(w,h,m){
			return this.setSize(w,h,m);
		},
		onSizeChange : function(w,h){},
		onSetViewSize : function(){},
		onViewSizeChange : function(){},
		_loadCounter : 0,
		showLoading : function(msg){
			var self = this,
				opt = self.configs;
			var msg = self._undef( msg,opt.loadMsg );//typeof msg === 'undefined' ? opt.loadMsg : msg;
			var render = null;
			if( $.isFunction(opt.loadContainer) ) {
				render = opt.loadContainer.call( self );	
			}
			render = render || self.getBody();
			
			self._loadCounter++;
			
			var isExists = $("#"+opt.id+"-laoding-mask-wraper");
			if( isExists.length ) {
				var maskMsg = $("#"+opt.id+"-laoding-mask-msg");
				maskMsg.html( msg );
				self.resizeLoadMask();
				return self;
			}
			var maskWraper = $('<div id="'+opt.id+'-laoding-mask-wraper" class="nex-loading-mask-wraper"><div id="'+opt.id+'-mask" class="nex-loading-mask"></div><div id="'+opt.id+'-laoding-mask-msg" class="nex-loading-mask-msg">'+msg+'</div><div>');
			$(render).append(maskWraper);
			
			maskWraper.click(function(e){
				e.stopPropagation();
				e.preventDefault();											 
			});
			
			self.resizeLoadMask();
			
			return self;
		},
		resizeLoadMask : function(){
			var self = this,
				opt = self.configs;	
			if( self.isAutoWidth() && Nex.isIE6 ) {
				var maskWraper = $("#"+opt.id+"-laoding-mask-wraper");	
				maskWraper._outerHeight( maskWraper.outerHeight() );
			}
			var maskMsg = $("#"+opt.id+"-laoding-mask-msg");
			var w = maskMsg.outerWidth();
			maskMsg.css("marginLeft",-w/2+"px");
			return self;
		},
		hideLoading : function(render){
			var self = this,
				opt = self.configs;
			self._loadCounter--;
			self._loadCounter = self._loadCounter<0?0:self._loadCounter;
			if( self._loadCounter<=0 ) {
				$("#"+opt.id+"-laoding-mask-wraper").remove();	
			}
			return self;
		},
		setWidth : function( w ){
			this.setSize(w);	
			return this;
		},
		setHeight : function( h ){
			var undef;
			this.setSize(undef,h);	
			return this;
		},
		getWidth : function(){
			//最好用 this.C('_width')
			return this.el.outerWidth() || 0;	
		},
		getHeight : function(){
			//最好用 this.C('_height')
			return this.el.outerHeight() || 0;	
		},
		width : function( w ){
			var undef;
			if( w === undef ) {
				return this.getWidth();	
			} else {
				var ft = String(w).charAt(0);
				if( ft === '+' || ft === '-' ) {
					w = w.slice(1);
					var _w = this.getWidth();
					w = ft == '+' ? _w + parseInt(w) : _w - parseInt(w);
				}
				this.setWidth(w);	
			}
		},
		height : function( w ){
			var undef;
			if( w === undef ) {
				return this.getHeight();	
			} else {
				var ft = String(w).charAt(0);
				if( ft === '+' || ft === '-' ) {
					w = w.slice(1);
					var _w = this.getHeight();
					w = ft == '+' ? _w + parseInt(w) : _w - parseInt(w);
				}
				this.setHeight(w);	
			}
		},
		_getDiffHeight : function(){
			return this.el._outerHeight() - this.getBody()._height();	
		},
		_getDiffWidth : function(){
			return this.el._outerWidth() - this.getBody()._width();	
		},
		/*
		* 不太适合panel计算
		*/
		_getAutoSize : function(){
			var bd = this.getBody();
			
			$.effects.save( bd,['overflow','width','height','position'] );
			
			var dh = this._getDiffHeight();
			var dw = this._getDiffWidth();
			
			bd.css({
				overflow : 'hidden'
				,width : ''
				,height : ''
				,position : 'absolute'
			});
			if( Nex.isIE6 ) {
				bd._removeStyle( 'width height' );
			}
			var size = {
				height : dh + bd._height(),
				width : dw + bd._width()	
			};
		
			$.effects.restore( bd,['width','height','position'] );
			return 	size;	
		},
		autoSetHeight : function(){
			this.height( (this._getAutoSize()).height );
			$.effects.restore( this.getBody(),['overflow'] );
			return this;
		},
		autoSetWidth : function(){
			this.width( (this._getAutoSize()).width );
			$.effects.restore( this.getBody(),['overflow'] );
			return this;	
		},
		autoSetSize : function(){
			this.setSize( this._getAutoSize() );
			$.effects.restore( this.getBody(),['overflow'] );
			return this;	
		},
		getSize : function(){
			return {
				width : this.getWidth(),
				height : this.getHeight()
			};
		},
		autoSize : function(){
			this.setSize('auto','auto');	
			return this;
		},
		autoHeight : function(){
			var undef;
			this.setSize(undef,'auto');	
			return this;	
		},
		autoWidth : function(){
			var undef;
			this.setSize('auto',undef);	
			return this;	
		},
		/**
		* 作用于scrollTo scrollLeft...
		*/
		getScrollView : function(){
			return this.getBody();	
		},
		onScroll : function(){},
		onScrollLeft : function(){},
		onScrollTop : function(){},
		_setScrollEvent : function(){
			var self = this;
			var opt = self.configs;
			var bd = self.getScrollView();	
			var callBack = function(type,e){
				var pos = {
					left : $(this).scrollLeft(),
					top : $(this).scrollTop()	
				}
				self.onScroll( pos, this, e, opt );
				self.onScrollLeft( pos.left, this, e, opt );
				self.onScrollTop( pos.top, this, e, opt );
				var r = self.fireEvent(type,[ pos, this, e, opt ]);
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
			};
			if( opt.denyEvents === true ) {
				return;
			}
			var events = {
				'scroll.html' : function(e){
					callBack.call(this,'onScroll',e);
					var $this = $(this);
					if( $this.scrollTop()<=0 ) {
						self.fireEvent('onScrollTopStart',[ this,e,opt ]);		
					} else if( $this.scrollLeft()<=0 ) {
						self.fireEvent('onScrollLeftStart',[ this,e,opt ])
					}
					if( self.isScrollEnd( this,'top' ) ) {
						self.fireEvent('onScrollTopEnd',[ this,e,opt ]);	
					}
					if( self.isScrollEnd( this,'left' ) ) {
						self.fireEvent('onScrollLeftEnd',[ this,e,opt ]);	
					}
				}
			};
			bd.unbind('scroll.html');
			bd.bind(events);
		},
		setContainerEvent : function(){
			var self = this;
			var opt = self.configs;
			var container = self.getContainer();
			//事件绑定
			if( opt.denyEvents === true ) {
				return false;
			} else if( $.isFunction(opt.denyEvents) ) {
				opt.denyEvents.call(self);	
				return false;
			}
			
			var callBack = function(type,e){
				var r = self.fireEvent(type,[ this,e,opt ]);
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
			};
			var events = {
				'focusin.html' : function(e) {
					callBack.call(this,'onFocusin',e);
				},
				'focusout.html' : function(e) {
					callBack.call(this,'onFocusout',e);
				},
				'focus.html' : function(e) {
					callBack.call(this,'onFocus',e);
				},
				'blur.html' : function(e) {
					callBack.call(this,'onBlur',e);
				},
				'click.html' : function(e) {
					callBack.call(this,'onClick',e);
				},
				'dblclick.html' : function(e) {
					callBack.call(this,'onDblClick',e);
				},
				'keydown.html' : function(e) {
					callBack.call(this,'onKeyDown',e);
				},
				'keyup.html' : function(e) {
					callBack.call(this,'onKeyUp',e);
				},
				'keypress.html' : function(e){
					callBack.call(this,'onKeyPress',e);
				},
				'mousewheel.html' : function(e){
					callBack.call(this,'onMouseWheel',e);	
				},
				'mouseenter.html' : function(e){
					callBack.call(this,'onMouseEnter',e);
				},
				'mouseleave.html' : function(e){
					callBack.call(this,'onMouseLeave',e);
				},
				'mouseover.html' : function(e){
					callBack.call(this,'onMouseOver',e);
				},
				'mouseout.html' : function(e){
					callBack.call(this,'onMouseOut',e);
				},
				'mousedown.html' : function(e) {
					callBack.call(this,'onMouseDown',e);
				},
				'mouseup.html' : function(e) {
					callBack.call(this,'onMouseUp',e);
				},
				'contextmenu.html' : function(e){	
					callBack.call(this,'onContextMenu',e);
				}
			};
			
			if( $.isArray( opt.denyEvents ) ) {
				$.each( opt.denyEvents,function(i,e){
					delete events[e];
				} );	
			}
			container.unbind('.html');
			container.bind(events);
			self.fireEvent("onSetContainerEvent",[container,opt]);
			return true;
		},
		__containerCreate : false,
		_containerWidth : null,
		_containerHeight : null,
		//容器创建时就应该立刻设置宽度
		_initSetContainerSize : function(){
			var self = this;
			var opt = self.configs;	
			
			self.__containerCreate = true;
			
			self.setContainerSize();
			
			self.__containerCreate = false;
			//清除缓存
			self._containerWidth = null;
			self._containerHeight = null;
		},
		_checkAutoSize : function(){
			var self = this;
			var opt = self.configs;	
			
			if( !self.rendered ) return false;
			
			if( opt.width === 'auto' || opt.height==='auto' ) {
				var r = self.setSize();
				if( r ) {
					return true;	
				}
			}
			
			return false;
		},
		//检测 width height auto时的maxWidth or maxHeight
		_autoSize : function(){
			var self = this;
			var opt = self.configs;	
			
			if( !self.rendered ) return this;
			
			var r = self._checkAutoSize();
			if( !r && opt._checkScrollBar ) {
				self.methodInvoke('setViewSize');		
			}	
			return this;	
		},
		addChild : function( items,after ){
			var bd = this.getBody();
			var opt = this.configs;
			this._checkToRender();
			this.addComponent( bd,items,after,opt.defaluts );	
			return this;
		},
		_add : function( item , after ){
			return this._insert.apply(this,arguments );	
		},
		add : function( item , after ){
			return this.insert.apply(this,arguments );	
		},
		append : function( item ){
			return this.insert( item,true );	
		},
		prepend : function( item ){
			return this.insert( item,false );	
		},
		_insert : function( item , after ){
			var self = this;
			var opt = self.C();	
			var lbody = self.getBody();
			
			self._checkToRender();
			
			var list = self.addComponent( lbody,item,after,opt.defaluts  );
			
			if( opt.__insertVt ) {
				clearTimeout(opt.__insertVt);	
			}
			opt.__insertVt = setTimeout( function(){
				self._autoSize();						 
			},0 );
			
			return list;
		},
		insert : function(item , after ){
			var self = this;
			var opt = self.configs;	
			var list = self._insert.apply(self,arguments );	
			self.fireEvent('onAddComponent',[ list,opt ]);
			return list;
		},
		_empty : function(){
			var self = this;
			var opt = self.configs;	
			var lbody = self.getBody();	
			
			lbody.empty();
			
			//self.removeCmp( false );
			Nex.gc();
			
			if( opt.__insertVt ) {
				clearTimeout(opt.__insertVt);	
			}
			opt.__insertVt = setTimeout( function(){
				self._autoSize();					 
			},0 );
			
			return self;
		},
		empty : function(){
			var self = this;
			var opt = self.configs;	
			var x = self._empty.apply(self,arguments );	
			self.fireEvent('onClearComponent',[ opt ]);
			return x;
		},
		_html : function( item , after ){
			this._empty();
			this._insert( item,after );
		},
		html : function( item , after ){
			this.empty();
			this.insert( item,after );
			return this;
		},
		update : function(){
			return this.html.apply( this,arguments );
		},
		removeAll : function(){
			return this.empty.apply(this,arguments );		
		},
		_setOverCls : function(){
			var self = this,
				opt = self.configs,
				container = this.el;
			if( opt.overCls ) {
				container.addClass( opt.overCls );	
			}
		},
		_unsetOverCls : function(){
			var self = this,
				opt = self.configs,
				container = this.el;
			if( opt.overCls ) {
				container.removeClass( opt.overCls );	
			}
		},
		_setBorder : function(){
			var opt = this.configs;
			var el = this.el;
			if( opt.border && $.type( opt.border ) === 'string' ) {
				el.css('border',opt.border);	
			}
			if( opt.borderStyle && typeof opt.borderStyle === 'object' ) {
				el.css( opt.borderStyle );	
			}
		},
		_setPadding : function(){
			var self = this,
				opt = self.configs;
			var ct = self.el;
			if( opt.padding !== null ) {
				ct.css('padding',opt.padding);
			}
		},
		_setMargin : function(){
			var self = this,
				opt = self.configs;
			var ct = self.el;
			if( opt.margin !== null ) {
				ct.css('margin',opt.margin);
			}
		},
		_setOverflow : function(){
			var self = this,
				opt = self.configs;
			var ct = self.el;
			if( opt.overflow ) {
				ct.css('overflow',opt.overflow);
			}	
		},
		_setAutoScrollCls : function(){
			var self = this,
				opt = self.configs;
			var ct = self.getBody();
			if( opt.autoScroll ) {
				ct.addClass(opt.autoScrollCls);
			}
		},
		focus : function(){
			var self = this,
				opt = this.configs,
				el;
			if( el = self.getBody() ) {
				if( opt.tabIndex === false || opt.tabIndex===null ) {
					el.attr({
						tabIndex : -1   
					});	
				}	
				el.focus();
			}	
			return self;
		},
		scrollLeft : function( sLeft ){
			var self = this,
				undef;
			self.scrollBy( sLeft,undef );	
			return self;
		},
		scrollToLeftEnd : function(){
			var self = this;
			var bd = $(self.getScrollView())[0];
			if( !bd ) {
				return self;	
			}
			var ch = bd.clientWidth;
			var sh = bd.scrollWidth;
			if( sh <= ch ){
				return self;	
			}
			
			var sTop = sh - ch;
			self.scrollLeft( sTop );
			return self;
		},
		scrollTop : function( sTop ){
			var self = this,
				undef;
			self.scrollBy( undef,sTop );	
			return self;	
		},
		scrollToTopEnd : function(){
			var self = this;
			var bd = $(self.getScrollView())[0];
			if( !bd ) {
				return self;	
			}
			var ch = bd.clientHeight;
			var sh = bd.scrollHeight;
			
			if( sh <= ch ){
				return self;	
			}
			
			var sTop = sh - ch;
			self.scrollTop( sTop );
			return self;
		},
		scrollBy : function(x,y,ani,func){
			var self = this,
				opt = this.configs,
				undef,
				func = func || $.noop,
				el = self.getScrollView();
			var pos = {};
			if( x !== undef ) {
				pos['scrollLeft'] = x;	
			}
			if( y !== undef ) {
				pos['scrollTop'] = y;	
			}
			
			if( !$.isEmptyObject( pos ) ) {
				if( ani === undef || ani <= 0 || !ani ) {
					/*el.animate( pos , 1 , function(){	
						func.call( self,el );
					});		*/
					for( var ac in pos ) {
						el[ac]( pos[ac] );
					}
					func.call( self,el );
				} else {
					el.animate( pos , Math.abs(ani) , function(){
						func.call( self,el );
					} );	
				}
			}
			return self;
		},
		setStyle : function( style ){
			this.el.css(style || {});
			return this;		
		},
		setBorder : function( str ){
			this.el.css('border',str);	
			return this;
		},
		addCls : function( s ){
			this.el.addClass( s );
			return this;	
		},
		addClass : function( s ){
			this.addCls( s );	
			return this;
		},
		removeCls : function( s ){
			this.el.removeClass( s );
			return this;		
		},
		removeClass : function( s ){
			this.removeCls( s );
			return this;		
		},
		_normalizeArguments : function( effect, options, speed, callback ){

			// allow passing all options as the first parameter
			if ( $.isPlainObject( effect ) ) {
				options = effect;
				effect = effect.effect;
			}
		
			// convert to an object
			effect = { effect: effect };
		
			// catch (effect, null, ...)
			if ( options == null ) {
				options = {};
			}
		
			// catch (effect, callback)
			if ( $.isFunction( options ) ) {
				callback = options;
				speed = null;
				options = {};
			}
		
			// catch (effect, speed, ?)
			if ( typeof options === "number" || $.fx.speeds[ options ] ) {
				callback = speed;
				speed = options;
				options = {};
			}
		
			// catch (effect, options, callback)
			if ( $.isFunction( speed ) ) {
				callback = speed;
				speed = null;
			}
		
			// add options to effect
			if ( options ) {
				$.extend( effect, options );
			}
		
			speed = speed || options.duration;
			effect.duration = $.fx.off ? 0 :
				typeof speed === "number" ? speed :
				speed in $.fx.speeds ? $.fx.speeds[ speed ] :
				$.fx.speeds._default;
		
			effect.complete = callback || options.complete;
		
			return effect;	
		},
		_standardAnimationOption : function( option ){
			// Valid standard speeds (nothing, number, named speed)
			if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
				return true;
			}
		
			// Invalid strings - treat as "normal" speed
			if ( typeof option === "string" && !$.effects.effect[ option ] ) {
				return true;
			}
		
			// Complete callback
			if ( $.isFunction( option ) ) {
				return true;
			}
		
			// Options hash (but not naming an effect)
			if ( typeof option === "object" && !option.effect ) {
				return true;
			}
		
			// Didn't match any standard API
			return false;	
		},
		_getStandardAnimationOption : function ( option,easing,callback ) {
			var data = {};
			
			// Options hash (but not naming an effect)
			if ( typeof option === "object" && !option.effect ) {
				data = option;
			}
			
			// Valid standard speeds (nothing, number, named speed)
			if ( typeof option === "number" || $.fx.speeds[ option ] ) {
				data.duration = option;
			}
			
			// Invalid strings - treat as "normal" speed
			if ( typeof option === "string" && !$.effects.effect[ option ] ) {
				data.duration = option in $.fx.speeds ? $.fx.speeds[ speed ] : $.fx.speeds._default;
			}
			
			//option,easing,callback
			if( typeof easing === "string" && !$.isFunction( easing ) ) {
				data.easing = easing in $.easing ? easing : 
								'def' in $.easing ? $.easing.def : 'swing';	
			}
			
			//option,callback
			if( $.isFunction( easing ) ) {
				data.complete = easing;	
			}
		
			// Complete callback
			if ( $.isFunction( callback ) ) {
				data.complete = callback;
			}
			// Didn't match any standard API
			return data;
		}, 
		hidden : false, 
		isVisible : function(){
			return !this.hidden;	
		},
		isHidden : function(){
			return this.hidden;	
		},
		_defaultShow : function( fn ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			var show_display = function(){
				container.show();	
			}
			var show_offsets = function(){
				container._show();		
			}
			var show_visibility = function(){
				container._visible(true);	
			}
			switch( opt.hideMode ) {
				case 'display' :
					show_display();
					break;
				case 'offsets' : 
					show_offsets();
					break
				case 'visibility' :
					show_visibility();
					break;
				default :
				show_display();			
			}
			
			container.show();
			
			if( $.isFunction( fn ) ) {
				fn();	
			}
			
			return self;		
		},
		_defaultHide : function( fn ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			var hide_display = function(){
				container.hide();	
			}
			var hide_offsets = function(){
				container._hide();		
			}
			var hide_visibility = function(){
				container._visible(false);	
			}
			switch( opt.hideMode ) {
				case 'display' :
					hide_display();
					break;
				case 'offsets' : 
					hide_offsets();
					break
				case 'visibility' :
					hide_visibility();
					break;
				default :
				hide_display();			
			}
			
			self.setAcceptResize( false );
			
			if( $.isFunction( fn ) ) {
				fn();	
			}
			
			return self;	
		},
		_animShow : function( fn,data,args ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			var data = data || {};	
				
			var isEffect = 'effect' in data;
			if( isEffect ) {
				data.mode = 'show'	
			}
			if( $.isFunction(fn) ) {
				data.complete = fn;
			}
			container.stop( true,true );
			
			isEffect ? container.effect( data ) : container[opt.showMethod].call( container,data );
			return self;
		},
		_animHide : function( fn,data,args ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			var data = data || {};	
				
			var isEffect = 'effect' in data;
			if( isEffect ) {
				data.mode = 'hide'	
			}
			if( $.isFunction(fn) ) {
				data.complete = fn;
			}
			container.stop( true,true );
			isEffect ? container.effect( data ) : container[opt.hideMethod].call( container,data );
			return self;
		},
		_getAnimateOptions : function(){
			var self = this;
			var args = [].slice.apply( arguments );
			if( typeof args[0] === 'boolean' ) {
				args.shift();
			}
			var data = self._standardAnimationOption.apply( self,args ) ? 
						self._getStandardAnimationOption.apply( self,args ) : 
						self._normalizeArguments.apply( self,args );	
			return data;			
		},
		_showBeforeEffect : function(){
			var el = this.el;	
			el._show();
			el.hide();
		},
		isShowing : false,
		onBeforeShow : function(){},
		//effect, speed, easing, callback
		show : function( option ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			var args = [].slice.apply( arguments );
			var data;
			
			var animate = typeof args[0] === 'boolean' ? args[0] : opt.animate;
			if( typeof args[0] === 'boolean' ) {
				args.shift();
			}
			
			if( self.isVisible() ) {//,arguments
				return self;	
			}
			
			if( self.fireEvent('onBeforeShow',[ opt ]) === false ) {//,arguments
				return self;	
			}
			
			self.onBeforeShow(opt);
			self.fireEvent('onStartShow',[ opt ]);
			
			self.hidden = false;
			self.isShowing = true;
			
			self._checkToRender();
			
			var complete = function(){
				self.isShowing = false;
				self.setAcceptResize( true );
				if( opt.autoResize ) {
					self.resetSize();
				}
				self.fireEvent('onShow',[ opt ]);	
			};
			data = self._getAnimateOptions.apply(self,args);
			
			data = $.extend( { duration : opt.animDuration,easing : opt.animEasing },opt._effect,opt.effect,opt.showEffect,data );
			var cb = data.complete;	
			data.complete = function(){
				complete();	
				if( $.isFunction( cb ) ) {
					cb.call( self );
				}
			}	
			//showFn
			var showFn = $.isFunction( opt.showFn ) ? opt.showFn : 
							animate ? self._animShow : self._defaultShow;
		
			self._showBeforeEffect();	

			showFn.call( self, data.complete, data, args );		
			
			return self;	
		},
		onBeforeHide : function(){},
		_hideBeforeEffect : function(){},
		//effect, speed, easing, callback
		hide : function( option ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			var args = [].slice.apply( arguments );
			var data;
			
			var animate = typeof args[0] === 'boolean' ? args[0] : opt.animate;
			if( typeof args[0] === 'boolean' ) {
				args.shift();
			}
			
			if( self.rendered && self.isHidden() ) {//,arguments
				return self;	
			}
			
			if( self.fireEvent('onBeforeHide',[ opt ]) === false ) {//,arguments
				return self;	
			}
			
			if( !self.rendered ) return self;
			
			self.onBeforeHide(opt);
			self.fireEvent('onStartHide',[ opt ]);
			
			self.hidden = true;
			
			self.setAcceptResize( false );
			
			//$.effects.save( container, ['display'] );
			
			var complete = function(){
				self.fireEvent('onHide',[ opt ]);		
				//if( animate ) {
				//	self._defaultHide( function(){
				//		$.effects.restore( container, ['display'] );
				//	} );
				//}
			};
			data = self._getAnimateOptions.apply(self,args);
			
			data = $.extend( { duration : opt.animDuration,easing : opt.animEasing },opt._effect,opt.effect,opt.hideEffect,data );
			var cb = data.complete;	
			data.complete = function(){
				
				complete();	
				if( $.isFunction( cb ) ) {
					cb.call( self );
				}
			}	
			//hideFn
			var hideFn = $.isFunction( opt.hideFn ) ? opt.hideFn : 
							animate ? self._animHide : self._defaultHide;
			//如果是自定义显示函数或者开启animate则需要调用	effect_before
			//if( animate || $.isFunction( opt.hideFn ) ) {
				self._hideBeforeEffect();		
			//}	
			hideFn.call( self, data.complete, data, args );		
			return self;		
		},
		effect : function(){
			this.el.effect.apply( this.el,arguments );
			return this;	
		}
	});
	
	return container;
});
/**
 * Nex.ProgressBar xtype: progressbar
 * @module Nex/ProgressBar
 * @xtype progressbar
 * @extends Nex.container.Container
 * @see http://www.nexui.cn
 * @author: nobo(505931977@qq.com)
 */
/**
 * @typedef configs
 * @property {number|false} tabIndex (null) 设置zIndex的值,设置false时不设置
 * @property {number|string} width (200) 宽度支持百分比eg : 100%
 * @property {number|string} height (16) 同width
 * @property {number} fontSize (null) 进度条显示的字体大小,
 * @property {array} bgColor ([]), 进度条颜色bgColor[0]:背景颜色,bgColor[1]:当前进度颜色
 * @property {number} value  (0) 当前进度
 * @property {string|tpl|function} text (<%=value%>%) 显示进度文字
 * @property {boolean} animate (false) 以动画的方式显示进度条
 * @property {string} animEasing (easeOutCubic) 显示方式
 * @property {number|false} animDuration (500) 动画执行时间
 */ 
define('Nex/ProgressBar',['require','Nex/container/Container'],function(require){
	require('Nex/container/Container');
		
	var ProgressBar = Nex.define('Nex.ProgressBar','Nex.container.Container',{
		/**
		 * @menmber
		 */
		xtype : 'progressbar',
		/**
		 * @member
		 * 配置参数
		 */
		configs : function(opt){
			return 	{
				prefix : 'nexprogressbar-',
				tabIndex : false,
				disabledItems : true,
				denyEvents : true,
				containerCls : opt.containerCls+' nex-progress',
				width : 200,
				height : 16,
				//设置背景颜色
				fontSize : null,
				bgColor : [],//'#E0E0E0','#16BC5C'
				textColor : [],//'#ccc','#FFF'
				/*进度条值0~100*/
				value : 0,
				/*进度条显示的文本内容*/
				text : '<%=value%>%',
				_defText : '&nbsp;',
				//默认不开启动画方式显示
				animate : false,
				animEasing : 'easeOutCubic',
				animDuration : 500
			};
		}
	});
	ProgressBar.override({
		/*禁用PADDING*/
		_setPadding : function(){},
		initComponent : function(){
			var self = this;
			var opt = this.configs;
			var el = this.el;
			
			self.callParent(arguments);
			
			var progress = Math.max(Math.min(parseFloat(opt.value, 10) || 0, 100), 0);
			
			opt.value = progress;
			
			if( Nex.isEmpty(opt.text) ) {
				opt.text = opt._defText;
			}
			
			var text = self.tpl( opt.text, { value : opt.value } ); 
			
			var html = [
				'<div id="',opt.id,'_bg" class="nex-progress-text nex-progress-bg">',text,'</div>',
				'<div id="',opt.id,'_bar" class="nex-progress-bar" style="width:',progress,'%;">',
					'<div id="',opt.id,'_text" class="nex-progress-text">',text,'</div>',
				'</div>'
			];
			
			el.html(html.join(''));
			
			self.setBackColor(opt.bgColor);
			
			self.setTextColor(opt.textColor);
			
			self.setFontSize(opt.fontSize);
			
		},
		doSetViewSize : function(){
			var self = this;
			var opt = this.configs;
			var el = self.el;
			var bg = $('#'+opt.id+'_bg');
			var bar = $('#'+opt.id+'_bar');
			var text = $('#'+opt.id+'_text'); 
			if( !self.isAutoWidth() ) {
				var w = el._width();
				bg._outerWidth( w );	
				text._outerWidth( w );	
			} else {
				bg._removeStyle('width');	
				text._removeStyle('width');	
			}
			if( !self.isAutoHeight() ) {
				var h = el._height();
				bg._outerHeight( h );	
				bar._outerHeight( h );	
				text._outerHeight( h );	
			} else {
				bg._removeStyle('height');		
				bar._removeStyle('height');	
				text._removeStyle('height');	
			}			
		},
		/**
		 * 设置进度条颜色
		 * @param {array} color color[0]:背景颜色,color[1]:进度条颜色
		 * @return self
		 */
		setBackColor : function(color){
			var opt = this.configs;
			var $bg = $('#'+opt.id+'_bg');
			var $bar = $('#'+opt.id+'_bar');
			var color = Nex.isArray(color) ? color : [color];
			if( color[0] ) {
				$bg.css('backgroundColor', color[0]);
			}
			if( color[1] ) {
				$bar.css('backgroundColor', color[1]);
			}
			return this;
		},
		/**
		 * 设置进度条文本颜色
		 * @param {array} color color[0]:背景文字颜色,color[1]:进度条文字颜色
		 * @return self
		 */
		setTextColor : function(color){
			var opt = this.configs;
			var $bg = $('#'+opt.id+'_bg');
			var $text = $('#'+opt.id+'_text');
			var color = Nex.isArray(color) ? color : [color];
			if( color[0] ) {
				$bg.css('color', color[0]);
			}
			if( color[1] ) {
				$text.css('color', color[1]);
			}
			return this;
		},
		/**
		 * 设置进度条文本字体大小
		 * @param {number} size 
		 *@return {this}
		 */
		setFontSize : function(size){
			var opt = this.configs;
			var $bg = $('#'+opt.id+'_bg');
			var $text = $('#'+opt.id+'_text');
			if( size ) {
				$bg.css('fontSize', size);
				$text.css('fontSize', size);
			}	
			return this;
		},
		/**
		 * 获取当前进度值
		 * @return {number}
		 */
		getProgress : function(){
			return this.configs.value;	
		},
		/**
		 * updateProgress的别名
		 */
		setProgress : function(){
			return this.updateProgress.apply(this, arguments);	
		},
		/**
		 * getProgress的别名
		 */  
		getValue : function(){
			return this.configs.value;		
		},
		/**
		 * updateProgress的别名
		 */
		setValue : function(){
			return this.updateProgress.apply(this, arguments);	
		},
		/**
		 *更新进度条显示文字
		 * @param {string|tpl|function} text
		 */
		updateText : function(text){
			var self = this;
			var opt = this.configs;
			if( Nex.isDefined(text) ) {
				opt.text = text;
			} else {
				text = opt.text;
			}
			
			text = self.tpl( text, { value : opt.value } );	
		
			var $bg = $('#'+opt.id+'_bg');
			var $text = $('#'+opt.id+'_text'); 
			$bg.html(text);
			$text.html(text);
			return self;
		},
		/**
		 *更新进度条
		 *@param {number} value 进度条数值
		 *@param {string|tpl|function} text 可选 进度条文字 如果是Boolean则当作anim 
		 *@param {boolean} anim 可选 是否动画显示
		 *@return {this}
		 */
		updateProgress : function(value, text, anim){
			var self = this;
			var opt = this.configs;	
			var $bar = $('#'+opt.id+'_bar');
			
			var value = Math.max(Math.min(parseFloat(Nex.unDefined(value, opt.value),10) || 0, 100), 0);
			
			var anim = Nex.unDefined(Nex.isBoolean(text) ? text : anim, opt.animate);
			
			if( opt.value != value ) {
				self.fireEvent('onProgressChange', [value]);	
			}
		
			opt.value = value;
			
			$bar.stop(true, true);
			
			if( anim ) {
				$bar.animate({
					width : value+'%'	
				}, opt.animDuration, opt.animEasing);	
			} else {
				$bar.css('width', value + '%');	
			}
			
			if( Nex.isDefined(text) && !Nex.isBoolean(text) ) {
				self.updateText(text);	
			} else {
				self.updateText();		
			}
			
			return self;
		},
		_wt : 0,
		/**
		 * 设置一个循环等待进度条
		 * @param {object} setting object设置参数:
		 * {
		 *	duration : 2000,//每次进度条完成时间
		 *   easing : 'swing',
		 *	text : '请稍候...',//等待时显示的文本
		 * }
		 * @return {function}
		 */
		wait : function(setting){
			var self = this;
			var opt = this.configs;	
			var setting = $.extend({
				duration : 2000,
				text : '',
				easing : 'swing'	
			},setting || {});
			if( !setting.duration ) return self;
			var stop = false;
			clearTimeout(self._wt);
			var loop = function(){
				if( stop ) {
					self.updateProgress(0, '', false);
					clearTimeout(self._wt);
					return;	
				}
				self.updateProgress(0, '', false);
				opt.animDuration = setting.duration;
				opt.animEasing = setting.easing;
				self.updateProgress(1000, setting.text, true);
				self._wt = setTimeout(function(){
					loop();	
				},setting.duration)
			}
			loop();
			return function(text){
				stop = true;
				loop();	
				if( text ) {
					self.updateText(text);	
				}
			};
		}
	});
	
	return ProgressBar;
});	
/*
jquery.nexPanel.js
http://www.extgrid.com/panel
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱

*/
define('Nex/panel/Panel',['require','Nex/container/Container'],function(require){
	require('Nex/container/Container');

	var panel = Nex.define('Nex.panel.Panel',{
		extend : 'Nex.container.Container',
		alias : 'Nex.Panel',
		xtype : 'panel',
		configs : function(opt, t){
			return {
			prefix : 'nexpanel-',
			autoDestroy : true,
			autoResize : true,
			_hasBodyView : true,
			_checkScrollBar : false,
			border : true,
			borderCls : [opt.borderCls,'nex-panel-border'].join(' '),
			containerCls : [opt.containerCls,'nex-panel'].join(' '),
			autoScrollCls : [opt.autoScrollCls,'nex-panel-auto-scroll'].join(' '),
			autoWidthCls : [opt.autoWidthCls,'nex-panel-auto-width'].join(' '),
			autoHeightCls : [opt.autoHeightCls,'nex-panel-auto-height'].join(' '),
			autoScroll : false,
			tabIndex : -1,
			showShadow : false,
			shadowCls : 'nex-panel-shadow',
			toolbarCls : '',
			tbar : null,//top bar
			bbar : null,//bottom bar
			rbar : null,//未实现
			lbar : null,//未实现
			tools: [],//小工具 { icon:'',iconCls:'',tips:'',disabled:false,handler:null,attrs:null }
			toolsItems : null,//更自由的自定义tools组件
			toolTipsTag : 'title',
			closable 	: false,
			closeToRemove : true,//关闭销毁 使用closeAction来代替 true=destroy  false=hide
			closeFn : null,//自定义关闭函数
			animCollapse : true,//动画形式折叠
			durationCollapse : 200,//动画形式折叠
			easingCollapse : 'easeOutQuad',
			collapsible : false,//折叠icon
			collapsed   : false,//默认显示是是否折叠
			collapsedCls: '',
			title : '',
			
			showHeader : 'auto', //自动判断 如果title内容为空 则不显示
			
			headerSelectionable : true,
			bodySelectionable : true,
			footerCls : '',
			footerItems : null,
			
			items : [],
			renderTo : document.body,//window
		
			views : {},
			
			headerCls : '',
			icon : '',
			iconCls : '',
	
			iconTag : 'span',
			
			minWidth : function(){
				var header = this.getHeader();
				if( !header ) return 0;
				var w = 0;
				$('.nex-window-tools,.nex-panel-title-icon,.nex-panel-title-text',header).each( function(){
					w += $(this).width() || 0;
				} );
				return w;
			},
			
			bodyPadding : null,
			bodyCls : '',
			bodyStyle : {},
			autoSize : false,
			width : 'auto',
			height : 'auto'
			//denyEvents : ['scroll'],
			//events : {}
		};
		}		
	});
	panel.override({
		initComponent : function(){
			
			this.callParent(arguments);
			
			this.initPanel();
			
		}, 
		initPanel : function(){
			var self = this,
				opt=this.configs;
			/*初始化样式表*/
			self.initStyleSheet();	
			
			self.initCss();	
				
			self.setHeader();
			
			self.setBody();
			
			self.setToolbars();
			
			self.setFooter();
			
			return self;
		},
		onCreate : function(){
			this.callParent(arguments);
			this._afterCreate();	
		},
		//sysEvents : function(){
//			var self = this;
//			var opt = self.configs;
//			
//			self.callParent( arguments );
//			
//			return self;
//		},
		onContainerCreate :　function(el, opt){
			var self =this;
			
			self.callParent( arguments );
			
			self._setShadow(el, opt);
				
		},
		_afterCreate : function(){
			var self = this;
			var opt = self.configs;
			if( opt.collapsed ) {
				self.collapse( false );
			}	
		},
		_setShadow : function( el,opt ){
			if( opt.showShadow ) {
				el.addClass( opt.shadowCls );	
			}	
		},
		_getIconTpl : function(_icon){
			var opt = this.configs;
			return '<'+opt.iconTag+' class="nex-panel-icon nex-panel-title-icon '+opt.iconCls+'" style="'+_icon+'"></'+opt.iconTag+'>';		
		},
		initStyleSheet : function(){
			var self = this;
			var el = self.el;
			var opt = this.configs;	
			if( opt.views['stylesheet'] ) return self;
			var $sheet = $('<style id="'+opt.id+'_stylesheet" type="text/css"></style>');
			opt.views['stylesheet'] = $sheet;
			el.append($sheet);
			return self;	
		},
		getStyleSheet : function(){
			return this.configs.views['stylesheet'];	
		},
		addCssRules : function(selector,cssText){
			var self = this;
			var opt = this.configs;
			var style = self.getStyleSheet().get(0);
			var args = [].slice.apply(arguments);
			var noSelector = args.length == 1;
			var cssText = noSelector ? selector : cssText;
			if( style ) {
				if( noSelector ) {
					selector = ['#'+opt.id];
				} else {
					selector = selector.split(',');
					$.each(selector, function(i, s){
						selector[i] = '#'+opt.id+' '+s;	
					});
				}
				Nex.addCssRules(
					style,
					selector.join(','),
					cssText
				);
			}	
			return self;	
		},
		initCss : function(){},
		renderedHeader : false,
		setHeader : function(){
			var self = this,
				opt=this.configs;
			var container = opt.views['container'];
			
			var showHeader = opt.showHeader;
			
			opt.tools = $.isArray(opt.tools) ? opt.tools : [ opt.tools ];
			
			if( showHeader == 'auto' ) {
				if( opt.toolsItems || 
					opt.tools.length ||
					opt.title ||
					opt.icon || 
					opt.iconCls ) {
					showHeader = true;
				} else {
					showHeader = false;	
				}
			}
			
			if( showHeader === false ) return self;
			
			if( this.renderedHeader ) return self;
			var icon = '';
			if( opt.icon || opt.iconCls ) {
				var _icon = '';
				if( opt.icon ) {
					_icon = 'background-image:url('+opt.icon+')';	
				}
				icon = self._getIconTpl(_icon);	
			}
			
			var header = $('<div class="nex-panel-header '+opt.headerCls+'" id="'+opt.id+'_header"><div class="nex-panel-tools"></div><div class="nex-panel-header-title">'+icon+'<span class="nex-panel-title-text"></span></div></div>');
			
			opt.views['header'] = header;
			opt._vviews['header'] = header;
			
			container.prepend(header);
			
			this.renderedHeader = true;
			
			if( !opt.headerSelectionable ) {
				header.disableSelection();
			}
			if( opt.title ) {
				self.addComponent( $('.nex-panel-title-text',header),opt.title );
			}
			var hasTools = self._setTools();
			
			self.onHeaderCreate(header, opt);
			
			self.fireEvent("onHeaderCreate",[header,opt]);
			/*
			if( opt.showHeader == 'auto' ) {
				if( !hasTools && !opt.title && !opt.icon && !opt.iconCls ) {
					showHeader = false;
				}
			}*/
			if( !showHeader ) {
				self._hideHeader();
			}
			
			self.setHeaderEvent(header, opt);
			
			return self;
		},
		onHeaderCreate : function(){},
		setHeaderEvent : function(header, opt){
			var self =this;
			
			var callBack = function(type,e){
				var r = self.fireEvent(type,[ this,e,opt ]);
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
			};
			
			header.unbind('.ph');
			header.bind({
				'click.ph' : function(e){
					callBack.call(this, 'onHeaderClick', e);	
				},	
				'dblclick.ph' : function(e){
					callBack.call(this, 'onHeaderDblClick', e);	
				},
				'mouseover.html' : function(e){
					callBack.call(this,'onHeaderMouseOver',e);
				},
				'mouseout.html' : function(e){
					callBack.call(this,'onHeaderMouseOut',e);
				},
				'mousedown.html' : function(e) {
					callBack.call(this,'onHeaderMouseDown',e);
				},
				'mouseup.html' : function(e) {
					callBack.call(this,'onHeaderMouseUp',e);
				},
				'contextmenu.ph' : function(e){
					callBack.call(this, 'onHeaderContextMenu', e);		
				}
			});	
			
			$('>.nex-panel-tools', header).bind({
				click : function(e){
					e.stopPropagation();
					e.preventDefault();
					$(document).trigger('click', [e]);
				}	
			});
			
			self.fireEvent('onSetHeaderEvent',[ header, opt ]);
			
		},
		_setSysTools : function( tools ){
			var self = this,
				opt=this.configs;
			var header = opt.views['header'];			
			var $tools = $('>.nex-panel-tools',header);
			if( opt.collapsible ) {
				tools.push( {
					iconCls : 'tools-collapse-icon',
					handler : function(){
						self.toggleCollapse();	
					}
				} );	
				self.unbind('.collapse');
				self.bind('onCollapse.collapse',function(){
					$('>.tools-collapse-icon',$tools).addClass('tools-expand-icon');	
				},self);
				self.bind('onExpand.collapse',function(){
					$('>.tools-collapse-icon',$tools).removeClass('tools-expand-icon');	
				},self);
			}
			
			if( opt.closable ) {
				tools.push( {
					iconCls : 'tools-close-icon',
					handler : function(){
						self.close();	
					}
				} );	
			}
			
			return tools;
		},
		/*
		*private
		*/
		_setTools : function(){
			var self = this,
				opt=this.configs;
			var header = opt.views['header'];	
			var tools = $('>.nex-panel-tools',header);
			//var hasTools = false;
			//更自由的设置tools
			if( opt.toolsItems ) {
				//hasTools = true;
				self.addComponent( tools,opt.toolsItems );
			}
			var _tools = opt.tools;
			_tools = self._setSysTools(_tools);
			//tools图标按钮  toolTipsTag
			for( var i=0;i<_tools.length;i++ ) {
				var _d = {
					icon : '',
					iconCls : '',
					tips : '',
					attrs : null,
					disabled : false,
					handler : null,
					callback : null,//兼容
					callBack : null //兼容
				};
				var iconData = 	opt.tools[i];
				
				if( typeof iconData !== 'object' ) {
					continue;	
				}
				
				//hasTools = true;
				
				iconData = $.extend( _d,iconData );
				
				var _icon = '';
				if( iconData.icon ) {
					_icon = 'background-image:url('+iconData.icon+')';	
				}
			
				var $icon = $('<a class="nex-panel-icon '+iconData.iconCls+'" hideFocus=true href="javascript:void(0)" style="'+_icon+'"></a>');
				
				tools.append( $icon );
				
				if( iconData.disabled ) {
					$icon.addClass('nex-panel-icon-disabled');	
				}
				
				if( iconData.tips ) {
					$icon.attr( opt.toolTipsTag, Nex.htmlEncode(iconData.tips) );	
				}
				if( iconData.attrs ) {
					$icon.attr( iconData.attrs );
				}
				
				(function(icd,el){
					el.click(function(e){
						if( el.hasClass('nex-panel-icon-disabled') ) return;
						var _r;
						if( $.isFunction( icd.handler ) ) {
							var r = icd.handler.call( self,el,e );
							if( r === false ) _r = r; 	
						}	
						if( $.isFunction( icd.callBack ) ) {
							var r = icd.callBack.call( self,el,e );
							if( r === false ) _r = r;
						}	
						if( $.isFunction( icd.callback ) ) {
							var r = icd.callback.call( self,el,e );
							if( r === false ) _r = r;
						}
						if( _r === false ) {
							e.stopPropagation();
							e.preventDefault();	
						}					 
					});	
				})(iconData,$icon);
			}
			return self;
		},
		_headerHasShow : true,
		_showHeader : function(){//renderedHeader
			var self = this,
				opt=this.configs,
				header = opt.views['header'];
				
			if( !self.rendered ) {
				opt.showHeader = true;	
				return self;	
			}	
			
			if( !self.renderedHeader ) {
				opt.showHeader = true;	
				self.setHeader();
				return self;
			}
				
			header._show()
				  .show();
			this._headerHasShow = true;	  
			opt._vviews['header'] = header;
			return this;	  
		},
		_hideHeader : function(){
			var self = this,
				opt = this.configs,
				header = opt.views['header'];	
			if( !self.renderedHeader ) {
				return self;
			}	
			header._hide()
				  .hide();
			this._headerHasShow = false;	 	  
			opt._vviews['header'] = null;	
			return this; 
		},
		showHeader : function(){
			this._showHeader()
				.methodInvoke('resetViewSize');	
			return this;	
		},
		hideHeader : function(){
			this._hideHeader()
				.methodInvoke('resetViewSize');	
			return this;	
		},
		renderedBody : false,
		setBody : function(){
			var self = this;
			var opt = self.configs;	
			
			if( this.renderedBody ) {
				return self;	
			}
			
			var container = opt.views['container'];
			var bd = $( '<div class="nex-panel-body '+opt.bodyCls+'" id="'+opt.id+'_body"></div>' );
			opt.views['body'] = bd;
			container.append(bd);
			
			this.renderedBody = true;
			
			bd.css(opt.bodyStyle);
			bd.css('padding',opt.bodyPadding);
			//bodySelectionable
			if( !opt.bodySelectionable ) {
				bd.disableSelection();
			}
			self.bindBodyEvents();	 
			self.onBodyCreate( bd,opt );
			self.fireEvent("onBodyCreate",[bd,opt]);
			return self;
		},
		onBodyCreate : function(){},
		renderedToolbars : false,
		setToolbars : function(){
			var self = this;
			var opt = self.configs;	
			
			if( this.renderedToolbars ) {
				return self;	
			}
			
			if( opt.tbar ) {
				var tbar = $.isArray( opt.tbar ) ? opt.tbar : [opt.tbar];
				self._setToolbar(tbar,'top');
			}
			if( opt.bbar ) {
				var bbar = $.isArray( opt.bbar ) ? opt.bbar : [opt.bbar];
				self._setToolbar(bbar,'bottom');
			}
			if( opt.lbar ) {
				var lbar = $.isArray( opt.lbar ) ? opt.lbar : [opt.lbar];
				self._setToolbar(lbar,'left');
			}
			if( opt.rbar ) {
				var rbar = $.isArray( opt.rbar ) ? opt.rbar : [opt.rbar];
				self._setToolbar(rbar,'right');
			}
			
			this.renderedToolbars = true;
			
			self.fireEvent("onToolbarCreate",[opt]);
			
			return self;	
		},
		//pos=top bottom left right
		_setToolbar : function( items,pos ){
			var self = this;
			var opt = self.configs;	
			var in_pos = ['top','bottom','left','right'];
			var bd = opt.views['body'];
			pos = $.inArray( pos,in_pos ) === -1 ? 'top' : pos;
			var tid = opt.id+'_toolbar_'+pos;
			var  tb = $('#'+tid);
			if( !tb.length ) {
				tb = $( '<div class="nex-panel-toolbar nex-panel-toolbar-'+pos+' '+opt.toolbarCls+'" id="'+tid+'"></div>' );
				if( pos === 'top' ) {
					bd.before( tb );	
				} else {
					bd.after( tb );	
				}
				switch( pos ) {
					case 'top' :
						opt.views['tbar'] = tb;
						opt._vviews['tbar'] = tb;
						break;	
					case 'bottom' :
						opt.views['bbar'] = tb;
						opt._vviews['bbar'] = tb;
						break;	
					case 'left' :
						opt.views['lbar'] = tb;
						opt._hviews['lbar'] = tb;
						break;	
					case 'right' :
						opt.views['rbar'] = tb;
						opt._hviews['rbar'] = tb;
						break;		
				}
			}
			var cmps = self.addComponent( tb,items );
			$.each( cmps,function(i,cmp){
				if( Nex.isInstance( cmp ) ) {
					cmp.C('parent',opt.id);	
				}	
			} );
			return self;
		},
		/*
		*设置一个基于横向的视图 
		*/
		_setHorizontalView : function( name,el ){
			var opt=this.configs;
			//opt.views[ name ] = el;
			opt._hviews[ name ] = el;
			return self;
		},
		/*
		*设置一个基于竖向的视图
		*/
		_setVerticalView : function( name,el ){
			var opt=this.configs;
			//opt.views[ name ] = el;
			opt._vviews[ name ] = el;
			return self;	
		},
		_removeHorizontalView : function( name ){
			var opt=this.configs;
			//opt.views[ name ] = null;
			opt._hviews[ name ] = null;
			//delete opt.views[ name ];
			delete opt._hviews[ name ];
			return self;
		},
		_removeVerticalView : function( name ){
			var opt=this.configs;
			//opt.views[ name ] = null;
			opt._vviews[ name ] = null;
			//delete opt.views[ name ];
			delete opt._vviews[ name ];
			return self;	
		},
		setHorizontalView : function( a,b ){
			this._setHorizontalView( a,b );	
			this.resetViewSize();
			return this;
		},
		setVerticalView : function( a,b ){
			this._setHorizontalView( a,b );	
			this.resetViewSize();
			return this;
		},
		removeHorizontalView : function( a ){
			this._removeHorizontalView( a );	
			this.resetViewSize();
			return this;
		},
		removeVerticalView : function( a ){
			this._removeVerticalView( a );	
			this.resetViewSize();
			return this;
		},
		_getDiffWidth : function(){
			var opt=this.configs;
			var dw = this.callParent(arguments);
			return dw + (opt.views['rbar'] ? opt.views['rbar']._outerWidth() : 0);	
		},
		doSetViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			var container = self.el;	
			var bd = self.getBody();	
			
			self.callParent(arguments);
			
			if( !self.isAutoWidth() ) {
				var w = 0;
				$.each( opt._hviews,function(k,el){
					if( !el ) return;	
					w += el._outerWidth();
				} );
				
				bd._outerWidth( container._width() - w );
			} else {
				bd._removeStyle('width');
			}
			if( !self.isAutoHeight() ) {
				var h = 0;
				$.each( opt._vviews,function(k,el){
					if( !el ) return;	
					h += el._outerHeight();
				} );
				bd._outerHeight( container._height()-h );
			} else {
				bd._removeStyle('height');	
			}
			/*设置 左右工具栏位置*/
			var offset = bd._position();
			if( opt.views['lbar'] ) {
				var tb = opt.views['lbar'];
				bd.css('marginLeft',tb._outerWidth());	
				tb._outerHeight( bd._outerHeight() );
				tb.css({
					left : parseFloat(container.css('paddingLeft')) || 0,
					top : offset.top	
				});
			}
			if( opt.views['rbar'] ) {
				var tb = opt.views['rbar'];
				tb._outerHeight( bd._outerHeight() );
				tb.css({
					right : parseFloat(container.css('paddingRight')) || 0,
					top : offset.top	
				});	
			}
		},
		bindBodyEvents : function(){
		},
		renderedFooter : false,
		setFooter : function(){
			var self = this,undef;
			var opt = self.C();	
			var container = opt.views['container'];
			
			if( this.renderedFooter ) return self;
			
			if( !opt.footerItems ) return self;
			
			var footerItems = opt.footerItems;
			
			var footer = $('<div class="nex-panel-footer '+opt.footerCls+'" id="'+opt.id+'_footer"></div>');
			opt.views['footer'] = footer;
			opt._vviews['footer'] = footer;
			container.append(footer);	
			
			this.renderedFooter = true;
			
			self.addComponent( footer,footerItems );
			
			self.onFooterCreate(footer, opt);
			
			self.fireEvent("onFooterCreate",[footer,opt]);
			
			return self;
		},
		onFooterCreate : function(){},
		setTitle : function( s,m ){
			var self = this;
			var opt = this.configs;
			var o = opt.title;
			if( !self.rendered || !self.renderedHeader ) {
				opt.title = s;
				return self;	
			}
			var header = self.getHeader();	
			var inner = $('.nex-panel-title-text',header);
			
			opt.title = s;
			
			inner.empty();
			if( m ) {
				Nex.gc();
			}
			
			self.addComponent( inner,s );
			
			self.fireEvent('onTitleChange',[ s,o,opt ]);
			
			return self;
		},
		setIcon : function( s ){
			var self = this;
			var opt = this.configs;
			var o = opt.icon;
			if( !self.rendered || !self.renderedHeader ) {
				opt.icon = s;
				return self;	
			}
			var header = self.getHeader();	//nex-panel-title-icon
			var inner = $('.nex-panel-title-icon',header);
			if( !inner.length ) {
				inner = $( self._getIconTpl() );	
				$('.nex-panel-header-title',header).prepend( inner );
			}
			
			opt.icon = s;
			
			inner.css('backgroundImage','url('+s+')');
			
			self.fireEvent('onIconChange',[ s,o,opt ]);
			
			return self;
		},
		setIconCls : function( s ){
			var self = this;
			var opt = this.configs;
			var o = opt.iconCls;
			if( !self.rendered || !self.renderedHeader ) {
				opt.iconCls = s;
				return self;	
			}
			var header = self.getHeader();	//nex-panel-title-icon
			var inner = $('.nex-panel-title-icon',header);
			if( !inner.length ) {
				inner = $( self._getIconTpl() );	
				$('.nex-panel-header-title',header).prepend( inner );
			}
			
			inner.removeClass( o );
			
			opt.iconCls = s;
			
			inner.addClass(s);
			
			self.fireEvent('onIconClsChange',[ s,o,opt ]);
			
			return self;
		},
		getHeader : function(){
			var opt = this.configs;
			return opt.views['header'] || null;	
		},
		getBody : function(){
			var opt = this.configs;
			return opt.views['body'];
		},
		getFooter : function(){
			var opt = this.configs;
			return opt.views['footer'];	
		},
		getToolbar : function( pos ){
			var opt = this.configs;
			var maps = {
				'top' 	 : 'tbar',
				'bottom' : 'bbar',
				'left'	 : 'lbar',
				'right'  : 'rbar'
			};
			return opt.views[maps[ pos ]];		
		},
		_close : function( fn,data ){
			this.hide( data );
		},
		"close" : function(){
			var self = this;
			var opt = this.configs;
			
			var data = self._getAnimateOptions.apply(self,arguments);
			
			var call = function(){
					if( opt.closeToRemove ) {
						self.destroy();	
					}	
					self.fireEvent('onClose',[ opt ]);	
				};
				
			var cb = data.complete;
			data.complete = function(){
				if( $.isFunction(cb) ) {
					cb.call( self );
				}
				call();	
			};	
			
			if( this.fireEvent('onBeforeClose',[ opt ]) !== false ) {
				$.isFunction( opt.closeFn ) ? 
					opt.closeFn( data.complete,data,arguments ) : 
					this._close( data.complete,data,arguments );	
			}	
			return self;
		},
		/*移除*/
		remove : function(){
			this.configs.closeToRemove = true;
			return this.close();
		},
		onSizeChange : function(){
			this.callParent(arguments);
			var container = this.el;	
			if( this.collapsed/* || this.isCollapsingOrExpanding*/ ) {
				var resetHeight = container.height();
				container.data('__resetHeight__',resetHeight);	
			}
			if( this.collapsed ) {
				this.collapsed = false;
				this.collapse(false);	
			}
		},
		//无效。。。
		isCollapsingOrExpanding : false,
		collapsed : false,
		/*
		*展开
		*/
		expand : function( anim ){
			var self = this;
			var opt = this.configs;
			
			if( !self.collapsed/* || self.isCollapsingOrExpanding*/ ) {
				return self;	
			}
			
			if( self.fireEvent('onBeforeExpand',[ opt ]) === false ) {
				return self;	
			}
			
			self.fireEvent('onExpanding',[ opt ]);
			
			anim = self._undef( anim,opt.animCollapse );
			
			var container = self.el;	
			var header = self.getHeader();	
			
			container.stop(true,true);
			
			self.collapsed = false;
			
			//self.isCollapsingOrExpanding = true;
			
			var hh = self._headerHasShow && header ? header.outerHeight() : 0;
			
			var fn = function(){
				//self.isCollapsingOrExpanding = false;
				self.resetSize();
				self.setAcceptResize( true );	
				container.removeClass( 'nex-panel-collapsed '+opt.collapsedCls );
				self.fireEvent('onExpand',[ opt ]);	
			};
			if( anim ) {			
				container.animate({
					height : container.data('__resetHeight__') || hh
				},opt.durationCollapse,opt.easingCollapse,function(){
					fn();
				});
			} else {
				container.height( container.data('__resetHeight__') || hh );
				fn();
			}
			return self;
		},
		/*
		*折叠
		*/
		collapse : function( anim ){
			var self = this;
			var opt = this.configs;
			
			if( self.collapsed/* || self.isCollapsingOrExpanding*/ ) {
				return self;	
			}
			
			if( self.fireEvent('onBeforeCollapse',[ opt ]) === false ) {
				return self;	
			}
			
			self.fireEvent('onCollapsing',[ opt ]);
			
			anim = self._undef( anim,opt.animCollapse );
			
			var container = self.el;	
			var header = self.getHeader();	
			
			container.stop(true,true);
			
			self.collapsed = true;	
			
			var resetHeight = container.height();
			container.data('__resetHeight__',resetHeight);
			
			self.setAcceptResize( false );
			
			var hh = self._headerHasShow && header ? header.outerHeight() : 0;
			
			//self.isCollapsingOrExpanding = true;
			
			var fn = function(){
				//self.collapsed = true;	
				//self.isCollapsingOrExpanding = false;
				self.fireEvent('onCollapse',[ opt ]);	
			};
			container.addClass( 'nex-panel-collapsed '+opt.collapsedCls );
			if( anim ) {	
				container.animate({
					height : hh
				},opt.durationCollapse,opt.easingCollapse,function(){
					fn();
				});
			} else {
				container.height( hh );
				fn();
			}
			return self;
		},
		toggleCollapse: function( anim ) {
			var self = this;
			var opt = this.configs;
			/*if (self.isCollapsingOrExpanding) {
				return self;
			}*/
			if (self.collapsed) {
				self.expand(anim);
			} else {
				self.collapse(anim);
			}
			return self;
		}
	});
	
	return panel;
});
define('Nex/form/Manager',['require','Nex'],function(require){
	require('Nex');	

	var FormManager = Nex.define('Nex.form.Manager',{
		singleton : true,//单例模式
		extend : 'Nex.EventObject',
		alias : 'Nex.FormManager',
		configs : function(opt){
			return {
				fieldList : {}
			};
		},
		isExists : function(id){
			if( !$( "#"+id ).length ) {
				return false;
			}	
			return true;
		},
		add : function(cmp){
			var opt = this.configs;
			opt.fieldList[ Nex.isInstance(cmp) ? cmp.configs.id : cmp ] = true;		
		},
		remove : function(cmp){
			var opt = this.configs;
			opt.fieldList[ Nex.isInstance(cmp) ? cmp.configs.id : cmp ] = null;
			delete opt.fieldList[ Nex.isInstance(cmp) ? cmp.configs.id : cmp ];		
		},
		/*
		*根据name , group 获取输入框对象
		*@param {string} 输入框name
		*@param {string} 输入框分组
		*@return {array}
		*/
		get : function(name,group){
			var self = this,
				opt = this.configs,
				undef;
			if( name === undef ) return [];
			
			var group = Nex.unDefined( group , 'default' );
			
			var ls = [];
			
			var list = opt.fieldList;
			for( var id in list ) {
				var cmp = Nex.getCmp(id);
				//var fields = list[ group ];
				if( !cmp ) {
					delete list[id];
					continue;	
				}
				var _opt = cmp.configs;
				var _name = _opt.name;
				var _group = String( _opt.group ).split(/\s+|,/);
				if( String( _name ) === String( name ) && $.inArray( String( group ), _group ) !== -1 ) {
					ls.push(cmp);		
				}
			}
			return ls;//ls.length == 1 ? ls[0] : ls
		},
		/*
		*用法同get只是find只会取第一个并返回
		*/
		"find" : function(){
			var re = [];
			re = this.get.apply( this,arguments );	
			return re.length ? re[0] : null;
		},
		/*
		*@m 如果为true则多个数据不转换字符串
		*/
		getVal : function(name,group,m){
			var self = this;
			if( $.type( group ) !== 'string' || group === '' ) {
				group = 'default';	
			}
			var obj = self.get.apply(self,[ name,group ]);
			var val = [];
			var m = Nex.unDefined( m,false );
			if( $.isArray(obj) ) {
				$.each(obj,function(){
					var _val = this.val();
					if( _val !== '' ) {
						val.push( _val );	
					}
				});
				var _v = {};
				var _s = false;
				$.each( val,function(i,value){
					if( $._isPlainObject( value ) ) {
						_s = true;
						$.each( value,function(k,v){
							_v[k] = _v[k] || [];
							_v[k].push( v );					   
						} );	
					} else {
						_v[name] = _v[name] || [];
						_v[name].push( value );
					}			 
				} );
				if( !_s ) {
					_v[name] = _v[name] || [];
					val = !m ? _v[name].join(',') : _v[name];		
				} else {
					val = _v;	
					if( $._isPlainObject( val ) ) {
						$.each( val,function(x,d){
							d = d || [];
							d[x] = !m ? d.join(',') : d;	
						} );
					}
				}
				return val;	
			}
			return {};
		},
		getValue : function(){
			return this.getVal.apply( this,arguments );	
		},
		setVal : function(value,name,group){
			var self = this;
			var obj = self.get.apply(self,[arguments[1],arguments[2]]);
			var val = [];
			if( $.isArray(obj) ) {
				$.each(obj,function(i,f){
					if( $.isArray( value ) ) {
						this.val(Nex.unDefined(value[i],''));	
					} else {
						this.val(value);
					}
				});
				return true;
			}
			return null;
		},
		setValue : function(){
			return this.setValue.apply( this,arguments );		
		},
		/*
		*@param {string} 分组 默认default
		*@param {boolean} 默认 false 不获取disabled的输入框 如果为true则获取
		*@param {boolean} 默认 false 返回组件 否则返回name
		*/
		getGroup : function(group,m,t){
			var self = this,opt=this.configs;
			var group = Nex.unDefined( group , 'default' );	
			var m = Nex.unDefined( m , false );	
			var t = Nex.unDefined( t , false );	
			var list = opt.fieldList;
			var inputs = [];
			var names = {};
			var _fields = [];
			for( var id in list ) {
				var cmp = Nex.getCmp(id);
				if( !cmp ) {
					delete list[id];
					continue;	
				}
				var _opt = cmp.configs;
				var _name = _opt.name;
				var isDisabled = _opt.disabled;
				if( !m && isDisabled ) {
					continue;	
				}
				var _group = String( _opt.group ).split(/\s+|,/);
				if( $.inArray( String( group ), _group ) === -1 ) {
					continue;
				}
				_fields.push( cmp );
				if( !t ) {
					inputs.push( cmp );	
				} else {
					if( !names[ _name ] ) {
						inputs.push( _name );
					}
				}
				names[ _name ] = true;
			}
			
			inputs.call =function(){
				var argvs = [].slice.apply(arguments);
				if( !argvs.length ) return self;
				var method = argvs[0];
				argvs.splice(0,1);
				$.each( _fields,function(i,o){
					if( o[method] && $.isFunction( o[method] ) ) {
						o[method].apply( o,argvs );	
					}
				} );
				return self;	
			};
			return 	inputs;

		},
		getGroupName : function(group,m){
			return this.getGroup.apply( this,[ group,m,true ] );	
		},
		//获取某分组下的所有值
		/*
		*@m 是否获取disabled 字段 默认不获取 false
		*@t 如果为true如果多个数据不转换字符串
		*/
		getGroupVal : function(group,m,t){
			var self = this;
			var group = Nex.unDefined( group , 'default' );	
			var m = Nex.unDefined( m , false );	
			var groupNames = self.getGroupName(group,m);
			var data = {};
			$.each(groupNames,function(i,name){
				var value = self.getVal( name,group,t );
				if( $._isPlainObject( value ) ) {
					$.extend( data,value );	
				} else {
					data[ name ] = value;	
				}
			});
			return data;
		},
		getGroupValue : function(){
			return this.getGroupVal.apply( this,arguments );	
		},
		setGroupVal : function(data,group){
			var self = this;
			var data = data || {};
			if( $.isPlainObject( data ) && !$.isEmptyObject(data) ) {
				$.each( data,function(name,value){
					self.setVal( value,name,group );	
				} );	
			}
			return self;
		},
		setGroupValue : function(){
			return this.setGroupVal.apply( this,arguments );		
		},
		//验证是否通过，并返回错误的字段name
		/*
		*m 是否验证disabled 字段 默认不验证 false
		*/
		checkGroup : function(group,m) {
			var self = this;
			var group = Nex.unDefined( group , 'default' );	
			var m = Nex.unDefined( m , false );	
			var list = self.getGroup( group,m );
			var errorList = [];
			var r;
			for( var i=0;i<list.length;i++ ) {
				var field = list[i];
				r = field.checkVal();
				if( r === false ) {
					errorList.push(field.C('name'));	
				}
			}
			return errorList.length ? errorList : true;
		},
		//验证某分组是否通过
		/*
		*m 是否验证disabled 字段 默认不验证 false
		*/
		valid : function(group,m){
			var self = this;
			var r = self.checkGroup(group,m);
			return r === true ? true : false;
		},
		//验证某一元素
		checkField : function( name,group ){
			var self = this;
			var obj = self.get.apply( self,arguments );
			obj = $.isArray( obj ) ? obj : [obj];
			var re = true;
			$.each(obj,function(i,input){
				if( !input.checkVal() ) {
					re = false;
				}
			});
			return re;
		},
		resetGroup : function( group,m ){
			var self = this;
			var group = Nex.unDefined( group , 'default' );	
			var m = Nex.unDefined( m , false );	
			var list = self.getGroup( group,m );
			for( var i=0;i<list.length;i++ ) {
				var field = list[i];
				field.reset();
			}
			return self;	
		},
		"reset" : function(){
			return this.resetGroup.apply(this,arguments);	
		}
	});	
	
	return FormManager;
});	
/*
*Validate工具
*Nex.util.Validate
*验证时数据不能为空 ，eg 验证一个邮件 if( Validate.required( value ) && Validate.email( value ) ) {...}
*/
define('Nex/util/Validate',['require','Nex'],function(require){
	require('Nex');	

	var Validate =  {
		required: function( value, param ) {
			return $.trim(value).length > 0;
		},
		email: function( value, param ) {
			return $.trim(value).length==0 || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},
		url: function( value, param ) {
			return $.trim(value).length==0 || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);//'
		},
		ip : function( value, param ){
			return $.trim(value).length==0 || /^[\d\.]{7,15}$/.test(value);		
		},
		qq : function( value, param ){
			return $.trim(value).length==0 || /^[1-9]\d{4,12}$/.test(value);		
		},
		currency : function( value, param ){
			return $.trim(value).length==0 || /^\d+(\.\d+)?$/.test(value);		
		},
		mobile : function( value, param ){
			return $.trim(value).length==0 || /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}?$|15[89]\d{8}?$/.test(value);	
		},
		phone : function( value, param ){
			return $.trim(value).length==0 || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/.test(value);	
		},
		number: function( value, param ) {
			return $.trim(value).length==0 || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},
		digits: function( value, param ) {
			return $.trim(value).length==0 || /^\d+$/.test(value);
		},
		creditcard: function( value, param ) {
			
			if( $.trim(value).length==0 ) {
				return true;	
			}
			
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;
		
			value = value.replace(/\D/g, "");
		
			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}
		
			return (nCheck % 10) === 0;
		},
		//checkLength 检验radio checkbox的选择数
		rangelength: function( value, param ) {
			if( $.trim(value).length==0 ) {
				return true;	
			}
			
			var length = value.split(",").length;
			//var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return ( length >= param[0] && length <= param[1] );
		},
		min: function( value, param ) {
			if( $.trim(value).length==0 ) {
				return true;	
			}
			return value >= param;
		},
		max: function( value, param ) {
			if( $.trim(value).length==0 ) {
				return true;	
			}
			return value <= param;
		},
		range: function( value, param ) {
			if( $.trim(value).length==0 ) {
				return true;	
			}
			return ( value >= param[0] && value <= param[1] );
		},
		equalTo: function( value, param ) {
			var target = $(param);
			return value === target.val();
		}
	};
	Nex.addUtil('Validate', Validate);
	
	return Validate;
});
/*
jquery.nexShowAt.js
http://www.extgrid.com/nexShowAt
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱
eg1:
var at = new Nex.showAt({source:'#t1',el:'#t2'});
eg2:
$("#t1").showAt("#t2"[,{xAlign:'right'}]);
*/
define('Nex/showat/ShowAt',['require','Nex'],function(require){
	require('Nex');

	var showAt = Nex.define('Nex.showat.ShowAt',{
		extend : 'Nex.AbstractComponent',
		alias : 'Nex.ShowAt Nex.showAt',
		xtype : 'showAt showat',
		configs : function(){
			return {
				prefix : 'showAt-',
				denyManager : true,
				//source : null,
				autoShow : false,//是否自动显示
				//openAtOpt : true,//开启后 可使用参数 at 代替el来设置，只是助于理解
				el : null,
				at : null,// 相当于at 或者 一个 坐标eg {left:0,top:2}
				parent : null,//source 的父元素 会自动获取offsetParent  document.body
				autoRegion : true,//自动调整显示方位
				visibleable : true,//必定可见 相对于source的父元素
				visibleEdge : 0,//距离right bottom的最小宽度
				visibleEdgeLT : 0,//距离 left top的最小宽度
				offsetX : 0,//正 负 分别代表外离 内缩
				offsetY : 0,//同上
				zAlign : 'y',// x:横 y:竖
				xAlign : 'center',// left right center
				yAlign : 'center',//top cenger bottom
				animate : null//动画显示函数 默认直接showonBeforeShow : $.noop
			};	
		}		
	});
	showAt.override({
		initComponent : function(opt) {
			var self = this,undef;
			var opt = this.configs;
			
			self.callParent(arguments);
			
			self.parseSource()
				.parseEl();
			
		},
		parseSource : function(){
			var self = this;
			var opt = self.configs;	
			/*
			if( opt.openAtOpt && opt.at !== null ) {
				opt.el = opt.at;	
			}*/
			var s = $(opt.el);//opt.el
			
			if( opt.parent ) {
				if( opt.parent !== window && opt.parent !== document ) {
					opt.parent = $(opt.parent);
					if( opt.parent.length ) {
						var position = opt.parent.css('position');
						if( position === 'static' ) {
							opt.parent.css('position','relative');	
						}
					} else {
						 opt.parent = null;	
					}
				} else {
					opt.parent = $(document.body);
				}
			}  
			if( !opt.parent ) {
				if( s.is(':hidden') ) {
					var p = s._display('nex-hide2display');
					opt.parent = s.offsetParent();//如果source的display 设置为 none 则会是返回body
					p._hidden('nex-hide2display');	
				} else {
					opt.parent = s.offsetParent();	
				}
			}
			//曾经在chrome下获取得到的是一个html
			opt.parent = opt.parent.is('html') ? $(document.body) : opt.parent;
			return self;
		},
		parseEl : function(){
			var self = this;
			var opt = self.configs;	
			if( opt.at === null ) {//at
				opt.at = opt.parent;
				if( opt.at.is('body') ) {
					opt.at = window;	
				}
			} else {
				if( $(opt.at).is('body') ) {
					opt.at = window;	
				}
			}
			opt.at = (opt.at === document) ? window : opt.at;
			return self;
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			self.bind("onCreate",self._checkToShow,self);
			return self;
		},
		_checkToShow : function(){
			var self = this;
			var opt = self.configs;
			if( opt.autoShow ) {
				self.show();	
			}		
		},
		//获取 source元素的 offsetParent
		getRender : function(p){
			var self = this,undef;
			var opt = self.configs;
			var parent = p === undef ? opt.parent : $(p);
			if( parent.is('body') || parent.is('html') ) {//opt.el === window || 
				return window;	
			} else {
				return  parent[0];	
			}
		},
		//返回相对于parent(renderTo)的绝对位置
		getOffset : function(el){
			var self = this,undef;
			var opt = self.configs;	
			var renderTo = self.getRender();
	
			if( $._isPlainObject( el ) ) {
				el.left = el.left === undef ? 0 : el.left ;
				el.top = el.top === undef ? 0 : el.top ;
				//var offset = $.extend({},el);
				//已经指定了坐标 不需要在计算 
				//var sLeft = $(renderTo).scrollLeft();
				//var sTop = $(renderTo).scrollTop();
				//offset.left += sLeft;
				//offset.top += sTop;
				//return offset;
			}
			//Nex.isPlainObject
			
			if( $.isWindow(renderTo) ) {// === window
				if( Nex.isPlainObject( el ) ) {
					//el.left = el.left === undef ? 0 : el.left ;
					//el.top = el.top === undef ? 0 : el.top ;
					return $.extend({},el); 	
				}
				var offset = $(el).offset();//el是个纯对象时 会返回null
				var sLeft = $(window).scrollLeft();
				var sTop = $(window).scrollTop();
				//return !offset ? {left:sLeft,top:sTop} : offset;	
				return !offset ? {left:sLeft,top:sTop} : offset;	
			} else {
				var renderTo = $(renderTo);
				var sLeft = renderTo.scrollLeft();
				var sLeftBorder = parseFloat(renderTo.css('borderLeftWidth')) || 0;
				//sLeftBorder = isNaN( sLeftBorder ) ? 0 : sLeftBorder;
				var sLeftPadding = parseFloat(renderTo.css('paddingLeft')) || 0;
				//sLeftPadding = isNaN( sLeftPadding ) ? 0 : sLeftPadding;
				
				var sTop = renderTo.scrollTop();
				var sTopBorder = parseFloat(renderTo.css('borderTopWidth')) || 0;
				//sTopBorder = isNaN( sTopBorder ) ? 0 : sTopBorder;
				var sTopPadding = parseFloat(renderTo.css('paddingTop')) || 0;
				//sTopPadding = isNaN( sTopPadding ) ? 0 : sTopPadding;
				var offset = {
					left : 0,
					top : 0
				};
				//try {
					var rOffset = renderTo.offset();
					var eOffset = offset;	
					if( Nex.isPlainObject( el ) ) {
						eOffset = $.extend({}, el);
					} else {
						eOffset = $(el).offset() || offset;		
					}
					offset = {
						left : eOffset.left - rOffset.left - sLeftBorder - sLeftPadding,
						top : eOffset.top - rOffset.top - sTopBorder - sTopPadding
					};	
				//} catch(e){
					//..el 不是dom	
				//	sLeft = 0;
				//	sTop = 0;
				//}
				return {
					left : 	sLeft + offset.left,
					top : sTop + offset.top
				};
			}
		},
		//获取el[at]周围可显示空间
		getShowSpace : function(el,parent){
			var self = this,undef;
			var opt = self.configs;
			if( opt.at === undef && parent ) {
				el = parent;	
			}
			var el = self._undef(el,opt.at);
			var parent = self._undef(parent,opt.parent);
			//需要获取的对象
			var obj = $(el);
			
			var renderTo = self.getRender(parent);//getOffsetParent
			
			//获取窗口显示区域大小
			var cw = $(renderTo).width();
			var ch = $(renderTo).height();
			
			var offset = self.getOffset(el);
			
			//获取滚位置
			var sLeft = $(renderTo).scrollLeft();
			var sTop = $(renderTo).scrollTop();
			
			var space = {
				top : offset.top - sTop,
				left : offset.left - sLeft
			};
			space.bottom = ch - space.top - ( $._isPlainObject(el) ? 0 : obj._outerHeight() );
			space.right = cw - space.left - ( $._isPlainObject(el) ? 0 : obj._outerWidth() );
			
			return space;
		},
		/*
		*检测是否有足够的空间显示
		*@param a bottom top right left
		*@param el 
		*/
		checkSpace : function(a,s,e,r){
			var self = this;
			var opt = self.configs;	
			var space = self.getShowSpace();// opt.el,opt.parent
			if( space[a]<=0 ) return false;
			var _r = true;
			switch(a){
				case 'bottom':
					_r = s.height>space.bottom?false:true;
					break;
				case 'top' : 
					_r =  s.height>space.top?false:true;
					break;
				case 'right' :
					_r = s.width>space.right?false:true;
					break;
				case 'left' :
					_r = s.width>space.left?false:true;
					break;
			};
			return _r;
		},
		/*
		*根据当前的设置自动适配对应显示位置
		*/
		adaptRegion : function(s,e,r){
			var self = this;
			var opt = self.configs;	
			var zAlign = opt.zAlign.toLowerCase();
			var xAlign = opt.xAlign.toLowerCase();
			var yAlign = opt.yAlign.toLowerCase();
			var space = self.getShowSpace();
			
			var _r = self.fireEvent('onBeforeAdaptRegion',[/*xAlign,yAlign,zAlign,*/opt]);
			if( _r === false ) return false;
			if( zAlign==='y' ) {
				if( yAlign==='center' ) return;
				var sp = self.checkSpace(yAlign,s,e,r);
				if( sp === false ) {
					var _yAlign = yAlign==='bottom' ? 'top' : 'bottom';
					var sp = self.checkSpace(_yAlign,s,e,r);	
					if( sp ) {
						opt.yAlign = _yAlign;
					} else {
						if( space.bottom > space.top ) {
							opt.yAlign = 'bottom';	
						} else if( space.bottom < space.top ) {
							opt.yAlign = 'top';		
						} //===情况
						//opt.yAlign = space.bottom>=space.top?'bottom':'top';	
					}
				}
			} else {
				if( xAlign==='center' ) return;
				var sp = self.checkSpace(xAlign,s,e,r);
				if( sp === false ) {
					var _xAlign = xAlign==='right' ? 'left' : 'right';
					var sp = self.checkSpace(_xAlign,s,e,r);	
					if( sp ) {
						opt.xAlign = _xAlign;
					} else {
						if( space.left > space.right ) {
							opt.yAlign = 'left';	
						} else if( space.left < space.right ) {
							opt.yAlign = 'right';		
						} //===情况
						//opt.xAlign = space.left>=space.right?'left':'right';	
					}
				}	
			}	
			self.fireEvent('onAdaptRegion',[/*opt.xAlign,opt.yAlign,opt.zAlign,*/opt]);
		},
		/*是否出现水平滚动条*/ 
		//scrollHeight scrollWidth
		hasScrollBarX : function(el){
			return Nex.hasScroll(el,'left');
		},
		/*是否出现垂直滚动条*/
		hasScrollBarY : function(el){
			return Nex.hasScroll(el);
		},
		adaptPosition : function(pos){
			var self = this;
			var opt = self.configs;
			var renderTo = self.getRender();
			
			//if( !$.isWindow(renderTo) ) return pos;
			
			var winWidth = $(renderTo).width();
			var winHeight = $(renderTo).height();
			if( !$.isWindow(renderTo) ) {//用clientWidth
				var scrollbarSize = self.getScrollbarSize();
				if( self.hasScrollBarX(renderTo) ) {
					winHeight -= scrollbarSize.width;	
				}
				if( self.hasScrollBarY(renderTo) ) {
					winWidth -= scrollbarSize.height;	
				}
			}
			/*
			*有个小bug @已修正
			*如果renderTo 不是window时，应该判断renderTo 是否出现滚动条 然后winWidth - scrollBarWidth,winHeight - scrollBarWidth
			*/
			
			//获取滚位置
			var sLeft = $(renderTo).scrollLeft();
			var sTop = $(renderTo).scrollTop();
			var width = self.getWidth(opt.el);
			var height = self.getHeight(opt.el);
			var edge = opt.visibleEdge;//Number>0
			var edge_lt = opt.visibleEdgeLT;//top left 的edge
			//计算出 bottom right 的超出edge部分 eg 如果edge=5 计算出x=4那么可以得到4-5 = -1 超出-1px
			var x = winWidth + sLeft - pos.left - width;
			var y = winHeight + sTop - pos.top - height;
			//计算bottom right 的edge
			//x = x<0?x:0;
			//y = y<0?y:0;
			x = x<edge?x-edge:0;
			y = y<edge?y-edge:0;
			//计算 top left 的edge 此处的 edge_lt 可以换成 edge 
			pos.left = (pos.left + x - sLeft)<edge_lt?sLeft+edge_lt:(pos.left + x);
			pos.top = (pos.top + y - sTop)<edge_lt?sTop+edge_lt:(pos.top + y);
			
			self.fireEvent('onAdaptPosition',[pos,opt]);
			return pos;
		},
		getWidth : function(el){
			var self = this;
			var opt = self.configs;
			return $._isPlainObject(el) ? 0 : $(el)._outerWidth();
		},
		getHeight : function(el){
			var self = this;
			var opt = self.configs;
			return $._isPlainObject(el) ? 0 : $(el)._outerHeight();
		},
		/*
		*x_inner_top x_inner_bottom y_inner_left y_inner_right
		*/
		x_innerleft : function(s,e,r){
			var self = this;
			var opt = self.configs;
			return e.left + opt.offsetX;
		},
		x_innerright : function(s,e,r){//el ,at
			var self = this;
			var opt = self.configs;
			return e.left + ( e.width-s.width ) - opt.offsetX;
		},
		y_innertop : function(s,e,r){
			var self = this;
			var opt = self.configs;
			return e.top + opt.offsetY;
		},
		y_innerbottom : function(s,e,r){
			var self = this;
			var opt = self.configs;
			return e.top + ( e.height-s.height ) - opt.offsetY;
		},
		x_left : function(s,e,r){
			var self = this;
			var opt = self.configs;
			var zAlign = opt.zAlign.toLowerCase();
			return zAlign==='y' ? e.left + opt.offsetX : e.left-s.width - opt.offsetX ;
		},
		x_center : function(s,e,r){
			var self = this;
			var opt = self.configs;
			return e.left+(e.width-s.width)/2;
			//return (e.width-s.width)/2;
		},
		x_right : function(s,e,r){
			var self = this;
			var opt = self.configs;
			var zAlign = opt.zAlign.toLowerCase();
			return zAlign==='y' ? e.left + ( e.width-s.width ) - opt.offsetX : e.left+e.width + opt.offsetX ;
		},
		y_top : function(s,e,r){
			var self = this;
			var opt = self.configs;
			var zAlign = opt.zAlign.toLowerCase();
			return zAlign==='y' ? e.top-s.height - opt.offsetY : e.top-( s.height-e.height ) - opt.offsetY;
		},
		y_center : function(s,e,r){
			var self = this;
			var opt = self.configs;
			var zAlign = opt.zAlign.toLowerCase();
			return e.top+(e.height-s.height)/2;
			//return (e.height-s.height)/2;
		},
		y_bottom : function(s,e,r){
			var self = this;
			var opt = self.configs;
			var zAlign = opt.zAlign.toLowerCase();
			return zAlign==='y' ? e.top+e.height + opt.offsetY : e.top + opt.offsetY;
		},
		
		fixPosition : function(pos,opt){
			var self = this;
			
			/*if( opt.parent[0] !== document.body ) {
				if( $.support.boxModel == true ) {
					var _pos = $(opt.parent).offset();
					pos.left = pos.left- _pos.left;
					pos.top = pos.top- _pos.top;
				}
			}*/
			return pos;
		},
		unFixPosition : function(pos,opt){
			var self = this;
			/*if( opt.parent[0] !== document.body ) {
				if( $.support.boxModel == true ) {
					var _pos = $(opt.parent).offset();
					pos.left = pos.left + _pos.left;
					pos.top = pos.top + _pos.top;
				}
			}*/
			return pos;
		},
		getShowPos : function(){
			var self = this;
			var opt = self.configs;
			/*判断el是否隐藏*/
			var isHidden = opt.el.is(':hidden');
			var dp = null;
			if( isHidden ) {
				dp = opt.el._display('nex-hide2display');
			}
			//滚动位置
			var renderTo = self.getRender();
			var sLeft = $(renderTo).scrollLeft();
			var sTop = $(renderTo).scrollTop();
			var scrollPos = {
				left : sLeft,
				top : sTop
			};
			//源数据
			var source = self.getOffset(opt.el);
			source.width = self.getWidth( opt.el );
			source.height = self.getHeight( opt.el );
			//目标数据
			var target = self.getOffset(opt.at);
			target.width = self.getWidth( opt.at );
			target.height = self.getHeight( opt.at );
			//自动设置或获取显示方位
			if( opt.autoRegion ) {
				self.adaptRegion(source,target,scrollPos);
			}
			
			//获取显示位置
			var _func = function(func){
				var getPos = null;
				if( func in opt ) {
					getPos = opt[func];	
				} else if( func in self ) {
					getPos = self[func];		
				} else if( func in window ) {
					getPos = window[func];	
				} else {
					getPos = function(){return {left:0,top:0};};	
				}
				return getPos;
			}
			var x_func = 'x_'+opt.xAlign.toLowerCase();
			var y_func = 'y_'+opt.yAlign.toLowerCase();
			var pos = {
				left : _func(x_func).call(self,source,target,scrollPos),
				top : _func(y_func).call(self,source,target,scrollPos) 
			};
			var _pos = false;
			if( opt.visibleable ) {
				_pos = self.adaptPosition(pos);	
			}
			self.fireEvent("onGetPosition",[p,opt]);
			var p = _pos ? _pos : pos;
			//对显示坐标做最终检测
			p = self.fixPosition(p,opt);
			
			if( isHidden && dp ) {
				dp._hidden('nex-hide2display');
			}
			
			//位置的最后修改
			return p;
		},
		/*
		*显示到指定位置
		*@param left 可选,
		*@param top 可选
		*/
		showAtPos : function(left, top){},
		/*
		*@param el 可选 如果为可选 则默认使用opt.el
		*@param options 可选 显示参数
		*/
		showAtEl : function(el, options){},
		show : function(){
			var self = this,
				opt=this.configs;	
			//不建议在这里获取坐标
			//因为如果改变at的position为absolute时 source的位置会改变，使得showAt会出现错乱	
			//var pos = self.getShowPos();
			var r = self.fireEvent("onBeforeShow",[pos,opt]);
			if( r === false ) return false;
			var callBack = function(){
				self.fireEvent("onShow",[pos,opt]);	
			}
			if( $.isFunction(opt.animate) ) {
				var pos = self.getShowPos();//单独获取
				opt.animate.call(self,opt.el,pos,callBack);	
			} else {
				var src = $(opt.el);
				var position = $(opt.el).css('position');
				if( position === 'static' || position === 'relative' ) {
					//pos.position = 'absolute';
					src.css('position','absolute');
				}
				var pos = self.getShowPos();//单独获取
				src.css(pos).show();
				callBack();
			}
		}
	});
	$.fn.showAt = function(options,conf){
		var undef,opt;
		var conf = conf === undef ? {} : conf;
		if( options === undef ) {
			opt = {}	
		}else if( !$._isPlainObject(options) ) {
			opt = { at:options };	
			$.extend(opt,conf);
		} else {
			opt = 	options;
		}
		var list = [];
		this.each(function(){
			opt.el = $(this);
			opt.autoShow = true;
			var o = Nex.Create('showAt',opt);
			//o.show();
			list.push(o);
			//$(this).data('nex.showAt',o);
		});
		return list.length === 1 ? list[0] : list;
	};
	
	return showAt;
});	
/*
*
*Nex.mixins.DropDown
*下拉列表框 或者 自定义下拉框 
*/
define('Nex/mixins/DropDown',['require','Nex','Nex/showat/ShowAt'],function(require){
	require('Nex');
	require('Nex/showat/ShowAt');	

	return Nex.define('Nex.mixins.DropDown', {
		dropdownzIndex : 999999+Nex.zIndex,
		configs : function( opt ){
			return {
				multiSplit : ',',
				textKey : 'text',
				valueKey : 'value',
				splitChr : ['-',',',';','|'],
				dropdownHideToRemove : false,//dropdown 关闭后销毁下拉框  --未实现
				dropdownItems : [],
				dropdownItemDefault : {},
				dropdownLoadMsg : '数据加载中...',
				//默认和Input一样长
				dropdownLoadWidth : 0,
				//加载提示显示参数设置
				dropdownLoadShowAt : {},
				//dropdown 结构 wrap(可能只有做动画效果才能用到)->body(内容)
				//dropdownMode = 1|2 如果是2 则items的内容都会当作组件来创建 如果是1 则会自动判断：如果是数组则创建下拉列表，其他（如xtype function..） 则当作组件创建
				dropdownAnim : false,//dropdownAnimate
				dropdownDuration : 200,
				dropdownEasing : 'easeOutQuad',//easeOutCirc linear easeOutSine
				dropdownMode : 1, // 1:列表下拉框 2:组件下拉框 
				dropdownBorder : true,//dropdown 是否有边框 
				dropdownPadding : 0,
				dropdownAutoScroll : false,//如果创建的是 组件下拉框（mode=2） 则该参数生效
				//'<div style="text-align:center;">暂无数据</div>'
				dropdownEmptyMsg : '',//&&dropdownMode=1 下拉列表为空时的提示内容
				dropdownCls : '',
				dropdownShowAt : {},
				//dropdown的宽高可以设置func 动态返回一个数字
				dropdownHeight : 'auto',//
				dropdownWidth : 'auto',//auto 表示自适应 组件下拉框中 0=inputWidth或者container.width
				dropdownMaxHeight : 0,//(不适应mode=2)0 代表auto 最大不能超过屏幕高度
				dropdownMinHeight : 0,//(不适应mode=2)0 代表auto
				dropdownMaxWidth : 0, // (不适应mode=2)0 标识最大不能超过屏幕宽
				dropdownMinWidth : 0,//(不适应mode=2)如果dropdownMinWidth=0 且是下拉列表(dropdownMode=1)时，dropdownMinWidth实际是和组件的大小宽度一致的，所以如果想控制下拉列表的宽度，应该控制dropdownMinWidth
				dropdownSelectionable : true,
				dropdownEdge : 5,//下拉框right bottom距离边缘的宽度 默认是5[px]
				dropdownItemsFilter : null,//下拉数据过滤器
				dropdownItemFilter : null,//下拉列表的数据过滤器
				dropdownItemFormat : null,//下拉列表参数
				dropdownItemNoWrap : true,//下拉列表不换行
				dropdownItemTips : false,//下拉列表是否这种tips字段
				dropdownItemTipsTag : 'title',
				dropdownItemTipsFilter : null,//function
				dropdownOtherHeight : 0,
				dropdownOtherWidth : 0,
				//下拉列表单选模式
				dropdownSingleSelect : true,
				//单击item或者其他区域后会关闭dropdown 默认true 如果为false则需要手动调用hideDropDown
				dropdownHideOnClick : true,
				//鼠标点击其他区域后隐藏dropdown
				dropdownHideOnBlur : true,
				dropdownShadowShow : true,
				dropdownResetPosDuration : 200,
				dropdownItemTpl : '<div id="<%=id%>" <%=tips%> value="<%=value%>" class="nex-form-dropdown-item <%=selected?"nex-form-dropdown-item-selected":""%> <%=disabled?"nex-form-dropdown-item-disabled":""%> <%=nowrap?"nex-form-dropdown-item-nowrap":""%> <%=cls%>"><%=text%></div>',
				dropdownItemSplitLineTpl : '<div class="nex-form-item-separator"><div class="nex-form-line-h"></div></div>',
				//绑定事件
				'@onDestroy._sysdp' : function(){
					this.destroyDropDown();	
				}
			};
		},
		_getElOffset : function(el){
			var self = this;
			var opt = self.configs;	
			var offset = $(el).offset();
			var sLeft = $(window).scrollLeft();
			var sTop = $(window).scrollTop();
			return !offset ? {left:sLeft,top:sTop} : offset;
		},
		//获取周围可显示空间
		_getShowAtSpace : function(el){
			var self = this;
			var opt = self.configs;
			var el = Nex.unDefined(el,self.getDropDownShowAt());
			//需要获取的对象
			var obj = $(el);
			
			//获取窗口显示区域大小
			var cw = $(window).width();
			var ch = $(window).height();
			
			var offset = $._isPlainObject(el) ? el : self._getElOffset(obj);
			
			//获取滚位置
			var sLeft = $(window).scrollLeft();
			var sTop = $(window).scrollTop();
			
			var space = {
				top : offset.top - sTop,
				left : offset.left - sLeft
			};
			space.bottom = ch - space.top - ( $._isPlainObject(el) ? 0 : obj._outerHeight() );
			space.right = cw - space.left - ( $._isPlainObject(el) ? 0 : obj._outerWidth() );
			return space;
		},
		getDropDownItems : function(){
			var opt = this.configs;
			return opt.dropdownItems || [];	
		},
		getDropDownItemDefault : function(){
			var opt = this.configs;
			return opt.dropdownItemDefault;	
		},
		/*
		*检测当前itemData是否包含__id text value 
		*/
		__itemId : 1,
		_parseItemData : function( data ){
			var self = this,
				undef,
				opt = self.configs;
			var value = opt.valueKey,
				text = opt.textKey;
			//如果data.__id已经存在说明已经处理过了，不需要重复处理
			if( Nex.isPlainObject( data ) && data.__id ) {
				return data;	
			}		
			var d = {};	
			if( Nex.isArray( data ) && data.length ) {
				d[ value ] = data[0];
				d[ text ] = Nex.unDefined(data[1], data[0]);	
			} else if( Nex.isPlainObject( data ) ) {
				d = $.extend({}, data);
				d[value] = Nex.unDefined(data[value], data[text]);
				d[text] = Nex.unDefined(data[text], d[value]);
				d[value] = Nex.unDefined(d[value], '');
				d[text] = Nex.unDefined(d[text], '');
				//d = data;
			} else {//string
				d[ value ] = data+'';
				d[ text ] = d[ value ];	
				if( Nex.inArray( d[ value ],opt.splitChr ) !== -1 ) {
					d[ '__splitLine' ] = true;	
				}
			}
			if( !('__id' in d) ) {
				d.__id = opt.id+'_item_'+self.__itemId++;	
			}
			//getDropDownItemDefault
			$.extend( d,self.getDropDownItemDefault(),d );//opt.itemDefault
			return d;
		},
		isSplitLine : function( data ){
			var data = data || {};
			if( data.__splitLine ) {
				return true;	
			}
			return false;
		},
		setDropDownItems : function( items ){
			var opt = this.configs;
			if( items ) {//dropdownItems
				opt.dropdownItems = $.isArray(items) ? items.concat([]) : items;
			}
			if( opt.dropdownMode == 1 && $.isArray(opt.dropdownItems) ) {
				$.each( opt.dropdownItems,function( i,d ){
					opt.dropdownItems[i] = self._parseItemData( d );	
				} );
			}
			//判断dropdown是否已经创建 如果创建则刷新内容
			var dropdown = self.getDropDown();
			if( dropdown.length && items ) {
				this.resetDropDownList( opt.dropdownItems );
			}
			
			return opt.dropdownItems;	
		},
		/*
		*获取DropDownItems数据
		*@param {String,Array}单个字符是返回当前对象，如果是数组或者以','分割的字符串时返回的是数组
		*@param {Boolean} true 默认 返回数据  false返回索引
		*return {Array,Object}
		*/
		getDropDownItemData : function( value,m ){
			var self = this,
				undef,
				opt = self.configs,
				m = m === undef ? true : m,
				items = self.getDropDownItems();	
			var _v = value;	
			if( value === undef ) return null;
			if( $.type( value ) === 'string' ) {
				value = value.split( opt.multiSplit );	
				if( value.length>1 ) {
					_v = value;	
				}
			} else if( $.type( value ) !== 'array' ) {
				value = [ value ];	
			}
			var d = {};
			$.each( value,function(i,v){
				d[v] = true;					   
			} );
			var list = [];
			$.each( items , function(i,v){
				if( !$.isPlainObject( v ) ) return;
				var value = v['value'];
				if( value in d ) {
					list.push( m?v:i );	
				}
			} );
			
			if( list.length === 1 && $.type( _v ) !== 'array' ) {
				return list[0];	
			} else {
				return list;	
			}
		},
		getDropDownItemIndex : function( value ){
			return this.getDropDownItemData( value,false );
		},
		getDropDownItemDataById : function(id){
			var self = this,
				undef,
				opt = self.configs;
			var d = {};
			var items = self.getDropDownItems();	
			if( id === undef ) {
				return d;	
			}
			$.each( items , function(i,v){
				if( !$.isPlainObject( v ) ) return;
				var value = v['__id'];
				if( value === id ) {
					d = v;
					return false;
				}
			} );	
			return d;
		},
		getDropDownShowAt : function(){
			return this.getContainer();	
		},
		showDropDownLoading : function( msg,callback ){
			var self = this,
				undef,
				opt = self.configs;
			var msg = msg || opt.dropdownLoadMsg;
			var at = self.getDropDownShowAt();
			var loader = $('#'+opt.id+'_dropdown_loading');	
			if( self.__ddt ) {
				clearTimeout( self.__ddt );	
			}
			if( loader.length ) {
				loader.html( opt.dropdownLoadMsg );
			} else {
				//创建dropdown
				loader = $('<div id="'+opt.id+'_dropdown_loading" class="nex-form-dropdown-loading">'+msg+'</div>');	
				$(document.body).append( loader );
				var w = at._outerWidth();
				var w1 = loader._outerWidth();
				var ldpw = $.isFunction(opt.dropdownLoadWidth) ? opt.dropdownLoadWidth.call( self,opt ) : opt.dropdownLoadWidth;
				if( ldpw>0 ) {
					loader._outerWidth( ldpw );		
				} else {
					if( w1<w ) {
						loader._outerWidth( w );	
					}
				}
			}
			loader.showAt(
				$.extend(
					{
						at:at
						,xAlign:'left'
						,yAlign:'bottom'
						,offsetY:-1 
					}
				,opt.dropdownLoadShowAt
				) 
			);
			
			if( $.isFunction( callback ) ) {
				callback.call( self,loader );
			}
			
			return loader;
		},
		__ddt : 0,
		hideDropDownLoading : function( callback ){
			var self = this,
				undef,
				opt = self.configs;	
			var loader = $('#'+opt.id+'_dropdown_loading');	
			if( loader.length ) {
				self.__ddt = setTimeout( function(){
					loader.hide(callback);
					self.__ddt = 0;
				},0 );
			}	
			return self;
		},
		getDropDown : function(){
			var self = this,
				opt = self.configs;	
			return $('#'+opt.id+'_dropdown');
		},
		getDropDownBody : function(){
			var self = this,
				opt = self.configs;	
			return $('#'+opt.id+'_dropdown_body');
		},
		getDropDownListItems : function(){
			var dpb = this.getDropDownBody();
			return $('>.nex-form-dropdown-item',dpb);	
		},
		getDropDownListSelectedItems : function(){
			var dpb = this.getDropDownBody();
			return $('>.nex-form-dropdown-item-selected',dpb);	
		},
		getDropDownListDisabledItems : function(){
			var dpb = this.getDropDownBody();
			return $('>.nex-form-dropdown-item-disabled',dpb);	
		},
		/*
		*创建下拉框 默认一个输入框只能同时存在一个下拉框
		*/
		createDropDown : function(){
			var self = this,
				undef,
				opt = self.configs;
			
			var r = self.fireEvent('onBeforeCreateDropDwon',[ opt ]);	
			if( r === false ) {
				return self;	
			}
			
			var dropdown = $('#'+opt.id+'_dropdown');
			if( dropdown.length ) {
				return dropdown;	
			}
			
			var html = [];	
			//创建dropdown
			html.push('<div id="'+opt.id+'_dropdown" class="nex-form-dropdown '+( opt.dropdownBorder ? "nex-form-dropdown-border" : "" )+' '+opt.dropdownCls+'" tabindex="-1">');
				html.push('<div id="'+opt.id+'_dropdown_body" class="nex-form-dropdown-body " tabindex="-1" >');
				html.push('</div>');
			html.push('</div>');
			
			dropdown = $( html.join('') ).appendTo( document.body );
			
			if( !opt.dropdownSelectionable ) {
				dropdown.disableSelection();		
			}
			
			if( opt.dropdownPadding>0 ) {
				$('#'+opt.id+'_dropdown_body').css('padding',opt.dropdownPadding);	
			}
			
			self._setDropDownEvent();
			
			self.fireEvent('onCreateDropDwon',[ dropdown,opt ]);
			
			return dropdown;
		},
		getDropDownSelectedValue : function(){
			return null;	
		},
		/*
		*创建dropdown内容
		*param {Array} 指定创建下拉框的显示内容 可选 不指定默认获取opt.items
		*/
		// __dropdownMode=1|2  1:列表下拉框 2:组件下拉框 
		__dropdownMode : 1,
		createDropDownList : function( list ){
			var self = this,
				undef,
				value = this.getDropDownSelectedValue(),
				opt = self.configs;
			var html = [];
			var valueKey = opt.valueKey,
				textKey = opt.textKey;
			var list = Nex.unDefined( list,self.getDropDownItems() );//opt.items
			/*if( !$.isArray( list ) ) {
				return self;
			}*/
			
			var dlist = {
				items : list	
			};
			var r = self.fireEvent('onBeforeCreateDropDwonList',[ dlist,opt ]);
			if( r === false ) {
				return self;
			}
			list = dlist.items;
			
			var dropdown = $('#'+opt.id+'_dropdown');
			if( !dropdown.length ) {
				dropdown = self.createDropDown();	
			}
			
			//如果items 不是数组 则使用addCompanet 创建自定义组件
			var dp = dropdown;
			var dpb = $('#'+opt.id+'_dropdown_body');
			
			dpb.removeClass('nex-form-dropdown-m1 nex-form-dropdown-m2 nex-form-dropdown-auto-scroll');
			
			if( $.isArray( list ) && opt.dropdownMode == 1 ) {
				self.__dropdownMode = 1;
				dpb.addClass('nex-form-dropdown-m1');
				var v_maps = {};
				if( value !== null ) {
					$.each( String(value).split( opt.multiSplit ),function(i,v){
						v_maps[v] = true;	
					} );
				}
				var len = list.length;
				for( var i=0;i<len;i++ ) {
					var _d = self._parseItemData( list[i] );
					if( v_maps[ _d[valueKey] ] ) {
						_d.selected = true;	
					} else {
						_d.selected = false;		
					}
					list[i] = _d;
					var d = $.extend( {
						id : list[i]['__id'],
						cls : '',
						selected : false,
						disabled : false,
						nowrap : opt.dropdownItemNoWrap,
						tips 	 : ''	
					},_d );
					//设置title
					//dropdownItemTips : false,//下拉列表是否这种tips字段
					//dropdownItemTipsTag : 'title',
					//dropdownItemTipsFilter : null,//function
					if( opt.dropdownItemTips ) {
						var attr_tips = [opt.dropdownItemTipsTag,'="',];
						var tips = Nex.unDefined(d['tips'],d[textKey]);
						if( $.isFunction( opt.dropdownItemTipsFilter ) ) {
							tips = 	opt.dropdownItemTipsFilter.call( self,tips,d );
						}
						if( tips ) {
							tips = Nex.htmlEncode( tips );	
						}
						d.tipsMsg = tips;
						d.tipsTag = opt.dropdownItemTipsTag;
						attr_tips.push(tips);
						attr_tips.push('"');
						
						d.tips = attr_tips.join('');
					}
					
					d.text = d[ textKey ];
					d.value = Nex.htmlEncode( d[ valueKey ] );
					
					if( opt.dropdownItemFilter && $.isFunction( opt.dropdownItemFilter ) ) {
						var r = opt.dropdownItemFilter.call( self,d );
						if( r === false ) continue;
						if( r !== undef ) {
							d = r;//$.extend(d,r);	
						}
					}
					
					if( opt.dropdownItemFormat && $.isFunction( opt.dropdownItemFormat ) ) {
						d.text = opt.dropdownItemFormat.call( self,d.text,d ) || d.text;
					}
					
					var r = self.fireEvent("onBeforeDropDownItemCreate",[d,opt]);
					if( r === false ) continue;
					
					var _itemTpl = '';
					if( self.isSplitLine( d ) ) {
						_itemTpl = self.tpl(opt.dropdownItemSplitLineTpl,d);	
					} else {
						_itemTpl = self.tpl(opt.dropdownItemTpl,d);
					}
					var et = {
						itemTpl : _itemTpl,
						itemData : d
					};
					self.fireEvent("onDropDownItemCreate",[et,opt]);
					html.push( et.itemTpl );	
				}	
				if( !len && opt.dropdownEmptyMsg != '' ) {
					html.push( opt.dropdownEmptyMsg );	
				}
				dpb.html( html.join('') );
			} else {
				self.__dropdownMode = 2;
				dpb.addClass('nex-form-dropdown-m2');
				if( opt.dropdownAutoScroll ) {
					dpb.addClass('nex-form-dropdown-auto-scroll');	
				}
				dpb.html( '' );
				Nex.gc();
				self.addComponent( dpb,list );
			}
			
			self.fireEvent('onCreateDropDwonList',[ dropdown,self.__dropdownMode,opt ]);
			
			return dropdown;
		},
		resetDropDownList : function(list){
			var self = this;
			var opt = this.configs;
			var list = this._undef( list,this.getDropDownItems() );
			
			if( $.isFunction( opt.dropdownItemsFilter ) ) {
				var _l = opt.dropdownItemsFilter.call( self,list );	
				if( _l === false ) return self;
				if( _l !== undef ) {
					list = _l;	
				}
			}
			
			var d = {
				items : list	
			};
			
			var r = self.fireEvent('onResetDropDownList',[ d,opt ]);
			if( r === false ) {
				return self;	
			}
			
			list = d.items;
			
			if( $.isArray( list ) ){
				self.__CItems = list;		
			} else {
				self.__CItems.length = 0;	
			}
			
			var dropdown = self.createDropDownList( list );
			
			self.setDropDownSize();
			
			//滚动到默认选中的列表
			//var dsel = $('#'+opt.id+'_dropdown_body').find('>.nex-form-dropdown-item-selected:last');
			//if( dsel.length ) {
			//	self.scrollToItemById( dsel.attr('id') );
			//}
			//刷新位置
			if( self.__DP_isShow ) {
				self.resetDropDownPos();
			}
			return self;	
		},
		__CItems : [],
		_bindCloseDropDownEvents : function(){
			var self = this,
				items = this.getDropDownItems(),//this.configs.items,
				opt = self.configs;		
			self.__unbindDropDown();
			if( opt.dropdownHideOnBlur ) {
				//移除下拉框事件
				$(document).bind('mousewheel.dropdown_'+opt.id+' contextmenu.dropdown_'+opt.id+' mousedown.dropdown_'+opt.id,function(e){
					var target = e.target || e.srcElement;
					//closest parents
					if( $(target).is( '#'+opt.id ) 
						|| $(target).is( '#'+opt.id+'_dropdown' ) 
						|| $(target).parents('#'+opt.id+'_dropdown,#'+opt.id).length
					) {
						//
					} else {
						self.hideDropDown();		
					} 
				});
				$(window).bind('resize.dropdown_'+opt.id,function(){
					self.hideDropDown();			
				});
			}
				//支持上下键选择
			$(document).bind("keydown.dropdown_"+opt.id,function(e){
				var sbody = $("#"+opt.id+"_dropdown_body");
				var cur = sbody.find(">.nex-form-dropdown-item-over:last");
				var isFirst = false;
				if( !cur.length ) {
					cur = sbody.find(">.nex-form-dropdown-item-selected:last");
					if( !cur.length ) {
						cur = sbody.find(">.nex-form-dropdown-item:first");	
						isFirst = true;
					}
				}
				
				if( !cur.length ) return;
				var it = cur;
				var _cur = cur;
				switch( e.keyCode ) {
					case 38 : //up
						sbody.find(">.nex-form-dropdown-item").removeClass("nex-form-dropdown-item-over");
						do {
							var prev = isFirst ? cur : cur.prev();
							if( prev.length ) {
								if( !prev.hasClass('nex-form-dropdown-item') ) {
									cur = prev;
									continue;	
								}
								if( prev.hasClass('nex-form-dropdown-item-disabled') ) {
									cur = prev;
									if( isFirst ) break;
									isFirst = false;
									continue;	
								} else {
									cur = prev;
									_cur = prev;	
								}
							} else {
								prev = _cur;
								if( !prev.hasClass('nex-form-dropdown-item') ) {
									cur = prev;
									isFirst = false;
									break;	
								}	
							}
							isFirst = false;
							
							var oitem = prev.length ? prev : _cur;
							var id = oitem.attr('id');
							var data = self.__getItemData(id);
							
							var r = self.fireEvent("onDropDownItemForward",[data,oitem[0],e,opt]);	
							if( r !== false ) {
								oitem.addClass('nex-form-dropdown-item-over');
							}
							//oitem.addClass("nex-form-dropdown-item-over");		
							if( data ) {
								self.scrollToItem( data );
							}
							break;
						} while(1);
						
						break;
					case 40 : //down
						sbody.find(">.nex-form-dropdown-item").removeClass("nex-form-dropdown-item-over");
						do {
							var next = isFirst ? cur : cur.next();
							isFirst = false;
							if( next.length ) {
								if( !next.hasClass('nex-form-dropdown-item') ) {
									cur = next;
									continue;	
								}
								if( next.hasClass('nex-form-dropdown-item-disabled') ) {
									cur = next;
									//如果需要滚动到disabled的话 需要在这里添加scrollToItem
									continue;	
								} else {
									cur = next;
									_cur = next;	
								}
							} else {
								next = _cur;
								if( !next.hasClass('nex-form-dropdown-item') ) {
									cur = next;
									isFirst = false;
									break;	
								}		
							}
							
							var oitem = next.length ? next : _cur;
							var id = oitem.attr('id');
							var data = self.__getItemData(id);
							
							var r = self.fireEvent("onDropDownItemForward",[data,oitem[0],e,opt]);	
							if( r !== false ) {
								oitem.addClass("nex-form-dropdown-item-over");	
							}
							if( data ) {
								self.scrollToItem( data );
							}
							break;
						} while(1);
						
						break;
					case 13:
						//sbody.find(">.nex-form-dropdown-item-over").trigger('click',[e]);//因为使用的是委托 模拟触发会出现问题
						self.__dp_click(sbody.find(">.nex-form-dropdown-item-over"),e);
						//键盘触发 并不会触发是输入框失去焦点
						//self.blur();
						break;
				}
				
			});	
		},
		setDropDownList : function( list ){
			this.__DP_isShow ? this.resetDropDownList( list ) : 0;	
			return this;	
		},
		resetDropDownSizeAndPos : function(){
			if( this.__DP_isShow ) {
				this.resetDropDownSize();		
				this.resetDropDownPos();
			}
		},
		/*
		*显示下拉框
		*/
		__DP_isShow : false,
		//重复调用showDropDown 并且传参 则会调用resetDropDownList
		showDropDown : function( list,callback ){//list = Nex xtype array func , callback 显示后的回调 
			var self = this,
				undef,
				_func,
				opt = self.configs;
			var _setList = list ? true : false;
			var list = this._undef( list,this.getDropDownItems() );
			
			//如果dropdown 已经是显示状态 则调用reset
			if( self.__DP_isShow && _setList ) {
				self.resetDropDownList( list );	
				return self;
			}
			//开始处理list数据
			
			if( $.isFunction( opt.dropdownItemsFilter ) ) {
				var _l = opt.dropdownItemsFilter.call( self,list );	
				if( _l === false ) return self;
				if( _l !== undef ) {
					list = _l;	
				}
			}
			
			var d = {
				items : list	
			};
			
			var r = self.fireEvent('onBeforeDropDownShow',[ d,opt ]);
			if( r === false ) {
				return self;	
			}
			
			if( !opt.dropdownHideToRemove ) {
				var dropdown = self.getDropDown();
				if( dropdown.length ) {
					//显示之前设置选择状态
					if( self.__dropdownMode == 1 ) {
						var ds = self.getDropDownSelectedValue();
						if( ds !== null ) {
							self.dropdownSelectItems( ds );
						}
					}
					self.setDropDownSize();	
					self._showDropDown(null,dropdown);
					return self;
				}	
			}
			
			list = d.items;
			
			self.__CItems = [];
			
			if( $.isArray( list ) ){//&& opt.dropdownMode == 1
				self.__CItems = list;		
			} else {
				self.__CItems.length = 0;	
			}
			//创建dropdown 容器
			var dropdown = $('#'+opt.id+'_dropdown');
			if( !dropdown.length ) {
				dropdown = self.createDropDown();	
			}
			
			//预判__dropdownMode
			if( $.isArray( list ) && opt.dropdownMode == 1 ) {
				self.__dropdownMode = 1;
			} else {
				self.__dropdownMode = 2;	
				//创建下拉组建时 先设置好宽高
				self._setDropDownSize2();
			}
			//创建下拉框内容
			var dropdown = self.createDropDownList( list );
			//设置下拉框大小
			if( self.__dropdownMode == 1 ) {
				self._setDropDownSize1();
			}
			
			self._showDropDown( callback,dropdown );
			
			return self;
		},
		_showDropDown : function(func,dp){
			var self = this,
				opt = self.configs;		
			var fn = function(){
				self.fireEvent("onDropDownShow",[opt]);
				if( $.isFunction( func ) ) {
					func.call( self );
				}
				if( opt.dropdownShadowShow ) {
					self.dropdownShadowShow();	
				}
				self.__DP_isShow = true;
				self._bindCloseDropDownEvents();
			}	
			//显示之前。。。
			if( self.__dropdownMode == 1 ) {
				//滚动到选中的列表
				var dsel = $('#'+opt.id+'_dropdown_body').find('>.nex-form-dropdown-item-selected:last');
				if( dsel.length ) {
					self.scrollToItemById( dsel.attr('id') );
				}
			}
			
			var dropdown = dp || self.getDropDown();
			self.__DP_isShow = true;
			//显示下拉框 
			var zIndex = Nex.mixins.DropDown.dropdownzIndex+2;
			self.dropdownzIndex = zIndex;
			dropdown.css('zIndex',zIndex);
			if( opt.dropdownAnim ) {
				self._animateDropDownShow(fn);	
			} else {
				self._defaultDropDownShow(fn);		
			}
			return self;
		},
		/*移除下拉框*/
		removeDropDown : function(){
			return this.hideDropDown.apply(this,arguments);	
		},
		hideDropDown : function( callback ){
			var self = this,
				undef,
				func,
				opt = self.configs;	
				
			var func = function(){
				if( opt.dropdownShadowShow ) {
					self.hideDropDownShadow();	
				}
				self.fireEvent("onDropDownHide",[opt]);
				if( $.isFunction( callback ) ) {
					callback.call( self );
				}
				self.__DP_isShow = false;
			}
			var r = self.fireEvent('onBeforeDropDownHide',[ opt ]);
			if( r === false ) {
				return self;	
			}
			self.__DP_isShow = false;
			self.unsetDropDownEvent();
			
			if( opt.dropdownAnim ) {
				self._animateDropDownHide(func);	
			} else {
				self._defaultDropDownHide(func);		
			}
			return self;
		},
		__unbindDropDown : function(){
			var opt = this.configs;
			$(document).unbind('.dropdown_'+opt.id);	
			$(window).unbind('.dropdown_'+opt.id);	
		},
		isDropDownCreate : function(){
			var opt = this.configs;
			var dp = $('#'+opt.id+'_dropdown');	
			return dp.length ? true : false;
		},
		//判断dropdown是显示中
		isDropDownShow : function(){
			return this.__DP_isShow;	
		},
		toggleDropDown : function( func ){
			var self = this,
				opt = self.configs;		
			if( self.__DP_isShow ) {
				self.hideDropDown( func );	
			} else {
				self.showDropDown( func );	
			}
			return self;
		},
		_getDropDownOtherHeight : function(){
			return this.configs.dropdownOtherHeight;	
		},
		_getDropDownOtherWidth : function(){
			return this.configs.dropdownOtherWidth;	
		},
		/*计算组件下拉框的大小*/
		__DP_autoWidth : false,
		__DP_autoHeight : false,
		_setDropDownSize1 : function(){
			var self = this,
				opt = self.configs;	
				
			var input = self.getDropDownShowAt();
			var space = self._getShowAtSpace( input );
			space.bottom -= opt.dropdownEdge;
			space.top 	 -= opt.dropdownEdge;
			space.left	 -= opt.dropdownEdge;
			space.right  -= opt.dropdownEdge;
			
			var dp = $('#'+opt.id+'_dropdown');
			var bd = $('#'+opt.id+'_dropdown_body');
			
			//移除之前 我们先获取dropdown的border padding占用空间
			var dph_s = (parseInt(dp.css('paddingTop')) || 0)
						+ (parseInt(dp.css('paddingBottomWidth')) || 0)
						+ (parseInt(dp.css('borderTop')) || 0 )
						+ (parseInt(dp.css('borderBottomWidth')) || 0);
			var dpw_s = (parseInt(dp.css('paddingLeft')) || 0)
						+ (parseInt(dp.css('paddingRight')) || 0)
						+ (parseInt(dp.css('borderLeftWidth')) || 0)
						+ (parseInt(dp.css('borderRightWidth')) || 0);
			
			//注意此处不应该移除dp的width height 因为移除后如果数据太多会突然撑大导致闪屏
			//dp._removeStyle('width height');
			bd._removeStyle('width height');
			
			var win_w = $(window).width() - opt.dropdownEdge;
			//var win_h = $(window).height();
			
			var dw = $.isFunction(opt.dropdownWidth) ? opt.dropdownWidth.call( self,opt ) : opt.dropdownWidth;
			var dh = $.isFunction(opt.dropdownHeight) ? opt.dropdownHeight.call( self,opt ) : opt.dropdownHeight;
			
			if( dw == 'auto' ) {
				dp._removeStyle('width');	
			}
			if( dh == 'auto' ) {
				dp._removeStyle('height');	
			}
			
			dw = dw == 'auto' ? 0 : dw;
			dh = dh == 'auto' ? 0 : dh;
			
			var isAutoHeight = false;
			var isAutoWidth = false;
			
			/*
			*setp1:先计算dropdown的高度
			*/
			var sh = bd.outerHeight() + dph_s;//作用等同于 dp.outerHeight 但是我们不能直接用这个 
			var h = dh > 0 ? dh : sh;
			var max_h = $.isFunction(opt.dropdownMaxHeight) ? opt.dropdownMaxHeight.call( self,opt ) : opt.dropdownMaxHeight;
			var min_h = $.isFunction(opt.dropdownMinHeight) ? opt.dropdownMinHeight.call( self,opt ) : opt.dropdownMinHeight;
			//var min_space = Math.min( space.bottom,space.top );
			//if( h > min_space ) {//这个判断可不要
			h = Math.min( h,Math.max(space.bottom,space.top) );
			//}
			if( min_h>0 ) {
				h = Math.max( h,min_h );
			}
			if( max_h>0 ) {
				h = Math.min( h,max_h );
			}
			isAutoHeight = true;
			if( dh != 0 || h != sh ) {
				isAutoHeight = false;
				dp._outerHeight( h );
				bd._outerHeight( dp.height()-self._getDropDownOtherHeight() );	
			} else {
				dp._removeStyle('height');	
			}
			//step2:再计算宽度 注意：必须要先设置高度后在获取宽度
			var sw = bd.outerWidth() + dpw_s;//作用等同于 dp.outerWidth
			var w = dw > 0 ? dw : sw;
			var max_w = $.isFunction(opt.dropdownMaxWidth) ? opt.dropdownMaxWidth.call( self,opt ) : opt.dropdownMaxWidth;
			var min_w = $.isFunction(opt.dropdownMinWidth) ? opt.dropdownMinWidth.call( self,opt ) : opt.dropdownMinWidth;
			min_w = min_w>0?min_w:input._outerWidth();
			w = Math.max( w,min_w );
			w = Math.min( w,win_w );
			if( max_w>0 ) {
				w = Math.min( w,max_w );	
			}
			
			isAutoWidth = true;
			if( dw != 0 || w != sw ) {
				isAutoWidth = false;
				dp._outerWidth( w );
				bd._outerWidth( dp.width()-self._getDropDownOtherWidth() );	
			} else {
				dp._removeStyle('width');	
				//做些微调整 如果出现了滚动条 应该加上滚动条的宽度
				var hasScroll = Nex.hasScroll( bd,'top' );
				if( hasScroll ) {
					isAutoWidth = false;
					var sbar = self.getScrollbarSize();
					w += (sbar.y + self._getDropDownOtherWidth());
					w = Math.min( w,win_w );
					dp._outerWidth( w );
					bd._outerWidth( dp.width() );	
				}
			}
			//记录状态
			self.__DP_autoWidth = isAutoWidth;
			self.__DP_autoHeight = isAutoHeight;
			
			self.fireEvent( 'onSetDropDownSize',[dp,1,opt] );
			
			return self;
		},
		_setDropDownSize2 : function(){
			var self = this,
				opt = self.configs;		
		
			var input = self.getDropDownShowAt();	
			
			var dp = $('#'+opt.id+'_dropdown');
			var bd = $('#'+opt.id+'_dropdown_body');
			
			//dropdownAutoScroll
			var win_w = $(window).width() - opt.dropdownEdge;
			var win_h = $(window).height() - opt.dropdownEdge;
			
			var w = $.isFunction(opt.dropdownWidth) ? opt.dropdownWidth.call( self,opt ) : opt.dropdownWidth,
				h = $.isFunction(opt.dropdownHeight) ? opt.dropdownHeight.call( self,opt ) : opt.dropdownHeight
				inputW = input._outerWidth();
			
			if( w == 0 ) {
				w = inputW;
			}
			h = parseInt( h,10 );
			h = isNaN(h) ? 0 : h;
			
			var isAutoHeight = false;
			var isAutoWidth = false;
			
			if( h == 0 || h == 'auto' ) {
				dp._removeStyle( 'height' );	
				bd._removeStyle( 'height' );
				isAutoHeight = true;	
				if( dp.outerHeight() > win_h ) {
					dp._outerHeight( win_h );	
					bd._outerHeight( dp.height() - self._getDropDownOtherHeight() );	
					isAutoHeight = false;		
				}
			} else {
				isAutoHeight = false;		
				dp._outerHeight( h );	
				bd._outerHeight( dp.height() - self._getDropDownOtherHeight() );		
			}
			
			if( w == 'auto' ) {
				isAutoWidth = true;
				dp._removeStyle( 'width' );	
				bd._removeStyle( 'width' );	
				if( dp.outerWidth() > win_w ) {
					isAutoWidth = false;
					dp._outerHeight( win_w );	
					bd._outerHeight( dp.width() - self._getDropDownOtherWidth() );			
				}
			} else {
				isAutoWidth = false;
				w = parseInt( w,10 );
				w = isNaN(w) ? inputW : w;
				dp._outerWidth( w );	
				bd._outerWidth( dp.width() - self._getDropDownOtherWidth() );	
			}
			//记录状态
			self.__DP_autoWidth = isAutoWidth;
			self.__DP_autoHeight = isAutoHeight;
			//应该计算最大最小
			self.fireEvent( 'onSetDropDownSize',[dp,2,opt] );
			
			return self;
		},
		setDropDownSize : function(){
			var self = this,
				opt = self.configs;	
			
			if( self.__dropdownMode == 2 ) {
				return 	self._setDropDownSize2();
			} else {
				return 	self._setDropDownSize1();	
			}
		},
		resetDropDownSize : function(){
			return this.setDropDownSize();
		},
		//@private
		__dp_click : function($this,e){
			var self = this;
			var opt = this.configs;
			var $$this = $($this);
			var id = $$this.attr('id');
			var data = self.__getItemData(id);
			
			if( data.disabled || $$this.hasClass('nex-form-dropdown-item-disabled') ) {
				return;	
			}
			
			var r = self.fireEvent("onDropDownItemClick",[data,$this,e,opt]);	
			if( r !== false ) {
				self._dropdownItemsSelect( data,$this,e );
			}
		},
		//设置选择状态
		dropdownSelectItems : function( value ){
			var self = this;
			var opt = this.configs;	
			var sep = opt.multiSplit;
			var dpb = $('#'+opt.id+'_dropdown_body');
			//self.unselectDropDownAll();
			var selected = String(value).split( sep );
			var _s = {};
			$.each(selected,function(i,v){
				_s[v] = true;	
			});	
			$('>.nex-form-dropdown-item',dpb).each( function(){
				var v = $(this).attr('value');
				if( v in _s ) {
					$(this).addClass('nex-form-dropdown-item-selected');	
				} else {
					$(this).removeClass('nex-form-dropdown-item-selected');	
				}
			} );
			return self;
		},
		_dropdownItemsSelect : function(data,el,e){
			var self = this;
			var opt = this.configs;	
			var $el = $(el);
			var isSelected = $el.hasClass('nex-form-dropdown-item-selected');
			if( opt.dropdownSingleSelect ) {
				if( isSelected ) {
					return;	
				}
				self.unselectDropDownAll();	
				$el.addClass('nex-form-dropdown-item-selected');
				//data.selected = true;
				if( opt.dropdownHideOnClick ) {
					self.hideDropDown();	
				}	
				self.fireEvent("onDropDownItemSelected",[data,el,e,opt]);
				self.fireEvent("onDropDownItemSelectedChange",[data[opt.valueKey],data[opt.textKey],data,el,e,opt]);
			} else {
				var sep = opt.multiSplit;
				var dpb = $('#'+opt.id+'_dropdown_body');
				var value = [];
				var text = [];
				if( isSelected ) {
					$el.removeClass('nex-form-dropdown-item-selected');
					self.fireEvent("onDropDownItemUnSelected",[data,el,e,opt]);
					//data.selected = false;
				} else {
					$el.addClass('nex-form-dropdown-item-selected');	
					self.fireEvent("onDropDownItemSelected",[data,el,e,opt]);
					//data.selected = true;
				}
				$('>.nex-form-dropdown-item-selected',dpb).each( function(){
					value.push( $(this).attr('value') );	
				} );
				$.each( value,function(i,v){
					var d = self.__getItemData( v,false );	
					if( d ) {
						text.push( d[ opt.textKey ] );		
					} else {
						text.push( v );	
					}
				} );
				self.fireEvent("onDropDownItemSelectedChange",[value.join(sep),text.join(sep),data,el,e,opt]);
			}
		},
		//@private
		__getItemData : function( id,isId ){
			var self = this,
				items = this.getDropDownItems(),
				opt = self.configs;	
			var isId = Nex.unDefined( isId, true );	
			var d = null;
			$.each( items.concat(self.__CItems) , function(i,v){
				if( !$.isPlainObject( v ) ) return;
				var value = isId ? v['__id'] : v[ opt.valueKey ];
				if( String(value) === String(id) ) {
					d = v;
					return false;
				}
			} );	
			return d;		
		},
		/*下拉框事件*/
		_setDropDownEvent : function(){
			var self = this,
				opt = self.configs;	
				
			var list = $('#'+opt.id+'_dropdown_body');
			
			var getItemData = function( id ){
				return self.__getItemData( id );
			};
			var _click = function(e){
				self.__dp_click(this,e);	
			};
			//下拉框列表事件
			list.undelegate('>.nex-form-dropdown-item')
				.delegate('>.nex-form-dropdown-item',{
				"mouseenter" : function(e){
					var $this = $(this);
					var id = $this.attr('id');
					var data = getItemData(id);
					
					if( data.disabled || $this.hasClass('nex-form-dropdown-item-disabled') ) {
						return;	
					}
					
					var r = self.fireEvent("onDropDownItemOver",[data,this,e,opt]);	
					if( r !== false ) {
						$this.addClass('nex-form-dropdown-item-over');
					}
				},
				"mouseleave" : function(e){
					var $this = $(this);
					var id = $this.attr('id');
					var data = getItemData(id);
					if( data.disabled || $this.hasClass('nex-form-dropdown-item-disabled') ) {
						return;	
					}
					
					var r = self.fireEvent("onDropDownItemOut",[data,this,e,opt]);	
					if( r !== false ) {
						$this.removeClass('nex-form-dropdown-item-over');
					}
				},
				"click" : _click
			});
			
			self.unsetDropDownEvent();
			
			self.fireEvent( 'onSetDropDownEvent',[opt] );
			
			return self;
		},
		/*
		*滚动到指定item
		*param value
		*/
		scrollToItem : function(val){
			var self = this;
			var opt = self.configs;	
			var items = self.getDropDownItems();//opt.items;
			var id = '';
			
			if( typeof val === 'object' ) {
				val = val[opt.valueKey];	
			}
			
			for( var i=0;i<items.length;i++ ) {
				if( items[i]['value']+'' === val+'' ) {
					id = items[i]['__id'];
					break;
				}	
			}
			
			if( !id ) {
				return self;	
			}
			
			var body = $("#"+opt.id+"_dropdown_body");
			
			if( !body.length ) {
				return self;	
			}
			
			var offset = body.offset();
			var h = body._outerHeight();
			
			var f = $("#"+id);
			if( !f.length ) {
				return self;	
			}
			
			var fo = f.offset();
			var fh = f._outerHeight();
			
			var outerHeight = 0;
			if( offset.top > fo.top ) {
				outerHeight = offset.top - fo.top;
			} else if( (offset.top+h) < (fo.top+fh) ) {
				outerHeight = (offset.top+h) - (fo.top+fh);
			}
			
			var sTop = 0;
			
			sTop = body.scrollTop() - outerHeight;
			
			body.scrollTop( sTop );
			
			return self;
		},
		scrollToItemById : function( id ){
			var self = this,
				opt = self.configs;	
			
			var d = self.__getItemData(id);
			if( d ) {
				self.scrollToItem( d );
			}
			return self;
		},
		unsetDropDownEvent : function(){
			var self = this,
				opt = self.configs;
			self.fireEvent('onUnsetDropDownEvent',[ opt ]);
			self.__unbindDropDown();
			return self;
		},
		//取消所有选中状态
		unselectDropDownAll : function(){
			var self = this,
				undef,
				opt = self.configs;
			var items = self.getDropDownItems();	
			$.each( items.concat(self.__CItems),function(i,d){
				if( typeof d === 'object' ) {
					d.selected = false;	
				}
			} );
			$('#'+opt.id+'_dropdown_body').find('>.nex-form-dropdown-item-selected').removeClass('nex-form-dropdown-item-selected');
			return self;
		},
		__DP_ShowAlign : 'bottom',
		/*默认动画显示下拉框*/
		_defaultDropDownShow : function( callback ){
			var self = this,
				undef,
				func,
				opt = self.configs;	
			var dropdown = $('#'+opt.id+'_dropdown');
			func = $.isFunction( callback ) ? callback : null;	
			
			dropdown._show();
			dropdown._visible(true);
			
			var at = self.getDropDownShowAt();
			dropdown.showAt(
				$.extend(
					{
						at:at
						,visibleEdge : opt.dropdownEdge
						,xAlign:'left'
						,yAlign:'bottom'
						,offsetY:0
						,autoShow : true
						,"onShow.dropdown" : function(pos,conf){
							self.__DP_ShowAlign = conf.yAlign;
							dropdown.removeClass('nex-form-dropdown-'+conf.yAlign);
							dropdown.addClass('nex-form-dropdown-'+conf.yAlign);
						} 
					}
				,opt.dropdownShowAt
				) 
			);
			
			if( $.isFunction( func ) ) {
				func.call( self,dropdown );
			}
			return self;
		},
		resetDropDownPos : function(){
			var self = this,
				undef,
				func,
				opt = self.configs;	
			var dropdown = $('#'+opt.id+'_dropdown');
			var at = self.getDropDownShowAt();
			
			var showat = Nex.Create('showAt',$.extend(
				  {
					  at:at
					  ,visibleEdge : opt.dropdownEdge
					  ,xAlign:'left'
					  ,yAlign:'bottom'
					  ,offsetY:0
				  }
				 ,opt.dropdownShowAt,{
					 el : dropdown
					 ,autoShow : false 
				 }
			  ));
			  
			  var pos = showat.getShowPos();
			  var yAlign = showat.C('yAlign');
			  
			  self.__DP_ShowAlign = yAlign;
			  
			  var shadow = null;
			  if( opt.dropdownShadowShow ) {
					shadow = self.getDropDownShadow();
					shadow.hide();
			  }
			  
			  dropdown.stop(true,true).animate(pos,opt.dropdownResetPosDuration,function(){
				  if( opt.dropdownShadowShow && shadow ) {
						shadow.show();
					}
				  self.resetDropDownShadow(); 
			  });
			
			return self;	
		},
		_defaultDropDownHide : function( callback ){
			var self = this,
				undef,
				opt = self.configs;	
			self.__DP_isShow = false;	
			var dp = $('#'+opt.id+'_dropdown');	
			//_visible(true|false)
			dp.stop(true,true)._visible( false )._hide();
			
			if( opt.dropdownHideToRemove ) {
				dp.remove();	
			}
			
			if( $.isFunction( callback ) ) {
				callback.call( self );
			}
			return self;
		},
		_animateDropDownShow : function( callback ){
			var self = this,
				undef,
				func,
				opt = self.configs;	
			var dropdown = $('#'+opt.id+'_dropdown');
			var db = $('#'+opt.id+'_dropdown_body');
			func = $.isFunction( callback ) ? callback : null;	
			
			//显示dropdown
			dropdown._show();
			dropdown._visible(true);
			
			var at = self.getDropDownShowAt();
			var showat = Nex.Create(
				'showAt',
				$.extend(
					{
						at:at
						,visibleEdge : opt.dropdownEdge
						,xAlign:'left'
						,yAlign:'bottom'
						,offsetY:0,
						"onShow.dropdown" : function(pos,conf){
							self.__DP_ShowAlign = conf.yAlign;
							dropdown.removeClass('nex-form-dropdown-'+conf.yAlign);
							dropdown.addClass('nex-form-dropdown-'+conf.yAlign);
						} 
					}
				,opt.dropdownShowAt
				,{ 
					el : dropdown
					,autoShow : false
				 }
				) 
			);
			
			var pos = showat.getShowPos();
			var yAlign = showat.C('yAlign');
			self.__DP_ShowAlign = yAlign;
			//----
			dropdown.removeClass('nex-form-dropdown-'+yAlign);
			dropdown.addClass('nex-form-dropdown-'+yAlign);
			var sh = dropdown.height();
			var _sh = dropdown.outerHeight();
			//如果dropdown是auto-width情况下设置宽度
			if( self.__DP_autoWidth ) {
				dropdown.width( dropdown.width() );
			}
			dropdown.height(0);
			
			db.addClass('nex-form-dropdown-anim-'+yAlign);
			
			var animBack = function(){
				self.__DP_ShowAlign = yAlign;
				dropdown.removeClass('nex-form-dropdown-'+yAlign);
				dropdown.addClass('nex-form-dropdown-'+yAlign);
				db.removeClass( 'nex-form-dropdown-anim-'+yAlign );
				if( self.__DP_autoWidth ) {
					dropdown._removeStyle( 'width' );
				}
				if( self.__DP_autoHeight ) {
					dropdown._removeStyle( 'height' );
				}
				//回调
				if( $.isFunction( func ) ) {
					func.call( self,dropdown );
				}		
			};
			
			if( yAlign === 'bottom' ) {
				dropdown.css( pos );
				dropdown.stop(true,true).animate({ height : sh },opt.dropdownDuration,opt.dropdownEasing,animBack);
			} else {
				var pos2 = {
						left : pos.left,
						top : pos.top+_sh
					}	
				dropdown.css( pos2 );	
				dropdown.stop(true,true).animate({ height : sh,top : pos.top },opt.dropdownDuration,opt.dropdownEasing,animBack);
			}
			return self;
		},
		_animateDropDownHide : function( callback ){
			return this._defaultDropDownHide.apply( this,arguments );
		},
		dropdownShadowShow : function(){
			var self = this,
				undef,
				opt = self.configs;
			var r = self.fireEvent('onBeforeDropDownShadowShow',[opt]);
			if( r === false ) {
				return self;	
			}	
			var shadow = $('#'+opt.id+'_dropdown_shadow');
			if( !shadow.length ) {
				shadow = $('<div id="'+opt.id+'_dropdown_shadow" class="nex-form-dropdown-shadow">'+(Nex.IEVer<=8?'<iframe style="width:99%;height:99%;"></iframe>':'')+'</div>').appendTo(document.body);
			}
			shadow.show();	
			var dropdown = self.getDropDown();
			shadow._width( dropdown.outerWidth() );
			shadow._height( dropdown.outerHeight() );
			shadow.css( dropdown.offset() )
				  .css( 'zIndex',self.dropdownzIndex-1 );
			self.fireEvent('onDropDownShadowShow',[opt]);
			shadow.removeClass('nex-form-dropdown-shadow-top nex-form-dropdown-shadow-bottom');
			shadow.addClass('nex-form-dropdown-shadow-'+self.__DP_ShowAlign);
			return self;
		},
		resetDropDownShadow : function(){
			var self = this,
				undef,
				opt = self.configs;
			var shadow = $('#'+opt.id+'_dropdown_shadow');
			var dropdown = self.getDropDown();
			shadow._width( dropdown.outerWidth() );
			shadow._height( dropdown.outerHeight() );
			
			shadow.css( dropdown.offset() );
			
			shadow.removeClass('nex-form-dropdown-shadow-top nex-form-dropdown-shadow-bottom');
			shadow.addClass('nex-form-dropdown-shadow-'+self.__DP_ShowAlign);
			return self;	
		},
		hideDropDownShadow : function(){
			var self = this,
				undef,
				opt = self.configs;
			var r = self.fireEvent('onBeforeDropDownShadowHide',[opt]);
			if( r === false ) {
				return self;	
			}		
			var shadow = $('#'+opt.id+'_dropdown_shadow');
			if( opt.dropdownHideToRemove ) {
				shadow.remove();
			} else {
				shadow.hide();	
			}
			self.fireEvent('onDropDownShadowHide',[opt]);
			return self;	
		},
		getDropDownShadow : function(){
			var self = this,
				opt = self.configs;	
			return $('#'+opt.id+'_dropdown_shadow');	
		},
		destroyDropDown : function(){
			if( this.isDropDownShow() ) {
				this.hideDropDown();
			}
			var dp = this.getDropDown();
			var dps = this.getDropDownShadow();
			dp.remove();
			dps.remove();
			this.__DP_isShow = false;
			this.__unbindDropDown();
			return this;
		}	
	});
});	
/*
Nex.Form  继承 Nex.Html
xtype form|textfield
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱
*/
define('Nex/form/AbstractForm',['require','Nex/form/Manager','Nex/util/Validate','Nex/container/Container','Nex/mixins/DropDown'],function(require){
	require('Nex/form/Manager');
	require('Nex/util/Validate');
	require('Nex/container/Container');
	require('Nex/mixins/DropDown');

	var form = Nex.define('Nex.form.AbstractForm','Nex.container.Container',{
		alias : 'Nex.Form Nex.form.AbstractForm',
		xtype : 'form abstractform',
		mixins : [ 'Nex.mixins.DropDown' ]	
	});
	//兼容以前版本
	//Nex.form = form;
	Nex.form.Form = form;
	
	form.addStatics({
		FormManager : Nex.FormManager,
		dropdownzIndex : 999999+Nex.zIndex
	});
	form.setOptions( function( opt ){
		return {
			prefix : 'nexform-',
			renderTo : document.body,
			disabledItems : true,
			//当DOM不存在是允许回收当前对象
			autoDestroy : true,
			//表单默认设置的是固定宽度，关闭了大小只适应
			autoResize : true,
			//From没有BodyView，虽然有但是大小不会改变
			_hasBodyView : false,
			_checkScrollBar : false,
			//不需要多余事件绑定
			denyEvents : true,
			autoWidthCls : [opt.autoWidthCls,'nex-form-auto-width'].join(' '),
			autoHeightCls : [opt.autoHeightCls,'nex-form-auto-height'].join(' '),
			borderCls : [opt.borderCls,'nex-form-border'].join(' '),
			containerCls : [opt.containerCls,'nex-form'].join(' '),
			//不是容器，不需要开启
			autoScroll : false,
			autoScrollCls : '',
			//是否创建后获得焦点
			autoFocus : false,
			//表单自带tabIndex,关闭系统自带的
			tabIndex : false,
			//多选控件时数据的分隔符
			multiSplit : ',',
			/*private*/
			__inputType : 'text',
			//是否显示Label
			showLabel : 'auto',//是否开启Label显示 atuo:如果存在labelText==''则不显示 否则显示， true:显示 false：不显示  
			labelCls : '',
			labelStyle : {},
			labelvAlign : 'top', // top middle bottom
			labelPosition : 'left',//left top bottom right
			labelAlign : 'left',
			labelText : '',
			labelWidth : 80,
			showPlaceholder : true,
			placeholder : '',
			autocomplete : 'off',
			//显示规则：inline block
			display : 'inline',
			//设置分组
			group : 'default',//分组
			//表单name
			name : '',
			//表单默认值
			value : '',
			_value : '',
			//默认情况下 如果inputText的文字改变是应该触发onChange
			//但是combobox 可选下拉框 就不需要触发onChange  
			//因为这些选择框的值都必须在items中选择
			inputTextChangeEvent : 'onChange',
			//inner或者outer
			triggerBtnsPosition : 'inner',
			triggerBtns : [],
			triggerBtnSelection : false,
			//点击triggerBtn输入框也会获得焦点 默认关闭
			triggerToFocus : false,
			//清空按钮
			cleanBtn : false,
			cleanDefault : '',//清除后的默认值
			inputAttrs : {},
			//数据设置时改变数据的值
			formater : null,
			//数据获取是可改变数据的值
			getFormater : null,
			//数据设置最终控制
			setFormater : null,
			//数据映射，单纯的数据显示时用 并不会实际改变输入框的值 eg : {1:'01'} 显示的时候是01 获取到的值是 1
			renderer : {},
			_renderer : {},//反renderer
			rendererDef : '_default_',
			validator : Nex.formValid || {},
			rules : [],
			showVaildMsg : true, //验证成功或者失败时 提示验证信息
			vaildMsgPosition : 'right', // top bottom left right
			validMsg : '',//验证提示信息，会一直存在
			validMsgOnFocus : '',//获得焦点时的提示信息
			validErrorMsg : '请填写正确信息！',
			validSuccessMsg : '通过信息验证！',
			//验证成功或者错误时提示信息
			//{ required : '当前数据不能为空！',email : '邮箱地址填写不正确',... } 不存在这使用validErrorMsg
			messages : {},
			validErrorCls : 'nex-form-valid-error',
			validSuccessCls : 'nex-form-valid-success',
			textKey : 'text',
			valueKey : 'value',
			items : [],//{cls:'',text:'年龄',value:'45',readOnly:false,disabled:false,selected:true,attrs:''} or '|' ',' ';'
			//_multiItems : [],//multi缓存数据
			splitChr : ['-',',',';','|'],
			_item :　{
				cls:'',
				text:'',
				value:'',
				readOnly:false,
				disabled:false,
				selected:false,
				title : '',//multiSelect
				display : 'inline-block'
			},
			itemDefault : {},
			//加载items时是否显示loading提示
			showItemsLoading : false,//暂时无效
			//加载items的ajax参数设置//暂时无效
			_ajaxOptions : {
				dataType : 'json',	
				type : 'GET'
			},//ajax自定义默认参数
			ajaxOptions : {},//ajax自定义参数 //暂时无效
			width : 150,
			height : 'auto',//textarea multselect
			autoValidDelay : 50,
			autoValidEvents : ['onChange','onBlur','onPaste'],//什么时候进行数据验证
			disabled : false,
			readOnly : false,
			cls : '',
			overCls : '',
			focusCls : '',
			disabledCls : '',
			readonlyCls : '',
			dropdownMinWidth : 0,//设置下拉列表的最小宽度和input宽度一样
			tpl : {
				inputTpl : '<div <%=attrs%> id="<%=id%>-input" type="<%=type%>" name="<%=name%>" autocomplete="<%=autocomplete%>" tabindex=<%=tabIndex%> value="" class="nex-form-field nex-form-field-<%=type%>"></div>',
				formTpl : '<table id="<%=id%>-inner" class="nex-field nex-form-inner" cellspacing="0" cellpadding="0" ><tbody>'
								+'<tr id="<%=id%>-inputRow">'
									+'<td class="nex-form-inner-body" id="<%=id%>-body-td">'
										+'<div id="<%=id%>-body" class="nex-form-body">'
											+'__inputTpl__'
											+'<label id="<%=id%>-placeholder" class="nex-form-placeholder"><%=placeholder%></label>'//for="<%=id%>-input"
											+'<div id="<%=id%>-trigger-body" class="nex-form-trigger-body"></div>'
										 +'</div>'
									+'</td>'
								+'</tr>'
							+'</tbody></table>'
			},
			events : {}
		};	
	} );
	form.override({
		_triggerID : 1,
		initComponent : function() {
			var self = this;
			var opt = this.configs
			self.callParent(arguments);
			
			self._checkOptions( opt );
			
			self._setFormView()
			//检查参数
			self.initFormField();
		},
		
		initFormField : function(){
			var self = this,
				opt = this.configs;
				
			self.checkLabelSet();	
		},
		onCreate : function(){
			var self = this;	
			self.callParent(arguments);
			
			if( Nex.FormManager ) {
				Nex.FormManager.add(self);	
			}
			
			self._afterCreate();
		},
		_checkOptions : function( opt ){
			//opt.cls += ' nex-form-group-'+opt.group;
			//opt.cls += ' nex-form-display-'+opt.display;
			this.el.addClass( 'nex-form-display-'+opt.display );
			if( Nex.isArray( opt.items ) ) {
				opt.items = opt.items.concat([]);	
			}
			return this;
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			
			self.callParent(arguments);
			
			self.bind("onMouseOver._sys",self._setOverCls,self);
			self.bind("onMouseOut._sys",self._unsetOverCls,self);
			
			self.bind("onFocus._sys",self._setFocusCls,self);
			self.bind("onBlur._sys",self._unsetFocusCls,self);
			
			self.bind("onChange._sys",self._triggerPlaceholder,self);
			self.bind("onBlur._sys",self.refreshFormater,self);//refreshFormater
			self.bind("onBlur._sys",self.refreshRenderer,self);
			
			self.bind("onValidError._sys",self.setValidError,self);
			self.bind("onValidSuccess._sys",self.setValidSuccess,self);
			for(var i=0;i<opt.autoValidEvents.length;i++ ) {
				var s = self.bind(opt.autoValidEvents[i],self._autoValid,self);	
			}
			
			self.bind('onDropDownItemSelectedChange._sys',self._setDropDownValue,self);
			
			return self;
		},
		/*
		*作为备份用，如果用户没有定义tpl.formTpl 那么会使用当前函数
		*/
		formTpl : function(d){
			var text = [];
			/*
			text.push('<table id="'+d.id+'-inner" class="nex-field nex-form-inner" cellspacing="0" cellpadding="0" ><tbody>');//style="table-layout:fixed;" 不建议设置 IE 67 下会有问题
			text.push('<tr id="'+d.id+'-inputRow">');
				text.push('<td class="nex-form-inner-body" id="'+d.id+'-body-td">');	
				text.push('<div id="'+d.id+'-body" class="nex-form-body">');	
					text.push('<div '+d.attrs+' id="'+d.id+'-input" name="'+d.name+'" tabindex='+d.tabIndex+' value="" style="width:0px;" class="nex-form-field"></div>');
				text.push('</div></td>');
			text.push('</tr>');
			text.push('</tbody></table>');
			*/
			return text.join("");	
		},
		/*
		*获取表单模版
		*/
		_getFormTpl : function(){
			var self = this,
				opt = self.configs;
			var d = $.extend({},opt);
			var attrs = [];	
			if( $.isPlainObject( d.inputAttrs ) ) {
				$.each( d.inputAttrs,function(k,v){
					attrs.push(k+'='+v);
				} );
			}
			attrs.join(' ');
			d.attrs = attrs;
			d.tabIndex = ++Nex.tabIndex;
			d.placeholder = opt.placeholder;
			d.type = opt.__inputType;
			//__inputTpl__
			var inputTpl = opt.tpl.inputTpl || '';
			var formTpl = opt.tpl.formTpl || '';
			formTpl = formTpl.replace( /__inputTpl__/ig,inputTpl );
			
			var tpl = self.tpl( formTpl,d );
			
			return tpl;
		},
		getBody : function(){
			var self = this,
				opt = self.configs;
			return $('#'+opt.id+'-body');
		},
		/*
		*设置组件HTML
		*/
		_setFormView : function(){
			var self = this,
				opt = self.configs,
				container = opt.views['container'];
			container.html( self._getFormTpl() );
			opt.views['body'] = $('#'+opt.id+'_body');
			
			self._setSysTriggerBtns();
			self._setTriggerBtns();
			self._bindEvent();
			
			self.fireEvent("onSetFormView",[opt]);	
			
			return self;
		},
		/*重载设置系统的trigger btn*/
		_setSysTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			if( opt.cleanBtn ) {
				var cdf = opt.cleanDefault;
				self.addInnerTriggerBtn({
					cls : 'nex-form-clear-trigger',
					iconCls : 'nex-form-clear-icon',
					callBack : function(){
						var oldValue = self.getInputText();
						self.val(cdf);	
						var newValue = self.getInputText();
						if( opt.inputTextChangeEvent ) {
							self.fireEvent(opt.inputTextChangeEvent,[ newValue,oldValue ]);
						}
						self.fireEvent('onTextChange',[ newValue,oldValue ]);
						self.fireEvent('onClean',[ newValue,oldValue ]);
						//triggerToFocus 如果这个关闭状态下 我们需要手动设置focus , 如果是开启状态下则会自动设置focus
						if( !opt.triggerToFocus ) {
							self.focus();
						}
					}	
				});
			}
			//cleanBtn	
			return self;
		},
		/*设置触发按钮*/
		_setTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			var html = [];	
			var method = opt.triggerBtnsPosition === 'inner' ? 'addInnerTriggerBtn' : 'addOuterTriggerBtn';
			$.each( opt.triggerBtns,function(i,d){
				if( $.isArray( d ) && d.length>1 ) {
					self[method].call(self,d[0],d[1]);		
				} else {
					self[method].call(self,d);		
				}
			} );	
		},
		doSetViewSize : function(){
			var self = this,
				opt = self.configs,
				container = opt.views['container'],
				vbody = opt.views['body'],
				input = self.getInput();
			
			self.callParent(arguments);
				
			if( !self.isAutoWidth() ) {	
				input.width(0);
				var inputRow = $("#"+opt.id+"-inputRow");
				var w = 0;
				$('>td',inputRow).not('.nex-form-inner-body').each( function(){
					w += $(this)._outerWidth();	
				} );
				input._outerWidth( container.width()-w );
			}
			if( !self.isAutoHeight() ) {
				vbody._outerHeight( container.height() );	
			}
			
		},
		/*
		*设置Lable
		*/
		_setLabel : function(){
			var self = this,
				td = [],
				opt = self.configs;
			var ltd = $('#'+opt.id+'-label-td');
			if( ltd.size() ) {
				ltd.remove();	
			}
			td.push('<td valign="'+opt.labelvAlign+'" align="'+opt.labelAlign+'" id="'+opt.id+'-label-td" class="nex-form-inner-label nex-form-inner-label-'+opt.labelvAlign+'">');	
				td.push('<label id="'+opt.id+'-label" class="nex-form-label '+opt.labelCls+'"></label>');//for="'+opt.id+'-input" 
			td.push('</td>');
			
			var $td = $(td.join(''));
			
			$("#"+opt.id+"-body-td").before($td);
			
			$('#'+opt.id+'-label').css( opt.labelStyle );
			
			return self;	
		},
		setLabel : function(){
			return this._setLabel();	
		},
		/*
		*设置Label位置
		*/
		_setLabelPosition : function( pos ){
			var self = this,
				undef,
				opt = self.configs,
				pos = pos === undef ? 'left' : pos;	
			var _pos = {
				left : true,
				top : true,
				bottom : true,
				right : true	
			};	
			pos = _pos[pos] ? pos : 'left';
			
			opt.labelPosition = pos;
			
			//td-label
			var td = $("#"+opt.id+"-label-td");
			var inputRow = $("#"+opt.id+"-inputRow");
			$('#'+opt.id+'-label-tb').remove();
			var tr = null;
			if( $.inArray( pos,['top','bottom'] ) !== -1 ) {
				tr = $('<tr id="'+opt.id+'-label-tb"></tr>');	
			}
			
			if( pos === 'left' ) {
				$("#"+opt.id+"-body-td").before(td);
			} else if( pos === 'right' ) {
				$(">td:last",inputRow).after(td);
			} else if( pos === 'top' ) {
				if( tr ) {
					inputRow.before(tr);
					tr.append( td );
				}
			} else {
				if( tr ) {
					inputRow.after(tr);	
					tr.append( td );
				}
			}
			
			$('#'+opt.id+'-label').removeClass('nex-form-label-left nex-form-label-right nex-form-label-top nex-form-label-bottom')
								  .addClass('nex-form-label-'+pos);
			
			return self;
		},
		setLabelPosition : function(pos){
			this._setLabelPosition(pos);
			this._setLabelWidth( this.configs.labelWidth );
			this.resetViewSize();
			return this;		
		},
		/*
		*设置Label内容
		*/
		_setLabelText : function( text ){
			var opt = this.configs;
			var label = $('#'+opt.id+'-label');
			label.empty();
			this.renderComponent( text || opt.labelText,label );
			return this;	
		},
		setLabelText : function( text ){
			this._setLabelText(text);
			return this;	
		},
		/*
		*设置Lable宽度
		*/
		_setLabelWidth : function( w ){
			var opt = this.configs;
			//opt.labelPosition
			var label = $('#'+opt.id+'-label');
			if( opt.labelPosition == 'left' || opt.labelPosition == 'right' ) {
				label._outerWidth( w || opt.labelWidth );
			} else {
				label._removeStyle('width');	
			}
			return this;	
		},
		setLabelWidth : function( w ){
			this._setLabelWidth(w);
			this.resetViewSize();
			return this;	
		},
		checkLabelSet : function(){
			var self = this,
				opt = this.configs;	
			var showLabel = opt.showLabel;
			if( showLabel === 'auto' ) {
				showLabel = opt.labelText === '' ? false : true;
			}	
			
			if( !showLabel ) return self;	
			self._setLabel()
				._setLabelPosition( opt.labelPosition )
				._setLabelWidth( opt.labelWidth )
				._setLabelText( opt.labelText );
			return self;		
		},
		_afterCreate : function(){
			var self = this,
				opt = self.configs;
			if( opt.disabled ) {
				self._disabled();
			}
			if( opt.readOnly ) {
				self._readOnly( true );
			}
			if( opt.autoFocus ) {
				self.focus();	
			}
			
			opt._value = opt.value;
			if( opt.value !== '' ) {
				self.lockEvent('onChange');
				//初始值设置
				self.setValue( opt.value );	
				self.unLockEvent('onChange');
				//初始化设置值时会触发onInitChange
				self.fireEvent('onInitChange',[opt.value,'']);
				if( opt.showPlaceholder ) {
					self.hidePlaceholder();
				}
			} else {
				if( opt.showPlaceholder ) {
					self.showPlaceholder();
				}
			}
		},
		//无效
		_appendContent : function(){},
		__placeholderShow : false,
		_triggerPlaceholder : function( value ){
			if( !this.configs.showPlaceholder ) {
				return;	
			}
			if( value === '' ) {
				this.showPlaceholder();	
			} else {
				this.hidePlaceholder();		
			}
		},
		/*
		*获取placeholder
		*/
		getPlaceholder : function(){
			var opt = this.configs;
			var ph = $("#"+opt.id+"-placeholder");
			return ph;	
		},
		getPlaceholderText : function(){
			return this.configs.placeholder;	
		},
		setPlaceholder : function( text ){
			var text = this._undef( text,'' );
			if( text !== '' ) {
				this.configs.placeholder = text;
				this.getPlaceholder().html( text );
			}
			return this;
		},
		showPlaceholder : function(){
			if( !this.__placeholderShow ) {
				this.getPlaceholder().addClass('nex-form-placeholder-show');
			}
			this.__placeholderShow = true;	
			this.el.addClass('nex-form-empty');
			return this;
		},
		hidePlaceholder : function(){
			if( this.__placeholderShow ) {
				this.getPlaceholder().removeClass('nex-form-placeholder-show');
			}
			this.__placeholderShow = false;
			this.el.removeClass('nex-form-empty');
			return this;
		},
		/*
		*获取显示的input
		*/
		__input : null,
		getInput : function(){
			var self = this;
			var opt = self.configs;
			self.__input = self.__input ? self.__input : $("#"+opt.id+"-input");
			return self.__input;
		},
		/*
		*获取实际中的input 一般和input相同
		*/
		__inputreal : null,
		getInputReal : function(){
			var self = this;
			var opt = self.configs;
			self.__inputreal = self.__inputreal ? self.__inputreal : $("#"+opt.id+"-input");
			return self.__inputreal;
		},
		//判断元素是否属于input, textarea, select 和 button 元素
		_isInput : function( el ){
			return $(el).is(':input');	
		},
		/*
		*获取输入框的值
		*/
		getInputValue : function(){
			var self = this;
			var opt = self.configs;
			var input = self.getInputReal();
			
			var value = self._isInput( input ) ? input.val() : input.html();
			
			return value;	
		},
		setInputValue : function( value ){
			var self = this;
			var opt = self.configs;
			var input = self.getInputReal();
			self._isInput( input ) ? input.val( value ) : input.html( value );
			
			self.currentValue = value;
			
			return self;
		},
		/*
		*private
		*/
		getInputWidth : function(){
			return this.getInput()._outerWidth();		
		},
		/*
		*获取输入框的显示值 一般和getInputValue相同
		*/
		getInputText : function(){
			var self = this;
			var opt = self.configs;
			var input = self.getInput();
			
			var value = self._isInput( input ) ? input.val() : input.html();
			
			return $.trim( value );	
		},
		setInputText : function( value ){
			var self = this;
			var opt = self.configs;
			var input = self.getInput();
			self._isInput( input ) ? input.val( value ) : input.html( value );
			return self;
		},
		//过渡用 目前已经没用
		currentValue : '',
		/*
		*获取当前组件值
		*/
		getValue : function(){
			var self = this,undef;
			var opt = self.configs;
			
			var value = $.trim( self.rendererDecode( self.getInputValue() ) );
			
			if( $.isFunction( opt.getFormater ) ) {
				var val = opt.getFormater.call( self,value );
				value = val === undef ? value : val;
			}
			
			var _d = {
				value : value	
			};
			
			self.fireEvent('onGetValue',[ _d ]);
			self.currentValue = _d.value;
			
			return _d.value;
		},
		_oldValue : null,
		setValue : function(){
			var self = this,
				opt = this.configs,
				undef;
			var argvs = [].slice.apply(arguments);
			//记录表单改变之前的值
			var oldValue = self._oldValue === null ? self.getValue() : self._oldValue;
			self._oldValue = oldValue;
			
			self.fireEvent('onSetValue',[argvs]);
			
			if( $.isFunction( opt.setFormater ) ) {
				var val = opt.setFormater.apply( self,argvs );
				if( val !== undef ) {
					if( !$.isArray( val ) ) {
						argvs = [ val ];	
					}
				}
			}
			//formater 一般不建议使用 只对设置时有效
			if( $.isFunction( opt.formater ) ) {
				var val = opt.formater.apply( self,argvs );
				if( val !== undef ) {
					if( !$.isArray( val ) ) {
						argvs = [ val ];	
					}
				}
			}
			
			if( !argvs.length ) {
				return self;	
			}
			
			var v = argvs[0]+'';
			//显示映射
			argvs[0] = self.rendererEncode(argvs[0]);
			
			self.setInputValue.apply(self, argvs );
			
			var newValue = v;
			
			if( oldValue !== newValue && self._oldValue!==null ) {
				self._oldValue = null;
				opt.value = newValue;
				self.fireEvent('onChange',[newValue,oldValue]);	
			}
			
			return self;
		},
		val : function(){
			var self = this,undef;
			var opt = self.configs;
			//设置当前值
			if( arguments.length ) {
				return self.setValue.apply( self,arguments );	
			} else {
				return self.getValue();	
			};
		},
		__isFocus : false,//focus 状态
		_focusValue : null,
		_bindInputEvent : function(){
			var self = this;
			var opt = self.configs;	
			var input = $("#"+opt.id+"-input");
			
			var i19t = opt.inputTextChangeEvent;
			
			var events = {
				'click' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var r = self.fireEvent('onClick',[ this,e ]);	
					if( r === false ) return false;
				},
				'focus' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					
					self._focusValue = self.getInputText();//
					
					//var input = $('#'+opt.id+"-input");
					input.addClass('nex-form-field-focus');
					$('#'+opt.id).addClass('nex-form-focus');
					if( !self.__isFocus ) {
						var r = self.fireEvent('onFocus',[ this,e ]);	
						self.__isFocus = true;
						if( r === false ) return false;
					}
					
				},
				'blur' : function(e) {
					self.__isFocus = false;
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					
					var oldValue = self._focusValue;
					var newValue = self.getInputText();
					
					//var input = $('#'+opt.id+"-input");
					input.removeClass('nex-form-field-focus');
					
					$('#'+opt.id).removeClass('nex-form-focus');
					
					if( oldValue !== newValue ) {
						opt.value = newValue;
						if( i19t ) {
							self.fireEvent(i19t,[ newValue,oldValue ]);
						}
						self.fireEvent('onTextChange',[ newValue,oldValue ]);
					}
					
					var r = self.fireEvent('onBlur',[ this,e ]);	
					if( r === false ) return false;
				},
				'keydown' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					self._oldValue = self._oldValue === null ? self.getInputText() : self._oldValue;
					var r = self.fireEvent('onKeyDown',[ this,e ]);	
					if( r === false ) return false;
					
				},
				'keyup' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var oldValue = self._oldValue;
					var newValue = self.getInputText();
					if( oldValue !== newValue && self._oldValue!==null ) {
						opt.value = newValue;
						self._focusValue = newValue;
						if( i19t ) {
							self.fireEvent(i19t,[ newValue,oldValue ]);	
						}
						self.fireEvent('onTextChange',[ newValue,oldValue ]);
						self._oldValue =null;
					}
					var r = self.fireEvent('onKeyUp',[ this,e ]);	
					if( r === false ) return false;
				},
				'keypress' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;		
					}
					var r = self.fireEvent('onKeyPress',[ this,e ]);	
					if( r === false ) return false;
				},
				'mouseenter' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;		
					}
					var r = self.fireEvent('onMouseOver',[ this,e ]);	
					if( r === false ) return false;
				},
				'mouseleave' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var r = self.fireEvent('onMouseOut',[ this,e ]);	
					if( r === false ) return false;
				},
				'paste' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var r = self.fireEvent('onPaste',[ this,e ]);	
					if( r === false ) return false;
				},
				'mousedown' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var r = self.fireEvent('onMouseDown',[ this,e ]);	
					if( r === false ) return false;
				},
				'mouseup' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var r = self.fireEvent('onMouseUp',[ this,e ]);	
					if( r === false ) return false;
				}
			};
			
			input.bind(events);
		},
		_bindEvent : function(){
			var self = this;
			var opt = self.configs;
			
			var dom = self.el;
			var inputRow = $("#"+opt.id+"-inputRow");
			var input = $("#"+opt.id+"-input");
			var bd = $("#"+opt.id+"-body");
			var trigger = $("#"+opt.id+"-trigger-body");
			
			var __t = 0;
			var triggerEvns = {
				'click' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnClick',[ data,this,e ]);	
					if( r === false ) return false;
					
					//input.trigger('click',[e]);
				},
				'dblclick' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnDblClick',[ data,this,e ]);	
					if( r === false ) return false;
					
					//input.trigger('dblclick',[e]);
				},
				'mouseenter' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;		
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnOver',[ data,this,e ]);	
					if( r === false ) return false;
					
					$this.addClass('nex-form-trigger-btn-over');
					//input.trigger('mouseenter',[e]);
				},
				'mouseleave' : function(e){
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnOut',[ data,this,e ]);	
					if( r === false ) return false;
					
					$this.removeClass('nex-form-trigger-btn-over');
					//input.trigger('mouseleave',[e]);
				}, 
				'mousedown' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnDown',[ data,this,e ]);	
					if( r === false ) return false;
					
					$this.addClass('nex-form-trigger-btn-down');
					__t = setTimeout(function(){
						__t = 0;
						$(document).one('mouseup',function(){
							$this.removeClass('nex-form-trigger-btn-down');	
						});	
					},0);
					
					//input.trigger('mousedown',[e]);
				},
				'mouseup' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					var $this = $(this);
					var tid = parseInt($this.attr('tid'))-1;
					var data = self.__TriBtns[tid];
					var r = self.fireEvent('onTriggerBtnUp',[ data,this,e ]);	
					if( r === false ) return false;
					
					$this.removeClass('nex-form-trigger-btn-down');
					if( __t ) {
						clearTimeout( __t );	
						__t = 0;
					}
					//input.trigger('mouseup',[e]);
				}
			};
			var placeholderEvns = {
				'click' : function(e) {
					e.stopPropagation();
					e.preventDefault();
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					input.trigger('click',[e]);
				},
				'mouseenter' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					input.trigger('mouseenter',[e]);
				},
				'mouseleave' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					input.trigger('mouseleave',[e]);
				},
				'mousedown' : function(e) {
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					
					input.trigger('mousedown',[e]);
					
					if( $(this).hasClass('nex-form-placeholder') || $(this).hasClass('nex-form-inner-label') ) {
						input.trigger('focus',[e]);	
						
					} else {
						if( opt.triggerToFocus ) {
							input.trigger('focus',[e]);
						}
					}
					e.stopPropagation();
					e.preventDefault();
				},
				'mouseup' : function(e) {
					e.stopPropagation();
					e.preventDefault();
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					input.trigger('mouseup',[e]);
				}
			};
			
			self._bindInputEvent();
			
			bd.undelegate('>.nex-form-placeholder')
			  .delegate('>.nex-form-placeholder',placeholderEvns);
					   
			trigger.undelegate('>.nex-form-trigger-btn')
				   .delegate('>.nex-form-trigger-btn',triggerEvns);
				   
			trigger.bind( placeholderEvns );	
			
			dom.undelegate('[id="'+opt.id+'-label-td"]')
			   .delegate('[id="'+opt.id+'-label-td"]',placeholderEvns);
			//nex-form-label nexform-10-label-td   
				   
			inputRow.undelegate('>.nex-form-outer-trigger-td >.nex-form-outer-trigger-body >.nex-form-trigger-btn')
					.delegate('>.nex-form-outer-trigger-td >.nex-form-outer-trigger-body >.nex-form-trigger-btn',triggerEvns);
			
		},
		__TriBtns : [],
		/*
		*添加触发按钮
		*@param 任意文字,对象或者Nex组件
		*@param 触发按钮按下后调用的回调 可选
		*@param private
		*/
		addInnerTriggerBtn : function( d,callback,_tb ){
			var self = this,
				opt = self.configs;
			var trigger = _tb ? $(_tb) : $("#"+opt.id+"-trigger-body");
			var tid = self.__TriBtns.push( d );
			var _d = {
				text : '',
				icon : '',
				cls : '',
				iconCls : '',
				callBack : null,//兼容以前的用法
				callback : null,
				handler : null	
			};
			
			if( $.type( d ) === 'string' || $.type( d ) === 'number' ) {
				var text = d+'';	
				d = $.extend( {},_d,{
					text : text	
				} );
			} else {
				for( var k in _d ) {
					if( k in d ) {
						continue;
					}	
					d[k] = _d[k];
				}
			}
			
			var tpl = ['<div id="'+opt.id+'-inner-trigger-'+tid+'" tid="'+tid+'" class="nex-form-trigger-btn '+( d.icon || d.iconCls ? 'nex-form-trigger-has-icon':'' )+' '+d.cls+'">'];
			if( d.icon || d.iconCls ) {
				var _cs = d.icon ? 'style="background-image:url('+d.icon+')"' : '';
				tpl.push('<span class="nex-form-trigger-icon '+d.iconCls+'" '+_cs+'></span>');	
			}
			
			//tpl.push( d.text );
			
			tpl.push( '</div>' );
			var $tpl = $(tpl.join(''));
			$tpl.prependTo( trigger )
			    .bind('click',function(e){
					if( opt.disabled || opt.readOnly ) {
						return;	
					}
					if( $.isFunction( callback ) ) {
						return callback.call( self,d,e );	
					}	
					if( $.isFunction( d.callBack ) ) {
						return d.callBack.call( self,d,e );	
					}
					if( $.isFunction( d.callback ) ) {
						return d.callback.call( self,d,e );	
					}
					if( $.isFunction( d.handler ) ) {
						return d.handler.call( self,d,e );	
					}	   
			    });
			
			if( !opt.triggerBtnSelection ) {	
				$tpl.disableSelection();
			}
			
			if( Nex.isXtype( d ) || Nex.isClass( d ) ) {
				self.renderComponent( d.text,$tpl );	
			} else if( Nex.isInstance( d ) ) {
				$tpl.append( d.getDom() );	
			} else {
				self.renderComponent( d.text,$tpl );
			}
			return tid;
		},
		removeInnerTriggerBtn : function( tid ){
			var self = this,
				opt = self.configs;
			if( typeof tid === 'undefined' ) {
				return self;	
			}
			tid = parseInt(tid) - 1;
			self.__TriBtns[tid] = null;
			$('#'+opt.id+'-inner-trigger-'+tid).remove();
			
			Nex.gc();
			
			return self;
		},
		/*
		*添加触发按钮
		*@param 任意文字或者Nex组件
		*@param 触发按钮按下后调用的回调 可选
		*/
		addOuterTriggerBtn : function( msg,callback ){
			var self = this,
				opt = self.configs;	
			
			var bid = opt.id+'-outer-trigger-body';
			var $td = $('#'+bid+'-td');
			if( !$td.length ) {
				var td = [];
				td.push('<td valign="'+opt.labelvAlign+'" id="'+bid+'-td" align="'+opt.labelAlign+'" class="nex-form-outer-trigger-td">');	
						td.push('<div id="'+bid+'" class="nex-form-outer-trigger-body"></div>');
				td.push('</td>');	
				var td = $(td.join(""));
				
				var triggerBtnTd = $("#"+opt.id+"-inputRow td:last");
				triggerBtnTd.after(td);
			} else {
				var td = $td;	
			}
			/*var itemBtn = td.find(">div");
			if( $.isFunction(callback) ) {
				itemBtn.bind('click',function(e){
					callback.call( self,itemBtn,e );	
				});
			}
			
			self.renderComponent( msg,itemBtn );*/
			
			var tid = self.addInnerTriggerBtn( msg,callback,$('#'+opt.id+'-outer-trigger-body') );
			
			td.attr(opt.id+'-outer-trigger-td-'+tid);
				
			self.resetViewSize();
			
			return tid;
		},
		removeOuterTriggerBtn : function( tid ){
			var self = this,
				opt = self.configs;	
				
			self.removeInnerTriggerBtn( tid );
			$('#'+opt.id+'-outer-trigger-td-'+tid).remove();
				
			self.resetViewSize();
					
			return self;
		},
		_disabled : function(){
			var self = this,
				opt = self.configs,
				input = self.getInput(),
				field = self.getDom();
			
			opt.disabled = true;
			input.attr('disabled',true);	 
			
			field.addClass('nex-form-disabled');
			if( opt.disabledCls ) {
				field.addClass(opt.disabledCls);	
			}
			
			return self;	
		},
		disabled : function(){
			var self = this;
			var opt = self.configs;
			
			self._disabled();
			
			self.fireEvent("onDisabled",[opt]);	
			return self;
		},
		_enable : function(){
			var self = this,
				opt = self.configs,
				input = self.getInput(),
				field = self.getDom();
				
			opt.disabled = false;	
			
			input.attr('disabled',false);	
			
			field.removeClass('nex-form-disabled');
			if( opt.disabledCls ) {
				field.removeClass(opt.disabledCls);	
			}
			
			return self;	
		},
		enable : function(){
			var self = this,
				opt = self.configs;
			
			self._enable();	
				
			self.fireEvent("onEnable",[opt]);	
			return self;
		},
		_readOnly : function( flag ){
			var self = this,
				undef,
				input = self.getInput(),
				field = self.getDom(),
				opt = self.configs;
			var flag = flag === undef ? true : flag;
			opt.readOnly = flag;
			input.attr('readonly',flag);	
			
			if( flag ) {
				self.fireEvent("onReadOnly",[opt]);	
				field.addClass('nex-form-readonly');
				if( opt.readonlyCls ) {
					field.addClass(opt.readonlyCls);	
				}
			} else {
				self.fireEvent("onUnReadOnly",[opt]);		
				field.removeClass('nex-form-readonly');
				if( opt.readonlyCls ) {
					field.removeClass(opt.readonlyCls);	
				}
			}
			return self;	
		},
		readOnly : function( flag ){
			var self = this,
				undef,
				opt = self.configs;
			
			var flag = flag === undef ? true : flag;
			
			self._readOnly( flag );
			
			if( flag ) {
				self.fireEvent("onReadOnly",[opt]);			
			} else {
				self.fireEvent("onUnReadOnly",[opt]);		
			}
			return self;
		},
		setValidError : function(){
			var self = this;
			var opt = self.configs;
			var el = $("#"+opt.id);
			self.resetVaildCss();
			el.addClass(opt.validErrorCls);
		},
		setValidSuccess : function(){
			var self = this;
			var opt = self.configs;
			var el = $("#"+opt.id);
			self.resetVaildCss();
			el.addClass(opt.validSuccessCls);
		},
		resetVaildCss : function(){
			var self = this;
			var opt = self.configs;
			var el = $("#"+opt.id);
			el.removeClass(opt.validErrorCls);	
			el.removeClass(opt.validSuccessCls);	
		},
		_setFocusCls : function(t,e){
			var self = this;
			var opt = self.configs;
			if( opt.disabled || opt.readOnly ) {
				return;	
			}
			var field = self.el;
			field.addClass('nex-form-focus');
			if( opt.focusCls ) {
				field.addClass(opt.focusCls);	
			}	
		},
		_unsetFocusCls : function(t,e){
			var self = this;
			var opt = self.configs;
			if( opt.disabled || opt.readOnly ) {
				return;	
			}
			var field = self.el;
			field.removeClass('nex-form-focus');
			if( opt.focusCls ) {
				field.removeClass(opt.focusCls);	
			}	
		},
		_setOverCls : function(t,e){
			var self = this;
			var opt = self.configs;
			if( opt.disabled || opt.readOnly ) {
				return;	
			}
			var field = self.el;
			field.addClass('nex-form-over');
			$('>.nex-form-inner',field).addClass('nex-form-inner-over');
			if( opt.overCls ) {
				field.addClass(opt.overCls);	
			}
		},
		_unsetOverCls : function(t,e){
			var self = this;
			var opt = self.configs;
			if( opt.disabled || opt.readOnly ) {
				return;	
			}
			var field = self.el;
			field.removeClass('nex-form-over');
			$('>.nex-form-inner',field).removeClass('nex-form-inner-over');
			if( opt.overCls ) {
				field.removeClass(opt.overCls);	
			}
		},
		_autoValid :　function(){
			var self = this;
			var opt = self.configs;
			if( opt._ct ) {
				clearTimeout( opt._ct )
			}
			opt._ct = setTimeout(function(){
				self.checkVal();
				opt._ct = 0;	
			},opt.autoValidDelay);
		},
		hidden : function(){
			return this.hide();
		},
		"focus" : function(){
			var self = this;
			try{
				self.getInput().focus();
			}catch(e){};
		},
		"select" : function(){
			var self = this;
			try{
				self.getInput().select();
			}catch(e){};
		},
		selectText : function(start, end){
			var self = this,
				opt = self.configs,
				v = self.val(),
				undef,
				el = self.getInput().get(0),
				range;
	
			if (v.length > 0) {
				start = start === undef ? 0 : start;
				end = end === undef ? v.length : end;
				if (el.setSelectionRange) {
					el.setSelectionRange(start, end);
				}
				else if(el.createTextRange) {
					range = el.createTextRange();
					range.moveStart('character', start);
					range.moveEnd('character', end - v.length);
					range.select();
				}
				
			}
			self.focus();
		},
		"blur" : function(){
			var self = this;
			try{
				self.getInput().blur();
			} catch(e){}
		},
		checkVal : function(){
			var self = this;
			var opt = self.configs;
			var r = true;
			var rules = $.isArray(opt.rules) ? opt.rules : [ opt.rules ];
			//var validator = opt.validator;
			//Validate
			var validator = Nex.getUtil('Validate');
			var rule;
			var value = self.val();
			//var value = $.nexForm.getVal( opt.name,opt.group );
			var checkList = [];//验证函数
		
			for( var x=0;x<rules.length;x++ ) {
				rule = rules[x];
				if( $.isFunction(rule) ) {
					checkList.push( { method : rule, rule : null, params : null } );
				} else if( $.isPlainObject(rule) ){
					for(var i in rule ) {
						if( $.isFunction(rule[i]) ) {
							checkList.push( { method : rule[i] , rule : i, params : null } );
						} else if( (i in validator) && $.isFunction( validator[i] ) ){
							checkList.push( { method : validator[i], rule : i, params : rule[i] } );
						}
					}
				} else if( typeof rule === 'string' 
							&& ( rule in validator ) 
							&& $.isFunction( validator[rule] ) 
				) {
					checkList.push( { method : validator[rule], rule : rule, params : null } );
				}
			}
			
			var error_r = null;
			for( var t=0,len=checkList.length;t<len;t++ ) {
				var d = checkList[t];
				var args = [ value ];
				if( d.params !== null ) {
					args.push( d.params );	
				}
				r = d.method.apply( validator, args );
				if( r === false ) {
					error_r = d.rule === null ? null : d.rule;
					break;	
				}	
			}
			
			if( r === false ) {
				
				var errorMsg = opt.messages[error_r] || opt.validErrorMsg;
				
				self.fireEvent("onValidError",[errorMsg,error_r]);	
			} else {
				self.fireEvent("onValidSuccess",[opt.validSuccessMsg]);		
			}
			
			return r;
		},
		isValid : function(){
			return this.checkVal();	
		},
		valid : function(){
			return this.checkVal();		
		},
		"reset" : function(){
			var self = this;
			var opt = self.configs;
			opt.value = opt._value;
			
			//初始值设置
			self.setValue( opt.value );	
			
			self.blur();
			clearTimeout( opt._ct );//取消验证
			self.resetVaildCss();	
		},
		//获取数据 ,一般作为内部使用
		
		//一般作为外部使用 又val 区别在于可做最终数据处理
		refreshFormater : function(){
			var self = this,undef;
			var opt = self.C();	
			if( $.isFunction( opt.formater ) ) {
				var value = self.val();
				var _value = opt.formater.call( self,value );
				value = _value === undef ? value : _value;
				self.val( value );
			}	
		},
		/*
		*映射 只有使用api val() 才有效
		*/
		refreshRenderer : function( input,e ){
			var self = this;
			var opt = self.C();	
			if( $.isPlainObject( opt.renderer ) && $.isEmptyObject( opt.renderer ) ) {
				return ;	
			}
			var value = self.val();
			self.val( value );
		},
		/*
		* 映射
		*/
		rendererEncode : function(str){
			var self = this,
				opt = this.configs,
				undef;
			var renderer = opt.renderer;
			var value = '';
			
			if( $.isPlainObject( renderer ) && $.isEmptyObject( renderer ) ) {
				return str;	
			}
			
			if( $.isFunction( renderer ) ) {
				value = self.tpl( renderer , str );	
				if( value === undef ) {
					value = str;	
				}
			} else if( $._isPlainObject( renderer ) ) {
				if( str in renderer ) {
					value = self.tpl( renderer[str] , str );		
				} else if( opt.rendererDef in renderer ) {
					value = self.tpl( renderer[opt.rendererDef] , str );			
				} else {
					value = str;	
				}
			} else {
				value = str;	
			}
			opt._renderer[ value ] = str;
			return value;
		},
		/*
		*反映射
		*/
		rendererDecode : function(str){
			var self = this;
			var opt = self.C();	
			
			if( $.isPlainObject( opt.renderer ) && $.isEmptyObject( opt.renderer ) ) {
				return str;	
			}
			
			var value = '';
			if( str in opt._renderer ) {
				value = opt._renderer[str];	
			}else {
				value = str;	
			}
			return value;
		},
		validTipEl : null,
		/*验证提示信息*/
		_showValidTip : function( position ){
			var self = this;
			var opt = this.configs;
			var bd = this.getBody();
			var position = this._undef( position,opt.position );
			if( !self.validTipEl ) {
				self.validTipEl = $('<div id="'+opt.id+'_tooltip" class=""nex-form-tooltip></div>');		
			}	
			switch( position ) {
				case 'right' :
					break
				case 'left' :
					break;
				case 'top' : 
					break;
				case 'bottom' :
					break;	
			}
		},
		/*
		*下拉框处理流程，由于实现单选 多选 autocomplete下拉框
		*/
		getDropDownItems : function(){
			var opt = this.configs;
			return opt.items || [];	
		},
		getDropDownItemDefault : function(){
			var opt = this.configs;
			return $.extend( {},opt.itemDefault,opt.dropdownItemDefault );	
		},
		/*
		*设置表单的Items
		*/
		setItems : function( items ){
			return this.setDropDownItems.apply( this,arguments );
		},
		setDropDownItems : function( items ){
			var self = this;
			var opt = this.configs;
			if( items ) {//dropdownItems
				opt.items = $.isArray(items) ? [].concat(items) : items;
			}
			if( opt.dropdownMode == 1  && $.isArray(opt.items) ) {
				$.each( opt.items,function( i,d ){
					opt.items[i] = self._parseItemData( d );	
				} );
			}
			//判断dropdown是否已经创建 如果创建则刷新内容
			var dropdown = this.getDropDown();
			if( dropdown.length && items ) {
				this.resetDropDownList( opt.items );
			}
			return opt.items;	
		},
		/*
		*获取items数据
		*@param {String,Array}单个字符是返回当前对象，如果是数组或者以','分割的字符串时返回的是数组
		*@param {Boolean} true 默认 返回数据  false返回索引
		*return {Array,Object}
		*/
		getItemData : function(value,m){
			return this.getDropDownItemData( value,m );	
		},
		getItemIndex : function(value){
			return this.getDropDownItemData( value,false );
		},
		getItemDataById : function( id ){
			return this.getDropDownItemDataById(id);	
		},
		getDropDownShowAt : function(){
			return this.getInput();	
		},
		getDropDownSelectedValue : function(){
			return this.val();	
		},
		_setDropDownValue : function( value,text,data ){
			var self = this,
				undef,
				opt = self.configs;
				
			data.selected = true;
			
			var d = $.extend({},data);	
			
			//self.fireEvent('onSetDropDownValue',[ d,opt ]);	
			
			self.val( value,text,d );
			
			return self;
		}
	});
	
	return form;
});	
define('Nex/form/Text',['require','Nex/form/AbstractForm'],function(require){
	require('Nex/form/AbstractForm');

	var textfield = Nex.define('Nex.form.Text','Nex.form.AbstractForm',{
		alias : 'Nex.TextField',
		xtype : 'textfield'
	});	
	//参数重载
	textfield.setOptions( function(opt){
		var tpl = opt.tpl;
		tpl.inputTpl = '<input <%=attrs%> id="<%=id%>-input" type="<%=type%>" name="<%=name%>" autocomplete="<%=autocomplete%>" tabindex=<%=tabIndex%> value="" class="nex-form-field nex-form-field-<%=type%>" />';
		return {
			__inputType  : 'text',
			containerCls : [opt.containerCls,'nex-form-text'].join(' '),
			cleanBtn 	 : true,
			tpl			 : tpl
		};	
	} );
	
	return textfield;
});
define('Nex/form/Trigger',['require','Nex/form/Text'],function(require){
	require('Nex/form/Text');
	
	var trigger = Nex.define('Nex.form.Trigger','Nex.form.Text',{
		alias : 'Nex.TriggerField',
		xtype : 'triggerfield',
		configs : function(opt){
			return {
				__inputType  : 'text',
				containerCls : [opt.containerCls,'nex-form-trigger'].join(' '),
				_inputCls    : [],
				cleanBtn 	 : false,
				triggerToFocus : false,
				triggerCls	 : '',
				triggerIconCls	 : ''
			};	
		},
		sysEvents : function(){
			var self = this,
				opt = self.configs;	
			self.bind('onSetFormView._sys',self._setInputCls,self);	
			self.callParent(arguments);
			//Nex.form.Form.fn._sysEvents.apply( self,arguments );
			return self;	
		},
		/*重载设置系统的trigger btn*/
		_setSysTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			self._setTriggerBtn();
			//Nex.form.Form.fn._setSysTriggerBtns.apply( self,arguments );
			self.callParent(arguments);
			//cleanBtn	
			return self;
		},
		_setTriggerBtn : function(){
			var self = this,
				opt = self.configs;
			//var input = self.getInput();	
			self.addInnerTriggerBtn({
				name : 'trigger',
				cls : ['nex-form-triggerfield-trigger',opt.triggerCls].join(' '),
				iconCls : ['nex-form-triggerfield-icon',opt.triggerIconCls].join(' '),
				callBack : function( d,e ){
					var r = self.fireEvent('onTriggerClick',[ opt ]);
					if( r === false ) return;
				}	
			});	
		},
		_setInputCls : function(){
			var self = this,
				opt = self.configs;
			var ccls = $.isArray(opt._inputCls) ? opt._inputCls : [ opt._inputCls ];
			var cls = ['nex-form-field-trigger'].concat( ccls );	
			$('#'+opt.id+'-input').addClass( cls.join(' ') );
		}
	});	
	
	return trigger;
});
define('Nex/form/Select',['require','Nex/form/Trigger'],function(require){
	require('Nex/form/Trigger');	

	var selectfield = Nex.define('Nex.form.Select','Nex.form.Trigger',{
		alias : 'Nex.SelectField',
		xtype : 'selectfield',
		configs : function(opt){
			var tpl = opt.tpl;
			tpl.inputTpl = '<div <%=attrs%> id="<%=id%>-input" type="<%=type%>" tabindex=<%=tabIndex%> autocomplete="<%=autocomplete%>" value="" class="nex-form-field nex-form-field-<%=type%>"></div>'
							+'<input id="<%=id%>-input-real" type="hidden" value="" name="<%=name%>" />';
			return {
				__inputType  : 'select',
				containerCls : [opt.containerCls,'nex-form-select'].join(' '),
				cleanBtn 	 : false,
				triggerToFocus : true,
				tpl			 : tpl,
				dropdownSingleSelect : true  //单选下拉框
			};	
		},
		sysEvents : function(){
			var self = this,
				opt = self.configs;	
			self.callParent(arguments);
			self.bind( 'onClick._sys',self._showDropDownClick,self );
			self.bind( 'onCreateDropDwon._sys',self._setDropDownCls,self );
			return self;	
		},
		/*重载设置系统的trigger btn*/
		/*_setSysTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			var input = self.getInput();	
			self.addInnerTriggerBtn({
				cls : 'nex-form-select-trigger',
				iconCls : 'nex-form-select-icon',
				callBack : function( d,e ){
					if( !opt.triggerToFocus ) {
						input.trigger('focus',[e]);//self.focus();
					}
				}	
			});
			Nex.form.Form.fn._setSysTriggerBtns.apply( self,arguments );
			//cleanBtn	
			return self;
		},*/
		_setTriggerBtn : function(){
			var self = this,
				opt = self.configs;
			var input = self.getInput();	
			self.addInnerTriggerBtn({
				name : 'trigger',
				cls : ['nex-form-triggerfield-trigger','nex-form-select-trigger',opt.triggerCls].join(' '),
				iconCls : ['nex-form-triggerfield-icon','nex-form-select-icon',opt.triggerIconCls].join(' '),
				callBack : function( d,e ){
					var r = self.fireEvent('onTriggerClick',[ opt ]);
					if( r === false ) return;
					if( !opt.triggerToFocus ) {//必须要foucs
						input.trigger('focus',[e]);//self.focus();
					}
				}	
			});	
		},
		_showDropDownClick : function(){
			var self = this,
				opt = self.configs;
			self.toggleDropDown();	
		},
		_setDropDownCls : function( dropdown ){
			var self = this,
				opt = self.configs;
			var el = self.el;
			if( el.hasClass('nex-form-focus') ) {	
				dropdown.addClass('nex-form-select-dropdown-focus');
			} else {
				dropdown.removeClass('nex-form-select-dropdown-focus');		
			}
		},
		_getItemData2 : function( value ){
			var self = this;
			var opt = self.configs;
			var items = opt.items;
			var d = null;
			$.each( items.concat(self.__CItems) , function(i,v){
				if( !$.isPlainObject( v ) ) return;
				var vs = v[opt.valueKey];
				if( String(vs) === String(value) ) {
					d = v;
					return false;
				}
			} );		
			return d;
		},
		/*
		*获取实际中的input 一般和input相同
		*/
		__inputreal : null,
		getInputReal : function(){
			var self = this;
			var opt = self.configs;
			self.__inputreal = self.__inputreal ? self.__inputreal : $("#"+opt.id+"-input-real");
			return self.__inputreal;
		},
		/*
		*设置下拉框的值
		*param value
		*param text 可选 如果没设置会从items里查找
		*/
		setInputValue : function( value,text ){
			var self = this;
			var opt = self.configs;
			var text = self._undef( text, null );
			var sep = opt.multiSplit;
			
			//Nex.form.Form.fn.setInputValue.apply( self,arguments );
			self.callParent(arguments);
			
			if( text === null ) {	
				var txt = [];
				value = (value+'').split(sep);
				$.each( value,function(i,v){
					var d = self._getItemData2( v );
					txt.push(d ? d[ opt.textKey ] : value);	
				} );
				text = txt.join(sep);
			}
			
			self.setInputText( text );
			
			return self;
		},
		/*
		*设置表单的Items
		*如果初始化后 需要重新设置items 最好使用setItems(list) 而不要直接使用obj.C('items',list);
		*m 默认true 会根据items自动刷新text显示框的文本
		*/
		setDropDownItems : function( items,m ){
			var self = this;
			var opt = this.configs;
			
			//Nex.form.Form.fn.setDropDownItems.apply( self,arguments );
			self.callParent(arguments);
			
			if( opt.dropdownMode == 2 ) {
				return opt.items;
			}
			
			var sep = opt.multiSplit;
			var value = this.getInputValue();	
			value = value.split(sep);
			var text = [];
			
			if( $.isArray( opt.items ) ) {
				$.each( value,function(i,v){
					var txt = v;
					$.each( opt.items,function( i,d ){
						var _v = d[opt.valueKey];
						if( String(_v) === String(v) ) {
							txt = d[opt.textKey];
							return false;
						}
					} );
					text.push( txt );	
				} );
			}
			var m = this._undef( m,true );
			if( m ) {
				this.setInputText( text.join( sep ) );	
			}
			
			return opt.items;	
		}
	});	
	
	return selectfield;
});
/*
*/
define('Nex/pager/Pager',['require','Nex/container/Container','Nex/form/Select'],function(require){
	require('Nex/container/Container');
	require('Nex/form/Select');

	var pager = Nex.define('Nex.pager.Pager',{
		extend : 'Nex.container.Container',
		alias : 'Nex.Pager',
		xtype : 'pager',
		configs : function(opt, t){
			return {
			prefix : 'nexpager-',
			autoDestroy : true,
			autoResize : true,
			border : true,
			borderCls : [opt.borderCls,'nex-pager-border'].join(' '),
			containerCls : [opt.containerCls,'clearfix nex-pager'].join(' '),
			autoScroll : false,
			tabIndex : -1,
			
			renderTo : document.body,
			
			width : 'auto',
			height : 'auto',
			itemLimit : 2,
			enableChangeSize : false,
			changeSizeMsg : '每页显示{0}条',
			pageSize : 10,
			pageNumber : 1,
			total : 0,
			sizeList : [10,20,50,100],
			refreshBtn : false,//显示刷新按钮
			refreshText : '刷新',
			displayInfo : true,
			displayMsg : '当前显示第{0}-{1}条, 共{2}条',
			emptyMsg : '暂无数据',
			pageCountText : '页',
			prevText : '上一页',
			nextText : '下一页',
			firstText: '首页',
			lastText : '尾页',
			showTips : true,
			tipsTag : 'title',
			tipsRenderer : null,
			//自定义页码显示
			pageRenderer : null,
			tpl : {
				layout : '<div id="<%=id%>_view" class="nex-pager-view"></div><div id="<%=id%>_info" class="clearfix nex-pager-info"><table border="0" cellpadding="0" cellspacing="0"><tr><td id="<%=id%>_size" class="nex-pager-size"></td><td id="<%=id%>_msg" class="nex-pager-msg"></td></tr></table></div>'		
			}
		};
		}		
	});
	pager.override({
		initComponent : function(){
			this.callParent( arguments );
			this.initPagination();
		},
		initPagination : function(){
			var self = this;
			var opt = this.configs;
			var tpl = self.tpl( 'layout', { id : opt.id } );
			self.el.html( tpl );
			opt.views['msg'] = $('#'+opt.id+'_msg');
			opt.views['pageSize'] = $('#'+opt.id+'_size');
			opt.views['view'] = $('#'+opt.id+'_view');
			
			if( opt.enableChangeSize ) {
				self._setPageSize();	
			}
			self.setDisplayMsg();
			self.setPager();
			self.setPagerEvent();
		},
		_setPageSize : function(){
			var self = this;
			var opt = this.configs;		
			
			var msg = opt.changeSizeMsg;
			
			var $view = opt.views['pageSize'];
			
			var msgs = msg.split('{0}');
			
			if( msgs[0] ) {
				$view.append('<span class="nex-pager-text">'+msgs[0]+'</span>');
			}
			
			Nex.Create('selectfield',{
				id : opt.id + '_pagesize',
				cls : 'nex-pager-sizelist',
				display : 'inline',
				renderTo : $view,
				items : opt.sizeList,
				width : 'auto',
				onChange : function(){
					opt.pageSize = parseInt(this.val()) || 10;
					if( self.fireEvent('onPageSizeChange',[ opt.pageSize ]) !== false ) {
						self.toPage(1,true);
						//self.toPage(opt.pageNumber, true);
					}
				},
				value : opt.pageSize
			});
			
			if( msgs[1] ) {
				$view.append('<span class="nex-pager-text">'+msgs[1]+'</span>');
			}
		},
		setPagerSize : function( size ){
			var opt = this.configs;
			var size = parseInt( size );
			var sel = Nex.get( opt.id + '_pagesize' );
			if( sel ) {
				var items = opt.sizeList;
				items.push( size );
				items.sort( function(a,b){
					return parseInt(a) > parseInt(b);	
				} );	
				items = Nex.distArr( items );
				sel.setItems( items );
				sel.val( size );
			}	
			return this;
		},
		setDisplayMsg : function( msg ){
			var self = this;
			var opt = this.configs;
			
			if( !Nex.isDefined( msg ) ) {
				if( opt.total<=0 ) {
					msg = opt.emptyMsg;
				} else {
					msg = opt.displayMsg;
				}
			}
			
			var format = function(str){
				if (arguments.length === 0)
					return null;
				var str = arguments[0];
				for ( var i = 1; i < arguments.length; i++) {
					var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
					str = str.replace(re, arguments[i]);
				}
				return str;	
			}
			var $msg = opt.views['msg'];
			$msg.html( format( msg, self.getPagerStart() + 1, self.getPagerEnd(), opt.total ) );
			return self;
		},
		refreshMsg : function(){
			return this.setDisplayMsg();
		},
		getPagerStart : function(){
			var opt = this.configs;
			return (opt.pageNumber - 1) * opt.pageSize;
		},
		getPagerEnd : function(){
			var opt = this.configs;
			return this.getPagerStart() + opt.pageSize;	
		},
		setPager : function(){
			var self = this;
			var opt = this.configs;	
			var html = self.getPagerHtml();
			var $view = opt.views['view'];
			$view.html( html );	
		},
		refreshPager : function(){
			return this.setPager();	
		},
		validPageData : function(){ //进行当前页数和总页数的验证
			var opt = this.configs;
			var pageNumber = opt.pageNumber;
			var total = opt.total;
			if (isNaN(parseInt(pageNumber))) pageNumber = 1;
			if (isNaN(parseInt(total))) total = 0;
			if (pageNumber < 1) pageNumber = 1;
			if (total < 1) total = 1;
			pageNumber = parseInt(pageNumber);
			total = parseInt(total);
			opt.pageNumber = pageNumber;
			opt.total = total;
		},
		getPageCount : function(){
			var opt = this.configs;	
			return 	Math.max(Math.ceil( opt.total/opt.pageSize ), 1);
		},
		getPagerHtml : function(){
			var self = this;
			var opt = this.configs;	
			self.validPageData();
			var pageNumber = opt.pageNumber;
			var pageSize = opt.pageSize;
			var total = opt.total;
			var pageCount = self.getPageCount();
			
			pageNumber = Math.min( pageNumber,pageCount );
			
			var prevPage = pageNumber - 1;
			var nextPage = pageNumber + 1;
			
			strHtml = '<ul class="nex-pager-items">';
			
			var renderTips = function( n ){
				if( !opt.showTips ) return '';
				return opt.tipsTag + '="'+ (Nex.isFunction(opt.tipsRenderer) ? opt.tipsRenderer.call( self, n ) : '') +'"';
			};
			
			var renderPage = function( n ){
				if( Nex.isFunction( opt.pageRenderer ) ) {
					return opt.pageRenderer.call( self, n );
				}
				return n;	
			};
			
			if (prevPage < 1) {
				strHtml += '<li><a class="nex-pager-item nex-pager-prev nex-pager-disabled">'+opt.prevText+'</a></li>';
			} else {
				strHtml += '<li><a page="'+prevPage+'" class="nex-pager-item nex-pager-prev" href="javascript:void(0);" '+renderTips('prev')+'>'+opt.prevText+'</a></li>';
			}
			if (pageNumber != 1) strHtml += '<li><a page="1" class="nex-pager-item nex-pager-first" href="javascript:void(0);" '+renderTips(1)+'>'+renderPage(1)+'</a></li>';
			if (pageNumber >= 5) strHtml += '<li>...</li>';
			var limit = opt.itemLimit;
			if (pageCount > pageNumber + limit) {
				var endPage = pageNumber + limit;
			} else {
				var endPage = pageCount;
			}
			
			for (var i = pageNumber - limit; i <= endPage; i++) {
				if (i > 0) {
					if (i == pageNumber) {
						strHtml += '<li><a href="javascript:void(0);" class="nex-pager-item nex-pager-item-active nex-pager-item-disabled" '+renderTips(i)+'>' + renderPage(i) + '</a></li>';
					} else {
						if (i != 1 && i != pageCount) {
							strHtml += '<li><a  page='+i+' href="javascript:void(0);" class="nex-pager-item" '+renderTips(i)+'">' + renderPage(i) + '</a></li>';
						}
					}
				}
			}
			if (pageNumber + 3 < pageCount) strHtml += '<li>...</li>';
			if (pageNumber != pageCount) strHtml += '<li><a class="nex-pager-item nex-pager-last" page='+pageCount+' href="javascript:void(0);" '+renderTips(pageCount)+'>' + renderPage(pageCount) + '</a></li>';
			
			strHtml += '<li><label class="nex-pager-forward"><input type="text" class="nex-pager-topage" size="2" value="'+pageNumber+'" ><span> / '+pageCount+' '+opt.pageCountText+'</span></label></li>';
			
			if (nextPage > pageCount) {
				strHtml += '<li><a class="nex-pager-item nex-pager-next nex-pager-item-disabled">'+opt.nextText+'</a></li>';
			} else {
				strHtml += '<li><a class="nex-pager-item nex-pager-next" page="'+nextPage+'" href="javascript:void(0);" '+renderTips('next')+'>'+opt.nextText+'</a></li>';
			}
			if( opt.refreshBtn ) {
				strHtml += '<li><a class="nex-pager-item nex-pager-refresh" href="javascript:void(0);" '+renderTips('refresh')+'>'+opt.refreshText+'</a></li>';
			}
			strHtml += '</ul>';
			return strHtml;
		},
		'refresh' : function( cfg ){
			var opt = this.configs;
			Nex.apply( opt, cfg || {} );
			this.refreshPager();
			this.refreshMsg();
			return this;	
		},
		//显示指定到页数
		toPage : function( num, m ){
			var self = this,
				opt = this.configs;
			var num = parseInt(num);
			if( !num ) {
				return self;	
			}
			num = Math.min( num, self.getPageCount() );
			if( !m && opt.pageNumber == num ) {
				return self;	
			}
			opt.pageNumber = num;
			self.refresh();
			self.fireEvent('onPageChange',[ opt.pageNumber, opt.pageSize, opt.total ]);
			return self;
		},
		setPagerEvent : function(){
			var self = this;
			var opt = this.configs;
			var el = self.el;
			//nex-pager-topage
			el.undelegate('.nex-pager-item')
				.delegate('.nex-pager-item','click',function(e){
					var page = $(this).attr( 'page' );
					if( !page ) return;
					if( $(this).hasClass('nex-pager-item-disabled') ) return;
					self.toPage( page )
				})
				.delegate('.nex-pager-topage','keydown',function(e){
					if( e.keyCode === 13 ) {
						var v = $(this).val();
						self.toPage( v );
					}
				})
				.delegate('.nex-pager-refresh','click',function(e){
					self.toPage( opt.pageNumber, true );
				});	
		}
	});
	
	return pager
});	
/*
Tips:
	尽量不要写内联样式,会倒置渲染变得非常卡，特别是IE超级卡！！
------
1.dateFormat。。货币类型。。 
2.分页。。。
3.单选/多选。。。
4.
*/
define('Nex/grid/Table',['require','Nex/Ajax','Nex/panel/Panel','Nex/pager/Pager'],function(require){
	require('Nex/Ajax');	
	require('Nex/panel/Panel');
	require('Nex/pager/Pager');
	var table = Nex.define('Nex.grid.Table',{
		extend : 'Nex.panel.Panel',
		xtype : 'table',
		alias : 'Nex.Table',
		configs : function(opt){
			return {
				prefix : 'grid-',
				/*开启组件大小自动设置*/
				autoResize : true,
				/*禁止doRenderCotent设置items*/
				disabledItems : true,
				/*开启后会设置borderCls*/
				border : false,
				containerCls : [opt.containerCls,'nex-absgrid'].join(' '),
				borderCls : [opt.borderCls,'nex-grid-border'].join(' '),
				autoScrollCls : [opt.autoScrollCls,'nex-grid-auto-scroll'].join(' '),
				autoWidthCls : [opt.autoWidthCls,'nex-grid-auto-width'].join(' '),
				autoHeightCls : [opt.autoHeightCls,'nex-grid-auto-height'].join(' '),
				/*设置body的overflow:auto grid不需要*/
				autoScroll : false,
				//cls : '',//自定义CSS
				/*表头文本是否换行*/
				headerNowrap : true, //表头文本不换行
				/*单元格文本是否换行*/
				nowrap : true,//单元格文本不换行
				/*无效参数*/
				rowTpl : '',//grid 自定义行模板
				/*初始时是否显示表头*/
				showGridHeader : true,//显示gridheader
				/*是否显示表尾*/
				showGridFooter : false,
				/*开启鼠标经过效果*/
				trackMouseOverRow : true,
				/*自定义mouseover 样式*/
				overRowCls : '',
				/*开启隔行变色*/
				stripeRows : false,//开启隔行变色
				//clsSingleRow : 'datagrid-row-single',
				//clsDoubleRow : 'datagrid-row-double',
				/*自定义单行样式*/
				oddRowCls : '',
				/*自定义双行样式*/
				evenRowCls : '',
				/*如果表格数据为空是否显示emptyText*/
				showEmptyText : true,
				emptyText : '',
				/*设置表格的Table布局样式 如果不太理解不建议修改*/
				tableLayout : 'fixed',
				
				/**
				 * @cfg {String/Boolean} scroll
				 * Scrollers configuration. Valid values are 'both', 'horizontal' or 'vertical'.
				 * True implies 'both'. False implies 'none'.
				 */
				scroll : true,//--
				
				enableColumnMove : true,
				/*允许改变列的宽度*/
				enableColumnResize : true,
				/*允许对列排序*/
				enableSort : true,
				/*改变列宽时 是否实时更新宽度*/
				resizeColumnReal : true,
				/*改变列宽时,是否显示标记边框*/
				showColumnResizeBorder : false,
				
				//排序配置
				/*
				* 设置排序规则
				* 如果开启 则数据只在本地排序,否则根据是否设置了url而进行服务端排序
				*/
				localSort : false,//本地排序
				/*默认排序列*/
				sortField : null,//排序字段
				/*排序方式*/
				sortOrder : 'asc',
				/*远程数据时请求参数*/
				sortFieldField : 'sortField',
				sortOrderField : 'sortOrder',
				/*显示竖向表格线条*/
				showRowLineV : true,
				/*显示横向表格线条*/
				showRowLineH : true,
				
				//multiColumns : false,
				//mulitEngine : 1,//第一种方法 可设置 1 2
				/*
				* 开启支持以字符串形式多列方式实现
				* eg: columns : [
				*		{ field : 'china_beijing', title : '北京' },
				*		{ field : 'china_shanghai', title : '上海' }
				*	]
				*/
				multiColumnFromStr : false,
				multiColumnsAlign : 'center',
				multiColumnSplitStr : '_',
				/*
				* 以上示例中china自定信息不存在 我们可以在这里设置:eg
				*  multiColumnFromStrData : { china : { title:'中国' },china_shanghai : { title:'上海',width : 100 } }
				*/
				multiColumnFromStrData : {},//multiColumnFromStr 字符串开启后 可以为不同层数的单元格设置配置信息
				/*
				* 表格列信息 参考_columnMetaData
				*/
				columns : [],//
				/*
				* 列信息Map
				*/
				_columnsHash : {},//field=>column 这里包含所有的 会通过getColumns填充
				_colid : 1,//col 自增 参数 --
				moveColumnTm : 500,//按下多少秒后开始移动列
				moveColumns : true,
				/*
				* 各列自适应宽度
				*/
				forceFit:false,//自动设置列宽
				forceFitVisible : true,//列是否始终保持可见
				_defRowCls : 'nex-grid-absgrid',
				//columnResizable : true,//--
				/*
				* 行样式 可以是Function
				*/
				rowCls : '',
				/*
				* 单元格文本 可以是Function
				*/
				rowCssText : '',
				/*
				* 列信息
				*/
				_columnMetaData : {//默认列信息
					//type : empty index rowNumber,
					field : '',
					dataIndex : '',//数据索引，默认==field
					//title : '',// 不要定义 会自动检查
					width : '',//默认的列宽,
					tips : '',//tip提示信息
					tipsTag : 'title',
					_fieldWidth : 0,//如果width是百分比 那么这个就是计算百分比后的宽度
					minWidth : 20,//默认最小宽度
					maxWidth : null,
					headerAlign : 'left',
					align : 'left',
					valign : 'middle',//body里的垂直居中
					_expand : false,//自定义列内容
					callBack : $.noop,
					hcls : '',//header cell自定义css
					headerCls : '',
					headerCssText : '',
					cellCls : '',
					cellCssText : '',
					bcls : '',//body cell自定义css
					fcls : '',//footer cell自定义css
					_icon : '',
					iconCls : '',
					icon : '',
					resizable : true,
					sortable : false, 
					/*
					*examples : 
						function sortFn( a, b, asc ){ 
							var isAsc = asc === 'asc';
							var v1 = parseInt(a.dept_name);
							var v2 = parseInt(b.dept_name);
							if( v1 > v2 ) {
								return isAsc ? 1 : -1;
							} if( v1 === v2 ){
								return 0;
							} else {
								return isAsc ? -1 : 1;
							}
						}
					*/
					sortFn : null,//自定义排序函数
					sortField : null,//排序字段 如果为空则默认使用dataIndex
					headerAfterRender : null,
					cellAfterRender : null,
					//textLimit : false,//当处理大数据的时候 性能消耗比较厉害， 不建议开启了
					fitColumn : true,//改变列大小
					//casePerChange : true,//如果当前列设置的是百分比大小，手动修改列大小后 设置为true:grid刷新会失去百分比作用,false:grid刷新时不会失去百分比作用，而是失去手动修改后的宽度
					//reader : {},//映射 可直接使用Function 效果同formatter
					renderer : null,
					dataType : 'string',//string|int|float|date|boolean|currency
					dateFormat : 'YYYY-MM-DD',
					//dateFormat numberFormat currencyUnit ...
					forceFit : true,//接受forceFit开启时自动设置列大小 checkbox edit 列会设置为false
					disabled : false//当前列不可用
				},
				columnDefaults : {},
				//用户可针对某一列设置默认信息
				customColumnData : {},
				readerDef : '_default_',
				autoScrollToField : true,
				autoScrollToRow : true,
				fitColumns : true,//移动列总开关
				data : [],//列表数据 含有_expand的将作为扩展列 如果有 _openExpand=true 则会自动展开
				emptyGridMsg : '',//grid数据为空是的显示数据 可以是模板 opt 作为参数
				showEmptyGridMsg : true,
				pk : '_pk',//主键名称
				hideColumns : [],//已经隐藏的列
				selectRows : [],//设置默认选中的行
				_selectRows : {},//选择的行//--
				isCreate : false,//废弃
				isShow : false,
				views : {},
				/*显示也分工具栏*/
				showPager : false,//不显示分页工具栏
				pagerClass : 'pager',//
				fixPageNumber : true, //在showGrid时矫正pageNumber 
				total : 0,
				//method : 'post',
				//url : '',
				loadMsg : '加载中,请稍后...',
				loadErrorMsg : '数据加载错误！',
				showErrorTime : 2000,
				_lmt : 0,//loadMsg 计时器id
				_colWidthExt : 0,//列宽精确位数
				//cache : true,//缓存,
				pageNumber : 1,
				pageSize : 10,
				loadOnce : false,//开启后如果设置了url 那么抓取数据后 会把url删除
				url : '',
				//_ajaxOptions : {},
				///ajaxOptions : {},
				/*
				* 表格数据异步请求设置
				*/
				ajaxClass : 'Nex.Ajax',//定义Nex.Ajax组件来发送请求
				ajaxCache : true,
				ajaxPageNumberField : 'pageNumber',
				ajaxPageSizeField : 'pageSize',
				ajaxOptions : {},
				ajaxMethod : 'GET',
				ajaxDataType : 'json',
				ajaxDataFilter : null,
				ajaxData : {},
				ajaxSend : null,//自定义ajax发送函数
				asyncDataMaps : {
					total : 'total',
					pageSize : 'pageSize',
					pageNumber : 'pageNumber',
					data : 'data'
					//columns : 'columns',//--尚未实现
					//url : 'url'	
				},
				_gridViewViews : {},
				//dataType : 'json',
				//queryParams : {},
				//鼠标点击时是否可选择行
				enableSelectRow : true,
				singleSelect : false,//是否可以多选
				enableUnselect : false,//如果是单选模式 enableUnselect = true时，如果选择的是自己 则会取消选择
				selectedRowCls : '',
				rowStyler : "",//行style 字符串作为 class function(rowid,rowdata)
				rowCallBack : $.noop,
				methodCall : {},//内部函数的回调函数
				denyRowEvents : false,//禁止触发的事件
				tpl : {
					//'stylesheet' : '<style id="<%=id%>_stylesheet" type="text/css"></style>',
					'view' : '<div id="<%=id%>_view" class="nex-grid-view"><div id="<%=id%>_dataview" class="nex-grid-dataview"><table class="nex-grid-table" cellpadding="0" cellspacing="0" border="0"><thead id="<%=id%>_dataview_header" class="nex-grid-header nex-grid-dataview-header"></thead><tbody id="<%=id%>_dataview_body" class="nex-grid-dataview-body"></tbody></table></div></div>'
				}
			};	
		}	
	});
	table.override({
		dataSource : [],
		selection : {},
		//当前grid显示的数据 //--
		currentPageData : [],
		initComponent : function(){
			this.callParent(arguments);
			this.currentPageData = [];
			this.selection = {};
			this.dataSource = [];
			this.initGrid();	
		},
		sysEvents : function(){
			var self = this;
			var opt = this.configs;
			self.callParent( arguments );
		},
		initGrid : function(){
			var self = this;
			//self.initGridStyleSheet();
			self.initGridCss();
			self.initGridLayout();
			//事件委托
			self.initGridEvents();
		},	
		/*initGridStyleSheet : function(){
			var self = this;
			var el = self.el;
			var opt = this.configs;	
			if( opt.views['stylesheet'] ) return self;
			var $sheet = $(self.tpl('stylesheet', {id:opt.id}));
			opt.views['stylesheet'] = $sheet;
			el.prepend($sheet);
			return self;
		},*/
		initGridCss : function(){
			var self = this;
			var opt = this.configs;		
			//hideGridHLines
			if( !opt.showRowLineV ) {
				self.hideGridVLines();	
			}
			if( !opt.showRowLineH ) {
				self.hideGridHLines();	
			}
			self.fireEvent('onSetGridCss');
		},
		initGridLayout : function(){
			var self = this;
			var opt = this.configs;
			var bd = self.getBody();
			var d = {
				id : opt.id	
			};
			//bd.addClass('nex-grid-view');
			//创建一个style样式表
			var $view = $(self.tpl('view', d));
			bd.append($view);
			opt.views['gridView'] = $view;
			opt.views['gridDataView'] = $('#'+opt.id+'_dataview');
			opt.views['gridHeader'] = $('#'+opt.id+'_dataview_header');
			opt.views['gridBody'] = $('#'+opt.id+'_dataview_body');
			
			if( !opt.showGridHeader ) {	
				self.hideGridHeader();
			}
			
			self.setGridViewScrollAble();
			
			if( opt.showPager ) {
				self.initPager();	
			}
			
			self.fireEvent('onGridViewCreate',[ $view, opt ]);
			
			return self;
		},
		initGridEvents : function(){
			var self = this;
			var opt = this.configs;	
			self.setGridHeaderEvents();
			self.setGridRowsEvents();
			self.setGridCellsEvents();
		},
		setGridViewScrollAble : function(){
			var self = this;
			var opt = this.configs;	
			var $view = self.getScrollView();
			if( opt.scroll === false ) {
				$view.css('overflow','hidden');
			} else {
				$view.css('overflow','auto');	
			}	
			if( opt.scroll === 'horizontal' ) {
				$view.css('overflow-x','auto');
				$view.css('overflow-y','hidden');
			}	
			if( opt.scroll === 'vertical' ) {
				$view.css('overflow-x','hidden');
				$view.css('overflow-y','auto');
			}	
		},
		/*
		*布局大小设置
		*/
		doSetViewSize : function(){
			var self = this;
			var opt = this.configs;
			var bd = self.getBody();	
			
			self.callParent(arguments);
			
			self.setGridViewSize();
			/*
			var $dataTable = $( '>.nex-grid-table', self.getGridDataView() );
			
			if( !self.isAutoWidth() ) {
				$dataTable.css('width','100%');	
			} else {
				$dataTable._removeStyle('width');	
			}*/
		},
		//_gridViewViews
		setGridViewSize : function(){
			var self = this;
			var opt = this.configs;
			
			var gridViewViews = opt._gridViewViews;
			
			var $body = self.getBody();
			var $view = self.getGridView();
			
			var bw = $body._width();
			var bh = $body._height();
			
			for( var otherView in gridViewViews ) {
				bh -= $( gridViewViews[otherView] )._outerHeight();	
			}
			
			if( !self.isAutoWidth() ) {
				$view._outerWidth( bw );
			} else {
				$view._removeStyle('width');	
			}
			
			if( !self.isAutoHeight() ) {
				$view._outerHeight( bh );
			} else {
				$view._removeStyle('height');	
			}
			
			self.setGridDataViewSize();
		},
		setGridDataViewSize : function(){
			var self = this;
			var opt = this.configs;
			var $view = self.getGridView();
			var $dataView = self.getGridDataView();	
			var $dataTable = $( '>.nex-grid-table', $dataView );	
			if( !self.isAutoWidth() ) {
				$dataView._outerWidth( $view._width() );
				$dataTable.css('width','100%');	
			} else {
				$dataView._removeStyle('width');	
				$dataTable._removeStyle('width');	
			}
			if( !self.isAutoHeight() ) {
				$dataView._outerHeight( $view._height() );
			} else {
				$dataView._removeStyle('height');	
			}
		},
		addViewToGridView : function( name, el ){
			var opt = this.configs;	
			opt.views[ name ] = el;
			opt._gridViewViews[ name ] = el;
			return this;
		},
		removeViewFromGridView : function( name ){
			var opt = this.configs;	
			delete opt.views[ name ];
			delete opt._gridViewViews[ name ];
			return this;
		},
		dataViewRendered : false,
		//设置GRID视图数据 如 表头...
		doRenderContent : function(){
			var self = this;
			var opt = this.configs;
			
			if( self.dataViewRendered ) {
				return self;	
			}
			//console.time(3);
			self._setGridLayoutCss();
			
			self.dataViewRendered = true;
			//处理columns数据
			self.initGridColumns();
			//设置grid的列宽
			self.initColumnsWidth();
			//设置grid数据表头
			self.setGridHeader();
			//初始化dataSource
			self.setData( opt.data );
			self.setGridBody();
			//console.timeEnd(3);
		},
		setGridHeaderEvents : function(){
			var self = this;
			var opt = this.configs;		
			var bd = this.getBody();
			var callEvent = function( evt, e ){
				var $col = $(this);
				var field = $(this).attr("field");
				var column = self.getColumnData( field );
				
				e.helper = $col;
				
				if( self[ evt ] && Nex.isFunction( self[ evt ] ) ) {
					self[ evt ].call( self, field, column, e );	
				}
				if( self.fireEvent(evt,[field, column, e]) === false ) {
					return false;	
				}	
			}
			//绑定单元格事件 	
			bd.undelegate('.htd')
			  .delegate(".nex-grid-dataview-header", {
				  "contextmenu.htd" : function( e ){
					  	e.helper = $(this);
					 	if( self.fireEvent('onGridViewHeaderContextMenu',[ e ]) === false ) {
							return false;	
						} 
				   }
			   })
			  .delegate(".nex-grid-dataview-header td[id^="+opt.id+"]", [
			  	'click.htd',
				'dblclick.htd',
				'mouseenter.htd',
				'mouseleave.htd',
				'contextmenu.htd',
				'mousedown.htd',
				'mouseup.htd'
			  ].join(' '), function(e){
				    var ev = "";
					  switch( e.type ) {
						case 'click' : ev = 'onColumnClick'; break;
						case 'dblclick' : ev = 'onColumnDblClick'; break;
						case 'contextmenu' : ev = 'onColumnContextMenu'; break;
						case 'mousedown' : ev = 'onColumnMouseDown'; break;
						case 'mouseup' : ev = 'onColumnMouseUp'; break;
						case 'mouseenter' : ev = 'onColumnMouseOver'; break;
						case 'mouseleave' : ev = 'onColumnMouseOut'; break;
					  }
					  if( !ev ) return;
					  if( callEvent.call(this, ev, e) === false ) {
						  return false;	
					  } 
			  }).delegate('.nex-grid-resizable', {
				'mousedown.htd' : function( e ){
					self._startResize( this, e );	
				}, 
				'click.htd' : function( e ){
					e.preventDefault();
					e.stopPropagation();	
				}
			  });//列移动
		},
		setGridRowsEvents : function(){
			var self = this;
			var opt = this.configs;		
			var bd = this.getBody();
			var callEvent = function( evt, e ){
				var $tr = $(this);
				
				e.helper = $tr;
				
				var rid = $tr.attr('rid');
				var ridx = $tr.attr('ridx');
				var data = self.getRowIndexData( ridx );
				if( self[ evt ] && Nex.isFunction( self[ evt ] ) ) {
					self[ evt ].call( self, rid, data, e );	
				}
				if( self.fireEvent(evt,[rid, data, e]) === false ) {
					return false;	
				}	
			}
			//绑定单元格事件 	
			bd.undelegate('.btr')
			  .delegate(".nex-grid-dataview-body tr[id^="+opt.id+"]", [
			  	'click.btr',
				'dblclick.btr',
				'contextmenu.btr',
				'mousedown.btr',
				'mouseup.btr',
				'mouseenter.btr',
				'mouseleave.btr'
			  ].join(' '),function( e ){
				  var ev = "";
				  switch( e.type ) {
					case 'click' : ev = 'onRowClick'; break;
					case 'dblclick' : ev = 'onRowDblClick'; break;
					case 'contextmenu' : ev = 'onRowContextMenu'; break;
					case 'mousedown' : ev = 'onRowMouseDown'; break;
					case 'mouseup' : ev = 'onRowMouseUp'; break;
					case 'mouseenter' : ev = 'onRowMouseOver'; break;
					case 'mouseleave' : ev = 'onRowMouseOut'; break;
				  }
				  if( !ev ) return;
				  if( callEvent.call(this, ev, e) === false ) {
					  return false;	
				  }
			  });	
		},
		setGridCellsEvents : function(){
			var self = this;
			var opt = this.configs;		
			var bd = this.getBody();
			var callEvent = function( evt, e ){
				var $td = $(this);
				var $tr = $td.parent();
				
				e.helper = $td;
				
				var field = $(this).attr("field");
				var ridx = $tr.attr('ridx');
				var rid = $tr.attr('rid');
				var column = self.getColumnData( field ) || {};
				var data = self.getRowIndexData( ridx );
				var value = data[ column.dataIndex ];
				if( self[ evt ] && Nex.isFunction( self[ evt ] ) ) {
					self[ evt ].call( self, rid, field, value, data, e );	
				}
				if( self.fireEvent(evt,[rid, field, value, data, e]) === false ) {
					return false;	
				}	
			}
			//绑定单元格事件 	
			bd.undelegate('.btd')
			  .delegate(".nex-grid-dataview-body td[id^="+opt.id+"]", [
			  	'click.btd',
				'dblclick.btd',
				'contextmenu.btd',
				'mousedown.btd',
				'mouseup.btd',
				'mouseenter.btd',
				'mouseleave.btd'
			  ].join(' '),function( e ){
				  var ev = "";
				  switch( e.type ) {
					case 'click' : ev = 'onCellClick'; break;
					case 'dblclick' : ev = 'onCellDblClick'; break;
					case 'contextmenu' : ev = 'onCellContextMenu'; break;
					case 'mousedown' : ev = 'onCellMouseDown'; break;
					case 'mouseup' : ev = 'onCellMouseUp'; break;
					case 'mouseenter' : ev = 'onCellMouseOver'; break;
					case 'mouseleave' : ev = 'onCellMouseOut'; break;
				  }
				  if( !ev ) return;
				  if( callEvent.call(this, ev, e) === false ) {
					  return false;	
				  }
			  });		
		},
		ridToIndex : function( rid ){
			var self = this;
			var opt = this.configs;		
			return self.isAjaxAsync() ? parseInt(rid) : ( (opt.pageNumber - 1) * opt.pageSize ) + parseInt(rid);	
		},
		indexToRid : function( ridx ){
			var self = this;
			var opt = this.configs;	
			return self.isAjaxAsync() ? parseInt(ridx) : parseInt(ridx) - ( (opt.pageNumber - 1) * opt.pageSize );			
		},
		getRowData :　function( rid, clone ){
			var self = this;
			var opt = this.configs;	
			var dataset = self.getData();
			var clone = Nex.unDefined( clone, true );
			var rowData = dataset[ self.ridToIndex( rid ) ];	
			return clone ? Nex.clone( rowData ) : rowData;
		},
		setRowData : function( rid, field, data ){
			var rowData = this.getRowData( rid, false );
			if( Nex.isPlainObject( field ) ) {
				Nex.apply( rowData, field );
			} else {
				rowData[ field ] = data;
			}
			return this;
		},
		getRowIndexData : function( ridx, clone ){
			var opt = this.configs;	
			var dataset = this.getData();
			var clone = Nex.unDefined( clone, true );
			var rowData = dataset[ ridx ];	
			return clone ? Nex.clone( rowData ) : rowData;
		},
		_setGridLayoutCss : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-table',
				'table-layout: ' + (opt.forceFit ? 'auto' : opt.tableLayout)
			);
			return self;
		},
		addGridCssRules : function(selector,cssText){
			return this.addCssRules.apply(this, arguments);
		},
		getGridView : function(){
			return this.configs.views['gridView'];	
		},
		getScrollView : function(){
			return this.getGridDataView();	
		},
		/*getGridScrollView : function(){
			return this.configs.views['gridView'];	
		},*/
		getGridDataView : function(){
			return this.configs.views['gridDataView'];	
		},
		getGridHeader : function(){
			return this.configs.views['gridHeader'];	
		},
		getGridDataHeader : function(){
			return this.configs.views['gridHeader'];	
		},
		getGridBody : function(){
			return this.configs.views['gridBody'];		
		},
		getGridDataBody : function(){
			return this.configs.views['gridBody'];		
		},
		_toFirstUpperCase : function(str){
				return str.replace(/\s[a-z]/g,function($1){return $1.toUpperCase()}).replace(/^[a-z]/,function($1){return $1.toUpperCase()});	
		},
		/*
		*解析columns数据
		*/
		initGridColumns : function(){
			var self = this;
			var opt = this.configs;
			var columns = self._parseColumns(opt.columns);	
			var column;
			var i = 0,
				len = columns.length;
			for(;i<len;i++) {
				column = columns[i];
				if( column['disabled'] === true ) continue;
				
				column['field'] = Nex.isEmpty(column['field']) ?  i : column['field'];
				
				if( column['field'] in opt.customColumnData ) {
					$.extend( column,opt.customColumnData[column['field']] );
				}
				
				column['title'] = Nex.unDefined( column['title'], column['field'] );//Nex.isEmpty(column['title']) ?  column['field'] : column['title'];
				//column['index'] = Nex.isEmpty(column['index']) ?  column['field'] : column['index'];
				column['dataIndex'] = Nex.isEmpty(column['dataIndex']) ?  column['field'] : column['dataIndex'];
				column['_colid'] = Nex.isEmpty(column['_colid']) ? 'col'+(Nex.aid++) : column['_colid'];
			}
			opt.columns = columns;
			self.onInitColumns(columns);
			self.fireEvent( 'onInitColumns',[columns] );
			return self;
		},
		onInitColumns : function(){},
		initColumnsWidth : function(){
			var self = this;
			var opt = this.configs;	
			var columns = self.getLeafColumns();
			$.each(columns, function(i, column){
				self._setColumnWidth( column.field, column.width );
			});
		},
		/**
		*	刷新表格宽度设置
		*/
		refreshColumnsWidth : function(){
			return this.initColumnsWidth();	
		},
		_parseColumns : function(columns){
			var self = this;
			var opt = this.configs;
			var undef;
			var columns = columns || opt.columns;
			var listMap = function(column, pid){
				
				var type = column.type;
				if( type ) {
					type = (type+"").toLowerCase();
					var method = '_get'+self._toFirstUpperCase( type )+'Column';
					if( Nex.isFunction(self[ method ]) ) {
						column = self[ '_get'+self._toFirstUpperCase( type )+'Column' ]( column );
					} else {
						delete column.type;	
					}
				}
				
				if( Nex.isEmpty(column.field) ) {
					column.field = ['field',++Nex.aid].join('');	
				}
				
				if( Nex.isEmpty(pid) ) {
					  pid = null;	
				} else {
					pid = $.isPlainObject( pid ) && !Nex.isEmpty(pid.field) ? pid.field : null;
				}
				
				if( /*opt.multiColumns && */opt.multiColumnFromStr && opt.multiColumnSplitStr != '' ) {
					//对列名有"_"的进行处理
					var _sp = opt.multiColumnSplitStr;
					var _md = opt.multiColumnFromStrData;
					var _field = column.field + '';
					column._ofield =  column._ofield===undef ? _field : column._ofield;
					
					var sl = column._hasSet?[]:_field.split(_sp);
					if( sl.length>1 ) {
						 column._hasSet = true;
						 column.field = sl[0];
						 var of = column._ofield.split(_sp);
						 var index = Nex.inArray( column.field,of );
						 column.field = of.slice(0,index+1).join(_sp); 
						 var tls = column.field.split(_sp);
						 var _realField = tls.pop();
						// column.title = column.title||_realField;
						 //eg:field=year_month_day
						 var orig_col = $.extend({},column);
						 if( _realField in _md ) {
							$.extend( column,_md[ _realField ] ); 
						 }
						 //eg:经过上一步处理后可能是field=maxDay
						 if( column.field in _md ) {
							$.extend( column,_md[ column.field ] ); 
						 }
						 sl.splice(0,1);//删除第一个
						 column.columns = column.columns === undef ? [] : column.columns;
						 var cc = { field : sl.join(_sp),_ofield:column._ofield };
						 cc = $.extend({}, orig_col, cc);
						
						 delete cc.columns;
						/* if( column.width !== undef ) {
							 cc.width = column.width;
						 }*/
						 column.columns.push(cc);
					} else {
						if( !column._hasSet && sl.length ) {
							   column._hasSet = true;
							   var of = column._ofield.split(_sp);
							   var index = Nex.inArray(column.field, of);
							   column.field = of.slice(0,index+1).join(_sp); 
							   var tls = column.field.split(_sp);
							   var _realField = tls.pop();
							  // column.title = column.title||_realField;
							   if( _realField in _md ) {
									$.extend( column,_md[ _realField ] ); 
							   }
							   if( column.field in _md ) {
									$.extend( column,_md[ column.field ] ); 
							   }
						}
					}
				}
				
				//设置默认值
				column = $.extend({},opt._columnMetaData,opt.columnDefaults,column);
				column['_colid'] = Nex.isEmpty(column['_colid']) ? 'col'+(Nex.aid++) : column['_colid'];
				//_fieldWidth ??
				if( column.disabled===true  ) return;
				
				opt._columnsHash['nsort'+column.field] = column;
				column.__pid = column.__pid===undef ?  pid : column.__pid;
				
				self.setCustomColumnCss( column );
				
				if( ('columns' in column) && Nex.isArray( column.columns ) && column.columns.length ) {
					var ls = column.columns;
					var len = ls.length;
					for( var i=0;i<len;i++ ) {
						listMap( ls[i],column );	
					}
				} else {
					//list.push( column );	
				}
			}	
			var i = 0,
				len = columns.length;
			for(;i<len;i++) {
				listMap( columns[i],null );
			}	
			return self._getLeafColumns();
		},
		setCustomColumnCss : function( column ){
			var self = this;
			if( column.headerCssText ) {
				self.addGridCssRules( '.nex-grid-dataview-body .nex-grid-header-'+column._colid, column.headerCssText );
			}
			if( column.cellCssText ) {
				self.addGridCssRules( '.nex-grid-dataview-body .nex-grid-cell-'+column._colid, column.cellCssText );
			}
			return self;	
		},
		getColumnEl : function( field ){
			var self = this;
			var opt = this.configs;
			var colid = self.getColumnColId( field );	
			if( !colid ) return null;
			return $('#'+opt.id+'_cols_'+colid);
		},
		getColumnTextEl : function( field ){
			var self = this;
			var opt = this.configs;
			var colid = self.getColumnColId( field );	
			return $('#'+opt.id+'_cols_'+colid+'_text');
		},
		/*获取列宽度*/
		getColumnWidth : function( field ){
			var el = this.getColumnEl( field );
			return el ? el._outerWidth() : 0;	
		},
		getColumnData : function( field ){
			var self = this
				,opt = self.configs;	
			var columns = opt._columnsHash;	
			return columns['nsort'+field] || null;
		},
		getColumnColId : function(field){
			return (this.getColumnData(field) || {})['_colid'] || null;	
		},
		getColumnProp : function( field, prop ){
			var column = this.getColumnData( field );
			return column ? column[prop] : null;
		},
		getLeafColumns : function(){
			return this._getLeafColumns.apply(this,arguments);	
		},
		//获取grid显示的列
		getColumns : function(){
			//应该去除锁定的列
			return this.configs.columns;	
		},
		getLockColumns : function(){
			return this.configs.lockColumns;	
		},
		_getColumnChildrens : function( name ){
			var self = this
				,undef
				,opt = self.configs;	
			var list = [];
			if( Nex.isEmpty(name) ) {
				return self._getRootColumns();	
			}
			var columns = opt._columnsHash;	
			for( var key in columns ) {
				var field = columns[key];	
				if( field.__pid === name ) {
					list.push( field );
				}		
			}		
			return list;	
		},
		_getColumnAllChildrens : function( name ){
			var self = this
				,undef
				,opt = self.configs;	
			var list = [];
			var name = name;
			var _loop = function( n ){
				var childs = self._getColumnChildrens(n);
				for( var i=0,len=childs.length;i<len;i++ ) {
					list.push( childs[i] );	
					_loop( childs[i]['field'] );
				}
			};
			_loop(name);
			return list;	
		},
		/*获取当前单元格下 还有多少层次*/
		_getColumnAllLevel : function( name ){
			var self = this
				,undef
				,opt = self.configs;	
			if( name === undef || name === null || name === '' ) {
				name = null;
			}	
			var columns = opt._columnsHash;	
			var childs = self._getLeafColumns( name );
			var level = 1;
			var getTop = function( n ){
				var n = 'nsort'+n;
				if( n in columns ) {
					var column = columns[n];
					if( column.__pid !== name ) {
						level++;
						return getTop( column.__pid );	
					} else {
						return level++;	
					}	
				}	
			};
			var _max = 0;
			$.each( childs,function(i,field){
				var i = getTop( field['field'] );
				_max = Math.max( _max,i );	
				level = 1;
			} );
			
			return _max;	
		},
		_isRootColumn : function( field ){
			var field = field || {};
			return Nex.isEmpty(field.__pid) ? true : false;	
		},
		_isLeafColumn : function(name){
			var list = this._getColumnChildrens( name );
			return list.length ? false : true;
		},
		/**
		*获取指定单元格下的叶子节点	
		*/
		_getLeafColumns : function( name ){
			var self = this
				,undef
				,opt = self.configs;
			var list = [];
			var columns = opt._columnsHash;	
			var childs = self._getColumnAllChildrens( name );
			for( var i=0,len=childs.length;i<len;i++ ) {
				if( self._isLeafColumn( childs[i]['field'] ) ) {
					list.push( childs[i] );	
				}
			}
			return list;	
		},
		//返回指定单元格的最顶层
		_getTopColumn : function(name){
			var self = this
				,undef
				,opt = self.configs;
			var columns = opt._columnsHash;	
			var name = 'nsort'+name;
			if( name in columns ) {
				var column = columns[name];
				if( column.__pid !== null && column.__pid !== undef ) {
					return self._getTopColumn( column.__pid );	
				} else {
					return column;	
				}	
			}	
		},
		//返回最顶层的单元格列表
		_getRootColumns : function(){
			var self = this
				,undef
				,opt = self.configs;
			var list = [];
			var columns = opt._columnsHash;
			for( var key in columns ) {
				var field = columns[key];	
				if( field.__pid === null || field.__pid===undef ) {
					list.push( field );
				}	
			}	
			return list;		
		},
		getAllColumns : function(){
			return this._getColumnAllChildrens();	
		},
		getColumnWidthTr : function(){
			var self = this;
			var firstRow = ['<tr class="nex-grid-rows-header">'];
			var _columns = self.getLeafColumns();
			$.each(_columns,function(i,col){
				firstRow.push('<td class="nex-grid-'+col._colid+' nex-column-width-'+col._colid+'"></td>');	
			});
			firstRow.push('</tr>');	
			return firstRow.join('');
		},
		getGridHeaderHtml : function(){
			var self = this
				,undef
				,opt = self.configs;
			var hlist = [];
			var hhash = {};
			
			var tdTpl = '<td rowspan="<%=rowSpan%>" colspan="<%=colSpan%>" id="<%=gridId%>_cols_<%=_colid%>" class="nex-grid-col nex-grid-header-col nex-grid-col-<%=gridId%> nex-grid-<%=_colid%> nex-grid-header-<%=_colid%> <%=$isroot ? "nex-grid-header-col-root":""%> <%=$isleaf ? "nex-grid-header-col-leaf":""%> <%=headerCls%>" field="<%=field%>" align="<%=headerAlign%>">'
							+'<div class="nex-grid-cell-wrap" field="<%=field%>"' 
								+'<% if( tips ) {%>'
								+' <%=tipsTag%>="<%=tips%>"'
								+'<%}%>'
								+'>'
								+'<div id="<%=gridId%>_cols_<%=_colid%>_inner" class="nex-grid-cell nex-grid-header-cell <%=headerNowrap?"nex-grid-cell-nowrap":""%>" >'
									+'<span id="<%=gridId%>_cols_<%=_colid%>_text" class="nex-grid-header-cell-text"><%=title%></span>'
								+'</div>'
								+'<div class="nex-grid-resizer <%=resizable ? "nex-grid-resizable" : ""%>"></div>'
							+'</div>'
						+'</td>';
			
			function getTD( field, level ){
				var level = level || 0;
				var name = field['field'];
				var colSpan = self._getLeafColumns( name );
				var rowSpan = 1;
				colSpan = colSpan.length;
				//rowSpan += 1;
				rowSpan = maxRow-level;
				var fieldText = field.title === undef ? field.field : field.title ;
				field.title = fieldText;
				var tplData = $.extend({},field,{
						field : Nex.htmlEncode(field.field),
						tips : Nex.htmlEncode(field.tips),
						headerNowrap : opt.headerNowrap,
						gridId:opt.id,
						$isleaf  : false,
						resizable : opt.enableColumnResize ? field.resizable : false,
						$isroot  : !field.__pid
					});
				if( self._isLeafColumn(name) ) {
					colSpan = 1;
					tplData.colSpan = colSpan;
					tplData.rowSpan = rowSpan;
					tplData.$isleaf = true;
					var tds = self.tpl(tdTpl, tplData);	
					trs[level].push( tds );
					return;
				} else {
					rowSpan = 1;
					tplData.colSpan = colSpan;
					tplData.rowSpan = rowSpan;
					tplData.align = opt.multiColumnsAlign; 
					tplData.resizable = false;
					tplData.sortable = false;
					var tds = self.tpl( tdTpl, tplData);	
					trs[level].push( tds );
					var childs = self._getColumnChildrens( name );
					$.each( childs,function(i,f){
						var _level = level;
						getTD(f, ++_level);
					} );
				}	
			}
			
			//更新_columnsHash
			var columns = opt._columnsHash;
			var maxRow = self._getColumnAllLevel();
			var cols = self._getRootColumns();
			
			var trs = [];//每层td内容
			//初始化内容
			for(var i=0;i<maxRow;i++) {
				trs[i] = [];	
			}
			$.each( cols,function(i,field){
				getTD(field, 0);	
			} );
			
			var html = [ self.getColumnWidthTr() ];
			$.each(trs,function(i,tr){
				var tds = ['<tr class="',opt._defRowCls,' nex-grid-header-row">'];
				tds.push(tr.join(''));
				tds.push('</tr>');
				html.push( tds.join('') );	
			});
			return html.join('');
		},
		setGridHeader : function(){
			var self = this
				,opt = self.configs;	
			var vheader = self.getGridHeader();
			vheader.html( self.getGridHeaderHtml() );	
			
			self.refreshGridColumnsCls();
			
			self.afterRenderGridHeader();
			
			self.onGridHeaderCreate();
			
			self.fireEvent('onGridHeaderCreate',[vheader,opt]);
		},
		onGridHeaderCreate : function(){},
		//refreshGridViewHeaderColumnsCls
		refreshGridColumnsCls : function(columns,vheader){
			var self = this
				,opt = self.configs;	
			var rootColumns = columns || self._getRootColumns();		
			
			if( !rootColumns.length ) {
				return self;	
			}
			
			var vheader = vheader || self.getGridHeader();
			$('.nex-grid-header-col',vheader).removeClass('nex-grid-col-first nex-grid-col-last');
			
			var first_column = rootColumns[0];
			var last_column = rootColumns.pop();
			
			function loop_first(column){
				var el = self.getColumnEl(column.field);
				el.addClass('nex-grid-col-first');
				var childs = self._getColumnChildrens(column.field);
				if( childs.length ) {
					loop_first(childs[0]);	
				}	
			}
			function loop_last(column){
				var el = self.getColumnEl(column.field);
				el.addClass('nex-grid-col-last');
				var childs = self._getColumnChildrens(column.field);
				if( childs.length ) {
					loop_last(childs.pop());	
				}	
			}
			loop_first(first_column);
			loop_last(last_column);
			return self;
		},
		afterRenderGridHeader : function(){
			var self = this
				,opt = self.configs;
			var columns = self.getAllColumns();
			$.each( columns, function(i, column){
				if( Nex.isFunction( column.headerAfterRender ) ) {
					column.headerAfterRender.call( self, self.getColumnTextEl( column.field ), column  );	
				}
			} );	
		},
		_setColumnWidth : function( field, width ){
			var self = this
				,opt = self.configs;	
			var column = self.getColumnData(field);
			if( !column ) return self;
			column.width = width;
			
			var maxWidth = column.maxWidth;
			var minWidth = column.minWidth;
			
			var cw = width;
			
			if( Nex.isNumeric(cw) ) {
				cw = parseFloat( cw );	
				if( maxWidth ) {
					cw = Math.min( cw, maxWidth );	
				}
				if( minWidth ) {
					cw = Math.max( cw, minWidth );		
				}
				cw += 'px'; 
			}
			
			self.addGridCssRules(
				'.nex-column-width-'+column._colid,
				'width:'+cw
			);
			return self;	
		},
		setColumnWidth : function(field,width){
			var self = this;
			self._setColumnWidth( field, width );
			//注意grid出现了滚动条再改变grid的列宽。这个时候应该会重新触发onScroll  但是在IE6下却没有触发这里做下兼容
			if( Nex.isIE6 ) {
				var scroll = self.getScrollView();		
				scroll.trigger( 'scroll' );
			}
			return self;
		},
		setGridBody : function(){
			var self = this
				,opt = self.configs;	
			var vbody = self.getGridBody();		
			//console.time(2);
			self.showGrid();
			//console.timeEnd(2);
		},
		/*
		*显示grid数据
		*/
		showGrid : function(/*pageNumber, pageSize*/){
			var self = this
				,opt = self.configs;	
			//set	pageNumber
			if( self.fireEvent('onBeforeShowGrid',[opt]) === false) {
				return self;	
			}	
			//矫正pageNumber
			opt.pageNumber = opt.fixPageNumber ? Math.min( opt.pageNumber, self.getPageCount() ) : opt.pageNumber;
			
			self.onShowGridStart();
			
			self.showLoading();
			self.loadPageData(function(data){
				if(self.isAjaxAsync()) {
					self.parseAsyncData(data);	
				}
				if( opt.loadOnce ) {
					opt.url = "";	
				}
				//注意 渲染gridRows时 grid数据过大时会导致初始渲染时页面空白现象，采用setTimeout方式，错开同时执行
				self.showLoading();
				setTimeout( function(){
					self.renderGridRows();
					self.hideLoading();	
				},0 );
			}, function(data){
				alert( data );
				//console.log(data);	
			}, function(data){
				self.hideLoading();	
			});	
			return self;			
		},
		'refresh' : function(){
			return this.showGrid();
		},
		refreshCache : function(){
			var self = this;
			self.showLoading();
			setTimeout( function(){
				self.renderGridRows();
				self.hideLoading();	
			},0 );	
			return self;
		},
		getPageCount : function(){
			var opt = this.configs;
			var total = this.getTotal();	
			var size = opt.pageSize || 1;
			return Math.ceil( total/size );
		},
		showPage : function( num ){
			var opt = this.configs;
			opt.pageNumber = num;
			return this.showGrid();
		},
		page : function(){
			return this.showPage.apply( self, arguments );	
		},
		renderGridRows : function(){
			var self = this;
			var opt = this.configs;
			
			self.createGridRows();
			
			self.onShowGridEnd();
			
			self.fireEvent('onShowGrid',[opt]);
			
			return self;
		},
		renderGridData : function(){
			return this.renderGridRows.apply( this, arguments );
		},
		onShowGridStart : function(){
			var self = this;
			//清空 选择行
			self.selection = {};
				
		},
		onShowGridEnd : function(){
			var self = this;
			self.afterRenderGridRows();
		},
		//创建GRID
		createGridRows : function(){
			var self = this
				,opt = self.configs;	
			var vbody = self.getGridBody();	
			var dataset = self.getCurrentPageData();
			//console.time(5)	
			vbody.html( self.getGridRowsHtml( dataset ) );	
			//console.timeEnd(5)
			return self;
		},
		getGridRowsHtml : function(datas){
			var self = this;
			var opt = this.configs;
			var trs = [ self.getColumnWidthTr() ];
			
			if( !datas.length && opt.showEmptyText ) {
				trs.push( self.getEmptyRowHtml() );	
			}
			//console.time(4)
			for(var i=0,len=datas.length;i<len;i++) {
				trs.push(self.getGridRowHtml(i,datas[i] || {}));	
			}	
			//console.timeEnd(4)
			return trs.join('');
		},
		getEmptyRowHtml : function( msg ){
			var self = this;
			var opt = this.configs;
			var msg = Nex.unDefined( msg, opt.emptyText );
			var columns = self.getColumns();	
			return '<tr class="nex-grid-empty-row"><td colspan="'+ Math.max(columns.length,1) +'">'+ (Nex.isEmpty(msg) ? '&nbsp;' : msg) +'</td></tr>';
		},
		getGridRowHtml : function( rid, data ){
			var self = this
				,opt = self.configs;	
			var data = self.parseRowData(data);	
			var columns = self.getColumns();
			var tds = [];
			var rowIndex = self.ridToIndex(rid);
			var rcls = [opt._defRowCls,'nex-grid-row'];
			if( opt.stripeRows ) {
				rcls.push( (rid+1)%2 ? 'nex-grid-row-odd '+opt.oddRowCls : 'nex-grid-row-even '+opt.evenRowCls );
			}
			var rowCls = Nex.isFunction( rowCls ) ? rowCls.call( self, rid, data ) : rowCls;
			var rowCssText = Nex.isFunction( rowCssText ) ? rowCssText.call( self, rid, data ) : rowCssText;
			var style = "";
			if( rowCssText ) {
				style = ['style="',rowCssText,'"'];
			}
			rcls.push( rowCls );
			var html = [
				'<tr id="',opt.id,'_row_',rid,'" class="',rcls.join(' '),'" ',style,' rid="',rid,'" ridx="',rowIndex,'">'
				];
					for(var i=0,len=columns.length;i<len;i++) {
						var column = columns[i];
						var field = column.field;
						//var dataType = column.dataType;
						//var value = self.getDataTypeValue( Nex.unDefined(data[column.dataIndex], ''), dataType, column );
						//var renderer = self.getCellRenderer( field );
						var value = self._getCellRendererValue( Nex.unDefined(data[column.dataIndex], ''), data, column, rid );//renderer( value, data, field, rid );
						//因为grid的border-collapse: separate;在ie6 7 下如果为空时单元格td不会显示，只有设置为collapse才会显示
						tds.push(
							'<td id="',opt.id,'_row_',rid,'_',column._colid,'" class="nex-grid-col nex-grid-col-',opt.id,' nex-grid-',column._colid,' nex-grid-cell-',column._colid,[i===0 ? ' nex-grid-col-first':'',i===(len-1) ? ' nex-grid-col-last':''].join(' '),' ',column.cellCls,'" field="',Nex.htmlEncode( field ),'" valign="',column.valign,'" align="',column.align,'">',
								'<div id="',opt.id,'_row_',rid,'_',column._colid,'_text" class="',['nex-grid-cell',opt.nowrap ? ' nex-grid-cell-nowrap' : ''].join(' '),'">',
								Nex.isEmpty( value ) ? '&nbsp;' : value,
								'</div>',
							'</td>'
						);	
					}
				html.push(tds.join(''),'</tr>');	
			return html.join('');
		},
		afterRenderGridRows : function(){
			var self = this
				,opt = self.configs;
			var columns = self.getAllColumns();
			var $view = self.getGridView();
			$.each( columns, function(i, column){
				var field = column.field;
				if( Nex.isFunction( column.cellAfterRender ) ) {
					$('.nex-grid-cell-'+column._colid, $view).each( function(){
						var $this = $(this);
						var rid = $this.parent().attr('rid');
						var value = self.getCellValue( rid, field );
						var $cell = self.getCellTextEl( rid, field );
						var data = self.getRowData( rid );
						column.cellAfterRender.call( self, $cell, value, rid , field , data, column  );		
					} );
				}
			} );		
		},
		parseRowData : function(data){
			var self = this
				,opt = self.configs;	
			var data = data || {};
			if( !data._uuid ) {
				data._uuid = Nex.uuid();	
			}	
			return data;		
		},
		_getCellRendererValue : function( value, data, column, rid ){
			var self = this;
			var field = column.field;
			var dataType = column.dataType;
			
			value = self.getDataTypeValue( value, dataType, column );
			
			var renderer = self.getCellRenderer( field ); 
			
			return renderer( value, data, field, rid );	
		},
		getDataTypes : function(){
			return {
				'string' : function( value ){
					return value + '';	
				},
				'int' : function( value ){
					return parseInt( value );	
				},	
				'float' : function( value ){
					return parseFloat( value );		
				},
				'date' : function( value, cfg ){
					return Nex.getUtil('Date').format(value, cfg.dateFormat);	
				},
				'boolean' : function( value ){
					if( Nex.isBoolean( value ) ) {
						return value ? 'True' : 'False';	
					}	
					return '';
				},
				'currency' : function( value, cfg ){
						
				}
			};		
		},
		//处理dataType
		//string|int|float|date|boolean|currency
		getDataTypeValue : function( value, dataType, cfg ){
			var self = this;
			var dataTypes = self.getDataTypes();
			
			if( Nex.isEmpty( value ) ) {
				return value;	
			}
			
			var renderer = Nex.isFunction( dataType ) ? dataType : dataTypes[ (dataType + '').toLowerCase() ];
			if( Nex.isFunction( renderer ) ) {
				return renderer.call( self, value, cfg );	
			}
			return value;
		},
		cellRendererCache : null,
		//renderer
		//获取单元格渲染器
		getCellRenderer : function( field ){
			var self = this
				,undef
				,opt = self.configs;
			var column = self.getColumnData( field );
			
			self.cellRendererCache = self.cellRendererCache || {};
			
			if( self.cellRendererCache[ field ] ) {
				return self.cellRendererCache[ field ];
			}
			
			var renderer = column.renderer;
			
			if( !column || Nex.isEmpty( renderer ) ) {
				renderer = function( str ){
					return str;	
				};
			} else if( Nex.isPlainObject( column.renderer ) ) {
				renderer = function( str, data, field, rid ){
					return column.renderer[ str ];	
				};
			} else if( Nex.isFunction( column.renderer ) ) {
				renderer = function(){
					return column.renderer.apply( self, arguments );
				};	
			} else {
				var fn = self.getTplFn( column.renderer + '', 'value, field, rid' );
				renderer = function( str, data, field, rid ){
					return fn.call( self, data, str , field, rid );	
				};		
			}
			
			self.cellRendererCache[ field ] = renderer;
			
			return renderer;	
		},
		getRowEl : function( rid ){
			var opt = this.configs;
			return $('#'+opt.id+'_row_'+rid);	
		},
		getCellEl : function( rid, field ){
			var opt = this.configs;
			var colid = this.getColumnColId( field );
			return $('#'+opt.id+'_row_'+rid+'_'+colid);
		},
		getCellTextEl : function( rid, field ){
			var opt = this.configs;
			var colid = this.getColumnColId( field );
			return $('#'+opt.id+'_row_'+rid+'_'+colid+'_text');
		},
		getCellValue : function( rid, field ){
			var data = this.getRowData( rid );	
			var dataIndex = this.getColumnProp( field, 'dataIndex' );
			return data[ field ];
		},
		getFieldValue : function(){
			return this.getCellValue.apply( this, arguments );	
		},
		getCellText : function( rid, field ){
			return this.getCellTextEl( rid, field ).html();
		},
		getFieldText : function(){
			return this.getCellText.apply( this, arguments );	
		},
		getCellDataType : function( field ){
			return this.getColumnProp( field, 'dataType' );	
		},
		setCellValue : function( rid, field, value ){
			var self = this;
			var opt = this.configs;
			
			var oldValue = self.getCellValue( rid, field );
			var newValue = value;
			
			if( oldValue === value ) {
				return self;	
			}
			
			self.setRowData( rid, field, value );
			
			var data = this.getRowData( rid );
			var column = this.getColumnData( field );
			var value = this._getCellRendererValue( value, data, column, rid );
			
			var $cellText = self.getCellTextEl( rid, field );
			
			$cellText.html( value );
			
			$cellText.addClass('nex-grid-cell-edit');
			
			//this.setCellText( rid, field, value );
			
			self.fireEvent('onCellValueChange',[ newValue, oldValue, rid, field, $cellText ]);
			
			return self;	
		},
		setFieldValue : function(){
			return this.setCellValue.apply( this, arguments );	
		},
		setCellText : function( rid, field, value ){
			this.getCellTextEl( rid, field ).html( value );
			return this;	
		},
		setFieldText : function(){
			return this.setCellText.apply( this, arguments );	
		},
		/*
		*更新行数据
		*/
		updateRow : function( rid, data ){},
		//解析服务器数据到本地
		parseAsyncData : function(data){
			var self = this
				,opt = self.configs;	
			if(Nex.isArray(data)) {
				self.setData( data );
			} else if( Nex.isObject(data) ) {
				var maps = opt.asyncDataMaps;
				$.each(maps, function(k,v){
					if(v in data) {//data.hasOwnProperty(k)
						if( 'data' === k ) {
							self.setData( data[v] );	
						} else {
							opt[k] = data[v];
						}
					}
				});	
			}
			return self;
		},
		isAjaxAsync : function(){
			return !!this.configs.url && !Nex.isEmpty(this.configs.url);	
		},
		getAjaxAsync : function(){
			return this.isAjaxAsync();	
		},
		emptyData : function(){
			this.setData([]);	
		},
		emptyGridData : function(){
			this.setGridData([]);	
			return this;	
		},
		/*
		*获取GRID所有数据
		*/
		getData : function(){
			return this.dataSource || [];	
		},
		setData : function( datas ){
			var self = this
				,opt = self.configs;
			self.dataSource = datas || [];	
			self.onDataChange( self.dataSource );
			self.fireEvent('onDataChange',[ self.dataSource ]);
			return this;	
		},
		getGridData : function(){
			return this.getData();	
		},
		setGridData : function( d ){
			this.setData( d );	
			this.refresh();
			return this;
		},
		onDataChange : function(){
			var self = this
				,opt = self.configs;
			if( opt.enableSort && ( !self.isAjaxAsync() || opt.localSort ) && opt.sortField  ) {
				self.sortData( opt.sortField, opt.sortOrder );	
				self.setSortIcon( opt.sortField, opt.sortOrder );
			}		
		},
		onColumnClick : function( field, column, e ){
			this._setColumnSortable( field, column, e );
		},
		_setColumnSortable : function( field, column, e ){
			var self = this
				,opt = self.configs;
			var helper = e.helper;	
			if( !self._isLeafColumn(field) ) return;
			if( !opt.enableSort ) return;
			if( !column.sortable ) return;
			if( helper.hasClass('nex-grid-sort-asc') ) {
				self.sortBy( column.field, 'desc' );
			} else {
				self.sortBy( column.field, 'asc' );	
			}
		},
		//排序元数据 datasource
		sortData : function( field, order ){
			var self = this
				,opt = self.configs;
			var column = self.getColumnData( field );
			if( !column ) {
				return self;	
			}	
			var fn = column.sortFn;
			var index = column.field;
			order = Nex.isEmpty( order ) ? 'asc' : order;	
			var isAsc = (order+'').toLowerCase() == "asc" ? true : false;	
			var dataset = self.getData();
			//sortFn
			if( Nex.isFunction( fn ) ) {
				dataset.sort( function(a,b){
					return fn(a, b, isAsc ? 'asc' : 'desc');
				} );	
			} else {
				dataset.sort(function(a,b){
					var a_t = self._undef(a[index],"");
					var b_t = self._undef(b[index],"");
					if( a_t > b_t ) {
						return isAsc ? 1 : -1;
					} if( a_t === b_t ){
						return 0;
					} else {
						return isAsc ? -1 : 1;
					}
				});
			}
			self.fireEvent("onSortData",[ dataset, field, order ]);		
			return self;	
		},
		//对grid排序
		sortBy : function( field, order ){
			var self = this
				,opt = self.configs; 
			
			if( self.fireEvent("onBeforeSort",[ field, order ]) === false ) {
				return self;	
			}		
			
			opt.sortField = field;
			opt.sortOrder = order;
			
			self.sortData( field, order );
			
			self.refresh();
			
			self.setSortIcon( field, order );
			
			return self;
		},
		setSortIcon : function( field, order ){
			var self = this
				,opt = self.configs;
			var header = self.getGridHeader();
			var el = self.getColumnEl( field );
			if( !el ) return self;
			order = Nex.isEmpty( order ) ? 'asc' : order;
			
			$( '.nex-grid-header-col', header ).removeClass('nex-grid-sort-asc nex-grid-sort-desc');
			$( '.nex-grid-sort-icon', header ).remove();								
			
			if( 'asc' === (order + '').toLowerCase() ) {
				el.addClass( 'nex-grid-sort-asc' );	
			} else {
				el.addClass( 'nex-grid-sort-desc' );		
			}
			var colText = self.getColumnTextEl( field );
			colText.after( $('<span class="nex-grid-sort-icon">&nbsp;</span>') );
			return self;
		},
		/*
		*获取当前页数据
		*/
		getCurrentPageData : function(){
			return this.getPageData();	
		},
		/*
		*加载当前页数据
		*/
		loadPageData : function(success,error,complete){
			var self = this
				,opt = self.configs;
			if( self.fireEvent('onBeforeLoadPageData',[success,error,complete]) === false) {
				return self;	
			}	
			var s = function(){
				self.fireEvent('onLoadPageDataSuccess',arguments);
				if( $.isFunction(success) ) {
					success.apply(self,arguments);	
				}	
			}
			var f = function(){
				self.fireEvent('onLoadPageDataError',arguments);
				if( $.isFunction(error) ) {
					error.apply(self,arguments);	
				}	
			}
			var c = function(){
				self.fireEvent('onLoadPageDataComplete',arguments);
				if( $.isFunction(complete) ) {
					complete.apply(self,arguments);	
				}	
			}
			if( self.isAjaxAsync() ) {
				self.loadAsyncPage(s,f,c);	
			} else {
				s(self.loadLocalPage());	
				c(self);	
			}
			return self;
		},
		//从本地data数据源中加载当前页数据
		loadLocalPage : function( num ){
			var self = this
				,opt = self.configs
				,data = this.getData();	
			//var pageNumber = opt.pageNumber;	
			var pageNumber = Nex.unDefined( num, opt.pageNumber );
			var pageSize = opt.pageSize;
			if( !data.length ) {
				return [];	
			}	
			var index = (pageNumber-1)*pageSize;
			return data.slice(index, pageNumber*pageSize);	
		},
		getPageData : function( num ){
			var self = this
				,opt = self.configs
				,data = this.getData();	
			var num = Nex.unDefined( num, opt.pageNumber );
			var size = opt.pageSize;
			if( self.isAjaxAsync() ) {
				return data.slice(0, size);	
			} else {
				return self.loadLocalPage( num );	
			}	
		},
		//从服务器中加载当前页数据
		loadAsyncPage : function(success, error, complete){
			var self = this,
				opt = self.configs;
			
			var ajaxData = opt.ajaxData || {};
			
			var ajaxOptions = $.extend({},{
					type 		: opt.ajaxMethod,
					cache 		: opt.ajaxCache,
					dataType	: opt.ajaxDataType,
					dataFilter	: opt.ajaxDataFilter
				});
				
			$.extend(ajaxOptions, opt.ajaxOptions);
			
			ajaxOptions.data = $.extend(ajaxOptions.data || {},ajaxData);
			ajaxOptions.$caller = self;
			ajaxOptions.url = opt.url;
			//排序
			//if( opt.enableSort && !opt.localSort && opt.sortField ) {
//				ajaxOptions.data[ opt.sortFieldField ] = opt.sortFieldField;
//				ajaxOptions.data[ opt.sortFieldOrder ] = opt.sortFieldOrder;
//			}
			
			ajaxOptions.success = function(data){
				if( $.isFunction(success) ) {
					success(data);	
				}
				self.fireEvent('onLoadAsyncDataSuccess',[data,opt]);
			};
			ajaxOptions.error = function(xmlHttp){
				if( $.isFunction(error) ) {
					error(xmlHttp);	
				}
				self.fireEvent('onLoadAsyncDataError',[xmlHttp,opt]);
			};
			
			ajaxOptions.complete = function(data){
				if( $.isFunction(complete) ) {
					complete(data);	
				}
				self.fireEvent('onLoadAsyncDataEnd',[opt]);
				self.fireEvent('onLoadAsyncDataComplete',[data,opt]);	
			};
			
			if( self.fireEvent('onBeforeLoadAsyncData',[ajaxOptions,opt]) === false ) {
				return;	
			}	
			self.onLoadAsyncDataStart( ajaxOptions, opt );
			self.fireEvent('onLoadAsyncDataStart',[ajaxOptions,opt]);
			
			self.ajaxSend(ajaxOptions);
			
			return self;
		},
		ajaxSend : function(ajaxOptions){
			var self = this;
			var opt = self.configs;
			if( $.isFunction( opt.ajaxSend ) ) {
				opt.ajaxSend.call(self, ajaxOptions);
			} else {
				Nex.Create(opt.ajaxClass, ajaxOptions);
			}
			return self;
		},
		onLoadAsyncDataStart : function(ajaxOptions, opt){
			ajaxOptions.data[opt.ajaxPageNumberField] = opt.pageNumber;
			ajaxOptions.data[opt.ajaxPageSizeField] = opt.pageSize;
			//排序
			if( opt.enableSort && !opt.localSort && opt.sortField ) {
				ajaxOptions.data[ opt.sortFieldField ] = opt.sortFieldField;
				ajaxOptions.data[ opt.sortFieldOrder ] = opt.sortFieldOrder;
			}	
		},
		setPageNumber : function(num){
			var opt = this.configs;
			opt.pageNumber = Math.max(parseInt(num) || opt.pageNumber,1);
			return this;	
		},
		setPageSize : function(num){
			var opt = this.configs;
			opt.pageSize = Math.max(parseInt(num) || opt.pageSize,1);
			return this;	
		},
		setTotal : function(num){
			var opt = this.configs;
			opt.total = parseInt(num) || opt.total;
			return this;		
		},
		getTotal : function(){
			var opt = this.configs;
			var data = this.getData();
			return this.isAjaxAsync() ? data.length : opt.total || data.length;	
		},
		showGridHLines : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-dataview-body .nex-grid-col-'+opt.id,
				'border-bottom-width:;border-top-width:'
			);
		},
		hideGridHLines : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-dataview-body .nex-grid-col-'+opt.id,
				'border-bottom-width:0;border-top-width:0'
			);
		},
		showGridVLines : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-dataview-body .nex-grid-col-'+opt.id,
				'border-left-width:;border-right-width:'
			);	
		},
		hideGridVLines : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-dataview-body .nex-grid-col-'+opt.id,
				'border-left-width:0;border-right-width:0'
			);	
		},
		//应该设置opt.showHeader = true
		showGridHeader : function(){
			var self = this;
		//	var opt = this.configs;		
			
			var header = self.getGridHeader();
			header.show();
			
			return self;
		},
		hideGridHeader : function(){
			var self = this;
		//	var opt = this.configs;			
			
			var header = self.getGridHeader();
			header.hide();
			
			return self;
		},
		_setRowOverCls : function( rid, data, e ){
			var opt = this.configs;	
			var $tr = e.helper;
			if( !opt.trackMouseOverRow ) return;
			$tr.addClass(['nex-grid-row-over',opt.overRowCls].join(' '));
		},
		_setRowOutCls : function( rid, data, e ){
			var opt = this.configs;	
			var $tr = e.helper;
			if( !opt.trackMouseOverRow ) return;
			$tr.removeClass(['nex-grid-row-over',opt.overRowCls].join(' '));
		},
		onRowMouseOver : function(){
			this._setRowOverCls.apply( this, arguments );	
		},
		onRowMouseOut : function(){
			this._setRowOutCls.apply( this, arguments );	
		},
		onRowClick : function( rid, data, e ){
			this._checkToToggleSelectRow.apply( this, arguments );	
		},
		_checkToToggleSelectRow : function( rid, data, e ){
			var self = this;
			var opt = this.configs;	
			var $tr = e.helper;
			var selectRow = self.selection;
			
			if( !opt.enableSelectRow ) return;
			
			var selection = self.selection;
			
			if( opt.singleSelect ) {
				//处理单选模式
				if( selection[ rid ] ) {
					opt.enableUnselect && self.unselectRow( rid );
					return;	
				}
				self.unselectAll();
				self.selectRow( rid );
			} else {
				self.toggleSelectRow( rid );	
			}
		},
		getGridRowEl : function( rid ){
			var opt = this.configs;
			return $('#'+opt.id+'_row_'+rid);	
		},
		/*
		* 选择指定行
		*/
		selectRow : function( rid ){
			var self = this,
				opt = self.configs;
			
			var $row = self.getGridRowEl( rid );
			
			if( !$row.length ) return self;

			var data = self.getRowData( rid );
			
			var selection = self.selection;
			
			//重复选择
			if( selection[rid] ) {
				return self;	
			}
			
			if( self.fireEvent('onBeforeSelectRow',[ rid, data ]) === false ) {
				return self;	
			}
			
			$row.addClass('nex-grid-row-selected '+opt.selectedRowCls);
			
			self.selection[rid] = true;	
			
			self.fireEvent('onSelectRow',[ rid, data ]);
			
			self.fireEvent('onSelectionChange',[]);
			
			return self;
		},
		/*
		* 取消选择指定行
		*/
		unselectRow : function( rid ){
			var self = this,
				opt = self.configs;
			
			var $row = self.getGridRowEl( rid );
			
			if( !$row.length ) return self;

			var data = self.getRowData( rid );
			
			var selection = self.selection;
			
			//重复取消
			if( !selection[rid] ) {
				return self;	
			}
			
			if( self.fireEvent('onBeforeUnSelectRow',[ rid, data ]) === false ) {
				return self;	
			}
			
			$row.removeClass('nex-grid-row-selected '+opt.selectedRowCls);
			
			self.selection[rid] = false;	
			delete self.selection[rid];
			
			self.fireEvent('onUnSelectRow',[ rid, data ]);
			
			self.fireEvent('onSelectionChange',[]);
			
			return self;
		},
		toggleSelectRow : function( rid ){ 
			var selection = this.selection;
			return selection[rid] ? this.unselectRow( rid ) : this.selectRow( rid );
		},
		//选择所有行
		selectAll : function(){
			var self = this;
			var opt = self.configs;
			var datas = self.getCurrentPageData();	
			
			for( var i=0,len=datas.length; i<len; i++ ) {
				self.selectRow( i );	
			}
			
			return self;
		},
		unselectAll : function(){
			var self = this;
			var selection = self.selection;	
			for( var rid in selection ) {
				if( selection[rid] ) {
					self.unselectRow( rid );		
				}	
			}
			return self;
		},
		selectRows : function( rows ){//行数组
			$.each( rows, function(i,rid){
				this.selectRow( rid );	
			} );
			return this;	
		},
		unselectRows : function( rows ){//行数组
			$.each( rows, function( i, rid ) {
				this.unselectRow( rid );	
			} );
			return this;	
		},
		selectFirstRow : function(){
			return this.selectRow(0);	
		},
		selectLastRow : function(){
			var datas = this.getCurrentPageData();	
			return this.selectRow( Math.max( datas.length - 1, 0 ) );	
		},
		selectRange : function( start, end ){
			var datas = this.getCurrentPageData();
			end = Math.min( end, Math.max( datas.length - 1, 0 )  );	
			var s = Math.min( start, end );
			var e = Math.max( start, end );
			for( ; s<=e; s++ ) {
				this.selectRow( s );	
			}
			return this;
		},
		unselectRange : function( start, end ){
			var datas = this.getCurrentPageData();
			end = Math.min( end, Math.max( datas.length - 1, 0 )  );	
			var s = Math.min( start, end );
			var e = Math.max( start, end );
			for( ; s<=e; s++ ) {
				this.unselectRow( s );	
			}
			return this;
		},
		setSingleSelect : function(){
			this.configs.singleSelect = true;	
			return this;
		},
		setMulitSelect : function(){
			this.configs.singleSelect = false;
			return this;	
		},
		//单选和多选 的问题 还需要再处理 shift 等支持问题。。。
		//resize 列
		__resizing : false,
		isResizing : function(){
			return this.__resizing;	
		},
		_startResize : function( el, e ){
			var self = this;
			var opt = this.configs;
			
			var resizer = $(el);
			var field = resizer.parent().attr("field");
			var column = self.getColumnData( field );
			var fw = self.getColumnWidth( field );
			
			var originCur = document.body.style.cursor;
			
			if( !field || !column ) return;
			
			var tmp = {};
			var $view = self.getGridView();
			//var $dataView = self.getGridDataView();
			var rtd = self.getColumnEl( field );
			
			function start(e,opt) {
			
				self.__resizing = true;
				
				$(document.body).css("cursor", "col-resize");
				$(document.body).disableSelection();
				
				var helper = $("<div class='nex-grid-resize-tmp "+( opt.showColumnResizeBorder ? 'nex-grid-resize-border' : '' )+"'></div>");
				$view.append(helper);
		
				var offset = rtd.offset();
				var left = offset.left - $view.offset().left + $view.scrollLeft();
				var height = $view.get(0).clientHeight;
				var width = rtd.width();
				helper.css({
					position: 'absolute',
					top		: $view.css('paddingTop'),
					zIndex	: 9999,
					left	: left
				});
				helper.outerHeight( parseFloat(height) );
				helper.outerWidth( parseFloat(width) );
				tmp.helper = helper;
				tmp.x1 = e.clientX;
				tmp.x2 = e.clientX;
				tmp.column = column;
				tmp.left = left;
				tmp.width = helper.width();
				tmp.originWidth = helper.width();
				tmp.originColumnWidth = fw;
				tmp.offsetX = 0;
				
				self.fireEvent('onColumnResizeStart',[tmp,e]);
				
				$(document).bind("mousemove._resize", function(e){
					tmp.x2 = e.clientX;
					tmp.offsetX = tmp.x2 - tmp.x1;
					if( self.fireEvent('onColumnResizing',[tmp,e]) === false ) {
						return;	
					}
					resize( e );
				});
				$(document).bind("mouseup._resize", function(e){
					setTimeout(function(){
						self.__resizing = false;						
					},0);
					stop( e );
				});
			}
			function resize(e){
				tmp.helper.width( Math.max(tmp.width + tmp.offsetX, 0) );
				if( opt.resizeColumnReal ) {
					self.setColumnWidth( field, tmp.originColumnWidth + tmp.offsetX );
				}
			}
			function stop(e){
				if( !opt.resizeColumnReal ) {
					self.setColumnWidth( field, tmp.originColumnWidth + tmp.offsetX );
				}
				$(document).unbind("mousemove._resize");
				$(document).unbind("mouseup._resize");
				document.body.style.cursor = originCur;
				$(document.body).enableSelection();
				$(tmp.helper).remove();
				self.fireEvent('onColumnResizeEnd',[ tmp, e]);
			}	
			
			if( self.fireEvent('onColumnResizeBefore',[ field, el, e]) === false ) {
				return;	
			}
			
			start.call(el, e, opt);
			e.preventDefault();
			e.stopPropagation();
		},
		/*column type */
		_getEmptyColumn : function( column ){
			return Nex.applyIf(column, {
				title : '&nbsp;',
				minWidth : null,
				maxWidth : null,
				resizable : false,
				sortable : false
			});	
		},
		_getIndexColumn : function( column ){
			return Nex.applyIf(column, {
				title : '&nbsp;',
				width : 40,
				resizable : false,
				sortable : false,
				headerAlign : 'center',
				align : 'center',
				renderer : function( v, d, f, rid ){
					return this.ridToIndex( rid )+1;	
				} 
			});	
		},
		_getRownumberColumn : function( column ){
			return this._getIndexColumn( column );	
		},
		_getCheckboxColumn : function( column ){
			return Nex.applyIf(column, {
				title : '<span class="nex-icon-checkbox nex-grid-cloumn-checkbox"></span>',
				width : 30,
				resizable : false,
				sortable : false,
				headerAlign : 'center',
				align : 'center',
				headerAfterRender : function( el, column ){
					var self = this;
					var opt = this.configs;
					$('.nex-icon-checkbox', el).click( function( e ){
						if( opt.singleSelect ) return;
						var $this = $(this);
						if( $this.hasClass('nex-icon-checkbox-chcked') ) {
							$this.removeClass('nex-icon-checkbox-chcked');
							self.unselectAll();
						} else {
							$this.addClass('nex-icon-checkbox-chcked');
							self.selectAll();
						}	
					} );
				},
				renderer : function( v, d, f, rid ){
					return '<span class="nex-icon-checkbox nex-grid-cell-checkbox"></span>';	
				} 
			});	
		},
		pager : null,
		pagerRendered : false,
		//显示分页工具
		initPager : function(){
			var self = this;
			var opt = this.configs;
			
			if( self.pagerRendered ) {
				return self;	
			}
			
			self.pagerRendered = true;
			
			var $view = self.getBody();
			var pager = Nex.Create(opt.pagerClass,{
				cls : 'nex-grid-pager',
				pageNumber : opt.pageNumber,
				pageSize : opt.pageSize,
				refreshBtn : true,
				total : self.getTotal(),
				renderTo : $view
			});
			
			if( pager ) {
				self.pager = pager;
				self.addViewToGridView( 'pager', pager.el );	
				
				pager.on('onPageChange', function( page, size, total ){
					
					opt.pageNumber = page;
					opt.pageSize = size;
					
					self.refresh();
						
				});
				
				self.on('onShowGrid', function( cfg ){
					pager.refresh( {
						pageNumber  : cfg.pageNumber,
						pageSize 	: cfg.pageSize,
						total 		: self.getTotal()
					} );	
				});
				
			}
			
			return self;
		},
		//camelCase
		/*css style管理*/
		test : function(){}
	});
	
	return table;
});	
/*
Tips:
	尽量不要写内联样式,会倒置渲染变得非常卡，特别是IE超级卡！！
------
1.dateFormat。。货币类型。。 
2.分页。。。
3.单选/多选。。。
4.
*/
define('Nex/grid/Grid',['require','Nex/grid/Table'],function(require){
	require('Nex/grid/Table');	
	
	var grid = Nex.define('Nex.grid.Grid',{
		extend : 'Nex.grid.Table',
		xtype : 'grid gridpanel',
		alias : 'Nex.Grid',
		configs : function(opt){
			return {
				resizeColumnReal : false,
				showColumnResizeBorder :  true,
				containerCls : [opt.containerCls,'nex-grid'].join(' '),
				_defRowCls : 'nex-grid-grid',
				_columnMetaData : Nex.apply( opt._columnMetaData, {
					width : 120	
				} ),
				tpl : Nex.apply( opt.tpl, {
					'view' : '<div id="<%=id%>_view" class="nex-grid-view"><div id="<%=id%>_dataview" class="nex-grid-dataview"><div id="<%=id%>_dataview_headerCt" class="nex-grid-dataview-headerct"><div id="<%=id%>_dataview_header" class="nex-grid-header nex-grid-dataview-header"></div></div><div id="<%=id%>_dataview_body" class="nex-grid-dataview-body"></div></div></div>'
				} )
			};	
		}	
	});
	grid.override({
		/* 这里有可能返回多个header 因为有锁列 */
		/*getGridHeader : function(){
			var opt = this.configs;
			var views = opt.views;
			views['gridHeaderCt'] = $('#'+opt.id+'_dataview_headerCt');
			return views['gridHeaderCt'];	
		},*/
		getGridDataHeader : function(){
			var opt = this.configs;
			var views = opt.views;
			if( !views['gridHeaderCt'] )
				views['gridHeaderCt'] = $('#'+opt.id+'_dataview_headerCt');
			return views['gridHeaderCt'];	
		},
		getGridDataHeaderInner : function(){
			return this.configs.views['gridHeader'];	
		},
		_setGridLayoutCss : function(){
			var self = this;
			var opt = this.configs;	
			self.addGridCssRules(
				'.nex-grid-table',
				'table-layout: fixed;width: 0px;'
			);
			return self;
		},
		getScrollView : function(){
			return this.configs.views['gridBody'];	
		},
		getGridHeaderHtml : function(){
			return [
				'<table class="nex-grid-table nex-grid-header-table" cellpadding="0" cellspacing="0" border="0">',
					'<tbody>',
						this.callParent( arguments ),
					'<tbody>',
				'</table>'
			].join('');	
		},
		getGridRowsHtml : function(){
			return [
				'<table class="nex-grid-table nex-grid-body-table" cellpadding="0" cellspacing="0" border="0">',
					'<tbody>',
						this.callParent( arguments ),
					'<tbody>',
				'</table>'
			].join('');		
		},
		setGridDataViewSize : function(){
			var self = this;
			var opt = this.configs;
			self.callParent( arguments );
			var $view = self.getGridView();
			var $dataView = self.getGridDataView();	
			var $gridBody = self.getGridDataBody();	
			var $gridHeader = self.getGridDataHeader();
			if( !self.isAutoWidth() ) {
				$dataView._outerWidth( $view._width() );
				$gridBody._outerWidth( $dataView._width() );
			} else {
				$dataView._removeStyle('width');	
				$gridBody._removeStyle('width');	
			}
			if( !self.isAutoHeight() ) {
				$dataView._outerHeight( $view._height() );
				$gridBody._outerHeight( $dataView._height() - $gridHeader._outerHeight() );
			} else {
				$dataView._removeStyle('height');	
				$gridBody._removeStyle('height');	
			}
		},
		doRenderContent : function(){
			this.callParent( arguments );
			this.setGridViewSize();	
		},
		onScrollLeft : function( left, el, e, opt ){
			var self = this;
			var header = self.getGridDataHeaderInner();
			header.css({
				marginLeft : -left
			});	
		},
		/**
		* 重写
		*/
		_setColumnWidth : function(field, width){
			var self = this
				,opt = self.configs;	
			var column = self.getColumnData(field);
			if( !column ) return self;
			column.width = width;
			
			var maxWidth = column.maxWidth;
			var minWidth = column.minWidth;
			
			var $dataView = self.getGridDataBody() || self.getGridDataHeader();
			//这里没有使用_width 如果考虑隐藏中创建就要考虑
			var vw = $dataView.width() || 0;
			
			var cw = width+'';
			//Nex.hasScroll(v)
			if( cw.indexOf("%") != -1 ) {
				var w = vw;
				//判断是否出现了垂直滚动条
				if( Nex.hasScroll($dataView, 'top') ) {
					var barSize = Nex.getScrollbarSize().width;
					w = vw - barSize;//减滚动条宽度
				}
				cw = parseFloat(width)*w/100;
			} else {
				cw = parseFloat(width);
			}
			
			if( maxWidth ) {
				cw = Math.min( cw, maxWidth );	
			}
			if( minWidth ) {
				cw = Math.max( cw, minWidth );		
			}
			
			self.addGridCssRules(
				'.nex-column-width-'+column._colid,
				'width:'+cw+'px'
			);
			return self;		
		},
		/**
		* 刷新表格宽度设置
		* @whole {boolean} [false] 是否刷新全部 否则刷新百分比
		*/
		refreshColumnsWidth : function(whole){
			var self = this;
			var opt = this.configs;	
			var columns = self.getLeafColumns();
			$.each(columns, function(i, column){
				if( whole || (column.width+'').indexOf('%') != -1 ) {
					self._setColumnWidth( column.field, column.width );
				}
			});
			return self;
		},
		afterRenderGridRows : function(){
			var self = this
				,opt = self.configs;
			self.callParent(arguments);
			self.refreshColumnsWidth();			
		},
		onViewSizeChange : function(){
			var self = this
				,opt = self.configs;
			self.callParent(arguments);
			self.refreshColumnsWidth();			
		},
		/**
		* 滚动到指定行
		*  @rid {int} 行id
		*/
		scrollToRow : function(rid){
			var self = this;
			var opt = self.configs;
	
			if( self.fireEvent("onBeforeScrollToRow",[rid,opt]) === false ) {
				return self;	
			}
			/*
			if( opt.lazyLoadRow && self.inArray( rid,opt.lazyRows ) == -1 ) {
				opt.sTop = opt._trHeight*rid;
				self.fireEvent("onScroll",[]);
				return self;
			}
			*/
			var $viewBody = self.getGridDataBody();
			
			var barSize = Nex.getScrollbarSize().height;
			
			var offset = $viewBody.offset();
			var h = $viewBody._outerHeight();
			
			//判断是否出现了水平滚动条
			if( Nex.hasScroll($viewBody, 'left') ) {
				h -= barSize;//-滚动条大小
			}
			
			var f = self.getRowEl(rid);
			if( !f.length ) {
				return self;	
			}
			
			var fo = f.offset();
			var fh = f._outerHeight();
			
			var outerHeight = 0;
			if( offset.top > fo.top ) {
				outerHeight = offset.top - fo.top;
			} else if( (offset.top+h) < (fo.top+fh) ) {
				outerHeight = (offset.top+h) - (fo.top+fh);
			}
			
			self.scrollTop($viewBody.scrollTop() - outerHeight);
			
			self.fireEvent("onAfterScrollToRow",[rid,opt]);
			
			return self;
		},
		/**
		* 滚动到指定列
		*  @field {string} 
		*/
		scrollToColumn : function(field){
			var self = this;
			var opt = self.configs;
			var header = self.getGridDataHeader();
			var $viewBody = self.getGridDataBody();
			
			if( !header.length ) {
				return self;	
			}
			
			//getColumnEl
			
			//var columns = self.getColumnList();
			
			/*if( self.inArray( field,columns ) == -1 ) {
				return self;		
			}*/
			
			//检测当前列是否已经隐藏
			/*if( self.inArray( field,opt.hideColumns ) != -1 ) {
				return self;		
			}*/
			
			
			if( self.fireEvent("onBeforeScrollToColumn",[field,opt]) === false ) {
				return self;	
			}
			
			var barSize = Nex.getScrollbarSize().width;
			
			var offset = header.offset();
			var w = header._outerWidth();
			//判断是否出现了垂直滚动条
			//这里在某些情况下有可能存在BUG, 可参见autoHeight 对判断是否出现滚动条问题的解决
			if( Nex.hasScroll($viewBody, 'top') ) {
				w -= barSize;//-滚动条大小
			}
			
			var f = self.getColumnEl(field);
			
			if( !f || !f.length ) return self;
			
			var fo = f.offset();
			var fw = f._outerWidth();
			
			var outerWidth = 0;
			if( offset.left > fo.left ) {
				outerWidth = offset.left - fo.left;
			} else if( (offset.left+w) < (fo.left+fw) ) {
				outerWidth = (offset.left+w) - (fo.left+fw);
			}
			console.log(offset.left , fo.left);
			self.scrollLeft($viewBody.scrollLeft() - outerWidth);
			
			self.fireEvent("onAfterScrollToField", [field,opt]);

			return self;
		},
		scrollToField : function(){
			return this.scrollToColumn.apply(this, arguments);	
		}
	});

	return grid;
});	
/*
draggable - jQuery Nex
nobo
zere.nobo@gmail.com
qq : 505931977
var drag = new Nex.draggable({helper:$('#drag')});
*/
define('Nex/drag/Drag',['require','Nex'],function(require){
	require('Nex');	
	var drag = Nex.define('Nex.drag.Drag',{
		extend : 'Nex.AbstractComponent',
		alias : 'Nex.Drag',
		xtype : 'drag draggable',
		configs : function(){
			return {
				prefix : 'drag-',
				denyManager : true,
				cursor:'move',
				_cursor : '',
				appendTo : null,//document.body
				clone : false,
				cloneFn : null,//自定义返回一个克隆对象
				helper:null,//用于触发移动的元素 必须
				cancel : null,
				target: null,//最终需要移动的元素
				disabled: false,
				axis:null,	// v or h
				parent : null,
				afterDrag : null,//停止移动后可自定义函数实现
				delay : 0, //当鼠标点下后，延迟指定时间后才开始激活拖拽动作（单位：毫秒）。
				distance : 0, //当鼠标点下后，只有移动指定像素后才开始激活拖拽动作。
				opacity : false,//当元素开始拖拽时，改变元素的透明度。
				_opacity : '',
				_revertConf : {},//还原信息
				revert :　false,//当元素拖拽结束后，元素回到原来的位置。   
				revertDuration : 500,//当元素拖拽结束后，元素回到原来的位置的时间。（单位：毫秒）
				revertEasing : 'easeOutCubic',
				moveHelper : null,//移动中的元素
				dragCls : '',
				left : 0,//moveHelper移动后的位置 
				top : 0,
				_sLeft : 0,//moveHelper初始位置
				_sTop : 0,
				_ssLeft : 0,//moveHelper滚动条初始位置
				_ssTop : 0,
				_sX : 0, //初始坐标
				_sY : 0,
				offsetX : 0,
				offsetY : 0,
				_sPosition : '',
				edge : 0,//无效边缘
				events : {}
			};
		}		
	});
	$.dragable = $.nexDragable = drag;
	
	drag.override({
		initComponent : function(opt) {
			var self = this;
			var opt = this.configs;
			
			self.callParent(arguments);
			
			if( !opt.helper && !opt.target ) return;
			if( !opt.helper ) {
				opt.helper = opt.target;	
			}
			var target = null;
            if (typeof opt.target == 'undefined' || opt.target == null){
                target = opt.helper;
            } else {
                target = (typeof opt.target == 'string' ? $(opt.target) : opt.target);
            }
			
			//opt.parent = $(target).offsetParent();
			opt.target = target;
			
			$(opt.helper).data('nex.draggable', self);
			
			opt.helper.bind('mousedown.draggable', $.proxy( self,'mouseDown' ));
			//opt.helper.bind('mousemove.draggable', $.proxy( self,'mouseMove' ));
			//opt.helper.bind('mouseleave.draggable', $.proxy( self,'mouseLeave' ));
			
			//self.fireEvent('onCreate',[opt]);
		},
		//系统事件
		/*sysEvents : function(){
			var self = this;
			var opt = self.configs;
			//self.bind("onStart",self.onStart);	
		},*/
		mouseDown : function(e){
			var self = this;
			var opt = self.configs;
			
			if( self.checkDisabledEdge(e) ) {
				//opt.helper.css('cursor', '');
				return;
			}
			
			opt._sX = e.pageX;
			opt._sY = e.pageY;
			
			var st = 0;
			if( opt.delay>0 ) {
				st = setTimeout( function(){
					st = 0;
					$(document).bind('mousedown.draggable', $.proxy( self,'_doDown' ));
					$(document).bind('mousemove.draggable', $.proxy( self,'_doMove' ));	
					$(document).bind('mouseup.draggable', $.proxy( self,'_doUp' ));		
				},opt.delay );	
				$(document).one('mouseup.draggable', function(){
					if( st ) {
						clearTimeout( st );	
					}											   
				});
			} else {
				$(document).bind('mousedown.draggable', $.proxy( self,'_doDown' ));
				$(document).bind('mousemove.draggable', $.proxy( self,'_doMove' ));	
				$(document).bind('mouseup.draggable', $.proxy( self,'_doUp' ));	
			}
			
		},
		beginDrag : false,
		isDragging : false,
		_doDown : function(e){
			var self = this;
			var opt = self.configs;
			
			$(document).disableSelection();
			
			self.beginDrag = false;
			//cancel
			if( opt.cancel ) {
				var target = $(e.target || e.srcElement); 
				if( target.closest( opt.cancel ).length ) {
					this._doUp();
					return;	
				}
			}
			
			var r = self.fireEvent('onBeforeDrag',[e,opt]);
			if( r === false) return;
			
			self.beginDrag = true;
			
			//$('body').css('cursor', opt.cursor);
		},
		_doMove : function(e){
			var self = this;
			var opt = self.configs;
			
			if( opt.disabled || !self.beginDrag ) return;
			
			var offsetX = e.pageX - opt._sX;
			var offsetY = e.pageY - opt._sY;
			
			opt.offsetX = offsetX;
			opt.offsetY = offsetY;
			
			if( opt.distance && !self.isDragging ) {
				
				var dist = Math.max( Math.abs( offsetX ),Math.abs( offsetY ) );
				if( dist<opt.distance ) {
					return;	
				}
				
			}
			if( !self.isDragging ) {
				
				var helper = self.getMoveHelper();
				//startDrag 不应该阻止
				//var r = self.fireEvent('onStartDrag',[helper,e,opt]);
				//if( r === false) return;
				
				self.fireEvent('onStartDrag',[helper,e,opt]);
				
				self._startMove();
				
				if( opt.dragCls ) {
					helper.addClass( opt.dragCls );	
				}
				
				self.isDragging = true;
			}
			
			//var parent = $(opt.moveHelper).parent();
			var cLeft = 0;//parent.scrollLeft();
			var cTop = 0;//parent.scrollTop();
			
			var left = opt._sLeft + offsetX + cLeft - opt._ssLeft;
			var top = opt._sTop + offsetY + cTop - opt._ssTop;
			
			if (opt.axis == 'h') {
				opt.left = left;
				opt.top = opt._sTop;
			} else if (opt.axis == 'v') {
				opt.left = opt._sLeft;
				opt.top = top;
			} else {
				opt.left = left;
				opt.top = top;
			}
			
			var pos = {
				left : opt.left,
				top : opt.top	
			}
			
			var r = self.fireEvent('onDrag',[opt.moveHelper,pos,e,opt]);
			if( r === false) return;
			
			self.moveToPosition(pos.left,pos.top,e);	
			
		},
		_doUp : function(e){
			var self = this;
			var opt = self.configs;
			$(document).unbind('.draggable');	
			$(document).enableSelection();	
			/*setTimeout(function(){
				$('body').css('cursor','');
			},100);*/
			if( opt.disabled || !self.beginDrag ) return;
			if( !self.isDragging ) {
				return;	
			}
			self.isDragging = false;
			$('body').css('cursor',opt._cursor);
			/*var endDrag = function(){
				self.isDragging = false;	
			};*/
			$(opt.moveHelper).removeClass( opt.dragCls );	
			
			var pos = {
				left : opt.left,
				top  : opt.top	
			};
			
			var r = self.fireEvent('onStopDrag',[opt.moveHelper,pos,e,opt]);
			
			opt.left = pos.left;
			opt.top = pos.top;
			
			if( r === false ) {//easeOutCubic
				self._revertEl();
			} else {
				//self.moveToPosition(opt.left,opt.top,e);	
				var afterDrag = function(){
					if( opt.revert === true ) {
						self._revertEl();	
					} else if( opt.revert === false ) {
						self._endMove();
					}	
				};
				if( $.isFunction( opt.afterDrag ) ) {
					afterDrag = opt.afterDrag;	
				}
				afterDrag.call(self);
			}
			//因为onStopDrag后会继续设置target的坐标实际上onStopDrag并不是最终触发的事件，onAfterDrag才是最终触发的事件
			self.fireEvent('onAfterDrag',[pos,e,opt]);
		},
		_revertEl : function(){
			var self = this;
			var opt = self.configs;
			var call = function(){
				if( opt.opacity !== false ) {
					$(opt.moveHelper).css( 'opacity',opt._opacity );
				}
				if( opt.clone ) {
					$(opt.moveHelper).remove();	
				}	
				if( opt.appendTo ) {
					opt._revertConf.revert();
					opt._revertConf.target[0].style.cssText = opt._revertConf.cssText;
					opt._revertConf.parent.scrollTop( opt._revertConf.sTop );
					opt._revertConf.parent.scrollLeft( opt._revertConf.sLeft );
				}
			};
			if( opt.revertDuration>0 ) {
				$(opt.moveHelper).animate({
					left:opt._sLeft,
					top:opt._sTop
				}, opt.revertDuration, opt.revertEasing ,function(){
					call();
				});	
			} else {
				$(opt.moveHelper).css({
					left:opt._sLeft,
					top:opt._sTop
				});	
				call();
			}
		},
		_getFixPositionSize : function( op ){
			
			var _c = parseFloat(op.css('borderLeftWidth')) || 0,
			_e = parseFloat(op.css('paddingLeft')) || 0,
			_c1 = parseFloat(op.css('borderTopWidth')) || 0,
			_e1 = parseFloat(op.css('paddingTop')) || 0;
			/*_c = isNaN( _c ) ? 0 : _c;
			_e = isNaN( _e ) ? 0 : _e;
			_c1 = isNaN( _c1 ) ? 0 : _c1;
			_e1 = isNaN( _e1 ) ? 0 : _e1;*/
			return {
				left : _c + _e,
				top : _c1 + _e1
			};		
		},
		getMoveHelper : function(){
			var self = this;
			var opt = self.configs;
			var target = $(opt.target);	
			opt.moveHelper = target;	
			if( opt.clone ) {
				opt.moveHelper = $.isFunction( opt.cloneFn ) ? opt.cloneFn.call( self,target,opt ) : target.clone();
				opt.moveHelper = opt.moveHelper ? $(opt.moveHelper) : target.clone();
			}
			
			//opt._opacity = opt.moveHelper.css('opacity');
			
			return opt.moveHelper;	
		},
		_startMove : function(){
			var self = this;
			var opt = self.configs;
			
			opt._cursor = $('body').css('cursor');
			$('body').css('cursor',opt.cursor);
			
			var target = $(opt.target);	
			
			//opt.moveHelper = target;	
			var _rv = target;
			var _rvp = target.parent();
			if( opt.appendTo ) {
				//记录初始位置和信息
				opt._revertConf = {
					target : target,
					parent : _rvp,
					sLeft : _rvp.scrollLeft(),
					sTop : _rvp.scrollTop()
				};
				var prev = _rv.prev();
				var next = _rv.next();
				if( prev.size() ) {
					opt._revertConf.revert = function(){
						prev.after( _rv );
					}	
				} else if( next.size() ) {
					opt._revertConf.revert = function(){
						prev.before( _rv );
					}	
				} else {
					opt._revertConf.revert = function(){
						_rvp.prepend( _rv );
					}	
				}
				opt._revertConf.cssText = _rv[0].style.cssText;
			}
			/*
			if( opt.clone ) {
				opt.moveHelper = $.isFunction( opt.cloneFn ) ? opt.cloneFn.call( self,$(opt.target),opt ) : $(opt.target).clone();
				opt.moveHelper = opt.moveHelper ? $(opt.moveHelper) : $(opt.target).clone();
			}
			*/
			if( opt.appendTo ) {
				var append = $(opt.appendTo);
				var offset1 = target.offset();
				var offset2 = append.offsetParent().offset();
				append.append( opt.moveHelper );
				if( opt.clone ) {
					append.append( target );	
				}
				var offset2 = target.offsetParent().offset(),
					_s = self._getFixPositionSize( append.offsetParent() );
				target.css({
					position : 'absolute',
					left : offset1.left - offset2.left - _s.left,
					top : offset1.top - offset2.top - _s.top
				});
			} else {
				if( opt.clone ) {
					target.parent().append( opt.moveHelper );	
				}
			}
			
			//var parent = $(opt.target).parent();
			opt._ssLeft = 0;//parent.scrollLeft();
			opt._ssTop = 0;//parent.scrollTop();
			var position = target._position();
			opt.left = position.left;
			opt.top = position.top;
			
			var target = opt.moveHelper;
			opt._sLeft = opt.left + opt._ssLeft;
			opt._sTop = opt.top + opt._ssTop;
			
			target.css('position','absolute');
			if( opt.clone ) {
				target.css({		   
					left : 	opt._sLeft,
					top : opt._sTop
				});
			}
			
			if( opt.opacity !== false ) {
				target.css( 'opacity',opt.opacity );
			}
			
			return self;
		},
		_endMove : function(){
			var self = this;
			var opt = self.configs;
			
			//self.moveToPosition( opt.left,opt.top );
			$(opt.target).css( {
				position : 'absolute',
				left : opt.left,
				top : opt.top
			} );
			if( opt.opacity !== false ) {
				$(opt.moveHelper).css( 'opacity',opt._opacity );
			}
			if( opt.clone ) {
				$(opt.moveHelper).remove();
			}
		},
		moveToPosition : function(left,top,e){
			var self = this;
			var opt = self.configs;
			
			var target = $(opt.moveHelper);
			//var parent = target.parent();
			opt.left = left;
			opt.top = top;
			target.css({
				left : left,
				top : top
				//position : 'absolute'
			});
		},
		mouseMove : function(e){
			var self = this;
			var opt = self.configs;
			
			if( self.isDragging ) return;
			
			if( self.checkDisabledEdge(e) ) {
				//opt.helper.css('cursor', '');
				return;
			}
			
			//opt.helper.css('cursor', opt.cursor);
		},
		mouseLeave : function(e){
			var self = this;
			var opt = self.configs;
			
			if( self.isDragging ) return;
			
			if( self.checkDisabledEdge(e) ) {
				//opt.helper.css('cursor', '');
				return;
			}
			
			//opt.helper.css('cursor', '');	
		},
		//移除可拖拽
		removeDragable : function(){
			var self = this;
			var opt = self.configs;
			
			$(opt.helper).data('nex.draggable', null);
			
			opt.helper.unbind('.draggable');
			//opt.helper.unbind('mousedown.draggable');
			//opt.helper.unbind('mousemove.draggable');
			//opt.helper.unbind('mouseleave.draggable');
			return true;
		},
		checkDisabledEdge : function(e){
			var self = this;
			var opt = self.configs;
			var offset = $(opt.helper).offset();
			var width = $(opt.helper).outerWidth();
			var height = $(opt.helper).outerHeight();
			var t = e.pageY - offset.top;
			var r = offset.left + width - e.pageX;
			var b = offset.top + height - e.pageY;
			var l = e.pageX - offset.left;
			return Math.min(t,r,b,l) < opt.edge;
		}
	});
	$.fn.draggable = function(options, param){
		var options = options || {};
		if (typeof options == 'string'){
			switch(options) {
				case 'options':
					return $(this[0]).data('nex.draggable').C();
				case 'disabled':
					return this.each(function(){
								$(this).data('nex.draggable').C('disabled',true);
							});
				case 'enable':
					return this.each(function(){
								$(this).data('nex.draggable').C('disabled',false);
							});
				default : 
					return this.each(function(){
						if( param ) {
							$(this).data('nex.draggable').C(options,param);
						}
					}); 
			}
		}
		
		return this.each(function(){
			var opt;
			var self = $(this).data('nex.draggable');
			if (self) {
				opt = self.configs;
				$.extend(opt, options);
				return;
			}
			options.helper = $(this);
			new Nex.Drag(options);
		});
	};

});
/*
resizable - jQuery Nex
nobo
zere.nobo@gmail.com
qq : 505931977
var drag = new Nex.resizable({target:$('#drag')});
*/
define('Nex/resize/Resize',['require','Nex'],function(require){
	require('Nex');	

	var resize = Nex.define('Nex.resize.Resize',{
		extend : 'Nex.AbstractComponent',
		alias : 'Nex.Resize',
		xtype : 'resize resizable',
		configs : function(){
			return {
				denyManager : true,
				target: null,
				disabled: false,
				handles:'n, e, s, w, ne, se, sw, nw, all',
				minWidth: 10,
				minHeight: 10,
				maxWidth: 10000,//$(document).width(),
				maxHeight: 10000,//$(document).height(),
				edge : 5,//移动边缘宽度
				left : 0,
				top : 0,
				_sLeft : 0,
				_sTop : 0,
				_sX : 0,
				_sY : 0,
				_sWidth : 0,
				_sHeight : 0,
				width : 0,
				height : 0,
				dir : ''
			};	
		}		
	});
	
	resize.override({
		initComponent : function() {
			var self = this;
			var opt = this.configs;
			
			self.callParent(arguments);
			
			if( !opt.target ) return;
			
			$(opt.target).data('nex.resizable', self);
			
			opt.target.bind('mousedown.resizable', $.proxy( self,'mouseDown' ));
			opt.target.bind('mousemove.resizable', $.proxy( self,'mouseMove' ));
			opt.target.bind('mouseleave.resizable', $.proxy( self,'mouseLeave' ));
		},
		//系统事件
		/*_sysEvents : function(){
			var self = this;
			var opt = self.configs;
			//self.bind("onStart",self.onStart);	
		},*/
		getDirection : function(e) {
			var self = this;
			var opt = self.configs;
			var tt = $(opt.target);
			var dir = '';
			var offset = tt.offset();
			var width = tt.outerWidth();
			var height = tt.outerHeight();
			var edge = opt.edge;
			if (e.pageY > offset.top && e.pageY < offset.top + edge) {
				dir += 'n';
			} else if (e.pageY < offset.top + height && e.pageY > offset.top + height - edge) {
				dir += 's';
			}
			if (e.pageX > offset.left && e.pageX < offset.left + edge) {
				dir += 'w';
			} else if (e.pageX < offset.left + width && e.pageX > offset.left + width - edge) {
				dir += 'e';
			}
			
			var handles = opt.handles.split(',');
			for(var i=0; i<handles.length; i++) {
				var handle = handles[i].replace(/(^\s*)|(\s*$)/g, '');
				if (handle == 'all' || handle == dir) {
					return dir;
				}
			}
			return '';
		},
		resize : function(e){
			var self = this;
			var opt = self.configs;
			var width,height;
			if (opt.dir.indexOf('e') != -1) {
				width = opt._sWidth + e.pageX - opt._sX;
				width = Math.min(
							Math.max(width, opt.minWidth,0),
							opt.maxWidth <= 0 ? Math.max(width, opt.minWidth) : opt.maxWidth
						);
				opt.width = width;			
			}
			if (opt.dir.indexOf('s') != -1) {
				height = opt._sHeight + e.pageY - opt._sY;
				height = Math.min(
						Math.max(height, opt.minHeight,0),
						opt.maxHeight <= 0 ? Math.max(height, opt.minHeight) : opt.maxHeight
				);
				opt.height = height;
			}
			if (opt.dir.indexOf('w') != -1) {
				width = opt._sWidth - e.pageX + opt._sX;
				var _width = Math.min(
							Math.max(width, opt.minWidth,0),
							opt.maxWidth <= 0 ? Math.max(width, opt.minWidth) : opt.maxWidth
						);
				if( width == _width ) {
					opt.left = opt._sLeft + e.pageX - opt._sX;
				}
				opt.width = _width;	
			}
			if (opt.dir.indexOf('n') != -1) {
				height = opt._sHeight - e.pageY + opt._sY;
				var _height = Math.min(
						Math.max(height, opt.minHeight,0),
						opt.maxHeight <= 0 ? Math.max(height, opt.minHeight) : opt.maxHeight
				);
				if( height == _height ) {
					opt.top = opt._sTop + e.pageY - opt._sY;
				}
				opt.height = _height;
			}
		},
		setWH : function(){
			var self = this;
			var opt = self.configs;	
			
			var el = $(opt.target);
			
			var v = el.outerWidth() - el.width();
			var h = el.outerHeight() - el.height();
			
			el.width( opt.width-v );
			el.height( opt.height-h );
			if( $.inArray(el.css('position'),['absolute','fixed']) !== -1 ) {
				el.css({
					left : opt.left,
					top : opt.top	
				});
			}
		},
		_doDown : function(e){
			var self = this;
			var opt = self.configs;
			
			//$(document).bind("selectstart.resizable",function(){return false;});	
			$(document).disableSelection();
			
			//取消startResize可以取消ressize 应该在before
			//var r = self.fireEvent('onStartResize',[e,opt]);
			//if( r === false) return;
			self.fireEvent('onStartResize',[e,opt]);
			
		},
		_doMove : function(e){
			var self = this;
			var opt = self.configs;
			if( opt.disabled ) return;
			
			self.resize(e);
			
			var r = self.fireEvent('onResize',[opt.width,opt.height,e,opt]);
			if( r === false) return ;
			
			self.setWH();
		},
		_doUp : function(e){
			var self = this;
			var opt = self.configs;
			
			$(document).unbind('.resizable');
			$(document).enableSelection();	
			$('body').css('cursor','');
			//self.resize(e);
			
			if( opt.disabled ) return;
			
			var r = self.fireEvent('onStopResize',[opt.width,opt.height,e,opt]);
			if( r !== false) {
				self.setWH();	
			}
			self.fireEvent('onAfterResize',[opt.width,opt.height,e,opt]);
			
		},
		mouseDown : function(e){
			var self = this;
			var opt = self.configs;
			
			if( opt.disabled ) return;
			
			var dir = self.getDirection(e);
			if (dir == '') return;
			
			var el = $(opt.target); 
			
			function getCssValue(css) {
				var val = parseInt(el.css(css));
				return val || 0;
			}
			
			opt.dir = dir;
			opt._sLeft = getCssValue('left');
			opt._sTop = getCssValue('top');
			opt.left = opt._sLeft;
			opt.top = opt._sTop;
			opt._sX = e.pageX;
			opt._sY = e.pageY;
			opt._sWidth = el.outerWidth();
			opt._sHeight = el.outerHeight();
			opt.width = el.outerWidth();
			opt.height = el.outerHeight();
			
			var r = self.fireEvent('onBeforeResize',[e,opt]);
			if( r === false) return;
		
			$(document).bind('mousedown.resizable', $.proxy( self,'_doDown' ));
			$(document).bind('mousemove.resizable', $.proxy( self,'_doMove' ));
			$(document).bind('mouseup.resizable', $.proxy( self,'_doUp' ));	
			$('body').css('cursor', dir+'-resize');	
		},
		mouseMove : function(e){
			var self = this;
			var opt = self.configs;
			
			var dir = self.getDirection(e);
			if (dir == '') {
				$(opt.target).css('cursor', '');
			} else {
				$(opt.target).css('cursor', dir + '-resize');
			}
		},
		mouseLeave : function(e){
			var self = this;
			var opt = self.configs;
			
			$(opt.target).css('cursor', '');
		}
	});
	$.fn.resizable = function(options, param){
		var options = options || {};
		if (typeof options == 'string'){
			switch(options) {
				case 'options':
					return $(this[0]).data('nex.resizable').C();
				case 'disabled':
					return this.each(function(){
								$(this).data('nex.resizable').C('disabled',true);
							});
				case 'enable':
					return this.each(function(){
								$(this).data('nex.resizable').C('disabled',false);
							});
				default : 
					return this.each(function(){
						if( param ) {
							$(this).data('nex.resizable').C(options,param);
						}
					}); 
			}
		}
		
		return this.each(function(){
			var opt;
			var self = $(this).data('nex.resizable');
			if (self) {
				opt = self.configs;
				$.extend(opt, options);
				return;
			}
			options.target = $(this);
			new Nex.Resize(options);
		});
	};
});	
/*
Window.js
http://www.extgrid.com/window
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱

*/
define('Nex/window/Window',['require','Nex/showat/ShowAt','Nex/drag/Drag','Nex/resize/Resize','Nex/panel/Panel'],function(require){
	require('Nex/showat/ShowAt');	
	require('Nex/drag/Drag');
	require('Nex/resize/Resize');
	require('Nex/panel/Panel');

	var win = Nex.define('Nex.window.Window',{
		extend : 'Nex.panel.Panel',
		alias : 'Nex.Window',
		xtype : 'window',
		configs : function( opt,t ){
			return {
				prefix : 'nexwindow-',
				border : true,
				borderCls : [opt.borderCls,'nex-window-border'].join(' '),
				containerCls : [opt.containerCls,'nex-window'].join(' '),
				tabIndex : -1,
				autoScroll : false,
				//显示之前检查是否是autoSize 如果是调用autoSetSize设置大小 不建议开启
				autoSizeOnShow : false,
				autoShow : true,
				isFixed : false,
				refreshPosOnResize : true,//浏览器大小改变时 重新设置window的位置
				resetPosOnShow : true, //每次显示窗口时 都会重新设置位置
				showShadow : true,
				shadowCls : 'nex-window-shadow',
				focusOnToFront : true,
				constrain : false,//开启后 不能移出 父元素的空间
				constrainEdge : 0,
				constrainHeader : false,
				closeToRemove : true,
				actionOnEsc : 'close',
				closeOnEsc : true,//按Esc时 关闭
				/*
				* 绑定当在某元素上触发相应操作时关闭窗口
				*/
				_closeOnDom : {
					/*默认关闭当前功能*/
					enable : false,	
					/*触发事件*/
					event  : 'mousedown',
					/*执行操作*/
					action : 'close',
					/*取消触发事元素*/
					cancel : '',
					/*触发事件元素*/
					attach : document
				},
				closeOnDom : {},
				/*关闭倒计时 毫秒*/
				closeOnTime : 0,
				/*倒计时关闭时执行操作*/
				actionOnTime : 'close',
				draggable : true,
				dragCls : '',
				dragHelper : 'header',//header container body....
				_dragConfig : {
					cancel : '.nex-panel-tools',
					distance : 1	
				},
				dragConfig : {},
				resizeable : false,
				resizeDelay : 50,
				_resizeConfig : {},
				resizeConfig : {},
				closable 	: true,
				minimizable : false,
				maximizable : false,
				maximized   : false,
				maximizedCls : '',
				minimized   : false,
				headerSelectionable : false,
				items : [],
				renderTo : window,
				animate : true,//开启动画显示 开启后可设置effect等参数
				animDuration : 200,
				animEasing   : Nex.easingDef,
				//effect duration easing complete  queue .....
				_effect : {},//effect可参考jquery ui effects部分
				effect : {},
				showEffect : {},
				hideEffect : {},
				showFn : null,//自定义显示函数
				hideFn : null,//自定义关闭函数
				showMethod : 'fadeIn',
				hideMethod : 'fadeOut',
				_showAt : {
					xAlign : 'center',
					yAlign : 'center',
					zAlign : 'y',
					visibleable : true	
				},
				showAt : {},
				resetPositionDuration : 200,
				alwaysOnTop : false,//保持置顶
				zIndex : Nex.zIndex,
				modal : false,
				modalCls : '',
				modalRenderTo : null,//默认同renderTo
				maxWidth : function(){
					var self = this;
					var opt = self.configs;
					var renderTo = this.C('renderTo');	
					return $(renderTo).width();
					if( $.isWindow(opt.renderTo) ) {
						return $(renderTo).width();
					} else {
						return 0;		
					}
				},
				maxHeight : function(){
					var self = this;
					var opt = self.configs;
					var renderTo = this.C('renderTo');
					return $(renderTo).height();
					if( $.isWindow(opt.renderTo) ) {
						return $(renderTo).height();
					} else {
						return 0;	
					}
				}
				//denyEvents : ['scroll'],
				//events : {}
			};	
		}		
	});
	win.override({ 
		onContainerCreate : function(el, opt){	
			this.callParent(arguments);
			if( this.isFixed() ) {
				el.addClass('nex-window-fixed');	
			}
			this._initHidden();
		},
		onHeaderCreate : function(header, opt){
			this.callParent(arguments);
			header.addClass('nex-window-header');
			$('>.nex-panel-tools',header).addClass('nex-window-tools');
		},
		onBodyCreate : function(bd, opt){
			this.callParent(arguments);
			bd.addClass('nex-window-body');
		},
		onFooterCreate : function(footer, opt){
			this.callParent(arguments);
			footer.addClass('nex-window-footer');
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			//设置fixed样式 并且隐藏
			//self.bind('onContainerCreate._sys',function(el){
//				if( self.isFixed() ) {
//					el.addClass('nex-window-fixed');	
//				}
//				self._initHidden();
//				
//			},self);
			//设置refreshPosOnResize
			self.bind('onCreate._sys',self._refreshPosOnResize,self);
			//设置closeOnEsc
			self.bind('onKeyDown._sys',function(el,e){
				if( e.keyCode === 27 && opt.actionOnEsc ) {
					//self.close();	
					if( $.isFunction(opt.actionOnEsc) ) {
						opt.actionOnEsc.call( self );
					} else if( self[ opt.actionOnEsc ] ) {
						self[ opt.actionOnEsc ]();
					}
				}	
			},self);
			
			//设置zindex
			self.bind('onFocusin._front',function(){
				if( opt.focusOnToFront ) {
					self.setzIndex();	
				}	
			},self);
			//拖拽设置
			self.bind('onCreate._sys',self._draggable,self);
			//resizeable
			self.bind('onCreate._sys',self._resizeable,self);
			//拖拽检测
			self.bind('onWindowDrag._sys',self._checkDragConstrain,self);
			//自定义关闭window操作
			self.bind('onShow._sys',self._setCustomCloseEvent,self);
			self.bind('onHide._sys',self._unsetCustomCloseEvent,self);
			//关闭倒计时
			self.bind('onShow._sys',self._closeOnTime,self);
			self.bind('onHide._sys',self._uncloseOnTime,self);
			//清理异常
			self.bind('onDestroy._sys',function(){
				self._unsetCustomCloseEvent();
				self._uncloseOnTime();
			},self);
			
			return self;
		},
		__sce : 0,
		_setCustomCloseEvent : function(){
			var self = this;
			var opt = this.configs;	
		
			var cfg = $.extend({}, opt._closeOnDom, opt.closeOnDom);
			if(!cfg.enable) {
				return;	
			}
			
			self.__sce = setTimeout(function(){
				self.__sce = 0;
				if(cfg.attach) {
					var $attach = $(cfg.attach);
					if( !$attach.length ) return;
					$attach.bind(cfg.event+'._close_'+opt.id, function(e){
						var target = e.target || e.srcElement;
						if( $(target).is( '#'+opt.id )
							|| $(target).parents('#'+opt.id).length
						) {
							return;	
						}
						if(cfg.cancel) {
							if( $(target).is( cfg.cancel ) ) {
								return;
							}
							var m = false;
							$(target).parents().each(function(){
								if($(this).is(cfg.cancel)) {
									m = true;
									return false;	
								}	
							});
							if(m) {
								return;	
							}
						}
						self[cfg.action]();		
					});
				}	
			},0);
		},
		_unsetCustomCloseEvent : function(){
			var self = this;
			var opt = this.configs;	
			
			var cfg = $.extend({}, opt.closeOnDom, opt._closeOnDom);
			if(!cfg.enable) {
				return;	
			}
			if( self.__sce = 0 ) {
				clearTimeout(self.__sce);	
			} 	
			if(cfg.attach) {
				var $attach = $(cfg.attach);
				if( !$attach.length ) return;
				$attach.unbind(cfg.event+'._close_'+opt.id);	
			}
		},
		__cot : 0, 
		_closeOnTime : function(){
			var self = this;
			var opt = this.configs;	
			if( opt.closeOnTime && Nex.isNumeric(opt.closeOnTime) ) {
				self.__cot = setTimeout(function(){
					self.__cot = 0;
					self[opt.actionOnTime]();	
				},parseInt(opt.closeOnTime,10));	
			}
		},
		_uncloseOnTime : function(){
			if( this.__cot ) {
				clearTimeout(this.__cot);	
			}
		},
		_initHidden : function(){
			this.hidden = true;
			//this._defaultHide();
			this.el._hide();
		},
		checkToAutoSetSize : function(){
			var self = this;
			var opt = this.configs;	
			if( opt.width === 'auto' && opt.height === 'auto' ) {
				self.clearContainerSizeCache();
				self.autoSetSize();
			} else if( opt.width === 'auto' ) {
				self.clearContainerSizeCache();
				self.autoSetWidth();	
			} else if( opt.height === 'auto' ) {
				self.clearContainerSizeCache();
				self.autoSetHeight();	
			}
		},
		_afterCreate : function(){
			var self = this;
			var opt = this.configs;//cfg
			var el = this.el;
			//var container = opt.views['container'];
			
			//window 设置 width/height = auto 时会自动设置width height
			
			//self.checkToAutoSetSize();
			
			if( opt.autoShow ) {
				this.show();//需要重写show
			}
			if( opt.maximized ) {
				this.maximize();	
			}
			//折叠
			self.callParent(arguments);
			
			if( opt.minimized ) {
				el.stop(true,true);
				this.minimize(false);	
			}
		},
		__rpr : false, 
		__rptt : 0,
		_refreshPosOnResize : function(){
			var self = this;
			var opt = this.configs;
			if( !Nex.ComponentManager ) return;
			if( self.__rpr ) return;
			self.__rpr = true;
			self.bind('onDestroy._sys',function(){
				Nex.ComponentManager.unbind('._'+opt.id);	
			});
			Nex.ComponentManager.bind('onBrowserResize._'+opt.id,function(){
				
				self.fireEvent('onBrowserSizeChange');
				
				if( !self.rendered || self.isHidden() ) return;
				
				if( opt.modal ) {	 
					self.refreshModalSizeAndPos();
				}
				
				if( !opt.refreshPosOnResize ) return;
				if( self.maximized ||
					 self.collapsed ) return;
				if( self.__rptt ) {	 
					clearTimeout( self.__rptt );
					self.__rptt = 0;
				}
				self.__rptt = setTimeout(function(){
					clearTimeout( self.__rptt );
					self.__rptt = 0;
					if( !self.isShowing ) {
						self.resetPosition();	
					} else {
						//onShow
						self.unbind('._resize__'+opt.id);
						self.one('onShow._resize__'+opt.id,function(){
							self.resetPosition();		
						})	
					}
				},0);		 
				
			});	
		},
		_checkDragConstrain : function(t,pos,e,_opt){
			var self = this,
				opt=this.configs;
				
			if( !opt.constrain ) return;
				
			var el = self.el;
			var sLeft = $(opt.renderTo).scrollLeft();	
			var sTop = $(opt.renderTo).scrollTop();	
			var left = pos.left;
			var top = pos.top;
			
			var clientWidth = $.isWindow( opt.renderTo ) ? $(opt.renderTo).width() : $(opt.renderTo)[0].clientWidth;
			var clientHeight = $.isWindow( opt.renderTo ) ? $(opt.renderTo).height() : $(opt.renderTo)[0].clientHeight;
			
			//self.html( [clientWidth,clientHeight].join(':') )
			
			var ew = el.outerWidth();
			var eh = el.outerHeight();
			
			var edge = opt.constrainEdge;
			
			if( (left-sLeft)<edge ) {
				pos.left = sLeft + edge;	
			}
			if( (top-sTop)<edge ) {
				pos.top = sTop + edge;	
			}
			if( (ew + left - sLeft)>(clientWidth - edge) ) {
				pos.left = clientWidth - ew + sLeft - edge;	
			}
			//constrainHeader
			var header_h = 0;
			if( opt.constrainHeader && opt.views['header'] ) {
				header_h = opt.views['header'].outerHeight() 
							+ (parseFloat(el.css('borderTop')) || 0) 
							+  (parseFloat(el.css('paddingTop')) || 0);
				header_h = el.outerHeight() - header_h;			
			}
			if( (eh + top - sTop)>(clientHeight + header_h - edge) ) {
				pos.top = clientHeight - eh + sTop - edge + header_h;
			}
		},
		_setSysTools : function( tools ){
			var self = this,
				opt=this.configs;
			var header = opt.views['header'];			
			var $tools = $('>.nex-panel-tools',header);
			if( opt.collapsible ) {
				tools.push( {
					iconCls : 'tools-collapse-icon',
					handler : function(){
						self.toggleCollapse();	
					}
				} );	
				self.unbind('.collapse');
				self.bind('onCollapse.collapse',function(){
					$('>.tools-collapse-icon',$tools).addClass('tools-expand-icon');	
				},self);
				self.bind('onExpand.collapse',function(){
					$('>.tools-collapse-icon',$tools).removeClass('tools-expand-icon');	
				},self);
			}
			//min
			if( opt.minimizable ) {
				tools.push( {
					iconCls : 'tools-minimize-icon',
					handler : function(){
						self.minimize();	
					}
				} );	
			}
			//max
			if( opt.maximizable ) {
				tools.push( {
					iconCls : 'tools-maximize-icon',
					handler : function(){
						self.toggleMaximize();	
					}
				} );
				self.unbind('.maximize');
				self.bind('onMaximize.maximize',function(){
					$('>.tools-maximize-icon',$tools).addClass('tools-restore-icon');	
				},self);
				self.bind('onRestore.maximize',function(){
					$('>.tools-maximize-icon',$tools).removeClass('tools-restore-icon');	
				},self);	
			}
			//close
			if( opt.closable ) {
				tools.push( {
					iconCls : 'tools-close-icon',
					handler : function(){
						self.close();	
					}
				} );	
			}
			return tools;
		},
		setzIndex : function(){
			var self = this;
			var opt = self.configs;		
			var container = self.el;
			var zIndex = Nex[ opt.alwaysOnTop ? 'topzIndex' : 'zIndex' ]+2;
			Nex[opt.alwaysOnTop ? 'topzIndex' : 'zIndex'] = zIndex;
			opt.zIndex = zIndex; 
			
			container.css('z-index',opt.zIndex);
			
			var modal = opt.views['modal'];	
			if( modal ) {
				modal.css('z-index',opt.zIndex-1);
			}		
		},
		toFront : function(){
			var opt = this.configs;
			if( opt.focusOnToFront ) {
				this.focus();	
			}	
			return this;	
		},
		_drmodal : null,
		showDragAndResizeOuterModal : function(){
			var el = this.el;
			if( !this._drmodal ) {
				this._drmodal = $('<div class="nex-window-tmp-modal"></div>');
			}	
			var p = el.parent();
			p.append( this._drmodal );
			this._drmodal.css({
				width : p.width(),
				height : p.height()
			});
			return this._drmodal;
		},
		removeDragAndResizeOuterModal : function(){
			if( this._drmodal )	{
				this._drmodal.remove();
				this._drmodal = null;	
			}
		},
		dragger : null,
		_draggable : function(){
			var self = this;
			var el = this.el;
			var opt = self.configs;
			if( !opt.draggable || !Nex.drag.Drag ) return;
			var helper = opt.views[ opt.dragHelper ] || self.el;
			var dcfg = {
				helper : helper,
				target:el	
			};
			var cfg = {
				//dragCls : opt.dragCls	
			};
			var dragModal = null;
			cfg[ 'onBeforeDrag._drag_'+opt.id ] = function(e,_opt){
				
					if( e.which !== 1 || !opt.draggable || self.maximized || self.isResizing ) return false;
					
					var r = self.fireEvent("onWindowBeforeDrag",[e,_opt]);	
					if( r === false) return r;
					
					this.C('dragCls',opt.dragCls)
					
				};
			cfg[ 'onStartDrag._drag_'+opt.id ] = function(helper,e,_opt){
					self.fireEvent("onWindowStartDrag",[helper,e,_opt]);	
					helper.addClass('nex-window-dragging');
					if( !dragModal ) {
						dragModal = $('<div class="nex-window-drag-modal"></div>');	
						el.append( dragModal );
					}
					self.showDragAndResizeOuterModal();
				};	
			cfg[ 'onDrag._drag_'+opt.id ] = function(helper,pos,e,_opt){
					var r = self.fireEvent("onWindowDrag",[helper,pos,e,_opt]);	
					if( r === false) return r;
				};
			cfg[ 'onStopDrag._drag_'+opt.id ] = function(helper,pos,e,_opt){
					helper.removeClass('nex-window-dragging');
					var r = self.fireEvent("onWindowStopDrag",[helper,pos,e,_opt]);	
					if( r === false) return r;
				};
			cfg[ 'onAfterDrag._drag_'+opt.id ] = function(pos,e,_opt){
					if( self.isFixed() ) {
						el.css( {
							position : 'fixed',
							left : pos.left - $(window).scrollLeft(),	//parseFloat(el.css('left'))
							top : pos.top - $(window).scrollTop()  //parseFloat(el.css('top'))
						} );	
					}	
					if( dragModal ) {
						dragModal.remove();
						dragModal = null;
					}
					self.removeDragAndResizeOuterModal();
					
					self.fireEvent("onWindowAfterDrag",[pos,e,_opt]);
				};				
			self.dragger = Nex.Create('draggable',$.extend(cfg,opt._dragConfig,opt.dragConfig ||　{},dcfg));
		},
		resizer : null,
		isResizing : false,
		_resizeable : function(){
			var self = this;
			var opt = self.configs;
			if( !opt.resizeable || !Nex.resize.Resize || opt.autoSize ) return;
			var container = self.el;
			//resizeConfig
			var dcfg = {
				target : container	
			};
			var cfg = {};
			var dragModal = null;
			var delay = opt.resizeDelay;
			var dt = 0;
			cfg[ 'onBeforeResize._drag_'+opt.id ] = function(e,_opt){
					
					if( e.which !== 1 || !opt.resizeable || self.collapsed || self.maximized ) return false;
					
					var r = self.fireEvent("onWindowBeforeResize",[e,_opt]);	
					if( r === false) return r;	
					
					$.extend( this.configs,{
						minWidth: self._getMinWidth(),	
						minHeight: self._getMinHeight(),
						maxWidth: self._getMaxWidth(),	
						maxHeight: self._getMaxHeight()
					} );
					
					self.isResizing = true;
					
				};
			cfg[ 'onStartResize._drag_'+opt.id ] = function(e,_opt){
					self.fireEvent("onWindowStartResize",[e,_opt]);	
					dragModal = $('<div class="nex-window-drag-modal"></div>');	
					container.append( dragModal );
					self.showDragAndResizeOuterModal();
				};
			cfg[ 'onResize._drag_'+opt.id ] = function(w,h,e,_opt){
					var r = self.fireEvent("onWindowResize",[w,h,e,_opt]);	
					if( r === false) return r;	
					clearTimeout( dt );
					dt = setTimeout( function(){
						self.setSize( _opt.width,_opt.height );	
					},delay );
				};	
			cfg[ 'onStopResize._drag_'+opt.id ] = function(w,h,e,_opt){
					var r = self.fireEvent("onWindowStopResize",[w,h,e,_opt]);	
					if( r === false) return r;	
				};	
			cfg[ 'onAfterResize._drag_'+opt.id ] = function(w,h,e,_opt){
					self.isResizing = false;
					if( dragModal ) {
						dragModal.remove();
						dragModal = null;
					}
					self.removeDragAndResizeOuterModal();
					
					self.fireEvent("onWindowAfterResize",[w,h,e,_opt]);	
				};			
			self.resizer = Nex.Create('resizable',$.extend( cfg, opt._resizeConfig, opt.resizeConfig || {}, dcfg ));
		},
		//检查是否fixed
		isFixed : function(){
			var opt = this.configs;	
			if( !$.isWindow(opt.renderTo) || (Nex.IEVer && Nex.IEVer<=6) ) {
				return false;	
			}
			return opt.isFixed;
		},
		getShowAt : function(){
			var opt = this.configs;
			if( this._currShowAt ) {
				return this._currShowAt.configs.at;	
			}	
			var cfg = $.extend( {}, opt._showAt, opt.showAt );
			return cfg.at || opt.renderTo;
		},
		_currShowAt : null,
		_currShowAtConf : null,
		/*
		*获取显示的位置
		*@param conf 配置参数
		*/
		getShowAtPos : function( conf ){
			var opt = this.configs;
			var conf = this._undef(conf,{});
			var cusConf = opt.showAt;
			if(Nex.isArray( cusConf )) {
				cusConf = {
					left : cusConf[0],
					top : cusConf[1]
				};	
			} else if( !Nex.isPlainObject(cusConf) ) {
				cusConf = {
					at : cusConf	
				};		
			}
			//修改后的
			var currConf = {};
			if( this._currShowAtConf ) {
				currConf = this._currShowAtConf;
			}
			var cfg = $.extend( {}, opt._showAt, cusConf, currConf, conf );
			cfg.parent = opt.renderTo;
			cfg.el = cfg.el || this.el;
			cfg.at = cfg.at || opt.renderTo;
			cfg.autoShow = false;
			this._currShowAtConf = cfg;
			var showAt = Nex.Create('showAt',cfg);
			this._currShowAt = showAt;
			var pos = showAt.getShowPos();
			if( this.isFixed() ) {
				pos.left -= $(window).scrollLeft();	
				pos.top -= $(window).scrollTop();
			}
			return pos;
		},
		getPosition : function(){
			return this.getShowAtPos.apply(this, arguments);	
		},
		showAt : function( conf ){
			var self = this,
				opt=this.configs;
			var el = self.el;
			var cfg = {};
			var at = {};
			
			//( 0,100 )
			if( typeof arguments[0] === 'number' ) {
				at.left = arguments[0];	
			}
			if( typeof arguments[1] === 'number' ) {
				at.top = arguments[1];	
			}
			// ( { left : 0,top:0 } )
			if( $.type(conf) === 'object' && !( 'at' in conf ) ) {
				if( !( 'at' in conf ) ) {
					at = conf;	
				} else {
					cfg = conf;
					at = conf.at;		
				}
			}
			if( $.isArray( conf ) ) {
				at.left = conf[0] || 0;	
				at.top = conf[1] || 0;
			}
			
			cfg.at = at;
			
			if( $.isEmptyObject( at ) ) {
				delete cfg.at;	
			}
			//这里应该加 如果等待队列
			if( opt.animate ) {
				el.stop(true,true);	
			}
			
			var pos = self.getShowAtPos( cfg );	
			
			if( !self.isVisible() ) {
				el.css( pos );	
				Nex.panel.Panel.prototype.show.apply(this);
			} else {
				if( opt.animate ) {
					el.animate( pos, opt.resetPositionDuration, Nex.easingDef,function(){
						self.fireEvent("onResetPosition",[el,opt]);		
					} );	
				} else {
					el.css( pos );	
					self.fireEvent("onResetPosition",[el,opt]);		
				}
				/*opt.animate ? 
					el.animate( pos, opt.resetPositionDuration, Nex.easingDef,function(){
						self.fireEvent("onResetPosition",[el,opt]);		
					} ) : 
					el.css( pos );	*/	
			}
			return self;
		},
		resetPosition : function(){
			if( !this.rendered ) return this;
			return this.showAt.apply(this,arguments);	
		},
		//设置到指定显示位置 和 showAt不同在于 以当前坐标为显示坐标 ，不做计算
		setPosition : function( x,y ){
			if( !this.rendered ) return this;
			var opt = this.configs;	
			var el = this.el;
			var pos = {};
			if( x !== undefined ) {
				pos.left = x;	
			}
			if( y !== undefined ) {
				pos.top = y;	
			}
			opt.animate ? 
					el.stop(true,true).animate( pos, opt.resetPositionDuration, Nex.easingDef) : 
					el.css( pos );		
			return this;
		},
		/*
		*只适应大小 并且调整位置
		*/
		autoSizeAndPos : function(){
			this.autoSetSize();
			this.resetPosition();
			return this;	
		},
		_initShow : false,
		onBeforeHide : function(){
			this.callParent();
			this.hideModal();	
		},
		onBeforeShow : function(){
			this.callParent();
			this.showModal();
		},
		show : function(){
			var self = this;
			var opt = this.configs;
			var el = self.el;
			
			if( self.isVisible() ) {
				return self;	
			}
			
			opt.autoSizeOnShow && self.checkToAutoSetSize();
			
			//resetPosOnShow开启则每次都会重置位置
			//初始显示时 需要设置位置，
			if( (opt.resetPosOnShow && !self.collapsed) || !self._initShow ) {
				self._initShow = true;
				var pos = self.getShowAtPos();
				el.css( pos );
			}
			
			self.setzIndex();
			
			return  Nex.panel.Panel.prototype.show.apply( self,arguments );
		},
		maximized : false,
		maximize : function(){
			var self = this,
				el = self.el,
				opt = self.configs;
				
			if( !self.isVisible() || self.maximized || self.collapsed ) {
				return self;	
			}	
			
			if( self.fireEvent('onBeforeMaximize',[opt]) === false ) {
				return self;	
			}
			
			var props = {
				width : opt.width,
				height : opt.height,
				left : el.css('left') || 0,
				top : el.css('top') || 0	
			};
			el.data('_maxrestore',props);
			
			self.maximized = true;	
			
			//maximizedCls
			el.addClass( 'nex-window-maximized '+opt.maximizedCls );
			
			el.stop(true,true);
			self.setSize('100%','100%');
			
			var left = 0;
			var top = 0;
			//IE 下 window document 获取paddingLeft报错
			try{
				 left = $(opt.renderTo).css('paddingTop') || 0;	
				 top = $(opt.renderTo).css('paddingLeft') || 0;	
			}catch(e){}
			
			el.css( {
				left : left,
				top : top
			} );
			self.fireEvent('onMaximize', [ opt ]);
			return self;
		},
		restore : function(){
			var self = this,
				el = self.el,
				opt = self.configs;
			if( !self.isVisible() || !self.maximized || self.collapsed ) {
				return self;	
			}	
			
			if( self.fireEvent('onBeforeRestore',[opt]) === false ) {
				return self;	
			}
			
			var d = el.data( '_maxrestore' ) || {};
			el.removeData( '_maxrestore' );
			
			this.maximized = false;
			//maximizedCls
			el.removeClass( 'nex-window-maximized '+opt.maximizedCls );
			
			self.setSize(d.width,d.height);	
			
			//el.css( self.getShowAtPos() );
			el.css( {
				left : d.left,
				top : d.top	
			} );
			
			self.fireEvent('onRestore', [ opt ]);
			return self;	
		},
		toggleMaximize : function(){
			return this[ this.maximized ? 'restore' : 'maximize' ]();	
		},
		toggle : function(){
			return this[ this.hidden ? 'show' : 'hide' ].apply(this,arguments);		
		},
		minimize : function(){
			return this.hide.apply(this,arguments);	
		},
		toggleMinimize : function(){
			return this.toggle.apply(this,arguments);	
		},
		_getModalRenderTo : function(){
			var el = this.el;
			var opt = this.configs;
			var wraper = el.parent();
			if( opt.modalRenderTo ) {
				var modalWraper = $( opt.modalRenderTo );
				wraper = modalWraper.length ? modalWraper : wraper;	
			}
			return wraper;
		},
		_createModal : function (){
			var self = this;
			var opt = self.configs;	
			
			if( !opt.modal ) return null;
			if( opt.views['modal'] ) return null;
			
			
			var container = self.el;
			
			var modalRenderTo = !opt.modalRenderTo ? opt.renderTo : $(opt.modalRenderTo).length ? opt.modalRenderTo : opt.renderTo;
			
			var cls = ['nex-window-modal'];
			
			if( $.isWindow( modalRenderTo ) && self.isFixed() ) {
				cls.push('nex-window-modal-fixed');	
			}
			
			if( opt.modalCls ) {
				cls.push( opt.modalCls );	
			}
			
			var modal = $('<div class="'+cls.join(' ')+'" id="'+opt.id+'_modal"></div>');	
			opt.views['modal'] = modal;
			
			modal.css( 'zIndex',opt.zIndex-1 );

			modal.bind({
				'click._modal' : function(e){
					self.fireEvent('onModalClick',[modal,e,opt]);
					$(document).trigger('click',[e]);
					return false;
				},
				'dblclick._modal' : function(e){
					self.fireEvent('onModalDblClick',[modal,e,opt]);
					$(document).trigger('dblclick',[e]);
					return false;
				},
				'mousedown._modal' : function(e){
					self.fireEvent('onModalMouseDown',[modal,e,opt]);
					$(document).trigger('mousedown',[e]);
					return false;	
				},
				'mouseup._modal' : function(e){
					self.fireEvent('onModalMouseUp',[modal,e,opt]);
					$(document).trigger('mouseup',[e]);
					return false;	
				},
				'keydown._modal' : function(e){
					self.fireEvent('onModalKeyDown',[modal,e,opt]);
					$(document).trigger('keydown',[e]);
					return false;		
				},
				'keyup._modal' : function(e){
					self.fireEvent('onModalKeyUp',[modal,e,opt]);
					$(document).trigger('keyup',[e]);
					return false;		
				},
				'mousewheel._modal' : function(e){
					self.fireEvent('onModalMouseWheel',[modal,e,opt]);	
				},
				'mouseover._modal' : function(e){
					self.fireEvent('onModalMouseOver',[modal,e,opt]);
					$(document).trigger('mouseover',[e]);
					return false;		
				},
				'mouseout._modal' : function(e){
					self.fireEvent('onModalMouseOut',[modal,e,opt]);
					$(document).trigger('mouseout',[e]);
					return false;		
				}
			});
			var wraper = self._getModalRenderTo();
			wraper.append(modal);	
			self.fireEvent("onModelCreate",[modal,opt]);
			
			self.bind('onDestroy._sys',function(){
				modal.remove();	
			},self);
			
			return modal;
		},
		getModal : function(){
			var opt = this.configs;
			return opt.views['modal'] ? opt.views['modal'] : this._createModal();	
		},
		showModal : function(){
			var opt = this.configs;
			var modal = this.getModal();
			if( !modal ) return;
			modal.css( {
				zIndex  : opt.zIndex-1
				//,opacity : 0
			} );
			modal.show();
			this.refreshModalSizeAndPos();
			//用时css3来实现过渡把
			/*
			modal.animate({
				opacity : 0.1	
			},opt.animDuration);
			*/
			this.fireEvent( 'onModalShow',[ modal,opt ] );
			
			return this;
		},
		hideModal : function(){
			var opt = this.configs;
			var modal = this.getModal();
			if( !modal ) return;
			modal.fadeOut(opt.animDuration);	
			this.fireEvent( 'onModalHide',[ modal,opt ] );
			return this;
		},
		refreshModalSizeAndPos : function(){
			var self = this,
				opt=this.configs,
				undef;
			
			var modal = self.getModal();
			
			if( !modal ) return self;	
			
			modal._removeStyle('width height');
			
			var render = !opt.modalRenderTo ? opt.renderTo : $(opt.modalRenderTo).length ? opt.modalRenderTo : opt.renderTo;
			
			var  isWin = $.isWindow( render );
			
			render = $(render);
			
			var w = isWin ? 0 : parseInt(render.css('paddingLeft')) + parseInt(render.css('paddingRight'));
			var h = isWin ? 0 : parseInt(render.css('paddingTop')) + parseInt(render.css('paddingBottom'));
			
			var mw = render._width() + w,
				mh = render._height() + h;
			
			if( isWin ) {
				var winWidth = $(window).width();
				var winHeight = $(window).height();
				w = parseInt($(document.body).css('paddingLeft')) + parseInt($(document.body).css('paddingRight'));
				h = parseInt($(document.body).css('paddingTop')) + parseInt($(document.body).css('paddingBottom'));
				mw = Math.max( winWidth,$(document.body).width() + w );
				mh = Math.max( winHeight,$(document.body).height() + h );
			}
			
			//if( Nex.isIE6 ) {
			//	modal._outerWidth( mw );
			//}
			modal._outerHeight( mh );
			
			self.fireEvent('onModalSizeChange',[ modal,opt ]);
			return self;
		}
	});
	
	return win;
});	
/*
SimpleTab.js
http://www.extgrid.com/tabs
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱

*/
define('Nex/tab/SimpleTab',['require','Nex/panel/Panel'],function(require){
	require('Nex/panel/Panel');

	var tab = Nex.define('Nex.tab.SimpleTab',{
		extend : 'Nex.panel.Panel',
		alias : 'Nex.SimpleTab',
		xtype : 'simpletab stab stabpanel',
		configs : function(opt){
			return {
				prefix : 'nexstab-',
				///_initMethod : opt._initMethod.concat(['_initTabStart']),
				autoResize : true,
				renderTo : document.body,
				disabledItems : true,
				border : false,
				autoScroll : false,
				denyEvents : true,
				borderCls : [opt.borderCls,'nex-stab-border'].join(' '),
				containerCls : [opt.containerCls,'nex-stab'].join(' '),
				autoScrollCls : [opt.autoScrollCls,'nex-stab-auto-scroll'].join(' '),
				tabHeaderSelectionable : true,
				firstShowAnim : true,//
				animSwitch : false,//开启动画方式切入tab
				switchEasing : 'easeOutCirc',
				switchDuration : 200,
				showTabTips : false,//预留--
				tabLayout : 'top',//top bottom
				forceFit : false,//tab header会自动分配列宽
				tabHeaderCls : '',
				tabHeaderWidth : 0,//100%
				tabBodyCls : '',
				/*隐藏的Tab会设置为display:none*/
				hideToNone : true,
				width : '100%',
				height : '100%',
				lazyLoad : true,//切换Tab时才生成Tab内容
				titleFormat : null,//标题格式化
				defaultShowTab : null,
				_tabsData : function(){
					return {
						id : null,
						title : '',
						html : '',
						hcls : '',
						bcls : '',
						style : {},
						padding : null,
						autoShow : false,
						autoScroll : false,
						closable : false,
						items : [],
						icon : '',
						iconCls : '',
						disabled : false
					}
				},
				defaults : {},
				items : [],
				views : {},
				cls : '',
				switchOnType : 1//showOnType : 1,//0 mouseover 1 click 
				//events : {}
			};	
		}		
	});
	tab.override({
		initComponent : function(){
			this.callParent(arguments);
			this.initTab();
			return this;
		}, 
		initTab : function(){
			var self = this;
			var opt = self.configs;
			opt.items = $.isArray(opt.items) ? opt.items.concat([]) : [];
			self._initTabsData()
				._setTabHeader()
				//._setTabBody()
				._setTabEvents()
				._setTabLayout();	
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			
			self.callParent(arguments);
			
			//添加tab 样式
			self.bind('onHeaderCreate._sys',function( el ){
				el.addClass('nex-panel-tab-header');
				$('>.nex-panel-tools',el).addClass('nex-panel-tab-tools')
			},self);
			self.bind('onBodyCreate._sys',function( el ){
				el.addClass('nex-stab-body');
			},self);
			self.bind('onFooterCreate._sys',function( el ){
				el.addClass('nex-stab-footer');
			},self);
			
			self.bind("onCreate._sys",self._initTab,self);
			self.bind("onTabClick._sys",self._clickToShow,self);
			self.bind("onTabOver._sys",self._setTabOverCls,self);
			self.bind("onTabOver._sys",self._overToShow,self);
			self.bind("onTabOut._sys",self._unsetTabOverCls,self);
			
			return self;
		},
		_parseTabData : function(d){
			var self = this;
			var opt = self.configs;	
			
			if( $.isPlainObject( d ) && d.__init ) {
				return d;	
			} 
			
			var d = $.extend({},opt._tabsData.call( self ),opt.defaults,d);
			if( d.id === null || d.id==="" || typeof d.id !== 'string' ) {
				d.id = 'tab_'+Nex.uuid();	
			}
			d.__init = true;
			
			self._tabItems[d.id] = d;
			
			return d;
		},
		_tabItems : {},
		_initTabsData : function(){
			var self = this;
			var opt = self.configs;	
			self._tabItems = {};
			var tab = {};
			var len = opt.items.length;
			for( var i=0;i<len;i++ ) {
				var item = opt.items[i];
				tab = self._parseTabData( item );
				opt.items[i] = tab;
			}
			return self;
		},
		//设置items
		setItems : function( items ){
			var list = $.isArray(items) ? items.concat([]) : [];
			this.C( 'items',list );
			return this._initTabsData();	
		},
		getItems : function(){
			return this.configs.items;	
		},
		getItemData : function( id ){
			return this._tabItems[ id ];	
		},
		getTabData : function( id ){
			return this._tabItems[ id ];		
		},
		_doSetViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			
			self.callParent(arguments);
				
			var container = self.getContainer();	
			var theader = self.getTabHeader();
			//tabHeaderWidth
			var theader_inner = $('#'+opt.id+'_header_inner');
			
			var body = self.getTabBody();
			
			var cw = container._width();
			var ch = container._height();
			if( !self.isAutoWidth() ) {
				theader.width( cw );
				var hw = theader._width();
				var isPre = String(opt.tabHeaderWidth).indexOf('%') === -1 ? false : true; 
				var iw = parseFloat( opt.tabHeaderWidth );
				if( isPre ) {
					iw = hw * ( iw/100 );	
				}
				iw = parseInt( iw );
				
				var w = hw;
				
				if( iw ) {
					w = iw
				}
				
				theader_inner.width( w );	
				//body._outerWidth( cw );
				//==========
				if( opt.forceFit ) {
					$('.nex-stab-header-wrap',theader).width( w );
				} else {
					$('.nex-stab-header-wrap',theader)._removeStyle( 'width' );	
				}
				
				$('>.nex-stab-body-item',body)._outerWidth( body._width() );
			} else {
				theader._removeStyle( 'width' );
				if( !parseInt( opt.tabHeaderWidth ) ) {
					theader_inner._removeStyle( 'width' );
				}
				//body._removeStyle( 'width' );
				if( opt.forceFit ) {
					$('.nex-stab-header-wrap',theader)._removeStyle( 'width' );	
				}
				$('>.nex-stab-body-item',body)._removeStyle( 'width' );
			}
			if( !self.isAutoHeight() ) {
				//var th = ch - header._outerHeight();
				//body._outerHeight( th );
				$('>.nex-stab-body-item',body)._outerHeight( body._height() );
			} else {
				//body._removeStyle( 'height' );		
				$('>.nex-stab-body-item',body)._removeStyle( 'height' );		
			}
		},
		_clickToShow : function(tid,d,opt){
			var self = this;
			var opt = self.configs;
			if( opt.switchOnType === 1 ) {
				self.switchTab(tid);
			}
		},
		_overToShow : function(tid,d,opt){
			var self = this;
			var opt = self.configs;
			if( opt.switchOnType === 0 ) {
				self.switchTab(tid);	
			}	
		},
		unselectHeader : function(){
			var self = this;
			var opt = self.configs;	
			opt.views['header'].bind('selectstart.tabs',function(){return false;});	
			return self;
		},
		/*
		*tabLayout top bottom
		*/
		_getTabHeaderInner : function( d ){
			var self = this;
			var opt = self.configs;	
			var html = [];
			
			var closeCls = d.closable ? 'nex-stab-header-item-closable' : '';
			var hasIcon = d.icon || d.iconCls ? true : false;
			var disabledCls = !d.disabled ? '' : 'nex-stab-header-item-disabled';
			html.push( '<td><div class="nex-stab-header-item '+ [disabledCls,closeCls,d.hcls].join(' ') +'" id="'+opt.id+'_'+d.id+'_header" tid="'+d.id+'"><div class="nex-stab-item-inner">' );	
			if( $.isFunction(opt.titleFormat) ) {
				d.title = opt.titleFormat.call( self,d.title,d,opt );	
			}
			if( hasIcon ) {
				var style = d.icon ? ("background-image: url("+d.icon+")") : "";
				html.push( '<span class="nex-stab-item-icon '+d.iconCls+'" style="'+style+'"></span>' );	
			}
			html.push( '<span class="nex-stab-item-text">'+d.title+'</span>' );
			if( closeCls ) {
				html.push( '<a href="javascript:void(0);" class="nex-stab-item-close"></a>' );			
			}
			html.push( '</div></div></td>' );	
			
			return html.join('');	
		},
		_getTabHeaderTpl : function(){
			var self = this;
			var opt = self.configs;	
			var html = [
				'<div class="nex-stab-header '+opt.tabHeaderCls+'" id="'+opt.id+'_tab_header">',
					'<div id="'+opt.id+'_header_inner" class="nex-stab-header-inner">',//辅助作用
					'<table cellpadding="0" cellspacing="0" border="0" class="nex-stab-header-wrap">',
						'<tbody><tr id="'+opt.id+'_items_wraper">'
			];
			var items = opt.items;
			var len = items.length;
			
			for( var i=0;i<len;i++ ) {
				html.push( self._getTabHeaderInner( items[i] ) );
			}
			
			html.push( '</tr></tbody></table></div></div>' );
			return html.join('');
		},
		_setTabHeader : function(){
			var self = this;
			var opt = self.configs;	
			var container = self.getContainer();
			var theader = $( self._getTabHeaderTpl() );
			container.append(theader);
			opt.views['tabHeader'] = theader;
			if( !opt.tabHeaderSelectionable ) {
				theader.disableSelection();	
			}
			self.fireEvent("onTabHeaderCreate",[theader],opt);
			return self;
		},
		_setTabEvents : function(){
			var self = this,
				opt=this.configs;
			var theader = self.getTabHeader();	
			theader.undelegate('._tab').delegate('.nex-stab-header-item',{
				'click._tab' : function(e){
					if( $(this).hasClass('nex-stab-header-item-disabled') ) {
						return;	
					}
					var tid = $(this).attr('tid');
					var data = self.getTabData( tid );
					self.fireEvent('onTabClick',[tid,data,opt]);	
				},
				'dblclick._tab' : function(e){
					if( $(this).hasClass('nex-stab-header-item-disabled') ) {
						return;	
					}
					var tid = $(this).attr('tid');
					var data = self.getTabData( tid );
					self.fireEvent('onTabDblClick',[tid,data,opt]);		
				},
				'mouseenter._tab' : function(e){
					if( $(this).hasClass('nex-stab-header-item-disabled') ) {
						return;	
					}
					var tid = $(this).attr('tid');
					var data = self.getTabData( tid );
					self.fireEvent('onTabOver',[tid,data,opt]);	
				},
				'mouseleave._tab' : function(e){
					if( $(this).hasClass('nex-stab-header-item-disabled') ) {
						return;	
					}
					var tid = $(this).attr('tid');
					var data = self.getTabData( tid );
					self.fireEvent('onTabOut',[tid,data,opt]);		
				}
			});
			
			theader.undelegate('._tabc').delegate( '.nex-stab-item-close',{
				'click._tabc' : function(e){
					var $p = $(this).closest('.nex-stab-header-item');
					if( $p.hasClass('nex-stab-header-item-disabled') ) {
						return;	
					}
					
					var tid = $p.attr('tid');
					
					self.removeTab( tid );	
					
					e.preventDefault();
					e.stopPropagation();
				}	
			} );
			
			self.fireEvent("onSetTabEvents",[opt]);
			return self;
		},
		_setTabLayout : function(){
			var self = this;
			var opt=this.configs;
			
			var tabLayout = (opt.tabLayout+'').toLowerCase();
			opt.tabLayout = tabLayout;
			self._removeAlignCls();
			
			switch( tabLayout ) {
				case 'top' :
					self._setTopAlign();
					break;
				case 'bottom' :
					self._setBottomAlign();
					break;
				case 'right' :
					self._setRightAlign();
					break;	
				case 'left' :
					self._setLeftAlign();
					break;		
				default : 	
					self._setTopAlign();
					break;
			}
			
			return self;	
		},
		setTabLayout : function( align ){
			var self = this;
			var opt=this.configs;	
			
			var r = self.fireEvent("onBeforeTabLayoutChange",[align,opt]);
			if( r === false ) return r;
			
			opt.tabLayout = align;
			self._setTabLayout();
			
			self.fireEvent("onTabLayoutChange",[align,opt]);
			
			return self;
		},
		_removeAlignCls : function(){
			var self = this;
			var opt=this.configs;	
			var h = self.getTabHeader();
			var b = self.getTabBody();
			h.removeClass('nex-stab-header-top nex-stab-header-bottom nex-stab-header-right nex-stab-header-left');
			b.removeClass('nex-stab-body-top nex-stab-body-bottom nex-stab-body-right nex-stab-body-left');	
			//防止设置height 而影响top bottom的高度设置
			h.css({
				height : ''	
			});
		},
		_setTopAlign : function(){
			var self = this;
			var opt=this.configs;	
			var c = self.getContainer();
			var ph = self.getHeader();
			var h = self.getTabHeader();
			var b = self.getTabBody();
			h.addClass( 'nex-stab-header-top' );
			b.addClass( 'nex-stab-body-top' );
			if( ph ) {
				ph.after( h )	
			} else {
				c.prepend( h );	
			}
			self._removeHorizontalView( 'tabHeader' );
			self._setVerticalView( 'tabHeader',h );
		},
		_setBottomAlign : function(){
			var self = this;
			var opt=this.configs;	
			var c = self.getContainer();
			var h = self.getTabHeader();
			var b = self.getTabBody();
			h.addClass( 'nex-stab-header-bottom' );
			b.addClass( 'nex-stab-body-bottom' );
			c.append( h );
			self._removeHorizontalView( 'tabHeader' );
			self._setVerticalView( 'tabHeader',h );
		},
		_setTabOverCls : function( tid,data,opt ){
			var self = this;
			var tab = self.getTabItemHeader( tid );
			tab.addClass('nex-stab-header-item-over');
		},
		_unsetTabOverCls : function( tid,data,opt ){
			var self = this;
			var tab = self.getTabItemHeader( tid );
			tab.removeClass('nex-stab-header-item-over');
		},
		getTabHeader : function(){
			var opt=this.configs;	
			return opt.views['tabHeader'];		
		},
		getTabBody : function(){
			var opt=this.configs;	
			return opt.views['body'];		
		},
		getTabItemHeader : function( tid ){
			var opt = this.configs;
			return $('#'+opt.id+'_'+tid+'_header');	
		},
		getTabItemBody : function( tid ){
			var opt = this.configs;
			return $('#'+opt.id+'_'+tid+'_body');			
		},
		/*
		*清空tab内容
		*/
		empytTabContent : function(tid){
			var self = this;
			var opt = self.C();		
			var tbody = self.getTabItemBody( tid );
			tbody.empty();
			Nex.gc();
			return self;
		},
		/*
		*向tab追加内容
		*/
		addTabContent : function(tid,items){
			var self = this,undef;
			var opt = self.C();
			if( items === undef ) return;
			var tbody = self.getTabItemBody( tid );
			if( tbody.length ) {
				self.addComponent( tbody,items );	
			}
			return self;
		},
		/*
		*更新指定tab的body大小
		*/
		_resizeTabItem : function( id ){
			var self = this,
				opt=this.configs,
				undef;
			var container = self.getContainer();	
			var header = self.getTabHeader();
			var body = self.getTabBody();
			var tbd = self.getTabItemBody( id );
			if( !self.isAutoWidth() ) {
				var cw = body._width();
				tbd._outerWidth( cw );
			} else {
				tbd._removeStyle( 'width' );
			}//nex-stab-header-item
			if( !self.isAutoHeight() ) {
				var th = body._height();
				tbd._outerHeight( th );
			} else {
				tbd._removeStyle( 'height' );			
			}	
			return self;
		},
		/*
		*创建指定的Tab内容
		*/
		_setTabBodyItem : function( tid ){
			var self = this,
				opt=this.configs;
			var data = self.getTabData( tid );
			if( !data ) return self;
			//var body = $('#'+opt.id+'_tab_body');	
			var body = self.getTabBody();		
			//self.getTabItemBody( tid )
			if( self.getTabItemBody( tid ).length ) {
				return self;	
			}
			
			var bd = $('<div class="'+['nex-stab-body-item',data.bcls].join(' ')+'" id="'+opt.id+'_'+data.id+'_body" tid="'+data.id+'"></div>');		
			body.append(bd);
			if( data.padding ) {
				bd.css( 'padding',data.padding );		
			}
			
			bd.css( data.style );
			
			if( data.autoScroll ) {
				bd.addClass('nex-stab-body-item-auto-scroll');	
			}
			
			self._resizeTabItem( tid );
			
			var items = data['html'];
			self.addComponent( bd,items );
			var items = data['items'];
			self.addComponent( bd,items );
			
			return self;
		},
		getCurrentTab : function(){
			var self = this,
				opt=this.configs;
			if( self._currentTab !== null ) {
				return 	self._currentTab;
			}
			var header = self.getTabHeader();//$('#'+opt.id+'_tab_header');
			
			var ls = $('.nex-stab-header-item-selected',header);
			if( ls.length ) {
				return ls.attr('tid');	
			}
			return null;
		},
		getActiveTab : function(){
			return this.getCurrentTab();	
		},
		getCurrentTabData : function(){
			return this.getTabData( this.getCurrentTab() );	
		},
		_isAfterActiveTab : function( tid,otid ){
			var self = this,
				opt=this.configs;
			//默认是在后面的 after = true	
			var after = true;	
			var curr = otid;
			if( curr === null ) return after;
			if( tid === curr ) return after;
			
			$.each( opt.items,function( i,d ){
				//如果d.id == curr 先找到， 那么 tid就是在 curr后面 跳出循环 直接返回after
				if( d.id === curr ) {
					after = true;
					return false;	
				}
				//如果id == tid 那么先找到tid ，那就实在curr前面 跳出循环
				if( d.id === tid ) {
					after = false;
					return false;	
				}	
			} );	
			return after;
		},
		_checkToCreateTab : function( tid ){
			if( !this.getTabItemBody( tid ).length ) {
				this._setTabBodyItem( tid );	
			}
			return this;	
		},
		_currentTab : null,
		__zIndex : 2,
		_showTab : function( tid,fn ){
			var self = this,
				opt=this.configs;
			//检测tab内容是否创建	
			self._checkToCreateTab( tid );
			
			var bd = self.getTabBody();
			
			//otid
			var otid = self._currentTab;
			self._currentTab = tid;
				
			var h = self.getTabItemHeader( tid );//
			var b = self.getTabItemBody( tid );
			
			opt.hideToNone && b.show();
			
			var w = bd.outerWidth();
			
			h.addClass('nex-stab-header-item-selected');	
			//动画执行后的回调
			var call = function(){
				if( $.isFunction( fn ) ) {
					fn();	
				}
				self._hideTab( otid );
				b.addClass( 'nex-stab-body-item-show' );	
				b.css( {
					left : 0,
					top : 0	
				} );	
				self.fireEvent('onShowTab',[ tid,opt ]);
			};
			
			var left = parseFloat(bd.css('paddingLeft'),10) || 0;
			var top = parseFloat(bd.css('paddingTop'),10) || 0;
			//检测当前tid和值钱的tid的位置 影响动画效果
			var isAfter = self._isAfterActiveTab( tid,otid );
			
			if( opt.animSwitch ) {
				b.css({
					zIndex : self.__zIndex++,
					top : top,
					opacity : 0,
					left : isAfter ? w : -w
				});		
				b.stop(true,true).animate( {
					left : left,
					opacity : 1
				},opt.switchDuration,opt.switchEasing,function(){
					call();	
				} );
			} else {
				b.css({
					zIndex : self.__zIndex++,
					left : 0,
					top : 0
				});	
				call();	
			}	
			
			return self;
		},
		_hideTab : function( tid,fn ){
			var self = this,
				opt=this.configs;
			var h = self.getTabItemHeader( tid );
			var b = self.getTabItemBody( tid );	
			h.removeClass('nex-stab-header-item-selected');	
			
			b.removeClass('nex-stab-body-item-show')._removeStyle('left')._removeStyle('top')._removeStyle('z-index');
			
			opt.hideToNone && b.hide();
			
			if( $.isFunction( fn ) ) {
				fn();	
			}
			
			self.fireEvent('onHideTab',[ tid,opt ]);
			
			return self;		
		},
		_getTabItemsWrap : function(){
			var opt = this.configs;	
			return $('#'+opt.id+'_items_wraper');
		},
		/*动态添加Tab*/
		_addTab : function( d,after ){
			var self = this,
				opt=this.configs;
			var d = self._parseTabData( d );
			var after = self._undef( after,true );		
			
			var wrap = self._getTabItemsWrap();
			
			var item = $( self._getTabHeaderInner( d ) );
			if( after ) {
				opt.items.push( d );
				wrap.append( item );
			} else {
				opt.items.splice( 0,0,d );	
				wrap.prepend( item );
			}
			return d.id;
		},
		addTab : function( d,after ){
			var self = this,
				opt=this.configs;
			var html = after;
			var _d = {};
			if( !$.isPlainObject(d) ) {
				_d.title = String(d);	
				if( $.type(html) !== 'boolean' ) {
					_d.html = html;		
				}
			} else {
				_d = d;	
			}
			after = $.type(after) === 'boolean' ? after : true;
			
			var d = self._parseTabData( _d );		
				
			var r = self.fireEvent('onBeforeAddTab',[ d.id,d,opt ]);
			if( r === false ) return self;		
			
			self._addTab( d,after );
			
			if( d.autoShow ) {
				self.switchTab( d.id );	
			}
			
			self.fireEvent('onAddTab',[ d.id,d,opt ]);	
			
			return d.id;	
		},
		/*
		*移除指定tab
		*/
		_removeTab : function( tid ){
			var self = this,
				opt=this.configs;
			var tabs = opt.items;	
			var curr = self.getCurrentTab();
			var i = 0;
			var len = tabs.length;
			for( ;i<len;i++ ) {
				if( tabs[i]['disabled'] ) continue;
				if( tabs[i]['id'] == tid ) break;	
			}
			
			if( curr == tid ) {
				var t = i+1 > len-1 ? i-1 : i+1;
				if( tabs[t] && !tabs[t]['disabled'] ) {
					self.switchTab(tabs[t]['id']);	
				} else {
					self._currentTab = null;	
				}
			}
			
			self.empytTabContent( tid );
			
			var th = self.getTabItemHeader( tid );
			var tb = self.getTabItemBody( tid );	
			
			th.parent().remove();
			tb.remove();
			
			delete self._tabItems[tid];
			
			tabs.splice(i,1); 	
			
			return self;	
		},
		removeTab : function( tid ){
			var self = this,
				opt=this.configs;
			var d = self.getTabData( tid );
			
			if( !d ) return self;
		
			var r = self.fireEvent('onBeforeRemoveTab',[ tid,d,opt ]);
			if( r === false ) return self;		
			
			self._removeTab( tid );
			
			self.fireEvent('onRemoveTab',[ tid,d,opt ]);
			
			return self;
		},
		//删除多个Tab
		removeTabs : function( iarr ){
			var self = this,
				opt=this.configs;
			var tids = $.isArray(iarr) ? iarr : [iarr];
			var len = tids.length;
			if( !len ) {
				return self;	
			} 
			var curr = self.getCurrentTab();
			var lastId = null;
			for( var i=0;i<len;i++ ) {
				var tid = tids[i];
				if( tid == curr ) {
					lastId = tid;
					continue;	
				}	
				self.removeTab( tid );
			}
			if( lastId ) {
				self.removeTab( lastId );	
			}
			return self;				
		},
		closeTab : function( tid ){
			return this.removeTab( tid );	
		},
		/*
		*关闭所有标签
		*/
		removeAllTab : function(){
			var self = this,
				opt=this.configs;
			var tids = [];	
			$.each( opt.items,function(i,d){
				tids.push( d.id );
			} );	
			self.removeTabs( tids );
			return self;		
		},
		/*
		*关闭所有无效的tab
		*/
		removeAllDisabledTab : function(){
			var self = this,
				opt=this.configs;
			var tids = [];	
			$.each( opt.items,function(i,d){
				if( d.disabled ) {
					tids.push( d.id );
				}	
			} );	
			self.removeTabs( tids );
			return self;	
		},
		/*
		*关闭所有可关闭的标签
		*/
		removeAllCloseableTab : function(){
			var self = this,
				opt=this.configs;
			var tids = [];	
			$.each( opt.items,function(i,d){
				if( d.closable ) {
					tids.push( d.id );
				}	
			} );	
			self.removeTabs( tids );
			return self;
		},
		switchTab : function(tid){
			var self = this,
				opt=this.configs;
				
			var ctid = self.getCurrentTab();
			if( ctid == tid ) {
				return true;	
			}
			
			var d = self.getTabData( tid );
			
			var r = self.fireEvent('onBeforeSwitchTab',[ tid, d ,opt ]);
			if( r === false ) return false;
			
			self._showTab( tid );
			
			self.fireEvent('onSwitchTab',[ tid, d ,opt ]);
			
			self.fireEvent('onTabChange',[ tid, d ,opt ]);
			
			return true;
		},
		_initTab : function(){
			var self = this,
				opt=this.configs;
			var items = opt.items;	
			var len = items.length;
			if( !opt.lazyLoad ) {
				for( var i=0;i<len;i++ ) {
					self._setTabBodyItem(items[i]['id']);	
				}
			}	
			self._showDefaultTab();
			return self;
		},
		switchFirstTab : function(){
			var self = this,
				opt=this.configs;
			var tabs = opt.items;
			
			if( !tabs.length ) return self;
			
			var tab = tabs[0];
			
			self.switchTab(tab['id']);
			
			return self;
		},
		switchLastTab : function(){
			var self = this,
				opt=this.configs;
			var tabs = opt.items;
			
			if( !tabs.length ) return self;
			
			var tab = tabs[tabs.length-1];
			
			self.switchTab(tab['id']);
			
			return self;
		},
		_showDefaultTab : function(){
			var self = this,
				opt=this.configs;
			var tabs = opt.items;
			if( !tabs.length ) return self;
 			var tid = opt.defaultShowTab;	
			
			$.each( tabs,function(i,d){
				if( d.disabled ) return;
				if( tid === null ) {
					tid = d.id;	
				}
				if( d.autoShow ) {
					tid = d.id;	
				}	
			} );
			var _anim = opt.animSwitch;
			if( !opt.firstShowAnim ) {
				opt.animSwitch = false;	
			}
			self._showTab(tid);
			opt.animSwitch = _anim;
			return self;
		}
	});
	
	return tab;
});
/*
jquery.nexTabs.js
http://www.extgrid.com/tabs
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱

*/
define('Nex/tab/Tab',['require','Nex/tab/SimpleTab'],function(require){
	require('Nex/tab/SimpleTab');	
	
	var tab = Nex.define('Nex.tab.Tab',{
		extend : 'Nex.tab.SimpleTab',
		alias : 'Nex.Tab',
		xtype : 'tabpanel tab',
		configs : function(opt){
			return {
				prefix : 'nextab-',
				borderCls : [opt.borderCls,'nex-tab-border'].join(' '),
				containerCls : [opt.containerCls,'nex-tab'].join(' '),
				autoScrollCls : [opt.autoScrollCls,'nex-tab-auto-scroll'].join(' '),
				tabLayout   : 'top',//top bottom right left
				sideWidth   : 150,//tabLayout为right left 时的宽度
				forceFit    : false,//stab header会自动分配列宽
				tabHeaderCls: '',
				tabBodyCls  : '',
				tabScrollAnimate :　true,
				tabScrollDuration : 200,
				tabScrollEasing : 'easeOutQuad',
				scrollStep  : 100,
				scrollDelay : 100,
				scrollSpeed : 10
			};
		}	
	});
	tab.override({
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			//必须要先执行
			self.bind("onCreate._sys",self._checkScroll,self);
			
			self.callParent(arguments);
			//检测是需要出现 left right 按钮
			self.bind("onAddTab._sys",self._checkScroll,self);
			self.bind("onRemoveTab._sys",self._checkScroll,self);
			//_checkScrollEdge 必须要在执行_checkScroll后才执行  因为需要检测scrollBar是否创建
			self.bind("onRemoveTab._sys",self._checkScrollEdge,self);
			self.bind("onAddTab._sys",self._isDisabledSTools,self);
			self.bind("onSwitchTab._sys",self.scrollToTab,self);
			self.bind("onTabLayoutChange._sys",self._refreshTabScrollBtn,self);
			self.bind("onSizeChange._sys",self._refreshTabScrollBtn,self);
			
			return self;
		},
		_setTabLayout : function(){
			var self = this;
			var opt=this.configs;
			
			self.callParent(arguments);
			
			if( !self.isInit() ) {
				self.refreshViewSize();
				self.scrollToTab(self.getCurrentTab());
			}
			
			return self;	
		},
		_setLeftAlign : function(){
			var self = this;
			var opt=this.configs;	
			var h = self.getTabHeader();
			var b = self.getTabBody();
			h.addClass( 'nex-stab-header-left' );
			b.addClass( 'nex-stab-body-left' );
			
			var tw = self._getTabItemsWrap();
			tw.css('marginLeft','');
			
			self._removeVerticalView( 'tabHeader' );
			self._setHorizontalView( 'tabHeader',h );
		},
		_setRightAlign : function(){
			var self = this;
			var opt=this.configs;	
			var h = self.getTabHeader();
			var b = self.getTabBody();
			h.addClass( 'nex-stab-header-right' );
			b.addClass( 'nex-stab-body-right' );
			
			var tw = self._getTabItemsWrap();
			tw.css('marginLeft','');
			
			self._removeVerticalView( 'tabHeader' );
			self._setHorizontalView( 'tabHeader',h );
		},
		//水平
		_setHLViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			var container = self.getContainer();	
			var header = self.getTabHeader();
			var header_inner = $('#'+opt.id+'_header_inner');
			var body = self.getTabBody();
			var cw = container._width();
			var ch = container._height();
			//getTabHeader
			header._removeStyle('width height left top right');
			header_inner._removeStyle('width height left top right');
			body._removeStyle('margin-left margin-right');
			
			var sideWidth = parseInt(opt.sideWidth,10);
			var bw = cw - sideWidth;
			
			header._outerWidth( sideWidth );
			header_inner._outerWidth( header._width() );
			
			header.css( {
				left : container.css('paddingLeft'),	
				top : container.css('paddingTop')
			} );
			
			body.css('marginLeft',sideWidth);
			
			if( !self.isAutoWidth() ) {
				body._outerWidth( bw );
				$('>.nex-stab-body-item',body)._outerWidth( body._width() );
			} else {
				body._removeStyle( 'width' );
				$('>.nex-stab-body-item',body)._removeStyle( 'width' );
			}
			if( !self.isAutoHeight() ) {
				header._outerHeight( ch );
				header_inner._outerHeight( header._height() );
				//body._outerHeight( ch );
				$('>.nex-stab-body-item',body)._outerHeight( body._height() );
			} else {	
				header._removeStyle( 'height' );		
				header_inner._removeStyle( 'height' );	
				//body._removeStyle( 'height' );		
				$('>.nex-stab-body-item',body)._removeStyle( 'height' );		
			}
		},
		_setHRViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			var container = self.getContainer();	
			var header = self.getTabHeader();
			var header_inner = $('#'+opt.id+'_header_inner');
			var body = self.getTabBody();
			var cw = container._width();
			var ch = container._height();
			
			header._removeStyle('width height left top right');
			header_inner._removeStyle('width height left top right');
			body._removeStyle('margin-left margin-right');
			
			var sideWidth = parseInt(opt.sideWidth,10);
			var bw = cw - sideWidth;
			
			header._outerWidth( sideWidth );
			header_inner._outerWidth( header._width() );
			
			header.css( {
				right : container.css('paddingRight'),	
				top : container.css('paddingTop')
			} );
			
			body.css('marginRight',sideWidth);
			
			if( !self.isAutoWidth() ) {
				body._outerWidth( bw );
				$('>.nex-stab-body-item',body)._outerWidth( body._width() );
			} else {
				body._removeStyle( 'width' );
				$('>.nex-stab-body-item',body)._removeStyle( 'width' );
			}
			if( !self.isAutoHeight() ) {
				header._outerHeight( ch );
				header_inner._outerHeight( header._height() );
				//body._outerHeight( ch );
				$('>.nex-stab-body-item',body)._outerHeight( body._height() );
			} else {	
				header._removeStyle( 'height' );		
				header_inner._removeStyle( 'height' );	
				//body._removeStyle( 'height' );		
				$('>.nex-stab-body-item',body)._removeStyle( 'height' );		
			}
		},
		//垂直
		_setVViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			var container = self.getContainer();	
			var theader = self.getTabHeader();
			var theader_inner = $('#'+opt.id+'_header_inner');
			var body = self.getTabBody();
			var cw = container._width();
			var ch = container._height();
			
			theader._removeStyle('width height left top right');
			theader_inner._removeStyle('width height left top right');
			body._removeStyle('margin-left margin-right');
			
			if( !self.isAutoWidth() ) {
				theader._outerWidth( cw );
				var hw = theader._width();
				var isPre = String(opt.tabHeaderWidth).indexOf('%') === -1 ? false : true; 
				var iw = parseFloat( opt.tabHeaderWidth );
				if( isPre ) {
					iw = hw * ( iw/100 );	
				}
				iw = parseInt( iw );
				var w = hw;
				
				if( iw ) {
					w = iw
				}
				
				theader_inner.width( w );	
				//header_inner._outerWidth( hw );
				//body._outerWidth( cw );
				$('>.nex-stab-body-item',body)._outerWidth( body._width() );
			} else {
				theader._removeStyle( 'width' );
				if( !parseInt( opt.tabHeaderWidth ) ) {
					theader_inner._removeStyle( 'width' );
				}
				//body._removeStyle( 'width' );
				$('>.nex-stab-body-item',body)._removeStyle( 'width' );
			}
			if( !self.isAutoHeight() ) {
				//var th = ch - header._outerHeight();
				//body._outerHeight( th );
				$('>.nex-stab-body-item',body)._outerHeight( body._height() );
			} else {
				//body._removeStyle( 'height' );		
				$('>.nex-stab-body-item',body)._removeStyle( 'height' );		
			}
		},
		doSetViewSize : function(){
			var self = this,
				opt=this.configs,
				undef;
			var tabLayout = String(opt.tabLayout).toLowerCase();
			
			//Nex.panel.Panel.fn._setViewSize.apply( this,arguments );	
			self.superclass.superclass.doSetViewSize.apply( this,arguments );	
			
			switch( tabLayout ) {
				case 'left':
					self._setHLViewSize();
					break;
				case 'right':
					self._setHRViewSize();
					break;
				default : 
					self._setVViewSize();
					break; 	
			};
		},
		_getTabItemsWrap : function(){
			var opt = this.configs;	
			return $('#'+opt.id+'_items_t');
		},
		_getTabHeaderInner : function( d ){
			var self = this;
			var opt = self.configs;	
			var html = [];
			
			var closeCls = d.closable ? 'nex-stab-header-item-closable' : '';
			var hasIcon = d.icon || d.iconCls ? true : false;
			var disabledCls = !d.disabled ? '' : 'nex-stab-header-item-disabled';
			html.push( '<div class="nex-stab-header-item nex-tab-header-item '+ [disabledCls,closeCls,d.hcls].join(' ') +'" id="'+opt.id+'_'+d.id+'_header" tid="'+d.id+'"><div class="nex-stab-item-inner">' );	
			if( $.isFunction(opt.titleFormat) ) {
				d.title = opt.titleFormat.call( self,d.title,d,opt );	
			}
			if( hasIcon ) {
				var style = d.icon ? ("background-image: url("+d.icon+")") : "";
				html.push( '<span class="nex-stab-item-icon '+d.iconCls+'" style="'+style+'"></span>' );	
			}
			html.push( '<span class="nex-stab-item-text">'+d.title+'</span>' );
			if( closeCls ) {
				html.push( '<a href="javascript:void(0);" class="nex-stab-item-close"></a>' );			
			}
			html.push( '</div></div>' );	
			
			return html.join('');	
		},
		_getTabTools : function(){
			var html = [];
			html.push('<div class="nex-tab-tool nex-tab-left"></div>');	
			html.push('<div class="nex-tab-tool nex-tab-right"></div>');	
			return html.join('');
		},
		_getTabHeaderTpl : function(){
			var self = this;
			var opt = self.configs;	
			var html = [
				'<div class="nex-stab-header nex-tab-header '+opt.tabHeaderCls+'" id="'+opt.id+'_tab_header">',
					'<div id="'+opt.id+'_header_inner" class="nex-stab-header-inner nex-tab-header-inner">',//辅助作用
					'<div id="'+opt.id+'_items_wraper" class="nex-stab-header-wrap nex-tab-header-wrap">',
					'<div id="'+opt.id+'_items_t" class="nex-tab-header-wrap-inner">'
			];
			var items = opt.items;
			var len = items.length;
			
			for( var i=0;i<len;i++ ) {
				html.push( self._getTabHeaderInner( items[i] ) );
			}
			
			html.push( '</div><div class="nex-tab-clear"></div></div>' );
			html.push( '<div id="'+opt.id+'_tools" class="nex-tab-tools clearFix">'+self._getTabTools()+'</div>' );
			html.push( '</div></div>' );
			return html.join('');
		},
		__scroll_t : 0,
		__scroll_t2 : 0,
		//重载
		_setTabEvents : function(){
			var self = this;
			var opt = self.configs;	
			
			self.callParent(arguments);
			//Nex.tab.SimpleTab.fn._setTabEvents.apply(self,arguments);	
			var tool = self._getScrollTools();
			var theader = self.getTabHeader();
			tool.disableSelection();
			theader.undelegate('._tool')
			theader.delegate('.nex-tab-left',{
				'click._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					var r = self.fireEvent('onTabLeftClick',[opt]);
					if( r !== false ) {
						self.scrollTabLeft();	
					}	
				},
				'mouseenter._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					self.fireEvent('onTabLeftOver',[opt]);	
				},
				'mouseleave._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					self.fireEvent('onTabLeftOut',[opt]);	
				},
				'mousedown._tool' : function(){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}	
					self.fireEvent('onTabLeftMouseDown',[opt]);	
					if( self.__scroll_t ){
						clearTimeout( self.__scroll_t );	
						clearTimeout( self.__scroll_t2 );	
						self.__scroll_t = 0;
						self.__scroll_t2 = 0;
					}
					//_getCurrentLeft
					self.__scroll_t = setTimeout(function(){
						self.__scroll_t2 = setInterval(function(){
							self._scrollTab( self._getCurrentLeft() + 10,false );
						},opt.scrollSpeed);
					},opt.scrollDelay);
					$(document).one('mouseup._tool',function(){
						clearTimeout( self.__scroll_t );	
						clearTimeout( self.__scroll_t2 );	
						self.__scroll_t = 0;
						self.__scroll_t2 = 0;
					});
				},
				'mouseup._tool' : function(){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}	
					self.fireEvent('onTabLeftMouseUp',[opt]);	
					clearTimeout( self.__scroll_t );	
					clearTimeout( self.__scroll_t2 );	
					self.__scroll_t = 0;
					self.__scroll_t2 = 0;
				}
			}).delegate('.nex-tab-right',{
				'click._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					var r = self.fireEvent('onTabRightClick',[opt]);	
					if( r !== false ) {
						self.scrollTabRight();	
					}	
				},
				'mouseenter._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					self.fireEvent('onTabRightOver',[opt]);	
				},
				'mouseleave._tool' : function(e){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}
					self.fireEvent('onTabRightOut',[opt]);	
				},
				'mousedown._tool' : function(){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}	
					self.fireEvent('onTabRightMouseDown',[opt]);	
					if( self.__scroll_t ){
						clearTimeout( self.__scroll_t );	
						clearTimeout( self.__scroll_t2 );	
						self.__scroll_t = 0;
						self.__scroll_t2 = 0;
					}
					//_getCurrentLeft
					self.__scroll_t = setTimeout(function(){
						self.__scroll_t2 = setInterval(function(){
							self._scrollTab( self._getCurrentLeft() - 10,false );
						},opt.scrollSpeed);
					},opt.scrollDelay);
					$(document).one('mouseup._tool',function(){
						clearTimeout( self.__scroll_t );	
						clearTimeout( self.__scroll_t2 );	
						self.__scroll_t = 0;
						self.__scroll_t2 = 0;
					});
				},
				'mouseup._tool' : function(){
					if( $(this).hasClass('nex-tab-tool-disabled') ) {
						return;	
					}	
					self.fireEvent('onTabRightMouseUp',[opt]);	
					clearTimeout( self.__scroll_t );	
					clearTimeout( self.__scroll_t2 );	
					self.__scroll_t = 0;
					self.__scroll_t2 = 0;
				}		
			});
		
			return this;
		},
		_removeTab : function( tid ){
			var self = this,
				opt=this.configs;
			var tabs = opt.items;	
			var curr = self.getCurrentTab();
			var i = 0;
			var len = tabs.length;
			for( ;i<len;i++ ) {
				if( tabs[i]['disabled'] ) continue;
				if( tabs[i]['id'] == tid ) break;	
			}
			
			if( curr == tid ) {
				var t = i+1 > len-1 ? i-1 : i+1;
				if( tabs[t] && !tabs[t]['disabled'] ) {
					self.switchTab(tabs[t]['id']);	
				} else {
					self._currentTab = null;	
				}
			}
			
			self.empytTabContent( tid );
			
			var th = self.getTabItemHeader( tid );
			var tb = self.getTabItemBody( tid );	
			
			th.remove();
			tb.remove();
			
			delete self._tabItems[tid];
			
			tabs.splice(i,1); 	
			
			return self;	
		},
		_disabledTabLeft : function(){
			var self = this;
			var opt = self.C();
			var scrollBar = self._getScrollTools();	
			$('.nex-tab-left',scrollBar).addClass('nex-tab-tool-disabled');
		},
		_disabledTabRight : function(){
			var self = this;
			var opt = self.C();
			var scrollBar = self._getScrollTools();		
			$('.nex-tab-right',scrollBar).addClass('nex-tab-tool-disabled');
		},
		_enableTabLeft : function(){
			var self = this;
			var opt = self.C();
			var scrollBar = self._getScrollTools();	
			$('.nex-tab-left',scrollBar).removeClass('nex-tab-tool-disabled');
		},
		_enableTabRight : function(){
			var self = this;
			var opt = self.C();
			var scrollBar = self._getScrollTools();		
			$('.nex-tab-right',scrollBar).removeClass('nex-tab-tool-disabled');
		},
		/*
		*检测left right btn是否可以禁用
		*/
		_isDisabledSTools : function(){
			var self = this;
			var opt = self.configs;	
			
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
				
			var wrap = $('#'+opt.id+'_header_inner');
			var scrollBar = self._getScrollTools();
			var ul = $('#'+opt.id+'_items_t');
			var left = 0;
			if( self.__lastLeft !== null ) {
				left = self.__lastLeft;
			} else {
				left = parseInt(ul.css('marginLeft'));
				left = isNaN( left ) ? 0 : left;
			}
			//left
			if( left>=0 ) {
				self._disabledTabLeft();	
			} else {
				self._enableTabLeft();		
			}
			//right
			var wrap_w = wrap.width()-scrollBar.outerWidth();
			var width = ul.outerWidth();
			var diff = wrap_w - width;
			diff = diff >= 0 ? 0 : diff;
			if( diff>=0 || Math.abs(left)>=Math.abs(diff) ) {
				self._disabledTabRight();		
			} else {
				self._enableTabRight();	
			}
		},
		/*
		*...scrollTab 滚动指定宽度
		*/
		__lastLeft : null,
		_scrollTab : function(left,func){
			var self = this;
			var opt = self.configs;	
			
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			
			var ul = $('#'+opt.id+'_items_t');
			var wrap = $('#'+opt.id+'_header_inner');
			
			var wrap_w = wrap.width()- self._getScrollBarWidth();
			var width = ul.outerWidth();
			var diff = wrap_w - width;
			diff = diff >= 0 ? 0 : diff;
			
			left = left >= 0 ? 0 : left;
			left = Math.abs( left ) > Math.abs(diff) ? diff : left;
			
			if( self.__lastLeft !== null && self.__lastLeft === left ) {
				return self;	
			}
			
			self.__lastLeft = left;
			var ul = $('#'+opt.id+'_items_t');
			if( !opt.tabScrollAnimate || func === false ) {
				ul.css('marginLeft',left);	
			} else {
				ul.stop(true,true)
				  .animate({
						marginLeft : left	   
					},opt.tabScrollDuration,opt.tabScrollEasing,function(){
						if( $.isFunction( func ) ) {
							func.call(self);	
						}
					});
			}
			/*检测是否滚到到边缘*/	
			self._isDisabledSTools();
			return self;
		},
		_getCurrentLeft : function(){
			var self = this;
			var opt = self.configs;
			
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			
			if( self.__lastLeft !== null ) {
				return self.__lastLeft;	
			}
			
			var ul = $('#'+opt.id+'_items_t');	
			var left = ul.css('marginLeft');
			return isNaN( parseFloat( left ) ) ? 0 : parseFloat( left );
		},
		//水平
		_getScrollToTabPos1 : function( item,wrap,bd,pos ){
			var self = this;
			var opt = self.configs;
			
			//if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			
			var args = arguments;
			var _lp = args[ args.length-1 ];
			var wp = wrap || item.parent();
			var bd = bd;
			var f = item;
			var pos = !isNaN(parseInt( _lp )) ? parseInt( _lp ) : wp.css('marginLeft');
			var sLeft = 0;
			var _sLeft = pos;
			_sLeft = isNaN( parseFloat( _sLeft ) ) ? 0 : parseFloat( _sLeft );
			
			var offset = bd.offset();
			var borderWidth = parseInt(bd.css('borderLeftWidth')) || 0;
			var paddingLeft = parseInt(bd.css('paddingLeft')) || 0;
			//校正可视区域
			offset.left += borderWidth + paddingLeft;
			var w = bd.width() - self._getScrollBarWidth();
			
			var fo = f.offset();
			var fw = f.outerWidth();
			
			var outerWidth = 0;
			if( offset.left > fo.left ) {
				outerWidth = offset.left - fo.left;
			} else if( (offset.left+w) < (fo.left+fw) ) {
				outerWidth = (offset.left+w) - (fo.left+fw);
			}
			
			sLeft = _sLeft + outerWidth;
			
			return sLeft;	
		},
		//垂直
		_getScrollToTabPos2 : function( item,bd,pos ){
			var self = this;
			var opt = self.configs;
			
			var args = arguments;
			var _lp = args[ args.length-1 ];
			//var wp = wrap || item.parent();
			//var bd = bd;
			var f = item;
			var pos = !isNaN(parseInt( _lp )) ? parseInt( _lp ) : bd.scrollTop();
			var sTop = 0;
			var _sTop = pos;
			_sTop = isNaN( parseFloat( _sTop ) ) ? 0 : parseFloat( _sTop );
			
			var offset = bd.offset();
			var borderTop = parseInt(bd.css('borderTopWidth')) || 0;
			var paddingTop = parseInt(bd.css('paddingTop')) || 0;
			//校正可视区域
			offset.top += borderTop + paddingTop;
			
			var h = bd.height();
			
			var fo = f.offset();
			var fh = f.outerHeight();
		
			var outerHeight = 0;
			if( offset.top > fo.top ) {
				outerHeight = fo.top - offset.top;
			} else if( (offset.top+h) < (fo.top+fh) ) {
				outerHeight = (fo.top+fh) - (offset.top+h);
			}
			
			sTop = _sTop + outerHeight;
			
			return sTop;	
		},
		scrollToTab : function( tid ){
			var self = this;
			var opt = self.configs;
			
			if( !self._toolBarShow ) {
				return;	
			}
			
			var bd = $('#'+opt.id+'_header_inner');//nextab-7_header_inner
			var wrap = $('#'+opt.id+'_items_t');//_items_t	
			var item = self.getTabItemHeader(tid);
			if( !item.length ) return;
			var pos = 0;
			if( opt.tabLayout === 'top' || opt.tabLayout === 'bottom' ) {
				pos = self._getScrollToTabPos1( item,wrap,bd );
				self._scrollTab( pos );
			} else {
				var sTop = bd.scrollTop();
				pos = self._getScrollToTabPos2( item,bd,bd.scrollTop() );
				bd.scrollTop( Math.abs(pos) );
			}
		},
		scrollTabLeft : function(){
			var self = this;
			var opt = self.configs;
			
			if( !self._toolBarShow ) {
				return;	
			}
			
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			
			var ul = $('#'+opt.id+'_items_t');
			var left = ul.css('marginLeft');
			left = isNaN( parseFloat( left ) ) ? 0 : parseFloat( left );
			left += opt.scrollStep;
		
			self._scrollTab( left );
		},
		scrollTabRight : function(){
			var self = this;
			var opt = self.configs;
			
			if( !self._toolBarShow ) {
				return;	
			}
			
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			
			var ul = $('#'+opt.id+'_items_t');
			
			var left = ul.css('marginLeft');
			left = isNaN( parseFloat( left ) ) ? 0 : parseFloat( left );
			
			left -= opt.scrollStep;
			
			self._scrollTab( left );
		},
		//vertical horizontal
		_getTabCast : function(){
			var self = this;
			var opt = self.configs;	
			if( opt.tabLayout === 'top' || opt.tabLayout === 'bottom' ) {
				return 'horizontal';	
			} else {
				return 'vertical';		
			}	
		},
		/*
		*检测tab选项卡是否需要添加滚动按钮 只支持top bottom
		*/
		_toolBarShow : false,
		_checkScroll : function(){
			var self = this;
			var opt = self.configs;	
			
			var inner_header = $('#'+opt.id+'_header_inner');//nextab-7_header_inner
			var inner_items = $('#'+opt.id+'_items_t');//_items_t
			
			var isScroll = false;
			var cast = self._getTabCast();
			if( cast === 'horizontal' ) {
				isScroll = inner_header._width() > inner_items._width() ? false : true;
			} else {
				isScroll = inner_header._height() > inner_items._height() ? false : true;	
			}
			
			self._toolBarShow = isScroll;
		
			if( cast !== 'horizontal' ) return self;
			
			var scrollBar = self._getScrollTools();
			
			if( isScroll ) {
				scrollBar.stop(true,true).fadeIn();
			} else {
				scrollBar.stop(true,true).fadeOut();
			}
			return self;
		},
		_getScrollTools : function(){
			var opt = this.configs;		
			return $('#'+opt.id+'_tools');
		},
		_getScrollBarWidth : function(){
			var opt = this.configs;	
			if( this._toolBarShow )	{
				return $('#'+opt.id+'_tools').outerWidth();	
			}
			return 0;
		},
		/*删除tab时 会自动滚动到边缘 防止删除最后的tab而不会自动滚动*/
		_checkScrollEdge : function(){
			var self = this;
			var opt = self.C();	
			if( opt.tabLayout !== 'top' && opt.tabLayout !== 'bottom' ) return;
			var inner_header = $('#'+opt.id+'_header_inner');//nextab-7_header_inner
			var inner_items = $('#'+opt.id+'_items_t');//_items_t
			var wrap_w = inner_header._width()-self._getScrollBarWidth();
			var items_w = inner_items.outerWidth();
			var ml = parseInt(inner_items.css('marginLeft'));
			ml = isNaN( ml ) ? 0 : ml;
			var visible_w = items_w - Math.abs( ml );
			var diff = wrap_w - visible_w;	
			var left = ml + diff;
			left = left > 0 ? 0 : left;
			if( diff>=0 ) {
				self._scrollTab( left );
			}
		},
		_refreshTabScrollBtn : function( align ){
			var cast = this._getTabCast();
			if( cast !== 'horizontal' ) {
				var tools = this._getScrollTools();
				tools.stop(true,true).fadeOut();
			}
			this._checkScroll();
			this._checkScrollEdge();
			this.scrollToTab( this.getCurrentTab() );		
		}
	});
	
	return tab;
});
/*
layout
*/
define('Nex/layout/Layout',['require','Nex/drag/Drag','Nex/container/Container'],function(require){
	require('Nex/drag/Drag');
	require('Nex/container/Container');		
	var layout = Nex.define('Nex.layout.Layout',{
		extend : 'Nex.container.Container',
		alias : 'Nex.Layout',
		xtype : 'layout',
		configs : function(opt){
			return {
				prefix : 'nexLayout-',
				autoDestroy : true,
				autoResize : true,
				_hasBodyView : false,
				_checkScrollBar : false,
				position : 'relative',
				renderTo: document.body,
				width : '100%',
				height : '100%',
				easing : 'easeOutCirc',
				layouts : ['north','south','west','east'],
				isCreate : false,
				closeTime : 300,
				cls : '',
				borderCls : [opt.borderCls,'nex-layout-border'].join(' '),
				containerCls : [opt.containerCls,'nex-layout nex-layout-wrap'].join(' '),
				autoScrollCls : '',
				autoScrollRegionCls : 'nex-layout-auto-scroll',
				borderRegionCls : 'nex-layout-region-border',
				cssText : '',
				style : {},//css
				bodyCls : '',
				bodyStyle : {},
				padding : null,
				dblclickToClose : true,
				_north : {
					handles : 's',
					"split" : true,
					splitBtn : true,
					splitSize : 5,
					resizable : true,
					isClosed : false,
					autoScroll : false,
					selectionable : true,
					border : true,
					borderCls : '',
					attrs : {},
					cls : '',
					clsText : '',
					style : {},//css
					padding : 0,
					html : '',
					items : [],
					maxSize : 0,//maxHeight 
					minSize : 28,//minHeight
					height : 80
				},
				_south : {
					handles : 'n',
					"split" : true,
					splitBtn : true,
					splitSize : 5,
					resizable : true,
					isClosed : false,
					autoScroll : false,
					selectionable : true,
					border : true,
					borderCls : '',
					attrs : {},
					cls : '',
					clsText : '',
					style : {},//css
					padding : 0,
					html : '',
					items : [],
					maxSize : 0,//maxHeight 
					minSize : 28,//minHeight
					height : 40
				},
				_east : {
					handles : 'w',
					"split" : true,
					splitBtn : true,
					splitSize : 5,
					resizable : true,
					isClosed : false,
					autoScroll : false,
					selectionable : true,
					border : true,
					borderCls : '',
					attrs : {},
					cls : '',
					clsText : '',
					style : {},//css
					padding : 0,
					html : '',
					items : [],
					maxSize : 0,//maxHeight 
					minSize : 28,//minHeight
					width : 80
				},
				_west : {
					handles : 'e',
					"split" : true,
					splitBtn : true,
					splitSize : 5,
					resizable : true,
					isClosed : false,
					autoScroll : false,
					selectionable : true,
					border : true,
					borderCls : '',
					attrs : {},
					cls : '',
					clsText : '',
					style : {},//css
					padding : 0,
					html : '',
					items : [],
					maxSize : 0,//maxHeight 
					minSize : 28,//minHeight
					width : 160
				},
				_center : {
					minWidth : 20,
					minHeight : 20,
					autoScroll : false,
					selectionable : true,
					border : true,
					borderCls : '',
					attrs : {},
					cls : '',
					clsText : '',
					style : {},//css
					padding : 0,
					html : '',
					items : []
				},
				maxWidth : 0,
				minWidth : 0,
				maxHeight : 0,
				minHeight : 0,
				dir : '',
				denyEvents : [ 'scroll' ],
				events : {
					onCreate : $.noop,
					onBeforeRegionCreate : $.noop,
					onRegionCreate : $.noop,
					onBeforeRegionRemove : $.noop,
					onRegionRemove : $.noop,
					onBeforeSplitDrag : $.noop,
					onSplitDrag : $.noop,
					onSplitStopDrag : $.noop
				}
			};			
		}		
	});
	
	layout.override({
		initComponent : function(opt) {
			var self = this;
			self.initLayoutOptions(opt);
			//self.setContainer();
			self.setBody();
			self.initLayout();
		},
		initLayoutOptions : function(opt){
			var self = this;
			var regions =['north','south','west','east','center'];
			var cfs = {};
			for( var i=0;i<regions.length;i++ ) {
				var cf = {};
				var region = regions[i];
				$.extend(cf,opt['_'+region],opt[region] || {});
				cfs[region] = cf;
			}
			opt = $.extend(opt,cfs);
		},
		_setPadding : function(){
			var self = this,
				opt = self.configs;
			var bd = self.getContainer();
			if( opt.padding !== null ) {
				bd.css('padding',opt.padding);
			}
		},
		getBody : function(){
			var self = this,
				opt = self.configs;
			return opt.views['body'];
		},
		setBody : function(){
			var self = this;
			var opt = self.configs;	
			var container = opt.views['container'];
			var bd = $( '<div class="nex-layout-container '+opt.bodyCls+'" id="'+opt.id+'_container"></div>' );
			opt.views['body'] = bd;
			container.append(bd);
			//bd.css('padding',opt.padding);
			bd.css(opt.bodyStyle);
			//self.bindBodyEvents();	 
			self.fireEvent("onBodyCreate",[bd,opt]);
			return self;
		},
		getBodyWidth : function(){
			var vbody = this.getBody();
			return vbody.width();	
		},
		getBodyHeight : function(){
			var vbody = this.getBody();
			return vbody.height();	
		},
		initLayout : function(){
			var self = this;
			var opt = self.configs;	
			self.fireEvent('onInitComponent',[opt]);
			//初始是不应该触发onSizeChange事件
			self.lockEvent('onSizeChange');
			self.resetSize();
			self.unLockEvent('onSizeChange');
			
			self._createLayouts();
			
			self.fireEvent('onCreate',[opt]);
			opt._isInit = false;
		},
		//系统事件
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			//self.bind("onRegionSizeChange",self.setExpandSize);	
			self.bind("onRegionCreate._sys",self.bindReginEvent,self);
		//	self.bind("onRegionCreate",self.onRegionCreate);
			//self.bind("onCreate",self.onCreate);	
			self.bind("onRegionCreate._sys",self.closeDefault,self);	
			self.bind("onSplitBtnClick._sys",self.splitClickToClose,self);
			self.bind("onSplitDblClick._sys",self.splitDblClickToClose,self);
			self.bind("onRegionCreate._sys",self.dragSplit,self);
		},
		dragSplit : function(region){
			var self = this,opt=this.C();
			var bar = $("#"+opt.id+"_"+region+"_split");
			if( !bar.length || !Nex.getClass('drag') ) return;
			
			if( !opt[region]['resizable'] ) return;
			
			var axis = 'h';
			var cursor = 'default';
			switch( region ) {
				case 'north':
				case 'south':
					axis = 'v';
					cursor = 'row-resize';
					break;
				case 'west':
				case 'east':
					axis = 'h';
					cursor = 'col-resize';
					break
			}
			
			var _setRegionSize = function(x,y){
				var _s = Nex.inArray(region,['north','south']) == -1 ? x : y;
				if( Nex.inArray(region,['east','south']) != -1 ) {
					_s *= -1; 	
				}
				var size = self._undef(opt[region]['height'],opt[region]['width']) + _s;
				size = size < 0 ? 0 : size;
				var layoutSize = {width:$("#"+opt.id+"_container").width(),height:$("#"+opt.id+"_container").height()};
				var maxHeight = 0,maxWidth = 0;
				switch( region ) {
					case 'south':
					case 'north':
						maxHeight = size + ( region==='south' ? opt['north']['height'] : opt['south']['height'] ) + opt['center']['minHeight'];
						if( maxHeight>=layoutSize.height ) {
							size -= maxHeight - layoutSize.height;
						}
						break;
					case 'west':
					case 'east':
						maxWidth = size + ( region==='west' ? opt['east']['width'] : opt['west']['width'] ) + opt['center']['minWidth'];
						if( maxWidth>=layoutSize.width ) {
							size -= maxWidth - layoutSize.width;
						}
						break;
				}
				self.setRegionSize(region,size);
				self.refresh();
			}
			
			Nex.Create('drag',{
				helper : bar,
				axis :　axis,			 
				cursor : cursor,
				onBeforeDrag : function(e,ui){
					var self = this;
					var target = e.srcElement ? e.srcElement : e.target;
					if( !$(target).hasClass('nex-layout-split') ) return false;
					if( !opt[region]['resizable'] || opt[region]['isClosed'] ) {
						return false;	
					}
					var r = self.fireEvent('onBeforeSplitDrag',[ region,e,opt ]);
					if( r === false ) return f;
					
					$(bar).addClass('nex-split-drag');
					$(bar).css('zIndex',99999);
					
					var clone = $(bar).clone();	
					clone.attr('id','_dragSplit');
					clone.css('zIndex',-1);
					clone.addClass('nex-split-proxy-drag');
					clone.empty();
					$(bar).after(clone);
					
					self.__clone = clone;
				},
				onDrag : function(helper,pos,e,_opt){
					var self = this;
					var r = self.fireEvent('onSplitDrag',[ region,helper,pos,e,opt ]);
					//if( r === false ) return r;
					//return false;	
				},
				//如果要用 onStopDrag 那么 就需要使用setTimeout来调用_setRegionSize和fireEvent(onSplitStopDrag)
				onAfterDrag : function(ui,e,_opt){//helper
					var self = this;
					$(bar).removeClass('nex-split-drag');
					$(bar).css('zIndex',0);
					self.__clone.remove();
					_setRegionSize( _opt.left - _opt._sLeft,_opt.top-_opt._sTop );
					self.fireEvent('onSplitStopDrag',[ region,ui.left - ui._sLeft,ui.top-ui._sTop,ui,e,opt ]);
				}
			});
		},
		splitClickToClose : function(bar,region,e){
			var self = this;
			var opt = self.C();	
			if( opt[region]['isClosed'] ) {
				self.openRegion( region );	
			} else {
				self.closeRegion( region );	
			}		
		},
		splitDblClickToClose : function(bar,region,e){
			var self = this;
			var opt = self.C();	
			if( !opt.dblclickToClose ) return;
			if( opt[region]['isClosed'] ) {
				self.openRegion( region );	
			} else {
				self.closeRegion( region );	
			}
		},
		closeDefault : function(region,lbody){
			var self = this;
			var opt = self.C();	
			var rg = opt[region];
			if( region == 'center' ) return;
			if( rg['isClosed'] ) {
				self.closeRegion(region);	
			}
		},
		bindReginEvent : function(region,lbody){
			var self = this;
			var opt = self.configs;	
			if( !opt[region]['split'] ) return;
			var $split = $("#"+opt.id+"_"+region+"_split");
			var $split_i = $("#"+opt.id+"_"+region+"_split").find(">a.nex-layout-split-i");
			var callBack = function(type,e){
				var target = e.srcElement ? e.srcElement : e.target;
				if( !$(target).hasClass('nex-layout-split') ) return;
				var r = self.fireEvent(type,[ this,region,e ]);
				if( r === false ) return r;
				var r = self.fireEvent(type.replace('Split',self._toUpperCase(region)+'Split'),[ this,region,e ]);
				if( r === false ) return r;
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
			};
			var events = {
				'click' : function(e) {
					callBack.call(this,'onSplitClick',e);
				},
				'dblclick' : function(e) {
					callBack.call(this,'onSplitDblClick',e);
				},
				'keydown' : function(e) {
					callBack.call(this,'onSplitKeyDown',e);
				},
				'keyup' : function(e) {
					callBack.call(this,'onSplitKeyUp',e);
				},
				'keypress' : function(e){
					callBack.call(this,'onSplitKeyPress',e);
				},
				'mouseover' : function(e){
					callBack.call(this,'onSplitMouseOver',e);
				},
				'mouseout' : function(e){
					callBack.call(this,'onSplitMouseOut',e);
				},
				'mousedown' : function(e) {
					callBack.call(this,'onSplitMouseDown',e);
				},
				'mouseup' : function(e) {
					callBack.call(this,'onSplitMouseUp',e);
				},
				'contextmenu' : function(e){	
					callBack.call(this,'onSplitContextMenu',e);
				}
			};
			var callBack2 = function(type,e){
				var target = e.srcElement ? e.srcElement : e.target;
				if( !$(target).hasClass('nex-layout-split-i') ) return;
				var r = self.fireEvent(type,[ this,region,e ]);
				if( r === false ) return r;
				var r = self.fireEvent(type.replace('SplitBtn',self._toUpperCase(region)+'SplitBtn'),[ this,region,e ]);
				if( r === false ) return r;
				
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
				
			};
			var events2 = {
				'click' : function(e) {
					callBack2.call(this,'onSplitBtnClick',e);
				},
				'dblclick' : function(e) {
					callBack2.call(this,'onSplitBtnDblClick',e);
				},
				'keydown' : function(e) {
					callBack2.call(this,'onSplitBtnKeyDown',e);
				},
				'keyup' : function(e) {
					callBack2.call(this,'onSplitBtnKeyUp',e);
				},
				'keypress' : function(e){
					callBack2.call(this,'onSplitBtnKeyPress',e);
				},
				'mouseover' : function(e){
					callBack2.call(this,'onSplitBtnMouseOver',e);
				},
				'mouseout' : function(e){
					callBack2.call(this,'onSplitBtnMouseOut',e);
				},
				'mousedown' : function(e) {
					callBack2.call(this,'onSplitBtnMouseDown',e);
				},
				'mouseup' : function(e) {
					callBack2.call(this,'onSplitBtnMouseUp',e);
				},
				'contextmenu' : function(e){	
					callBack2.call(this,'onSplitBtnContextMenu',e);
				}
			};
			$split.bind(events);
			$split_i.bind(events2);
		},
		getRegion : function(region){
			var self = this;
			var opt = self.C();
			var $region = $("#"+opt.id+'_'+region);
			if( $region.size() ) {
				return  $region;	
			}
			return false;
		},
		getRegionBody : function(region){
			var self = this;
			var opt = self.C();
			var $region = $("#"+opt.id+'_'+region+'_body');
			if( $region.size() ) {
				return  $region;	
			}
			return false;
		},
		//设置 标题,collapsible宽度
		setExpandSize : function(region){
			var self = this;
			var opt = self.configs;	
			var $region = $("#"+opt.id+'_'+region);
			var h = 0;
			$(">div:not(div.nex-layout-body)",$region).each(function(){
				h += $(this)._outerHeight();												 
			});
			
			$("#"+opt.id+'_'+region+'_body')._outerWidth( $region._width() );
			$("#"+opt.id+'_'+region+'_body')._outerHeight( $region._height()-h );

		},
		getRegionSize : function(region,mod){
			var self = this;
			var opt = self.configs;
			
			var mod = self._undef( mod,true );
			
			var $region = opt[region].isClosed ? false : $("#"+opt.id+'_'+region);
			var size = 0;
			
			var $split = opt[region]['split'] ? $("#"+opt.id+'_'+region+'_split') : false;
			
			if( Nex.inArray( region,['north','south'] ) != -1 ) {
				size += $region ? $region._outerHeight() : 0;
				size += $split ? $split._outerHeight() : 0;
			} else if( Nex.inArray( region,['west','east'] ) != -1 ) {
				size += $region ? $region._outerWidth() : 0;
				size += $split ? $split._outerWidth() : 0;	
			}
			return size;
		},
		//设置region的大小 初始设置必须先设置 north,south 然后再设置 west,east
		setRegionSize : function(region,size,b){
			var self = this;
			var opt = self.configs;
			
			var b = self._undef( b,false );
			
			if( Nex.inArray( region,opt.layouts ) == -1 ) { 
				return self; 
			}
			
			var r = self.fireEvent('onBeforeRegionSizeChange',[region]);
			if( r===false ) return r;
			//var r = self.fireEvent('onBefore'+self._toUpperCase(region)+'SizeChange',[region]);
			//if( r===false ) return r;
			
			var layoutW = self.getBodyWidth();
			var layoutH = self.getBodyHeight();
			
			var isChange = false;
			
			if( Nex.inArray( region,['north','south'] ) != -1 ) {
				
				if( typeof size != 'undefined' ) {
					if( size == opt[region].height ) return false;
				}
				
				var size = size || opt[region].height;
				
				if( opt[region].minSize>0 ) {
					size = Math.max(size,opt[region].minSize);
				}
				if( opt[region].maxSize>0 ) {
					size = Math.min(size,opt[region].maxSize);
				}
				
				if( size != opt[region].height ) {
					isChange = true;
				}
				
				opt[region].height = size;
				var $region = $("#"+opt.id+'_'+region);
				$region._outerWidth( layoutW );
				$region._outerHeight( size );
				
				if( opt[region]['split'] ) {
					var $split = $("#"+opt.id+'_'+region+'_split');
					$split._outerWidth( layoutW );
					$split._outerHeight( opt[region]['splitSize'] );
				}
				
			} else if( Nex.inArray( region,['west','east'] ) != -1 ) {
				
				if( typeof size != 'undefined' ) {
					if( size == opt[region].width ) return false;
				}
				
				var size = size || opt[region].width;
				
				if( opt[region].minSize>0 ) {
					size = Math.max(size,opt[region].minSize);
				}
				if( opt[region].maxSize>0 ) {
					size = Math.min(size,opt[region].maxSize);
				}
				
				if( size != opt[region].width ) {
					isChange = true;
				}
				
				opt[region].width = size;
				var $region = $("#"+opt.id+'_'+region);
				
				var height = layoutH - self.getRegionSize('north',!b) - self.getRegionSize('south',!b);
				
				$region._outerHeight( height );
				$region._outerWidth( size );
				
				if( opt[region]['split'] ) {
					var $split = $("#"+opt.id+'_'+region+'_split');
					$split._outerWidth( opt[region]['splitSize'] );
					$split._outerHeight( height );
				}
				
			} else {//center
				region = 'center';
				var $region = $("#"+opt.id+'_'+region);	
				var w = $region.width();
				var h = $region.height();
				$region._outerWidth( layoutW-self.getRegionSize('west')-self.getRegionSize('east') );
				$region._outerHeight( layoutH-self.getRegionSize('north')-self.getRegionSize('south') );
				var _w = $region.width();
				var _h = $region.height();
				if( w != _w || h != _h ) {
					isChange = true;	
				}
			}
			
			self.setExpandSize(region);
			
			if(  isChange ) {
				self.fireEvent('onRegionSizeChange',[region]);
				//self.fireEvent('on'+self._toUpperCase(region)+'SizeChange',[opt]);
			}
			return true;
		},
		setRegionPos : function(region,mod){//mod  false 只设置split bar的位置 不设置region的
			var self = this;
			var opt = self.configs;
			if( Nex.inArray( region,opt.layouts ) == -1 ) { 
				return self; 
			}
			
			var r = self.fireEvent('onBeforeRegionPositionChange',[region]);
			if( r===false ) return r;
			
			var mod = self._undef( mod,true );
			
			var layoutW = self.getBodyWidth();
			var layoutH = self.getBodyHeight();
			
			if( Nex.inArray( region,['north','south'] ) != -1 ) {
				
				var left = 0,top = 0;
				
				var $region = $("#"+opt.id+'_'+region);
				
				var h=$region._outerHeight();
				
				var $region_h = opt[region].isClosed ?  0 :h ;
				
				var $split = opt[region]['split'] ? $("#"+opt.id+'_'+region+'_split') : false;
				
				if( region == 'north' ) {
					top = opt[region].isClosed ? -h : 0;
					if( mod ) {
						$region.css({
							left : left,
							top :　top,
							position : 'absolute'
						});	
					}
					if( $split ) {
						$split.css({
							left : left,
							top :　$region_h,
							position : 'absolute'
						});		
					}
				} else if( region == 'south' ) {
					top = opt[region].isClosed ? layoutH : layoutH - self.getRegionSize('south') + ($split?$split._outerHeight():0);
					if( $split ) {
						$split.css({
							left : left,
							top :　layoutH - self.getRegionSize('south'),
							position : 'absolute'
						});		
					}
					if( mod ) {
						$region.css({
							left : left,
							top :　top,
							position : 'absolute'
						});	
					}
				}
			} else if( Nex.inArray( region,['west','east'] ) != -1 ) {
				var left = 0,top = 0;
				
				var $region = $("#"+opt.id+'_'+region);
				
				var w = $region._outerWidth();
				
				var $region_w = opt[region].isClosed ? 0 : w;
				
				var $split = opt[region]['split'] ? $("#"+opt.id+'_'+region+'_split') : false;
				
				if( region == 'west' ) {
					left = opt[region].isClosed ? -w : 0;
					if( mod ) {
						$region.css({
							left : left,
							top :　self.getRegionSize('north'),
							position : 'absolute'
						});	
					}
					if( $split ) {
						$split.css({
							left : $region_w,
							top :　self.getRegionSize('north'),
							position : 'absolute'
						});		
					}
				} else if( region == 'east' ) {
					left = opt[region].isClosed ? layoutW : layoutW - self.getRegionSize('east') + ($split?$split._outerWidth():0);
					if( $split ) {
						$split.css({
							left :　layoutW - self.getRegionSize('east'),
							top :　self.getRegionSize('north'),
							position : 'absolute'
						});	
					}
					if( mod ) {
						$region.css({
							left :　left,
							top :　self.getRegionSize('north'),
							position : 'absolute'
						});	
					}
				}
			} else { //center
				region = 'center';
				var left = 0,top = 0;
				var $region = $("#"+opt.id+'_'+region);
				$region.css({
					left :　self.getRegionSize('west'),
					top :　self.getRegionSize('north'),
					position : 'absolute'
				});
			}
			self.fireEvent('onRegionPositionChange',[region]);
			return self
		},
		openRegion : function( region ){
			var self = this,undef;
			var opt = self.configs;
			
			if( region == 'center' ) {
				return self;	
			}
			
			var r = self.fireEvent('onBeforeOpenRegion',[region]);
			if( r === false ) return r;
			var r = self.fireEvent('onBefore'+ self._toUpperCase(region) +'Open',[]);
			if( r === false ) return r;
			
			var openCallBack = function(){
				self.refresh();
				self.fireEvent('onOpenRegion',[region]);	
				self.fireEvent('on'+ self._toUpperCase(region) +'Open',[]);
				//设置split bar css
				$("#"+opt.id+"_"+region+"_split").removeClass("nex-layout-split-closed nex-layout-"+region+"-split-closed");
			}
			
			opt[region]['isClosed'] = false;
			
			var layoutW = self.getBodyWidth();
			var layoutH = self.getBodyHeight();
			
			var $region = $("#"+opt.id+'_'+region);
			switch( region ) {
				case 'north' :
					$region.animate({
						top : 0			 
					},opt.closeTime,opt.easing,function(){
						openCallBack();
					});
					break;
				case 'south':
					$region.animate({
						top : layoutH-$region._outerHeight()				 
					},opt.closeTime,opt.easing,function(){
						openCallBack();
					});
					break;
				case 'west' :
					$region.animate({
						left : 0				 
					},opt.closeTime,opt.easing,function(){
						openCallBack();
					});
					break;
				case 'east':
					$region.animate({
						left : layoutW-$region._outerWidth()				 
					},opt.closeTime,opt.easing,function(){
						openCallBack();
					});
					break;
			}
		},
		closeRegion : function( region ){
			var self = this,undef;
			var opt = self.configs;
			
			if( region == 'center' ) {
				return self;	
			}
			
			var r = self.fireEvent('onBeforeCloseRegion',[region]);
			if( r === false ) return r;
			var r = self.fireEvent('onBefore'+ self._toUpperCase(region) +'Close',[]);
			if( r === false ) return r;
			
			var closeCallBack = function(){
				self.fireEvent('onCloseRegion',[region]);	
				self.fireEvent('on'+ self._toUpperCase(region) +'Close',[]);
				//设置split bar css
				$("#"+opt.id+"_"+region+"_split").addClass("nex-layout-split-closed nex-layout-"+region+"-split-closed");
			}
			
			opt[region]['isClosed'] = true;
			
			var layoutW = self.getBodyWidth();
			var layoutH = self.getBodyHeight();
			//剔除当前正关闭的region
			var regions =['north','south','west','east','center'];
			var pos = Nex.inArray( region,regions );
			if( pos !== -1 ) {
				regions.splice(pos,1);
			}
			
			self.refresh(regions);
			//只设置当前正在关闭的split bar
			self.setRegionPos(region,false);
			
			var $region = $("#"+opt.id+'_'+region);
			switch( region ) {
				case 'north' :
					$region.animate({
						top : -$region._outerHeight()				 
					},opt.closeTime,opt.easing,function(){
						closeCallBack();
					});
					break;
				case 'south':
					$region.animate({
						top : layoutH	 
					},opt.closeTime,opt.easing,function(){
						closeCallBack();
					});
					break;
				case 'west' :
					$region.animate({
						left : -$region._outerWidth()				 
					},opt.closeTime,opt.easing,function(){
						closeCallBack();
					});
					break;
				case 'east':
					$region.animate({
						left : layoutW		 
					},opt.closeTime,opt.easing,function(){
						closeCallBack();
					});
					break;
			}
			//self.fireEvent('onRegionSizeChange',[region]);
		},
		addRegionContent : function(region,lbody){
			var self = this;
			var opt = self.C();	
			var lbody = lbody || $('#'+opt.id+'_'+region+'_body');
			//因为创建后立马写入内容，宽高都没设置，放到回调里
			var items = opt[region]['html'];
			self.addComponent( lbody,items );
			var items = opt[region]['items'];
			self.addComponent( lbody,items );
		},
		_createRegion : function( region ){
			var self = this;
			var opt = self.configs;
			
			if( $("#"+opt.id+'_'+region).size() ) {
				return false;	
			}
			
			var container = $("#"+opt.id+'_container');
			
			if( region =='center' ) {
				var ln = $('<div class="nex-layout-panel nex-layout-'+region+'" id="'+opt.id+'_'+region+'"></div>');
				container.append(ln);	
				
			} else {
				var ln = $('<div class="nex-layout-panel nex-layout-'+region+'" id="'+opt.id+'_'+region+'"></div>');
				container.append(ln);
				if( opt[region]['split'] ) {
					var lns = $('<div class="nex-layout-panel nex-layout-split nex-layout-'+region+'-split" id="'+opt.id+'_'+region+'_split"></div>');
					if( opt[region]['splitBtn'] ) {
						lns.append($('<a href="javascript:void(0)" class="nex-layout-split-i nex-layout-'+region+'-split-i"></a>'));
					}
					container.append(lns);
				}
			}
			var lbody = $('<div class="nex-layout-body '+( opt[region]['autoScroll'] ? opt.autoScrollRegionCls : '' )+' nex-layout-'+region+'-body '+opt[region]['cls']+'"  id="'+opt.id+'_'+region+'_body"></div>');
			
			lbody[0].style.cssText = opt[region]['cssText'];
			
			if( opt[region]['padding'] ) {
				lbody.css('padding',opt[region]['padding'])	;
			}
			lbody.attr(opt[region]['attrs']).css(opt[region]['style']);
			
			ln.append(lbody);
			
			if( opt[region]['border'] ) {
				ln.addClass( opt.borderRegionCls );	
				ln.addClass( opt[region]['borderCls'] );	
			}
			
			if( !opt.selectionable ) {	
				ln.disableSelection();	
			}
			
			return lbody;
		},
		_refresh : function(regions){
			var self = this;
			var opt = self.C();
			regions = regions || ['north','south','west','east','center'];
			for( var x=0;x<regions.length;x++ ) {
				self.setRegionSize( regions[x] );
				self.setRegionPos( regions[x]);	
			}
		},
		/*
		*更新region的大小以及位置 @regions需要更新的regions Array , @m 是否更新后触发onResize事件 默认 true , false不触发
		*/
		refresh : function( regions,m ){
			var self = this;
			var opt = self.configs;	
			var m = self._undef( m,true );
			var regions =regions || ['north','south','west','east','center'];
			
			self._refresh(regions);

			if( Nex.ComponentManager && m ) {
				if( opt.__onresize ) {
					clearTimeout( opt.__onresize );	
				}
				opt.__onresize = setTimeout(function(){
					Nex.ComponentManager.fireEvent("onResize",[opt.id]);		
				},0);
			}	
			
		},
		updateRegionSize : function( region,size ){
			var self = this;
			var opt = self.configs;	
			var r = self.setRegionSize( region,size );
			if( r === false ) return r;
			self.refresh();
		},
		/*
		*继承浏览器大小改变时 会调用
		*/
		doSetViewSize : function(w,h){
			var self = this,
				opt = self.configs,
				container = self.getContainer(),
				vbody = self.getBody();
				
			self.callParent(arguments);	
			
			vbody._outerWidth( container._width() );
			vbody._outerHeight( container._height() );
			
			!self.isInit() && self._refresh();
		},
		//首字母大写
		_toUpperCase : function(str){
				return str.replace(/\s[a-z]/g,function($1){return $1.toLocaleUpperCase()}).replace(/^[a-z]/,function($1){return $1.toLocaleUpperCase()});	
		},
		removeRegion : function(region){
			var self = this;
			var opt = self.C();
			var pos = Nex.inArray( region,opt.layouts );
			if( pos == -1 ) return true;
			
			var r = self.fireEvent('onBeforeRegionRemove',[region]);
			if( r === false ) return r;
			var r = self.fireEvent('onBefore'+_toUpperCase(region)+'Remove',[region]);
			if( r === false ) return r;
			
			var _toUpperCase = self._toUpperCase;
			
			opt.layouts.splice(pos,1);
			$("#"+opt.id+'_'+region).remove();
			$("#"+opt.id+'_'+region+'_split').remove();
			self.refresh();
			self.fireEvent('onRegionRemove',[region]);
			self.fireEvent('on'+_toUpperCase(region)+'Remove',[region]);
			
			return true;
		},
		createRegion : function( region,d ){
			var self = this;
			var opt = self.configs;
			var d = self._undef(d,{});
			
			var r = self.fireEvent('onBeforeRegionCreate',[region]);
			if( r === false ) return r;
			var r = self.fireEvent('onBefore'+_toUpperCase(region)+'Create',[region]);
			if( r === false ) return r;
			
			var _toUpperCase = self._toUpperCase;
			var $region = $("#"+opt.id+'_'+region);
			if( !$region.size() ) {
				opt.layouts.push( region );
				//添加数据
				$.extend(opt[region],d);
				
				var lbody = self._createRegion( region );
				//self.setRegionSize( region );	
				//self.setRegionPos( region  );	
				
				self.fireEvent('onRegionCreate',[region,lbody]);
				self.fireEvent('on'+_toUpperCase(region)+'Create',[lbody]);
				
				self.refresh();	
				//填入内容
				self.addRegionContent(region,lbody);
			}
			
			return true;
		},
		/*
		*初始化布局
		*/
		_createLayouts : function(){
			var self = this;
			var opt = self.configs;
			
			if( opt.isCreate ) return;
			
			opt.layouts.push('center');
			
			var _l = ['north','south','west','east','center'];
			var _lbody = {};
			//初始化region和大小以及位置
			for( var i=0;i<_l.length;i++ ) {
				if( Nex.inArray( _l[i],opt.layouts ) == -1 ) continue;
				var _lb = self._createRegion( _l[i] );	
				_lbody[ _l[i] ] = _lb;
				//初始化设置大小和位置 可以加isClosed = true的时候 才执行下面
				//layout 不占用太多性能 可不考虑
				self.denyEventInvoke( 'setRegionSize',_l[i] );
				self.denyEventInvoke( 'setRegionPos',_l[i] );	
			}
			
			for( var i=0;i<opt.layouts.length;i++ ) {
				self.fireEvent('onRegionCreate',[opt.layouts[i],_lbody[ opt.layouts[i] ]]);
				self.fireEvent('on'+self._toUpperCase(opt.layouts[i])+'Create',[_lbody[ opt.layouts[i] ]]);
			}
			//初始化创建时 不应该触发regionResize事件
			self.denyEventInvoke( '_refresh' );
			//self._refresh();	
			
			for( var i=0;i<_l.length;i++ ) {	
				self.addRegionContent(_l[i],_lbody[ _l[i] ]);
			}
			opt.isCreate = true;
		},
		_insert : function( item , after , region ){
			var self = this;
			var opt = self.C();	
			var region = self._undef( region,'center' );
			var lbody = self.getRegionBody(region);
			if( !lbody ) return self;
			var list = self.addComponent( lbody,item,after );
			
			return list;
		},
		_empty : function( region ){
			var self = this;
			var opt = self.C();	
			var lbody = self.getRegionBody( region || 'center' );	
			if( !lbody ) return self;
			
			lbody.empty();
			
			var ls = Nex.ComponentManager._getDomComps( lbody );
			$.each( ls,function(i,cmp){
				cmp.removeCmp();	
			} );
			
			return self;
		}
	});
	
	return layout;
});
/*
jquery.nexMenu.js
http://www.extgrid.com/menu
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱
*/
/*
* 注： IE6下有时append 都会触发resize...
*/
define('Nex/menu/Menu',['require','Nex','Nex/showat/ShowAt'],function(require){
	require('Nex');	
	require('Nex/showat/ShowAt');

	var menu = Nex.define('Nex.menu.Menu','Nex.Component',{
		alias : 'Nex.Menu',
		xtype : 'menu',
		configs : function(){
			return {
				prefix : 'nexmenu-',
				renderTo : document.body,
				denyManager : true,
				disabledItems : true,
				width : 0,
				height : 0,
				maxWidth : 0,
				minWidth : 0,
				minHeight : 0,
				maxHeight : 0,
				parent : null,//设置menu绑定的父组件，如果父组件释放，则当前menu也会销毁
				items : [],
				//item可能出现的值
				_item : {
					cls : '',
					icon : '',
					iconCls: '',
					arrow : '',//arrow 图片地址
					arrowCls : '',
					id :　'',
					text : '',
					'open' : '',
					_level : '',
					pid : '',
					items : '',
					disabled : '',
					width : '',
					height : '',
					callBack:null,//return false会阻止事件冒泡
					callback : null,
					hideOnClick:true, //点击后会关闭菜单列表
					subCls : '',//subMenu样式
					isCmp : false// 如果设为 true 则会把items当作组件来创建
				},
				itemDefault : {},
				itemTpl : '<div id="<%=menuId%>_<%=itemId%>_item" <%=tips%> menuid="<%=itemId%>" class="nex-menu-item <%=cls%>">'
						+ '<%'
						+ '    if( showMenuIcon ) {'
						+ '        if( icon ) {'
						+ '            icon = "background-image:url("+icon+")";'
						+ '        }'
						+ '%>'
						+ '    <span class="nex-menu-icon <%=iconCls%>" style="<%=icon%>"></span>'
						+ '<%'
						+ '    }'
						+ '%>'
						+ '    <span class="nex-menu-title"><%=text%></span>'
						+ '<%'
						+ '    if( !isLeaf ) {'
						+ '        if( arrow ) {'
						+ '            arrow = "background-image:url("+arrow+")";'
						+ '        }'
						+ '%>    '
						+ '    <span class="nex-menu-arrow <%=arrowCls%>" style="<%=arrow%>"></span>'
						+ '<%'
						+ '    }'
						+ '%>    '
						+ '</div>',
				splitLineTpl : '<div class="nex-menu-item-separator"><div class="nex-menu-line-h"></div></div>',
				itemTips : false,//下拉列表是否这种tips字段
				itemTipsTag : 'title',
				itemTipsFilter : null,//function	
				itemFilter : null,	
				itemFormat : null,
				splitChr : ['-',',',';','|'],
				cls : '',//所有menu的样式
				style : {},//同上
				padding : null,//同上
				delay : 0,//延迟毫秒数 ms
				//IEVer : Nex.IEVer,
				border :　false,
				borderCls : 'nex-menu-border',
				showShadow : true,
				shadowWidth : 5,
				hideToRemove : true,
				showMenuVLine : true,//显示节点线条
				showMenuIcon : true,//显示节点图标
				showMenuMore : true,//如果列表过多 显示上下 btn
				upBtnCls : '',
				downBtnCls : '',
				_speedTime : 10,
				_speedNum : 5,
				_data : {},
				_childrens : {},
				_levelData : {},//level=>[]
				_firstNodes : {},// 0:node1,1:node2 k=>v k表示第几级
				_lastNodes : {},// 0:node1,1:node2 k=>v k表示第几级
				hideOnClick : true,
				hideOnBlur  : true, //点击其他区域时 关闭menu
				expandOnEvent : 0,//0 mousover 1 click  -1 不显示子菜单
				simpleData : false,
				root : '0',//simpleData下可不用设置且只在初始化时有效，初始化后会用showRowId代替
				showRootId : '0',//请设置对应的顶层ID 非simpleData下可不用设置
				iconField : 'icon',//图标字段 样式
				iconClsField : 'iconCls',//图标字段 样式
				idField : 'id',
				textField : 'text',
				openField : 'open',
				levelField : '_level',
				parentField : 'pid',
				sortField : 'order',
				childField : 'items',
				disabledField : 'disabled',
				groupNode : false,//开启后会对叶子和节点进行分类
				autoShow  : false,
				showAt : {},//根菜单显示配置
				subShowAt : {},//子菜单显示配置
				_showAt : {xAlign:'right',yAlign:'bottom',zAlign:'x'},//通用配置
				events : {}
			};	
		}		
	});
	
	menu.override({
		initContainer : function(){},
		initRenderTpl : function(){},
		setSize : function(){},
		initComponent : function(opt) {
			var self = this;
			var cls = opt.cls.split(/\s+/);
			Nex.array_splice( function(i,v){
				if( v == 'nex-component-item' ) {
					return true;	
				}
			},cls );
			opt.cls = cls.join(' ');
			//_mapTree
			opt.items = Nex.isArray( opt.items ) ? [].concat(opt.items) : [opt.items];
			
			self._parseMenuData(opt.items);
			
			self._bindDestroyOnParent();
			if( opt.autoShow ) {
				self.show();
			}
			///self.fireEvent('onCreate',[opt]);
		},
		_bindDestroyOnParent : function(){
			var self = this;
			var opt = self.configs;
			if( !opt.parent ) return;
			var p = opt.parent;
			if( !Nex.isInstance( p ) ) {
				p = Nex.get( p );
			} else {
				opt.parent = p.configs.id;	
			}	
			if( !p ) return;
			p.one('onDestroy._'+opt.id,function(){
				self.destroyMenu();	
				self.destroy();
			});
		},
	/*	sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			return self;
		},*/
		_clickItem : function(li,tid,node,e){
			var self = this,
				opt=this.configs;
			
			if( node[opt.disabledField] ) {
				return;
			}
			var r;
			if( $.isFunction( node['callBack'] ) ) {
				r = node['callBack'].apply(opt.context || self,[li,tid,node,e,opt]);
				if( r === false ) return false;
			}
			if( $.isFunction( node['callback'] ) ) {
				r = node['callback'].apply(opt.context || self,[li,tid,node,e,opt]);
				if( r === false ) return false;
			}
			var hide = self._undef( node['hideOnClick'], opt.hideOnClick );
			if( !hide ) {
				return;	
			}
			if( self.isLeaf( tid ) && opt.hideOnClick ) {
				self.hideRoot();
			}
		},
		_setOverCls : function(li,tid,node,e){
			var self = this,
				opt=this.configs;
			if( node[opt.disabledField] ) {
				return;	
			}
			$(li).addClass("nex-menu-item-over");
		},
		_unsetOverCls : function(li,tid,node,e){
			var self = this,
				opt=this.configs,
				undef;
			if( node[opt.disabledField] ) {
				return;	
			}
			$(li).removeClass("nex-menu-item-over");	
		},
		_t_delay : 0,
		_displayMenu : function(el,tid,node,e){
			var self = this,
				opt=this.configs,
				undef;
				
			if( self._t_delay ) {
				clearTimeout( self._t_delay );
				self._t_delay = 0;
			}	
			
			if( $(el).hasClass('nex-menu-item-active') ) {
				return;	
			}
			
			if( opt.delay>0 ) {
				self._t_delay = setTimeout(function(){
					self.showSubMenu( tid );
				},opt.delay);	
			} else {
				self.showSubMenu( tid );
			}
		},
		_getNode : function(tid,pro){
			var self = this,
				opt=this.configs,
				undef;	
			//var node = opt._data[ opt._tfix+tid ];
			var node = opt._data[ tid ];
			
			if( node === undef ) {
				return false;	
			}
	
			return pro===undef ? node : node[pro];
		},
		getNode : function(){
			return this._getNode.apply( this,arguments );	
		},
		_getParentID : function(tid){
			var self = this,
				opt=this.configs,
				undef;	
			var pid = 	self._getNode(tid,opt.parentField);
			return pid === opt.root ? opt.root : 	pid;
		},
		_parseSimpleData : function(data,pid){
			var self = this,
				opt=this.configs;	
			var undef;
			var _ids = {};
			for( var i=0;i<data.length;i++ ) {
				var node = data[i];
				
				if( Nex.inArray( node,opt.splitChr ) !== -1 ) {
					node = {
						splitLine : true
					};	
				}
				
				node = $.extend({},opt.itemDefault,node);
				
				if( node[opt.parentField] === undef ) {
					node[opt.parentField] = pid === undef ? opt.root : pid;
					node[opt.levelField] = pid === undef ? 0 : self._getNode(pid,opt.levelField)+1;
				} else {
					node[opt.levelField] = 	self._getNode(node[opt.parentField],opt.levelField)+1;
				}
				if( !(opt.idField in node) ) {
					node[opt.idField] = 'menu_'+Nex.uuid();	
				} else{
					if(node[opt.idField].toString().length<=0) {
						node[opt.idField] = 'menu_'+Nex.uuid();		
					}
				}
				
				opt._data[ node[opt.idField] ] = node; 
				
				var _pid = node[opt.parentField];
				opt._childrens[ _pid ] = opt._childrens[ _pid ] === undef ? [] : opt._childrens[ _pid ];
				var childs = opt._childrens[ _pid ];
				childs.push(node);
				//levelData
				var _lv = node[opt.levelField];
				opt._levelData[ _lv ] = opt._levelData[ _lv ] === undef ? [] : opt._levelData[ _lv ];
				var levels = opt._levelData[ _lv ];
				levels.push(node);
				
				_ids[_pid] = true;
				
			}	

			for( var nid in _ids ) {
				//self.groupNodes( nid );
				self.updateLastNodes( nid );
			}
		},
		//解析数据 _mapTree
		_parseMenuData : function(data,pid){
			var self = this,
				opt=this.configs;	
			var undef;
			if( opt.simpleData ) {
				self._parseSimpleData(data,pid);
				return self;
			}
			for( var i=0;i<data.length;i++ ) {
				var node = data[i];
				
				if( Nex.inArray( node,opt.splitChr ) !== -1 ) {
					node = {
						splitLine : true
					};	
				}
				
				node = $.extend({},opt.itemDefault,node);
				
				node[opt.levelField] = pid === undef ? 0 : self._getNode(pid,opt.levelField)+1;
				node[opt.parentField] = pid === undef ? opt.root : pid;
				
				if( !(opt.idField in node) ) {
					node[opt.idField] = 'menu_'+Nex.uuid();	
				}
				
				opt._data[ node[opt.idField] ] = node; 
				
				var _pid = node[opt.parentField];
				opt._childrens[ _pid ] = opt._childrens[ _pid ] === undef ? [] : opt._childrens[ _pid ];
				var childs = opt._childrens[ _pid ];
				childs.push(node);
				//levelData
				var _lv = node[opt.levelField];
				opt._levelData[ _lv ] = opt._levelData[ _lv ] === undef ? [] : opt._levelData[ _lv ];
				var levels = opt._levelData[ _lv ];
				levels.push(node);
				
				if( ( opt.childField in node ) && $.isArray( node[opt.childField] ) && node[opt.childField].length ) {
					self._parseMenuData(node[opt.childField],node[opt.idField]);
				}
				
				if( (i+1) === data.length ) {
					self.updateLastNodes( _pid );
				}
				
			}	
			return self;
		},
		/*
		*更新 第一个节点和最后一个节点的索引
		*/
		updateLastNodes : function(pid){
			var self = this,
				opt=this.configs,
				undef;
			var pid = pid === undef ? opt.root : pid;	
			var chlids = opt._childrens[pid];
			if( chlids.length ) {
				opt._firstNodes[pid] = chlids[0];
				opt._lastNodes[pid] = chlids[chlids.length-1];
			}
		},
		_clearParseCache : function(){
			var self = this,
				opt=this.configs;	
			opt._childrens = {};	
			opt._data = {};
			opt._childrens = {};
			opt._levelData = {};
			opt._firstNodes = {};
			opt._lastNodes = {};
			return this;
		},
		//重新设置items
		setItems : function( items ){
			this.destroyMenu();
			this._clearParseCache();
			this._parseMenuData( items );
			return this;	
		},
		addChildren : function(tid,data){
			var self = this,
				opt=this.configs,
				undef;	
			var d = !$.isArray( data ) ? [data] : data;	
			self._parseMenuData(d,tid);
			return this;
		},
		addItems : function(){
			return this.addChildren.apply(this,arguments)	
		},
		resetMenuList : function( tid ){
			var menu = this.getMenuItem( tid );
			if( menu.length ) {
				menu.remove();	
			}	
			return this;
		},
		isSplitLine : function( node ){
			var self = this
				,opt=this.configs
				,undef;	
			if( node.splitLine ) return true;
			return false;
		},
		isLeaf : function(node){
			var self = this
				,opt=this.configs
				,undef;
			if( node === opt.root ) return false;
			var tnode = $.isPlainObject(node) ? node : self._getNode(node);
			if( tnode === false && !self._isRoot(node) ) return true;
			if( self._isRoot(node) ) return false;
			if( tnode.leaf === undef ) {
				//判断isCmp
				if( tnode['isCmp'] && tnode[opt.childField] ) {
					return false;	
				}
				var tid = tnode[opt.idField];
				var childrens = self.getChildrens(tid);
				if( childrens.length ) {
					return false;	
				}
				if( (opt.childField in tnode) && tnode[opt.childField].length ) {
					return false;	
				}
				return true;	
			} else {
				return !!tnode.leaf;	
			}
		},
		getAllChildrens : function(pid) {
			var self = this
				,opt=this.configs
				,undef;
			var childs = [];
			var pid = self._undef(pid,opt.root);
			var getChilds = function(pid){
				var _childs = self.getChildrens(pid);
				if( _childs.length ) {
					childs = childs.concat(_childs);
					for( var i=0;i<_childs.length;i++ ) {
						getChilds(_childs[i][opt.idField]);
					}
				}
			}
			getChilds(pid);
			return childs;
		},
		/*
		*获取子级
		*/
		getChildrens : function(pid){
			var self = this
				,opt=this.configs
				,undef;
			
			var pid = pid === undef ? opt.root : pid;
			
			return opt._childrens[pid] === undef ? [] : opt._childrens[pid];
		},
		//没有用到
		_getParentsList : function(tid){
			var self = this
				,opt=this.configs
				,root=opt.root
				,pids = [];
			var node = $.isPlainObject(tid) ? tid : self._getNode(tid);	
			if( node===false ) return [];
			var id = node[opt.idField];
			var pid = self._getParentID(id);
			while( 1 ) {
				if( !(pid in opt._data) ) break;
				pids.push( pid );	
				pid = self._getParentID(pid);
				if( pid === opt.root ) break;
			}
			return pids.reverse();
		},
		//没有用到
		_isFirstNode : function(tid){
			var self = this
				,opt=this.configs;
			var _pid = self._getParentID(tid);
			return opt._firstNodes[_pid][opt.idField] === tid ? true : false;
		},
		//没有用到
		_isLastNode : function(tid){
			var self = this
				,opt=this.configs;
			var _pid = self._getParentID(tid);
			return opt._lastNodes[_pid][opt.idField] === tid ? true : false;
		},
		_getMenuItemTpl : function(tnode){
			var self = this
				,opt=this.configs
				,spacers = [];
				
			var node = $.isPlainObject(tnode) ? tnode : self._getNode(tnode);
			if( node===false ) return '';
			/*
			if( self.isSplitLine( node ) ) {
				return '<div class="nex-menu-item-separator"><div class="nex-menu-line-h"></div></div>';	
			}
			*/
			var tid = node[opt.idField];
				
			var menuID = [opt.id,'_',node[opt.idField]].join("");
			
			var _pid = self._getParentID(tid);
			var liCls='';
			if( opt._firstNodes[_pid][opt.idField] === tid ) {
				liCls = 'nex-menu-first';	
				if( opt._firstNodes[opt.root][opt.idField] === tid ) {
					liCls+=' nex-menu-first-all';
				}
			}
			if( opt._lastNodes[_pid][opt.idField] === tid ) {
				liCls = 'nex-menu-last';	
			}
			
			if( node[opt.disabledField] ) {
				liCls += ' nex-menu-item-disabled';		
			}
			
			if( node['cls'] ) {
				liCls += ' '+node['cls'];			
			}
			
			var d = {
				splitLine : node['splitLine'],
				menuId : opt.id,
				itemId : tid,
				showMenuIcon : opt.showMenuIcon,
				cls : liCls,
				iconCls : node[opt.iconClsField],
				icon : node[opt.iconField],
				arrow : node['arrow'],
				arrowCls : node['arrowCls'],
				text : node[opt.textField],
				isLeaf : self.isLeaf(tid),
				showTips : opt.itemTips,
				tips : ''
			};
			
			if( opt.itemTips ) {
				var attr_tips = [opt.itemTipsTag,'="',];
				var tips = self._undef( node['tips'], node[opt.textField] );
				if( $.isFunction( opt.itemTipsFilter ) ) {
					tips = 	opt.itemTipsFilter.call( self,tips,d );
				}
				if( tips ) {
					tips = Nex.htmlEncode( tips );	
				}
				d.tipsMsg = tips;
				d.tipsTag = opt.itemTipsTag;
				attr_tips.push(tips);
				attr_tips.push('"');
				d.tips = attr_tips.join('');
			}
			
			if( opt.itemFilter && $.isFunction( opt.itemFilter ) ) {
				var r = opt.itemFilter.call( self,d );
				if( r === false ) return '';
				if( r !== undef ) {
					d = r;//$.extend(d,r);	
				}
			}
			
			if( opt.itemFormat && $.isFunction( opt.itemFormat ) ) {
				d.text = opt.itemFormat.call( self,d.text,d ) || d.text;
			}
			
			var r = self.fireEvent('onBeforeCreateItem',[ tid,d,opt ]);
			if( r === false ) return '';
			
			var _itemTpl = '';
			if( self.isSplitLine( d ) ) {
				_itemTpl = self.tpl(opt.splitLineTpl,d);	
			} else {
				_itemTpl = self.tpl(opt.itemTpl,d);
			}
			
			var et = {
				itemId : tid,
				itemTpl : _itemTpl,
				itemData : d
			};
			
			self.fireEvent('onCreateItem',[ et,opt ]);
			
			return et.itemTpl;
		},
		_isRoot : function(tid){
			var opt=this.configs;	
			return (tid === opt.root) ? true : false;
		},
		_bindUpBtnEvent : function( up,menu ){ 
			var self = this
				,opt=this.configs;	
			var menu = menu || down.parent();	
			var wraper = $('>.nex-menu-items-wraper',menu);
			var down = $('>.nex-menu-down',menu);
			
			up.bind({
				mouseenter : function(){
					var i = parseInt(wraper.css( 'margin-top' )) || 0;
					var tid = $(this).attr('menuid');
					self.hideAllSubSubMenu( tid );
					down.show();
					if( opt._t_down ) {
						clearInterval( opt._t_down );		
					}
					opt._t_down = setInterval(function(){
													   
						i = i+opt._speedNum;
						i = Math.min(i,0);
						wraper.css({
							'margin-top' : i								  
						});		
						
						if( i>=0 ) {
							up.hide();
							clearInterval( opt._t_down );	
						}
						
					},opt._speedTime);	
				},
				mouseleave : function(){
					clearInterval( opt._t_down );	
				}		  
			});
			
			
		},
		_bindDownBtnEvent : function( down,menu ){ 
			var self = this
				,opt=this.configs;	
			var menu = menu || down.parent();	
			var up = $('>.nex-menu-up',menu);
			var wraper = $('>.nex-menu-items-wraper',menu);
			var h1 = $(menu).height(),
				h2 = wraper.outerHeight();
			var diff = h2 - h1;
			down.bind({
				mouseenter : function(){
					var i = -(parseInt(wraper.css( 'margin-top' )) || 0);
					var tid = $(this).attr('menuid');
					self.hideAllSubSubMenu( tid );
					up.show();
					if( opt._t_down ) {
						clearInterval( opt._t_down );		
					}
					opt._t_down = setInterval(function(){
													   
						i = i+opt._speedNum;
						i = Math.min(i,diff);
						wraper.css({
							'margin-top' : -i								  
						});		
						
						if( i>=diff ) {
							down.hide();
							clearInterval( opt._t_down );	
						}
						
					},opt._speedTime);	
				},
				mouseleave : function(){
					clearInterval( opt._t_down );	
				}		  
			});
			
			
		},
		_checkMenuHeight : function( tid,menu ){
			var self = this
				,opt=this.configs;	
			if( !menu ) return false;
			var h1 = $(menu).height(),
				wraper = $('>.nex-menu-items-wraper',menu),
				h2 = wraper.outerHeight();
				
			$('>.nex-menu-up,>.nex-menu-down',menu).remove();
			
			if( h2 <= h1 ) return false;
			var diff = h2 - h1;
			var sTop = parseInt(wraper.css('marginTop')) || 0;
			
			var up = $('<div class="nex-menu-up '+opt.upBtnCls+'" menuid="'+tid+'"></div>'),
				down = $('<div class="nex-menu-down '+opt.downBtnCls+'" menuid="'+tid+'"></div>');
			
			menu.append( up );	
			menu.append( down );
			
			wraper.css('marginTop',0);
			up.hide();
			down.show();
			
			self._bindUpBtnEvent(up,menu);
			self._bindDownBtnEvent(down,menu);
			
			self.fireEvent('onMenuScrollBtnCreate',[tid,up,down,opt]);
			
		},
		/*
		*事件绑定 注：并没有阻止事件冒泡
		*/
		_bindMenuEvent : function(menu){
			var self = this
				,opt=this.configs;	
			var menus = opt._data;
			var callBack = function(type,e,fn,def){
				var tid = $(this).attr('menuid');
				var node = self._getNode(tid);
				var r = true;
				if( (type in node) && $.isFunction(node[type]) ) {
					r = node[type].apply(self,[this,tid,menus[tid],e]);
				}
				if( r!==false ) {
					r = self.fireEvent(type,[ this,tid,menus[tid],e,opt ]);
				}
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				} else {
					if( fn ) {
						$.isFunction( fn ) ? fn.apply( self,[ this,tid,menus[tid],e ] ) : null;
					}
				}
				if( def ) {
					$.isFunction( def ) ? def.apply( self,[ this,tid,menus[tid],e ] ) : null;
				}
				return r;
			};
			var events = {
				'click._meun' : function(e) {
					callBack.call(this,'onClick',e,function(){
						if( opt.expandOnEvent == 1 ) {
							self._displayMenu.apply( self,arguments );	
						}		
					},self._clickItem);
				},
				'dblclick._meun' : function(e) {
					callBack.call(this,'onDblClick',e);
				},
				'keydown._meun' : function(e) {
					callBack.call(this,'onKeyDown',e);
				},
				'keyup._meun' : function(e) {
					callBack.call(this,'onKeyUp',e);
				},
				'keypress._meun' : function(e){
					callBack.call(this,'onKeyPress',e);
				},
				'mouseenter._meun' : function(e){
					callBack.call(this,'onMouseOver',e,function(){
						self._setOverCls.apply( self,arguments );	
						if( opt.expandOnEvent == 0 ) {
							self._displayMenu.apply( self,arguments );	
						}		
					});
				},
				'mouseleave._meun' : function(e){
					callBack.call(this,'onMouseOut',e,function(){
						self._unsetOverCls.apply( self,arguments );		
					});
				},
				'mousedown._meun' : function(e) {
					callBack.call(this,'onMouseDown',e);
				},
				'mouseup._meun' : function(e) {
					callBack.call(this,'onMouseUp',e);
				},
				'contextmenu._meun' : function(e){	
					callBack.call(this,'onContextMenu',e);
				}
			};
			
			menu.undelegate('>.nex-menu-item')
				.delegate('>.nex-menu-item',events);
			
			return self;
		},
		bindMenuEvent : function(menu){
			var opt=this.configs;	
			var returnfalse = function(e){
					return false;
				};
			$(menu).parent().bind({
				//'mousedown' : returnfalse,
				//'mouseover' : returnfalse,
				'contextmenu._menu' : returnfalse
				//click : returnfalse
			});
			//这里可以采用 事件委托的方式...
			this._bindMenuEvent(menu);	
			this.fireEvent('onBindMenuEvents',[ menu,opt ]);
			return this;
		},
		getRootMenu : function(){
			var opt=this.configs;	
			var id = [opt.id,'_',opt.root].join("");
			return $('#'+id);
		},
		getMenu : function( tid ){
			var opt=this.configs;	
			var id = [opt.id,'_',tid].join("");
			return $('#'+id);
		},
		getMenuShadow : function( tid ){
			var opt=this.configs;	
			var id = [opt.id,'_',tid,'_shadow'].join("");
			return $('#'+id);
		},
		getMenuWraper : function( tid ){
			var opt=this.configs;	
			var id = [opt.id,'_',tid,'_items_wraper'].join("");
			return $('#'+id);
		},
		getMenuBody : function( tid ){
			return this.getMenuWraper( tid );	
		},
		getMenuItem : function( tid ){
			var opt=this.configs;	
			var id = [opt.id,'_',tid,'_item'].join("");
			return $('#'+id);
		},
		/*
		*创建Menu
		*/
		_bulidMenu : function(tid){
			var self = this
				,opt=this.configs;	
			var tid = self._undef(tid,opt.root);
	
			var node = self._getNode(tid);
			
			var menuID = [opt.id,'_',tid].join("");
			var menu = $("#"+menuID);
			//var menu_wraper = $('#'+menuID+'_items_wraper');
			
			var _createMenu = function(){
				var childrens = self._undef(opt._childrens[ tid ],[]);;
				var menuCls = ['nex-menu'];
				if( opt.border ) {
					menuCls.push( opt.borderCls );	
				}
				menuCls.push( opt.cls );
				menuCls.push( node['subCls'] );
				
				Nex.topzIndex = Nex.topzIndex + 2;
				
				var menu = ['<div id="',menuID,'" menu-cmpid="'+opt.id+'" style="z-index:',Nex.topzIndex,'" class="',menuCls.join(' '),'">'];
				menu.push('<div class="nex-menu-items-wraper" id="'+menuID+'_items_wraper">')
				if( !node['isCmp'] ) {
					menu.push(opt.showMenuVLine ? '<div class="nex-menu-line-v"></div>' : '');
					for( var i=0;i<childrens.length;i++ ) {
						menu.push( self._getMenuItemTpl(childrens[i]) );
					}
				}
				menu.push('</div></div>');
				menu = $(menu.join(""));
				
				var render = $(opt.renderTo);
				render.append(menu);
				
				if( opt.padding ) {
					menu.css('padding',opt.padding);	
				}
				menu.css(opt.style);
				
				//isCmp
				if( node['isCmp'] && node[opt.childField] ) {
					var wraper = $('#'+menuID+'_items_wraper');	
					//wraper.empty();
					self.parseItems( wraper,node[opt.childField] );
				}
				
				return menu;
			};
			
			var _setMenuSize = function( menu ){
				var render = $(opt.renderTo);
				menu._removeStyle('width height');
				//menu_wraper._removeStyle('width height');
				var w = node['width'] || opt.width;
				var h = node['height'] || opt.height;
				w = $.isFunction( w ) ? w.call( self,tid ) : w;
				h = $.isFunction( h ) ? h.call( self,tid ) : h;
				
				w = w == 'auto' ? 0 : w;
				h = h == 'auto' ? 0 : h;
				
				//var _w = w,_h = h;
				
				var mh = render.is('body') ? $(window) : render;
				var maxWidth = $.isFunction(opt.maxWidth) ? opt.maxWidth.call( self,tid ) : opt.maxWidth,
					maxHeight = $.isFunction(opt.maxHeight) ? opt.maxHeight.call( self,tid ) : opt.maxHeight;
				var minWidth = $.isFunction(opt.minWidth) ? opt.minWidth.call( self,tid ) : opt.minWidth,
					minHeight = $.isFunction(opt.minHeight) ? opt.minHeight.call( self,tid ) : opt.minHeight;	
				//先设置宽度
				var width = w > 0 ? w : menu._outerWidth();
				var _w = width;
				if(!opt.maxWidth) {
					maxWidth = mh.width() - opt.shadowWidth;	
				}
				if( minWidth>0 ) {
					width = Math.max(width,minWidth);
				}
				if( maxWidth>0 ) {
					width = Math.min(width,maxWidth);
				}
				
				if( w>0 || _w != width ) {
					menu._outerWidth(width);
				}
				
				//在设置高度
				var height = h > 0 ? h : menu._outerHeight();
				var _h = height;
				if(!opt.maxHeight) {
					maxHeight = mh.height() - opt.shadowWidth;	
				}
				if( minHeight>0 ) {
					height = Math.max(height,minHeight);
				}
				if( maxHeight>0 ) {
					height = Math.min(height,maxHeight);
				}
			
				if( h>0 || _h != height ) {
					menu._outerHeight(height);
				}
					
			}
			
			if( !menu.length ) {
				menu = _createMenu();
				
				//menu_wraper = $('#'+menuID+'_items_wraper');
				
				menu.disableSelection();
				
				self.bindMenuEvent($('>.nex-menu-items-wraper',menu));
				
				self.fireEvent('onCreateMenu',[ menu,tid,opt ]);
				
			}
			menu.css( {
				left : -99999,
				top : -99999	
			} ).show();
			
			_setMenuSize( menu );
			
			if( !node['isCmp'] ) {
				if( opt.showMenuMore ) {
					self._checkMenuHeight( tid,menu );	
				}
			}
			
			return menu;
		},
		//hideOnBlur
		_createMenu : function(tid){
			var self = this
				,opt=this.configs
				,undef
				,pids = [];	
			if( tid === undef ) return false;
			
			var node = self._getNode(tid);
			if( node === false && !self._isRoot(tid) ) return false ;
			
			var menu = self._bulidMenu(tid);
			
			return menu;
		},
		_showMenu : function( tid ){
			var self = this
				,opt=this.configs
				,undef;	
			var tid = Nex.unDefined(tid, opt.root);		
			
			var r = self.fireEvent('onBeforeShowMenu',[tid,opt]);//CreateMenu
			if( r === false ) return false;
			
			//创建SubMenu
			var menu = self._createMenu(tid);
			
			if( menu ) {
				
				$("#"+opt.id+"_"+tid+"_item").addClass("nex-menu-item-active");
			
				self.fireEvent('onShowMenu',[tid,menu,opt]);
				
			}
			return menu;
		},
		_showRootMenu : function( pos, opts ){
			var self = this;
			var opt = this.configs;
			var menu = this._showMenu();	
			
			if( !menu ) return false;
			
			var pos = self._undef( pos,null );
			var showAtConf = self._undef( opts,{} );
			
			if( Nex.isArray( pos ) ) {
				pos = {
					left : pos[0],
					top  : pos[1]	
				}
			}
			
			var dpos = pos ? { at : pos } :　{};
			
			showAtConf = $.extend( {},$._isPlainObject(opt.showAt) ? opt.showAt : { at : opt.showAt }, dpos ,showAtConf );
			
			this._showAt( menu,null,showAtConf,0 );
			//setTimeout(function(){
			self.bindCloseEvents();	
			//},0);
			return true;	
		},
		showRootMenu : function( pos,opts ){
			var self = this,
				opt=this.configs;
				
			var r = self.fireEvent('onBeforeShowRootMenu',[ pos,opts,opt]);
			
			if( r === false ) return self;
			
			self._showRootMenu.apply( this,arguments );
			
			self.fireEvent('onShowRootMenu',[opt]);
			
			return self;
		},
		showRoot : function(){
			return this.showRootMenu.apply( this,arguments );
		},
		_showSubMenu : function( tid,opts ){//div,tid,node,e
			var self = this,
				opt=this.configs,
				undef;
			var isRoot = self._isRoot( tid );	
			var mitem = $('#'+opt.id+'_'+tid+'_item');	
			if( !isRoot && !mitem.length ) {
				return false;	
			}
			
			var showAtConf = self._undef( opts,{} );
			
			var menu = self._showMenu(tid);
			
			var pos = isRoot ? null : mitem;
			var _showAt = isRoot ? 
							$._isPlainObject(opt.showAt) ? opt.showAt : { at : opt.showAt }
							: $._isPlainObject(opt.subShowAt) ? opt.subShowAt : { at : opt.subShowAt };
			
			var dpos = pos ? { at : pos } : {};				
							
			showAtConf = $.extend( {},_showAt, dpos ,showAtConf );
			
			if( menu ) {
				self._showAt( menu,null,showAtConf,isRoot ? 0 : 1 );	
			} else {
				return false;	
			}
			return true;
		},
		showSubMenu : function( tid ){
			var self = this,
				opt=this.configs,
				node = this._getNode( tid );
			
			self.hideAllSubMenu(tid);	
			
			if( node ) {
				if( node[opt.disabledField] ) {
				  return self;	
			  	}
			}
				
			var r = self.fireEvent('onBeforeShowSubMenu',[tid,opt]);
			
			if( r === false ) return self;
			
			if( self.isLeaf(tid) ) {
				return self;	
			}
			
			self._showSubMenu( tid );
			
			self.fireEvent('onShowSubMenu',[tid,opt]);
			
			return self;
		},
		_hide : function(menu,fn){
			var self = this;
			menu.css( {
				left : -99999,
				top : -99999	
			} ).hide();	
			if( fn && $.isFunction( fn ) ) {
				fn();	
			}
		},
		hideMenu : function(menuid){
			var self = this,
				opt=this.configs,	
				undef;		
			if( menuid === undef ) return self;
			var treeID = [opt.id,'_',menuid].join("");
			
			var menu = $("#"+treeID);
			if( !menu.length ) {
				return self;	
			}
			var menuShadow = $("#"+treeID+'_shadow');
			
			var r = self.fireEvent('onBeforeHideMenu',[menuid,opt]);
			if( r === false ) return self;
			
			var cb = function(){
				self.fireEvent('onHideMenu',[menuid,opt]);	
			};
			
			if( opt.hideToRemove ) {
				var node = self._getNode( menuid );
				self._hide( menu,function(){
					menu.remove();
					if( node['isCmp'] ) {
						Nex.gc();	
					}
					if( menuShadow.length ) {
						menuShadow.remove();
					}	
				} );
			} else {
				self._hide( menu,function(){
					if( menuShadow.length ) {
						menuShadow.hide();
					}	
				} );
			}
			
			$("#"+opt.id+"_"+menuid+"_item").removeClass("nex-menu-item-active");	
			
			return self;
		},
		hideAllSubSubMenu : function(pid){
			var self = this,
				opt=this.configs;	
			var pid = self._undef(pid,opt.root);

			var allChilds = self.getAllChildrens(pid);
			
			for( var i=0;i<allChilds.length;i++ ) {
				var tid = allChilds[i][opt.idField];
				var isLeaf = self.isLeaf(tid);
				if( !isLeaf ) {
					self.hideMenu(tid);
				}	
			}
		},
		/*
		* 隐藏当前同级item列表下所有的
		*/
		hideAllMenu : function(){
			this.hideAllSubMenu( this.configs.root , 1 );
			return this;
		},
		hideAllSubMenu : function( pid,m ){
			var self = this,
				opt=this.configs;	
			var pid = self._undef(pid,opt.root);
			pid = self._isRoot( pid ) ? pid : self._getParentID(pid);
			var allChilds = self.getAllChildrens(pid);
			if( m ) {
				self.hideMenu(pid);
			}
			for( var i=0;i<allChilds.length;i++ ) {
				var tid = allChilds[i][opt.idField];
				var isLeaf = self.isLeaf(tid);
				if( !isLeaf ) {
					self.hideMenu(tid);
				}	
			}
			return self;
		},
		hideRoot : function(){
			this.hideAllMenu();
			this.unbindCloseEvents();
			return this;
		},
		hideRootMenu : function(){
			return this.hideRoot.apply( this,arguments );	
		},
		//销毁所有的菜单
		destroyMenu : function(){
			var opt = this.configs;
			var _status = opt.hideToRemove;
			opt.hideToRemove = true;
			this.hideAllMenu();	
			opt.hideToRemove = _status;
			return this;
		},
		hideLeveMenu : function(level){
			var self = this,
				opt=this.configs,
				undef;	
			if( level === undef ) return true;
			var menus = opt._levelData[ level ];
			for( var i=0;i<menus.length;i++ ) {
				self.hideMenu( menus[i][opt.idField] );	
			}
			return true;
		},
		/*
		*IE9以下版本不支持shadow 属性 所以用其他方法实现
		*/
		_setShadow : function(source){
			var self = this,
				opt=this.configs,
				undef;	
			
			var shadowid = $(source).attr('id') + '_shadow';
			var shadow = $("#"+shadowid);
			if( shadow.length ) {
				shadow.show();
				shadow.width( $(source).outerWidth() );
				shadow.height( $(source).outerHeight() );
				shadow.css( {
					left : $(source).css('left'),	
					top : $(source).css('top')
				} );
				shadow.css( "zIndex",$(source).css('z-index') - 1 );	
				return true;	
			}
			var shadow = $('<div class="nex-menu-shadow" id="'+shadowid+'">'+(Nex.IEVer<=8?'<iframe frameborder="0" class="nex-menu-shadow-iframe" style="width:99%;height:99%;"></iframe>':'')+'</div>');
			shadow.appendTo(opt.renderTo);
			shadow.width( $(source).outerWidth() );
			shadow.height( $(source).outerHeight() );
			shadow.css( {
				left : $(source).css('left'),	
				top : $(source).css('top')
			} );
			shadow.css( "zIndex",$(source).css('z-index') - 1 );	
			return true;
		},
		//animate 不要去设置
		_showAt : function(source,target,conf){//el,at,conf
			var self = this,
				opt=this.configs,
				undef;	
			var confs = {};
			var conf = self._undef( conf,{} );
		
			var dc = {visibleEdge : opt.shadowWidth};
			if( target ) {
				dc.at = target;	
			}
			$.extend( confs,opt._showAt,conf,dc );
			if( !confs.at ) {
				confs.at = {
					left : 0,
					top  : 0	
				}	
			}
			if( !source ) {
				return false;
			}
			
			var r = self.fireEvent('onBeforeShowAt',[ menu,confs,opt ]);
			if( r === false ) {
				return;	
			}
			
			var fn = function(){
				if( opt.showShadow ) {
					self._setShadow( source );
				}		
				self.fireEvent('onShowAt',[ menu,confs,opt ]);
			};
			
			self._show( source,confs,fn );
			
			return true;
		},
		_show : function( menu,confs,fn ){
			var self = this;
			
			var sc = $.extend( {},confs || {} );
			
			if( fn && $.isFunction( fn ) ) {
				var evt = 'onShow.'+self.C('id');
				sc[evt] = function(){
					fn();
				};	
			}
			$(menu).showAt(sc);
		},
		unbindCloseEvents : function(){
			var opt = this.configs;
			$(document).unbind('.menu_'+opt.id);	
			$(window).unbind('.menu_'+opt.id);	//$(window).
			return this;
		},
		bindCloseEvents : function(){
			var self = this;
			var opt = this.configs;
			if( !opt.hideOnBlur ) return self;
			self.unbindCloseEvents();	
			$(document).one('contextmenu.menu_'+opt.id+' mousedown.menu_'+opt.id,function(e){//mousewheel.menu_'+opt.id+' 
				var target = e.target || e.srcElement;
				//closest parents
				if( 
					$(target).closest('[menu-cmpid="'+opt.id+'"]').length
				) {
					self.bindCloseEvents();
				} else {
					self.hideRoot();
					self.unbindCloseEvents();		
				} 
			});
			/*
			* 注： IE6下有时append 都会触发resize...
			*/
			$(window).one('resize.menu_'+opt.id,function(){//$(window)
				self.hideRoot();	
				self.unbindCloseEvents();		
			});	
			return self;
		},
		//显示根节点的时候 调用 -- 不建议使用了
		showAt : function(){
			return this.show.apply(this,arguments);	
		},
		//显示menu
		show : function( pos,opts ){
			this.showRootMenu.apply( this,arguments );
			return this;
		},
		hide : function(){
			this.hideRootMenu();	
			return this;
		}
	});
	
	return menu;
});
/*
button组件继承 html
http://www.extgrid.com/button
author:nobo
zere.nobo@gmail.com
qq : 505931977
*/
define('Nex/button/Button',['require','Nex/container/Container','Nex/menu/Menu'],function(require){
	require('Nex/container/Container');
	require('Nex/menu/Menu');	

	var button = Nex.define('Nex.button.Button',{
		extend : 'Nex.container.Container',
		alias : 'Nex.Button',
		xtype : 'button',
		configs : function(opt){
			return {
				prefix : 'nexbutton-',
				tag : 'span',
				renderTo : document.body,
				autoDestroy : true,
				autoResize : false,
				_hasBodyView : false,
				_checkScrollBar : false,
				selectionable : false,
				denyEvents : true,
				tabIndex : Nex.tabIndex++,
				width : 'auto',
				height : 'auto',
				borderCls : [opt.borderCls,'nex-button-border'].join(' '),
				containerCls : [opt.containerCls,'nex-button'].join(' '),
				autoScroll : false,
				autoScrollCls : '',
				autoFocus : false,
				splitBtn : false,
				toggleBtn : false,
				pressed : false,
				plain : false,
				skin : 'default',//按钮主题
				cls : '',
				bodyCls : '',
				bodyStyle : {},
				toggleCls : '',
				pressedCls : '',
				activeCls : '',
				overCls : '',
				focusCls : '',
				plainCls : '',
				disabledCls : '',
				cssText : '',
				align : 'center',
				//removeTextSize 如果你对button设置了比较大的值建议 设置removeTextSize = true
				removeTextSize : false,//如果设置了width 默认text也会设置宽度， 可以通关这个参数取消设置
				iconAlign : 'left', // left top bottom right
				icon : '',
				iconCls : '',
				arrowAlign : 'right',//按钮 箭头位置 right bottom
				showArrow : false,//默认不显示 如果items 有值会自动显示
				arrow : '',//图标地址
				arrowCls : '',//arrow 样式 
				disabled : false,
				callBack : null,//callBack callback 实际作用是一样的
				callback : null,
				toggleHandler : $.noop,
				text : '',
				views : {},
				menuConf : {},
				menu : [],
				events : {}
			};				
		}
	});
	
	button.override({
		initContainer : function(){
			var opt =  this.configs;
			opt.containerCls += ' nex-button-skin-'+opt.skin; 
			this.callParent( arguments );
		},
		initComponent : function(opt) {
			var self = this;
			var opt =this.configs;
			self.callParent(arguments);
			
			//self.setContainer();
			self.setBody();
			self.initButton();
			//self.createButton();
			//self.fireEvent('onCreate');
		},
		getBody : function(){
			var self = this,
				opt = self.configs;
			return opt.views['body'];
		},
		setBody : function(){
			var self = this;
			var opt = self.configs;	
			var container = self.getContainer();
			var bd = $( '<span class="nex-button-left '+opt.bodyCls+'" id="'+opt.id+'_left" ></span>' );
			var bd2 = $( '<span class="nex-button-right" id="'+opt.id+'_right"></span>' );
			
			opt.views['body'] = bd;
			opt.views['body2'] = bd2;
			container.append(bd);
			container.append(bd2);
			//bd.css('padding',opt.padding);
			bd.css(opt.bodyStyle);
			//self.bindBodyEvents();	 
			self.fireEvent("onBodyCreate",[bd,bd2,opt]);
			return self;
		},
		doSetViewSize : function(w,h){
			var self = this,
				opt = self.configs,
				container = self.getContainer(),
				vbody = self.getBody();
			
			self.callParent(arguments);
			
			if( opt.realWidth !== 'auto' ) {
				var w = container._width();
				vbody._outerWidth( w );
				if( !opt.removeTextSize ) {
					var iconWidth = 0;
					if( opt.iconAlign === 'top' || opt.iconAlign === 'bottom' ) {
						iconWidth = 0;	
					} else {
						iconWidth = $('#'+opt.id+'_icon')._width();	
					}
					var arrowWidth = 0;
					if( opt.arrowAlign === 'top' || opt.arrowAlign === 'bottom' ) {
						arrowWidth = 0;	
					} else {
						arrowWidth = $('#'+opt.id+'_arrow')._width();	
					}
					var ww = iconWidth + arrowWidth;
					$('#'+opt.id+'_text')._outerWidth( $('#'+opt.id+'_left')._width()-ww );
				}
			}
			if( opt.realHeight !== 'auto' ) {
				var bd2 = opt.views['body2'];
				var h = container._height();
				vbody._outerHeight( h );
				bd2.height( h );
			}
			
		},
		initButton : function(){
			var self = this;
			var opt = self.configs;	
			//self.fireEvent('onInitComponent',[opt]);
			
			self.createButton();
			
			//初始是不应该触发onSizeChange事件
			//self.lockEvent('onSizeChange');
			//self.resetHtmlSize();
			//self.unLockEvent('onSizeChange');
			
			//self.fireEvent('onCreate',[opt]);
			//opt._isInit = false;
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			self.bind("onCreate.over",self._setFocus,self);
			self.bind("onCreate.over",self.toggleBtnCls,self);
			self.bind("onCreate.over",self._onCreate,self);
			self.bind("onContainerCreate.over",self._setPlain,self);
			self.bind("onFocus.focus",self._setFoucsCls,self);
			self.bind("onBlur.focus",self._unsetFoucsCls,self);//pressedCls
			self.bind("onMouseDown.focus",self._setPressedCls,self);
			self.bind("onMouseUp.focus",self._unsetPressedCls,self);
			self.bind("onMouseOver.over",self.onMouseOver,self);
			self.bind("onMouseOut.over",self.onMouseOut,self);
			self.bind("onClick.click",self._click,self);
			self.bind("onKeyDown.click",self._click2,self);
			self.bind("onClick.menu",self._showMenu,self);
			return self;
		},
		createButton : function(){
			var self = this;
			var opt = self.configs;
			
			self.setInnerButton();
			self.bindButtonEvent();
			
			return true;
		},
		setInnerButton : function(){
			var self = this,
				opt = self.configs,
				vbody = self.getBody();
			
			var wraper = ['<table class="nex-button-layout-table" cellpadding="0" cellspacing="0" border="0"><tr><td align="'+opt.align+'" valign="middle"><div class="nex-button-wraper" id="'+opt.id+'_wraper">'];
	
			var _bg = '';
			if( opt.icon ) {
				_bg = "background-image:url("+opt.icon+")";
			}
	
			if( opt.icon || opt.iconCls ) {
				wraper.push('<span id="'+opt.id+'_icon" class="nex-button-inner nex-button-icon ',opt.iconCls,'" style="',_bg,'"></span>');
			}
			
			wraper.push('<span id="'+opt.id+'_text" class="nex-button-inner nex-button-text">',opt.text,'</span>');
			
			if( opt.showArrow || opt.menu.length || opt.items.length ) {
				var _bg2 = '';
				if( opt.arrow ) {
					_bg2 = 'background-image:url('+opt.arrow+');';	
				}
				wraper.push('<span id="'+opt.id+'_arrow" class="nex-button-inner nex-button-arrow '+ opt.arrowCls +'" style="'+_bg2+'"></span>');
			}
			
			wraper.push('</div></td></tr></table>');
			
			var btnInner = $(wraper.join(""));
			
			vbody.append( btnInner );
			
			self.setIconAlign();
			self.setArrowAlign();
			
			self.fireEvent('onButtonInnerCreate',[btnInner]);
		},
		bindButtonEvent : function(){
			var self = this;
			var opt = self.C();
			var container = self.getContainer();
			
			var callBack = function(type,e){
				var r = self.fireEvent(type,[ this,e,opt ]);
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				}
			};
			var events = {
				'focusin' : function(e) {
					callBack.call(this,'onFocus',e);
				},
				'focusout' : function(e) {
					callBack.call(this,'onBlur',e);
				},
				'click' : function(e) {
					callBack.call(this,'onClick',e);
				},
				'dblclick' : function(e) {
					callBack.call(this,'onDblClick',e);
				},
				'keydown' : function(e) {
					callBack.call(this,'onKeyDown',e);
				},
				'keyup' : function(e) {
					callBack.call(this,'onKeyUp',e);
				},
				'keypress' : function(e){
					callBack.call(this,'onKeyPress',e);
				},
				'mouseenter' : function(e){
					callBack.call(this,'onMouseEnter',e);
				},
				'mouseleave' : function(e){
					callBack.call(this,'onMouseLeave',e);
				},
				'mouseover' : function(e){
					callBack.call(this,'onMouseOver',e);
				},
				'mouseout' : function(e){
					callBack.call(this,'onMouseOut',e);
				},
				'mousedown' : function(e) {
					callBack.call(this,'onMouseDown',e);
				},
				'mouseup' : function(e) {
					callBack.call(this,'onMouseUp',e);
				},
				'contextmenu' : function(e){	
					callBack.call(this,'onContextMenu',e);
				}
			};
			container.bind(events);
			self.fireEvent("onSetButtonEvent",[container,opt]);
			return true;
		},
		focus : function(){
			var self = this,
				opt = self.configs;
			var btn = self.el;
			btn.focus();
		},
		blur : function(){
			var self = this,
				opt = self.configs;
			var btn = self.el;//getContainer
			btn.blur();
		},
		_setFocus : function(){
			var self = this,
				opt = self.configs;
			if( opt.autoFocus ) {
				clearTimeout( opt._ft );
				opt._ft = setTimeout(function(){
					self.focus();	
				},0);
			}
		},
		_setPlain : function(){
			var self = this,
				opt = self.configs,
				btn = self.el;
			if( !opt.plain ) return;	
			btn.addClass("nex-button-plain");
			if( opt.plainCls ) {
				btn.addClass( opt.plainCls );	
			}	
		},
		_setFoucsCls : function(btn){
			var self = this,
				opt = self.configs,
				btn = self.el;
			btn.addClass("nex-button-focus");
			if( opt.focusCls ) {
				btn.addClass( opt.focusCls );	
			}
		},
		_unsetFoucsCls : function(btn){
			var self = this,
				opt = self.configs,
				btn = self.el;
			btn.removeClass("nex-button-focus");
			if( opt.focusCls ) {
				btn.removeClass( opt.focusCls );	
			}
		},
		_setPressedCls : function(btn){
			var self = this,
				opt = self.configs,
				btn = self.el;
			btn.addClass("nex-button-pressed");
			if( opt.pressedCls ) {
				btn.addClass( opt.pressedCls );	
			}
			$(document).one('mouseup',function(){
				self._unsetPressedCls();								   
			});
		},
		_unsetPressedCls : function(btn){
			var self = this,
				opt = self.configs,
				btn = self.el;
			btn.removeClass("nex-button-pressed");
			if( opt.pressedCls ) {
				btn.removeClass( opt.pressedCls );	
			}
		},
		_showMenu : function(btn,e){
			var self = this;
			var opt = self.configs;
			var btn = $(btn);
			
			if( opt.disabled ) {
				return;	
			}
			
			if( opt.menu.length && !opt.splitBtn ) {
				
				if( btn.hasClass('nex-button-active') ) {
					btn.removeClass('nex-button-active');
					if( opt.activeCls ) {
						btn.removeClass(opt.activeCls);	
					}
					if( self._menu ) {
						self._menu.hideRoot();	
					}	
				} else {
					btn.addClass('nex-button-active');
					if( opt.activeCls ) {
						btn.addClass(opt.activeCls);	
					}
					self._menu = Nex.Menu.create($.extend({},opt.menuConf,{items:opt.menu},{
						onClick : function(obj,tid,data,e){
							btn.removeClass('nex-button-active');		
							self.fireEvent('onItemClick',[ obj,tid,data,e ]);	
						}								   
					}));	
					self._menu.show(btn, { xAlign:'left',yAlign:'bottom',zAlign : 'y' });
					setTimeout(function(){
						$(document).one("mousedown",function(){
							btn.removeClass('nex-button-active');									 
						});					
					},0);
				}
			}
		},
		_showSplitMenu : function(btn,e){
			var self = this;
			var opt = self.configs;
			var _btn = self.el;//$("#"+opt.id);
			
			if( !opt.splitBtn ) return;
			
			var splitBtn = $('.nex-button-arrow',_btn);
			if( splitBtn.hasClass('nex-button-arrow-active') ) {
				splitBtn.removeClass('nex-button-arrow-active');
				_btn.removeClass('nex-button-active');
				if( opt.activeCls ) {
					_btn.removeClass(opt.activeCls);	
				}
				if( self._menu ) {
					self._menu.hideRoot();	
				}
			} else {
				splitBtn.addClass('nex-button-arrow-active');
				_btn.addClass('nex-button-active');
				if( opt.activeCls ) {
					_btn.addClass(opt.activeCls);	
				}
				self._menu = new Nex.menu($.extend(opt.menuConf,{data:opt.menu},{
					onClick : function(obj,tid,data,e){
						splitBtn.removeClass('nex-button-arrow-active');
						_btn.removeClass('nex-button-active');
						if( opt.activeCls ) {
							_btn.removeClass(opt.activeCls);	
						}	
						self.fireEvent('onItemClick',[ obj,tid,data,e ]);	
					}								   
				}));
				//var _menu = self._menu.createMenu();	
				self._menu.show(btn, { xAlign:'left',yAlign:'bottom' });	
				setTimeout(function(){
					$(document).one("mousedown",function(){
						splitBtn.removeClass('nex-button-arrow-active');
						_btn.removeClass('nex-button-active');
						if( opt.activeCls ) {
							_btn.removeClass(opt.activeCls);	
						}													 
					});					
				},0);
			}
		},
		_onCreate : function(){
			this.disabled( this.C('disabled') );	
		},
		onMouseOver : function(btn,e){
			var self = this,
				opt=this.configs;
			var btn = self.el;
			btn.addClass("nex-button-hover");
			if( opt.overCls ) {
				btn.addClass( opt.overCls );	
			}
		},
		onMouseOut : function(btn,e){
			var self = this,
				opt=this.configs;
			var btn = self.el;
			btn.removeClass("nex-button-hover");
			if( opt.overCls ) {
				btn.removeClass( opt.overCls );	
			}
			if( opt.plain ) {
				self._unsetFoucsCls();	
			}	
		},
		toggleBtnCls : function(){
			var self = this,
				opt=this.configs;	
			var btn = self.el;//$("#"+opt.id);
			if( opt.pressed ) {
				btn.addClass("nex-button-toggle");
				if( opt.toggleCls ) {
					btn.addClass( opt.toggleCls );	
				}
			} else {
				btn.removeClass("nex-button-toggle");
				if( opt.toggleCls ) {
					btn.removeClass( opt.toggleCls );	
				}
			}	
		},
		_click : function(btn,e){
			var self = this,
				opt=this.configs;
			if( opt.disabled ) {
				return;	
			}
			if( $.isFunction(opt.callBack) ) {
				opt.callBack.call(opt.context || self,btn,e);
			}
			if( $.isFunction(opt.callback) ) {
				opt.callback.call(opt.context || self,btn,e);
			}
			
			if( opt.toggleBtn ) {
				opt.pressed = !opt.pressed;
				self.toggleBtnCls();
				opt.toggleHandler.call(opt.context || self,opt.pressed,opt);	
			}
		},
		_click2 : function(btn,e){
			var self = this,
				opt=this.configs;
			if( opt.disabled ) {
				return;	
			}	
			if( e.keyCode === 13 ) {
				self._click();
			}
		},
		disabled : function(m){
			var self = this,
				opt=this.configs,
				undef;
			var m = m === undef ? true : m;
			var btn = self.el;//$("#"+opt.id);
			opt.disabled = !!m;
			if( m ) {
				btn.addClass('nex-button-disabled');
				if( opt.disabledCls ) {
					btn.addClass(opt.disabledCls);	
				}
				btn.removeAttr('tabindex');
			} else {
				btn.removeClass('nex-button-disabled');	
				if( opt.disabledCls ) {
					btn.removeClass(opt.disabledCls);	
				}
				btn.attr('tabindex',opt.tabIndex);
			}
			return true;
		},
		enabled : function(){
			return this.disabled( false );	
		},
		setText : function( text ){
			var self = this,
				opt = self.configs;	
			text = $.isFunction( text ) ? text.call(this,opt) : text;
			opt.text = self._undef(text,opt.text);
			var t = $('#'+opt.id+'_text');
			t.html( opt.text );
		},
		setArrowAlign : function( align ){
			var self = this,
				opt = self.configs,
				align = self._undef( align,opt.arrowAlign );
			opt.arrowAlign = align;	
			var wraper = $('#'+opt.id+'_wraper');
			//var icon = $('#'+opt.id+'_icon');
			//var text = $('#'+opt.id+'_text');	
			var arrow = $('#'+opt.id+'_arrow');	
			if( !arrow.length ) {
				return self;	
			}
			arrow.removeClass( 'nex-button-inner-block' );
			switch( align ) {
				case 'left' : 
					wraper.prepend( arrow );
					break;
				case 'top' : 
					wraper.before( arrow );
					arrow.addClass( 'nex-button-inner-block' );
					break;
				case 'right' : 
					wraper.append( arrow );
					break;
				case 'bottom' : 
					wraper.append( arrow );
					arrow.addClass( 'nex-button-inner-block' );
					break;
			}
			return self;
		},
		setIconAlign : function( align ){
			var self = this,
				opt = self.configs,
				align = self._undef( align,opt.iconAlign );
			opt.iconAlign = align;	
			var wraper = $('#'+opt.id+'_wraper');
			var icon = $('#'+opt.id+'_icon');
			var text = $('#'+opt.id+'_text');	
			if( !icon.length ) {
				return self;	
			}
			icon.removeClass( 'nex-button-inner-block' );
			switch( align ) {
				case 'left' : 
					text.before( icon );
					break;
				case 'top' : 
					text.before( icon );
					icon.addClass( 'nex-button-inner-block' );
					break;
				case 'right' : 
					text.after( icon );
					break;
				case 'bottom' : 
					wraper.append( icon );
					icon.addClass( 'nex-button-inner-block' );
					break;
			}
			return self;
		},
		setIcon : function( icon,align ){
			var self = this,
				opt = self.configs,
				align = self._undef( align,opt.iconAlign ),
				vbody = self.getBody();	
			opt.icon = self._undef(icon,opt.icon);	
			
			var icon = $('#'+opt.id+'_icon');
			var text = $('#'+opt.id+'_text');
			
			if( !opt.icon && !opt.iconCls ) {
				icon.remove();	
			} else {
				var _bg = '';
				if( opt.icon ) {
					_bg = "background-image:url("+opt.icon+")";
				}
				icon.remove();
				icon = $(['<span id="',opt.id,'_icon" class="nex-button-inner nex-button-icon ',opt.iconCls,'" style="',_bg,'"></span>'].join(''));
				text.before(icon);	
				//设置icon位置
				self.setIconAlign( align );
			}
			
			self.doSetViewSize();
			return self;
		},
		setIconCls : function(iconCls,align){
			var self = this,
				opt = self.configs,
				align = self._undef( align,opt.iconAlign ),
				vbody = self.getBody();	
			opt.iconCls = self._undef(iconCls,opt.iconCls);	
			
			var icon = $('#'+opt.id+'_icon');
			var text = $('#'+opt.id+'_text');
			
			if( !opt.icon && !opt.iconCls ) {
				icon.remove();	
			} else {
				var _bg = '';
				if( opt.icon ) {
					_bg = "background-image:url("+opt.icon+")";
				}
				icon.remove();
				icon = $(['<span id="',opt.id,'_icon" class="nex-button-inner nex-button-icon ',opt.iconCls,'" style="',_bg,'"></span>'].join(''));
				text.before(icon);	
				//设置icon位置
				self.setIconAlign( align );
			}
			
			self.doSetViewSize();
			return self;
		}
	});
	
	return button;
});	
/*
Nex.accordion.Accordion
*/
define('Nex/accordion/Accordion',['require','Nex/panel/Panel'],function(require){
	require('Nex/panel/Panel');
	var accordion = Nex.define('Nex.accordion.Accordion',{
		extend : 'Nex.panel.Panel',
		alias : 'Nex.Accordion',
		xtype : 'accordion',
		configs : function(opt){
			return {
				prefix : 'nexaccordion-',
				autoResize : true,
				containerCls : [opt.containerCls,'nex-accordion'].join(' '),
				autoScrollCls : [opt.autoScrollCls,'nex-accordion-auto-scroll'].join(' '),
				borderCls : [opt.borderCls,'nex-accordion-border'].join(' '),
				autoScroll : false,
				border : false,
				expandOnEvent : 'click',//mouseover click dblclick
				//初始展开时才渲染内容
				lazyLoad : true,
				items : [],
				disabledItems : true,
				renderTo : document.body,
				width : 'auto',
				height : 'auto',
				singleExpand : true
			};
		}	
	});
	accordion.override({
		initComponent : function(opt) {
			var self = this;
			
			self.callParent(arguments);
			
			self.accordions = [];
			
			self.setAccordionItems();
		},
		accordionRendered : false,
		accordions : [],
		setAccordionItems : function(){
			var self = this,
				undef,
				opt = self.configs,
				bd = self.getBody();
				
			if( self.accordionRendered ) {
				return;	
			}	
			
			self.accordionRendered = true;
			
			var items = Nex.isArray( opt.items ) ? opt.items : [ opt.items ];
		
			$.each( items , function(index,item){
				
				item.id = Nex.unDefined( item.id, Nex.uuid() );
				
				var cfg = $.extend({
						cls : '',
						collapsible : true,
						defaults : opt.defaults,
						showHeader  : true
					}, item);
				
				
				cfg.bodyPadding = cfg.padding;
				cfg.collapsed = true;
				cfg.cls = 'nex-accordion-item '+ cfg.cls;
				
				if( !opt.lazyLoad ) {
					cfg.html = item.html;
					cfg.items = item.items;	
				} else {
					cfg.html = '';
					cfg.items = [];	
				}
				
				
				cfg.border = false;
				cfg.padding = 0;
				cfg.renderTo = bd;
				
				var it = Nex.Create('panel', cfg);
				
				it.on('@onHeaderClick._sys', function(){
					if( opt.expandOnEvent == 'click' ) {
						this.toggleCollapse();	
					}	
				});
				
				it.on('@onHeaderDblClick._sys', function(){
					if( opt.expandOnEvent == 'dblclick' ) {
						this.toggleCollapse();	
					}	
				});
				
				var cid = it.on('@onHeaderMouseOver._sys', function(){
					if( opt.expandOnEvent == 'mouseover' ) {
						this.expand();	
					}	
				});
				
				var id = it.one('@onExpand', function(){
					var ibd = this.getBody();
					if( !opt.lazyLoad ) {
						return;	
					}
					self.addComponent( ibd, item.html, true, opt.defaults  );
					self.addComponent( ibd, item.items, true, opt.defaults  );
				});
			
				it.on('@onExpanding', function(){
					var me = this;
					if( opt.singleExpand ) {
						$.each( self.accordions, function(i, accord){
							if( me.configs.id == accord.configs.id ) {
								return;	
							}	
							if( !accord.collapsed ) {
								accord.collapse();
							} 
						} );	
					}
				});
				
				self.accordions.push(it);
				
				self.fireEvent('onAccordionItemCreate',[it, opt]);
			} );
			
			self.fireEvent('onAccordionsCreate',[self.accordions, opt]);
			
			return self;	
		},
		doSetViewSize : function(){
			var self = this;
			var opt = this.configs;
			var bd = self.getBody();	
			var accordions = self.accordions;
			
			self.callParent(arguments);	
			
			if( !self.isAutoWidth() ) {
				$.each(accordions, function(i, accord){
					accord.width( bd._width() );
				});
			}
			
			if( !self.isAutoHeight() ) {
				var allHeaderHeight = 0;
				var bodyHeight = bd._height();
				var accordionHeight = 0;
				$.each(accordions, function(i, accord){
					var h = accord.getHeader();
					allHeaderHeight += h._outerHeight();
				});
				accordionHeight = bodyHeight - (allHeaderHeight-allHeaderHeight/accordions.length);
				$.each(accordions, function(i, accord){
					accord.height( accordionHeight );
				});
			}
		},
		getItemData : function(id){
			var self = this;
			var opt = this.configs;
			var items = Nex.isArray( opt.items ) ? opt.items : [opt.items];
			for( var i=0;i<items.length; i++ ) {
				if( items[i].id == id ) {
					return items[i];	
				}	
			}
			return null;
		},
		getItemPanel : function(id){
			var self = this;
			var panels = this.accordions;
			for( var i=0;i<panels.length; i++ ) {
				if( panels[i].configs.id == id ) {
					return panels[i];
				}	
			}
			return null;
		}
	});
	
	return accordion;
});
/*
*
*Nex.util.Date
*/
define('Nex/util/Date',['require','exports','module','Nex'],function(require, exports, module){
	require('Nex');
	Nex.addUtil('Date',{
		/*
		*返回当前时间对象
		*/
		now : function( d ){
			var date = new Date();
			if( d ) {
				this.add( date,'d',d );	
			}
			return date;	
		},
		isArray : function( obj ){
			var nativeIsArray = Array.isArray;	
			var toString = Object.prototype.toString;
			return nativeIsArray ? nativeIsArray.call( Array,obj ) : (toString.call(obj) == '[object Array]');
		},
		isFunction : function(obj){
			var toString = Object.prototype.toString;
			return toString.call(obj) == '[object Function]';	
		},
		/*
		*日期填充0
		*/
		pad : function(v,len){
			var res = "" + v;
			var len = len || 2;
			for (; res.length < len; res = '0' + res) {
			}
			return res;	
		},
		/*
		*判断是否日期对象
		*/
		isDate : function( date ){
			return Object.prototype.toString.call(date)	== '[object Date]';
		},
		/*
		*判断当前年份是否闰年
		*@param {Int} year
		*/
		isLeapYear : function(year){
			year = this.isDate( year ) ? year.getFullYear() : parseInt(year,10);
			return (year%4 === 0 && year%100 !== 0) || year%400 === 0;	
		},
		/*
		*日期格式处理
		*@param {Date}		日期对象			默认：当前时间
		*@param {String}	格式化字符串		默认：YYYY-MM-DD
		*@param {Array}		格式化周时文字	默认：['日','一','二','三','四','五','六']
		*	YYYY/yyyy 		年份 	eg:2014
		*	YY/yy  			年份 	eg:14
		*	MM/M			月份		eg:08/8
		*	w 				星期数 0~6 or 日~六
		*	W/WW			ISO8601自然周
		*	DD/dd			日期 	eg:01
		*	D/d   			日期  	eg:1
		*   a/A             am pm   --未实现
		*	q/Q   			季度  	eg:1
		*   o/O/oo/OO		一年中的第几天
		*	HH/hh			小时(24小时制)		eg:09
		*	H/h				小时(24小时制)		eg:9
		*	mm/m			分钟		eg:04/4
		*	SS/ss			秒		eg:01
		*	S/s				秒		eg:1
		*/
		format : function( date,fmt,w ){
			var me = this;
			var date = date || this.now();
			var str = fmt || 'YYYY-MM-DD';  
			var Week = w || ['日','一','二','三','四','五','六']; 
		 
			str=str.replace(/yyyy|YYYY/,function(){
				return date.getFullYear();
			});  
			str=str.replace(/yy|YY/,function(){
				var y = date.getYear() % 100;
				return me.pad(y);
			});  
		 
			str=str.replace(/MM/,function(){
				var m = date.getMonth()+1;
				return me.pad(m);	
			});  
			str=str.replace(/M/g,function(){
				return date.getMonth()+1;	
			});  
		 
			str=str.replace(/w/g,function(){
				return Week[date.getDay()];
			}); 
			
			str=str.replace(/W/g,function(){
				return me.weekOfYear( date );		
			});  
			str=str.replace(/WW/g,function(){
				return me.pad(me.weekOfYear( date ));	
			}); 
		 
			str=str.replace(/dd|DD/,function(){
				return me.pad( date.getDate() );	
			});  
			str=str.replace(/d|D/g,function(){
				return date.getDate();	
			});  
			
			str=str.replace(/q|Q/g,function(){
				return me.getQuarter(date.getMonth()+1);	
			});  
			
			str=str.replace(/o|O/g,function(){
				return me.dayOfYear(date);	
			});  
			str=str.replace(/oo|OO/g,function(){
				me.pad(me.dayOfYear(date),3);	
			});  
		 
			str=str.replace(/hh|HH/,function(){
				return 	me.pad( date.getHours() );
			});  
			str=str.replace(/h|H/g,function(){
				return date.getHours();
			});  
			str=str.replace(/mm/,function(){
				return me.pad( date.getMinutes() );	
			});  
			str=str.replace(/m/g,function(){
				return date.getMinutes();
			});  
		 
			str=str.replace(/ss|SS/,function(){
				return me.pad( date.getSeconds() );	
			});  
			str=str.replace(/s|S/g,function(){
				return date.getSeconds();		
			});  
		 
			return str;  
		},
		/**
		* 字符串转换为日期对象
		* @param {String} 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制
		* @parma {String} fmt 可选 如果传入后会调用parseDate来解析 一般解析复杂日期的时候处理eg strToDate('20150809','YYYYMMDD') === parseDate('20150809','YYYYMMDD');
		* @return {Date}
		*/
		strToDate : function(dateStr,fmt){
			var undef;
			if( this.isDate( dateStr ) ) {
				return dateStr;	
			}
			if( dateStr === undef ) {
				return this.now();	
			}
			if( fmt ) {
				return this.parseDate( dateStr,fmt );	
			}
			var data = dateStr;  
			var reCat = /(\d{1,4})/gm;   
			var t = data.match(reCat);
			t[1] = t[1] - 1;//月份减一
			eval('var d = new Date('+t.join(',')+');');
			return d;
		},
		clone : function(date){
			var date = this.strToDate( date );
			return new Date( date.getTime() );	
		},
		/** 
		 * 根据给定的格式对给定的字符串日期时间进行解析
		 * @param string eg : 12/09/2014 
		 * @param format 可以是数组或者自定义函数 eg : DD/MM/YYYY   [] func
		 */
		parseDate: function(strDate, strFormat){   
			var undef,self = this;
			if( this.isDate( strDate ) ) {
				return strDate;	
			}
			var regs = /YYYY|yyyy|YY|yy|MM|M|w|WW|W|DD|dd|D|d|A|a|q|Q|OO|oo|O|o|HH|hh|H|h|mm|m|SS|ss|S|s/g;
			//默认格式
			var fmts = [
				'YYYY-MM-DD',
				'YYYY-M-D',
				'YYYY/MM/DD',
				'YYYY/M/D',
				'DD/MM/YYYY',
				'D/M/YYYY',
				'YYYYMMDD',
				'YYYY.MM.DD',
				'YYYY.M.D'
			];
			var strFormat = strFormat ? self.isArray( strFormat ) ? strFormat : [ strFormat ] : [];
			fmts = strFormat.concat(fmts);
			var _parseFmt = function( date,fmt ){
				var _matchs = {};
				fmt = fmt.replace(/\.|\\|\/|\+|\?|\$|\*|\^|\(|\)|\||\<|\>|\{|\}/g,function(e){
					return '\\'+e;	
				});	
				var i=0;
				var _regrep = fmt.replace( regs,function(r){
					var s = '';
					_matchs[i++] = r;
					switch( r ) {
						case 'yyyy':
						case 'YYYY':
							s = '(\\d{4})';
							break;
						case 'yy':	
						case 'YY':	
						case 'MM':
						case 'dd':
						case 'DD':
						case 'WW':	
						case 'HH':	
						case 'hh':
						case 'mm':
						case 'ss':
							s = '(\\d{2})';	
							break;
						case 'q':	
						case 'Q':	
							s = '(\\d{1})';	
							break;
						case 'oo':	
						case 'OO':	
							s = '(\\d{3})';	
							break;	
						case 'o':	
						case 'O':	
							s = '(\\d{1,3})';	
							break;	
						case 'a':	
						case 'A':	
							s = '((?:pm|PM|am|AM))';	
							break;			
						case 'w' : 
							s = '(\\S)';
							break;		
						default:
							s = "(\\d\\d?)";
							break;			
					}
					return s;	
				} );
				var es = new RegExp( _regrep,'g' ).exec(date);
				if( !es ) {
					return null;	
				}
				es.splice(0,1);
				var part = {};
				for( k in _matchs ) {
					part[ _matchs[k] ] = es[k];	
				}
				var currentDate = new Date();
				var d = self.dateObject( currentDate );
				d['M+'] = '1';
				d['d+'] = '1';
				d['h+'] = '00';
				d['m+'] = '00';
				d['s+'] = '00';
				
				if( ('yyyy' in part) || ('YYYY' in part) ) {
					d['y+'] = part['YYYY'] || part['yyyy'];	
				} else if( ('yy' in part) || ('YY' in part) ) {
					var _y = (d['y+']+'').substring(0,2);
					d['y+'] = part['YY'] || part['yy'];	
					d['y+'] = _y + d['y+'];
				}
				if( ('MM' in part) || ('M' in part) ) {
					d['M+'] = part['MM'] || part['M'];	
				}
				if( ('DD' in part) || ('dd' in part) ) {
					d['d+'] = part['DD'] || part['dd'];	
				}
				if( ('D' in part) || ('d' in part) ) {
					d['d+'] = part['D'] || part['d'];	
				}
				if( ('HH' in part) || ('hh' in part) || ('H' in part) || ('h' in part) ) {
					d['h+'] = part['HH'] || part['hh'] || part['H'] || part['h'];	
				}
				if( ('mm' in part) || ('m' in part) ) {
					d['m+'] = part['mm'] || part['m'];	
				}
				if( ('SS' in part) || ('ss' in part) || ('S' in part) || ('s' in part) ) {
					d['s+'] = part['SS'] || part['ss'] || part['S'] || part['s'];	
				}
				return new Date( d['y+'],parseInt(d['M+'],10)-1,d['d+'],d['h+'],d['m+'],d['s+'] );
			};
			var es = null;
			for( var n=0;n<fmts.length;n++ ) {
				if( self.isFunction( fmts[n] ) ) {
					es = fmts[n].call( this,strDate );	
				} else {
					if( fmts[n] ) {
						es = _parseFmt.call( this, strDate, fmts[n] );	
					}
				}
				if( es ) {
					break;	
				}
			}
			if( !es ) {
				return new Date();	
			}
			return es;
		},
		/**
		* 获取本月季度
		* @param Int m 月份
		*/
		getQuarter : function(m){
			var q = 0;
			if(m<4){ 
				q = 1; 
			} 
			if( m>3 && m<7){ 
				q = 2; 
			} 
			if( m>6 && m<10){ 
				q = 3; 
			} 
			if( m>9){ 
				q = 4; 
			} 
			return q; 
		},
		/**
		* 日期添加 日期格式必须是 yyyy-MM-dd hh:mm:ss类型 顺序不可更改
		* @param {Date}
		* @param {String} interval 添加间隔类型 年y 月m 日d 季度q 周w 小时h 分n 秒s 毫秒l
		* @param {Int}	number 添加时间间隔值,可以是正负值
		*/
		add : function(idate, interval, number) {
			number = parseInt(number,10);
			var date;
			date = this.strToDate( idate );
			switch (interval) {
				case "y": date.setFullYear(date.getFullYear() + number); break;
				case "m": 
					//bug处理 eg:3.30日 ，如果减去一个月 就是 2.30日 但2月只有28天 所以会溢出又会到3.2日
					var _date = date.getDate();
					date.setDate(1);
					date.setMonth(date.getMonth() + number); 
					var days = this.maxDay( date );
					date.setDate( Math.min( _date,days ) );
					break;
				case "d": date.setDate(date.getDate() + number); break;
				case "q": 
					date.setMonth(date.getMonth() + 3 * number); 
					break;
				case "w": date.setDate(date.getDate() + 7 * number); break;
				case "h": date.setHours(date.getHours() + number); break;
				case "n": date.setMinutes(date.getMinutes() + number); break;
				case "s": date.setSeconds(date.getSeconds() + number); break;
				case "l": date.setMilliseconds(date.getMilliseconds() + number); break;
			}
			return date;
		},
		addDate : function(){
			return this.add.apply( this,arguments );	
		},
		/*
		* 日期减少 使用方法同add
		*/
		reduce : function(a,b,c){
			return this.add(a,b,parseInt(c,10)*-1);	
		},
		reduceDate : function(a,b,c){
			return this.add(a,b,parseInt(c,10)*-1);	
		},
		/**
		* 日期对比
		* @param {String} interval 对比日期类型 年y 月m 日d 季度q 周w 小时h 分n 秒s 毫秒l
		*/
		diff : function(d1, d2, interval){
			d1 = this.strToDate(d1);
			d2 = this.strToDate(d2);
			switch (interval) {
					case "d": //date
					case "w":
						d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
						d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
						break;  //w
					case "h":
						d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours());
						d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours());
						break; //h
					case "n":
						d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes());
						d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours(), d2.getMinutes());
						break;
					case "s":
						d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes(), d1.getSeconds());
						d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours(), d2.getMinutes(), d2.getSeconds());
						break;
				}
				var t1 = d1.getTime(), t2 = d2.getTime();
				var diff = NaN;
				switch (interval) {
					case "y": diff = d2.getFullYear() - d1.getFullYear(); break; //y
					case "m": diff = (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth(); break;    //m
					case "q": diff = (d2.getFullYear() - d1.getFullYear()) * 4 + this.getQuarter(d2.getMonth()+1) - this.getQuarter(d1.getMonth()+1); break;    //q
					case "d": diff = Math.floor(t2 / 86400000) - Math.floor(t1 / 86400000); break;
					case "w": diff = Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t1 + 345600000) / (604800000)); break; //w
					case "h": diff = Math.floor(t2 / 3600000) - Math.floor(t1 / 3600000); break; //h
					case "n": diff = Math.floor(t2 / 60000) - Math.floor(t1 / 60000); break; //
					case "s": diff = Math.floor(t2 / 1000) - Math.floor(t1 / 1000); break; //s
					case "l": diff = t2 - t1; break;
				}
				return diff;	
		},
		diffDate : function(){
			return this.diff.apply( this,arguments );	
		},
		/*
		* 把日期分割才数组 [y,m,d,h,i,s]
		*/
		toArray : function( date ){
			var d = []; 
			date = this.strToDate( date );
			d[0] = date.getFullYear(); 
			d[1] = date.getMonth()+1; 
			d[2] = date.getDate(); 
			d[3] = date.getHours(); 
			d[4] = date.getMinutes(); 
			d[5] = date.getSeconds(); 
			return d; 	
		},
		/**
		* 检查日期是否合法 日期格式必须要类似 yyyy-MM-dd hh:mm:ss 分隔符不限
		* 例如 2015-02-31 二月是没有31号的
		* @param date 日期字符串
		*/
		isVaild : function(date){
			var undef;
			var reCat = /(\d{1,4})/gm;   
			var r = date.match(reCat);
			if( !r.length ) return false;
			var d = this.toArray(date);
			if(r[0] !== undef && d[0]!=r[0])return false;  
			if(r[1] !== undef && d[1]!=r[1])return false;  
			if(r[2] !== undef && d[2]!=r[2])return false;  
			if(r[3] !== undef && d[3]!=r[3])return false;  
			if(r[4] !== undef && d[4]!=r[4])return false;  
			if(r[5] !== undef && d[5]!=r[5])return false;  
			return true;
		},
		/** 
		 * 根据给定的日期得到日期的年，月，日，时，分和秒的对象 
		 * @params date 给定的日期 date为非Date类型， 则获取当前日期 
		 * @return 有给定日期的月、日、时、分和秒组成的对象 
		 */   
		dateObject: function(date){   
			date = this.strToDate( date ); 
			return {  
				'y+' : date.getFullYear(),
				'M+' : date.getMonth() + 1,    
				'd+' : date.getDate(),      
				'h+' : date.getHours(),      
				'm+' : date.getMinutes(),    
				's+' : date.getSeconds()   
			 };   
		},
		//+--------------------------------------------------- 
		//| 取得日期数据信息 
		//| 参数 interval 表示数据类型 
		//| y 年 m月 d日 w星期 ww周(年) h时 n分 s秒 
		//+--------------------------------------------------- 
		part : function( date,interval,w ){
			date = this.strToDate( date );
			var d=''; 
			var Week = w||['日','一','二','三','四','五','六']; 
			switch (interval) 
			{  
				case 'y' : d = date.getFullYear();break; 
				case 'm' : d = date.getMonth()+1;break; 
				case 'd' : d = date.getDate();break; 
				case 'w' : d = Week[date.getDay()];break; 
				case 'ww': d = this.weekOfYear(date);break; 
				case 'h' : d = date.getHours();break; 
				case 'n' : d = date.getMinutes();break; 
				case 's' : d = date.getSeconds();break; 
			} 
			return d; 
		},
		/**
		* 取得指定日期所在月分的最大天数，一个月的最后一天日期(还有个更简单的方法是 日期设置上个月的日期为0，那么就可以得到这个月的最后一天日期)
		* @param date
		*/
		maxDay : function( date ){
			var date1 = this.strToDate( date );
			date1 = this.clone( date1 );
			date1.setDate(1);
			date1.setMonth( date1.getMonth()+1 );
			date1.setDate(0);
			return date1.getDate(); 		
		},
		/**
		* 返回当前月份的所有天数
		* @param date 日期
		* return Array eg:[1,2,3...,31]
		*/
		getDays : function(date){
			var days = [];
			var md = this.maxDay( date );
			for( var i=1;i<=md;i++ ) {
				days.push( i );	
			}	
			return days;
		},
		/*获取本月第一天*/
		firstDay : function(date){
			var date = this.clone(date);
			return date.setDate(1);	
		},
		/*获取本月最后一天*/
		lastDay : function( date ){
			var date = this.clone( date );
			date.setDate(this.maxDay( date ))
			return date;		
		},
		/*
		*获取月份
		*/
		getMonths : function(){
			return [1,2,3,4,5,6,7,8,9,10,11,12];	
		},
		/*
		*获取从1900到2099数组
		*/
		getYears : function(){
			var y = [];
			for( var i=1900;i<=2099;i++ ) {
				y.push( i );	
			}	
			return y;
		},
		/**
		* The default calculation follows the ISO 8601 definition: the week starts on Monday, the first week of the year contains the first Thursday of the year. This means that some days from one year may be placed into weeks 'belonging' to another year.
		*/
		iso8601Week : function(date) {
			var time,
				checkDate = new Date(date.getTime());
	
			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
	
			time = checkDate.getTime();
			checkDate.setMonth(0); // Compare with Jan 1
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},
		dayOfYear : function(date,m){
			var e = this.strToDate( date,m );
			var s = this.clone( e );
			s.setMonth(0);
			s.setDate(1);
			return this.diff( s,e,'d' )+1;
		},
		weekOfYear : function(date){
			return this.iso8601Week( this.strToDate( date ) )
		},
		/**
		* 获取当前日期是该月的周数
		*/
		weekOfMonth : function(date){},
		/** 
		 *在控制台输出日志 
		 *@params message 要输出的日志信息 
		 */   
		error: function(message){   
		}
	});
});
define('Nex/date/Calendar',['require','Nex/container/Container','Nex/util/Date'],function(require){
	require('Nex/container/Container');
	require('Nex/util/Date');

	var cal = Nex.define('Nex.date.Calendar','Nex.container.Container',{
		xtype : 'calendar',
		alias : 'Nex.Calendar',
		Date : Nex.util.Date,
		configs : function(opt){
			return {
				prefix : 'nexcal-',
				autoScroll : false,
				//关闭默认事件
				denyEvents : 'focusin focusout focus blur scroll keydown keyup keypress mousewheel mouseover mouseout'.split(/\s+/),
				disabledItems : true,
				width : 'auto',
				height : 'auto',
				borderCls : opt.borderCls+' nex-calendar-border',
				containerCls : opt.containerCls+' nex-calendar',
				autoScrollCls : opt.autoScrollCls+' nex-calendar-auto-scroll',
				dateFormat : 'YYYY-MM-DD',
				sepStr : ',',//获取时设置分隔符
				//没用上
				dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
				//没用上
				dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
				dayNamesMin: ['日','一','二','三','四','五','六'],
				weekHeader : '周',
				monthNames: ['一月','二月','三月','四月','五月','六月',
				'七月','八月','九月','十月','十一月','十二月'],
				//没用上
				monthNamesShort: ['一月','二月','三月','四月','五月','六月',
				'七月','八月','九月','十月','十一月','十二月'],
				prevMonthTitle:"上一月",
				nextMonthTitle:"下一月",
				prevYearTitle:"上一年",
				nextYearTitle:"下一年",
				firstDay: 0,//0~6 日~六
				weekIndex : 'firstDay',//默认是根据firstDay来当作是一周的开始计算日起 ，可自定义星期数 0~6
				//默认系统时间 默认取当前时间
				systemDate : null,
				//当前日历面板显示的月份
				//默认是取今天 或者value的值 如果value是数组则默认取最后一个值
				currentDate : null,
				//y m d w q  年 月 日 周 季度
				//默认显示到指定日期的月份
				//默认选中的日期 默认是当天
				_dateCalcReg : /([\-|\+]\d+)(y|m|d|w|q)/i,//匹配是否是 +1d -1d ...等格式
				value : '',//默认不设置选中日期  eg : '+1d' 0 [ '2014-08-09','+1d' ] 
				getFormater : null,
				setFormater : null,
				autoSelectToday : false,//默认选择今天
				//日期所选的日子
				_selectDate : {}, //默认是defaultDate 可以是是数组表示多个选中日期
				multiSelect : false, //是否可多选
				autoFillOthers : false,//自动填充不足日期的td，日期面板显示的长度是41个单元格 如果不足用空的td填充
				autoChangeMonth : true,//点击其他月份日期时会自动滚动指定月份
				//是否在当前面板显示上、下两个月的一些日期数
				showOtherMonths : true,
				_showPrevMonths : true,//显示上个月的日期
				_showNextMonths : true,//显示下个月的日期
				//板显示上、下两个月的一些日期数时 是否不可选
				otherMonthsDisabled : false,
				//是否显示周
				showWeek : false,
				showDateTips : true,
				dateTipsTag : 'title',
				dateTipsFormat : 'YYYY-MM-DD',
				dateTipsFilter : null,
				dateFilter : null,
				maxDate : null,//最大有效日期
				minDate : null,//最小有效日期
				disabledDate : [],//可以单独指定无效日期
				enabledDate   : [],//如果指定了一个无效范围，但是有个别日期是可选的，就需要使用这个参数
				numberOfMonths : 1,//默认显示多少个月
				topTitleFormat : 'YYYY年M月',
				topTitleFilter : null,
				showChangeMonthBtn : true,//显示 <  >
				_showChangeMonthPrevBtn : true,
				_showChangeMonthRightBtn : true,
				showChangeYearBtn : true,//显示 << >>
				_showChangeYearNextBtn : true,
				_showChangeYearRightBtn : true,
				ymChangeEnable : true,//可通过年月日选择框改变年月
				autoShowymPickerIndex : null,//默认展开第几个年月选择框 0~numberOfMonths-1 该数值
				ymPickerDuration : 100,
				ymPickerAnim : 'easeOutQuad',
				ymPickerAutoClose : true,//点击月份后 年月选择框会自动关闭
				yPickerDelay : 300,
				yPickerPoll  : 50
			};	
		},
		initComponent : function(){
			this.callParent(arguments);
			this._initCalendar();	
			this._resizeAuto();	//兼容IE67
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			self.bind('onDateClick.cal',self._onDateClick,self);
			if( Nex.IEVer < 8 ) {
				self.bind('onResize.cal',self._resizeAuto,self);//	
			}
			return self;
		},
		_initCalendar : function(){
			var self = this,
				opt=this.configs;
			//设置defaultDate
			self._initSystemDate()	
				._setCalendar();
		},
		/*
		*初始化当前日历时间
		*/
		_initSystemDate : function(){
			var self = this,
				opt=this.configs;
			if( opt.systemDate === null ) {
				opt.systemDate = new Date();	
			}	
			if( !self.Date.isDate( opt.systemDate ) ) {
				opt.systemDate = self.Date.parseDate( opt.systemDate, opt.dateFormat ) || new Date();		
			}
			
			opt._currentDate = opt.currentDate;
			opt.currentDate = opt.currentDate || new Date(opt.systemDate.getTime());	
			
			if( !self.Date.isDate( opt.currentDate ) ) {
				opt.currentDate = self.Date.parseDate( opt.currentDate, opt.dateFormat );	
			}
			//设置currentDate value
			if( opt.value === '' && opt.autoSelectToday ) {
				opt.value = 0;	
			}
			self._parseValue();
			
			self._parseMaxMinDate();
			
			return self;		
		},
		getSystemDate : function(){
			return this.configs.systemDate;	
		},
		__parse : function( defDate,date ){
			var self = this,
				opt = this.configs;	
			if( $.type( defDate ) === 'number' ) {
				self.Date.add( date, 'd', defDate );
			} else if( $.type(defDate) === 'string' && opt._dateCalcReg.test( defDate ) ) {
				var ds = defDate.split(/\s+/ig);
				$.each( ds,function(i,defDate){
					var matches = opt._dateCalcReg.exec( defDate );
					self.Date.add( date, matches[2], matches[1] );		
				} );
			} else {
				date = self.Date.parseDate( defDate, opt.dateFormat );	
			}			
			return date;
		},
		_parseValue : function( value ){
			var self = this,
				_value = [],
				opt=this.configs;
			var curr = opt.currentDate;
			var value = self._undef(value , opt.value);
			value = $.isArray( value ) ? value : ( value+'' ).split( opt.sepStr );
			//value = $.isArray( value ) ? value : [ value ];
			//初始化选中日期
			opt._selectDate = {};
			
			for( var i=0;i<value.length;i++ ) {
				if( value[i] === '' || value[i] === null ) continue; 
				var _d = self.__parse( value[i], self.Date.clone(curr) );
				_value.push( _d );
				opt._selectDate[ self.format( _d,'YYYYMMDD' ) ] = true;
			}
			
			opt.value = _value;
			//按asc 排序
			opt.value.sort( function( a,b ){
				return a - b;	
			} );
			//处理开始显示日历的月份数
			if( !opt._currentDate ) {
				opt.currentDate = self._getCurrentDate();
			}
			
			//触发初始化日期事件
			self.fireEvent( 'onParseDefaultDate',[ opt ] );
			
			return self;		
		},
		_parseMaxMinDate : function(){
			var self = this,
				opt = this.configs;	
			var curr = opt.currentDate;	
			if( opt.maxDate !== null ) {
				opt.maxDate = self.Date.parseDate( opt.maxDate,opt.dateFormat );
			}
			if( opt.minDate !== null ) {
				opt.minDate = self.Date.parseDate( opt.minDate,opt.dateFormat );	
			}	
			var disabledDate = $.isArray( opt.disabledDate ) ? opt.disabledDate : [ opt.disabledDate ];	
			var enabledDate = $.isArray( opt.enabledDate  ) ? opt.enabledDate  : [ opt.enabledDate  ];
			
			opt.disabledDate = [];
			opt.enabledDate = [];
			
			$.each( disabledDate,function(i,date){
				var _d = self.__parse( date, self.Date.clone(curr) );	
				opt.disabledDate.push( _d );
			} );
			$.each( enabledDate,function(i,date){
				var _d = self.__parse( date, self.Date.clone(curr) );	
				opt.enabledDate.push( _d );
			} );
			return self;
		},
		//是否属于同一日期
		_isEqual : function(d1,d2){
			return this.format( d1,'YYYYMMDD' ) === this.format( d2,'YYYYMMDD' ) ? true : false;
		},
		//是否属于同一日期
		_isEqualDate : function(d1,d2){
			return this._isEqual( d1,d2 );
		},
		//同月
		_isEqualMonth : function(d1,d2){
			return this.format( d1,'YYYYMM' ) === this.format( d2,'YYYYMM' ) ? true : false;
		},
		//同年
		_isEqualYear : function(d1,d2){
			return this.format( d1,'YYYY' ) === this.format( d2,'YYYY' ) ? true : false;
		},
		_inDisabledList : function( date ){
			var self = this,
				opt = this.configs;	
			var r = false;
			
			var ds = opt.disabledDate;
			
			for( var i=0;i<ds.length;i++ ) {
				if( self._isEqual( date,ds[i] ) ) {
					r = true;
					break;	
				}
			}
			
			return r;		
		},
		_inEnabledList : function( date ){
			var self = this,
				opt = this.configs;	
			var r = false;
			
			var ds = opt.enabledDate;
			
			for( var i=0;i<ds.length;i++ ) {
				if( self._isEqual( date,ds[i] ) ) {
					r = true;
					break;	
				}
			}
			
			return r;		
		},
		isDisabledDate : function( date ){
			var self = this,
				opt = this.configs;	
			//equal	
			var date = self.Date.parseDate( date,opt.dateFormat );	
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			var r = false;
			if( opt.maxDate !== null ) {
				r = date > opt.maxDate ? true : false;
			}	
			if( opt.minDate !== null && !r ) {
				r = date < opt.minDate ? true : false;
			}	
			if( !r ) {
				r = self._inDisabledList( date );	
			}
			if( r ) {
				r = !self._inEnabledList( date );		
			}
			return r;
		},
		setDisabledDate : function( dates ){
			var self = this,
				opt = this.configs;	
			var curr = opt.currentDate;			
			var dates = $.isArray( dates ) ? dates : [dates];
			$.each( dates,function(i,date){
				if( date === '' || date === null ) return;
				var _d = self.__parse( date, self.Date.clone(curr) );	
				var fmt = self.format( _d,'YYYYMMDD' );
				opt.disabledDate.push( _d );	
				$('#'+opt.id+'_'+fmt).addClass('nex-cal-date-disabled');
			} );
			return self;	
		},
		setEnabledDate : function( dates ){
			var self = this,
				opt = this.configs;	
			var curr = opt.currentDate;			
			var dates = $.isArray( dates ) ? dates : [dates];
			$.each( dates,function(i,date){
				if( date === '' || date === null ) return;
				var _d = self.__parse( date, self.Date.clone(curr) );	
				var fmt = self.format( _d,'YYYYMMDD' );
				opt.enabledDate.push( _d );	
				$('#'+opt.id+'_'+fmt).removeClass('nex-cal-date-disabled');
			} );
			return self;	
		},
		//从value中获取最佳显示日期 currentDate
		_getCurrentDate : function(){
			var self = this,
				opt = this.configs;	
			var num = opt.numberOfMonths;
			var _Date = self.Date;
			
			var dates = opt.value;
			var len = dates.length;
			var current = opt.currentDate;
			for( var i=0;i<len;i++ ) {
				var isOk = true;
				var diff = 0;
				var d1 = dates[i];
				for( var j=i+1;j<len;j++ ) {
					var d2 = dates[j];	
					diff = Math.abs(_Date.diff( d1,d2,'m' ));
					if( (diff+1) > num ) {
						isOk = false;
						break;	
					}
				}
				if( isOk ) {
					current = d1;	
					break;
				}
			}
			return current;	
		},
		/*
		*设置默认选中日期 默认选中当天
		*/
		format : function(date,str){
			return this.Date.format( date,str );	
		},
		/*
		*获取thead
		*@param opts 设置参数 默认是configs
		*/
		_getTheadHtml : function( opts ){
			var self = this,
				opt = opts || this.configs;
			var dn = opt.dayNamesMin;
			var html = ['<tr class="nex-cal-row nex-cal-row-h">'];
			if( opt.showWeek ) {
				html.push( '<th class="nex-cal-cell nex-cal-cell-w">' );
				html.push( opt.weekHeader );
				html.push( '</th>' );		
			}
			var len2 = 7 + opt.firstDay;
			for( var i=opt.firstDay;i<len2;i++ ) {
				var day = i%7;
				html.push( '<th class="nex-cal-cell nex-cal-cell-h nex-cal-day'+day+'" data-day="'+day+'">' );
				html.push( dn[day] );
				html.push( '</th>' );	
			}
			html.push('</tr>');
			return html.join('');	
		},
		/*
		*获取指定月份需要显示的日期数
		*返回开始和结束日期
		* 核心
		* firstDay 是指 一周开始日期 默认是周末 算是一周的开始 即：0 如果设置为1 则是 1 2 3 4 5 6 0 为一周 下一周的开始 如果是2 则是 2 3 4 5 6 0 1
		*/
		_getDateRange : function( date,opts ){
			var self = this,
				opt= opts || this.configs;
			var currentDate = date || opt.currentDate;
			var maxDays = self.Date.maxDay( currentDate );	
			var cDate = new Date( currentDate.getTime() );
			cDate.setDate(1);
			var startDate,endDate;
			var html = [];
			if( !opt.showOtherMonths ) {
				endDate = self.Date.lastDay( cDate );
				var eday = endDate.getDay(); 
				var next = eday<opt.firstDay?(7*1)+eday:eday;
				self.Date.add( endDate,'d',next-eday );
				
				var cday = cDate.getDay(); 
				var prev = cday<opt.firstDay?(7*1)+cday:cday;
				self.Date.add( cDate,'d',opt.firstDay-prev );
				startDate = self.Date.clone( cDate );
			} else {
				var cday = cDate.getDay(); 
				if( cday != opt.firstDay ) {
					var prev = cday<opt.firstDay?(7*1)+cday:cday;
					self.Date.add( cDate,'d',opt.firstDay-prev );
				} else {
					self.Date.add( cDate,'d',-7 );	
				}
				startDate = self.Date.clone( cDate );	
				endDate =  self.Date.clone( self.Date.add( cDate,'d',41 ) );//如果需要显示下个月 则是42天 6*7
			}	
			return [ startDate, endDate ];	
		},
		//如果不需要显示其他月份日期则显示6行 每行7天	
		_getTbodyHtml : function( opts ){
			var self = this,
				_opt = this.configs,
				opt = opts || this.configs;	
				
			var dateRange = self._getDateRange( opt.currentDate,opt );
			
			var diff = self.Date.diff( dateRange[0],dateRange[1],'d' ) + 1;
			var startDate = dateRange[0];
			var endDate = dateRange[1];
			var html = [];
			var rows = [];
			var k = 0;
			for( var i=0;i<diff;i++ ) {
				if( i%7 == 0 ) {
					rows[k] = [];
				}
				rows[k].push( self.Date.clone(startDate) );
				if( i%7 == 6 ) {
					k++;
				}	
				self.Date.add( startDate,'d',1 );	
			}
			//autoFillOthers
			if( opt.autoFillOthers ) {
				for( var n=0;n<6;n++ ) {
					var _row = rows[n] || [];
					rows[n] = _row;
					for( var b=_row.length;b<7;b++ ) {
						_row[b] = null;	
					}	
				}	
			}
			var getPad = function(){
				var s = [];
				s.push('<td class="nex-cal-pad">');
				s.push( '&nbsp;' );
				s.push('</td>');	
				return s.join('');	
			};
			var len = rows.length;
			
			var rlast = len ? rows[0][6] : null;
			
			if( rlast )
			
			for( var j=0;j<len;j++ ) {
				var row = rows[j];
				if( j == 0 ) {
					var plast = row[6];
					if( self._isOtherMonth(plast, opt.currentDate) && !opt._showPrevMonths ) {
						continue;	
					}
				}
				if( j == len-1 ) {
					var nlast = row[0];
					if( self._isOtherMonth(nlast, opt.currentDate) && !opt._showNextMonths ) {
						continue;	
					}
				}
				html.push('<tr class="nex-cal-row nex-cal-row-b">');	
				if( opt.showWeek ) {
					var index = 0;
					if( opt.weekIndex != 'firstDay' ) {
						//计算星期索引位置
						index = parseInt(opt.weekIndex,10)<opt.firstDay?(7-opt.firstDay+opt.weekIndex):(opt.weekIndex-opt.firstDay);	
					}
					var week = self.Date.weekOfYear( row[index] );
					html.push( '<td class="nex-cal-cell nex-cal-cell-w" data-week="'+week+'">' );
					html.push( week );
					html.push( '</td>' );		
				}	
				for( var k=0;k<7;k++ ) {
					var date = row[ k ];
					if( date === null || !self.Date.isDate( date ) ) {
						html.push( getPad() );
						continue;
					}
					var day = date.getDay();
					var part = self.Date.dateObject(date);
					var isOtherMonth = self._isOtherMonth(date, opt.currentDate);
					//_showPrevMonths _showNextMonths
					if( isOtherMonth && !opt.showOtherMonths ) {//isOtherMonth && 
						html.push( getPad() );
						continue;
					}
					if( isOtherMonth ) {
						if( date.getTime() < opt.currentDate.getTime() && !opt._showPrevMonths ) {
							html.push( getPad() );
							continue;	
						}
						if( date.getTime() > opt.currentDate.getTime() && !opt._showNextMonths ) {
							html.push( getPad() );	
							continue;
						}
					}
					var tips = '';
					if( opt.showDateTips ) {
						tips = self._dateTipsFilter( date );	
					}
					
					var isToday = self._isToday( date );
					var cls = ['nex-cal-cell','nex-cal-cell-b','nex-cal-day'+day];//,'nex-cal-day'+k
					
					self.fireEvent('onSetDateClass',[ {'class':cls,data:date},_opt ]);
					
					if( isOtherMonth ) {
						cls.push( 'nex-cal-other-month' );	
					}
					if( isToday ) {
						cls.push( 'nex-cal-today' );	
					}
					if( self.isDisabledDate( date ) ) {
						cls.push( 'nex-cal-date-disabled' );		
					}
					
					html.push('<td id="'+opt.id+'_'+ self.format( date,'YYYYMMDD' ) +'" calid="'+opt.id+'" class="'+cls.join(' ')+'" data-year="'+part['y+']+'" data-month="'+part['M+']+'" data-date="'+part['d+']+'" '+tips+'>');
					html.push( self._dateFiter( self.format( date,'d' ), date ) );
					html.push('</td>');
				}
				html.push('</tr>');	
			}
			return html.join('');
		},
		/*
		*获取日历显示内容
		*@param opts 设置参数
		*/
		_getCalendarHtml : function( opts ){
			var self = this;
			var opt = this.configs;
			if( $.type( opts ) === 'string' ) {
				opts = {
					currentDate : opts
				};
			}
			var opts = opts || {};
			var _d = $.extend( {},opt );
			opts = $.extend( {},_d,opts );	
			var html = [
				'<table class="nex-cal-table" cellpadding="0" cellspacing="0" border="0">',
					'<thead>'+self._getTheadHtml(opts)+'</thead>',
					'<tbody>'+self._getTbodyHtml(opts)+'</tbody>',
				'</table>'
			];
			return html.join('');
		},
		/*
		*显示提示日期内容过滤
		*/
		_dateTipsFilter : function( startDate ){
			var self = this,
				opt=this.configs;
			var tips = '';	
			var str = '';
			tips += opt.dateTipsTag+'="';
			if( $.isFunction( opt.dateTipsFilter ) ) {
				str += opt.dateTipsFilter.call( self, self.format( startDate,opt.dateTipsFormat ), startDate);	
			} else {
				str += self.format( startDate,opt.dateTipsFormat );
			}
			var d = {
				value : str,
				date : startDate
			};
			self.fireEvent('onDateTipsFilter',[d,opt]);
			tips += Nex.htmlEncode(d.value);
			tips += '"';	
			return tips;	
		},
		/*
		*显示日期内容过滤
		*/
		_dateFiter : function( s,date ){
			var self = this,
				opt=this.configs;
			var str = s;
			if( $.isFunction( opt.dateFilter ) ) {
				str	= opt.dateFilter.call( self,str,date );
			}	
			var d = {value:str,date:date};
			self.fireEvent('onDateFilter',[d,opt]);
			return d.value;	
		},
		/*
		*判断日期否属于当日
		*/
		_isToday : function( date ){
			var self = this,
				opt=this.configs;
			var currentDate = opt.systemDate;	
			if( $.type( date ) === 'string' ) {
				date = self.Date.strToDate( date );	
			}	
			var p1 = self.Date.dateObject( currentDate );
			var p2 = self.Date.dateObject( date );
			if( p1['y+'] != p2['y+'] ) return false;
			if( p1['M+'] != p2['M+'] ) return false;
			if( p1['d+'] != p2['d+'] ) return false;
			return true;	
		},
		/*
		*判断当前日期是否不输入本月
		*/
		_isOtherMonth : function(date,curr){
			var self = this,
				opt=this.configs;
			var currentDate = curr||opt.currentDate;	
			if( $.type( date ) === 'string' ) {
				date = self.Date.strToDate( date );	
			}	
			var p1 = self.Date.dateObject( currentDate );
			var p2 = self.Date.dateObject( date );
			if( p1['y+'] != p2['y+'] ) return true;
			if( p1['M+'] != p2['M+'] ) return true;
			return false;
		},
		_setCalendarItemHeader : function( i,opts ){
			var self = this,
				opt  = this.configs,
				opts  = opts || this.configs;
			var bd = $('#'+opt.id+'_item'+i);	
			var html = $('<div id="'+opt.id+'_item'+i+'_header" class="nex-cal-item-header"></div>');
			bd.append( html );
			//showChangeMonthBtn
			//topTitleFilter
			var topTitle = self.format( opts.currentDate,opt.topTitleFormat );
			if( $.isFunction( opts.topTitleFilter ) ) {
				topTitle = opts.topTitleFilter.call( self,opts.currentDate );
			}
			var wrap = [
				'<div class="nex-cal-item-title">',
					'<div class="nex-cal-prev-icons">',
						opts.showChangeYearBtn && opts._showChangeYearNextBtn ? '<a href="javascript:void(0);" title="'+opt.prevYearTitle+'" class="nex-cal-aicon nex-cal-prevyear"></a>' : '',
						opts.showChangeMonthBtn && opts._showChangeMonthPrevBtn ? '<a href="javascript:void(0);" title="'+opt.prevMonthTitle+'" class="nex-cal-aicon nex-cal-prevmonth"></a>' : '',
					'</div>',
					'<span class="nex-cal-ymlabel">'+topTitle+'</span>',
					'<div class="nex-cal-next-icons">',
						opts.showChangeMonthBtn && opts._showChangeMonthRightBtn ? '<a href="javascript:void(0);" title="'+opt.nextMonthTitle+'" class="nex-cal-aicon nex-cal-nextmonth"></a>' : '',
						opts.showChangeYearBtn && opts._showChangeYearRightBtn ? '<a href="javascript:void(0);" title="'+opt.nextYearTitle+'" class="nex-cal-aicon nex-cal-nextyear"></a>' : '',
					'</div>',
				'</div>'
			];
			
			html.html( wrap.join('') );
			
			return self;
		},
		_setCalendarItemBody : function( i,opts ){
			var self = this,
				opt  = this.configs,
				opts  = opts || this.configs;
			var bd = $('#'+opt.id+'_item'+i);	
			var html = $('<div id="'+opt.id+'_item'+i+'_body" class="nex-cal-item-body">'+self._getCalendarHtml( opts )+'</div>');
			bd.append( html );
			
			return self;
		},
		_setCalendarItemFooter : function( i,opts ){
			var self = this,
				opt  = this.configs,
				opts  = opts || this.configs;
			var bd = $('#'+opt.id+'_item'+i);	
			var html = $('<div id="'+opt.id+'_item'+i+'_footer" class="nex-cal-item-footer"></div>');
			bd.append( html );	
			return self;			
		},
		getCurrentDate : function(){
			return this.configs.currentDate;	
		},
		setCurrentDate : function( date ){
			var opt = this.configs;
			opt.currentDate = this.Date.parseDate( date,opt.dateFormat )
			return this;	
		},
		_setCalendarItemEvents : function(){
			var self = this,
				opt=this.configs;
			var dom = self.getDom();
			var call = function(evt,e,func){
				var $this = $(this);
				
				var date = new Date( $this.data('year'),parseInt($this.data('month'),10)-1,$this.data('date') );
				
				var r = self.fireEvent(evt,[ date,this,e,opt ]);	
				if( r === false ) {
					e.stopPropagation();
					e.preventDefault();
				} else {
					if( $.isFunction( func ) ) {
						func.call( this,date );	
					}
				}
			};
			var events = {
				'click.cal' : function(e){
					call.call( this,'onDateClick',e );
				},
				'mouseenter.cal' : function(e){
					call.call( this,'onDateOver',e,function(){
						if( !$(this).hasClass('nex-cal-date-disabled') ) {
							$(this).addClass('nex-cal-date-over');			
						}
					} );
				},
				'mouseleave.cal' : function(e){
					call.call( this,'onDateOut',e,function(){
						if( !$(this).hasClass('nex-cal-date-disabled') ) {
							$(this).removeClass('nex-cal-date-over');	
						}
					} );	
				},
				'mousedown.cal' : function(e){
					call.call( this,'onDateMouseDown',e );		
				},	
				'mouseup.cal' : function(e){
					call.call( this,'onDateMouseUp',e );			
				},
				'contextmenu.cal' : function(e){
					call.call( this,'onDateContextMenu',e );			
				},
				'dblclick.cal' : function(e){
					call.call( this,'onDateDblClick',e );	
				}
			};
			dom.undelegate('.cal')
			   .delegate('[calid="'+opt.id+'"]',events)
			   .delegate('.nex-cal-prevyear',{
					'click.cal' : function(e){
						var r = self.fireEvent('onPrevYear',[ opt ]);
						if( r === false ) return;
						self.prevYear();	
					}   
			    })
				.delegate('.nex-cal-nextyear',{
					'click.cal' : function(e){
						var r = self.fireEvent('onNextYear',[ opt ]);
						if( r === false ) return;
						self.nextYear();	
					}   
			    })
				.delegate('.nex-cal-prevmonth',{
					'click.cal' : function(e){
						var r = self.fireEvent('onPrevMonth',[ opt ]);
						if( r === false ) return;
						self.prevMonth();	
					}   
			    })
				.delegate('.nex-cal-nextmonth',{
					'click.cal' : function(e){
						var r = self.fireEvent('onNextMonth',[ opt ]);
						if( r === false ) return;
						self.nextMonth();	
					}   
			    })
				.delegate('.nex-cal-ymlabel',{
					'click.cal' : function(e){
						var _item = $(this).closest('.nex-cal-item');
						var citem = _item.attr('citem');
						var y = _item.data('year');
						var m = parseInt(_item.data('year'),10);
						var date = new Date(y,m-1);
						var r = self.fireEvent('onItemTitleClick',[ date,citem,opt ]);
						if( r === false ) return;
						if( opt.ymChangeEnable ) {
							self.showYearMonthPicker(citem);
						}
					}   
			    }); 
			return self;		
		},
		_getMonthPickerHtml : function( ci ){
			var self = this,
				opt = this.configs;	
			var months = [
				[0,1,2,3],
				[4,5,6,7],
				[8,9,10,11]
			];	
			var m = '';
			for( var i=0;i<months.length;i++ ) {
				var t = months[i];
				m += '<tr>';
					for( var j=0;j<t.length;j++ ) {
						m += '<td width="25%" class="nex-cal-mpicker-b nex-cal-mpicker-'+t[j]+'" data-month="'+(t[j]+1)+'" id="'+opt.id+'_'+ci+'_m'+t[j]+'">'+opt.monthNames[t[j]]+'</td>'; 
					}
				m += '</tr>';	
			}
			var html = [
				'<table class="nex-cal-mpicker-table" cellpadding="0" cellspacing="0" border="0">',
					m,
				'</table>',
			];	
			return html.join('');
		},
		_getYearPickerHtml : function( i ){
		},
		_getYearMonthPickerHtml : function(i){
			var self = this,
				opt = this.configs;	
			var html = [
				'<div id="'+opt.id+'_item'+i+'_ympicker" class="nex-cal-ympicker">',
					'<div id="'+opt.id+'_item'+i+'_ypicker_wrap"'+' class="nex-cal-ypicker-wrap">',
						'<span class="prev-ypicker"></span><input class="nex-cal-ypicker" id="'+opt.id+'_item'+i+'_ypicker" type="text" value=""><span class="next-ypicker"></span>',
					'</div>',
					'<div id="'+opt.id+'_item'+i+'_line" class="nex-cal-ympicker-line"></div>',
					'<div id="'+opt.id+'_item'+i+'_mpicker"'+' class="nex-cal-mpicker-wrap">',
						self._getMonthPickerHtml( i ),
					'</div>',
				'</div>'
			];	
			return html.join('');
		},
		__activePicker : null,
		hideYearMonthPicker : function( i,func ){
			var self = this,
				opt = this.configs;	
			var i = self._undef( i,self.__activePicker );
			if( i === null ) {
				if( $.isFunction( func ) ) {
					func();	
				}
				return self;	
			} 
			self.__activePicker = null;
			var picker = $('#'+opt.id+'_item'+i+'_ympicker');
			picker.stop(true).animate({
				top : picker._outerHeight()*-1,
				opacity : 0
			},opt.ymPickerDuration || 1,opt.ymPickerAnim,function(){
				if( $.isFunction( func ) ) {
					func();	
				}	
				self.fireEvent('onYearMonthPickerHide',[ picker, i, opt]);	
			});
		},
		//显示年月份选择框
		showYearMonthPicker : function( citem ){
			var self = this,
				opt = this.configs;	
				
			var citem = self._undef( citem,1 );
			
			var _itemWrap = $('#'+opt.id+'_item'+citem);
			var _item = $('#'+opt.id+'_item'+citem+'_body');
			
			var picker = $('#'+opt.id+'_item'+citem+'_ympicker');
			var _isInit = false;
			if( !picker.length ) {		
				picker = $( self._getYearMonthPickerHtml( citem ) );
				_item.append( picker );
				self.setYearMonthPickerEvents( citem );
				_isInit = true;
				self.fireEvent('onYearMonthPickerCreate',[ picker, citem, opt]);
			}
			
			var y = _itemWrap.data('year'),
				m = _itemWrap.data('month');
			
			if( self.__activePicker === citem && !_isInit ) {
				self.hideYearMonthPicker( citem );
			} else {
				
				self.hideYearMonthPicker( self.__activePicker );
				
				self.setYearMonthPickerSize( citem );
				self.setYearMonthPickerValue( citem,y,m );
					
				self.__activePicker = citem;	
				picker.stop(true).animate({
					top : 0,
					opacity : 1
				},opt.ymPickerDuration || 1,opt.ymPickerAnim,function(){
					self.fireEvent('onYearMonthPickerShow',[ picker, citem, opt]);	
				});	
			}	
			return self;
		},
		//设置month year picker大小
		setYearMonthPickerSize : function( i ){
			var self = this,
				opt = this.configs;	
			var _item = $('#'+opt.id+'_item'+i+'_body');
			var w = _item.width();
			var h = _item.height();	
			var picker = $('#'+opt.id+'_item'+i+'_ympicker');
			picker._outerHeight( h );	
			picker._outerWidth( w );
			var ph = Math.min(picker.height(),h);//使用Math.min主要是兼容IE6 。。。
			var pw = Math.min(picker.width(),w);
			var bh = ph - $('#'+opt.id+'_item'+i+'_ypicker_wrap')._outerHeight(true) - $('#'+opt.id+'_item'+i+'_line')._outerHeight(true);
			var mpicker = $('#'+opt.id+'_item'+i+'_mpicker');
			mpicker._outerHeight( bh );
			mpicker._outerWidth( pw );
		},
		setYearMonthPickerValue : function(i,y,m){
			var self = this,
				opt = this.configs;
			var picker = $('#'+opt.id+'_item'+i+'_ympicker');	
			m--;	
			$('.nex-cal-month-selected',picker).removeClass('nex-cal-month-selected');
			$('#'+opt.id+'_item'+i+'_ypicker').val( y );
			$('#'+opt.id+'_'+i+'_m'+m).addClass('nex-cal-month-selected');
				
		},
		_selectMonthPicker : function( citem,y,m,t ){
			var self = this,
				opt = this.configs;
				
			var picker = $('#'+opt.id+'_item'+citem+'_ympicker');
				
			$('.nex-cal-month-selected',picker).removeClass('nex-cal-month-selected');
			$(t).addClass('nex-cal-month-selected');
			
			var date = new Date( y,m-1 );
			
			self.Date.add(date,'m',citem*-1);
			
			
			
			if( opt.ymPickerAutoClose ) { 
				self.hideYearMonthPicker( citem,function(){
					self.changeMonth( date.getFullYear(),date.getMonth()+1 );
				} );
			}	
		},
		setYearMonthPickerEvents : function( citem ){
			var self = this,
				opt = this.configs;
			var picker = $('#'+opt.id+'_item'+citem+'_ympicker');
			$('#'+opt.id+'_item'+citem+'_ypicker_wrap').disableSelection();
			var t1 = 0,
				t2 = 0;
			picker.undelegate('.cal')
			   	  .delegate( '.nex-cal-mpicker-b',{
						'click.cal' : function(e){
							var y = $('#'+opt.id+'_item'+citem+'_ypicker').val(),
								m =  parseInt( $(this).data('month'), 10);
								
							var  r = self.fireEvent('onMonthPickerClick',[ y, m, this, e, opt]);
							if( r === false ) return;
							
							self._selectMonthPicker( citem,y,m,this );
							
						},  
						'mouseenter.cal' : function(e){
							var y = $('#'+opt.id+'_item'+citem+'_ypicker').val(),
								m =  parseInt( $(this).data('month'), 10);
							var  r = self.fireEvent('onMonthPickerOver',[ y,m,this, e, opt]);
							if( r === false ) return;
							$(this).addClass('nex-cal-mpicker-over');	
						},
						'mouseleave.cal' : function(e){
							var y = $('#'+opt.id+'_item'+citem+'_ypicker').val(),
								m =  parseInt( $(this).data('month'), 10);
							var  r = self.fireEvent('onMonthPickerOut',[ y,m,this, e, opt]);
							if( r === false ) return;
							$(this).removeClass('nex-cal-mpicker-over');		
						},
						'dblclick.cal' : function(e){
							var y = $('#'+opt.id+'_item'+citem+'_ypicker').val(),
								m =  parseInt( $(this).data('month'), 10);
							var  r = self.fireEvent('onMonthPickerDblClick',[ y,m,this, e, opt]);
							if( r === false ) return;	
						}
				  } )
				  .delegate( '.nex-cal-ypicker',{
					  	'click.cal' : function(e){
							var y = $(this).val();
							var  r = self.fireEvent('onYearPickerClick',[ y,this, e, opt]);
							if( r === false ) return;	
							$(this).select();		
						},
						'mouseente.calr' : function(e){
							var y = $(this).val();
							var  r = self.fireEvent('onYearPickerOver',[ y,this, e, opt]);
							if( r === false ) return;	
							$(this).addClass('nex-cal-ypicker-over');	
						},
						'mouseleave.cal' : function(e){
							var y = $(this).val();
							var  r = self.fireEvent('onYearPickerOut',[ y,this, e, opt]);
							if( r === false ) return;	
							$(this).removeClass('nex-cal-ypicker-over');		
						},
						'focus.cal' : function(e){
							var y = $(this).val();
							var  r = self.fireEvent('onYearPickerFocus',[ y,this, e, opt]);
							if( r === false ) return;
							$(this).addClass('nex-cal-ypicker-focus');
							setTimeout(function(){
								$(this).select();	
							},0);
						},
						'blur.cal' : function(e){
							var y = $(this).val();
							var  r = self.fireEvent('onYearPickerBlur',[ y,this, e, opt]);
							if( r === false ) return;
							$(this).removeClass('nex-cal-ypicker-focus');		
						} 
				  } )
				  .delegate( '.prev-ypicker',{
					  	'click.cal' : function(e){
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerPrevClick',[ y,this, e, opt]);
							if( r === false ) return;	
							y--;
							y = Math.max( 0,y );
							ypicker.val( y );	
						},
						'mousedown.cal' : function(e){//处理鼠标100ms后触发自动计算
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerPrevMouseDown',[ y,this, e, opt]);
							if( r === false ) return;	
							t1 = setTimeout(function(){
								t2 = setInterval( function(){
									y--;
									y = Math.max( 0,y );
									ypicker.val( y );	
								},opt.yPickerPoll );
							},opt.yPickerDelay);
						},
						'mouseup.cal' : function(e){
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerPrevMouseDownUp',[ y,this, e, opt]);
							if( r === false ) return;		
							clearTimeout(t1);
							clearTimeout(t2);
						},
						'mouseleave.cal' : function(){
							clearTimeout(t1);
							clearTimeout(t2);		
						}
				  } )
				  .delegate( '.next-ypicker',{
					  	'click.cal' : function(e){
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerNextClick',[ y,this, e, opt]);
							if( r === false ) return;	
							y++;
							ypicker.val( y );	
						},
						'mousedown.cal' : function(e){
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerNextMouseDown',[ y,this, e, opt]);
							if( r === false ) return;		
							t1 = setTimeout(function(){
								t2 = setInterval( function(){
									y++;
									ypicker.val( y );	
								},opt.yPickerPoll );
							},opt.yPickerDelay);
						},
						'mouseup.cal' : function(e){
							var ypicker = $('#'+opt.id+'_item'+citem+'_ypicker');
							y = parseInt(ypicker.val(),10);
							var  r = self.fireEvent('onYearPickerNextMouseDownUp',[ y,this, e, opt]);
							if( r === false ) return;	
							clearTimeout(t1);
							clearTimeout(t2);	
						},
						'mouseleave.cal' : function(){
							clearTimeout(t1);
							clearTimeout(t2);		
						}
				  } );	
		},
		getYearMonthPickerDate : function( i ){
			var self = this,
				opt = this.configs;
			var i = self._undef( i,0 );	
			var y = $('#'+opt.id+'_item'+i+'_ypicker').val(  );
			var m = $('#'+opt.id+'_item'+i+'_mpicker').find( '.nex-cal-month-selected:first' ).data('month');
			return new Date( y,parseInt( m,10 ) );
		},
		setYearMonthPickerDate : function(i,y,m){
			return this.setYearMonthPickerValue(i,y,m);	
		},
		_setCalendarHeader : function(){
			var self = this,
				opt = this.configs;
			var html = $('<div class="nex-cal-header" id="'+opt.id+'_header"></div>');
			self.el.append( html );
			self.headerEl = html;
			self.fireEvent('onCalendarHeaderCreate',[ html, opt ]);
			return self;
		},
		getBody : function(){
			return this.bodyEl;
		},
		_setCalendarBody : function(){
			var self = this,
				opt = this.configs;
			var html = $('<div class="nex-cal-body" id="'+opt.id+'_body"></div>');
			self.el.append( html );	
			self.bodyEl = html;
			self.fireEvent('onCalendarBodyCreate',[ html, opt ]);
			return self;	
		},
		_setCalendarFooter :　function(){
			var self = this,
				opt = this.configs;
			var html = $('<div class="nex-cal-footer" id="'+opt.id+'_footer"></div>');
			self.el.append( $('<div class="nex-cal-clear"></div>') )	
				   .append( html )
				   .append( $('<div class="nex-cal-clear"></div>') );	
			self.footerEl = html;
			self.fireEvent('onCalendarFooterCreate',[ html, opt ]);
			return self;		
		},
		/*
		*设置日历的布局
		*/
		_setCalendar : function(){
			var self = this,
				opt = this.configs;
			self._setCalendarHeader()
				._setCalendarBody()
				._setCalendarFooter()
				._setCalendarItemEvents()
				._setCalendarItems()
				._afterRender();
			return self;	
		},
		_getCalendarItemsTpl : function( num ){
			var opt = this.configs;
			var num = this._undef( num,1 );
			var html = [];
			html.push(
					'<table cellpadding="0" cellspacing="0" border="0" class="nex-cal-items-table" id="'+opt.id+'_items_table">',
						'<tbody>',
							'<tr>'
					);
							for( var i=0;i<num;i++ ) {
								html.push(
									'<td class="nex-cal-item-table-td" citem="'+i+'">',
										'<div id="'+opt.id+'_item'+i+'" citem='+i+' class="nex-cal-item"></div>',
									'</td>'
								);
								var showSep = true;
								if( i == num-1 ) {
									showSep = false;	
								}
								var d = {show : showSep};
								var r = this.fireEvent('onSetItemSplitTd',[d,i,num,opt]);
								if( r !== false && d.show ) {
									html.push(
										'<td class="nex-cal-item-split-td" citem="'+i+'">',
											'<div class="nex-cal-item-split-line"></div>',
										'</td>'
									);		
								}
							}
					html.push(
							'</tr>',
						'</tbody>',
					   '</table>'
					);	
			return html.join('');		
		},
		_setCalendarItems : function(){
			var self = this,
				opt = this.configs;
			//numberOfMonths
			var num = parseInt(opt.numberOfMonths,10) || 1;
			self.bodyEl.html( self._getCalendarItemsTpl( num ) );
			
			var last = num - 1;
			for( var i=0;i<num;i++ ) {
				
				var d = $.extend( {},opt );
				d.currentDate = new Date(opt.currentDate.getTime());
				
				self.Date.add(d.currentDate,'m',i);
				
				if( i == 0 ) {
					d._showChangeMonthPrevBtn = true;
					d._showChangeYearNextBtn = true;
					
					d._showPrevMonths = true;
				} else {
					d._showChangeMonthPrevBtn = false;
					d._showChangeYearNextBtn = false;
					
					d._showPrevMonths = false;
				}
				if( i == last ) {
					d._showChangeMonthRightBtn = true;
					d._showChangeYearRightBtn = true;
					
					d._showNextMonths = true;
				} else {
					d._showChangeMonthRightBtn = false;
					d._showChangeYearRightBtn = false;	
					
					d._showNextMonths = false;
				}
				//设置showOtherMonths
				if( opt.showOtherMonths ) {
					if( i == 0 || i == last ) {
						d.showOtherMonths = true;
					} else {
						d.showOtherMonths = false;	
					}
				}
				
				var _item = $('#'+opt.id+'_item'+i);
				var part = self.Date.dateObject( d.currentDate );
				_item.attr('data-year',part['y+']);
				_item.attr('data-month',part['M+']);
				
				self.fireEvent('onBeforeCalendarItemCreate',[d,i,opt]);	
				self._setCalendarItemHeader( i,d )
					._setCalendarItemBody( i,d )
					._setCalendarItemFooter( i,d );
				self.fireEvent('onCalendarItemCreate',[_item,i,opt]);	
			}
			//items设置后 应该重新设置宽高
			if( !opt._isInit ) {
				self._refreshCalendarItemsSize();	
			}
			self._afterRenderItems();
			self.fireEvent('onCalendarItemsRender',[opt]);	
			return this;		
		},
		_currentDate : null,
		_afterRenderItems : function(){
			this._currentDate = this.Date.clone(this.getCurrentDate());
			this._refreshSelectDate();	
		},
		//刷新日期列表
		_refreshItems : function(){
			this._setCalendarItems();
			this._resizeAuto();	
		},
		/*
		*刷新日历
		*/
		refreshItems : function( m ){
			
			if( !m && this._currentDate ) {
				if( this._isEqualMonth( this._currentDate,this.getCurrentDate() ) ) {
					return this;	
				}	
			}
			
			this._refreshItems();
			this.fireEvent('onRefreshCalendarItems',[ this.configs ]);
			return this;	
		},
		refreshCalendar : function(m){
			return this.refreshItems( m );
		},
		//往后翻n月
		prevMonth : function( n ){
			var self = this,
				opt=this.configs;
			var n = self._undef(n,1);
			
			self.Date.add( opt.currentDate,'m',Math.abs(n)*-1 );
			
			self.refreshItems();
			return self;		
		},
		nextMonth : function( n ){
			var self = this,
				opt=this.configs;
			var n = self._undef(n,1);
				
			self.Date.add( opt.currentDate,'m',Math.abs(n));
			
			self.refreshItems();	
			return self;		
		},
		prevYear : function( n ){
			var self = this,
				opt=this.configs;
			var n = self._undef(n,1);
				
			self.Date.add( opt.currentDate,'y',Math.abs(n)*-1);
			
			self.refreshItems();	
			return self;		
		},
		nextYear : function( n ){
			var self = this,
				opt=this.configs;
			var n = self._undef(n,1);
				
			self.Date.add( opt.currentDate,'y',Math.abs(n));
			
			self.refreshItems();
			return self;			
		},
		/*IE6 7时使用*/
		_resizeAuto : function(){
			var self = this,
				opt=this.configs;
			if( Nex.IEVer == 6 || Nex.IEVer == 7 ) {	
				if( self.isAutoWidth() ) {
					var w = $('#'+opt.id+'_items_table')._width();
					self.getBody().width( w );
				}	
			}	
		},
		_isOutside : function( date ){
			var self = this,
				opt=this.configs;
			var num = opt.numberOfMonths;
			for( var i=0;i<num;i++ ) {
				var curr = self.Date.clone( opt.currentDate );
				if( !self._isOtherMonth( date,self.Date.add(curr,'m',i) ) ) {
					return false;	
				}	
			}	
			return true;
		},
		_onDateClick : function( date,t,e ){
			var self = this,
				opt=this.configs;
			//无效日期不可点击
			if( $(t).hasClass( 'nex-cal-date-disabled' ) ) {
				return;	
			}
				
			var r = self.fireEvent('onBeforeDateSelected',[date,t,e]);	
			if( r === false ) return;
			//如果日期是属于别的月份 且自动滚动日期 则自动切换日期
			if( self._isOutside( date ) && opt.autoChangeMonth ) {
				if( date>opt.currentDate ) {
					self.nextMonth();
				} else {
					self.prevMonth();	
				}
			}
			
			self.toggleSelectDate( date );	
		},
		_afterRender : function(){
			var opt = this.configs;
			this.fireEvent('onCalendarCreate',[ opt ]);	
			if( opt.autoShowymPickerIndex !== null && !isNaN( parseInt( opt.autoShowymPickerIndex, 10 ) ) ) {
				this.showYearMonthPicker( Math.min( opt.autoShowymPickerIndex,opt.numberOfMonths-1 ) );	
			}
		},
		_setHeightAuto : function(){
			var self = this;
			var opt = self.configs;	
			var views = opt.views;	
			var bd = self.getBody();
			var container = self.getContainer();
			container._removeStyle('height',true);
			if( bd ) {
				bd._removeStyle('height',true);	
			}
			$('.nex-cal-item-body',bd)._removeStyle('height',true);
		},
		_setWidthAuto : function(){
			var self = this;
			var opt = self.configs;	
			var views = opt.views;	
			var bd = self.getBody();
			var container = self.getContainer();
			container._removeStyle('width',true);
			if( bd ) {
				bd._removeStyle('width',true);	
			}
		},
		doSetViewSize : function(){
			var self = this;
			var opt = self.configs;
			var container = self.getContainer();	
			
			self.callParent(arguments);	
			
			if( !self.isAutoHeight() ) {
				container.removeClass('nex-cal-height-auto');
				var height = container._height() - self.headerEl._outerHeight() - self.footerEl._outerHeight();
				self.bodyEl._outerHeight( height );
			} else {
				container.addClass('nex-cal-height-auto');
			}
			if( !self.isAutoWidth() ) {
				container.removeClass('nex-cal-width-auto');
				self.bodyEl._outerWidth( container._width() );
			} else {
				container.addClass('nex-cal-width-auto');	
			}
			self._refreshCalendarItemsSize();
		},
		/*设置items的的大小*/
		_refreshCalendarItemsSize : function(){
			var self = this;
			var opt = self.configs;		
			if( !self.isAutoHeight() ) {
				var bheight = self.bodyEl._height();
				//大部分浏览器td的div如果不给td设置宽度div的百分比设置无效。 chrome上就没问题
				$('.nex-cal-item-table-td,.nex-cal-item-split-td',self.bodyEl).each( function(){
					$(this)._outerHeight( bheight );
				} );	
				$('.nex-cal-item',self.bodyEl).each( function(){
					var $this = $(this);
					var height = $this._height() - $('>.nex-cal-item-header',$this)._outerHeight() - $('>.nex-cal-item-footer',$this)._outerHeight();	
					$('>.nex-cal-item-body',$this)._outerHeight(height);
				} );
			}
			if( !self.isAutoWidth() ) {
			}
			self.fireEvent('onSetCalendarItemsSize',[opt]);
			return self;
		},
		//刷新日期选中状态
		_refreshSelectDate : function(){
			var self = this;
			var opt = self.configs;
			var last = null;
			$.each( opt._selectDate,function(d,v){
				last = d;
				if( v && opt.multiSelect ) {
					self._selectDate( d,true  );	
				}	
			} );	
			if( !opt.multiSelect && last ) {
				self._selectDate( last,true  );	
			}
			return self;
		},
		/*
		*取消所有选中日期
		*/
		_unselectAll : function(){
			var self = this;
			var opt = self.configs;
			
			opt._selectDate = {};
			
			$('.nex-cal-date-selected',self.bodyEl).removeClass('nex-cal-date-selected');
			
			/*$.each( opt._selectDate,function(d,v){
				if( v ) {
					self._unselectDate( d,true  );	
				}	
			} );	*/
			return self;	
		},
		//判断是否已经被选中
		isSelected : function(date,m){
			var self = this;
			var opt = self.configs;
			
			var fmt = self._parseSDate( date,m );
			
			return opt._selectDate[ fmt ] ? true : false;	
		},
		/*
		*把日期转化成YYYYMMDD格式
		*/
		_parseSDate : function( date,m ){
			var self = this;
			var opt = self.configs;	
			var date = date || opt.currentDate;
			var _Date = self.Date;
			var fmt;
			if( m !== true ) {
				if( !_Date.isDate( date ) ) {
					date = _Date.strToDate( date,m );	
				}
				fmt = self.format(date,'YYYYMMDD');
			} else {
				fmt = date;	
			}
			return fmt;
		},
		/*
		*设置日期的选中状态 
		*@param date 日期对象或者YYYY-MM-DD格式的日期
		*/
		_selectDate : function( date,m ){
			var self = this;
			var opt = self.configs;
			
			var fmt = self._parseSDate( date,m );
			
			var id = opt.id+'_'+fmt;
			//单选
			if( !opt.multiSelect ) {
				self._unselectAll();	
			}
			
			$( '#'+id ).addClass('nex-cal-date-selected');
			
			opt._selectDate[ fmt ] = true;
			
			return date;
		},
		/*
		*设置日期的选中状态 
		*@param date 日期对象或者YYYY-MM-DD格式的日期
		*/
		_unselectDate : function( date,m ){
			var self = this;
			var opt = self.configs;
			
			var fmt = self._parseSDate( date,m );
			
			var id = opt.id+'_'+fmt;
			
			$( '#'+id ).removeClass('nex-cal-date-selected');
			
			opt._selectDate[ fmt ] = false;
			delete opt._selectDate[ fmt ];
			
			return date;
		},
		unselectAll : function(){
			var self = this;
			var r = this.fireEvent('onDateUnSelectedAll',[date,m,this.configs]);
			if( r === false ) return this;
			
			this._unselectAll();
			
			self.fireEvent('onDateChange',[this.getValue(),this.configs]);
			
			return this;	
		},
		unselectDate : function(date,m){
			var self = this;
			var r = this.fireEvent('onDateSelected',[date,m,this.configs]);
			if( r === false ) return this;
			
			this._unselectDate(date,m);
			
			self.fireEvent('onDateChange',[this.getValue(),this.configs]);
			
			return this;	
		},
		selectDate : function( date,m ){
			var self = this;
			var opt = self.configs;
			
			var r = self.fireEvent('onDateSelected',[date,m,opt]);
			if( r === false ) return self;
			
			self._selectDate(date,m);	
			
			self.fireEvent('onDateChange',[this.getValue(),opt]);
			
			return self;
		},
		toggleSelectDate : function( date,m ){
			var self = this;
			var opt = self.configs;
			
			var fmt = self._parseSDate( date,m );
			
			if( opt.multiSelect ) {
				if( self.isSelected( date,m ) ) {
					self.unselectDate( date,m );					
				} else {
					self.selectDate( date,m );					
				}
			} else {
				self.selectDate( date,m );					
			}
			return self;
		},
		/*
		*选择一段日期范围
		*/
		_selectDateRange : function( start, end ){
			var self = this;
			var opt = self.configs;	
			var undef;
			if( start === undef ) return self;
			
			end = end === undef ? start : end;
			
			start = self.Date.parseDate( start,opt.dateFormat );
			end = self.Date.parseDate( end,opt.dateFormat );
			
			var diff = self.Date.diff( start,end,'d' );
			
			start = self.Date.clone( start );
			end = self.Date.clone( end );
			//--	
			var _s,_e,_curr;
			_curr = self.getCurrentDate();
			_s = self.Date.clone( _curr );
			_s.setDate(1);
			self.Date.add(_s,'d',-7);
			_e = self.Date.clone( _s );
			_e = self.Date.add( _e,'d',42*opt.numberOfMonths );
			
			var isOutSide = function( date ){
				if( Math.abs( diff )<42*opt.numberOfMonths ) return false;
				if( date<_s ) return true;
				if( date>_e ) return true;	
				return false;
			};
			//--
			var curr = diff<0?end:start;
			for( var j=0;j<=Math.abs(diff);j++ ) {
				if( isOutSide( curr ) ) {
					opt._selectDate[ self.format( curr,'YYYYMMDD' ) ] = true;	
				} else {
					self._selectDate( curr );	
				}
				self.Date.add( curr,'d',1 );
			}
			
			return self;
		},
		selectDateRange : function( start,end ){
			var self = this;
			var opt = self.configs;	
			self._selectDateRange( start,end );
			self.fireEvent('onDateChange',[ this.getValue(),opt ]);
			self.fireEvent('onSelectDateRange',[ start,end,opt ]);
			return self;	
		},
		today : function(){
			this.goAndSelectDate( this.configs.systemDate );	
		},
		/*
		*翻到指定日历并选中
		*/
		goAndSelectDate : function(date,m){
			var self = this;
			var opt = self.configs;	
			self.selectDate( date );
			self.goToDate( date );
			return self;
		},
		/*
		*把日历翻到指定日期
		*/
		goToDate : function( date ){
			var self = this;
			var opt = self.configs;	
			
			opt.currentDate = self.Date.parseDate( date,opt.dateFormat );
			
			self.refreshItems();	
			return self;
		},
		//改变日历月份
		changeMonth : function( y,m ){
			var self = this;
			var opt = self.configs;	
			opt.currentDate.setFullYear( y );	
			opt.currentDate.setMonth( m-1 );	
			self.refreshItems();	
			return self;	
		},
		//改变年份月份
		changeYear : function( y ){
			var self = this;
			var opt = self.configs;	
			opt.currentDate.setFullYear( y );	
			self.refreshItems();	
			return self;		
		},
		/**
		* 设置默认选中日期,当前操作会重置已经选中的日期 如果只是选中日期 请使用selectDate
		*/
		setValue : function( value ){
			var self = this;
			var opt = self.configs;
			
			var argvs = [].slice.apply(arguments);
			
			self.fireEvent('onSetValue',[argvs]);
			
			self._parseValue( argvs[0] );
			self.refreshItems( true );
			return this;
		},
		setDate : function(){
			return this.setValue.apply( this,arguments );	
		},
		/*获取当前日期 根据dateFormat格式化*/
		getValue : function(){
			var self = this;
			var opt = self.configs;
			var sel = [];
			$.each( opt._selectDate,function(k,v){
				if( v ){
					var date = self.Date.parseDate(k,'YYYYMMDD');
					sel.push( self.format( date,opt.dateFormat ) );	
				}	
			} );
			
			var value = null;
			
			if( $.isFunction( opt.getFormater ) ) {
				var val = opt.getFormater.call( self,sel );
				value = val === undef ? value : val;
			} else {
				if( opt.multiSelect ) {
					value = sel;
				} else {
					value = sel[0];	
				}	
			}
			
			var _d = {
				value : value	
			};
			
			self.fireEvent('onGetValue',[ _d ]);
			
			return _d.value;
		},
		getStrValue : function(){
			var v = this.getValue();
			if( $.isArray( v ) ) {
				v = v.join( this.configs.sepStr );	
			}	
			return v;
		},
		getDate : function(){
			return this.getValue.apply( this,arguments );	
		},
		getStrDate : function(){
			return this.getStrValue.apply( this,arguments );	
		}
	});	
	cal.addStatics( Nex.util.Date );
	
	return cal
});	
define('Nex/date/DatePicker',['require','Nex/date/Calendar','Nex/showat/ShowAt','Nex/button/Button'],function(require){
	require('Nex/date/Calendar');
	require('Nex/showat/ShowAt');	
	require('Nex/button/Button');	

	return Nex.define('Nex.date.DatePicker','Nex.date.Calendar',{
		xtype : 'datepicker',
		alias : 'Nex.DatePicker',
		configs : function(opt){
			return {
				/*
				*@private
				*/
				'onStart._sys0001' : function(){
					this._setDatePickerCls();	
				},
				/*
				*@private
				*/
				'onCalendarFooterCreate._sys0001' : function( footer,opt ){
					var inner = $('<div id="'+opt.id+'_footer_inner" class="nex-cal-footer-inner"></div>');
					footer.append( inner );
					this._setFooterBtns( inner );
				},
				/*
				*@private
				*/
				'onYearMonthPickerShow._sys0001' : function( picker,i,opt ){
					this._setAutoCloseYearMonthPicker.apply( this,arguments );
				},
				/*
				*@private
				*/
				'onYearMonthPickerHide._sys0001' : function( picker,i,opt ){
					this._unsetAutoCloseYearMonthPicker.apply( this,arguments );
				},
				/*
				*@private
				*/
				'onDateClick._sys0001' : function(){
					this.checkToSubmit();
				},
				borderCls : opt.borderCls+' nex-datepicker-border',
				containerCls : opt.containerCls+' nex-datepicker',
				display : 'absolute',//position(指定位置显示) inline(平面显示)
				showAt : {},
				_showAt : {
					xAlign : 'left',
					yAlign : 'bottom'	
				},
				showOkBtn : false, 
				showCancelBtn : false,
				showTodayBtn : false,
				okText : '确定',
				cancelText : '取消',
				todayText : '今天',
				btns : [],
				submitToString : true,//通过onSubmit得到的date时是一个字符串 而不是一个数组
				autoSubmit : true//是否自动提交
			};	
		},
		initComponent : function(){
			this.callParent(arguments);
			if( this.configs.display === 'absolute' ) {
				this.showPos();
			}
		},
		/*
		*@private
		*/
		_setDatePickerCls : function(){
			var self = this;
			var opt = self.configs;
			opt.containerCls += " nex-datepicker-"+opt.display;
		},
		/*
		*@private
		*/
		_setAutoCloseYearMonthPicker : function(picker,i,opt){
			if( !opt.ymPickerAutoClose ) return;
			var self = this;
			var _id = opt.id+'_'+i;
			$(document).bind('mousewheel.cal_'+_id+' contextmenu.cal_'+_id+' mousedown.cal_'+_id,function(e){
				var target = e.target || e.srcElement;
				if( !$(target).closest( '#'+opt.id+'_item'+i ).size() ) {
					self.hideYearMonthPicker(i);		
				} 
			});
			$(window).bind('resize.cal_'+_id,function(){
				self.hideYearMonthPicker(i);			
			});		
		},
		/*
		*@private
		*/
		_unsetAutoCloseYearMonthPicker : function(picker,i,opt){
			if( !opt.ymPickerAutoClose ) return;
			var _id = opt.id+'_'+i;	
			$(document).unbind('.cal_'+_id);
			$(window).unbind('.cal_'+_id);	
		},
		/*
		*选中今天
		*/
		_selectToday : function(){
			this.selectDate( this.getSystemDate() );
			this.submit();
			this.hide();		
		},
		/*
		*@private
		*/
		_setFooterBtns : function( inner ){
			var self = this;
			var opt = self.configs;
			
			self.addComponent( opt.btns,inner );
			
			if( opt.showTodayBtn ) {
				Nex.Create('button',{
					text : opt.todayText,
					renderTo : inner,
					context : this,
					cls : 'nex-cal-btns nex-cal-today-btn',
					overCls : 'nex-cal-today-btn-over',
					pressedCls : 'nex-cal-today-btn-click',
					callBack : function(){
						this._selectToday();
					}
				});
			}
			if( opt.showCancelBtn ) {
				Nex.Create('button',{
					text : opt.cancelText,
					context : this,
					renderTo : inner,
					cls : 'nex-cal-btns nex-cal-cancel-btn',
					overCls : 'nex-cal-cancel-btn-over',
					pressedCls : 'nex-cal-cancel-btn-click',
					callBack : function(){
						this.hide();	
					}
				});
			}
			if( opt.showOkBtn ) {
				Nex.Create('button',{
					text : opt.okText,
					context : this,
					cls : 'nex-cal-btns nex-cal-ok-btn',
					overCls : 'nex-cal-ok-btn-over',
					pressedCls : 'nex-cal-ok-btn-click',
					renderTo : inner,
					callBack : function(){
						this.submit();	
						this.hide();	
					}
				});
			}
		},
		/**
		* 提交当前选中的日期 作用在于触发onSubmit
		*/
		"submit" : function(){
			var opt = this.configs;
			return this.fireEvent('onSubmit',[ opt.submitToString ? this.getStrValue() : this.getValue() ]);		
		},
		showPos : function( at ){
			var self = this;
			var opt = self.configs;
			var at = self._undef( at,{} );
			var showAt = $.extend({}, opt._showAt, opt.showAt,at );
			//console.log( showAt );
			this.show();
			self.getDom().showAt( showAt );		
		},
		checkToSubmit : function(){
			var self = this;
			var opt = self.configs;
			if( opt.autoSubmit ) {
				var r = this.submit();
				r !== false ? this.hide() : '';	
			}	
		}
	});	
});	
define('Nex/date/DateRangePicker',['require','Nex/date/DatePicker'],function(require){
	require('Nex/date/DatePicker');
		
	return Nex.define('Nex.date.DateRangePicker','Nex.date.DatePicker',{
		xtype : 'daterangepicker',
		alias : 'Nex.DateRangePicker',
		configs : function(){
			return {
				/*
				*@private
				*/
				'onStart._sys0002' : function(){
					this.configs.multiSelect = true;
					this._setDateRangePickerCls();	
				},
				/*
				*@private 覆盖
				*/
				'onDateClick._sys0001' : function(){
					//不做处理
				},
				'onGetValue._sys0001' : function(d){
					var dates = d.value;
					if( $.isArray( dates ) ) {
						if( dates.length>1 ) {
							dates[1] = dates[dates.length-1];	
							dates.length = 2;
						}
						if( dates.length == 1 ) {
							dates.push( dates[0] );	
						}
					}
				},
				/*
				*@private 不可更改
				*/
				multiSelect : true,
				numberOfMonths : 2,
				sepStr : ' 至 '
				
			};	
		},
		/*
		*@private 继承
		*默认选中日期处理
		*/
		_parseValue : function( value ){
			var self = this,
				opt=this.configs;
			//var curr = opt.currentDate;
			var value = self._undef(value , opt.value);
			value = $.isArray( value ) ? value : ( value+'' ).split( opt.sepStr );
			
			if( value.length === 1 ) {
				value.push(value[0]);	
			}
			if( value.length>1 ) {
				value[1] = value[value.length-1];	
				value.length = 2;
			}
			
			//会触发onParseDefaultDate
			//Nex.date.DatePicker.fn._parseValue.call( self,value );	
			self.callParent(arguments);
		},
		/*
		*@private
		*刷新日期选中状态
		*/
		_refreshSelectDate : function(){
			var self = this;
			var opt = self.configs;
			var first = null;
			var last = null;
			
			$.each( opt._selectDate,function(d,v){
				last = d;
				first = first ? first : d;
			} );
			
			if( !first ) return;
			
			self.selectDateRange( first,last );
				
			return self;
		},
		/*
		*@private
		*取消所有选中日期
		*/
		_unselectAll : function(){
			var self = this;
			var opt = self.configs;
			
			opt._selectDate = {};
			
			$('.nex-cal-date-selected',self.bodyEl).removeClass('nex-cal-date-selected nex-cal-date-start nex-cal-date-end nex-cal-date-dequal');
			
			return self;	
		},
		/*
		*@private
		*选择一段日期范围 
		*/
		_selectDateRange : function( start, end ){
			var self = this;
			var opt = self.configs;	
			var undef;
			if( start === undef ) return self;
			
			self._unselectAll();
			
			end = end === undef ? start : end;
			
			start = self.Date.parseDate( start,opt.dateFormat );
			end = self.Date.parseDate( end,opt.dateFormat );
			
			if( start > end ) {
				var _t = start;
				start = end;
				end = _t;	
			}
			
			//Nex.date.DatePicker.fn._selectDateRange.call( self,start,end );
			self.callParent(arguments);
			
			var first = self.format( start,'YYYYMMDD' );
			var last = self.format( end,'YYYYMMDD' );
			
			if( first !== last ) {
				$('#'+opt.id+'_'+first).addClass('nex-cal-date-start');
				$('#'+opt.id+'_'+last).addClass('nex-cal-date-end');
			} else {
				$('#'+opt.id+'_'+first).addClass('nex-cal-date-dequal');		
			}
			
			opt._selectDate = {};
			opt._selectDate[first] = true;
			opt._selectDate[last] = true;
			
			return self;
		},
		//因为日期范围需要点击2次鼠标才算是选择结束
		_startDate : false,
		_endDate : false,
		_selectStart : function( start,m ){
			var self = this;
			var opt = self.configs;	
			
			start = self.Date.parseDate( start,m || opt.dateFormat );
			
			self._startDate = start;
			self._endDate = false;
			//清空之前选择的范围
			self._unselectAll();
			self._selectDate( start,m || opt.dateFormat );
			
			return self;
		},
		selectStart : function( start,m ){
			var self = this;
			var opt = self.configs;	
			self._selectStart( start,m );
			self.fireEvent('onSelectStart',[ start,m,opt ]);		
			return self;
		},
		_selectEnd : function( end,m ){
			var self = this;
			var opt = self.configs;	
			
			end = self.Date.parseDate( end,m || opt.dateFormat );
			
			self._endDate = end;	
			
			self.selectDateRange( self._startDate,self._endDate );
			
			self._startDate = false;
			self._endDate = false;
			
			return self;
		},
		selectEnd : function( end,m ){
			var self = this;
			var opt = self.configs;	
			self._selectEnd( end,m );
			self.fireEvent('onSelectEnd',[ end,m,opt ]);		
			return self;
		},
		_selectToday : function(){
			var date = this.getSystemDate();	
			this._selectStart( date );
			this._selectEnd( date );
			this.submit();
			this.hide();
		},
		//鼠标点击日期时选中日期 并检测是否需要自动提交
		toggleSelectDateRange : function( date ){
			var self = this;
			var opt = self.configs;	
			if( !self._startDate ) {
				self.selectStart( date );	
			} else {
				self.selectEnd( date );	
				//检测是否需要自动提交
				self.checkToSubmit();
			}
		},
		/*
		*@private
		*/
		_setDateRangePickerCls : function(){
			var self = this;
			var opt = self.configs;
			opt.containerCls += " nex-daterangepicker-"+opt.display;
		},
		_onDateClick : function( date,t,e ){
			var self = this,
				opt=this.configs;
			//无效日期不可点击
			if( $(t).hasClass( 'nex-cal-date-disabled' ) ) {
				return;	
			}
				
			var r = self.fireEvent('onBeforeDateSelected',[date,t,e]);	
			if( r === false ) return;
			//如果日期是属于别的月份 且自动滚动日期 则自动切换日期
			if( self._isOutside( date ) && opt.autoChangeMonth ) {
				if( date>opt.currentDate ) {
					self.nextMonth();
				} else {
					self.prevMonth();	
				}
			}
			
			self.toggleSelectDateRange( date );	
		}
	});	
});	
define('Nex/date/WeekPicker',['require','Nex/date/DateRangePicker'],function(require){
	require('Nex/date/DateRangePicker');
		
	return Nex.define('Nex.date.WeekPicker','Nex.date.DateRangePicker',{
		xtype : 'weekpicker',
		alias : 'Nex.WeekPicker',
		configs : function(opt){
			return {
				numberOfMonths : 1	
			};	
		},
		_getWeekRange : function( date ){
			var self = this;
			var opt = self.configs;	
			
			///date
			var day = date.getDay();
			day = day ? day : 7;
			
			var start = self.Date.add( date,'d',1-day );
			
			var end = self.Date.clone( start );
			
			end = self.Date.add( end,'d',6 );
			return [ start,end ];	
		},
		/*
		*@private 继承
		*默认选中日期处理
		*/
		_parseValue : function( value ){
			var self = this,
				opt=this.configs;
			var curr = opt.currentDate;
			var value = self._undef(value , opt.value);
			value = $.isArray( value ) ? value : ( value+'' ).split( opt.sepStr );
			
			if( value.length>1 ) {
				value[0] = value[value.length-1];	
				value.length = 1;
			}
			var date = null;
			if( value.length ) {
				date = self.__parse( value[0],curr );
			}
			
			if( date ) {
				value = self._getWeekRange( date );
			}
			
			//会触发onParseDefaultDate
			//Nex.date.DatePicker.fn._parseValue.call( self,value );	
			self.superclass.superclass._parseValue.call( self,value );	
		},
		_selectToday : function(){
			var date = this.getSystemDate();	
			var range = this._getWeekRange( date );
			
			this._selectStart( range[0] );
			this._selectEnd( range[1] );	
			
			this.submit();
			this.hide();
		},
		//鼠标点击日期时选中日期 并检测是否需要自动提交
		toggleSelectDateRange : function( date ){
			var self = this;
			var opt = self.configs;	
			
			var range = self._getWeekRange( date );
			
			self.selectStart( range[0] );
			self.selectEnd( range[1] );	
			//检测是否需要自动提交
			self.checkToSubmit();
		}
	});	
});	
/*
Nex.location
eg
index.html#/Home/Login
*/
define('Nex/route/Route',['require','Nex'],function(require){
	require('Nex');	

	var route = Nex.define('Nex.route.Route',{
		extend : 'Nex.AbstractComponent',
		xtype : 'route',
		alias : 'Nex.Route',
		configs : function(){
			return {
				prefix : 'nexroute-',
				//ajax : null,
				//data : {},
				//_qdata : {},
				routes : {},
				autoDestroy : false,
				removeHTag : true,//删除 #
				removeHTagData : /^#/, 
				location : window.location,
				doc : document,
				hashChangeFirstOnRoute : true, //页面加载时也自动调用路由匹配(路由是hash值)
				hashChangeOnRoute : true, //如果触发hashchange时 触发路由匹配 (路由是hash值)
				//timeout_id : null,
				hash : '',
				//_iframe : null,
				//_delay : 50,
				//_currentHash : '',
				caseInsensitiveMatch : false,
				events : {
//					onStart : $.noop,
//					onCreate : $.noop,
//					onGetHash : $.noop,
//					onInitHashChange : $.noop,
//					onVisitPage : $.noop,
//					onHashChange : $.noop
				}
			};		
		}	
	});
	route.supportHashChange = (function(win){
		var  documentMode = document.documentMode;
		return ('onhashchange' in window) && ( documentMode === void 0 || documentMode > 7 );	
	})(window);
	route.supportPushState = !!history.pushState;
	route.override({
		routes : [],
		//历史记录
		history : [],
		currentUrl : '/',
		currentUrlInfo : {},
		currentUrlData : {},
		currentParams : {},
		initComponent : function(opt) {
			var self = this;
			self.callParent(arguments);
			
			self.routes = [];
			self.history = [];
			self.currentUrlInfo = {};
			self.currentUrlData = {};
			self.currentParams = {};
			
			self.initRoute();
		},
		/*sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			return self;
		},*/
		_getHash : function( url ) {
			var self = this;
			var opt = self.C();
            url = url || opt.location.href;
			return '#' + decodeURIComponent(url).replace( /^[^#]*#?(.*)$/, '$1' );
        },
		getHash : function( url ){
			var self = this;	
			var opt = self.C();
			opt.hash = self._getHash( url );
			self.onGetHash( opt );
			self.fireEvent('onGetHash',[ opt ]);	
			return opt.hash;
		},
		onGetHash : function( opt ){
			if( opt.removeHTag ) {
				opt.hash = opt.hash.replace( opt.removeHTagData ,'');	
			}	
		},
		initRoute : function(){
			var self = this;
			var opt = self.C();	
			$(document).ready(function(){
				var hash = self.getHash();
				self.onInitHashChange( hash );
				self.fireEvent('onInitHashChange',[ hash,opt ]);	
				$(window).bind('hashchange.'+opt.id,function(){
					var hash = self.getHash();
					self.onHashChange( hash );
					self.fireEvent('onHashChange',[ hash,opt ]);	
				});						   
			});
		},
		onInitHashChange : function( hash ){
			var self = this;
			var opt = this.configs;
			var routes = opt.routes;
			for( var reg in routes ) {
				self.when(reg, routes[reg]);	
			}
			setTimeout(function(){
				opt.hashChangeFirstOnRoute && self.checkRoute( hash );		
			},10);
		},
		onHashChange : function( hash ){
			this.configs.hashChangeOnRoute && this.checkRoute( hash );	
		},
		'reload' : function(){
			var self = this,
				opt = this.configs;
				self.checkRoute( self.currentUrl );
			return self;		
		}, 
		//@m true 默认产生历史记录 false 不产生历史记录
		redirectTo : function( path, m ){
			var m = this._undef( m,true );
			if( m ) {
				this.configs.location.hash = path;
			} else {
				this.checkRoute( path );
			}
			return this;	
		},
		redirect : function(){
			return this.redirectTo.apply( this, arguments );	
		},
		path : function( path, m ){
			return this.redirectTo.apply( this,arguments );
		},
		checkRoute : function( hash ){
			var self = this,
				opt = this.configs,
				path = '';//'/'	
			/*if( hash.charAt(0) !== '/' ) {
				hash = '/'+hash;	
			}*/
			
			self.currentUrl = hash;
			self.history.push( hash );
			
			var _hash = {
				hash : hash
			};
			
			var e = self.fireEvent('onVisitPage',[ _hash ]);
			if( e === false ) {
				return;	
			}
			
			self.currentUrl = _hash.hash === hash ? self.currentUrl : _hash.hash;
			
			if( hash ) {
				var ourl = Nex.parseUrl( hash );//self.urlResolve(hash);
				path = ourl.pathname ? ourl.pathname : path;
			}
			
			self.currentUrlInfo = ourl;
			
			var params = {};
			if( hash && ourl && ourl.search ) {
				ourl.search = ourl.search.replace(/^\?/,'');
				var p = ourl.search.split('&');
				$.each( p,function(i,v){
					if( !v ) return;
					var param = v.split('=');
					params[ param[0] ] = param[1] ? param[1] : '';
				} );	
			}
			
			var r = self.parseRoute( path ) || {};
			
			self.currentUrlData = r;
			
			self.currentParams = $.extend(r.pathParams,params);
			
			if( r && $.isFunction(r.callback) ) {
				r.callback.call( self,self.currentParams );
			}
			return self;
		},
		checkUrl : function(){
			return this.checkRoute.apply( this, arguments );
		},
		/*
		*examples:
			var p1 = '/Index/:action';
				pathRegExp(p1,{}).exec('/Index/index'); // action=index true
				pathRegExp(p1,{}).exec('/Index/index/'); // false
				pathRegExp(p1,{}).exec('/Index/index/a...'); // false
			var p1 = '/Index/:action*';
				pathRegExp(p1,{}).exec('/Index/index'); // action=index true
				pathRegExp(p1,{}).exec('/Index/index/'); // action=index/ true
				pathRegExp(p1,{}).exec('/Index/index/a...'); // action=index/a... true
			var p1 = '/Index/:action?';
				pathRegExp(p1,{}).exec('/Index/index'); // action=index true
				pathRegExp(p1,{}).exec('/Index/index/'); // action=null true
			var x = pathRegExp(p1,{}).exec('/Index/index/a...'); // false	
			var p = switchRouteMatcher( '/Index/get',x );
		*/
		pathRegExp : function(path, opts) {
		  opts = opts || {};	
		  var insensitive = opts.caseInsensitiveMatch,
			  ret = {
					originalPath: path,
					regexp: path
				  },
				  keys = ret.keys = [];
			
			  path = path
				.replace(/([().])/g, '\\$1')
				.replace(/(\/)?:(\w+)([\?|\*])?/g, function(_, slash, key, option){
				  var optional = option === '?' ? option : null;
				  var star = option === '*' ? option : null;
				  keys.push({ name: key, optional: !!optional });
				  slash = slash || '';
				  return ''
					+ (optional ? '' : slash)
					+ '(?:'
					+ (optional ? slash : '')
					+ (star && '(.+?)' || '([^/]+)')
					+ (optional || '')
					+ ')'
					+ (optional || '');
				})
				.replace(/([\/$\*])/g, '\\$1');
			
			  ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
			  return ret;
		},
		/*
		*实际路径根据route匹配出参数
		*/
		switchRouteMatcher : function(url, route) {
			  var keys = route.keys,
				  params = {};
		
			  if (!route.regexp) return null;
		
			  var m = route.regexp.exec(url);
			  if (!m) return null;
		
			  for (var i = 1, len = m.length; i < len; ++i) {
				var key = keys[i - 1];
		
				var val = 'string' == typeof m[i]
					  ? decodeURIComponent(m[i])
					  : m[i];
		
				if (key && val) {
				  params[key.name] = val;
				}
				//如果是自定义路由 则使用下标
				if( !key && val ) {
					params[i - 1] = val;	
				}
			  }
			  return params;
		},
		/*
		*匹配正确的url
		*/
		parseRoute : function(url) {
			var self = this,
				opt = this.configs,
				routes = this.routes;
			/*if( self._otherwise.slice(-1) ) {
				routes.push( self._otherwise.slice(-1) );	
			}	*/	
			  // Match a route
			  var params, match;
			  $.each(routes, function(i, route) {
					if (!match && route && (params = self.switchRouteMatcher(url, route))) {
					  match = $.extend({
						  		pathParams : params,
								params : params
						 	},route);
					}
			  });
			  // No route matched; fallback to "otherwise" route
			  if( !match ) {
				  	match = {
						pathParams : {},
						params : {}	
					};
					if( $.isFunction( self._otherwise ) ) {
						match.callback = self._otherwise;
					} else {
						match.callback = function(){
							(self._otherwise !== null) && self.redirectTo( self._otherwise+'', false );	
						};
					} 
			  }
			  return match;
		},
		removeRoute : function( path ){
			var self = this;
			var routes = self.routes;
			var rp = $.type( path ) === 'regexp' ? path.toString() : path + '';
			$.each( routes, function( i, route ){
				if( route.originalPath == rp ) {
					routes[ i ] = null;	
				}
			} );	
			return self;
		},
		/*
		* 注：相同的path不会会被覆盖，如果想删除已经定义的path 使用when(path,null)
		*/
		when : function( path,func ){
			var self = this,
				opt = this.configs;	
			//批量添加
			if( arguments.length === 1 ) {
				if( $.isPlainObject( path ) ) {
					$.each( path,function(k,v){
						self.when( k,v );	
					} );	
				}
				if( $.isFunction( path ) ) {
					var r = path.call( self );
					if( r ) {
						self.when( r );	
					}	
				}
				return self;
			}
			if( func === null ) {
				return self.removeRoute( path );	
			}
			//如果是字符串 表示当前地址会重定向到后面地址的解析这样的重定向不触发历史记录
			if( $.type( func ) === 'string' ) {
				var redirectTo = func;
				func = function(){
					self.redirectTo( redirectTo, false );	
				};
			}
			
			var routes = self.routes;
			
			if( $.type( path ) === 'regexp' ) {
				routes.push(
					{
						callback : func,
						originalPath : path.toString(),
						regexp : path,
						keys : []
					}
				);	
			} else {
				routes.push(
					$.extend( {
							callback : func
						},self.pathRegExp( path,{
							caseInsensitiveMatch : opt.caseInsensitiveMatch	
						} ) )
				);
			}
			/*if (path) {
				var redirectPath = path+'';
				if( redirectPath.charAt(0) !== '/' ) {
					redirectPath = '/'+redirectPath;	
				}
				self.routes[redirectPath] = $.extend( {
						callback : func
					},self.pathRegExp( redirectPath,{
					caseInsensitiveMatch : opt.caseInsensitiveMatch	
				} ) );
			}*/
			return self;
		},
		_otherwise : null,
		//会覆盖原有的
		otherwise : function( func ){
			this._otherwise = func;
			return this;
		},
		destroy : function(  ){
			var self = this,
				opt = this.configs;	
			$(window).unbind('.'+opt.id);	
			//self.removeCmp();
			self.callParent(arguments);
			return this;
		},
		//关闭路由
		'stop' : function(){	
			var self = this,
				opt = this.configs;	
			opt.hashChangeFirstOnRoute = false;
			opt.hashChangeOnRoute = false;
			return self;	
		},
		'start' : function(){		
			var self = this,
				opt = this.configs;	
			opt.hashChangeFirstOnRoute = true;
			opt.hashChangeOnRoute = true;
			return self;		
		}
	});
	
	return route;
});
define('Nex/tooltip/ToolTip',['require','Nex/window/Window'],function(require){
	require('Nex/window/Window');	

	var tooltip = Nex.define('Nex.tooltip.ToolTip',{
		extend : 'Nex.window.Window',
		alias : 'Nex.ToolTip',
		xtype : 'tooltip',
		configs : function(opt){
			opt._showAt.visibleable = false;
			opt._showAt.yAlign = 'bottom'
			return {
				prefix : 'nextooltip-',
				border : true,
				autoResize : false,
				borderCls : [opt.borderCls,'nex-tooltip-border'].join(' '),
				containerCls : [opt.containerCls,'nex-tooltip'].join(' '),
				tabIndex : -1,
				autoScroll : false,	
				autoSizeOnShow : false,
				draggable : false,
				resizeable : false,
				showHeader : false,
				/*是否显示箭头*/
				showArrow : true,
				/*箭头容器大小 默认是arrowSize*/
				arrowWrapSize : '',
				/*箭头大小*/
				arrowSize : 7,
				/*箭头不居中时的偏移量*/
				arrowOffset : 5,
				arrowDir : '',// 默认为 dir
				/*如果为空则 则使用showAt的align或dirAlign*/
				arrowAlign : '',
				arrowBorderWidth : 1,
				/*颜色值不设置 则使用默认样式*/
				/*背景颜色*/
				backColor : '',
				/*边框样式*/
				borderColor : '',
				borderWidth : 1,
				borderStyle : 'solid',
				/*文本颜色*/
				textColor : '',
				/*
				* tip显示方位 默认bottom
				* top bottm left right 
				* 方位在空间不足的情况下或自动转换 eg top和bottom left和right
				*/
				autoChangeDir : true,
				dir : 'bottom',
				/*
				* 居中方式
				* 当dir=bottom top时dirAlign= left center right
				* 当dir=left right时dirAlign= top center bottom
				*/
				dirAlign : 'center',
				/*偏移量*/
				offset : 0
			};	
		}
	});
	tooltip.override({
		initComponent : function(){
			var opt = this.configs;
			this.callParent(arguments);
			/*初始化 参数*/
			opt._showAt.visibleable = opt.autoChangeDir;	
			if( opt.dir == 'bottom' || opt.dir == 'top' || opt.dir == 'center' ) {
				opt._showAt.zAlign = 'y';
				opt._showAt.offsetY = opt.offset;
				opt._showAt.yAlign = opt.dir;
				opt._showAt.xAlign = opt.dirAlign;
				if( Nex.inArray( opt.dirAlign, ['left','center','right'] ) == -1 ) {
					opt._showAt.xAlign = 'center';	
				}
			}
			if( opt.dir == 'left' || opt.dir == 'right' ) {
				opt._showAt.zAlign = 'x';
				opt._showAt.offsetX = opt.offset;
				opt._showAt.xAlign = opt.dir;
				opt._showAt.yAlign = opt.dirAlign;
				if( Nex.inArray( opt.dirAlign, ['top','center','bottom'] ) == -1 ) {
					opt._showAt.xAlign = 'center';	
				}
			}
		},
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			
			self.callParent( arguments );
			
			self.bind('onResetPosition._sys',self._setArrow,self);
			
			return self;
		},
		initCss : function(){
			var self = this;
			var opt = self.configs;
			
			self.callParent(arguments);
			
			opt.backColor && self.setBackColor(opt.backColor);
			
			opt.borderColor && self.setBorderColor(opt.borderColor);
			
			opt.textColor && self.setTextColor(opt.textColor);
				
		},
		setBackColor : function(color){
			this.addCssRules('background-color:'+color);
			return this;	
		},
		setBorderColor : function(color){
			var opt = this.configs;
			this.addCssRules('border:'+parseInt(opt.borderWidth)+'px '+opt.borderStyle+' '+color);
			return this;		
		},
		setTextColor : function(color){
			this.addCssRules('color:'+color);
			return this;		
		},
		/*
		* 重新设置tip内容
		*/
		setContent : function(){
			this.html.apply(this, arguments);	
			this.resetPosition();
			return this;
		},
		/*
		* 重写
		*/
		_showBeforeEffect : function(){
			var el = this.el;	
			var opt = this.configs;
			/*显示窗口*/
			el._show();
			/*创建箭头*/
			//if( !self.arrowEl || opt.resetPosOnShow ) {
			this._setArrow();
			//}
			/*隐藏窗口 执行动画效果*/
			el.hide();
		},
		/*箭头元素*/
		arrowEl : null,
		_direction : 'bottom',
		_setArrow : function(){
			this.refreshArrow();
		},
		refreshArrow : function(){
			var self = this;	
			var opt = self.configs;
			if( !opt.showArrow ) {
				return;	
			}
			if( self.arrowEl ) {
				self.arrowEl.remove();	
			}
			var dir = self.getDirection();
			if( dir == 'center' ) {
				return;	
			}
			var arrow = self.createArrow(dir);
			self.arrowEl = arrow;
			self.el.append(arrow);	
			self.refreshArrowPos();
			/*设置arrow的颜色边框样式*/
			self.setArrowStyle();
		},
		refreshArrowPos : function(){
			var self = this;	
			var opt = this.configs;
			
			//self.el._show();
			
			var posConf = self._currShowAt.configs;
			var dir = self.getDirection();
			
			self._direction = dir;
			
			var showConf = {
				at : posConf.at,
				el : self.arrowEl,
				autoShow : false,
				parent : self.el,
				xAlign : posConf.xAlign,
				yAlign : posConf.yAlign,
				zAlign : posConf.zAlign	
			};
			
			if( Nex.inArray(dir, ['top', 'bottom']) !== -1 ) {
				showConf.zAlign = 'y';	
			}
			if( Nex.inArray(dir, ['left', 'top']) !== -1 ) {
				showConf.zAlign = 'x';	
			}
			
			if( showConf.zAlign == 'y' ) {
				posConf.yAlign != 'center' && (showConf.offsetX = opt.arrowOffset);
				opt.arrowAlign && (showConf.xAlign = opt.arrowAlign);
				opt.arrowDir && (showConf.yAlign = opt.arrowDir);
			}
			if( showConf.zAlign == 'x' ) {
				posConf.xAlign != 'center' && (showConf.offsetY = opt.arrowOffset);
				opt.arrowAlign && (showConf.yAlign = opt.arrowAlign);
				opt.arrowDir && (showConf.xAlign = opt.arrowDir);
			}
			
			var pos2 = Nex.Create('showAt', showConf);
				
			var position = pos2.getShowPos();
			
			self.fireEvent('onGetArrowPos',[position]);
			
			if( showConf.zAlign == 'y' ) {
				self.arrowEl.css('left', position.left);
			}
			if( showConf.zAlign == 'x' ) {
				self.arrowEl.css('top', position.top);
			}
		},
		setArrowStyle : function(){
			//_direction	
			var self = this;
			var opt = self.configs;
			var dir = self._direction;
			
			/*清空所有边框 背景样式*/
			self.addCssRules('.nex-tooltip-arrow-top .nex-tooltip-arrow', 'border-top-color:');
			self.addCssRules('.nex-tooltip-arrow-bottom .nex-tooltip-arrow', 'border-bottom-color:');
			self.addCssRules('.nex-tooltip-arrow-left .nex-tooltip-arrow', 'border-left-color:');
			self.addCssRules('.nex-tooltip-arrow-right .nex-tooltip-arrow', 'border-right-color:');
			
			self.addCssRules('.nex-tooltip-arrow-top .nex-tooltip-arrow-bg', 'border-top-color:');
			self.addCssRules('.nex-tooltip-arrow-bottom .nex-tooltip-arrow-bg', 'border-bottom-color:');
			self.addCssRules('.nex-tooltip-arrow-left .nex-tooltip-arrow-bg', 'border-left-color:');
			self.addCssRules('.nex-tooltip-arrow-right .nex-tooltip-arrow-bg', 'border-right-color:');
			
			if(opt.borderColor) {
				self.addCssRules('.nex-tooltip-arrow-'+dir+' .nex-tooltip-arrow', 'border-'+dir+'-color:'+opt.borderColor);	
			}
			if(opt.backColor) {
				self.addCssRules('.nex-tooltip-arrow-'+dir+' .nex-tooltip-arrow-bg', 'border-'+dir+'-color:'+opt.backColor);	
			}
			
		},
		getShowAtPos : function(){
			var self = this;
			var opt = self.configs;
			
			var pos = self.callParent(arguments);
			
			if( opt.showArrow ) {
				var dir = self.getDirection();
				var size = opt.arrowWrapSize ? opt.arrowWrapSize : opt.arrowSize;	
				if( Nex.inArray(dir, ['top', 'bottom']) !== -1 ) {
					pos.top += dir == 'top' ? size*-1 : parseInt(size, 10); 
				}
				if( Nex.inArray(dir, ['left', 'right']) !== -1 ) {
					pos.left += dir == 'left' ? size*-1 : parseInt(size, 10); 
				}
			}
		
			return pos;	
		},
		/*
		* 获取当前显示的方向 left top right bottom center
		*/
		getDirection : function(){
			var pos = this._currShowAt;
			var dir = 'center';
			if( this.configs.arrowDir ) {
				return this.configs.arrowDir;
			};
			if( !pos ){
				return dir;	
			}	
			var posConf = pos.configs;
			if( posConf.zAlign == 'y' ) {
				if( posConf.yAlign == 'top' || posConf.yAlign == 'bottom' ) {
					dir = posConf.yAlign;	
				} 
			}
			if( posConf.zAlign == 'x' ) {
				if( posConf.xAlign == 'left' || posConf.xAlign == 'right' ) {
					dir = posConf.xAlign;	
				} 
			}
			return dir;
		},
		_getTopArrow : function(){
			var opt =this.configs;
			var size = opt.arrowSize;
			var bw = opt.arrowBorderWidth;
			var size2 = size - bw;
			var html = [
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-border" style="border-width: '+size+'px;left:0px; z-index:1;"></b>',
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-bg" style="border-width: '+size2+'px; left:'+bw+'px; z-index:2;"></b>'	
			];
			return html.join('');
		},
		_getBottomArrow : function(){
			var opt =this.configs;
			var size = opt.arrowSize;
			var bw = opt.arrowBorderWidth;
			var size2 = size - bw;
			var html = [
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-border" style="border-width: '+size+'px;left:0px; z-index:1;"></b>',
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-bg" style="border-width: '+size2+'px; left:'+bw+'px; top:'+(bw*2)+'px; z-index:2;"></b>'	
			];
			return html.join('');	
		},
		_getLeftArrow : function(){
			var opt =this.configs;
			var size = opt.arrowSize;
			var bw = opt.arrowBorderWidth;
			var size2 = size - bw;
			var html = [
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-border" style="border-width: '+size+'px;left:0px; z-index:1;"></b>',
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-bg" style="border-width: '+size2+'px; left:0px; top:'+bw+'px; z-index:2;"></b>'	
			];
			return html.join('');		
		},
		_getRightArrow : function(){
			var opt =this.configs;
			var size = opt.arrowSize;
			var bw = opt.arrowBorderWidth;
			var size2 = size - bw;
			var html = [
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-border" style="border-width: '+size+'px;left:0px; z-index:1;"></b>',
				'<b class="nex-tooltip-arrow nex-tooltip-arrow-bg" style="border-width: '+size2+'px; left:'+(bw*2)+'px; top:'+bw+'px; z-index:2;"></b>'	
			];
			return html.join('');			
		},
		/*
		* 获取箭头
		* pos = top bottom left right
		*/
		getArrow : function( pos ){
			switch(pos) {
				case 'top' : 
					return this._getTopArrow();
					break;	
				case 'bottom' : 
					return this._getBottomArrow();
					break;	
				case 'left' : 
					return this._getLeftArrow();
					break;	
				case 'right' : 
					return this._getRightArrow();
					break;				
			}
		},
		/*
		* 创建一个箭头 返回jQuery对象
		*/
		createArrow : function( pos ){
			var opt = this.configs;
			var pos = pos || 'bottom';
			var html = [
				'<div class="nex-tooltip-arrow-wrap nex-tooltip-arrow-',pos,'">',
					this.getArrow(pos),
				'</div>'
			];
			var arrow = $(html.join(''));
			arrow.width(opt.arrowSize*2);
			arrow.height(opt.arrowSize*2);
			return arrow;	
		}	
	});
	
	return tooltip;
});	
/*
*
*Nex.mixins.DropDown
*下拉列表框 或者 自定义下拉框 
*/
define('Nex/mixins/DataLoader',['require','Nex/Ajax'],function(require){
	require('Nex/Ajax');	

	return Nex.define('Nex.mixins.DataLoader', {
		extend : 'Nex.EventObject',
		configs : function( opt ){
			return {
				url : '',
				ajaxClass : 'Nex.Ajax',//定义Nex.Ajax组件来发送请求
				ajaxCache : true,
				ajaxOptions : {},
				ajaxMethod : 'GET',
				ajaxDataType : 'json',
				ajaxDataFilter : null,
				ajaxData : {},
				ajaxSend : null
			};
		},	
		//从服务器中加载当前页数据
		loadAsyncData : function(/*[data, ]*/success, error, complete){
			var self = this,
				opt = self.configs;
				
			var args = [].slice.apply( arguments );	
			
			var cd = {};
			
			if( !Nex.isFunction( args[0] ) ) {
				cd = args[0];
				args.splice(0,1);	
			}
			
			var success = args[0],
				error = args[1],
				complete = args[2];
			
			var ajaxData = $.extend(opt.ajaxData || {}, cd);
			
			var ajaxOptions = $.extend({},{
					type 		: opt.ajaxMethod,
					cache 		: opt.ajaxCache,
					dataType	: opt.ajaxDataType,
					dataFilter	: opt.ajaxDataFilter
				});
				
			$.extend(ajaxOptions, opt.ajaxOptions);
			
			ajaxOptions.data = $.extend(ajaxOptions.data || {},ajaxData);
			ajaxOptions.$caller = self;
			ajaxOptions.url = opt.url;
			
			ajaxOptions.success = function(data){
				if( $.isFunction(success) ) {
					success(data);	
				}
				self.fireEvent('onLoadAsyncDataSuccess',[data,opt]);
			};
			ajaxOptions.error = function(xmlHttp){
				if( $.isFunction(error) ) {
					error(xmlHttp);	
				}
				self.fireEvent('onLoadAsyncDataError',[xmlHttp,opt]);
			};
			
			ajaxOptions.complete = function(data){
				if( $.isFunction(complete) ) {
					complete(data);	
				}
				self.fireEvent('onLoadAsyncDataEnd',[opt]);
				self.fireEvent('onLoadAsyncDataComplete',[data,opt]);	
			};
			
			if( self.fireEvent('onBeforeLoadAsyncData',[ajaxOptions,opt]) === false ) {
				return;	
			}	
			self.onLoadAsyncDataStart( ajaxOptions, opt );
			self.fireEvent('onLoadAsyncDataStart',[ajaxOptions,opt]);
			
			self.ajaxSend(ajaxOptions);
			
			return self;
		},
		onLoadAsyncDataStart : function(){},
		ajaxSend : function(ajaxOptions){
			var self = this;
			var opt = self.configs;
			if( $.isFunction( opt.ajaxSend ) ) {
				opt.ajaxSend.call(self, ajaxOptions);
			} else {
				Nex.Create(opt.ajaxClass, ajaxOptions);
			}
			return self;
		}
	});
});	
/*
jquery.nexTree.js
http://www.extgrid.com/tree
author:nobo
qq:505931977
QQ交流群:13197510
email:zere.nobo@gmail.com or QQ邮箱
v1.0
1.新增 nodesSort 参数  可控制叶子节点显示先后
2.新增一个sortField 可控制显示位置 为以后的可拖拽做下基础 待实现
*/

define('Nex/tree/Tree',['require','Nex/panel/Panel','Nex/mixins/DataLoader'],function(require){
	require('Nex/panel/Panel');	
	require('Nex/mixins/DataLoader');

	var tree = Nex.define('Nex.tree.Tree', {
		extend : 'Nex.panel.Panel',
		alias  : 'Nex.Tree',
		xtype  : 'treepanel tree',	
		mixins : ['Nex.mixins.DataLoader'],
		configs: function( opt ){
			
			return {
				prefix : 'nextree-',
				renderTo : document.body,
				containerCls : [opt.containerCls,'nex-tree'].join(' '),
				bodySelectionable : false,
				data : [],
				showExpanderIcon : true,//显示展开图标
				showTreeLines : true,//显示节点线条
				showTreeIcon : true,//显示节点图标
				animate : true,//展开 收缩节点时的动画效果
				animateTime : 100,
				singleExpand : false,//如果true 同一级只有一个节点能展开
				expandOnEvent : 2,//0 不开启 1单击展开 2双击展开
				expandOnLoad : false,//boolean:true false number:1 2 3 展开多少级
				simpleData : false,
				root : '0',//simpleData下可不用设置且只在初始化时有效，初始化后会用showRowId代替
				iconField : 'icon',//图标字段 样式
				iconClsField : 'iconCls',//图标字段 样式
				idField : 'id',
				textField : 'text',
				openField : 'open',
				levelField : '_level',
				parentField : 'pid',
				childrenField : 'children',
				leafField : 'leaf',
				sortable : true,
				sortField : 'order',//order field 默认会为 0 系统强制设置 1 2 3 4 ...
				sortOrder : 'asc',//asc desc
				groupNode : true,//开启后会对叶子和节点进行分类
				nodesSort : 1,//开启groupNode后 1 叶子节点放到最后， 2叶子节点放到最前
				singleSelect : true,
				enableSelected : true,//选择的行
				allowDrag : false,//是否允许拖拽节点
				allowDrop : false,//是否允许投放节点
				removeOnCollapse : true,//收缩节点被删除。极大提升性能。
				events : {}
			};	
		}
	});

	tree.override({
		initComponent : function(opt) {
			var self = this;
			
			self.callParent( arguments );
			
			self.initTree();
			
			self.initTreeEvents();
		},
		/*
		* 数据源
		*/
		dataSource : [],
		/*
		* 节点ID对应的节点数据
		*/
		_dataHashMaps : {},
		/*
		* 各节点下的子节点
		* {
		*	2 : [2,3],
		*	4 : [5,6]
		* }
		*/
		_dataChildrens : {},
		/*
		* 各层级下的节点 格式同 _dataChildrens
		*/
		_dataLevels : {},
		/*
		* 缓存
		*/
		_firstNodes : {},
		_lastNodes : {},
		selection : {},
		/*
		* 树形组件初始化
		*/
		initTree : function(){
			this.initTreeData();
		},
		/*
		* 初始化数据
		*/
		initTreeData : function( data ){
			var self = this;
			var opt = self.configs;
			//初始化数据
			self.dataSource = [];
			self._dataHashMaps = {};
			self._dataChildrens = {};
			self._dataLevels = {};
			self._firstNodes = {};
			self._lastNodes = {};
			self.selection = {};
			
			self.dataToTree(data || opt.data);	
			if( data ) {
				opt.data = data;	
			}
			return self;
		},
		/*
		* 渲染树
		*/
		doRenderContent : function(){
			var self = this;
			var opt = self.configs;	
			self.callParent( arguments );
			var rootId = self.getRootId();
			var maps = self.getDataMaps();
			
			var bd = self.getBody();
			bd.empty();
			
			self.expandNode( rootId );
			
			if( opt.expandOnLoad === true ) {
				self.expandAll(rootId);	
			} else {
				for(var tid in maps) {
					if( maps[tid][opt.openField] ) {
						self.expandNode(tid);
					}	
				}
				//展开指定层级节点
				if( Nex.isNumeric(opt.expandOnLoad) ) {
					self.expandLevel( opt.expandOnLoad );
				}
			}
		},
		/*
		*初始化事件
		*/
		initTreeEvents : function(){
			var self = this
				,opt=this.configs;	
			var bd = self.getBody();
			var callEvent = function( evt, e ){
				var tid = $(this).attr("treeid");
				
				var node = self._getNode(tid);
				if( !node ) return;
				
				e.helper = $(this);
				
				if( self[ evt ] && Nex.isFunction( self[ evt ] ) ) {
					self[ evt ].call( self, tid, node, e );	
				}
				if( self.fireEvent(evt,[tid, node, e]) === false ) {
					return false;	
				}	
			};
			bd.undelegate('.tree')
			  .delegate(".nex-tree-expander-icon", 'click.tree dblclick.tree', function(e){
				  //nex-tree-loading
				  var p = $(this).parent();
				  if( p.hasClass('nex-tree-loading') ) {
						return;  
				  }
				  var ev = "";
				  switch( e.type ) {
					case 'click' : ev = 'onNodeExpanderClick'; break;
					case 'dblclick' : ev = 'onNodeExpanderDblClick'; break;
				  }
				  if( !ev ) return;
				  callEvent.call(p, ev, e);
				  e.stopPropagation();
				  e.preventDefault();
				  $(document).trigger(e.type);
			  })
			  .delegate(".nex-tree-item-wraper", [
			  	'click.tree',
				'dblclick.tree',
				'keydown.tree',
				'keyup.tree',
				'keypress.tree',
				'mouseenter.tree',
				'mouseleave.tree',
				'contextmenu.tree',
				'mousedown.tree',
				'mouseup.tree'
			  ].join(' '), function(e){
				    var ev = "";
					  switch( e.type ) {
						case 'click' : ev = 'onNodeClick'; break;
						case 'dblclick' : ev = 'onNodeDblClick'; break;
						case 'contextmenu' : ev = 'onNodeContextMenu'; break;
						case 'keydown' : ev = 'onNodeKeyDown'; break;
						case 'keyup' : ev = 'onNodeKeyUp'; break;
						case 'keypress' : ev = 'onNodeKeyPress'; break;
						case 'mousedown' : ev = 'onNodeMouseDown'; break;
						case 'mouseup' : ev = 'onNodeMouseUp'; break;
						case 'mouseenter' : ev = 'onNodeMouseOver'; break;
						case 'mouseleave' : ev = 'onNodeMouseOut'; break;
					  }
					  if( !ev ) return;
					  if( callEvent.call(this, ev, e) === false ) {
						 e.stopPropagation();
				 		 e.preventDefault();
					  } 
			  });
			//nex-tree-item-wraper
			//self.fireEvent('onBindTreeEvents',[ lis,events,opt ]);	
		},
		/*sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent( arguments );
			//self.bind("onClick.select",self._selectNode,self);
			//self.bind("onNodeClick.expand",self.toExpandClick,self);
			//self.bind("onNodeDblClick.expand",self.toExpandDblClick,self);
			
			return self;
		},*/
		getDataMaps : function(){
			return this._dataHashMaps;
		},
		onNodeClick : function(tid, data, e){
			var self = this,
				opt=this.configs;
			var target = e.hepler;
			
			if( opt.expandOnEvent == 1 ) {
				self.toggleNode(tid);
			}
			if( opt.enableSelected ) {
				self.selectNode( tid );
			}
			
		},
		onNodeDblClick : function(tid, data, e){
			var self = this,
				opt=this.configs;
			if( opt.expandOnEvent == 2 ) {
				self.toggleNode(tid);
			}
		},
		onNodeMouseOver : function(tid, data, e){
			$(e.helper).addClass("nex-tree-item-over");
		},
		onNodeMouseOut : function(tid, data, e){
			$(e.helper).removeClass("nex-tree-item-over");	
		},
		onNodeExpanderClick : function(tid, data, e){
			var self = this,
				opt=this.configs;
			self.toggleNode(tid);	
		},
		_getNode : function(tid,pro){
			var self = this,
				opt=this.configs,
				undef;	
			//var node = opt._data[ opt._tfix+tid ];
			var node = self._dataHashMaps[ tid ];
			
			if( node === undef ) {
				return null;	
			}
	
			return pro===undef ? node : node[pro];
		},
		getNode : function(tid,pro){
			return this._getNode( tid,pro );	
		},
		getParentID : function(tid){
			var self = this,
				opt=this.configs,
				undef;	
			var rootId = self.getRootId();	
			var pid = self._getNode(tid, opt.parentField);
			return tid+'' === rootId+'' ? rootId : pid;
		},
		_parseSimpleData : function(data,pid){
			var self = this,
				opt=this.configs;	
			var undef;
			var _ids = {};
			for( var i=0;i<data.length;i++ ) {
				var node = data[i];
				
				if( node[opt.parentField] === undef ) {
					node[opt.parentField] = pid === undef ? self.getRootId() : pid;
					node[opt.levelField] = pid === undef ? 0 : self._getNode(pid,opt.levelField)+1;
				} else {
					node[opt.levelField] = 	self._getNode(node[opt.parentField],opt.levelField)+1;
				}
				if( !(opt.idField in node) || Nex.isEmpty( node[ opt.idField ] ) ) {
					node[opt.idField] = Nex.uuid();
				}
				
				self._dataHashMaps[ node[opt.idField] ] = node; 
				
				var _pid = node[opt.parentField];
				self._dataChildrens[ _pid ] = self._dataChildrens[ _pid ] === undef ? [] : self._dataChildrens[ _pid ];
				var childs = self._dataChildrens[ _pid ];
				childs.push(node);
				//levelData
				var _lv = node[opt.levelField];
				self._dataLevels[ _lv ] = self._dataLevels[ _lv ] === undef ? [] : self._dataLevels[ _lv ];
				var levels = self._dataLevels[ _lv ];
				levels.push(node);
				
				_ids[_pid] = true;
				
			}	
		},
		getRootId : function(){
			return this.configs.root;	
		},
		/*
		*获取组件树数据
		*/
		getData : function( simple ){
			var self = this,
				opt = this.configs;
			var isSimple = Nex.unDefined( simple, opt.simpleData );			
			function getTreeData( tid ){
				var nodes = self.getChildrens(tid);
				$.each( nodes, function(i, d){
					if( !self.isLeaf(d) ) {
						d[opt.childrenField] = getTreeData(d[opt.idField]);
					}
				} );	
				return nodes;
			}	
			var rootId = self.getRootId();
			return isSimple ? self.getAllChildrens( rootId ) : getTreeData( rootId );
		},
		setData : function( data ){
			this.initTreeData(data || [])
				.doRenderContent();
			return this;	
		},
		/*
		* 把数据解析成有关联的树形数组
		*/
		dataToTree : function(data,pid){
			var self = this,
				opt=this.configs;	
			var undef;
			if( opt.simpleData ) {
				self._parseSimpleData(data || [],pid);
				return self;
			}
			var childrenField = opt.childrenField;
			for( var i=0,len = data.length;i<len;i++ ) {
				var node = data[i];
				//设置当前节点的层次0为第一层 
				node[opt.levelField] = pid === undef ? 0 : self._getNode(pid,opt.levelField)+1;
				//设置当前节点的父节点
				node[opt.parentField] = pid === undef ? self.getRootId() : pid;
				//检查节点否设置了id 否则使用uuid随机生成一个
				if( !(opt.idField in node) ) { 
					node[opt.idField] = Nex.uuid();	
				}
				//把当前节点数据放到hashMaps里方便读取
				self._dataHashMaps[ node[opt.idField] ] = node; 
				//_dataChildrens
				var _pid = node[opt.parentField];
				self._dataChildrens[ _pid ] = self._dataChildrens[ _pid ] === undef ? [] : self._dataChildrens[ _pid ];
				var childs = self._dataChildrens[ _pid ];
				childs.push(node);
				//levelData
				var _lv = node[opt.levelField];
				self._dataLevels[ _lv ] = self._dataLevels[ _lv ] === undef ? [] : self._dataLevels[ _lv ];
				var levels = self._dataLevels[ _lv ];
				levels.push(node);
				
				if( ( childrenField in node ) && node[childrenField].length ) {
					self.dataToTree(node[childrenField],node[opt.idField]);
				}
			}	
			return self;
		},
		_updateChildrens : function( tid, datas ){
			this._dataChildrens[ tid ] = Nex.isArray( datas ) ? datas : [ datas ];
			return this;	
		},
		/*
		* 对指定list进行 分组
		*/
		_groupNodes : function(list){
			var self = this,
				opt=this.configs,
				undef;
			
			//var pid = pid === undef ? opt.root : pid;
			var _d = list || [];//opt._childrens[ pid ];
			
			if( !opt.groupNode ) return _d;
			
			var nodes=[],leafs=[];
			var len = _d.length;
			for( var i=0;i<len;i++ ) {
				if(self.isLeaf( _d[i] )) {
					leafs.push( _d[i] );	
				} else {
					nodes.push( _d[i] );		
				}
			}
			if( opt.nodesSort == 1 ) {
				_d = nodes.concat(leafs);
			} else if( opt.nodesSort == 2 ) {
				_d = leafs.concat(nodes);	
			}
			
			return _d;
		},
		/*
		*动态对item分组 或者 排序
		*/
		groupNodes : function(pid){
			var self = this,
				opt=this.configs,
				undef;
			var pid = pid === undef ? opt.root : pid;		
			var p = self.getNodeEl( pid );
			var isRoot = self._isRoot( pid );
			if( !p ) return false;
			if( !isRoot && !tree._getNode(pid,opt.openField) ) return false;
			var childrens = self._groupNodes( self.getDisplayNodes( pid ) );	
			
			$.each( childrens,function( i,node ){
				var id = node[opt.idField];
				var el = self.getNodeEl( id );
				if( el ) {
					p.append( el );		
				}
			} );
			return true;
		},
		sortNodes : function(pid){
			return this.groupNodes( pid );	
		},
		/*
		*更新 第一个节点和最后一个节点的索引
		*/
		_updateLastNodes : function(pid, list){
			var self = this,
				opt=this.configs,
				undef;
			var pid = pid === undef ? self.getRootId() : pid;	
			var chlids = list || [];
			
			if( chlids.length ) {
				self._firstNodes[pid] = chlids[0];
				self._lastNodes[pid] = chlids[chlids.length-1];//[chlids.length-1]
			} else {
				self._firstNodes[pid] = null;
				self._lastNodes[pid] = null;	
			}
		},
		updateLastNodes : function(pid){
			this.refreshDisplayNodes(pid);
			return this;	
		},
		//对当前节点的子节点的排序数字重计算
		resetNodesOrder : function( pid ){
			var self = this
				,opt=this.configs
				,undef;	
			var childs = self.getChildrens( pid );
			//sortOrder
			var isAsc = opt.sortOrder === 'asc' ? true : false;
			var len = childs.length || 0;
			var sorts = {};
			$.each( childs,function(i,node){
				var index = isAsc ? i : --len;
				node[ opt.sortField ] = index;
				sorts[ node[opt.idField] ] = index;
			} );	
			self.fireEvent( 'onResetOrder',[ sorts,childs,opt ] );
		},
		_sortItems : function( list ){
			var self = this
				,opt=this.configs
				,undef;
			if( !Nex.isArray( list ) || !list.length ) {
				return list;	
			}	
			var isAsc = opt.sortOrder == "asc" ? true : false;	
			list.sort(function(a,b){
				a[opt.sortField] = self._undef(a[opt.sortField],0);
				b[opt.sortField] = self._undef(b[opt.sortField],0);
				if( a[opt.sortField] >  b[opt.sortField] ) {
					return isAsc ? 1 : -1;
				} if( a[opt.sortField] === b[opt.sortField] ){
					return 0;
				} else {
					return isAsc ? -1 : 1;
				}
			});
			return list;
		},
		unSelectNode : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			if( tid === undef ) return self;	
			if( !self.isSelected(tid) ) return self; 
			var r = self.fireEvent("onBeforeUnSelectNode",[tid,opt]);
			if( r === false ) return self;
			var el = self.getNodeEl( tid );
			el.removeClass("nex-tree-item-selected");
			self.selection[tid] = false;
			self.fireEvent("onUnSelectNode",[tid,opt]);
			return self;
		},
		selectNode : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			if( tid === undef ) return self;
			for( var i in self.selection ) {
				if(self.selection[i] && opt.singleSelect) {
					if( tid+'' == i+'' ) continue;//如果单选情况下 重复选择无效
					self.unSelectNode(i);	
				}
			}
			if( !opt.singleSelect && self.selection[tid] ) {
				self.unSelectNode(tid);	
				return self;	
			}
			if( self.isSelected(tid) ) return self; 
			var r = self.fireEvent("onBeforeSelectNode",[tid,opt]);
			if( r === false ) return self;
			var el = self.getNodeEl( tid );
			el.addClass("nex-tree-item-selected");
			self.selection[tid] = true;
			self.fireEvent("onSelectNode",[tid,opt]);
			return self;
		},
		isSelected : function(tid){
			return !!this.selection[tid];	
		},
		getSelectedNodes : function(){
			var list = [];
			for( tid in this.selection ) {
				if( this.selection[tid] ) {
					list.push( this.getNode(tid) );
				}
			}	
			return list;
		},
		isLeaf : function( id ){
			var self = this
				,opt=this.configs
				,undef;
			var rootId = self.getRootId();	
			if( id === rootId ) return false;
			var tnode = Nex.isPlainObject(id) ? id : self._getNode(id);
			//如果是根节点 那么是获取不到node的 需要通过_isRoot来判断是否根节点 跟节点一定不是leaf
			if( !tnode && !self._isRoot(id) ) return true;
			if( self._isRoot(id) ) return false;
			if( tnode[ opt.leafField ] === undef ) {
				var tid = tnode[opt.idField];
				var childrens = self.getChildrens(tid);
				if( childrens.length ) {
					return false;	
				}
				return true;	
			} else {
				return !!tnode[ opt.leafField ];	
			}
		},
		getAllChildrens : function(pid) {
			var self = this
				,opt=this.configs
				,undef;
			var childs = [];
			var pid = self._undef(pid, self.getRootId());
			var getChilds = function(pid){
				var _childs = self.getChildrens(pid);
				if( _childs.length ) {
					childs = childs.concat(_childs);
					for( var i=0;i<_childs.length;i++ ) {
						getChilds(_childs[i][opt.idField]);
					}
				}
			}
			getChilds(pid);
			return childs;
		},
		/*
		*获取节点的子节点
		*/
		getChildrens : function(pid){
			var self = this
				,opt=this.configs
				,undef;

			var pid = pid === undef ? self.getRootId() : pid;
			
			var childs = self._dataChildrens[pid] === undef ? [] : self._dataChildrens[pid];
			
			var list = [];
			for( var i=0, len=childs.length;i<len;i++ ) {
				var child = childs[i];
				list.push( child );	
			}
			return childs.concat([]);//返回一个新数组
		},
		getLevelData : function( level ){
			return this._dataLevels[level] || [];	
		},
		/*删除节点数据  只删除数据*/
		_removeChildrenData : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			
			if( tid === undef ) return false;	
			
			var node = self._getNode( tid );
			if( !node ) return false;
			
			var pid = self.getParentID(tid);
			
			//_dataChildrens
			var list = self.getChildrens(pid);
			Nex.array_splice( function(i, d){
				if( d[opt.idField]+'' === tid+'' ) return true;	
			}, list );
			
			self._updateChildrens(pid, list);
			//_dataLevels
			var lvs = self.getLevelData(node.levelField);
			Nex.array_splice( function(i, d){
				if( d[opt.idField]+'' === tid+'' ) return true;	
			}, lvs );
			
			self.updateLastNodes(pid);
			
			delete self._dataHashMaps[ tid ];
			
			//self._dataChildrens[tid] = [];
			
			return true;
		},
		/*
		*添加节点 适合批量
		*/
		_addChildren : function(tid, data){
			var self = this,
				opt=this.configs,
				undef;	
			var d = !Nex.isArray( data ) ? [data] : data;	
			//var r = self.fireEvent('onBeforeAddChildren',[tid,data,opt]);	
			//if( r === false ) return false;
			self.dataToTree(d, tid);
			
			self.resetNodesOrder(tid);
			
			self.refreshTree(tid);
			//self.fireEvent('onAddChildren',[tid,data,opt]);	
			self.resetNodesOrder(tid);
			return true;
		},
		addChildren : function(tid, data){
			var self = this,
				opt=this.configs,
				undef;	
			var d = !Nex.isArray( data ) ? [data] : data;	
			var r = self.fireEvent('onBeforeAddChildren',[tid,data,opt]);	
			if( r === false ) return false;
			
			self._addChildren(tid, data);
			
			self.fireEvent('onAddChildren',[tid,data,opt]);	
			return true;
		},
		/*删除节点 适合单节点的删除*/
		_removeChildren : function(tid, f){
			var self = this
				,opt=this.configs
				,undef;
			var f = f === undef ? true : f;
			if( tid === undef ) return false;
			
			var pid = self.getParentID(tid);
			if( pid === false ) return false;
			
			var r = self._removeChildrenData( tid );	
			if( !r ) return false;
			
			self.getNodeCt(tid).remove();
			
			if( opt.showTreeLines && f ) {
				//addnode removenode 这里都有效率问题，不应该是全部更新，而应该分好几种情况，有时间再推算下
				/*var childs = self.getAllChildrens( pid );
				for( var i=0;i<childs.length;i++ ) {
					var chlid = childs[i];
					self.refreshTreeItem( chlid[opt.idField] );		
				}*/
				self.refreshTreeAllItem( pid );
				
			}
			//self.fireEvent('onRemoveChildren',[tid,opt]);				
			return true;
		},
		removeChildren : function(tid,f){
			var self = this
				,opt=this.configs
				,undef;
			var f = f === undef ? true : f;
			if( tid === undef ) return false;
			
			var r = self.fireEvent('onBeforeRemoveChildren',[tid,opt]);	
			if( r === false ) return false;
			
			var res = self._removeChildren( tid );	
			
			self.fireEvent('onRemoveChildren',[tid,opt]);		
			return res;
		},
		_addNodeData : function(tid, data, end){
			var self = this
				,opt=this.configs
				,undef;
			var d = !Nex.isArray( data ) ? [data] : data;	
			var end = self._undef( end,true );
			
			var childs = self.getChildrens( tid );
			//数据添加
			self.dataToTree(d,tid);	
			var _childs = [];
			if( end ) {
				_childs = childs.concat( d );
			} else {
				_childs = d.concat( childs );	
			}
			
			self._updateChildrens(tid, _childs);
			
			self.resetNodesOrder(tid);
		},
		/*添加子节点 适合单条数据添加 */
		_addNode : function(tid,data,end,expand){//expand 添加后是否展开 end后面添加
			var self = this
				,opt=this.configs
				,undef;
		
			if( tid === undef ) return false; 
			var node = self._getNode( tid );
			var isRoot = self._isRoot(tid);
			if( !node && !isRoot ) return false;
						
			var expand = self._undef( expand,false );
			var end = self._undef( end,true );
			var d = !$.isArray( data ) ? [data] : data;	
			
			self._addNodeData( tid,d,end );
			
			if( !self.isExpanded(tid) ) {
				if( expand ) {
					self.expandNode( tid );	
				}
				self.refreshTreeItem( tid );		
				return true;	
			} else {
				
				if( isRoot ) {
					node = {};
					node[opt.openField] = true;	
				}
				
				if( !node[ opt.openField ] ) {
					if( expand ) {
						self.expandNode( tid );	
					}
				}	
			}
			
			var lis = [];
			for( var i=0;i<d.length;i++ ) {
				var li = $(self.getNodeHtml( d[i] ));
				lis.push( li );
			}	
			if( !end ) {
				lis.reverse();	
			}
			var ul = self.getNodeChildEl( tid );
			
			for( var j=0;j<lis.length;j++ ) {
				ul[ end?'append':'prepend' ]( lis[j] );
			}
			
			if( opt.showTreeLines ) {
				//addnode removenode 这里都有效率问题，不应该是全部更新，而应该分好几种情况，有时间再推算下
				//var childs = self.getAllChildrens( tid );
				/*for( var i=0;i<childs.length;i++ ) {
					var chlid = childs[i];
					self.refreshTreeItem( chlid[opt.idField] );		
				}*/
				self.refreshTreeAllItem( tid );//chlid
			}
			
			return true;
		},
		/*添加节点 适合单条数据添加 */
		addNode : function(tid,data,end,expand){
			var self = this
				,opt=this.configs
				,undef;	
			if( tid === undef ) return false; 
			var node = self._getNode( tid );
			var isRoot = self._isRoot(tid);
			if( !node && !isRoot ) return false;	
			var r = self.fireEvent('onBeforeAddNode',[tid,data,end,expand,opt]);	
			if( r === false ) return false;	
			
			var res = self._addNode( tid,data,end,expand );
			
			self.fireEvent('onAddNode',[tid,data,end,expand,opt]);	
			return res;
		}, 
		/*删除节点  tid可以是一个数组 适合批量*/
		_removeNode : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			//var r = self.fireEvent('onBeforeRemoveNode',[tid,opt]);	
			//if( r === false ) return false;
			var d = !Nex.isArray( tid ) ? [tid] : tid;	
			var pids = {};
			for( var i=0;i<d.length;i++ ) {
				pids[ self.getParentID( d[i] ) ]=true;
				self._removeChildren( d[i],false );	
			}	
			$.each( pids,function(k,v){
				if( v ) {
					self.refreshTreeAllItem( k );	
				}	
			} );
			//self.fireEvent('onRemoveNode',[tid,opt]);
			return true;
		},
		removeNode : function( tid ){
			var self = this
				,opt=this.configs
				,undef;
			
			var r = self.fireEvent('onBeforeRemoveNode',[tid,opt]);	
			if( r === false ) return false;	
				
			var res = self._removeNode(tid);	
			
			self.fireEvent('onRemoveNode',[tid,opt]);	
			
			return res;
		},
		_afterNodeData : function(tid,data,after){
			var self = this
				,opt=this.configs
				,undef;
			var d = !$.isArray( data ) ? [data] : data;	
			var after = self._undef( after,true );	
			var pid = self.getParentID(tid);
			if( pid === false ) return false;
			
			var childs = self.getChildrens( pid );
			
			//数据添加
			self.dataToTree(d,pid);	
			
			for( var i=0;i<childs.length;i++ ) {
				var child = childs[i];
				if( child[opt.idField]+'' === tid+'' ) break;
			}
			
			Nex.array_insert(i, d, childs, !after);
			
			self._updateChildrens(pid, childs);
			
			self.resetNodesOrder(pid);
		//	console.log( childs );
			//主要是刷新lastNode firstNode
			//self.getDisplayNodes(pid);
		//	console.log(r);
		},
		/*添加节点 适合单条数据添加 */
		_afterNode : function(tid,data,after,expand){//expand 添加后是否展开 after后面添加
			var self = this
				,opt=this.configs
				,undef;
			//$.isPlainObject  _getNode
			if( tid === undef ) return false; 
			var node = self._getNode( tid );
			if( !node ) return false;
			
			var expand = self._undef( expand,false );
			var after = self._undef( after,true );
			var d = !$.isArray( data ) ? [data] : data;	
			
			var pid = self.getParentID(tid);
			if( pid === false ) return false;

			
			self._afterNodeData( tid,d,after );
			
			var isRoot = self._isRoot(pid);
			if( isRoot ) {
				node = {};
				node[opt.openField] = true;	
			}
			
			var ul = self.getNodeChildEl( pid );
			
			if( !ul.size() ) {
				if( expand ) {
					self.expandNode( pid );	
				}
				self.refreshTreeItem( tid );	
				//self.fireEvent('onAfterNode',[tid,data,after,expand,opt]);	
				return true;	
			} else {
				if( !node[ opt.openField ] ) {
					if( expand ) {
						self.expandNode( pid );	
					}
				}	
			}
			if( opt.showTreeLines ) {
				//var childs = self.getAllChildrens( pid );
				//addnode removenode 这里都有效率问题，不应该是全部更新，而应该分好几种情况，有时间再推算下
				/*for( var i=0;i<childs.length;i++ ) {
					var chlid = childs[i];
					self.refreshTreeItem( chlid[opt.idField] );		
				}*/
				self.refreshTreeAllItem( pid );//childs
			}
			var lis = [];
			for( var i=0;i<d.length;i++ ) {
				var li = $(self.getNodeHtml( d[i] ));
				lis.push( li );
			}	
			if( after ) {
				lis.reverse();	
			}
			
			var li = self.getNodeCt(tid);
			
			for( var j=0;j<lis.length;j++ ) {
				li[ after?'after':'before' ]( lis[j] );
			}
			//self.fireEvent('onAfterNode',[tid,data,after,expand,opt]);	
			return true;
		},
		afterNode : function(tid,data,after,expand){
			var self = this
				,opt=this.configs
				,undef;	
			if( tid === undef ) return false; 
			var node = self._getNode( tid );
			if( !node ) return false;
				
			var r = self.fireEvent('onBeforeAfterNode',[tid,data,after,expand,opt]);	
			if( r === false ) return false;
			
			var res = self._afterNode( tid,data,after,expand );	
			
			self.fireEvent('onAfterNode',[tid,data,after,expand,opt]);
			
			return res;
		},
		_moveNode : function(src,dist,pos){//src 需要移动的节点 dist drop节点 pos: 1前 2中 3后
			var self = this
				,opt=this.configs
				,undef;
			var pos = pos || 2;	
			if( src == dist ) return false;	
			var node = self._getNode( src );	
			if( !node ) return false;
			node = $.extend({},node);
			
			delete node[opt.childrenField];
			
			self._removeChildren( src );//false
			if( pos == 2 ) {
				self._addNode( dist,node,true );	
			} else if( pos == 1 ) {
				self._afterNode( dist,node,false );
			} else {
				self._afterNode( dist,node,true );	
			}
			self.refreshTreeItem( dist );		
			
			return true;
		},
		moveNode : function(src,dist,pos){//src 需要移动的节点 dist drop节点 pos: 1前 2中 3后
			var self = this
				,opt=this.configs
				,undef;
			var r = self.fireEvent('onBeforeMoveNode',[src,dist,pos,opt]);	
			if( r === false ) return false;
			var res = self._moveNode( src,dist,pos || 2 );
			self.fireEvent('onMoveNode',[src,dist,pos || 2,opt]);
			return res;
		},
		_getParentsList : function(tid){
			var self = this
				,opt=this.configs
				,root=opt.root
				,pids = [];
			var node = $.isPlainObject(tid) ? tid : self._getNode(tid);	
			if( !node ) return [];
			var maps = self.getDataMaps();
			var id = node[opt.idField];
			var pid = self.getParentID(id);
			while( 1 ) {
				if( !(pid in maps) ) break;
				pids.push( pid );	
				pid = self.getParentID(pid);
				if( pid === opt.root ) break;
			}
			return pids.reverse();
		},
		isFirstNode : function(tid, pid){
			var self = this
				,opt=this.configs;
			var pid = Nex.unDefined(pid, self.getParentID(tid));
			
			var first = self._firstNodes[ pid ] || {};
				
			return first[opt.idField]+'' === tid+'' ? true : false;
		},
		isLastNode : function(tid, pid){
			var self = this
				,opt=this.configs;
			var pid = Nex.unDefined(pid, self.getParentID(tid));
			
			var last = self._lastNodes[ pid ] || {};
			
			return last[opt.idField]+'' === tid+'' ? true : false;
		},
		/*
		* 获取节点的占位符
		*/
		getNodeSpacers : function(tnode){
			var self = this
				,opt=this.configs
				,pids = [];
			var node = $.isPlainObject(tnode) ? tnode : self._getNode(tnode);
			if( !node ) return [];
			//console.log(node);
			var n = node;
			var cpid = node[opt.idField];
			//pids.push(cpid);
			pids = self._getParentsList( cpid );
			//console.log(pids);
			var spacer = [];
		
			for( var i=0;i<pids.length;i++ ) {
				//是否最后一个节点
				var pid = pids[i];
				if( self._isRoot(pid) ) continue;
				if( self.isLastNode(pid) ) {
					spacer.push('nex-tree-empty');	
				} else {
					spacer.push(opt.showTreeLines ? 'nex-tree-line' : 'nex-tree-empty');
				}
			}	
			if( opt.showExpanderIcon ) {
				if( self.isLeaf(cpid) ) {
					var d = self.getDataMaps();
					var j=0;
					for( var x in d ) {
						j++;
						if( j>=2 ) break;
					}
					if(j>1) {
						if( self.isLastNode(cpid) ) {
							spacer.push(opt.showTreeLines ? 'nex-tree-elbow-end':'nex-tree-empty');
						} else {
							spacer.push(opt.showTreeLines ? 'nex-tree-elbow':'nex-tree-empty');
						}
					} else {
						spacer.push('nex-tree-empty');//如果树形只有一条记录 可以显示nex-tree-empty nex-tree-elbow-end		 
					}
				} else {
					if( self.isLastNode(cpid) ) {
						spacer.push(opt.showTreeLines ? 'nex-tree-expander-icon nex-tree-expander-end':'nex-tree-expander-icon nex-tree-expander-nl');
					} else {
						spacer.push(opt.showTreeLines ? 'nex-tree-expander-icon nex-tree-expander' : 'nex-tree-expander-icon nex-tree-expander-nl');
					}
				}
			}
			self.fireEvent('onGetSpacers',[ cpid,spacer ]);
			return spacer;
		},
		/*
		* 获取节点的容器
		*/
		getNodeCt : function( tid ){
			var self = this
				,opt=this.configs;	
			var tid = Nex.unDefined( tid, self.getRootId() );	
			return self._isRoot(tid) ? $("#"+opt.id+'_'+tid+'_child') : $("#"+opt.id+'_'+tid);
		},
		/*
		* 获取节点元素
		*/
		getNodeEl : function( tid ){
			var self = this
				,opt=this.configs;	
			var tid = Nex.unDefined( tid, self.getRootId() );	
			return $("#"+opt.id+'_'+tid+'_wraper');
		},
		getNodeTextEl : function( tid ){
			return $( '>.nex-tree-text', this.getNodeEl(tid) );
		},
		getNodeChildEl : function( tid ){
			var self = this
				,opt=this.configs;	
			var tid = Nex.unDefined( tid, self.getRootId() );	
			return $("#"+opt.id+'_'+tid+'_child');	
		},
		/*
		* 创建一个占位符 标签 eg: <span class="nex-tree-indent nex-tree-icon nex-tree-leaf"></span>
		*/
		createSpacer : function( cls, style ){
			var style = style ? 'style="'+style+'"' : '';
			return ['<span class="nex-tree-indent ', cls ,'" ', style ,'></span>'].join('');
		},
		/*
		* 获取节点Html 如果参数inner=true 则只获取里面的内部html
		*/
		getNodeHtml : function(tnode, inner){
			var self = this
				,opt=this.configs
				,inner = Nex.unDefined( inner, false )
				,spacers = [];
			var node = $.isPlainObject(tnode) ? tnode : self._getNode(tnode);
			if( !node ) return '';
			
			var tid = node[opt.idField];
			var rootId = self.getRootId();
				
			var spacers = self.getNodeSpacers(node);
			var treeID = [opt.id,'_',node[opt.idField]].join("");
			
			//var _pid = self.getParentID(tid);
			if( !inner ) {
				var liCls='';
				if( self.isFirstNode( tid ) ) {
					liCls = 'nex-tree-first';	
					if( self.isFirstNode( tid, rootId ) ) {
						liCls+=' nex-tree-first-all';
					}
				}
				if( self.isLastNode( tid ) ) {
					liCls = 'nex-tree-last';	
				}
				liCls = [ liCls ];
				
				self.fireEvent('onGetNodeCls',[ tid,liCls ]);
			}
			self.fireEvent('onGetNodeSpacers',[ tid,spacers ]);
			if( !inner ) {
				if( self.isSelected(tid) ) {
					liCls.push('nex-tree-item-selected');
				}
			}
			var _s = [];
			if( !inner ) {
				_s.push(['<li id="',treeID,'" class="nex-tree-item" treeid="',tid,'"><div id="',treeID,'_wraper" treeid="',tid,'" class="nex-tree-item-wraper ',liCls.join(' '),'">'].join(""));
			}
			for( var i=0,len=spacers.length;i<len;i++ ) {
				_s.push( self.createSpacer( spacers[i] ) );	
			}
			
			if( opt.showTreeIcon ) {
				var icon = node[opt.iconClsField];
				var bg = '';
				if( node[opt.iconField] ) {
					bg = 'background-image:url('+node[opt.iconField]+');';
				}
				var icons = ['nex-tree-icon'];
				if( self.isLeaf( tid ) ) {
					icons.push( 'nex-tree-leaf' );
					if( icon !== undefined )
						icons.push( icon );
				} else {
					icons.push( 'nex-tree-parent' );
					if( icon !== undefined )
						icons.push( icon );
				}
				_s.push( self.createSpacer( icons.join(' '), bg ) );	
			}
			
			self.fireEvent('onCreateNodeSpacers',[ tid, _s ]);
			
			_s.push(['<span class="nex-tree-text">',node[opt.textField],'</span>'].join(''));
			if( !inner ) {
				_s.push('</div></li>');
				self.fireEvent('onCreateNode',[ tid, _s ]);
			}
			return _s.join('');
		},
		refreshTreeItem : function(tid){
			var self = this, undef;	
			
			if( tid === undef || self._isRoot(tid) ) {
				return self;	
			}
			
			var node = self.getNodeEl( tid );
			if( node.length ) {
				node.html( self.getNodeHtml( tid, true ) );	
			
				if( self.isLeaf(tid) ) {
					self.getNodeChildEl(tid).remove();	
				}
			}	
			return self;
		},
		refreshTreeAllItem : function(pid){
			var self = this
				,opt=this.configs
				,undef;
					
			var childs = Nex.isArray( pid ) ? pid : self.getAllDisplayNodes(pid, false);
			
			self.refreshTreeItem( pid );	
			
			for( var i=0;i<childs.length;i++ ) {
				var node = childs[i];
				self.refreshTreeItem( node[opt.idField] );		
			}		
		},
		_isRoot : function(tid){
			return (tid+'' === this.getRootId()+'') ? true : false;
		},
		/*
		* 获取节点下需要显示的子节点，和getChildrens不同在于 会经过排序,分类,设置好first last node和自定义等处理
		* @group 默认true 对节点进行分类 如果设置false则不分类 主要用在刷新时
		*/
		getDisplayNodes : function(tid, group){
			var self = this
				,opt=this.configs;	
				
			var tid = self._undef(tid, self.getRootId());	
			var group = self._undef(group, true);	
			var sortable = opt.sortable;	
			var pid = self.getParentID( tid );
			var childrens = self.getChildrens(tid);//self._undef(opt._childrens[ tid ],[]);
			if( sortable ) {
				var sr = self.fireEvent('onBeforeSortTreeData',[ tid,childrens,opt ]);
				if( sr !== false ) {
					childrens = self._sortItems( childrens );	
					self.fireEvent('onSortTreeData',[ tid,childrens,opt ]);
				}
			}
			if( group ) {
				childrens = self._groupNodes( childrens );
			}
			self._updateChildrens(tid, childrens);
			
			self.fireEvent('onGetDisplayNodes',[ tid,childrens,opt ]);
			
			self._updateLastNodes(tid, childrens);
			
			return childrens;
		},
		refreshDisplayNodes : function(tid){
			return this.getDisplayNodes.apply(this, arguments);	
		},
		getAllDisplayNodes : function(pid, group){
			var self = this;
			var opt = this.configs;
			var list = [],childs=[];
			list = self.getDisplayNodes.apply(self, arguments);	
			for( var i=0, len = list.length; i<len; i++ ) {
				var node = list[i];
				var id = node[opt.idField];
				if( !self.isLeaf( id ) ) {
					childs = childs.concat(self.getAllDisplayNodes(id, group));	
				}	
			}
			return list.concat(childs);
		},
		/*
		*创建Tree但不显示
		*/
		_bulidTree : function(tid){
			var self = this
				,opt=this.configs;	
			var tid = self._undef(tid,opt.root);
			if( self.isLeaf( tid ) ) {
				return false;	
			}
			var bd = self.getBody();
			var isRoot = self._isRoot(tid);
			var treeID = [opt.id,'_',tid,'_child'].join("");
			var tree = $("#"+treeID);
			
			var r = self.fireEvent('onBeforeBulidTree',[ tree,tid,opt ]);
			if( r === false ) return false;
			
			var createTree = function(){
				var childrens = self.getDisplayNodes(tid);
				var tree = ['<ul id="',treeID,'">'];
				var nodesHtml = [];
				self.fireEvent('onGetTreeNodesStart',[ tid, nodesHtml, opt ]);
				for( var i=0, len=childrens.length;i<len;i++ ) {
					nodesHtml.push( self.getNodeHtml(childrens[i]) );
				}
				self.fireEvent('onGetTreeNodes',[ tid, nodesHtml, opt ]);
				tree.push( nodesHtml.join('') );
				tree.push('</ul>');
				tree = $(tree.join(""));
				tree.hide();
				var render = isRoot ? bd : $("#"+opt.id+'_'+tid);
				render.append(tree);	
				//tree.slideDown();	
				return tree;
			};
			//防止重复创建
			if( !tree.length ) {
				tree = createTree();
				//self.bindTreeEvent(tree);
				self.fireEvent('onBulidTree',[ tid, tree,opt ]);
			}
			
			return tree;
		},
		showLeafLoading : function(tid){
			var self = this,
				opt = self.configs;	
			if( self._isRoot( tid ) ) {
				self.showLoading();	
			} else {
				$("#"+opt.id+'_'+tid+'_wraper').addClass('nex-tree-loading');
			}
		},
		hideLeafLoading : function(tid){
			var self = this,
				opt = self.configs;	
			if( self._isRoot( tid ) ) {
				self.hideLoading();	
			} else {
				$("#"+opt.id+'_'+tid+'_wraper').removeClass('nex-tree-loading');
			}	
		},
		isExpandNode : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			if( tid === undef ) return false;
			
			if( self._isRoot(tid) ) return true;
			
			var node = self._getNode(tid);
			if( node === false ) return false ;
			return !!node[ opt.openField ];
		},
		toggleNode : function(tid){
			var self = this
				,opt=this.configs
				,undef;
			
			var node = self._getNode(tid);
			if( !node ) return self;
			
			if( self.isExpanded(tid) ) {
				self.collapseNode(tid);
			} else {
				self.expandNode(tid);	
			}
			return self;
		},
		//解析服务器数据到本地
		parseAsyncData : function(data){
			var self = this
				,opt = self.configs;	
			self.dataToTree( Nex.isArray( data ) ? data : [ data ] );	
			return self;
		},
		/*
		*加载数据
		*/
		_loadTreeData : function( tid, s, f, c ){
			var self = this
				,opt=this.configs;
			var d = {};
			d[ opt.idField ] = tid;	
			self.loadAsyncData( d, function( data ){
				self.parseAsyncData( data );
				if( Nex.isFunction( s ) ) {
					s( data );	
				}	
			}, f, c );	
			return self;
		},
		isExpanded : function( tid ){
			var self = this
				,opt=this.configs;
			//检测是否已经展开
			var nc = self.getNodeChildEl( tid );
			if( nc.length && (self.getNode( tid, opt.openField ) || self._isRoot(tid)) ) {
				return true;	
			}	
			return false;
		},
		isCollapsed: function( tid ){
			var self = this
				,opt=this.configs;
			//检测是否已经展开
			var nc = self.getNodeChildEl( tid );
			if( !nc.length || (!self.getNode( tid, opt.openField ) && !self._isRoot(tid)) ) {
				return true;	
			}
			return false;	
		},
		_expandNode : function(tid, cb, anim){
			var self = this
				,opt=this.configs
				,undef
				,pids = [];	
			
			var anim = Nex.unDefined( anim, opt.animate );	
			if( tid === undef ) return false;
			
			var node = self._getNode(tid);
			if( !node && !self._isRoot(tid) ) return false ;
			
			pids = self._getParentsList( tid );
			
			for( var i=0;i<pids.length;i++ ) {
				var _tid = pids[i];
				var _node = self._getNode(_tid);
				//if( self._isRoot( _tid ) ) continue;
				if( _node ) _node[opt.openField] = true;
				
				if( self.getNodeChildEl(_tid).length ) {
					continue;	
				}
				
				var tree = self._bulidTree(_tid);
				if( !tree ) continue;
				tree.show();
				$("#"+opt.id+'_'+_tid+'_wraper').addClass("nex-tree-open");
			}
			
			if( opt.singleExpand ) {
				var childs = self.getChildrens( self.getParentID(tid) );
				$.each(childs, function(i, node){
					var cid = node[opt.idField];
					if( tid == cid ) return;
					//console.log( !self.isLeaf(cid) && node[opt.openField] );
					if( !self.isLeaf(cid) && node[opt.openField] ) {
						self.collapseNode(cid);	
					}
				});	
			}
			
			var tree = self._bulidTree(tid);
			if( !tree ) return false;
			var el = self.getNodeEl(tid);
			
			if( node ) {
				node[opt.openField] = true;
			}
			
			function c(){
				self.fireEvent('onExpandNode',[tid,opt]);
				if( cb && Nex.isFunction(cb) ) {
					cb();	
				}
			}
			el.addClass("nex-tree-open");	
			if( anim && $('>.nex-tree-item', tree).length ) {
				tree.stop(true,true).slideDown(opt.animateTime, function(){
					c();
				});	
			} else {
				tree.show();	
				c();
			}
			return true;
		},
		expandNode : function(tid, cb, anim){
			var self = this
				,opt=this.configs
				,undef;	
			var tid = self._undef(tid, self.getRootId());		
			
			//如果tid是 root 则不需要任何检查 直接展开
			if( !self._isRoot(tid) ) {
				if( self.isLeaf(tid) ) {
					return self;	
				}
				
				if( self.isExpanded( tid ) ) {
					return self;	
				}
				
				var r = self.fireEvent('onBeforeExpandNode',[tid,opt]);
				if( r === false ) return self;
			}
			
			if( self.isEmptyData(tid) && opt.url ) {
				self.showLeafLoading( tid );
				self._loadTreeData(tid,function(){
					self.hideLeafLoading( tid );
					self._expandNode(tid, cb, anim);	
					var childrens = self.getAllChildrens(tid);
					for( var i=0;i<childrens.length;i++ ) {
						if( childrens[i][opt.openField] )
							self.expandNode(childrens[i][opt.idField], null, anim);	
					}	
					/*if( Nex.isFunction( cb ) ) {
						cb();	
					}*/				   
				});
			} else {
				self._expandNode(tid, cb, anim);
				
				/*if( Nex.isFunction( cb ) ) {
					cb();	
				}*/
				//removeOnCollapse
				//BUG 待定
				/*setTimeout(function(){
					var childs = self.getChildrens( tid );
					$.each( childs,function(i,node){ 
						if( node[opt.openField] ) {
							self.expandNode( node[opt.idField] );
						}
					 } );
				},0); */
			}
		},
		_collapseNode : function(tid, cb, anim){
			var self = this
				,opt=this.configs
				,undef;	
			var anim = Nex.unDefined( anim, opt.animate );		
			if( tid === undef ) return false;
			var node = self._getNode(tid);
			if( node === false || self._isRoot(tid) ) return false;
			
			var isRoot = self._isRoot(tid);
			if( isRoot ) return false;
			//var treeID = [opt.id,'_',tid,'_child'].join("");
			var el = self.getNodeEl(tid);
			var tree = self.getNodeChildEl(tid);
			
			node[opt.openField] = false;	
			
			function c(){
				self.fireEvent('onCollapseNode',[tid, opt]);
				if( opt.removeOnCollapse ) {
					tree.remove();	
				}
				if( cb && Nex.isFunction( cb ) ) {
					cb();	
				}	
			}
			
			el.removeClass("nex-tree-open");	
			
			if( anim ) {
				if( tree.size() ) {
					tree.stop(true,true).slideUp(opt.animateTime,function(){//.stop(true,true)
						c();									
					});
				}
			} else {
				tree.hide();
				c();
			}
			
			return true;
		},
		collapseNode : function(tid){
			var self = this,opt=this.configs;
			var tid = self._undef(tid,opt.root);
			
			if( self.isCollapsed( tid ) ) {
				return self;	
			}
				
			var r = self.fireEvent('onBeforeCollapseNode',[tid,opt]);
			if( r === false ) return self;
			self._collapseNode(tid);
		},
		expandLevel : function( level ){
			var self = this,
				opt=this.configs;
			/*
			 这里可能还需要做写处理 如果一级目录下有空节点 直接展开三级 那么这一级是不会展开的。。。
			*/	
				
			var levels = self.getLevelData( level );
			$.each( levels, function(i, node){
				var id = node[ opt.idField ];
				if( !self.isLeaf( id ) ) {
					self.expandNode(id);	
				}	
			} );
			return self;
		},
		collapseLevel : function( level ){
			var self = this,
				opt=this.configs;
			var levels = self.getLevelData( level );
			$.each( levels, function(i, node){
				var id = node[ opt.idField ];
				if( !self.isLeaf( id ) ) {
					self.collapseNode(id);	
				}	
			} );
			return self;
		},
		/*
		*打开当前节点的子节点
		*/
		expandChildrens : function(pid){
			var self = this,
				opt=this.configs;
			var pid = self._undef(pid,opt.root);	
			var childs = self.getChildrens(pid);
		
			for(var i=0;i<childs.length;i++) {
				if( self.isLeaf( childs[i] ) ) continue;
				//console.log(childs[i]);
				self.expandNode( childs[i][opt.idField] );	
			}
		},
		/*
		*打开当前节点下的所有子节点
		*/
		expandAll : function(pid){
			var self = this,
				opt=this.configs;	
			var pid = self._undef(pid,opt.root);
			var isRoot = self._isRoot(pid);
			//开启Url情况下 在 获取新值后自动展开
			/*if( opt.url ) {
				self.unbind("onLoadSuccess.expandAll");
				self.bind("onLoadSuccess.expandAll",function(tid,data){
					setTimeout(function(){
						self.expandAll(tid);					
					},0);
				});
			}*/
		//	var allChilds = self.getAllChildrens(pid);
			self.expandNode(pid, function(){
				var allChilds = self.getAllChildrens(pid);	
				for( var i=0;i<allChilds.length;i++ ) {
					var tid = allChilds[i][opt.idField];
					var isLeaf = self.isLeaf(tid);
					if( !isLeaf ) {
						self.expandAll(tid);
					}	
				}
			});
			//for( var i=0;i<allChilds.length;i++ ) {
//				var tid = allChilds[i][opt.idField];
//				var isLeaf = self.isLeaf(tid);
//				if( !isLeaf ) {
//					self.expandNode(tid);
//				}	
//			}
			/*for(var tid in opt._data) {
				
				if( !isLeaf && isRoot ) {
					self.expandNode(tid);
				} else if( !isLeaf ) {
					var pids = self._getParentsList(tid);
					if( self.inArray(pid,pids) !== -1 ) {
						self.expandNode(tid);	
					}
				}
			}*/
			
		},
		collapseChildrens : function(pid){
			var self = this,
				opt=this.configs;
			var pid = self._undef(pid,opt.root);	
			var childs = self.getChildrens(pid);
		
			for(var i=0;i<childs.length;i++) {
				if( self.isLeaf( childs[i] ) ) continue;
				//console.log(childs[i]);
				self.collapseNode( childs[i][opt.idField] );	
			}
		},
		collapseAll : function(pid){
			var self = this,
				opt=this.configs;	
			var pid = self._undef(pid,opt.root);
			
			var allChilds = self.getAllChildrens(pid);
			self.collapseNode(pid);
			for( var i=0;i<allChilds.length;i++ ) {
				var tid = allChilds[i][opt.idField];
				var isLeaf = self.isLeaf(tid);
				if( !isLeaf ) {
					self.collapseNode(tid);
				}	
			}
		
			/*for(var tid in opt._data) {
				var isLeaf = self.isLeaf(tid);
				if( !isLeaf && isRoot ) {
					self.collapseNode(tid);
				} else if( !isLeaf ) {
					var pids = self._getParentsList(tid);
					if( self.inArray(pid,pids) !== -1 ) {
						self.collapseNode(tid);	
					}
				}
			}	*/
		},
		/*
		* 检测是否一个目录节点为空 一般拿来检测是否需要动态加载数据
		*/
		isEmptyData : function(pid){
			var self = this,
				opt=this.configs,
				undef;
			var pid = self._undef(pid,opt.root);
			
			var childs = self.getChildrens(pid);
			
			return childs.length ? false : true;
		},
		
		/*
		* 刷新某节点 整个节点都会重新创建
		*/
		refreshTree : function(pid){
			var self = this,
				opt=this.configs;	
			var rootId = self.getRootId();
			var pid = self._undef(pid, rootId);
			//var bd = self.getBody();
			//var r = self.fireEvent('onBeforeRefreshTree',[pid,opt]);
//			if( r === false ) return self;
			var isRoot = self._isRoot(pid);
			if( isRoot ) {
				self.getNodeCt(pid).remove();
				self.expandNode(pid, null, false);
			} else {
				var node = self._getNode(pid);
				if( !node ) return self;
				
				var tree = self.getNodeCt(pid);
				self.getNodeChildEl(pid).remove();
				
				self.refreshTreeItem(pid);
				
				if( node[opt.openField] ) {
					self.expandNode(pid, null, false);	
				}
			}
			var allChilds = self.getAllChildrens(pid);
			for( var i=0;i<allChilds.length;i++ ) {
				if( allChilds[i][opt.openField] ) {
					self.expandNode(allChilds[i][opt.idField], null, false);	
				}	
			}
			//self.fireEvent('onRefreshTree',[pid,opt]);
			return self;
		}
	});
	
	return tree;
});	
//contextMenu
/*
$.fn.contextMenu( [ delegate ],opts );
1.$(div).contextMenu( opts );
2.$(document).contextMenu( 'tr',opts );
*/
define('Nex/menu/ContextMenu',['require','Nex/menu/Menu'],function(require){
	require('Nex/menu/Menu');	
	
	$.fn.contextMenu = function( delegate,opts ){
		var args = [];
		if( !this.length ) return this;
		var selector = this.selector;
		if ( typeof delegate === "object" || typeof delegate === "function" ) {
			
			opts = delegate;
			
			if( this.data(selector) ) {
				if( $.isFunction( opts ) ) {
					var c = opts.call( this.data(selector) );	
					if( c ) {
						this.data( selector ).C( c, true );		
					}
				} else {
					this.data( selector ).C( opts );
				}
				return this;	
			}
			
			if( $.isFunction( opts ) ) {
				opts = opts.call() || {};	
			}
			
			opts.autoShow = false;
			
			args.push( opts.which == 1 ? 'click._cmenu' : 'contextmenu._cmenu', function(e){
				menuOpts.context = this;
				menu.show( [ e.pageX, e.pageY ] );
				e.preventDefault();	
				e.stopPropagation();//？ 这里是否必须
			} );
		} else if( delegate && (typeof opts === "object" || typeof opts === "function") ) {
			delegate = String( delegate );
			
			selector += '.'+delegate;
		
			if( this.data(selector) ) {
				if( $.isFunction( opts ) ) {
					var c = opts.call( this.data(selector) );	
					if( c ) {
						this.data( selector ).C( c, true );		
					}
				} else {
					this.data( selector ).C( opts );
				}
				return this;	
			}
			
			opts.autoShow = false;
			args.push( opts.which == 1 ? 'click._cmenu' : 'contextmenu._cmenu', delegate, function(e){
				menuOpts.context = this;
				menu.show( [ e.pageX, e.pageY ] );	
				e.preventDefault();
				e.stopPropagation();//？ 这里是否必须
			});
		}
		
		if( args.length ) {
			var menu = Nex.Create('menu', opts);
			var menuOpts = menu.configs;
			
			this.data( selector, menu );
			
			this.on.apply( this, args );	
			
			if( opts.which == 1 ) {
				menu.bind('@onBindMenuEvents._contextmenu', function( el ){
					$(el).click( function(e){
						e.preventDefault();
						e.stopPropagation();	
					} );	
				});		
			}
		} else {
			if( 'remove' == delegate ) {
				var cmenu = this.data( selector );
				cmenu.destroyMenu();	
				this.off('._cmenu');
				return this;
			}
			if( 'remove' == opts ) {
				var cmenu = this.data( selector+'.'+delegate );
				cmenu.destroyMenu();	
				this.off('._cmenu',delegate);
				return this;
			}
			if( !arguments.length )	{
				return this.data( selector );	
			} else {
				return this.data( selector+'.'+delegate );		
			}
		}
		
		return this;	
	};
	return $;
});
define('Nex/form/Display',['require','Nex/form/AbstractForm'],function(require){
	require('Nex/form/AbstractForm');
	//"use strict";
	var display = Nex.define('Nex.form.Display','Nex.form.AbstractForm',{
		alias : 'Nex.DisplayField',
		xtype : 'displayfield'
	});	
	//参数重载
	display.setOptions( function(opt){
		return {
			__inputType  : 'display',
			containerCls : [opt.containerCls,'nex-form-display'].join(' '),
			cleanBtn	 : false
		};	
	} );
	return display;
});
define('Nex/form/Radio',['require','Nex/form/Display'],function(require){
	require('Nex/form/Display');
	//"use strict";
	var textfield = Nex.define('Nex.form.Radio','Nex.form.Display',{
		alias : 'Nex.RadioField',
		xtype : 'radiofield',
		configs : function(opt){
			var tpl = opt.tpl;
			return {
				__inputType  		: 'radio',
				containerCls 		: [opt.containerCls,'nex-form-radio'].join(' '),
				showPlaceholder 	: false,
				triggerBtnsPosition : 'outer',
				radioLabelSelection : false,
				labelvAlign 		: 'top',
				width 				: 'auto',
				/*
				item = {
					cls : '',
					text : '',
					value : '',
					readOnly : false,
					disabled : false,
					display : 'inline',
					width : auto
				}
				或
				item = '-'
				*/
				itemDefault			: {},
				items 				: []
			};	
		},
		initFormField : function(){
			var self = this;
			var opt = this.configs;	
			
			self.initBoxItems();
			
			self.callParent(arguments);	
			
			/*if( !opt.radioLabelSelection ) {	
				var input = self.getInput();
				input.disableSelection();
			}*/
		},
		initBoxItems : function(){
			var self = this;
			var opt = this.configs;	
			
			self._setRadios( opt.items );
			
			self._setRadioEvents();	
			
			if( !opt.radioLabelSelection ) {	
				var input = self.getInput();
				input.disableSelection();
			}
			
		},
		_bindEvent : function(){
			var self = this;
			var opt = this.configs;	
			
			//调用父级函数
			//Nex.form.Display.fn._bindEvent.apply( self,arguments );
			self.callParent(arguments);		
			//if( !Nex.isIE ) return self;
			var input = $("#"+opt.id+"-input");
			var _t = 0;
			input.unbind('focus blur')
				 .bind({
					'focus2' : function(e) {
						if( opt.disabled || opt.readOnly ) {
							return;	
						}
						
						if( input.hasClass('nex-form-field-focus') ) {
							return;	
						}
						
						self._focusValue = $(this).val();
						
					//	var input = $('#'+opt.id+"-input");
						
						input.addClass('nex-form-field-focus');
						$('#'+opt.id).addClass('nex-form-focus');
						
						var r = self.fireEvent('onFocus',[ this,e ]);	
						if( r === false ) return false;
					},
					'blur2' : function(e) {
						if( opt.disabled || opt.readOnly ) {
							return;	
						}
						var oldValue = self._focusValue;
						var newValue = $(this).val();
						//var input = $('#'+opt.id+"-input");
						input.removeClass('nex-form-field-focus');
						
						$('#'+opt.id).removeClass('nex-form-focus');
						
						if( oldValue !== newValue ) {
							opt.value = newValue;
							self.fireEvent('onChange',[ newValue,oldValue ]);		
						}
						
						var r = self.fireEvent('onBlur',[ this,e ]);	
						if( r === false ) return false;	
					}
				});
		},
		/*private*/
		_setRadios : function( items ){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();
			var html = [];
			var valueKey = opt.valueKey,
				textKey = opt.textKey;
			var items = self._undef( items,opt.items );
			if( !$.isArray( items ) ) {
				return self;
			}
			var len = items.length;
			for( var i=0;i<len;i++ ) {
				var _d = self._parseItemData( items[i] );
				items[i] = _d;
				var d = $.extend( {
					//id 		 : items[i]['__id'],
					cls 	 : '',
					readOnly : false,
					disabled : false,
					display  : 'inline',
					width 	 : 'auto'
				}, opt.itemDefault ,_d );
				d.id = items[i]['__id'];
				if( !self.isSplitLine( d ) ) {
					html.push('<span id="'+d.id+'" tabindex="'+(++Nex.tabIndex)+'" class="nex-form-radio-item nex-form-radio-item-d-'+d.display+' '+ (d.readOnly?'nex-form-radio-item-readonly':'') +' '+ (d.disabled?'nex-form-radio-item-disabled':'') +' '+d.cls+'" value="'+encodeURIComponent(d[valueKey])+'" style="'+( isNaN(parseInt( d.width )) ? '' : 'width:'+parseInt( d.width )+'px' )+'"><span id="'+opt.id+'-radio-icon" class="nex-form-radio-icon"></span><span class="nex-form-radio-text">'+d[textKey]+'</span></span>');				 
				} else {
					html.push( self.tpl(opt.dropdownItemSplitLineTpl,d) );
				}
			}
			
			input.html( html.join('') );
			
			return self;
		},
		resetRadios : function( items ){
			var self = this;
			var opt = this.configs;	
			var value = self.getValue();	
			if( !$.isArray( items ) ) {
				return self;	
			}
			opt.items = items;
			self._setRadios( items );
			
			self.checked( value, false );
			
			return self;
		},
		setItems : function( items ){
			return this.resetRadios.apply( this,arguments );
		},
		/*private*/
		_setRadioEvents : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();
			
			var fn = function( evt1,evt2,e,func ){
				if( opt.disabled || opt.readOnly ) {
					return;	
				}
				var $this = $(this);
				var id = $this.attr('id');
				var d = self.getItemDataById( id );
				if( d.disabled || d.readOnly ) {
					return;
				}	
				var r;
				if( $.isFunction( d[evt2] ) ) {
					r = d[evt2].call( self,d );	
					if( r === false ) return false;	
				}	
				
				r = self.fireEvent(evt1,[ d[ opt.valueKey ],d,this,e ]);	
				if( r === false ) return false;	
				
				if( $.isFunction( func ) ) {
					func.call( this,d );	
				}
				
			};
			var __t = 0;
			var __t2 = 0;
			input.undelegate('>.nex-form-radio-item')
				 .delegate('>.nex-form-radio-item',{
					"click" : function(e){
						if( opt.disabled || opt.readOnly ) {
							return;	
						}
						
						var $this = $(this);
						var id = $this.attr('id');
						var d = self.getItemDataById( id );
						var r;
						if( d.disabled || d.readOnly ) {
							return;
						}	
						if( $.isFunction( d.callBack ) ) {
							r = d.callBack.call( self,d,e );	
						}
						if( $.isFunction( d.callback ) && r !== false ) {
							r = d.callback.call( self,d,e );	
						}
						if( $.isFunction( d.handler ) && r !== false ) {
							r = d.handler.call( self,d,e );	
						}
						if( r !== false ) {
							r = fn.call( this,'onRaidoClick','click',e );
						}
						
						if( r === false ) return false;
						if( !$this.hasClass('nex-form-radio-item-checked') ) {
							self.setValue( d[ opt.valueKey ] );
							//$this.addClass('nex-form-radio-item-checked');
						}
						
					},
					"dblclick" : function(e){
						return fn.call( this,'onRaidoDblClick','dblclick',e );
					},
					"mouseenter" : function(e){
						var r = fn.call( this,'onRaidoOver','mouseover',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).addClass('nex-form-radio-item-over');
						} );
						if( r === false ) return false;
					},
					"mouseleave" : function(e){
						var r = fn.call( this,'onRaidoOut','mouseout',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).removeClass('nex-form-radio-item-over');
						} );	
						if( r === false ) return false;
					},
					"mousedown" : function(e){
						if( opt.disabled || opt.readOnly ) {
							return;	
						}
						//input.trigger('focus',[e]);
						
						var r = fn.call( this,'onRaidoMouseDown','mousedown',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).addClass('nex-form-radio-item-down');
							var $this = $(this);
							__t = setTimeout( function(){
								__t = 0;
								$(document).one('mouseup',function(){
									$this.removeClass('nex-form-radio-item-down');							 
								});					 
							},0 );
						} );	
						if( r === false ) return false;
					},
					"mouseup" : function(e){
						var r = fn.call( this,'onRaidoMouseUp','mouseup',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).removeClass('nex-form-radio-item-down');
							if( __t ) {
								clearTimeout( __t );	
								__t = 0;
							}
						} );	
						if( r === false ) return false;
					},
					"focus" : function(e){
						input.trigger('focus2',[e]);
						if( __t2 ) {
							clearTimeout( __t2 );
							__t2 = 0;
						}	
					},
					"blur"  : function(e){
						__t2 = setTimeout(function(){
							__t2 = 0;
							input.trigger('blur2',[e]);		
						},0);	
					}
				 });
		},
		getCheckedLength : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();	
			return $('>.nex-form-radio-item-checked',input).length;		
		},
		_unchecked : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();	
			$('>.nex-form-radio-item',input).removeClass('nex-form-radio-item-checked');
			return self;
		},
		_uncheckedAll : function(){
			var self = this;
			var opt = this.configs;	
			//var input = self.getInput();
			var radios = Nex.FormManager.get( opt.name, opt.group );
			$.each( radios,function(i,radio){
				radio._unchecked && radio._unchecked();
				if( radio.configs.id === opt.id ) {
					return;	
				}
				var v = radio.getValue();
				if( radio.getCheckedLength && radio.getCheckedLength() ) {
					radio.fireEvent( 'onChange',[ '',v ] );	
				}
			} );
			//$('>.nex-form-radio-item',input).removeClass('nex-form-radio-item-checked');
			return self;
		},
		unchecked : function(){
			this.setValue('');
			return this;
		},
		//设置选中
		checked : function( value,m ){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();
			var m = self._undef( m,true );
			var d = self.getItemData( value );
			d = $.isArray( d ) ? d[0] : d;
			if( d ) {
				if( m ) {
					self._uncheckedAll();
				}
				$('#'+d.__id).addClass('nex-form-radio-item-checked');
			}
		},
		/*
		*对单个radio设置disabled
		*@param value
		*param m private 默认true 设置disabled , false unsetDisabled
		*param css private 默认disabled , readonly
		*/
		setRadioDisabled : function( value,m,css ){
			var self = this;
			var opt = this.configs;	
			var m = self._undef( m,true );
			var css = self._undef( css,'disabled' );
			var d = self.getItemData( value );
			d = $.isArray( d ) ? d[0] : d;
			if( d ) {
				if( m ) {
					$('#'+d.__id).addClass('nex-form-radio-item-'+css);
					if( css === 'disabled' ) {
						d.disabled = true;	
					} else if( css === 'readonly' ) {
						d.readOnly = true;		
					} else {
						d[css] = true;	
					}
				} else {
					$('#'+d.__id).removeClass('nex-form-radio-item-'+css);
					if( css === 'disabled' ) {
						d.disabled = false;	
					} else if( css === 'readonly' ) {
						d.readOnly = false;		
					} else {
						d[css] = false;	
					}
				}
			}
			return self;		
		},
		unsetRadioDisabled : function( value ){
			return this.setRadioDisabled.apply( this,[ value,false ] );		
		},
		setRadioReadOnly : function(){
			return this.setRadioDisabled.apply( this,[ value,true,'readonly' ] );			
		},
		unsetRadioReadOnly : function(){
			return this.setRadioDisabled.apply( this,[ value,false,'readonly' ] );			
		},
		//重载
		getInputValue : function(){
			var self = this,undef;
			var opt = this.configs;	
			var input = self.getInput();
			var checked = $('>.nex-form-radio-item-checked',input);
			var value = '';
			if( checked.length  ) {
				value = decodeURIComponent( checked.attr('value') ) || '';
			}
			return value;
		},
		setInputValue : function( value ){
			var self = this;
			var opt = this.configs;
			
			self.checked( value );
			
			return self;
		},
		getInputText : function(){
			var self = this;
			var opt = this.configs;
			var value = self.getInputValue();
			var d = self.getItemData( value );
			d = $.isArray( d ) ? d[0] : d;
			if( d ) {
				return d[opt.textKey];	
			}
			return '';
		},
		setInputText : function( text ){
			var self = this;
			var opt = this.configs;
			var value = '';
			$.each( opt.items,function( i,d ){
				if( d[ opt.textKey ] === text ) {
					value = d[ opt.valueKey ];	
					return false;
				}	
			} );	
			self.setValue( value );
			return self;
		}
	});	
	return textfield;
});
define('Nex/form/Checkbox',['require','Nex/form/Radio'],function(require){
	require('Nex/form/Radio');
	//"use strict";
	var Checkbox = Nex.define('Nex.form.Checkbox','Nex.form.Radio',{
		alias : 'Nex.CheckboxField',
		xtype : 'checkboxfield',
		configs : function(opt){
			return {
				__inputType  : 'checkbox',
				containerCls : [opt.containerCls,'nex-form-checkbox'].join(' '),
				checkboxLabelSelection : false
			};	
		},
		initBoxItems : function(){
			var self = this;
			var opt = this.configs;	
			
			self._setCheckboxs( opt.items );
			
			self._setCheckboxEvents();	
			
			if( !opt.radioLabelSelection ) {	
				var input = self.getInput();
				input.disableSelection();
			}
			
		},
		/*private*/
		_setCheckboxs : function( items ){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();
			var html = [];
			var valueKey = opt.valueKey,
				textKey = opt.textKey;
			var items = self._undef( items,opt.items );
			if( !$.isArray( items ) ) {
				return self;
			}
			var len = items.length;
			for( var i=0;i<len;i++ ) {
				var _d = self._parseItemData( items[i] );
				items[i] = _d;
				var d = $.extend( {
					//id 		 : items[i]['__id'],
					cls 	 : '',
					readOnly : false,
					disabled : false,
					display  : 'inline',
					width 	 : 'auto'
				}, opt.itemDefault ,_d );
				d.id = items[i]['__id'];
				if( !self.isSplitLine( d ) ) {
					html.push('<span id="'+d.id+'" tabindex="'+(++Nex.tabIndex)+'" class="nex-form-checkbox-item nex-form-checkbox-item-d-'+d.display+' '+ (d.readOnly?'nex-form-checkbox-item-readonly':'') +' '+ (d.disabled?'nex-form-checkbox-item-disabled':'') +' '+d.cls+'" value="'+encodeURIComponent(d[valueKey])+'" style="'+( isNaN(parseInt( d.width )) ? '' : 'width:'+parseInt( d.width )+'px' )+'"><span id="'+opt.id+'-checkbox-icon" class="nex-form-checkbox-icon"></span><span class="nex-form-checkbox-text">'+d[textKey]+'</span></span>');				 
				} else {
					html.push( self.tpl(opt.dropdownItemSplitLineTpl,d) );
				}
			}
			
			input.html( html.join('') );
			
			return self;
		},
		resetCheckboxs : function( items ){
			var self = this;
			var opt = this.configs;	
			var value = self.getValue();	
			if( !$.isArray( items ) ) {
				return self;	
			}
			opt.items = items;
			self._setCheckboxs( items );
			
			self.setInputValue( value );
			
			return self;
		},
		setItems : function( items ){
			return this.resetCheckboxs.apply( this,arguments );
		},
		/*private*/
		_setCheckboxEvents : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();
			
			var fn = function( evt1,evt2,e,func ){
				if( opt.disabled || opt.readOnly ) {
					return;	
				}
				var $this = $(this);
				var id = $this.attr('id');
				var d = self.getItemDataById( id );
				if( d.disabled || d.readOnly ) {
					return;
				}	
				var r;
				if( $.isFunction( d[evt2] ) ) {
					r = d[evt2].call( self,d );	
					if( r === false ) return false;	
				}	
				
				r = self.fireEvent(evt1,[ d[ opt.valueKey ],d,this,e ]);	
				if( r === false ) return false;	
				
				if( $.isFunction( func ) ) {
					func.call( this,d );	
				}
				
			};
			var __t = 0;
			var __t2 = 0;
			input.undelegate('>.nex-form-checkbox-item')
				 .delegate('>.nex-form-checkbox-item',{
					"click" : function(e){
						if( opt.disabled || opt.readOnly ) {
							return;	
						}
						var $this = $(this);
						var id = $this.attr('id');
						var d = self.getItemDataById( id );
						var r;
						if( d.disabled || d.readOnly ) {
							return;
						}	
						if( $.isFunction( d.callBack ) ) {
							r = d.callBack.call( self,d,e );	
						}
						if( $.isFunction( d.callback ) && r !== false ) {
							r = d.callback.call( self,d,e );	
						}
						if( $.isFunction( d.handler ) && r !== false ) {
							r = d.handler.call( self,d,e );	
						}
						if( r !== false ) {
							r = fn.call( this,'onCheckboxClick','click',e );
						}
						
						if( r === false ) return false;
						if( !$this.hasClass('nex-form-checkbox-item-checked') ) {
							self.setChecked( d[ opt.valueKey ] );
							//$this.toggleClass('nex-form-checkbox-item-checked');
						} else {
							self.unsetChecked( d[ opt.valueKey ] );	
						}
						
					},
					"dblclick" : function(e){
						return fn.call( this,'onRaidoDblClick','dblclick',e );
					},
					"mouseenter" : function(e){
						var r = fn.call( this,'onRaidoOver','mouseover',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).addClass('nex-form-checkbox-item-over');
						} );
						if( r === false ) return false;
					},
					"mouseleave" : function(e){
						var r = fn.call( this,'onRaidoOut','mouseout',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).removeClass('nex-form-checkbox-item-over');
						} );	
						if( r === false ) return false;
					},
					"mousedown" : function(e){
						var r = fn.call( this,'onRaidoMouseDown','mousedown',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).addClass('nex-form-checkbox-item-down');
							var $this = $(this);
							__t = setTimeout( function(){
								__t = 0;	
								$(document).one('mouseup',function(){
									$this.removeClass('nex-form-checkbox-item-down');							 
								});					 
							},0 );
						} );	
						if( r === false ) return false;
					},
					"mouseup" : function(e){
						var r = fn.call( this,'onRaidoMouseUp','mouseup',e,function( d ){
							if( d.disabled || d.readOnly ) {
								return;
							}	
							$(this).removeClass('nex-form-checkbox-item-down');
							if( __t ) {
								clearTimeout( __t );
								__t = 0;	
							}
						} );	
						if( r === false ) return false;
					},
					"focus" : function(e){
						input.trigger('focus2',[e]);
						if( __t2 ) {
							clearTimeout( __t2 );
							__t2 = 0;
						}	
					},
					"blur"  : function(e){
						__t2 = setTimeout(function(){
							__t2 = 0;
							input.trigger('blur2',[e]);		
						},0);	
					}
				 });
		},
		getCheckedLength : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();	
			return $('>.nex-form-checkbox-item-checked',input).length;		
		},
		_uncheckedAll : function(){
			var self = this;
			var opt = this.configs;	
			var input = self.getInput();	
			$('>.nex-form-checkbox-item',input).removeClass('nex-form-checkbox-item-checked');
			$.each( opt.items , function(i,d){
				d.checked = false;	
			} );
			return self;
		},
		uncheckedAll : function(){
			this.setValue('');
			return this;
		},
		//选择所有
		checkedAll : function(  ){
			var self = this;
			var opt = this.configs;	
			var value = [];
			$.each( opt.items, function(i,d){
				value.push( d[ opt.valueKey ] );	
			} );
			self.setValue( value.join( opt.multiSplit ) );
			return self;
		},
		//反选
		reverseChecked : function(){
			var self = this;
			var opt = this.configs;	
			var selected = self.getValue();
			selected = selected.split( opt.multiSplit );
			var value = [];
			$.each( opt.items, function(i,d){
				if( $.inArray( d[opt.valueKey],selected ) === -1 ) {
					value.push( d[opt.valueKey] );
				}	
			} );
			self.setValue( value.join( opt.multiSplit ) );
			return self;
		},
		/*
		*对单个checkbox设置disabled
		*@param value
		*param m private 默认true 设置disabled , false unsetDisabled
		*param css private 默认disabled , readonly
		*/
		setCheckboxDisabled : function( value,m,css ){
			var self = this;
			var opt = this.configs;	
			var m = self._undef( m,true );
			var css = self._undef( css,'disabled' );
			var d = self.getItemData( value );
			d = $.isArray( d ) ? d[0] : d;
			if( d ) {
				if( m ) {
					$('#'+d.__id).addClass('nex-form-checkbox-item-'+css);
					if( css === 'disabled' ) {
						d.disabled = true;	
					} else if( css === 'readonly' ) {
						d.readOnly = true;		
					} else {
						d[css] = true;	
					}
				} else {
					$('#'+d.__id).removeClass('nex-form-checkbox-item-'+css);
					if( css === 'disabled' ) {
						d.disabled = false;	
					} else if( css === 'readonly' ) {
						d.readOnly = false;		
					} else {
						d[css] = false;	
					}
				}
			}
			return self;		
		},
		unsetCheckboxDisabled : function( value ){
			return this.setCheckboxDisabled.apply( this,[ value,false ] );		
		},
		setCheckboxReadOnly : function( value ){
			return this.setCheckboxDisabled.apply( this,[ value,true,'readonly' ] );			
		},
		unsetCheckboxReadOnly : function( value ){
			return this.setCheckboxDisabled.apply( this,[ value,false,'readonly' ] );			
		},
		_setChecked : function( value ){
			this.setCheckboxDisabled.apply( this,[ value,true,'checked' ] );	
		},
		setChecked : function( value ){
			var v1 = this.getInputValue();
			this._setChecked( value );	
			var v2 = this.getInputValue();
			if( v1 !== v2 ) {
				this.fireEvent('onChange',[v2,v1]);	
			}
			return this;		
		},
		_unsetChecked : function( value ){
			this.setCheckboxDisabled.apply( this,[ value,false,'checked' ] );
		},
		unsetChecked : function( value ){
			var v1 = this.getInputValue();
			this._unsetChecked( value );	
			var v2 = this.getInputValue();
			if( v1 !== v2 ) {
				this.fireEvent('onChange',[v2,v1]);	
			}
			return this;			
		},
		//重载
		getInputValue : function(){
			var self = this,undef;
			var opt = this.configs;	
			var input = self.getInput();
			var checked = $('>.nex-form-checkbox-item-checked',input);
			var value = [];
			if( checked.length  ) {
				checked.each( function(){
					value.push( decodeURIComponent( $(this).attr('value') ) );	
				} );
			}
			return value.join( opt.multiSplit );
		},
		setInputValue : function( value ){
			var self = this;
			var opt = this.configs;
			self._uncheckedAll();
			$.each( (value+'').split(opt.multiSplit),function(i,d){
				self._setChecked( d );	
			} );
			return self;
		},
		getInputText : function(){
			var self = this;
			var opt = this.configs;
			var value = self.getInputValue();
			var d = self.getItemData( value );
			d = $.isArray( d ) ? d : [d];
			var text = [];
			$.each( d,function(i,d){
				text.push( d[opt.textKey] );	
			} );
			return text.join( opt.multiSplit );
		},
		setInputText : function( text ){
			var self = this;
			var opt = this.configs;
			var value = [];
			var text = text.split( opt.multiSplit );
			$.each( opt.items,function( i,d ){
				if( $.inArray(d[ opt.textKey ],text) !== -1 ) {
					value.push( d[ opt.valueKey ] );
				}	
			} );	
			self.setValue( value.join( opt.multiSplit ) );
			return self;
		}
	});	
});
/*
*需要修改 应该继承Trigger
*/
define('Nex/form/ComboBox',['require','Nex/form/Text'],function(require){
	require('Nex/form/Text');
	//"use strict";
	var combobox = Nex.define('Nex.form.ComboBox','Nex.form.Text',{
		alias : 'Nex.ComboBox Nex.ComboBoxField',
		xtype : 'combobox comboboxfield',
		configs : function(opt){
			return {
				__inputType  : 'text',
				containerCls : [opt.containerCls,'nex-form-combobox'].join(' '),
				_inputCls    : [],
				//cleanBtn 	 : true,
				triggerToFocus : true,
				triggerCls	 : '',
				triggerIconCls	 : ''
			};	
		},
		sysEvents : function(){
			var self = this,
				opt = self.configs;	
			self.bind('onSetFormView._sys',self._setInputCls,self);	
			//Nex.form.Form.fn._sysEvents.apply( self,arguments );
			self.callParent(arguments);
			return self;	
		},
		/*重载设置系统的trigger btn*/
		_setSysTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			var input = self.getInput();	
			self.addInnerTriggerBtn({
				cls : ['nex-form-combobox-trigger',opt.triggerCls].join(' '),
				iconCls : ['nex-form-combobox-icon',opt.triggerIconCls].join(' '),
				callBack : function( d,e ){
					if( !opt.triggerToFocus ) {
						input.trigger('focus',[e]);
					}
				}	
			});
			//Nex.form.Form.fn._setSysTriggerBtns.apply( self,arguments );
			self.callParent(arguments);
			//cleanBtn	
			return self;
		},
		_setInputCls : function(){
			var self = this,
				opt = self.configs;
			var ccls = $.isArray(opt._inputCls) ? opt._inputCls : [ opt._inputCls ];
			var cls = ['nex-form-field-combobox'].concat( ccls );	
			$('#'+opt.id+'-input').addClass( cls.join(' ') );
		}
	});	
	return combobox;
});
define('Nex/form/Hidden',['require','Nex/form/Text'],function(require){
	require('Nex/form/Text');
	//"use strict";
	var hidden = Nex.define('Nex.form.Hidden','Nex.form.Text',{
		alias : 'Nex.HiddenField',
		xtype : 'hiddenfield'
	});	
	//参数重载
	hidden.setOptions( function(opt){
		return {
			__inputType  : 'hidden',
			containerCls : [opt.containerCls,'nex-form-hidden'].join(' '),
			width 		 : 'auto',
			height 		 : 'auto',
			showLabel	 : false,
			cleanBtn	 : false
		};	
	} );
	return hidden;
});
define('Nex/form/Password',['require','Nex/form/Text'],function(require){
	require('Nex/form/Text');
	//"use strict";
	var password = Nex.define('Nex.form.Password','Nex.form.Text',{
		alias : 'Nex.PasswordField',
		xtype : 'passwordfield'
	});	
	//参数重载
	password.setOptions( function(opt){
		return {
			__inputType  : 'password',//设置input的type值
			containerCls : [opt.containerCls,'nex-form-password'].join(' '),
			cleanBtn 	 : true
		};	
	} );
	return password;
});
define('Nex/form/SingleCheckbox',['require','Nex/form/Checkbox'],function(require){
	require('Nex/form/Checkbox');
	//"use strict";
	var textfield = Nex.define('Nex.form.SingleCheckbox','Nex.form.Checkbox',{
		alias : 'Nex.SingleCheckboxField',
		xtype : 'singlecheckboxfield',
		configs : function(opt){
			return {
				__inputType  : 'singlecheckbox',
				containerCls : [opt.containerCls,'nex-form-singlecheckbox'].join(' '),
				cleanBtn 	 : false,
				on 			 : '1',
				off 		 : '0',
				text  	     : '',
				//无效参数
				value 		 : ''
			};	
		},
		_checkOptions : function(){
			var opt = this.configs;
			this.callParent(arguments);
			var data = [{
				text : opt.text,
				value : opt.on	
			}];
			opt.items = data;	
			return this;
		},
		/*private*/
		_setCheckboxs : function( ){
			var self = this;
			var opt = this.configs;	
			self.callParent(arguments);
			return self;
		},
		unchecked : function(){
			var self = this;
			var opt = this.configs;	
			self.setValue( opt.off );
			return this;
		},
		checked : function( value,m ){
			var self = this;
			var opt = this.configs;	
			self.setValue( opt.on );
			return self;
		},
		getInputValue : function(){
			var self = this,undef;
			var opt = this.configs;	
			
			var value = self.callParent(arguments);//Nex.form.Checkbox.fn.getInputValue.apply( self,arguments );
			
			return value === (opt.on+'') ? opt.on : opt.off;
		}
	});	
	return textfield;
});
define('Nex/form/Textarea',['require','Nex/form/AbstractForm'],function(require){
	require('Nex/form/AbstractForm');
	//"use strict";
	var textarea = Nex.define('Nex.form.Textarea','Nex.form.AbstractForm',{
		alias : 'Nex.TextareaField',
		xtype : 'textareafield',
		sysEvents : function(){
			var self = this;
			var opt = self.configs;
			self.callParent(arguments);
			self.bind("onSetViewSize._sys",self._setTextareaHeight,self);	
		},
		_setTextareaHeight : function(){
			var self = this;
			var opt = self.configs;
			var container = opt.views['container'];
			var input = self.getInput();
			input._outerHeight( container.height() );
			return self;
		}
	});	
	//参数重载
	textarea.setOptions( function(opt){
		var tpl = opt.tpl;
		tpl.inputTpl = '<textarea <%=attrs%> id="<%=id%>-input" type="<%=type%>" name="<%=name%>" autocomplete="<%=autocomplete%>" tabindex=<%=tabIndex%> class="nex-form-field nex-form-field-<%=type%>"></textarea>';
		return {
			__inputType  : 'textarea',//当前组件中该参数没有作用
			containerCls : [opt.containerCls,'nex-form-textarea'].join(' '),
			cleanBtn 	 : true,
			height 		 : 60,
			labelvAlign  : 'top',
			tpl			 : tpl
		};	
	} );
	return textarea;
});
require([
	'Nex/Ajax',
	'Nex/ProgressBar',
	'Nex/container/Container',
	'Nex/grid/Grid',
	'Nex/window/Window',
	'Nex/tab/Tab',
	'Nex/layout/Layout',
	'Nex/button/Button',
	'Nex/accordion/Accordion',
	'Nex/date/WeekPicker',
	'Nex/pager/Pager',
	'Nex/route/Route',
	'Nex/tooltip/ToolTip',
	'Nex/tree/Tree',
	'Nex/menu/ContextMenu',
	//form
	'Nex/form/Manager',
	'Nex/form/Checkbox',
	'Nex/form/ComboBox',
	'Nex/form/Display',
	'Nex/form/Hidden',
	'Nex/form/Password',
	'Nex/form/Select',
	'Nex/form/SingleCheckbox',
	'Nex/form/Text',
	'Nex/form/Textarea',
	'Nex/form/Trigger'
]);
define("build-main", function(){});

