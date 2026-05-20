import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function useConfetti() {
  const trigger = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3578E5', '#FFD700', '#FF1744', '#4CAF50', '#9C27B0'],
    });
  };

  return trigger;
}

export function useConfettiOnElement(elementRef: React.RefObject<HTMLElement>) {
  const trigger = () => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ['#3578E5', '#FFD700', '#FF1744', '#4CAF50', '#9C27B0'],
    });
  };

  return trigger;
}
