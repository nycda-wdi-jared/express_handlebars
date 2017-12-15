var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var path = require('path');

var routes = require('./controller/routes.js');

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: 'client/public/views/layouts',
	helpers: {
        inc: function (value) { return parseInt(value) + 1; },
        lyrics: function (value, options) { 
			var spanStr = "";
			var lyricArr = value.split("\n");
			for(var i = 0; i < lyricArr.length; i++){
				spanStr += "<span>" + lyricArr[i] + "</span><br>"
			}
			return new Handlebars.SafeString(spanStr);
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname,'../client/public/views'));

app.use('/', routes);
app.use(express.static('./client'));

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});