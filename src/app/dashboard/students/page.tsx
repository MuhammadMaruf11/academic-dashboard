"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Student = () => {
    const [search, setSearch] = useState("");

    const { data: students = [], isLoading, isError } = useQuery({
        queryKey: ["students"],
        queryFn: () => api.get("/api/students").then((res) => res.data),
    });

    if (isLoading) return <p>Loading students...</p>;
    if (isError) return <p>Error loading students.</p>;

    const filteredStudents = students.filter((student: any) =>
        student?.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4">
            <Input
                type="text"
                placeholder="Search Students"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
            />
            <ul className="space-y-2">
                {filteredStudents.map((student: any) => (
                    <li key={student.id} className="p-2 bg-gray-100 rounded-md">
                        {student.name} (GPA: {student.gpa})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Student;
