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
      <div className="max-w-sm bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 shadow-card">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✨</span>
          </div>
          <span className="text-xs font-medium text-purple-700">{sender}</span>
        </div>
        <p className="text-sm text-purple-800 leading-relaxed mb-2">{content}</p>
        <div className="text-xs text-purple-600">
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
}
