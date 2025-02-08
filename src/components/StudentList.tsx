import { Student } from "@/app/types/student";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const StudentList = () => {
    const { data: students } = useQuery<Student[]>({
        queryKey: ["students"],
        queryFn: () => api.get("/api/students").then(res => res.data),
    });

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Student List</h2>
            <ul className="space-y-3">
                {students?.map((student) => (
                    <li key={student.id} className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-100 transition">
                        <span className="font-medium">{student.name}</span>
                        <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full">GPA: {student.gpa}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
