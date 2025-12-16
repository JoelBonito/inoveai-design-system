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
                className="fixed bottom-4 right-4 md:hidden z-50 bg-primary text-white p-3 rounded-full shadow-lg"
            >
                <Search size={24} />
            </div>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Search"
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 pt-[20vh] flex items-start justify-center"
                onClick={(e) => {
                    if (e.target === e.currentTarget) setOpen(false)
                }}
            >
                <div className="w-full max-w-2xl bg-surface-dark border border-border-dark rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center border-b border-border-dark px-4 py-3">
                        <Search className="w-5 h-5 text-text-secondary mr-3" />
                        <Command.Input
                            placeholder="Search components, tokens, pages..."
                            className="flex-1 bg-transparent text-white placeholder:text-text-secondary/50 outline-none text-base"
                        />
                        <div className="text-xs text-text-secondary border border-border-dark rounded px-1.5 py-0.5">ESC</div>
                    </div>

                    <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                        <Command.Empty className="py-6 text-center text-text-secondary text-sm">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Components" className="text-xs text-text-secondary font-medium mb-2 px-2">
                            {components.map((component) => (
                                <Command.Item
                                    key={component.id}
                                    onSelect={() => runCommand(() => router.push(`/components/${component.id}`))}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                                >
                                    <FileCode className="w-4 h-4 text-text-secondary/70" />
                                    <span>{component.name}</span>
                                    <span className="ml-auto text-xs text-text-secondary/50 capitalize">{component.category}</span>
                                </Command.Item>
                            ))}
                        </Command.Group>

                        <Command.Group heading="Design System" className="text-xs text-text-secondary font-medium mb-2 px-2 pt-2 border-t border-border-dark/50 mt-2">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/tokens"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Palette className="w-4 h-4 text-text-secondary/70" />
                                <span>Design Tokens</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/colors"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Palette className="w-4 h-4 text-text-secondary/70" />
                                <span>Extended Color Palette</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/icons"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Zap className="w-4 h-4 text-text-secondary/70" />
                                <span>Icons Library</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/animations"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Zap className="w-4 h-4 text-text-secondary/70" />
                                <span>Animation Library</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/accessibility"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Eye className="w-4 h-4 text-text-secondary/70" />
                                <span>Accessibility Patterns</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/playground"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Code2 className="w-4 h-4 text-text-secondary/70" />
                                <span>Code Playground</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/grid"))}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white text-sm cursor-pointer aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <LayoutGrid className="w-4 h-4 text-text-secondary/70" />
                                <span>Grid System</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    );
}
