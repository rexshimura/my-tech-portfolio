import { useEffect, useRef } from 'react';
import useSFX from '../hooks/useSFX';

export default function SFXManager() {
  const { playHoverClickable, playHoverBop, playClick } = useSFX();
  const currentHoveredElement = useRef(null);

  useEffect(() => {
    const clickableSelector = 'button, a, .cursor-target, [role="button"]';
    const bopSelector = '.sfx-bop, [data-sfx="bop"]';
    const combinedSelector = `${clickableSelector}, ${bopSelector}`;

    const handleMouseOver = (e) => {
      // Find the closest parent that matches our selectors
      const target = e.target.closest(combinedSelector);

      // If we entered a target AND it's a new element (not just moving between child elements)
      if (target && target !== currentHoveredElement.current) {
        currentHoveredElement.current = target;

        if (target.matches(bopSelector)) {
          playHoverBop();
        } else {
          playHoverClickable();
        }
      }
    };

    const handleMouseOut = (e) => {
      if (!currentHoveredElement.current) return;

      // Check where the mouse is moving to
      const relatedTarget = e.relatedTarget;
      
      // If leaving the target completely (and not moving into an inner child element)
      if (!relatedTarget || !currentHoveredElement.current.contains(relatedTarget)) {
        currentHoveredElement.current = null;
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest(clickableSelector);
      if (target) {
        playClick();
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('click', handleClick);
    };
  }, [playHoverClickable, playHoverBop, playClick]);

  return null;
}