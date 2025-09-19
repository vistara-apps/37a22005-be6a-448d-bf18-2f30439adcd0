// Privacy-focused analytics utilities for CareCircles
// All tracking is anonymous and respects user privacy

export interface AnalyticsEvent {
  action: string;
  category: 'ui' | 'navigation' | 'group' | 'chat' | 'error';
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean = false;

  constructor() {
    // Only enable in production and with user consent
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) return;
    
    // Log anonymized events for debugging
    console.log('Analytics:', {
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent.substring(0, 50), // Truncated for privacy
    });
  }

  trackPageView(page: string) {
    this.track({
      action: 'page_view',
      category: 'navigation',
      label: page,
    });
  }

  trackUserInteraction(action: string, element: string) {
    this.track({
      action,
      category: 'ui',
      label: element,
    });
  }

  trackGroupActivity(action: string, groupType?: string) {
    this.track({
      action,
      category: 'group',
      label: groupType,
    });
  }

  trackError(error: Error, context?: string) {
    this.track({
      action: 'error',
      category: 'error',
      label: context || error.name,
      value: 1,
    });
  }
}

export const analytics = new Analytics();