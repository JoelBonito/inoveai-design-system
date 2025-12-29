# Plano Mestre: Stitch Design System Specs

> **Status**: Em Progresso
> **Objetivo**: Tornar a documentação do Stitch Design System interativa, funcional e bem estruturada.

## 1. Contexto Atual
- **Conteúdo**: Galeria de componentes e páginas de detalhes com Live Preview interativo.
- **Estrutura**: Navegação superior (Top Nav).
- **Feedback do Usuário**: Deseja uma estrutura de **Sidebar Lateral** para navegar no Design System, com suporte a Dark/Light mode no próprio site de documentação.

## 2. Roadmap

### Fase 1: Governança & Estrutura (✅ Concluído)
- [x] Criação da estrutura `docs/`
- [x] Master Plan & Guias

### Fase 2: Implementação do Live Preview (✅ Concluído)
- [x] Iframe renderizando HTML real dos componentes.
- [x] Interatividade garantida.

### Fase 3: Reestruturação do Layout (✅ Concluído)
- **Objetivo**: Implementar Layout com Sidebar Persistente para a documentação.
- **Tarefas**:
  - [x] Criar componente `SiteSidebar`.
  - [x] Refatorar `app/layout.tsx` para usar Grid (Sidebar + Main Content).
  - [x] Implementar Toggle de Tema (Dark/Light) global para a documentação.
  - [x] Organizar links da sidebar (Components, Tokens, Patterns).

## 3. Próximos Passos (Fase 4: Alinhamento Design System)
1. Migração para Tailwind v4 e variáveis CSS estritas (✅ Concluído).
2. Refatoração dos Componentes Primitivos (Button, Input, Badge, etc.) (✅ Concluído).
3. Verificação de consistência visual (Border Radius, Deep Layers).
4. Refatoração dos Componentes de Formulário e Feedback.
5. Documentação de Padrões de Layout (PageContainer, TopBar).
