var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

var mc = require('./model-controller.js');

var router = express.Router();

router.get('/', function(req,res){
	models.Post.findAll({where: {user_id: 1}}).then((userPosts) => {
		if(userPosts == null){
			res.render('home');
		} else {
			res.render('home', {posts: userPosts});
		}
	});
});

router.post('/create-user', (req, res) => {
	mc.createUser(
		req.body.name,
		req.body.username,
		req.body.password,
		(user) => {
			res.json(user)
		}
	)
});

router.post('/create-post', (req, res) => {
	mc.createPost(
		req.body.message,
		req.body.user_id,
		(post) => {
			res.json(post)
		}
	)
});

module.exports = router;