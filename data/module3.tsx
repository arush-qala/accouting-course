import React from 'react';
import { QuizQuestion, LearningConcept, PracticeQuestion } from '../types';

export const MODULE_3_CONCEPTS: LearningConcept[] = [
  {
    id: "m3-c1",
    title: "1. The 5-Step Revenue Recognition Model",
    content: `Under IFRS 15 / ASC 606, revenue recognition follows five steps:

1. **Identify the contract**: "Is there an agreement?"
2. **Identify performance obligations**: "What did we promise?"
3. **Determine transaction price**: "How much will we receive?"
4. **Allocate price**: "How much value does each deliverable represent?"
5. **Recognize when satisfied**: "When do we actually deliver each item?"`,
    takeaway: "Revenue is recognized when you DELIVER, not necessarily when you invoice or receive cash."
  },
  {
    id: "m3-c2",
    title: "2. Point-in-Time vs Over-Time Recognition",
    content: `**Point-in-time**: Customer gets benefit at a specific moment (e.g., selling a product). Revenue recognized all at once.

**Over-time**: Customer receives benefit continuously (e.g., SaaS subscription). Revenue spread over service period.

Most B2B software and payments businesses recognize revenue *over time* because they provide ongoing services.`,
    takeaway: "Test: Does the customer simultaneously receive and consume the benefit? If yes, it's Over-Time."
  },
  {
    id: "m3-c3",
    title: "3. Deferred Revenue in Practice",
    content: `When a customer pays *before* you deliver, you record **Deferred Revenue** (a Liability). You cannot record Revenue yet.

**Example:**
Day 1 (Receive £12k for year): Cash (+£12k), Deferred Revenue (+£12k).
Month 1 (Deliver service): Deferred Revenue (-£1k), Revenue (+£1k).

This liability represents the service you still owe the customer.`,
    takeaway: "Watch Deferred Revenue on B2B clients' balance sheets — it represents future revenue already contracted!"
  },
  {
    id: "m3-c4",
    title: "4. Gross vs Net Revenue (Principal vs Agent)",
    content: `**Principal (Gross)**: You control the service/good, bear risk, set price. Record full value as revenue.

**Agent (Net)**: You facilitate for another party (e.g., supplier), don't control funds. Record *only your fee* as revenue.

**Payment Processor Example**:
- Transaction: £10M. Fee: 0.5% (£50k).
- If Agent (typical): Revenue = £50k.
- If Principal (rare): Revenue = £10M (and Cost = £9.95M).`,
    takeaway: "Payment processors typically record NET revenue because they are facilitating transactions, not taking ownership of funds."
  }
];

export const MODULE_3_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Under the 5-step model, revenue is recognized when:",
    options: [
      { id: "A", text: "Cash is received" },
      { id: "B", text: "Invoice is sent" },
      { id: "C", text: "Performance obligation is satisfied" },
      { id: "D", text: "Contract is signed" }
    ],
    correctOptionId: "C",
    explanation: "Correct. The core principle is recognizing revenue when control of the good/service transfers to the customer (obligation satisfied)."
  },
  {
    id: 2,
    text: "A SaaS company receives £60,000 for a 2-year subscription. Year 1 revenue is:",
    options: [
      { id: "A", text: "£60,000" },
      { id: "B", text: "£30,000" },
      { id: "C", text: "£0" },
      { id: "D", text: "£15,000" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Revenue is recognized over time. £60k / 2 years = £30k per year."
  },
  {
    id: 3,
    text: "Deferred Revenue is classified as:",
    options: [
      { id: "A", text: "Asset" },
      { id: "B", text: "Liability" },
      { id: "C", text: "Revenue" },
      { id: "D", text: "Expense" }
    ],
    correctOptionId: "B",
    explanation: "Right. It is a liability because it represents an obligation to provide service in the future."
  },
  {
    id: 4,
    text: "\"Over-time\" revenue recognition is appropriate for:",
    options: [
      { id: "A", text: "Selling a laptop" },
      { id: "B", text: "Monthly consulting retainer" },
      { id: "C", text: "One-time installation" },
      { id: "D", text: "Selling office furniture" }
    ],
    correctOptionId: "B",
    explanation: "Correct. A retainer provides continuous benefit to the customer over the period."
  },
  {
    id: 5,
    text: "A payment processor handles £1M in transactions and keeps 1% as fee. Acting as Agent, revenue is:",
    options: [
      { id: "A", text: "£1,000,000" },
      { id: "B", text: "£100,000" },
      { id: "C", text: "£10,000" },
      { id: "D", text: "£1,000" }
    ],
    correctOptionId: "C",
    explanation: "Correct. £1,000,000 * 1% = £10,000. As an Agent, they only recognize the fee."
  },
  {
    id: 6,
    text: "Contract has two deliverables: Product (standalone £800) and Training (standalone £200). Contract price is £900. Training revenue is:",
    options: [
      { id: "A", text: "£200" },
      { id: "B", text: "£180" },
      { id: "C", text: "£225" },
      { id: "D", text: "£100" }
    ],
    correctOptionId: "B",
    explanation: "Correct. Training is 20% of total standalone value (£200/£1000). So it gets 20% of contract price: £900 * 0.20 = £180."
  },
  {
    id: 7,
    text: "If a customer can cancel anytime for full refund, when is revenue recognized?",
    options: [
      { id: "A", text: "When payment received" },
      { id: "B", text: "When contract signed" },
      { id: "C", text: "When cancellation period expires" },
      { id: "D", text: "At year end" }
    ],
    correctOptionId: "C",
    explanation: "Correct. If there's a full refund right, the contract isn't fully enforceable and revenue isn't secure until that right expires."
  }
];

// --- Practice Contexts ---

const ContractA = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">Contract A: Simple Annual Subscription</h4>
    <ul className="list-disc list-inside space-y-1">
        <li><strong>Customer:</strong> GlobalRetail Inc</li>
        <li><strong>Contract:</strong> 12-month platform access</li>
        <li><strong>Price:</strong> £48,000 (Paid upfront Jan 1)</li>
        <li><strong>Service Period:</strong> Jan 1 – Dec 31</li>
    </ul>
  </div>
);

const ContractB = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">Contract B: Multi-Element Deal</h4>
    <ul className="list-disc list-inside space-y-1">
        <li><strong>Customer:</strong> MegaCorp Ltd</li>
        <li><strong>Price:</strong> £54,000 (Paid upfront)</li>
        <li><strong>Deliverables (Standalone Prices):</strong>
            <ul className="pl-5 list-circle mt-1">
                <li>12-mth Platform: £36,000 (Jan 1 - Dec 31)</li>
                <li>Implementation: £12,000 (Done Jan 15)</li>
                <li>Custom Reports: £12,000 (Delivered Jan 30)</li>
            </ul>
        </li>
    </ul>
  </div>
);

const ContractC = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">Contract C: Principal vs Agent</h4>
    <ul className="list-disc list-inside space-y-1">
        <li>PayStream processes payments for SmallBiz Co</li>
        <li>January Volume: £500,000</li>
        <li>PayStream Fee: 0.8% of volume</li>
        <li>PayStream does NOT control the funds (pass-through)</li>
    </ul>
  </div>
);

const MoneyBack = (
  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 mb-4">
    <h4 className="font-bold mb-2">Policy: 30-Day Money-Back Guarantee</h4>
    <p>A SaaS company offers a "30-day money-back guarantee" on all new subscriptions.</p>
  </div>
);

export const MODULE_3_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    text: "How much revenue should PayStream recognize in January for Contract A?",
    type: 'number',
    context: ContractA,
    inputPrefix: "£",
    correctAnswer: [4000, "4000"],
    hints: [
      "This is a 12-month subscription with over-time recognition.",
      "Total price ÷ number of months = monthly revenue",
      "£48,000 ÷ 12 months = £4,000 per month"
    ],
    solution: "Revenue is recognized evenly over the service period: £48,000 ÷ 12 = £4,000 per month. In January, recognize £4,000 of revenue."
  },
  {
    id: 2,
    text: "What is the Deferred Revenue balance for Contract A on March 31 (after 3 months)?",
    type: 'number',
    context: ContractA,
    inputPrefix: "£",
    correctAnswer: [36000, "36000"],
    hints: [
      "Start with total payment, subtract revenue recognized so far.",
      "Revenue recognized by March 31 = 3 months × £4,000",
      "£48,000 − (3 × £4,000) = remaining deferred revenue"
    ],
    solution: "After 3 months: Revenue recognized = 3 × £4,000 = £12,000. Deferred Revenue remaining = £48,000 − £12,000 = £36,000. This liability represents the 9 months of service still owed."
  },
  {
    id: 3,
    text: "How should the £54,000 be allocated to each element? (Based on relative standalone prices)",
    type: 'multi-input',
    context: ContractB,
    inputFields: [
      { key: "platform", label: "Platform (60%)", prefix: "£" },
      { key: "impl", label: "Implementation (20%)", prefix: "£" },
      { key: "reports", label: "Reports (20%)", prefix: "£" }
    ],
    correctAnswers: {
      platform: 32400,
      impl: 10800,
      reports: 10800
    },
    hints: [
      "Total standalone value = £36,000 + £12,000 + £12,000 = £60,000",
      "Each element gets its proportional share: (Standalone ÷ Total Standalone) × Contract Price",
      "Platform: 60% × £54,000. Implementation & Reports: 20% × £54,000 each."
    ],
    solution: "Allocate based on relative standalone values:\n• Platform: (36/60) × 54k = £32,400\n• Implementation: (12/60) × 54k = £10,800\n• Reports: (12/60) × 54k = £10,800"
  },
  {
    id: 4,
    text: "How much total revenue is recognized in January for Contract B?",
    type: 'number',
    context: ContractB,
    inputPrefix: "£",
    correctAnswer: [24300, "24300"],
    hints: [
      "Consider each element's recognition timing.",
      "Implementation (Jan 15) & Reports (Jan 30) are point-in-time. Platform is over-time.",
      "Implementation: £10,800. Reports: £10,800. Platform: £32,400 ÷ 12 = £2,700."
    ],
    solution: "Break down by element:\n• Implementation (delivered Jan 15): £10,800\n• Reports (delivered Jan 30): £10,800\n• Platform (1 month of 12): £2,700\nTotal = £24,300"
  },
  {
    id: 5,
    text: "Is PayStream acting as Principal or Agent in Contract C?",
    type: 'multiple-choice',
    context: ContractC,
    options: [
      { id: "A", text: "Principal — they handle the transactions" },
      { id: "B", text: "Agent — they facilitate without controlling funds" },
      { id: "C", text: "Both — depends on the transaction" },
      { id: "D", text: "Neither" }
    ],
    correctAnswer: "B",
    hints: [
      "Who controls the funds being transferred?",
      "No control + no inventory risk + no price-setting = Agent"
    ],
    solution: "PayStream is an Agent because they: (1) Don't control the funds, (2) Don't bear risk, (3) Don't set prices. They simply earn a fee."
  },
  {
    id: 6,
    text: "What revenue does PayStream recognize for Contract C?",
    type: 'number',
    context: ContractC,
    inputPrefix: "£",
    correctAnswer: [4000, "4000"],
    hints: [
      "As an Agent, record only the fee, not the gross transaction volume.",
      "Fee = 0.8% of £500,000"
    ],
    solution: "As Agent, PayStream records only their fee: £500,000 × 0.8% = £4,000. NOT the transaction volume. This is Net Revenue presentation."
  },
  {
    id: 7,
    text: "When should revenue recognition begin for the Money-Back Guarantee policy?",
    type: 'multiple-choice',
    context: MoneyBack,
    options: [
      { id: "A", text: "When the customer signs up" },
      { id: "B", text: "When the first payment is received" },
      { id: "C", text: "After the 30-day guarantee period expires" },
      { id: "D", text: "Spread over 30 days during the trial" }
    ],
    correctAnswer: "C",
    hints: [
      "If they can get a full refund, is the revenue truly 'earned'?",
      "Revenue recognition requires the contract to be enforceable — a full refund right means it's not yet enforceable."
    ],
    solution: "The contract isn't truly enforceable until the guarantee expires. Until then, payments should be held as a liability (Deferred Revenue)."
  }
];