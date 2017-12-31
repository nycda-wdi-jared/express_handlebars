var models = require('../models');
var express = require('express');
var path = require('path');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Song.findAll({}).then((songs) => {
		//console.log(songs)
		//sending the songs callback to the home.handlebars file
		res.render('home', {songs: songs});
	});
});

//this is being used in the jQuery/Ajax
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