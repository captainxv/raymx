<script lang="ts">
    import { onDestroy } from 'svelte';
    import { notificationManager, type Notification } from '../managers/NotificationManager';
    
    // Local reactive array to hold notifications.
    let notifications: Notification[] = [];
    
    // Subscribe to notifications updates.
    const unsubscribe = notificationManager.notifications.subscribe(value => {
      notifications = value;
    });
    
    // Cleanup subscription on component destruction.
    onDestroy(() => {
      unsubscribe();
    });
  </script>
  
  <style>
    .notification-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: #333;
      color: #fff;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 1000;
      overflow-x: auto;
    }
    .notification {
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .info { background-color: #2196F3; }
    .success { background-color: #4CAF50; }
    .warning { background-color: #FFC107; }
    .error { background-color: #F44336; }
  </style>
  
  <div class="notification-bar">
    {#if notifications.length === 0}
      <span>No notifications</span>
    {:else}
      {#each notifications as notif (notif.id)}
        <div class="notification {notif.type}">
          {notif.message}
        </div>
      {/each}
    {/if}
  </div>
  