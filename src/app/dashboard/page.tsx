import AnalyticsCharts from "@/components/DashboardComponent/AnalyticsCharts";
import FacultyList from "@/components/DashboardComponent/FacultyList";
import PopularCourses from "@/components/DashboardComponent/PopularCourses";
import StatsCard from "@/components/DashboardComponent/StatsCard";
import TopStudents from "@/components/DashboardComponent/TopStudents";


const fetchStudents = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/students`, { cache: "no-store" });
    return res.json();
};

const fetchCourses = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/courses`, { cache: "no-store" });
    return res.json();
};

const fetchFaculty = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/faculty`, { cache: "no-store" });
    return res.json();
};

export default async function Dashboard() {
    const [students, courses, faculty] = await Promise.all([fetchStudents(), fetchCourses(), fetchFaculty()]);

    return (
        <div className="p-10 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
                <StatsCard title="Total Students" value={students.length} />
                <StatsCard title="Total Courses" value={courses.length} />
                <StatsCard title="Total Faculty Members" value={10} /> {/* Mocked value */}
            </div>

            {/* Top Students & Popular Courses */}
            <div className="grid grid-cols-2 gap-6">
                <TopStudents students={students} />
                <PopularCourses courses={courses} />
            </div>

            {/* Faculty List */}
            <FacultyList faculty={faculty} />

            {/* Charts */}
            <AnalyticsCharts courses={courses} />
        </div>
    );
}
