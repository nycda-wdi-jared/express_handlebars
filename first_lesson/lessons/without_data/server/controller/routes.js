var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req,res){

	res.render('home', {data: 'hello', word: 'up', arr: ['joel', 'jarvis']});
});

router.get('/whatever', function(req,res){
	res.render('whatever')
})

router.get('*', function(req,res){
	res.send("Page Not Found")
})

module.exports = router;