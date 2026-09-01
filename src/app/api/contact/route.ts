import { NextRequest, NextResponse } from "next/server";
import { addLead } from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, consent } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: "Please accept the Terms & Conditions and Privacy Policy before submitting." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead = await addLead({
      name: String(name),
      email: String(email),
      company: String(company || ""),
      phone: String(phone || ""),
      service: String(service || "General"),
      message: String(message),
      consent: consent === true,
      source: "website-contact-form",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Our team will get back to you within one business day.",
        lead,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
