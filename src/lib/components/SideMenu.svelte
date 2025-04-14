<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<div class="floating-panel">
  <div class="content-area">
    <h2>Ray Menu</h2>
    <ul>
      <li><button>Mi cuenta</button></li>
      <li><button>Historial</button></li>
      <li><button>Soporte</button></li>
      <li><button>Salir</button></li>
    </ul>
  </div>

  <!-- Back / Confirm Buttons -->
  <div class="button-row">
    <button class="exit" on:click={close}>← Regresar</button>
    <button class="confirm">✔ Seleccionar</button>
  </div>
</div>

<style>
  .floating-panel {
    position: absolute;
    bottom: 60px;
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
    color: #fff;
    padding-bottom: 1rem;
  }

  h2 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li button {
    width: 100%;
    background: #1b1b1b;
    border: 1px solid #333;
    border-radius: 10px;
    color: #eee;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
    cursor: pointer;
  }

  li button:hover {
    background: #272727;
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