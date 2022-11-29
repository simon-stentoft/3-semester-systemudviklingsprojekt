const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

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
// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });