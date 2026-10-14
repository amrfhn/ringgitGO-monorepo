# RinggitGO Backlog: Epic 2 Onwards

GitHub-ready Markdown backlog for GitHub Issues, GitHub Projects, Trello, Azure DevOps Boards, or Notion.

---

# Epic 2 - Authentication

## RG-010: Authentication Foundation

**Description**

Set up authentication, session management, and protected routes.

### Acceptance Criteria

- [ ] Authentication approach selected
- [ ] Secure session handling implemented
- [ ] Protected frontend routes implemented
- [ ] FastAPI validates authenticated requests
- [ ] Logout and session revocation supported

**Priority:** Critical

---

## RG-011: Google Login

### Acceptance Criteria

- [ ] Google OAuth application configured
- [ ] Sign-in and callback flow works
- [ ] User identity is linked to an internal user record
- [ ] Authentication failures are handled safely

**Priority:** High

---

## RG-012: GitHub Login

### Acceptance Criteria

- [ ] GitHub OAuth application configured
- [ ] Sign-in and callback flow works
- [ ] User identity is linked to an internal user record
- [ ] Authentication failures are handled safely

**Priority:** High

---

## RG-013: Facebook Login

### Acceptance Criteria

- [ ] Facebook OAuth application configured
- [ ] Sign-in and callback flow works
- [ ] User identity is linked to an internal user record
- [ ] Authentication failures are handled safely

**Priority:** Medium

---

## RG-014: Demo User Access

### Acceptance Criteria

- [ ] Seeded demo account is available
- [ ] Demo data contains no real personal information
- [ ] Recruiters can explore the main product journey
- [ ] Demo reset strategy is documented

**Priority:** High

---

# Epic 3 - Personal Finance Core

## RG-020: Financial Account Management

**Description**

Allow users to manage cash, bank, credit-card, and e-wallet accounts.

### Acceptance Criteria

- [ ] Create account
- [ ] Edit account
- [ ] Archive or delete account safely
- [ ] Set account currency
- [ ] Enforce user ownership

**Priority:** High

---

## RG-021: Transaction Management

**Description**

Create income and expense management.

### Acceptance Criteria

- [ ] Add transaction
- [ ] Edit transaction
- [ ] Delete transaction
- [ ] Validate amount, date, currency, and type
- [ ] Filter and search transactions
- [ ] Enforce user ownership

**Priority:** Critical

---

## RG-022: Category Management

### Acceptance Criteria

- [ ] Seed default categories
- [ ] Create custom category
- [ ] Edit category
- [ ] Prevent unsafe deletion of categories in use
- [ ] Assign categories to transactions

**Priority:** High

---

## RG-023: CSV Transaction Import

### Acceptance Criteria

- [ ] Document sample CSV format
- [ ] Validate uploaded records
- [ ] Show import preview
- [ ] Report invalid rows
- [ ] Prevent duplicate imports
- [ ] Store import history

**Priority:** High

---

# Epic 4 - Dashboard and Analytics

## RG-030: Financial Overview Dashboard

### Acceptance Criteria

- [ ] Display total income
- [ ] Display total expenses
- [ ] Display savings amount and savings rate
- [ ] Display recent transactions
- [ ] Support loading, empty, and error states

**Priority:** High

---

## RG-031: Spending Trend Charts

### Acceptance Criteria

- [ ] Display monthly spending trend
- [ ] Support selectable periods
- [ ] Keep chart labels readable on mobile
- [ ] Provide accessible text alternatives

**Priority:** Medium

---

## RG-032: Category Analytics

### Acceptance Criteria

- [ ] Display category totals and percentages
- [ ] Support date filtering
- [ ] Link summaries to supporting transactions

**Priority:** High

---

# Epic 5 - AI Assistant

## RG-040: LLM Provider Integration

**Description**

Connect an LLM through a provider-neutral adapter.

### Candidate Providers

- Google Gemini
- Groq
- OpenRouter
- Ollama for local development

### Acceptance Criteria

- [ ] Common provider interface created
- [ ] One provider integrated successfully
- [ ] Timeout and retry handling implemented
- [ ] Quota exhaustion handled gracefully

**Priority:** High

---

## RG-041: Financial Function Calling

### Acceptance Criteria

- [ ] Define approved financial functions
- [ ] Validate all tool arguments
- [ ] Authorize every request before data access
- [ ] Return deterministic financial calculations
- [ ] Prevent unrestricted SQL execution

**Priority:** Critical

---

## RG-042: Spending Insights Assistant

### Example Questions

```text
Why did my spending increase?
Which category grew the most?
How much did I spend on Grab this year?
```

### Acceptance Criteria

- [ ] Compare selected periods
- [ ] Explain changes using verified data
- [ ] Include supporting period, category, or transaction context
- [ ] State when available data is insufficient

**Priority:** High

---

## RG-043: Goal Planning Assistant

### Acceptance Criteria

- [ ] Accept goal amount and target date
- [ ] Calculate required monthly savings deterministically
- [ ] Compare alternative scenarios
- [ ] Avoid regulated financial advice

**Priority:** Medium

---

# Epic 6 - Multi-Currency Support

## RG-050: Currency Support

### Acceptance Criteria

- [ ] Support MYR, USD, EUR, SGD, and GBP
- [ ] Allow user to select a base currency
- [ ] Store original amount and currency
- [ ] Store converted amount and base currency
- [ ] Display original and converted values clearly

**Priority:** High

---

## RG-051: Exchange Rate Service

### Acceptance Criteria

- [ ] Store exchange rate used
- [ ] Store rate date and source label
- [ ] Convert transactions into the user's base currency
- [ ] Define behaviour when a rate is unavailable

**Priority:** Medium

---

# Epic 7 - Receipt OCR

## RG-060: Receipt Upload

### Acceptance Criteria

- [ ] Accept JPG, PNG, and PDF
- [ ] Validate file type and size
- [ ] Store files outside PostgreSQL
- [ ] Enforce user ownership

**Priority:** Medium

---

## RG-061: OCR Processing

### Acceptance Criteria

- [ ] Extract merchant name
- [ ] Extract total amount
- [ ] Extract transaction date
- [ ] Extract currency when available
- [ ] Show extracted fields for user review
- [ ] Handle low-quality receipts gracefully

**Priority:** Medium

---

## RG-062: AI-Assisted Categorization

### Acceptance Criteria

- [ ] Suggest a transaction category
- [ ] Allow user correction
- [ ] Record corrections for future evaluation
- [ ] Never silently change confirmed user data

**Priority:** Medium

---

# Epic 8 - Budget Management

## RG-070: Create and Manage Budgets

### Acceptance Criteria

- [ ] Create category budget
- [ ] Edit budget
- [ ] Delete budget safely
- [ ] Select budget period

**Priority:** High

---

## RG-071: Budget Tracking

### Acceptance Criteria

- [ ] Display budget amount
- [ ] Display spent and remaining amounts
- [ ] Display percentage used
- [ ] Link totals to supporting transactions

**Priority:** High

---

## RG-072: Budget Alerts

### Acceptance Criteria

- [ ] Support configurable warning thresholds
- [ ] Show near-limit warning
- [ ] Show exceeded-budget status
- [ ] Avoid duplicate notifications

**Priority:** Medium

---

# Epic 9 - Portfolio Readiness

## RG-080: Demo Dataset

### Acceptance Criteria

- [ ] Include realistic synthetic transactions
- [ ] Include multiple categories and subscriptions
- [ ] Include budgets, goals, and multi-currency examples
- [ ] Confirm that no real personal or employer data is included

**Priority:** High

---

## RG-081: Architecture Documentation

### Acceptance Criteria

- [ ] Create system-context diagram
- [ ] Create container-level diagram
- [ ] Document architecture decisions
- [ ] Explain AI boundaries and deterministic calculations
- [ ] Document authentication and data ownership

**Priority:** High

---

## RG-082: Portfolio Screenshots

### Required Screens

- [ ] Landing or login page
- [ ] Dashboard
- [ ] Transactions
- [ ] Budgets
- [ ] AI assistant
- [ ] Savings goals
- [ ] Mobile layout

**Priority:** High

---

## RG-083: Recruiter-Friendly README

### Required Sections

- [ ] Project overview and value proposition
- [ ] Features and screenshots
- [ ] Technology stack and architecture
- [ ] Local setup and demo instructions
- [ ] Security, trade-offs, and known limitations
- [ ] Roadmap and lessons learned

**Priority:** Critical

---

## RG-084: Public Deployment

### Acceptance Criteria

- [ ] Frontend deployed
- [ ] FastAPI backend deployed
- [ ] PostgreSQL deployed securely
- [ ] Environment secrets protected
- [ ] Health checks and monitoring configured
- [ ] Demo journey tested end to end

**Priority:** Critical

---

## RG-085: Demo Video

### Contents

- [ ] Product overview
- [ ] Main user journey
- [ ] AI assistant demonstration
- [ ] Architecture highlights
- [ ] One engineering decision and trade-off

**Priority:** High

---

# Definition of Done

A card can move to **Done** only when:

- [ ] Acceptance criteria are satisfied
- [ ] Relevant automated tests pass
- [ ] Security and authorization checks are included where applicable
- [ ] Responsive behaviour is verified where applicable
- [ ] Loading, empty, and error states are handled
- [ ] Documentation is updated
- [ ] Pull request is reviewed and merged
- [ ] No secrets or personal data are committed
