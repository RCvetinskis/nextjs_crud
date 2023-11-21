import { NextResponse } from "next/server";

import Topic from "../../../../schemas/topics";

export async function POST(req) {
  const { title, description } = await req.json();

  await Topic.create({ title, description });

  return NextResponse.json({
    message: "Topic created",
    status: 201,
    error: false,
  });
}

export async function GET() {
  const topics = await Topic.find();
  if (!topics)
    return NextResponse.json({
      message: "Topics sent successfuly",
      status: 400,
      error: true,
    });

  return NextResponse.json({
    message: "Topics sent successfuly",
    topics,
    status: 200,
    error: false,
  });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id)
    NextResponse.json({ error: true, message: "id not provided", status: 400 });

  await Topic.findByIdAndDelete(id);
  const topics = await Topic.find();
  return NextResponse.json({
    message: "topic deleted",
    error: false,
    status: 200,
    topics,
  });
}
