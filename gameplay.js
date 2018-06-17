var fs = require("fs");
var create = require("./create-character.js");
var array = ["hello"]

//1. Create Character
var classObject

fs.readFile("classes.txt", "utf8", function(error,data) {
	if(error) {
		return console.log(error);
	};
	classObject = JSON.parse(data);
	var classes = Object.keys(classObject);
	create.createCharacter(classes);
});

