export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="animate-pulse space-y-4 w-full max-w-sm px-4">
        <div className="h-8 bg-surface rounded-lg w-3/4 mx-auto shadow-card"></div>
        <div className="space-y-3">
          <div className="h-16 bg-surface rounded-lg shadow-card"></div>
          <div className="h-16 bg-surface rounded-lg shadow-card"></div>
          <div className="h-16 bg-surface rounded-lg shadow-card"></div>
        </div>
        <div className="h-12 bg-pink rounded-lg shadow-card"></div>
      </div>
    </div>
  );
}
