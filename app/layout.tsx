import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import fs from "fs";
import path from "path";
import { CommandMenu } from "@/components/ui/command-menu";
import { SiteSidebar } from "@/components/site-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingTopBar } from "@/components/layout/floating-top-bar";
import { SidebarProvider } from "@/components/providers/sidebar-provider";
import { ClientLayout } from "@/components/layout/client-layout";
import { Toaster } from "sonner";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Stitch Design System - Documentação",
  description: "Documentação completa do Stitch Design System com tokens, componentes e padrões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read components for search
  const componentsPath = path.join(process.cwd(), 'data', 'components.json');
  let components = [];
  try {
    if (fs.existsSync(componentsPath)) {
      components = JSON.parse(fs.readFileSync(componentsPath, 'utf-8'));
    }
  } catch (e) {
    console.error("Failed to load components for search", e);
  }

  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-display antialiased h-full overflow-hidden flex transition-colors bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <CommandMenu components={components} />
            <Toaster position="top-center" richColors />

            {/* Sidebar Navigation */}
            <SiteSidebar components={components} />

            {/* Main Scroll Content Wrapper */}
            <ClientLayout>
              {/* Floating TopBar */}
              <div className="hidden lg:block sticky top-0 z-40">
                <FloatingTopBar />
              </div>

              <div className="flex-1">
                {children}
              </div>
            </ClientLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
