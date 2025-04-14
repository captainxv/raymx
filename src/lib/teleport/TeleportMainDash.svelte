<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import SenderCard from './SenderCard.svelte';
    import ReceiverCard from './ReceiverCard.svelte';
    import PackageInfoCard from './PackageInfoCard.svelte';
    import { notificationManager } from '../managers/NotificationManager';
  
    const dispatch = createEventDispatcher();
  
    // Aggregate child data
    let sender: Record<string, any> = {};
    let receiver: Record<string, any> = {};
    let packageInfo: Record<string, any> = {};
  
    // Additional Teleport fields
    let deliveryOption: string = 'Standard';
    let pickupCode: string = '';
    let orderHistory: Array<any> = []; // could be fetched from an endpoint
  
    function handleSenderUpdate(event: CustomEvent) {
      sender = { ...sender, ...event.detail };
    }
    function handleReceiverUpdate(event: CustomEvent) {
      receiver = { ...receiver, ...event.detail };
    }
    function handlePackageUpdate(event: CustomEvent) {
      packageInfo = { ...packageInfo, ...event.detail };
    }
  
    async function confirmTeleport() {
      const teleportData = { sender, receiver, packageInfo, deliveryOption, pickupCode };
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        notificationManager.addNotification({
          id: Date.now().toString(),
          message: 'Teleport request submitted successfully!',
          type: 'success',
          timeout: 3000
        });
        // Save to order history (for demo)
        orderHistory = [ ...orderHistory, teleportData ];
        dispatch('teleportConfirmed', { teleportData });
      } catch (error) {
        notificationManager.addNotification({
          id: Date.now().toString(),
          message: 'Error submitting teleport request.',
          type: 'error',
          timeout: 3000
        });
      }
    }
  </script>
  
  <style>
    .teleport-main {
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
    }
    .section {
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 6px;
    }
    .additional-fields {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
    }
    label {
      font-weight: bold;
    }
    select, input[type="text"] {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button.confirm {
      width: 100%;
      padding: 1rem;
      background-color: #1e90ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button.confirm:hover {
      background-color: #187bcd;
    }
    .order-history {
      margin-top: 1rem;
      border-top: 1px solid #ccc;
      padding-top: 1rem;
    }
    .order-item {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
  </style>
  
  <div class="teleport-main">
    <h2>Teleport Shipping Dashboard</h2>
  
    <div class="section">
      <h3>Sender Details</h3>
      <SenderCard on:updateSender={handleSenderUpdate} />
    </div>
  
    <div class="section">
      <h3>Receiver Details</h3>
      <ReceiverCard on:updateReceiver={handleReceiverUpdate} />
    </div>
  
    <div class="section">
      <h3>Package Information</h3>
      <PackageInfoCard on:updatePackageInfo={handlePackageUpdate} />
    </div>
  
    <div class="section additional-fields">
      <div>
        <label for="delivery-option">Delivery Option:</label>
        <select id="delivery-option" bind:value={deliveryOption}>
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
          <option value="Same Day">Same Day</option>
        </select>
      </div>
      <div>
        <label for="pickup-code">Pickup Code:</label>
        <input id="pickup-code" type="text" bind:value={pickupCode} placeholder="Enter pickup code" />
      </div>
    </div>
  
    <button class="confirm" on:click={confirmTeleport}>Confirm Shipping Request</button>
  
    {#if orderHistory.length > 0}
      <div class="order-history">
        <h3>Order History</h3>
        {#each orderHistory as order, i}
          <div class="order-item">
            Order {i+1}: {order.sender.firstName} to {order.receiver.firstName} – {order.deliveryOption}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  