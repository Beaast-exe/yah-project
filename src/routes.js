const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
	res.json({ ok: true });
});

routes.get('/users', (req, res) => {
	res.json({
		id: 1,
		username: 'Beaast_exe',
		password: 'teste123',
		email: 'beaastcontacto@gmail.com'
	});
});

module.exports = routes;