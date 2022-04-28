const { Model, DataTypes } = require('sequelize');

class User extends Model {

	static init (sequelize) {
		super.init({
			name: DataTypes.STRING,
			gender: DataTypes.STRING,
			birth: DataTypes.STRING,
			email: DataTypes.STRING,
			// Address: DataTypes.STRING,
			password: DataTypes.STRING
		}, {
			sequelize
		});
	}

}

module.exports = User;