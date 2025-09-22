import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    let reply = "Hi! I am Rahul's portfolio assistant 🤖. ";
    if (message.toLowerCase().includes("projects")) {
      reply += "Rahul has built AI chatbots, stock dashboards, and data visualization apps.";
    } else if (message.toLowerCase().includes("skills")) {
      reply += "He works with React, Next.js, Tailwind, Node.js, MongoDB, and D3.js.";
    } else {
      reply += "Ask me about Rahul's projects or skills!";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
