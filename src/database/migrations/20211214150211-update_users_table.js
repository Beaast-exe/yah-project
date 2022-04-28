'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('users', 'username', 'name');
	queryInterface.removeColumn('users', 'group_id');
	queryInterface.addColumn('users', 'gender', {
		type: Sequelize.INTEGER,
		allowNull: false,
		after: 'name'
	});
	queryInterface.addColumn('users', 'birth', {
		type: Sequelize.STRING,
		allowNull: false,
		after: 'gender'
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