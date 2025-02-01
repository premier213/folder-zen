---
sidebar_position: 2
id: "Components Layer"
---

The **`components`** layer contains reusable UI components

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
  - **📁 Absolute Path**: `@c`
  - **📁 Folder Location**: `src/components`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ✅                | ❌          | ❌             | ❌           | ❌         | ❌              |
| **📤 Can Export To**   | ❌          | ✅                | ❌          | ✅             | ✅           | ✅         | ❌              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---

The **`components`** layer contains reusable UI components that are shared across the project. These components are **independent** and can be used in `modules` and `views` , `app` layers of the application. The `components` layer is responsible for defining the visual elements of the application, such as buttons, forms, modals, and more.

## 1. Purpose of the `components` Layer

The `components` layer is responsible for:
- Providing **reusable UI components** that are used across the entire project.
- Ensuring **consistency** in design and behavior.
- Reducing **code duplication** by centralizing shared UI elements.
- Supporting **customization** through props and theming.

---

## 2. Structure of the `components` Layer

<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── components/
            ├── Button.tsx          # Button component
            ├── Input.tsx           # Input component
            ├── Card.tsx            # Card component
            ├── Modal.tsx           # Modal component
            ├── Navbar.tsx          # Navbar component
    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
```bash
        src/
        └── components/
            ├── Input/                  # Common components
            |   ├── TextInput.tsx       # Input component
            |   ├── Select.tsx          # Select component
            |   ├── Checkbox.tsx        # Checkbox component
            |   ├── Radio.tsx           # Radio component
            |   ├── input.module.css    # Input styles
            |   ├── types.ts            # Input types
            |   ├── model.ts            # Input model
            |   ├── Switch/
            |   |   ├── index.tsx       # Switch component
            |   |   ├── Switch.test.tsx # Switch test file
            |   ├── ...                 # Other common components
            ├── Button/                 # Button components
            |   ├── Button.tsx          # Button component
            |   ├── IconButton.tsx      # IconButton component
            ├── Card/                   # Card components
            |   ├── Card.tsx            # Card component
            |   ├── CardHeader.tsx      # CardHeader component
            ├── Modal/                  # Modal components
            |   ├── Modal.tsx           # Modal component
            |   ├── ModalHeader.tsx     # ModalHeader component
            ├── Navbar/                 # Navbar components
            |   ├── Navbar.tsx          # Navbar component
            |   ├── NavItem.tsx         # NavItem component
            └── ...                     # Other components
    ```
  </TabItem>

</Tabs>

## 3. Usage of the `components` Layer

The `components` layer can be used to define reusable UI components that are shared across the entire project. It is **independent** and can be imported.

```tsx title="src/components/Button.tsx"
import React from "react";
import styles from "./Button.module.css";
import { ButtonTypes } from "./types";

const button = (props: ButtonTypes) => {
    return <button className={styles.button}>Click Me</button>;
}

export default button;
```

```tsx title="src/app/index.tsx"
import { button } from "@c/Button";

function App() {
    return (
        <div>
            <Button/>
        </div>
    );
}
```
---

## 4. Files in the `components` Layer

The `components` layer contains the following files:

- the UI-specific components like `Tabs`, `Dropdown`, `Accordion`, etc.
- common components like `TextInput`, `Select`, `Checkbox`, `Radio`, etc.