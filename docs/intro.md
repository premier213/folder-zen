---
sidebar_position: 1
---

# Intro

Welcome to the **`folder-zen`** documentation!

This documentation provides an overview of the **`folder-zen`** project structure and guidelines for organizing your project folders. The **`folder-zen`** project structure is designed to help you create scalable, maintainable, and well-organized projects by following a set of conventions and best practices.

## Table of Contents

- [Intro](#intro)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Folder Structure](#folder-structure)

## Project Structure

The project is structured into the following layers:
- **`base`**: foundational configurations and resources that serve as the building blocks for the entire project.
- **`components`**: reusable React components.
- **`libs`**: utility functions and helper functions.
- **`modules`**: feature-based modules that encapsulate the business logic, state management, and UI components for a specific feature of the application.
- **`services`**: API and business logic services.
- **`views`**: UI views that represent the different screens or pages of the application.
- **`app`**: the main application layer that ties everything together.

## Folder Structure

The project is organized into the following folders:

```bash
src/
├── app/                   # app directory (Next.js App Router) and main application logic
├── components/            # Reusable components
├── base/                  # Base Configuration
├── modules/               # Feature-based modules
├── services/              # API and business logic services
├── libs/                  # Utility functions and helpers
├── views/                 # Main views, layouts, and context providers
```