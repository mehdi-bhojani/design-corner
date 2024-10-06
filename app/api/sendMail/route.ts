import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// The POST method for sending emails
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change to your email service provider
      auth: {
        user: process.env.GMAIL_USER, // Gmail user from environment variables
        pass: process.env.GMAIL_PASS, // Gmail password from environment variables
      },
    });

    // Mail options
    const mailOptions = {
      from: email, // Sender email
      to: 'k213910@nu.edu.pk', // Recipient email (replace with your email)
      subject: `${name} contacted you: ${subject}`,
      text: `From ${name} \n Email: ${email} \n Phone: ${phone}\n\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
