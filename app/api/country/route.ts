import country from "@/data/country.json";
import { NextResponse } from "next/server";

// GET method
export async function GET() {
  return NextResponse.json(country);
}
