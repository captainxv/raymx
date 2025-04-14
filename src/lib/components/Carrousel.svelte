<script lang="ts">
    import { onMount } from 'svelte';
	
	let factions = [
		{
			title: "Liz Carrera",
			badges: ["Family", "Casa"],
			backgroundUrl:
				"https://i.pinimg.com/736x/8a/74/f2/8a74f2b1d83785da564de2e1b322d39a.jpg",
			color: "#F455"
		},
		{
			title: "Elizabeth Roa",
			badges: ["BFF", "Casa II"],
			backgroundUrl:
				"https://i.pinimg.com/736x/d7/ba/7e/d7ba7eedaa2f4f1fa0d972b0b2764728.jpg",
			color: "#0d4522"
		},
		{
			title: "Mariana Ochoa",
			badges: ["Family", "Casa"],
			backgroundUrl:
				"https://i.pinimg.com/736x/38/7c/f9/387cf9d9a8beceb71c98cf16cf205a2f.jpg",
			color: "#450d3d"
		},
		{
			title: "Alexa Fidellini",
			badges: ["School", "TEC"],
			backgroundUrl:"https://i.pinimg.com/736x/8f/61/5c/8f615cbc88c2be2d919b91549f0d5345.jpg",
			color: "#09332a"
		},
		{
			title: "Daniela Xachs",
			badges: ["Family", "Prima"],
			backgroundUrl:"https://i.pinimg.com/736x/f9/63/62/f963623653d03b9bac6097e6b8afece4.jpg",
			color: "#224f0d"
		},
		{
			title: "Fernanda Olivar",
			badges: ["School", "Casa II"],
			backgroundUrl:"https://i.pinimg.com/736x/67/76/ef/6776ef6c88a7a5255c5593fd7ac274ec.jpg",
			color: "darkred"
		},
		{
			title: "Laura Zinnemar",
			badges: ["Work", "HR"],
			backgroundUrl: "https://i.pinimg.com/736x/a4/3f/34/a43f34df9307dbe7ff7e36bed72d0549.jpg",
			color: "goldenrod"
		},
		{
			title: "Paula Herrera",
			badges: ["Baby", "Casa"],
			backgroundUrl:"https://i.pinimg.com/736x/4d/ed/37/4ded3777ced201cced603b7ba8bc687f.jpg",
			color: "darkcyan"
		}
	];

	let touchStartX = 0;
	let touchEndX = 0;
	const SWIPE_THRESHOLD = 50; // Minimum distance for a swipe to be registered

	function handleTouchStart(e: TouchEvent) {
		e.preventDefault(); // Prevent default touch behavior
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchMove(e: TouchEvent) {
		e.preventDefault(); // Prevent default touch behavior
	}

	function handleTouchEnd(e: TouchEvent) {
		e.preventDefault(); // Prevent default touch behavior
		touchEndX = e.changedTouches[0].clientX;
		handleSwipe();
	}

	function handleSwipe() {
		const diff = touchStartX - touchEndX;
		
		if (Math.abs(diff) > SWIPE_THRESHOLD) {
			if (diff > 0) {
				swipe("left"); // Swipe left = move left
			} else {
				swipe("right"); // Swipe right = move right
			}
		}
	}

	function swipe(direction: "left" | "right") {
		const position1 = document.querySelector(".card.position1");
		const position7 = document.querySelector(".card.position7");

		position1?.removeEventListener("click", swipeLeft);
		position7?.removeEventListener("click", swipeRight);

		const cards = document.querySelectorAll(".card");

		cards.forEach((card) => {
			const searchedName = "position";
			const searchedNameLength = searchedName.length;

			const indexBegin = card.className.indexOf(searchedName);
			const indexEnd = indexBegin + searchedNameLength + 1;
			const foundClass = card.className.substring(indexBegin, indexEnd);
			const foundClassNumber = parseInt(
				foundClass.substring(searchedNameLength, searchedNameLength + 1)
			);
			let newNumber;
			if (direction === "left") {
				newNumber = foundClassNumber >= 1 && foundClassNumber <= 7 ? foundClassNumber - 1 : 7;
			} else {
				newNumber = foundClassNumber >= 0 && foundClassNumber <= 6 ? foundClassNumber + 1 : 0;
			}
			const newClass = searchedName + newNumber;
			card.classList.add(newClass);
			card.classList.remove(foundClass);
		});

		setTimeout(() => {
			const newPosition1 = document.querySelector(".card.position1");
			const newPosition7 = document.querySelector(".card.position7");

			newPosition1?.addEventListener("click", swipeLeft);
			newPosition7?.addEventListener("click", swipeRight);
		}, 10);
	}

	function swipeLeft() {
		swipe("left");
	}
	function swipeRight() {
		swipe("right");
	}

	onMount(() => {
		const position1 = document.querySelector(".card.position1");
		const position7 = document.querySelector(".card.position7");
		const carrousel = document.querySelector(".carrousel");

		position1?.addEventListener("click", swipeLeft);
		position7?.addEventListener("click", swipeRight);
		
		carrousel?.addEventListener("touchstart", handleTouchStart as EventListener, { passive: false });
		carrousel?.addEventListener("touchmove", handleTouchMove as EventListener, { passive: false });
		carrousel?.addEventListener("touchend", handleTouchEnd as EventListener, { passive: false });
	});
</script>

<div id="app">
	<div class="carrousel" style="touch-action: none;">
		{#each factions as faction, index (index)}
			<div class={`card c${index} position${index}`}>
				<div class="illustration" style={`background: linear-gradient(45deg, #000000, ${faction.color})`}>
					<div class="img" style={`background-image: url(${faction.backgroundUrl})`}></div>
				</div>
				<div class="description">
					<p class="title">{faction.title}</p>
					<div class="badges">
						{#each faction.badges as badge}
							<span class="badge" style={`background: ${faction.color}`}>{badge}</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.app {
		object-fit: contain;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	
	.carrousel {
		overflow: hidden;
		background: transparent;
		perspective: 900px;
		position: absolute;
		justify-content: center;
		top: 14rem;
		left: -150px;
		width: 700px;
		height: 250px;
		transform: scale(0.6);
	}

	.card {
		position: absolute;
		top: 22%;
		left: 30%;
		width: 280px;
		height: 150px;
		border-radius: 10px;
		transform: translateX(50%);
		background: #0E0E0E;
		object-fit: contain;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		display: flex;
		flex-direction: row;
		transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
		will-change: transform, opacity, filter;
	}

	.card:after {
		content: "";
		width: 100%;
		height: 100%;
		border-radius: 10px;
		position: absolute;
		top: 0;
	}

	.illustration {
		height: 100%;
		width: 70%;
		position: relative;
		overflow: hidden;
		border-radius: 10px 0 0 10px;
	}

	.illustration .img {
		height: 100%;
		width: 100%;
		border-radius: 10px 0 0 10px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition: transform 0.4s ease;
	}

	.description {
		position: relative;
		width: 30%;
		height: 100%;
		background: transparent;
		padding: 12px 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.description .title {
		color: white;
		font-weight: 600;
		font-size: 13px;
		text-transform: uppercase;
		margin: 0;
		line-height: 1.2;
		letter-spacing: 0.5px;
	}

	.badges {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 25px;
		bottom: -10px;
	}

	.badge {
		padding: 4px 4px;
		border-radius: 3px;
		font-size: 12px;
		color: white;
		opacity: 0.9;
		font-weight: 500;
		text-align: center;
		letter-spacing: 0.3px;
		backdrop-filter: brightness(1.1);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: all 0.1s ease;
	}

	.badge:hover {
		opacity: 1;
		transform: translateY(-2px);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	}

	.carrousel,
	.card {
		transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1),
			opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
			filter 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.position0,
	.position1:hover,
	.position7:hover {
		cursor: pointer;
		box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
	}

	.position0,
	.position1:hover,
	.position7:hover::after {
   filter: brightness(1) contrast0.8;
	}

	.position0 {
		z-index: 10;
		transform: rotateY(0deg) translateZ(100px) rotateY(0deg) scale(1.1);
	}

	.position1 {
		z-index: 9;
		transform: rotateY(45deg) translateZ(100px) rotateY(-45deg) scale(0.95) translateX(90px);
		filter: brightness(0.5);
	}

	.position2 {
		z-index: 8;
		transform: rotateY(90deg) translateZ(100px) rotateY(-90deg) scale(0.75) translateX(225px);
	  filter: brightness(0.4);
	}

	.position3 {
		z-index: 7;
		transform: rotateY(135deg) translateZ(100px) rotateY(-135deg) scale(0.35);
		filter: brightness(0.2);
	}

	.position4 {
		opacity: 0.2;
		z-index: 6;
		transform: rotateY(180deg) translateZ(100px) rotateY(180deg) scale(0.2);
		filter: brightness(0.4);
	}

	.position5 {
		opacity: 0;
		z-index: 7;
		transform: rotateY(-135deg) translateZ(100px) rotateY(135deg) scale(0.35);
	}

	.position6 {
		opacity: 1;
		z-index: 8;
		transform: rotateY(-90deg) translateZ(100px) rotateY(90deg) scale(0.75) translateX(-225px);
		filter: brightness(0.5);
	}

	.position7 {
		opacity: 1;
		z-index: 9;
		transform: rotateY(-45deg) translateZ(100px) rotateY(45deg) scale(0.85) translateX(-90px);
		filter: brightness(0.5);
	}
</style>