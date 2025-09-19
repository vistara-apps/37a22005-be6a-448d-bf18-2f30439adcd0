import { useEffect } from 'react';

export function usePerformance(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Log slow components in development
      if (process.env.NODE_ENV === 'development' && renderTime > 100) {
        console.warn(`Slow component detected: ${componentName} took ${renderTime.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);

  useEffect(() => {
    // Monitor memory usage in development
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
        console.warn(`High memory usage detected: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      }
    }
  }, []);
}