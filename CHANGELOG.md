# Changelog

Todas as mudanças notáveis para a Stitch Design System Docs serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [6.0.0] - 2026-01-02

### 🎨 Adicionado

#### Sistema de cores
- **Migração OKLCH**: Mais de 60 cores migradas de HEX para OKLCH para uniformidade perceptual
  - Light Mode: 25+ cores convertidas
  - Dark Mode: 20+ cores convertidas
  - Cores de Navegação: 7 cores
  - Cores da Marca: 4 cores
  - Cores de Status: 4 cores
- **Suporte a Gamut P3**: OKLCH permite uma gama de cores mais ampla em monitores modernos

#### Design Tokens
- **Sistema de Tokens de 3 Camadas**: Seguindo especificação W3C DTCG v2025.10
  - **Camada 1 (Primitivo)**: Valores base OKLCH
  - **Camada 2 (Semântico)**: Tokens conscientes do contexto (`--background`, `--foreground`, etc.)
  - **Camada 3 (Componente)**: Tokens específicos de componente (31 tokens adicionados)
    - Tokens de Button (6)
    - Tokens de Badge (7)
    - Tokens de Input (5)
    - Tokens de Card (4)
    - Tokens de Checkbox/Switch (5)
    - Tokens de Dialog/Modal (4)
- **Estados de Hover Dinâmicos**: Usando `oklch(from var(...) calc(...))` para estados computados

#### Acessibilidade
- **Conformidade WCAG 2.2 AA**: Todas as taxas de contraste atendem ou excedem os requisitos
- **Pontuação Lighthouse**: 100/100 em Acessibilidade (aumento de 90/100)
- **Validação APCA**: Todos os 8 pares de cores críticos validados
- **Preferências de Motion**: Suporte a `prefers-reduced-motion`
  - Regras globais `@media (prefers-reduced-motion)`
  - `motion-reduce:animate-none` em todas as animações
- **Suporte a Leitor de Tela**: 
  - Classe utilitária `.sr-only` adicionada
  - 5 atributos `aria-label` adicionados a botões somente com ícones
- **Alvos de Toque**: `touch-action: manipulation` em todos os elementos interativos
- **Indicadores de Foco**: `focus-visible:ring-2` em todos os elementos focalizáveis

#### Experiência do Desenvolvedor
- **Integração Prettier**: Auto-formatação com `prettier-plugin-tailwindcss`
- **Scripts de Formatação**: `npm run format` e `npm run format:check`
- **Regras Específicas do Projeto**: `.cursorrules` para desenvolvimento assistido por IA

### 🔧 Alterado

#### Melhorias de Contraste
- **Borda Light Mode**: `oklch(92% → 82%)` — APCA Lc 9.5 → ~15+
- **Borda Dark Mode**: `oklch(32% → 42%)` — APCA Lc 0.0 → ~20+ (era invisível)
- **Primary Dark Mode**: `oklch(71% → 50%)` — WCAG 3.54:1 → 4.5:1+

#### Atualizações de Framework
- **Next.js**: 14 → 16
- **React**: 18 → 19
- **Tailwind CSS**: v3 → v4 (configuração CSS-first)

### 🗑️ Removido
- **Tokens Duplicados**: Aliases `--color-surface` removidos (agora usando `--surface` diretamente)
- **Cores HEX Legadas**: Todas substituídas por equivalentes OKLCH
- **Configuração Tailwind v3**: `tailwind.config.ts` removido (usando abordagem CSS-first v4)

### 🐛 Corrigido
- **Bordas Invisíveis**: Borda do modo escuro era `Lc 0.0` (completamente invisível)
- **Contraste de Botão**: Botão primário no modo escuro falhava no WCAG (3.54:1)
- **Borda Light**: Contraste insuficiente (9.5 Lc, necessário 15+)
- **Labels Ausentes**: 5 botões somente com ícones não tinham nomes acessíveis

### 📊 Métricas

| Métrica | Antes | Depois | Melhoria |
|--------|--------|-------|-------------|
| **Lighthouse Acessibilidade** | 90/100 | 100/100 | +11% |
| **Taxa de Aprovação APCA** | 5/8 (62%) | 8/8 (100%) | +38% |
| **Conformidade WCAG 2.2** | Parcial | Total AA | ✅ |
| **Tempo de Build** | ~4.5s | ~4.2s | -7% |
| **Testes E2E** | 6/6 | 6/6 | ✅ |

### 🔗 Guia de Migração

#### Para Desenvolvedores

**Uso de Cores:**
```css
/* Antes (HEX) */
background-color: #ffffff;
color: #09090b;

/* Depois (OKLCH via tokens) */
background-color: var(--background);
color: var(--foreground);
```

**Tokens de Componente:**
```css
/* Novo: Tokens específicos de componente */
.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-fg);
}

.button-primary:hover {
  background: var(--button-primary-bg-hover);
}
```

**Preferências de Motion:**
```css
/* Animações agora respeitam preferências do usuário */
.animated-element {
  animation: fade-in 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
  }
}
```

#### Mudanças de Quebra (Breaking Changes)

1. **Aliases Removidos**: `--color-surface` → use `--surface` em vez disso
2. **Tailwind v4**: Configuração movida de `tailwind.config.ts` para bloco `@theme` em `app/globals.css`
3. **Formato de Cor**: Todas as cores HEX substituídas por OKLCH (aparência visual mantida)

---

## [5.0.0] - 2025-12-15

### Adicionado
- Site de documentação inicial
- Galeria de componentes com busca
- Extração de tokens de design
- Suporte a modo Dark/Light

---

## Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes sobre como contribuir para este projeto.
