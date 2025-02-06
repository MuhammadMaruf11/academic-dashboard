"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Student = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("/api/students").then((res) => setStudents(res.data));
    }, []);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search Students"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 border rounded mb-4"
            />
            <ul>
                {filteredStudents.map((student) => (
                    <li key={student.id}>{student.name} (GPA: {student.gpa})</li>
                ))}
            </ul>
        </div>
    );
};
export default Student;
