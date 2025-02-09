import { getTopPerformingStudents } from "@/services/reportService";
import { NextResponse } from "next/server";

export async function GET() {
  const topStudents = await getTopPerformingStudents();
  return NextResponse.json(topStudents);
}
