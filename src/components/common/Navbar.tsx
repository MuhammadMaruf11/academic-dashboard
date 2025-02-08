"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const { toggleSidebar, isCollapsed } = useSidebar();

    return (
        <nav className={cn("bg-white shadow-md p-4 flex justify-between items-center fixed ", isCollapsed ? "ml-16 w-[calc(100vw-64px)]" : "w-[calc(100vw-240px)] z-10 ml-60")}>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <Button variant="ghost" onClick={toggleSidebar}>
                <Menu />
            </Button>
        </nav>
    );
};

export default Navbar;
