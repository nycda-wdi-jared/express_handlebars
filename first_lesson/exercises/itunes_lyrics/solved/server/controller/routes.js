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

router.get('/api/song-lyrics/:song_name', function(req,res){
	var songName = req.params.song_name.split("+").join(" ");
	models.Song.findAll({}).then((songs) => {
		var selectedSong = {};
		for(var i = 0; i < songs.length; i++){
			if(songs[i].title.toLowerCase() === songName){
				selectedSong.title = songs[i].title;
				selectedSong.artist = songs[i].artist;
				selectedSong.lyrics = songs[i].lyrics.split("\n");
			}
		}
		res.render('lyrics', {data: selectedSong});
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