const express = require('express');

var app = express();

var hbs = require('hbs');
var fs = require('fs');
hbs.registerPartials(__dirname + '/views/partial');

app.set('view engine', 'hbs');

app.use(express.static((__dirname + '/public')));

// app.use((req, res, next) => {
// 	var now = new Date().toString();
// 	var log = `${now} : ${req.method} ${req.url}`;
// 	fs.appendFile('server.log',log + '\n', (error) => {
// 		if (error) {
// 			console.log('cant create a log');
// 		}
// 	});
// 	console.log(log);
// 	next();
// });

app.use((req, res, next) => {
	res.render('temp.hbs');
});

hbs.registerHelper('currentYear', ()  => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text) => {
	return text.toUpperCase();
});
app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'This is my home page 123',
		welcomeMessage: 'This is my home page paragraph.'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page.'
	});
});

app.get('/bad', (req, res) => {
	res.send({errorMessage: 'BAD Request'});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});