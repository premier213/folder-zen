---
sidebar_position: 7
id: "libs Layer"
---
The `libs` layer contains utility functions and helper functions that are used across the application. It is used to store utility functions that are shared between different layers in the application.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<div style={{
 border: '2px solid var(--border-color)',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: 'var(--background-color)',
  margin: '16px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  color: 'var(--text-color)'
}}>

### Details
  - **📁 Absolute Path**: `@l`
  - **📁 Folder Location**: `src/libs`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ❌                | ✅          | ❌             | ❌           | ❌         | ❌              |
| **📤 Can Export To**   | ❌          | ✅                | ✅          | ✅             | ✅           | ✅         | ✅              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---


The `libs` layer contains utility functions and helper functions. It is used to store utility functions that are used across the application. The `libs` layer can be imported and used by any layer in the application.

## 1. Purpose of the `libs` Layer

The `libs` layer is responsible for:

- Storing utility functions that are used across the application.
- Providing reusable functions that can be used by different layers in the application.
- Ensuring code reuse and maintainability.
- Centralizing common utility functions.
- Reducing code duplication.
- Improving code organization and structure.

---

## 2. Structure of the `libs` Layer
<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── libs/
            ├── context.ts                         # Project-wide constants
            ├── hooks.ts                           # Custom hooks
            ├── store.ts                           # Store utility functions
            └── utils.ts                            # Other utility functions

    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── libs/
            ├── context/                           # Project-wide constants
            ├── hooks/                             # Custom hooks
                ├── ...                            # Other hooks
            ├── store/                             # Store utility functions
            └── ...                                # Other utility functions
    ```
  </TabItem>

</Tabs>

---

## 3. Usage of the `libs` Layer

```tsx title="src/libs/hooks/use-auth.ts"
import {useContext} from "react";
import {AuthContext} from "@l/store/auth";

export function useAuth() {
  return useContext(AuthContext);
}

```

## 4. Files in the `libs` Layer

The `libs` layer contains the following files:

- `context`: React context or global state.
- `hooks`: Custom hooks.
- `store`: Managing global state.
- `utils`: Other utility functions and helpers.