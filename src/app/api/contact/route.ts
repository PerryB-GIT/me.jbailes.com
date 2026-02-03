import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "{YOUR_EMAIL}";

    const params = {
      Source: toEmail, // Must be verified in SES
      Destination: {
        ToAddresses: [toEmail],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `[me.jbailes.com] ${subject}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `New message from your website contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            Charset: "UTF-8",
          },
          Html: {
            Data: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #059669;">New Contact Form Submission</h2>
                <p style="color: #64748b;">You received a new message from your website.</p>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
                <h3 style="color: #334155;">Message:</h3>
                <p style="white-space: pre-wrap; color: #475569;">${message}</p>
              </div>
            `,
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    await ses.send(command);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
