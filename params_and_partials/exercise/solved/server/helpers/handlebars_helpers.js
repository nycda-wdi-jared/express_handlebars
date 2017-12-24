var Handlebars = require('handlebars');

module.exports = {
    apiSplit: function (value) {
    	return value.split(" ").join("+").toLowerCase()
    }
}