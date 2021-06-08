function run(input, parameters) {
	
	app = Application('System Events');  
	app.includeStandardAdditions = true;  
	input = app.theClipboard();
	
	var prefix = input.substring(0, input.lastIndexOf("/") + 1);
	var suffix = input.substring(input.indexOf("#") + 1);
	
	return prefix.concat(suffix);

}
