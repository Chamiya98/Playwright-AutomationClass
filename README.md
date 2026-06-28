<div align="center">

# 🎭 Playwright-AutomationClass

### End-to-End Test Automation Framework

[![Playwright Tests](https://github.com/Chamiya98/Playwright-AutomationClass/actions/workflows/playwright.yml/badge.svg)](https://github.com/Chamiya98/Playwright-AutomationClass/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

> A hands-on automation class project built with **Playwright** and **TypeScript**, demonstrating real-world QA automation practices on the [SauceDemo](https://www.saucedemo.com/) e-commerce application.

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🧪 Running Tests](#-running-tests)
- [📁 Test Suites](#-test-suites)
- [⚙️ Configuration](#️-configuration)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)

---

## ✨ Features

- ✅ **Page Object Model (POM)** — Clean separation of page interactions and test logic
- ✅ **Data-Driven Testing** — Test inputs managed via external JSON files
- ✅ **Cross-Browser Testing** — Runs on Chromium, Firefox, and WebKit
- ✅ **Authentication State Reuse** — Session saved and reused across tests
- ✅ **CI/CD Integration** — Automated test runs via GitHub Actions
- ✅ **HTML Reports** — Auto-generated after every test run
- ✅ **Screenshot on Failure** — Captures screenshots when tests fail
- ✅ **Parallel Execution** — Tests run in parallel for faster feedback

---

## 🏗️ Project Structure

```
Playwright-AutomationClass/
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── playwright.yml        # CI/CD pipeline configuration
│
├── 📁 pages/                     # Page Object Model classes
│   ├── LoginPage.ts              # Login page interactions & locators
│   └── productPage.ts            # Product & cart page interactions
│
├── 📁 testData/                  # External test data
│   └── loginCases.json           # Valid/invalid login credentials
│
├── 📁 tests/                     # Test specifications
│   ├── auth.setup.ts             # Authentication state setup
│   ├── example.spec.ts           # Starter/example test
│   ├── login.spec.ts             # Basic login tests (inline)
│   ├── login2.spec.ts            # POM-based login tests
│   └── productTest.spec.ts       # Product listing & cart tests
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts          # Playwright global configuration
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | Browser automation framework |
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript for better DX |
| [Node.js](https://nodejs.org/) | Runtime environment |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automation |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Chamiya98/Playwright-AutomationClass.git

# Navigate to the project directory
cd Playwright-AutomationClass

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

```bash
# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run tests on a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# View the HTML test report
npx playwright show-report
```

---

## 📁 Test Suites

### 🔐 Login Tests

| File | Description |
|------|-------------|
| `login.spec.ts` | Basic login tests using inline helper functions |
| `login2.spec.ts` | Login tests refactored with Page Object Model + data-driven inputs |

**Scenarios covered:**
- ✅ Login with valid credentials → redirects to product page
- ❌ Login with invalid credentials → shows error message

### 🛒 Product Tests

| File | Description |
|------|-------------|
| `productTest.spec.ts` | End-to-end product browsing and cart workflow |

**Scenarios covered:**
- Verify 6 products are displayed on the products page
- Randomly select a product and add it to cart
- Verify cart badge count updates to `1`
- Navigate to cart and confirm the correct product is listed

### 🔑 Auth Setup

| File | Description |
|------|-------------|
| `auth.setup.ts` | Logs in once and saves browser session state to a JSON file for reuse |

---

## ⚙️ Configuration

The `playwright.config.ts` configures the following:

```ts
{
  testDir: './tests',
  fullyParallel: true,
  retries: 2,            // retries on CI only
  workers: 1,            // single worker on CI
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
  },
  projects: ['chromium', 'firefox', 'webkit']
}
```

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** to automatically run the full Playwright test suite on every push and pull request.

The workflow (`playwright.yml`) installs dependencies, installs browsers, runs all tests, and uploads the HTML report as a build artifact.

---

## 👥 Contributors

| | |
|:---:|:---:|
| [![Chamiya98](https://github.com/Chamiya98.png?size=80)](https://github.com/Chamiya98) | [![Jayashan-paymate](https://github.com/Jayashan-paymate.png?size=80)](https://github.com/Jayashan-paymate) |
| **[Chamiya98](https://github.com/Chamiya98)** | **[Jayashan](https://github.com/Jayashan-paymate)** |

---

<div align="center">

Made with ❤️ using [Playwright](https://playwright.dev/)

</div>
