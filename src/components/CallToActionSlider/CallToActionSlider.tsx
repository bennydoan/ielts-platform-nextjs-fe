import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

type Props = {
  slides: Slide[];
  autoPlay?: boolean;
  intervalMs?: number;
};

export default function CallToActionSlider({
  slides,
  autoPlay = true,
  intervalMs = 4500,
}: Props) {
  const realSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const total = realSlides.length;

  const extended = useMemo(() => {
    if (total <= 1) return realSlides;
    return [realSlides[total - 1], ...realSlides, realSlides[0]];
  }, [realSlides, total]);

  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);

  const indexRef = useRef(index);
  indexRef.current = index;
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    setTransitioning(false);
    setIndex(total > 1 ? 1 : 0);
  }, [total]);

  // Jump instantly (no animation), then re-enable transition after browser paints
  const jumpTo = useCallback((newIndex: number) => {
    setTransitioning(false);
    setIndex(newIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitioning(true));
    });
  }, []);

  const goTo = useCallback((newIndex: number) => {
    setTransitioning(true);
    setIndex(newIndex);
  }, []);

  const next = useCallback(() => {
    if (total <= 1) return;
    goTo(indexRef.current + 1);
  }, [total, goTo]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    goTo(indexRef.current - 1);
  }, [total, goTo]);

  useEffect(() => {
    if (!autoPlay || total <= 1 || paused) return;
    const id = window.setTimeout(() => {
      if (pausedRef.current) return;
      setTransitioning(true);
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => window.clearTimeout(id);
  }, [autoPlay, intervalMs, total, index, paused]);

  const onTransitionEnd = useCallback(() => {
    if (total <= 1) return;
    const current = indexRef.current;
    if (current >= extended.length - 1) jumpTo(1);
    else if (current <= 0) jumpTo(total);
  }, [total, extended.length, jumpTo]);

  if (total === 0) return null;

  const activeDot = total <= 1 ? 0 : (((index - 1) % total) + total) % total;

  return (
    <div
      className="relative overflow-hidden rounded-3xl group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        onTransitionEnd={onTransitionEnd}
        className={`flex will-change-transform ${
          transitioning
            ? "transition-transform duration-[250ms] ease-out"
            : "transition-none"
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {extended.map((s, i) => (
          <div key={`${s.id}-${i}`} className="w-full flex-shrink-0">
            <Link
              href={s.href ?? "#"}
              className="relative block w-full aspect-[1440/888]"
            >
              <Image
                src={s.imageSrc}
                alt={s.imageAlt}
                fill
                priority={i === 1}
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {realSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i + 1)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === activeDot ? "bg-rose-500" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
