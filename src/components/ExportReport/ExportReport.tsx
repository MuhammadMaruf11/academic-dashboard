import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ExportReport = () => {
    const { data: gradesList } = useQuery({ queryKey: ["grades"], queryFn: () => axios.get("/api/grades").then(res => res.data) });

    const downloadCSV = () => {
        const csv = ["Student ID,Course ID,Grade", ...gradesList.map((g: any) => `${g.studentId},${g.courseId},${g.grade}`)].join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "grades_report.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button onClick={downloadCSV}>Export Report</button>
    );
};

export default ExportReport;
