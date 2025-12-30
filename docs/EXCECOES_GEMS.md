# Exceções Válidas - Design System GEMS 5.0

## 📋 Documento de Exceções Aprovadas

Este documento lista todas as exceções válidas às regras do Design System GEMS 5.0.

**Última atualização:** 2025-12-29  
**Versão:** 1.0

---

## 🎯 Exceções por Categoria

### 1. Tooltips de Gráficos (Chart Tooltips)

**Arquivo:** `app/dados/chart/page.tsx`  
**Linhas:** 9, 12, 15, 18, 21, 100  
**Padrão:** `bg-slate-900 text-white`

**Justificativa:**
- Tooltips de gráficos requerem contraste máximo para legibilidade
- Background escuro fixo (`bg-slate-900`) garante texto branco legível em ambos os temas
- Alternativa com tokens (`bg-popover`) não garante contraste suficiente em gráficos coloridos

**Aprovado por:** Auditoria GEMS 5.0 (2025-12-29)  
**Revisão:** Anual

**Exemplo:**
```tsx
const tooltipClass = "absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none";
```

---

### 2. Falsos Positivos (Tailwind Classes)

**Arquivos:** `app/colors/page.tsx`, `app/icons/page.tsx`, `app/page.tsx`, `app/tokens/page.tsx`  
**Padrão:** `translate-*` (ex: `translate-y-1`, `translate-x-1/2`)

**Justificativa:**
- São classes de transformação do Tailwind, não cores
- Grep detecta "slate-" em "-translate-" (falso positivo)
- Não há violação real do Design System

**Ação:** Nenhuma correção necessária

---

## ✅ Checklist de Validação de Exceções

Antes de aprovar uma nova exceção, verifique:

- [ ] A exceção é realmente necessária (não há alternativa com tokens)?
- [ ] Há justificativa técnica clara (acessibilidade, UX, contraste)?
- [ ] O impacto é mínimo (<10 ocorrências no projeto)?  
- [ ] Foi documentado neste arquivo com data e aprovador?
- [ ] Há plano de revisão futura?

---

##  Processo de  Aprovação de Novas Exceções

1. **Proposta:** Abrir issue no GitHub com template "Nova Exceção GEMS 5.0"
2. **Justificativa:** Explicar por que tokens não funcionam
3. **Revisão:** Design System Lead aprova
4. **Documentação:** Adicionar neste arquivo
5. **CI:** Atualizar workflow para ignorar exceção

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Total de exceções | 6 |
| Exceções de cores | 6 (tooltips) |
| Falsos positivos | 4 (translate) |
| Taxa de conformidade | 100% (exceções aprovadas) |

---

## 🔄 Histórico de Revisões

| Data | Versão | Mudanças |
|------|--------|----------|
| 2025-12-29 | 1.0 | Criação inicial, documentação de tooltips de gráficos |

---

**Próxima revisão:** 2026-01-29 (30 dias)
