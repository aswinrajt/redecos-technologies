import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  initial: string;
  position: string;
  sector: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    initial: 'H',
    position: 'Head of Procurement & Tooling',
    sector: 'Global Automotive Tier-1 Supplier',
    quote:
      'REDECOS consistently delivers complex 3D mould designs with first-time-right manufacturability. Their upfront DFM analysis and electrode planning trimmed nearly three weeks off our tooling lead time. An invaluable engineering partner for our automotive programmes.',
    rating: 5,
  },
  {
    id: 'test-2',
    initial: 'Q',
    position: 'Quality & Tooling Director',
    sector: 'Leading Electrical Switchgear Manufacturer',
    quote:
      'Their adherence to standard mould elements and systematic color-coded parting surfaces made shopfloor machining completely seamless. The tool debugging support and pre-production feasibility checks were exemplary in every batch.',
    rating: 5,
  },
  {
    id: 'test-3',
    initial: 'O',
    position: 'Operations & Plant Manager',
    sector: 'Industrial Equipment & Machinery OEM',
    quote:
      'From complex unscrewing mechanisms to multi-cavity hot runner moulds, REDECOS operates like a dedicated internal extension of our tool room. The fair payment pilot term gave our management total confidence from day one.',
    rating: 5,
  },
  {
    id: 'test-4',
    initial: 'D',
    position: 'Director of Product Engineering',
    sector: 'Major Home Appliances Manufacturer',
    quote:
      'When we faced severe warpage issues on a thin-wall housing, their Moldflow analysis and gate redesign pinpointed the exact solution before cutting steel. They are not just a design supplier, but a true engineering partner.',
    rating: 5,
  },
  {
    id: 'test-5',
    initial: 'T',
    position: 'Technical Lead - Tooling & NPD',
    sector: 'Medical Devices & Precision Components',
    quote:
      'Exceptional Class-A surfacing and reverse engineering capability. Their CAD models arrive with associative parametric data, making future engineering change notes (ECNs) fast, predictable, and completely headache-free.',
    rating: 5,
  },
  {
    id: 'test-6',
    initial: 'V',
    position: 'Vice President of Manufacturing',
    sector: 'Precision Export Tooling Division',
    quote:
      'Communication with the REDECOS team in Coimbatore is direct and deeply technical. Having designers who understand both product design and tool room reality is rare. They are our go-to partner for all export mould packages.',
    rating: 5,
  },
];

interface TestimonialsCarouselProps {
  className?: string;
}

export function TestimonialsCarousel({ className = '' }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items-per-view listener
  useEffect(() => {
    function updateVisible() {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 680) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1080) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Keep index within bounds if window resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Automatic advance timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5200);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={`testimonials-showcase ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client Success Testimonials"
    >
      {/* Header matching provided screenshot */}
      <div className="testimonials-header">
        <div className="testimonials-eyebrow-row">
          <span className="testimonials-dot" aria-hidden="true" />
          <span className="testimonials-eyebrow">CLIENT SUCCESS</span>
          <span className="testimonials-dot" aria-hidden="true" />
        </div>
        <h2 className="testimonials-title">What Our Partners Say</h2>
        <p className="testimonials-subtitle">
          Direct feedback from manufacturing heads, tooling directors, and procurement leaders who rely on REDECOS.
        </p>
      </div>

      {/* Carousel Outer Track Wrapper */}
      <div
        className="testimonials-carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="testimonials-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-slide"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <div className="testimonial-card">
                {/* Top Row: Stars + Stylized Quote Mark */}
                <div className="testimonial-card-top">
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="star-icon" fill="currentColor" />
                    ))}
                  </div>
                  <span className="testimonial-quote-icon" aria-hidden="true">
                    <Quote size={28} />
                  </span>
                </div>

                {/* Testimonial Quote Text */}
                <blockquote className="testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Bottom Row: Position-Only Author Info */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">
                    <span>{t.initial}</span>
                  </div>
                  <div className="testimonial-meta">
                    <strong className="testimonial-position">{t.position}</strong>
                    <span className="testimonial-sector">{t.sector}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: Prev/Next Buttons + Dot Pagination */}
      <div className="testimonials-controls">
        <button
          type="button"
          onClick={handlePrev}
          className="testimonials-nav-btn testimonials-prev-btn"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="testimonials-dots" role="tablist" aria-label="Testimonial slides">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={currentIndex === i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`testimonials-dot-btn ${currentIndex === i ? 'active' : ''}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="testimonials-nav-btn testimonials-next-btn"
          aria-label="Next testimonials"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

