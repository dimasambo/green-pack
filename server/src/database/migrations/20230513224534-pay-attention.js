'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('pay-attention', 'important', {
          type: Sequelize.BOOLEAN, defaultValue: false
        }, { transaction: t })
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PayAttention');
  }
};