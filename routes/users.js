const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

//Index route
router.get("/", ctrl.users.homePage);

//New route
router.get("/signup", ctrl.users.renderSignup);
router.post("/signup", ctrl.users.signup);

//Show profile route
router.get("/profile/:index", ctrl.users.renderProfile);

//Login route
router.get("/login", ctrl.users.renderLogin);
router.post("/login", ctrl.users.login);

//Edit route
router.put("/profile/:index", ctrl.users.addWorkout);
// router.put("/profile/edit/:index", ctrl.users.editUser);

//Delete route
// router.delete("/profile/edit/:index", ctrl.users.deleteUser);

module.exports = router;