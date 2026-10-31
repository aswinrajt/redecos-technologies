import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import type { ProjectSlide } from '@/lib/projects';

export function ProjectCarousel({ slides, interval = 5000 }: { slides: ProjectSlide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [paused, count, interval]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Our projects">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div className="carousel-slide" key={s.title} aria-hidden={i !== index} aria-roledescription="slide" aria-label={`${i + 1} of ${count}`}>
              {s.image ? <img src={s.image} alt={s.title} loading="lazy" /> : <div className="carousel-placeholder"><ImageIcon size={56} strokeWidth={1} /></div>}
              <div className="carousel-caption"><span>{s.category}</span><h3>{s.title}</h3></div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow prev" onClick={() => go(index - 1)} aria-label="Previous project"><ChevronLeft /></button>
        <button className="carousel-arrow next" onClick={() => go(index + 1)} aria-label="Next project"><ChevronRight /></button>
      </div>
      <div className="carousel-dots">
        {slides.map((s, i) => <button key={s.title} onClick={() => go(i)} aria-label={`Show project ${i + 1}`} aria-current={i === index} />)}
      </div>
    </div>
  );
}
