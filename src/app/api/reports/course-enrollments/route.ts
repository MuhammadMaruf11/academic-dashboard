import { getCourseEnrollmentsOverTime } from "@/services/reportService";
import { NextResponse } from "next/server";

export async function GET() {
  const enrollments = await getCourseEnrollmentsOverTime();
  return NextResponse.json(enrollments);
}
