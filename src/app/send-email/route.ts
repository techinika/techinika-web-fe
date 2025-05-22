import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { subject, body, receiver } = await req.json();

    if (!subject || !body || !receiver) {
      return NextResponse.json(
        { error: "Missing required fields: subject, body, or receiver" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_SEND_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SEND_EMAIL,
      to: receiver,
      cc: process.env.NEXT_PUBLIC_COORDINATOR,
      subject: subject,
      html: body,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent", info }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}
