'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Workouts', [{
        name: 'Yoga in 20 Minutes',
        link: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        description: "Beginnners Yoga with Adrianne"
      },
      {
        name: 'Sullivan Canyon Moutain Biking',
        link: "https://www.mtbproject.com/photo/7007130",
        description: "Intermediate Single Track near Santa Monica, CA "
      },
      {
        name: 'Portuguese Bend Reserve, Palos Verdes, CA',
        link: "https://www.mtbproject.com/photo/7028505",
        description: "Intermidiate fire road and singletrack with ocean views"
      },
      {
        name: 'Cow Trail, Whittier, CA',
        link:"https://www.mtbproject.com/photo/7034947",
        description:"Intermediate Local Spot, tree-covered singletrack; darting, fast, smooth, freeway-like stretch of pure speed",
      }
      
    
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Workouts', null, {});
  }
};
