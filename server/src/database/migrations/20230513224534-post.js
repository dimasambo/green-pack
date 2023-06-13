'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('posts', 'images', {
          type: Sequelize.ARRAY(Sequelize.STRING)
        }, { transaction: t })
      ]);
    });*/
  },

  down: async (queryInterface, Sequelize) => {
    /*return queryInterface.dropTable('Post');*/
  }
};