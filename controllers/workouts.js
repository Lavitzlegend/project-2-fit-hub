const Workout = require('../models').Workout;
const User = require('../models').User;


const index = (req, res) => {
    Workout.findAll({
        order: [
            ['name', 'DESC']
            // ['id', 'ASC']
        ]
    })//select * from "Workouts";
    .then(allWorkouts => {//temp local variable that has all the workouts
        res.render('index.ejs', {
            workouts: allWorkouts//fruits is the key and casey is its value
        })
    })
}

const show = (req, res) => {
    Workout.findByPk(req.params.index, {
        // include: [
        //     {
        //         model: User,
        //         attributes: ['name']
        //     },
        // ],
        attributes: ['name', 'link', 'description']
    })
    .then(foundWorkout => {
        console.log("FOUND: "+foundWorkout.link)
        res.render('show.ejs', {
            workout: foundWorkout
        })
    })
}

const newWorkout = (req, res) => {
    res.render('new.ejs');
}

const create = (req, res) => {

    // req.body.userId = req.user.id;
    
    Workout.create(req.body)
    .then(newWorkout => {
        //default is GET in redirect
        res.redirect('/workouts');
    })
}

module.exports = {
    index,
    show,
    newWorkout,
    create
}