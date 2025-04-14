<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    // Placeholder active trip data.
    let trip = {
      id: 'trip1',
      status: 'active',
      route: 'Proceeding via Main Street to Downtown...',
      progress: 60 // percentage complete
    };
  
    function endTrip() {
      dispatch('endTrip', { tripId: trip.id });
    }
  </script>
  
  <style>
    .trip-monitor {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 6px;
      margin: 1rem;
      text-align: center;
    }
    .progress-bar {
      width: 100%;
      background: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      margin: 1rem 0;
      height: 20px;
    }
    .progress {
      height: 100%;
      background: #1e90ff;
    }
    button {
      padding: 0.75rem 1.5rem;
      background: #f44336;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  
  <div class="trip-monitor">
    <h2>Trip Monitor</h2>
    <div>ID: {trip.id}</div>
    <div>Status: {trip.status}</div>
    <p>{trip.route}</p>
    <div class="progress-bar">
      <div class="progress" style="width: {trip.progress}%"></div>
    </div>
    <button on:click={endTrip}>End Trip</button>
  </div>
  