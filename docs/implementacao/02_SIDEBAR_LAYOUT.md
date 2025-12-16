# Guia de Implementação: Sidebar Layout

> **Data**: 2024-12-14
> **Alvo**: `components/site-sidebar.tsx`, `app/layout.tsx`

## 1. Objetivo
Mudar a navegação principal de "Top Bar" para "Sidebar Lateral", permitindo acesso rápido a todas as seções do Design System (Componentes, Tokens, Core).

## 2. Estrutura Proposta

### Componente `SiteSidebar`
- Deve listar categorias:
  - **Core**: Colors, Typography, Grid, Icons
  - **Components**: Lista dinâmica (leitura do JSON ou links estáticos)
  - **Patterns**: Animation, Accessibility
- Deve ser responsiva (sumir em mobile, virar drawer).

### Layout Global (`app/layout.tsx`)
```tsx
<div className="flex min-h-screen bg-background-dark">
  <SiteSidebar className="w-64 border-r border-border-dark hidden lg:block" />
  <main className="flex-1 flex flex-col">
     {/* Mobile Header (só aparece em telas pequenas) */}
     <MobileHeader />
     
     <div className="flex-1 p-8">
       {children}
     </div>
  </main>
</div>
```

## 3. Detalhes de Design (Stitch DS)
- **Fundo**: `bg-background-dark` (Dark Mode default)
- **Bordas**: `border-border-dark`
- **Texto**: `text-text-secondary` (hover: `text-white`)
- **Active State**: `bg-surface-dark` + `text-primary`

## 4. Plano de Execução
1. Criar `components/site-sidebar.tsx`.
2. Criar `components/mobile-header.tsx` (para controle do menu em telas menores).
3. Alterar `app/layout.tsx`.
4. Remover Header antigo de `app/page.tsx` e `app/components/[slug]/page.tsx` (pois o layout global já cuidará da estrutura).
