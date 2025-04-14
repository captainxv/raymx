<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function close() {
    dispatch('close');
  }
</script>

<div class="floating-panel">
  <div class="content-area">
    <h2>PRISMA Settings & Copilot Preferences</h2>

    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" placeholder="Enter your full name" />

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" />

    <h3>Copilot Preferences</h3>
    <label><input type="checkbox" id="trunkUse" /> Trunk Use</label>
    <label>Windows Level <input type="number" id="windowsLevel" value="50" /></label>
    <label><input type="checkbox" id="privacyToggle" /> Punto Medio (Privacy Toggle)</label>
    <label>Music Volume <input type="number" id="musicVolume" value="50" /></label>
    <label>AC Temperature <input type="number" id="acTemp" value="22" /></label>
  </div>

  <!-- Exit Button -->
  <div class="button-row">
    <button class="exit" on:click={close}>← Regresar</button>
    <button class="confirm">✔ Seleccionar</button>
  </div>
</div>

<style>
  .floating-panel {
    position: absolute;
    bottom: 60px; /* Above bottom nav */
    left: 0;
    right: 0;
    height: 85%;
    background: #0f0f0f;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.7);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1200;
  }

  .content-area {
    overflow-y: auto;
    padding-bottom: 1rem;
    color: #fff;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"] {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0 1rem 0;
    border-radius: 6px;
    border: 1px solid #333;
    background: #222;
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