import StudentProfile from "@/components/StudentsComponent/StudentProfile";

interface PageProps {
    params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <StudentProfile slug={id} />
        </div>
    );
};

export default Page;
