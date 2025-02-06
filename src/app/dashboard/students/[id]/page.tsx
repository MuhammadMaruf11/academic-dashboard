import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`/api/students`).then((res) => {
                const studentData = res.data.find((s) => s.id == id);
                setStudent(studentData);
            });
            axios.get(`/api/courses`).then((res) => setCourses(res.data));
        }
    }, [id]);

    if (!student) return <p>Loading...</p>;

    return (
        <div>
            <h1>{student.name}</h1>
            <h2>Enrolled Courses:</h2>
            <ul>
                {student.courses.map((courseId) => {
                    const course = courses.find((c) => c.id === courseId);
                    return <li key={courseId}>{course?.name}</li>;
                })}
            </ul>
        </div>
    );
};
export default StudentProfile;