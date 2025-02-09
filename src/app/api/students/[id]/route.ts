import connectDB from "@/lib/mongo";
import Student from "@/model/StudentModel";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    const student = await Student.findById(id);

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PATCH: Update student
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const { id } = params;
  const updatedData = await req.json();

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    if (updatedStudent) {
      return NextResponse.json({ success: true, student: updatedStudent });
    } else {
      return NextResponse.json(
        { success: false, error: "Student not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating student:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update student" },
      { status: 500 }
    );
  }
}

// DELETE: Remove student
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = params;
  //   const { id } = await req.json();
  await Student.findByIdAndDelete(id);
  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}
