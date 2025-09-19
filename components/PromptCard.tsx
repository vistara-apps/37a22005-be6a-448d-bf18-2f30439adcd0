'use client';

import { formatTime } from '../lib/utils';

interface PromptCardProps {
  content: string;
  sender: string;
  timestamp: Date;
}

export function PromptCard({ content, sender, timestamp }: PromptCardProps) {
  return (
    <div className="flex justify-center animate-slide-up">
      <div 
        className="max-w-sm bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border border-purple-200 rounded-2xl p-5 shadow-card-hover mx-4"
        role="article"
        aria-label={`Guided prompt from ${sender}`}
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-inner-sm animate-pulse-soft">
            <span className="text-white text-sm">✨</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">{sender}</span>
            <span className="text-xs text-purple-600 font-medium">Guided Prompt</span>
          </div>
        </div>
        <p className="text-sm text-purple-800 leading-relaxed mb-3 font-medium">{content}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-purple-600 font-medium">
            {formatTime(timestamp)}
          </div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
