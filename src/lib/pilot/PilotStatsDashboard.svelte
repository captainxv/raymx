<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    // Placeholder statistics for the pilot.
    let stats = {
      pilotType: 'ZEN',
      starcoins: 120,
      tripsCompleted: 15,
      rushStatus: 'Not Joined' // or 'Joined'
    };
  
    function joinRush() {
      stats.rushStatus = 'Joined';
      dispatch('joinedRush', { status: stats.rushStatus });
    }
  </script>
  
  <style>
    .stats-dashboard {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 6px;
      margin: 1rem;
      max-width: 600px;
    }
    .stat {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    button {
      padding: 0.75rem 1.5rem;
      background: #1e90ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #187bcd;
    }
  </style>
  
  <div class="stats-dashboard">
    <h2>Pilot Stats Dashboard</h2>
    <div class="stat">Pilot Type: {stats.pilotType}</div>
    <div class="stat">Starcoins: {stats.starcoins}</div>
    <div class="stat">Trips Completed: {stats.tripsCompleted}</div>
    <div class="stat">Rush Program: {stats.rushStatus}</div>
    {#if stats.rushStatus !== 'Joined'}
      <button on:click={joinRush}>Join Rush Program</button>
    {/if}
  </div>
  