<script lang="ts">
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
  
    let mapContainer: HTMLElement;
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FwdGFpbmxvZ2lzdGljcyIsImEiOiJjbTNsZGl1MDAwNTI4MmpvcG0xdzNsOTgzIn0.sEYVbUajiL9bNbFdZP2ouw'; // 🔐 Replace with your token
    const center: [number, number] = [-100.3926, 20.5888]; // Querétaro, MX
  
    onMount(() => {
      mapboxgl.accessToken = MAPBOX_TOKEN;
  
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center,
        zoom: 14,
        pitch: 60,
        bearing: -20,
        antialias: false
      });
  
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    });
  </script>
  
  <div bind:this={mapContainer} class="mapbox-container"></div>
  
  <style>
  .mapbox-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>
  