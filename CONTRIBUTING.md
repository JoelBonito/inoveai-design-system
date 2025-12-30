# Guia de Contribuição - Design System GEMS 5.0

## 🎯 Bem-vindo!

Obrigado por contribuir com o Design System Inove AI! Este guia garante que todas as contribuições sigam o padrão GEMS 5.0.

---

## 📋 Regras Fundamentais (GEMS 5.0)

### Lei #4: Use SEMPRE Tokens do Design System

❌ **NUNCA faça:**
```tsx
// Cores hardcoded
<div className="bg-slate-900 text-slate-400border-slate-300">
  
// useThemeClasses() (deprecated)
const { bg, text } = useThemeClasses();
<div className={`${bg} ${text}`}>
```

✅ **SEMPRE faça:**
```tsx
// Tokens semânticos
<div className="bg-background text-muted-foreground border-border">
  
// Tokens diretos
<div className="bg-card text-foreground">
```

---

## 🎨 Tokens Disponíveis

### Backgrounds
- `bg-background` - Fundo principal
- `bg-card` - Cards/containers
- `bg-muted` - Fundos secundários (inputs, sidebars)
- `bg-accent` - Hover states
- `bg-popover` - Popovers,  tooltips

### Text
- `text-foreground` - Texto principal
- `text-muted-foreground` - Texto secundário
- `text-destructive` - Texto de erro

### Borders
- `border-border` - Bordas padrão
- `ring-border` - Rings de foco

### Estados
- `hover:bg-accent` - Hover padrão
- `hover:text-foreground` - Hover de texto
- `focus:ring-primary` - Foco

---

## 🚀 Workflow de Contribuição

### 1. Antes de Começar

```bash
# Clone o repositório
git clone [repo-url]
cd inoveai-design-system

# Instale dependências
npm install

# Rode o dev server
npm run dev
```

### 2. Criar Branch

```bash
# Feature
git checkout -b feature/nome-do-componente

# Fix
git checkout -b fix/correcao-bug

# Refactor
git checkout -b refactor/melhoria-codigo
```

### 3. Desenvolver

**Checklist antes de commitar:**
- [ ] Usei apenas tokens semânticos (sem `slate-*`, `gray-*`, etc.)?
- [ ] Não usei `useThemeClasses()` deprecated?
- [ ] Testei em Dark e Light mode?
- [ ] Componente é acessível (WCAG 2.1 AA)?
- [ ] Adicionei JSDoc/comentários?

### 4. Testar

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Build
npm run build
```

### 5. Commit

Use Conventional Commits:

```bash
# Features
git commit -m "feat(button): adiciona variante outline"

# Fixes
git commit -m "fix(input): corrige foco em dark mode"

# Refactor
git commit -m "refactor(card): migra para tokens GEMS 5.0"

# Docs
git commit -m "docs(readme): atualiza guia de instalação"
```

### 6. Pull Request

**Template de PR:**
```markdown
## 📝 Descrição
[Descreva o que foi alterado e por quê]

## ✅ Checklist GEMS 5.0
- [ ] Usei tokens semânticos (sem cores hardcoded)
- [ ] Não usei `useThemeClasses()`
- [ ] Testei em Dark/Light mode
- [ ] Passei em todos os checks do CI
- [ ] Atualizei documentação se necessário

## 📸 Screenshots
[Se relevante, adicione prints antes/depois]

## 🧪 Como Testar
1. ...
2. ...
```

---

## 🛠️ Estrutura de Componentes

### Anatomia de um Componente

```tsx
// app/[categoria]/[componente]/page.tsx

"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

// 1. Code Snippets (HTML com tokens)
const componentBasicCode = `<!-- Componente Basic -->
<div class="bg-card border border-border rounded-lg p-4">
  <h3 class="text-foreground font-semibold">Título</h3>
  <p class="text-muted-foreground text-sm">Descrição</p>
</div>`;

// 2. Props Definition
const componentProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "outline"',
    defaultValue: '"default"',
    description: "Variação visual do componente"
  }
];

// 3. Preview Component (React com tokens diretos)
function ComponentPreview() {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="text-foreground font-semibold">Título</h3>
      <p className="text-muted-foreground text-sm">Descrição</p>
    </div>
  );
}

// 4. Page Export
export default function ComponentPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <ComponentShowcase
            title="Título do Showcase"
            description="Descrição"
            code={componentBasicCode}
          >
            <ComponentPreview />
          </ComponentShowcase>

          <div className="pt-12 border-t border-[var(--border)]">
            <PropsTable props={componentProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
```

---

## ⚠️ Exceções

Consulte [`docs/EXCECOES_GEMS.md`](./EXCECOES_GEMS.md) para exceções aprovadas.

**Para propor nova exceção:**
1. Abra issue com template "Nova Exceção GEMS 5.0"
2. Justifique tecnicamente
3. Aguarde aprovação do Design System Lead

---

## 🔍 CI/CD Checks

Nosso CI verifica automaticamente:

✅ **Conformidade GEMS 5.0**
- Cores hardcoded (< 6 exceções válidas)
- Uso de `useThemeClasses()` (deve ser 0)
- ESLint com regras customizadas

✅ **Build**
- Type check passa
- Build production sem erros

✅ **Testes**
- Todos os testes passam
- Coverage > 80% (se aplicável)

---

## 📚 Recursos

- **GEMS 5.0 Completo:** `~/.gemini/knowledge_base/03_DESIGN_SYSTEM.md`
- **Tema Inove AI:** `~/.gemini/knowledge_base/03B_THEME_INOVE_AI.md`
- **Exceções Válidas:** `docs/EXCECOES_GEMS.md`
- **Storybook:** (em desenvolvimento)

---

## 🆘 Precisa de Ajuda?

- **Slack:** #design-system
- **Email:** design-system@inove.ai
- **Issues:** [GitHub Issues](repo-url/issues)

---

## 🎉 Obrigado!

Sua contribuição ajuda a manter nosso Design System consistente e de alta qualidade!
