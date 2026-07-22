import { useRef, useState, useCallback, useEffect } from 'react';

const FALLOFF_CURVES = {
  linear: (p) => p,
  smooth: (p) => p * p * (3 - 2 * p),
  sharp: (p) => p * p * p
};

const DEFAULT_ITEMS = [
  'Overview',
  'Components',
  'Animations',
  'Backgrounds',
  'Showcase'
];

export default function LineSidebar({
  items = DEFAULT_ITEMS,
  accentColor = '#3B82F6',
  textColor = '#9ca3af',
  markerColor = '#6c6c6c',
  showIndex = true,
  showMarker = true,
  proximityRadius = 100,
  maxShift = 30,
  falloff = 'smooth',
  markerLength = 60,
  markerGap = 0,
  tickScale = 0.5,
  scaleTick = true,
  itemGap = 20,
  fontSize = 1.1,
  smoothing = 100,
  defaultActive = null,
  onItemClick,
  className = ''
}) {
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const activeRef = useRef(activeIndex);
  const smoothingRef = useRef(smoothing);

  activeRef.current = activeIndex;
  smoothingRef.current = smoothing;

  const runFrame = useCallback((now) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);

    lastRef.current = now;

    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;

    const items = itemRefs.current;

    for (let i = 0; i < items.length; i++) {
      const element = items[i];

      if (!element) continue;

      const target = Math.max(
        targetsRef.current[i] || 0,
        activeRef.current === i ? 1 : 0
      );

      const current = currentRef.current[i] || 0;

      const next = current + (target - current) * k;

      const settled = Math.abs(target - next) < 0.0015;

      const value = settled ? target : next;

      currentRef.current[i] = value;

      element.style.setProperty(
        '--effect',
        value.toFixed(4)
      );

      if (!settled) {
        moving = true;
      }
    }

    rafRef.current = moving
      ? requestAnimationFrame(runFrame)
      : null;

  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current !== null) return;

    lastRef.current = performance.now();

    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    (event) => {
      const list = listRef.current;

      if (!list) return;

      const rect = list.getBoundingClientRect();

      const pointerY = event.clientY - rect.top;

      const ease =
        FALLOFF_CURVES[falloff] ||
        FALLOFF_CURVES.linear;

      const items = itemRefs.current;

      for (let i = 0; i < items.length; i++) {
        const element = items[i];

        if (!element) continue;

        const center =
          element.offsetTop +
          element.offsetHeight / 2;

        const distance = Math.abs(
          pointerY - center
        );

        targetsRef.current[i] = ease(
          Math.max(
            0,
            1 - distance / proximityRadius
          )
        );
      }

      startLoop();
    },
    [
      falloff,
      proximityRadius,
      startLoop
    ]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current =
      targetsRef.current.map(() => 0);

    startLoop();
  }, [startLoop]);

  const handleClick = useCallback(
    (index, label) => {
      setActiveIndex(index);

      onItemClick?.(index, label);
    },
    [onItemClick]
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const tickClass = showMarker
    ? `
      after:absolute
      after:left-[calc(-1*var(--marker-length)-var(--marker-gap))]
      after:top-[calc(100%+var(--item-gap)/2)]
      after:h-px
      after:opacity-50
      after:content-['']
      last:after:content-none
      after:[background-color:var(--marker-color)]
      after:[width:calc(var(--marker-length)*var(--tick-scale))]
      ${
        scaleTick
          ? 'after:origin-left after:[transform:translateY(-50%)_scaleX(calc(0.7+var(--effect,0)*0.6))]'
          : 'after:-translate-y-1/2'
      }
    `
    : '';

  return (
    <nav
      className={`
        relative
        flex
        justify-start
        ${showMarker
          ? '[padding-left:calc(var(--marker-length)+var(--marker-gap))]'
          : ''
        }
        ${className}
      `}
      style={{
        '--accent-color': accentColor,
        '--text-color': textColor,
        '--marker-color': markerColor,
        '--marker-length': `${markerLength}px`,
        '--marker-gap': `${markerGap}px`,
        '--tick-scale': tickScale,
        '--max-shift': `${maxShift}px`,
        '--item-gap': `${itemGap}px`,
        '--font-size': `${fontSize}rem`,
        '--smoothing': `${smoothing}ms`
      }}
    >
      <ul
        ref={listRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="
          m-0
          flex
          list-none
          flex-col
          py-4
          [gap:var(--item-gap)]
        "
      >
        {items.map((label, index) => (
          <li
            key={`${label}-${index}`}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            aria-current={
              activeIndex === index
                ? 'true'
                : undefined
            }
            onClick={() => {
              handleClick(index, label);
            }}
            className={`
              relative
              cursor-pointer
              before:absolute
              before:-inset-x-12
              before:-inset-y-[6px]
              before:content-['']
              ${tickClass}
            `}
          >
            {showMarker && (
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-[calc(-1*var(--marker-length)-var(--marker-gap))]
                  top-1/2
                  h-px
                  w-[length:var(--marker-length)]
                  origin-left
                  [background-color:color-mix(in_srgb,var(--accent-color)_calc(var(--effect,0)*100%),var(--marker-color))]
                  [transform:translateY(-50%)_scaleX(calc(0.7+var(--effect,0)*0.5))]
                "
              />
            )}

            <span
              className="
                relative
                inline-flex
                items-baseline
                leading-[1.2]
                [color:color-mix(in_srgb,var(--accent-color)_calc(var(--effect,0)*100%),var(--text-color))]
                [font-size:var(--font-size)]
                [transform:translateX(calc(var(--effect,0)*var(--max-shift)))]
              "
            >
              {showIndex && (
                <span
                  className="
                    mr-[0.6rem]
                    font-mono
                    text-[0.85em]
                    [opacity:calc(0.55+var(--effect,0)*0.45)]
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}

              <span>
                {label}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}