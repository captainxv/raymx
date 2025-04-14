<script lang="ts">
    import SplashScreen from '$lib/components/SplashScreen.svelte';
    import MainScreen from '$lib/components/MainScreen.svelte';
    import LocationSelect from '$lib/components/LocationSelect.svelte';
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
  
    let splashComplete = false;   // track the splash screen completion
    let selectorVisible = false;  // toggle for LocationSelect display
  
    // Called when the SplashScreen triggers onComplete
    const handleSplashEnd = () => {
      splashComplete = true;
    };
  
    // Show the LocationSelect on pickup/dropoff taps
    function openSelector() {
      selectorVisible = true;
    }
  
    // Hide the LocationSelect
    function closeSelector() {
      selectorVisible = false;
    }
  </script>
  
  {#if !splashComplete}
    <!-- Splash Screen remains until it calls handleSplashEnd -->
    <SplashScreen onComplete={handleSplashEnd} />
  {:else}
    <!-- We apply the fade transition to this wrapper. 
         Removed aria-live to prevent extra containers or layout side effects. -->
    <div transition:fade>
      <!-- Main Screen with events to open the selector -->
      <MainScreen 
        on:pickupTap={openSelector}
        on:dropoffTap={openSelector}
        showSelectionScreen={false}
      />
  
      {#if selectorVisible}
        <!-- Scale transition for LocationSelect; no aria-live here either. -->
        <div transition:scale={{ duration: 900, easing: cubicOut }}>
          <LocationSelect onClose={closeSelector} />
        </div>
      {/if}
    </div>
  {/if}
  
  <style>
    :global(body) {
      /* Remove default margins to prevent global overflow/padding issues */
      margin: 0;
      background-color: rgb(15, 15, 14);
      height: 100vh;
    }
  </style>