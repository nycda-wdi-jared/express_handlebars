var models = require('../models');
var express = require('express');
var path = require('path');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Song.findAll({}).then((songs) => {
		/*
			The line below is stating:
			when this route is hit, render the 'home'.handlebars file
			& send through the songs callback from the sequelize query
			through an object with a key of songs
		*/
		res.render('home', {songs: songs});
	});
});

router.post('/create-song', (req,res) => {
	models.Song.create({
		title: req.body.title,
		artist: req.body.artist,
		lyrics: req.body.lyrics
	}).then((song) => {
		res.json(song)
	})
})

module.exports = router;