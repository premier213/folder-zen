---
sidebar_position: 4
id: "TypeScript in Folder Structure"
---

This document explains how to handle **path aliases** in TypeScript to simplify imports and improve code readability.

## Why Use Path Aliases?

- **Readability**: Avoid long and confusing relative paths like `../../../components/Button`.
- **Maintainability**: Easily refactor your project without breaking imports.
- **Consistency**: Use consistent and clean import paths across your project.

---

## Step 1: Configure `tsconfig.json`

To enable path aliases, you need to configure the `paths` option in your `tsconfig.json` file.

```json title="tsconfig.json"
{
    "compilerOptions": {
        "baseUrl": "." // Set the base URL to the current directory,
        "paths": {
            "@c/*": ["src/components/*"] // Map `@c/*` to `src/components/*`
            "@v/*": ["src/views/*"] // Map `@v/*` to `src/views/*`
            "@s/*": ["src/services/*"] // Map `@s/*` to `src/services/*`
            "@l/*": ["src/libs/*"] // Map `@u/*` to `src/libs/*`
            "@m/*": ["src/modules/*"] // Map `@m/*` to `src/modules/*`
            "@b/*": ["src/base/*"] // Map `@b/*` to `src/base/*`
        }
    }
}
```

---

## Step 2: Create Path Aliases

Now, you can use path aliases in your TypeScript code. For example, `import { Button } from '@c/Button';` instead of `import { Button } from '../components/Button';`.

```tsx title="src/components/Button.tsx"
import React from 'react';

const Button: React.FC = () => {

    return (
        <button>Click me!</button>
    )

}

export default Button;
```

---

## Conclusion

By following these steps, you can easily handle path aliases in TypeScript, making your project more maintainable and readable.