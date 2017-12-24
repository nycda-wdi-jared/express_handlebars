var models = require('../models');
var express = require('express');
var path = require('path');
var Handlebars = require('handlebars');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Animal.findAll({}).then((animals) => {
		var classes = [...new Set(animals.map((animal) => {
			return animal.class.toLowerCase()
		}))]
		res.render('home', {animal_classes: classes});
	});
});

router.get('/animal/class/:class', function(req,res){
	var animal_class = req.params.class.charAt(0).toUpperCase() + req.params.class.substring(1, req.params.class.length)
	models.Animal.findAll({where: {class: animal_class}}).then((animals) => {
		res.render('animal_class', {animals: animals, class: animal_class})
	});
});

router.get('/api/animal/class/:class', function(req,res){
	var animal_class = req.params.class.charAt(0).toUpperCase() + req.params.class.substring(1, req.params.class.length)
	models.Animal.findAll({where: {class: animal_class}}).then((animals) => {
		res.json(animals)
	});
});

router.get('/animal/:animal', function(req,res){
	var animalSplit = req.params.animal.split("+");
	for(var i = 0; i < animalSplit.length; i++){
		animalSplit[i] = animalSplit[i].charAt(0).toUpperCase() + animalSplit[i].substring(1, animalSplit[i].length);
	}
	models.Animal.findOne({where: {name: animalSplit.join(" ")}}).then((animal) => {
		res.render('animal_description', {animal: animal})
	});
});

module.exports = router;