import connectDB from "@/lib/mongo";
import Student from "@/model/StudentModel";
import { NextResponse } from "next/server";

// Mongoose model

export async function GET() {
  await connectDB();
  const students = await Student.find();

  // If no students exist, insert dummy data
  if (students.length === 0) {
    const dummyStudents = [
      { name: "John Doe", gpa: 3.8, courses: [101], year: 2 },
      { name: "Jane Smith", gpa: 3.5, courses: [201], year: 1 },
      { name: "Alice Smith", gpa: 2.7, courses: [201, 301], year: 3 },
    ];
    await Student.insertMany(dummyStudents);
    return NextResponse.json(dummyStudents, { status: 201 });
  }

  return NextResponse.json(students);
}

