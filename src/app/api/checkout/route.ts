import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would replace this URL with your actual Google Apps Script Web App URL
    // e.g., const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxtrB8ur6WDghJc0Mqj-jLUkYwCXU5-cUnyJYKMioXQgreROni0sc04Z7aBJKiDVhzXIg/exec";

    // Format the payload to be somewhat flat, depending on how your Apps Script expects it
    const orderItems = body.items.map((item: any) => `${item.name} (${item.quantity})`).join(", ");
    
    const payload = {
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      date: new Date().toISOString(),
      name: body.customer.name,
      email: body.customer.email,
      address: body.customer.address,
      items: orderItems,
      total: body.total,
    };

    console.log("Submitting to Google Sheets Webhook:", payload);

    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API responded with status: ${response.status}`);
    }

    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Order placed successfully!" });
  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    );
  }
}
