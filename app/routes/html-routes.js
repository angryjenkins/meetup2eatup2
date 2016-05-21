//home: //app.get(/signup)
		//app.get(/login)
		//app.get(/questions)

		//app.get(/matches)

 var path 		= require('path');
// var passport=require('../login.passport.js')


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/login', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/login.html'));
	});

	app.get('/matches', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/matches.html'));
		
	});

	app.get('/questions', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/questions.html'));
		//TODO: make this a modal.
	});

	app.get('/signup', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/signup.html'));
	});

	app.get('/css', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/css/styles.css'));
	});

	app.get('/placeholder', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/person-placeholder.png'));
	});

	app.get('/matt', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/matt.jpg'));
	});
	

	app.get('/mauricio', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/mauricio.jpg'));
	});

	app.get('/steve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/steve.jpg'));
	});

	app.get('/chinese', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/chinese.jpg'));
	});

	app.get('/pizza', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/pizza.jpg'));
	});

	app.get('/burgers', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/burgers.jpg'));
	});

	app.get('/nb', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/newbrunswick.jpg'));
	});

	app.get('/jc', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/jerseycity.jpg'));
	});

	app.get('/nyc', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/img/nyc.jpg'));
	});

	app.get('/bs-css', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/css/slate-bs-css.css'));
	});
}