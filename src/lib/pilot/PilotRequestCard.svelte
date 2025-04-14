<script lang="ts">
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';
    const dispatch = createEventDispatcher();
  
    // Expecting these props from a parent component; use real data from your API/store.
    export let request = {
      id: 'req1',
      pickup: 'Central Station',
      dropoff: 'Main Square',
      distance: '5 km',
      estimatedFare: 'MXN 50'
    };
  
    let countdown: number = 18;
    let timer: number;
  
    onMount(() => {
      timer = setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          clearInterval(timer);
          dispatch('timeout', { requestId: request.id });
        }
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(timer);
    });
  
    function acceptRequest() {
      dispatch('accept', { request });
    }
  
    function rejectRequest() {
      dispatch('reject', { request });
    }
  </script>
  
  <style>
    .request-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 6px;
      margin: 0.5rem 0;
    }
    .details {
      margin-bottom: 1rem;
    }
    .actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }
    button {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button.accept {
      background-color: #4caf50;
      color: #fff;
    }
    button.reject {
      background-color: #f44336;
      color: #fff;
    }
    .countdown {
      font-weight: bold;
      color: red;
    }
  </style>
  
  <div class="request-card">
    <div class="details">
      <div>Pickup: {request.pickup}</div>
      <div>Dropoff: {request.dropoff}</div>
      <div>Distance: {request.distance}</div>
      <div>Estimated Fare: {request.estimatedFare}</div>
    </div>
    <div class="actions">
      <button class="accept" on:click={acceptRequest}>Accept</button>
      <button class="reject" on:click={rejectRequest}>Reject</button>
    </div>
    <div class="countdown">Time left: {countdown} seconds</div>
  </div>
  