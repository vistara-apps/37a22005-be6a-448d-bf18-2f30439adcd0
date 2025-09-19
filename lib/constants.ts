import { SupportGroup } from './types';

export const SUPPORT_GROUPS: SupportGroup[] = [
  {
    groupId: 'anxiety-1',
    name: 'Anxiety',
    category: 'anxiety',
    color: 'bg-green-100 text-green-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What's one small thing that helped you feel calmer today?",
      "How do you recognize when anxiety is starting to build?",
      "What would you tell a friend experiencing what you're going through?",
    ],
    memberCount: 8,
    isActive: true,
  },
  {
    groupId: 'depression-1',
    name: 'Depression',
    category: 'depression',
    color: 'bg-blue-100 text-blue-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What's one thing you accomplished today, no matter how small?",
      "How do you show yourself compassion on difficult days?",
      "What activities used to bring you joy?",
    ],
    memberCount: 6,
    isActive: true,
  },
  {
    groupId: 'depression-2',
    name: 'Depression',
    category: 'depression',
    color: 'bg-pink-100 text-pink-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What does self-care look like for you right now?",
      "How do you navigate relationships when you're struggling?",
      "What would you want others to understand about your experience?",
    ],
    memberCount: 5,
    isActive: true,
  },
  {
    groupId: 'trauma-1',
    name: 'Trauma',
    category: 'trauma',
    color: 'bg-teal-100 text-teal-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What helps you feel safe and grounded?",
      "How do you practice self-compassion in healing?",
      "What boundaries have been important for your wellbeing?",
    ],
    memberCount: 4,
    isActive: true,
  },
];

export const PSEUDONYM_ADJECTIVES = [
  'Gentle', 'Brave', 'Kind', 'Strong', 'Peaceful', 'Wise', 'Caring', 'Hopeful',
  'Resilient', 'Compassionate', 'Mindful', 'Serene', 'Courageous', 'Loving',
];

export const PSEUDONYM_NOUNS = [
  'Heart', 'Soul', 'Spirit', 'Light', 'Star', 'Moon', 'Sun', 'Ocean',
  'Mountain', 'River', 'Garden', 'Butterfly', 'Phoenix', 'Rainbow',
];

export const GUIDED_PROMPTS = {
  welcome: "Welcome to your support circle. This is a safe space for sharing and healing together.",
  check_in: "How are you feeling right now? What brought you here today?",
  reflection: "Take a moment to reflect on your journey. What's one thing you're grateful for?",
  support: "Is there something specific you'd like support with today?",
  closing: "As we wrap up, what's one positive intention you'd like to set for yourself?",
};
