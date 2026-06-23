import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, children, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`swap-card ${customClass ?? ''} ${rest.className ?? ''}`.trim()}>
    {children}
  </div>
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const count = childArr.length;

  // Use a stable ref array — populated by callback refs on each card div
  const cardEls = useRef([]);
  cardEls.current = new Array(count).fill(null);

  const order = useRef(Array.from({ length: count }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef(null);
  const container = useRef(null);
  const initialised = useRef(false);

  useEffect(() => {
    // Wait one frame to ensure DOM is painted and refs are populated
    const frameId = requestAnimationFrame(() => {
      const total = cardEls.current.length;

      const allReady = cardEls.current.every(el => el !== null);
      if (!allReady) {
        console.warn('CardSwap: some card elements are not mounted yet');
        return;
      }

      cardEls.current.forEach((el, i) => {
        placeNow(el, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      });

      const swap = () => {
        if (order.current.length < 2) return;

        const [front, ...rest] = order.current;
        const elFront = cardEls.current[front];
        if (!elFront) return;

        const tl = gsap.timeline();
        tlRef.current = tl;

        tl.to(elFront, {
          y: '+=500',
          duration: config.durDrop,
          ease: config.ease
        });

        tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
        rest.forEach((idx, i) => {
          const el = cardEls.current[idx];
          if (!el) return;
          const slot = makeSlot(i, cardDistance, verticalDistance, cardEls.current.length);
          tl.set(el, { zIndex: slot.zIndex }, 'promote');
          tl.to(
            el,
            { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease },
            `promote+=${i * 0.15}`
          );
        });

        const backSlot = makeSlot(cardEls.current.length - 1, cardDistance, verticalDistance, cardEls.current.length);
        tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
        tl.call(() => {
          if (elFront) gsap.set(elFront, { zIndex: backSlot.zIndex });
        }, undefined, 'return');
        tl.to(
          elFront,
          { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease },
          'return'
        );
        tl.call(() => {
          order.current = [...rest, front];
        });
      };

      // Initial swap + interval
      swap();
      intervalRef.current = window.setInterval(swap, delay);

      if (pauseOnHover && container.current) {
        const node = container.current;
        const pause = () => {
          tlRef.current?.pause();
          clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener('mouseenter', pause);
        node.addEventListener('mouseleave', resume);
        return () => {
          node.removeEventListener('mouseenter', pause);
          node.removeEventListener('mouseleave', resume);
          clearInterval(intervalRef.current);
        };
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, count]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: el => { cardEls.current[i] = el; },
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
