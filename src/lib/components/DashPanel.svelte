<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { globalState } from '$lib/stores/globalState';
  import { get } from 'svelte/store';
  import { onMount, onDestroy } from 'svelte';


  const dispatch = createEventDispatcher<{
    quickSelect: { type: 'gym' | 'work' | 'home' | 'school' | 'emergency', position: { top: string, left: string }, icon: string };
    pickupTap: void;
    dropoffTap: void;
  }>();

  function isQuickPlaceActive(type: typeof quickSelectorType): boolean {
    const profile = get(globalState);
    return !!profile?.userSession.quickPlaces?.[type];
  }

  function handlePickupTap(event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') return;
    dispatch('pickupTap', undefined);
  }

  function handleDropoffTap(event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') return;
    dispatch('dropoffTap', undefined);
  }

  import QuickPlaceSelector from './QuickPlaceSelector.svelte';

  let showQuickSelector = false;
  let quickSelectorType: 'gym' | 'work' | 'home' | 'school' | 'emergency' = 'gym';

  function openQuickSelector(type: typeof quickSelectorType, event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') return;

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const position = {
      top: `${rect.top + window.scrollY}px`,
      left: `${rect.left + window.scrollX + rect.width / 2}px`
    };

    const icon = `/icons/${type}.svg`;

    dispatch('quickSelect', { type, position, icon });

    quickSelectorType = type;
    showQuickSelector = true;
  }

    let popupRef: HTMLElement | null = null;

    function handleClickOutside(event: MouseEvent) {
    if (popupRef && !popupRef.contains(event.target as Node)) {
    showQuickSelector = false;
    }
  }

    onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

    onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  
</script>

  
  <div class="main-frame">
    <div class="dash">
      <div data-svg-wrapper class="dashbg">
  <svg width="430" height="286" viewBox="0 0 430 286" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_935_2556)">
  <path d="M-0.673828 26.2285C-0.673828 24.4843 -0.673828 23.6122 -0.144851 23.0379C0.384127 22.4636 1.24147 22.3931 2.95615 22.2521C24.9506 20.4435 141.976 11.125 218.292 11.125C294.437 11.125 405.761 20.4015 427.074 22.2398C428.771 22.3862 429.62 22.4594 430.147 23.033C430.673 23.6067 430.673 24.4753 430.673 26.2125V267.125C430.673 269.011 430.673 269.953 430.087 270.539C429.501 271.125 428.558 271.125 426.673 271.125H3.32617C1.44055 271.125 0.497745 271.125 -0.0880417 270.539C-0.673828 269.953 -0.673828 269.011 -0.673828 267.125V26.2285Z" 
  fill="url(#paint0_linear_935_2556)"/>
  <path d="M430.173 26.2125V267.125C430.173 268.082 430.172 268.749 430.104 269.253C430.038 269.742 429.918 270.001 429.733 270.186C429.549 270.37 429.29 270.49 428.801 270.556C428.297 270.624 427.63 270.625 426.673 270.625H3.32617C2.36923 270.625 1.70182 270.624 1.19825 270.556C0.709069 270.49 0.45002 270.37 0.265512 270.186C0.081003 270.001 -0.0392944 269.742 -0.105063 269.253C-0.172766 268.749 -0.173828 268.082 -0.173828 267.125V26.2285C-0.173828 25.3429 -0.172836 24.7271 -0.111891 24.259C-0.0528184 23.8053 0.0554085 23.5585 0.222905 23.3766C0.39132 23.1938 0.626614 23.0664 1.06672 22.9712C1.52188 22.8728 2.12619 22.8221 2.99712 22.7505C24.9949 20.9416 142 11.625 218.292 11.625C294.412 11.625 405.716 20.8995 427.031 22.7379C427.893 22.8123 428.491 22.8649 428.942 22.9644C429.377 23.0606 429.61 23.188 429.778 23.3711C429.945 23.5528 430.052 23.799 430.111 24.2509C430.172 24.7172 430.173 25.3304 430.173 26.2125Z" 
  stroke="url(#paint1_linear_935_2556)"/>
  </g>
  <defs>
  <filter id="filter0_d_935_2556" x="-13.0738" y="0.725" width="456.147" height="284.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="2"/>
  <feGaussianBlur stdDeviation="6.2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_935_2556"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_935_2556" result="shape"/>
  </filter>
  <linearGradient id="paint0_linear_935_2556" x1="78.0552" y1="48.5" x2="141.039" y2="245.569" gradientUnits="userSpaceOnUse">
  <stop stop-color="#242321"/>
  <stop offset="0.541102" stop-color="#2C2C28"/>
  <stop offset="0.841102" stop-color="#151410"/>
  <stop offset="1" stop-color="#191913"/>
  </linearGradient>
  <linearGradient id="paint1_linear_935_2556" x1="112.933" y1="30.5879" x2="327.536" y2="109.86" gradientUnits="userSpaceOnUse">
  <stop stop-color="#3F3B3B"/>
  <stop offset="0.49" stop-color="#2D2C2C"/>
  <stop offset="1" stop-color="#464646"/>
  </linearGradient>
  </defs>
  </svg>
  
      </div>
  
      <div data-svg-wrapper class="screendash">
  <svg width="398" height="85" viewBox="0 0 398 85" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.52973 20.2328C1.5952 16.1821 4.60699 12.8297 8.63916 12.4368C35.7524 9.79478 135.766 0.559127 203.478 1.12448C268.383 1.66639 364.001 11.718 390.482 14.635C394.52 15.0798 397.503 18.4874 397.503 22.5498V76.1246C397.503 80.5429 393.921 84.1246 389.503 84.1246H8.62741C4.15856 84.1246 0.556242 80.4636 0.62846 75.9953L1.52973 20.2328Z" fill="url(#paint0_linear_935_2559)" stroke="url(#paint1_linear_935_2559)"/>
  <defs>
  <linearGradient id="paint0_linear_935_2559" x1="31.2655" y1="9.92358" x2="41.835" y2="102.136" gradientUnits="userSpaceOnUse">
  <stop stop-color="#141309"/>
  <stop offset="0.53" stop-color="#111312"/>
  <stop offset="0.92" stop-color="#10100F"/>
  <stop offset="1" stop-color="#0F0D02"/>
  </linearGradient>
  <linearGradient id="paint1_linear_935_2559" x1="199" y1="9.92361" x2="199" y2="84.1217" gradientUnits="userSpaceOnUse">
  <stop stop-color="#234436"/>
  <stop offset="1" stop-color="#154232"/>
  </linearGradient>
  </defs>
  </svg>
  
      </div>
  
      <div data-svg-wrapper class="commonplaces">

            <svg width="245" height="17" viewBox="0 0 245 17" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g opacity=".43">
            
            <g onclick={(e) => openQuickSelector('home', e)} 
              onkeydown={(e) => openQuickSelector('home', e)}
              class:active-icon={isQuickPlaceActive('home')}
              class:inactive-icon={!isQuickPlaceActive('home')} 
              role="button" tabindex="0" style="cursor:pointer;" aria-label="home">
            <path d="M122.201.931a1.195 1.195 0 0 1 1.598 0l3.352 2.998.678.607.148-.898.213-1.29a.4.4 0 0 1 .05-.13l-.426-.264.426.263a.34.34 0 0 1 .219-.158.35.35 0 0 1 .364.14.4.4 0 0 1 .057.127l.488-.112-.488.112a.4.4 0 0 1 .005.14l-.389 2.355-.044.271.204.183 2.238 2.002a.36.36 0 0 1-.22.612.35.35 0 0 1-.245-.076l-.388-.347-.733-.655-.098.978-.67 6.742c-.03.301-.17.58-.392.781a1.2 1.2 0 0 1-.807.313h-8.683c-.297 0-.585-.111-.806-.313a1.22 1.22 0 0 1-.392-.78l-.669-6.743-.098-.977-.733.654-.389.346a.347.347 0 0 1-.481-.04.36.36 0 0 1 .016-.495zm-4.684 5.142-.238.213.093.305q.009.026.014.07l.775 7.8.045.45h9.588l.044-.45.775-7.8h.001a.3.3 0 0 1 .014-.072l.09-.304-.236-.211-5.149-4.607-.333-.299-.334.299z" 
            stroke="url(#a)"/></g>
          
            <g onclick={(e) => openQuickSelector('school', e)} 
              onkeydown={(e) => openQuickSelector('school', e)} 
              class:active-icon={isQuickPlaceActive('school')}
              class:inactive-icon={!isQuickPlaceActive('school')} 
              role="button" tabindex="0" style="cursor:pointer;" aria-label="school">
            <path d="M174.299 13.59a1.85 1.85 0 0 1-.74-.634 1.6 1.6 0 0 1-.263-.893V7.937l-2.294-1.139a.9.9 0 0 1-.383-.322.8.8 0 0 1-.119-.43q0-.235.119-.43a.9.9 0 0 1 .383-.322l8.076-3.954q.215-.108.443-.162.227-.054.465-.053.238 0 .467.054.228.054.441.16l9.104 4.47q.24.108.371.313a.8.8 0 0 1 .131.44v5.501a.8.8 0 0 1-.275.613.98.98 0 0 1-.681.247.98.98 0 0 1-.68-.248.79.79 0 0 1-.276-.612V6.992l-1.911.945v4.126q0 .495-.263.893a1.83 1.83 0 0 1-.741.633l-4.779 2.321q-.214.108-.441.162a2.1 2.1 0 0 1-.933 0 2 2 0 0 1-.442-.162zm5.687-4.363 6.547-3.18-6.547-3.181-6.547 3.18zm0 5.179 4.779-2.321V8.84l-3.847 1.912a2.1 2.1 0 0 1-.932.215q-.238 0-.478-.053a2 2 0 0 1-.454-.162l-3.847-1.912v3.245z" 
            fill="url(#b)"/></g>
            
            <g onclick={(e) => openQuickSelector('work', e)} 
              onkeydown={(e) => openQuickSelector('work', e)} 
              class:active-icon={isQuickPlaceActive('work')}
              class:inactive-icon={!isQuickPlaceActive('work')} 
              role="button" tabindex="0" style="cursor:pointer;" aria-label="work">
            <path d="M69.429 3.343s0-2.218-2.429-2.218-2.429 2.218-2.429 2.218m-2.428 11.782V3.343m9.714 11.782V3.343m3.643 0h-17v11.782h17z" stroke="url(#c)" 
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>

            <g onclick={(e) => openQuickSelector('gym', e)} 
              onkeydown={(e) => openQuickSelector('gym', e)} 
              class:active-icon={isQuickPlaceActive('gym')}
              class:inactive-icon={!isQuickPlaceActive('gym')} 
              role="button" tabindex="0" style="cursor:pointer;" aria-label="gym">
            <path d="M6.644 3.125h-2.25c-.128 0-.251.071-.342.197a.83.83 0 0 0-.14.477v9.88a1 1 0 0 0 .036.258q.037.124.104.219a.5.5 0 0 0 .157.146.4.4 0 0 0 .184.051h2.251a.4.4 0 0 0 .185-.051.5.5 0 0 0 .156-.146.7.7 0 0 0 .105-.219 1 1 0 0 0 .036-.258V3.8c0-.179-.05-.35-.14-.477-.091-.126-.214-.197-.342-.197m9.646 0h-2.25c-.129 0-.251.071-.342.197a.83.83 0 0 0-.14.477v9.88q0 .134.036.258.037.124.104.219a.5.5 0 0 0 .157.146.4.4 0 0 0 .184.051h2.251a.4.4 0 0 0 .185-.051.5.5 0 0 0 .156-.146.7.7 0 0 0 .105-.219 1 1 0 0 0 .036-.258V3.8c0-.179-.05-.35-.14-.477-.091-.126-.214-.197-.342-.197" stroke="url(#d)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.127 8.74h6.43M1.5 11.434v-5.39c0-.178.05-.35.141-.476s.213-.197.341-.197H3.43c.128 0 .25.071.341.197.09.127.141.298.141.477v5.39c0 .178-.05.35-.14.476s-.214.197-.342.197H1.982c-.128 0-.25-.071-.34-.197a.83.83 0 0 1-.142-.477m17.684 0v-5.39c0-.178-.05-.35-.141-.476s-.213-.197-.341-.197h-1.447c-.128 0-.25.071-.341.197a.83.83 0 0 0-.141.477v5.39c0 .178.05.35.141.476s.213.197.341.197h1.447c.128 0 .25-.071.34-.197a.83.83 0 0 0 .142-.477" 
            stroke="url(#e)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>

            <g onclick={(e) => openQuickSelector('emergency', e)} 
              onkeydown={(e) => openQuickSelector('emergency', e)}
              class:active-icon={isQuickPlaceActive('emergency')}
              class:inactive-icon={!isQuickPlaceActive('emergency')} 
              role="button" tabindex="0" style="cursor:pointer;" aria-label="emergency">
            <path d="M241.5 10.525h-3v2.8h-3v-2.8h-3v-2.8h3v-2.8h3v2.8h3m1.5-5.6h-12c-.825 0-1.5.63-1.5 1.4v11.2c0 .77.675 1.4 1.5 1.4h12c.825 0 1.5-.63 1.5-1.4v-11.2c0-.77-.675-1.4-1.5-1.4m0 12.6h-12v-11.2h12z" 
            fill="url(#f)"/></g>
          
            <defs>
              
            <linearGradient id="a" x1="123" y1="-.332" x2="123" y2="16.125" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            <linearGradient id="b" x1="180.5" y1=".696" x2="180.5" y2="16.125" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            <linearGradient id="c" x1="67" y1=".725" x2="67" y2="15.125" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            <linearGradient id="d" x1="10.342" y1="2.804" x2="10.342" y2="14.353" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            <linearGradient id="e" x1="10.342" y1="5.179" x2="10.342" y2="12.108" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            <linearGradient id="f" x1="237" y1="1.725" x2="237" y2="16.125" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2B7D1B"/>
            <stop offset="1" stop-color="#5DBB4A"/>
            </linearGradient>
            </defs>
            </svg>
        
        
  
      </div>
  
      <div class="teleportmain"></div>
  
      <div class="lightcentral">
        <div data-svg-wrapper class="central3teleport">
  <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.0554 5.04485C24.0739 -0.0122371 14.617 -0.758767 8.31942 2.27302C8.12393 2.39774 7.88829 2.60677 7.93542 2.84917C9.77687 2.60677 11.559 2.36436 13.4353 2.4557C23.9621 2.81053 32.9896 12.8175 21.9304 20.3373C21.7611 20.448 21.1014 20.5867 21.4312 20.9064C21.6197 21.0838 22.2952 20.8414 22.564 20.7624C29.7727 18.8038 35.1697 11.4281 29.0554 5.04309V5.04485Z" fill="url(#paint0_linear_935_2579)" fill-opacity="0.39"/>
  <path d="M22.9412 22.828C17.3261 23.5166 11.3689 22.5013 7.39448 18.3471C3.92627 14.7163 4.49878 9.72422 8.24452 6.52028C8.84495 6.00913 10.1401 5.38731 10.538 4.88143C10.7737 4.57931 10.5712 4.55296 10.2884 4.56701C9.25513 4.61268 6.82023 5.71403 5.86896 6.23748C1.77413 8.50342 -1.09364 13.0704 0.971226 17.6374C4.40627 25.2187 17.0172 26.7381 23.9274 23.1284L24.1979 22.7999C23.7668 22.4925 23.3619 22.7736 22.943 22.8263L22.9412 22.828Z" fill="url(#paint1_linear_935_2579)" fill-opacity="0.39"/>
  <path d="M12.1246 13.5553C16.5842 14.2193 15.05 18.1065 15.9367 21.1893L16.1392 21.1243L16.2404 18.7986C16.4499 17.4619 16.3888 15.549 17.4552 14.539C18.8795 13.183 22.2605 13.4183 24.17 13.19C24.821 13.0846 24.0652 12.8843 23.8331 12.8756C22.1051 12.7175 18.7381 12.8158 17.4622 11.5915C16.8478 11.0013 16.483 9.65231 16.3888 8.83376L16.1182 4.86925C15.9018 4.82358 15.8145 4.99396 15.7883 5.17137C15.4916 7.0983 15.9576 10.1389 14.4042 11.6249C13.1283 12.851 9.91663 12.6595 8.19562 12.8703C7.44682 12.9616 7.23737 13.1847 8.14849 13.2444L8.12231 13.2515C9.41743 13.3375 10.8278 13.3428 12.1246 13.5589V13.5553Z" fill="url(#paint2_linear_935_2579)" fill-opacity="0.39"/>
  <defs>
  <linearGradient id="paint0_linear_935_2579" x1="15.9872" y1="4.86176" x2="15.9872" y2="21.1893" gradientUnits="userSpaceOnUse">
  <stop stop-color="#E9E243"/>
  <stop offset="1" stop-color="#45430D"/>
  </linearGradient>
  <linearGradient id="paint1_linear_935_2579" x1="15.9872" y1="4.86176" x2="15.9872" y2="21.1893" gradientUnits="userSpaceOnUse">
  <stop stop-color="#E9E243"/>
  <stop offset="1" stop-color="#45430D"/>
  </linearGradient>
  <linearGradient id="paint2_linear_935_2579" x1="15.9872" y1="4.86176" x2="15.9872" y2="21.1893" gradientUnits="userSpaceOnUse">
  <stop stop-color="#E9E243"/>
  <stop offset="1" stop-color="#45430D"/>
  </linearGradient>
  </defs>
  </svg>
  
        </div>
        <div class="central2pilotlaunch">
          <div class="raycentral"></div>
        </div>
      </div>
  
  <div data-svg-wrapper class="fixedcentralx">
  <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_935_2583)">
  <path d="M42.1424 1.2149L41.6451 1.125C19.1891 1.14298 1.01767 19.3026 1.00002 41.5816C0.993678 49.578 2.89848 55.5436 6.21626 61.3964C31.8726 50.563 42.1424 31.854 42.1424 1.2149Z" 
  fill="url(#paint0_linear_935_2583)"/>
  <path d="M34.3586 51.6934C40.4698 36.412 41.2382 23.3475 41.2382 23.3475C41.2382 23.3475 38.5714 36.6119 33.4184 45.8606C24.9115 61.1329 15.7085 67.0746 11.3149 69.1824C13.3761 71.5082 15.6994 73.5887 18.2307 75.3876H18.285C18.285 75.3785 28.2474 66.9747 34.3586 51.6934Z" 
  fill="url(#paint1_linear_935_2583)"/>
  <path d="M40.271 57.467C41.6722 41.9858 41.9344 25.9685 41.9344 25.9685C41.9344 25.9685 39.0234 47.4188 36.6548 56.7038C34.214 66.2797 26.9456 79.9711 26.9456 79.9711L26.8913 80.0801C29.8023 81.2249 32.867 82.0334 36.0582 82.4786L36.2842 82.3696C36.2842 82.3696 38.7883 73.8749 40.271 57.4761V57.467Z" 
  fill="url(#paint2_linear_935_2583)"/>
  <path d="M77.4267 61.3964C80.5727 55.6005 82.3536 48.9611 82.3536 41.9045C82.3536 19.8096 64.8426 1.8234 42.9922 1.125L42.6668 1.18849C42.6668 31.628 52.6292 50.3942 77.4267 61.3964Z" 
  fill="url(#paint3_linear_935_2583)"/>
  <path d="M72.4816 68.9553C67.7897 66.4659 59.2918 60.3243 51.3906 46.1423C46.2376 36.8935 43.5708 23.6291 43.5708 23.6291C43.5708 23.6291 44.3301 36.6936 50.4504 51.975C55.6576 64.9941 63.6583 73.0164 65.9093 75.106C68.3231 73.3071 70.5199 71.2357 72.4816 68.9553Z" 
  fill="url(#paint4_linear_935_2583)"/>
  <path d="M42.8746 26.0639C42.8746 26.0639 43.1277 42.0812 44.529 57.5624C45.9302 73.089 48.2536 81.5201 48.4977 82.3832C51.6889 81.8381 54.7626 80.9296 57.6555 79.6849C56.4802 77.4227 50.3509 65.4393 48.1451 56.7992C45.7765 47.5141 42.8746 26.0639 42.8746 26.0639Z" 
  fill="url(#paint4_linear_935_2583)"
  stroke="url(#paint5_linear_935_2583)" 
  stroke-width="0.5"/>
  
  <path d="M42.1424 1.2149L41.6451 1.125C19.1891 1.14298 1.01767 19.3026 1.00002 41.5816C0.993678 49.578 2.89848 55.5436 6.21626 61.3964C31.8726 50.563 42.1424 31.854 42.1424 1.2149Z" 
  stroke="url(#paint6_linear_935_2583)" 
  stroke-width="0.5"/>
  <path d="M34.3586 51.6934C40.4698 36.412 41.2382 23.3475 41.2382 23.3475C41.2382 23.3475 38.5714 36.6119 33.4184 45.8606C24.9115 61.1329 15.7085 67.0746 11.3149 69.1824C13.3761 71.5082 15.6994 73.5887 18.2307 75.3876H18.285C18.285 75.3785 28.2474 66.9747 34.3586 51.6934Z" 
  stroke="url(#paint7_linear_935_2583)" 
  stroke-width="0.5"/>
  <path d="M40.271 57.467C41.6722 41.9858 41.9344 25.9685 41.9344 25.9685C41.9344 25.9685 39.0234 47.4188 36.6548 56.7038C34.214 66.2797 26.9456 79.9711 26.9456 79.9711L26.8913 80.0801C29.8023 81.2249 32.867 82.0334 36.0582 82.4786L36.2842 82.3696C36.2842 82.3696 38.7883 73.8749 40.271 57.4761V57.467Z" 
  stroke="url(#paint8_linear_935_2583)" 
  stroke-width="0.5"/>
  <path d="M77.4267 61.3964C80.5727 55.6005 82.3536 48.9611 82.3536 41.9045C82.3536 19.8096 64.8426 1.8234 42.9922 1.125L42.6668 1.18849C42.6668 31.628 52.6292 50.3942 77.4267 61.3964Z" 
  stroke="url(#paint9_linear_935_2583)" 
  stroke-width="0.5"/>
  <path d="M72.4816 68.9553C67.7897 66.4659 59.2918 60.3243 51.3906 46.1423C46.2376 36.8935 43.5708 23.6291 43.5708 23.6291C43.5708 23.6291 44.3301 36.6936 50.4504 51.975C55.6576 64.9941 63.6583 73.0164 65.9093 75.106C68.3231 73.3071 70.5199 71.2357 72.4816 68.9553Z" 
  stroke="url(#paint10_linear_935_2583)"
  stroke-width="0.5"/>
  <path d="M42.8746 26.0639C42.8746 26.0639 43.1277 42.0812 44.529 57.5624C45.9302 73.089 48.2536 81.5201 48.4977 82.3832C51.6889 81.8381 54.7626 80.9296 57.6555 79.6849C56.4802 77.4227 50.3509 65.4393 48.1451 56.7992C45.7765 47.5141 42.8746 26.0639 42.8746 26.0639Z" 
  stroke="url(#paint10_linear_935_2583)" 
  stroke-width="0.5"/>
  </g>

  <defs>
  <filter id="filter0_i_935_2583" x="0.75" y="0.874023" width="81.8535" height="83.8623" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="2"/>
  <feGaussianBlur stdDeviation="3.15"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.0879122 0 0 0 0 0.085677 0 0 0 0 0.0730106 0 0 0 0.49 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_935_2583"/>
  </filter>
  <linearGradient id="paint0_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint1_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint2_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint3_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint4_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint5_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1D1C05"/>
  <stop offset="0.568651" stop-color="#0C0C01"/>
  <stop offset="1" stop-color="#1D1C05"/>
  </linearGradient>
  <linearGradient id="paint6_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  <linearGradient id="paint7_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  <linearGradient id="paint8_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  <linearGradient id="paint9_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  <linearGradient id="paint10_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  <linearGradient id="paint11_linear_935_2583" x1="24.848" y1="26.4355" x2="10.9507" y2="77.5142" gradientUnits="userSpaceOnUse">
  <stop stop-color="#4F4C0C"/>
  <stop offset="0.568651" stop-color="#100E03"/>
  <stop offset="1" stop-color="#4D4B0E"/>
  </linearGradient>
  </defs>
  </svg>
  
      </div>
  

  <div data-svg-wrapper class="pickup-button" onclick={handlePickupTap} onkeydown={handlePickupTap} role="button" tabindex="0">
    
    <svg width="120" height="125" viewBox="0 0 120 125" fill="none" xmlns="http://www.w3.org/2000/svg">
  
      <path d="M107.419 1.12506C110.635 1.12504 112.666 4.80367 111.121 7.62413C101.625 24.9531 80.3183 73.8896 113.56 117.107C115.689 119.874 113.827 124.125 110.336 124.125H5.00002C2.79088 124.125 1.00001 122.334 1.00001 120.125L1 5.12592C1 2.9168 2.79084 1.12593 4.99997 1.12592L107.419 1.12506Z" fill="url(#paint0_linear_1034_404)" stroke="url(#paint1_linear_1034_404)"/>
      <path d="M45.6471 56.9098V85.7344C45.6471 86.3684 45.8888 86.9765 46.319 87.4248C46.7492 87.8731 47.3327 88.125 47.9412 88.125C48.5496 88.125 49.1331 87.8731 49.5634 87.4248C49.9936 86.9765 50.2353 86.3684 50.2353 85.7344V70.5937C50.2353 70.1711 50.3964 69.7657 50.6832 69.4668C50.9701 69.1679 51.3591 69 51.7647 69C52.1703 69 52.5593 69.1679 52.8462 69.4668C53.133 69.7657 53.2941 70.1711 53.2941 70.5937V85.7344C53.2941 86.3684 53.5358 86.9765 53.966 87.4248C54.3963 87.8731 54.9798 88.125 55.5882 88.125C56.1967 88.125 56.7802 87.8731 57.2104 87.4248C57.6407 86.9765 57.8824 86.3684 57.8824 85.7344V58.6406C57.8824 58.4293 57.9629 58.2266 58.1063 58.0771C58.2497 57.9277 58.4442 57.8437 58.6471 57.8437C58.8499 57.8437 59.0444 57.9277 59.1878 58.0771C59.3312 58.2266 59.4118 58.4293 59.4118 58.6406V66.6094C59.4118 67.2434 59.6535 67.8515 60.0837 68.2998C60.5139 68.7481 61.0974 69 61.7059 69C62.3143 69 62.8978 68.7481 63.3281 68.2998C63.7583 67.8515 64 67.2434 64 66.6094V57.8437C64 55.3076 63.0332 52.8754 61.3123 51.082C59.5914 49.2887 57.2573 48.2812 54.8235 48.2812H46.3689C45.8942 48.2807 45.4261 48.165 45.0016 47.9434L43.9922 47.4174C43.5711 47.1981 43.2167 46.8611 42.9688 46.444C42.7208 46.0269 42.5891 45.5461 42.5882 45.0555V39.5156C42.5882 38.8816 42.3465 38.2735 41.9163 37.8252C41.4861 37.3769 40.9026 37.125 40.2941 37.125C39.6857 37.125 39.1022 37.3769 38.6719 37.8252C38.2417 38.2735 38 38.8816 38 39.5156V46.1552C38 48.4342 39.2358 50.5221 41.1934 51.5389L44.1176 53.0625C45.0965 54.0825 45.6471 55.4659 45.6471 56.9098Z" fill="#AAA7A4"/>
  <path d="M51.7647 46.6875C52.9816 46.6875 54.1486 46.1838 55.0091 45.2871C55.8695 44.3904 56.3529 43.1743 56.3529 41.9062C56.3529 40.6382 55.8695 39.4221 55.0091 38.5254C54.1486 37.6287 52.9816 37.125 51.7647 37.125C50.5478 37.125 49.3808 37.6287 48.5203 38.5254C47.6599 39.4221 47.1765 40.6382 47.1765 41.9062C47.1765 43.1743 47.6599 44.3904 48.5203 45.2871C49.3808 46.1838 50.5478 46.6875 51.7647 46.6875Z" fill="#AAA7A4"/>
  <defs>
  <linearGradient id="paint0_linear_1034_404" x1="69.2843" y1="4.03949" x2="57.5406" y2="196.98" gradientUnits="userSpaceOnUse">
  <stop stop-color="#977414"/>
  <stop offset="0.44" stop-color="#372D07"/>
  <stop offset="1" stop-color="#544E12"/>
  </linearGradient>
  <linearGradient id="paint1_linear_1034_404" x1="59.1423" y1="-3.99902" x2="55.6219" y2="139.425" gradientUnits="userSpaceOnUse">
  <stop stop-color="#339B19"/>
  <stop offset="0.44" stop-color="#0F620E"/>
  <stop offset="1" stop-color="#112D06"/>
  </linearGradient>
  </defs>
  </svg>
  
  </div>

  <div data-svg-wrapper class="dropoff-button" onclick={handleDropoffTap} onkeydown={handleDropoffTap} role="button" tabindex="0">
  
  <svg width="138" height="148" viewBox="0 0 138 148" fill="none" xmlns="http://www.w3.org/2000/svg">

  <g filter="url(#filter0_d_1034_402)"></g>


  <path d="M19.0812 11.1251C15.865 11.125 13.8335 14.8037 15.3791 17.6241C24.8753 34.9531 46.1817 83.8896 12.94 127.107C10.8114 129.874 12.6728 134.125 16.1641 134.125H121.5C123.709 134.125 125.5 132.334 125.5 130.125L125.5 15.1259C125.5 12.9168 123.709 11.1259 121.5 11.1259L19.0812 11.1251Z" 
  fill="url(#paint0_linear_1034_402)"/>
  <path d="M121.5 11.6259L19.0812 11.6251C16.2732 11.625 14.4409 14.8715 15.8176 17.3838C25.3235 34.7306 46.7791 83.9329 13.3363 127.412C11.4295 129.891 13.1379 133.625 16.1641 133.625H121.5C123.433 133.625 125 132.058 125 130.125L125 15.1259C125 13.1929 123.433 11.6259 121.5 11.6259Z" 
  stroke="url(#paint1_linear_1034_402)"/>
  

  <svg viewBox="-20 -5 60.312 28.895">
  <g fill="#fff" fill-opacity=".70">

  <path d="m13.44 11.056-2.69 4.653a.535.535 0 0 1-.747.205.56.56 0 0 1-.205-.761l3.006-5.198ZM18.975.863c.432.051 1.011.278 1.538.586 1.831 1.062 2.52 2.695 4.3 3.72.776.448 1.457.616 1.78.8.373.219.549.585.314.988l-2.944 5.105c-.33.571-.79.732-1.318.681-.432-.051-1.004-.278-1.531-.593-1.831-1.062-2.527-2.688-4.3-3.72-.6-.338-1.134-.52-1.479-.653l-.27.466-.635-1.1 3.234-5.591c.33-.572.791-.74 1.311-.689m.44 8.328c.512.556 1.01 1.12 1.633 1.59L22 9.131a10.3 10.3 0 0 1-1.67-1.523ZM22 9.132c.14.103.279.183.462.286.527.307 1.003.505 1.399.608l1.003-1.729a6 6 0 0 1-1.406-.608c-.161-.088-.308-.197-.462-.285Zm-5.222-3.838-.864 1.487c.469.132 1.04.454 1.45.689.125.073.242.139.359.22l.952-1.641a4.5 4.5 0 0 0-.55-.352c-.614-.351-1.098-.447-1.347-.403m1.897.755c.652.483 1.091.974 1.655 1.56l.996-1.736c-.527-.55-.981-1.07-1.648-1.545Zm2.651-.176c.513.564 1.026 1.077 1.67 1.53l.872-1.515c-.681-.455-1.194-.975-1.685-1.495Zm-3.552-2.307c.264-.051.74.044 1.348.395.154.096.38.242.556.367l.872-1.531a8 8 0 0 0-.593-.388c-.19-.11-.74-.425-1.26-.447Z"/>
  <path d="M17.87 15.914a.566.566 0 0 0 .197-.761L10.208 1.552C9.878.98 9.418.812 8.89.863c-.432.051-1.01.278-1.53.586-1.832 1.062-2.528 2.695-4.307 3.72-.777.448-1.458.616-1.78.8-.374.219-.542.585-.315.988l2.944 5.105c.33.571.791.732 1.318.681.433-.051 1.011-.278 1.531-.593 1.839-1.062 2.527-2.688 4.307-3.72.593-.338 1.135-.52 1.48-.653l4.577 7.932a.545.545 0 0 0 .754.205M8.186 4.328l-.872-1.531c.183-.132.381-.264.593-.388.19-.11.74-.425 1.268-.447l.922 1.604c-.263-.051-.747.044-1.355.395-.153.096-.38.242-.556.367m1.955 3.361L9.19 6.05c.183-.132.315-.22.55-.352.622-.351 1.098-.447 1.354-.403l.857 1.487c-.468.132-1.04.454-1.45.689-.124.073-.241.139-.359.22m-2.607-.08-.996-1.736c.527-.55.989-1.07 1.648-1.545L9.19 6.05c-.644.484-1.084.975-1.655 1.56m-2.659-.205-.871-1.516c.68-.455 1.194-.975 1.677-1.495l.857 1.48c-.513.564-1.018 1.077-1.663 1.53m1.948 3.376-.952-1.648A10.6 10.6 0 0 0 7.535 7.61l.915 1.58c-.512.556-1.003 1.12-1.625 1.59m-2.82-.754L3.01 8.297c.3-.08.813-.263 1.406-.608.161-.088.3-.197.461-.285l.996 1.728a4 4 0 0 1-.461.286c-.535.307-1.003.505-1.406.608"/>
  </g>
  </svg>


  <defs>

  <filter id="filter0_d_1034_402" x="0.0371094" y="0.125" width="137.463" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1034_402"/>
  <feOffset dy="1"/>
  <feGaussianBlur stdDeviation="5"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_dropShadow_1034_402"/>
  </filter>

  <linearGradient id="paint0_linear_1034_402" x1="80.7751" y1="-27.811" x2="78.4279" y2="229.36" gradientUnits="userSpaceOnUse">
  <stop stop-color="#2E9714"/>
  <stop offset="0.44" stop-color="#0A2F0A"/>
  <stop offset="1" stop-color="#0A1A04"/>
  </linearGradient>

  <linearGradient id="paint1_linear_1034_402" x1="67.3577" y1="6.00098" x2="70.8781" y2="149.425" gradientUnits="userSpaceOnUse">
  <stop stop-color="#339B19"/>
  <stop offset="0.44" stop-color="#0F620E"/>
  <stop offset="1" stop-color="#112D06"/>
  </linearGradient>
  </defs>
  </svg>
  
      </div>
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

    .main-frame {
      width: 430px;
      height: 260px;
      position: absolute;
      top: 10rem;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    .teleportmain {
      width: 176px;
      height: 176px;
      left: 127px;
      top: 84px;
      position: absolute;
      background: linear-gradient(180deg, #212005 0%, #0A0B03 53%, #131002 100%);
      box-shadow: 0px 0px 15.2px #150F03 inset;
      border-radius: 9999px;
      border: 1.2px #4B390F solid;
    }
  
    .raycentral {
      width: 110px;
      height: 110px;
      background: linear-gradient(136deg, #584616 0%, #3C330E 44%, #191704 100%);
      border-radius: 9999px;
      border: 1px #6C5C17 solid;
    }
  
    .central2pilotlaunch {
      left: 0px;
      top: 36.83px;
      position: absolute;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
  
    .screendash {
      left: 16.5px;
      top: 17.97px;
      position: absolute;
    }
  
    .commonplaces {
      left: 93.5px;
      top: 51px;
      position: absolute;
    }

    .active-icon path {
      stroke: limegreen !important;
      fill: limegreen !important;
    }

    .inactive-icon path {
      stroke: gray !important;
      fill: rgba(128, 128, 128, 0.123) !important;
      opacity: 0.4;
}
  
    .central3teleport {
      left: 39.28px;
      top: 0px;
      position: absolute;
    }
  
    .fixedcentralx {
      left: 174px;
      top: 154px;
      position: absolute;
    }
  
    .pickup-button {
      left: 17px;
      top: 112px;
      position: absolute;
      cursor: pointer;
    }
  
    .dropoff-button {
      left: 287px;
      top: 102px;
      position: absolute;
      cursor: pointer;
    }
  
    .lightcentral {
      width: 110px;
      height: 146.83px;
      left: 160px;
      top: 99.36px;
      position: absolute;
    }
  
    .dashbg {
      left: -0.67px;
      top: 0px;
      position: absolute;
    }
  
    .dash {
      width: 430px;
      height: 260px;
      position: relative;
    }

  </style>
  