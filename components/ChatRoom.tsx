'use client';

import { useState, useEffect, useRef } from 'react';
import { SupportGroup, Message } from '../lib/types';
import { formatTime, getGroupIcon, getRandomPrompt } from '../lib/utils';
import { ChatBubble } from './ChatBubble';
import { PromptCard } from './PromptCard';
import { UserStatusBadge } from './UserStatusBadge';

interface ChatRoomProps {
  group: SupportGroup;
  userPseudonym: string;
  onLeaveGroup: () => void;
}

export function ChatRoom({ group, userPseudonym, onLeaveGroup }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with welcome message and first prompt
    const welcomeMessage: Message = {
      messageId: 'welcome-1',
      groupId: group.groupId,
      senderPseudonym: 'Moderator',
      content: `Welcome to the ${group.name} support circle. This is a safe, anonymous space for sharing and healing together.`,
      timestamp: new Date(),
      isPrompt: true,
    };

    const firstPrompt = getRandomPrompt(group.guidePrompts);
    setCurrentPrompt(firstPrompt);

    const promptMessage: Message = {
      messageId: 'prompt-1',
      groupId: group.groupId,
      senderPseudonym: 'Guide',
      content: firstPrompt,
      timestamp: new Date(Date.now() + 1000),
      isPrompt: true,
    };

    setMessages([welcomeMessage, promptMessage]);

    // Simulate other members joining and sharing
    setTimeout(() => {
      const memberMessage: Message = {
        messageId: 'member-1',
        groupId: group.groupId,
        senderPseudonym: 'GentleHeart42',
        content: "Thank you for creating this space. I've been struggling lately and it helps to know I'm not alone.",
        timestamp: new Date(Date.now() + 5000),
      };
      setMessages(prev => [...prev, memberMessage]);
    }, 3000);
  }, [group]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      messageId: `msg-${Date.now()}`,
      groupId: group.groupId,
      senderPseudonym: userPseudonym,
      content: newMessage.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Occasionally send a new prompt
      if (Math.random() > 0.7) {
        const newPrompt = getRandomPrompt(group.guidePrompts);
        const promptMessage: Message = {
          messageId: `prompt-${Date.now()}`,
          groupId: group.groupId,
          senderPseudonym: 'Guide',
          content: newPrompt,
          timestamp: new Date(),
          isPrompt: true,
        };
        setMessages(prev => [...prev, promptMessage]);
        setCurrentPrompt(newPrompt);
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = '48px';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  return (
    <div className="flex flex-col h-screen animate-fade-in">
      {/* Chat Header */}
      <div className="bg-surface/95 backdrop-blur-sm border-b border-gray-200 px-4 py-4 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <button
            onClick={onLeaveGroup}
            className="p-2 -ml-2 text-textSecondary hover:text-textPrimary focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-surface rounded-md transition-all duration-200"
            aria-label="Leave group and return to group selection"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color} shadow-inner-sm`}>
              <span className="text-lg">{getGroupIcon(group.category)}</span>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-textPrimary text-lg">{group.name}</h2>
              <p className="text-sm text-textSecondary font-medium">{group.memberCount} members active</p>
            </div>
          </div>
          <UserStatusBadge variant="anonymous" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" role="log" aria-live="polite" aria-label="Chat messages">
        {messages.map((message) => (
          <div key={message.messageId}>
            {message.isPrompt ? (
              <PromptCard
                content={message.content}
                sender={message.senderPseudonym}
                timestamp={message.timestamp}
              />
            ) : (
              <ChatBubble
                message={message}
                variant={message.senderPseudonym === userPseudonym ? 'sent' : 'received'}
              />
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-3 text-textSecondary animate-fade-in" aria-live="polite">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-pink rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm font-medium">Someone is typing...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-surface/95 backdrop-blur-sm border-t border-gray-200 px-4 py-4 sticky bottom-0">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <label htmlFor="message-input" className="sr-only">
              Type your message
            </label>
            <textarea
              id="message-input"
              value={newMessage}
              onChange={handleTextareaChange}
              onKeyPress={handleKeyPress}
              placeholder="Share your thoughts safely and anonymously..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink focus:border-pink transition-all duration-200 bg-gray-50 focus:bg-white"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
              aria-describedby="message-help"
            />
            <div id="message-help" className="sr-only">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className={`p-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-surface transform active:scale-95 ${
              newMessage.trim()
                ? 'bg-gradient-to-r from-pink to-purple-500 text-white hover:shadow-card-hover hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label={newMessage.trim() ? 'Send message' : 'Enter a message to send'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
