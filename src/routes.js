const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

routes.get('/', (req, res) => {
	res.json({ ok: true });
});

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// Addresses
routes.get('/addresses', AddressController.indexAll);
routes.get('/users/:user_id/addresses', AddressController.indexUser);
routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;