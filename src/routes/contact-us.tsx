import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageHeading, pageHead } from '@/components/site-layout';
import { ArrowUpRight, Mail, Phone, MessageCircle, FileText } from 'lucide-react';
import { IndiaMapLocation } from '@/components/india-map-location';
import { FacilityAddressCard } from '@/components/facility-address-card';

export const Route = createFileRoute('/contact-us')({
  head: () =>
    pageHead(
      'Contact Us',
      'Discuss your mould design or engineering project with REDECOS Technologies in Coimbatore. Contact technical lead Sreeraj K P.'
    ),
  component: Page,
});

const form =
  'https://docs.google.com/forms/d/e/1FAIpQLSev0DDwtJMPewFZ0y4s46z-iI2jQxVBaBs9p-R2WlNJSinarw/viewform';

function Page() {
  return (
    <SiteLayout>
      <PageHeading
        label="CONTACT REDECOS"
        title="Let’s discuss your next project."
        description="If you are thinking of outsourcing design services or mould design, we would like to discuss your objectives and how we can help."
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-enquiries">
            <span className="eyebrow">PROJECT ENQUIRIES</span>
            <h2>Tell us what you have in mind.</h2>
            <p>
              Please use our work request form for questions or requests concerning our services. We
              will respond to your message as soon as possible.
            </p>

            {/* Eye-Catching Work Request Spotlight Banner */}
            <div className="work-request-spotlight-box">
              <div className="spotlight-top-badge">
                <div className="spotlight-beacon-wrap">
                  <span className="spotlight-beacon" aria-hidden="true">
                    <span className="spotlight-core" />
                    <span className="spotlight-ring" />
                  </span>
                  <span className="spotlight-badge-title">OFFICIAL WORK REQUEST PORTAL</span>
                </div>
                <span className="spotlight-badge-tag">PRIORITY INTAKE</span>
              </div>

              <a
                href={form}
                target="_blank"
                rel="noreferrer"
                className="btn-work-request-spotlight"
              >
                <FileText size={18} className="cta-lead-icon" />
                <span className="cta-label">Open work request form</span>
                <ArrowUpRight size={18} className="cta-arrow-icon" />
              </a>

              <div className="spotlight-footnote">
                <span className="footnote-item">⚡ Direct Review by Technical Lead</span>
                <span className="footnote-sep">·</span>
                <span className="footnote-item">Accepts 3D CAD &amp; 2D Drawings (STEP / IGES / PDF)</span>
              </div>
            </div>

            <div className="contact-person">
              <h3>Sreeraj K P</h3>
              <span>Technical Lead · Projects</span>
              <a href="tel:+919500899626">
                <Phone size={17} /> +91 95008 99626
              </a>
              <a
                href="https://wa.me/919500899626?text=Hello%20Sreeraj,%20I%20would%20like%20to%20discuss%20a%20project%20with%20REDECOS%20Technologies."
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp"
              >
                <MessageCircle size={17} /> WhatsApp (+91 95008 99626) <ArrowUpRight size={16} />
              </a>
              <a href="mailto:sreeraj@redecos.in">
                <Mail size={17} /> sreeraj@redecos.in
              </a>
              <p>Teams ID: sreeraj@redecos.in</p>
            </div>
            <div className="contact-person">
              <h3>Dhanya K K</h3>
              <span>Admin In-Charge · Administration</span>
              <a href="tel:+914224952626">
                <Phone size={17} /> +91 422 4952626
              </a>
              <a href="mailto:info@redecos.in">
                <Mail size={17} /> info@redecos.in
              </a>
            </div>

            {/* Headquarters & Design Facility Address */}
            <FacilityAddressCard />
          </div>

          <IndiaMapLocation />
        </div>
      </section>
    </SiteLayout>
  );
}
