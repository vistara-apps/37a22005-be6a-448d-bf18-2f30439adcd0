import { PSEUDONYM_ADJECTIVES, PSEUDONYM_NOUNS } from './constants';

export function generatePseudonym(): string {
  const adjective = PSEUDONYM_ADJECTIVES[Math.floor(Math.random() * PSEUDONYM_ADJECTIVES.length)];
  const noun = PSEUDONYM_NOUNS[Math.floor(Math.random() * PSEUDONYM_NOUNS.length)];
  const number = Math.floor(Math.random() * 99) + 1;
  return `${adjective}${noun}${number}`;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getGroupIcon(category: string): string {
  switch (category) {
    case 'anxiety':
      return '🌱';
    case 'depression':
      return '💙';
    case 'trauma':
      return '🌊';
    default:
      return '💜';
  }
}

export function getRandomPrompt(prompts: string[]): string {
  return prompts[Math.floor(Math.random() * prompts.length)];
}
