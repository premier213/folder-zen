---
sidebar_position: 4
id: "TypeScript in Folder Structure"
---

# TypeScript Integration in Folder-Zen

This document provides comprehensive guidelines for integrating TypeScript into your Folder-Zen project structure, covering path aliases, type organization, and best practices.

## 1. Path Aliases Configuration

### Why Use Path Aliases?

- **Readability**: Avoid long and confusing relative paths like `../../../components/Button`.
- **Maintainability**: Easily refactor your project without breaking imports.
- **Consistency**: Use consistent and clean import paths across your project.
- **Navigation**: Improve IDE navigation and auto-imports.

### Configure `tsconfig.json`

To enable path aliases, configure the `paths` option in your `tsconfig.json` file:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
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
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Next.js Configuration

For Next.js projects, you also need to configure path aliases in `next.config.js`:

```js title="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add webpack configuration for path aliases if needed
  webpack: (config) => {
    // Add any custom webpack configuration here
    return config;
  },
}

module.exports = nextConfig
```

### Vite Configuration

For Vite projects, configure path aliases in `vite.config.ts`:

```ts title="vite.config.ts"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve(__dirname, './src/components'),
      '@v': path.resolve(__dirname, './src/views'),
      '@s': path.resolve(__dirname, './src/services'),
      '@l': path.resolve(__dirname, './src/libs'),
      '@m': path.resolve(__dirname, './src/modules'),
      '@b': path.resolve(__dirname, './src/base'),
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

## 2. Type Organization

### Types Directory Structure

Organize your types based on the layer they belong to:

```bash
src/
├── types/                 # Global type definitions
│   ├── index.ts           # Re-export all types
│   ├── api.ts             # API-related types
│   ├── common.ts          # Common types used across the application
│   └── theme.ts           # Theme-related types
```

### Co-locating Types with Components

For component-specific types, co-locate them with the component:

```tsx title="src/components/Button/Button.types.ts"
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

```tsx title="src/components/Button/Button.tsx"
import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Module Types

For module-specific types, organize them within the module:

```bash
src/
├── modules/
│   ├── auth/
│   │   ├── types/         # Auth module types
│   │   │   ├── index.ts   # Re-export all auth types
│   │   │   ├── user.ts    # User-related types
│   │   │   └── auth.ts    # Authentication-related types
```

## 3. TypeScript Best Practices

### Use Strict Mode

Enable strict mode in your `tsconfig.json` to catch more errors during development:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

### Type Inference vs. Explicit Types

Use type inference when it's clear, but add explicit types for function parameters and return types:

```tsx
// Good: Type inference for simple variables
const count = 0; // TypeScript infers number

// Good: Explicit types for function parameters and return types
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
```

### Use TypeScript Utility Types

Leverage TypeScript utility types to create derived types:

```tsx
// Original type
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Derived types using utility types
type UserWithoutPassword = Omit<User, 'password'>;
type UserCredentials = Pick<User, 'email' | 'password'>;
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
```

### Type Guards for Runtime Type Checking

Use type guards for runtime type checking:

```tsx
function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'email' in obj
  );
}

function processData(data: unknown) {
  if (isUser(data)) {
    // TypeScript knows data is User here
    console.log(data.name);
  }
}
```

## 4. API Type Definitions

### Define API Response Types

Create types for API responses to ensure type safety:

```tsx title="src/services/api/types.ts"
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}
```

### Use Generic Types for API Services

Use generic types for API services to ensure type safety:

```tsx title="src/services/api/apiService.ts"
import { ApiResponse } from './types';

async function get<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const apiService = {
  get
};
```

## Conclusion

By following these TypeScript integration guidelines, you can create a type-safe, maintainable, and scalable application using the Folder-Zen structure. TypeScript enhances developer experience by providing better tooling, catching errors early, and improving code documentation.