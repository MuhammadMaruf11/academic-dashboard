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

export async function POST(req: Request) {
  await connectDB();
  const newCourse = await req.json();
  const course = new Course(newCourse);
  await course.save();
  return NextResponse.json(course, { status: 201 });
}

// PATCH: Update course
export async function PATCH(req: Request) {
  await connectDB();
  const { id, name, enrollments, facultyId } = await req.json();
  const updatedCourse = await Course.findByIdAndUpdate(
    id,
    { name, enrollments, facultyId },
    { new: true }
  );
  return NextResponse.json(updatedCourse);
}

// DELETE: Remove course
export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Course.findByIdAndDelete(id);
  return NextResponse.json({ message: "Course deleted" }, { status: 200 });
}
