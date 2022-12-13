const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const { start } = require('repl');
const User = require('./models/user');


//Connect to MongoDB
const dbURL = 'mongodb+srv://alla2297:Data1234@cluster0.7rjjull.mongodb.net/UserData?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3042))
.catch((err) => console.log(err));



// express app
const app = express();

// listen for requests
//app.listen(3042);


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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
    res.render('weather-sites', { title: 'Weather Overview', 
    day1: 'Loading',day1temp:'', 
    day2: 'Loading',day2temp:'', 
    day3: 'Loading',day3temp:'', 
    day4: 'Loading',day4temp:'', 
    day5: 'Loading',day5temp:''});
});

app.post('/weather-sites', (req, res) => {
    console.log(req.body);

    const api = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const apiKey = "&appid=b8641c6cc5ebb3f3ef8c6e5e69c0370c";
    const units = "&units=metric";
    const city = req.body.cityInput;
    const url = api + city + apiKey + units;

    fetch(url)
    .then(response=> response.json())
    .then(data => {
        //const todayWeather = document.getElementById("day1" + "weather").innerHTML;
        let dayChange = 0;
        let weekday = new Array(8);
        let week = new Array(5);
        week = [weekday[0], weekday[1], weekday[2], weekday[3], weekday[4]];
        for(a = 0; a <= 4; a++){
            for(i = dayChange; i <= 7+dayChange; i++){
            const todayWeather = data.list[i].weather[0].main;
            const todayTemp = data.list[i].main.temp;
            const todayIcon = data.list[i].weather[0].icon;
            const todayDate = data.list[i].dt_txt;

            weekday[i] = {todayWeather, todayTemp, todayIcon, todayDate};

            /*console.log(todayWeather);
            console.log(todayTemp);
            console.log(todayIcon);
            console.log(todayDate);
            console.log("");*/
            console.log(weekday[i],'_________________________________',i);
            }
            dayChange += 8;
            week[a] = weekday;
        }
        const date = new Date();
        let day = date.getDate()+1;
        let arrayOfTheFirst8Indexs =[weekday[0].todayDate[8]+weekday[0].todayDate[9],
            weekday[1].todayDate[8]+weekday[1].todayDate[9],
            weekday[2].todayDate[8]+weekday[2].todayDate[9],
            weekday[3].todayDate[8]+weekday[3].todayDate[9],
            weekday[4].todayDate[8]+weekday[4].todayDate[9],
            weekday[5].todayDate[8]+weekday[5].todayDate[9],
            weekday[6].todayDate[8]+weekday[6].todayDate[9],
            weekday[7].todayDate[8]+weekday[7].todayDate[9]
        ];
        console.log(day,'welcome',p[2]);
        if (day==arrayOfTheFirst8Indexs[0]) {
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[8].todayWeather,day1temp: weekday[8].todayTemp, 
                day2: weekday[16].todayWeather,day2temp: weekday[16].todayTemp,
                day3: weekday[21].todayWeather,day3temp: weekday[21].todayTemp, 
                day4: weekday[29].todayWeather,day4temp: weekday[29].todayTemp, 
                day5: weekday[37].todayWeather,day5temp: weekday[37].todayTemp
            });
        }else if (day==arrayOfTheFirst8Indexs[1]) {
            let index =1;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index+8].todayWeather,day2temp: weekday[index+8].todayTemp,
                day3: weekday[index+16].todayWeather,day3temp: weekday[index+16].todayTemp, 
                day4: weekday[index+21].todayWeather,day4temp: weekday[index+21].todayTemp, 
                day5: weekday[index+29].todayWeather,day5temp: weekday[index+29].todayTemp
            });
            
        }else if (day==arrayOfTheFirst8Indexs[2]) {
            let index =2;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
        }else if (day==arrayOfTheFirst8Indexs[3]) {
            let index=3;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
        }else if (day==arrayOfTheFirst8Indexs[4]) {
            let index=4;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
            
        }else if (day==arrayOfTheFirst8Indexs[5]) {
            let index=5;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
            
        }else if (day==arrayOfTheFirst8Indexs[6]) {
            let index=6;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
            
        }else if (day==arrayOfTheFirst8Indexs[7]) {
            let index=7;
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
                day2: weekday[index].todayWeather,day2temp: weekday[index].todayTemp,
                day3: weekday[index+8].todayWeather,day3temp: weekday[index+8].todayTemp, 
                day4: weekday[index+16].todayWeather,day4temp: weekday[index+16].todayTemp, 
                day5: weekday[index+21].todayWeather,day5temp: weekday[index+21].todayTemp
            });
            
        }else{
            res.render('weather-sites', { title: 'Weather Overview', 
                day1: 'Erro',day1temp:'', 
                day2: 'Erro',day2temp:'', 
                day3: 'Erro',day3temp:'', 
                day4: 'Erro',day4temp:'', 
                day5: 'Erro',day5temp:''
            });
        }

        
        
        let index1=2;
        console.log ("hey( ",weekday[0].todayWeather,'\n',weekday[0].todayDate,' )hey___________________________________hey',
        '\n',weekday[index1].todayWeather,'\n',weekday[index1].todayDate,'\n',
        '\n',weekday[index1+8].todayWeather,'\n',weekday[index1+8].todayDate,'\n',
        '\n',weekday[index1+16].todayWeather,'\n',weekday[index1+16].todayDate,'\n');
        /*res.render('weather-sites', 
        { title: 'Weather Overview', 
            day1: weekday[0].todayWeather,day1temp: weekday[0].todayTemp, 
            day2: weekday[1].todayWeather,day2temp: weekday[1].todayTemp,
            day3: weekday[2].todayWeather,day3temp: weekday[2].todayTemp, 
            day4: weekday[3].todayWeather,day4temp: weekday[3].todayTemp, 
            day5: weekday[4].todayWeather,day5temp: weekday[4].todayTemp
        });*/
    }) 
    .catch(err => console.log(err));
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
app.post('/Create-Account', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    //save to database
    user.save()
    //Async function that returns a promise
    .then((result) => {
    res.redirect('/Login');
    })
    .catch((err) => {
    console.log(err);
    });
    //print to console for testing purposes only
    console.log(req.body.username);
});

app.get('/Login', (req, res) => {
    res.render('login', { title: 'Login'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
