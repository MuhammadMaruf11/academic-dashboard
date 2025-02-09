"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Student } from "@/types/student";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import { useStudents } from "@/hooks/useStudents";
import { useCourses } from "@/hooks/useCourses";
import { Course } from "@/types/course";



export default function FacultyPanel() {

    const { isCollapsed } = useSidebar();

    const { students, isLoading: studentsLoading, updateGpa, updateCourse } = useStudents();
    const { courses, isLoading: coursesLoading } = useCourses();

    const [selectedStudentId, setSelectedStudentId] = useState<string>('');
    const [newGpa, setNewGpa] = useState<number | ''>('');

    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);



    const handleUpdateGpa = () => {
        if (selectedStudentId && newGpa !== '') {
            updateGpa.mutate({ id: selectedStudentId, gpa: newGpa });
        }
    };


    const handleUpdateCourse = () => {
        if (selectedStudentId && selectedCourse !== '') {
            updateCourse.mutate({ id: selectedStudentId, courses: Number(selectedCourse) });
        }
    };


    // Check if data is loading
    if (studentsLoading || coursesLoading) {
        return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;
    }

    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            <h1 className="md:text-2xl text-base font-semibold mb-4">Faculty Panel</h1>

            {/* Update Student Grades */}
            <div className="bg-white shadow p-4 rounded-lg mb-6">
                <h2 className="md:text-lg text-sm font-semibold mb-2">Update Student Grades</h2>
                <div className="flex flex-wrap items-center gap-4">
                    <Select onValueChange={setSelectedStudentId}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select Student" />
                        </SelectTrigger>
                        <SelectContent>
                            {students.map((student: Student) => (
                                <SelectItem key={student._id} value={student._id}>
                                    {student.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Input
                        type="number"
                        value={newGpa}
                        onChange={(e) => setNewGpa(parseFloat(e.target.value))}
                        placeholder="Enter New GPA"
                        className="w-[150px]"
                    />

                    <Button onClick={handleUpdateGpa} disabled={studentsLoading}>
                        {studentsLoading ? 'Updating...' : 'Update Grade'}
                    </Button>
                </div>
            </div>

            {/* Assign Student to Course */}
            <div className="bg-white shadow p-4 rounded-lg">
                <h2 className="md:text-lg text-sm font-semibold mb-2">Assign Student to Course</h2>
                <div className="flex flex-wrap items-center gap-4">
                    <Select onValueChange={setSelectedStudentId}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select Student" />
                        </SelectTrigger>
                        <SelectContent>
                            {students.map((student: Student) => (
                                <SelectItem key={student._id} value={student._id.toString()}>
                                    {student.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={setSelectedCourse}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                            {courses.map((course: Course) => (
                                <SelectItem key={course.code} value={course.code.toString()}>
                                    {course.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={handleUpdateCourse}
                    >
                        Assign to Course
                    </Button>
                </div>
            </div>
        </div>
    );
}
