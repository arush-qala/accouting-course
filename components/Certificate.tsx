import React, { useRef } from 'react';
import { Download, Share2, Award, CheckCircle2 } from 'lucide-react';
import { User } from '../types';

interface CertificateProps {
  user: User;
  date: string;
}

export const Certificate: React.FC<CertificateProps> = ({ user, date }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `🎓 I just completed Finance Fluency: Accounting Essentials for Data Analysts! 10 modules covering financial statements, revenue recognition, and more. #FinanceFluency`;
    navigator.clipboard.writeText(text);
    alert("Achievement copied to clipboard!");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Celebration Banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            {/* Simple CSS-only confetti circles */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-300 rounded-full"></div>
         </div>
         <div className="relative z-10">
            <Award size={48} className="mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-2">Congratulations, {user.name}!</h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                You have successfully completed the entire Finance Fluency training course. You've mastered the language of business!
            </p>
         </div>
      </div>

      {/* Certificate Display */}
      <div className="flex justify-center print:block print:w-full print:absolute print:top-0 print:left-0">
        <div 
            ref={certificateRef}
            className="bg-white border-8 border-double border-slate-200 p-12 w-full max-w-3xl text-center shadow-xl relative aspect-[1.414/1]"
        >
            <div className="absolute top-6 left-6 opacity-10">
                <Award size={120} />
            </div>
            
            <div className="border-b-2 border-slate-800 pb-8 mb-8">
                <h1 className="text-4xl font-serif text-slate-800 font-bold tracking-wider mb-2">CERTIFICATE</h1>
                <p className="text-slate-500 uppercase tracking-widest text-sm">OF COMPLETION</p>
            </div>

            <p className="text-lg text-slate-600 italic mb-6">This certifies that</p>
            
            <h2 className="text-4xl font-bold text-indigo-700 mb-6 font-serif">{user.name}</h2>
            
            <p className="text-lg text-slate-600 italic mb-8">has successfully completed</p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-2">FINANCE FLUENCY</h3>
            <p className="text-slate-600 font-medium mb-12">Accounting Essentials for Data Analysts</p>
            
            <div className="flex justify-between items-end mt-16 px-12">
                <div className="text-center">
                    <p className="text-slate-800 font-bold border-t border-slate-400 pt-2 px-8">{date}</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Date Completed</p>
                </div>
                <div className="w-24 h-24 rounded-full border-4 border-indigo-600 flex items-center justify-center text-indigo-600 relative">
                   <div className="absolute inset-1 border border-indigo-600 rounded-full"></div>
                   <div className="text-center">
                       <Award size={32} className="mx-auto" />
                       <span className="text-[10px] font-bold uppercase block mt-1">Certified</span>
                   </div>
                </div>
            </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 print:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors shadow-sm"
          >
            <Download size={18} className="mr-2" /> Download / Print
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Share2 size={18} className="mr-2" /> Share Achievement
          </button>
      </div>
    </div>
  );
};