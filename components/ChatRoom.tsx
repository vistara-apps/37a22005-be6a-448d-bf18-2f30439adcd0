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

  return (
    <div className="flex flex-col h-screen animate-fade-in">
      {/* Chat Header */}
      <div className="bg-surface border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onLeaveGroup}
            className="p-2 -ml-2 text-textSecondary hover:text-textPrimary transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${group.color}`}>
              <span className="text-sm">{getGroupIcon(group.category)}</span>
            </div>
            <div className="text-center">
              <h2 className="font-medium text-textPrimary">{group.name} Circle</h2>
              <p className="text-xs text-textSecondary">{group.memberCount} members</p>
            </div>
          </div>
          <UserStatusBadge variant="anonymous" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
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
          <div className="flex items-center space-x-2 text-textSecondary">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-sm">Someone is typing...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-surface border-t border-gray-100 px-4 py-3">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share your thoughts safely and anonymously..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              newMessage.trim()
                ? 'bg-pink text-white hover:opacity-90'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
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
