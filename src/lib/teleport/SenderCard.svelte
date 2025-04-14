<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let sender = {
      firstName: '',
      lastName: '',
      address: '',
      phone: ''
    };
  
    function saveSender() {
      dispatch('updateSender', { ...sender });
    }
  </script>
  
  <style>
    .sender-card {
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
  
  <div class="sender-card">
    <label for="sender-firstName">First Name</label>
    <input id="sender-firstName" type="text" bind:value={sender.firstName} placeholder="Sender's First Name" />
  
    <label for="sender-lastName">Last Name</label>
    <input id="sender-lastName" type="text" bind:value={sender.lastName} placeholder="Sender's Last Name" />
  
    <label for="sender-address">Address</label>
    <input id="sender-address" type="text" bind:value={sender.address} placeholder="Sender's Address" />
  
    <label for="sender-phone">Phone</label>
    <input id="sender-phone" type="text" bind:value={sender.phone} placeholder="Sender's Phone" />
  
    <button on:click={saveSender}>Save Sender Info</button>
  </div>
  