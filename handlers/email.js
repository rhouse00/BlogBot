const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const juice = require('juice');
const promisify = require('es6-promisify');

const email = 'x6wvj7vpne7ydub2@ethereal.email';
const password = 'WJWrN2fH89EUKredqA';

const transporter = nodemailer.createTransport({
   host: 'smtp.ethereal.email',
   post: 587,
   auth: {
      user: email,
      pass: password
   }
});



// transporter.sendMail(mailOptions, (err, info) => {
//    if (err) {
//       return console.log('Error:', err);
//    }
//    console.log('Message Sent: ', info.messageId);
//    console.log('Preview URL: ', nodemailer.getTestMessageUrl(info));
// })

exports.send = async (options) => {
   const mailOptions = {
      from: ' "Mr. Example" <example@mail.com>' ,
      to: ' "Ms. Example" <other_example@mail.com>',
      subject: options.subject,
      html: '<button>Hey</button>',
      text: 'Hey' 
   };

   const sendMail = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });



   return sendMail;
}
