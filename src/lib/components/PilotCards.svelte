<script lang="ts">

</script>


<div class='cards'>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>1</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>2</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>3</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>4</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>5</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>6</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>7</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>8</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>9</div>
      </div>
    </div>
    <div class='card'>
      <div class='card-face'>
        <div class='card-label'>10</div>
      </div>
    </div>
  </div>
  


<style>

.cards {
  bottom: 0;
  display: flex;
  height: 150px;
  padding: 0 50px;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
}

.card {
  height: 150px;
  margin: 0 -25px;
  position: relative;
  width: 100px;
}
.card:after {
  bottom: 0;
  content: "";
  left: -60px;
  position: absolute;
  right: -60px;
  top: 0px;
  z-index: 10;
}

.card-face {
  bottom: 0;
  content: "";
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 800ms cubic-bezier(0.19, 1, 0.22, 1) transform;
}
.card-face:after {
  -webkit-animation: none;
          animation: none;
  background: #fff;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.card-label {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.025em;
  padding: 15px 0 0 15px;
}

.card:nth-child(1) .card-face {
  background: linear-gradient(-135deg, #ff9999, #da0b0b);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(255, 153, 153, 0.75);
  transform: translateY(45px) rotate(-28.125deg);
}
.card:nth-child(1) .card-face .card-label {
  color: #db0000;
  text-shadow: -0.025em 0.025em 0 #ff8080;
}
.card:nth-child(1):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 153, 153, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(1):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(1):hover:after {
  top: -175px;
}

.card:nth-child(2) .card-face {
  background: linear-gradient(-135deg, #ff99d6, #da0b87);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(255, 153, 214, 0.75);
  transform: translateY(35px) rotate(-21.875deg);
}
.card:nth-child(2) .card-face .card-label {
  color: #db0084;
  text-shadow: -0.025em 0.025em 0 #ff80cc;
}
.card:nth-child(2):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 153, 214, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(2):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(2):hover:after {
  top: -175px;
}

.card:nth-child(3) .card-face {
  background: linear-gradient(-135deg, #eb99ff, #b10bda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(235, 153, 255, 0.75);
  transform: translateY(25px) rotate(-15.625deg);
}
.card:nth-child(3) .card-face .card-label {
  color: #af00db;
  text-shadow: -0.025em 0.025em 0 #e680ff;
}
.card:nth-child(3):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(235, 153, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(3):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(3):hover:after {
  top: -175px;
}

.card:nth-child(4) .card-face {
  background: linear-gradient(-135deg, #ad99ff, #350bda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(173, 153, 255, 0.75);
  transform: translateY(15px) rotate(-9.375deg);
}
.card:nth-child(4) .card-face .card-label {
  color: #2c00db;
  text-shadow: -0.025em 0.025em 0 #9980ff;
}
.card:nth-child(4):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(173, 153, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(4):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(4):hover:after {
  top: -175px;
}

.card:nth-child(5) .card-face {
  background: linear-gradient(-135deg, #99c2ff, #0b5eda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 194, 255, 0.75);
  transform: translateY(5px) rotate(-3.125deg);
}
.card:nth-child(5) .card-face .card-label {
  color: #0058db;
  text-shadow: -0.025em 0.025em 0 #80b3ff;
}
.card:nth-child(5):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 194, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(5):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(5):hover:after {
  top: -175px;
}

.card:nth-child(6) .card-face {
  background: linear-gradient(-135deg, #99ffff, #0bdada);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 255, 255, 0.75);
  transform: translateY(5px) rotate(3.125deg);
}
.card:nth-child(6) .card-face .card-label {
  color: #00dbdb;
  text-shadow: -0.025em 0.025em 0 #80ffff;
}
.card:nth-child(6):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 255, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(6):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(6):hover:after {
  top: -175px;
}

.card:nth-child(7) .card-face {
  background: linear-gradient(-135deg, #99ffc2, #0bda5e);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 255, 194, 0.75);
  transform: translateY(15px) rotate(9.375deg);
}
.card:nth-child(7) .card-face .card-label {
  color: #00db58;
  text-shadow: -0.025em 0.025em 0 #80ffb3;
}
.card:nth-child(7):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 255, 194, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(7):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(7):hover:after {
  top: -175px;
}

.card:nth-child(8) .card-face {
  background: linear-gradient(-135deg, #adff99, #35da0b);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(173, 255, 153, 0.75);
  transform: translateY(25px) rotate(15.625deg);
}
.card:nth-child(8) .card-face .card-label {
  color: #2cdb00;
  text-shadow: -0.025em 0.025em 0 #99ff80;
}
.card:nth-child(8):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(173, 255, 153, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(8):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(8):hover:after {
  top: -175px;
}

.card:nth-child(9) .card-face {
  background: linear-gradient(-135deg, #ebff99, #b1da0b);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(235, 255, 153, 0.75);
  transform: translateY(35px) rotate(21.875deg);
}
.card:nth-child(9) .card-face .card-label {
  color: #afdb00;
  text-shadow: -0.025em 0.025em 0 #e6ff80;
}
.card:nth-child(9):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(235, 255, 153, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(9):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}
.card:nth-child(9):hover:after {
  top: -175px;
}

.card:nth-child(10) .card-face {
  background: linear-gradient(-135deg, #ffd699, #da870b);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(255, 214, 153, 0.75);
  transform: translateY(45px) rotate(28.125deg);
}
.card:nth-child(10) .card-face .card-label {
  color: #db8400;
  text-shadow: -0.025em 0.025em 0 #ffcc80;
}
.card:nth-child(10):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 214, 153, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}
.card:nth-child(10):hover .card-face:after {
  -webkit-animation: fade 550ms ease-out forwards;
          animation: fade 550ms ease-out forwards;
}
.card:nth-child(10):hover:after {
  top: -155px;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

@keyframes fade {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

</style>