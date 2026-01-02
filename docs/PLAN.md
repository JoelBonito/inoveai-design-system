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

## 4. Testes Automatizados (Nova Seção)

### Objetivo

Garantir a qualidade e estabilidade do Design System através de testes unitários, de integração e E2E.

### Estratégia de Testes

| Prioridade | O que testar                        | Tipo       |
| ---------- | ----------------------------------- | ---------- |
| 🔴 Alta    | Lógica de componentes críticos      | Unitário   |
| 🔴 Alta    | Autenticação e autorização          | Integração |
| 🟡 Média   | Fluxos principais da UI             | E2E        |
| 🟢 Baixa   | Renderização de componentes simples | Snapshot   |

### Etapas de Implementação

1. **Instalação de Dependências**
   ```bash
   npm install -D jest @testing-library/react @testing-library/jest-dom @types/jest jest-environment-jsdom
   ```
2. **Configuração do Jest** (`jest.config.js`)
   ```javascript
   module.exports = {
     testEnvironment: "jest-environment-jsdom",
     setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
     moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
   };
   ```
3. **Setup de Testes** (`jest.setup.js`)
   ```javascript
   import "@testing-library/jest-dom";
   ```
4. **Primeiro Teste Unitário** (`src/utils/__tests__/example.test.ts`)
   ```typescript
   describe("Example Test Suite", () => {
     it("should pass basic assertion", () => {
       expect(1 + 1).toBe(2);
     });
   });
   ```
5. **Scripts npm**
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch",
       "test:coverage": "jest --coverage"
     }
   }
   ```
6. **Playwright (E2E) – opcional**
   ```bash
   npm init playwright@latest
   ```
   Crie `e2e/home.spec.ts` conforme workflow.

### Checklist Final

- [ ] Jest configurado e funcionando
- [ ] Teste unitário inicial passando
- [ ] Scripts npm adicionados
- [ ] Playwright instalado (se E2E necessário)
- [ ] Teste E2E inicial passando (se aplicável)
- [ ] Relatório de coverage configurado

## 5. Próximas Etapas

- Revisar e aprovar a seção de testes com a equipe.
- Implementar os passos descritos acima.
