# Project 2 - FitHub

[Homepage Link](https://fit-hub-app.herokuapp.com/)

Profile Page:
![Screen Shot 2021-02-04 at 2 58 05 PM](https://media.git.generalassemb.ly/user/33322/files/82a9fb80-66f9-11eb-9a09-d706bad7dfd0)

## Preview

This is our take on a Workout tracking and sharing app.

## Technology Used

- Vanilla javascript, css, and html.
- Sequelize, pg, express, ejs, method-override, dotenv
- embedded Youtube videos
- I linked a font from fonts.googleapis.
- Heroku hosted server and database

## Theory

We wanted to create an app where any user can sign up, login, and track their fitness journey. We utilized two separate tables named Workouts and Users that have a many to many relationship. They work through a JOIN table called UserWorkouts that will display on the user's profile page all the workouts they have added to the JOIN table.

A workout can be added to the workouts index page where you would enter the name, description, and an embed link to a YouTube video of the activity/exercise. Once a new workout is added it will show in the dropdown selector on the user's profile page.

Combining the above tables gives the user a way to keep a history of all the workouts they've done as well as challenging themselves by trying out workouts other users have created. This way you can track your own progress as well as participate in a larger fitness community.
   
## How The Join Table Works

On the users profile they have a drop down with all the workouts added to the Workouts table. Once they select one from the drop down and press the Add Selected Workout button it runs the addWorkout function inside the users.js controller which does a foundUser.addWorkout(foundWorkout). This method is available because of the belongsToMany associations detailed in the workout.js and user.js models.
   
## Main Features

- Landing page links to login or create and account take you to the respective EJS files
- Using text and password inputs with req.body to pass them into their respective tables
- Profile page utilizes a few for-loops to display all the workouts in the Workout table as well as all the workouts tied to the current userId in the JOIN table
- BelongsToMany associations for both User and Workout classes
- Migration and seeder files to ensure Tables are correct in the database and that there are some workouts in the the table to choose initially
- YouTube embed links show as embedded videos in the workout show page
- package.json file has the required node module dependencies
- MVC architecture utilized for correct express and sequelize functionality
- Foreign and other keys to link the userId and workoutId primary keys
- Unique constraint added to JOIN table so the user cannot add the same workout twice

## User Stories

1. I want to see the homepage when I go to the URL
2. I should be able to login to my profile page as an existing user or signup as a new user
3. I want to see a list of all possible workouts to add to the “My Workouts” section of my profile
4. I want to have a link to any workouts added to My Workouts to see more info about that workout and/or edit the workout
5. There should be a link to an index page of all workouts with a link to create a new workout


## What's left?

- The user can add an infinite number of unique workouts so the My Workouts section will continue down forever
- It would be better if the My Workouts were sorted by recently added instead of by workoutId