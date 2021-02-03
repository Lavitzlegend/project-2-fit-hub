'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Workouts', [{
        name: 'Yoga For Beginners in 20 Minutes',
        link: "https://www.youtube.com/embed?v=v7AYKMP6rOE",
        description: "Yoga with Adrianne"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Workouts', null, {});
  }
};
