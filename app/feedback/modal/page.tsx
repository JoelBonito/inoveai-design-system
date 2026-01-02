"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useState } from "react";

const modalBasicCode = `<!-- Modal Basic -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"></div>

  <!-- Modal Panel (Layer 2) -->
  <div class="relative transform overflow-hidden rounded-lg bg-card px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-border">
    <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
      <button type="button" class="rounded-md bg-card text-muted-foreground hover:text-foreground focus:outline-none">
        <span class="sr-only">Fechar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-base font-semibold leading-6 text-foreground">Informação Importante</h3>
        <div class="mt-2">
          <p class="text-sm text-muted-foreground">
            Você está prestes a realizar uma ação que pode impactar outros usuários. Por favor, verifique os dados antes de continuar.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto">Confirmar</button>
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-popover px-3 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-inset ring-border hover:bg-accent sm:mt-0 sm:w-auto">Cancelar</button>
    </div>
  </div>
</div>`;

const modalDestructiveCode = `<!-- Modal Destructive -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="fixed inset-0 bg-background/80 backdrop-blur-sm"></div>
  <!-- Modal Panel (Layer 2) -->
  <div class="relative transform rounded-lg bg-card px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-border">
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-base font-semibold leading-6 text-foreground">Desativar conta?</h3>
        <div class="mt-2">
          <p class="text-sm text-muted-foreground">
            Tem certeza que deseja desativar sua conta? Todos os seus dados serão removidos permanentemente. Esta ação não pode ser desfeita.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-destructive px-3 py-2 text-sm font-semibold text-destructive-foreground shadow-sm hover:bg-destructive/90 sm:ml-3 sm:w-auto">Desativar</button>
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-popover px-3 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-inset ring-border hover:bg-accent sm:mt-0 sm:w-auto">Cancelar</button>
    </div>
  </div>
</div>`;

const modalProps: PropDefinition[] = [
  {
    name: "isOpen",
    type: "boolean",
    description: "Controla a visibilidade do modal",
  },
  {
    name: "onClose",
    type: "() => void",
    description: "Função chamada ao fechar o modal",
  },
  {
    name: "title",
    type: "string",
    description: "Título do modal",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Conteúdo do corpo do modal",
  },
  {
    name: "confirmVariant",
    type: "'primary' | 'destructive'",
    description: "Estilo do botão de ação principal",
  },
];

function ModalBasicPreview() {
  // Modal = Layer 2 (bg-card), Botão secundário = Layer 3 (bg-popover)
  const modalBg = "bg-card";
  const secondaryBg = "bg-popover";
  const ring = "ring-border";
  const descColor = "text-muted-foreground";
  const iconWrapper = "bg-primary/10";
  const iconColor = "text-primary";
  const hoverSecondary = "hover:bg-accent";

  return (
    <div className="relative z-10 flex justify-center p-12">
      {/* Simulation wrapper */}
      <div
        className={`relative transform overflow-hidden rounded-lg ${modalBg} border-border border px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`}
      >
        <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            className={`rounded-md ${modalBg} text-muted-foreground hover:text-foreground focus:outline-none`}
          >
            <span className="sr-only">Fechar</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="sm:flex sm:items-start">
          <div
            className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${iconWrapper}`}
          >
            <Info className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className={`text-foreground text-base leading-6 font-semibold`}>
              Informação Importante
            </h3>
            <div className="mt-2">
              <p className={`text-sm ${descColor}`}>
                Você está prestes a realizar uma ação que pode impactar outros usuários. Por favor,
                verifique os dados antes de continuar.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
          >
            Confirmar
          </button>
          <button
            type="button"
            className={`mt-3 inline-flex w-full justify-center rounded-md ${secondaryBg} text-foreground px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ${ring} ${hoverSecondary} sm:mt-0 sm:w-auto`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalDestructivePreview() {
  // Modal = Layer 2 (bg-card), Botão secundário = Layer 3 (bg-popover)
  const modalBg = "bg-card";
  const secondaryBg = "bg-popover";
  const ring = "ring-border";
  const descColor = "text-muted-foreground";
  const iconWrapper = "bg-destructive/10";
  const iconColor = "text-destructive";
  const hoverSecondary = "hover:bg-accent";

  return (
    <div className="relative z-10 flex justify-center p-12">
      <div
        className={`relative transform overflow-hidden rounded-lg ${modalBg} border-border border px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`}
      >
        <div className="sm:flex sm:items-start">
          <div
            className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${iconWrapper}`}
          >
            <AlertTriangle className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className={`text-foreground text-base leading-6 font-semibold`}>
              Desativar conta?
            </h3>
            <div className="mt-2">
              <p className={`text-sm ${descColor}`}>
                Tem certeza que deseja desativar sua conta? Todos os seus dados serão removidos
                permanentemente. Esta ação não pode ser desfeita.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
          >
            Desativar
          </button>
          <button
            type="button"
            className={`mt-3 inline-flex w-full justify-center rounded-md ${secondaryBg} text-foreground px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ${ring} ${hoverSecondary} sm:mt-0 sm:w-auto`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ModalPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          {/* Basic */}
          <ComponentShowcase
            title="Informativo"
            description="Modal padrão para confirmações e informações importantes."
            code={modalBasicCode}
          >
            <ModalBasicPreview />
          </ComponentShowcase>

          {/* Destructive */}
          <ComponentShowcase
            title="Destrutivo"
            description="Para ações perigosas ou irreversíveis, use cores de alerta."
            code={modalDestructiveCode}
          >
            <ModalDestructivePreview />
          </ComponentShowcase>

          {/* API Reference */}
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={modalProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
