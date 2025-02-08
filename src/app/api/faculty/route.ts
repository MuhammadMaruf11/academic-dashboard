import { Faculty } from "@/app/types/faculty";
import { NextResponse } from "next/server";

const faculty: Faculty[] = [
  { id: 1, name: "Dr. Alice Brown", courses: [101, 102], department: "" },
  { id: 2, name: "Prof. John Smith", courses: [103], department: "" },
];

export async function GET() {
  return NextResponse.json(faculty);
}

export async function POST(req: Request) {
  const newFaculty = await req.json();
  newFaculty.id = faculty.length + 1;
  faculty.push(newFaculty);
  return NextResponse.json(newFaculty, { status: 201 });
}
