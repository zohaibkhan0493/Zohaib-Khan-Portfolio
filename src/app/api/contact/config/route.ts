import { NextResponse } from "next/server";

/** Public access key for client-side Web3Forms (free plan requires browser submit). */
export async function GET() {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey || accessKey === "your_access_key_here") {
    return NextResponse.json(
      { configured: false, accessKey: null },
      { status: 503 }
    );
  }

  return NextResponse.json({ configured: true, accessKey });
}
