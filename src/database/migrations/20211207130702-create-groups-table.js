'use strict';

module.exports = {

	up: (queryInterface, Sequelize) => {
		await queryInterface.createTable('groups', {
			group_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			group_name: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},


	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('groups');
	}

};