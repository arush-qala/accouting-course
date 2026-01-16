import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, BookOpen, ArrowRight, ArrowLeft, XCircle } from 'lucide-react';
import { PracticeQuestion } from '../types';

interface PracticeModeProps {
  questions: PracticeQuestion[];
  onComplete: () => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ questions, onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  
  // Stores answers: 
  // For single input: { [qId]: "value" }
  // For multi input: { [qId]: { [fieldKey]: "value" } }
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  
  const [feedback, setFeedback] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [hintsRevealed, setHintsRevealed] = useState<Record<number, number>>({});
  const [solutionsRevealed, setSolutionsRevealed] = useState<Record<number, boolean>>({});

  const currentQuestion = questions[currentQIndex];
  const totalQuestions = questions.length;

  const handleRevealHint = () => {
    const currentHints = hintsRevealed[currentQuestion.id] || 0;
    if (currentHints < currentQuestion.hints.length) {
      setHintsRevealed({ ...hintsRevealed, [currentQuestion.id]: currentHints + 1 });
    }
  };

  const handleCheckAnswer = () => {
    const answer = userAnswers[currentQuestion.id];
    let isCorrect = false;

    if (currentQuestion.type === 'multi-input') {
        const correctMap = currentQuestion.correctAnswers || {};
        const userMap = answer || {};
        let allFieldsCorrect = true;
        
        for (const key of Object.keys(correctMap)) {
            const userVal = String(userMap[key] || "").trim();
            const correctVal = correctMap[key];

            if (typeof correctVal === 'number') {
                // Remove currency symbols, commas, spaces, but keep minus signs and decimal points
                const cleanVal = userVal.replace(/[^0-9.-]/g, '');
                const val = parseFloat(cleanVal);
                if (isNaN(val) || Math.abs(val - correctVal) > 0.01) {
                    allFieldsCorrect = false;
                    break;
                }
            } else {
                // String comparison (case insensitive)
                if (userVal.toLowerCase() !== String(correctVal).toLowerCase()) {
                    allFieldsCorrect = false;
                    break;
                }
            }
        }
        isCorrect = allFieldsCorrect;
    } else if (currentQuestion.type === 'multiple-choice') {
        isCorrect = String(answer) === String(currentQuestion.correctAnswer);
    } else {
        // Text or Number single input
        const validAnswers = Array.isArray(currentQuestion.correctAnswer) 
             ? currentQuestion.correctAnswer 
             : [currentQuestion.correctAnswer];
        
        const cleanUserAnswer = String(answer || "").trim().toLowerCase().replace(/,/g, ''); // remove commas
        
        isCorrect = validAnswers.some(va => {
             const cleanVa = String(va).trim().toLowerCase().replace(/,/g, '');
             if (currentQuestion.type === 'number') {
                 // Numeric comparison with slight tolerance
                 return Math.abs(parseFloat(cleanUserAnswer) - parseFloat(cleanVa)) < 0.01;
             }
             return cleanUserAnswer === cleanVa;
        });
    }

    setFeedback({ ...feedback, [currentQuestion.id]: isCorrect ? 'correct' : 'incorrect' });
  };

  const handleShowSolution = () => {
    setSolutionsRevealed({ ...solutionsRevealed, [currentQuestion.id]: true });
  };

  const setSingleAnswer = (val: string) => {
      setUserAnswers({ ...userAnswers, [currentQuestion.id]: val });
      if (feedback[currentQuestion.id]) {
          setFeedback({ ...feedback, [currentQuestion.id]: null });
      }
  };

  const setMultiAnswer = (key: string, val: string) => {
      const current = userAnswers[currentQuestion.id] || {};
      setUserAnswers({ ...userAnswers, [currentQuestion.id]: { ...current, [key]: val } });
      if (feedback[currentQuestion.id]) {
        setFeedback({ ...feedback, [currentQuestion.id]: null });
      }
  };

  const allAttempted = questions.every(q => feedback[q.id] === 'correct');
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
            {questions.map((q, idx) => (
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
        
        {/* Optional Context (Scenario/Table) */}
        {currentQuestion.context && (
            <div className="mb-6 animate-in fade-in">
                {currentQuestion.context}
            </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-medium text-slate-800 mb-2">Question</h3>
          <p className="text-slate-600 leading-relaxed mb-6">{currentQuestion.text}</p>
          
          {/* Input Rendering */}
          {currentQuestion.type === 'multiple-choice' && (
              <div className="space-y-2">
                  {currentQuestion.options?.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setSingleAnswer(opt.id)}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                            userAnswers[currentQuestion.id] === opt.id 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-800' 
                            : 'border-slate-100 hover:border-indigo-200'
                        }`}
                      >
                          <span className="font-bold mr-2">{opt.id}.</span> {opt.text}
                      </button>
                  ))}
              </div>
          )}

          {(currentQuestion.type === 'text' || currentQuestion.type === 'number') && (
              <div className="relative">
                  {currentQuestion.inputPrefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{currentQuestion.inputPrefix}</span>}
                  <input 
                    type={currentQuestion.type === 'number' ? 'number' : 'text'}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                        currentQuestion.inputPrefix ? 'pl-8' : ''
                    } ${
                        feedback[currentQuestion.id] === 'correct' ? 'border-emerald-500 bg-emerald-50 text-emerald-900' :
                        feedback[currentQuestion.id] === 'incorrect' ? 'border-red-500 bg-red-50' :
                        'border-slate-200 focus:ring-indigo-200 focus:border-indigo-500'
                    }`}
                    placeholder="Enter answer..."
                    value={userAnswers[currentQuestion.id] || ''}
                    onChange={(e) => setSingleAnswer(e.target.value)}
                  />
                  {currentQuestion.inputSuffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{currentQuestion.inputSuffix}</span>}
              </div>
          )}

          {currentQuestion.type === 'multi-input' && (
              <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {currentQuestion.inputFields?.map(field => (
                      <div key={field.key} className="flex items-center justify-between gap-4">
                          <label className="text-sm font-medium text-slate-700 w-1/3 text-right">{field.label}</label>
                          <div className="relative flex-1">
                              {field.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">{field.prefix}</span>}
                              <input 
                                type="text"
                                placeholder={field.label.includes('Gain') ? "Loss/Gain" : "0"}
                                className={`w-full p-2 border rounded text-right text-sm focus:outline-none focus:ring-2 ${
                                    field.prefix ? 'pl-6' : ''
                                } ${
                                    feedback[currentQuestion.id] === 'correct' ? 'border-emerald-500 text-emerald-700' : 'border-slate-300 focus:ring-indigo-200'
                                }`}
                                value={(userAnswers[currentQuestion.id] || {})[field.key] || ''}
                                onChange={(e) => setMultiAnswer(field.key, e.target.value)}
                              />
                          </div>
                      </div>
                  ))}
              </div>
          )}

          {/* Feedback Msg */}
          {feedback[currentQuestion.id] === 'correct' && (
            <p className="text-emerald-600 text-sm mt-3 flex items-center font-medium animate-in fade-in slide-in-from-top-1">
                <CheckCircle2 size={18} className="mr-1.5"/> Correct!
            </p>
          )}
          {feedback[currentQuestion.id] === 'incorrect' && (
            <p className="text-red-500 text-sm mt-3 flex items-center font-medium animate-in fade-in slide-in-from-top-1">
                <XCircle size={18} className="mr-1.5"/> Incorrect, try again.
            </p>
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
            disabled={feedback[currentQuestion.id] === 'correct'}
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
                <p className="text-sm whitespace-pre-line">{currentQuestion.solution}</p>
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