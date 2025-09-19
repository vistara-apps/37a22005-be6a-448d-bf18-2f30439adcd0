'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { GroupSelection } from '../components/GroupSelection';
import { ChatRoom } from '../components/ChatRoom';
import { SupportGroup } from '../lib/types';

export default function HomePage() {
  const [selectedGroup, setSelectedGroup] = useState<SupportGroup | null>(null);
  const [userPseudonym, setUserPseudonym] = useState<string>('');

  const handleGroupJoin = (group: SupportGroup, pseudonym: string) => {
    setSelectedGroup(group);
    setUserPseudonym(pseudonym);
  };

  const handleLeaveGroup = () => {
    setSelectedGroup(null);
    setUserPseudonym('');
  };

  return (
    <AppShell>
      {selectedGroup ? (
        <ChatRoom
          group={selectedGroup}
          userPseudonym={userPseudonym}
          onLeaveGroup={handleLeaveGroup}
        />
      ) : (
        <GroupSelection onGroupJoin={handleGroupJoin} />
      )}
    </AppShell>
  );
}
