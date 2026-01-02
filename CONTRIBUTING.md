# Contributing to Stitch Design System Docs

Thank you for your interest in contributing! This document provides guidelines and best practices for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

---

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of Next.js, React, and Tailwind CSS

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/inoveai-design-system.git
cd inoveai-design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔄 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Changes

- Follow the [Coding Standards](#coding-standards)
- Write clear, self-documenting code
- Add comments for complex logic

### 3. Test Your Changes

```bash
# Format code
npm run format

# Build
npm run build

# Run E2E tests
npm run test:e2e
```

### 4. Commit

```bash
git add .
git commit -m "feat: add new component token system"
```

See [Commit Guidelines](#commit-guidelines) for commit message format.

---

## 📝 Coding Standards

### Color System

**✅ DO:**
```css
/* Use OKLCH for all colors */
--primary: oklch(60% 0.15 215);

/* Use semantic tokens */
background-color: var(--background);
color: var(--foreground);
```

**❌ DON'T:**
```css
/* Don't use HEX */
--primary: #0094b7;

/* Don't use hardcoded colors */
background-color: #ffffff;
```

### Design Tokens

Follow the **3-Layer Token System** (W3C DTCG v2025.10):

```css
/* Layer 1: Primitive (OKLCH values) */
--primary: oklch(60% 0.15 215);

/* Layer 2: Semantic (context-aware) */
--background: oklch(100% 0 0);
--foreground: oklch(9% 0.005 286);

/* Layer 3: Component (component-specific) */
--button-primary-bg: var(--primary);
--button-primary-fg: var(--primary-foreground);
```

### Accessibility

**All contributions MUST:**
- ✅ Meet WCAG 2.2 Level AA
- ✅ Pass APCA contrast validation
- ✅ Include `aria-label` for icon-only buttons
- ✅ Support `prefers-reduced-motion`
- ✅ Have `focus-visible` indicators

**Example:**
```tsx
// ✅ Good
<button aria-label="Close modal" onClick={handleClose}>
  <X className="h-4 w-4" />
</button>

// ❌ Bad
<button onClick={handleClose}>
  <X className="h-4 w-4" />
</button>
```

### TypeScript

- Use `strict: true` mode
- Avoid `any` (use `unknown` if necessary)
- Define interfaces for props
- Use type inference where possible

### React

- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused
- Use `React.memo()` for expensive renders

### Tailwind CSS

- Use design tokens via `var(--token-name)`
- Follow mobile-first approach
- Use `@apply` sparingly (prefer utility classes)
- Respect Prettier formatting

---

## 📦 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(tokens): add component layer tokens for buttons

- Add 6 button-specific tokens
- Follow W3C DTCG v2025.10 spec
- Include hover states using oklch(from...)

Closes #123

---

fix(a11y): improve dark mode primary button contrast

- Change --primary from oklch(60%) to oklch(50%)
- WCAG contrast improved from 3.54:1 to 4.5:1+
- Lighthouse accessibility now 100/100

Fixes #456
```

---

## 🔍 Pull Request Process

### Before Submitting

1. ✅ Code is formatted (`npm run format`)
2. ✅ Build passes (`npm run build`)
3. ✅ E2E tests pass (`npm run test:e2e`)
4. ✅ Accessibility validated (Lighthouse 95+)
5. ✅ No console errors/warnings

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
- [ ] Accessibility validated

## Screenshots (if applicable)
Light Mode | Dark Mode
```

### Review Process

1. At least 1 approval required
2. All CI checks must pass
3. No merge conflicts
4. Accessibility validation required for UI changes

---

## 🧪 Testing

### E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run specific test
npx playwright test tests/homepage.spec.ts
```

### Accessibility Testing

```bash
# Build and serve
npm run build
npm start

# Open Lighthouse in Chrome DevTools
# Run Accessibility audit
# Target: 95+ score
```

### Manual Testing Checklist

- [ ] Light mode works correctly
- [ ] Dark mode works correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] Motion respects `prefers-reduced-motion`

---

## 📚 Resources

- [OKLCH Color Picker](https://oklch.com/)
- [APCA Contrast Calculator](https://www.myndex.com/APCA/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C Design Tokens](https://design-tokens.github.io/community-group/format/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

---

## ❓ Questions?

- Open an issue for bug reports or feature requests
- Start a discussion for general questions
- Check existing issues before creating new ones

---

Thank you for contributing! 🎉
