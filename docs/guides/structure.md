---
sidebar_position: 2
id: "Folder Structure Design"
---

This document explains the folder structure design for three different setups:
1. **Next.js with App Router (v13+)**
2. **Next.js with Pages Router (before v13)**
3. **React with Vite (without Next.js)**

---

## 1. Next.js with App Router (v13+)

In Next.js 13 and above, the `app` directory is used for routing and organizing the project. Here's the recommended folder structure:

```bash
src/
├── app/                   # app
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
├── views/                 # Main views, layouts, and context providers
└── libs/                  # Utility functions and helpers
```

---

## 2. Next.js with Pages Router (before v13)

In Next.js versions before 13, the `pages` directory is used for routing and organizing the project. Here's the recommended folder structure:

```bash
src/
├── pages/                 # Pages directory (Next.js Pages Router)
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
├── views/                 # Main views, layouts, and context providers
└── libs/                  # Utility functions and helpers
```

---

## 3. React with Vite (without Next.js)

In React, the `src` directory is used for routing and organizing the project. Here's the recommended folder structure:

```bash
src/
├── App.tsx                # Main App component
├── index.tsx              # Main entry point
├── routes/                # Route components
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
├── views/                 # Main views, layouts, and context providers
└── libs/                  # Utility functions and helpers
```