---
sidebar_position: 5
id: "Import and Export Rules"
---

This document outlines the rules for importing and exporting files and modules in the project.

## **Barrel Exports**

Use **Barrel Exports** to combine multiple exports into a single file. This simplifies imports and improves readability.

## **Absolute Paths**

Use absolute paths for imports and exports. This ensures that imports and exports are consistent and easy to understand.

## **Named vs Default Exports**

Use named exports for specific components or modules, and default exports for common utilities or functions.

## **Two-Slash Rule for Path Aliases**

When using **Path Aliases** (e.g., `@c`, `@h`, `@s`), imports should have **no more than two slashes (`/`)**. This ensures clean and readable import paths.

## Example:
```javascript
// ✅: Two slashes or fewer
import Button from '@c/button/Button';          // @c/button/Button
import IconButton from '@c/button/IconButton';  // @c/button/IconButton
import useAuth from '@h/use-auth';               // @h/useAuth
import { fetchData } from '@s/api-service';      // @s/api-service

// ❌: More than two slashes
import Button from '@c/button/icon/Button';     // Avoid this!
```

## Conclusion

By following these rules for importing and exporting files and modules, you can improve the maintainability and readability of your project.