"use client";

import React, { useEffect, useState } from "react";
import { useSidebar } from "@/components/providers/sidebar-provider";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isCollapsed } = useSidebar();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className={`bg-background relative h-full flex-1 overflow-y-auto pt-14 transition-all duration-300 ease-in-out lg:pt-0 ${
        mounted ? (isCollapsed ? "lg:pl-20" : "lg:pl-64") : "lg:pl-64" // Default to expanded to match server render
      }`}
    >
      <div className="flex min-h-full flex-col">{children}</div>
    </main>
  );
}
