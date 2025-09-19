'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-md mx-auto bg-surface min-h-screen shadow-card">
        <header className="bg-surface/95 backdrop-blur-sm border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button 
              className="p-2 -ml-2 text-textSecondary hover:text-textPrimary focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-surface rounded-md transition-all duration-200"
              aria-label="Go back"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink to-primary bg-clip-text text-transparent">
                CareCircles
              </h1>
              <span className="text-2xl animate-pulse-soft">💜</span>
            </div>
            <div className="w-8" aria-hidden="true"></div>
          </div>
        </header>
        <main className="pb-safe min-h-[calc(100vh-5rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
