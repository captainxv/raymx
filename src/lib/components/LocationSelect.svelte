<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { sessionManager } from '$lib/managers/SessionManager';
    import { globalState } from '$lib/stores/globalState';
    import { get } from 'svelte/store';
    import DashLocation from '$lib/components/DashLocation.svelte';
    import Slider from '$lib/components/Slider.svelte';
    import SliderBase from '$lib/components/SliderBase.svelte';
    import Favorites from '$lib/components/Favorites.svelte';
  
    let type = 'gym';
    let search = '';
    let results: { name: string, coords: [number, number] }[] = [];
    
    onMount(() => {
      try {
        const pageStore = get(page);
        if (pageStore?.url?.searchParams) {
          type = pageStore.url.searchParams.get('type') || 'gym';
        }
      } catch (error) {
        console.error('Error accessing page store:', error);
        type = 'gym';
      }

      function setRealVh() {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      }

      window.addEventListener('resize', setRealVh);
      window.addEventListener('orientationchange', setRealVh);
      setRealVh();
    });
    
    function searchPlace() {
    results = [
        { name: `${search} Central`, coords: [20.6, -100.4] },
        { name: `${search} Plaza`, coords: [20.7, -100.3] },
        { name: `${search} Norte`, coords: [20.5, -100.5] }
      ];
    }
  
    function selectPlace(place: { name: string, coords: [number, number] }) {
      try {
        const profile = get(globalState);
        if (!profile?.userSession) {
          console.error('No user session found');
          return;
        }
        
        const updated = { 
          ...(profile.userSession.quickPlaces || {}), 
          [type]: place 
        };
        
        sessionManager.updateSession({ quickPlaces: updated });
        window.history.back();
      } catch (error) {
        console.error('Error updating session:', error);
      }
    }

</script>

<div class="screen">
  <header class="zoneheader">
    <p>Select Location</p>
  </header>

  <div class="sliderbase">
    <SliderBase />
  </div>

  <main class="zonemap">

    <div class="slider">
      <Slider />
      </div>

    <div class="favorites">
      <Favorites />
    </div>

    <div class="dash-section">
      <DashLocation />
    </div>


  </main>
</div>

<style>
  
  .screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 390px;
    height: 100%;
    height: var(--app-height);
    background-image: url('./space.jpeg');
    background-position: bottom;
    background-size: cover;
    color: white;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    isolation: isolate;
  }

  .slider {
    position: absolute;
    height: 200px;
    width: 10px;
    top: 5%;
    object-fit: contain;
    z-index: 2;
    transform: translateZ(0);
  }

  .sliderbase {
    position: absolute;
    height: 150px;
    width: 390px;
    top: 12em;
    left: -25px;
    object-fit: contain;
    transform: translateZ(0);
  }

  .favorites {
    position: relative;
    height: 180px;
    width: 390px;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    z-index: 1;
    transform: translateZ(0);
    will-change: transform;
  }

  .zoneheader {
    width: 390px;
    height: 40px;
    background: #0c0c0c;
    color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: -0.3px;
    font-size: 1rem;
    position: relative;
    z-index: 20;
    padding-top: env(safe-area-inset-top, 0px);
    flex-shrink: 0;
  }

  .zonemap {
    position: relative;
    width: 390px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: visible;
    transform: translateZ(0);
    will-change: transform;
  }

  .dash-section {
    position: relative;
    width: 390px;
    margin-top: auto;
    top: -5.5rem;
    z-index: 1;
    transform: translateZ(0);
    will-change: transform;
    background: transparent;
    height: 260px;
  }

  @supports (-webkit-touch-callout: none) {
    .screen {
      height: -webkit-fill-available;
    }
  }

</style>