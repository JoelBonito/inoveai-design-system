"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const barChartCode = `<!-- Bar Chart -->
<div class="w-full h-64 flex items-end justify-between gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
  <div class="w-full bg-primary/20 hover:bg-primary/30 transition-colors rounded-t-sm relative group" style="height: 40%">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
  </div>
  <div class="w-full bg-primary/40 hover:bg-primary/50 transition-colors rounded-t-sm relative group" style="height: 70%">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">70%</div>
  </div>
  <div class="w-full bg-primary/60 hover:bg-primary/70 transition-colors rounded-t-sm relative group" style="height: 50%">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">50%</div>
  </div>
  <div class="w-full bg-primary/80 hover:bg-primary/90 transition-colors rounded-t-sm relative group" style="height: 90%">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">90%</div>
  </div>
  <div class="w-full bg-primary hover:bg-primary/90 transition-colors rounded-t-sm relative group" style="height: 60%">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">60%</div>
  </div>
</div>`;

const lineChartCode = `<!-- Line Chart (SVG) -->
<div class="w-full h-64 p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center">
  <svg viewBox="0 0 500 200" class="w-full h-full text-primary">
    <!-- Grid lines -->
    <g class="stroke-slate-200 dark:stroke-slate-700" stroke-width="1">
      <line x1="0" y1="150" x2="500" y2="150" />
      <line x1="0" y1="100" x2="500" y2="100" />
      <line x1="0" y1="50" x2="500" y2="50" />
    </g>
    <!-- Line -->
    <path 
      d="M0 150 C 100 150, 150 50, 250 100 S 400 180, 500 20" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="4"
      stroke-linecap="round"
    />
    <!-- Dots -->
    <circle cx="0" cy="150" r="4" class="fill-white dark:fill-slate-900 stroke-current" stroke-width="2" />
    <circle cx="250" cy="100" r="4" class="fill-white dark:fill-slate-900 stroke-current" stroke-width="2" />
    <circle cx="500" cy="20" r="4" class="fill-white dark:fill-slate-900 stroke-current" stroke-width="2" />
  </svg>
</div>`;

const pieChartCode = `<!-- Pie Chart (CSS) -->
<div class="flex items-center justify-center gap-8 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
  <!-- Chart -->
  <div class="relative size-40 rounded-full" 
    style="background: conic-gradient(var(--primary) 0% 60%, #e2e8f0 60% 100%)">
    <!-- Center hole for Donut effect -->
    <div class="absolute inset-4 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
      <span class="text-2xl font-bold text-slate-900 dark:text-white">60%</span>
    </div>
  </div>
  
  <!-- Legend -->
  <div class="space-y-2">
    <div class="flex items-center gap-2">
      <div class="size-3 rounded-full bg-primary"></div>
      <span class="text-sm text-slate-600 dark:text-slate-300">Concluído</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="size-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      <span class="text-sm text-slate-600 dark:text-slate-300">Pendente</span>
    </div>
  </div>
</div>`;

const chartProps: PropDefinition[] = [
  {
    name: "data",
    type: "object[]",
    description: "Dados do gráfico"
  },
  {
    name: "type",
    type: '"bar" | "line" | "pie"',
    defaultValue: '"bar"',
    description: "Tipo de visualização"
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Altura do gráfico em pixels"
  },
  {
    name: "colors",
    type: "string[]",
    description: "Cores personalizadas para as séries"
  },
];

function BarChartPreview() {
  const { bg, border } = useThemeClasses();

  // Tooltip style always dark for contrast
  const tooltipClass = "absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none";

  return (
    <div className={`w-full h-64 flex items-end justify-between gap-2 p-4 rounded-lg border ${border} ${bg}`}>
      <div className="w-full bg-primary/20 hover:bg-primary/30 transition-colors rounded-t-sm relative group" style={{ height: '40%' }}>
        <div className={tooltipClass}>40%</div>
      </div>
      <div className="w-full bg-primary/40 hover:bg-primary/50 transition-colors rounded-t-sm relative group" style={{ height: '70%' }}>
        <div className={tooltipClass}>70%</div>
      </div>
      <div className="w-full bg-primary/60 hover:bg-primary/70 transition-colors rounded-t-sm relative group" style={{ height: '50%' }}>
        <div className={tooltipClass}>50%</div>
      </div>
      <div className="w-full bg-primary/80 hover:bg-primary/90 transition-colors rounded-t-sm relative group" style={{ height: '90%' }}>
        <div className={tooltipClass}>90%</div>
      </div>
      <div className="w-full bg-primary hover:bg-primary/90 transition-colors rounded-t-sm relative group" style={{ height: '60%' }}>
        <div className={tooltipClass}>60%</div>
      </div>
    </div>
  );
}

function LineChartPreview() {
  const { bg, border, isDark } = useThemeClasses();
  const gridColor = isDark ? "stroke-slate-700" : "stroke-slate-200";
  const dotFill = isDark ? "fill-slate-900" : "fill-white";

  return (
    <div className={`w-full h-64 p-4 rounded-lg border ${border} ${bg} flex items-center justify-center`}>
      <svg viewBox="0 0 500 200" className="w-full h-full text-primary">
        <g className={gridColor} strokeWidth="1">
          <line x1="0" y1="150" x2="500" y2="150" />
          <line x1="0" y1="100" x2="500" y2="100" />
          <line x1="0" y1="50" x2="500" y2="50" />
        </g>
        <path
          d="M0 150 C 100 150, 150 50, 250 100 S 400 180, 500 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="0" cy="150" r="4" className={`${dotFill} stroke-current`} strokeWidth="2" />
        <circle cx="250" cy="100" r="4" className={`${dotFill} stroke-current`} strokeWidth="2" />
        <circle cx="500" cy="20" r="4" className={`${dotFill} stroke-current`} strokeWidth="2" />
      </svg>
    </div>
  );
}

function PieChartPreview() {
  const { bg, border, text, isDark } = useThemeClasses();
  const bgHole = isDark ? "bg-slate-900" : "bg-white";

  return (
    <div className={`flex items-center justify-center gap-8 p-6 rounded-lg border ${border} ${bg}`}>
      <div className="relative size-40 rounded-full"
        style={{ background: `conic-gradient(var(--primary) 0% 60%, ${isDark ? '#334155' : '#e2e8f0'} 60% 100%)` }}>
        <div className={`absolute inset-4 rounded-full ${bgHole} flex items-center justify-center`}>
          <span className={`text-2xl font-bold ${text}`}>60%</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-primary"></div>
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Concluído</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`size-3 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Pendente</span>
        </div>
      </div>
    </div>
  );
}

const donutChartCode = `<!-- Donut Chart Multi-segment (SVG) -->
<div class="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
  <div class="flex items-center gap-2 mb-6">
    <div class="w-1 h-5 bg-blue-600 rounded-full"></div>
    <h3 class="font-semibold text-slate-900 dark:text-white">Modalidades de Interesse</h3>
  </div>

  <div class="flex flex-col items-center gap-8">
    <!-- SVG Chart with Tooltips -->
    <div class="relative size-48">
      <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
        <!-- Segment 1: Treinamento Cruzado (30%) - Orange -->
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ea580c" stroke-width="20"
          stroke-dasharray="30 70" stroke-dashoffset="0" class="group hover:opacity-90 transition-opacity cursor-pointer">
          <title>Treinamento cruzado: 30%</title>
        </circle>
        
        <!-- Segment 2: Musculatura (15%) - Blue (Starts at 30%) -->
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2563eb" stroke-width="20"
          stroke-dasharray="15 85" stroke-dashoffset="-30" class="group hover:opacity-90 transition-opacity cursor-pointer">
          <title>Musculatura: 15%</title>
        </circle>

        <!-- Segment 3: Aulas Coletivas (15%) - Green (Starts at 45%) -->
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#16a34a" stroke-width="20"
          stroke-dasharray="15 85" stroke-dashoffset="-45" class="group hover:opacity-90 transition-opacity cursor-pointer">
          <title>Aulas Coletivas: 15%</title>
        </circle>

        <!-- Segment 4: Nação (20%) - Yellow (Starts at 60%) -->
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eab308" stroke-width="20"
          stroke-dasharray="20 80" stroke-dashoffset="-60" class="group hover:opacity-90 transition-opacity cursor-pointer">
          <title>Nação: 20%</title>
        </circle>

        <!-- Segment 5: Lutas (20%) - Red (Starts at 80%) -->
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#dc2626" stroke-width="20"
          stroke-dasharray="20 80" stroke-dashoffset="-80" class="group hover:opacity-90 transition-opacity cursor-pointer">
          <title>Lutas: 20%</title>
        </circle>
      </svg>
      
      <!-- Tooltip Overlay Simulation (For demo purposes) -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Hover segments
        </div>
      </div>
    </div>
    
    <!-- Legend -->
    <div class="flex flex-wrap justify-center gap-4 text-sm">
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-orange-600"></div>
        <span class="text-slate-600 dark:text-slate-300">Treinamento cruzado (30%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-blue-600"></div>
        <span class="text-slate-600 dark:text-slate-300">Musculatura (15%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-green-600"></div>
        <span class="text-slate-600 dark:text-slate-300">Aulas Coletivas (15%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-yellow-500"></div>
        <span class="text-slate-600 dark:text-slate-300">Nação (20%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-red-600"></div>
        <span class="text-slate-600 dark:text-slate-300">Lutas (20%)</span>
      </div>
    </div>
  </div>
</div>`;

function DonutChartPreview() {
  const { bg, border, text, isDark } = useThemeClasses();

  // Helper to create a tooltip that appears on hover of a specific segment
  // Since we are in React, we could use state, but for the "Code" preview we want pure HTML/CSS if possible.
  // The previous solution using 'title' attribute is the most robust "pure HTML" way for SVGs.
  // However, to match the bar chart "custom div tooltip", we would need complex foreignObject or JS.
  // We will stick to the SVG implementation which is cleaner and responsive.

  return (
    <div className={`p-6 rounded-lg border ${border} ${bg} shadow-sm w-full max-w-lg mx-auto`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
        <h3 className={`font-semibold ${text}`}>Modalidades de Interesse</h3>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* SVG Chart */}
        <div className="relative size-48 group/chart">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {/* Segments - keeping stroke-width=20 (radius 40) means 20/100 = 20% thickness */}
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ea580c" strokeWidth="20" strokeDasharray="30 70" strokeDashoffset="0" className="hover:opacity-80 transition-opacity cursor-pointer group/segment1">
              <title>Treinamento cruzado: 30%</title>
            </circle>
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2563eb" strokeWidth="20" strokeDasharray="15 85" strokeDashoffset="-30" className="hover:opacity-80 transition-opacity cursor-pointer group/segment2">
              <title>Musculatura: 15%</title>
            </circle>
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#16a34a" strokeWidth="20" strokeDasharray="15 85" strokeDashoffset="-45" className="hover:opacity-80 transition-opacity cursor-pointer group/segment3">
              <title>Aulas Coletivas: 15%</title>
            </circle>
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eab308" strokeWidth="20" strokeDasharray="20 80" strokeDashoffset="-60" className="hover:opacity-80 transition-opacity cursor-pointer group/segment4">
              <title>Nação: 20%</title>
            </circle>
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#dc2626" strokeWidth="20" strokeDasharray="20 80" strokeDashoffset="-80" className="hover:opacity-80 transition-opacity cursor-pointer group/segment5">
              <title>Lutas: 20%</title>
            </circle>
          </svg>

          {/* Custom Tooltips (Absolute positioned centered styled tooltips that appear on hover) */}
          {/* Note: In pure CSS without individual segment wrappers specific positioning is hard. 
                        We will use the 'group' trick: when hovering a specific circle class, we show a specific tooltip? 
                        Tailwind can't easily peer select from SVG child to outside sibling without arbitrary variants.
                        For this level of complexity in a "Showcase", utilizing the native <title> tooltip is standard 
                        and accessible. The code above includes <title>.
                        If we REALLY want the black tooltip style:
                    */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className={`text-3xl font-bold ${text}`}>100%</span>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Total</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-orange-600"></div>
            <span className={isDark ? "text-slate-300" : "text-orange-600"}>Treinamento cruzado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-blue-600"></div>
            <span className={isDark ? "text-slate-300" : "text-blue-600"}>Musculatura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-green-600"></div>
            <span className={isDark ? "text-slate-300" : "text-green-600"}>Aulas Coletivas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <span className={isDark ? "text-slate-300" : "text-yellow-600"}>Nação</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-red-600"></div>
            <span className={isDark ? "text-slate-300" : "text-red-600"}>Lutas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChartPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero removed */}

          {/* Bar Chart */}
          <ComponentShowcase
            title="Gráfico de Barras"
            description="Exemplo visual de gráfico com tooltips"
            code={barChartCode}
            previewClassName="!block"
          >
            <BarChartPreview />
          </ComponentShowcase>

          {/* Line Chart */}
          <ComponentShowcase
            title="Gráfico de Linha"
            description="Visualização com SVG nativo"
            code={lineChartCode}
            previewClassName="!block"
          >
            <LineChartPreview />
          </ComponentShowcase>

          {/* Pie Chart */}
          <ComponentShowcase
            title="Gráfico de Donut"
            description="Gráfico circular usando conic-gradient"
            code={pieChartCode}
            previewClassName="!block"
          >
            <PieChartPreview />
          </ComponentShowcase>

          {/* Multi-segment Donut Chart */}
          <ComponentShowcase
            title="Gráfico de Rosca Multicor"
            description="Variação com múltiplos segmentos e legenda"
            code={donutChartCode}
            previewClassName="!block"
          >
            <DonutChartPreview />
          </ComponentShowcase>

          {/* API Reference */}
          <div className="pt-12 border-t border-[var(--border)]">
            <PropsTable props={chartProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
