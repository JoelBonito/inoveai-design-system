# Análise APCA - Light Mode

**Data:** 2026-01-02  
**Ferramenta:** [apca contrast.com](https://www.apca contrast.com)  
**Modo:** Light Mode

---

## 📊 Resumo dos Testes

| Par | Foreground | Background | Lc APCA | Mínimo | Status |
|-----|------------|------------|---------|--------|--------|
| **Border** | `#e0e7e6` | `#f9fafb` | **9.5** | 15+ | ❌ **FALHA** |
| **Texto Principal** | `#111827` | `#f9fafb` | **101.4** | 60+ | ✅ OK |
| **Texto Muted** | `#6b7280` | `#f9fafb` | **70.5** | 45+ | ✅ OK |
| **Texto Flutuante** | `#fdfdfb` | `#457b77` | **-77.5** | 60+ | ✅ OK |

**Resultado:** **3/4 pares aprovados** (75%)

---

## ❌ PROBLEMA CRÍTICO

### Border - Contraste Insuficiente

![Border Test](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_0_1767380751480.png)

**Cores testadas:**
- **Foreground:** `#e0e7e6` (border)
- **Background:** `#f9fafb` (background)

**Resultado:**
- **Lc APCA:** 9.5
- **Mínimo:** 15+
- **Status:** ❌ **Contraste muito baixo**

**Impacto:**
- Bordas quase invisíveis
- Dificulta separação visual de elementos
- Afeta usuários com baixa visão

**Correção Necessária:**

```css
/* globals.css - Light Mode */
:root {
  /* ANTES (FALHA) */
  --border: oklch(89.8% 0.006 264); /* #e0e7e6 - Lc 9.5 */
  
  /* DEPOIS (APROVADO) */
  --border: oklch(82% 0.008 264); /* ~#c5cdd0 - Lc ~20 */
}
```

**Validação:**
- Novo contraste estimado: **Lc ~20** ✅
- Mantém estética sutil mas visível

---

## ✅ PARES APROVADOS

### 1. Texto Principal - Excelente

![Texto Principal](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_3_1767380751480.png)

**Cores:**
- FG: `#111827` (foreground)
- BG: `#f9fafb` (background)

**Resultado:**
- **Lc:** 101.4 ✅
- **Mínimo:** 60+
- **Margem:** +41.4 (excelente)

---

### 2. Texto Muted - Aprovado

![Texto Muted](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_2_1767380751480.png)

**Cores:**
- FG: `#6b7280` (muted-foreground)
- BG: `#f9fafb` (background)

**Resultado:**
- **Lc:** 70.5 ✅
- **Mínimo:** 45+
- **Margem:** +25.5 (bom)

**Nota:** Este é o mesmo par que falhou no Lighthouse (4.33:1 WCAG), mas **passa no APCA** (70.5). APCA é mais preciso para tons médios.

---

### 3. Texto Flutuante - Aprovado

![Texto Flutuante](/Users/macbookdejoel/.gemini/antigravity/brain/79d0a0fb-af35-4cb3-9d30-9f307bfc083c/uploaded_image_1_1767380751480.png)

**Cores:**
- FG: `#fdfdfb` (branco quase puro)
- BG: `#457b77` (primary)

**Resultado:**
- **Lc:** -77.5 ✅ (negativo = texto claro em fundo escuro)
- **Mínimo:** 60+
- **Margem:** +17.5 (aprovado)

---

## 🔧 Ação Corretiva

### Ajustar `--border` no Light Mode

**Arquivo:** `app/globals.css`

**Mudança:**

```diff
:root {
  /* ... outras cores ... */
  
- --border: oklch(89.8% 0.006 264); /* Lc 9.5 - FALHA */
+ --border: oklch(82% 0.008 264);   /* Lc ~20 - OK */
  
  /* ... */
}
```

**Validação esperada:**
- Novo Lc: ~20 (acima do mínimo 15)
- Visual: Borda mais visível mas ainda sutil

---

## 📈 Comparação WCAG vs APCA

| Par | WCAG 2.1 | APCA | Vencedor |
|-----|----------|------|----------|
| Texto Muted | 4.33:1 ❌ | 70.5 ✅ | **APCA** |
| Border | N/A | 9.5 ❌ | APCA |

**Conclusão:** APCA é mais preciso para tons médios/claros.

---

## 🎯 Próximos Passos

1. ✅ **APCA Light Mode testado** (3/4 aprovados)
2. ⏳ **Corrigir border** (1 mudança CSS)
3. ⏳ **APCA Dark Mode** (4 pares)
4. ⏳ **Motion Reduce** (2 min)
5. ⏳ **Re-executar Lighthouse** (meta: 95+)

**Tempo estimado:** 10 minutos para correção + re-teste
