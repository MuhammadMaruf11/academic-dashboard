/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useSidebar } from "@/context/SidebarContext";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface slugProps {
    slug: string;
}

const fetchData = async (slug: string) => {
    const response = await api.get(`/students/${slug}`);
    return response.data;
};

const StudentProfile: React.FC<slugProps> = ({ slug }) => {


    const { data: student, isLoading } = useQuery({
        queryKey: ['student', slug],
        queryFn: () => fetchData(slug),
        staleTime: 60000,
    });

    const { isCollapsed } = useSidebar();


    if (isLoading) return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;

    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            <h2 className="font-semibold text-xl">{student.name}&apos;s Profile</h2>
            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead>Field</TableHead>
                        <TableHead>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{student.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>GPA</TableCell>
                        <TableCell>{student.gpa}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>{student.year}</TableCell>
                    </TableRow>
                    {student.courses.map((course: any, index: any) => (
                        <TableRow key={index}>
                            <TableCell>Course {index + 1}</TableCell>
                            <TableCell>{course}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default StudentProfile;
