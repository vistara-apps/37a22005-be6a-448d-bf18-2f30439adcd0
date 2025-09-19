export interface User {
  walletAddress: string;
  pseudonym: string;
  struggleTags: string[];
  groupAffiliation?: string;
  joinTimestamp: Date;
}

export interface SupportGroup {
  groupId: string;
  name: string;
  category: 'anxiety' | 'depression' | 'trauma' | 'general';
  color: string;
  creationTimestamp: Date;
  sessionTopic?: string;
  guidePrompts: string[];
  memberCount: number;
  isActive: boolean;
}

export interface Message {
  messageId: string;
  groupId: string;
  senderPseudonym: string;
  content: string;
  timestamp: Date;
  isPrompt?: boolean;
}

export interface SessionLog {
  logId: string;
  groupId: string;
  timestamp: Date;
  summary: string;
  moderatorNotes?: string;
}

export interface GroupMember {
  pseudonym: string;
  joinedAt: Date;
  isActive: boolean;
}
