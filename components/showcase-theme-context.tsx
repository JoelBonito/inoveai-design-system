"use client";

import { createContext, useContext } from "react";

interface ShowcaseThemeContextType {
    isDark: boolean;
}

const ShowcaseThemeContext = createContext<ShowcaseThemeContextType>({ isDark: false });

export function ShowcaseThemeProvider({
    isDark,
    children
}: {
    isDark: boolean;
    children: React.ReactNode;
}) {
    return (
        <ShowcaseThemeContext.Provider value={{ isDark }}>
            {children}
        </ShowcaseThemeContext.Provider>
    );
}

/**
 * Hook para consumir o tema local do ComponentShowcase
 * 
 * @example
 * const { isDark } = useShowcaseTheme();
 * className={isDark ? 'bg-slate-900' : 'bg-white'}
 */
export function useShowcaseTheme() {
    return useContext(ShowcaseThemeContext);
}

/**
 * Helper para criar classes condicionais baseadas no tema do showcase
 * 
 * @example
 * className={themeClass('bg-white', 'bg-slate-900')}
 * // Retorna 'bg-white' em light mode, 'bg-slate-900' em dark mode
 */
export function useThemeClasses() {
    const { isDark } = useShowcaseTheme();

    return {
        isDark,
        // Helper para escolher classe baseada no tema
        pick: (lightClass: string, darkClass: string) => isDark ? darkClass : lightClass,
        // Classes comuns pré-definidas
        bg: isDark ? 'bg-slate-900' : 'bg-white',
        bgSurface: isDark ? 'bg-slate-800' : 'bg-slate-50',
        text: isDark ? 'text-white' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-500',
        border: isDark ? 'border-slate-700' : 'border-slate-300',
    };
}
