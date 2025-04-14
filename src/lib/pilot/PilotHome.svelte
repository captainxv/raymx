<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    // Placeholder values; replace with data from your store or API as needed.
    let pilotType: string = 'REX'; 
    let starcoins: number = 150;
  
    function goToActivation() {
      dispatch('navigate', { page: 'activation' });
    }
  
    function viewTripMonitor() {
      dispatch('navigate', { page: 'tripMonitor' });
    }
  
    function viewStats() {
      dispatch('navigate', { page: 'stats' });
    }
  </script>
  
  <style>
    .pilot-home {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pilot-type {
      font-weight: bold;
    }
    .starcoins {
      color: gold;
    }
    .actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    button {
      padding: 0.75rem 1.5rem;
      border: none;
      background: #1e90ff;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #187bcd;
    }
  </style>
  
  <div class="pilot-home">
    <div class="header">
      <div><span class="pilot-type">Pilot Type: {pilotType}</span></div>
      <div><span class="starcoins">Starcoins: {starcoins}</span></div>
    </div>
    <div class="actions">
      <button on:click={goToActivation}>Activate for Ride Requests</button>
      <button on:click={viewTripMonitor}>Monitor Active Trip</button>
      <button on:click={viewStats}>View Stats</button>
    </div>
  </div>
  