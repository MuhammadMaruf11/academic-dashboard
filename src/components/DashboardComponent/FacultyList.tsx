import { Faculty } from "@/types/faculty";


export default function FacultyList({ faculty }: { faculty: Faculty[] }) {
    return (
        <div className="md:p-6 p-2 bg-white shadow-lg rounded-lg max-w-full">
            <h3 className="md:text-xl text-sm font-semibold mb-4">Faculty Members</h3>
            <ul>
                {faculty.map((member, index) => (
                    <li key={index} className="flex max-w-full justify-between p-2 border-b md:text-base text-xs">
                        <span>{member.name}</span>
                        <span className="text-gray-500">{member.department}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
