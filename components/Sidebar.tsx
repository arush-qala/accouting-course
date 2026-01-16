import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GraduationCap, Lock, CheckCircle2, Circle, Edit2 } from 'lucide-react';
import { AppProgress, User, ModuleProgress } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
  user: User;
  progress: AppProgress;
  onUpdateUserName: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile, user, progress, onUpdateUserName }) => {
  const navigate = useNavigate();
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [tempName, setTempName] = useState(user.name);

  // Calculate total progress
  const totalModules = 10;
  const completedModules = Object.values(progress).filter((p: ModuleProgress) => p.completed).length;
  const percentage = Math.round((completedModules / totalModules) * 100);
  
  // Circle config for progress ring
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const handleUserSave = () => {
    if (tempName.trim()) {
      onUpdateUserName(tempName);
      setIsEditingUser(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onCloseMobile}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-[240px] bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          
          {/* Logo Section */}
          <div className="p-6 border-b border-slate-100 flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <GraduationCap size={20} />
            </div>
            <h1 className="font-bold text-slate-800 text-sm tracking-tight">Finance Fluency</h1>
          </div>

          {/* Progress Section */}
          <div className="p-6 flex flex-col items-center border-b border-slate-100 bg-slate-50/50">
            <div className="relative w-24 h-24 mb-3">
              <svg className="transform -rotate-90 w-24 h-24">
                <circle cx="48" cy="48" r={radius} stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
                <circle 
                  cx="48" cy="48" r={radius} 
                  stroke="#4f46e5" 
                  strokeWidth="6" 
                  fill="transparent" 
                  strokeDasharray={circumference} 
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-bold text-slate-800">{percentage}%</span>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Course Progress</span>
          </div>

          {/* Module List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Modules</h3>
            
            {Array.from({ length: 10 }).map((_, i) => {
              const num = i + 1;
              const id = num.toString();
              const modProgress = progress[id];
              // Module 1 is always unlocked. Others depend on previous module completion.
              const isLocked = num > 1 && !progress[(num - 1).toString()]?.completed;
              
              let statusColor = "text-slate-300"; // Gray
              if (modProgress?.completed) statusColor = "text-emerald-500";
              else if (modProgress?.exerciseCompleted || modProgress?.conceptsRead?.length > 0) statusColor = "text-amber-500";

              return (
                <div key={num} className="relative">
                  {isLocked ? (
                     <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-400 bg-slate-50 cursor-not-allowed">
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-mono w-4 text-center">{num}</span>
                            <span className="text-sm font-medium truncate w-32">Module {num}</span>
                        </div>
                        <Lock size={14} />
                     </div>
                  ) : (
                    <NavLink 
                        to={`/module/${num}`}
                        onClick={onCloseMobile}
                        className={({ isActive }) => `flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-mono w-4 text-center opacity-70">{num}</span>
                            <span className="text-sm font-medium truncate w-32">Module {num}</span>
                        </div>
                        <Circle size={8} fill="currentColor" className={statusColor} stroke="none" />
                    </NavLink>
                  )}
                </div>
              );
            })}
          </div>

          {/* User Section */}
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            {isEditingUser ? (
               <div className="flex items-center space-x-2">
                 <input 
                    autoFocus
                    className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={handleUserSave}
                    onKeyDown={(e) => e.key === 'Enter' && handleUserSave()}
                 />
                 <button onClick={handleUserSave} className="text-xs text-indigo-600 font-medium">Save</button>
               </div>
            ) : (
                <div 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors group"
                    onClick={() => setIsEditingUser(true)}
                >
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">Student</p>
                    </div>
                    <Edit2 size={14} className="text-slate-400 group-hover:text-slate-600" />
                </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};