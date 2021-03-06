const express = require('express'); //from documentation: express is function
const app = express(); //app is an object
const methodOverride = require("method-override");
const routes = require("./routes");
require('dotenv').config();

// Middleware
app.use((req, res, next) => {
    console.log("I ran");
    next();
});

app.use(express.urlencoded( {extended: true }));

app.use(methodOverride("_method"));
// app.use(express.static(__dirname + '/public'));


app.use("/workouts", routes.workouts);
app.use("/users", routes.users);

app.get('/', (req, res) => {
    res.render('users/index.ejs');
})

app.listen(process.env.PORT, () => {
    // console.log("I am listening");
});