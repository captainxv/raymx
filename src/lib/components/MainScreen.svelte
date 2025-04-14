<script lang="ts">
  import DashPanel from './DashPanel.svelte';
  import QuickPlaceSelector from './QuickPlaceSelector.svelte';

  let showSelectionScreen = false;
  let showQuickSelector = false;
  let quickSelectorType: 'gym' | 'work' | 'home' | 'school' | 'emergency' = 'gym';
  let quickSelectorPosition = { top: '0px', left: '0px' };
  let quickSelectorIcon = '';

  function handleQuickSelect(event: CustomEvent) {
    const { type, position, icon } = event.detail;
    quickSelectorType = type;
    quickSelectorPosition = position;
    quickSelectorIcon = icon;
    showQuickSelector = true;
  }
</script>

<div class="screen">
  <!-- Header -->
  <header class="zoneheader">
    <p>Ray</p>
  </header>

  <!-- City Map -->
  <main class="zonemap">
    {#if showSelectionScreen}
      <div class="overlay-select">
        <h2>Select</h2>
      </div>
    {/if}

    <!-- Dash Panel -->
    <div class="dashpanel-wrapper">
      <DashPanel on:quickSelect={handleQuickSelect} />
    </div>
  </main>
</div>

{#if showQuickSelector}
  <div
    class="popup-overlay"
    role="button"
    tabindex="0"
    on:click={(e) => {
      const tooltip = document.querySelector('.tooltip-container');
      if (tooltip && !tooltip.contains(e.target as Node)) {
        showQuickSelector = false;
      }
    }}
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === 'Space') {
        const tooltip = document.querySelector('.tooltip-container');
        if (tooltip && !tooltip.contains(e.target as Node)) {
          showQuickSelector = false;
        }
      }
    }}
  >
    <div class="popup-root">
      <QuickPlaceSelector
        type={quickSelectorType}
        position={quickSelectorPosition}
        icon={quickSelectorIcon}
        on:close={() => (showQuickSelector = false)}
      />
    </div>
  </div>
{/if}

<style>
  :global(:focus),
  :global(:focus-visible),
  :global(*:focus),
  :global(*:focus-visible),
  :global([tabindex]:focus),
  :global([tabindex]:focus-visible),
  :global([role="button"]:focus),
  :global([role="button"]:focus-visible) {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }

  .popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  .popup-root :global(.tooltip-container) {
    pointer-events: all;
    z-index: 99;
  }

  .screen {
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 85px 1fr 5px;
    background-image: url('./back1.png');
    background-position: center;
    color: white;
    font-family: 'Inter', sans-serif;
  }

  .zoneheader {
    height: 40px;
    background: #0c0c0c;
    color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: -0.3px;
    z-index: 10;
  }

  .zonemap {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .overlay-select {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    background: rgba(5, 5, 5, 0.9);
    border-radius: 8px;
    color: white;
    font-size: 1.4rem;
    z-index: 30;
    padding: 1rem 2rem;
  }

  .dashpanel-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 88%;
    max-width: 430px;
    z-index: 20;
  }

  .popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 98;
  background: transparent;
}
</style>
