/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/context/SidebarContext';
import { usePerformingStudents } from '@/hooks/usePerformingStudents';
import { useCourseEnrollment } from '@/hooks/useCourseEnrollment';
import { CSVLink } from 'react-csv';
import { Button } from '../ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';

const ReportExport = () => {
    const { courseEnrollment, isLoading: isLoadingEnrollments, } = useCourseEnrollment();
    const { topPerformingStudent, isLoading: isLoadingTopStudents, } = usePerformingStudents();

    // export csv

    // For Course Enrollments Over Time
    const courseEnrollmentHeaders = [
        { label: 'Course Code', key: 'courseCode' },
        { label: 'Enrollment Count', key: 'enrollmentCount' },
    ];

    const courseEnrollmentData = courseEnrollment?.map((enrollment: any) => ({
        courseCode: enrollment._id,
        enrollmentCount: enrollment.totalEnrollments,
    }));

    // For Top-Performing Students per Course
    const topPerformingStudentHeaders = [
        { label: 'Course Code', key: 'courseCode' },
        { label: 'Student Name', key: 'studentName' },
        { label: 'GPA', key: 'gpa' },
    ];

    const topPerformingStudentData = topPerformingStudent?.map((student: any) => ({
        courseCode: student._id,
        studentName: student.topStudent,
        gpa: student.highestGPA,
    }));



    const { isCollapsed } = useSidebar();

    // Check if data is loading
    if (isLoadingEnrollments || isLoadingTopStudents) {
        return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;
    }


    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            <div>
                <h2 className="text-lg font-semibold mb-4">Course Enrollments Over Time</h2>
                <CSVLink
                    data={courseEnrollmentData}
                    headers={courseEnrollmentHeaders}
                    filename="course_enrollments.csv"
                    className="btn btn-primary mb-4"
                >
                    <Button>Export Course Enrollments</Button>
                </CSVLink>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course Code</TableHead>
                            <TableHead>Enrollment Count</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courseEnrollment.map((enrollment: any) => (
                            <TableRow key={enrollment._id}>
                                <TableCell>{enrollment._id}</TableCell>
                                <TableCell>{enrollment.totalEnrollments}</TableCell>
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

            <div>
                <h2 className="text-lg font-semibold mt-8 mb-4">Top-Performing Students per Course</h2>
                <CSVLink
                    data={topPerformingStudentData}
                    headers={topPerformingStudentHeaders}
                    filename="top_performing_students.csv"
                    className="btn btn-primary mb-4"
                >
                    <Button>Export Top-Performing Students</Button>
                </CSVLink>
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course Code</TableHead>
                            <TableHead>Student Name</TableHead>
                            <TableHead>GPA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topPerformingStudent.map((student: any) => (
                            <TableRow key={student._id}>
                                <TableCell>{student._id}</TableCell>
                                <TableCell>{student.topStudent}</TableCell>
                                <TableCell>{student.highestGPA}</TableCell>
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

        </div>
    );
};

export default ReportExport;