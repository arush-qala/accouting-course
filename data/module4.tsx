import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_4_CONCEPTS: LearningConcept[] = [
  {
    id: "m4-c1",
    title: "1. Types of Assets",
    content: `Assets are classified by how quickly they convert to cash:

**Current Assets (< 12 months):**
Examples: Cash, Accounts Receivable, Inventory, Prepaid Expenses

**Non-Current Assets (> 12 months):**
Examples: Equipment, Buildings, Vehicles, Intangible Assets

*Non-current assets are split further:*
• Tangible (physical): Property, Plant, Equipment (PP&E)
• Intangible (non-physical): Patents, Software, Goodwill, Trademarks

**Balance Sheet Presentation:**
Current Assets are listed first (in order of liquidity), followed by Non-Current Assets. Accumulated Depreciation is subtracted from the asset value to show "Net" value.`,
    takeaway: "Classification affects liquidity analysis and how assets appear on the Balance Sheet."
  },
  {
    id: "m4-c2",
    title: "2. Capitalize vs Expense",
    content: `When money is spent, should it become an Asset (Capitalize) or Expense?

**Capitalize (Asset):**
• Benefit lasts > 1 year
• Significant amount (materiality)
• Creates or improves an asset (e.g. New Server, Building Extension)

**Expense Immediately:**
• Benefit used up in current period
• Small/immaterial amount
• Maintains existing asset (e.g. Repairs, Office Supplies)

**Examples:**
• New server (£50k) -> Capitalize (Multi-year benefit)
• Server repair (£500) -> Expense (Maintenance)
• Software dev (own use) -> Capitalize (Creates asset)`,
    takeaway: "Capitalizing spreads cost over time; expensing hits profit immediately."
  },
  {
    id: "m4-c3",
    title: "3. Straight-Line Depreciation",
    content: `Depreciation allocates an asset's cost over its useful life.

**Formula:**
Annual Depreciation = (Cost − Salvage Value) ÷ Useful Life

**Where:**
• Cost: Purchase price + installation + testing
• Salvage Value: Expected value at end of life
• Useful Life: How long asset will be used

**Impact:**
Income Statement: Depreciation Expense reduces profit
Balance Sheet: Accumulated Depreciation reduces asset value
Cash Flow: NO cash impact (depreciation is non-cash)`,
    takeaway: "Depreciation matches the cost of an asset to the periods benefiting from its use."
  },
  {
    id: "m4-c4",
    title: "4. Net Book Value (NBV)",
    content: `NBV shows the remaining accounting value of an asset.

**Formula:**
Net Book Value = Original Cost − Accumulated Depreciation

**Example:**
Year 0: Cost £50k, NBV £50k
Year 1: Dep £9k, Acc Dep £9k, NBV £41k
Year 2: Dep £9k, Acc Dep £18k, NBV £32k

**If asset is sold:**
• Sale Price > NBV → Gain on Sale
• Sale Price < NBV → Loss on Sale`,
    takeaway: "NBV ≠ Market Value. It's just the accounting value remaining on the books."
  }
];

export const MODULE_4_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "A delivery van costs £40,000, has 5-year life and £5,000 salvage. Annual depreciation is:",
    options: [
      { id: "A", text: "£8,000" },
      { id: "B", text: "£7,000" },
      { id: "C", text: "£9,000" },
      { id: "D", text: "£5,000" }
    ],
    correctOptionId: "B",
    explanation: "Correct. (£40,000 - £5,000) / 5 = £35,000 / 5 = £7,000 per year."
  },
  {
    id: 2,
    text: "Which expenditure should be capitalized?",
    options: [
      { id: "A", text: "Office cleaning services" },
      { id: "B", text: "New roof extending building life by 10 years" },
      { id: "C", text: "Monthly utility bills" },
      { id: "D", text: "Employee salaries" }
    ],
    correctOptionId: "B",
    explanation: "Right. A new roof significantly extends the useful life of the asset, so it is capitalized."
  },
  {
    id: 3,
    text: "Net Book Value equals:",
    options: [
      { id: "A", text: "Market value of asset" },
      { id: "B", text: "Original cost × depreciation rate" },
      { id: "C", text: "Original cost − Accumulated depreciation" },
      { id: "D", text: "Salvage value + depreciation" }
    ],
    correctOptionId: "C",
    explanation: "Correct. NBV is the historical cost minus all depreciation recorded to date."
  },
  {
    id: 4,
    text: "Depreciation is a:",
    options: [
      { id: "A", text: "Cash expense" },
      { id: "B", text: "Non-cash expense" },
      { id: "C", text: "Liability" },
      { id: "D", text: "Asset" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Recording depreciation reduces income but does not involve a cash outflow."
  },
  {
    id: 5,
    text: "Equipment with NBV of £25,000 is sold for £30,000. The result is:",
    options: [
      { id: "A", text: "£5,000 loss" },
      { id: "B", text: "£5,000 gain" },
      { id: "C", text: "No gain or loss" },
      { id: "D", text: "£30,000 revenue" }
    ],
    correctOptionId: "B",
    explanation: "Right. Sale Price (£30k) > NBV (£25k) = Gain of £5k."
  },
  {
    id: 6,
    text: "Intangible assets include:",
    options: [
      { id: "A", text: "Buildings and land" },
      { id: "B", text: "Inventory and supplies" },
      { id: "C", text: "Patents and software" },
      { id: "D", text: "Cash and receivables" }
    ],
    correctOptionId: "C",
    explanation: "Correct. Patents, software, and trademarks are non-physical (intangible) long-term assets."
  }
];

const GlobalPayContext = (
  <div className="text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
    <div className="bg-slate-100 p-2 font-bold text-center border-b border-slate-200">GlobalPay Asset Management</div>
    <div className="p-4 bg-white grid gap-4">
      <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-1">Asset A: Server Farm</h4>
        <ul className="text-indigo-800 space-y-1 list-disc list-inside">
          <li>Purchase Date: Jan 1, 2025</li>
          <li>Base Price: £240,000</li>
          <li>Installation: £20,000</li>
          <li>Useful Life: 8 years</li>
          <li>Salvage Value: £20,000</li>
        </ul>
      </div>
      <div className="bg-emerald-50 p-3 rounded border border-emerald-100">
        <h4 className="font-bold text-emerald-900 mb-1">Asset B: Software License</h4>
        <ul className="text-emerald-800 space-y-1 list-disc list-inside">
          <li>Purchase Date: July 1, 2025</li>
          <li>Cost: £90,000</li>
          <li>Useful Life: 3 years</li>
          <li>Salvage Value: £0</li>
        </ul>
      </div>
    </div>
  </div>
);

export const MODULE_4_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "What is the total amount that should be capitalized for the Server Farm?",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [260000, "260000"],
    hints: [
      "Capitalize all costs necessary to get the asset ready for use.",
      "Installation costs are required.",
      "Total = Purchase price + Installation"
    ],
    solution: "Total capitalizable cost = £240,000 (purchase) + £20,000 (installation) = £260,000. Installation is capitalized because it's necessary to bring the asset to working condition."
  },
  {
    id: 2,
    text: "Calculate the annual straight-line depreciation for the Server Farm.",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [30000, "30000"],
    hints: [
      "Use the formula: (Cost − Salvage Value) ÷ Useful Life",
      "(£260,000 − £20,000) ÷ 8"
    ],
    solution: "Annual Depreciation = (£260,000 − £20,000) ÷ 8 years = £240,000 ÷ 8 = £30,000 per year."
  },
  {
    id: 3,
    text: "What is the Server Farm's Net Book Value on Dec 31, 2027 (after 3 full years)?",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [170000, "170000"],
    hints: [
      "NBV = Cost − Accumulated Depreciation",
      "Accumulated Dep. = 3 years × Annual Dep.",
      "NBV = £260,000 − (3 × £30,000)"
    ],
    solution: "Accumulated Depreciation = 3 × £30,000 = £90,000.\nNBV = £260,000 − £90,000 = £170,000."
  },
  {
    id: 4,
    text: "If the servers are sold on Jan 1, 2028 for £150,000, what is the gain or loss?",
    type: 'multi-input',
    context: GlobalPayContext,
    inputFields: [
        { key: "result", label: "Result (Gain/Loss)" },
        { key: "amount", label: "Amount", prefix: "£" }
    ],
    correctAnswers: {
        result: "Loss",
        amount: 20000
    },
    hints: [
      "Compare Sale Price to NBV.",
      "NBV on Jan 1, 2028 = £170,000 (from previous question)",
      "Sale Price (£150,000) - NBV (£170,000) = -£20,000"
    ],
    solution: "Sale Price (£150,000) < NBV (£170,000). Difference is £20,000. The asset was sold below its book value, resulting in a Loss."
  },
  {
    id: 5,
    text: "What is the monthly amortization for the Software License?",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [2500, "2500"],
    hints: [
      "Cost ÷ Useful Life (in months)",
      "3 years = 36 months",
      "£90,000 ÷ 36"
    ],
    solution: "Monthly Amortization = £90,000 ÷ 36 months = £2,500."
  },
  {
    id: 6,
    text: "How much amortization expense is recorded in 2025 for the software? (July-Dec)",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [15000, "15000"],
    hints: [
      "Purchased July 1, so 6 months of use in 2025.",
      "6 × Monthly Amortization"
    ],
    solution: "2025 Amortization = 6 months × £2,500 = £15,000."
  },
  {
    id: 7,
    text: "What is the software's NBV on Dec 31, 2026?",
    type: 'number',
    context: GlobalPayContext,
    inputPrefix: "£",
    correctAnswer: [45000, "45000"],
    hints: [
      "Total months from July 2025 to Dec 2026 = 18 months (6 in 2025 + 12 in 2026).",
      "NBV = Cost - (18 × Monthly Amt)"
    ],
    solution: "Total amortization = 18 × £2,500 = £45,000.\nNBV = £90,000 − £45,000 = £45,000."
  },
  {
    id: 8,
    text: "Classify each expenditure as 'Capitalize' or 'Expense'.",
    type: 'multi-input',
    context: GlobalPayContext,
    inputFields: [
      { key: "security", label: "New security system (£35k)" },
      { key: "license", label: "Annual license renewal (£5k)" },
      { key: "upgrade", label: "Server capacity double (£80k)" },
      { key: "maintenance", label: "Routine maintenance (£2k)" },
      { key: "training", label: "Staff training (£8k)" }
    ],
    correctAnswers: {
      security: "Capitalize",
      license: "Expense",
      upgrade: "Capitalize",
      maintenance: "Expense",
      training: "Expense"
    },
    hints: [
      "Does it create/improve a long-term asset?",
      "Maintenance and training are expenses.",
      "New systems and major upgrades are capitalized."
    ],
    solution: "Capitalize: Security system (new asset), Upgrade (improvement).\nExpense: License renewal (annual), Maintenance (upkeep), Training (no asset created)."
  }
];