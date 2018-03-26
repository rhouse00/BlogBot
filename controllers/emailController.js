
const mail = require('../handlers/email'); 

exports.sendEmail = async (req, res) => {
   await mail.send({
      subject: 'Email Testing!!!'
   });

   res.redirect('/admin');
}
