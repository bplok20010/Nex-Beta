/*
*type : B KB MB GB TB PB EB ZB YB
*/
function size2bytes( num,type ){
	var k = 1024; // or 1000
	var types = {
			'b'	 : function(n){
				return n;	
			},
			'kb' : function(n){
					return this.b(n) * k;
			},
			'mb' : function(n){
				return this.kb( n ) * k;	
			},
			'gb' : function(n){
				return this.mb( n ) * k;	
			},
			'tb' : function(n){
				return this.gb( n ) * k;	
			},
			'pb' : function(n){
				return this.tb( n ) * k;	
			},
			'eb' : function(n){
				return this.pb( n ) * k;	
			},
			'zb' : function(n){
				return this.zb( n ) * k;	
			},
			'yb' : function(n){
				return this.yb( n ) * k;	
			}
		};
	var type = type.toLowerCase();
	return types[ type ]( Number(num) );	
}
function bytes2size(bytes) {
	bytes = Number( bytes );
    if (bytes === 0) return '0 B';
    var k = 1024, // or 1000
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
/*
*倒计时
*/
function countTime(endTime){
	// nobo zere.nobo@gmail.com
	var diffTime = {};//:day,:hour,:minute,:second
	var day = 24 * 60 * 60 *1000;
	var hour = 60 * 60 *1000;
	var minutes = 60 *1000;
	var seconds = 1 *1000;
	var endTime = new Date( endTime );//毫秒
	
	var diff = 0;
	
	function get_days(){
		return parseInt(diff/day);
	}
	function get_hours(){
		var _diff = diff%day;
		return parseInt(_diff/hour);
	}
	function get_minutes(){
		var _diff = diff%hour;
		return parseInt(_diff/minutes);
	}
	function get_seconds(){
		var _diff = diff%minutes;
		return parseInt(_diff/seconds);
	}
	var count = function(){
		var da = new Date();
		diff = endTime - da.getTime();
		if(diff<=0) { // 過期
			diff = da.getTime() - endTime;
			diffTime.end = 1;
		}
		diffTime.day = get_days();
		diffTime.hour = get_hours();
		diffTime.minute = get_minutes();
		diffTime.second = get_seconds();
		return diffTime;
	}
	return count();
}
//显示到指定元素 适合 left right
//@param item 需要显示的元素
//@param wrap 滚动wrap来显示item
//@param bd   在bd中显示出来
function setElVisible1( item,wrap,bd,pos ){
	
	var args = arguments;
	var _lp = args[ args.length-1 ];
	var wp = wrap || item.parent();
	var bd = bd || wp.parent();
	var f = item;
	var pos = !isNaN(parseInt( _lp )) ? parseInt( _lp ) : wp.css('marginLeft');
	var sLeft = 0;
	
	var _sLeft = pos;
	_sLeft = isNaN( parseFloat( _sLeft ) ) ? 0 : parseFloat( _sLeft );
	
	var offset = bd.offset();
	//校正可视区域
	offset.left += parseInt(bd.css('borderLeftWidth')) + parseInt(bd.css('paddingLeft'));
	var w = bd.width();
	
	var fo = f.offset();
	var fw = f.outerWidth();
	
	var outerWidth = 0;
	if( offset.left > fo.left ) {
		outerWidth = offset.left - fo.left;
	} else if( (offset.left+w) < (fo.left+fw) ) {
		outerWidth = (offset.left+w) - (fo.left+fw);
	}
	
	sLeft = _sLeft + outerWidth;
	wp.css('marginLeft',sLeft);
	return sLeft;
}
//显示到指定元素 适合 top bottom
function setElVisible2( item,wrap,bd,pos ){
	
	var args = arguments;
	var _lp = args[ args.length-1 ];
	var wp = wrap || item.parent();
	var bd = bd || wp.parent();
	var f = item;
	var pos = !isNaN(parseInt( _lp )) ? parseInt( _lp ) : wp.css('marginTop');
	var sTop = 0;
	var _sTop = pos;
	_sTop = isNaN( parseFloat( _sTop ) ) ? 0 : parseFloat( _sTop );
	
	var offset = bd.offset();
	//校正可视区域
	offset.top += parseInt(bd.css('borderTopWidth')) + parseInt(bd.css('paddingTop'));
	var h = bd.height();
	
	var fo = f.offset();
	var fh = f.outerHeight();

	var outerHeight = 0;
	if( offset.top > fo.top ) {
		outerHeight = fo.top - offset.top;
	} else if( (offset.top+h) < (fo.top+fh) ) {
		outerHeight = (fo.top+fh) - (offset.top+h);
	}
	
	sTop = _sTop - outerHeight;
	
	wp.css('marginTop',sTop);
	
	return sTop;
}
//jquery mobile
function parseUrl( url ){
	var urlParseRE = /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;	
	// If we're passed an object, we'll assume that it is
	// a parsed url object and just return it back to the caller.
	if ( $.type( url ) === "object" ) {
		return url;
	}

	var matches = urlParseRE.exec( url || "" ) || [];

		// Create an object that allows the caller to access the sub-matches
		// by name. Note that IE returns an empty string instead of undefined,
		// like all other browsers do, so we normalize everything so its consistent
		// no matter what browser we're running on.
		return {
			href:         matches[  0 ] || "",
			hrefNoHash:   matches[  1 ] || "",
			hrefNoSearch: matches[  2 ] || "",
			domain:       matches[  3 ] || "",
			protocol:     matches[  4 ] || "",
			doubleSlash:  matches[  5 ] || "",
			authority:    matches[  6 ] || "",
			username:     matches[  8 ] || "",
			password:     matches[  9 ] || "",
			host:         matches[ 10 ] || "",
			hostname:     matches[ 11 ] || "",
			port:         matches[ 12 ] || "",
			pathname:     matches[ 13 ] || "",
			directory:    matches[ 14 ] || "",
			filename:     matches[ 15 ] || "",
			search:       matches[ 16 ] || "",
			hash:         matches[ 17 ] || ""
		};
}
/*
var style = document.createElement('style'); 
$(style).appendTo($('body'));
addCssRules(style,'.style-sheet','border:1px solid red;width:100px; height:200px;')('.style-sheet','background:#ccc')('.test2','border:1px solid red');
style, cssSelector, cssText, update(默认true,false新增一个样式规则)
*/
function addCssRules(style, cssSelector, cssText, update){
	function fcamelCase( all, letter ) {
		return ( letter + "" ).toUpperCase();
	}
	function camelCase( string ){
		var rmsPrefix = /^-ms-/,
			rdashAlpha = /-([\da-z])/gi;
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	function $caller(cssSelector, cssText, update){
		var undef;
		var update = update === undef ? true : update;
		return update ? updateRules.apply(this,[cssSelector, cssText]) : addRules.apply(this,[cssSelector, cssText]);
	};
	function addRules( cssSelector, cssText ){
		var styleSheet = style.styleSheet?style.styleSheet:style.sheet;
		var rules = styleSheet.cssRules || styleSheet.rules;
		if( styleSheet.addRule ) {
			styleSheet.addRule(cssSelector,cssText);	
		} else {
			styleSheet.insertRule(cssSelector+"{"+cssText+"}", rules.length);	
		}
		return $caller;
	}
	function updateRules( cssSelector, cssText ){
		var styleSheet = style.styleSheet?style.styleSheet:style.sheet;
		var rules = styleSheet.cssRules || styleSheet.rules;
		var rule = null;
		for( var i=0, len=rules.length; i<len; i++ ) {
			//只修改最后一个样式
			if( rules[i].selectorText.toLowerCase() === cssSelector.toLowerCase() ) {
				rule = rules[i];
			}
		}
		if( !rule ) {
			return addRules( cssSelector, cssText );
		} else {
			var css = ( cssText + "" ).split(';');
			for( var k=0, len2 = css.length; k < len2; k++ ) {
				var d = css[k].split(':');
				rule.style[camelCase(d[0])] = d[1];	
			}	
		}
		return $caller;
	}
	return $caller(cssSelector, cssText, update);
} 
//route parse
//var x = pathRegExp( '/a/:date/:id/view/:vid',{} );
//var p = switchRouteMatcher( '/a/2014-08-09/5/view/45',x );
 function pathRegExp(path, opts) {
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
}
function switchRouteMatcher(on, route) {
  var keys = route.keys,
	  params = {};

  if (!route.regexp) return null;

  var m = route.regexp.exec(on);
  if (!m) return null;

  for (var i = 1, len = m.length; i < len; ++i) {
	var key = keys[i - 1];

	var val = 'string' == typeof m[i]
		  ? decodeURIComponent(m[i])
		  : m[i];

	if (key && val) {
	  params[key.name] = val;
	}
  }
  return params;
}
/**
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assining to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */
var urlParsingNode = document.createElement("a");
var originUrl = urlResolve(window.location.href, true);
function urlResolve(url) {
  var href = url;
  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // $$urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: urlParsingNode.port,
    pathname: urlParsingNode.pathname && urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
  };
}


/**
 * Parse a request URL and determine whether this is a same-origin request as the application document.
 *
 * @param {string|object} requestUrl The url of the request as a string that will be resolved
 * or a parsed URL object.
 * @returns {boolean} Whether the request is for the same origin as the application document.
 */
function urlIsSameOrigin(requestUrl) {
  var parsed = (typeof requestUrl == 'string') ? urlResolve(requestUrl) : requestUrl;
  return (parsed.protocol === originUrl.protocol &&
          parsed.host === originUrl.host);
}
