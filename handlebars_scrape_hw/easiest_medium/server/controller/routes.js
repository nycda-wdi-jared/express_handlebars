var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

var models = require('../models');
models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Stat.findAll().then((stats) => {
		var ppgStats = [];
		for(var i = 0; i < stats.length; i++){
			if(stats[i].ppg < 25){
				ppgStats.push(
					{
						greaterThan25: false,
						team: stats[i].team,
						ppg: stats[i].ppg,
						abbr: stats[i].abbr,
						color: stats[i].color
					}
				)
			} else {
				ppgStats.push(
					{
						greaterThan25: true,
						team: stats[i].team,
						ppg: stats[i].ppg,
						abbr: stats[i].abbr,
						color: stats[i].color
					}
				)
			}
		}
		res.render('home', {stats: ppgStats});
	});
});

router.get("/api/scrape", function(req,res){
	request('http://www.nfl.com/stats/categorystats?archive=false&conference=null&role=TM&offensiveStatisticCategory=TOTAL_YARDS&defensiveStatisticCategory=null&season=2017&seasonType=REG&tabSeq=2&qualified=false&Submit=Go', function(err, response, html){
		if (err) {
			throw err
		}
		var $ = cheerio.load(html);
		var results = [];
		$('#result').each(function(){
			var tr = $(this).find("tr");
			tr.each(function(){
				var teamName = $(this).find("td").eq(1).text().trim();
				var yardsPerGame = $(this).find("td").eq(6).text().trim();
				if(teamName !== ""){
					results.push({team: teamName, ypg: yardsPerGame});
				}
			});
		});
		res.json(results)
	});
});

router.get("/api/scrape-two", function(req,res){
	request('http://www.nfl.com/stats/player?seasonId=2017&seasonType=REG&Submit=Go', function(err, response, html){
		if (err) {
			throw err
		}
		var $ = cheerio.load(html);
		var results = [];
		$('.players').each(function(){
			var ul = $(this).find("ul");
			ul.each(function(){
				var player = $(this).find("a").first().text().trim();
				if(player){
					results.push(player);
				}
			});
		});
		res.json(results)
	});
});

module.exports = router;