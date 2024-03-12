import { sendMail } from "../../services/mailsService";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, subject, message } = req.body;

      // Send email with form data
      await sendMail(subject, "razoralf67@gmail.com", message, name, email);

      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
};

export default handler;
