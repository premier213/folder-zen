---
sidebar_position: 1
id: "Getting Started"
---

## Project Concept

This project is a modern web application built with React and Next.js, designed to provide a scalable and maintainable structure for developers. The goal is to create a well-organized codebase that allows for easy addition of new features and efficient code management.

## Layer Structure

The project is structured into the following layers:

1. **`src`**: The root directory of the project, containing the source code and configuration files.
2. **`src/components`**: Contains reusable React components.
3. **`src/base`**: Contains base configuration and global styles.
4. **`src/modules`**: Contains feature-based modules.
5. **`src/services`**: Contains API and business logic services.
6. **`src/libs`**: Contains utility functions and helper functions.
7. **`src/views`**: Contains main views, layouts, and context providers.
8. **`src/app`**: Contains the main application logic and routing (Next.js App Router).
9.  **`src/pages`**: Contains pages for routing (Next.js Pages Router).

---

## Folder Structure

The project is organized into the following folders:

```bash
src/
├── app/                   # App directory (Next.js App Router) and main application logic
├── pages/                 # Pages directory (Next.js Pages Router)
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
├── views/                 # Main views, layouts, and context providers
└── libs/                  # Utility functions and helpers
```