import React from 'react';

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

export interface LearningConcept {
  id: string;
  title: string;
  content: string;
  takeaway?: string;
  example?: string;
  visual?: React.ReactNode;
}

// Updated Practice component types
export interface PracticeQuestion {
  id: number;
  text: string; // The main question text
  type: 'text' | 'number' | 'multiple-choice' | 'multi-input';
  context?: React.ReactNode; // Optional content (tables, scenarios) to display before the question
  
  // For multiple choice
  options?: { id: string; text: string }[];
  
  // For multi-input
  inputFields?: { key: string; label: string; prefix?: string; suffix?: string }[];
  
  // Answers
  correctAnswer?: string | number | (string | number)[]; // Allow single val or array of valid options
  correctAnswers?: Record<string, string | number>; // For multi-input (key maps to input key)
  
  hints: string[];
  solution: string;
  
  // UI helpers
  inputPrefix?: string;
  inputSuffix?: string;
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