<template>
    <div>
      <div class="container">
        <div class="confetti-container">
          <div
            v-for="(confetti, index) in confettis"
            :key="index"
            :class="['confetti', `confetti--animation-${confetti.animation}`]"
            :style="{
              width: confetti.size,
              height: confetti.size,
              backgroundColor: confetti.color,
              left: confetti.left
            }"
          ></div>
        </div>
      </div>
  
      <div class="submit-btn" @click="startConfetti">Start Confetti</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        confettis: [],
        confettiColors: ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'],
        confettiAnimations: ['slow', 'medium', 'fast']
      };
    },
    methods: {
      startConfetti() {
        this.confettis = [];
  
        const interval = setInterval(() => {
          const confetti = {
            size: `${Math.floor(Math.random() * 3) + 7}px`,
            color: this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)],
            left: `${Math.floor(Math.random() * this.$el.offsetWidth)}px`,
            animation: this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)]
          };
  
          this.confettis.push(confetti);
  
          setTimeout(() => {
            const index = this.confettis.indexOf(confetti);
            if (index !== -1) {
              this.confettis.splice(index, 1);
            }
          }, 3000);
        }, 25);
  
        setTimeout(() => {
          clearInterval(interval);
        }, 5000);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    border: 1px solid white;
    position: fixed;
    top: 0px;
  }
  
  .confetti-container {
    perspective: 700px;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  .confetti {
    position: absolute;
    z-index: 1;
    top: -10px;
    border-radius: 0%;
  }
  
  .confetti--animation-slow {
    animation: confetti-slow 2.25s linear 1 forwards;
  }
  
  .confetti--animation-medium {
    animation: confetti-medium 1.75s linear 1 forwards;
  }
  
  .confetti--animation-fast {
    animation: confetti-fast 1.25s linear 1 forwards;
  }
  
  .submit-btn {
    height: 45px;
    width: 200px;
    font-size: 15px;
    background-color: #00c09d;
    border: 1px solid #00ab8c;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(87, 71, 81, 0.2);
    cursor: pointer;
    transition: all 2s ease-out;
    transition: all 0.2s ease-out;
  }
  
  .submit-btn:hover {
    background-color: #2ca893;
    transition: all 0.2s ease-out;
  }
  
  @keyframes confetti-slow {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
  
    100% {
      transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
    }
  }
  
  @keyframes confetti-medium {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
  
    100% {
      transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
    }
  }
  
  @keyframes confetti-fast {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
  
    100% {
      transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
    }
  }
  </style>
  