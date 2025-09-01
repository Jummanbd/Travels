import reviews from "@/data/reviews.json";
import { NextResponse } from "next/server";

// GET method
export async function GET() {
  return NextResponse.json(reviews);
}
