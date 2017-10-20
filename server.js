//  Back End Quiz

//  Node is a (open source server framework) platform used for building applications
//  (mainly websites). An advantage of using node is that it allows developers to use 
//  the same language (Javascript) on both the front-end and back-end. 

//  Express is a node framework that allows developers to use middleware and 
//  write handlers for requests along different routes in the API (Application Program Interface)
//  Middleware - software that allows different parts of the application to 
//  communicate (in this sceanrio for the requests and responses)
//  Handlers - a function that is executed when a route is matched
//  Routes - the endpoints (determines how client requests are dealt with)

//  Body parser is a middleware that parses Json libraries/requests. 
//  It allows info/data from routes to be used on req.body.

//  C - Create (Post Request)
//  R - Read (Get Request)
//  U - Update (Put Request)
//  D - Delete (Delete)
//  CRUD is an acronym for requests used at the endpoints of routes. It's how the client
//  "talks" to the server.       sever.method(path, handler)

//  MongoDB is a database (where data gets stored). The advantage of using it is that the stored data is non-relational (No SQL).
//  Document Data model

//  Mongoose provides a way to use a Schema to model and  manipulate data in the MongoDB

//  A Schema is created (object) by the developer to force others to 
//  adhere to use data in a certain format
//  It's also possible to have a Schema within a Schema

//  noSQL - a database that is not SQL (not tabular style)
//  SQL - a structed database with set relationships

//  In terms of MongoDB:
//  Document is      
//  Collection is   
//  Database is 
//  Documents are stored in collections and collections make up the database
//  Not sure if this is analogous to a sheet of paper in a folder in a filing cabinet  

//  There are so many ah-ha moments, but a major one is seeing the pattern where a
//  current lab builds off of the previous (similar tasks, but with 
//  some new topic(s) introduced. I know this info is in the syllabus, but a month ago 
//  I didn't know anything about React or Node / difference between front end and back end. 
//  This helps to take the focus off of trying to memorize and understand every single
//  tiny detail (not easy when 90% of it is brand-new), instead of making sure to have a
//  basic understanding of how the parts relate to the whole and it's more import to focus
//  on creating a strong foundation. This also reinforces that learning coding is like 
//  learning math -- only way to get better is by doing problems/practice. 

//  Node/Express Server Code


const express = require('express');
const server = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/winners-db')
    .then(() => console.log('database is connected'))
    .catch((err) => console.log(err));


server.listen(3000, () => {
    console.log('server is running on port 3000');
})
//  would write this the way we've been taught
//  with callback to handle errors, etc.


// MLB World Series Winners
//  {
//    winningTeam: String
//    year: Number
//    losingTeam: String   
//  }


const Schema = mongoose.Schema

const mySchema = new Schema({
    winningTeam: String,
    year: Number,
    losingTeam: String
});

const myModel = mongoose.model('myModel', mySchema);

server.use(bodyParser.json());

server.post('/history', (req, res) => {
    const SeriesWinner = { team: req.body, year: req.body, loser: req.body };
    //would put test for error here (user not proving correct data)
    console.log(req.body);
    res.send(req.body);

});


server.get('/history', (req, res) => {
    //display all records 
    SeriesWinner.find({}, seriesWinner)
    //would put test for error here (empty database)
    console.log(seriesWinner);
    req.send(seriesWinner);

});
