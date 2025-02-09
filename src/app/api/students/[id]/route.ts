import connectDB from "@/lib/mongo";
import Student from "@/model/StudentModel";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return NextResponse.json(
        { message: 'Student not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error retrieving student', error },
      { status: 500 }
    );
  }
}

// PATCH: Update student
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }

    // Parse the request body to get the updated student data
    const updatedData = await request.json();

    // Update the student's information
    Object.assign(student, updatedData);
    await student.save();

    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating student", error },
      { status: 500 }
    );
  }
}