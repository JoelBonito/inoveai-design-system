"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const fileUploadBasicCode = `<!-- File Upload Basic -->
<div class="flex items-center justify-center w-full max-w-lg">
  <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-accent hover:bg-accent/80 transition-colors">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg class="w-10 h-10 mb-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
      <p class="mb-2 text-sm text-muted-foreground"><span class="font-semibold text-primary">Clique para upload</span> ou arraste</p>
      <p class="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input type="file" class="hidden" />
  </label>
</div>`;

const fileUploadCompactCode = `<!-- File Upload Compact -->
<div class="flex items-center gap-4">
  <label class="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors cursor-pointer shadow-sm">
    Escolher arquivo
    <input type="file" class="hidden" />
  </label>
  <span class="text-sm text-muted-foreground">Nenhum arquivo selecionado</span>
</div>`;

const fileUploadWithPreviewCode = `<!-- File Upload With Preview (Simulation) -->
<div class="w-full max-w-md space-y-4">
  <div class="flex items-center gap-4 p-3 bg-card border border-border rounded-lg shadow-sm">
    <div class="size-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-foreground truncate">
        screenshot-2024.png
      </p>
      <p class="text-xs text-muted-foreground">
        2.4 MB
      </p>
    </div>
    <button class="text-muted-foreground hover:text-destructive transition-colors">
      <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
</div>`;

const fileUploadProps: PropDefinition[] = [
    {
        name: "accept",
        type: "string",
        description: "Tipos de arquivo aceitos (ex: 'image/*', '.pdf')"
    },
    {
        name: "multiple",
        type: "boolean",
        defaultValue: "false",
        description: "Permite upload de múltiplos arquivos"
    },
    {
        name: "maxSize",
        type: "number",
        description: "Tamanho máximo do arquivo em bytes"
    },
    {
        name: "onDrop",
        type: "(files: File[]) => void",
        description: "Callback executado ao soltar arquivos"
    },
];

function FileUploadDropzonePreview() {
    return (
        <div className="flex items-center justify-center w-full max-w-lg">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-accent hover:bg-accent/80 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-10 h-10 mb-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold text-primary">Clique para upload</span> ou arraste</p>
                    <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input type="file" className="hidden" />
            </label>
        </div>
    );
}

function FileUploadCompactPreview() {
    return (
        <div className="flex items-center gap-4">
            <label className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors cursor-pointer shadow-sm">
                Escolher arquivo
                <input type="file" className="hidden" />
            </label>
            <span className="text-sm text-muted-foreground">Nenhum arquivo selecionado</span>
        </div>
    );
}

function FileUploadListPreview() {
    return (
        <div className="w-full max-w-md space-y-4">
            <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg shadow-sm">
                <div className="size-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                        screenshot-2024.png
                    </p>
                    <p className="text-xs text-muted-foreground">
                        2.4 MB
                    </p>
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function FileUploadPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Drag and Drop */}
                    <ComponentShowcase
                        title="Drag and Drop"
                        description="Área grande para arrastar arquivos"
                        code={fileUploadBasicCode}
                        previewClassName="!flex-col !items-center"
                    >
                        <FileUploadDropzonePreview />
                    </ComponentShowcase>

                    {/* Compact */}
                    <ComponentShowcase
                        title="Botão Simples"
                        description="Layout compacto padrão"
                        code={fileUploadCompactCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <FileUploadCompactPreview />
                    </ComponentShowcase>

                    {/* Preview */}
                    <ComponentShowcase
                        title="Com Lista de Arquivos"
                        description="Exibição de arquivos selecionados"
                        code={fileUploadWithPreviewCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <FileUploadListPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={fileUploadProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
