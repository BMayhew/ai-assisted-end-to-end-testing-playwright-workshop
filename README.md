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