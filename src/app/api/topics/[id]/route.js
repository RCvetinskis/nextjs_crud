import { NextResponse } from "next/server";
import Topic from "../../../../../schemas/topics";

export async function GET(req, { params }) {
  const { id } = params;

  const topic = await Topic.findOne({ _id: id });
  if (!topic)
    return NextResponse.json({
      error: true,
      message: "topic not found",
      status: 400,
    });
  return NextResponse.json({
    error: false,
    message: "topic sent",
    topic,
  });
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description } = await req.json();

  if (!id)
    return NextResponse.json({
      error: true,
      message: "topic id not found",
      status: 400,
    });

  const updatedTopic = await Topic.findByIdAndUpdate(id, {
    title,
    description,
  });
  return NextResponse.json({
    error: false,
    message: "topic is sent",
    status: 200,
    topic: updatedTopic,
  });
}
