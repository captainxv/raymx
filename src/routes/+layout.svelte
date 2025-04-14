<script lang="ts">
  import FooterBar from '$lib/components/FooterBar.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import UserSettings from '$lib/components/UserSettings.svelte';
  import PRISMASettings from '$lib/components/PRISMASettings.svelte';
  import NotificationOverlay from '$lib/components/NotificationOverlay.svelte';

  let showSideMenu = false;
  let showUserSettings = false;
  let showPrismaSettings = false;
  let notificationOverlayOpen = false;

  function handleOpenNotification() {
    notificationOverlayOpen = true;
  }

  // Close all overlays
  function closeAll() {
    showSideMenu = false;
    showUserSettings = false;
    showPrismaSettings = false;
    notificationOverlayOpen = false;
  }
</script>

<!-- Full-screen centered frame -->
<div class="screen-bg">
  <div class="phone-frame">
    <main>
      <slot />
    </main>

    <footer>
      <FooterBar 
        on:openMenu={() => {
          closeAll();
          showSideMenu = true;
        }}
        on:openSettings={() => {
          closeAll();
          showUserSettings = true;
        }}
        on:openPrisma={() => {
          closeAll();
          showPrismaSettings = true;
        }}
        on:openNotification={handleOpenNotification}
        on:toggleSideMenu={() => showSideMenu = !showSideMenu}
      />
    </footer>

    {#if showSideMenu}
      <SideMenu on:close={closeAll} />
    {/if}

    {#if showUserSettings}
      <UserSettings on:close={closeAll} />
    {/if}

    {#if showPrismaSettings}
      <PRISMASettings on:close={closeAll} />
    {/if}

    {#if notificationOverlayOpen}
      <NotificationOverlay on:close={closeAll} />
    {/if}
  </div>
</div>

<style>
  .screen-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0;
    gap: 0;
    left: 0;
    top: 0;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .phone-frame {
    width: 390px;
    height: 100%;
    max-height: 844px;
    background: #111;
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    border-radius: 24px;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    overflow: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    will-change: transform;
  }

  main {
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  footer {
    height: 60px;
    position: relative;
    z-index: 10;
  }
</style>