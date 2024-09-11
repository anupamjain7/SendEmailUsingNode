const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com', // your Gmail account
    pass: ''   // your Gmail account password or app password
  }
});

// Set up email data
let mailOptions = {
  from: '"name" <@gmail.com>', // sender address
  to: 'test@gmail.com', // list of receivers
  subject: 'Hello from Node.js', // Subject line
  text: 'Hello world?', // plain text body
  html: `
    <h1>Form Submission</h1>
    <form>
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" value="User name"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" value="user.name@gmail.com"><br><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" cols="50">This is a test message.</textarea><br><br>
      <input type="submit" value="Submit">
    </form>
  `
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
