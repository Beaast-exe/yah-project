'use strict';

module.exports = {

	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('accounts', {
			account_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			account_international_id: {
				type: Sequelize.BIGINT(23),
				allowNull: false
			},
			account_type: {
				type: Sequelize.STRING,
				allowNull: false
			},
			client_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			client_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			client_gender: {
				type: Sequelize.STRING,
				allowNull: false
			},
			client_birth: {
				type: Sequelize.STRING,
				allowNull: false
			},
			client_address: {
				type: Sequelize.STRING,
				allowNull: false
			},
			balance: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},


	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('accounts');
	}

};