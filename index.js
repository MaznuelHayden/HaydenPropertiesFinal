const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



app.use('/Home', express.static('public'))
app.use('/About', express.static('public/About'))
app.use('/Contact', express.static('public/Contact'))
app.use('/', express.static('public'))
app.use(express.json())




app.post('/', (req,res)=>{
  console.log(req.body)

  /*let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
  let mailOptions = {
    from: "haydenpropertiesform@gmail.com",
    to: "manuel@haydenpropertiesinc.com",
    subject: 'Website Client',
    text: `Name: ${req.body.name} \n Email: ${req.body.mail} \n Phone: ${req.body.phone} \n Message: ${req.body.message}`
  };
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });*/

  const msg = {
    to: 'manuel@haydenpropertiesinc.com', // Change to your recipient
    from: 'manuel@haydenpropertiesinc.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  


})


app.listen(port, ()=>{
    console.log('server running on port:', port)
})




