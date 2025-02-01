---
sidebar_position: 1
id: "Base Layer"
---

The **`base`** layer contains foundational configurations

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
  - **📁 Absolute Path**: `@b`
  - **📁 Folder Location**: `src/base`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ❌                | ❌          | ❌             | ❌           | ❌         | ❌              |
| **📤 Can Export To**   | ✅          | ✅                | ✅          | ✅             | ✅           | ✅         | ✅              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---

The **`base`** layer contains foundational configurations and resources that serve as the building blocks for the entire project. These resources include **themes**, **constants**, **language files**, and **environment configurations**. The `base` layer is **independent**, meaning no other layers import from it directly. Instead, it provides a centralized place for global configurations.


## 1. Purpose of the `base` Layer

The `base` layer is the first layer that is loaded when the application starts. It contains the most basic configurations and resources that are required for the application to function properly. The `base` layer is responsible for setting up the environment, loading the theme, and initializing the application.

- Providing **global configurations** like themes, constants, and environment variables.
- Centralizing **common resources** like language files.
- Ensuring **consistency** across the project by defining shared resources.
- Reducing **code duplication** by providing reusable resources.

---

## 2. Structure of the `base` Layer

<Tabs>
  <TabItem value="small" label="Small Project" default>
    ```bash
        src/
        └── base/
            ├── theme.ts           # Theme configuration
            ├── constants.ts       # Project-wide constants
            ├── enum.ts            # Enumeration constants
            ├── i18n.ts            # Language files
            ├── env-config.ts             # Environment configurations
            └── auth.ts            # Authentication configuration
            └── rq-config.ts       # React Query configuration
            └── ...
    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── base/
            ├── theme/                # Theme configurations
            │   ├── light-theme.ts    # Light theme configuration
            │   ├── dark-theme.ts     # Dark theme configuration
            │   └── index.ts          # Barrel export for themes
            ├── constants/            # Project-wide constants
            │   ├── app-constants.ts  # Application constants
            │   ├── enum.ts           # Enumeration constants
            │   └── index.ts          # Barrel export for constants
            ├── i18n/                 # Language files
            │   ├── en.ts             # English language keys
            │   ├── es.ts             # Spanish language keys
            │   └── index.ts          # Barrel export for language files
            ├── env/                  # Environment configurations
            │   ├── dev.ts            # Development environment config
            │   ├── prod.ts           # Production environment config
            │   └── index.ts          # Barrel export for env configs
            └── auth.ts               # Authentication configuration
            └── rq-config.ts          # React Query configuration
            └── ...

    ```
  </TabItem>

</Tabs>

---

## 3. Usage of the `base` Layer

The `base` layer can be used to define global configurations and resources that are shared across the entire project. It is **independent** and can be imported and used from any other layer.

```tsx title="src/base/theme.ts"
import { theme } from "./theme";

export { theme };
```

```tsx title="src/app/index.tsx"
import { theme } from "@b/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
}
```

## 4. Files in the `base` Layer

The `base` layer contains the following files:

- `theme`: Theme configurations for the application.
- `constants`: Project-wide constants.
- `enum`: Enumeration constants.
- `i18n`: Language files.
- `env-config`: Environment configurations.
- `auth`: Authentication configuration.
- `rq-config`: React Query configuration.
- ... (additional files as needed)