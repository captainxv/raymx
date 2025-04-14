<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const emit = (event: string) => dispatch(event);
</script>

<div class="floating-navbar">
  <button class="nav-item" on:click={() => emit('openMenu')} on:keydown={(e) => e.key === 'Enter' && emit('openMenu')}>Menu</button>
  <button class="nav-item" on:click={() => emit('openPrisma')} on:keydown={(e) => e.key === 'Enter' && emit('openPrisma')}>Prisma</button> 
  <button class="nav-item" on:click={() => emit('openSettings')} on:keydown={(e) => e.key === 'Enter' && emit('openSettings')}>Settings</button></div>

<style>
  .floating-navbar {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0;
    z-index: 1000;
  }

  .nav-item {
    font-size: 1rem;
    color: #a5a3a3;
    background: #0E0E0E;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1.5px solid #1e1d1d;
  }

  .nav-item:hover {
    background: rgba(75, 73, 73, 0.4);
  }
</style>