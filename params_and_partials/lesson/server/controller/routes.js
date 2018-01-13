var models = require('../models');
var express = require('express');
var path = require('path');
var Handlebars = require('handlebars');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Animal.findAll({}).then((animals) => {
		//console.log(animals)
		/*
			After querying the animals table,
			first - animals.map is creating an array of only the animals classes
			second - using ...new Set will reduce duplicates in an array
		*/
		var mappedClasses = animals.map((animal) => {
			return animal.class.toLowerCase()
		});
		//console.log(mappedClasses)
		var classes = [...new Set(mappedClasses)]
		//console.log(classes)

		//in the home.handlebars, sending through data, the classes array
		//with a key of animal_classes in the data object being sent over
		//look for animal_classes in the home.handlebars file
		res.render('home', {animal_classes: classes});
	});
});

/*
	Look for this route being created in the home.handlebars for each of the pictures on the page:
	<a href="/animal/class/{{this}}">
	When this route is hit, depending on which picture is clicked on, the :class is represented
	by the animal class (arachnida, amphibia, reptilia), i.e. /animal/class/reptilia

	So when this route is hit, the database is being queried based on the animals class
	and that information is being sent over to the animal_class.handlebars file
*/
router.get('/animal/class/:class', function(req,res){
	//console.log(req.params.class)
	var animal_class = req.params.class.charAt(0).toUpperCase() + req.params.class.substring(1, req.params.class.length)
	//console.log(animal_class)
	models.Animal.findAll({where: {class: animal_class}}).then((animals) => {
		//console.log(animals)
		res.render('animal_class', {animals: animals, class: animal_class})
	});
});

/*
	Look for this route being created in the animal_class.js file
	Basically, when the page is loaded, this route is hit
	Sending this over as json because i need to manipulate this information in jquery
	before appending it to the dom. handlebars is not able to handle the functionality
	I want to do with this code
*/
router.get('/api/animal/class/:class', function(req,res){
	//console.log(req.params.class)
	var animal_class = req.params.class.charAt(0).toUpperCase() + req.params.class.substring(1, req.params.class.length);
	//console.log(animal_class)
	models.Animal.findAll({where: {class: animal_class}}).then((animals) => {
		//console.log(animals)
		res.json(animals)
	});
});

/*
	Look for this route being created in the animal_class.handlebars file
	<a href="/animal/{{apiSplit this.name}}">

	When this route is hit, the :animals param is represented by the animal as part of the route
	i.e. /animal/komodo+dragon

	The database is being queried, and then this is being directed to the
	animal_description.handlebars file
	Handlebars can handle the functionality I want for this route
	If I want additional stuff to be done on the page, i can just create another
	route, send over json, and manipulate it through jQuery
*/
router.get('/animal/:animal', function(req,res){
	//console.log(req.params.animal)
	var animalSplit = req.params.animal.split("+");
	//console.log(animalSplit)
	for(var i = 0; i < animalSplit.length; i++){
		//console.log("Before Manipulation")
		//console.log(animalSplit[i])
		animalSplit[i] = animalSplit[i].charAt(0).toUpperCase() + animalSplit[i].substring(1, animalSplit[i].length);
		//console.log("After Manipulation")
		//console.log(animalSplit[i])
	}
	models.Animal.findOne({where: {name: animalSplit.join(" ")}}).then((animal) => {
		//console.log(animal)
		res.render('animal_description', {animal: animal})
	});
});

module.exports = router;