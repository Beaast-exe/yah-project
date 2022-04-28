'use strict';

module.exports = {

	up: async (queryInterface, Sequelize) => {
		return queryInterface.changeColumn('users', 'gender', {
			type: Sequelize.STRING,
			allowNull: false
		});
	},


	down: async (queryInterface, Sequelize) => {

		/**
		 *
		 * Add reverting commands here.
		 *
		 *
		 *
		 * Example:
		 *
		 * await queryInterface.dropTable('users');
		 *
		 */

	}
};