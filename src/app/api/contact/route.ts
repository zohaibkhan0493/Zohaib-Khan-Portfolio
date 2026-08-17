import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  botcheck?: string | boolean;
};

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey || accessKey === "your_access_key_here") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Web3Forms is not configured. Add WEB3FORMS_ACCESS_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactBody;

    // Honeypot — bots fill this; humans never see it
    if (body.botcheck) {
      return NextResponse.json({ success: true, message: "Message sent successfully." });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in name, email, and message." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New message from Zohaib Khan Portfolio",
        from_name: "Zohaib Portfolio Contact",
        name,
        email,
        message,
      }),
    });

    let data: { message?: string; success?: boolean } = {};
    try {
      data = await response.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Unexpected response from email service. Please try again.",
        },
        { status: 502 }
      );
    }

    if (!response.ok || data.success === false) {
      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Something went wrong. Please try again.",
        },
        { status: response.ok ? 400 : response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data?.message || "Thanks — your message was sent successfully.",
    });
  } catch (error) {
    const detail =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? error.message
        : undefined;
    return NextResponse.json(
      {
        success: false,
        message: detail
          ? `Network error: ${detail}`
          : "Network error. Please try again.",
      },
      { status: 500 }
    );
  }
}
