/*
Nex.Container组件说明：
组件名称       : Nex.Container 可通过 new Nex.Container() 或者 Nex.Create('NexContainer') 来创建
组件别名xtype  : container  可通过Nex.Create('container')
加载名称       : Nex.Container 组件存放目录结构 {{nex目录}}/Container.js
*/
define(function(require){	
	/*require('Nex/effects/Effects');
	require('Nex/container/AbstractContainer');*/
	
	require('Nex');
	
	var container = Nex.define('Nex.container.Container',{
		extend : 'Nex.Component',
		alias  : 'Nex.Container',
		xtype  : 'container',
		configs : function( opt ){
			return {
				prefix : 'nexcontainer-',
				autoResize : true,
				//tag : 'div',
				autoScroll : false,
				_checkScrollBar : false,//检查是否出现滚动条 如果出现会触发onViewSizeChange
				_hasBodyView : false,//是否有view部分 html 没有这部分 应该关闭 提高效率 关闭后不会触发onViewSizeChange
				_initSetSize : false,//容器刚创建时会设置容器宽度
				tabIndex : -1,
				showFn : null,//自定义显示函数
				hideFn : null,//自定义关闭函数
				overCls : '',
				width : 'auto',// 设为auto后 大小将不会设置 宽度 高度都是auto 或者css控制的,设为0 相当于100% 
				height : 'auto',
				originalSize : false,//如果为true 则 原样输出width height eg width:30% ，则 样式就是30%
				checkAutoSize : false,//开启后 创建时会检测最大最小 宽高
				border : false,//boolean 如果是String则动态设置样式
				borderCls : 'nex-container-border',
				borderStyle : '',
				containerCls : [opt.containerCls,'nex-container'].join(' '),
				autoScrollCls : 'nex-container-auto-scroll',//
				autoWidthCls : '',//nex-container-auto-width
				autoHeightCls : '',//nex-container-auto-height
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
			
			//检查最大最小宽度
			self._checkAutoSize();
			
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
			if( bd && container !== bd ) {
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
			if( bd && container !== bd ) {
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
			//这里应该触发一个事件 可以修改 width height 
			
			var width = renderTo.width();
			var height = renderTo.height();
			
		
			var w = 0,h = 0;

			if( (opt.width+'').indexOf("%") != -1 ) {
				w = parseFloat(opt.width)*width/100;
			} else {
				w = opt.width;	
			}
			if( (opt.height+'').indexOf("%") != -1 ) {
				h = parseFloat(opt.height)*height/100;
			} else {
				h = opt.height;	
			}
			//如果opt.width 设置的是 auto时。
			//var bd = self.getBody();
			if( w === 'auto' || isNaN(parseFloat(w)) ) {
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
				h = container._outerHeight();	
			}
			//因为浏览器会对像素进行 四舍五入 处理 所以应该用parseInt对像素取整 
			return {
				width : w,
				height: h
			};
		},
		checkSize : function(width,height){
			var self = this;
			var opt = self.configs;	
			
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
					width : width,
					height: height
				};
		},
		setContainerSize : function(w,h){
			var self = this,
				undef,
				opt = self.configs,	
				container = self.el;

			opt.width = w === undef || w === null ? opt.width : w;	
			opt.height = h === undef || h === null ? opt.height : h;
			
			var size = self.getResizeWH();

			var wh = self.checkSize( size.width, size.height );
			
			self.fireEvent('onSetContainerSize', [wh, size]);
			
			var w = wh.width, h = wh.height;
			
			if( opt.width === 'auto' && size.width === wh.width ) {
				w = opt.width;	
			}	
			if( opt.height === 'auto' && size.height === wh.height ) {
				h = opt.height;	
			}
			
			w = opt.originalSize ? opt.width : w;
			h = opt.originalSize ? opt.height : h;
			
			opt.realWidth = w;
			opt.realHeight= h;	
			
			
			container.removeClass(opt.autoHeightCls+' '+opt.autoWidthCls);
			
			if( w !== 'auto') {
				container._outerWidth(w);	
			} else {
				container.css('width','');
				container.addClass(opt.autoWidthCls);
			}
			if( h !== 'auto') {
				container._outerHeight(h);	
			} else {
				container.css('height','');
				container.addClass(opt.autoHeightCls);
			}
			
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
					},1000/60);
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
					delete events[e+'.html'];
				} );	
			}
			container.unbind('.html');
			container.bind(events);
			self.fireEvent("onSetContainerEvent",[container,opt]);
			return true;
		},
		__containerCreate : false,
		//容器创建时就应该立刻设置宽度
		_initSetContainerSize : function(){
			var self = this;
			var opt = self.configs;	
			
			self.__containerCreate = true;
			
			self.setContainerSize();
			
			self.__containerCreate = false;
		},
		_checkAutoSize : function(){
			var self = this;
			var opt = self.configs;	
			
			if( !opt.checkAutoSize ) {
				return false;	
			}
			
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
		hidden : false, 
		isVisible : function(){
			return !this.hidden;	
		},
		isHidden : function(){
			return this.hidden;	
		},
		onBeforeShow : function(){},
		doShow : function(cb){
			this.el.show();
			cb();		
		},
		//cb 显示后的回调
		show : function(cb){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			if( self.isVisible() ) {//,arguments
				return self;	
			}
			
			if( self.fireEvent('onBeforeShow',[ opt ]) === false ) {//,arguments
				return self;	
			}
			
			self._checkToRender();
			
			self.onBeforeShow(opt);
			self.fireEvent('onStartShow',[ opt ]);
			
			self.hidden = false;
			
			var complete = function(){
				self.setAcceptResize( true );
				if( opt.autoResize ) {
					self.resetSize();
				}
				self.fireEvent('onShow',[ opt ]);	
				Nex.isFunction(cb) && cb.call(self);
			};
			
			var showFn = Nex.isFunction( opt.showFn ) ? opt.showFn : self.doShow;

			showFn.call( self, complete, container );		
			
			return self;	
		},
		onBeforeHide : function(){},
		doHide : function(cb){
			this.el.hide();
			cb();	
		},
		hide : function( cb ){
			var self = this;
			var opt = this.configs;
			var container = self.el;
			
			if( !self.rendered ) return self;
			
			if( self.rendered && self.isHidden() ) {//,arguments
				return self;	
			}
			
			if( self.fireEvent('onBeforeHide',[ opt ]) === false ) {//,arguments
				return self;	
			}
			
			self.onBeforeHide(opt);
			
			self.fireEvent('onStartHide',[ opt ]);
			
			self.hidden = true;
			
			self.setAcceptResize( false );
			
			var complete = function(){
				self.fireEvent('onHide',[ opt ]);	
				Nex.isFunction(cb) && cb.call(self);	
			};
			
			var hideFn = Nex.isFunction( opt.hideFn ) ? opt.hideFn : self.doHide;
			
			hideFn.call( self, complete, container );	
				
			return self;		
		}
	});
	
	return container;
});