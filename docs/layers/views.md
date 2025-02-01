---
sidebar_position: 4
id: "Views Layer"
---
The `views` layer contains main views, layouts, and context providers


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
  - **📁 Absolute Path**: `@v`
  - **📁 Folder Location**: `src/views`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ✅                | ✅          | ✅             | ❌           | ❌         | ✅              |
| **📤 Can Export To**   | ❌          | ❌                | ❌          | ❌             | ❌           | ✅         | ❌              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---


The `views` layer contains main views, layouts, and context providers for the application. Each view represents a specific page or screen of the application and is composed of UI components from the `modules` layer. The `views` layer is **dependent** on the `modules` layer and can import modules to render the user interface.

## 1. Purpose of the `views` Layer

The `views` layer is responsible for:
- Defining the main views of the application
- Composing UI components from the `modules` layer
- Providing data and logic for each view
- Managing the state of the application using context providers
- Handling routing and navigation between views
- Implementing global layouts and themes for the application
- Rendering the user interface using components from the `modules` layer
- Handling user interactions and events within the views
- Communicating with the `modules` layer to fetch data and perform actions
- Implementing business logic and application flow within the views

---

## 2. Structure of the `views` Layer
<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── views/
            ├── Layout/                             # Layout view
            ├── Error/                              # Error view
            ├── Providers/                          # Providers view
            ├── Home/                               # Home view
            ├── Product/                            # Product view
            └── ...                                 # Other views
    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── views/
            ├── Layout/                             # Layout view
            ├── Error/                              # Error view
            ├── Providers/                          # Providers view
            ├── Home/                               # Home view
            |   ├── Header/                         # Header component
            |       └── Hero/                           # Hero component
            |   ├── Navigation/                     # Navigation component
            |   ├── Sidebar/                        # Sidebar component
            |   ├── Content/                        # Content component
            |   └── Footer/                         # Footer component
            ├── About/                              # About view
            ├── Dashboard/                          # Dashboard view
            ├── Product/                            # Product view
            └── ...                                 # Other views
    ```
  </TabItem>

</Tabs>

## 3. Usage of the `views` Layer

```tsx title="src/views/Product/index.tsx"
import { ProductHeader } from "./Product-header";
import { ProductSidebar } from "./Product-sidebar";
import { ProductContent } from "./Product-content";

function Product() {
  return (
    <div>
      <ProductHeader />
      <ProductSidebar />
      <ProductContent />
    </div>
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

## 4. Files in the `views` Layer

The `views` layer contains the following files:

- `Layout.tsx`: The main layout component for the application.
- `Error.tsx`: The error view component for displaying error messages.
- `Providers.tsx`: Context providers for managing global state.
- `Home.tsx`: The home view component.
- `Product.tsx`: The product view component.
- ...: Other views.