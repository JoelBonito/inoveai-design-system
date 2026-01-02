/**
 * Script de extração automática de tokens e componentes
 * Lê os arquivos HTML do Design System original e gera JSONs de metadata
 */

import fs from "fs";
import path from "path";

const SOURCE_DIR = "/Users/macbookdejoel/Downloads/stitch_design_system_inove_ai_v1 2";
const OUTPUT_DIR = path.join(process.cwd(), "data");
const SCREENSHOTS_DIR = path.join(process.cwd(), "public/screenshots");
const HTML_DIR = path.join(process.cwd(), "public/html");

// Criar diretórios se não existirem
[OUTPUT_DIR, SCREENSHOTS_DIR, HTML_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Mapeamento de componentes
const componentMapping: Record<string, any> = {
  componente_badge: { name: "Badge", category: "feedback", id: "badge" },
  componente_breadcrumbs: { name: "Breadcrumbs", category: "navigation", id: "breadcrumbs" },
  componente_date_picker: { name: "Date Picker", category: "form", id: "date-picker" },
  componente_select: { name: "Select", category: "form", id: "select" },
  componente_gráfico: { name: "Chart", category: "visualization", id: "chart" },
  componente_tabela: { name: "Table", category: "data", id: "table" },
  componente_tabs: { name: "Tabs", category: "navigation", id: "tabs" },
  componente_modal: { name: "Modal", category: "overlay", id: "modal" },
  componente_notificação: { name: "Notification/Toast", category: "feedback", id: "notification" },
  componente_paginação: { name: "Pagination", category: "navigation", id: "pagination" },
  componente_tooltip: { name: "Tooltip", category: "overlay", id: "tooltip" },
  componentes_essenciais: { name: "Essential Components", category: "core", id: "essentials" },
  autocomplete_search: { name: "Autocomplete/Search", category: "form", id: "autocomplete" },
  empty_state: { name: "Empty State", category: "feedback", id: "empty-state" },
  file_upload: { name: "File Upload", category: "form", id: "file-upload" },
  navegação_e_layout: { name: "Navigation & Layout", category: "layout", id: "navigation-layout" },
  página_de_erro: { name: "Error Page", category: "feedback", id: "error-page" },
  ícones_em_uso: { name: "Icons", category: "assets", id: "icons" },
};

const components: any[] = [];
let componentCounter = 0;

console.log("🔍 Scanning Design System directory...");

const entries = fs.readdirSync(SOURCE_DIR);

for (const entry of entries) {
  const fullPath = path.join(SOURCE_DIR, entry);
  const stat = fs.statSync(fullPath);

  if (stat.isDirectory()) {
    console.log(`   Checking: ${entry}`);

    // Detectar modo (dark/light)
    const mode = entry.includes("dark") ? "dark" : entry.includes("light") ? "light" : null;
    if (!mode) continue;

    // Encontrar componente base
    let componentBase = null;
    for (const key in componentMapping) {
      if (entry.includes(key)) {
        componentBase = componentMapping[key];
        break;
      }
    }

    if (!componentBase) continue;

    // Verificar se já existe o componente
    let component = components.find((c) => c.id === componentBase.id);
    if (!component) {
      componentCounter++;
      component = {
        id: componentBase.id,
        name: componentBase.name,
        category: componentBase.category,
        description: `${componentBase.name} component from Stitch Design System`,
        darkMode: null,
        lightMode: null,
        tokensUsed: ["primary", "surface-dark", "text-secondary"],
        tags: [componentBase.category, "ui"],
      };
      components.push(component);
    }

    // Verificar arquivos dentro da pasta
    const htmlPath = path.join(fullPath, "code.html");
    const pngPath = path.join(fullPath, "screen.png");

    if (fs.existsSync(htmlPath) && fs.existsSync(pngPath)) {
      const screenshotTarget = `/screenshots/${componentCounter.toString().padStart(2, "0")}_${component.id}_${mode}.png`;
      const htmlTarget = `/html/${component.id}_${mode}.html`;

      // Copiar arquivos
      fs.copyFileSync(pngPath, path.join(process.cwd(), "public", screenshotTarget));
      fs.copyFileSync(htmlPath, path.join(process.cwd(), "public", htmlTarget));

      // Atualizar component
      if (mode === "dark") {
        component.darkMode = {
          screenshot: screenshotTarget,
          htmlPath: htmlTarget,
        };
      } else {
        component.lightMode = {
          screenshot: screenshotTarget,
          htmlPath: htmlTarget,
        };
      }

      console.log(`   ✅ ${component.name} (${mode})`);
    }
  }
}

// Salvar components.json
fs.writeFileSync(path.join(OUTPUT_DIR, "components.json"), JSON.stringify(components, null, 2));

console.log(`\n✅ Extracted ${components.length} components`);
console.log(`📄 Generated: data/components.json`);
console.log(`🖼️  Copied screenshots to: public/screenshots/`);
console.log(`📝 Copied HTML files to: public/html/`);

// Gerar tokens.json
const tokens = {
  colors: {
    primary: "#2b2bee",
    "background-light": "#f6f6f8",
    "background-dark": "#111118",
    "surface-dark": "#1C1C26",
    "border-dark": "#282839",
    "text-secondary": "#9d9db9",
    surface: "#1c1c27",
    "surface-border": "#282839",
  },
  typography: {
    fontFamilies: {
      display: ["Space Grotesk", "sans-serif"],
      body: ["Noto Sans", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
    },
  },
  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
  },
  borderRadius: {
    DEFAULT: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
};

fs.writeFileSync(path.join(OUTPUT_DIR, "tokens.json"), JSON.stringify(tokens, null, 2));

console.log(`🎨 Generated: data/tokens.json`);
console.log("\n✨ Extraction complete!");
