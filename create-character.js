var fs = require("fs");
var inquirer = require("inquirer");

characterConstructor = function(n,s,d,ch,cm,c,a,g) {
	if(!new.target){return;}
	this.name = n.toString();
	this.strength= parseInt(s);
	this.defense= parseFloat(d);
	this.maxHP= 200;
	this.currentHP=parseInt(ch);
	this.maxMP=20;
	this.currentMP=parseInt(cm),
	this.Class=c.toString();
	this.level=1;
	this.ability=a.toString();
	this.agility=parseFloat(g);
}

var classObject


fs.readFile("classes.txt", "utf8", function(error,data) {
	if(error) {
		return console.log(error);
	};
	classObject = JSON.parse(data);
	var classes = Object.keys(classObject);
	createCharacter(classes);
});

function createCharacter(classes) {
	inquirer.prompt([
	{
		type:"input",
		message:"What is your name?",
		name: "name"
	},
	{
		type:"list",
		message:"Choose character class:",
		choices: classes,
		name: "class"
	}
]).then(function(response){
	var classChoice = response.class;
	var yourClass = classObject[classChoice];
	yourCharacter = new characterConstructor(response.name, yourClass.strength, yourClass.defense, yourClass.hp, yourClass.mp, classChoice, yourClass.ability, yourClass.agility);
		console.log(yourCharacter);
	var monsterLevel = yourCharacter.level - 1;
	selectMonster(monsterLevel);
});
}


selectMonster = function(level) {
	fs.readFile("monsters.txt", "utf8", function(error,data) {
		if(error) {
			return console.log(error);
		};
		var monsterData = JSON.parse(data)
		var monster = monsterData[Object.keys(monsterData)[level]];
		console.log(monster);
	});
}
	

