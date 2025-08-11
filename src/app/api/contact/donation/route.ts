import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Extract donation data from the request body
    const { amount, name, email, phone, isAnonymous } = await request.json();

    // Basic validation for required fields
    if (!amount || !phone) {
      return NextResponse.json(
        { message: "Donation amount and phone number are required." },
        { status: 400 }
      );
    }

    // Validate name and email unless the donation is anonymous
    if (!isAnonymous && (!name || !email)) {
      return NextResponse.json(
        { message: "Name and email are required for non-anonymous donations." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.your-email-provider.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare the email content
    const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #16327b;">New Donation Received!</h2>
        <p>A new mobile money donation has been submitted.</p>
        <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">
        <p><strong>Amount:</strong> RWF ${amount}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Donor Name:</strong> ${isAnonymous ? "Anonymous" : name}</p>
        ${!isAnonymous ? `<p><strong>Donor Email:</strong> ${email}</p>` : ""}
      </div>
    `;

    // Define the mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NEXT_PUBLIC_COMMUNITY_EMAIL,
      subject: `New Donation Received: RWF ${amount}`,
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Donation received and email notification sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending donation notification email:", error);
    return NextResponse.json(
      { message: "Failed to send email notification." },
      { status: 500 }
    );
  }
}
