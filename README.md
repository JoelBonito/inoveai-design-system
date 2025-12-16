# 🎨 Stitch Design System Docs

A comprehensive documentation website for the Stitch Design System, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. 
Designed to be the single source of truth for developers and designers.

## 🚀 Features

### Core
- ✅ **Component Gallery**: Interactive grid/list view with search & filtering.
- ✅ **Global Search (Cmd+K)**: Quick navigation to any component or resource.
- ✅ **Component Detail Pages**: Live screenshots (Dark/Light), code snippets, and token usage.
- ✅ **Design Tokens**: Automated extraction of colors, typography, and spacing from the source.

### Advanced Resources
- 🎨 **Color Palette Generator**: Automatic 50-950 shade generation with contrast checking.
- 📐 **Grid System**: Interactive layout guide and breakpoint visualization.
- ✨ **Animation Library**: Standardized Framer Motion patterns with copy-paste snippets.
- ♿ **Accessibility Tools**: Integrated WCAG Contrast Checker and best practices checklist.
- 🧩 **Icon Library**: Dual-search for Material Symbols and Lucide React icons.
- 💻 **Code Playground**: Monaco Editor with live HTML/Tailwind preview.

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Utils**: `chroma-js`, `wcag-contrast`, `cmdk`, `lucide-react`

## 🏗️ Project Structure

```
stitch-design-system-docs/
├── app/
│   ├── page.tsx                 # Home: Component Gallery
│   ├── tokens/page.tsx          # Design Tokens
│   ├── colors/page.tsx          # Extended Palette
│   ├── icons/page.tsx           # Icon Browser
│   ├── animations/page.tsx      # Motion Library
│   ├── grid/page.tsx            # Layout & Grid
│   ├── accessibility/page.tsx   # A11y Tools
│   ├── playground/page.tsx      # Live Code Editor
│   └── components/[slug]/       # Dynamic Component Details
├── components/
│   ├── ui/                      # Reusable UI components (CommandMenu, etc.)
│   └── layout/                  # Layout wrappers
├── data/
│   ├── components.json          # Auto-generated metadata
│   └── tokens.json              # Auto-generated tokens
├── public/
│   ├── screenshots/             # Extracted screenshots
│   └── html/                    # Extracted code
└── scripts/
    └── extract-all.ts           # Core extraction logic
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd stitch-design-system-docs

# Install dependencies
npm install

# Run extraction script (scans source DS and generates data)
# Note: Ensure source directory is configured in scripts/extract-all.ts
npx tsx scripts/extract-all.ts

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Automated Workflow

The core of this project is the `extract-all.ts` script. It:
1.  **Scans** the original Design System directory.
2.  **Parses** HTML and CSS to extract Tokens (Colors, Fonts, Spacing).
3.  **Metadata**: Generates `components.json` with categories, tags, and description.
4.  **Assets**: Copies clean HTML and Screenshots to `public/`.

This ensures the documentation never drifts from the implementation.

## 🚀 Deployment

The project is optimized for **Vercel**.
See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

## 📝 License

MIT

## 🙏 Credits

Built with ❤️ using the Stitch Design System.
