'use client';

interface UserStatusBadgeProps {
  variant: 'anonymous';
}

export function UserStatusBadge({ variant }: UserStatusBadgeProps) {
  if (variant === 'anonymous') {
    return (
      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-xs font-medium">Anonymous</span>
      </div>
    );
  }

  return null;
}
