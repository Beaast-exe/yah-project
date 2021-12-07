const User = require('../models/User');

module.exports = {

	async index (req, res) {
		const users = await User.findAll();

		return res.json(users);
	},

	async store (req, res) {
		const { username, password, email, group_id } = req.body;

		const user = await User.create({
			username,
			password,
			email,
			group_id
		});

		return res.json(user);
	}

};