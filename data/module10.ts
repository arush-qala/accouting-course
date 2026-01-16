import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_10_CONCEPTS: LearningConcept[] = [
  {
    id: "m10-c1",
    title: "1. Key B2B Metrics",
    content: `**TPV (Total Payment Volume):** Total value processed.
**Take Rate:** Revenue / TPV.
**Net Revenue:** Revenue after partner payouts.
**NRR (Net Revenue Retention):** Revenue from existing customers vs prior year. >100% is good.
**CAC & LTV:** Cost to Acquire vs Lifetime Value.`,
    takeaway: "Metrics assess health beyond just the P&L."
  },
  {
    id: "m10-c2",
    title: "2. Reading Fintech Financials",
    content: `**Income Statement:** Check Gross vs Net revenue.
**Balance Sheet:** Look for "Customer Funds Held" (Asset) and matching "Customer Funds Owed" (Liability). These are not company cash.
**Cash Flow:** Operating Cash Flow is key.`,
    takeaway: "Segregated customer funds inflate the balance sheet but don't belong to the company."
  },
  {
    id: "m10-c3",
    title: "3. Data Definitions",
    content: `**Watch out for:**
• "Revenue": Is it Gross or Net?
• "Churn": Customer count churn vs Revenue churn?
• "Margin": Gross, Operating, or Net?
• "Cash": Operating cash vs Customer funds?`,
    takeaway: "Always verify definitions. Assumptions cause errors."
  }
];

// Comprehensive 20-question quiz
export const MODULE_10_QUIZ: QuizQuestion[] = [
  { id: 1, text: "Assets = ?", options: [{id:"A",text:"Liabilities + Equity"},{id:"B",text:"Revenue - Exp"},{id:"C",text:"Cash"}], correctOptionId:"A", explanation:"Fundamental equation." },
  { id: 2, text: "Which statement shows profitability?", options: [{id:"A",text:"Balance Sheet"},{id:"B",text:"Income Statement"},{id:"C",text:"Cash Flow"}], correctOptionId:"B", explanation:"P&L shows profit." },
  { id: 3, text: "Revenue is recognized when:", options: [{id:"A",text:"Cash received"},{id:"B",text:"Obligation satisfied"},{id:"C",text:"Contract signed"}], correctOptionId:"B", explanation:"Accrual principle." },
  { id: 4, text: "Depreciation is:", options: [{id:"A",text:"Cash expense"},{id:"B",text:"Non-cash expense"},{id:"C",text:"Liability"}], correctOptionId:"B", explanation:"Allocation of cost." },
  { id: 5, text: "Operating Cash Flow comes from:", options: [{id:"A",text:"Core business"},{id:"B",text:"Selling assets"},{id:"C",text:"Loans"}], correctOptionId:"A", explanation:"Core operations." },
  { id: 6, text: "A provision requires:", options: [{id:"A",text:"Any possibility"},{id:"B",text:"Probable outflow + Measurable"},{id:"C",text:"Remote chance"}], correctOptionId:"B", explanation:"Criteria for recognition." },
  { id: 7, text: "Break-even point is where:", options: [{id:"A",text:"Profit is max"},{id:"B",text:"Revenue = Total Costs"},{id:"C",text:"Cash is positive"}], correctOptionId:"B", explanation:"Zero profit point." },
  { id: 8, text: "Whale curve relates to:", options: [{id:"A",text:"Customer Profitability"},{id:"B",text:"Stock price"},{id:"C",text:"Cash flow"}], correctOptionId:"A", explanation:"Profit distribution." },
  { id: 9, text: "Favorable variance means:", options: [{id:"A",text:"Higher profit"},{id:"B",text:"Lower profit"},{id:"C",text:"Higher cost"}], correctOptionId:"A", explanation:"Better for bottom line." },
  { id: 10, text: "TPV stands for:", options: [{id:"A",text:"Total Profit Value"},{id:"B",text:"Total Payment Volume"},{id:"C",text:"Total Price Variable"}], correctOptionId:"B", explanation:"Payment volume." },
  { id: 11, text: "Deferred Revenue is a:", options: [{id:"A",text:"Asset"},{id:"B",text:"Liability"},{id:"C",text:"Equity"}], correctOptionId:"B", explanation:"Owed service." },
  { id: 12, text: "Current Ratio measures:", options: [{id:"A",text:"Profitability"},{id:"B",text:"Liquidity"},{id:"C",text:"Leverage"}], correctOptionId:"B", explanation:"Short term solvency." },
  { id: 13, text: "Principal vs Agent affects:", options: [{id:"A",text:"Net Income"},{id:"B",text:"Gross Revenue recognition"},{id:"C",text:"Cash flow"}], correctOptionId:"B", explanation:"Top line presentation." },
  { id: 14, text: "CAPEX appears in:", options: [{id:"A",text:"Operating CF"},{id:"B",text:"Investing CF"},{id:"C",text:"Financing CF"}], correctOptionId:"B", explanation:"Investing activity." },
  { id: 15, text: "Free Cash Flow =", options: [{id:"A",text:"OCF - CAPEX"},{id:"B",text:"Net Income + Dep"},{id:"C",text:"Revenue - Exp"}], correctOptionId:"A", explanation:"FCF formula." },
  { id: 16, text: "Contribution Margin =", options: [{id:"A",text:"Rev - Fixed"},{id:"B",text:"Rev - Variable"},{id:"C",text:"Price - Cost"}], correctOptionId:"B", explanation:"CM formula." },
  { id: 17, text: "ABC Costing helps with:", options: [{id:"A",text:"Taxes"},{id:"B",text:"Accurate cost allocation"},{id:"C",text:"Payroll"}], correctOptionId:"B", explanation:"Activity based." },
  { id: 18, text: "Unfavorable Price Variance means:", options: [{id:"A",text:"Sold for less than budget"},{id:"B",text:"Sold less units"},{id:"C",text:"Cost was higher"}], correctOptionId:"A", explanation:"Price difference." },
  { id: 19, text: "NRR > 100% means:", options: [{id:"A",text:"Lost customers"},{id:"B",text:"Existing customers grew"},{id:"C",text:"High churn"}], correctOptionId:"B", explanation:"Net retention." },
  { id: 20, text: "Customer Funds Held are:", options: [{id:"A",text:"Company Cash"},{id:"B",text:"Revenue"},{id:"C",text:"A liability/asset pair"}], correctOptionId:"C", explanation:"Not company money." }
];

const CaseStudyContext = React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4" },
    React.createElement("h4", { className: "font-bold mb-2" }, "GlobalPay Ltd — Due Diligence"),
    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
        React.createElement("div", null,
            React.createElement("strong", null, "Year 2 Stats:"),
            React.createElement("ul", { className: "list-disc list-inside" },
                React.createElement("li", null, "TPV: £650M"),
                React.createElement("li", null, "Net Rev: £4.9M"),
                React.createElement("li", null, "Op Expenses: £2.5M"),
                React.createElement("li", null, "Net Income: £0.2M")
            )
        ),
        React.createElement("div", null,
            React.createElement("strong", null, "Cash Flow:"),
            React.createElement("ul", { className: "list-disc list-inside" },
                React.createElement("li", null, "Op Cash Flow: £0.3M"),
                React.createElement("li", null, "CAPEX: (£0.7M)"),
                React.createElement("li", null, "Receivables: Up 80%")
            )
        )
    )
);

export const MODULE_10_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  { id: 1, text: "Calculate Take Rate (Net Rev / TPV).", type: 'number', context: CaseStudyContext, inputSuffix: "%", correctAnswer: [0.75, "0.75"], hints: ["4.9 / 650"], solution: "0.75%." },
  { id: 2, text: "Calculate Free Cash Flow.", type: 'number', context: CaseStudyContext, inputPrefix: "£", inputSuffix: "M", correctAnswer: [-0.4, "-0.4"], hints: ["OCF - CAPEX"], solution: "0.3 - 0.7 = -£0.4M." },
  { id: 3, text: "Is FCF positive or negative?", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"Positive"},{id:"B",text:"Negative"}], correctAnswer: "B", hints: [], solution: "Negative." },
  { id: 4, text: "Receivables grew 80% vs Revenue 22%. Concern?", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"Yes, collection issue"},{id:"B",text:"No, normal"}], correctAnswer: "A", hints: [], solution: "Yes, cash is stuck in AR." },
  { id: 5, text: "Calculate Operating Margin (Op Income approx £0.3M / Rev £4.9M).", type: 'number', context: CaseStudyContext, inputSuffix: "%", correctAnswer: [6.1, "6.1"], hints: ["0.3 / 4.9"], solution: "6.1%." },
  { id: 6, text: "Customer Funds Held belongs to:", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"GlobalPay"},{id:"B",text:"Customers"}], correctAnswer: "B", hints: [], solution: "Customers." },
  { id: 7, text: "If Fixed Costs are £1.5M, CM Ratio 43%, Break-even Revenue?", type: 'number', context: CaseStudyContext, inputPrefix: "£", inputSuffix: "M", correctAnswer: [3.49, 3.48, 3.5], hints: ["1.5 / 0.43"], solution: "£3.49M." },
  { id: 8, text: "Deferred Revenue increase means:", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"Lost sales"},{id:"B",text:"More upfront payments"}], correctAnswer: "B", hints: [], solution: "More cash received upfront." },
  { id: 9, text: "Is OCF (£0.3M) higher than Net Income (£0.2M)?", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"Yes"},{id:"B",text:"No"}], correctAnswer: "A", hints: [], solution: "Yes." },
  { id: 10, text: "Key Risk?", type: 'multiple-choice', context: CaseStudyContext, options: [{id:"A",text:"Low volume"},{id:"B",text:"Negative FCF / Efficiency"}], correctAnswer: "B", hints: [], solution: "Negative FCF suggests burning cash despite growth." }
];