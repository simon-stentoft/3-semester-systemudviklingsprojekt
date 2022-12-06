const express = require('express');
const mongoose = require('mongoose');
const { start } = require('repl');
const User = require('./createUser');


//Connect to MongoDB
const dbURL = 'mongodb+srv://alla2297:Data1234@cluster0.7rjjull.mongodb.net/UserData?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3041))
.catch((err) => console.log(err));





// express app
const app = express();

// listen for requests


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log('ip',req.ip);
    console.log('');
    next();
});

// routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/weather_overview', (req, res) => {
    res.render('weather-sites', { title: 'Weather Overview'});
});

app.get('/partners', (req, res) => {
    res.render('partners', { title: 'Partner'});
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact'});
});
app.get('/Create-Account', (req, res) => {
    res.render('create-account', { title: 'Create-Account'});
});
app.get('/Login', (req, res) => {
    res.render('login', { title: 'Login'});
});

app.get('/Create-Account', (req, res) => {
    const user = new User({
        name: 'Alla',
        email: 'alla2297@edu.zealand.dk',
        password: '1234'
    });
    user.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
