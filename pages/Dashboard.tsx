import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle2, Clock, BarChart3, Lock, Award } from 'lucide-react';
import { AppProgress, User, ModuleProgress } from '../types';
import { Certificate } from '../components/Certificate';

interface DashboardProps {
  user: User;
  progress: AppProgress;
}

const MODULE_TITLES = [
  "Accounting Basics", "The Balance Sheet", "The Income Statement",
  "Assets & Depreciation", "Cash Flow Statements", "Liabilities & Provisions",
  "Cost Behavior", "Customer Profitability", "Performance Measurement", "B2B Finance Practice"
];

export const Dashboard: React.FC<DashboardProps> = ({ user, progress }) => {
  const navigate = useNavigate();

  const completedCount = Object.values(progress).filter((p: ModuleProgress) => p.completed).length;
  const totalCompletionPercent = Math.round((completedCount / 10) * 100);
  const isAllComplete = completedCount === 10;

  return (
    <div className="space-y-8 pb-10">
      
      {/* Certificate Section - Shows when all done */}
      {isAllComplete ? (
        <Certificate user={user} date={new Date().toLocaleDateString()} />
      ) : (
        /* Welcome Card */
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Welcome to Finance Fluency!</h2>
            <p className="text-indigo-100 max-w-xl text-lg">
                Ready to master accounting? Pick up where you left off or start a new module below.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Clock size={18} className="mr-2" />
                <span>Estimated total time: 4 hours</span>
            </div>
            </div>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                <CheckCircle2 size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Completed</p>
                <p className="text-2xl font-bold text-slate-800">{completedCount} <span className="text-sm font-normal text-slate-400">/ 10</span></p>
            </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                <BarChart3 size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Completion</p>
                <p className="text-2xl font-bold text-slate-800">{totalCompletionPercent}%</p>
            </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                <Award size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Status</p>
                <p className="text-2xl font-bold text-slate-800">{isAllComplete ? "Certified" : "In Progress"}</p>
            </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Training Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MODULE_TITLES.map((title, i) => {
            const num = i + 1;
            const id = num.toString();
            const modProgress = progress[id];
            const isLocked = num > 1 && !progress[(num - 1).toString()]?.completed;

            return (
              <div 
                key={id} 
                onClick={() => !isLocked && navigate(`/module/${id}`)}
                className={`group relative bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-200 ${isLocked ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-md hover:border-indigo-100 cursor-pointer'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${modProgress?.completed ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
                    {modProgress?.completed ? <CheckCircle2 size={20} /> : num}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">20-30 min</span>
                </div>
                
                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {title}
                </h4>
                <p className="text-sm text-slate-500 mb-6">
                    Master the fundamentals of {title.toLowerCase()} through interactive exercises.
                </p>

                {isLocked ? (
                  <button disabled className="w-full py-2 bg-slate-100 text-slate-400 rounded-lg font-medium flex items-center justify-center">
                    <Lock size={16} className="mr-2" /> Locked
                  </button>
                ) : (
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center">
                     {modProgress?.completed ? 'Review Module' : (modProgress?.exerciseCompleted ? 'Continue' : 'Start Module')} <Play size={16} className="ml-2" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};