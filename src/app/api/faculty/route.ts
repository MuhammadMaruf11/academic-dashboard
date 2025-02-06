import { NextResponse } from "next/server";

const faculty = [
  { id: 1, name: "Dr. John Williams", department: "Mathematics" },
  { id: 2, name: "Dr. Emily Davis", department: "Physics" },
  { id: 3, name: "Dr. Robert Brown", department: "History" },
];

export async function GET() {
  return NextResponse.json(faculty);
}
