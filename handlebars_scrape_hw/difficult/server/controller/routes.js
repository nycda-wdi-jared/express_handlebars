var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	res.render('home');
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
		models.Stat.bulkCreate(results)
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

router.get('/api/scrape-three', function(req,res){
	request('http://www.nfl.com/stats/categorystats?seasonType=REG&offensiveStatisticCategory=GAME_STATS&d-447263-n=1&d-447263-o=2&d-447263-p=1&d-447263-s=TOTAL_POINTS_GAME_AVG&tabSeq=2&season=2017&role=TM&Submit=Go&archive=false&conference=null&defensiveStatisticCategory=null&qualified=false', function(err, response, html){
		if (err) {
			throw err
		}
		var $ = cheerio.load(html);
		var results = [];
		$('#result').each(function(){
			var tr = $(this).find("tr");
			tr.each(function(){
				var teamName = $(this).find("td").eq(1).text().trim();
				var pointsPerGame = $(this).find("td").eq(3).text().trim();
				if(teamName !== ""){
					results.push({team: teamName, ppg: pointsPerGame});
				}
			});
		});
		for(var i = 0; i < results.length; i++){
			models.Stat.update({ppg: parseFloat(results[i].ppg)}, {where: {team: results[i].team}});
		}
	})
});

router.get('/api/stats', (req,res) => {
	models.Stat.findAll().then((stats) => {
		var teamStats = [];
		stats.forEach((stat) => {
			teamStats.push(stat);
		});
		res.json(teamStats);
	});
});

router.post('/api/message', (req,res) => {
	models.Post.create(req.body).then((post) => {
		res.json(post);
	})
});

router.get('/api/comments', (req, res) => {
	models.Post.findAll().then((posts) => {
		var postsArr = [];
		posts.forEach((post) => {
			postsArr.push(post);
		});
		res.json(postsArr);
	});
});

module.exports = router;