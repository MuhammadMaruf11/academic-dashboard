import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Grade } from "@/app/types/grades";
import { Faculty } from "@/app/types/faculty";
import { api } from "@/lib/api";

const FacultyPanel = () => {
    const queryClient = useQueryClient();
    const [gradeData, setGradeData] = useState<Grade>({ studentId: 0, courseId: 0, grade: "" });

    const { data: facultyList } = useQuery<Faculty[]>({
        queryKey: ["faculty"],
        queryFn: () => api.get("/api/faculty").then(res => res.data),
    });

    const mutation = useMutation({
        mutationFn: (newGrade: Grade) => api.post("/api/grades", newGrade),
        onSuccess: () => queryClient.invalidateQueries(["grades"]),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(gradeData);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">👨‍🏫 Faculty Panel</h2>

            <ul className="space-y-3">
                {facultyList?.map((faculty) => (
                    <li key={faculty.id} className="p-4 border rounded-lg hover:bg-gray-100 transition">
                        <span className="font-medium">{faculty.name}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6">Assign Grades</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                    type="number"
                    placeholder="Student ID"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setGradeData({ ...gradeData, studentId: Number(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Course ID"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setGradeData({ ...gradeData, courseId: Number(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Grade"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setGradeData({ ...gradeData, grade: e.target.value })}
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FacultyPanel;
