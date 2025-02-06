interface Student {
    id: number;
    name: string;
    gpa: number;
}

export default function TopStudents({ students }: { students: Student[] }) {
    const sortedStudents = students.sort((a, b) => b.gpa - a.gpa);

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Top Ranking Students</h3>
            <ul>
                {sortedStudents.map((student) => (
                    <li key={student.id} className="flex justify-between p-2 border-b">
                        <span>{student.name}</span>
                        <span className="font-bold">{student.gpa}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
