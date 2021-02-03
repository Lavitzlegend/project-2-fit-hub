'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Workouts', [
       {
        name: "Amanda",
        link: "https://www.youtube.com/embed/_9PT5Du-cjo",
        description: "9-7-5 reps. Muscle-ups and Snatch for time. RX weight: M-135, W-95",
      },
      {
        name: "Angie",
        link: "https://www.youtube.com/embed/pFpJKq2J0ow",
        description: "100 pull-ups, 100 push-ups, 100 sit-ups, 100 air squats for time",
      },
      {
        name: "Annie",
        link: "https://www.youtube.com/embed/CWaiZxgrBGY",
        description: "50-40-30-20-10 reps of double-unders and sit-ups for time",
      },
      {
        name: "Barbara",
        link: "https://www.youtube.com/embed/beQn0K3ihT0",
        description: "5 rounds of 20 pull-ups, 30 push-ups, 40 sit-ups, 50 air squats, 3-minutes rest between rounds. For time.",
      },
      {
        name: "Candy",
        link: "https://www.youtube.com/embed/KzXKBYBFnqQ",
        description: "5 rounds for time of 20 pull-ups, 40 push-ups, 60 air squats",
      },
      {
        name: "Chelsea",
        link: "https://www.youtube.com/embed/srGdnPJaw9c",
        description: "EMOM for 30 minutes of 5 pull-ups, 10 push-ups, 15 air squats.",
      },
      {
        name: "Cindy",
        link: "https://www.youtube.com/embed/MJCCCJdtYJ8",
        description: "AMRAP 20 minutes of 5 pull-ups, 10 push-ups, 15 air squats",
      },
      {
        name: "Diane",
        link: "https://www.youtube.com/embed/MJCCCJdtYJ8",
        description: "21-15-9 for time of deadlifts and handstand push-ups. RX weight: M-225, W-155",
      },
      {
        name: "Elizabeth",
        link: "https://www.youtube.com/embed/rbJ3-bCjdZQ",
        description: "21-15-9 for time of squat cleans and ring dips. RX weight: M-135, W-95",
      },
      {
        name: "Eva",
        link: "https://www.youtube.com/embed/seqmps8gaTQ",
        description: "5 rounds for time of 800-meter run, 30 kettlebell swings, 30 pull-ups. RX weight: M-70 W-53",
      },
      {
        name: "Fran",
        link: "https://www.youtube.com/embed/RGPm3QiA3sI",
        description: "21-15-9 for time of thrusters and pull-ups. RX weight: M-95, W-75",
      },
      {
        name: "Grace",
        link: "https://www.youtube.com/embed/IWHhThVqMhU",
        description: "30 clean-and-jerks for time. RX weight: M-135, W-95",
      },
      {
        name: "Gwen",
        link: "https://www.youtube.com/embed/GrTdasUVpSw",
        description: "15-12-9 reps for load of clean-and-jerks (unbroken). Rest as needed between sets.",
      },
      {
        name: "Helen",
        link: "https://www.youtube.com/embed/-Y4_0QtOTv4",
        description: "3 rounds for time of 400m run, 21 kettlebell swings, 12 pull-ups. RX weight: M-50, W-35",
      },
      {
        name: "Hope",
        link: "https://www.youtube.com/embed/jYtAtTDwsnM",
        description: "3 rounds for total reps in 17 minutes of 1 minute each burpees, power snatch (M-75, W-55), box jumps (M-24in, W-20in), thrusters (M-75, W-55), chest-to-bar pull-ups, rest.",
      },
      {
        name: "Isabel",
        link: "https://www.youtube.com/embed/7iUxoTlt5aw",
        description: "30 snatches for time. RX weight: M-135, W-95",
      },
      {
        name: "Jackie",
        link: "https://www.youtube.com/embed/6dTv2joU78M",
        description: "For time of 1,000m row, 50 thrusters, 30 pull-ups. RX weight: M-45, W-35",
      },
      {
        name: "Karen",
        link: "https://www.youtube.com/embed/0RMov-IaJzQ",
        description: "150 wall balls for time. RX weight: M-20, W-14",
      },
      {
        name: "Kelly",
        link: "https://www.youtube.com/embed/162DkCykwMY",
        description: "5 rounds for time of 400m run, 30 box jumps (M-24in, W-20in), 30 wall balls (M-20, W-14).",
      },
      {
        name: "Linda",
        link: "https://www.youtube.com/embedA7vcXz-KF58",
        description: "10-9-8-7-6-5-4-3-2-1 reps for time of deadlift, bench press, squat clean. RX weight: 1.5xBW, 1xBW, 0.75xBW",
      },
      {
        name: "Lynne",
        link: "https://www.youtube.com/embed/r0hz3cAN_OQ",
        description: "5 rounds for max reps (unbroken) of bench press and pull-ups. RX weight: BW",
      },
      {
        name: "Maggie",
        link: "https://www.youtube.com/embed/p-sL2dimrAE",
        description: "5 rounds for time of 20 handstand push-ups, 40 pull-ups, 60 alternating pistol squats",
      },
      {
        name: "Marguerita",
        link: "https://www.youtube.com/embed/MEM5o4vWGn4",
        description: "50 rounds for time of 1 burpee, 1 push-up, 1 jumping-jack, 1 sit-up, 1 handstand",
      },
      {
        name: "Mary",
        link: "https://www.youtube.com/embed/PLWJ1CjXjqg",
        description: "AMRAP 20 minutes of 5 handstand push-ups, 10 alternating pistol squats, 15 pull-ups",
      },
      {
        name: "Megan",
        link: "https://www.youtube.com/embed/OkIoups0hgE",
        description: "21-15-9 reps for time of burpees, KB swings, double-unders. RX weight: M-53, W-35",
      },
      {
        name: "Nancy",
        link: "https://www.youtube.com/embed/jUJ73MWhxsY",
        description: "5 rounds for time of 400m run and 15 overhead squats. RX weight: M-95, W-65",
      },
      {
        name: "Nicole",
        link: "https://www.youtube.com/embed/A1LyzhhjzaM",
        description: "AMRAP 20 minutes of 400m run and max unbroken pullups. Score is completed pull-ups",
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
