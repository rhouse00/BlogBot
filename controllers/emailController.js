
const mail = require('../handlers/email'); 

exports.createEmail = (req, res) => {
   res.render('adminEmail', {title: 'Create Email'});
};

exports.sendEmail = async (req, res) => {
   await mail.send({
      subject: req.body.subject,
      content: req.body.content,
      to: req.body.email,
      filename: 'testEmail'
   });

   res.redirect('/admin');
};
