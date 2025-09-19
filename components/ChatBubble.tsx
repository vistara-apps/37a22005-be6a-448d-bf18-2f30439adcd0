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
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} animate-slide-up`}>
      <div className={`max-w-xs lg:max-w-md ${isSent ? 'order-2' : 'order-1'}`}>
        {!isSent && (
          <div className="text-xs text-textSecondary mb-1 px-3">
            {message.senderPseudonym}
          </div>
        )}
        <div
          className={`px-4 py-2 rounded-lg shadow-sm ${
            isSent
              ? 'bg-pink text-white rounded-br-sm'
              : 'bg-surface border border-gray-200 text-textPrimary rounded-bl-sm'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
          <div className={`text-xs mt-1 ${isSent ? 'text-pink-100' : 'text-textSecondary'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}
