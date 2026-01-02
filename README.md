# 🎨 Stitch Design System Docs v6.0

Uma documentação abrangente para o Stitch Design System, construída com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS v4**.
Projetado para ser a fonte única de verdade para desenvolvedores e designers.

## ✨ O Que Há de Novo na v6.0

- 🎨 **Sistema de Cores OKLCH**: Mais de 60 cores migradas de HEX para OKLCH para uniformidade perceptual e suporte a gamut P3
- 🏗️ **Tokens de Design em 3 Camadas**: Seguindo especificação W3C DTCG v2025.10 (Primitivo → Semântico → Componente)
- ♿ **Compatível com WCAG 2.2 AA**: Pontuação de Acessibilidade Lighthouse 100/100, contraste APCA validado
- 🛠️ **DX Aprimorada**: Prettier com plugin Tailwind, tooling melhorado
- 🎭 **Suporte a Motion-Reduce**: Respeita preferências do usuário por movimento reduzido

## 🚀 Funcionalidades

### Core

- ✅ **Galeria de Componentes**: Visualização interativa em grade/lista com busca e filtragem.
- ✅ **Busca Global (Cmd+K)**: Navegação rápida para qualquer componente ou recurso.
- ✅ **Páginas de Detalhes**: Screenshots ao vivo (Dark/Light), snippets de código e uso de tokens.
- ✅ **Design Tokens**: Extração automatizada de cores, tipografia e espaçamento da fonte.

### Recursos Avançados

- 🎨 **Gerador de Paleta de Cores**: Geração automática de tons 50-950 com verificação de contraste.
- 📐 **Sistema de Grid**: Guia de layout interativo e visualização de breakpoints.
- ✨ **Biblioteca de Animação**: Padrões padronizados do Framer Motion com snippets copy-paste.
- ♿ **Ferramentas de Acessibilidade**: Verificador de Contraste WCAG integrado e checklist de melhores práticas.
- 🧩 **Biblioteca de Ícones**: Busca dupla para Material Symbols e ícones Lucide React.
- 💻 **Playground de Código**: Editor Monaco com preview ao vivo de HTML/Tailwind.

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + React 19)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (modo estrito)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) (configuração CSS-first)
- **Sistema de Cores**: OKLCH (uniformidade perceptual + gamut P3)
- **Animação**: [Framer Motion](https://www.framer.com/motion/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Utils**: `chroma-js`, `wcag-contrast`, `cmdk`, `lucide-react`

## 🏗️ Estrutura do Projeto

```
stitch-design-system-docs/
├── app/
│   ├── page.tsx                 # Home: Galeria de Componentes
│   ├── tokens/page.tsx          # Design Tokens
│   ├── colors/page.tsx          # Paleta Estendida
│   ├── icons/page.tsx           # Navegador de Ícones
│   ├── animations/page.tsx      # Biblioteca de Motion
│   ├── grid/page.tsx            # Layout & Grid
│   ├── accessibility/page.tsx   # Ferramentas A11y
│   ├── playground/page.tsx      # Editor de Código ao Vivo
│   └── components/[slug]/       # Detalhes Dinâmicos de Componentes
├── components/
│   ├── ui/                      # Componentes UI Reutilizáveis (CommandMenu, etc.)
│   └── layout/                  # Wrappers de Layout
├── data/
│   ├── components.json          # Metadados gerados automaticamente
│   └── tokens.json              # Tokens gerados automaticamente
├── public/
│   ├── screenshots/             # Screenshots extraídos
│   └── html/                    # Código extraído
└── scripts/
    └── extract-all.ts           # Lógica central de extração
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-seu-repo>
cd stitch-design-system-docs

# Instale as dependências
npm install

# Execute o script de extração (escaneia o DS de origem e gera dados)
# Nota: Garanta que o diretório de origem esteja configurado em scripts/extract-all.ts
npx tsx scripts/extract-all.ts

# Inicie o servidor de desenvolvimento
npm run dev
```

Visite [http://localhost:3000](http://localhost:3000) para ver o site.

### Build para Produção

```bash
npm run build
npm start
```

## 📊 Workflow Automatizado

O núcleo deste projeto é o script `extract-all.ts`. Ele:

1.  **Escaneia** o diretório original do Design System.
2.  **Analisa** HTML e CSS para extrair Tokens (Cores, Fontes, Espaçamento).
3.  **Metadados**: Gera `components.json` com categorias, tags e descrição.
4.  **Assets**: Copia HTML limpo e Screenshots para `public/`.

Isso garante que a documentação nunca desvie da implementação.

## 🚀 Deploy

O projeto é otimizado para **Vercel**.
Veja [DEPLOY.md](./DEPLOY.md) para instruções detalhadas.

## 📝 Licença

MIT

## 🙏 Créditos

Construído com ❤️ usando o Stitch Design System.
