import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_7_CONCEPTS: LearningConcept[] = [
  {
    id: "m7-c1",
    title: "1. Fixed vs Variable Costs",
    content: `**Fixed Costs:** Constant regardless of volume (Rent, Salaries, Depreciation).
**Variable Costs:** Change proportionally with volume (Raw materials, Transaction fees).
**Semi-Variable:** Mixed (Utilities base + usage).

Understanding this helps predict profit changes as sales grow.`,
    takeaway: "Fixed costs create 'leverage' — once covered, additional sales are very profitable."
  },
  {
    id: "m7-c2",
    title: "2. Contribution Margin",
    content: `**Contribution Margin (CM) = Revenue − Variable Costs**

It shows how much each sale contributes to covering fixed costs and profit.

**CM Ratio = CM ÷ Selling Price**
If CM Ratio is 60%, then 60p of every £1 covers fixed costs/profit.`,
    takeaway: "Higher contribution margin = more profit potential per sale."
  },
  {
    id: "m7-c3",
    title: "3. Break-Even Analysis",
    content: `**Break-Even Point:** Sales level where Revenue = Total Costs (Profit £0).

**Formulas:**
• Break-Even Units = Fixed Costs ÷ CM per Unit
• Break-Even Revenue = Fixed Costs ÷ CM Ratio

Below this point = Loss. Above = Profit.`,
    takeaway: "Knowing your break-even point is crucial for risk management."
  },
  {
    id: "m7-c4",
    title: "4. Operating Leverage",
    content: `Measures sensitivity of profit to sales changes.

**High Leverage:** High fixed costs, low variable costs (Software). Small sales ↑ = Big profit ↑.
**Low Leverage:** Low fixed costs, high variable costs (Retail). Profit moves linearly with sales.`,
    takeaway: "High leverage = higher risk but higher reward."
  }
];

export const MODULE_7_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Office rent is typically classified as a:",
    options: [
      { id: "A", text: "Variable cost" },
      { id: "B", text: "Fixed cost" },
      { id: "C", text: "Semi-variable cost" },
      { id: "D", text: "None of the above" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Rent typically stays the same regardless of how much business you do."
  },
  {
    id: 2,
    text: "Contribution Margin Ratio for a product with price £80 and variable cost £32 is:",
    options: [
      { id: "A", text: "40%" },
      { id: "B", text: "60%" },
      { id: "C", text: "£48" },
      { id: "D", text: "£32" }
    ],
    correctOptionId: "B",
    explanation: "Correct. CM = £80 - £32 = £48. Ratio = £48 / £80 = 0.60 (60%)."
  },
  {
    id: 3,
    text: "If fixed costs are £400,000 and contribution margin is £20/unit, break-even is:",
    options: [
      { id: "A", text: "8,000 units" },
      { id: "B", text: "20,000 units" },
      { id: "C", text: "40,000 units" },
      { id: "D", text: "200,000 units" }
    ],
    correctOptionId: "B",
    explanation: "Correct. £400,000 / £20 = 20,000 units."
  },
  {
    id: 4,
    text: "High operating leverage means:",
    options: [
      { id: "A", text: "Low fixed costs" },
      { id: "B", text: "High variable costs" },
      { id: "C", text: "Profits are very sensitive to sales volume changes" },
      { id: "D", text: "Low break-even point" }
    ],
    correctOptionId: "C",
    explanation: "Correct. High fixed costs mean once you break even, most revenue flows straight to profit."
  },
  {
    id: 5,
    text: "Which would DECREASE the break-even point?",
    options: [
      { id: "A", text: "Higher fixed costs" },
      { id: "B", text: "Lower selling price" },
      { id: "C", text: "Higher variable costs" },
      { id: "D", text: "Lower fixed costs" }
    ],
    correctOptionId: "D",
    explanation: "Correct. If costs go down, you don't need to sell as much to cover them."
  }
];

const TransactProContext = React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4" },
  React.createElement("h4", { className: "font-bold mb-2" }, "TransactPro Cost Analysis"),
  React.createElement("ul", { className: "list-disc list-inside" },
    React.createElement("li", null, "Fixed Costs: £600,000/year"),
    React.createElement("li", null, "Variable Cost: £0.15/transaction"),
    React.createElement("li", null, "Price: £0.50/transaction")
  )
);

export const MODULE_7_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "What is the Contribution Margin per transaction?",
    type: 'number',
    context: TransactProContext,
    inputPrefix: "£",
    correctAnswer: [0.35, "0.35"],
    hints: ["Price - Variable Cost", "£0.50 - £0.15"],
    solution: "£0.50 - £0.15 = £0.35 per transaction."
  },
  {
    id: 2,
    text: "What is the Contribution Margin Ratio?",
    type: 'number',
    context: TransactProContext,
    inputSuffix: "%",
    correctAnswer: [70, "70"],
    hints: ["CM / Price", "0.35 / 0.50"],
    solution: "0.35 / 0.50 = 0.70 = 70%."
  },
  {
    id: 3,
    text: "Calculate break-even point in transactions.",
    type: 'number',
    context: TransactProContext,
    correctAnswer: [1714286, 1714285],
    hints: ["Fixed Costs / CM per unit", "600,000 / 0.35"],
    solution: "600,000 / 0.35 = 1,714,286 transactions."
  },
  {
    id: 4,
    text: "What is the break-even point in revenue?",
    type: 'number',
    context: TransactProContext,
    inputPrefix: "£",
    correctAnswer: [857143, 857142],
    hints: ["Fixed Costs / CM Ratio", "600,000 / 0.70"],
    solution: "600,000 / 0.70 = £857,143."
  },
  {
    id: 5,
    text: "If processing 2,000,000 transactions, what is the profit?",
    type: 'number',
    context: TransactProContext,
    inputPrefix: "£",
    correctAnswer: [100000, "100000"],
    hints: ["(Units * CM) - Fixed Costs", "(2,000,000 * 0.35) - 600,000"],
    solution: "Total CM = £700,000. Profit = £700,000 - £600,000 = £100,000."
  },
  {
    id: 6,
    text: "If fixed costs rise by £70k (to £670k), what is the new break-even units?",
    type: 'number',
    context: TransactProContext,
    correctAnswer: [1914286, 1914285],
    hints: ["New Fixed Costs / 0.35"],
    solution: "670,000 / 0.35 = 1,914,286 transactions."
  }
];