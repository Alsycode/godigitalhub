const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { emailContent, templeEmail } = req.body;

    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.gmail.com',
      auth: {
        user: 'shyamalfred@gmail.com',
        pass: 'yjkmdhmxtflkbzfk',
      },
      secure: true,
    });

    try {
      await transporter.sendMail({
        from: 'shyamalfred@gmail.com',
        to: 'shyamalfred@gmail.com',
        subject: 'Content from Form Submission',
        text: "emailContent",
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error); // Log the error to the console
      res.status(500).json({ error: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
