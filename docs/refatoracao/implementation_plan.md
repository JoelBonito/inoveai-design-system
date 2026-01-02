# Plano de Implementação — Refatoração Design System
# Projeto: inoveai-design-system

## Objetivo

Refatorar o projeto `inoveai-design-system` (Stitch Design System Docs) seguindo as melhores práticas 2025:

- 🎨 Migrar cores HEX → OKLCH (uniformidade perceptual)
- 📐 Implementar tokens 3 camadas (W3C DTCG v2025.10)
- 🔧 Melhorar DX/tooling (Prettier, ESLint, .cursorrules)
- ♿ Reforçar acessibilidade (WCAG 2.2 + APCA)

**Meta:** 72/100 → 90+/100

---

## Contexto do Projeto

### Stack Atual
- **Framework:** Next.js 16.0.10 + React 19.2.1
- **Styling:** Tailwind CSS v4 (CSS-first via `@tailwindcss/postcss`)
- **TypeScript:** v5
- **Componentes UI:** 6 componentes base (Button, Badge, Input, Checkbox, Switch, CommandMenu)
- **Testes:** Jest + Playwright E2E
- **Deploy:** Vercel

### Arquivos Chave
```
inoveai-design-system/
├── app/
│   └── globals.css           # 337 linhas — PRINCIPAL ALVO
├── components/ui/            # 6 componentes
├── tailwind.config.ts        # Config v3 legado (não usado)
├── postcss.config.mjs        # v4 PostCSS
├── package.json
└── eslint.config.mjs
```

### Estado Atual do CSS (`app/globals.css`)
- ✅ Tailwind v4 CSS-first (`@import "tailwindcss"`)
- ✅ Dark mode via classe (`.dark`)
- ✅ Sistema de camadas parcial (Layer 1-4)
- ❌ Cores em HEX (#f9fafb, #457b77)
- ❌ Falta Layer 3 (Component tokens)
- ⚠️ Utilities `.glass` usa `[var(--)]` verboso

---

## User Review Required

> [!IMPORTANT]
> **Visual DEVE ser mantido**: Este é um site de documentação com screenshots gerados automaticamente. Qualquer mudança visual impacta os screenshots.

> [!WARNING]
> **VERIFICAÇÃO REALIZADA — Script de Extração**: O arquivo `scripts/extract-all.ts` contém **cores HEX hardcoded** nas linhas 133-140. Estes valores **NÃO afetam** o visual do site (são apenas para `data/tokens.json`), mas devem ser atualizados para consistência.

> [!WARNING]
> **VERIFICAÇÃO REALIZADA — Testes E2E**: Playwright executado com sucesso (6/6 testes passando). Baseline estabelecida antes de qualquer mudança.

> [!CAUTION]
> **Testes E2E (Playwright)**: Podem ter snapshots visuais que precisam atualização após migração OKLCH.

---

## Proposed Changes

### Fase 0: Verificações e Pré-requisitos — ✅ CONCLUÍDA

#### Objetivo
Verificar possíveis breaking changes antes de iniciar refatoração.

---

#### ✅ Verificação 1: Script de Extração

**Arquivo analisado:** `scripts/extract-all.ts`

**Resultado:** Script usa **HEX hardcoded** no objeto `tokens` (linhas 133-140):

```typescript
const tokens = {
    colors: {
        primary: "#2b2bee",           // ← HEX hardcoded
        "background-light": "#f6f6f8",
        "background-dark": "#111118",
        "surface-dark": "#1C1C26",
        "border-dark": "#282839",
        "text-secondary": "#9d9db9",
        surface: "#1c1c27",
        "surface-border": "#282839",
    },
    // ...
};
```

**Impacto:** ⚠️ **BAIXO**
- Script **não extrai** cores do CSS, apenas gera JSON estático
- Mudança de `globals.css` para OKLCH **NÃO quebra** o script
- Cores no `tokens.json` devem ser atualizadas manualmente (Fase 5)

**Ação Necessária:**
- Nenhuma antes da implementação (script funciona independente)
- Atualizar `tokens.json` na Fase 5 (Cleanup)

---

#### ✅ Verificação 2: Testes E2E (Playwright)

**Comando executado:**
```bash
npm run test:e2e
```

**Resultado:** ✅ **TODOS PASSANDO**
```
Running 6 tests using 4 workers
  6 passed (17.6s)
```

**Baseline estabelecida:** Snapshots atuais salvos antes de qualquer mudança.

**Impacto:** ⚠️ **MÉDIO** (esperado)
- Após migração OKLCH, testes visuais podem falhar
- Snapshots precisarão ser atualizados com `--update-snapshots`

**Ação Necessária:**
- Rodar testes novamente após Fase 2 (OKLCH)
- Validar visualmente diffs antes de atualizar

---

### Fase 1: Quick Wins (DX Tooling) — 2-3h

#### Objetivo
Melhorar experiência de desenvolvimento com ferramentas de formatação e lint.

---

#### [NEW] [.prettierrc](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/.prettierrc)

**Conteúdo:**
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./app/globals.css",
  "tailwindFunctions": ["cn", "cva"]
}
```

---

#### [NEW] [.cursorrules](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/.cursorrules)

**Conteúdo:** Copiar de `/Users/macbookdejoel/Documents/PROJETOS/gestion-chs/.cursorrules` e adaptar para:
- Nome do projeto: "Stitch Design System Docs"
- Estrutura: Next.js App Router (não Vite)
- Componentes: 6 base components (não 54 shadcn)

---

#### [MODIFY] [package.json](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/package.json)

**Adicionar dependências:**
```json
"devDependencies": {
  // ... existentes ...
  "prettier": "^3.4.2",
  "prettier-plugin-tailwindcss": "^0.6.11",
  "eslint-plugin-tailwindcss": "^3.18.3"
}
```

**Adicionar scripts:**
```json
"scripts": {
  // ... existentes ...
  "format": "prettier --write \"**/*.{ts,tsx,css,json,md}\"",
  "format:check": "prettier --check \"**/*.{ts,tsx,css,json,md}\""
}
```

---

#### [MODIFY] [eslint.config.mjs](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/eslint.config.mjs)

**Adicionar plugin Tailwind:**
```js
import tailwindcss from 'eslint-plugin-tailwindcss'

export default [
  // ... config existente ...
  {
    plugins: {
      tailwindcss
    },
    rules: {
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    }
  }
]
```

---

#### [DELETE] [tailwind.config.ts](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/tailwind.config.ts)

**Ação:** Renomear `tailwind.config.ts` → `tailwind.config.ts.bak`

**Justificativa:** Tailwind v4 ignora este arquivo em favor de `@theme` no CSS.

---

### Fase 2: Migração OKLCH (Cores) — 4-6h

#### Objetivo
Converter todas as cores de HEX para OKLCH, melhorando uniformidade perceptual e expandindo gamut para P3.

---

#### [MODIFY] [app/globals.css](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/app/globals.css)

**Seção @theme (linhas 78-109):**

Substituir:
```css
/* ANTES */
--color-brand-teal: #457b77;
--color-nav-dashboard: #3b82f6;
--color-nav-projects: #f59e0b;
--color-nav-clients: #10b981;
--color-nav-finance: #059669;
--color-nav-reports: #8b5cf6;
--color-nav-settings: #64748b;
--color-nav-bugs: #f43f5e;
```

Por:
```css
/* DEPOIS */
--color-teal-600: oklch(47.97% 0.089 195.68);
--color-cyan-500: oklch(76.53% 0.096 196.73);

--color-nav-dashboard: oklch(59% 0.202 254);
--color-nav-projects: oklch(75% 0.15 75);
--color-nav-clients: oklch(65% 0.164 160);
--color-nav-finance: oklch(58% 0.15 167);
--color-nav-reports: oklch(60% 0.184 299);
--color-nav-settings: oklch(52% 0.02 250);
--color-nav-bugs: oklch(57% 0.211 15);
```

---

**Seção :root Light Mode (linhas 112-173):**

Substituir:
```css
/* ANTES */
--background: #f9fafb;
--foreground: #111827;
--card: #f1f2f4;
--popover: #ffffff;
--primary: #457b77;
--primary-foreground: #FFFFFF;
--muted-foreground: #6B7280;
--border: #e0e7e6;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

Por:
```css
/* DEPOIS */
--background: oklch(98% 0.005 250);
--foreground: oklch(25% 0.015 250);
--card: oklch(96% 0.005 250);
--popover: oklch(100% 0 0);
--primary: oklch(47.97% 0.089 195.68);
--primary-foreground: oklch(100% 0 0);
--muted-foreground: oklch(55% 0.015 250);
--border: oklch(92% 0.008 250);
--success: oklch(65% 0.164 160);
--warning: oklch(75% 0.15 75);
--error: oklch(58% 0.217 29);
--info: oklch(59% 0.202 254);
```

---

**Seção .dark Dark Mode (linhas 175-228):**

Substituir:
```css
/* ANTES */
--background: #13151a;
--foreground: #FFFFFF;
--card: #1c202a;
--popover: #252a36;
--primary: #06b6d4;
--accent: #2d3342;
--border: #2d3342;
```

Por:
```css
/* DEPOIS */
--background: oklch(11% 0.01 250);
--foreground: oklch(100% 0 0);
--card: oklch(15% 0.015 250);
--popover: oklch(18% 0.018 250);
--primary: oklch(76.53% 0.096 196.73);
--accent: oklch(22% 0.02 250);
--border: oklch(22% 0.02 250);
```

**Tabela completa de conversão:** Ver `03B_THEME_INOVE_AI.md` linhas 30-70 para todas as cores.

---

### Fase 3: Tokens Layer 3 (Component) — 3-4h

#### Objetivo
Adicionar tokens específicos de componente conforme W3C DTCG v2025.10 Layer 3.

---

#### [MODIFY] [app/globals.css](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/app/globals.css)

**Adicionar APÓS linha 172 (antes do `.dark {`):**

```css
  /* ===== LAYER 3: COMPONENT TOKENS ===== */
  
  /* Buttons */
  --button-primary-bg: var(--primary);
  --button-primary-fg: var(--primary-foreground);
  --button-primary-hover: oklch(from var(--primary) calc(l - 5%) c h);
  
  --button-destructive-bg: var(--error);
  --button-destructive-fg: oklch(100% 0 0);
  
  /* Badge */
  --badge-default-bg: var(--muted);
  --badge-default-fg: var(--muted-foreground);
  --badge-primary-bg: var(--primary);
  --badge-primary-fg: var(--primary-foreground);
  
  /* Input */
  --input-bg: var(--background);
  --input-border: var(--border);
  --input-border-focus: var(--primary);
  --input-ring-focus: oklch(from var(--primary) l c h / 0.2);
  
  /* Checkbox/Switch */
  --checkbox-checked-bg: var(--primary);
  --checkbox-checked-fg: var(--primary-foreground);
```

**Adicionar APÓS linha 227 (dentro do `.dark`):**

```css
  /* ===== LAYER 3: COMPONENT TOKENS (Dark) ===== */
  
  --button-primary-hover: oklch(from var(--primary) calc(l - 5%) c h);
```

---

### Fase 4: Acessibilidade e Motion — 2-3h

#### Objetivo
Garantir conformidade WCAG 2.2 e respeitar preferências de motion.

---

#### [MODIFY] [app/globals.css](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/app/globals.css)

**Adicionar na seção `@layer utilities` (após linha 336):**

```css
  /* Motion Accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
```

**OU usar classes Tailwind v4:**

```tsx
// Exemplo: componentes com animação
<div className="animate-fade-in motion-reduce:animate-none">
```

---

#### [MODIFY] [components/ui/button.tsx](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/components/ui/button.tsx)

**Adicionar `touch-action` para prevenir duplo-tap em mobile:**

```tsx
// Linha ~X do buttonVariants cva
const buttonVariants = cva(
  "inline-flex items-center ... touch-action-manipulation", // ADICIONAR
  // ...
)
```

---

### Fase 5: Cleanup e Documentação — 1-2h

#### Objetivo
Remover código duplicado e atualizar documentação.

---

#### [MODIFY] [app/globals.css](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/app/globals.css)

**Remover tokens duplicados `--surface` (linhas 144-145 e 207-208):**

```css
/* REMOVER */
/* --surface: #f1f2f4; */
/* --surface-elevated: #ffffff; */
```

**Substituir usage nos utilities `.glass` e `.tabs-scroll`:**

```css
/* Linha 259 - ANTES */
.glass {
  @apply bg-[var(--surface)]/40 backdrop-blur-md border border-[var(--border)];
}

/* DEPOIS */
.glass {
  @apply bg-card/40 backdrop-blur-md border border-border;
}

/* Linha 310 - ANTES */
background: linear-gradient(to right, var(--surface), transparent);

/* DEPOIS */
background: linear-gradient(to right, var(--card), transparent);
```

---

#### [MODIFY] [README.md](file:///Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system/README.md)

**Atualizar linha 23:**

```markdown
<!-- ANTES -->
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)

<!-- DEPOIS -->
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first, OKLCH colors)
```

**Adicionar seção:**

```markdown
## 🎨 Design System (v6.0)

This project follows the **INOVE AI Design System (GEMS 6.0)** with:
- ✅ OKLCH color space (uniformidade perceptual)
- ✅ 3-layer tokens (W3C DTCG v2025.10)
- ✅ WCAG 2.2 + APCA validated contrast
- ✅ Tailwind v4 CSS-first architecture

See [`03_DESIGN_SYSTEM.md`](../knowledge_base/03_DESIGN_SYSTEM.md) for full documentation.
```

---

## Verification Plan

### Automated Tests

#### 1. TypeScript Type Check
```bash
cd /Users/macbookdejoel/Documents/PROJETOS/inoveai-design-system
npm run build
```
**Critério de Sucesso:** Build sem erros TypeScript.

---

#### 2. ESLint
```bash
npm run lint
```
**Critério de Sucesso:** Sem erros ESLint. Warnings aceitáveis se documentados.

---

#### 3. Prettier Format Check
```bash
npm run format:check
```
**Critério de Sucesso:** Todos arquivos formatados corretamente.

---

#### 4. Unit Tests (Se existirem)
```bash
npm test
```
**Critério de Sucesso:** Todos testes passando.

---

#### 5. E2E Tests (Playwright)
```bash
npm run test:e2e
```

**⚠️ ATENÇÃO:** Snapshots visuais provavelmente falharão após migração OKLCH.

**Ação:** Executar comando de atualização de screenshots:
```bash
npm run test:e2e -- --update-snapshots
```

**Critério de Sucesso:** Testes passam após atualizar snapshots.

---

### Manual Verification

#### 1. Visual Regression (Light Mode)

**Passos:**
1. Executar `npm run dev`
2. Abrir `http://localhost:3000`
3. Verificar páginas principais:
   - [ ] Home (Component Gallery)
   - [ ] `/tokens` (Design Tokens)
   - [ ] `/colors` (Palette)
   - [ ] `/icons` (Icon Browser)
   - [ ] `/accessibility` (A11y Tools)
4. **Screenshot ANTES da migração:** Tirar prints de cada página
5. **Aplicar migração OKLCH**
6. **Screenshot DEPOIS da migração:** Tirar prints novamente
7. **Comparar side-by-side:** Visual deve ser **idêntico** ou **melhorado** (contraste)

---

#### 2. Visual Regression (Dark Mode)

**Passos:**
1. Alternar para Dark Mode (botão theme switcher)
2. Repetir passos do item 1
3. Validar que cores escuras mantêm hierarquia

---

#### 3. Contraste APCA

**Ferramenta:** [APCA Calculator](https://www.myndex.com/APCA/)

**Pares a validar:**

| Par | Light Mode | Dark Mode | Lc Mínimo |
|-----|------------|-----------|-----------|
| Texto principal | foreground/background | foreground/background | 60+ |
| Texto muted | muted-foreground/background | muted-foreground/background | 45+ |
| Botão primary | primary-foreground/primary | primary-foreground/primary | 60+ |
| Border | border/background | border/background | 45+ |

**Critério:** Todos pares devem passar validação APCA.

---

#### 4. Navegação por Teclado

**Passos:**
1. Abrir `http://localhost:3000`
2. Pressionar `Tab` repetidamente
3. Verificar:
   - [ ] Focus ring visível em todos elementos interativos
   - [ ] Ordem de tabulação lógica
   - [ ] `Cmd+K` abre Command Menu
   - [ ] `Escape` fecha modals/comandos

---

#### 5. Screen Reader (Opcional)

**macOS VoiceOver:**
```bash
# Ativar VoiceOver
Cmd + F5

# Navegar pelo site
Control + Option + Setas
```

**Verificar:**
- [ ] Botões icon-only têm labels (`sr-only`)
- [ ] Headings hierárquicos (h1 → h2 → h3)
- [ ] Landmarks (`<nav>`, `<main>`, `<aside>`)

---

## Riscos e Mitigações

### Risco 1: Screenshots Automatizados Quebram

**Probabilidade:** Alta  
**Impacto:** Médio

**Mitigação:**
- Verificar `scripts/extract-all.ts` antes de migrar
- Se usa regex de HEX, atualizar para aceitar OKLCH
- Rodar extração após migração:
  ```bash
  npx tsx scripts/extract-all.ts
  ```

---

### Risco 2: Playwright Snapshots Falham

**Probabilidade:** Alta  
**Impacto:** Baixo (esperado)

**Mitigação:**
- Atualizar snapshots com `--update-snapshots`
- Revisar diff visualmente antes de aceitar

---

### Risco 3: Contraste Piorou em Algum Par

**Probabilidade:** Baixa  
**Impacto:** Alto

**Mitigação:**
- Validar APCA **antes** de merge
- Se algum par falhar, ajustar lightness (L) em OKLCH
- Exemplo: `oklch(60% 0.15 200)` → `oklch(65% 0.15 200)` (mais claro)

---

### Risco 4: Visual Mudou Inesperadamente

**Probabilidade:** Baixa  
**Impacto:** Alto

**Mitigação:**
- Screenshots antes/depois comparados lado a lado
- Se houver mudança, validar se é **melhoria** (contraste) ou **regressão**
- Regressão → ajustar valores OKLCH

---

## Rollback Plan

Se algo der errado drasticamente:

```bash
# Reverter último commit
git reset --hard HEAD~1

# OU criar branch de backup antes
git checkout -b backup-pre-oklch
git checkout main
# ... fazer migração ...
# Se erro:
git checkout backup-pre-oklch
```

---

## Timeline Estimado

| Fase | Duração | Dependências |
|------|---------|--------------|
| 1. Quick Wins | 2-3h | Nenhuma |
| 2. OKLCH | 4-6h | Fase 1 (Prettier instalado) |
| 3. Layer 3 | 3-4h | Fase 2 (cores migradas) |
| 4. A11y | 2-3h | Nenhuma (paralelo) |
| 5. Cleanup | 1-2h | Fases 2-4 |

**Total:** 12-18 horas

**Prazo Sugerido:** 2 semanas (1h/dia)

---

## Next Steps After Approval

1. Criar branch `refactor/design-system-v6`
2. Implementar Fase 1 (Quick Wins)
3. Commit: `feat: add prettier and eslint tailwind plugins`
4. Implementar Fase 2 (OKLCH)
5. Commit: `refactor: migrate color palette to OKLCH`
6. Validar visualmente antes de continuar
7. Implementar Fases 3-5
8. Executar Verification Plan completo
9. Criar PR com screenshots antes/depois
10. Merge após aprovação
