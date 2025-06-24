# React Beauty Library Guidelines Checklist

## Tooling
- [ ] **Use Linaria for zero-runtime, CSS-in-JS styling.**
- [ ] **Use TypeScript for type safety and documentation.**
- [ ] **Use Prettier and ESLint for code formatting and linting.**
- [ ] **Use Vite for building and Vitest for testing.**

## 1. Coding Standards
- [ ] **Use TypeScript for all source files in every package.**
- [ ] **Define all interfaces and types for a component in a `types.ts` file at the same directory level as the component.**
- [ ] **Each component must have a barrel file (`index.ts`) at the same directory level to manage all exports.**
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

## 3. Storybook Guidelines
- [ ] **Write all stories in TypeScript (`.tsx`).**
- [ ] **Name story files as `<component>.stories.tsx`.**
- [ ] **Colocate stories with their component in the package's `src/` directory.**
- [ ] **Use named exports for all stories.**
- [ ] **Use Storybook's `Meta` and `StoryObj` types for type safety.**
- [ ] **Define `args` and `argTypes` for controls and documentation.**
- [ ] **Use the `render` function for custom story rendering when needed.**
- [ ] **Use the `satisfies` operator to ensure type correctness.**
- [ ] **Document all props and provide usage examples via stories.**
- [ ] **Use clear, descriptive story names.**
- [ ] **Present all available variants, sizes, and states of each component as separate stories.**
- [ ] **Include stories for edge cases (e.g., loading, disabled, error, empty).**
- [ ] **Show examples for icons, slots, or custom render props if supported.**
- [ ] **Ensure stories demonstrate accessibility features (keyboard, ARIA, etc.).**

## 4. General Library Guidelines
- [ ] **Each package should be independently buildable and publishable.**
- [ ] **Use peerDependencies for React and other shared libraries in each `package.json`.**
- [ ] **Follow semantic versioning for all packages.**
- [ ] **Keep documentation up to date (README, usage examples) in each package.**
- [ ] **Ensure accessibility (ARIA attributes, keyboard navigation) for all UI components.**
- [ ] **Use CSS-in-JS or scoped CSS modules for styling (Linaria).**


## 5. Linaria Styles Guidelines
- [ ] **Create a `styles.ts` file in the same directory as each component, and use only Linaria (`@linaria/core` or `@linaria/react`) for all component styles.**
- [ ] **Define all component styles as named exports in `styles.ts`, using semantic, descriptive class names.**
- [ ] **Use design system tokens (CSS variables) for all colors, spacing, font sizes, and radii—never hardcode these values.**
- [ ] **Colocate all style logic (including variants, states, and responsive styles) in `styles.ts`, and update it when design tokens or component variants change.**
- [ ] **Prefer using data attribute selectors (e.g., `[data-state]`, `[data-variant]`) in Linaria styles to target component states and variants, rather than relying solely on class names.**
- [ ] **When possible, create Linaria components (using `styled` from `@linaria/react`) instead of only exporting classes, to enable more flexible and prop-driven styling.**
- [ ] **Import only exported Linaria classes or components from `styles.ts` into the component’s `className` or as a styled component; do not use inline styles or className strings for design system values.**
- [ ] **Document any non-obvious style logic or overrides in `styles.ts`, and keep it focused (do not export unrelated helpers or logic).**
- [ ] **Review styles for accessibility (focus, contrast, disabled states, etc.), and lint/format `styles.ts` with project ESLint/Prettier rules.**

## 6. Directory Structure
- [ ] **Group code by feature/module (package), placing each component or hook in its own directory with related files (test, styles, stories) inside its package's `src/`.**
- [ ] **Use kebab-case for all directory and file names.**
- [ ] **Each package must have its own directory under `packages/` (e.g., `components/`, `hooks/`, `interfaces/`, `ui/`).**
- [ ] **Each package must have its own `src/`, `package.json`, `tsconfig.json`, and config files.**
- [ ] **Place tests alongside the code they test or in a `__tests__` folder within the package.**
- [ ] **Avoid deeply nested directories.**
- [ ] **Ensure all packages are discoverable from the root (e.g., via a root README or docs).**
