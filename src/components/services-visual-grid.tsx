import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, ChevronRight, X, CheckCircle2, ShieldAlert, Sparkles, Layers, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { originalContent } from "@/lib/site-content";
import { HighlightKeywords } from "@/components/highlight-keywords";

// Appropriate CAD and mould engineering images from src/assets/images
import cadSurfacingImg from "@/assets/images/CONSUMER GOODS_1.PNG";
import dfmMouldingImg from "@/assets/images/PRECISION TOOLING-1.PNG";
import toolingDesignImg from "@/assets/images/AUTOMOTIVE-1_MOULD.PNG";
import feaMoldflowImg from "@/assets/images/ELECTRODE_DESIGN-1.PNG";
import methodologyImg from "@/assets/images/PRECISION TOOLING_3.PNG";

export interface ServiceCardItem {
  id: string;
  number: string;
  category: string;
  title: string;
  brief: string;
  image: string;
  lines: string[];
}

export const serviceCardsData: ServiceCardItem[] = [
  {
    id: "service-1",
    number: "01",
    category: "CAD / SURFACING",
    title: "Value-Added Reverse Engineering & New Product Design",
    brief:
      "Transform physical parts, scan data, and prototype concepts into precise 3D CAD models. Features parametric updates, Class-A surfacing, and tolerance verification.",
    image: cadSurfacingImg,
    lines: originalContent.serviceSections[0]?.lines ?? [],
  },
  {
    id: "service-2",
    number: "02",
    category: "DFM / MOULDING",
    title: "Design for Manufacturability (DFM) Analysis",
    brief:
      "Comprehensive 2D & 3D model cross-verification, steel-safe condition analysis, and early geometry review to guarantee first-time-right mould qualification.",
    image: dfmMouldingImg,
    lines: originalContent.serviceSections[1]?.lines ?? [],
  },
  {
    id: "service-3",
    number: "03",
    category: "TOOLING DESIGN",
    title: "Precision Mould Tooling & Core/Cavity Design",
    brief:
      "Complete 3D solid assemblies and 2D detailing from prototype tools to high-volume multi-cavity, unscrewing, and hot-runner production moulds.",
    image: toolingDesignImg,
    lines: originalContent.serviceSections[2]?.lines ?? [],
  },
  {
    id: "service-4",
    number: "04",
    category: "FEA / MOLDFLOW",
    title: "Plastic Flow Analysis & Improvement Suggestion",
    brief:
      "Evaluate filling, packing, clamp force, weld lines, and warpage with Moldflow simulation to optimize process conditions and eliminate defects upfront.",
    image: feaMoldflowImg,
    lines: originalContent.serviceSections[3]?.lines ?? [],
  },
  {
    id: "service-5",
    number: "05",
    category: "METHODOLOGY",
    title: "Systematic Engineering & Simultaneous Design",
    brief:
      "Synchronized engineering combining part design with practical shop-floor tooling knowledge to compress lead times and ensure flawless production handoff.",
    image: methodologyImg,
    lines: originalContent.serviceSections[4]?.lines ?? [],
  },
];

interface ServicesVisualGridProps {
  /**
   * If true, clicking a card expands the full details directly below the grid on this page.
   * If false (e.g. on homepage), clicking a card navigates to /services#service-X.
   */
  expandOnPage?: boolean;
  initialSelectedId?: string;
}

export function ServicesVisualGrid({
  expandOnPage = true,
  initialSelectedId,
}: ServicesVisualGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId ?? null);
  const detailPanelRef = useRef<HTMLDivElement | null>(null);

  // Sync with URL hash if present on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && serviceCardsData.some((s) => s.id === hash)) {
        setSelectedId(hash);
      }
    }
  }, []);

  const handleCardClick = (serviceId: string) => {
    if (!expandOnPage) {
      return; // Navigation handled by <Link>
    }

    if (selectedId === serviceId) {
      // Toggle / collapse if already selected
      setSelectedId(null);
    } else {
      setSelectedId(serviceId);
      // Smoothly scroll to the expanded details section below
      setTimeout(() => {
        if (detailPanelRef.current) {
          detailPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    }
  };

  const selectedService = serviceCardsData.find((s) => s.id === selectedId);

  return (
    <div className="services-showcase-wrapper">
      {/* 5 Cards visual grid matching design screenshot */}
      <div className="services-visual-grid" role="region" aria-label="Services grid">
        {serviceCardsData.map((item) => {
          const isSelected = selectedId === item.id;
          const cardContent = (
            <>
              {/* Background Engineering Image from src/assets/images */}
              <img
                src={item.image}
                alt={`${item.title} reference rendering`}
                className="service-card-bg"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="service-card-overlay" aria-hidden="true" />

              {/* Top Badges (Number pill + Category pill) */}
              <div className="service-card-badges">
                <span className="service-num-badge">{item.number}</span>
                <span className="service-cat-badge">{item.category}</span>
              </div>

              {/* Core Bottom Information (Title + Hover Brief + Action Row) */}
              <div className="service-card-content">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-brief">
                  <HighlightKeywords text={item.brief} />
                </p>
                <div className="service-card-action-row">
                  <span className="service-card-quote-link">
                    Request Quote <ArrowUpRight size={13} />
                  </span>
                  <span className="service-card-expand-hint">
                    {expandOnPage
                      ? isSelected
                        ? "Collapse ↑"
                        : "Full details ↓"
                      : "Explore →"}
                  </span>
                </div>
              </div>
            </>
          );

          if (!expandOnPage) {
            return (
              <Link
                key={item.id}
                to="/services"
                hash={item.id}
                className={`service-image-card ${isSelected ? "is-active" : ""}`}
                aria-label={`View details for ${item.title}`}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <button
              type="button"
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`service-image-card ${isSelected ? "is-active" : ""}`}
              aria-expanded={isSelected}
              aria-controls={`service-details-${item.id}`}
            >
              {cardContent}
            </button>
          );
        })}
      </div>

      {/* Expanded Full Details Section directly below the cards */}
      {expandOnPage && selectedService && (
        <section
          ref={detailPanelRef}
          id={`service-details-${selectedService.id}`}
          className="service-expanded-panel"
          aria-label={`${selectedService.title} Details`}
        >
          <div className="expanded-header">
            <div className="expanded-header-left">
              <div className="expanded-badges">
                <span className="service-num-badge">{selectedService.number}</span>
                <span className="service-cat-badge">{selectedService.category}</span>
                <span className="expanded-active-tag">FULL DETAILS EXPANDED</span>
              </div>
              <h2 className="expanded-title">{selectedService.title}</h2>
              <p className="expanded-lead">{selectedService.brief}</p>
            </div>
            <div className="expanded-header-actions">
              <Button asChild size="sm" className="quote-button">
                <Link to="/contact-us">
                  Request a Quote <ArrowUpRight size={15} />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedId(null)}
                aria-label="Close expanded details"
                className="close-expanded-btn"
              >
                <X size={18} />
              </Button>
            </div>
          </div>

          <div className="expanded-body">
            <div className="expanded-lines">
              <h4 className="expanded-subhead">Engineering Overview & Scope</h4>
              {selectedService.lines.map((line, idx) => {
                const isShort = line.length < 160;
                return isShort ? (
                  <div key={idx} className="expanded-spec-pill">
                    <CheckCircle2 size={15} className="spec-check-icon" />
                    <span>
                      <HighlightKeywords text={line} />
                    </span>
                  </div>
                ) : (
                  <p key={idx} className="expanded-paragraph">
                    <HighlightKeywords text={line} />
                  </p>
                );
              })}
            </div>

            <aside className="expanded-sidebar">
              <div className="expanded-summary-card">
                <span className="eyebrow">REDECOS STANDARDS</span>
                <h4>First-Time-Right Commitment</h4>
                <ul className="expanded-feature-list">
                  <li>Direct parametric 3D CAD modeling</li>
                  <li>Steel-safe tooling verification</li>
                  <li>Tolerance and parting line optimization</li>
                  <li>Complete 2D detailing & Bill of Materials</li>
                  <li>Synchronized simultaneous engineering</li>
                </ul>
                <div className="expanded-sidebar-action">
                  <Link to="/contact-us" className="text-link">
                    Discuss this service with our team <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}

