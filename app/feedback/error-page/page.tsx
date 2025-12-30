"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { AlertCircle, Lock, ArrowLeft } from "lucide-react";

const error404Code = `<!-- Error 404 -->
<div class="flex min-h-[400px] flex-col items-center justify-center text-center px-6">
  <p class="text-base font-semibold text-primary">404</p>
  <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Página não encontrada</h1>
  <p class="mt-6 text-base leading-7 text-muted-foreground">
    Desculpe, não conseguimos encontrar a página que você está procurando.
  </p>
  <div class="mt-10 flex items-center justify-center gap-x-6">
    <a href="#" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      Voltar ao início
    </a>
    <a href="#" class="text-sm font-semibold text-foreground hover:underline">
      Fale com o suporte <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</div>`;

const error403Code = `<!-- Error 403 -->
<div class="flex min-h-[400px] flex-col items-center justify-center text-center px-6 border-2 border-dashed border-destructive/30 bg-destructive/5 rounded-xl">
  <div class="rounded-full bg-destructive/10 p-4 mb-4">
    <svg class="size-8 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  </div>
  <h1 class="text-2xl font-bold tracking-tight text-foreground">Acesso Negado</h1>
  <p class="mt-2 text-base text-muted-foreground max-w-md">
    Você não tem permissão para acessar este recurso. Entre em contato com seu administrador se acredita que isso é um erro.
  </p>
  <div class="mt-8">
    <button type="button" class="inline-flex items-center gap-2 text-sm font-medium text-destructive hover:text-destructive/80">
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
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center px-6">
            <p className="text-base font-semibold text-primary">404</p>
            <h1 className={`mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl`}>Página não encontrada</h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
                Desculpe, não conseguimos encontrar a página que você está procurando.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
                    Voltar ao início
                </a>
                <a href="#" className="text-sm font-semibold text-foreground hover:underline">
                    Fale com o suporte <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}

function Error403Preview() {
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center px-6 border-2 border-dashed border-destructive/30 rounded-xl bg-destructive/5">
            <div className="rounded-full p-4 mb-4 bg-destructive/10">
                <Lock className="size-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Acesso Negado</h1>
            <p className="mt-2 text-base text-muted-foreground max-w-md">
                Você não tem permissão para acessar este recurso. Entre em contato com seu administrador se acredita que isso é um erro.
            </p>
            <div className="mt-8">
                <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-destructive hover:text-destructive/80">
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
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* 404 */}
                    <ComponentShowcase
                        title="Erro 404 (Not Found)"
                        description="Padrão para rotas inexistentes."
                        code={error404Code}
                    >
                        <Error404Preview />
                    </ComponentShowcase>

                    {/* 403 */}
                    <ComponentShowcase
                        title="Erro 403 (Acesso Negado)"
                        description="Variação visual para erros de permissão."
                        code={error403Code}
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
