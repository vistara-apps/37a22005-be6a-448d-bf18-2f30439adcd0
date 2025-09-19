'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'pink' | 'primary' | 'gray';
  text?: string;
}

export function LoadingSpinner({ size = 'md', color = 'pink', text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    pink: 'border-pink border-t-transparent',
    primary: 'border-primary border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
      </div>
      {text && (
        <span className="text-sm font-medium text-textSecondary animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}