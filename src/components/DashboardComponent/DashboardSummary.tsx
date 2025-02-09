'use client'


import { useSidebar } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import StatsCard from './StatsCard';
import TopStudents from './TopStudents';
import PopularCourses from './PopularCourses';
import FacultyList from './FacultyList';
import AnalyticsCharts from './AnalyticsCharts';
import { useStudents } from '@/hooks/useStudents';
import { useCourses } from '@/hooks/useCourses';
import { useFaculty } from '@/hooks/useFaculty';

const DashboardSummary = () => {
    const { isCollapsed } = useSidebar();

    // Use React Query to fetch students, courses, and faculty
    const { students, isLoading: studentsLoading } = useStudents();
    const { courses, isLoading: coursesLoading } = useCourses();
    const { faculty, isLoading: facultyLoading } = useFaculty();

    // Check if data is loading
    if (studentsLoading || coursesLoading || facultyLoading) {
        return <div className={cn("", isCollapsed ? "ml-20" : "ml-60")}>Loading...</div>;
    }

    return (
        <div className={cn("space-y-6 md:text-base text-xs", isCollapsed ? "md:ml-16 ml-0" : "md:ml-60 ml-12")}>
            {/* Stats */}
            <div className='md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 space-y-3 md:space-y-0'>
                <StatsCard title="Total Students" value={students?.length} />
                <StatsCard title="Total Courses" value={courses?.length} />
                <StatsCard title="Total Faculty Members" value={faculty.length} />
            </div>

            {/* Top Students & Popular Courses Faculty Members */}
            <div className="md:grid xl:grid-cols-3 lg:grid-cols-2  md:gap-6 space-y-3 md:space-y-0">
                <TopStudents students={students} />
                <PopularCourses courses={courses} />
                <FacultyList faculty={faculty} />

                {/* Apex Charts */}
                <AnalyticsCharts courses={courses} />
            </div>
        </div>
    );
};

export default DashboardSummary;
