<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let packageInfo = {
      type: '',
      weight: '',
      dimensions: '',
      description: ''
    };
  
    function savePackageInfo() {
      dispatch('updatePackageInfo', { ...packageInfo });
    }
  </script>
  
  <style>
    .package-info-card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input, textarea, select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: fit-content;
      padding: 0.5rem 1rem;
      background-color: #1e90ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #187bcd;
    }
  </style>
  
  <div class="package-info-card">
    <label for="package-type">Package Type</label>
    <select id="package-type" bind:value={packageInfo.type}>
      <option value="" disabled selected>Select Package Type</option>
      <option value="document">Document</option>
      <option value="book">Book</option>
      <option value="laptop">Laptop</option>
      <option value="clothing">Clothing</option>
      <option value="other">Other</option>
    </select>
  
    <label for="package-weight">Weight (kg)</label>
    <input id="package-weight" type="number" bind:value={packageInfo.weight} placeholder="Enter weight" />
  
    <label for="package-dimensions">Dimensions (LxWxH in cm)</label>
    <input id="package-dimensions" type="text" bind:value={packageInfo.dimensions} placeholder="e.g., 30x20x10" />
  
    <label for="package-description">Description</label>
    <textarea id="package-description" rows="3" bind:value={packageInfo.description} placeholder="Enter a description"></textarea>
  
    <button on:click={savePackageInfo}>Save Package Info</button>
  </div>
  