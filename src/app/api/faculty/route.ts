import connectDB from "@/lib/mongo";
import Faculty from "@/model/FacultyModel";
import { NextResponse } from "next/server";

// Mongoose model

export async function GET() {
  await connectDB();
  const faculty = await Faculty.find();

  // If no faculty exists, insert dummy data
  if (faculty.length === 0) {
    const dummyFaculty = [
      {
        name: "Dr. Alice Johnson",
        courses: [101, 201],
        department: "Mathematics",
      },
      {
        name: "Dr. Robert Brown",
        courses: [301],
        department: "History",
      },
    ];
    await Faculty.insertMany(dummyFaculty);
    return NextResponse.json(dummyFaculty, { status: 201 });
  }

  return NextResponse.json(faculty);
}

export async function POST(req: Request) {
  await connectDB();
  const newFaculty = await req.json();
  const faculty = new Faculty(newFaculty);
  await faculty.save();
  return NextResponse.json(faculty, { status: 201 });
}

// PATCH: Update faculty
export async function PATCH(req: Request) {
  await connectDB();
  const { id, name, department, courses } = await req.json();
  const updatedFaculty = await Faculty.findByIdAndUpdate(
    id,
    { name, department, courses },
    { new: true }
  );
  return NextResponse.json(updatedFaculty);
}

// DELETE: Remove faculty
export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Faculty.findByIdAndDelete(id);
  return NextResponse.json({ message: "Faculty deleted" }, { status: 200 });
}
