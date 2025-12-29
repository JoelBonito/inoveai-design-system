"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type SidebarContextType = {
    isCollapsed: boolean;
    setCollapsed: (v: boolean) => void;
    toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("sidebar-collapsed");
        if (saved) {
            setIsCollapsed(JSON.parse(saved));
        }
    }, []);

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem("sidebar-collapsed", JSON.stringify(newState));
    };

    const setCollapsed = (val: boolean) => {
        setIsCollapsed(val);
        localStorage.setItem("sidebar-collapsed", JSON.stringify(val));
    };

    // Prevent hydration mismatch by rendering children only after mount, 
    // or accept that initial render might differ. 
    // For layout shift, it's better to default to expanded (false) and adjust.

    return (
        <SidebarContext.Provider value={{ isCollapsed, setCollapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
