import { Student } from "@/types/student";

export default function TopStudents({ students }: { students: Student[] }) {
    const sortedStudents = students.sort((a, b) => b.gpa - a.gpa);

    return (
        <div className="md:p-6 p-2 bg-white shadow-lg rounded-lg">
            <h3 className="md:text-xl text-sm font-semibold mb-4">Top Ranking Students</h3>
            <ul>
                {sortedStudents.map((student, index) => (
                    <li key={index} className="flex justify-between p-2 border-b md:text-base text-xs">
                        <span>{student.name}</span>
                        <span className="font-bold">{student.gpa}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
