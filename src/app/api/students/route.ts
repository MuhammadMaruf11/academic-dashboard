import { NextResponse } from "next/server";

const students = [
  { id: 1, name: "Alice Johnson", gpa: 3.9, courses: [101, 102] },
  { id: 2, name: "Bob Smith", gpa: 3.8, courses: [103, 104] },
  { id: 3, name: "Charlie Brown", gpa: 3.7, courses: [101, 103] },
];

export async function GET() {
  return NextResponse.json(students);
}
