"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Palette,
  Type,
  LayoutGrid,
  Sparkles,
  Box,
  Layers,
  Menu,
  X,
  Square,
  FormInput,
  BarChart3,
  Navigation,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
} from "lucide-react";
import { useSidebar } from "@/components/providers/sidebar-provider";

// =====================================================
// NOVA ESTRUTURA DE NAVEGAÇÃO POR CATEGORIAS
// =====================================================

const CATEGORIES = [
  {
    id: "primitivos",
    title: "Primitivos",
    href: "/primitivos",
    icon: Square,
    color: "text-emerald-500", // "Clientes" style
    items: [
      { name: "Botão", href: "/primitivos/button" },
      { name: "Input", href: "/primitivos/input" },
      { name: "Checkbox", href: "/primitivos/checkbox" },
      { name: "Switch", href: "/primitivos/switch" },
      { name: "Badge", href: "/primitivos/badge" },
    ],
  },
  {
    id: "formularios",
    title: "Formulários",
    href: "/formularios",
    icon: FormInput,
    color: "text-blue-500", // "Finanças" style
    items: [
      { name: "Select", href: "/formularios/select" },
      { name: "Autocomplete", href: "/formularios/autocomplete" },
      { name: "Seletor de Data", href: "/formularios/date-picker" },
      { name: "Upload de Arquivo", href: "/formularios/file-upload" },
    ],
  },
  {
    id: "dados",
    title: "Dados",
    href: "/dados",
    icon: BarChart3,
    color: "text-amber-500", // "Produtos" style
    items: [
      { name: "Tabela", href: "/dados/table" },
      { name: "Gráfico", href: "/dados/chart" },
    ],
  },
  {
    id: "navegacao",
    title: "Navegação",
    href: "/navegacao",
    icon: Navigation,
    color: "text-purple-500",
    items: [
      { name: "Tabs", href: "/navegacao/tabs" },
      { name: "Breadcrumbs", href: "/navegacao/breadcrumbs" },
      { name: "Paginação", href: "/navegacao/paginacao" },
      { name: "Headers & Sidebar", href: "/navegacao/headers" },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    href: "/feedback",
    icon: MessageSquare,
    color: "text-rose-500",
    items: [
      { name: "Modal", href: "/feedback/modal" },
      { name: "Toast", href: "/feedback/toast" },
      { name: "Tooltip", href: "/feedback/tooltip" },
      { name: "Estado Vazio", href: "/feedback/empty-state" },
      { name: "Página de Erro", href: "/feedback/error-page" },
    ],
  },
];

const FOUNDATION_ITEMS = [
  { name: "Cores", href: "/colors", icon: Palette },
  { name: "Tipografia", href: "/typography", icon: Type },
  { name: "Grid e Layout", href: "/grid", icon: LayoutGrid },
  { name: "Ícones", href: "/icons", icon: Sparkles },
];

interface SiteSidebarProps {
  components?: any[];
}

export function SiteSidebar({ components = [] }: SiteSidebarProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["primitivos"]);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-expand category based on current path
  useEffect(() => {
    const category = CATEGORIES.find((cat) => pathname.startsWith(cat.href));
    if (category && !expandedCategories.includes(category.id)) {
      setExpandedCategories((prev) => [...prev, category.id]);
    }
  }, [pathname]);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(
      (prev) =>
        prev.includes(categoryId)
          ? [] // Close if already open
          : [categoryId] // Open only this one (accordion behavior)
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="border-border bg-sidebar-background fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-4 py-3 transition-colors lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <img src="/inove-logo.png" alt="Inove AI" className="size-8 rounded" />
          <span className="text-sidebar-foreground text-sm font-semibold tracking-tight">
            Design System
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg p-2 transition-colors"
            aria-label="Alternar tema claro/escuro"
            suppressHydrationWarning
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg p-2 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu de navegação"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`border-sidebar-border bg-sidebar-background fixed inset-y-0 left-0 z-50 transform flex-col border-r py-6 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:flex lg:translate-x-0 ${isCollapsed ? "w-20" : "w-64"} `}
      >
        {/* Header Container (Brand + Toggle on Divider) */}
        <div
          className={`border-sidebar-border relative mb-2 flex flex-col items-center border-b pb-6 transition-all duration-300 ${isCollapsed ? "px-2" : "px-6"}`}
        >
          <Link href="/" className="flex flex-col items-center gap-2 overflow-hidden">
            <img
              src="/inove-logo.png"
              alt="Inove AI"
              className={`transition-all duration-300 ${isCollapsed ? "h-10 w-10" : "h-16 w-16"} rounded-xl shadow-sm`}
            />
            <span
              className={`text-muted-foreground mt-1 text-center text-xs font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-opacity duration-300 ${isCollapsed ? "hidden h-0 opacity-0" : "opacity-100"}`}
            >
              Design System
            </span>
          </Link>

          {/* Desktop Toggle Button - Positioned exactly on the bottom border */}
          <div className="absolute -right-3 bottom-0 z-50 hidden translate-y-1/2 lg:block">
            <button
              onClick={toggleSidebar}
              className="bg-sidebar-background border-sidebar-border text-muted-foreground hover:text-foreground hover:border-primary flex h-6 w-6 items-center justify-center rounded-full border shadow-md transition-all hover:scale-110"
              aria-label={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}  
            >
              {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile padding for header */}
        <div className="h-14 lg:hidden" />

        {/* Navigation */}
        <div className="custom-scrollbar flex-1 overflow-y-auto px-4">
          <div className="space-y-6">
            {/* Início */}
            <div>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-sidebar-accent text-sidebar-primary ring-sidebar-ring/10 shadow-sm ring-1"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? "Início" : undefined}
              >
                <Box size={18} className="text-sidebar-foreground/70" />
                {!isCollapsed && <span>Início</span>}
              </Link>
            </div>

            {/* Design Tokens */}
            <div>
              <Link
                href="/tokens"
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                  pathname === "/tokens"
                    ? "bg-sidebar-accent text-sidebar-primary ring-sidebar-ring/10 shadow-sm ring-1"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? "Design Tokens" : undefined}
              >
                <Layers size={18} className="text-sidebar-foreground/70" />
                {!isCollapsed && <span>Design Tokens</span>}
              </Link>
            </div>

            {/* Categories */}
            {CATEGORIES.map((category) => {
              const isExpanded = expandedCategories.includes(category.id);
              const isCategoryActive = pathname.startsWith(category.href);

              return (
                <div key={category.id}>
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={`group flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                      isCategoryActive
                        ? "bg-sidebar-accent/10 text-sidebar-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    } ${isCollapsed ? "justify-center" : ""}`}
                    title={isCollapsed ? category.title : undefined}
                  >
                    <div className="flex items-center gap-3">
                      {/* Ícone Colorido */}
                      <category.icon size={18} className={category.color} />
                      {!isCollapsed && (
                        <span className="group-hover:text-sidebar-accent-foreground">
                          {category.title}
                        </span>
                      )}
                    </div>
                    {!isCollapsed &&
                      (isExpanded ? (
                        <ChevronDown size={14} className="text-muted-foreground" />
                      ) : (
                        <ChevronRight size={14} className="text-muted-foreground" />
                      ))}
                  </button>

                  {/* Category Items */}
                  {isExpanded && !isCollapsed && (
                    <div className="border-sidebar-border/60 relative z-10 mt-1 ml-2 space-y-1 border-l">
                      {category.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`relative z-10 mr-2 flex w-full cursor-pointer items-center rounded-r-full py-2 pl-6 text-sm transition-all ${
                              isActive
                                ? "bg-sidebar-accent text-sidebar-primary border-sidebar-primary border-l-4 font-bold"
                                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 border-l-4 border-transparent"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Fundamentos */}
            <div>
              {!isCollapsed && (
                <h3 className="text-sidebar-foreground/40 mb-2 px-2 text-[10px] font-bold tracking-wider uppercase">
                  Fundamentos
                </h3>
              )}
              <div className="space-y-1">
                {FOUNDATION_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      } ${isCollapsed ? "justify-center" : ""}`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <item.icon
                        size={18}
                        className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                      />
                      {!isCollapsed && item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Powered by Inove AI */}
        <div
          className={`border-sidebar-border/40 mt-auto border-t px-6 py-6 ${isCollapsed ? "px-2 py-4" : ""}`}
        >
          <div className="flex flex-col items-center gap-2">
            {!isCollapsed && (
              <span className="text-muted-foreground/60 text-[10px] font-bold tracking-[0.2em] whitespace-nowrap uppercase">
                Powered By
              </span>
            )}
            <div className="flex items-center justify-center">
              <img
                src="/inove-powered-logo.jpg"
                alt="Inove AI"
                className={`h-10 w-auto rounded-md opacity-90 transition-opacity hover:opacity-100 ${isCollapsed ? "h-8" : ""}`}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
