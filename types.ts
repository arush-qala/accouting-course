export interface User {
  name: string;
  startedAt: number;
}

export interface ModuleProgress {
  conceptsRead: string[];
  exerciseCompleted: boolean;
  quizScore: number | null;
  completed: boolean;
}

export interface AppProgress {
  [key: string]: ModuleProgress;
}

export interface AppStats {
  totalTimeSpent: number;
  lastAccessed: number;
}

export interface LocalStorageData {
  financeFluency_user: User;
  financeFluency_progress: AppProgress;
  financeFluency_stats: AppStats;
}

export interface ModuleDefinition {
  id: number;
  title: string;
  estimate: string;
}

// Practice component types
export interface Question {
  id: number;
  text: string;
  hints: string[];
  solution: string;
  correctAnswer: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export interface BalanceSheetState {
  cash: number;
  accountsReceivable: number;
  inventory: number;
  prepaidExpenses: number;
  equipment: number;
  
  accountsPayable: number;
  deferredRevenue: number;
  loans: number;
  
  shareCapital: number;
  retainedEarnings: number;
}
