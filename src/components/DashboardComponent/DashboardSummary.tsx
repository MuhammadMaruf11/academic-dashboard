'use client'
import { useSidebar } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import StatsCard from './StatsCard';
import TopStudents from './TopStudents';
import PopularCourses from './PopularCourses';
import FacultyList from './FacultyList';
import AnalyticsCharts from './AnalyticsCharts';
import { Student } from '@/app/types/student';
import { Course } from '@/app/types/course';
import { Faculty } from '@/app/types/faculty';

interface DashboardSummaryProps {
    students: Student[];
    courses: Course[];
    faculty: Faculty[];
}


const DashboardSummary: React.FC<DashboardSummaryProps> = ({ students, courses, faculty }) => {

    const { isCollapsed } = useSidebar();

    return (
        <div className={cn("space-y-6", isCollapsed ? "ml-16" : "ml-60")}>
            {/* Stats */}
            <div className='grid lg:grid-cols-3 grid-cols-3 gap-6'>
                <StatsCard title="Total Students" value={students.length} />
                <StatsCard title="Total Courses" value={courses.length} />
                <StatsCard title="Total Faculty Members" value={faculty.length} />
            </div>

            {/* Top Students & Popular Courses Faculty Members */}
            <div className="grid grid-cols-3 gap-6">
                <TopStudents students={students} />
                <PopularCourses courses={courses} />
                <FacultyList faculty={faculty} />

                {/* Charts */}
                <AnalyticsCharts courses={courses} />
            </div>

        </div>
    );
};

export default DashboardSummary;