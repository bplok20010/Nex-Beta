{
    appDir: './',
    mainConfigFile: './config.js',
    dir: './dist',
	//optimize: "none",
	wrap: false,
	onBuildWrite : function(moduleName, path, contents){
		/*if( moduleName != 'Nex/Ajax' ) {
			return '';	
		}*/
		return contents;
	},
	cjsTranslate : false,
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'build-main',
			//insertRequire: ["Nex/Ajax"],
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            //include: ['Nex/Ajax']
        }

    ]
}
