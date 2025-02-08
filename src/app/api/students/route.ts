import { Student } from "@/app/types/student";
import { NextResponse } from "next/server";

const students: Student[] = [
  { id: 1, name: "Alice Johnson", gpa: 3.9, courses: [101, 102], year: 2013 },
  { id: 2, name: "Bob Smith", gpa: 3.8, courses: [103], year: 2015 },
];

export async function GET() {
  return NextResponse.json(students);
}
