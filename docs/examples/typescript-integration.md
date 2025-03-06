---
sidebar_position: 2
id: "TypeScript Integration Example"
---

# TypeScript Integration Example

This example demonstrates how to integrate TypeScript in a Next.js project following the Folder-Zen structure.

## Project Setup

### 1. TypeScript Configuration

First, let's set up the TypeScript configuration in `tsconfig.json`:

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
    "plugins": [
      {
        "name": "next"
      }
    ],
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
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 2. Next.js Configuration

Configure Next.js to work with TypeScript:

```js title="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

## Type Organization Examples

### 1. Global Types

Create a global types directory for types used across the application:

```ts title="src/types/index.ts"
// Re-export all types
export * from './api';
export * from './common';
export * from './theme';
```

```ts title="src/types/common.ts"
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
```

```ts title="src/types/api.ts"
import { Pagination } from './common';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: Pagination;
}
```

### 2. Component Types

Create types for components:

```ts title="src/components/ui/Button/Button.types.ts"
import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}
```

```tsx title="src/components/ui/Button/Button.tsx"
import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = '',
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
```

### 3. Module Types

Create types for modules:

```ts title="src/modules/auth/types/index.ts"
export * from './user';
export * from './auth';
```

```ts title="src/modules/auth/types/user.ts"
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface UserProfile extends User {
  avatar?: string;
  bio?: string;
  location?: string;
}
```

```ts title="src/modules/auth/types/auth.ts"
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}
```

### 4. Service Types

Create types for services:

```ts title="src/services/api/types.ts"
import { ApiResponse, PaginatedResponse } from '@/types';
import { User } from '@m/auth/types';

export interface UserApiResponse extends ApiResponse<User> {}
export interface UsersApiResponse extends PaginatedResponse<User> {}
```

## Practical Usage Examples

### 1. Using Path Aliases

```tsx title="src/modules/auth/components/LoginForm/LoginForm.tsx"
import { useState } from 'react';
import { LoginCredentials } from '@m/auth/types';
import Button from '@c/ui/Button';
import { authService } from '@s/auth';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onError }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.login(credentials);
      onSuccess();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <Button
        variant="primary"
        size="medium"
        disabled={loading}
        className={styles.submitButton}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </Button>
    </form>
  );
};

export default LoginForm;
```

### 2. Using TypeScript Utility Types

```tsx title="src/services/auth/authService.ts"
import { ApiResponse } from '@/types';
import { LoginCredentials, User } from '@m/auth/types';
import { apiService } from '@s/api';

// Using TypeScript utility types
type LoginResponse = ApiResponse<{ user: User; token: string }>;
type RegisterParams = Omit<User, 'id' | 'role'> & { password: string };

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return apiService.post<LoginResponse>('/auth/login', credentials);
  },

  async register(params: RegisterParams): Promise<LoginResponse> {
    return apiService.post<LoginResponse>('/auth/register', params);
  },

  async logout(): Promise<void> {
    return apiService.post<void>('/auth/logout');
  },

  async getProfile(): Promise<ApiResponse<User>> {
    return apiService.get<User>('/auth/profile');
  }
};
```

### 3. Using Type Guards

```tsx title="src/libs/utils/typeGuards.ts"
import { User } from '@m/auth/types';

export function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'email' in obj &&
    'role' in obj
  );
}

export function isApiError(obj: unknown): obj is { message: string; status: number } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'message' in obj &&
    'status' in obj
  );
}
```

```tsx title="src/modules/auth/hooks/useAuth.ts"
import { useState, useEffect } from 'react';
import { User } from '@m/auth/types';
import { authService } from '@s/auth';
import { isUser, isApiError } from '@l/utils/typeGuards';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authService.getProfile();

        if (isUser(response.data)) {
          setUser(response.data);
        } else {
          setError('Invalid user data');
        }
      } catch (err) {
        if (isApiError(err)) {
          setError(err.message);
        } else {
          setError('Failed to fetch user profile');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
```

## Conclusion

This example demonstrates how to integrate TypeScript in a Next.js project following the Folder-Zen structure. By organizing types according to the layer they belong to and using TypeScript features like utility types and type guards, you can create a type-safe and maintainable application.