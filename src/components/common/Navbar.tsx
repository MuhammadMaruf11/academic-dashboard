"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const { toggleSidebar, isCollapsed } = useSidebar();

    return (
        <nav className={cn("bg-white shadow-md p-4 flex justify-between items-center fixed ", isCollapsed ? "md:ml-16 ml-0 md:w-[calc(100vw-64px)] w-full" : "md:w-[calc(100vw-240px)] w-[calc(100vw-48px)]  z-10 md:ml-60 ml-12")}>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <Button variant="ghost" onClick={toggleSidebar}>
                <Menu />
            </Button>
        </nav>
    );
};

export default Navbar;
