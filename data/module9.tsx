import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_9_CONCEPTS: LearningConcept[] = [
  {
    id: "m9-c1",
    title: "1. Variance Analysis",
    content: `Compares Budget (Plan) vs Actual results.
    
**Variance = Actual - Budget**
• **Favorable (F):** Increases profit (Higher Revenue, Lower Cost).
• **Unfavorable (U):** Decreases profit (Lower Revenue, Higher Cost).

Key: Variances tell you *where* to look, not *why* it happened.`,
    takeaway: "Always label variances as Favorable or Unfavorable."
  },
  {
    id: "m9-c2",
    title: "2. Types of Variances",
    content: `**Revenue Breakdown:**
• **Price Variance:** Impact of selling at different price.
• **Volume Variance:** Impact of selling different quantity.

**Cost Breakdown:**
• **Spending Variance:** Paying different price for inputs.
• **Efficiency Variance:** Using more/less inputs per unit.`,
    takeaway: "Total variance can hide details — e.g., selling more units (Good) at a lower price (Bad)."
  },
  {
    id: "m9-c3",
    title: "3. Calculations",
    content: `**Price Variance:** (Actual Price - Budget Price) * Actual Volume
**Volume Variance:** (Actual Volume - Budget Volume) * Budget Price

Example:
Budget: 100 units @ £10. Actual: 110 units @ £9.
Price Var: (£9-£10)*110 = -£110 (U)
Volume Var: (110-100)*£10 = +£100 (F)
Total: -£10 (U).`,
    takeaway: "Volume variance is valued at Budget Price to isolate the volume effect."
  },
  {
    id: "m9-c4",
    title: "4. Interpretation",
    content: `Interpret variances in context.
    
• Unfavorable Price + Favorable Volume: Did we discount to move product?
• Unfavorable Cost + Favorable Efficiency: Did we buy better (more expensive) materials that reduced waste?

Look for trade-offs.`,
    takeaway: "One variance often causes another."
  }
];

export const MODULE_9_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "A variance is 'favorable' when it:",
    options: [
      { id: "A", text: "Matches the budget exactly" },
      { id: "B", text: "Increases profit compared to budget" },
      { id: "C", text: "Is related to revenue" },
      { id: "D", text: "Is larger than unfavorable variances" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Favorable means better for the bottom line (Higher income or lower expense)."
  },
  {
    id: 2,
    text: "Revenue is higher than budget. Volume is down but Price is up. This indicates:",
    options: [
      { id: "A", text: "Unfavorable price variance" },
      { id: "B", text: "Favorable price variance offsetting unfavorable volume" },
      { id: "C", text: "Unfavorable volume variance only" },
      { id: "D", text: "No variance" }
    ],
    correctOptionId: "B",
    explanation: "Correct. The price increase helped revenue more than the volume drop hurt it."
  },
  {
    id: 3,
    text: "Variable cost per unit is higher than budget. This creates:",
    options: [
      { id: "A", text: "Favorable cost variance" },
      { id: "B", text: "Unfavorable cost variance" },
      { id: "C", text: "No variance" },
      { id: "D", text: "Favorable volume variance" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Paying more per unit than planned is unfavorable for expenses."
  },
  {
    id: 4,
    text: "A company exceeded volume budget but missed profit budget. Likely cause:",
    options: [
      { id: "A", text: "Fixed costs were too low" },
      { id: "B", text: "Prices or margins were lower than planned" },
      { id: "C", text: "Volume was too high" },
      { id: "D", text: "Budget was wrong" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Selling more units usually increases profit, unless margins were compressed (price cuts or cost hikes)."
  },
  {
    id: 5,
    text: "Variance analysis is primarily used for:",
    options: [
      { id: "A", text: "Setting next year's budget" },
      { id: "B", text: "Understanding performance differences" },
      { id: "C", text: "Calculating taxes" },
      { id: "D", text: "Hiring decisions" }
    ],
    correctOptionId: "B",
    explanation: "Correct. It explains why actuals differed from the plan."
  }
];

const PayFlowContext = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">PayFlow Analytics — Q4 Variance</h4>
    <div className="grid grid-cols-3 gap-2">
        <div className="font-bold">Metric</div><div className="font-bold">Budget</div><div className="font-bold">Actual</div>
        <div>Transactions</div><div>100,000</div><div>112,000</div>
        <div>Rev / Trans</div><div>£2.00</div><div>£1.85</div>
        <div>Var Cost / Trans</div><div>£0.80</div><div>£0.85</div>
        <div>Fixed Costs</div><div>£80,000</div><div>£82,000</div>
    </div>
  </div>
);

export const MODULE_9_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "Calculate Revenue Variance (Actual - Budget).",
    type: 'number',
    context: PayFlowContext,
    inputPrefix: "£",
    correctAnswer: [7200, "7200"],
    hints: ["Budget: 100k*2.00", "Actual: 112k*1.85"],
    solution: "Budget £200,000. Actual £207,200. Variance +£7,200 (Favorable)."
  },
  {
    id: 2,
    text: "Calculate Price Variance.",
    type: 'number',
    context: PayFlowContext,
    inputPrefix: "£",
    correctAnswer: [-16800, "-16800"],
    hints: ["(Actual Price - Budget Price) * Actual Volume"],
    solution: "(1.85 - 2.00) * 112,000 = -£16,800 (Unfavorable)."
  },
  {
    id: 3,
    text: "Calculate Volume Variance.",
    type: 'number',
    context: PayFlowContext,
    inputPrefix: "£",
    correctAnswer: [24000, "24000"],
    hints: ["(Actual Vol - Budget Vol) * Budget Price"],
    solution: "(112,000 - 100,000) * 2.00 = £24,000 (Favorable)."
  },
  {
    id: 4,
    text: "Calculate Total Profit Variance.",
    type: 'number',
    context: PayFlowContext,
    inputPrefix: "£",
    correctAnswer: [-10000, "-10000"],
    hints: ["Calculate Budget Profit vs Actual Profit", "Profit = Revenue - Var Cost - Fixed Cost"],
    solution: "Budget Profit: £40,000. Actual Profit: £30,000. Variance: -£10,000 (Unfavorable)."
  },
  {
    id: 5,
    text: "Despite 12% higher volume, profit fell. What is the main driver?",
    type: 'multiple-choice',
    context: PayFlowContext,
    options: [
        { id: "A", text: "Fixed costs" },
        { id: "B", text: "Price reduction & Cost increase" },
        { id: "C", text: "Volume didn't grow enough" }
    ],
    correctAnswer: "B",
    hints: ["Price variance was -16.8k, Cost variance was -5.6k"],
    solution: "Price reductions (-16.8k) and variable cost increases (-5.6k) wiped out the volume gains."
  }
];