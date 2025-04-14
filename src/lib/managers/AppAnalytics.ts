// src/lib/managers/AppAnalytics.ts

export interface AnalyticsEvent {
    timestamp: number;
    type: string;
    details?: any;
  }
  
  class AppAnalytics {
    events: AnalyticsEvent[] = [];
  
    logEvent(type: string, details?: any) {
      const event: AnalyticsEvent = { timestamp: Date.now(), type, details };
      this.events.push(event);
      console.log('[Analytics]', event);
      // Optionally: Send event to a backend logging endpoint
    }
  
    getEvents(): AnalyticsEvent[] {
      return this.events;
    }
  
    clearEvents() {
      this.events = [];
      console.log('[Analytics] Events cleared.');
    }
  }
  
  export const appAnalytics = new AppAnalytics();
  