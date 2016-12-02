{
    //appDir: './src',
	baseUrl : './',
   // dir: '../builds',
  //mainConfigFile: './config.js',
	paths : {
		Nex : './src'	
	},
	packages : [
		{
			 name	 : 'Nex',
			 location: './src',
			 main	 : 'Nex'	
		}
	],	
	optimize: "none",
	onBuildWrite : function(moduleName, path, contents){
		//console.log( moduleName, path, fs )
		return contents;
	},
	//cjsTranslate : false,
	
	name: "build-main",
    //include: ["foo/bar/bee"],
    //insertRequire: ['foo/bar/bop'],
    out: "./nex-all.js",
	
    modules2: [
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
