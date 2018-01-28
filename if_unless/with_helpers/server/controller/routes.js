var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Stat.findAll().then((stats) => {
		res.render('home', {stats: stats});
	});
});

module.exports = router;