const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'your_email@gmail.com', // Replace with your Gmail address
    pass: 'your_password', // Replace with your Gmail password or app-specific password
  },
  secure: true, // Set it to true for a secure connection
});

// Email content
const mailOptions = {
  from: 'your_email@gmail.com', // Sender address
  to: 'recipient_email@example.com', // Receiver address
  subject: 'Test Email', // Subject line
  text: 'This is a test email sent using Nodemailer.', // Plain text body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
});
