import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, BookOpen, PenTool, CheckSquare, CheckCircle2 } from 'lucide-react';
import { PracticeMode } from '../components/PracticeMode';
import { BalanceSheetExercise } from '../components/BalanceSheetExercise';
import { Quiz } from '../components/Quiz';
import { AppProgress } from '../types';
import { MODULE_1_CONCEPTS, MODULE_1_QUIZ } from '../data/module1';

interface ModulePageProps {
  progress: AppProgress;
  onUpdateProgress: (moduleId: string, updates: Partial<any>) => void;
}

const MODULE_TITLES = [
  "Understanding the Balance Sheet", "The Income Statement",
  "Cash Flow Analysis", "Debits & Credits", "Journal Entries",
  "Adjusting Entries", "Financial Ratios", "Inventory Methods", "Depreciation", "Advanced Topics"
];

const MODULE_ESTIMATES = [
  "25 mins", "20 mins", "25 mins", "30 mins", "25 mins", "20 mins", "20 mins", "30 mins", "25 mins", "30 mins"
];

export const ModulePage: React.FC<ModulePageProps> = ({ progress, onUpdateProgress }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'quiz'>('learn');
  
  const moduleIdStr = id || "1";
  const moduleId = parseInt(moduleIdStr);
  const moduleTitle = MODULE_TITLES[moduleId - 1] || "Module";
  const prevId = moduleId > 1 ? moduleId - 1 : null;
  const nextId = moduleId < 10 ? moduleId + 1 : null;
  
  // Data for current module (Fallback to generic if not module 1)
  const isModule1 = moduleId === 1;
  const currentProgress = progress[moduleIdStr] || { conceptsRead: [], exerciseCompleted: false, quizScore: null, completed: false };

  // Logic to prevent accessing locked modules via URL
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

  // --- Completion Logic Handlers ---

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
    checkCompletion(currentProgress.conceptsRead, currentProgress.exerciseCompleted, score);
  };

  const checkCompletion = (read: string[], exercise: boolean, quiz: number | null) => {
    // Requirements: All concepts read, Exercise done, Quiz >= 70%
    const conceptsTotal = isModule1 ? MODULE_1_CONCEPTS.length : 0; // Fallback for others
    const conceptsDone = read.length >= conceptsTotal;
    const quizPassed = quiz !== null && quiz >= 70;

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
              {isModule1 && <p className="text-slate-500 mt-1">The foundation of financial statements</p>}
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
          isModule1 ? (
            <div className="space-y-6">
               <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 mb-6">
                 <h3 className="font-bold text-lg mb-2">Learning Objectives</h3>
                 <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Understand the purpose of the Balance Sheet</li>
                    <li>Master the fundamental accounting equation</li>
                    <li>Identify key assets, liabilities, and equity accounts</li>
                    <li>Learn how business transactions affect the balance sheet</li>
                 </ul>
               </div>

               {MODULE_1_CONCEPTS.map((concept) => (
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
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center py-20">
                <BookOpen size={48} className="mx-auto text-indigo-200 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Content Coming Soon</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    The learning material for this module is currently under development. Please check back later!
                </p>
            </div>
          )
        )}

        {activeTab === 'practice' && (
             isModule1 ? (
                 <BalanceSheetExercise onComplete={handleExerciseComplete} />
             ) : (
                 <PracticeMode moduleId={moduleIdStr} onComplete={handleExerciseComplete} />
             )
        )}

        {activeTab === 'quiz' && (
            isModule1 ? (
                <Quiz questions={MODULE_1_QUIZ} onComplete={handleQuizComplete} />
            ) : (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center py-20">
                    <CheckSquare size={48} className="mx-auto text-indigo-200 mb-4" />
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Quiz Unavailable</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                        The quiz for this module is not yet ready.
                    </p>
                </div>
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