import connectDB from "@/lib/mongo";
import Course from "@/model/CourseModel";
import { NextResponse } from "next/server";

// Mongoose model

export async function GET() {
  await connectDB();
  const courses = await Course.find();

  // If no courses exist, insert dummy data
  if (courses.length === 0) {
    const dummyCourses = [
      { code: 101, name: "Math", enrollments: "80", facultyId: "" },
      { code: 201, name: "Computer Science", enrollments: "95", facultyId: "" },
      { code: 301, name: "History", enrollments: "35", facultyId: "" },
    ];
    await Course.insertMany(dummyCourses);
    return NextResponse.json(dummyCourses, { status: 201 });
  }

  return NextResponse.json(courses);
}


