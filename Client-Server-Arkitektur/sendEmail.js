var nodemailer = require('nodemailer');
var userMail = 'vupetersendan@gmail.com';
var senderMail = 'weatherchecker.noreply@gmail.com';
var weather = require('weather-js');


function sendEmail() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'weatherchecker.noreply@gmail.com',
            pass: 'ftvuwfgtozpuafzg'
        }
    });

    switch (weather) {
        case 'Sunny':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is sunny today. You should wear sunglasses.'
            };
            break;
        case 'Rainy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is rainy today. You should take an umbrella.'
            };
            break;
        case 'Cloudy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is cloudy today. You should wear a jacket.'
            };
            break;
        case 'Snowy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is snowy today. You should wear a jacket.'
            };
            break;
        default:
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is sunny today. You should wear sunglasses.'
            };
            break;
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
