// src/stores/dashState.ts
import { writable } from 'svelte/store';

type DashState = {
  pickup: boolean;
  dropoff: boolean;
  places: {
    gym: boolean;
    work: boolean;
    home: boolean;
    school: boolean;
    emergency: boolean;
  };
  togglePlace: (place: keyof DashState['places']) => void;
  reset: () => void;
  tryAssignPilot: () => void;
};

function createDashState() {
  const { subscribe, update, set } = writable<DashState>({
    pickup: false,
    dropoff: false,
    places: {
      gym: false,
      work: false,
      home: false,
      school: false,
      emergency: false,
    },
    togglePlace: (place) => {},
    reset: () => {},
    tryAssignPilot: () => {},
  });

  return {
    subscribe,
    setPickup: (value: boolean) =>
      update((s) => ({ ...s, pickup: value })),
    setDropoff: (value: boolean) =>
      update((s) => ({ ...s, dropoff: value })),
    togglePlace: (place: keyof DashState['places']) =>
      update((s) => ({
        ...s,
        places: {
          ...s.places,
          [place]: !s.places[place],
        },
      })),
    reset: () =>
      set({
        pickup: false,
        dropoff: false,
        places: {
          gym: false,
          work: false,
          home: false,
          school: false,
          emergency: false,
        },
        togglePlace: () => {},
        reset: () => {},
        tryAssignPilot: () => {},
      }),
    tryAssignPilot: () => {
      console.log('Asignando Piloto...');
    },
  };
}

export const dashState = createDashState();
