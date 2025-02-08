---
sidebar_position: 6
id: "Services Layer"
---
The `services` layer contains API and business logic services for the application

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
  - **📁 Absolute Path**: `@s`
  - **📁 Folder Location**: `src/services`
</div>

### Layer Import and Usage Rules

| **Action**            | **`base`** | **`components`** | **`libs`** | **`modules`** | **`views`** | **`app`** | **`services`** |
| --------------------- | ---------- | ---------------- | ---------- | ------------- | ----------- | --------- | -------------- |
| **📥 Can Import From** | ✅          | ❌                | ✅          | ❌             | ❌           | ❌         | ✅              |
| **📤 Can Export To**   | ❌          | ❌                | ❌          | ✅             | ✅           | ✅         | ✅              |


#### Key:
- ✅ **Allowed**: The layer can import from or export to the specified layer.
- ❌ **Not Allowed**: The layer cannot import from or export to the specified layer.

---


The `services` layer contains API and business logic services for the application. It is responsible for handling data fetching, manipulation, and business logic operations. The services layer is used by the `modules`, `views`, and `app` layers to fetch data from APIs, perform business logic operations, and manage the state of the application.

## 1. Purpose of the `services` Layer

The `services` layer is responsible for:

- Handling data fetching and manipulation
- Performing business logic operations
- Managing the state of the application
- Providing data to the `modules`, `views`, and `app` layers
- Abstracting the data fetching and business logic operations from the `modules`, `views`, and `app` layers

---

## 2. Structure of the `services` Layer
<Tabs>
  <TabItem value="small" label="Small Project" default>
     ```bash
        src/
        └── services/
            ├── api/                                # API services
            |   ├── user.ts                         # User API service
            |   ├── product.ts                      # Product API service
            |   └── ...                             # Other API services
            ├── business/                           # Business logic services
            |   ├── user.ts                         # User business logic service
            |   ├── product.ts                      # Product business logic service
            |   └── ...                             # Other business logic services
    ```
  </TabItem>

  <TabItem value="large" label="Large Project">
    ```bash
        src/
        └── services/
            ├── api/                                # API services
            |   ├── user.ts                         # User API service
            |   ├── product.ts                      # Product API service
            |   └── ...                             # Other API services
            ├── business/                           # Business logic services
            |   ├── user.ts                         # User business logic service
            |   ├── product.ts                      # Product business logic service
            |   └── ...                             # Other business logic services
            ├── libs/                               # Utility functions and helpers
            |   ├── request.ts                      # Request utility function
            |   ├── response.ts                     # Response utility function
            |   └── ...                             # Other utility functions
    ```
  </TabItem>

</Tabs>

## 3. Usage of the `services` Layer

```tsx title="src/services/api/user.ts"
import {axios} from "@s/api/request";

export async function getUser() {
  const response = await axios.get('/user');
  return response.data;
}
```
---

## 4. Files in the `services` Layer

The `services` layer contains the following files:

- `api/` - Contains API services
- `business/` - Contains business logic services