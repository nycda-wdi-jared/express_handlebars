var express = require('express');
var path = require('path');

var router = express.Router();

var user_data = require('./../models/user_data.js');

/*

	Create the "/" route here, and send through the user_data

	It will look like this:
	
	app.get('/whatever', (req,res) => {
		var whatever = ['hello', 'goodbye'];
		res.render('home', {data: whatever})
	})
	'home' is represented by home.handlebars here

*/

module.exports = router;