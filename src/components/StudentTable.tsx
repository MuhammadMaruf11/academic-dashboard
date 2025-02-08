'use client'
import { useState } from "react";
import Link from "next/link";
import { Student } from "@/app/types/student";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";

interface StudentTableProps {
    students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students, }) => {
    const [search, setSearch] = useState("");


    const filteredStudents = students.filter((student: Student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    const { isCollapsed } = useSidebar();
    return (
        <div className={cn("space-y-6", isCollapsed ? "ml-16" : "ml-60")}>
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <Input
                type="text"
                placeholder="Search Students"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>GPA</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Profile</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredStudents.map((student: Student) => (
                        <TableRow key={student.id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.gpa}</TableCell>
                            <TableCell>{student.year}</TableCell>
                            <TableCell>
                                <Link href={`/students/${student.id}`} className="text-blue-600">
                                    View Profile
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default StudentTable;