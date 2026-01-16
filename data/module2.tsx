import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_2_CONCEPTS: LearningConcept[] = [
  {
    id: "m2-c1",
    title: "1. The Three Financial Statements",
    content: `Every company produces three main financial statements that tell a complete story:

• **Balance Sheet**: Shows what we own & owe at a *point in time*. Answers: "What's our financial position?"
• **Income Statement**: Shows revenue & expenses over a *period of time*. Answers: "How profitable were we?"
• **Cash Flow Statement**: Shows cash movements over a *period of time*. Answers: "Where did cash come from and go?"`,
    takeaway: "These three statements work together — understanding one requires understanding all three."
  },
  {
    id: "m2-c2",
    title: "2. The Income Statement (P&L)",
    content: `The Income Statement shows financial performance over a period (e.g., a year or quarter).

**Structure:**
Revenue (Sales)
− Cost of Goods Sold
= **Gross Profit**
− Operating Expenses
= **Operating Income (EBIT)**
− Interest & Tax
= **Net Income**

**Key Margins:**
• Gross Margin = Gross Profit ÷ Revenue (production efficiency)
• Operating Margin = Operating Income ÷ Revenue (operational efficiency)
• Net Margin = Net Income ÷ Revenue (bottom-line profitability)`,
    takeaway: "Revenue is \"top line,\" Net Income is \"bottom line.\" Everything in between shows where money goes."
  },
  {
    id: "m2-c3",
    title: "3. The Cash Flow Statement",
    content: `The Cash Flow Statement explains changes in cash across three activities:

1. **Operating**: Cash from core business (Customer payments, Salaries, etc.)
2. **Investing**: Cash for long-term assets (Equipment purchases, Acquisitions)
3. **Financing**: Cash from funding (Loans, Share issuance, Dividends)

Net Income ≠ Cash Flow because revenue/expenses are recorded when earned/incurred, not when cash moves (Accrual Accounting).`,
    takeaway: "A profitable company can run out of cash. The Cash Flow Statement shows actual liquidity."
  },
  {
    id: "m2-c4",
    title: "4. How the Statements Connect",
    content: `The statements form an integrated system:
1. **Net Income** (from Income Statement) increases **Retained Earnings** (on Balance Sheet).
2. **Ending Cash** (from Cash Flow Statement) appears as **Cash** (on Balance Sheet).
3. The Cash Flow Statement starts with Net Income and adjusts for non-cash items.`,
    takeaway: "The statements form an integrated system — a change in one affects the others."
  }
];

export const MODULE_2_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Which financial statement shows performance over a period of time?",
    options: [
      { id: "A", text: "Balance Sheet" },
      { id: "B", text: "Income Statement" },
      { id: "C", text: "Statement of Equity" },
      { id: "D", text: "Notes to Accounts" }
    ],
    correctOptionId: "B",
    explanation: "Correct! The Income Statement covers a specific period (like a year), whereas the Balance Sheet is a snapshot at a single point in time."
  },
  {
    id: 2,
    text: "\"Accounts Receivable\" represents:",
    options: [
      { id: "A", text: "Money the company owes to suppliers" },
      { id: "B", text: "Money customers owe to the company" },
      { id: "C", text: "Cash in the bank" },
      { id: "D", text: "Future expenses" }
    ],
    correctOptionId: "B",
    explanation: "Correct! Accounts Receivable is an asset representing money owed to the business by customers for goods/services delivered."
  },
  {
    id: 3,
    text: "Net Income flows to which Balance Sheet line item?",
    options: [
      { id: "A", text: "Cash" },
      { id: "B", text: "Share Capital" },
      { id: "C", text: "Retained Earnings" },
      { id: "D", text: "Accounts Payable" }
    ],
    correctOptionId: "C",
    explanation: "Exactly. Net Income increases Retained Earnings (part of Equity), unless distributed as dividends."
  },
  {
    id: 4,
    text: "A company has £500k Revenue and £200k Gross Profit. What is COGS?",
    options: [
      { id: "A", text: "£200k" },
      { id: "B", text: "£300k" },
      { id: "C", text: "£500k" },
      { id: "D", text: "£700k" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Revenue (£500k) - COGS = Gross Profit (£200k). Therefore, COGS = £300k."
  },
  {
    id: 5,
    text: "Which section of the Cash Flow Statement includes equipment purchases?",
    options: [
      { id: "A", text: "Operating Activities" },
      { id: "B", text: "Investing Activities" },
      { id: "C", text: "Financing Activities" },
      { id: "D", text: "None" }
    ],
    correctOptionId: "B",
    explanation: "Right! Buying long-term assets like equipment is an Investing Activity."
  },
  {
    id: 6,
    text: "Current Liabilities are debts due within:",
    options: [
      { id: "A", text: "30 days" },
      { id: "B", text: "90 days" },
      { id: "C", text: "12 months" },
      { id: "D", text: "5 years" }
    ],
    correctOptionId: "C",
    explanation: "Correct. 'Current' in accounting typically means within one year (12 months)."
  }
];

const FastTransferContext = (
  <div className="text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
    <div className="bg-slate-100 p-2 font-bold text-center border-b border-slate-200">FastTransfer Ltd — Financial Data</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
      <div>
        <h4 className="font-semibold text-slate-700 mb-2 border-b">Balance Sheet (31 Dec)</h4>
        <div className="grid grid-cols-2 gap-x-4 text-slate-600">
           <span>Cash</span> <span className="text-right">£2,400k</span>
           <span>Accounts Rec.</span> <span className="text-right">£1,800k</span>
           <span>Prepaid Exp.</span> <span className="text-right">£300k</span>
           <span>Equipment (net)</span> <span className="text-right">£3,500k</span>
           <span className="font-bold border-t">Total Assets</span> <span className="font-bold border-t text-right">£8,000k</span>
           
           <div className="col-span-2 h-2"></div>
           
           <span>Accounts Payable</span> <span className="text-right">£1,200k</span>
           <span>Deferred Revenue</span> <span className="text-right">£800k</span>
           <span>Bank Loan</span> <span className="text-right">£2,000k</span>
           <span className="font-bold border-t">Total Liab.</span> <span className="font-bold border-t text-right">£4,000k</span>
           
           <div className="col-span-2 h-2"></div>
           
           <span>Share Capital</span> <span className="text-right">£2,500k</span>
           <span>Retained Earn.</span> <span className="text-right">£1,500k</span>
           <span className="font-bold border-t">Total Equity</span> <span className="font-bold border-t text-right">£4,000k</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-slate-700 mb-2 border-b">Income Statement (Q4)</h4>
        <div className="grid grid-cols-2 gap-x-4 text-slate-600">
           <span>Revenue</span> <span className="text-right">£5,200k</span>
           <span>Cost of Services</span> <span className="text-right">(£2,600k)</span>
           <span className="font-bold border-t">Gross Profit</span> <span className="font-bold border-t text-right">£2,600k</span>
           
           <div className="col-span-2 h-2"></div>
           
           <span>Operating Exp.</span> <span className="text-right">(£1,800k)</span>
           <span className="font-bold border-t">Operating Income</span> <span className="font-bold border-t text-right">£800k</span>
           
           <div className="col-span-2 h-2"></div>

           <span>Interest Exp.</span> <span className="text-right">(£50k)</span>
           <span>Tax Expense</span> <span className="text-right">(£150k)</span>
           <span className="font-bold border-t text-indigo-700">Net Income</span> <span className="font-bold border-t text-right text-indigo-700">£600k</span>
        </div>
      </div>
    </div>
  </div>
);

export const MODULE_2_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "What is FastTransfer's Gross Profit Margin?",
    type: 'number',
    context: FastTransferContext,
    inputSuffix: "%",
    correctAnswer: [50, "50"],
    hints: [
      "Gross Profit Margin = Gross Profit ÷ Revenue",
      "Gross Profit is £2,600k and Revenue is £5,200k",
      "£2,600 ÷ £5,200 = 0.50 or 50%"
    ],
    solution: "Gross Profit Margin = Gross Profit ÷ Revenue = £2,600k ÷ £5,200k = 50%. This means FastTransfer keeps 50p of every £1 of revenue after paying direct costs of providing services."
  },
  {
    id: 2,
    text: "What is the Operating Profit Margin?",
    type: 'number',
    context: FastTransferContext,
    inputSuffix: "%",
    correctAnswer: ["15.4", "15.38", 15.4, 15.38, 15],
    hints: [
      "Operating Profit Margin = Operating Income ÷ Revenue",
      "Operating Income (EBIT) is £800k",
      "£800 ÷ £5,200 = 0.154 or 15.4%"
    ],
    solution: "Operating Profit Margin = Operating Income ÷ Revenue = £800k ÷ £5,200k = 15.4%. After all operating expenses, FastTransfer keeps 15.4p of every revenue £1."
  },
  {
    id: 3,
    text: "Calculate the Current Ratio (Current Assets ÷ Current Liabilities).",
    type: 'number',
    context: FastTransferContext,
    correctAnswer: [2.25, "2.25"],
    hints: [
      "Current Assets = Cash + Accounts Receivable + Prepaid Expenses",
      "Current Liabilities = Accounts Payable + Deferred Revenue (both due within 12 months)",
      "Current Assets = £2,400 + £1,800 + £300 = £4,500k. Current Liabilities = £1,200 + £800 = £2,000k"
    ],
    solution: "Current Ratio = Current Assets ÷ Current Liabilities = £4,500k ÷ £2,000k = 2.25. This means FastTransfer has £2.25 of current assets for every £1 of current liabilities — a healthy liquidity position."
  },
  {
    id: 4,
    text: "The Debt-to-Equity Ratio is calculated as Total Debt ÷ Total Equity. What is FastTransfer's ratio?",
    type: 'number',
    context: FastTransferContext,
    correctAnswer: [0.5, "0.5", 50, "50"],
    hints: [
      "Total Debt here means interest-bearing debt (the Bank Loan), not all liabilities",
      "Bank Loan = £2,000k, Total Equity = £4,000k",
      "£2,000 ÷ £4,000 = 0.50"
    ],
    solution: "Debt-to-Equity = Bank Loan ÷ Total Equity = £2,000k ÷ £4,000k = 0.5. FastTransfer uses £0.50 of debt for every £1 of equity."
  },
  {
    id: 5,
    text: "If Retained Earnings started Q4 at £900k and ended at £1,500k, and Net Income was £600k, how much dividend was paid?",
    type: 'number',
    context: FastTransferContext,
    inputPrefix: "£",
    inputSuffix: "k",
    correctAnswer: [0, "0"],
    hints: [
      "Retained Earnings change = Net Income − Dividends",
      "RE Change = £1,500k − £900k = £600k",
      "If RE increased by £600k and NI was £600k... what does that leave for dividends?"
    ],
    solution: "Retained Earnings increased by £600k (£1,500k − £900k), which exactly equals Net Income of £600k. This means no dividends were paid: all profits were retained in the business."
  },
  {
    id: 6,
    text: "Based on the statements, which observation is TRUE?",
    type: 'multiple-choice',
    context: FastTransferContext,
    options: [
      { id: "A", text: "FastTransfer is unprofitable" },
      { id: "B", text: "FastTransfer has more debt than equity" },
      { id: "C", text: "FastTransfer can comfortably cover short-term obligations" },
      { id: "D", text: "FastTransfer's largest asset is Equipment" }
    ],
    correctAnswer: "C",
    hints: [
      "Check each statement against the data.",
      "A: Net Income is positive (£600k). B: Debt (£2,000k) < Equity (£4,000k).",
      "Current Ratio of 2.25 means strong short-term liquidity."
    ],
    solution: "A) False (Profitable). B) False (Debt < Equity). C) TRUE — Current Ratio of 2.25 shows strong ability to cover short-term obligations. D) False (Cash+AR+Prepaid > Equipment)."
  }
];