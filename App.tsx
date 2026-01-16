import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { ModulePage } from './pages/ModulePage';
import { Glossary } from './pages/Glossary';
import { Settings } from './pages/Settings';
import { initializeStorage, getStoredData, saveUser, saveProgress, saveStats } from './services/storage';
import { User, AppProgress, AppStats } from './types';

// Layout wrapper to handle header titles based on route
const LayoutContent: React.FC<{ 
    children: React.ReactNode; 
    toggleSidebar: () => void;
    title: string 
}> = ({ children, toggleSidebar, title }) => {
    return (
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
             {/* Header */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8 justify-between shrink-0 z-30">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="mr-4 lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600">
                        <Menu size={24} />
                    </button>
                    <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                </div>
                <div className="flex items-center space-x-4">
                     {/* Header actions could go here */}
                </div>
            </header>
            
            {/* Main Scrollable Area */}
            <main className="flex-1 overflow-y-auto bg-slate-50 p-4 lg:p-8">
                {children}
            </main>
        </div>
    )
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<AppProgress>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stats, setStats] = useState<AppStats | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize Data
  useEffect(() => {
    const data = getStoredData();
    setUser(data.financeFluency_user);
    setProgress(data.financeFluency_progress);
    setStats(data.financeFluency_stats);
  }, []);

  const handleUpdateUser = (name: string) => {
    if (user) {
        const newUser = { ...user, name };
        setUser(newUser);
        saveUser(newUser);
    }
  };

  const handleUpdateProgress = (moduleId: string, updates: Partial<any>) => {
    const newProgress = {
        ...progress,
        [moduleId]: { ...progress[moduleId], ...updates }
    };
    setProgress(newProgress);
    saveProgress(newProgress);
  };

  if (!user) return null; // or a loading spinner

  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        <Sidebar 
            isOpen={isSidebarOpen} 
            onCloseMobile={() => setIsSidebarOpen(false)}
            user={user}
            progress={progress}
            onUpdateUserName={handleUpdateUser}
        />
        
        <Routes>
            <Route path="/dashboard" element={
                <LayoutContent toggleSidebar={() => setIsSidebarOpen(true)} title="Dashboard">
                    <Dashboard user={user} progress={progress} />
                </LayoutContent>
            } />
            <Route path="/module/:id" element={
                <LayoutContent toggleSidebar={() => setIsSidebarOpen(true)} title="Training Module">
                    <ModulePage progress={progress} onUpdateProgress={handleUpdateProgress} />
                </LayoutContent>
            } />
            <Route path="/glossary" element={
                <LayoutContent toggleSidebar={() => setIsSidebarOpen(true)} title="Glossary">
                    <Glossary />
                </LayoutContent>
            } />
            <Route path="/settings" element={
                <LayoutContent toggleSidebar={() => setIsSidebarOpen(true)} title="Settings">
                    <Settings />
                </LayoutContent>
            } />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;