# Workshop

1. Install Playwright [docs](https://playwright.dev/docs/intro)

```bash
npm init playwright@latest 
# use the default settings through the prompts
```

Make updates to the playwright.config.ts commenting out the projects you don't need. I personally like to use this as a base project config and adjust as needed

```ts
// Example playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import { loadEnvFile } from 'node:process';

// Load environment variables from ENV_PATH if set, otherwise use default
if (process.env.ENV_PATH) {
  loadEnvFile(process.env.ENV_PATH);
} else {
  loadEnvFile('./local.env');
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
```

Create a local.env file to hold any environment variables you need for your tests

2. Install Agents [docs](https://playwright.dev/docs/test-agents#getting-started)

```bash
npx playwright init-agents --loop=vscode
```

3. Add a copilot instructions file at .github/copilot-instructions.md with the following content:

```markdown
**Special Rules**

- DO NOT use simple browser in github copilot chat or agent.
- When answering questions about frameworks, libraries, or APIs, use Context7 to retrieve current documentation rather than relying on training data.
- Always follow the comprehensive Playwright testing guidelines defined in the instructions files.

## Repository Structure

- `tests/`: Main service entry points and executables
- `lib/`: Core Libraries and Utilities such as page objects, test helpers, and fixtures
  - `lib/pages/`: Page Object Model classes
  - `lib/fixtures/`: Custom Playwright fixtures
  - `lib/helpers/`: Utility functions and test helpers
  - `lib/datafactory/`: Test data generation and management

## Key Guidelines

1. **Follow TypeScript best practices** and idiomatic patterns
2. **Maintain existing code structure** and organization
3. **Use semantic locators** and web-first assertions as defined in the instructions
4. **Implement proper test isolation** and avoid global mutable state
5. **Structure tests with clear user intent** and use test.step() for complex flows
6. **Prefer Page Object Model** when appropriate for maintainability
7. **Write descriptive test names** limit comments only to where the code may be confusing
```

4. Create a new agents file utilizing the playwright-cli tool

```markdown
# .github/agents/playwright-test-planner-cli.agent.md

---
name: playwright-test-planner-cli
description: Use this agent when you need to create comprehensive test plan for a web application or website using playwright-cli
tools:
  [
    "execute/runInTerminal",
    "read/readFile",
    "edit/createDirectory",
    "edit/createFile",
    "search",
  ]
model: Claude Sonnet 4
---

You are an expert web test planner with extensive experience in quality assurance, user experience testing, and test
scenario design. Your expertise includes functional testing, edge case identification, and comprehensive test coverage
planning.

You will:

1. **Navigate and Explore**
   - Use playwright-cli commands to explore the application
   - Run `playwright-cli open <URL>` to launch a browser and manually explore the interface
   - Use `playwright-cli screenshot <URL> output.png` to capture interface states
   - Use `playwright-cli pdf <URL> output.pdf` to capture full page layouts
   - Thoroughly explore the interface, identifying all interactive elements, forms, navigation paths, and functionality

2. **Analyze User Flows**
   - Map out the primary user journeys and identify critical paths through the application
   - Consider different user types and their typical behaviors

3. **Design Comprehensive Scenarios**

   Create detailed test scenarios that cover:
   - Happy path scenarios (normal user behavior)
   - Edge cases and boundary conditions
   - Error handling and validation

4. **Structure Test Plans**

   Each scenario must include:
   - Clear, descriptive title
   - Detailed step-by-step instructions
   - Expected outcomes where appropriate
   - Assumptions about starting state (always assume blank/fresh state)
   - Success criteria and failure conditions

5. **Create Documentation**

   Save your test plan as a markdown file in the specs/ directory with a descriptive filename.

**Quality Standards**:

- Write steps that are specific enough for any tester to follow
- Include negative testing scenarios
- Ensure scenarios are independent and can be run in any order

**Output Format**: Always save the complete test plan as a markdown file with clear headings, numbered steps, and
professional formatting suitable for sharing with development and QA teams.
```

With the playwright-test-planner-cli agent selected in your chat window, use this prompt

```markdown
Explore https://practicesoftwaretesting.com and create 20 different spec files
```

This will create 20 different spec files with some test cases that we can use for generating test files.

Where does this break down?

