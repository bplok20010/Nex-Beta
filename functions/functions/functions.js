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