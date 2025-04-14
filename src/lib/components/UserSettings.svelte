<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function close() {
    dispatch('close');
  }
</script>

<div class="floating-panel">
  <div class="content-area">
    <h2>User Settings</h2>

    <label for="notifications">Enable Notifications</label>
    <input type="checkbox" id="notifications" />

    <label for="sound">Sound Effects</label>
    <input type="checkbox" id="sound" />

    <label for="language">Language</label>
    <select id="language">
      <option>English</option>
      <option>Español</option>
    </select>

    <label for="theme">Theme</label>
    <select id="theme">
      <option>Dark</option>
      <option>Light</option>
    </select>  </div>

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
    padding-bottom: 1rem;
    color: #fff;
  }

  select {
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
