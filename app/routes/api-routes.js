// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Person 	= require("../model/info.js"); // Pulls out the Character Model

var listings = require('../data/listings');
var userdata = require('../data/userdata');
// Routes
// =============================================================
module.exports = function(app){

	app.get('/api/:id?', function(req, res){
		// If the user provides a specific character in the URL...
		if(req.params.id){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			Person.findAll({
				where: {
					id: req.params.id,
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
			Person.findAll({

			})
				.then(function(result){
					res.json(result);
			})
		};

	});

	app.get('/data/listings', function(req, res){
		res.json(listings[listings.length-1]);
	});

	app.get('/data/matches', function(req, res){

		var matchQuery = req.body;
		console.log(matchQuery);

		if(matchQuery.genderPref == "male"){
			Person.findAll({
			where: {
				food: userdata[userdata.length-1].food,
				location: userdata[userdata.length-1].location,
				gender: "male"
			}
			}).then(function(result){
				res.json(result);
			})
		} else if (matchQuery.genderPref == "female"){
			Person.findAll({
			where: {
				food: userdata[userdata.length-1].food,
				location: userdata[userdata.length-1].location,
				gender: "female"
			}
			}).then(function(result){
				res.json(result);
			})
		} else {
			Person.findAll({
			where: {
				food: userdata[userdata.length-1].food,
				location: userdata[userdata.length-1].location,
			}
			}).then(function(result){
				res.json(result);
			})
		}
	})


	app.post('/api/signup', function(req, res){

		// Take the request...
		var person = req.body;

		Person.create({
			firstName: 	person.firstName,
			lastName: 	person.lastName,
			age: 		person.age,
			email: 		person.email,	
			userName: 	person.userName,
			passWord: 	person.passWord,
			food: 		person.food,
			location: 	person.location,
			photo: 		person.photo,
			gender: 	person.gender,
			genderPref: person.genderPref
		});

		var firstSearch = {
			food: person.food,
			location: person.location
		}

		userdata.push(firstSearch);
	})

	

	app.post('/data/questions', function(req, res){

		// Take the request...
		var person = req.body;

		Person.update({
		  food: person.food,
		  location: person.location
		}, {
		  where: {
		    id: 1
		  }
		}).then(function(result){
			userdata.push(result);
		});

	})
}
