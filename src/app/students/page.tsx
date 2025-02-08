import StudentTable from "@/components/StudentTable"

const fetchStudents = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/students`, { cache: "no-store" });
    return res.json();
};

export default async function Students() {
    const [students] = await Promise.all([fetchStudents()]);


    return (
        <>
            <StudentTable students={students} />
        </>
    )
}
