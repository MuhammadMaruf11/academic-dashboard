import React from 'react';

interface SummaryProps {
    totalStudents: number;
    totalCourses: number;
    totalFaculty: number;
}

const DashboardSummary: React.FC<SummaryProps> = ({ totalStudents, totalCourses, totalFaculty }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow-md rounded-lg text-center">Students: {totalStudents}</div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">Courses: {totalCourses}</div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">Faculty: {totalFaculty}</div>
        </div>
    );
};

export default DashboardSummary;