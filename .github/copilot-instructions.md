# React Beauty Library Guidelines Checklist

## Tooling
- [ ] **Use Linaria for zero-runtime, CSS-in-JS styling.**
- [ ] **Use TypeScript for type safety and documentation.**
- [ ] **Use Prettier and ESLint for code formatting and linting.**
- [ ] **Use Vite for building and Vitest for testing.**

## 1. Coding Standards
- [ ] **Use TypeScript for all source files in every package.**
- [ ] **Follow consistent code formatting (Prettier or project-specific rules).**
- [ ] **Use named exports and manage all exports via `index.ts` in each package's `src/`.**
- [ ] **Use clear, descriptive, and consistent naming conventions for variables, functions, files, and folders (kebab-case or camelCase).**
- [ ] **Avoid magic numbers and hardcoded strings; use constants.**
- [ ] **Handle errors gracefully and avoid silent failures.**
- [ ] **All public APIs, functions, and components must be fully documented and typed using JSDoc and TypeScript.**
- [ ] **Write and colocate unit tests for all logic and components within each package.**

## 2. Component & Hook Pattern
- [ ] **Use functional components with React hooks.**
- [ ] **Keep components and hooks small and focused (Single Responsibility Principle).**
- [ ] **Use props for configuration; avoid global state unless necessary.**
- [ ] **Use context or custom hooks for shared state.**
- [ ] **Use the compound component pattern for advanced composition when appropriate (e.g., parent-child relationships, shared context).**
- [ ] **Use a prop to render a `ReactNode` when a parent component needs to render another component as a child, but they are different (e.g., slot pattern, render props).**
- [ ] **Document all props and hook parameters with TypeScript interfaces.**
- [ ] **Avoid side effects in render; use `useEffect` for side effects.**
- [ ] **Use memoization (`React.memo`, `useMemo`, `useCallback`) for performance.**

## 3. General Library Guidelines
- [ ] **Each package should be independently buildable and publishable.**
- [ ] **Use peerDependencies for React and other shared libraries in each `package.json`.**
- [ ] **Follow semantic versioning for all packages.**
- [ ] **Keep documentation up to date (README, usage examples) in each package.**
- [ ] **Ensure accessibility (ARIA attributes, keyboard navigation) for all UI components.**
- [ ] **Use CSS-in-JS or scoped CSS modules for styling (Linaria).**

## 4. Directory Structure
- [ ] **Group code by feature/module (package), placing each component or hook in its own directory with related files (test, styles, stories) inside its package's `src/`.**
- [ ] **Each package must have its own directory under `packages/` (e.g., `components/`, `hooks/`, `interfaces/`).**
- [ ] **Each package must have its own `src/`, `package.json`, `tsconfig.json`, and config files.**
- [ ] **Place tests alongside the code they test or in a `__tests__` folder within the package.**
- [ ] **Avoid deeply nested directories.**
- [ ] **Ensure all packages are discoverable from the root (e.g., via a root README or docs).**
