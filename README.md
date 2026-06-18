<h1 align="center">SauceDemo Login Automation Test Suite</h1>

<p align="center">
Automation testing for SauceDemo login feature using Playwright and TypeScript.
</p>

---

## Application Under Test

https://www.saucedemo.com/

---

## Features

- **Page Object Model (POM)** – Reusable and maintainable test structure.
- **Data-Driven Testing (DDT)** – Multiple scenarios with different test data.
- **Multi-browser coverage** across Chromium, Firefox, and WebKit
- **Comprehensive edge-case coverage** including case sensitivity test

---

## Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **JSON**

---

## Test Coverage

| # | Scenario | Type |
|---|---|---|
| 1 | Valid username, valid password | Positive |
| 2 | Invalid username | Negative |
| 3 | Invalid password | Negative | 
| 4 | Empty username | Negative | 
| 5 | Empty password | Negative |
| 6 | Empty credentials | Negative |
| 7 | Locked user account | Negative |
| 8 | Username, password case sensitivity | Edge Case |

Total: 8
Passed: 8
Failed: 0

---

## Getting Started

### Installation

```bash
npm install
```

### Run All Tests

```bash
npx playwright test
```

### Run UI Mode

```bash
npx playwright test --ui
```

### View Report

```bash
npx playwright show-report
```
