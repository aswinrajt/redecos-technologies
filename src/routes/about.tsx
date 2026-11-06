import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteLayout, PageHeading, SectionLabel, pageHead } from '@/components/site-layout';
import { originalContent } from '@/lib/site-content';
import { cadModels } from '@/lib/cad-models';
import { CadModelCard, CadInspectModal, type CadModelData } from '@/components/cad-model-card';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HighlightKeywords } from '@/components/highlight-keywords';

export const Route = createFileRoute('/about')({
  head: () =>
    pageHead(
      'About Us',
      'Meet the REDECOS team: precision tooling and mould design professionals with over a decade of manufacturing experience in Coimbatore.'
    ),
  component: Page,
});

function Page() {
  const [activeModel, setActiveModel] = useState<CadModelData | null>(null);

  return (
    <SiteLayout>
      <PageHeading
        label="ABOUT REDECOS"
        title="Engineering grounded in experience."
        description="Delivering the Real Design. Manufacturing knowledge at the heart of every project."
      />

      {/* Engineering Showcase Overview Strip */}
      <section className="about-metrics-bar">
        <div className="container about-metrics-inner">
          <div className="about-metric-pill">
            <ShieldCheck size={16} className="text-primary" />
            <span>100% Solid CAD Environment</span>
          </div>
          <div className="about-metric-pill">
            <Sparkles size={16} className="text-primary" />
            <span>Color-Coded Parting Standards</span>
          </div>
          <div className="about-metric-pill">
            <CheckCircle2 size={16} className="text-primary" />
            <span>Over a Decade of Tooling Expertise</span>
          </div>
        </div>
      </section>

      {/* Main Feature Sections with Alternating CAD Models */}
      <section className="section about-showcase-section">
        <div className="container about-container">
          {/* Section 01: WHO WE ARE */}
          <div className="about-feature-row">
            <div className="about-feature-text">
              <SectionLabel number="01">WHO WE ARE</SectionLabel>
              <h2>Precision tooling. Practical solutions.</h2>
              <div className="about-prose-block">
                {originalContent.home.slice(1, 3).map((p) => (
                  <p key={p}>
                    <HighlightKeywords text={p} />
                  </p>
                ))}
              </div>
            </div>
            <div className="about-feature-visual">
              <CadModelCard model={cadModels[0]} onInspect={setActiveModel} />
            </div>
          </div>

          {/* Section 02: WHY REDECOS? (Inverted for visual cadence on desktop) */}
          <div className="about-feature-row about-feature-row-reverse">
            <div className="about-feature-text">
              <SectionLabel number="02">MANUFACTURING MINDSET</SectionLabel>
              <h2>Why REDECOS?</h2>
              <div className="about-prose-block">
                {originalContent.home.slice(4, 7).map((p) => (
                  <p key={p}>
                    <HighlightKeywords text={p} />
                  </p>
                ))}
              </div>
            </div>
            <div className="about-feature-visual">
              <CadModelCard model={cadModels[1]} onInspect={setActiveModel} />
            </div>
          </div>

          {/* Section 03: FROM AN IDEA TO A REAL PRODUCT */}
          <div className="about-feature-row">
            <div className="about-feature-text">
              <SectionLabel number="03">SYNCHRONIZED ENGINEERING</SectionLabel>
              <h2>From an idea to a real product.</h2>
              <div className="about-prose-block">
                {originalContent.home.slice(16, 19).map((p) => (
                  <p key={p}>
                    <HighlightKeywords text={p} />
                  </p>
                ))}
              </div>
            </div>
            <div className="about-feature-visual">
              <CadModelCard model={cadModels[2]} onInspect={setActiveModel} />
            </div>
          </div>

          {/* Core Philosophy Quote Block */}
          <div className="about-quote-container">
            <div className="about-quote-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>
                Software is only a tool. It&apos;s our people that provide the real solutions.
              </blockquote>
              <div className="about-quote-author">
                <span className="author-line" />
                <span className="author-text">REDECOS TECHNOLOGIES CORE PHILOSOPHY</span>
              </div>
            </div>

            {/* Next Steps CTA inside About */}
            <div className="about-cta-card">
              <span className="eyebrow">READY TO COLLABORATE?</span>
              <h3>Discuss your mould tooling or design requirements with our engineers.</h3>
              <div className="about-cta-buttons">
                <Button asChild size="lg">
                  <Link to="/contact-us">
                    Discuss a project <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">
                    Explore all services <ArrowUpRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / High-Resolution Inspection Dialog */}
      <CadInspectModal model={activeModel} onClose={() => setActiveModel(null)} />
    </SiteLayout>
  );
}
