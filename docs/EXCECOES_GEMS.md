# Exceções Aprovadas - GEMS 5.0

Este documento lista as exceções oficiais onde o uso de tokens do Design System pode ser flexibilizado.

## 🚨 Regra Geral

O uso de tokens semânticos (ex: `bg-background`, `text-primary`) é **obrigatório**. Exceções são raras e devem ser tecnicamente justificadas.

---

## 🟢 Exceções Válidas

### 1. Cores de Marcas de Terceiros (Social Logins)
Cores oficiais de marcas que não podem ser alteradas.

- **Google**: `#DB4437`, `#4285F4`, `#0F9D58`, `#F4B400`
- **Facebook**: `#1877F2`
- **GitHub**: `#181717` (Dark), `#FFFFFF` (Light)
- **Twitter/X**: `#000000`

**Exemplo:**
```css
.btn-google {
  background-color: #DB4437; /* Permitido */
  color: white;
}
```

### 2. Ilustrações e Data Viz Específicos
Gráficos complexos que exigem mais cores do que a paleta semântica oferece.

- **Charts**: Cores categóricas (D3.js, Recharts)
- **Maps**: Estilos de mapa (Mapbox, Google Maps)
- **Ilustrações SVG**: Gráficos vetoriais complexos

### 3. Sincronização com Tema do Editor (Monaco)
O editor de código pode usar temas específicos (ex: VS Code Dark) que fogem da paleta do sistema.

- Tokens do Monaco Editor
- Syntax highlighting

---

## 🛑 Proibido (Não são exceções)

1. **"Queria um cinza um pouco mais escuro"**
   - Use `text-muted-foreground` alternativo ou `bg-muted`. Não invente `#666`.

2. **"Precisa chamar mais atenção"**
   - Use `text-primary` ou `font-bold`. Não use cores fora da marca.

3. **Backgrounds Arbitrários**
   - Use as camadas: `bg-background` → `bg-card` → `bg-popover`.

---

## 📝 Processo de Solicitação

Para propor uma nova exceção:

1. Abra uma **Issue** no GitHub.
2. Use o template "Solicitação de Exceção GEMS".
3. Aguarde revisão da equipe de Design System.
