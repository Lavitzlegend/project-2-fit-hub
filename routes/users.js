const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

//Index route
router.get("/", ctrl.users.homePage);

//New route
router.get("/signup", ctrl.users.signUp);
router.post("/signup", ctrl.users.postTrainer);

//Show profile route
router.get("/profile/:index", ctrl.users.show);

//Login route
router.get("/login", ctrl.users.login);
router.post("/login", ctrl.users.loginTrainer);

//Edit route
router.put("/profile/:index", ctrl.users.putTrainer);

//Delete route
router.delete("/profile/:index", ctrl.users.deleteTrainer);

module.exports = router;