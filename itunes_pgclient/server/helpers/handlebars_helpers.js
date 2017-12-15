module.exports = {
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