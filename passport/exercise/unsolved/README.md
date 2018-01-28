# Handlebars Passport Sequelize Exercise

* If you do not have a profile set up for user(s), then use postman to set that up
* Create a posts model with fields for a message and the user_id
* Look for the comments in the routes.js in the server directory for directions
* Look for the comments in the user_home.handlebars, & main_page.handlebars
* Look for the comments in the main_page.js for the jQuery

# Handlebars Passport Sequelize Lesson

* Passport App using jQuery, node.js, express.js, postgres, and sequelize
* In the server.js, look how the passport.js and routes.js is being imported and app.used
* Make sure to create a user and a profile for that user.
	* You can use the ui for the user
	* Use postman to create a profile

* In this lesson, you will be learning:
	* how to get passport to work with handlebars
	* how to use if/else statements in handlebars
	* how to send through data to a handlebars file

# Postgres Sequelize Passport Boilerplate + Heroku Push

<h2>Heroku</h2>

* Run ```heroku create```
* Run ```heroku addons:create heroku-postgresql:hobby-dev```
* Run ```heroku config``` to see the environment variable just added
* Resource: https://devcenter.heroku.com/articles/heroku-postgresql
* This line in the config.json is how the database connections in production/heroku:

```"production": {```
    ```"use_env_variable": "DATABASE_URL"```
```}```

<h2>Other</h2>

* You can connect to this database through the credentials they give you
* You can see a breakdown of the credentials if you go to your app's page on heroku and find the database option
![postgres image one](https://github.com/nycda-wdi-jared/postgres_sequelize/blob/master/pg_sequelize_boilerplate/github_images/first.png?raw=true "Postgres Example")
![postgres image two](https://github.com/nycda-wdi-jared/postgres_sequelize/blob/master/pg_sequelize_boilerplate/github_images/second.png?raw=true "Postgres Example")
* You can use those credentials to view your database in postico