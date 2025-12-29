"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useState } from "react";

const modalBasicCode = `<!-- Modal Basic -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"></div>

  <!-- Modal Panel -->
  <div class="relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-slate-200 dark:border-slate-800">
    <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
      <button type="button" class="rounded-md bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-500 focus:outline-none">
        <span class="sr-only">Fechar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-base font-semibold leading-6 text-slate-900 dark:text-white">Informação Importante</h3>
        <div class="mt-2">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Você está prestes a realizar uma ação que pode impactar outros usuários. Por favor, verifique os dados antes de continuar.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Confirmar</button>
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 sm:mt-0 sm:w-auto">Cancelar</button>
    </div>
  </div>
</div>`;

const modalDestructiveCode = `<!-- Modal Destructive -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"></div>
  <div class="relative transform rounded-lg bg-white dark:bg-slate-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-slate-200 dark:border-slate-800">
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-base font-semibold leading-6 text-slate-900 dark:text-white">Desativar conta?</h3>
        <div class="mt-2">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Tem certeza que deseja desativar sua conta? Todos os seus dados serão removidos permanentemente. Esta ação não pode ser desfeita.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Desativar</button>
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 sm:mt-0 sm:w-auto">Cancelar</button>
    </div>
  </div>
</div>`;

const modalProps: PropDefinition[] = [
  {
    name: "isOpen",
    type: "boolean",
    description: "Controla a visibilidade do modal"
  },
  {
    name: "onClose",
    type: "() => void",
    description: "Função chamada ao fechar o modal"
  },
  {
    name: "title",
    type: "string",
    description: "Título do modal"
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Conteúdo do corpo do modal"
  },
  {
    name: "confirmVariant",
    type: "'primary' | 'destructive'",
    description: "Estilo do botão de ação principal"
  },
];

function ModalBasicPreview() {
  const { bg, border, text, isDark } = useThemeClasses();
  const secondaryBg = isDark ? "bg-slate-800" : "bg-white";
  const ring = isDark ? "ring-slate-700" : "ring-slate-300";
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const iconWrapper = isDark ? 'bg-blue-900/30' : 'bg-blue-100';
  const iconColor = isDark ? 'text-blue-400' : 'text-blue-600';
  const hoverSecondary = isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-50';

  return (
    <div className="relative z-10 p-12 flex justify-center">
      {/* Simulation wrapper */}
      <div className={`relative transform overflow-hidden rounded-lg ${bg} px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border ${border}`}>
        <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
          <button type="button" className={`rounded-md ${bg} text-slate-400 hover:text-slate-500 focus:outline-none`}>
            <span className="sr-only">Fechar</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="sm:flex sm:items-start">
          <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${iconWrapper}`}>
            <Info className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className={`text-base font-semibold leading-6 ${text}`}>Informação Importante</h3>
            <div className="mt-2">
              <p className={`text-sm ${descColor}`}>
                Você está prestes a realizar uma ação que pode impactar outros usuários. Por favor, verifique os dados antes de continuar.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Confirmar</button>
          <button type="button" className={`mt-3 inline-flex w-full justify-center rounded-md ${secondaryBg} px-3 py-2 text-sm font-semibold ${text} shadow-sm ring-1 ring-inset ${ring} ${hoverSecondary} sm:mt-0 sm:w-auto`}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

function ModalDestructivePreview() {
  const { bg, border, text, isDark } = useThemeClasses();
  const secondaryBg = isDark ? "bg-slate-800" : "bg-white";
  const ring = isDark ? "ring-slate-700" : "ring-slate-300";
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const iconWrapper = isDark ? 'bg-red-900/30' : 'bg-red-100';
  const iconColor = isDark ? 'text-red-400' : 'text-red-600';
  const hoverSecondary = isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-50';

  return (
    <div className="relative z-10 p-12 flex justify-center">
      <div className={`relative transform overflow-hidden rounded-lg ${bg} px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border ${border}`}>
        <div className="sm:flex sm:items-start">
          <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${iconWrapper}`}>
            <AlertTriangle className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className={`text-base font-semibold leading-6 ${text}`}>Desativar conta?</h3>
            <div className="mt-2">
              <p className={`text-sm ${descColor}`}>
                Tem certeza que deseja desativar sua conta? Todos os seus dados serão removidos permanentemente. Esta ação não pode ser desfeita.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Desativar</button>
          <button type="button" className={`mt-3 inline-flex w-full justify-center rounded-md ${secondaryBg} px-3 py-2 text-sm font-semibold ${text} shadow-sm ring-1 ring-inset ${ring} ${hoverSecondary} sm:mt-0 sm:w-auto`}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default function ModalPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
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
          <div className="pt-12 border-t border-[var(--border)]">
            <PropsTable props={modalProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
