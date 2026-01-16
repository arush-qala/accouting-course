import React from 'react';
import { Download, Trash2, Save } from 'lucide-react';
import { getStoredData, initializeStorage } from '../services/storage';

export const Settings: React.FC = () => {
  const handleReset = () => {
    if (window.confirm("WARNING: This will permanently delete all your progress, quiz scores, and user data. This cannot be undone. Are you sure?")) {
      localStorage.clear();
      initializeStorage();
      window.location.href = '/'; // Hard reload to reset state
    }
  };

  const handleExport = () => {
    const data = getStoredData();
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `finance_fluency_progress_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-2xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Settings</h1>

      <div className="space-y-6">
        {/* Data Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Data Management</h2>
            
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                        <h3 className="font-medium text-slate-700">Export Progress</h3>
                        <p className="text-sm text-slate-500">Download your data as a JSON file.</p>
                    </div>
                    <button 
                        onClick={handleExport}
                        className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <Download size={16} className="mr-2" /> Export
                    </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
                    <div>
                        <h3 className="font-medium text-red-800">Reset Application</h3>
                        <p className="text-sm text-red-600">Delete all progress and start over.</p>
                    </div>
                    <button 
                        onClick={handleReset}
                        className="flex items-center px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        <Trash2 size={16} className="mr-2" /> Reset
                    </button>
                </div>
            </div>
        </div>

        {/* About */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">About</h2>
            <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>Version</span>
                    <span className="font-mono">1.0.0</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>Course</span>
                    <span>Finance Fluency</span>
                </div>
                <div className="pt-2 text-slate-400 text-xs">
                    Designed for B2B Data Teams to master accounting fundamentals.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};