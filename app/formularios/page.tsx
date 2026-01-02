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
      description:
        "Campo de entrada que oferece sugestões de preenchimento enquanto o usuário digita.",
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
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="border-b border-[var(--border)] pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                <FormInput size={24} />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)]">
                Formulários
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Componentes avançados para captura de dados. Inclui seletores, autocompletes, inputs
              de data e upload de arquivos.
            </p>
          </div>

          {/* Components Grid */}
          <section className="py-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
