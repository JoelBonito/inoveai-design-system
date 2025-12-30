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
 * @deprecated Use tokens CSS diretos (bg-background, text-foreground) ao invés deste helper.
 * Este helper será removido em uma versão futura.
 * 
 * @example
 * // ❌ Evite:
 * const { bg, text } = useThemeClasses();
 * className={`${bg} ${text}`}
 * 
 * // ✅ Preferido:
 * className="bg-background text-foreground"
 * 
 * // ✅ Se precisar de lógica condicional:
 * const { isDark } = useShowcaseTheme();
 */
export function useThemeClasses() {
    const { isDark } = useShowcaseTheme();

    return {
        isDark,
        /** @deprecated Use 'bg-background' */
        bg: isDark ? 'bg-slate-900' : 'bg-white',
        /** @deprecated Use 'bg-muted' ou 'bg-accent' */
        bgSurface: isDark ? 'bg-slate-800' : 'bg-slate-50',
        /** @deprecated Use 'text-foreground' */
        text: isDark ? 'text-white' : 'text-slate-900',
        /** @deprecated Use 'text-muted-foreground' */
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-500',
        /** @deprecated Use 'border-border' */
        border: isDark ? 'border-slate-700' : 'border-slate-300',
        /** Helper para escolher classe baseada no tema - ainda disponível */
        pick: (lightClass: string, darkClass: string) => isDark ? darkClass : lightClass,
    };
}
