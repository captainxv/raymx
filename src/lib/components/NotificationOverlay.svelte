<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import NotificationBar from './NotificationBar.svelte';

  const dispatch = createEventDispatcher();

  function closeOverlay() {
    dispatch('close');
  }

  function markAllRead() {
    // Optional: You can hook this into NotificationManager
    console.log('All notifications marked as read.');
  }
</script>

<div class="notification-overlay">
  <div class="content-area">
    <NotificationBar />
  </div>

  <div class="button-row">
    <button class="exit" on:click={closeOverlay}>← Regresar</button>
    <button class="confirm" on:click={markAllRead}>✔ Limpiar</button>
  </div>
</div>

<style>
  .notification-overlay {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    height: 85%;
    background: #0f0f0f;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1500;
  }

  .content-area {
    flex: 1;
    overflow-y: auto;
    color: #fff;
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 1rem;
  }

  .exit, .confirm {
    flex: 1;
    padding: 0.75rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 12px;
    cursor: pointer;
  }

  .exit {
    background: #333;
    color: #ccc;
  }

  .confirm {
    background: #007bff;
    color: #fff;
  }
</style>