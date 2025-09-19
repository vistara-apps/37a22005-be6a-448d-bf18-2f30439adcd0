'use client';

import { useState } from 'react';
import { SUPPORT_GROUPS } from '../lib/constants';
import { generatePseudonym, getGroupIcon } from '../lib/utils';
import { SupportGroup } from '../lib/types';

interface GroupSelectionProps {
  onGroupJoin: (group: SupportGroup, pseudonym: string) => void;
}

export function GroupSelection({ onGroupJoin }: GroupSelectionProps) {
  const [selectedGroup, setSelectedGroup] = useState<SupportGroup | null>(null);
  const [isJoining, setIsJoining] = useState(false);

  const handleGroupSelect = (group: SupportGroup) => {
    setSelectedGroup(group);
  };

  const handleJoinGroup = async () => {
    if (!selectedGroup) return;
    
    setIsJoining(true);
    
    // Simulate joining process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const pseudonym = generatePseudonym();
    onGroupJoin(selectedGroup, pseudonym);
    
    setIsJoining(false);
  };

  return (
    <div className="px-4 py-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink to-purple-400 rounded-full flex items-center justify-center shadow-card">
          <span className="text-3xl">💜</span>
        </div>
        <h2 className="text-2xl font-semibold text-textPrimary mb-2">
          Peer support groups
        </h2>
        <p className="text-textSecondary text-sm">
          Join an anonymous group for safe, guided conversations
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {SUPPORT_GROUPS.map((group) => (
          <button
            key={group.groupId}
            onClick={() => handleGroupSelect(group)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedGroup?.groupId === group.groupId
                ? 'border-pink bg-pink/5'
                : 'border-gray-200 bg-surface hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${group.color}`}>
                  <span className="text-lg">{getGroupIcon(group.category)}</span>
                </div>
                <div>
                  <h3 className="font-medium text-textPrimary">{group.name}</h3>
                  <p className="text-sm text-textSecondary">
                    {group.memberCount} members active
                  </p>
                </div>
              </div>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-textSecondary"
              >
                <path 
                  d="M9 18L15 12L9 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleJoinGroup}
        disabled={!selectedGroup || isJoining}
        className={`w-full py-4 rounded-lg font-medium transition-all duration-200 ${
          selectedGroup && !isJoining
            ? 'bg-pink text-white hover:opacity-90 shadow-card'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isJoining ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Joining Group...</span>
          </div>
        ) : (
          'Join Group'
        )}
      </button>

      {selectedGroup && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-slide-up">
          <h4 className="font-medium text-textPrimary mb-2">About this group</h4>
          <p className="text-sm text-textSecondary mb-3">
            A safe space for anonymous peer support with guided conversations and professional oversight.
          </p>
          <div className="flex items-center space-x-2 text-xs text-textSecondary">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Moderated • Anonymous • Safe</span>
          </div>
        </div>
      )}
    </div>
  );
}
