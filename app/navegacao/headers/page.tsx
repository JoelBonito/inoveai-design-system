"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Search, Bell, Menu, User } from "lucide-react";

const navbarCode = `<!-- Simple Navbar -->
<nav class="w-full bg-background border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-primary">Logo</span>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-primary text-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Dashboard
          </a>
          <a href="#" class="border-transparent text-muted-foreground hover:border-border hover:text-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Projetos
          </a>
          <a href="#" class="border-transparent text-muted-foreground hover:border-border hover:text-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Equipe
          </a>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button class="p-1 rounded-full text-muted-foreground hover:text-muted-foreground">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div class="ml-3 relative">
          <div class="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span class="text-sm font-medium text-muted-foreground">JS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`;

const sidebarCode = `<!-- Sidebar Layout Simulation -->
<div class="flex h-64 border border-border rounded-lg overflow-hidden bg-background">
  <!-- Sidebar -->
  <div class="w-64 bg-muted border-r border-border">
    <div class="p-4 border-b border-border">
      <span class="font-bold text-lg text-primary">Inove AI</span>
    </div>
    <div class="p-4 space-y-2">
      <a href="#" class="block px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">Home</a>
      <a href="#" class="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent text-sm font-medium">Analytics</a>
      <a href="#" class="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent text-sm font-medium">Settings</a>
    </div>
  </div>
  <!-- Content -->
  <div class="flex-1 p-8 bg-background">
    <div class="h-full border-2 border-dashed border-border rounded-lg flex items-center justify-center">
      <span class="text-muted-foreground">Conteúdo Principal</span>
    </div>
  </div>
</div>`;

function NavbarPreview() {
  const textPrimary = "text-foreground";
  const textSecondary = "text-muted-foreground";

  return (
    <nav className={`bg-background border-border w-full border-b`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-primary text-xl font-bold">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className={`border-primary ${textPrimary} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                Dashboard
              </a>
              <a
                href="#"
                className={`border-transparent ${textSecondary} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                Projetos
              </a>
              <a
                href="#"
                className={`border-transparent ${textSecondary} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                Equipe
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className={`rounded-full p-1 ${textSecondary}`}>
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative ml-3">
              <div
                className={`h-8 w-8 rounded-full ${"bg-muted"} flex items-center justify-center`}
              >
                <span className={`text-sm font-medium ${"text-muted-foreground"}`}>JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SidebarPreview() {
  const bgSidebar = "bg-muted";

  return (
    <div className={`border-border bg-background flex h-64 overflow-hidden rounded-lg border`}>
      {/* Sidebar */}
      <div className={`w-64 ${bgSidebar} border-border border-r`}>
        <div className={`border-border border-b p-4`}>
          <span className="text-primary text-lg font-bold">Inove AI</span>
        </div>
        <div className="space-y-2 p-4">
          <a
            href="#"
            className="bg-primary/10 text-primary block rounded-md px-3 py-2 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className={`block rounded-md px-3 py-2 ${"text-muted-foreground hover:bg-accent"} text-sm font-medium`}
          >
            Analytics
          </a>
          <a
            href="#"
            className={`block rounded-md px-3 py-2 ${"text-muted-foreground hover:bg-accent"} text-sm font-medium`}
          >
            Settings
          </a>
        </div>
      </div>
      {/* Content */}
      <div className={`bg-background flex-1 p-8`}>
        <div
          className={`border-border flex h-full items-center justify-center rounded-lg border-2 border-dashed`}
        >
          <span className="text-muted-foreground">Conteúdo Principal</span>
        </div>
      </div>
    </div>
  );
}

export default function HeadersPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
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
