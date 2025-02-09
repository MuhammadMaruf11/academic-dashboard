import { Course } from "@/types/course";

export default function PopularCourses({ courses }: { courses: Course[] }) {
    const sortedCourses = courses.sort((a, b) => b.enrollments - a.enrollments);

    return (
        <div className="md:p-6 p-2 bg-white shadow-lg rounded-lg">
            <h3 className="md:text-xl text-sm font-semibold mb-4">Most Popular Courses</h3>
            <ul>
                {sortedCourses.map((course, index) => (
                    <li key={index} className="flex justify-between p-2 border-b md:text-base text-xs">
                        <span>{course.name}</span>
                        <span className="font-bold">{course.enrollments}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
