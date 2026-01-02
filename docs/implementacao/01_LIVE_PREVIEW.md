# Guia de Implementação: Live Preview com Iframe

> **Data**: 2024-12-14
> **Alvo**: `app/components/[slug]/page.tsx`

## 1. O Problema

Atualmente, a página de detalhes exibe:

```tsx
<img src={component.darkMode.screenshot} ... />
```

Isso impede que o usuário teste interações como hover, focus, inputs, etc.

## 2. A Solução

Substituir a imagem estática por um componente `iframe` que renderiza o HTML raw do componente.

### Detalhes Técnicos

1. **Server Side**:
   - Já existe leitura do arquivo HTML:
     ```typescript
     if (fs.existsSync(darkHtmlPath)) {
       darkHtmlCode = fs.readFileSync(darkHtmlPath, "utf-8");
     }
     ```
2. **Client Side**:
   - Criar um `iframe` sem borda.
   - Usar `srcDoc` para injetar o HTML diretamente (evita problemas de path relativo se configurado corretamente, ou usar rota de API).
   - **Melhor Abordagem**: Como os arquivos estão em `public/html/...`, podemos apontar o `src` do iframe diretamente para a URL pública (ex: `/html/autocomplete_dark.html`). Isso garante que scripts e estilos relativos funcionem se houver.

### Mudanças no Código

Arquivo: `app/components/[slug]/page.tsx`

**Antes:**

```tsx
<img src={component.darkMode.screenshot} ... />
```

**Depois:**

```tsx
<div className="border-border-dark bg-background-dark h-[500px] w-full overflow-hidden rounded-lg border">
  <iframe
    src={component.darkMode.htmlPath} // Ex: /html/autocomplete_dark.html
    className="h-full w-full"
    title={`${component.name} preview`}
  />
</div>
```

## 3. Checklist de Execução

- [ ] Identificar a área de preview no código.
- [ ] Substituir `img` por `iframe`.
- [ ] Ajustar altura do container para garantir visibilidade.
- [ ] Manter a imagem como fallback ou opção de visualização secundária? (Decisão: Substituir por enquanto para forçar interatividade).
