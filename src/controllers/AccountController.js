const Account = require('../models/Account');
const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {

	async indexAll (req, res) {
		const accounts = await Account.findAll();

		return res.json(accounts);
	},

	async indexUser (req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User was not found.' });
		}

		const accounts = await Account.findAll({
			where: {
				user_id
			}
		});

		if (!accounts) {
			return res.status(400).json({ error: 'User has no accounts.' });
		}

		return res.json(accounts);
	},

	async store (req, res) {
		const { user_id } = req.params;
		const { account_international_id, account_type, balance } = req.body;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User was not found.' });
		}
		
		const account = await Account.create({
			account_international_id,
			account_type,
			client_id: user_id,
			client_name: user.name,
			client_gender: user.gender,
			client_birth: user.birth,
			balance
		});

		return res.json(account);
	}

};