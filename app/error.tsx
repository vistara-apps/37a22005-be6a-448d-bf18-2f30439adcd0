'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 bg-pink rounded-full flex items-center justify-center">
          <span className="text-2xl">💔</span>
        </div>
        <h2 className="text-2xl font-semibold text-textPrimary mb-4">
          Something went wrong
        </h2>
        <p className="text-textSecondary mb-6">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-pink text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
