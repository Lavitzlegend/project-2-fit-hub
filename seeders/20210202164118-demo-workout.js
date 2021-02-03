'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Workouts', [{
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Workouts', null, {});
  }
};
