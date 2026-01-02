# Refatoração Design System — inoveai-design-system

## Objetivo
Refatorar o projeto `inoveai-design-system` (Stitch Design System Docs) seguindo as melhores práticas 2025:
- ✅ Migrar cores HEX para OKLCH
- ✅ Implementar tokens 3 camadas (W3C DTCG)
- ✅ Melhorar DX/tooling (Prettier, ESLint plugins)
- ✅ Reforçar acessibilidade (WCAG 2.2 + APCA)

**Meta:** 72/100 → 90+/100

---

## Checklist de Implementação

### Fase 0: Verificações Pré-requisitos — ✅ CONCLUÍDA
- [x] Verificar script `extract-all.ts` para breaking changes
- [x] Executar testes E2E baseline (6/6 passando)
- [x] Documentar achados no implementation_plan.md

**Resultado:**
- ✅ Script usa HEX hardcoded mas não quebra (apenas gera JSON estático)
- ✅ Testes E2E passando (baseline estabelecida)

---

### Fase 1: Quick Wins (DX Tooling) — ✅ CONCLUÍDA
- [x] Instalar `prettier-plugin-tailwindcss`
- [x] Criar `.prettierrc` configurado
- [x] Renomear `tailwind.config.ts` → `.bak` (já está em v4)
- [ ] ~~Instalar `eslint-plugin-tailwindcss`~~ (incompatível com Tailwind v4)
- [ ] ~~Adicionar regras ESLint Tailwind~~ (aguardando compatibilidade v4)
- [x] Criar `.cursorrules` específico do projeto
- [x] Adicionar scripts `format` e `format:check` ao `package.json`
- [x] Formatar código com Prettier (76 arquivos formatados)

**Nota:** `eslint-plugin-tailwindcss@3.18.2` ainda requer Tailwind v3.4 (peer dependency conflict). Será adicionado quando houver versão compatível com v4.

---

### Fase 2: Migração OKLCH (Cores) — ✅ CONCLUÍDA
- [x] Converter paleta Light Mode (25+ cores)
- [x] Converter paleta Dark Mode (20+ cores)
- [x] Converter cores de navegação (7 cores)
- [x] Converter brand colors (4 cores)
- [x] Converter status colors (4 cores)
- [x] Build passando ✅
- [x] Testes E2E passando (6/6) ✅

**Resultado:**
- 60+ cores convertidas de HEX → OKLCH
- Build: ✅ Compilado em 4.3s
- Testes: ✅ 6/6 passando (5.0s)
- Backup criado: `app/globals.css.backup-hex`

---

### Fase 3: Tokens Layer 3 (Component) — ✅ CONCLUÍDA
- [x] Adicionar tokens de Button (6 tokens)
- [x] Adicionar tokens de Badge (7 tokens)
- [x] Adicionar tokens de Input (5 tokens)
- [x] Adicionar tokens de Card (4 tokens)
- [x] Adicionar tokens de Checkbox/Switch (5 tokens)
- [x] Adicionar tokens de Dialog/Modal (4 tokens)
- [x] Build passando ✅

**Resultado:**
- 31 tokens Layer 3 adicionados
- Seguindo W3C DTCG v2025.10
- Usando `oklch(from var(...) calc(...))` para hover states
- Build: ✅ Compilado em 4.2s

---

### Fase 4: Acessibilidade e Motion — ✅ CONCLUÍDA
- [x] Adicionar `motion-reduce:animate-none` em animações
- [x] Adicionar utility class `.sr-only`
- [x] Verificar focus-visible em componentes UI (✅ Button já tem)
- [x] Adicionar `touch-action: manipulation` em botões/links
- [x] Adicionar regra global de motion-reduce
- [x] Build passando ✅

**Resultado:**
- ✅ `.sr-only` utility class adicionada
- ✅ `touch-action: manipulation` em todos botões/links
- ✅ `@media (prefers-reduced-motion)` global implementado
- ✅ Transições respeitam preferência de motion
- ✅ Button já tem `focus-visible:ring-2`
- Build: ✅ Compilado em 4.2s

#### Correções Aplicadas (2026-01-02):
- [x] **Border Light Mode**: `oklch(92%→82%)` — Lc 9.5→~20 ✅
- [x] **Border Dark Mode**: `oklch(32%→42%)` — Lc 0.0→~25 ✅  
- [x] **Primary Dark Mode**: `oklch(71%→60%)` — Lc -52.1→~-65 ✅
- [x] **5 aria-labels** adicionados (sidebar, theme, copy buttons) ✅
- [x] Build passando ✅
- [x] E2E 6/6 passando ✅

---

### Fase 5: Cleanup e Documentação — 1-2h
- [ ] Remover tokens `--surface` duplicados
- [ ] Consolidar utilities `.glass`
- [ ] Atualizar `README.md` com v6.0
- [ ] Adicionar CHANGELOG.md
- [ ] Criar guia de contribuição

---

## Notas
- **Projeto:** Website de documentação do Stitch Design System
- **Framework:** Next.js 16 + React 19 + Tailwind v4
- **Componentes:** 6 componentes UI base (Button, Badge, Input, Checkbox, Switch, CommandMenu)
- **Publicação:** Vercel (otimizado)
- **Visual:** Manter aparência atual, apenas melhorar contraste e gamut
