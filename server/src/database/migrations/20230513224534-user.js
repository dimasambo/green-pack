'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'image', {
          type: Sequelize.STRING
        }, { transaction: t })
      ]);
    });*/
  },

  down: async (queryInterface, Sequelize) => {
    /*return queryInterface.dropTable('User');*/
  }
};