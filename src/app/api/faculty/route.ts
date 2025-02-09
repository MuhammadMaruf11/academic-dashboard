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

