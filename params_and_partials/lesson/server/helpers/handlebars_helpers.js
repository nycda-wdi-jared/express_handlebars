var Handlebars = require('handlebars');

module.exports = {
    inc: function (value) { 
    	return parseInt(value) + 1; 
    },
    apiSplit: function (value) {
    	return value.split(" ").join("+").toLowerCase()
    }
}