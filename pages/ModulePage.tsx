import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, BookOpen, PenTool, CheckSquare, CheckCircle2 } from 'lucide-react';
import { PracticeMode } from '../components/PracticeMode';
import { BalanceSheetExercise } from '../components/BalanceSheetExercise';
import { BreakEvenCalculator } from '../components/BreakEvenCalculator';
import { Quiz } from '../components/Quiz';
import { AppProgress, LearningConcept, PracticeQuestion, QuizQuestion } from '../types';
import { MODULE_1_CONCEPTS, MODULE_1_QUIZ } from '../data/module1';
import { MODULE_2_CONCEPTS, MODULE_2_PRACTICE_QUESTIONS, MODULE_2_QUIZ } from '../data/module2';
import { MODULE_3_CONCEPTS, MODULE_3_PRACTICE_QUESTIONS, MODULE_3_QUIZ } from '../data/module3';
import { MODULE_4_CONCEPTS, MODULE_4_PRACTICE_QUESTIONS, MODULE_4_QUIZ } from '../data/module4';
import { MODULE_5_CONCEPTS, MODULE_5_PRACTICE_QUESTIONS, MODULE_5_QUIZ } from '../data/module5';
import { MODULE_6_CONCEPTS, MODULE_6_PRACTICE_QUESTIONS, MODULE_6_QUIZ } from '../data/module6';
import { MODULE_7_CONCEPTS, MODULE_7_PRACTICE_QUESTIONS, MODULE_7_QUIZ } from '../data/module7';
import { MODULE_8_CONCEPTS, MODULE_8_PRACTICE_QUESTIONS, MODULE_8_QUIZ } from '../data/module8';
import { MODULE_9_CONCEPTS, MODULE_9_PRACTICE_QUESTIONS, MODULE_9_QUIZ } from '../data/module9';
import { MODULE_10_CONCEPTS, MODULE_10_PRACTICE_QUESTIONS, MODULE_10_QUIZ } from '../data/module10';

interface ModulePageProps {
  progress: AppProgress;
  onUpdateProgress: (moduleId: string, updates: Partial<any>) => void;
}

const MODULE_TITLES = [
  "Accounting Basics", "Financial Statements", "Revenue Recognition",
  "Assets & Depreciation", "Cash Flow Statements", "Liabilities & Provisions",
  "Cost Behavior", "Customer Profitability", "Performance Measurement", "B2B Finance Practice"
];

const MODULE_ESTIMATES = [
  "25 mins", "25 mins", "25 mins", "20 mins", "25 mins", "20 mins", "20 mins", "25 mins", "25 mins", "30 mins"
];

// Content Map
const MODULE_CONTENT: Record<number, {
    concepts: LearningConcept[];
    quiz: QuizQuestion[];
    practice?: PracticeQuestion[];
    customPractice?: boolean;
    hasCalculator?: boolean;
}> = {
    1: { concepts: MODULE_1_CONCEPTS, quiz: MODULE_1_QUIZ, customPractice: true },
    2: { concepts: MODULE_2_CONCEPTS, quiz: MODULE_2_QUIZ, practice: MODULE_2_PRACTICE_QUESTIONS },
    3: { concepts: MODULE_3_CONCEPTS, quiz: MODULE_3_QUIZ, practice: MODULE_3_PRACTICE_QUESTIONS },
    4: { concepts: MODULE_4_CONCEPTS, quiz: MODULE_4_QUIZ, practice: MODULE_4_PRACTICE_QUESTIONS },
    5: { concepts: MODULE_5_CONCEPTS, quiz: MODULE_5_QUIZ, practice: MODULE_5_PRACTICE_QUESTIONS },
    6: { concepts: MODULE_6_CONCEPTS, quiz: MODULE_6_QUIZ, practice: MODULE_6_PRACTICE_QUESTIONS },
    7: { concepts: MODULE_7_CONCEPTS, quiz: MODULE_7_QUIZ, practice: MODULE_7_PRACTICE_QUESTIONS, hasCalculator: true },
    8: { concepts: MODULE_8_CONCEPTS, quiz: MODULE_8_QUIZ, practice: MODULE_8_PRACTICE_QUESTIONS },
    9: { concepts: MODULE_9_CONCEPTS, quiz: MODULE_9_QUIZ, practice: MODULE_9_PRACTICE_QUESTIONS },
    10: { concepts: MODULE_10_CONCEPTS, quiz: MODULE_10_QUIZ, practice: MODULE_10_PRACTICE_QUESTIONS }
};

export const ModulePage: React.FC<ModulePageProps> = ({ progress, onUpdateProgress }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'quiz'>('learn');
  
  const moduleIdStr = id || "1";
  const moduleId = parseInt(moduleIdStr);
  const moduleTitle = MODULE_TITLES[moduleId - 1] || "Module";
  const prevId = moduleId > 1 ? moduleId - 1 : null;
  const nextId = moduleId < 10 ? moduleId + 1 : null;
  
  const moduleData = MODULE_CONTENT[moduleId];
  const currentProgress = progress[moduleIdStr] || { conceptsRead: [], exerciseCompleted: false, quizScore: null, completed: false };

  // Logic to prevent accessing locked modules
  const isLocked = moduleId > 1 && !progress[(moduleId - 1).toString()]?.completed;
  if (isLocked) {
     return (
         <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Module Locked</h2>
            <p className="text-slate-500 mb-4">Please complete the previous module to unlock this content.</p>
            <button onClick={() => navigate('/dashboard')} className="text-indigo-600 font-medium hover:underline">Return to Dashboard</button>
         </div>
     )
  }

  const handleConceptRead = (conceptId: string, isRead: boolean) => {
    let newReadList = [...currentProgress.conceptsRead];
    if (isRead && !newReadList.includes(conceptId)) {
      newReadList.push(conceptId);
    } else if (!isRead) {
      newReadList = newReadList.filter(id => id !== conceptId);
    }
    
    onUpdateProgress(moduleIdStr, { conceptsRead: newReadList });
    checkCompletion(newReadList, currentProgress.exerciseCompleted, currentProgress.quizScore);
  };

  const handleExerciseComplete = () => {
    onUpdateProgress(moduleIdStr, { exerciseCompleted: true });
    checkCompletion(currentProgress.conceptsRead, true, currentProgress.quizScore);
  };

  const handleQuizComplete = (score: number) => {
    onUpdateProgress(moduleIdStr, { quizScore: score });
    // For Module 10 (Final Assessment), require 80% instead of 70%
    if (moduleId === 10 && score >= 80) {
        onUpdateProgress(moduleIdStr, { completed: true });
    } else {
        checkCompletion(currentProgress.conceptsRead, currentProgress.exerciseCompleted, score);
    }
  };

  const checkCompletion = (read: string[], exercise: boolean, quiz: number | null) => {
    if (!moduleData) return;
    const conceptsDone = read.length >= moduleData.concepts.length;
    // Module 10 requires 80%, others 70%
    const passingScore = moduleId === 10 ? 80 : 70;
    const quizPassed = quiz !== null && quiz >= passingScore;

    if (conceptsDone && exercise && quizPassed) {
       onUpdateProgress(moduleIdStr, { completed: true });
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
          <span className="cursor-pointer hover:text-indigo-600" onClick={() => navigate('/dashboard')}>Dashboard</span>
          <ChevronRight size={14} />
          <span>Module {moduleId}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">{moduleId}. {moduleTitle}</h1>
            </div>
            <div className="flex items-center space-x-3">
                 <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{MODULE_ESTIMATES[moduleId-1] || "20 mins"}</span>
                 {currentProgress.completed && (
                     <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <CheckCircle2 size={14} className="mr-1" /> Completed
                     </span>
                 )}
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl mb-8">
        {[
            { id: 'learn', label: 'Learn', icon: BookOpen },
            { id: 'practice', label: 'Practice', icon: PenTool },
            { id: 'quiz', label: 'Quiz', icon: CheckSquare }
        ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                    activeTab === tab.id 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
            >
                <tab.icon size={16} className="mr-2" />
                {tab.label}
            </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {activeTab === 'learn' && (
          moduleData ? (
            <div className="space-y-6">
               
               {moduleData.concepts.map((concept) => (
                   <div key={concept.id} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-800">{concept.title}</h3>
                            <label className="flex items-center space-x-2 cursor-pointer select-none">
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                                    checked={currentProgress.conceptsRead.includes(concept.id)}
                                    onChange={(e) => handleConceptRead(concept.id, e.target.checked)}
                                />
                                <span className="text-sm font-medium text-slate-500">Mark as Read</span>
                            </label>
                        </div>
                        
                        <div className="prose prose-slate max-w-none text-slate-600 mb-6 whitespace-pre-line">
                            {concept.content}
                            {concept.id === 'm1-c2' && (
                                <div className="my-6 p-4 bg-slate-800 text-white font-mono text-sm rounded-lg overflow-x-auto shadow-inner">
{`┌─────────────────────────────────────────────────────────────┐
│                       BALANCE SHEET                         │
│                      As of [Date]                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│       ASSETS                  LIABILITIES                   │
│  ─────────────────────   ───────────────────────            │
│  Current Assets:         Current Liabilities:               │
│   - Cash                  - Accounts Payable                │
│   - Accts Receivable      - Deferred Revenue                │
│                                                             │
│  Non-Current Assets:     Non-Current Liabilities:           │
│   - Equipment             - Long-term Loans                 │
│                          ───────────────────────            │
│                          EQUITY                             │
│                          ─────────────────────              │
│                           - Share Capital                   │
│                           - Retained Earnings               │
├─────────────────────────────────────────────────────────────┤
│          ASSETS = LIABILITIES + EQUITY  (Always!)           │
└─────────────────────────────────────────────────────────────┘`}
                                </div>
                            )}
                        </div>

                        {(concept.takeaway || concept.example) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {concept.takeaway && (
                                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                                        <h4 className="font-bold text-emerald-800 text-xs uppercase mb-1">Key Takeaway</h4>
                                        <p className="text-emerald-900 text-sm">{concept.takeaway}</p>
                                    </div>
                                )}
                                {concept.example && (
                                    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                                        <h4 className="font-bold text-indigo-800 text-xs uppercase mb-1">Real World Example</h4>
                                        <p className="text-indigo-900 text-sm">{concept.example}</p>
                                    </div>
                                )}
                            </div>
                        )}
                   </div>
               ))}

               <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
                    <p className="text-slate-600 mb-4">Read all concepts above?</p>
                    <button 
                        onClick={() => setActiveTab('practice')}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                    >
                        Proceed to Practice
                    </button>
               </div>
            </div>
          ) : (
             <div className="text-center py-20"><BookOpen size={48} className="mx-auto mb-4 text-slate-300"/><p>Content coming soon.</p></div>
          )
        )}

        {activeTab === 'practice' && (
            <div className="space-y-8">
             {moduleData?.customPractice ? (
                 <BalanceSheetExercise onComplete={handleExerciseComplete} />
             ) : moduleData?.practice ? (
                 <PracticeMode questions={moduleData.practice} onComplete={handleExerciseComplete} />
             ) : (
                 <div className="text-center py-20 text-slate-400">Practice Unavailable</div>
             )}
             
             {/* Module 7 Specific Calculator */}
             {moduleData?.hasCalculator && (
                 <BreakEvenCalculator />
             )}
            </div>
        )}

        {activeTab === 'quiz' && (
            moduleData?.quiz ? (
                <Quiz questions={moduleData.quiz} onComplete={handleQuizComplete} />
            ) : (
                <div className="text-center py-20 text-slate-400">Quiz Unavailable</div>
            )
        )}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-slate-200">
        <button 
            disabled={!prevId}
            onClick={() => prevId && navigate(`/module/${prevId}`)}
            className="flex items-center px-4 py-2 text-slate-600 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors"
        >
            <ChevronLeft size={20} className="mr-2" /> Previous Module
        </button>
        <button 
            disabled={!nextId || !currentProgress.completed}
            onClick={() => nextId && navigate(`/module/${nextId}`)}
            className="flex items-center px-4 py-2 text-slate-600 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors group"
        >
            <span className="mr-2 text-right">
                <span className="block">Next Module</span>
                {!currentProgress.completed && <span className="text-xs text-slate-400 font-normal">Complete current module to unlock</span>}
            </span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};