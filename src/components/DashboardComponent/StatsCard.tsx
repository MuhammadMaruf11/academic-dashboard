import { StatsCard as StatsCardProps } from "@/types/StatsCard";


export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className="p-12 bg-white shadow-lg rounded-lg text-center">
            <h3 className="md:text-xl text-sm font-semibold">{title}</h3>
            <p className="md:text-3xl text-base font-bold mt-2">{value}</p>
        </div>
    );
}
