"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
    const { isCollapsed } = useSidebar();

    return (
        <aside className={cn("bg-gray-900 text-white h-screen p-4 fixed", isCollapsed ? "w-16" : "w-60")}>
            <ul>
                <li><Link href="/dashboard" className="block p-2">Dashboard</Link></li>
                <li><Link href="/students" className="block p-2">Students</Link></li>
                <li><Link href="/courses" className="block p-2">Courses</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
