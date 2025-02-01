---
sidebar_position: 5
id: "App or Pages Layer"
---

The app layer is the entry point of the application

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
  - **📁 Folder Location**: `src/app`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ✅                | ✅          | ✅             | ✅           | ❌         | ✅              |
| **📤 Can Export To**   | ❌          | ❌                | ❌          | ❌             | ❌           | ❌         | ❌              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---

The app layer is the entry point of the application and is responsible for initializing the app, setting up global configurations, and rendering the root layout.


## 1. Purpose of the `app` Layer

The `app` layer is responsible for:

- Initializing the app
- Setting up global configurations
- Rendering the root layout

---

## 2. Structure of the `views` Layer
<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── app/
            ├── auth/                               # Authentication
            ├── dashboard/                          # Dashboard
            ├── home/                               # Home
            ├── ...                                 # Other views

    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── app/
            ├── auth/                               # Authentication
            ├── dashboard/                          # Dashboard
            ├── home/                               # Home
            |   ├── [index.tsx]                     # Home view
            ├── ...                                 # Other views
    ```
  </TabItem>

</Tabs>

## 3. Usage of the `app` Layer

```tsx title="src/app/index.tsx"
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "./providers/ThemeProvider";
import { StoreProvider } from "./providers/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
}
```

```tsx title="src/app/index.tsx"
import { Product } from "@v/Product";

function App() {
  return (
    <div>
      <Product />
    </div>
  );
}
```
---

## 4. Files in the `app` Layer

The `app` layer contains the following files:

- **`auth/`**: Contains authentication-related files
- **`dashboard/`**: Contains dashboard-related files
- **`home/`**: Contains home-related files
- **`...`**: Other files in the `app` layer