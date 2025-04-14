// /managers/SessionManager.ts

import { writable, type Writable } from 'svelte/store';

export interface Session {
  loggedIn: boolean;
  prismaId: string | null;
  email?: string;
  quickPlaces?: {
    gym?: { name: string; coords?: [number, number] };
    work?: { name: string; coords?: [number, number] };
    home?: { name: string; coords?: [number, number] };
    school?: { name: string; coords?: [number, number] };
    emergency?: { name: string; coords?: [number, number] };
  };
}

export class SessionManager {
  sessionStore: Writable<Session>;

  constructor(initialSession: Session = { loggedIn: false, prismaId: null }) {
    this.sessionStore = writable(initialSession);
  }

  login(sessionData: Session) {
    this.sessionStore.set({
      loggedIn: true,
      prismaId: sessionData.prismaId,
      email: sessionData.email,
    });
  }

  logout() {
    this.sessionStore.set({ loggedIn: false, prismaId: null });
  }

  updateSession(data: Partial<Session>) {
    try {
      this.sessionStore.update(current => {
        if (!current) {
          console.error('No current session found');
          return { loggedIn: false, prismaId: null };
        }
        
        return {
          ...current,
          ...data,
          quickPlaces: {
            ...(current.quickPlaces || {}),
            ...(data.quickPlaces || {})
          }
        };
      });
    } catch (error) {
      console.error('Error updating session:', error);
    }
  }
}

// Export an instance for global use.
export const sessionManager = new SessionManager();
