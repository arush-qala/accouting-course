import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_8_CONCEPTS: LearningConcept[] = [
  {
    id: "m8-c1",
    title: "1. The Whale Curve",
    content: `Average profitability hides the truth. Typically:
• Top 20% of customers generate 150%+ of profits
• Bottom 20% destroy value
• Middle 60% break even

**The Whale Curve** plots cumulative profit, often showing a peak higher than the company's total reported profit (because unprofitable customers drag it down).`,
    takeaway: "Understanding which customers make or lose money enables better decisions."
  },
  {
    id: "m8-c2",
    title: "2. Cost-to-Serve",
    content: `Revenue does not equal profit. Two customers with same revenue can have vastly different costs.

**High Cost-to-Serve Drivers:**
• Custom requirements
• Small, frequent orders
• High support usage
• Manual processing

**Low Cost-to-Serve:**
• Standard products
• Electronic ordering
• Self-service`,
    takeaway: "A high-revenue customer with high cost-to-serve may be unprofitable."
  },
  {
    id: "m8-c3",
    title: "3. Activity-Based Costing (ABC)",
    content: `Traditional costing allocates overhead by volume. ABC allocates based on activities.

**Example:**
• Order Processing: £50/order
• Support: £75/call

Customer A (1 order, 0 calls): £50 cost.
Customer B (1 order, 10 calls): £800 cost.

ABC reveals the true cost of serving high-maintenance customers.`,
    takeaway: "ABC traces costs to the activities that drive them."
  },
  {
    id: "m8-c4",
    title: "4. Managing Unprofitable Customers",
    content: `Options for unprofitable customers:
1. **Transform**: Change behavior (automate ordering).
2. **Reprice**: Charge for extra services.
3. **Reduce Service**: Lower cost-to-serve.
4. **Exit**: Fire the customer if no other path exists.`,
    takeaway: "Don't just fire them — try to fix the profitability equation first."
  }
];

export const MODULE_8_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "The \"whale curve\" shows that:",
    options: [
      { id: "A", text: "All customers are equally profitable" },
      { id: "B", text: "Top customers generate more than 100% of total profits" },
      { id: "C", text: "Larger customers are always more profitable" },
      { id: "D", text: "Customer profitability can't be measured" }
    ],
    correctOptionId: "B",
    explanation: "Correct. The most profitable customers cross 100%, and the curve drops back down as unprofitable customers are added."
  },
  {
    id: 2,
    text: "Activity-Based Costing allocates costs based on:",
    options: [
      { id: "A", text: "Revenue size only" },
      { id: "B", text: "Activities that drive costs" },
      { id: "C", text: "Number of employees" },
      { id: "D", text: "Industry benchmarks" }
    ],
    correctOptionId: "B",
    explanation: "Correct. ABC traces costs to specific activities like calls, orders, or shipments."
  },
  {
    id: 3,
    text: "A customer has high revenue but high cost-to-serve. You should:",
    options: [
      { id: "A", text: "Immediately terminate the relationship" },
      { id: "B", text: "Analyze root causes and consider transformation" },
      { id: "C", text: "Ignore profitability — revenue is what matters" },
      { id: "D", text: "Raise prices without discussion" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Often these customers can be made profitable by changing behavior or pricing."
  },
  {
    id: 4,
    text: "\"Cost-to-serve\" includes:",
    options: [
      { id: "A", text: "Only product costs" },
      { id: "B", text: "Only shipping costs" },
      { id: "C", text: "All costs associated with serving a customer" },
      { id: "D", text: "Only visible costs" }
    ],
    correctOptionId: "C",
    explanation: "Correct. It includes support, logistics, customization, admin, etc."
  },
  {
    id: 5,
    text: "Which customer behavior typically increases cost-to-serve?",
    options: [
      { id: "A", text: "Large, predictable orders" },
      { id: "B", text: "Electronic ordering" },
      { id: "C", text: "Frequent custom requests" },
      { id: "D", text: "Standard payment terms" }
    ],
    correctOptionId: "C",
    explanation: "Correct. Customization requires manual intervention and specific resources."
  }
];

const rows = [
  { c: "Alpha", r: "£500k", pc: "£200k", calls: 50, rep: 12 },
  { c: "Beta", r: "£300k", pc: "£150k", calls: 120, rep: 24 },
  { c: "Gamma", r: "£800k", pc: "£400k", calls: 20, rep: 4 },
  { c: "Delta", r: "£150k", pc: "£60k", calls: 80, rep: 36 },
  { c: "Epsilon", r: "£250k", pc: "£100k", calls: 30, rep: 8 },
];

const FastTransferContext = React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4" },
  React.createElement("h4", { className: "font-bold mb-2" }, "FastTransfer Ltd — Customer Analysis"),
  React.createElement("div", { className: "overflow-x-auto" },
    React.createElement("table", { className: "w-full text-left text-xs" },
      React.createElement("thead", null,
        React.createElement("tr", { className: "border-b border-indigo-200" },
          React.createElement("th", { className: "pb-1" }, "Customer"),
          React.createElement("th", null, "Revenue"),
          React.createElement("th", null, "Prod. Cost"),
          React.createElement("th", null, "Calls"),
          React.createElement("th", null, "Reports")
        )
      ),
      React.createElement("tbody", null,
        rows.map((row, i) => 
          React.createElement("tr", { key: i },
            React.createElement("td", null, row.c),
            React.createElement("td", null, row.r),
            React.createElement("td", null, row.pc),
            React.createElement("td", null, row.calls),
            React.createElement("td", null, row.rep)
          )
        )
      )
    )
  ),
  React.createElement("div", { className: "mt-2 text-xs" },
    React.createElement("strong", null, "Rates:"), " Service Call: £200 | Custom Report: £500"
  )
);

export const MODULE_8_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "Calculate total cost-to-serve for each (Prod Cost + Service + Reports).",
    type: 'multi-input',
    context: FastTransferContext,
    inputFields: [
      { key: "alpha", label: "Alpha", prefix: "£" },
      { key: "beta", label: "Beta", prefix: "£" },
      { key: "gamma", label: "Gamma", prefix: "£" },
      { key: "delta", label: "Delta", prefix: "£" },
      { key: "epsilon", label: "Epsilon", prefix: "£" }
    ],
    correctAnswers: { alpha: 216000, beta: 186000, gamma: 406000, delta: 94000, epsilon: 110000 },
    hints: ["Service = Calls * 200", "Reports = Reports * 500", "Add Product Cost"],
    solution: "Alpha: 200k + (50*200) + (12*500) = 216k. Beta: 150k + (120*200) + (24*500) = 186k. etc."
  },
  {
    id: 2,
    text: "Calculate profit for each customer.",
    type: 'multi-input',
    context: FastTransferContext,
    inputFields: [
      { key: "alpha", label: "Alpha", prefix: "£" },
      { key: "beta", label: "Beta", prefix: "£" },
      { key: "gamma", label: "Gamma", prefix: "£" },
      { key: "delta", label: "Delta", prefix: "£" },
      { key: "epsilon", label: "Epsilon", prefix: "£" }
    ],
    correctAnswers: { alpha: 284000, beta: 114000, gamma: 394000, delta: 56000, epsilon: 140000 },
    hints: ["Revenue - Total Cost"],
    solution: "Revenue - Cost from Q1. e.g., Alpha: 500k - 216k = 284k."
  },
  {
    id: 3,
    text: "Rank customers by profitability (1 = Most Profitable).",
    type: 'multi-input',
    context: FastTransferContext,
    inputFields: [
        { key: "r1", label: "Rank 1 (Highest)" },
        { key: "r2", label: "Rank 2" },
        { key: "r3", label: "Rank 3" },
        { key: "r4", label: "Rank 4" },
        { key: "r5", label: "Rank 5 (Lowest)" }
    ],
    correctAnswers: { r1: "Gamma", r2: "Alpha", r3: "Epsilon", r4: "Beta", r5: "Delta" },
    hints: ["Compare profits calculated in Q2."],
    solution: "1. Gamma (£394k), 2. Alpha (£284k), 3. Epsilon (£140k), 4. Beta (£114k), 5. Delta (£56k)."
  },
  {
    id: 4,
    text: "Calculate Beta Inc's Profit Margin.",
    type: 'number',
    context: FastTransferContext,
    inputSuffix: "%",
    correctAnswer: [38, "38"],
    hints: ["Profit / Revenue", "114k / 300k"],
    solution: "114,000 / 300,000 = 0.38 = 38%."
  },
  {
    id: 5,
    text: "Which customer is the best candidate for 'Transformation' discussions?",
    type: 'multiple-choice',
    context: FastTransferContext,
    options: [
        { id: "A", text: "Gamma Ltd" },
        { id: "B", text: "Beta Inc" },
        { id: "C", text: "Delta Co" }
    ],
    correctAnswer: "B",
    hints: ["Look for high revenue but low margin and high activity."],
    solution: "Beta Inc. They have substantial revenue (£300k) but low margin (38%) due to excessive service calls and reports. Fixing this behavior offers high upside."
  }
];