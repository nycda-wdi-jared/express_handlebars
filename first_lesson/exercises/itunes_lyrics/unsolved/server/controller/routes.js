var models = require('../models');
var express = require('express');
var path = require('path');

models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	models.Song.findAll({}).then((songs) => {
		res.render('home', {songs: songs});
	});
});

/*
	1. /api/song-lyrics/:song_name route here
	2. Make sure to look at the lyrics.handlebars file, that is where this data is going to
	3. The send to the client is going to look like this: res.render('lyrics', data: <your data object>)
	4. Remember to split the lyrics string by ("\n"), and send over that array in the object that is being sent to the client

	It will look something like this:
	
	app.get('/whatever', (req,res) => {
		var whatever = ['hello', 'goodbye'];
		res.render('home', {data: whatever})
	})
	'home' is represented by home.handlebars here
*/

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