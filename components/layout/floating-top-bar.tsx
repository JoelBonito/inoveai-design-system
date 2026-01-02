"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, User, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function FloatingTopBar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mapeamento de rotas para títulos
  const ROUTE_TITLES: Record<string, string> = {
    "/": "Stitch Design System",
    "/tokens": "Design Tokens",
    "/colors": "Sistema de Cores",
    "/typography": "Tipografia",
    "/grid": "Grid e Layout",
    "/icons": "Biblioteca de Ícones",
    "/primitivos": "Primitivos",
    "/primitivos/button": "Botão",
    "/primitivos/input": "Input",
    "/primitivos/checkbox": "Checkbox",
    "/primitivos/switch": "Switch",
    "/primitivos/badge": "Badge",
    "/formularios": "Formulários",
    "/formularios/select": "Select",
    "/formularios/autocomplete": "Autocomplete",
    "/formularios/date-picker": "Seletor de Data",
    "/formularios/file-upload": "Upload de Arquivo",
    "/dados": "Dados",
    "/dados/table": "Tabela",
    "/dados/chart": "Gráfico",
    "/navegacao": "Navegação",
    "/navegacao/tabs": "Tabs",
    "/navegacao/breadcrumbs": "Breadcrumbs",
    "/navegacao/paginacao": "Paginação",
    "/navegacao/headers": "Headers & Sidebar",
    "/feedback": "Feedback",
    "/feedback/modal": "Modal",
    "/feedback/toast": "Toast",
    "/feedback/tooltip": "Tooltip",
    "/feedback/empty-state": "Estado Vazio",
    "/feedback/error-page": "Página de Erro",
    "/accessibility": "Acessibilidade",
    "/animations": "Animações",
  };

  const getPageTitle = () => {
    // Verifica correspondência exata
    if (ROUTE_TITLES[pathname]) {
      return ROUTE_TITLES[pathname];
    }

    // Fallback: formata o último segmento do path
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "Stitch Design System";

    const lastPart = parts[parts.length - 1];
    return lastPart
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <header className="border-border/20 sticky top-4 z-40 mx-6 mb-2 rounded-2xl border bg-transparent px-4 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Lado Esquerdo: Título da Página */}
        <div className="flex flex-col justify-center">
          <h1 className="text-foreground text-[30px] font-black tracking-tight">
            {getPageTitle()}
          </h1>
        </div>

        {/* Lado Direito: Ações */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {/* Theme Toggle (Custom Switch) */}
          <div
            className="bg-muted border-border relative flex h-7 w-14 cursor-pointer items-center rounded-full border p-1 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            role="button"
            tabIndex={0}
            suppressHydrationWarning
          >
            {/* Moon Icon (Left) */}
            <div className="text-muted-foreground absolute left-1.5 z-10 flex items-center justify-center dark:text-blue-400">
              <svg
                className={`h-3.5 w-3.5 transition-opacity duration-300 ${mounted && theme === "dark" ? "opacity-100" : "opacity-50"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                suppressHydrationWarning
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                <circle cx="17" cy="5" r="0.5" fill="currentColor"></circle>
                <circle cx="20" cy="9" r="0.3" fill="currentColor"></circle>
                <circle cx="18" cy="7" r="0.2" fill="currentColor"></circle>
              </svg>
            </div>

            {/* Sun Icon (Right) */}
            <div className="absolute right-1.5 z-10 flex items-center justify-center text-amber-500">
              <svg
                className={`h-3.5 w-3.5 transition-opacity duration-300 ${mounted && theme === "dark" ? "opacity-50" : "opacity-100"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                suppressHydrationWarning
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M6.34 17.66l-1.41 1.41"></path>
                <path d="M19.07 4.93l-1.41 1.41"></path>
              </svg>
            </div>

            {/* Thumb */}
            <div
              className={`ease-spring relative z-20 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${mounted && theme === "dark" ? "translate-x-7" : "translate-x-0"} `}
              suppressHydrationWarning
            />
          </div>

          <div className="bg-border/50 mx-1 h-6 w-px" />

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-1">
            <div className="flex hidden flex-col items-end sm:flex">
              <span className="text-foreground text-xs leading-none font-bold">Joel Bonito</span>
              <span className="text-muted-foreground mt-1 text-[10px] leading-none">Admin</span>
            </div>
            <div className="bg-primary/10 border-primary/20 text-primary flex size-9 items-center justify-center rounded-full border">
              <User size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
