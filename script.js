// Example JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my personal website!');
  });

// Animated gradient background
class AnimatedGradientBackground {
  constructor() {
    this.gradientInner = document.getElementById('gradient-inner');
    this.startingGap = 125;
    this.breathing = true;
    this.gradientColors = [
      "#0A0A0A",
      '#2979FF',
      '#FF80AB',
      '#FF6000',
      '#FF0600',
      '#00E676',
      '#305AFE'
    ];
    this.gradientStops = [35, 50, 60, 70, 80, 90, 100];
    this.animationspeed = 0.02;
    this.breathingRange = 5;
    this.topOffset = 0;

    this.width = this.startingGap;
    this.directionWidth = 1;
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.animateGradient();
  }

  animateGradient() {
    // Update the width for the breathing effect
    this.width += this.directionWidth * this.animationspeed;

    // Reverse direction if breathing range is exceeded
    if (this.width > this.startingGap + this.breathingRange || this.width < this.startingGap - this.breathingRange) {
      this.directionWidth *= -1;
    }

    // Create the gradient string
    const gradient = `linear-gradient(
      to right,
      ${this.gradientColors.map((color, index) => `${color} ${this.gradientStops[index] + this.width}px`).join(', ')}
    )`;

    // Apply the gradient to the element
    this.gradientInner.style.background = gradient;

    // Request the next animation frame
    this.animationFrame = requestAnimationFrame(() => this.animateGradient());
  }

  stopAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
}