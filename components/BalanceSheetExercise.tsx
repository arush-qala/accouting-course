import React, { useState } from 'react';
import { Lightbulb, BookOpen, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { VisualBalanceSheet } from './VisualBalanceSheet';
import { EXERCISE_TRANSACTIONS, INITIAL_BALANCE_SHEET } from '../data/module1';
import { BalanceSheetState } from '../types';

interface BalanceSheetExerciseProps {
  onComplete: () => void;
}

export const BalanceSheetExercise: React.FC<BalanceSheetExerciseProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheetState>(INITIAL_BALANCE_SHEET);
  const [prevBalanceSheet, setPrevBalanceSheet] = useState<BalanceSheetState | null>(null);
  
  // State for current inputs
  const [inputs, setInputs] = useState<Record<string, string>>({});
  
  // State for UI feedback
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(false);

  // If we went past the last transaction
  if (completed) {
      // Comparison View or Summary
      const initialTotal = 95000;
      const currentTotal = balanceSheet.cash + balanceSheet.accountsReceivable + balanceSheet.inventory + balanceSheet.prepaidExpenses + balanceSheet.equipment;
      const change = currentTotal - initialTotal;

      return (
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Exercise Completed!</h2>
                  <p className="text-slate-600 mb-6">You've successfully recorded all transactions and kept the Balance Sheet balanced.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-left max-w-2xl mx-auto">
                     <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 uppercase">Starting Assets</div>
                        <div className="font-bold">£{initialTotal.toLocaleString()}</div>
                     </div>
                     <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 uppercase">Ending Assets</div>
                        <div className="font-bold text-indigo-600">£{currentTotal.toLocaleString()}</div>
                     </div>
                     <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 uppercase">Total Change</div>
                        <div className="font-bold text-emerald-600">+£{change.toLocaleString()}</div>
                     </div>
                     <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 uppercase">Retained Earnings</div>
                        <div className="font-bold text-indigo-600">+£{(balanceSheet.retainedEarnings - INITIAL_BALANCE_SHEET.retainedEarnings).toLocaleString()}</div>
                     </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-6 max-w-lg mx-auto bg-blue-50 p-3 rounded text-blue-800">
                    <strong>Key Insight:</strong> Cash increased £16,000 despite recording only £10,000 revenue. Why? We received £24,000 upfront (deferred revenue) for future service!
                  </p>

                  <button disabled className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium cursor-default">
                      Module Exercise Complete
                  </button>
              </div>
              <VisualBalanceSheet data={balanceSheet} previousData={INITIAL_BALANCE_SHEET} />
          </div>
      )
  }

  const transaction = EXERCISE_TRANSACTIONS[currentStep];

  const handleCheck = () => {
    let allCorrect = true;
    const requiredChanges = transaction.correctChanges as Record<string, number>;

    // Check required inputs
    for (const [key, change] of Object.entries(requiredChanges)) {
        const inputVal = parseInt(inputs[key] || "0");
        if (inputVal !== change) {
            allCorrect = false;
        }
    }

    // Check that no other inputs were set (should be 0 or empty)
    for (const [key, val] of Object.entries(inputs)) {
        if (!requiredChanges[key] && parseInt((val as string) || "0") !== 0) {
            allCorrect = false;
        }
    }

    if (allCorrect) {
        setFeedback('correct');
        // Update balance sheet
        const newSheet = { ...balanceSheet };
        for (const [key, change] of Object.entries(requiredChanges)) {
            (newSheet as any)[key] += change;
        }
        setPrevBalanceSheet(balanceSheet);
        setBalanceSheet(newSheet);
    } else {
        setFeedback('incorrect');
    }
  };

  const handleNext = () => {
      if (currentStep < EXERCISE_TRANSACTIONS.length - 1) {
          setCurrentStep(currentStep + 1);
          setInputs({});
          setFeedback('idle');
          setHintsRevealed(0);
          setShowSolution(false);
          // Don't reset prevBalanceSheet here so we keep the "last change" diff in view until new check
      } else {
          setCompleted(true);
          onComplete();
      }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Left Col: Scenario & Interaction */}
      <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
        
        {/* Navigation */}
        <div className="flex items-center justify-between text-sm text-slate-500">
            <span>Transaction {currentStep + 1} of {EXERCISE_TRANSACTIONS.length}</span>
            <span className="font-semibold text-slate-700">{transaction.date}</span>
        </div>

        {/* Question Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-2">Scenario</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">{transaction.scenario}</p>

            <h4 className="font-bold text-slate-800 text-sm mb-3">Record Impact:</h4>
            <div className="space-y-3 mb-6">
                {transaction.inputs.map((field) => (
                    <div key={field.key} className="flex items-center justify-between">
                        <label className="text-sm text-slate-600 w-1/2">{field.label}</label>
                        <div className="relative w-1/2">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">£</span>
                            <input 
                                type="number" 
                                placeholder="0"
                                disabled={feedback === 'correct'}
                                className={`w-full pl-7 pr-3 py-2 text-right border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${
                                    feedback === 'correct' ? 'bg-slate-50 border-slate-200 text-slate-500' : 'border-slate-300 focus:ring-indigo-200 focus:border-indigo-500'
                                }`}
                                value={inputs[field.key] || ''}
                                onChange={(e) => setInputs({...inputs, [field.key]: e.target.value})}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Actions */}
            {feedback !== 'correct' && (
                <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={() => setHintsRevealed(Math.min(hintsRevealed + 1, transaction.hints.length))}
                        className="flex items-center px-3 py-2 text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg text-xs font-medium transition-colors"
                    >
                        <Lightbulb size={14} className="mr-1.5" />
                        Hint {hintsRevealed > 0 ? `(${hintsRevealed})` : ''}
                    </button>
                    <div className="flex-grow"></div>
                    <button 
                        onClick={handleCheck}
                        className="px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium shadow-sm transition-colors"
                    >
                        Check Answer
                    </button>
                </div>
            )}
            
            {/* Feedback Messages */}
            {feedback === 'incorrect' && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg animate-in fade-in">
                    Incorrect. Try again or use a hint. Remember to use negative numbers for decreases.
                </div>
            )}

            {feedback === 'correct' && (
                <div className="mt-6 animate-in fade-in slide-in-from-bottom-2">
                    <div className="p-3 bg-emerald-50 text-emerald-800 text-sm rounded-lg flex items-start mb-4">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 shrink-0" />
                        <div>
                            <span className="font-bold block mb-1">Correct!</span>
                            {transaction.explanation}
                        </div>
                    </div>
                    <button 
                        onClick={handleNext}
                        className="w-full flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium shadow-md transition-all hover:translate-y-[-1px]"
                    >
                        {currentStep < EXERCISE_TRANSACTIONS.length - 1 ? 'Next Transaction' : 'Complete Exercise'} <ArrowRight size={16} className="ml-2" />
                    </button>
                </div>
            )}
        </div>

        {/* Hints Display */}
        {hintsRevealed > 0 && feedback !== 'correct' && (
            <div className="space-y-2">
                {transaction.hints.slice(0, hintsRevealed).map((hint, i) => (
                    <div key={i} className="bg-amber-50/80 p-3 rounded-lg border border-amber-100 text-sm text-amber-800 animate-in fade-in">
                        <strong>Hint {i+1}:</strong> {hint}
                    </div>
                ))}
            </div>
        )}

      </div>

      {/* Right Col: Visual Balance Sheet */}
      <div className="lg:col-span-7 order-1 lg:order-2 sticky top-4">
         <VisualBalanceSheet data={balanceSheet} previousData={prevBalanceSheet} />
      </div>
    </div>
  );
};