---
sidebar_position: 3
id: "Folder Design with Barrel Files"
---

This document explains how to organize your React project using **Barrel Files**, **Absolute Paths**, **Named vs Default Exports**. These practices help improve code readability, maintainability, and reusability.

## 1. Using Barrel Exports to Organize Modules

### What are Barrel Exports?

A **Barrel Export** allows you to combine exports from multiple files or modules into a single file. It acts as a central hub for exporting components, making imports cleaner and more efficient.

### Example Without Barrel Exports

```javascript
import Button from '../../components/utilities/Button.js';
import Alert from '../../components/utilities/Alert.js';
import SnackBar from '../../components/utilities/SnackBar.js';
import Loader from '../../components/utilities/Loader.js';
import Success from '../../components/utilities/Success.js';
```

### Example with Barrel Exports

```javascript
import { Button, Alert, SnackBar, Loader, Success } from '../../components/utilities';
```

### how to Implement Barrel Exports

1. Create a new file named `index.js` or `index.ts` in each subdirectory.
2. Export the relevant components from the `index` file.

#### Example Directory Structure

```bash
src/
├── components/
│   ├── utilities/
│   │   ├── Button.js
│   │   ├── Alert.js
│   │   ├── SnackBar.js
│   │   ├── Loader.js
│   │   ├── Success.js
│   │   └── index.js
```

#### Example `index.js` File

```javascript
export { default as Button } from './Button';
export { default as Alert } from './Alert';
export { default as SnackBar } from './SnackBar';
export { default as Loader } from './Loader';
export { default as Success } from './Success';
```

#### Example Usage

```javascript
import { Button, Alert, SnackBar, Loader, Success } from '../../components/utilities';
```

## 2. Using Absolute Paths Instead of Relative Paths

### How to Use Absolute Paths

link to [TypeScript in Folder Structure](/docs/guides/TypeScript%20in%20Folder%20Structure)

## 3. Using Named vs Default Exports

### Default Exports

Default exports are used when you want to export a single value or a group of related values.

#### Example:

```javascript
// Button.js
const Button = () => <button>Click Me</button>;
export default Button;

// Usage
import Button from './Button';
```


### Named Exports

Named exports are used when you want to export multiple values or a group of related values.

#### Example:

```javascript
// Alert.js
export const SuccessAlert = () => <div>Success!</div>;
export const ErrorAlert = () => <div>Error!</div>;

// Usage
import { SuccessAlert, ErrorAlert } from './Alert';
```

## 4. Rules and Best Practices

- **Folder Structure**: When the project grows or a file becomes too large, break it down into smaller files and organize them into folders.

- **Barrel Exports**: Use barrel files (index.ts) to export multiple files from a folder. This simplifies imports and keeps the codebase clean.



## Conclusion

By using **Barrel Exports**, **Absolute Paths**, and **Named vs Default Exports**, you can create a well-organized and maintainable codebase. These practices help improve code readability, maintainability, and reusability in your React project.