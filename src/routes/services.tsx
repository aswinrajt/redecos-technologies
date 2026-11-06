import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageHeading, pageHead } from '@/components/site-layout';
import { originalContent } from '@/lib/site-content';
import { ServicesVisualGrid } from '@/components/services-visual-grid';

export const Route = createFileRoute('/services')({
  head: () =>
    pageHead(
      'Engineering Services',
      'Explore product design, reverse engineering, DFM, precision mould design, flow analysis and manufacturing support from REDECOS.'
    ),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeading
        label="OUR SERVICES"
        title="From the first idea to the final tool."
        description={originalContent.services[1] ?? 'Precision engineering and design services.'}
      />
      <section className="section services-page-section">
        <div className="container">
          <ServicesVisualGrid expandOnPage={true} initialSelectedId="service-1" />
        </div>
      </section>
    </SiteLayout>
  );
}
