<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import FloatingNavbar from './FloatingNavbar.svelte';
    
    const dispatch = createEventDispatcher();

    function forward(event: CustomEvent) {
      dispatch(event.type, event.detail)
    }
  
    function openNotification() {
      dispatch('openNotification');
    }
  </script>
  
  <style>
    .footer-bar {
      position: relative;
      left: 0;
      right: 0;
      bottom: 15px;
      height: 60px; /* adjust as needed */
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #151515;
      border-top: 2px solid #373535;
      padding: 0 1.2rem;
      z-index: 1000;
    }

    .notification-bell {
      cursor: pointer;
      width: 50px;
      height: 50px;
      background: url('/static/bell.svg') no-repeat center center;
      background-size: contain;
      transform: scale(0.9);
    }
  </style>
  
  <div class="footer-bar">
    
    <div class="notification-bell" role="button" tabindex="0"
      onclick={openNotification}
      onkeydown={e => e.key === 'Enter' && openNotification()}
    ></div>

    <FloatingNavbar
    on:openMenu={forward}
    on:openSettings={forward}
    on:openPrisma={forward} 
    />

  </div>