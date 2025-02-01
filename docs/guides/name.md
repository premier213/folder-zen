---
sidebar_position: 6
id: "Name Conventions Rules"
---

This document outlines the rules for naming conventions in a React project. Consistent naming conventions improve code readability and maintainability. By following these rules, you can create a clean and organized codebase that is easy to understand and maintain.

## **File Naming**

- **index**: Use `index.ts` or `index.tsx` for the default export of a folder.

  *Example*: `components/index.tsx`, `hooks/index.ts`.

- **component**: Use PascalCase for React components.

  *Example*: `Button.tsx`, `Header.tsx`, `ProductCard.tsx`.

- **style**: Use kebab-case for utility files or non-component files.

  *Example*: `button-style.module.css`, `global-style.module.css`.

- **hook**: Use kebab-case for hook files.

  *Example*: `use-fetch-data.ts`, `use-localS-storage.ts`.

- **test**: Use `*.test.ts` or `*.test.tsx` for test files.

  *Example*: `button.test.ts`, `header.test.tsx`.

- **mock**: Use `*.mock.ts` or `*.mock.tsx` for mock files.

  *Example*: `api.mock.ts`, `user.mock.ts`.

- **static**: Use `kebab-case` for static files.

  *Example*: `logo.svg`, `background.jpg`, `logo-mini.png`.

- **service**: Use `kebab-case` for service files.

  *Example*: `api-service.ts`, `auth-service.ts`.

- **language**: Use `*.[lang].json` for language files (e.g., `en.json`, `fr.json`, `auth.en.json`).

  *Example*: `en.json`, `fr.json`, `auth.en.json`.

- **other**: Use descriptive names for other files.

  *Example*: `app-constants.ts`.

## **Case Conventions**

- **PascalCase**:
    - Use PascalCase for React components (e.g., `Button`, `Header`, `ProductCard`).
    - Use PascalCase for classes (e.g., `User`, `Product`, `Order`).
    - Use PascalCase for enums (e.g., `UserRole`, `ProductStatus`, `OrderStatus`).
    - Use PascalCase for interfaces (e.g., `UserInterface`, `ProductInterface`, `OrderInterface`).
    - Use PascalCase for types (e.g., `UserType`, `ProductType`, `OrderType`).
    - Use PascalCase for schemas (e.g., `UserSchema`, `ProductSchema`, `OrderSchema`).
- **camelCase**: Use camelCase for utility functions and style classes (e.g., `capitalizeString`, `buttonStyle`).
    - Use camelCase for variables (e.g., `isLoading`, `error`, `userList`).
    - Use camelCase for state variables (e.g., `isLoading`, `error`, `userList`).
    - Use camelCase for event handlers (e.g., `onClick`, `onChange`, `onSubmit`).
    - Use camelCase for local variables (e.g., `index`, `count`, `total`).
    - Use camelCase for loop variables (e.g., `i`, `j`, `k`).
    - Use camelCase for function names (e.g., `fetchData`, `calculateTotal`, `formatDate`).

- **UPPER_CASE**: Use UPPER_CASE for constants (e.g., `API_URL`).
    - Use UPPER_CASE for environment variables (e.g., `API_KEY`).
    - Use UPPER_CASE for configuration variables (e.g., `MAX_LENGTH`, `MIN_LENGTH`).
    - Use UPPER_CASE for action types (e.g., `FETCH_DATA`, `UPDATE_USER`, `DELETE_PRODUCT`).

- **snake_case**: Use snake_case for environment variables (e.g., `API_KEY`).


## **Naming Conventions**

- **boolean**: Use boolean prefixes (e.g., `is`, `has`, `should`) for boolean variables (e.g., `isFetching`, `hasError`, `shouldRender`).
- **Array**: Use plural names for arrays (e.g., `users`, `products`).
- **loop variable**: Use descriptive names for loop variables (e.g., `i`, `j`, `k`).
- **Object**: Use singular names for objects (e.g., `user`, `product`).
- **Function**: Use descriptive names for functions , methods, and callbacks (e.g., `fetchData`, `calculateTotal`).
- **Schema**: Use suffix `Schema` for schemas (e.g., `UserSchema`, `ProductSchema`).
- **Interface**: Use suffix `Interface` for interfaces (e.g., `UserInterface`, `ProductInterface`).
- **Type**: Use suffix `Type` for types (e.g., `UserType`, `ProductType`).
- **Enum**: Use suffix `Enum` for enums (e.g., `UserRoleEnum`, `ProductStatusEnum`).
- **Event**: Use suffix `Handler`, `Listener`, `Subscriber` or `on`   for events (e.g., `clickHandler`, `scrollListener`, `resizeSubscriber`, `onSubmit`).
- **Hook**: Use descriptive names for hooks (e.g., `useFetchproduct`, `useLocalStorage`).
- **State**: Use suffix `State` for state variables (e.g., `loadingState`, `errorState`).
- **Middleware**: Use suffix `Middleware` for middleware (e.g., `loggerMiddleware`, `thunkMiddleware`).


## Conclusion

By following these rules for naming conventions, you can create a clean and organized codebase that is easy to understand and maintain. Consistent naming conventions improve code readability and maintainability, making it easier for developers to work on the project.
