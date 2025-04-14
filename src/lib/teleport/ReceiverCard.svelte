<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let receiver = {
      firstName: '',
      lastName: '',
      address: '',
      phone: ''
    };
  
    function saveReceiver() {
      dispatch('updateReceiver', { ...receiver });
    }
  </script>
  
  <style>
    .receiver-card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: fit-content;
      padding: 0.5rem 1rem;
      background-color: #1e90ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #187bcd;
    }
  </style>
  
  <div class="receiver-card">
    <label for="receiver-firstName">First Name</label>
    <input id="receiver-firstName" type="text" bind:value={receiver.firstName} placeholder="Receiver's First Name" />
  
    <label for="receiver-lastName">Last Name</label>
    <input id="receiver-lastName" type="text" bind:value={receiver.lastName} placeholder="Receiver's Last Name" />
  
    <label for="receiver-address">Address</label>
    <input id="receiver-address" type="text" bind:value={receiver.address} placeholder="Receiver's Address" />
  
    <label for="receiver-phone">Phone</label>
    <input id="receiver-phone" type="text" bind:value={receiver.phone} placeholder="Receiver's Phone" />
  
    <button on:click={saveReceiver}>Save Receiver Info</button>
  </div>
  