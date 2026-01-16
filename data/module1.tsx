import { QuizQuestion, BalanceSheetState, LearningConcept } from '../types';

export const MODULE_1_CONCEPTS: LearningConcept[] = [
  {
    id: "m1-c1",
    title: "1. What is a Balance Sheet?",
    content: `The Balance Sheet is a financial snapshot showing what a company owns, owes, and the value left for owners — all at a specific point in time. Think of it like a photograph of the company's financial position on a particular date (e.g., "as of December 31, 2025").\n\nUnlike other financial statements that show activity over time, the Balance Sheet shows position AT a moment.`,
    takeaway: "Unlike other financial statements that show activity over time, the Balance Sheet shows position AT a moment.",
    example: "When Wise's B2B clients say 'our balance sheet is strong,' they mean they have solid assets, manageable debts, and healthy owner's equity."
  },
  {
    id: "m1-c2",
    title: "2. The Structure of a Balance Sheet",
    content: `Every Balance Sheet has three sections that must always balance:\n\nASSETS = LIABILITIES + EQUITY\n\nThis is the fundamental accounting equation. The two sides MUST always equal.`,
    takeaway: "The two sides MUST always equal. This is the fundamental accounting equation.",
    visual: "structure" 
  },
  {
    id: "m1-c3",
    title: "3. Understanding Each Balance Sheet Term",
    content: `Let's define each key term you'll see on a Balance Sheet.\n\nASSETS (What we own):\n- Cash: Money in bank accounts\n- Accounts Receivable: Money customers owe us\n- Inventory: Goods held for sale\n- Prepaid Expenses: Future benefits already paid for\n- Equipment: Physical assets\n\nLIABILITIES (What we owe):\n- Accounts Payable: Money owed to suppliers\n- Deferred Revenue: Customer payments for future service\n- Accrued Expenses: Expenses incurred but not yet paid\n- Loans: Borrowed money\n\nEQUITY (Owner's stake):\n- Share Capital: Money invested by owners\n- Retained Earnings: Accumulated profits kept in business`,
    takeaway: "Every transaction affects at least two of these accounts while keeping the equation balanced."
  },
  {
    id: "m1-c4",
    title: "4. Current vs Non-Current Classification",
    content: `Items are classified by timing:\n\n- Current Assets/Liabilities: Convert to cash or due within 12 months (e.g., Cash, Inventory, Accounts Payable).\n- Non-Current Assets/Liabilities: Held or due longer than 12 months (e.g., Equipment, Long-term Loans).`,
    takeaway: "Classification tells you about timing — when assets become cash and when debts come due. This measures liquidity."
  },
  {
    id: "m1-c5",
    title: "5. How Transactions Change the Balance Sheet",
    content: `Every business transaction changes at least two Balance Sheet accounts. This is called "double-entry bookkeeping."\n\nFor example, if you pay a supplier £5,000 cash:\n1. Cash (Asset) decreases by £5,000\n2. Accounts Payable (Liability) decreases by £5,000\n\nThe equation stays balanced!`,
    takeaway: "Watch how Assets = Liabilities + Equity stays balanced after every transaction!"
  }
];

export const MODULE_1_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "The Balance Sheet shows a company's financial position:",
    options: [
      { id: "A", text: "Over a period of time (like a year)" },
      { id: "B", text: "At a specific point in time" },
      { id: "C", text: "For future projections" },
      { id: "D", text: "Compared to competitors" }
    ],
    correctOptionId: "B",
    explanation: "Exactly! The Balance Sheet is a snapshot — \"as of\" a specific date. It shows position, not activity."
  },
  {
    id: 2,
    text: "Which of these is a Current Asset?",
    options: [
      { id: "A", text: "Building" },
      { id: "B", text: "10-year patent" },
      { id: "C", text: "Accounts Receivable" },
      { id: "D", text: "Long-term investment" }
    ],
    correctOptionId: "C",
    explanation: "Correct! Accounts Receivable typically converts to cash within 12 months, making it a current asset."
  },
  {
    id: 3,
    text: "A customer pays £36,000 upfront for a 3-year service contract. On Day 1, how does this affect the Balance Sheet?",
    options: [
      { id: "A", text: "Cash +£36,000, Revenue +£36,000" },
      { id: "B", text: "Cash +£36,000, Deferred Revenue +£36,000" },
      { id: "C", text: "Accounts Receivable +£36,000, Revenue +£36,000" },
      { id: "D", text: "Cash +£36,000, Retained Earnings +£36,000" }
    ],
    correctOptionId: "B",
    explanation: "Right! Cash increases, but revenue isn't earned yet. Deferred Revenue (a liability) represents the obligation to deliver 3 years of service."
  },
  {
    id: 4,
    text: "The accounting equation states:",
    options: [
      { id: "A", text: "Revenue − Expenses = Profit" },
      { id: "B", text: "Assets = Liabilities + Equity" },
      { id: "C", text: "Cash In − Cash Out = Net Cash" },
      { id: "D", text: "Assets − Liabilities = Revenue" }
    ],
    correctOptionId: "B",
    explanation: "Correct! This equation must ALWAYS balance. Every transaction affects at least two accounts to maintain this balance."
  },
  {
    id: 5,
    text: "Deferred Revenue is classified as a:",
    options: [
      { id: "A", text: "Asset" },
      { id: "B", text: "Liability" },
      { id: "C", text: "Equity" },
      { id: "D", text: "Revenue" }
    ],
    correctOptionId: "B",
    explanation: "Yes! Deferred Revenue is a liability — it represents your obligation to deliver goods/services that customers have already paid for."
  },
  {
    id: 6,
    text: "A company pays £12,000 for 4 months of insurance in advance. Immediately after payment, the Balance Sheet shows:",
    options: [
      { id: "A", text: "Insurance Expense +£12,000, Cash -£12,000" },
      { id: "B", text: "Prepaid Expenses +£12,000, Cash -£12,000" },
      { id: "C", text: "Accounts Payable +£12,000, Insurance Expense +£12,000" },
      { id: "D", text: "Cash -£12,000, Retained Earnings -£12,000" }
    ],
    correctOptionId: "B",
    explanation: "Correct! Paying in advance creates a Prepaid Expenses asset. It becomes an expense gradually over the 4 months."
  },
  {
    id: 7,
    text: "If Total Assets are £500,000 and Total Liabilities are £200,000, what is Total Equity?",
    options: [
      { id: "A", text: "£700,000" },
      { id: "B", text: "£500,000" },
      { id: "C", text: "£300,000" },
      { id: "D", text: "£200,000" }
    ],
    correctOptionId: "C",
    explanation: "Exactly! Assets = Liabilities + Equity, so £500,000 = £200,000 + Equity. Equity = £300,000."
  }
];

export const INITIAL_BALANCE_SHEET: BalanceSheetState = {
  cash: 50000,
  accountsReceivable: 15000,
  inventory: 0,
  prepaidExpenses: 0,
  equipment: 30000,
  
  accountsPayable: 8000,
  deferredRevenue: 0,
  loans: 0,
  
  shareCapital: 70000,
  retainedEarnings: 17000,
};

export const EXERCISE_TRANSACTIONS = [
  {
    id: 1,
    date: "Jan 1",
    scenario: "CloudPay receives £24,000 cash from Enterprise Corp for a 12-month software subscription starting January 1.",
    inputs: [
      { key: 'cash', label: 'Cash' },
      { key: 'accountsReceivable', label: 'Accounts Receivable' },
      { key: 'deferredRevenue', label: 'Deferred Revenue' },
      { key: 'retainedEarnings', label: 'Revenue (Retained Earnings)' },
    ],
    correctChanges: { cash: 24000, deferredRevenue: 24000 },
    hints: [
      "Cash is received, so one account definitely increases. But has CloudPay earned this revenue yet?",
      "The subscription hasn't started yet. When a customer pays before receiving service, what liability is created?",
      "Deferred Revenue is a liability representing your obligation to provide future service."
    ],
    explanation: "Cash increases because we received money. But we can't recognize revenue yet — we haven't provided any service! Instead, we record a liability called Deferred Revenue."
  },
  {
    id: 2,
    date: "Jan 31",
    scenario: "Month-end closing. Recognize January's portion of the Enterprise Corp subscription.",
    inputs: [
      { key: 'deferredRevenue', label: 'Deferred Revenue' },
      { key: 'retainedEarnings', label: 'Revenue (Retained Earnings)' },
      { key: 'cash', label: 'Cash' },
    ],
    correctChanges: { deferredRevenue: -2000, retainedEarnings: 2000 },
    hints: [
      "We've now delivered 1 month of a 12-month subscription. What fraction of £24,000 is that?",
      "£24,000 ÷ 12 months = £2,000 per month. We can now recognize this as earned revenue.",
      "Revenue increases Retained Earnings (owner's equity). The liability decreases because we've fulfilled part of our obligation."
    ],
    explanation: "After delivering January's service, we've earned £2,000 (£24,000 ÷ 12). We reduce our Deferred Revenue liability and increase Retained Earnings through revenue. No cash moves!"
  },
  {
    id: 3,
    date: "Jan 5",
    scenario: "CloudPay pays £18,000 for 6 months of office rent (January through June).",
    inputs: [
      { key: 'cash', label: 'Cash' },
      { key: 'prepaidExpenses', label: 'Prepaid Expenses' },
      { key: 'retainedEarnings', label: 'Rent Expense (Retained Earnings)' },
    ],
    correctChanges: { cash: -18000, prepaidExpenses: 18000 },
    hints: [
      "Cash goes out, but have we 'used' all 6 months of rent yet?",
      "We've paid for future benefit (6 months of office use). This creates an asset called Prepaid Expenses.",
      "No expense is recorded yet — we'll expense it month by month as we 'use' the office."
    ],
    explanation: "We've exchanged one asset (Cash) for another asset (Prepaid Expenses). The rent payment is not an expense yet — it's a prepaid asset representing future office use."
  },
  {
    id: 4,
    date: "Jan 31",
    scenario: "Month-end closing. Record January's rent expense.",
    inputs: [
      { key: 'prepaidExpenses', label: 'Prepaid Expenses' },
      { key: 'retainedEarnings', label: 'Rent Expense (Retained Earnings)' },
      { key: 'cash', label: 'Cash' },
    ],
    correctChanges: { prepaidExpenses: -3000, retainedEarnings: -3000 },
    hints: [
      "We've 'used' one month of the 6-month prepayment. What's that worth?",
      "£18,000 ÷ 6 months = £3,000 per month.",
      "Expenses reduce Retained Earnings. The prepaid asset decreases as we consume the benefit."
    ],
    explanation: "We've consumed January's rent (£18,000 ÷ 6 = £3,000). The Prepaid Expenses asset decreases, and we record an expense which reduces Retained Earnings."
  },
  {
    id: 5,
    date: "Jan 20",
    scenario: "CloudPay provides £8,000 of consulting services to a new client. Invoice sent, payment due in 30 days.",
    inputs: [
      { key: 'cash', label: 'Cash' },
      { key: 'accountsReceivable', label: 'Accounts Receivable' },
      { key: 'retainedEarnings', label: 'Revenue (Retained Earnings)' },
    ],
    correctChanges: { accountsReceivable: 8000, retainedEarnings: 8000 },
    hints: [
      "The service is delivered. Under accrual accounting, is revenue earned?",
      "No cash yet, but we have a right to receive payment. What asset represents money customers owe us?",
      "Accounts Receivable is the asset. Revenue increases Retained Earnings."
    ],
    explanation: "Service delivered = revenue earned, even without cash! We record an Accounts Receivable (asset) representing the client's obligation to pay. Revenue increases Retained Earnings."
  },
  {
    id: 6,
    date: "Jan 25",
    scenario: "CloudPay receives £10,000 payment from a different client for services delivered in December.",
    inputs: [
      { key: 'cash', label: 'Cash' },
      { key: 'accountsReceivable', label: 'Accounts Receivable' },
      { key: 'retainedEarnings', label: 'Revenue (Retained Earnings)' },
    ],
    correctChanges: { cash: 10000, accountsReceivable: -10000 },
    hints: [
      "Cash comes in — but was this revenue earned in January or December?",
      "The revenue was already recognized in December when service was delivered. What was sitting on the Balance Sheet waiting?",
      "We're just collecting an existing receivable. One asset converts to another."
    ],
    explanation: "This is NOT new revenue — the service was delivered in December. We're simply collecting an existing receivable. Cash goes up, Accounts Receivable goes down."
  }
];