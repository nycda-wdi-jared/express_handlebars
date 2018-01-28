var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

var mc = require('./model-controller.js');

var router = express.Router();

router.get('/', function(req,res){
	/*
		Do a find all posts for a user query here
		you are going to custom input the user_id, no params here

		Write a conditional where:
			- if the users has posts, then render home.handlebars plus the posts
			- if the user does not have posts, then just render home.handlebars, no extra data
			- Look at the example that i posted on github from the without_data lesson that we worked on in class
			  It will not be in your code, as I pushed it while we were in class.
			  https://github.com/nycda-wdi-jared/express_handlebars/blob/master/first_lesson/lessons/without_data/server/controller/routes.js
	*/
});

//create 2 users
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

//create posts for only one of the users
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