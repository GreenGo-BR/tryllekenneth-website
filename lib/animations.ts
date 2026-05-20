import confetti from 'canvas-confetti';

export function triggerConfetti(options?: { particleCount?: number; spread?: number }) {
  const { particleCount = 100, spread = 90 } = options || {};
  
  confetti({
    particleCount,
    spread,
    origin: { y: 0.6 },
    colors: ['#5578ff', '#f4d948', '#ff4757', '#26de81', '#fd79a8'],
  });
}

export function triggerCelebration() {
  // Trigger confetti multiple times for a celebration effect
  triggerConfetti({ particleCount: 60, spread: 60 });
  setTimeout(() => triggerConfetti({ particleCount: 60, spread: 100 }), 200);
  setTimeout(() => triggerConfetti({ particleCount: 60, spread: 70 }), 400);
}
