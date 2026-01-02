"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const barChartCode = `<!-- Bar Chart -->
<div class="w-full h-64 flex items-end justify-between gap-2 p-4 rounded-lg border border-border bg-card">
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
<div class="w-full h-64 p-4 rounded-lg border border-border bg-card flex items-center justify-center">
  <svg viewBox="0 0 500 200" class="w-full h-full text-primary">
    <!-- Grid lines -->
    <g class="stroke-border" stroke-width="1">
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
    <circle cx="0" cy="150" r="4" class="fill-card stroke-current" stroke-width="2" />
    <circle cx="250" cy="100" r="4" class="fill-card stroke-current" stroke-width="2" />
    <circle cx="500" cy="20" r="4" class="fill-card stroke-current" stroke-width="2" />
  </svg>
</div>`;

const pieChartCode = `<!-- Pie Chart (CSS) -->
<div class="flex items-center justify-center gap-8 p-6 rounded-lg border border-border bg-card">
  <!-- Chart -->
  <div class="relative size-40 rounded-full" 
    style="background: conic-gradient(var(--primary) 0% 60%, hsl(var(--muted)) 60% 100%)">
    <!-- Center hole for Donut effect -->
    <div class="absolute inset-4 rounded-full bg-card flex items-center justify-center">
      <span class="text-2xl font-bold text-foreground">60%</span>
    </div>
  </div>
  
  <!-- Legend -->
  <div class="space-y-2">
    <div class="flex items-center gap-2">
      <div class="size-3 rounded-full bg-primary"></div>
      <span class="text-sm text-muted-foreground">Concluído</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="size-3 rounded-full bg-muted"></div>
      <span class="text-sm text-muted-foreground">Pendente</span>
    </div>
  </div>
</div>`;

const chartProps: PropDefinition[] = [
  {
    name: "data",
    type: "object[]",
    description: "Dados do gráfico",
  },
  {
    name: "type",
    type: '"bar" | "line" | "pie"',
    defaultValue: '"bar"',
    description: "Tipo de visualização",
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Altura do gráfico em pixels",
  },
  {
    name: "colors",
    type: "string[]",
    description: "Cores personalizadas para as séries",
  },
];

function BarChartPreview() {
  // Tooltip mantém sempre dark para contraste
  const tooltipClass =
    "absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none";

  return (
    <div className="border-border bg-card flex h-64 w-full items-end justify-between gap-2 rounded-lg border p-4">
      <div
        className="bg-primary/20 hover:bg-primary/30 group relative w-full rounded-t-sm transition-colors"
        style={{ height: "40%" }}
      >
        <div className={tooltipClass}>40%</div>
      </div>
      <div
        className="bg-primary/40 hover:bg-primary/50 group relative w-full rounded-t-sm transition-colors"
        style={{ height: "70%" }}
      >
        <div className={tooltipClass}>70%</div>
      </div>
      <div
        className="bg-primary/60 hover:bg-primary/70 group relative w-full rounded-t-sm transition-colors"
        style={{ height: "50%" }}
      >
        <div className={tooltipClass}>50%</div>
      </div>
      <div
        className="bg-primary/80 hover:bg-primary/90 group relative w-full rounded-t-sm transition-colors"
        style={{ height: "90%" }}
      >
        <div className={tooltipClass}>90%</div>
      </div>
      <div
        className="bg-primary hover:bg-primary/90 group relative w-full rounded-t-sm transition-colors"
        style={{ height: "60%" }}
      >
        <div className={tooltipClass}>60%</div>
      </div>
    </div>
  );
}

function LineChartPreview() {
  return (
    <div className="border-border bg-card flex h-64 w-full items-center justify-center rounded-lg border p-4">
      <svg viewBox="0 0 500 200" className="text-primary h-full w-full">
        <g className="stroke-border" strokeWidth="1">
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
        <circle cx="0" cy="150" r="4" className="fill-card stroke-current" strokeWidth="2" />
        <circle cx="250" cy="100" r="4" className="fill-card stroke-current" strokeWidth="2" />
        <circle cx="500" cy="20" r="4" className="fill-card stroke-current" strokeWidth="2" />
      </svg>
    </div>
  );
}

function PieChartPreview() {
  return (
    <div className="border-border bg-card flex items-center justify-center gap-8 rounded-lg border p-6">
      <div
        className="relative size-40 rounded-full"
        style={{ background: `conic-gradient(var(--primary) 0% 60%, hsl(var(--muted)) 60% 100%)` }}
      >
        <div className="bg-card absolute inset-4 flex items-center justify-center rounded-full">
          <span className="text-foreground text-2xl font-bold">60%</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-primary size-3 rounded-full"></div>
          <span className="text-muted-foreground text-sm">Concluído</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted size-3 rounded-full"></div>
          <span className="text-muted-foreground text-sm">Pendente</span>
        </div>
      </div>
    </div>
  );
}

const donutChartCode = `<!-- Donut Chart Multi-segment (SVG) -->
<div class="p-6 rounded-lg border border-border bg-card shadow-sm">
  <div class="flex items-center gap-2 mb-6">
    <div class="w-1 h-5 bg-blue-600 rounded-full"></div>
    <h3 class="font-semibold text-foreground">Modalidades de Interesse</h3>
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
      
      <!-- Center Text -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="text-center">
          <span class="text-3xl font-bold text-foreground">100%</span>
          <p class="text-xs text-muted-foreground">Total</p>
        </div>
      </div>
    </div>
    
    <!-- Legend -->
    <div class="flex flex-wrap justify-center gap-4 text-sm">
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-orange-600"></div>
        <span class="text-muted-foreground">Treinamento cruzado (30%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-blue-600"></div>
        <span class="text-muted-foreground">Musculatura (15%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-green-600"></div>
        <span class="text-muted-foreground">Aulas Coletivas (15%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-yellow-500"></div>
        <span class="text-muted-foreground">Nação (20%)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="size-3 rounded-full bg-red-600"></div>
        <span class="text-muted-foreground">Lutas (20%)</span>
      </div>
    </div>
  </div>
</div>`;

function DonutChartPreview() {
  return (
    <div className="border-border bg-card mx-auto w-full max-w-lg rounded-lg border p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-5 w-1 rounded-full bg-blue-600"></div>
        <h3 className="text-foreground font-semibold">Modalidades de Interesse</h3>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* SVG Chart */}
        <div className="group/chart relative size-48">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {/* Segments */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#ea580c"
              strokeWidth="20"
              strokeDasharray="30 70"
              strokeDashoffset="0"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <title>Treinamento cruzado: 30%</title>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#2563eb"
              strokeWidth="20"
              strokeDasharray="15 85"
              strokeDashoffset="-30"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <title>Musculatura: 15%</title>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#16a34a"
              strokeWidth="20"
              strokeDasharray="15 85"
              strokeDashoffset="-45"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <title>Aulas Coletivas: 15%</title>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#eab308"
              strokeWidth="20"
              strokeDasharray="20 80"
              strokeDashoffset="-60"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <title>Nação: 20%</title>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#dc2626"
              strokeWidth="20"
              strokeDasharray="20 80"
              strokeDashoffset="-80"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <title>Lutas: 20%</title>
            </circle>
          </svg>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-foreground text-3xl font-bold">100%</span>
              <p className="text-muted-foreground text-xs">Total</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-orange-600"></div>
            <span className="text-muted-foreground">Treinamento cruzado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-blue-600"></div>
            <span className="text-muted-foreground">Musculatura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-green-600"></div>
            <span className="text-muted-foreground">Aulas Coletivas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <span className="text-muted-foreground">Nação</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-red-600"></div>
            <span className="text-muted-foreground">Lutas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChartPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
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
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={chartProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
