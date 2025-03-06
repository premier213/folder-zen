---
sidebar_position: 8
id: "Cursor Rules for React Projects"
---

# Cursor Rules for React Projects

This document outlines the rules and conventions to follow for React projects in Cursor IDE. These guidelines are based on the folder-zen documentation and best practices.

## Project Structure

Choose the appropriate structure based on your framework:

### Next.js with App Router (v13+)

```bash
src/
├── app/                   # App directory (Next.js App Router) and main application logic
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
└── views/                 # Main views, layouts, and context providers
```

### Next.js with Pages Router (before v13)

```bash
src/
├── pages/                 # Pages directory (Next.js Pages Router)
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
└── views/                 # Main views, layouts, and context providers
```

### React with Vite (without Next.js)

```bash
src/
├── App.tsx                # Main App component
├── index.tsx              # Main entry point
├── routes/                # Route components
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
└── views/                 # Main views, layouts, and context providers
```

## File Naming Conventions

- **index**: Use `index.ts` or `index.tsx` for the default export of a folder
- **component**: Use PascalCase for React components (e.g., `Button.tsx`, `Header.tsx`)
- **style**: Use kebab-case for style files (e.g., `button-style.module.css`)
- **hook**: Use kebab-case for hook files (e.g., `use-fetch-data.ts`)
- **test**: Use `*.test.ts` or `*.test.tsx` for test files
- **mock**: Use `*.mock.ts` or `*.mock.tsx` for mock files
- **static**: Use kebab-case for static files (e.g., `logo.svg`, `background.jpg`)
- **service**: Use kebab-case for service files (e.g., `api-service.ts`)
- **language**: Use `*.[lang].json` for language files (e.g., `en.json`, `fr.json`)

## Case Conventions

- **PascalCase**: Use for React components, classes, enums, interfaces, types, and schemas
- **camelCase**: Use for variables, functions, state variables, event handlers, and style classes
- **SCREAMING_SNAKE_CASE**: Use for constants, configuration variables, and environment variables

## Naming Conventions

- **boolean**: Use boolean prefixes (e.g., `is`, `has`, `should`) for boolean variables
- **Array**: Use plural names for arrays (e.g., `users`, `products`)
- **Object**: Use singular names for objects (e.g., `user`, `product`)
- **Function**: Use descriptive names for functions, methods, and callbacks
- **Schema**: Use suffix `Schema` for schemas
- **Interface**: Use suffix `Interface` for interfaces
- **Type**: Use suffix `Type` for types
- **Enum**: Use suffix `Enum` for enums
- **Event**: Use suffix `Handler`, `Listener`, `Subscriber` or prefix `on` for events
- **Hook**: Use descriptive names for hooks (e.g., `useFetchProduct`)
- **State**: Use suffix `State` for state variables
- **Middleware**: Use suffix `Middleware` for middleware

## File Organization

### Small Files

Keep small, specific files within the component's file:

```tsx
// Button.tsx
import React from "react";

export interface PropsInterface {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button = (props: PropsInterface) => {
    return <button>Click me</button>;
};

export default Button;
```

### Large Files

For larger components, use a structured approach:

```bash
components/
├── Card/
│   ├── index.ts                # Barrel file for exports
│   ├── Card.tsx                # Main component
│   ├── PrintableCard.tsx       # Variant component
│   ├── card-section/           # Sub-components
│   │   └── CardSection.tsx
│   ├── hooks/                  # Component-specific hooks
│   │   ├── use-card.ts
│   │   └── use-printable-card.ts
│   ├── styles/                 # Component styles
│   │   └── card-style.module.css
│   ├── tests/                  # Component tests
│   │   ├── Card.test.tsx
│   │   └── PrintableCard.test.tsx
│   ├── types.ts                # Component types
│   ├── utils.ts                # Component utilities
│   └── constants.ts            # Component constants
```

## TypeScript Configuration

Configure path aliases in `tsconfig.json` for cleaner imports:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@c/*": ["src/components/*"],
      "@v/*": ["src/views/*"],
      "@s/*": ["src/services/*"],
      "@l/*": ["src/libs/*"],
      "@m/*": ["src/modules/*"],
      "@b/*": ["src/base/*"],
      "@/*": ["src/*"]
    }
  }
}
```

## Import and Export Rules

### Barrel Exports

Use barrel exports to combine multiple exports into a single file:

```javascript
// components/utilities/index.ts
export { default as Button } from './Button';
export { default as Alert } from './Alert';
export { default as SnackBar } from './SnackBar';
```

### Path Aliases

Use path aliases for cleaner imports:

```javascript
// ✅ Good
import Button from '@c/button/Button';
import { fetchData } from '@s/api-service';

// ❌ Bad
import Button from '../../../components/button/Button';
```

### Two-Slash Rule

When using path aliases, imports should have no more than two slashes:

```javascript
// ✅ Good: Two slashes or fewer
import Button from '@c/button/Button';          // @c/button/Button

// ❌ Bad: More than two slashes
import Button from '@c/button/icon/Button';     // Avoid this!
```

### Named vs Default Exports

- Use default exports for main components
- Use named exports for multiple related items

## Cursor-Specific Tips

1. **Code Navigation**: Use Cursor's code navigation features to quickly navigate between files
   - `Ctrl+P` to search for files
   - `Ctrl+Shift+F` to search across the entire project
   - `Ctrl+Click` on imports to navigate to their definitions

2. **AI Assistance**: Leverage Cursor's AI assistance for code generation following these conventions
   - Use AI to generate component templates that follow the project structure
   - Ask AI to refactor existing code to match the conventions

3. **Snippets**: Set up snippets in Cursor for common patterns
   - Create snippets for React components, hooks, and other common patterns
   - Ensure snippets follow the naming and case conventions

4. **Formatting**: Configure Cursor to automatically format code according to these conventions
   - Set up ESLint and Prettier to enforce the naming and case conventions
   - Configure format-on-save to ensure consistent code style

5. **Workspace Organization**: Use Cursor's workspace features to organize your project
   - Create workspace groups for different parts of the project (components, services, etc.)
   - Use split views to work on related files simultaneously

## Implementation in Your Workflow

1. **Project Setup**: When starting a new project, use these rules to set up the initial structure
2. **Code Reviews**: Reference these rules during code reviews to ensure consistency
3. **Documentation**: Keep this document updated as the project evolves
4. **Onboarding**: Share this document with new team members to ensure they follow the same conventions

## Conclusion

Following these rules will help create a clean, maintainable, and scalable React project in Cursor. Consistent naming conventions and file organization improve code readability and make it easier for developers to work on the project.