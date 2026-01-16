import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { BalanceSheetState } from '../types';

interface VisualBalanceSheetProps {
  data: BalanceSheetState;
  previousData: BalanceSheetState | null;
}

const formatCurrency = (val: number) => `£${val.toLocaleString()}`;

const AccountRow: React.FC<{ label: string; value: number; prevValue?: number }> = ({ label, value, prevValue }) => {
  const diff = prevValue !== undefined ? value - prevValue : 0;
  const isChanged = diff !== 0;
  
  return (
    <div className={`flex justify-between items-center py-1 px-2 rounded transition-colors duration-500 ${isChanged ? (diff > 0 ? 'bg-emerald-50' : 'bg-red-50') : ''}`}>
      <span className="text-sm text-slate-600">{label}</span>
      <div className="flex items-center">
        <span className={`font-mono text-sm font-medium ${isChanged ? 'text-slate-900' : 'text-slate-700'}`}>
          {formatCurrency(value)}
        </span>
        {isChanged && (
          <span className={`ml-1 ${diff > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
            {diff > 0 ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          </span>
        )}
      </div>
    </div>
  );
};

export const VisualBalanceSheet: React.FC<VisualBalanceSheetProps> = ({ data, previousData }) => {
  const getPrev = (key: keyof BalanceSheetState) => previousData ? previousData[key] : undefined;

  const totalCurrentAssets = data.cash + data.accountsReceivable + data.inventory + data.prepaidExpenses;
  const totalNonCurrentAssets = data.equipment;
  const totalAssets = totalCurrentAssets + totalNonCurrentAssets;

  const totalCurrentLiab = data.accountsPayable + data.deferredRevenue;
  const totalNonCurrentLiab = data.loans;
  const totalLiab = totalCurrentLiab + totalNonCurrentLiab;

  const totalEquity = data.shareCapital + data.retainedEarnings;
  const totalLiabEquity = totalLiab + totalEquity;

  const isBalanced = totalAssets === totalLiabEquity;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-800 text-white p-3 text-center">
        <h3 className="font-bold tracking-wide">CLOUDPAY SOLUTIONS — BALANCE SHEET</h3>
        <p className="text-xs text-slate-300">As of Jan 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Assets Column */}
        <div className="border-b md:border-b-0 md:border-r border-slate-200 p-4 bg-blue-50/10">
          <h4 className="font-bold text-slate-700 border-b-2 border-slate-200 pb-1 mb-3">ASSETS</h4>
          
          <div className="space-y-1 mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Current Assets</p>
            <AccountRow label="Cash" value={data.cash} prevValue={getPrev('cash')} />
            <AccountRow label="Accounts Recv." value={data.accountsReceivable} prevValue={getPrev('accountsReceivable')} />
            <AccountRow label="Inventory" value={data.inventory} prevValue={getPrev('inventory')} />
            <AccountRow label="Prepaid Exp." value={data.prepaidExpenses} prevValue={getPrev('prepaidExpenses')} />
          </div>

          <div className="space-y-1 mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Non-Current Assets</p>
            <AccountRow label="Equipment" value={data.equipment} prevValue={getPrev('equipment')} />
          </div>

          <div className="mt-4 pt-2 border-t border-slate-200 flex justify-between items-center bg-slate-50 p-2 rounded">
            <span className="font-bold text-slate-800">Total Assets</span>
            <span className="font-bold text-slate-800 font-mono">{formatCurrency(totalAssets)}</span>
          </div>
        </div>

        {/* Liabilities & Equity Column */}
        <div className="p-4 bg-orange-50/10">
           <h4 className="font-bold text-slate-700 border-b-2 border-slate-200 pb-1 mb-3">LIABILITIES</h4>
           
           <div className="space-y-1 mb-4">
             <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Current Liabilities</p>
             <AccountRow label="Accounts Payable" value={data.accountsPayable} prevValue={getPrev('accountsPayable')} />
             <AccountRow label="Deferred Revenue" value={data.deferredRevenue} prevValue={getPrev('deferredRevenue')} />
           </div>

           <div className="space-y-1 mb-4">
             <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Non-Current Liabilities</p>
             <AccountRow label="Loans" value={data.loans} prevValue={getPrev('loans')} />
             <div className="flex justify-between items-center py-1 px-2 border-t border-dashed border-slate-200 mt-2">
                <span className="text-xs font-medium text-slate-500">Total Liabilities</span>
                <span className="text-xs font-mono font-medium text-slate-600">{formatCurrency(totalLiab)}</span>
             </div>
           </div>

           <h4 className="font-bold text-slate-700 border-b-2 border-slate-200 pb-1 mb-3 mt-6">EQUITY</h4>
           <div className="space-y-1 mb-4">
             <AccountRow label="Share Capital" value={data.shareCapital} prevValue={getPrev('shareCapital')} />
             <AccountRow label="Retained Earnings" value={data.retainedEarnings} prevValue={getPrev('retainedEarnings')} />
             <div className="flex justify-between items-center py-1 px-2 border-t border-dashed border-slate-200 mt-2">
                <span className="text-xs font-medium text-slate-500">Total Equity</span>
                <span className="text-xs font-mono font-medium text-slate-600">{formatCurrency(totalEquity)}</span>
             </div>
           </div>

           <div className="mt-4 pt-2 border-t border-slate-200 flex justify-between items-center bg-slate-50 p-2 rounded">
             <span className="font-bold text-slate-800">Total Liab. + Equity</span>
             <span className="font-bold text-slate-800 font-mono">{formatCurrency(totalLiabEquity)}</span>
           </div>
        </div>
      </div>

      {/* Balance Check Footer */}
      <div className={`p-2 text-center text-sm font-medium ${isBalanced ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
        {isBalanced 
          ? `✓ BALANCED: Assets £${(totalAssets/1000).toFixed(0)}k = L+E £${(totalLiabEquity/1000).toFixed(0)}k`
          : `⚠ UNBALANCED: Assets £${(totalAssets/1000).toFixed(0)}k ≠ L+E £${(totalLiabEquity/1000).toFixed(0)}k`
        }
      </div>
    </div>
  );
};