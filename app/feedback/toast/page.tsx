"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

const toastSuccessCode = `<!-- Toast Success -->
<div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5 border border-border">
  <div class="p-4">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-foreground">Salvo com sucesso!</p>
        <p class="mt-1 text-sm text-muted-foreground">As alterações foram aplicadas.</p>
      </div>
      <div class="ml-4 flex flex-shrink-0">
        <button type="button" class="inline-flex rounded-md bg-background text-muted-foreground hover:text-muted-foreground focus:outline-none">
          <span class="sr-only">Fechar</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`;

const toastErrorCode = `<!-- Toast Error -->
<div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5 border border-border">
  <div class="p-4">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-foreground">Erro ao conectar</p>
        <p class="mt-1 text-sm text-muted-foreground">Verifique sua conexão e tente novamente.</p>
      </div>
      <div class="ml-4 flex flex-shrink-0">
        <button type="button" class="inline-flex rounded-md bg-background text-muted-foreground hover:text-muted-foreground focus:outline-none">
          <span class="sr-only">Fechar</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`;

const toastProps: PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Título da notificação",
  },
  {
    name: "description",
    type: "string",
    description: "Mensagem detalhada (opcional)",
  },
  {
    name: "variant",
    type: "'default' | 'destructive' | 'success'",
    description: "Estilo visual do toast",
  },
];

function ToastPreview({ variant = "success" }: { variant?: "success" | "error" }) {
  const icon =
    variant === "success" ? (
      <CheckCircle className="h-6 w-6 text-green-400" />
    ) : (
      <AlertCircle className="text-destructive h-6 w-6" />
    );

  const title = variant === "success" ? "Salvo com sucesso!" : "Erro ao conectar";
  const desc =
    variant === "success"
      ? "As alterações foram aplicadas."
      : "Verifique sua conexão e tente novamente.";

  return (
    <div className="bg-background ring-opacity-5 border-border pointer-events-auto w-full max-w-sm rounded-lg border shadow-lg ring-1 ring-black">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-3 flex-1 pt-0.5">
            <p className="text-foreground text-sm font-medium">{title}</p>
            <p className="text-muted-foreground mt-1 text-sm">{desc}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className={`bg-background text-muted-foreground hover:text-muted-foreground inline-flex rounded-md focus:outline-none`}
            >
              <span className="sr-only">Fechar</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          {/* Success */}
          <ComponentShowcase
            title="Sucesso"
            description="Usado para confirmar ações bem-sucedidas."
            code={toastSuccessCode}
            previewClassName="flex justify-center !p-12"
          >
            <ToastPreview variant="success" />
          </ComponentShowcase>

          {/* Error */}
          <ComponentShowcase
            title="Erro"
            description="Usado para comunicar falhas ou problemas."
            code={toastErrorCode}
            previewClassName="flex justify-center !p-12"
          >
            <ToastPreview variant="error" />
          </ComponentShowcase>

          {/* API Reference */}
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={toastProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
