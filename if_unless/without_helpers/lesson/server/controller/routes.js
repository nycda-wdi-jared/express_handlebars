var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Stat.findAll().then((stats) => {
		var pointsConditional = [];
		for(var i = 0; i < stats.length; i++){
			if(stats[i].ppg < 100){
				pointsConditional.push(
					{
						greater_than: false, 
						team: stats[i].team, 
						ppg: stats[i].ppg
					}
				)
			} else {
				pointsConditional.push(
					{
						greater_than: true, 
						team: stats[i].team, 
						ppg: stats[i].ppg
					}
				)
			}
		}
		res.render('home', {stats: pointsConditional});
	});
});

module.exports = router;