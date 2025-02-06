


import { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("/api/courses").then((res) => setCourses(res.data));
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name} - Faculty: {course.faculty} - Enrollments: {course.enrollments}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default CourseList;
