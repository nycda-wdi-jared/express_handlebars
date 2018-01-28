var path = require('path');

var models = require('../models');

module.exports = (app, passport) => {

	app.get('/', function(req,res){
		if(req.user){
			res.render('main_page', {message: 'signed-in', user_id: req.user.id});
		} else {
			res.render('main_page');
		}
	});

	app.get('/sign-up', function(req,res){
		res.render('sign_up');
	});

	app.get('/sign-in', function(req,res){
		res.render('sign_in');
	});

	app.get('/api/sign-up', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	app.get('/api/sign-in', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	app.post('/api/sign-up', function(req,res,next){
		passport.authenticate('local-signup', function(err, user, info){
			if (err) {
				return next(err);
			} else {
				res.json({user: user, info: info})
			}
		})(req, res, next);
	});

	app.post('/api/sign-in', function(req,res,next){
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });        
			});
	  	})(req, res, next);
	});

	app.get('/profile/:id', (req,res) => {
		if(req.user){
			if(req.user.id == req.params.id){
				models.User.findOne({where: {id: req.params.id}}).then((user) => {
					models.Profile.findOne({where:{user_id: req.params.id}}).then((profile) => {
						var profileObj = {};
						profileObj.id = profile.id;
						profileObj.fav_veggie = profile.fav_veggie;
						profileObj.fav_fruit = profile.fav_fruit;
						/*
							Query All of the posts for the user
							If there are posts, then add a posts key to the data object being sent to the client
							If there aren't posts, then dont add a posts key to the data object being sent to the client
							This is going straight to handlebars, so do res.render
							This is going to the user_home.handlebars
						*/
					})
				});
			} else {
				res.redirect('/');
			}
		} else {
			res.redirect('/')
		}
	});

	app.delete('/api/logout-user', function (req, res) {
	  req.session.destroy(function(out){
	    res.json({message: 'user signed out'})
	  });
	});

	//create profiles through postman
	app.post('/api/create-profile', function(req, res){
		models.Profile.create({
			fav_veggie: req.body.fav_veggie,
			fav_fruit: req.body.fav_fruit,
			userID: req.body.userID
		}).then((profile) => {
			res.json(profile)
		}).catch((err) => {
			res.json(err)
		})
	});

	/*
		This is going to be a post route to add posts to the Post model
		Look in the main_page.handlebars for the create post form
		No using postman here
	*/


	/*
		Create a route here that sends all of the posts to the client
		This is going to be appended using jquery, so use res.json

		This data will eventually be appended to the main_page.handlebars

		Bonus: Along with the posts, send over the users name who wrote the post as well
	*/

}