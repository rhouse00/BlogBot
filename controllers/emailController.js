
const mail = require('../handlers/email'); 

exports.createEmail = (req, res) => {
   res.render('adminEmail', {title: 'Create Email'});
};

exports.sendEmail = async (req, res) => {
   console.log(req.body);
   await mail.send({
      subject: req.body.subject,
      content: req.body.content,
      filename: 'testEmail'
   });

   res.redirect('/admin');
};
