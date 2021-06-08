function run(input, parameters) {
	
	app = Application('System Events');  
	app.includeStandardAdditions = true;  
	input = app.theClipboard();

	input = input.replace(/(\r\n|\n|\r)/gm, " ");

	return input;
}
