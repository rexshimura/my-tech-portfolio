import { useCallback, useRef } from 'react';

const HOVER_CLICKABLE_PATH = '/sfx/hover_clickable.mp3';
const HOVER_BOP_PATH = '/sfx/hover_bop.mp3';
const HOVER_MINI_PATH = '/sfx/hover_mini.mp3';
const CLICK_SFX_PATH = '/sfx/click.mp3';

export default function useSFX() {
  const lastHoverTime = useRef(0);

  // Helper to play sound with throttling against rapid double-triggers
  const playSound = useCallback((path, volume = 0.15, throttle = true) => {
    const now = Date.now();
    if (throttle && now - lastHoverTime.current < 60) return; // Ignore events within 60ms
    lastHoverTime.current = now;

    try {
      const sound = new Audio(path);
      sound.volume = volume;
      sound.currentTime = 0;
      sound.play().catch(() => {
        // Silently catch browser autoplay restriction before first user gesture
      });
    } catch (e) {}
  }, []);

  const playHoverClickable = useCallback(() => {
    playSound(HOVER_CLICKABLE_PATH, 0.15, true);
  }, [playSound]);

  const playHoverBop = useCallback(() => {
    playSound(HOVER_BOP_PATH, 0.12, true);
  }, [playSound]);

  const playHoverMini = useCallback(() => {
    playSound(HOVER_MINI_PATH, 0.10, true);
  }, [playSound]);

  const playClick = useCallback(() => {
    playSound(CLICK_SFX_PATH, 0.25, false); // Clicks are never throttled
  }, [playSound]);

  return { playHoverClickable, playHoverBop, playHoverMini, playClick };
}