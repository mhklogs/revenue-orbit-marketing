import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
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

    // In production, this would send an email or POST to the CRM.
    // Store the lead payload in a way that can later be wired to CRM/email/SMS.
    const lead = {
      name,
      email,
      company: company || "",
      phone: phone || "",
      service: service || "General",
      message,
      source: "website-contact-form",
      timestamp: new Date().toISOString(),
    };

    // TODO: wire to CRM (HubSpot/Salesforce/GoHighLevel), email service, and notifications.

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
