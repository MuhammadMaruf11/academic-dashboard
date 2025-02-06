import { NextResponse } from "next/server";

const grades = [
  { studentId: 1, courseId: 101, grade: "A" },
  { studentId: 2, courseId: 102, grade: "B+" },
];

export async function GET() {
  return NextResponse.json(grades);
}

export async function POST(req: Request) {
  const newGrade = await req.json();
  grades.push(newGrade);
  return NextResponse.json(newGrade, { status: 201 });
}
