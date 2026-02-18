# AI-Generated Test Spec Comparison: V1 vs V2 vs V3

How much does prompt quality matter when generating test plans with AI? We tested three different prompting approaches against the same e-commerce application and scored the results.

---

## The Results

| Version | Approach | Scenarios | Score |
|---------|----------|-----------|-------|
| **V1** | Generic prompt, no app context | 153 across 20 files | **28/100** |
| **V2** | Improved prompt with app context | 3 in 1 file | **58/100** |
| **V3** | Deep prompt with exploration instructions | 15 in 1 file | **85/100** |

---

## Scoring Breakdown

| Criteria | V1 | V2 | V3 |
|----------|:---:|:---:|:---:|
| Coverage Breadth | 9 | 4 | 7 |
| Coverage Depth | 5 | 5 | 8 |
| Application-Specific Detail | 2 | 7 | 10 |
| Automation Readiness | 2 | 6 | 9 |
| Test Data & Environment | 1 | 8 | 9 |
| Prioritization | 2 | 6 | 9 |
| Step Specificity | 3 | 6 | 9 |
| Expected Results Quality | 3 | 5 | 8 |
| Locator Information | 0 | 7 | 8 |
| Risk Assessment | 1 | 4 | 8 |
| **Total** | **28** | **58** | **85** |

---

## What Changed Between Versions

### V1: Generic Templates (28/100)

153 scenarios sounds impressive until you read them.

**Example step:** "Enter valid email address"
- Which email? No idea. No test accounts provided.
- Where is the field? No locators.
- What happens next? "Verify login succeeds" - How?

V1 covers everything on paper - 20 files including security, accessibility, performance, API testing, and more. But the scenarios are so generic they could apply to any e-commerce site. Zero evidence the AI actually looked at the application.

**What worked:** Broad checklist of testable areas
**What failed:** No actionable detail to write a single test from

### V2: Application-Aware (58/100)

Only 3 scenarios, but each one actually works.

**Example step:** "Enter email: customer@practicesoftwaretesting.com, Password: welcome01"
- Real credentials that work
- Locators provided: `[data-test="email"]`, `[data-test="password"]`
- Specific product referenced: Combination Pliers at $14.15

The jump from 28 to 58 came from one thing: the AI actually explored the application instead of generating generic templates.

**What worked:** Real test data, locators, application-specific details
**What failed:** Only 3 scenarios - huge coverage gaps

### V3: Deep Exploration (85/100)

15 scenarios with the right balance of breadth and depth.

**Example step:** "Update Combination Pliers quantity to 3. Verify line total updates to $42.45 (3 x $14.15). Verify cart total = $65.41 (sum of line totals)."

V3 knows the application inside and out:
- 9 products with exact prices
- Full category hierarchy
- Out-of-stock items identified
- 6 supported languages
- CO2 rating system
- Contact form subject options
- File upload restrictions

Every scenario includes priority level, business impact, automation complexity estimate, and locator notes.

**What worked:** Everything V2 did plus deeper exploration, prioritization, edge cases
**What failed:** Missing non-functional testing (performance, security, accessibility)

---

## The Quality Trajectory

```
28 ---------> 58 ---------> 85
V1             V2             V3
Generic     App-Aware     Comprehensive

   +107%         +47%
```

The biggest quality jump (+107%) came from getting the AI to actually explore the application. The second jump (+47%) came from structuring the exploration with better prompting.

---

## Key Takeaway

More scenarios does not equal better testing. V1 produced 153 generic scenarios that a tester cannot use. V3 produced 15 specific scenarios that a tester can turn into automated tests immediately.

**The difference is prompt engineering** - guiding the AI to explore the application, identify real data, prioritize by business value, and include automation-ready details.

| Metric | V1 (153 scenarios) | V3 (15 scenarios) |
|--------|-------------------|-------------------|
| Test accounts provided | 0 | 4 |
| Specific product references | 0 | 9 with prices |
| UI locators documented | 0 | 15+ patterns |
| Priority levels | None | P0/P1/P2/P3 |
| Automation notes | None | Per scenario |
| Features that don't exist | Many | None |

---

*Analysis generated February 17, 2026 for the AI-Assisted E2E Testing with Playwright workshop.*
