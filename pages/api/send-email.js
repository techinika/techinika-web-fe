import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { subject, body } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_SEND_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.NEXT_PUBLIC_SEND_EMAIL,
      to: process.env.NEXT_PUBLIC_RECEIVE_EMAIL,
      subject: subject,
      html: body,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent", info });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to send email", details: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
