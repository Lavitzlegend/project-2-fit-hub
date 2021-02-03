'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Workouts', [{
        name: 'Yoga in 20 Minutes',
        // link: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        link: "https://www.youtube.com/embed/v7AYKMP6rOE",
        description: "Beginnners Yoga with Adrianne"
      },
      {
        name: 'Sullivan Canyon Moutain Biking',
        // link: "https://www.mtbproject.com/photo/7007130",
        link: "https://www.youtube.com/embed/piOyH4HWSbs",
        description: "Intermediate Single Track near Santa Monica, CA "
      },
      {
        name: 'Portuguese Bend Reserve, Palos Verdes, CA',
        // link: "https://www.mtbproject.com/photo/7028505",
        link: "https://www.youtube.com/embed/YpAp0L5fKSs",
        description: "Intermidiate fire road and singletrack with ocean views"
      },
      {
        name: 'Cow Trail, Whittier, CA',
        link: "https://www.youtube.com/embed/IAg2P74izz8",
        description:"Intermediate Local Spot, tree-covered singletrack; darting, fast, smooth, freeway-like stretch of pure speed",
      }
      
    
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Workouts', null, {});
  }
};
