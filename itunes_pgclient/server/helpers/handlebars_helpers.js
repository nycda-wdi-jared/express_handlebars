var Handlebars = require('handlebars');

//handlebars cant handle all javascript, so helpers were made to handle
//additional javascript that can't be done within a handlebars file
/*
	when looping through an array in a handlebars file, @index represents the index
	for that item in the array, so {{inc @index}} means that the @index is represented
	by the value parameter, and will translate to the client side
*/
module.exports = {
    inc: function (value) { 
    	return parseInt(value) + 1; 
    },
    lyrics: function (value, options) { 
		var spanStr = "";
		var lyricArr = value.split("\n");
		for(var i = 0; i < lyricArr.length; i++){
			spanStr += "<span>" + lyricArr[i] + "</span><br>"
		}
		return new Handlebars.SafeString(spanStr);
    }
}