"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import { HomeIcon, UsersIcon, BookOpenIcon, FileTextIcon } from 'lucide-react';

const Sidebar = () => {
    const { isCollapsed } = useSidebar();

    return (
        <aside className={cn("bg-gray-900 text-white h-screen md:p-4 fixed", isCollapsed ? "md:w-16 w-0" : "md:w-60 w-12")}>
            <ul>
                <li><Link href="/" className="flex py-4 px-2 md:gap-4"><HomeIcon /> <span className={cn(isCollapsed ? "hidden" : "hidden md:block")}>Dashboard</span></Link></li>
                <li><Link href="/students" className="flex py-4 px-2 md:gap-4"><UsersIcon /> <span className={cn(isCollapsed ? "hidden" : "hidden md:block")}>Students</span></Link></li>
                <li><Link href="/faculty" className="flex py-4  px-2 md:gap-4"><UsersIcon /> <span className={cn(isCollapsed ? "hidden" : "hidden md:block")}>Faculty</span></Link></li>
                <li><Link href="/courses" className="flex py-4  px-2 md:gap-4"><BookOpenIcon /> <span className={cn(isCollapsed ? "hidden" : "hidden md:block")}>Courses</span></Link></li>
                <li><Link href="/report-export" className="flex py-4 px-2 md:gap-4"><FileTextIcon /> <span className={cn(isCollapsed ? "hidden" : "hidden md:block")}>Reports</span></Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
