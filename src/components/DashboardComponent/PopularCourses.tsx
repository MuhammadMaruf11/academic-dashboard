import { Course } from "@/app/types/course";

export default function PopularCourses({ courses }: { courses: Course[] }) {
    const sortedCourses = courses.sort((a, b) => b.enrollments - a.enrollments);

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Most Popular Courses</h3>
            <ul>
                {sortedCourses.map((course) => (
                    <li key={course.id} className="flex justify-between p-2 border-b">
                        <span>{course.name}</span>
                        <span className="font-bold">{course.enrollments}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
