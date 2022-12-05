var nodemailer = require('nodemailer');
var userMail = 'vupetersendan@gmail.com';
var senderMail = 'weatherchecker.noreply@gmail.com';
var weather = 'Snowy';


function sendEmail() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'weatherchecker.noreply@gmail.com',
            pass: 'gznzxlrxtxpqsotu'
        }
    });

    switch (weather) {
        case 'Sunny':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',       
                text: 'It is sunny tomorrow. You should wear sunglasses.',
            };
            break;
        case 'Rainy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is rainy tomorrow. You should take an umbrella.'
            };
            break;
        case 'Cloudy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is cloudy tomorrow. You should wear a jacket.'
            };
            break;
        case 'Snowy':
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                html: `<h1>It is snowy tomorrow. You should wear a jacket.</h1>`,
                
        // An array of attachments
        attachments: [

    

            // File Stream attachment
            {
                filename: 'snowflake.png',
                path: __dirname + '/pictures/weather/snowflake.png',
                cid: 'snowy@example.com' // should be as unique as possible
            }
        ],
            };
            break;
        default:
            mailOptions = {
                from: senderMail,
                to: userMail,
                subject: 'Weather Checker',
                text: 'It is sunny tomorrow. You should wear sunglasses.'
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
    return 1;
}
console.log(sendEmail());
