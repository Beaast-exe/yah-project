const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {

	async indexAll (req, res) {
		const addresses = await Address.findAll();

		return res.json(addresses);
	},

	async indexUser (req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User was not found.' });
		}

		const addresses = await Address.findAll({
			where: {
				user_id
			}
		});

		if (!addresses) {
			return res.status(400).json({ error: 'User has no addresses.' });
		}

		return res.json(addresses);
	},

	async store (req, res) {
		const { user_id } = req.params;
		const { zipcode, street, city, number } = req.body;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User was not found.' });
		}

		const address = await Address.create({
			zipcode,
			street,
			city,
			number,
			user_id
		});

		return res.json(address);
	}

};