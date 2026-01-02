# Lighthouse - Resultado de Acessibilidade

**Data:** 2026-01-02  
**Página testada:** `/primitivos/button`  
**Score Acessibilidade:** **90/100** ✅

---

## 📊 Resumo Geral

| Categoria | Score | Status |
|-----------|-------|--------|
| **Accessibility** | 90/100 | ✅ Aprovado |
| **Best Practices** | 96/100 | ✅ Excelente |
| **SEO** | 100/100 | ✅ Perfeito |

---

## ❌ Problemas Críticos (2)

### 1. **Botões sem nome acessível** (Critical)

**5 botões** não têm `aria-label`, texto interno ou título:

| Botão | Localização | Problema |
|-------|-------------|----------|
| 1 | Sidebar toggle (mobile) | Sem label |
| 2 | Theme switcher | Sem label |
| 3-5 | Botões de código (copy) | Sem label |

**Impacto:** Screen readers anunciam apenas "button", sem contexto.

**Correção necessária:**
```tsx
// Exemplo para theme switcher
<button aria-label="Alternar tema">
  <Sun className="h-5 w-5" />
</button>

// Exemplo para copy button
<button aria-label="Copiar código">
  <Copy className="h-4 w-4" />
</button>
```

---

### 2. **Contraste de cor insuficiente** (Serious)

**1 elemento** com contraste baixo:

| Elemento | Cores | Contraste | Mínimo |
|----------|-------|-----------|--------|
| "Design System" (sidebar) | `#6b727a` / `#eff2f5` | 4.33:1 | 4.5:1 |

**Impacto:** Texto difícil de ler para usuários com baixa visão.

**Correção:** Ajustar `--sidebar-foreground` no Light Mode para aumentar contraste.

---

## ⚠️ Problemas Menores

### 3. **Aspect ratio de imagem** (Minor)

Logo `inove-logo.png` tem aspect ratio incorreto:
- **Exibido:** 64x64 (1.00)
- **Real:** 971x1024 (0.95)

**Correção:** Usar dimensões corretas ou recortar imagem.

---

## ✅ O Que Passou (Principais)

| Auditoria | Status |
|-----------|--------|
| ✅ ARIA attributes válidos | Passou |
| ✅ Heading hierarchy (h1→h2→h3) | Passou |
| ✅ HTML tem `lang="en"` | Passou |
| ✅ Imagens têm `alt` text | Passou |
| ✅ Links têm nomes descritivos | Passou |
| ✅ Landmark `<main>` presente | Passou |
| ✅ Meta viewport permite zoom | Passou |
| ✅ Sem `tabindex` > 0 | Passou |
| ✅ Touch targets adequados | Passou |
| ✅ Document tem `<title>` | Passou |

---

## 🎯 Ações Necessárias

### Prioridade ALTA (para atingir 95+)

1. **Adicionar `aria-label` aos 5 botões icon-only**
   - Sidebar toggle: `"Abrir menu"`
   - Theme switcher: `"Alternar tema"`
   - Copy buttons (3x): `"Copiar código"`

2. **Corrigir contraste do texto "Design System"**
   - Opção 1: Escurecer `--sidebar-foreground` de `#6b727a` para `#5a6169`
   - Opção 2: Clarear background de `#eff2f5` para `#ffffff`

### Prioridade MÉDIA

3. **Corrigir aspect ratio do logo**
   - Usar `next/image` com dimensões corretas
   - Ou recortar imagem para 1:1

---

## 📈 Comparação com Meta

| Métrica | Resultado | Meta | Status |
|---------|-----------|------|--------|
| Accessibility Score | 90/100 | ≥95 | ⚠️ Quase |
| Best Practices | 96/100 | ≥90 | ✅ |
| SEO | 100/100 | ≥90 | ✅ |
| Erros críticos | 2 | 0 | ❌ |

---

## 🔧 Próximos Passos

1. ✅ **Lighthouse executado** (90/100)
2. ⏳ **Corrigir 2 problemas críticos** (botões + contraste)
3. ⏳ **Re-executar Lighthouse** (meta: 95+)
4. ⏳ **Contraste APCA** (8 pares)
5. ⏳ **Motion Reduce** (2 min)

**Tempo estimado para correções:** 15-20 minutos
