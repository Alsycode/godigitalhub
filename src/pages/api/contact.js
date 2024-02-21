// pages/api/contact.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the form submission and send email here
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  // pages/api/contact.js
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter with your SMTP configuration
    const transporter = nodemailer.createTransport({
      // Configure SMTP settings here
    });

    // Send mail with defined transport object
    transporter.sendMail({
      from: email,
      to: 'your-email@example.com', // Specify the recipient email address
      subject: `New message from ${name}: ${subject}`,
      text: message,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
