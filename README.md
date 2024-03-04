# Equipo RH

Plataform that allows the hiring of human capital, with the possibility of publishing job offers and obtaining information about the candidates.

## Table of Contents

- [Equipo RH](#equipo-rh)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Recommendations](#recommendations)
  - [Technologies](#technologies)
  - [Structure](#structure)
  - [Elements](#elements)
    - [🗂️ Workspace](#️-workspace)
    - [⚒️ App](#️-app)
    - [📦 Package](#-package)
    - [🧩 Component](#-component)
    - [🔎 Page](#-page)
    - [🪝 Hook](#-hook)
    - [🧠 Service](#-service)
    - [🔧 Util](#-util)
    - [📃 Type](#-type)
    - [🌐 Env](#-env)
    - [⚙️ Config](#️-config)

## Getting Started

> **RUN THIS COMMAND BEFORE CLONING** > **🚨 IMPORTANT NOTE:** Configure Git with this command `git config --global core.ignorecase false` to avoid problems with case sensitivity on Windows.

1. Clone the repository
2. Install the dependencies

   ```bash
   npm install
   ```

3. Start the project

   ```bash
    npm run dev
   ```

> **Note:** Use `npm` instead of other tools like `yarn`, `pnpm`, `bun` or others. The project is configured to work with `npm`.

### Recommendations

- Install the Turbo CLI to speed up the use of NPM Scripts with `npm install -g turbo`
- Use the following Turbo commands:

  - `turbo dev` to start all apps in development mode
  - `turbo build` to build all apps
  - `turbo generate` or `turbo gen` to generate components, hooks, pages, etc.

  > You can use the `--filter <app-name>` command to filter the apps to which the command will be applied.

## Technologies

- [Next.js](https://nextjs.org/): React metaframework
- [Turborepo](https://turbo.build/repo): Allows the management of multiple projects in a single repository.
- [TypeScript](https://www.typescriptlang.org/): Programming language that adds static typing to JavaScript.
- [ESLint](https://eslint.org/): Static code analysis tool.
- [Prettier](https://prettier.io/): Code formatter.

## Structure

- `apps`: Contains the applications that make up the project.
  - `web`: Main web application where the user can check the job offers and apply to them.
  - `admin`: Web application for the administration of the job offers and the candidates.
- `packages`: Contains the packages shared between the applications.
  - `ui`: User interface components shared between applications.
  - `lint-staged-config`: Configuration of the `lint-staged` tool.
  - `eslint-config`: Configuration of the `ESLint` tool.
  - `prettier-config`: Configuration of the `Prettier` tool.
  - `stylelint-config`: Configuration of the `stylelint` tool.
  - `commitlint-config`: Configuration of the `commitlint` tool.
  - `typescript-config`: `TypeScript` configuration.

## Elements

### 🗂️ Workspace

Apps and packages that make up the project. Each one has its own `package.json` and can be executed independently.

> `web` app, `admin` app, `eslint-config` package, `ui` package, etc.

### ⚒️ App

Complete project that can be executed independently.

> Web applications, Web pages, APIs, CLIs, NPM packages, etc.

### 📦 Package

Code package that can be used and shared between applications.

> Components, hooks, services, utilities, configurations, etc.

### 🧩 Component

User interface element that can be reused in different parts of the application.

> Buttons, forms, tables, etc.

### 🔎 Page

Component that has an associated route and can be accessed directly from the browser.

> `home`, `about-us`, `dashboard/overview`, etc.

### 🪝 Hook

Function that encapsulates reusable logic. It is commonly associated with the lifecycle of a component.

### 🧠 Service

Set of functions that encapsulate business logic. Commonly used to make requests to an API.

### 🔧 Util

Utility functions that encapsulate reusable logic. Unlike hooks, they do not depend on the lifecycle of a component and can be used anywhere in the application.

> `formatDate`, `formatCurrency`, `parseQueryString`, etc.

### 📃 Type

Definition of data types that can be used in different parts of the application. They determine the model and structure of the data.

> `User`, `Product`, `Order`, etc.

### 🌐 Env

Configuration file that defines the environment variables of the application.

> `.env`, `.env.development`, `.env.production`, etc.

### ⚙️ Config

Configuration file that defines the behavior of a tool or library.

> `ESLint`, `Prettier`, `TypeScript`, `Babel`, etc.
