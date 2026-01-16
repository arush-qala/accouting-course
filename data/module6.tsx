import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_6_CONCEPTS: LearningConcept[] = [
  {
    id: "m6-c1",
    title: "1. Types of Liabilities",
    content: `Liabilities are obligations the company must settle.

**Current Liabilities (Due < 12 months):**
• Accounts Payable
• Accrued Expenses
• Deferred Revenue
• Current portion of debt

**Non-Current Liabilities (Due > 12 months):**
• Long-term loans
• Bonds payable
• Lease obligations

**Balance Sheet Impact:**
A company with high current liabilities but low current assets may face a liquidity crisis.`,
    takeaway: "Classification matters for liquidity analysis — can we pay what's due soon?"
  },
  {
    id: "m6-c2",
    title: "2. Common Liability Accounts",
    content: `**Accounts Payable:** Invoice received from supplier, not yet paid.
**Accrued Expenses:** Expense incurred (e.g., wages earned) but no invoice or payment yet.
**Deferred Revenue:** Cash received, service not yet delivered.
**Notes Payable:** Formal written promises to pay (loans).

**Distinction:** Accounts Payable usually comes from an invoice; Accruals are estimates of obligations incurred.`,
    takeaway: "Understanding what each liability represents helps interpret a company's obligations."
  },
  {
    id: "m6-c3",
    title: "3. Provisions",
    content: `A **provision** is a liability of uncertain timing or amount. Recognize ONLY if all 3 met:
1. **Present obligation** (from past event)
2. **Probable outflow** (>50% likely)
3. **Reliably measurable**

**Example:** A lawsuit where legal counsel says you will likely lose £200k.
Treatment: Record Liability (Provision) and Expense immediately.`,
    takeaway: "Provisions ensure financial statements reflect known risks, even if exact details are uncertain."
  },
  {
    id: "m6-c4",
    title: "4. Contingent Liabilities",
    content: `Potential obligations depending on future events.

• **Probable** (>50%) + Measurable = Recognize Provision
• **Possible** (20-50%) = Disclose in Notes only
• **Remote** (<20%) = No action

**Examples:** Pending lawsuits, warranties, environmental cleanups.`,
    takeaway: "Not all potential liabilities appear on the Balance Sheet — read the Notes!"
  }
];

export const MODULE_6_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "A provision should be recognized when:",
    options: [
      { id: "A", text: "A lawsuit is filed, regardless of likelihood" },
      { id: "B", text: "Present obligation, probable outflow, measurable amount" },
      { id: "C", text: "Any potential liability exists" },
      { id: "D", text: "Management wants to be conservative" }
    ],
    correctOptionId: "B",
    explanation: "Correct. All three criteria must be met to record a provision on the balance sheet."
  },
  {
    id: 2,
    text: "A contingent liability with 40% probability should be:",
    options: [
      { id: "A", text: "Recognized as a provision" },
      { id: "B", text: "Disclosed in notes only" },
      { id: "C", text: "Ignored completely" },
      { id: "D", text: "Recognized at 40% of the amount" }
    ],
    correctOptionId: "B",
    explanation: "Correct. 40% is 'possible' but not 'probable', so it is disclosed but not recognized."
  },
  {
    id: 3,
    text: "Accounts Payable represents:",
    options: [
      { id: "A", text: "Money customers owe us" },
      { id: "B", text: "Money we owe suppliers for goods/services received" },
      { id: "C", text: "Estimated future payments" },
      { id: "D", text: "Cash held for others" }
    ],
    correctOptionId: "B",
    explanation: "Correct. It represents bills received that haven't been paid yet."
  },
  {
    id: 4,
    text: "Which is a Current Liability?",
    options: [
      { id: "A", text: "10-year bond payable" },
      { id: "B", text: "Accounts Payable" },
      { id: "C", text: "Pension obligations" },
      { id: "D", text: "Long-term lease" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Accounts payable is due in the short term (<12 months)."
  },
  {
    id: 5,
    text: "A company offers 2-year warranties. When should the provision be recognized?",
    options: [
      { id: "A", text: "When warranty claims are received" },
      { id: "B", text: "When products are sold" },
      { id: "C", text: "When warranty period expires" },
      { id: "D", text: "At year-end only" }
    ],
    correctOptionId: "B",
    explanation: "Correct. The matching principle requires expenses (warranty costs) to be matched to the revenue they helped generate (the sale)."
  }
];

const SecurePayContext = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">SecurePay Solutions — Liability Analysis</h4>
    <p>The finance team is reviewing potential liabilities. Determine the correct accounting treatment for each scenario.</p>
  </div>
);

export const MODULE_6_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "Scenario 1: SecurePay is sued. Legal estimates 70% chance of losing £200,000. Treatment?",
    type: 'multiple-choice',
    context: SecurePayContext,
    options: [
      { id: "A", text: "Recognize £200,000 provision" },
      { id: "B", text: "Disclose in notes only" },
      { id: "C", text: "No action required" }
    ],
    correctAnswer: "A",
    hints: [
      "Check criteria: Present obligation? Yes. Probable (>50%)? Yes (70%). Measurable? Yes.",
      "If all criteria met, recognize provision."
    ],
    solution: "Recognize a £200,000 provision. Criteria met: Present obligation, Probable outflow (70% > 50%), Measurable amount."
  },
  {
    id: 2,
    text: "Scenario 2: Warranty Provision. 10,000 units sold. 3% failure rate. £150 repair cost. Calculate provision.",
    type: 'number',
    context: SecurePayContext,
    inputPrefix: "£",
    correctAnswer: [45000, "45000"],
    hints: [
      "Expected claims = 10,000 * 3%",
      "Total cost = Claims * £150"
    ],
    solution: "10,000 units * 3% = 300 expected repairs. 300 * £150 = £45,000. Recognize full amount when products are sold."
  },
  {
    id: 3,
    text: "Scenario 3: Regulatory investigation. 30% chance of £500,000 fine. Treatment?",
    type: 'multiple-choice',
    context: SecurePayContext,
    options: [
      { id: "A", text: "Recognize £500,000" },
      { id: "B", text: "Recognize £150,000 (30%)" },
      { id: "C", text: "Disclose in notes only" },
      { id: "D", text: "No action" }
    ],
    correctAnswer: "C",
    hints: [
      "30% is 'Possible' but not 'Probable' (>50%).",
      "Contingent liabilities are disclosed, not recognized."
    ],
    solution: "Disclose in notes only. At 30%, it is not 'probable', so no liability is recorded on the balance sheet."
  },
  {
    id: 4,
    text: "Scenario 4: Lease requires restoring office in 5 years. Est cost £80,000. Treatment?",
    type: 'multiple-choice',
    context: SecurePayContext,
    options: [
      { id: "A", text: "Recognize £80,000 provision now" },
      { id: "B", text: "Recognize £16,000/year" },
      { id: "C", text: "Recognize when lease ends" }
    ],
    correctAnswer: "A",
    hints: [
      "Does signing the lease create the obligation?",
      "Yes, the obligation exists from Day 1."
    ],
    solution: "Recognize provision now. The obligation arose when the lease was signed (past event), even though payment is in future."
  },
  {
    id: 5,
    text: "Scenario 5: Customer hints at lawsuit. 15% chance of filing. Treatment?",
    type: 'multiple-choice',
    context: SecurePayContext,
    options: [
      { id: "A", text: "Recognize provision" },
      { id: "B", text: "Disclose in notes" },
      { id: "C", text: "No action required" }
    ],
    correctAnswer: "C",
    hints: [
      "15% is 'Remote' (<20%).",
      "Remote risks require no disclosure."
    ],
    solution: "No action required. The risk is 'remote', so neither recognition nor disclosure is needed."
  }
];