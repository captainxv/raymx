<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let onComplete = () => {};

	let activated = false;

	function handleTap() {
		if (activated) return;
		activated = true;
		onComplete(); // Launch MainScreen
	}
</script>

<div 
	class="splash" 
	on:click={handleTap}
	on:keydown={(e) => e.key === 'Enter' && handleTap()}
	role="button"
	tabindex="0"
	transition:fade
>
	<img src="/icons/rayblack.svg" alt="Ray Logo" class="logo" transition:fade={{ duration: 2000 }} />
</div>

<style>
	.splash {
		width: 100vw;
		height: 100vh;
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		overflow: hidden;
	}

	.logo {
		width: 180px;
		height: auto;
		animation: pulse 10s infinite ease-in-out;
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.08);
			opacity: 1;
		}
	}
</style>
