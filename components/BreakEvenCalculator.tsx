import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

export const BreakEvenCalculator: React.FC = () => {
  const [fixedCosts, setFixedCosts] = useState(600000);
  const [price, setPrice] = useState(0.50);
  const [variableCost, setVariableCost] = useState(0.15);

  const cmPerUnit = price - variableCost;
  const cmRatio = price > 0 ? (cmPerUnit / price) * 100 : 0;
  const breakEvenUnits = cmPerUnit > 0 ? Math.ceil(fixedCosts / cmPerUnit) : 0;
  const breakEvenRevenue = breakEvenUnits * price;

  // Chart scaling (simple SVG)
  const maxUnits = breakEvenUnits * 2 || 1000;
  const maxRevenue = maxUnits * price || 1000;
  
  // Points for lines
  // Revenue Line: (0,0) to (maxUnits, maxRevenue)
  // Total Cost Line: (0, FixedCosts) to (maxUnits, FixedCosts + maxUnits * VC)
  
  const chartHeight = 200;
  const chartWidth = 300;
  
  const getY = (val: number) => chartHeight - (val / (maxRevenue * 1.2)) * chartHeight;
  const getX = (val: number) => (val / maxUnits) * chartWidth;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800">Interactive Break-Even Simulator</h3>
        <button 
            onClick={() => { setFixedCosts(600000); setPrice(0.50); setVariableCost(0.15); }}
            className="text-xs flex items-center text-slate-500 hover:text-indigo-600"
        >
            <RefreshCcw size={12} className="mr-1" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
            <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                    Fixed Costs <span>£{fixedCosts.toLocaleString()}</span>
                </label>
                <input 
                    type="range" min="0" max="2000000" step="10000"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
            </div>
            <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                    Price per Unit <span>£{price.toFixed(2)}</span>
                </label>
                <input 
                    type="range" min="0.10" max="5.00" step="0.05"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
            </div>
            <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                    Variable Cost per Unit <span>£{variableCost.toFixed(2)}</span>
                </label>
                <input 
                    type="range" min="0.01" max="4.00" step="0.01"
                    value={variableCost}
                    onChange={(e) => setVariableCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
            </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 p-4 rounded-lg space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded border border-slate-200">
                    <div className="text-xs text-slate-500 uppercase">Contribution Margin</div>
                    <div className={`text-lg font-bold ${cmPerUnit > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        £{cmPerUnit.toFixed(2)} <span className="text-xs text-slate-400">({cmRatio.toFixed(1)}%)</span>
                    </div>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                    <div className="text-xs text-slate-500 uppercase">Break-Even Units</div>
                    <div className="text-lg font-bold text-indigo-600">
                        {cmPerUnit > 0 ? breakEvenUnits.toLocaleString() : "∞"}
                    </div>
                </div>
            </div>
            
            <div className="p-3 bg-indigo-50 rounded border border-indigo-100 text-center">
                <div className="text-xs text-indigo-500 uppercase font-semibold mb-1">Break-Even Revenue</div>
                <div className="text-2xl font-bold text-indigo-700">
                     {cmPerUnit > 0 ? `£${breakEvenRevenue.toLocaleString()}` : "N/A"}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};