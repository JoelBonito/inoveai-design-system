import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'data');
const SCREENSHOTS_DIR = path.join(process.cwd(), 'public/screenshots');
const SOURCE_DIR = path.join(process.cwd(), 'screenshot');

// Mapeamento de componentes
const componentMapping: Record<string, any> = {
    'componente_badge': { id: 'badge' },
    'componente_breadcrumbs': { id: 'breadcrumbs' },
    'componente_date_picker': { id: 'date-picker' },
    'componente_select': { id: 'select' },
    'componente_gráfico': { id: 'chart' },
    'componente_tabela': { id: 'table' },
    'componente_tabs': { id: 'tabs' },
    'componente_modal': { id: 'modal' },
    'componente_notificação': { id: 'toast' },
    'componente_paginação': { id: 'pagination' },
    'componente_tooltip': { id: 'tooltip' },
    'componentes_essenciais': { id: 'essentials' },
    'autocomplete_search': { id: 'autocomplete' },
    'empty_state': { id: 'empty-state' },
    'file_upload': { id: 'file-upload' },
    'navegação_e_layout': { id: 'navigation-layout' },
    'página_de_erro': { id: 'error-page' },
    'ícones_em_uso': { id: 'icons-usage' },
    'design_tokens': { id: 'design-tokens' }
};

// Componentes que herdam a imagem do 'essentials'
const essentialsDependents = ['button', 'input', 'checkbox', 'switch'];

// Ler components.json existente
const componentsPath = path.join(OUTPUT_DIR, 'components.json');
const components = JSON.parse(fs.readFileSync(componentsPath, 'utf-8'));

console.log('🔍 Iniciando atualização segura das thumbnails (V2)...');

const entries = fs.readdirSync(SOURCE_DIR);
let updatedCount = 0;

for (const entry of entries) {
    const fullPath = path.join(SOURCE_DIR, entry);
    if (!fs.statSync(fullPath).isDirectory() || entry.startsWith('.')) continue;

    console.log(`   Processando: ${entry}`);

    // Normalizar string para lidar com NFD/NFC (acentos no Mac)
    const normalizedEntry = entry.normalize('NFC');
    const normalizedNFD = entry.normalize('NFD');

    // Detectar modo
    const mode = normalizedEntry.includes('dark') ? 'dark' : normalizedEntry.includes('light') ? 'light' : null;
    if (!mode) continue;

    // Encontrar ID do componente
    let componentId = null;
    for (const key in componentMapping) {
        // Tentar matches com ambas normalizações
        if (normalizedEntry.includes(key) || normalizedEntry.includes(key.normalize('NFC')) || normalizedNFD.includes(key.normalize('NFD'))) {
            componentId = componentMapping[key].id;
            break;
        }
    }

    if (!componentId) {
        if (normalizedEntry.includes('componentes_essenciais')) componentId = 'essentials';
        if (normalizedEntry.includes('ícones_em_uso')) componentId = 'icons-usage';
        if (normalizedEntry.includes('design_tokens')) componentId = 'design-tokens';
        if (normalizedEntry.includes('navegação')) componentId = 'navigation-layout';
    }

    if (!componentId) {
        console.log(`   ⚠️  Componente desconhecido ignorado: ${entry}`);
        continue;
    }

    // Encontrar o componente no JSON
    const component = components.find((c: any) => c.id === componentId);
    if (!component) {
        console.log(`   ⚠️  ID não encontrado no JSON: ${componentId}`);
        continue;
    }

    // Verificar se existe screen.png na pasta source
    const pngPath = path.join(fullPath, 'screen.png');
    if (fs.existsSync(pngPath)) {
        // Gerar novo nome com versão v3 para bust cache
        const newFilename = `${components.indexOf(component).toString().padStart(2, '0')}_${componentId}_${mode}_v3.png`;
        const targetPath = path.join(SCREENSHOTS_DIR, newFilename);

        // Copiar arquivo
        fs.copyFileSync(pngPath, targetPath);

        // Função helper para atualizar path
        const updatePath = (comp: any) => {
            if (mode === 'dark') {
                if (comp.darkMode) comp.darkMode.screenshot = `/screenshots/${newFilename}`;
            } else {
                if (comp.lightMode) comp.lightMode.screenshot = `/screenshots/${newFilename}`;
            }
        };

        // Atualizar o componente principal
        updatePath(component);
        updatedCount++;
        console.log(`   ✅ Atualizado: ${component.name} (${mode})`);

        // Se for essentials, atualizar dependentes
        if (componentId === 'essentials') {
            essentialsDependents.forEach(depId => {
                const depComp = components.find((c: any) => c.id === depId);
                if (depComp) {
                    updatePath(depComp);
                    console.log(`      ↳ Sincronizado: ${depComp.name}`);
                }
            });
        }
    }
}

// Salvar components.json atualizado
fs.writeFileSync(componentsPath, JSON.stringify(components, null, 2));

console.log(`\n✨ Concluído! Imagens e dependentes atualizados.`);

