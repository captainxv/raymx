<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let isActive: boolean = false;
  
    function toggleActivation() {
      isActive = !isActive;
      dispatch('activationChange', { active: isActive });
    }
  </script>
  
  <style>
    .activation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      max-width: 300px;
      margin: 1rem auto;
    }
    .status {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .active {
      color: red;
      animation: pulse 1s infinite alternate;
    }
    .inactive {
      color: green;
    }
    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #1e90ff;
      color: #fff;
    }
    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }
  </style>
  
  <div class="activation">
    <div class="status {isActive ? 'active' : 'inactive'}">
      {isActive ? 'Active & Available' : 'Inactive'}
    </div>
    <button on:click={toggleActivation}>
      {isActive ? 'Stop Availability' : 'Activate for Rides'}
    </button>
  </div>
  