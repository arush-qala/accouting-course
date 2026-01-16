import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_5_CONCEPTS: LearningConcept[] = [
  {
    id: "m5-c1",
    title: "1. Why Cash Flow Matters",
    content: `Net Income ≠ Cash Flow due to timing differences.
    
**Examples:**
• Revenue recorded but customer hasn't paid (Cash < Income)
• Expenses recorded (depreciation) but no cash spent (Cash > Income)
• Prepayments received for future service (Cash > Income)

**A company can be:**
• Profitable but cash-poor (growing rapidly, slow collection)
• Unprofitable but cash-rich (received large prepayments)

**Key Takeaway:** Cash flow shows actual liquidity — "Can we pay our bills?"`,
    takeaway: "Cash is reality; Profit is an accounting concept."
  },
  {
    id: "m5-c2",
    title: "2. The Three Sections",
    content: `**1. Operating Activities:**
Cash from core business (Customer payments - Suppliers/Salaries). Should be positive for healthy business.

**2. Investing Activities:**
Cash for long-term assets.
• Inflows: Selling assets
• Outflows: Buying equipment (CAPEX), Acquisitions

**3. Financing Activities:**
Cash from capital providers.
• Inflows: Loans received, Issuing shares
• Outflows: Repaying loans, Paying dividends`,
    takeaway: "Operating Cash Flow is the most important metric for business health."
  },
  {
    id: "m5-c3",
    title: "3. Indirect Method (Operating Section)",
    content: `Most companies use the Indirect Method, starting with Net Income and adjusting it.

**Structure:**
Net Income
+ Non-cash expenses (Depreciation, Amortization)
± Changes in Working Capital

**Working Capital Rules:**
• Current Asset ↑ = Cash ↓ (Used cash to buy/hold)
• Current Asset ↓ = Cash ↑ (Freed up cash)
• Current Liability ↑ = Cash ↑ (Borrowed/Deferred payment)
• Current Liability ↓ = Cash ↓ (Paid off debt)`,
    takeaway: "The indirect method reconciles accrual profit to actual cash."
  },
  {
    id: "m5-c4",
    title: "4. Free Cash Flow (FCF)",
    content: `FCF measures cash available after maintaining/growing the business.

**Formula:**
FCF = Operating Cash Flow − Capital Expenditures (CAPEX)

**Why FCF Matters:**
• Shows "true" cash generation
• Cash available for dividends, debt repayment, or acquisitions
• Used in company valuation (DCF models)

**Example:** OCF £500k - CAPEX £150k = FCF £350k`,
    takeaway: "FCF is the cash actually available to owners."
  }
];

export const MODULE_5_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Equipment purchase appears in which Cash Flow section?",
    options: [
      { id: "A", text: "Operating" },
      { id: "B", text: "Investing" },
      { id: "C", text: "Financing" },
      { id: "D", text: "None" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Buying long-term assets is an Investing activity."
  },
  {
    id: 2,
    text: "Using the indirect method, depreciation is:",
    options: [
      { id: "A", text: "Subtracted from Net Income" },
      { id: "B", text: "Added to Net Income" },
      { id: "C", text: "Not included" },
      { id: "D", text: "Shown in Investing section" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Depreciation reduced Net Income but used no cash, so we add it back."
  },
  {
    id: 3,
    text: "Accounts Receivable increased by £50,000. This means:",
    options: [
      { id: "A", text: "£50,000 more cash was received" },
      { id: "B", text: "£50,000 less cash was received than revenue recorded" },
      { id: "C", text: "No impact on cash flow" },
      { id: "D", text: "£50,000 was written off" }
    ],
    correctOptionId: "B",
    explanation: "Correct. AR increasing means we recorded revenue but haven't collected the cash yet, so we subtract it from OCF."
  },
  {
    id: 4,
    text: "Free Cash Flow formula is:",
    options: [
      { id: "A", text: "Net Income − Depreciation" },
      { id: "B", text: "Operating Cash Flow − Capital Expenditures" },
      { id: "C", text: "Revenue − Expenses" },
      { id: "D", text: "Cash Inflows − Cash Outflows" }
    ],
    correctOptionId: "B",
    explanation: "Correct. FCF = OCF − CAPEX."
  },
  {
    id: 5,
    text: "Dividends paid appear in:",
    options: [
      { id: "A", text: "Operating Activities" },
      { id: "B", text: "Investing Activities" },
      { id: "C", text: "Financing Activities" },
      { id: "D", text: "Not on Cash Flow Statement" }
    ],
    correctOptionId: "C",
    explanation: "Correct. Dividends are distributions to capital providers (shareholders)."
  },
  {
    id: 6,
    text: "A company has Net Income of £100k and OCF of £60k. This could indicate:",
    options: [
      { id: "A", text: "Excellent cash management" },
      { id: "B", text: "Receivables growing faster than collections" },
      { id: "C", text: "Strong profitability" },
      { id: "D", text: "Low depreciation" }
    ],
    correctOptionId: "B",
    explanation: "Correct. OCF < NI often means working capital is consuming cash (like growing AR)."
  },
  {
    id: 7,
    text: "An increase in Accounts Payable:",
    options: [
      { id: "A", text: "Uses cash" },
      { id: "B", text: "Conserves cash" },
      { id: "C", text: "Has no cash impact" },
      { id: "D", text: "Reduces Net Income" }
    ],
    correctOptionId: "B",
    explanation: "Correct. AP increase means we delayed paying expenses, thus conserving cash (Add to OCF)."
  }
];

const B2BPaymentsContext = (
  <div className="text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
    <div className="bg-slate-100 p-2 font-bold text-center border-b border-slate-200">B2B Payments Inc — Financial Data</div>
    <div className="p-4 bg-white grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <div className="flex justify-between font-bold"><span>Net Income</span> <span>£800,000</span></div>
        <div className="flex justify-between"><span>Depreciation</span> <span>£120,000</span></div>
        <div className="flex justify-between"><span>Amortization</span> <span>£40,000</span></div>
      </div>
      <div className="space-y-1 text-slate-600">
        <div className="flex justify-between"><span>A/R Change</span> <span>+£75,000</span></div>
        <div className="flex justify-between"><span>Inventory Change</span> <span>-£25,000</span></div>
        <div className="flex justify-between"><span>Prepaid Exp Change</span> <span>+£15,000</span></div>
        <div className="flex justify-between"><span>A/P Change</span> <span>+£45,000</span></div>
        <div className="flex justify-between"><span>Accrued Liab Change</span> <span>-£30,000</span></div>
        <div className="flex justify-between"><span>Deferred Rev Change</span> <span>+£60,000</span></div>
      </div>
    </div>
  </div>
);

export const MODULE_5_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "Starting with Net Income (£800,000), enter the non-cash adjustments.",
    type: 'multi-input',
    context: B2BPaymentsContext,
    inputFields: [
        { key: "dep", label: "Depreciation", prefix: "+" },
        { key: "amort", label: "Amortization", prefix: "+" }
    ],
    correctAnswers: {
        dep: 120000,
        amort: 40000
    },
    hints: [
      "Depreciation and Amortization are non-cash expenses.",
      "Add them back because they reduced Net Income but didn't use cash.",
      "Depreciation = £120,000, Amortization = £40,000"
    ],
    solution: "Non-cash expenses are added back. Total add-back = £120,000 + £40,000."
  },
  {
    id: 2,
    text: "Accounts Receivable INCREASED by £75,000. How does this affect Operating Cash Flow?",
    type: 'number',
    context: B2BPaymentsContext,
    inputPrefix: "£",
    correctAnswer: [-75000, "-75000"],
    hints: [
      "Asset UP = Cash DOWN",
      "We recorded revenue but haven't collected the cash.",
      "Use a negative sign for decrease."
    ],
    solution: "AR increasing means we recorded £75,000 revenue that we haven't collected yet. We subtract this (£-75,000) to adjust for cash not received."
  },
  {
    id: 3,
    text: "Inventory DECREASED by £25,000. How does this affect Operating Cash Flow?",
    type: 'number',
    context: B2BPaymentsContext,
    inputPrefix: "£",
    correctAnswer: [25000, "25000"],
    hints: [
      "Asset DOWN = Cash UP",
      "We sold items from stock, freeing up cash."
    ],
    solution: "Inventory decreasing means we sold items from stock without replacing them, freeing up cash. We add £25,000 back."
  },
  {
    id: 4,
    text: "Complete the working capital adjustments table.",
    type: 'multi-input',
    context: B2BPaymentsContext,
    inputFields: [
      { key: "ar", label: "Accts Rec (+£75k)", prefix: "£" },
      { key: "inv", label: "Inventory (-£25k)", prefix: "£" },
      { key: "prepaid", label: "Prepaid Exp (+£15k)", prefix: "£" },
      { key: "ap", label: "Accts Pay (+£45k)", prefix: "£" },
      { key: "accrued", label: "Accrued Liab (-£30k)", prefix: "£" },
      { key: "deferred", label: "Deferred Rev (+£60k)", prefix: "£" }
    ],
    correctAnswers: {
      ar: -75000,
      inv: 25000,
      prepaid: -15000,
      ap: 45000,
      accrued: -30000,
      deferred: 60000
    },
    hints: [
      "Asset UP = Cash DOWN (-), Asset DOWN = Cash UP (+)",
      "Liability UP = Cash UP (+), Liability DOWN = Cash DOWN (-)",
      "Prepaid UP (-), AP UP (+), Accrued DOWN (-), Deferred UP (+)"
    ],
    solution: "AR (-75k), Inv (+25k), Prepaid (-15k), AP (+45k), Accrued (-30k), Deferred (+60k)."
  },
  {
    id: 5,
    text: "Calculate total Operating Cash Flow.",
    type: 'number',
    context: B2BPaymentsContext,
    inputPrefix: "£",
    correctAnswer: [970000, "970000"],
    hints: [
      "Start with Net Income (£800k)",
      "Add non-cash (+160k)",
      "Sum all working capital adjustments (+10k net)"
    ],
    solution: "£800k (NI) + £160k (Non-cash) + £10k (Net WC) = £970,000. (WC: -75+25-15+45-30+60 = +10)."
  },
  {
    id: 6,
    text: "If CAPEX was £200k and Dividends were £150k, calculate FCF and identify dividend section.",
    type: 'multi-input',
    context: B2BPaymentsContext,
    inputFields: [
      { key: "fcf", label: "Free Cash Flow", prefix: "£" },
      { key: "section", label: "Dividends Section" }
    ],
    correctAnswers: {
      fcf: 770000,
      section: "Financing"
    },
    hints: [
      "FCF = Operating Cash Flow - CAPEX",
      "Dividends are paid to shareholders (capital providers)."
    ],
    solution: "FCF = £970,000 (OCF) - £200,000 (CAPEX) = £770,000. Dividends (£150k) appear in the Financing section."
  }
];