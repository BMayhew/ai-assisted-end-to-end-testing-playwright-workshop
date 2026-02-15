# AI Assisted End to End Testing with Playwright Workshop

## Setting up the Project

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

> [Initial Project Github Branch](https://github.com/BMayhew/ai-assisted-end-to-end-testing-playwright-workshop/tree/initial-project)

## Creating Test Specs

This section walks through the iterative process of improving AI-generated test plans. Each version used a different prompt, agent, or model — and the results improved significantly with each iteration.

For the full breakdown of each version (prompts used, agents, models, and analysis), see **[specs/README.md](specs/README.md)**.

### Version 1 — Broad Exploration (20 spec files)

**Prompt:**
```
Explore https://practicesoftwaretesting.com and create 20 different spec files
```

- **Agent:** `playwright-test-planner-cli`
- **Model:** Claude Sonnet 4
- **Output:** [specs/v1/](specs/v1/) — 20 individual spec files

A broad first pass. The agent explored the site and produced individual spec files per feature area. This surfaced a lot of scenarios but lacked prioritization — there was no distinction between critical revenue paths and nice-to-have checks.

**Where this breaks down:**
- No priority ranking — all scenarios treated equally
- Scenarios aren't independent (some assume state from others)
- Many specs are shallow (e.g., "verify page loads")
- Hard to know which 20% of tests gives 80% of coverage

> [Create Test GitHub Branch](https://github.com/BMayhew/ai-assisted-end-to-end-testing-playwright-workshop/tree/create-test/)

### Version 2 — Focused Critical Path (single plan)

**Prompt:**
```
Analyze https://testsmith-io.github.io/practice-software-testing/#/ and create a critical path 
test plan for the https://practicesoftwaretesting.com site. 

Context about this application:
- It's a practice e-commerce site for testing tools/hardware
- Key features include: product browsing, search, cart, checkout, user accounts
- There are different user roles (admin, customer)
- The site has intentional bugs for testing practice

Focus areas:
- Shopping cart and checkout flow (highest priority)
- User authentication
- Product search and filtering
- Account management
```

- **Agent:** `playwright-critical-path-analyzer` (custom agent)
- **Model:** Claude Sonnet 4
- **Output:** [specs/v2/critical-path-test-plan.md](specs/v2/critical-path-test-plan.md)

A major improvement. Providing application context, focus areas, and using a purpose-built agent produced a single prioritized plan with P0/P1/P2 rankings, a coverage matrix, and automation notes. The scenarios are more actionable and test-ready.

### Version 3 — Enhanced with Codebase Awareness

**Prompt:** Same as V2 (identical prompt and agent).

- **Agent:** `playwright-critical-path-analyzer` (same custom agent)
- **Model:** Claude Opus 4.6
- **Output:** [specs/v3/critical-path-test-plan.md](specs/v3/critical-path-test-plan.md)

The only change was the model. Opus 4.6 autonomously discovered and read the V1 and V2 specs already in the repo without being asked, then used that prior work as additional context. The result is more thorough: better locator hints (referencing `data-test` attributes from page snapshots), Playwright-specific API recommendations (`test.step()`, `toBeDisabled()`, `waitForResponse()`), and practical improvements like removing the impractical Google OAuth scenario.

### Comparison & Gap Analysis

A detailed comparison of all three versions is available in [specs/analysis/](specs/analysis/):
- [gap-analysis-detailed.md](specs/analysis/gap-analysis-detailed.md) — Full scoring and gap analysis
- [workshop-comparison-slides.md](specs/analysis/workshop-comparison-slides.md) — Shareable summary

> [Improve Prompt GitHub Branch](https://github.com/BMayhew/ai-assisted-end-to-end-testing-playwright-workshop/tree/improve-prompt)


