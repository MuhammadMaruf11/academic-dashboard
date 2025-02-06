import { NextResponse } from "next/server";

const courses = [
  { id: 101, name: "Math 101", enrollment: 120 },
  { id: 102, name: "Physics 201", enrollment: 100 },
  { id: 103, name: "History 303", enrollment: 90 },
];

export async function GET() {
  return NextResponse.json(courses);
}
