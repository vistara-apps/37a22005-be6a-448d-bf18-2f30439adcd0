'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-md mx-auto bg-surface min-h-screen shadow-lg">
        <header className="bg-surface border-b border-gray-100 px-4 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button className="p-2 -ml-2 text-textSecondary hover:text-textPrimary transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold text-textPrimary">CareCircle</h1>
              <span className="text-pink text-xl">💜</span>
            </div>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="pb-safe">
          {children}
        </main>
      </div>
    </div>
  );
}
