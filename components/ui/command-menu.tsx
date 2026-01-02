"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, FileCode, Palette, Zap, LayoutGrid, Type, Code2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface ComponentEntry {
  id: string;
  name: string;
  category: string;
}

export function CommandMenu({ components }: { components: ComponentEntry[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      {/* Trigger for mobile or click */}
      <div
        onClick={() => setOpen(true)}
        className="bg-primary fixed right-4 bottom-4 z-50 rounded-full p-3 text-white shadow-lg md:hidden"
      >
        <Search size={24} />
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Search"
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 p-4 pt-[20vh] backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="bg-surface-dark border-border-dark animate-in fade-in zoom-in-95 w-full max-w-2xl overflow-hidden rounded-xl border shadow-2xl duration-200">
          <div className="border-border-dark flex items-center border-b px-4 py-3">
            <Search className="text-text-secondary mr-3 h-5 w-5" />
            <Command.Input
              placeholder="Search components, tokens, pages..."
              className="placeholder:text-text-secondary/50 flex-1 bg-transparent text-base text-white outline-none"
            />
            <div className="text-text-secondary border-border-dark rounded border px-1.5 py-0.5 text-xs">
              ESC
            </div>
          </div>

          <Command.List className="scrollbar-hide max-h-[60vh] overflow-y-auto p-2">
            <Command.Empty className="text-text-secondary py-6 text-center text-sm">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Components"
              className="text-text-secondary mb-2 px-2 text-xs font-medium"
            >
              {components.map((component) => (
                <Command.Item
                  key={component.id}
                  onSelect={() => runCommand(() => router.push(`/components/${component.id}`))}
                  className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
                >
                  <FileCode className="text-text-secondary/70 h-4 w-4" />
                  <span>{component.name}</span>
                  <span className="text-text-secondary/50 ml-auto text-xs capitalize">
                    {component.category}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Design System"
              className="text-text-secondary border-border-dark/50 mt-2 mb-2 border-t px-2 pt-2 text-xs font-medium"
            >
              <Command.Item
                onSelect={() => runCommand(() => router.push("/tokens"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Palette className="text-text-secondary/70 h-4 w-4" />
                <span>Design Tokens</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/colors"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Palette className="text-text-secondary/70 h-4 w-4" />
                <span>Extended Color Palette</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/icons"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Zap className="text-text-secondary/70 h-4 w-4" />
                <span>Icons Library</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/animations"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Zap className="text-text-secondary/70 h-4 w-4" />
                <span>Animation Library</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/accessibility"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Eye className="text-text-secondary/70 h-4 w-4" />
                <span>Accessibility Patterns</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/playground"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <Code2 className="text-text-secondary/70 h-4 w-4" />
                <span>Code Playground</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/grid"))}
                className="aria-selected:bg-primary/20 aria-selected:text-primary flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition-colors"
              >
                <LayoutGrid className="text-text-secondary/70 h-4 w-4" />
                <span>Grid System</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
