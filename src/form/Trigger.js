define(function(require){
	require('Nex/form/Text');
	
	var trigger = Nex.define('Nex.form.Trigger','Nex.form.Text',{
		alias : 'Nex.TriggerField',
		xtype : 'triggerfield',
		configs : function(opt){
			return {
				__inputType  : 'text',
				containerCls : [opt.containerCls,'nex-form-trigger'].join(' '),
				triggerBtnsTakeSpace : true,
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
			return self;	
		},
		/*重载设置系统的trigger btn*/
		_setSysTriggerBtns : function(){
			var self = this,
				opt = self.configs;
			self.callParent(arguments);
			self._setTriggerBtn();
			return self;
		},
		_setTriggerBtn : function(){
			var self = this,
				opt = self.configs;
			//var input = self.getInput();	
			self.addTriggerBtn({
				//name : 'trigger',
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
			self.getInput().addClass( cls.join(' ') );
		}
	});	
	
	return trigger;
});