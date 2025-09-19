'use client';

import { useState } from 'react';
import { SUPPORT_GROUPS } from '../lib/constants';
import { generatePseudonym, getGroupIcon } from '../lib/utils';
import { SupportGroup } from '../lib/types';
import { LoadingSpinner } from './LoadingSpinner';
import { usePerformance } from '../lib/hooks/usePerformance';
import { analytics } from '../lib/analytics';

interface GroupSelectionProps {
  onGroupJoin: (group: SupportGroup, pseudonym: string) => void;
}

export function GroupSelection({ onGroupJoin }: GroupSelectionProps) {
  usePerformance('GroupSelection');
  const [selectedGroup, setSelectedGroup] = useState<SupportGroup | null>(null);
  const [isJoining, setIsJoining] = useState(false);

  const handleGroupSelect = (group: SupportGroup) => {
    setSelectedGroup(group);
    analytics.trackUserInteraction('group_select', group.category);
  };

  const handleJoinGroup = async () => {
    if (!selectedGroup) return;
    
    setIsJoining(true);
    
    // Simulate joining process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const pseudonym = generatePseudonym();
    analytics.trackGroupActivity('group_join', selectedGroup.category);
    onGroupJoin(selectedGroup, pseudonym);
    
    setIsJoining(false);
  };

  return (
    <div className="px-4 py-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink via-purple-400 to-primary rounded-2xl flex items-center justify-center shadow-card-hover">
          <span className="text-4xl animate-bounce-gentle">💜</span>
        </div>
        <h2 className="text-3xl font-bold text-textPrimary mb-3 leading-tight">
          Peer Support Groups
        </h2>
        <p className="text-textSecondary text-base leading-relaxed max-w-sm mx-auto">
          Join an anonymous group for safe, guided conversations with others who understand
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {SUPPORT_GROUPS.map((group, index) => (
          <button
            key={group.groupId}
            onClick={() => handleGroupSelect(group)}
            className={`w-full p-5 rounded-xl border-2 transition-all duration-300 text-left transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-bg animate-slide-in-right ${
              selectedGroup?.groupId === group.groupId
                ? 'border-pink bg-pink/8 shadow-card-hover'
                : 'border-gray-200 bg-surface hover:border-gray-300 hover:shadow-card'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-pressed={selectedGroup?.groupId === group.groupId}
            aria-describedby={`group-${group.groupId}-description`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${group.color} shadow-inner-sm`}>
                  <span className="text-xl">{getGroupIcon(group.category)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-textPrimary text-lg">{group.name}</h3>
                  <p className="text-sm text-textSecondary font-medium" id={`group-${group.groupId}-description`}>
                    {group.memberCount} members • Active now
                  </p>
                </div>
              </div>
              <div className={`transition-transform duration-200 ${
                selectedGroup?.groupId === group.groupId ? 'rotate-90' : ''
              }`}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-textSecondary"
                  aria-hidden="true"
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
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleJoinGroup}
        disabled={!selectedGroup || isJoining}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-bg transform active:scale-[0.98] ${
          selectedGroup && !isJoining
            ? 'bg-gradient-to-r from-pink to-purple-500 text-white hover:shadow-card-hover hover:scale-[1.02]'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        aria-label={selectedGroup ? `Join ${selectedGroup.name} support group` : 'Select a group to join'}
      >
{isJoining ? (
          <LoadingSpinner size="sm" color="gray" text="Joining Group..." />
        ) : (
          'Join Group'
        )}
      </button>

      {selectedGroup && (
        <div className="mt-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl animate-slide-up border border-gray-200">
          <h4 className="font-semibold text-textPrimary mb-3 text-lg">About this group</h4>
          <p className="text-sm text-textSecondary mb-4 leading-relaxed">
            A safe space for anonymous peer support with guided conversations and professional oversight. Share your experiences and find understanding in a judgment-free environment.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-sm text-textSecondary">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                <span className="font-medium">Moderated</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                <span className="font-medium">Anonymous</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-pink rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                <span className="font-medium">Safe</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
