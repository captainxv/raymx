// /stores/globalState.ts

import { writable } from 'svelte/store';
import type { Session } from '$lib/managers/SessionManager';
import type { TripStatus } from '$lib/managers/TripManager';

export interface GlobalState {
  userSession: Session;
  currentTrip: {
    id: string | null;
    status: TripStatus;
  };
  // For additional global states when needed (e.g., notification count)
}

const initialState: GlobalState = {
  userSession: { loggedIn: false, prismaId: null },
  currentTrip: { id: null, status: 'idle' }
};

export const globalState = writable(initialState);
