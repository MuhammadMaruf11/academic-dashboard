'use client'
import { useState } from "react";
import Link from "next/link";
import { Student } from "@/types/student";
import { Course } from "@/types/course";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useStudents } from "@/hooks/useStudents";
import { useCourses } from "@/hooks/useCourses";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";



const StudentTable = () => {

    const { students, isLoading: studentsLoading } = useStudents();
    const { courses, isLoading: coursesLoading } = useCourses();

    const [search, setSearch] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    let filteredStudents;

    if (students) {
        // Filter students based on search, course, and year
        filteredStudents = students.filter((student: Student) => {
            const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
            const matchesCourse = selectedCourse && selectedCourse !== "all"
                ? student.courses.includes(Number(selectedCourse))
                : true;

            const matchesYear = selectedYear && selectedYear !== "all"
                ? student.year === Number(selectedYear)
                : true;

            return matchesSearch && matchesCourse && matchesYear;
        });
    }

    const { isCollapsed } = useSidebar();

    // Check if data is loading
    if (studentsLoading || coursesLoading) {
        return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;
    }

    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            <h1 className="md:text-2xl text-sm font-bold mb-4">Students</h1>

            <div className="lg:flex lg:gap-4 gap-2 mb-4">

                {/* shadecn table from component/ui/input  */}
                <Input
                    type="search"
                    placeholder="Search Students"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4"
                />

                <div className="flex  gap-2">
                    {/* shadecn table from component/ui/select  */}
                    <Select onValueChange={setSelectedCourse}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Filter by Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Courses</SelectItem>
                            {courses.map((course: Course) => (
                                <SelectItem key={course._id} value={course.code.toString()}>
                                    {course.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* shadecn table from component/ui/select  */}
                    <Select onValueChange={setSelectedYear}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Filter by Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Years</SelectItem>
                            {students.map((student: Student) => (
                                <SelectItem key={student._id} value={student.year.toString()}>
                                    Year {student.year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* shadecn table from component/ui/table  */}
            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>GPA</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Profile</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredStudents?.map((student: Student) => (
                        <TableRow key={student._id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.gpa}</TableCell>
                            <TableCell>{student.year}</TableCell>
                            <TableCell>
                                <Link href={`/students/${student._id}`} className="text-blue-600">
                                    View Profile
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination className=' justify-end mt-4'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default StudentTable;