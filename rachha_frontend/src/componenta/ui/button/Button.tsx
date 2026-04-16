import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  variant = 'primary',
  text,
  startIcon,
  onClick,
  className = '',
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);
  const royalGold = 'var(--color-royalGold)';
  const deepGold = 'var(--color-deepGold)';
  const pureWhite = 'var(--color-pureWhite)';

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;
    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, 'xPercent');
    const ySet = gsap.quickSetter(flair, 'yPercent');

    const getXY = (event: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      return {
        x: xTransformer(event.clientX - left),
        y: yTransformer(event.clientY - top),
      };
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const { x, y } = getXY(event);
      xSet(x);
      ySet(y);
      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(button, {
        duration: 0.35,
        borderColor: deepGold,
        backgroundColor: deepGold,
        color: pureWhite,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const { x, y } = getXY(event);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(button, {
        duration: 0.35,
        borderColor: royalGold,
        backgroundColor: variant === 'secondary' ? 'transparent' : royalGold,
        color: variant === 'secondary' ? royalGold : pureWhite,
        ease: 'power2.out',
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { x, y } = getXY(event);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: 'power2',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf(flair);
    };
  }, [variant]);

  const buttonClasses = `
    relative inline-flex items-center justify-center gap-3 overflow-hidden cursor-pointer
    rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-tight
    transition-colors duration-200 ease-out
    ${
      variant === 'secondary'
        ? 'bg-transparent border border-royalGold text-royalGold hover:border-deepGold hover:bg-deepGold hover:text-pureWhite'
        : 'bg-royalGold border border-royalGold text-pureWhite hover:border-deepGold hover:bg-deepGold hover:text-pureWhite'
    }
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const flairClasses = `
    absolute inset-0 pointer-events-none scale-0 origin-top-left
    before:content-[''] before:block before:absolute before:left-0 before:top-0
    before:rounded-full before:bg-deepGold before:aspect-square before:w-[170%]
    before:-translate-x-1/2 before:-translate-y-1/2
  `.trim().replace(/\s+/g, ' ');

  return (
    <button ref={buttonRef} type="button" onClick={onClick} className={buttonClasses}>
      <span ref={flairRef} className={flairClasses} />
      {startIcon && <span className="relative z-10 inline-flex">{startIcon}</span>}
      <span className="relative z-10 font-sans font-light tracking-[0.13em]">{text}</span>
    </button>
  );
}
