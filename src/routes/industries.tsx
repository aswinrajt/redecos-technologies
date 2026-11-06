import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteLayout, PageHeading, pageHead } from '@/components/site-layout';
import { industriesData, type IndustryItem } from '@/lib/industries-data';
import { HighlightKeywords } from '@/components/highlight-keywords';
import { ArrowUpRight, ZoomIn, X, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/industries')({
  head: () =>
    pageHead(
      'Industries We Serve',
      'REDECOS supports automotive, appliance, general engineering, commercial and precision tooling applications in the plastic moulding industry.'
    ),
  component: Page,
});

function Page() {
  const [inspectItem, setInspectItem] = useState<IndustryItem | null>(null);

  return (
    <SiteLayout>
      <PageHeading
        label="INDUSTRIES WE SERVE"
        title="Expertise across applications."
        description="Manufacturing, engineering design and precision tooling experience for demanding industrial sectors."
      />
      <section className="section industries-page-section">
        <div className="container">
          <div className="industries-grid">
            {industriesData.map((item) => (
              <article key={item.id} className="industry-card" id={`industry-${item.id}`}>
                {/* Media / Image Container */}
                <div className="industry-card-media">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="industry-card-img"
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={540}
                  />
                  <div className="industry-card-overlay" aria-hidden="true" />

                  {/* Badges on the image */}
                  <div className="industry-card-badges">
                    <span className="industry-num-pill">{item.number}</span>
                    <span className="industry-cat-pill">{item.category}</span>
                  </div>

                  {/* Zoom / Enlarge Button */}
                  <button
                    type="button"
                    className="industry-zoom-btn"
                    onClick={() => setInspectItem(item)}
                    aria-label={`Enlarge engineering drawing for ${item.title}`}
                    title="Enlarge engineering drawing"
                  >
                    <ZoomIn size={15} />
                    <span>Inspect Drawing</span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="industry-card-body">
                  <h2 className="industry-card-title">{item.title}</h2>
                  <p className="industry-card-desc">
                    <HighlightKeywords text={item.description} />
                  </p>

                  {/* Capability Chips */}
                  <div className="industry-card-tags" aria-label={`${item.title} key capabilities`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="industry-tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="industry-card-actions">
                    <Link
                      to="/contact-us"
                      className="industry-card-cta"
                      aria-label={`Discuss ${item.title} project with REDECOS`}
                    >
                      Discuss project <ArrowUpRight size={14} />
                    </Link>
                    <button
                      type="button"
                      className="industry-card-view-btn"
                      onClick={() => setInspectItem(item)}
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Original authentic summary section */}
          <div className="industry-summary-box">
            <span className="eyebrow">A DECADE OF CROSS-SECTOR EXPERTISE</span>
            <p className="industry-description">
              Our team brings over a decade of experience in the automotive, commercial and precision
              tooling industries. We provide tool-engineering services for automobile, appliance and
              general engineering applications, with design and manufacturing support for the plastic
              moulding industry.
            </p>
            <div className="industry-summary-actions">
              <Button asChild className="btn-work-request">
                <Link to="/contact-us">
                  <FileText size={16} className="inline mr-2" />
                  Initiate a Tooling Request
                  <ArrowUpRight size={16} className="inline ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inspect Modal for Full Drawing */}
      {inspectItem && (
        <div
          className="industry-modal-backdrop"
          onClick={() => setInspectItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="industry-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="industry-modal-header">
              <div className="industry-modal-badges">
                <span className="industry-num-pill">{inspectItem.number}</span>
                <span className="industry-cat-pill">{inspectItem.category}</span>
                <span className="industry-modal-live-tag">
                  <ShieldCheck size={13} className="text-primary inline mr-1" />
                  3D CAD / MOULD DRAWING
                </span>
              </div>
              <button
                type="button"
                className="industry-modal-close"
                onClick={() => setInspectItem(null)}
                aria-label="Close drawing preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="industry-modal-img-wrap">
              <img
                src={inspectItem.image}
                alt={inspectItem.imageAlt}
                className="industry-modal-img"
              />
            </div>

            <div className="industry-modal-footer">
              <div>
                <h3 id="modal-title" className="industry-modal-title">{inspectItem.title}</h3>
                <p className="industry-modal-desc">{inspectItem.description}</p>
                <div className="industry-modal-tags">
                  {inspectItem.tags.map((tag) => (
                    <span key={tag} className="industry-tag-chip">
                      <CheckCircle2 size={12} className="inline mr-1 text-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="industry-modal-cta-wrap">
                <Button asChild size="sm">
                  <Link to="/contact-us">
                    Request DFM / Tool Quote <ArrowUpRight size={15} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
