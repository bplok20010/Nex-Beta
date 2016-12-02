define(function(require){
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
		},
		inputTpl : function(d){
			return ['<textarea ',d.attrs,' id="',d.id,'_input" type="',d.type,'" name="',d.name,'" autocomplete="',d.autocomplete,'" tabindex=',d.tabIndex,' value="" class="nex-form-field nex-form-field-',d.type,'"></textarea>'].join('');	
		}
	});	
	//参数重载
	textarea.setOptions( function(opt){
		return {
			__inputType  : 'textarea',//当前组件中该参数没有作用
			containerCls : [opt.containerCls,'nex-form-textarea'].join(' '),
			cleanBtn 	 : false,
			triggerBtnsTakeSpace : false,
			height 		 : 60,
			labelvAlign  : 'top'//无效
		};	
	} );
	return textarea;
});