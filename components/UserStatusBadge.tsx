'use client';

interface UserStatusBadgeProps {
  variant: 'anonymous';
}

export function UserStatusBadge({ variant }: UserStatusBadgeProps) {
  if (variant === 'anonymous') {
    return (
      <div 
        className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 shadow-inner-sm"
        role="status"
        aria-label="Your identity is anonymous"
      >
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <span className="text-xs font-semibold">Anonymous</span>
      </div>
    );
  }

  return null;
}
