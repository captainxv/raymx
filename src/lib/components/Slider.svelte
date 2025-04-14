<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let touchStartX = 0;
  let touchEndX = 0;
  let buttons: { prev: HTMLElement | null; next: HTMLElement | null } | null = null;
  let slidesWrapper: HTMLElement | null = null;

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.changedTouches[0].screenX;
  }

  function handleTouchMove(event: TouchEvent) {
    touchEndX = event.changedTouches[0].screenX;
  }

  function handleTouchEnd() {
    const deltaX = touchEndX - touchStartX;
    const threshold = 50;
    if (Math.abs(deltaX) > threshold) {
      deltaX < 0 ? change(1)() : change(-1)();
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      buttons = {
        prev: document.querySelector('.slider--btn__prev'),
        next: document.querySelector('.slider--btn__next')
      };

      if (buttons.prev && buttons.next) {
        buttons.prev.addEventListener('click', change(-1));
        buttons.next.addEventListener('click', change(1));
      }

      slidesWrapper = document.querySelector('.slides__wrapper');
      if (slidesWrapper) {
        slidesWrapper.addEventListener('touchstart', handleTouchStart as EventListener);
        slidesWrapper.addEventListener('touchmove', handleTouchMove as EventListener);
        slidesWrapper.addEventListener('touchend', handleTouchEnd as EventListener);
      }
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      if (buttons?.prev && buttons?.next) {
        buttons.prev.removeEventListener('click', change(-1));
        buttons.next.removeEventListener('click', change(1));
      }

      if (slidesWrapper) {
        slidesWrapper.removeEventListener('touchstart', handleTouchStart as EventListener);
        slidesWrapper.removeEventListener('touchmove', handleTouchMove as EventListener);
        slidesWrapper.removeEventListener('touchend', handleTouchEnd as EventListener);
      }
    }
  });

  function change(direction: number) {
    return () => {
      if (typeof window === 'undefined') return;

      let current = {
        slide: document.querySelector('.slide[data-current]') as HTMLElement,
        slideInfo: document.querySelector('.slide-info[data-current]') as HTMLElement,
        slideBg: document.querySelector('.slide__bg[data-current]') as HTMLElement,
      };
      let previous = {
        slide: document.querySelector('.slide[data-previous]') as HTMLElement,
        slideInfo: document.querySelector('.slide-info[data-previous]') as HTMLElement,
        slideBg: document.querySelector('.slide__bg[data-previous]') as HTMLElement,
      };
      let next = {
        slide: document.querySelector('.slide[data-next]') as HTMLElement,
        slideInfo: document.querySelector('.slide-info[data-next]') as HTMLElement,
        slideBg: document.querySelector('.slide__bg[data-next]') as HTMLElement,
      };

      Object.values(current).forEach(el => el?.removeAttribute('data-current'));
      Object.values(previous).forEach(el => el?.removeAttribute('data-previous'));
      Object.values(next).forEach(el => el?.removeAttribute('data-next'));

      if (direction === 1) {
        const temp = current;
        current = next;
        next = previous;
        previous = temp;

        current.slide?.style.setProperty('z-index', '20');
        previous.slide?.style.setProperty('z-index', '30');
        next.slide?.style.setProperty('z-index', '10');
      } else {
        const temp = current;
        current = previous;
        previous = next;
        next = temp;

        current.slide?.style.setProperty('z-index', '20');
        previous.slide?.style.setProperty('z-index', '10');
        next.slide?.style.setProperty('z-index', '30');
      }

      Object.values(current).forEach(el => el?.setAttribute('data-current', ''));
      Object.values(previous).forEach(el => el?.setAttribute('data-previous', ''));
      Object.values(next).forEach(el => el?.setAttribute('data-next', ''));
    };
  }
</script>


<div class="slider">
  
  <button class="slider--btn slider--btn__prev" aria-label="Previous slide">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  </button>

  <div class="slides__wrapper">
    <div class="slides">
      <!-- slide 1 -->
      <div class="slide" data-current>
        <div class="slide__inner">
          <div class="slide--image__wrapper">
            <img class="slide--image" 
              src="https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg" 
              alt="Scottish Highlands mountains landscape" />
          </div>
        </div>
      </div>
      <!-- Removed slide background for transparency -->
      <!--
      <div class="slide__bg" style="--bg: url(https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg); --dir: 0" data-current></div>
      -->
      <!-- slide 2 -->
      <div class="slide" data-next>
        <div class="slide__inner">
          <div class="slide--image__wrapper">
            <img class="slide--image" 
              src="https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg" 
              alt="Machu Picchu ancient ruins in Peru" />
          </div>
        </div>
      </div>
      <!--
      <div class="slide__bg" style="--bg: url(https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg); --dir: 1" data-next></div>
      -->

      <!-- slide 3 -->
      <div class="slide" data-previous>
        <div class="slide__inner">
          <div class="slide--image__wrapper">
            <img class="slide--image" 
              src="https://devloop01.github.io/voyage-slider/images/chamonix.jpg" 
              alt="Chamonix mountain landscape in France" />
          </div>
        </div>
      </div>
      <!--
      <div class="slide__bg" style="--bg: url(https://devloop01.github.io/voyage-slider/images/chamonix.jpg); --dir: -1" data-previous></div>
      -->
    </div>
    <div class="slides--infos">
      <!-- Slide Info 1 -->
      <div class="slide-info" data-current>
        <div class="slide-info__inner">
          <div class="slide-info--text__wrapper">
            <div data-title class="slide-info--text">
              <span>Highlands</span>
            </div>
            <div data-subtitle class="slide-info--text">
              <span>Scotland</span>
            </div>
            <div data-description class="slide-info--text">
              <span>The mountains are calling</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide Info 2 -->
      <div class="slide-info" data-next>
        <div class="slide-info__inner">
          <div class="slide-info--text__wrapper">
            <div data-title class="slide-info--text">
              <span>Machu Pichu</span>
            </div>
            <div data-subtitle class="slide-info--text">
              <span>Peru</span>
            </div>
            <div data-description class="slide-info--text">
              <span>Adventure is never far away</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide Info 3 -->
      <div class="slide-info" data-previous>
        <div class="slide-info__inner">
          <div class="slide-info--text__wrapper">
            <div data-title class="slide-info--text">
              <span>Chamonix</span>
            </div>
            <div data-subtitle class="slide-info--text">
              <span>France</span>
            </div>
            <div data-description class="slide-info--text">
              <span>Let your dreams come true</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="slider--btn slider--btn__next" 
    aria-label="Next slide">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  </button>
</div>


<style>
  @import url("https://api.fontshare.com/v2/css?f[]=archivo@100,200,300,400,500,600,700,800,900&f[]=clash-display@200,300,400,500,600,700&display=swap");

  :root {
    --slide-width: min(25vw, 300px);
    --slide-aspect: 2 / 3;

    --slide-transition-duration: 800ms;
    --slide-transition-easing: ease;

    --font-archivo: "Archivo", sans-serif;
    --font-clash-display: "Clash Display", sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .slider {
    width: 390px;
    height: 250px;
    display: flex;
    align-items: center;
    background: transparent;
    object-fit: contain;
  }

  .slider--btn {
    --size: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 999;
  }

  .slider--btn svg {
    width: var(--size);
    height: var(--size);
    stroke: white;
  }

  .slider--btn:hover {
    opacity: 1;
  }

  .slides__wrapper {
    width: 390px;
    height: 100px;
    display: grid;
    place-items: center;
    background: transparent;
  }
  
  .slides__wrapper > * {
    grid-area: 1 / -1;
  }

  .slides,
  .slides--infos {
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: grid;
    place-items: center;
  }
  .slides > *,
  .slides--infos > * {
    grid-area: 1 / -1;
  }

  /* ------------------------------------------------ */
  /* -------------------- SLIDE --------------------- */
  /* ------------------------------------------------ */
  .slide {
    --slide-tx: 0px;
    --slide-ty: 0vh;
    --padding: 0px;
    --offset: 0;

    width: var(--slide-width);
    height: auto;
    aspect-ratio: var(--slide-aspect);
    user-select: none;
    perspective: 800px;
    transform: perspective(1000px)
      translate3d(var(--slide-tx), var(--slide-ty), var(--slide-tz, 0))
      rotateY(var(--slide-rotY)) scale(var(--slide-scale));
    transition: transform var(--slide-transition-duration)
      var(--slide-transition-easing);
  }

  .slide[data-current] {
    --slide-scale: 1.2;
    --slide-tz: 0px;
    --slide-tx: 0px;
    --slide-rotY: 0;
    pointer-events: auto;
  }

  .slide[data-next] {
    --slide-tx: calc(1 * var(--slide-width) * 1.07);
    --slide-rotY: -45deg;
  }

  .slide[data-previous] {
    --slide-tx: calc(-1 * var(--slide-width) * 1.07);
    --slide-rotY: 45deg;
  }

  .slide:not([data-current]) {
    --slide-scale: 1;
    --slide-tz: 0;
    pointer-events: none;
  }

  .slide[data-current] .slide--image {
    filter: brightness(0.8);
  }

  .slide:not([data-current]) .slide--image {
    filter: brightness(0.5);
  }

  .slide__inner {
    /* Removed tilt transforms since tilt functionality is removed */
    position: relative;
    left: calc(var(--padding) / 2);
    top: calc(var(--padding) / 2);
    width: calc(100% - var(--padding));
    height: calc(100% - var(--padding));
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg);
  }

  .slide--image__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .slide--image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%) scale(1.2);
    transition: filter var(--slide-transition-duration)
                       var(--slide-transition-easing);
  }

  /* ------------ SLIDE INFO ---------------- */
  .slide-info {
    --padding: 0px;
    position: relative;
    width: var(--slide-width);
    height: 100%;
    aspect-ratio: var(--slide-aspect);
    user-select: none;
    perspective: 800px;
    z-index: 100;
  }

  .slide-info[data-current] .slide-info--text span {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 250ms;
  }

  .slide-info:not([data-current]) .slide-info--text span {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transition-delay: 0ms;
  }

  .slide-info__inner {
    position: relative;
    left: calc(var(--padding) / 2);
    top: calc(var(--padding) / 2);
    width: calc(100% - var(--padding));
    height: calc(100% - var(--padding));
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg);
  }

  .slide-info--text__wrapper {
    --z-offset: 45px;
    position: absolute;
    height: fit-content;
    left: -15%;
    bottom: 15%;
    transform: translateZ(var(--z-offset));
    z-index: 2;
    pointer-events: none;
  }

  .slide-info--text {
    font-family: var(--font-clash-display);
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    transition: var(--slide-transition-duration) var(--slide-transition-easing);
    transition-property: opacity, transform;
  }

  .slide-info--text[data-title],
  .slide-info--text[data-subtitle] {
    font-size: min(3cqw, 2.4rem);
    font-weight: 800;
    letter-spacing: 0.2cqw;
    text-transform: uppercase;
  }

  .slide-info--text[data-subtitle] {
    margin-left: 2cqw;
    font-size: min(2.2cqw, 1.8rem);
    font-weight: 600;
  }

  .slide-info--text[data-description] {
    margin-left: 1cqw;
    font-size: min(1.5cqw, 0.95rem);
    font-family: var(--font-archivo);
    font-weight: 300;

  }  </style>
