import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteLayout, PageHeading, pageHead } from '@/components/site-layout';
import { originalContent } from '@/lib/site-content';
import { Plus, ArrowUpRight } from 'lucide-react';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export const Route = createFileRoute('/faq')({
  head: () =>
    pageHead(
      'Frequently Asked Questions',
      'Answers about REDECOS outsourcing, schedules, pricing, confidentiality, communication and pilot design projects.'
    ),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeading
        label="FREQUENTLY ASKED QUESTIONS"
        title="A few things you might want to know."
        description="Working together, project schedules, design ownership and everything in between."
      />

      <section className="section faq-main-section">
        <div className="container faq-layout">
          <aside className="faq-aside">
            <span className="eyebrow">COMMON QUERIES</span>
            <h2>Let’s clear things up.</h2>
            <p>Have a question about your specific tooling project or CAD specifications?</p>
            <Link to="/contact-us" className="text-link">
              Get in touch with an engineer <ArrowUpRight size={16} />
            </Link>
          </aside>

          <div className="faq-list">
            {originalContent.questions.map((q, i) => (
              <details key={q.question}>
                <summary>
                  <span className="faq-number">{String(i + 1).padStart(2, '0')}</span>
                  <span>{q.question}</span>
                  <Plus size={20} className="faq-toggle-icon" />
                </summary>
                <div className="faq-answer">
                  {q.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Testimonials Carousel Section */}
      <section className="section testimonials-section">
        <div className="container">
          <TestimonialsCarousel />
        </div>
      </section>
    </SiteLayout>
  );
}
