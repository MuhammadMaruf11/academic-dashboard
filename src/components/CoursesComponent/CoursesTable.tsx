'use client'
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { useCourses } from "@/hooks/useCourses";
import { Course } from "@/types/course";
import { useState } from "react";
import { Input } from "../ui/input";

const CoursesTable = () => {

    const { courses, isLoading } = useCourses();
    const [search, setSearch] = useState("");

    const { isCollapsed } = useSidebar();

    if (isLoading) {
        return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;
    }

    let filteredCourses;

    if (courses) {
        // Filter students based on search, course, and year
        filteredCourses = courses.filter((student: Course) => {
            const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
            return matchesSearch
        });
    }

    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            <h1 className="md:text-2xl text-base font-bold mb-4">Students</h1>
            {/* shadecn table from component/ui/input  */}
            <Input
                type="search"
                placeholder="Search Students"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 md:text-base text-xs"
            />
            <Table className="border md:text-base text-xs">
                <TableHeader>
                    <TableRow>
                        <TableHead>Course Code</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Course Enrollment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredCourses?.map((course: Course) => (
                        <TableRow key={course._id}>
                            <TableCell>{course.code}</TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.enrollments}</TableCell>
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
    )
}

export default CoursesTable