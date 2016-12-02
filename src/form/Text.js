define(function(require){
	require('Nex/form/AbstractForm');

	var textfield = Nex.define('Nex.form.Text','Nex.form.AbstractForm',{
		alias : 'Nex.TextField',
		xtype : 'textfield',
		inputTpl : function(d){
			return ['<input ',d.attrs,' id="',d.id,'_input" type="',d.type,'" name="',d.name,'" autocomplete="',d.autocomplete,'" tabindex=',d.tabIndex,' value="" class="nex-form-field nex-form-field-',d.type,'" />'].join('');	
		}
	});	
	//参数重载
	textfield.setOptions( function(opt){
		return {
			__inputType  : 'text',
			containerCls : [opt.containerCls,'nex-form-text'].join(' '),
			triggerBtnsTakeSpace : true,
			cleanBtn 	 : false
		};	
	} );
	
	return textfield;
});