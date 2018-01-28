var models = require("../models");
models.sequelize.sync();

module.exports = {
	createUser: (name, username, password, cb) => {
		models.User.create({
			name: name,
			username: username,
			password: password
		}).then((user) => {
			cb(user)
		})
	},
	createPost: (message, user_id, cb) => {
		models.Post.create({
			message: message,
			user_id: user_id
		}).then((post) => {
			cb(post)
		});
	}
}