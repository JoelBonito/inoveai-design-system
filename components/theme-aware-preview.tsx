"use client";

import { useEffect, useState } from "react";

interface ThemeAwarePreviewProps {
  lightHtml: string;
  darkHtml: string;
  lightStyles?: string;
  darkStyles?: string;
}

export function ThemeAwarePreview({
  lightHtml,
  darkHtml,
  lightStyles,
  darkStyles,
}: ThemeAwarePreviewProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial state
    const checkTheme = () => {
      const isDarkTheme = document.documentElement.classList.contains("dark");
      setIsDark(isDarkTheme);
    };

    checkTheme();

    // Monitor changes to the class attribute on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[300px] animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
    );
  }

  const currentHtml = isDark ? darkHtml || lightHtml : lightHtml || darkHtml;
  const currentStyles = isDark ? darkStyles : lightStyles;

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      {/* Injeta estilos específicos do tema se existirem */}
      {currentStyles && <div dangerouslySetInnerHTML={{ __html: currentStyles }} />}

      <div className="component-preview" dangerouslySetInnerHTML={{ __html: currentHtml }} />
    </div>
  );
}
