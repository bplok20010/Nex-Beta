{
    appDir: './src',
	baseUrl : './',
    dir: '../builds',
  //mainConfigFile: './config.js',
	paths : {
		Nex : './'	
	},
	packages : [
		{
			 name	 : 'Nex',
			 location: './',
			 main	 : 'Nex'	
		}
	],	
	optimize: "none",
	onBuildWrite : function(moduleName, path, contents){
		return contents;
	},
	//cjsTranslate : false,
	/*
	name: "build-main",
    //include: ["foo/bar/bee"],
    //insertRequire: ['foo/bar/bop'],
    out: function(text, sourceMapText){
		console.log(sourceMapText);	
	},//"builds/Nex.js",
	*/
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../build-main',
			//insertRequire: ["Nex/Ajax"],
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            //include: ['Nex/Ajax']
        }

    ]
}
