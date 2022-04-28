const { Model, DataTypes } = require('sequelize');

class Account extends Model {

	static init (sequelize) {
		super.init({
			account_id: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			account_international_id: DataTypes.INTEGER,
			account_type: DataTypes.STRING,
			client_id: DataTypes.INTEGER,
			client_name: DataTypes.STRING,
			client_gender: DataTypes.STRING,
			client_birth: DataTypes.STRING,
			balance: DataTypes.INTEGER
		}, {
			sequelize
		});
	}

	static associate (models) {
		this.belongsTo(
			models.User, 
			{
				foreignKey: 'client_id',
				as: 'user'
			},
			{
				foreignKey: 'client_name',
				as: 'name'
			},
			{
				foreignKey: 'client_gender',
				as: 'gender'
			},
			{
				foreignKey: 'client_birth',
				as: 'birth'
			}
		);
	}

}

module.exports = Account;