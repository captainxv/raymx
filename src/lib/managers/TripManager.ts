// /managers/TripManager.ts

import { writable, type Writable } from 'svelte/store';

export type TripStatus = 'idle' | 'pending' | 'accepted' | 'active' | 'completed' | 'cancelled';

export interface Trip {
  id: string | null;
  status: TripStatus;
  pickupLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  dropoffLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  routeData?: any;
  price?: number;
}

export class TripManager {
  // Holds the current trip state.
  tripStore: Writable<Trip>;

  constructor(initialTrip: Trip = { id: null, status: 'idle' }) {
    this.tripStore = writable(initialTrip);
  }

  createTrip(trip: Trip) {
    this.tripStore.set(trip);
  }

  updateTrip(updatedTrip: Partial<Trip>) {
    this.tripStore.update(current => ({ ...current, ...updatedTrip }));
  }

  completeTrip() {
    this.tripStore.update(current => ({ ...current, status: 'completed' }));
  }

  cancelTrip() {
    this.tripStore.update(current => ({ ...current, status: 'cancelled' }));
  }

  resetTrip() {
    this.tripStore.set({ id: null, status: 'idle' });
  }
}

// Export an instance to be used across the app.
export const tripManager = new TripManager();
