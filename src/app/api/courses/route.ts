import { Course } from "@/app/types/course";
import { NextResponse } from "next/server";

const courses: Course[] = [
  { id: 101, name: "Math 101", enrollments: 120, facultyId: 1 },
  { id: 102, name: "Physics 201", enrollments: 100, facultyId: 1 },
  { id: 103, name: "History 303", enrollments: 90, facultyId: 2 },
];

export async function GET() {
  return NextResponse.json(courses);
}
