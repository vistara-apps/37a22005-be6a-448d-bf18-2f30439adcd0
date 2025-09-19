import { SupportGroup } from './types';

export const SUPPORT_GROUPS: SupportGroup[] = [
  {
    groupId: 'anxiety-1',
    name: 'Anxiety Support',
    category: 'anxiety',
    color: 'bg-emerald-100 text-emerald-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What's one small thing that helped you feel calmer today?",
      "How do you recognize when anxiety is starting to build?",
      "What would you tell a friend experiencing what you're going through?",
      "What grounding techniques work best for you?",
    ],
    memberCount: 8,
    isActive: true,
  },
  {
    groupId: 'depression-1',
    name: 'Depression Support',
    category: 'depression',
    color: 'bg-blue-100 text-blue-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What's one thing you accomplished today, no matter how small?",
      "How do you show yourself compassion on difficult days?",
      "What activities used to bring you joy?",
      "How do you maintain hope during challenging times?",
    ],
    memberCount: 6,
    isActive: true,
  },
  {
    groupId: 'depression-2',
    name: 'Depression Circle',
    category: 'depression',
    color: 'bg-violet-100 text-violet-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What does self-care look like for you right now?",
      "How do you navigate relationships when you're struggling?",
      "What would you want others to understand about your experience?",
      "What small victories can you celebrate today?",
    ],
    memberCount: 5,
    isActive: true,
  },
  {
    groupId: 'trauma-1',
    name: 'Trauma Recovery',
    category: 'trauma',
    color: 'bg-cyan-100 text-cyan-700',
    creationTimestamp: new Date(),
    guidePrompts: [
      "What helps you feel safe and grounded?",
      "How do you practice self-compassion in healing?",
      "What boundaries have been important for your wellbeing?",
      "How do you celebrate your progress in healing?",
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
