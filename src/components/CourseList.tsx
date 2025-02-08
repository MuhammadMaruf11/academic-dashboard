import { Course } from "@/app/types/course";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const CourseList = () => {
    const { data: courses } = useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: () => api.get("/api/courses").then(res => res.data),
    });

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Course List</h2>
            <ul className="space-y-3">
                {courses?.map((course) => (
                    <li key={course.id} className="p-4 border rounded-lg hover:bg-gray-100 transition">
                        <div className="flex justify-between">
                            <span className="font-medium">{course.name}</span>
                            <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                                {course.enrollments} students
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
