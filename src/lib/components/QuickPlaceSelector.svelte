<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { globalState } from '$lib/stores/globalState';
  import { get } from 'svelte/store';

  const dispatch = createEventDispatcher();

  export let type: 'gym' | 'work' | 'home' | 'school' | 'emergency';
  export let icon: string = '';
  export let position = { top: '0px', left: '0px' };

  interface Place {
    name: string;
    coords: [number, number];
  }

  let current: Place | null = null;
  let label = '';

  const LABELS = {
    gym: 'Gimnasio',
    work: 'Trabajo',
    home: 'Casa',
    school: 'Escuela',
    emergency: 'Emergencia'
  };

  onMount(() => {
    label = LABELS[type] || 'Sitio';
    const profile = get(globalState);
    const place = profile?.userSession?.quickPlaces?.[type];
    current = place && 'coords' in place ? place as Place : null;
  });

  function openSelector() {
    window.location.href = `/location?type=${type}`;
  }

  function close() {
    dispatch('close');
  }
</script>

<div class="tooltip-container" style={`top: ${position.top}; left: ${position.left};`}>
  <div class="tooltip-box">
    {#if current}
      <p class="place-name">{current.name}</p>
      <div class="label-row">
        <span class="label-tag">MI {label.toUpperCase()}</span>
        {#if icon}
          <img class="label-icon" src={icon} alt="{type}" />
        {/if}
      </div>
    {:else}
      <button class="empty-add" on:click={openSelector} on:keydown={(e) => e.key === 'Enter' && openSelector()} 
        aria-label={`Agrega tu ${label}`}>
        <span class="plus">+</span>
        <p>Agrega tu {label}.</p>
      </button>
    {/if}
  </div>
</div>


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

  .tooltip-container {
    position: absolute;
    transform: translate(-50%, -100%);
    z-index: 999;
  }

  .tooltip-box {
    background: #111;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.6);
    min-width: 180px;
    text-align: center;
    color: white;
    position: relative;
  }

  .empty-add {
    border: 2px dashed #444;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background: none;
    color: inherit;
    font: inherit;
    width: 100%;
    border: 2px dashed #444;
    text-align: center;
  }

  .empty-add .plus {
    font-size: 1.2rem;
    font-weight: bold;
    display: block;
  }

  .place-name {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }

  .label-row {
    margin-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .label-tag {
    background: yellow;
    color: #000;
    padding: 0.15rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .label-icon {
    height: 16px;
    width: 16px;
  }
</style>
