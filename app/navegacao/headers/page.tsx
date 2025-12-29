"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";
import { Search, Bell, Menu, User } from "lucide-react";

const navbarCode = `<!-- Simple Navbar -->
<nav class="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-primary">Logo</span>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-primary text-slate-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Dashboard
          </a>
          <a href="#" class="border-transparent text-slate-500 dark:text-slate-400 hover:border-slate-300 hover:text-slate-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Projetos
          </a>
          <a href="#" class="border-transparent text-slate-500 dark:text-slate-400 hover:border-slate-300 hover:text-slate-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Equipe
          </a>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button class="p-1 rounded-full text-slate-400 hover:text-slate-500">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div class="ml-3 relative">
          <div class="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span class="text-sm font-medium text-slate-600 dark:text-slate-300">JS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`;

const sidebarCode = `<!-- Sidebar Layout Simulation -->
<div class="flex h-64 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-900">
  <!-- Sidebar -->
  <div class="w-64 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-800">
    <div class="p-4 border-b border-slate-200 dark:border-slate-800">
      <span class="font-bold text-lg text-primary">Inove AI</span>
    </div>
    <div class="p-4 space-y-2">
      <a href="#" class="block px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">Home</a>
      <a href="#" class="block px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium">Analytics</a>
      <a href="#" class="block px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium">Settings</a>
    </div>
  </div>
  <!-- Content -->
  <div class="flex-1 p-8 bg-white dark:bg-slate-900">
    <div class="h-full border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center">
      <span class="text-slate-400">Conteúdo Principal</span>
    </div>
  </div>
</div>`;

function NavbarPreview() {
  const { bg, border, isDark } = useThemeClasses();
  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <nav className={`w-full ${bg} border-b ${border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className={`border-primary ${textPrimary} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Dashboard
              </a>
              <a href="#" className={`border-transparent ${textSecondary} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Projetos
              </a>
              <a href="#" className={`border-transparent ${textSecondary} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Equipe
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className={`p-1 rounded-full ${textSecondary}`}>
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div className={`h-8 w-8 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'} flex items-center justify-center`}>
                <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SidebarPreview() {
  const { bg, border, isDark } = useThemeClasses();
  const bgSidebar = isDark ? "bg-slate-800/50" : "bg-slate-50";

  return (
    <div className={`flex h-64 border ${border} rounded-lg overflow-hidden ${bg}`}>
      {/* Sidebar */}
      <div className={`w-64 ${bgSidebar} border-r ${border}`}>
        <div className={`p-4 border-b ${border}`}>
          <span className="font-bold text-lg text-primary">Inove AI</span>
        </div>
        <div className="p-4 space-y-2">
          <a href="#" className="block px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">Home</a>
          <a href="#" className={`block px-3 py-2 rounded-md ${isDark ? "text-slate-400 hover:bg-slate-700" : "text-slate-600 hover:bg-slate-100"} text-sm font-medium`}>Analytics</a>
          <a href="#" className={`block px-3 py-2 rounded-md ${isDark ? "text-slate-400 hover:bg-slate-700" : "text-slate-600 hover:bg-slate-100"} text-sm font-medium`}>Settings</a>
        </div>
      </div>
      {/* Content */}
      <div className={`flex-1 p-8 ${bg}`}>
        <div className={`h-full border-2 border-dashed ${border} rounded-lg flex items-center justify-center`}>
          <span className="text-slate-400">Conteúdo Principal</span>
        </div>
      </div>
    </div>
  );
}

export default function HeadersPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero removed */}

          {/* Navbar */}
          <ComponentShowcase
            title="Navbar Simples"
            description="Barra de navegação superior com logo e links"
            code={navbarCode}
            previewClassName="!p-0"
          >
            <NavbarPreview />
          </ComponentShowcase>

          {/* Sidebar */}
          <ComponentShowcase
            title="Layout com Sidebar"
            description="Estrutura comum para painéis administrativos"
            code={sidebarCode}
            previewClassName="!block"
          >
            <SidebarPreview />
          </ComponentShowcase>
        </div>
      </main>
    </div>
  );
}
