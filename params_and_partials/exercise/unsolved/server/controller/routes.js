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

/*
	Create your '/cars/:make' route here
*/

router.post('/create-car', function(req,res){
	//expecting an object
	models.Car.create(req.body)
});

router.post('/create-cars', function(req,res){
	//expecting an array of objects
	models.Car.bulkCreate(req.body)
});

module.exports = router;