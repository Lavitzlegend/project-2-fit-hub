const express = require('express'); //from documentation: express is function
const app = express(); //app is an object
const methodOverride = require("method-override");
const routes = require("./routes");

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

app.listen(process.env.PORT, () => {
    // console.log("I am listening");
});