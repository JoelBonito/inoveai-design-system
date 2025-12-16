import { ComponentCard } from "@/components/component-card";
import { FormInput } from "lucide-react";

export default function FormulariosPage() {
    const components = [
        {
            name: "Select",
            description: "Componente de seleção que permite ao usuário escolher uma opção de uma lista.",
            href: "/formularios/select",
        },
        {
            name: "Autocomplete",
            description: "Campo de entrada que oferece sugestões de preenchimento enquanto o usuário digita.",
            href: "/formularios/autocomplete",
        },
        {
            name: "Seletor de Data",
            description: "Componente para seleção interativa de datas e intervalos de tempo.",
            href: "/formularios/date-picker",
        },
        {
            name: "Upload de Arquivo",
            description: "Área para arrastar e soltar ou selecionar arquivos para upload.",
            href: "/formularios/file-upload",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <FormInput size={24} />
                            </div>
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Formulários
                            </h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componentes avançados para captura de dados. Inclui seletores, autocompletes,
                            inputs de data e upload de arquivos.
                        </p>
                    </div>

                    {/* Components Grid */}
                    <section className="py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {components.map((component) => (
                                <ComponentCard
                                    key={component.href}
                                    name={component.name}
                                    description={component.description}
                                    href={component.href}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
