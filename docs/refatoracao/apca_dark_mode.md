# Análise APCA - Dark Mode

**Data:** 2026-01-02  
**Ferramenta:** [apca contrast.com](https://www.apca contrast.com)  
**Modo:** Dark Mode

---

## 📊 Resumo dos Testes

| Par | Foreground | Background | Lc APCA | Mínimo | Status |
|-----|------------|------------|---------|--------|--------|
| **Texto Principal** | `#ffffff` | `#13151a` | **-107.1** | 60+ | ✅ OK |
| **Texto Muted** | `#94a3b8` | `#13151a` | **-50.9** | 45+ | ✅ OK |
| **Primary Button** | `#ffffff` | `#06b6d4` | **-52.1** | 60+ | ❌ **FALHA** |
| **Border** | `#2d3342` | `#13151a` | **0.0** | 15+ | ❌ **CRÍTICO** |

**Resultado:** **2/4 pares aprovados** (50%)

---

## ❌ PROBLEMAS CRÍTICOS (2)

### 1. Border - Contraste Zero (CRÍTICO)

![Border Test](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_3_1767380903555.png)

**Cores testadas:**
- **Foreground:** `#2d3342` (border)
- **Background:** `#13151a` (background)

**Resultado:**
- **Lc APCA:** **0.0** ⛔
- **Mínimo:** 15+
- **Status:** ❌ **Contraste muito baixo - INVISÍVEL**

**Impacto:**
- Bordas completamente invisíveis
- Impossível distinguir elementos
- Violação grave de acessibilidade

**Correção Necessária:**

```css
/* globals.css - Dark Mode */
.dark {
  /* ANTES (CRÍTICO) */
  --border: oklch(23% 0.015 264); /* #2d3342 - Lc 0.0 */
  
  /* DEPOIS (APROVADO) */
  --border: oklch(35% 0.020 264); /* ~#4a5568 - Lc ~25 */
}
```

---

### 2. Primary Button - Contraste Insuficiente

![Primary Button](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_2_1767380903555.png)

**Cores testadas:**
- **Foreground:** `#ffffff` (branco)
- **Background:** `#06b6d4` (primary cyan)

**Resultado:**
- **Lc APCA:** -52.1
- **Mínimo:** 60+
- **Status:** ❌ **Insuficiente**

**Impacto:**
- Texto em botões primários difícil de ler
- Afeta CTAs principais

**Correção Necessária:**

```css
/* globals.css - Dark Mode */
.dark {
  /* ANTES (FALHA) */
  --primary: oklch(69% 0.15 210); /* #06b6d4 - Lc -52.1 */
  
  /* DEPOIS (APROVADO) */
  --primary: oklch(60% 0.18 210); /* ~#0891b2 - Lc ~-65 */
}
```

---

## ✅ PARES APROVADOS

### 1. Texto Principal - Excelente

![Texto Principal](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_0_1767380903555.png)

**Cores:**
- FG: `#ffffff` (foreground)
- BG: `#13151a` (background)

**Resultado:**
- **Lc:** -107.1 ✅
- **Mínimo:** 60+
- **Margem:** +47.1 (excelente)

---

### 2. Texto Muted - Aprovado

![Texto Muted](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_1_1767380903555.png)

**Cores:**
- FG: `#94a3b8` (muted-foreground)
- BG: `#13151a` (background)

**Resultado:**
- **Lc:** -50.9 ✅
- **Mínimo:** 45+
- **Margem:** +5.9 (aprovado, mas próximo do limite)

---

## 🔧 Ações Corretivas

### 1. Ajustar `--border` no Dark Mode (URGENTE)

**Arquivo:** `app/globals.css`

```diff
.dark {
  /* ... outras cores ... */
  
- --border: oklch(23% 0.015 264); /* Lc 0.0 - CRÍTICO */
+ --border: oklch(35% 0.020 264); /* Lc ~25 - OK */
  
  /* ... */
}
```

**Validação esperada:**
- Novo Lc: ~25 (bem acima do mínimo 15)
- Visual: Borda visível mas sutil

---

### 2. Ajustar `--primary` no Dark Mode

**Arquivo:** `app/globals.css`

```diff
.dark {
  /* ... outras cores ... */
  
- --primary: oklch(69% 0.15 210); /* Lc -52.1 - FALHA */
+ --primary: oklch(60% 0.18 210); /* Lc ~-65 - OK */
  
  /* ... */
}
```

**Validação esperada:**
- Novo Lc: ~-65 (acima do mínimo 60)
- Visual: Cyan mais escuro, mais contraste com branco

---

## 📊 Comparação Light vs Dark Mode

| Par | Light Mode | Dark Mode | Status |
|-----|------------|-----------|--------|
| **Border** | 9.5 ❌ | 0.0 ❌ | Ambos falharam |
| **Texto Principal** | 101.4 ✅ | -107.1 ✅ | Ambos OK |
| **Texto Muted** | 70.5 ✅ | -50.9 ✅ | Ambos OK |
| **Primary** | N/A | -52.1 ❌ | Dark falhou |

**Conclusão:** Border é problema em **ambos** os modos.

---

## ⚠️ Severidade dos Problemas

| Problema | Severidade | Prioridade |
|----------|------------|------------|
| Border Dark (Lc 0.0) | 🔴 **CRÍTICA** | P0 |
| Primary Dark (Lc -52.1) | 🟠 **ALTA** | P1 |
| Border Light (Lc 9.5) | 🟡 **MÉDIA** | P2 |

---

## 🎯 Próximos Passos

1. ✅ **APCA Light Mode** (3/4)
2. ✅ **APCA Dark Mode** (2/4)
3. ⏳ **Corrigir 3 problemas** (2 dark + 1 light)
4. ⏳ **Re-testar APCA** (6 pares)
5. ⏳ **Motion Reduce** (2 min)
6. ⏳ **Re-executar Lighthouse** (meta: 95+)

**Tempo estimado para correções:** 15 minutos
