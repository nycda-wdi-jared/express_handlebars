var path = require('path');

var models = require('../models');

/*
	using module.exports instead of express.Router()
	Look for where this is being used in the server.js file
	Look at the parameters here, they are placeholders which are used when called in the server.js file
*/
module.exports = (app, passport) => {

	/*
		adjusted the home page based on if there is a user logged in
	*/
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

	//route meant to check and see if there is a signed in user, look
	//for this in the jQuery
	app.get('/api/sign-up', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	//route meant to check and see if there is a signed in user, look
	//for this in the jQuery
	app.get('/api/sign-in', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	//look for the local-signup strategy in the passport.js file
	//this is how passport works. Look at the flow of things
	app.post('/api/sign-up', function(req,res,next){
		passport.authenticate('local-signup', function(err, user, info){
			if (err) {
				return next(err);
			} else {
				res.json({user: user, info: info})
			}
		})(req, res, next);
	});

	//look for the local-signin strategy in the passport.js file
	//this is how passport works. Look at the flow of things
	app.post('/api/sign-in', function(req,res,next){
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	//if user is undefined (password incorrect or user doesnt exist), then send this info to the client
		    	return res.json({ success : false, message : 'authentication failed', info: info });
		    }
		    //adds the user to the req as req.user if username and password match
		    //also adds the session to the session table in the database
		    //sends a 200 successful request (google 'http 200') to the client
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });        
			});
	  	})(req, res, next);
	});

	/*
		This route is now being handled at the top with the '/' route
	*/
	// app.get('/api/signed-in', (req,res) => {
	// 	if(req.user){
	// 		res.json({message: 'signed-in', user_id: req.user.id});
	// 	}
	// })

	app.get('/profile/:id', (req,res) => {
		//if the login went through, it creates this req.user object able to be used throughout
		//all of your express routes. This is where you check to see if a user is logged in or not
		if(req.user){
			//making sure the user id equals to id as part of the route
			//doing this because i dont want users visiting other users pages
			if(req.user.id == req.params.id){
				models.User.findOne({where: {id: req.params.id}}).then((user) => {
					models.Profile.findOne({where:{user_id: req.params.id}}).then((profile) => {
						var profileObj = {};
						profileObj.id = profile.id;
						profileObj.fav_veggie = profile.fav_veggie;
						profileObj.fav_fruit = profile.fav_fruit;

						var data = {
							user: user,
							profile: profileObj
						}
						res.render('user_home', {obj: data});
					})
				});
			} else {
				res.redirect('/');
			}
		} else {
			res.redirect('/')
		}
	});

	//will remove the sessions from the req object and the database
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

}