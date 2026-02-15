# AI-Assisted Test Planning: Prompt Engineering Matters

## The Experiment

Same application. Three runs. Different prompts and models. Dramatically different results.

**Target app:** Practice Software Testing - Toolshop (e-commerce demo site)

---

## The Three Approaches

### V1: "Just Wing It"

**Prompt:**
> Explore the site and create 20 different spec files

**What we got:** 20 separate files, ~130+ test scenarios covering everything from homepage layout to security penetration testing to CMS integration.

### V2: "Give It Context"

**Prompt:**
> Analyze the site and create a critical path test plan... It's a practice e-commerce site... Focus on: shopping cart/checkout (highest priority), authentication, search/filtering, account management

**What we got:** 1 unified document with 20 prioritized scenarios, a coverage matrix, test data, and a risks/gaps section.

### V3: "Same Prompt, Smarter Model"

**Prompt:** Identical to V2 - same words, same custom agent.
**Model:** Claude Opus 4.6 (V1 and V2 used Sonnet 4)

**What happened:** Opus 4.6 autonomously discovered the V1 and V2 spec files already in the repository - without being asked. It read the prior work, learned from it, and used that context to produce a significantly better result.

**What we got:** 1 comprehensive document with 20 scenarios, specific locators, Playwright method recommendations, detailed test data tables, and implementation next steps.

---

## The Scorecard

| Dimension | V1 | V2 | V3 |
|---|:---:|:---:|:---:|
| Automation Readiness | 3 | 6 | 9 |
| Application Specificity | 3 | 7 | 9 |
| Prioritization | 2 | 7 | 9 |
| Test Data Documentation | 2 | 6 | 9 |
| Locator/Selector Guidance | 1 | 5 | 8 |
| Scope Appropriateness | 3 | 8 | 9 |
| Edge Case Coverage | 4 | 6 | 7 |
| Structure & Organization | 5 | 7 | 9 |
| Actionability | 2 | 6 | 9 |
| Gap Awareness | 1 | 7 | 9 |
| **TOTAL** | **26** | **65** | **87** |

---

## Side-by-Side: What the AI Produced

### How a login scenario looks in each version:

**V1:**
> 1. Navigate to login page
> 2. Enter valid email address
> 3. Enter valid password
> 4. Click "Login" button
> 5. Verify successful login redirect

**V2:**
> 1. Navigate to homepage
> 2. Click "Sign in" in navigation
> 3. Enter valid email address
> 4. Enter valid password
> 5. Click "Login" button
> 6. Verify successful login
>
> *Automation Notes: Use existing test user credentials. Verify UI changes after login.*

**V3:**
> 1. Navigate to https://practicesoftwaretesting.com
> 2. Click "Sign in" in the main navigation menu
> 3. Verify login page loads with email and password fields
> 4. Enter valid email address in the "Email address" field
> 5. Enter valid password in the "Password" field
> 6. Click "Login" button
> 7. Verify successful login - navigation changes to show user menu
> 8. Verify "Sign in" link is replaced with account menu
>
> *Automation Notes: Known test accounts: customer@practicesoftwaretesting.com / welcome01. Login page URL: /auth/login. Use `[data-test="login-submit"]` or `getByRole('button', { name: 'Login' })`. Verify logged-in state by checking for account menu presence in navigation.*

---

## The Five Biggest Differences

### 1. Phantom Features

V1 tested features that don't exist:
- Product sharing/social buttons
- Search auto-complete suggestions
- Loyalty points and rewards programs
- Referral programs
- Product variations (sizes/colors)
- CMS and newsletter integration

V2/V3 tested only what's actually there.

**Lesson:** Without context, AI fills gaps with assumptions.

### 2. Scope Creep

V1 included test plans for:
- Security penetration testing (XSS, CSRF, SQL injection)
- Performance and load testing (memory leaks, caching)
- Accessibility compliance (WCAG 2.1)
- Cross-browser visual comparison
- API monitoring

These are real testing concerns - but they're not Playwright E2E tests. They need different tools (OWASP ZAP, k6, axe-core, Lighthouse).

V3 stayed tightly focused on what Playwright can actually do.

**Lesson:** Constraints produce better output than open-ended prompts.

### 3. Prioritization

V1: Every scenario has equal weight. Homepage layout = checkout flow.

V3:
- **P0 (6 scenarios):** Cart, checkout, login - test these first
- **P1 (10 scenarios):** Registration, search, filtering, profile
- **P2 (4 scenarios):** Empty states, edge cases, E2E journey

**Lesson:** Telling the AI what matters most produces useful priority levels.

### 4. Actionability

V1 example: "Enter valid email address" - What email? Where?

V3 example: "Enter valid email address - customer@practicesoftwaretesting.com using `[data-test="email"]`" - Ready to code.

**Lesson:** Specific prompts produce specific, actionable output.

### 5. Self-Awareness

V1: No gaps section. Implies everything is covered.

V3: Explicit list of what's NOT covered and why:
- Google OAuth: "Complex to automate due to third-party popup/redirect"
- Forgot password: "Requires email verification which is hard to automate in E2E"
- Admin features, pagination, language switching, chat widget

**Lesson:** A good test plan knows its own boundaries.

---

## The Formula That Worked

### Vague Prompt (V1)
```
Explore the site and create 20 spec files
```
Result: Quantity over quality. Generic. Tests phantom features.

### Better Prompt (V2)
```
Create a critical path test plan for [this specific app].

Context:
- It's a [type of app] for [purpose]
- Key features include: [list them]
- There are [specific details]

Focus areas:
- [Area 1] (highest priority)
- [Area 2]
- [Area 3]
```
Result: Focused. Prioritized. Actually useful.

### Best Results (V3) - Same Prompt, Better Model
Same prompt as V2, but using Claude Opus 4.6. The model independently:
- Discovered V1 and V2 specs already in the repo (without being asked)
- Learned from V2's gaps (missing empty cart, checkout auth gate, etc.)
- Removed impractical scenarios V2 included (Google OAuth, forgot password)
- Added Playwright-specific patterns, locators, and test data tables
- Produced an implementation roadmap with recommended next steps

---

## Key Takeaways

1. **Prompt engineering is the biggest single lever.** V1 to V2 (same model, better prompt) jumped from 26 to 65. Context and constraints matter more than anything.

2. **Model capability is the second lever.** V2 to V3 (same prompt, better model) jumped from 65 to 87. A more capable model independently gathered context and improved on prior work.

3. **Smarter models do things you didn't ask for.** Opus 4.6 found and read V1/V2 on its own, then used that knowledge to fill gaps and avoid past mistakes. This kind of autonomous context gathering is a capability difference, not a prompt difference.

4. **Constraints improve quality.** "Create 20 critical path scenarios" beats "create 20 spec files" because it forces focus and prioritization.

5. **Custom agents compound the advantage.** Both V2 and V3 used a purpose-built agent that knew to look for data-test attributes, document locators, and suggest Playwright patterns.

6. **AI output still needs human review.** Even V3 should be validated against the actual application. But V3 saves hours of work. V1 might actually create more work than it saves.

7. **Vague prompts are worse than no prompts.** V1's 130+ scenarios create a false sense of coverage while testing features that don't exist. This is more dangerous than having no test plan at all.

---

## Discussion Questions

1. V3 used the same prompt as V2 but a more capable model. What does that tell you about when to invest in prompt engineering vs. when to upgrade the model?
2. Opus 4.6 found and read the V1/V2 specs on its own. How does that change how you think about organizing your repo for AI-assisted work?
3. How would you validate that V3's scenarios actually match the application?
4. Where does human judgment still matter most in AI-assisted test planning?
5. How could you use this approach for your own applications?
