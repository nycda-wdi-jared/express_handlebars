var pg = require('pg');
var express = require('express');
var path = require('path');

var dbUrl;
var localConnect = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'itunes',
	host: 'localhost',
	port: 5432	
}

//ternary operator. Another way of writing an 'if' statement
//if process.env.DATABASE_URL is not null, then dbUrl = process.env.DATABASE_URL
//if process.env.DATABASE_URL is undefined, then dbUrl = localConnect
dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : localConnect;

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

var router = express.Router();

router.get('/', function(req,res){
	var query = `SELECT * FROM songs`;
	pgClient.query(query, (error,queryRes) => {
		if(error){
			res.render('home', error);
		} else {
			res.render('home', {songs: queryRes.rows});
		}
	});
});

router.get('/api/song-lyrics/:song_name', function(req,res){
	var songName = req.params.song_name.split("+").join(" ");
	pgClient.query('SELECT * FROM songs', function(songErr, songRes){
		var selectedSong = [];
		for(var i = 0; i < songRes.rows.length; i++){
			if(songRes.rows[i].song_name.toLowerCase() === songName){
				selectedSong.push(songRes.rows[i]);
			}
		}
		res.render('lyrics', {data: selectedSong[0]});
	});
});

router.get('/update', function(req,res){
	res.render('update');
});

router.post('/api/create-record', function(req,res){
	var insertQuery = 'INSERT INTO songs (song_artist, song_name, price, lyrics) VALUES ($1,$2,$3,$4)';
	pgClient.query(insertQuery, [req.body.artist, req.body.title, req.body.price, req.body.lyrics]);
});

router.put('/api/update-record', function(req,res){
	var field, value, artist, song;
	switch(req.body.field){
		case 'Song':
			field = 'song_name';
			value = req.body.value;
			break;
		case 'Artist':
			field = 'song_artist';
			value = req.body.value;
			break;
		case 'Price':
			field = 'price';
			value = parseInt(req.body.value);
			break;
		case 'Lyrics':
			field = 'lyrics';
			value = req.body.value;
			break;
	}
	artist = req.body.song.split(" - ")[0];
	song = req.body.song.split(" - ")[1];

	pgClient.query("UPDATE songs SET " + field + "=$1 WHERE song_name='" + song + "' AND song_artist='" + artist + "'", [value]);
});

router.delete('/api/delete-record/:id', function(req,res){
	pgClient.query("DELETE FROM songs WHERE id=" + req.params.id);
});

module.exports = router;