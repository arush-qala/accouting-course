import { LocalStorageData, User, AppProgress, AppStats } from '../types';

const KEYS = {
  USER: 'financeFluency_user',
  PROGRESS: 'financeFluency_progress',
  STATS: 'financeFluency_stats',
};

const INITIAL_MODULES = 10;

export const initializeStorage = (): LocalStorageData => {
  const now = Date.now();
  
  // Check if data exists
  const existingUser = localStorage.getItem(KEYS.USER);
  
  if (existingUser) {
    return {
      financeFluency_user: JSON.parse(existingUser),
      financeFluency_progress: JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{}'),
      financeFluency_stats: JSON.parse(localStorage.getItem(KEYS.STATS) || '{}'),
    };
  }

  // Initialize new data
  const user: User = { name: "Guest", startedAt: now };
  
  const progress: AppProgress = {};
  for (let i = 1; i <= INITIAL_MODULES; i++) {
    progress[i.toString()] = {
      conceptsRead: [],
      exerciseCompleted: false,
      quizScore: null,
      completed: false,
    };
  }

  const stats: AppStats = { totalTimeSpent: 0, lastAccessed: now };

  localStorage.setItem(KEYS.USER, JSON.stringify(user));
  localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
  localStorage.setItem(KEYS.STATS, JSON.stringify(stats));

  return {
    financeFluency_user: user,
    financeFluency_progress: progress,
    financeFluency_stats: stats,
  };
};

export const saveUser = (user: User) => {
  localStorage.setItem(KEYS.USER, JSON.stringify(user));
};

export const saveProgress = (progress: AppProgress) => {
  localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
};

export const saveStats = (stats: AppStats) => {
  localStorage.setItem(KEYS.STATS, JSON.stringify(stats));
};

export const getStoredData = (): LocalStorageData => {
  // If not initialized, initialize first
  if (!localStorage.getItem(KEYS.USER)) {
    return initializeStorage();
  }
  
  return {
    financeFluency_user: JSON.parse(localStorage.getItem(KEYS.USER) || '{}'),
    financeFluency_progress: JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{}'),
    financeFluency_stats: JSON.parse(localStorage.getItem(KEYS.STATS) || '{}'),
  };
};