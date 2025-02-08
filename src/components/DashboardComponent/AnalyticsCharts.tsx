"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
    courses: { name: string; enrollments: number }[];
}

export default function AnalyticsCharts({ courses }: ChartProps) {
    const chartData = {
        options: {
            chart: { id: "enrollments-chart" },
            xaxis: { categories: courses.map((c) => c.name) },
        },
        series: [{ name: "enrollments", data: courses.map((c) => c.enrollments) }],
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Course enrollments Chart</h3>
            <Chart options={chartData.options} series={chartData.series} type="bar" height={300} />
        </div>
    );
}