import StudentProfile from "@/components/StudentsComponent/StudentProfile";

export default async function Page({
    params,
}: {
        params: Promise<{ id: string }>
}) {
    const id = (await params).id
   
    return (
        <div>
            <StudentProfile slug={id} />
        </div>
    );
};


