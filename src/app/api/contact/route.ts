import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        message,
      });
      return NextResponse.json({ success: true, mode: "dev" });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL ?? "hello@creovolabs.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
