import DashboardSummary from "@/components/DashboardComponent/DashboardSummary";


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
        <div className="">
            <DashboardSummary students={students} courses={courses} faculty={faculty} />
        </div>
    );
}
