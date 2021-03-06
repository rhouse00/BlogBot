const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const juice = require('juice');
const promisify = require('es6-promisify');

const transporter = nodemailer.createTransport({
   host: 'smtp.ethereal.email',
   post: 587,
   auth: {
      user: process.env.MAIL_DEV_EMAIL,
      pass: process.env.MAIL_DEV_PASSWORD
   }
});

const getHTML = (filename, options = {}) => {
   const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
   const inlined = juice(html);
   return inlined;
}

exports.send = async (options) => {
   const html = getHTML(options.filename, options);
   const text = htmlToText.fromString(html);
   const mailOptions = {
      from: ' "Mr. Example" <example@mail.com>' ,
      to: options.to,
      subject: options.subject,
      html,
      text
   };
   const sendMail = await transporter
      .sendMail(mailOptions, (err, info) => {
         if (err) {
            return console.log(err);
         }
         console.log('Message sent: %s', info.messageId);
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

   return sendMail;
}
