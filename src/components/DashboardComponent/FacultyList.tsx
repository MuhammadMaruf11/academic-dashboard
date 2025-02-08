import { Faculty } from "@/app/types/faculty";


export default function FacultyList({ faculty }: { faculty: Faculty[] }) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Faculty Members</h3>
            <ul>
                {faculty.map((member) => (
                    <li key={member.id} className="flex justify-between p-2 border-b">
                        <span>{member.name}</span>
                        <span className="text-gray-500">{member.department}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
