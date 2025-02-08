import { notFound } from "next/navigation";

async function fetchStudent(id: string) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/students/${id}`, { cache: "no-store" });
    return res.ok ? res.json() : null;
}

export default async function StudentProfile({ params }: { params: { id: string } }) {
    const student = await fetchStudent(params.id);
    if (!student) return notFound();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{student.name}</h1>
            <p>GPA: {student.gpa}</p>
            <p>Year: {student.year}</p>
            <h3 className="mt-4 text-lg font-semibold">Enrolled Courses</h3>
            <ul>
                {student.courses.map((course: any) => (
                    <li key={course.id}>
                        {course.name} (Faculty: {course.faculty.name})
                    </li>
                ))}
            </ul>
        </div>
    );
}
