<script lang="ts">
  import { onMount } from 'svelte';
  
  let containerWidth = 0;
  let position = 0;
  let moveElement: HTMLElement | null = null;
  let cardsLength = 0;
  
  onMount(() => {
    moveElement = document.getElementById("va_container");
    const cards = document.querySelectorAll('.va-card');
    cardsLength = cards.length;
    containerWidth = (cardsLength - 3) * (-350);
  });

  const handleLeftClick = () => {
    if (!moveElement) return;
    position += 350;
    if (position > 0) {
      position = containerWidth - 350;
    }
    moveElement.style.transform = `translateX(${position}px)`;
  };

  const handleRightClick = () => {
    if (!moveElement) return;
    position -= 350;
    if (position < containerWidth) {
      position = 0;
    }
    moveElement.style.transform = `translateX(${position}px)`;
  };

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxODAiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
    }
  };
</script>

<div class="va-carrousel-section">
    <div class="va-whitewrap">
      <div class="div-center">        
        <div id="va_container" class="va-container">
            <div class="va-carrousel-flexbox">
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card1" src="https://i.pinimg.com/736x/00/8a/83/008a833a041c9fc15973410b72beb6ad.jpg" on:error={handleImageError}>
                    <div class="va-title">Alejandra Castillo</div>        
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card2" src="https://i.pinimg.com/736x/26/26/48/262648646a6410d8f1d0ddd28c4e8c2f.jpg" on:error={handleImageError}>
                    <div class="va-title">Mariana Carrera</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                    
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card3" src="https://i.pinimg.com/736x/be/ae/61/beae6102bafe310121064c5e944b1eab.jpg" on:error={handleImageError}>
                    <div class="va-title">Andrea Morano</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card4" src="https://i.pinimg.com/736x/a4/3f/34/a43f34df9307dbe7ff7e36bed72d0549.jpg" on:error={handleImageError}>
                    <div class="va-title">Carolina Verinne</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                    
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card5" src="https://i.pinimg.com/736x/2b/9c/43/2b9c4362470cb582b78af572c55bcb53.jpg" on:error={handleImageError}>
                    <div class="va-title">Fernanda Alleriux</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                    
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card6" src="https://i.pinimg.com/736x/86/f8/52/86f8522f64d9a109438ef255b3697ba3.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                    
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card7" src="https://i.pinimg.com/736x/44/f7/ba/44f7ba3c32d37da811527c6b86239edb.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card8" src="https://i.pinimg.com/736x/ab/7b/29/ab7b2962e7c3418cf01530a8afc7fbee.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card9" src="https://i.pinimg.com/736x/e0/9f/02/e09f021087886cfe5a322a2dbd6d5040.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card10" src="https://i.pinimg.com/736x/9e/e4/77/9ee4779afbab9a0b29ace072d5fe064c.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card11" src="https://i.pinimg.com/736x/74/3c/4d/743c4d7fb470125412cd75d0cc43ccb0.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card12" src="https://i.pinimg.com/736x/d9/09/95/d90995977851e93e2b8acd3a87fd7b27.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card13" src="https://i.pinimg.com/736x/62/a4/e9/62a4e9fdf4668005c01a07e5da58f9e1.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card14" src="https://i.pinimg.com/736x/93/e2/2b/93e22b7b9188d199b37ad784451e7543.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card15" src="https://i.pinimg.com/736x/f9/f3/ce/f9f3ce64eb914cf0703dd8de1c03705a.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card16" src="https://i.pinimg.com/736x/98/5f/23/985f2361243d0f44d37800d39a6a6401.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card17" src="https://i.pinimg.com/736x/cd/48/ff/cd48ff2723ba1741bc785674c213b68c.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank">
                    <img class="va-thumbnail" alt="card18" src="https://i.pinimg.com/736x/3a/65/8f/3a658f760a051f76efeaf28f96387592.jpg" on:error={handleImageError}>
                    <div class="va-title">Card Title</div>
                    <span class="badge">Family</span>
                    <span class="badge2">Casa</span>
                  </a>
                </div>
                
                <div class="va-card">
                  <a class="link-plain" href="_blank" aria-label="card">
                    <img class="va-thumbnail" alt="card19" src="https://i.pinimg.com/736x/dd/f0/af/ddf0af2401a3f7020c6c2473a75ed51e.jpg" on:error={handleImageError}>
                    <div class="va-title">Alexandra Soronei</div>
                    <span class="badge">School</span>
                    <span class="badge2">TEC</span>
                  </a>
                </div>
            </div>
        </div>
      </div>  
    </div>
    
    <button class="nav-button prev" on:click={handleLeftClick}>←</button>
    <button class="nav-button next" on:click={handleRightClick}>→</button>
</div>

<style>
    .va-carrousel-section {
        position: relative;
        width: 390px;
        height: 180px;
        overflow: hidden;
        background: transparent;
        isolation: isolate;
    }

    .va-whitewrap {
        width: 390px;
        height: 180px;
        background-color: transparent;
        padding: 0;
        margin: 0;
        position: relative;
        overflow: hidden;
    }

    .div-center {
        position: relative;
        width: 390px;
        height: 180px;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    #va_container {
        position: relative;
        width: 100%;
        height: 180px;
        margin: 0;
        padding: 0;
        overflow: visible;
        will-change: transform;
        transform: translateZ(0);
    }

    .va-carrousel-flexbox {
        display: flex;
        gap: 10px;
        padding: 0 10px;
        height: 180px;
        align-items: center;
    }

    .va-container {
        transition: transform 0.3s ease-out;
    }

    .va-card {
        flex: 0 0 auto;
        width: 160px;
        height: 160px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        background: #F9F9F9;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transform: translateZ(0);
        backface-visibility: hidden;
    }

    .va-card a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        text-decoration: none;
    }

    .va-thumbnail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .va-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 8px;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2;
    }

    .badge, .badge2 {
        position: absolute;
        bottom: 35px;
        z-index: 2;
        background: rgba(255,255,255,0.9);
        color: #0E0E0E;
        padding: 3px 6px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 600;
    }

    .badge {
        left: 8px;
    }

    .badge2 {
        right: 8px;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        z-index: 10;
        transition: background 0.3s ease;
    }

    .nav-button:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    :global(.va-carrousel-flexbox::-webkit-scrollbar) {
        display: none;
    }
</style>
	