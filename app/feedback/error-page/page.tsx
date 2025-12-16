"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";
import { AlertCircle, Lock, ArrowLeft } from "lucide-react";

const error404Code = `<!-- Error 404 -->
<div class="flex min-h-[400px] flex-col items-center justify-center text-center px-6">
  <p class="text-base font-semibold text-blue-600 dark:text-blue-400">404</p>
  <h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Página não encontrada</h1>
  <p class="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
    Desculpe, não conseguimos encontrar a página que você está procurando.
  </p>
  <div class="mt-10 flex items-center justify-center gap-x-6">
    <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      Voltar ao início
    </a>
    <a href="#" class="text-sm font-semibold text-slate-900 dark:text-white hover:underline">
      Fale com o suporte <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</div>`;

const error403Code = `<!-- Error 403 -->
<div class="flex min-h-[400px] flex-col items-center justify-center text-center px-6 border-2 border-dashed border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 rounded-xl">
  <div class="rounded-full bg-red-100 dark:bg-red-900/20 p-4 mb-4">
    <svg class="size-8 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  </div>
  <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Acesso Negado</h1>
  <p class="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
    Você não tem permissão para acessar este recurso. Entre em contato com seu administrador se acredita que isso é um erro.
  </p>
  <div class="mt-8">
    <button type="button" class="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500">
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Voltar para a página anterior
    </button>
  </div>
</div>`;

const errorPageProps: PropDefinition[] = [
    {
        name: "code",
        type: "number",
        description: "Código de erro (404, 500, etc.)"
    },
    {
        name: "title",
        type: "string",
        description: "Título principal do erro"
    },
    {
        name: "description",
        type: "string",
        description: "Explicação amigável do problema"
    },
    {
        name: "actions",
        type: "ReactNode",
        description: "Botões de navegação para recuperação"
    },
];

function Error404Preview() {
    const { text } = useThemeClasses();
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center px-6">
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400">404</p>
            <h1 className={`mt-4 text-3xl font-bold tracking-tight ${text} sm:text-5xl`}>Página não encontrada</h1>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
                Desculpe, não conseguimos encontrar a página que você está procurando.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Voltar ao início
                </a>
                <a href="#" className={`text-sm font-semibold ${text} hover:underline`}>
                    Fale com o suporte <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}

function Error403Preview() {
    const { isDark, text } = useThemeClasses();
    const bg = isDark ? "bg-red-900/10 border-red-900/30" : "bg-red-50 border-red-200";

    return (
        <div className={`flex min-h-[300px] flex-col items-center justify-center text-center px-6 border-2 border-dashed rounded-xl ${bg}`}>
            <div className={`rounded-full p-4 mb-4 ${isDark ? 'bg-red-900/20' : 'bg-red-100'}`}>
                <Lock className={`size-8 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
            </div>
            <h1 className={`text-2xl font-bold tracking-tight ${text}`}>Acesso Negado</h1>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
                Você não tem permissão para acessar este recurso. Entre em contato com seu administrador se acredita que isso é um erro.
            </p>
            <div className="mt-8">
                <button type="button" className={`inline-flex items-center gap-2 text-sm font-medium ${isDark ? 'text-red-400' : 'text-red-600'} hover:opacity-80`}>
                    <ArrowLeft className="size-4" />
                    Voltar para a página anterior
                </button>
            </div>
        </div>
    );
}

export default function ErrorPagePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Página de Erro
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Feedback
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Páginas dedicadas para comunicar falhas críticas, como páginas não encontradas (404) ou erros de servidor (500).
                        </p>
                    </div>

                    {/* 404 */}
                    <ComponentShowcase
                        title="Erro 404 (Not Found)"
                        description="Padrão para rotas inexistentes."
                        code={error404Code}
                        previewClassName="bg-white dark:bg-slate-900"
                    >
                        <Error404Preview />
                    </ComponentShowcase>

                    {/* 403 */}
                    <ComponentShowcase
                        title="Erro 403 (Acesso Negado)"
                        description="Variação visual para erros de permissão."
                        code={error403Code}
                        previewClassName="bg-white dark:bg-slate-900"
                    >
                        <Error403Preview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={errorPageProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
