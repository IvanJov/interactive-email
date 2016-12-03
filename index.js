const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const fs = require('fs');

const auth = JSON.parse(fs.readFileSync('.env', {encoding: 'utf8'}));

const transporter = nodemailer.createTransport(mg(auth));

var mailOptions = {
  from: '"Me ?" <testing.interactive.email@gmail.com>',
  to: 'testing.interactive.email@gmail.com',
  subject: 'Hello ✔',
  text: 'Hello world ?',
  html: '<b>Hello world ?</b>'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});