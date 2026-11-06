import { MapPin, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface FacilityAddressCardProps {
  className?: string;
}

export function FacilityAddressCard({ className = '' }: FacilityAddressCardProps) {
  return (
    <div className={`facility-address-card ${className}`}>
      <div className="address-top-row">
        <div className="address-pin-icon" aria-hidden="true">
          <MapPin size={22} />
        </div>
        <div>
          <span className="eyebrow">HEADQUARTERS &amp; DESIGN FACILITY</span>
          <h3 className="address-company-name">REDECOS TECHNOLOGIES</h3>
        </div>
      </div>

      <address className="address-lines">
        #5/2-49, Plot No-4W, Sri Vinayaga Garden,<br />
        Opp. to RVS Nagar, Pannimadai,<br />
        Coimbatore – 641017,<br />
        Tamil Nadu, India
      </address>

      <div className="address-actions-row">
        <a
          href="https://www.google.com/maps/search/?api=1&query=REDECOS+Technologies+Pannimadai+Coimbatore"
          target="_blank"
          rel="noreferrer"
          className="maps-button"
        >
          Open in Google Maps <ArrowUpRight size={15} />
        </a>
        <a href="tel:+914222647626" className="address-phone-link">
          <Phone size={13} className="inline mr-1 opacity-70" /> +91 422 2647626
        </a>
        <a href="mailto:redecos@outlook.com" className="address-email-link">
          <Mail size={13} className="inline mr-1 opacity-70" /> redecos@outlook.com
        </a>
      </div>
    </div>
  );
}

