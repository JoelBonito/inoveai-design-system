# Plano de Correção - Problemas de Acessibilidade

**Data:** 2026-01-02  
**Projeto:** inoveai-design-system  
**Objetivo:** Corrigir 5 problemas identificados nos testes de acessibilidade

---

## 📊 Status dos Testes

| Teste | Resultado | Status |
|-------|-----------|--------|
| Lighthouse | 90/100 | ⚠️ |
| APCA Light Mode | 3/4 | ⚠️ |
| APCA Dark Mode | 2/4 | ❌ |
| Motion Reduce | OK | ✅ |
| Zoom 200% | OK | ✅ |
| E2E (Playwright) | 6/6 | ✅ |

---

## 🎯 Problemas a Corrigir (5)

### 🔴 Prioridade P0 (Crítica)
1. **Border Dark Mode** - Lc 0.0 (invisível)

### 🟠 Prioridade P1 (Alta)
2. **5 Botões sem aria-label** (Lighthouse)
3. **Primary Button Dark Mode** - Lc -52.1

### 🟡 Prioridade P2 (Média)
4. **Border Light Mode** - Lc 9.5

### 🟢 Prioridade P3 (Baixa)
5. **Logo aspect ratio** (warning)

---

## 📋 Plano de Execução

### **Fase 1: Correções CSS** (15 min)

#### Arquivo: `app/globals.css`

**Mudanças:**

```css
/* ===== LIGHT MODE ===== */
:root {
  /* ... cores existentes ... */
  
  /* CORREÇÃO P2: Border Light Mode (Lc 9.5 → ~20) */
  --border: oklch(82% 0.008 264);
  /* ANTES: oklch(89.8% 0.006 264) */
}

/* ===== DARK MODE ===== */
.dark {
  /* ... cores existentes ... */
  
  /* CORREÇÃO P0: Border Dark Mode (Lc 0.0 → ~25) - CRÍTICO */
  --border: oklch(35% 0.020 264);
  /* ANTES: oklch(23% 0.015 264) */
  
  /* CORREÇÃO P1: Primary Dark Mode (Lc -52.1 → ~-65) */
  --primary: oklch(60% 0.18 210);
  /* ANTES: oklch(69% 0.15 210) */
}
```

**Localização exata:**
- Light Mode: Linha ~121-182
- Dark Mode: Linha ~188-250

**Validação:**
```bash
# Build deve passar
npm run build
```

---

### **Fase 2: Correções de Componentes** (10 min)

#### 2.1. Sidebar Toggle (Mobile)

**Arquivo:** `components/site-sidebar.tsx`

**Localização:** Botão de toggle mobile (linha ~135)

**Mudança:**
```tsx
<button
  aria-label="Abrir menu de navegação"
  onClick={() => setIsOpen(!isOpen)}
  className="..."
>
  <Menu className="h-5 w-5" />
</button>
```

---

#### 2.2. Theme Switcher

**Arquivo:** `components/theme-switcher.tsx` ou similar

**Localização:** Botão de alternância de tema

**Mudança:**
```tsx
<button
  aria-label="Alternar tema claro/escuro"
  onClick={toggleTheme}
  className="..."
>
  {theme === 'dark' ? (
    <Sun className="h-5 w-5" />
  ) : (
    <Moon className="h-5 w-5" />
  )}
</button>
```

---

#### 2.3. Copy Buttons (3x)

**Arquivo:** `components/code-block.tsx` ou componente de código

**Localização:** Botões de copiar código

**Mudança:**
```tsx
<button
  aria-label="Copiar código para área de transferência"
  onClick={handleCopy}
  className="..."
>
  {copied ? (
    <Check className="h-4 w-4" />
  ) : (
    <Copy className="h-4 w-4" />
  )}
</button>
```

---

### **Fase 3: Validação** (10 min)

#### 3.1. Build e Testes

```bash
# 1. Build
npm run build

# 2. E2E Tests
npm run test:e2e

# 3. Dev server para testes manuais
npm run dev
```

**Critérios de aceitação:**
- ✅ Build sem erros
- ✅ E2E 6/6 passando
- ✅ Dev server rodando

---

#### 3.2. Re-executar Lighthouse

**Passos:**
1. Abrir Chrome incógnito
2. Navegar para `http://localhost:3000/primitivos/button`
3. F12 → Lighthouse → Accessibility → Analyze

**Meta:** Score ≥ 95/100

**Verificar:**
- ✅ Botões têm nomes acessíveis
- ✅ Contraste de cores aprovado

---

#### 3.3. Re-testar APCA (6 pares)

**Light Mode (4 pares):**
1. Border: `#c5cdd0` / `#f9fafb` → Lc ≥ 20
2. Texto principal: `#111827` / `#f9fafb` → Lc ≥ 101
3. Texto muted: `#6b7280` / `#f9fafb` → Lc ≥ 70
4. Primary button: `#ffffff` / `#457b77` → Lc ≥ -77

**Dark Mode (4 pares):**
1. Border: `#4a5568` / `#13151a` → Lc ≥ 25
2. Texto principal: `#ffffff` / `#13151a` → Lc ≥ -107
3. Texto muted: `#94a3b8` / `#13151a` → Lc ≥ -50
4. Primary button: `#ffffff` / `#0891b2` → Lc ≥ -65

**Meta:** 8/8 pares aprovados

---

## 📁 Arquivos Afetados

### Modificações
1. `app/globals.css` (3 mudanças de cor)
2. `components/site-sidebar.tsx` (1 aria-label)
3. `components/theme-switcher.tsx` (1 aria-label)
4. `components/code-block.tsx` (3 aria-labels)

### Documentação
5. `/docs/refatoracao/task.md` (atualizar progresso)

---

## ⏱️ Cronograma

| Fase | Tarefa | Tempo | Acumulado |
|------|--------|-------|-----------|
| 1 | Editar `globals.css` | 5 min | 5 min |
| 1 | Build + validação visual | 10 min | 15 min |
| 2 | Adicionar aria-labels (5x) | 10 min | 25 min |
| 3 | Build + E2E | 5 min | 30 min |
| 3 | Lighthouse + APCA | 10 min | 40 min |
| **TOTAL** | | **40 min** | |

---

## ✅ Checklist de Execução

### Fase 1: CSS
- [ ] Abrir `app/globals.css`
- [ ] Ajustar `--border` em `:root` (linha ~140)
- [ ] Ajustar `--border` em `.dark` (linha ~220)
- [ ] Ajustar `--primary` em `.dark` (linha ~195)
- [ ] Salvar arquivo
- [ ] `npm run build` (verificar sucesso)

### Fase 2: Componentes
- [ ] `site-sidebar.tsx`: aria-label no toggle
- [ ] `theme-switcher.tsx`: aria-label no botão
- [ ] `code-block.tsx`: aria-label nos 3 copy buttons
- [ ] Salvar todos arquivos
- [ ] `npm run test:e2e` (verificar 6/6)

### Fase 3: Validação
- [ ] `npm run dev`
- [ ] Lighthouse: Score ≥ 95/100
- [ ] APCA Light: 4/4 pares
- [ ] APCA Dark: 4/4 pares
- [ ] Motion Reduce: OK (já validado)
- [ ] Zoom 200%: OK (já validado)

---

## 🎯 Critérios de Sucesso

### Obrigatórios
- ✅ Lighthouse ≥ 95/100
- ✅ APCA 8/8 pares aprovados
- ✅ Build sem erros
- ✅ E2E 6/6 passando

### Desejáveis
- ✅ Lighthouse = 100/100
- ✅ Nenhum warning no console
- ✅ Validação visual aprovada

---

## 🚀 Próximos Passos

Após aprovação deste plano:

1. **Executar Fase 1** (CSS)
2. **Executar Fase 2** (Componentes)
3. **Executar Fase 3** (Validação)
4. **Criar walkthrough.md** (Fase 5 do projeto)
5. **Finalizar refatoração**

---

**Pronto para executar?** Confirme para iniciar as correções.
