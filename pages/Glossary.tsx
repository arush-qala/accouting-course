import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';

export const Glossary: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(query.toLowerCase()) ||
    item.def.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Financial Glossary</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search for terms like 'Accrual' or 'Equity'..."
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {filtered.length > 0 ? (
           <div className="divide-y divide-slate-100">
             {filtered.map((item, idx) => {
               // Add letter header if first of letter
               const firstLetter = item.term.charAt(0).toUpperCase();
               const prevLetter = idx > 0 ? filtered[idx-1].term.charAt(0).toUpperCase() : '';
               const showHeader = firstLetter !== prevLetter;

               return (
                 <React.Fragment key={idx}>
                    {showHeader && (
                        <div className="bg-slate-50 px-6 py-2 text-xs font-bold text-slate-400 sticky top-0">
                            {firstLetter}
                        </div>
                    )}
                    <div className="p-6 hover:bg-slate-50 transition-colors">
                        <h3 className="text-lg font-bold text-indigo-700 mb-1">{item.term}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.def}</p>
                    </div>
                 </React.Fragment>
               );
             })}
           </div>
        ) : (
            <div className="p-12 text-center text-slate-500">
                No terms found matching "{query}".
            </div>
        )}
      </div>
    </div>
  );
};