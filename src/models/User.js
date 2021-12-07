const { Model, DataTypes } = require('sequelize');

class User extends Model {

	static init (sequelize) {
		super.init({
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			group_id: DataTypes.INTEGER
		}, {
			sequelize
		});
	}

}

module.exports = User;