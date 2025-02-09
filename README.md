.
├── api
│ ├── courses
│ ├── faculty
│ ├── students
│ └── reports
│ ├── course-enrollments
│ └── top-performing-students
├── components
│ ├── common
│ │ ├── Navbar.tsx
│ │ └── Sidebar.tsx
│ ├── DashboardComponent
│ │ ├── AnalyticsCharts.tsx
│ │ ├── FacultyList.tsx
│ │ ├── PopularCourses.tsx
│ │ └── TopStudents.tsx
│ ├── FacultyPanel.tsx
│ ├── ReportExport.tsx
│ ├── StudentProfile.tsx
│ └── StudentTable.tsx
├── context
│ └── SidebarProvider.tsx
├── hooks
│ ├── useFaculty.ts
│ ├── useCourses.ts
│ ├── useReports.ts
│ └── useStudents.ts
├── lib
│ ├── mongodb.ts
│ ├── axiosInstance.ts
│ └── cn.ts
├── models
│ ├── Course.ts
│ ├── Faculty.ts
│ └── Student.ts
├── pages
│ ├── courses.tsx
│ ├── faculty.tsx
│ ├── students.tsx
│ ├── dashboard.tsx
│ └── report-export.tsx
├── services
│ └── reportService.ts
├── types
│ ├── Faculty.ts
│ ├── Student.ts
│ ├── StatsCard.ts
│ └── Course.ts
└── .env.example

### API

courses: Manages course-related data.
faculty: Handles faculty information.
students: Manages student data.
reports: Generates reports, including course enrollments and top-performing students.

### components

common: Navbar and Sidebar.
DashboardComponent: Components specific to the dashboard, such as AnalyticsCharts : apex charts, FacultyList, PopularCourses, and TopStudents.

### custom hook for data fetch and mutation

useFaculty: Fetches and manages faculty data.
useCourses: Handles course data operations.
useReports: Manages report data.
useStudents: Fetches and manages student data.

### lib folder

mongodb.ts: MongoDB connection setup.
axiosInstance.ts: Configured Axios instance for API requests.
utils.ts: Utility for className concatenation, integrating with Shadcn UI.

### model by mongoose

Course.ts: Schema for courses.
Faculty.ts: Schema for faculty members.
Student.ts: Schema for students.

### All pages

courses.tsx, faculty.tsx, students.tsx, dashboard.tsx, report-export.tsx

### types defined

Faculty.ts: Type definitions for faculty data.
Student.ts: Type definitions for student data.
Course.ts: Type definitions for course data.

### setup and config

Rename .env.example to .env and configure the following variables:
NEXT_PUBLIC_API_BASE_URL: Base URL for the Axios instance.
MONGODB_URI: MongoDB connection string.
npm shadcn@latest init
npm install
npm run dev
