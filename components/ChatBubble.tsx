'use client';

import { Message } from '../lib/types';
import { formatTime } from '../lib/utils';

interface ChatBubbleProps {
  message: Message;
  variant: 'sent' | 'received';
}

export function ChatBubble({ message, variant }: ChatBubbleProps) {
  const isSent = variant === 'sent';

  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} animate-slide-up group`}>
      <div className={`max-w-xs lg:max-w-md ${isSent ? 'order-2' : 'order-1'}`}>
        {!isSent && (
          <div className="text-xs font-medium text-textSecondary mb-2 px-3">
            {message.senderPseudonym}
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl shadow-card transition-all duration-200 group-hover:shadow-card-hover ${
            isSent
              ? 'bg-gradient-to-r from-pink to-purple-500 text-white rounded-br-lg'
              : 'bg-surface border border-gray-200 text-textPrimary rounded-bl-lg hover:border-gray-300'
          }`}
          role="article"
          aria-label={`Message from ${message.senderPseudonym}`}
        >
          <p className="text-sm leading-relaxed font-medium">{message.content}</p>
          <div className={`text-xs mt-2 font-medium ${isSent ? 'text-white/80' : 'text-textSecondary'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}
