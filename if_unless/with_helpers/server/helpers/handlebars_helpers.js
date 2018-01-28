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
    myIf: function (stat){
    	var statString = "";
    	for(var i = 0; i < stat.length; i++){
	    	if(stat[i].ppg < 100){
	    		statString += "<tr><td>" + i + "</td><td>" + stat[i].team + "</td><td>" + stat[i].ppg + "</td></tr>"
	    	}
    	}
    	return new Handlebars.SafeString(statString)
    },
    gt: function(a,b){
        var next = arguments[arguments.length-1];
        return (a > b) ? next.fn(this) : next.inverse(this);
    },
    lt: function(a,b){
        var next = arguments[arguments.length-1];
        return (a < b) ? next.fn(this) : next.inverse(this);
    }
}