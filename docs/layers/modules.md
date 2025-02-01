---
sidebar_position: 3
id: "Modules Layer"
---
The **`modules`** layer contains feature-based modules


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
  - **📁 Absolute Path**: `@m`
  - **📁 Folder Location**: `src/modules`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ✅                | ✅          | ❌             | ❌           | ❌         | ✅              |
| **📤 Can Export To**   | ❌          | ❌                | ❌          | ❌             | ✅           | ✅         | ❌              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---


The **`modules`** layer contains feature-based modules that encapsulate the business logic, state management, and UI components for a specific feature of the application. Each module represents a self-contained unit of functionality that can be developed, tested, and deployed independently. The `modules` layer is **independent** and can be used in `views` and `app` layers of the application.

## 1. Purpose of the `modules` Layer

The `modules` layer is responsible for:
- Encapsulating **business logic** and state management for a specific feature.
- Providing **reusable UI components** that can be used across different parts of the application.
- Enabling **testability** and **reusability** of code.
- Supporting **modularity** and **scalability** of the application.
- Facilitating **collaboration** among team members working on different features.
- Ensuring **maintainability** and **reliability** of the application.
- Promoting **separation of concerns** and **clean architecture**.
- Providing **flexibility** and **adaptability** to future changes and enhancements.
- Enhancing **developer experience** and **productivity**.

---

## 2. Structure of the `modules` Layer

<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── modules/
            ├── Product/                            # Product module
            ├── Drawer/                             # Drawer module
            ├── Cart/                               # Cart module
            ├── Checkout/                           # Checkout module
            └── Payment/                            # Payment module
            └── ...                                 # Other module
    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── modules/
            ├── Product/                            # Product module
            |   ├── Product-header/                 # Product header module
            |   |   ├── ProductHeader.tsx           # Product header component
            |   |   ├── ProductHeader.module.css    # Product header styles
            |   |   ├── ProductHeader.types.ts      # Product header types
            |   |   ├── ProductHeader.model.ts      # Product header model
            |   ├── Product-list/                   # Product list module
            |   |   ├── ProductList.tsx             # Product list component
            |   |   ├── ProductList.module.css      # Product list styles
            |   |   ├── ProductList.types.ts        # Product list types
            |   |   ├── ProductList.model.ts        # Product list model
            |   ├── Product-details/                # Product details module
            |   |   ├── ProductDetails.tsx          # Product details component
            |   |   ├── ProductDetails.module.css   # Product details styles
            |   |   ├── ProductDetails.types.ts     # Product details types
            |   |   ├── ProductDetails.model.ts     # Product details model
            |   ├── Product-form/                   # Product form module
            |   |   ├── ProductForm.tsx             # Product form component
            |   |   ├── ProductForm.module.css      # Product form styles
            |   |   ├── ProductForm.types.ts        # Product form types
            |   |   ├── ProductForm.model.ts        # Product form model
            └── ...                                 # Other modules
    ```
  </TabItem>

</Tabs>

## 3. Usage of the `modules` Layer

```tsx title="src/modules/Product/index.tsx"
import { ProductHeader } from "./Product-header";
import { ProductList } from "./Product-list";
import { ProductDetails } from "./Product-details";
import { ProductForm } from "./Product-form";

export { ProductHeader, ProductList, ProductDetails, ProductForm };
```

```tsx title="src/app/index.tsx"
import { Product } from "@m/Product";

function App() {
  return (
    <div>
      <Product />
    </div>
  );
}
```
---

## 4. Files in the `modules` Layer

The `modules` layer contains the following files:

- This folder contains UI components specific to the feature.
- This folder contains the business logic and state management for the feature.
- This folder contains the data models and types for the feature.
- This folder contains the styles for the feature.
- This folder contains the tests for the feature.
- This folder contains the documentation for the feature.