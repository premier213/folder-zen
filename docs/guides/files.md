---
sidebar_position: 7
id: "Files and Directories"
---

## 1. Small File
If a file is small and specific to a single component, it should be placed inside the component's folder.

> Perpuse of this is to prevent create a file for every component.

```tsx title="src/components/Button.tsx"
import React from "react";

// ✅ Good
export interface PropsInterface {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button = (props: PropsInterface) => {
    return <button>Click me</button>;

};

export default Button;
```

```tsx title="src/components/Button.tsx"
import React from "react";

// ❌ Bad
export interface PropsInterface {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export type ButtonPropsType = PropsInterface;

const Button = (props: ButtonPropsType) => {
    return <button>Click me</button>;

};

export default Button;
```


## 2. Large Files

Here is a standard structure for managing large files within a project. This setup is flexible and can be adapted based on the size and complexity of the project.

:::warning Notice

To maintain consistency and scalability in our project, we are introducing a dedicated file structure that is specifically designed for `modules`, `components` `views`.

:::

### 2.1. Core Files

decide on a core file that will be the entry point for the component.

```bash
src/
├── components/
│   ├── Card/
# highlight-start
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
# highlight-end
```

### 2.2. Hooks

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
# highlight-start
│   |   ├── hooks/
│   |   |   ├── use-card.ts
│   |   |   ├── use-printable-card.ts
# Can use as a single file
│   |   ├── hooks.ts
# highlight-end
```
### 2.3. Styles

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
# highlight-start
│   |   ├── styles/
│   |   |   ├── card-style.module.css
# Can use as a single file
│   |   ├── styles.module.css
# highlight-end
│   |   ├── hooks/
│   |   |   ├── use-card.ts
│   |   |   ├── use-printable-card.ts
```

### 2.4. Tests

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
│   |   ├── card-style.module.css
# highlight-start
│   |   ├── tests/
│   |   |   ├── Card.test.tsx
│   |   |   ├── PrintableCard.test.tsx
│   |   |   ├── CardSection.test.tsx
# Can use as a single file
│   |   ├── Card.test.ts
# highlight-end
|   |   ├── hooks/
|   |   |   ├── use-card.ts
|   |   |   ├── use-printable-card.ts
```

### 2.5. Types

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
│   |   ├── card-style.module.css
# highlight-start
│   |   ├── types.ts
# highlight-end
│   |   ├── hooks/
│   |   |   ├── use-card.ts
│   |   |   ├── use-printable-card.ts
```

### 2.6. Utils

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
│   |   ├── card-style.module.css
│   |   ├── types.ts
# highlight-start
│   |   ├── utils/
│   |   |   ├── utils.ts
# Can use as a single file
│   |   ├── utils.ts
# highlight-end
│   |   ├── hooks/
│   |   |   ├── use-card.ts
│   |   |   ├── use-printable-card.ts
```

### 2.7. Constants

```bash
src/
├── components/
│   ├── Card/
│   |   ├── index.ts
│   |   ├── Card.tsx
│   |   ├── PrintableCard.tsx
│   |   ├── card-section/
│   |   |   ├── CardSection.tsx
│   |   ├── card-style.module.css
│   |   ├── types.ts
│   |   ├── utils.ts
# highlight-start
│   |   ├── constants/
│   |   |   ├── constants.ts
# Can use as a single file
│   |   ├── constants.ts
# highlight-end
│   |   ├── hooks/
│   |   |   ├── use-card.ts
│   |   |   ├── use-printable-card.ts
```