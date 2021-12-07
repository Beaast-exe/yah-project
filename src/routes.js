const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ ok: true });
});

router.get('/users', (req, res) => {
	res.json({
		id: 1,
		username: 'Beaast_exe',
		password: 'teste123',
		email: 'beaastcontacto@gmail.com'
	});
});

module.exports = router;