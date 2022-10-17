var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'antar.basu@zeeve.io',
    pass: 'ABzeeveio7'
  }
});

var mailOptions = {
  from: 'antar.basu@zeeve.io',
  to: 'rajib.sadhu1998@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hey I am sending this main using NODEJS and please tomorrow join our Blockchain webinar-> https://www.eventbrite.com/e/enterprise-blockchain-adoption-episode-2-design-of-blockchain-solution-tickets-429638238537?aff=affiliate1'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});