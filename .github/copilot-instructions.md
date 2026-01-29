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
