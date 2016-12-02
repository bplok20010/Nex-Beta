/*
Tips:
	尽量不要写内联样式,会倒置渲染变得非常卡，特别是IE超级卡！！
------
1.dateFormat。。货币类型。。 
2.分页。。。
3.单选/多选。。。
4.
*/
define(function(require){
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