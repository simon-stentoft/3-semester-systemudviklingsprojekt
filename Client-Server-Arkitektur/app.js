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

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });