var models = require('../models');
var express = require('express');
var path = require('path');
var Handlebars = require('handlebars');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Car.findAll({}).then((cars) => {
		res.render('home', {cars: cars});
	});
});

router.get('/cars/:make', function(req,res){
	var makeSplit = req.params.make.split("+");
	for(var i = 0; i < makeSplit.length; i++){
		makeSplit[i] = makeSplit[i].charAt(0).toUpperCase() + makeSplit[i].substring(1, makeSplit[i].length);
	}
	models.Car.findAll({where: {make: makeSplit.join(" ")}}).then((car) => {
		res.render('car', {data: car})
	})
})

router.post('/create-car', function(req,res){
	//expecting an object
	models.Car.create(req.body)
});

router.post('/create-cars', function(req,res){
	//expecting an array of objects
	models.Car.bulkCreate(req.body)
});

module.exports = router;