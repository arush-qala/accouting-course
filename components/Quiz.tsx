import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const question = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    setSelectedOption(id);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsAnswered(true);
    if (selectedOption === question.correctOptionId) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      setShowSummary(true);
      // Calculate final percentage
      const finalScore = Math.round(((selectedOption === question.correctOptionId ? score + 1 : score) / questions.length) * 100);
      // We pass the final score logic slightly differently due to state update batching, 
      // but simpler to just use local calc here for the prop
      const finalCount = selectedOption === question.correctOptionId ? score + 1 : score;
      const finalPercentage = Math.round((finalCount / questions.length) * 100);
      onComplete(finalPercentage);
    } else {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  if (showSummary) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center max-w-2xl mx-auto">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
          {passed ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{passed ? 'Quiz Passed!' : 'Needs Improvement'}</h2>
        <p className="text-slate-500 mb-6">You scored {percentage}% ({score}/{questions.length} correct)</p>
        
        <div className="p-4 bg-slate-50 rounded-lg mb-8 text-sm text-slate-600">
          {passed 
            ? "Great job! You've mastered the concepts of this module. You can now move on to the next module." 
            : "Review the learning material and try again to unlock the next module (70% required)."
          }
        </div>

        {!passed && (
          <button 
            onClick={() => window.location.reload()} // Simple reload to retry for now
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Retry Quiz
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6 flex items-center justify-between text-sm text-slate-500">
        <span>Question {currentIdx + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
            className="bg-indigo-600 h-full transition-all duration-300" 
            style={{ width: `${((currentIdx) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 leading-relaxed">{question.text}</h3>
        </div>
        
        <div className="p-6 space-y-3">
            {question.options.map((opt) => {
                let stateClass = "border-slate-200 hover:bg-slate-50 hover:border-indigo-300";
                if (isAnswered) {
                    if (opt.id === question.correctOptionId) stateClass = "bg-emerald-50 border-emerald-500 text-emerald-800";
                    else if (opt.id === selectedOption) stateClass = "bg-red-50 border-red-300 text-red-800 opacity-60";
                    else stateClass = "border-slate-100 opacity-50";
                } else if (selectedOption === opt.id) {
                    stateClass = "border-indigo-600 bg-indigo-50 text-indigo-800 ring-1 ring-indigo-600";
                }

                return (
                    <button
                        key={opt.id}
                        onClick={() => handleSelect(opt.id)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-start ${stateClass}`}
                    >
                        <span className="font-semibold mr-3 shrink-0">{opt.id}</span>
                        <span>{opt.text}</span>
                        {isAnswered && opt.id === question.correctOptionId && (
                            <CheckCircle2 size={20} className="ml-auto text-emerald-600" />
                        )}
                        {isAnswered && opt.id === selectedOption && opt.id !== question.correctOptionId && (
                            <XCircle size={20} className="ml-auto text-red-500" />
                        )}
                    </button>
                )
            })}
        </div>

        {/* Footer / Feedback */}
        <div className="p-6 bg-slate-50 border-t border-slate-100">
            {!isAnswered ? (
                <button 
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Submit Answer
                </button>
            ) : (
                <div className="animate-in fade-in">
                    <div className="mb-4">
                         <h4 className="font-bold text-slate-800 text-sm mb-1">Explanation:</h4>
                         <p className="text-slate-600 text-sm">{question.explanation}</p>
                    </div>
                    <button 
                        onClick={handleNext}
                        className="w-full py-3 bg-slate-800 text-white rounded-lg font-medium shadow-sm hover:bg-slate-900 transition-colors flex items-center justify-center"
                    >
                        {isLast ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};