const Workout = require('../models').Workout;
const User = require('../models').User;

const homePage = (req, res) => {
    res.render("users/index.ejs");
};

const renderSignup = (req, res) => {
    res.render("users/signup.ejs");
};

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${(newUser.id)}`)
    })
    // console.log(trainers);
    
};

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
        {
            model: Workouts
        }
    ]
    })
    
    .then(userProfile => {
        Workout.findAll()
        .then(allWorkouts => {
            res.render('users/profile.ejs', {
                user: userProfile,
                workout: allWorkouts,
            });
        })
    });
};

const renderLogin = (req, res) => {
    res.render("users/login.ejs");
};

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    });
};

const editUser = (req, res) => {
    User.update(req.body, {
        where: {
            index: req.params.index,
        },
        returning: true,
    })
    .then(updatedTrainer => {
        Pokemon.findByPk(req.body.pokemon)
        .then(foundPokemon => {
            Trainer.findByPk(req.params.id)
            .then(foundTrainer => {
                foundTrainer.addPokemon(foundPokemon);
                res.redirect(`/users/profile/${req.params.id}`);
            })
        })
    });
};

const deleteUser = (req, res) => {
    Trainer.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/users');
    });
};

module.exports = {
    homePage,
    renderProfile,
    signup,
    renderSignup,
    login,
    renderLogin,
    editUser,
    deleteUser,
}