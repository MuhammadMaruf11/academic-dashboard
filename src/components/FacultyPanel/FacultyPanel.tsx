
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

const FacultyPanel = () => {
    const queryClient = useQueryClient();
    const [gradeData, setGradeData] = useState({ studentId: "", courseId: "", grade: "" });

    const { data: facultyList } = useQuery({ queryKey: ["faculty"], queryFn: () => api.get("/api/faculty").then(res => res.data) });
    const { data: gradesList } = useQuery({ queryKey: ["grades"], queryFn: () => api.get("/api/grades").then(res => res.data) });

    const mutation = useMutation({
        mutationFn: (newGrade) => api.post("/api/grades", newGrade),
        onSuccess: () => queryClient.invalidateQueries(["grades"]),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(gradeData);
    };

    return (
        <div>
            <h2>Faculty Panel</h2>
            <ul>
                {facultyList?.map((faculty: any) => (
                    <li key={faculty.id}>{faculty.name}</li>
                ))}
            </ul>
            <h3>Assign Grades</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Student ID" onChange={(e) => setGradeData({ ...gradeData, studentId: e.target.value })} />
                <input type="number" placeholder="Course ID" onChange={(e) => setGradeData({ ...gradeData, courseId: e.target.value })} />
                <input type="text" placeholder="Grade" onChange={(e) => setGradeData({ ...gradeData, grade: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FacultyPanel;