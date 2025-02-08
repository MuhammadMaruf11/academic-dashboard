interface StatsCardProps {
    title: string;
    value: number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className="p-12 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    );
}
