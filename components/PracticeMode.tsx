import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import { Question } from '../types';

// Placeholder questions for template purposes
const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Company A purchases $5,000 of inventory on credit. How does this affect the Accounting Equation?",
    hints: [
      "Identify the two accounts involved: Inventory and Accounts Payable.",
      "Inventory is an Asset. Accounts Payable is a Liability."
    ],
    correctAnswer: "Assets increase, Liabilities increase",
    solution: "The transaction increases Assets (Inventory) by $5,000 and increases Liabilities (Accounts Payable) by $5,000. The equation remains balanced."
  },
  {
    id: 2,
    text: "Which financial statement reports a company's financial position at a specific point in time?",
    hints: [
      "Think about 'position' vs 'performance'.",
      "This statement lists Assets, Liabilities, and Equity."
    ],
    correctAnswer: "Balance Sheet",
    solution: "The Balance Sheet (Statement of Financial Position) shows what a company owns and owes at a specific date."
  },
  {
    id: 3,
    text: "Debit always means:",
    hints: [
      "It doesn't necessarily mean increase or decrease.",
      "Think about the physical side of a T-account."
    ],
    correctAnswer: "Left side",
    solution: "Debit simply means the left side of a T-account. Whether it increases or decreases an account depends on the account type."
  }
];

interface PracticeModeProps {
  moduleId: string;
  onComplete: () => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ moduleId, onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [hintsRevealed, setHintsRevealed] = useState<Record<number, number>>({});
  const [solutionsRevealed, setSolutionsRevealed] = useState<Record<number, boolean>>({});

  const currentQuestion = MOCK_QUESTIONS[currentQIndex];
  const totalQuestions = MOCK_QUESTIONS.length;

  const handleRevealHint = () => {
    const currentHints = hintsRevealed[currentQuestion.id] || 0;
    if (currentHints < currentQuestion.hints.length) {
      setHintsRevealed({ ...hintsRevealed, [currentQuestion.id]: currentHints + 1 });
    }
  };

  const handleCheckAnswer = () => {
    const userAnswer = userAnswers[currentQuestion.id] || "";
    // Simple string matching for demo purposes
    const isCorrect = userAnswer.toLowerCase().includes(currentQuestion.correctAnswer.toLowerCase().split(' ')[0].toLowerCase());
    
    setFeedback({ ...feedback, [currentQuestion.id]: isCorrect ? 'correct' : 'incorrect' });
  };

  const handleShowSolution = () => {
    setSolutionsRevealed({ ...solutionsRevealed, [currentQuestion.id]: true });
  };

  const allAttempted = MOCK_QUESTIONS.every(q => feedback[q.id] !== undefined);
  const correctCount = Object.values(feedback).filter(f => f === 'correct').length;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      {/* Exercise Navigation Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <button 
          onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
          disabled={currentQIndex === 0}
          className="p-2 hover:bg-slate-50 rounded-lg disabled:opacity-30 transition-colors text-slate-600"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-slate-600 mb-1">
            Question {currentQIndex + 1} of {totalQuestions}
          </span>
          <div className="flex space-x-1">
            {MOCK_QUESTIONS.map((q, idx) => (
              <div 
                key={q.id}
                className={`w-2 h-2 rounded-full ${
                  idx === currentQIndex ? 'bg-indigo-600' : 
                  feedback[q.id] === 'correct' ? 'bg-emerald-400' :
                  feedback[q.id] === 'incorrect' ? 'bg-red-400' :
                  'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={() => setCurrentQIndex(Math.min(totalQuestions - 1, currentQIndex + 1))}
          disabled={currentQIndex === totalQuestions - 1}
          className="p-2 hover:bg-slate-50 rounded-lg disabled:opacity-30 transition-colors text-slate-600"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-slate-800 mb-2">Scenario</h3>
          <p className="text-slate-600 leading-relaxed">{currentQuestion.text}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Your Answer</label>
          <input 
            type="text" 
            placeholder="Type your answer here..."
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              feedback[currentQuestion.id] === 'correct' ? 'border-emerald-500 focus:ring-emerald-200 bg-emerald-50' :
              feedback[currentQuestion.id] === 'incorrect' ? 'border-red-500 focus:ring-red-200 bg-red-50' :
              'border-slate-200 focus:ring-indigo-200 focus:border-indigo-500'
            }`}
            value={userAnswers[currentQuestion.id] || ''}
            onChange={(e) => setUserAnswers({...userAnswers, [currentQuestion.id]: e.target.value})}
          />
          {feedback[currentQuestion.id] === 'correct' && (
            <p className="text-emerald-600 text-sm mt-2 flex items-center"><CheckCircle2 size={16} className="mr-1"/> Correct!</p>
          )}
          {feedback[currentQuestion.id] === 'incorrect' && (
            <p className="text-red-500 text-sm mt-2">Incorrect, try again or view a hint.</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
          <button 
            onClick={handleRevealHint}
            className="flex items-center px-4 py-2 text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-lg text-sm font-medium transition-colors"
          >
            <Lightbulb size={16} className="mr-2" />
            Hint {hintsRevealed[currentQuestion.id] ? `(${hintsRevealed[currentQuestion.id]})` : ''}
          </button>
          
          <button 
             onClick={handleShowSolution}
             className="flex items-center px-4 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors"
          >
            <BookOpen size={16} className="mr-2" />
            {solutionsRevealed[currentQuestion.id] ? 'Hide Solution' : 'Show Solution'}
          </button>

          <div className="flex-grow"></div>

          <button 
            onClick={handleCheckAnswer}
            disabled={!userAnswers[currentQuestion.id]}
            className="flex items-center px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium shadow-sm transition-colors"
          >
            Check Answer
          </button>
        </div>

        {/* Hints Display */}
        {hintsRevealed[currentQuestion.id] ? (
            <div className="mt-6 space-y-2">
                {currentQuestion.hints.slice(0, hintsRevealed[currentQuestion.id]).map((hint, i) => (
                    <div key={i} className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800 animate-in fade-in slide-in-from-top-1">
                        <strong>Hint {i+1}:</strong> {hint}
                    </div>
                ))}
            </div>
        ) : null}

        {/* Solution Display */}
        {solutionsRevealed[currentQuestion.id] && (
            <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-700 animate-in fade-in">
                <h4 className="font-semibold mb-1">Solution Explanation:</h4>
                <p className="text-sm">{currentQuestion.solution}</p>
            </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
            <span className="text-sm text-slate-500">Performance</span>
            <div className="font-semibold text-slate-800">{correctCount} of {totalQuestions} Correct</div>
        </div>
        <button 
            disabled={!allAttempted}
            onClick={onComplete}
            className="px-6 py-2 bg-emerald-500 text-white hover:bg-emerald-600 disabled:bg-slate-300 rounded-lg font-medium shadow-sm transition-colors"
        >
            Complete Exercise
        </button>
      </div>
    </div>
  );
};