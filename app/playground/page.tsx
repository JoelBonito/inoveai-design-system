"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Code2, MonitorPlay, Loader2 } from 'lucide-react';

// Import Monaco Editor - will only render after client mount
import Editor from '@monaco-editor/react';

const DEFAULT_CODE = `<div className="p-8 bg-[var(--surface)] rounded-xl border border-[var(--border)] max-w-sm mx-auto shadow-2xl">
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
        JD
      </div>
      <div>
        <h3 className="text-[var(--foreground)] font-bold text-lg">John Doe</h3>
        <p className="text-[var(--text-secondary)] text-sm">Product Designer</p>
      </div>
    </div>
    
    <div className="h-px bg-[var(--border)] w-full" />
    
    <p className="text-[var(--foreground)] text-sm leading-relaxed">
      Passionate about building accessible and beautiful user interfaces. 
      Love using Tailwind CSS and Next.js!
    </p>

    <div className="flex gap-2 mt-2">
      <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition-colors text-sm">
        Follow
      </button>
      <button className="px-4 py-2 border border-[var(--border)] text-[var(--foreground)] rounded-lg hover:bg-[var(--foreground)]/5 transition-colors text-sm font-medium">
        Message
      </button>
    </div>
  </div>
</div>`;

export default function PlaygroundPage() {
    const [code, setCode] = useState(DEFAULT_CODE);
    const [key, setKey] = useState(0); // To force refresh
    const [mounted, setMounted] = useState(false);

    // Only render Editor after client mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
        }
    };

    const reset = () => {
        setCode(DEFAULT_CODE);
        setKey(k => k + 1);
    };

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
            {/* Header */}
            <header className="flex-none h-14 border-b border-[var(--border)] flex items-center justify-between px-4 bg-[var(--surface)]">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
                        <ArrowLeft size={18} />
                    </Link>
                    <span className="font-bold text-sm flex items-center gap-2">
                        <Code2 size={16} className="text-primary" />
                        Playground
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={reset}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--background)]/10 rounded transition-colors"
                    >
                        <RefreshCw size={14} />
                        Resetar
                    </button>
                    <div className="h-4 w-px bg-[var(--border)]" />
                    <span className="text-xs text-[var(--text-secondary)]">Monaco Editor + Live Preview</span>
                </div>
            </header>

            {/* Main Content (Split View) */}
            <div className="flex-1 flex overflow-hidden">
                {/* Editor Pane */}
                <div className="w-1/2 flex flex-col border-r border-[var(--border)]">
                    <div className="bg-[var(--surface)] border-b border-[var(--border)] px-4 py-2 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center justify-between">
                        <span>Editor de Código (React/HTML + Tailwind)</span>
                    </div>
                    <div className="flex-1 relative">
                        {mounted ? (
                            <Editor
                                key={key}
                                height="100%"
                                defaultLanguage="xml"
                                defaultValue={DEFAULT_CODE}
                                theme="vs-dark"
                                onChange={handleEditorChange}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    padding: { top: 16 },
                                    scrollBeyondLastLine: false,
                                    wordWrap: 'on',
                                    fontFamily: 'JetBrains Mono, monospace'
                                }}
                            />
                        ) : (
                            <div className="flex-1 flex items-center justify-center h-full bg-[var(--background)]">
                                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Preview Pane */}
                <div className="w-1/2 flex flex-col bg-[var(--background)]">
                    <div className="bg-[var(--surface)] border-b border-[var(--border)] px-4 py-2 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                        <MonitorPlay size={14} />
                        <span>Visualização em Tempo Real</span>
                    </div>

                    <div className="flex-1 p-8 overflow-auto flex items-center justify-center bg-[url('/img/grid.svg')] bg-fixed ">
                        {/* 
                 Safety: We are rendering raw HTML. In a real production app, use DOMPurify.
                 For this internal doc tool, we verify the user is trusted. 
                 
                 Also, className to class conversion:
                 We are writing "className" in editor (React style) but rendering via dangerouslySetInnerHTML.
                 We need to replace className -> class for it to work in standard HTML if not using a React runtime.
              */}
                        <div
                            className="w-full"
                            dangerouslySetInnerHTML={{ __html: code.replace(/className=/g, 'class=') }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

