import { Globe, ShieldCheck } from 'lucide-react';
import { indiaStatePaths } from '@/components/india-map-paths';

interface IndiaMapLocationProps {
  className?: string;
}

export function IndiaMapLocation({ className = '' }: IndiaMapLocationProps) {
  return (
    <div className={`india-location-wrapper ${className}`}>
      {/* Top International Heading */}
      <div className="india-location-header">
        <div className="location-badge-row">
          <span className="location-country-badge">
            <Globe size={13} className="text-primary inline mr-1" />
            INDIA · SOUTH ASIA
          </span>
          <span className="location-coords-badge">11.0168° N, 76.9558° E</span>
        </div>
        <h2 className="location-title">Find us in Coimbatore,India</h2>
        <p className="location-subtitle">
          Strategically located in Coimbatore, Tamil Nadu — the premier precision engineering, tooling, and manufacturing capital of South India.
        </p>
      </div>

      {/* High-Tech Vector Map Card */}
      <div className="india-map-card" role="region" aria-label="Map of India highlighting Coimbatore location">
        {/* Prominent High-Contrast Coimbatore Focus Banner */}
        <div className="coimbatore-focus-bar">
          <div className="coimbatore-focus-left">
            <span className="coimbatore-live-pulse" aria-hidden="true">
              <span className="pulse-core" />
              <span className="pulse-ring" />
            </span>
            <div>
              <span className="coimbatore-focus-tag">HEADQUARTERS LOCATION</span>
              <h3 className="coimbatore-focus-name">COIMBATORE, INDIA</h3>
            </div>
          </div>
          <div className="coimbatore-focus-right">
            <span className="coimbatore-focus-region">Tamil Nadu · South India</span>
            <span className="coimbatore-focus-coords">11.0168° N, 76.9558° E</span>
          </div>
        </div>

        <svg
          viewBox="0 0 2500 2843"
          className="india-svg-map"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* Glow Filter for Highlights */}
            <filter id="coimbatoreGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="tamilNaduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22426d" />
              <stop offset="100%" stopColor="#142c4b" />
            </linearGradient>

            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.45)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.05)" />
            </linearGradient>
          </defs>

          {/* Graticule Grid Lines (Lat / Long) */}
          <g className="map-graticule" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" strokeDasharray="6 8">
            <line x1="100" y1="667" x2="2400" y2="667" />
            <line x1="100" y1="1607" x2="2400" y2="1607" />
            <line x1="100" y1="2547" x2="2400" y2="2547" />

            <line x1="162" y1="200" x2="162" y2="2700" />
            <line x1="1017" y1="200" x2="1017" y2="2700" />
            <line x1="1872" y1="200" x2="1872" y2="2700" />
          </g>

          {/* Coordinates Labels */}
          <g className="map-coords-text" fill="rgba(148, 163, 184, 0.35)" fontSize="28" fontFamily="'3ds', sans-serif" fontWeight="600">
            <text x="180" y="655">30° N</text>
            <text x="180" y="1595">20° N</text>
            <text x="180" y="2535">10° N</text>
            <text x="180" y="250">70° E</text>
            <text x="1035" y="250">80° E</text>
            <text x="1890" y="250">90° E</text>
          </g>

          {/* Ocean & Geographic Water Body Labels */}
          <g className="map-water-labels" fill="rgba(56, 189, 248, 0.28)" fontSize="46" fontFamily="'3ds', sans-serif" fontWeight="700" letterSpacing="6">
            <text x="160" y="2100" transform="rotate(-70 160 2100)">ARABIAN SEA</text>
            <text x="1620" y="2100" transform="rotate(70 1620 2100)">BAY OF BENGAL</text>
            <text x="750" y="2800" textAnchor="middle">INDIAN OCEAN</text>
          </g>

          {/* Neighboring Countries (Geographical Orientation) */}
          <g className="map-neighbor-labels" fill="rgba(148, 163, 184, 0.22)" fontSize="34" fontFamily="'3ds', sans-serif" fontWeight="700" letterSpacing="3">
            <text x="1260" y="940">NEPAL</text>
            <text x="1820" y="960">BHUTAN</text>
            <text x="1620" y="1280">BANGLADESH</text>
            <text x="1030" y="2760">SRI LANKA</text>
          </g>

          {/* Stylized Sri Lanka Island outline for regional orientation */}
          <path
            d="M 1040 2680 C 1085 2705, 1105 2745, 1085 2790 C 1060 2825, 1025 2825, 1005 2785 C 995 2745, 1005 2705, 1040 2680 Z"
            fill="#0f1929"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="2.5"
          />

          {/* All 36 India Administrative States/Territories */}
          <g className="map-states-group">
            {indiaStatePaths.map((state) => (
              <path
                key={state.index}
                d={state.d}
                className={state.isTamilNadu ? 'india-state-tamilnadu' : 'india-state'}
                fill={state.isTamilNadu ? 'url(#tamilNaduGrad)' : '#0f1a2c'}
                stroke={state.isTamilNadu ? '#38bdf8' : 'rgba(56, 189, 248, 0.22)'}
                strokeWidth={state.isTamilNadu ? '5.5' : '2.2'}
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* Connecting Transit Vectors to Major Hubs */}
          <g className="map-transit-vectors" stroke="url(#routeGrad)" strokeWidth="3" strokeDasharray="10 12">
            <line x1="753" y1="2450" x2="805" y2="2267" />
            <line x1="753" y1="2450" x2="1030" y2="2257" />
            <line x1="753" y1="2450" x2="520" y2="1694" />
            <line x1="753" y1="2450" x2="760" y2="798" />
          </g>

          {/* Reference Cities */}
          <g className="map-ref-cities">
            {/* New Delhi */}
            <circle cx="760" cy="798" r="9" fill="#94a3b8" />
            <circle cx="760" cy="798" r="18" fill="none" stroke="rgba(148, 163, 184, 0.35)" strokeWidth="2.5" />
            <text x="795" y="806" fill="#cbd5e1" fontSize="34" fontFamily="'3ds', sans-serif" fontWeight="700">New Delhi</text>
            <text x="795" y="840" fill="#64748b" fontSize="24" fontFamily="'3ds', sans-serif">National Capital</text>

            {/* Mumbai */}
            <circle cx="520" cy="1694" r="9" fill="#94a3b8" />
            <circle cx="520" cy="1694" r="18" fill="none" stroke="rgba(148, 163, 184, 0.35)" strokeWidth="2.5" />
            <text x="552" y="1702" fill="#cbd5e1" fontSize="34" fontFamily="'3ds', sans-serif" fontWeight="700">Mumbai</text>
            <text x="552" y="1736" fill="#64748b" fontSize="24" fontFamily="'3ds', sans-serif">Commercial Hub</text>

            {/* Bengaluru */}
            <circle cx="805" cy="2267" r="8" fill="#94a3b8" />
            <text x="836" y="2275" fill="#cbd5e1" fontSize="30" fontFamily="'3ds', sans-serif" fontWeight="600">Bengaluru</text>

            {/* Chennai */}
            <circle cx="1030" cy="2257" r="8" fill="#94a3b8" />
            <text x="1062" y="2265" fill="#cbd5e1" fontSize="30" fontFamily="'3ds', sans-serif" fontWeight="600">Chennai</text>
          </g>

          {/* ============================================================== */}
          {/* COIMBATORE TARGET PIN & RADAR SYSTEM (X=753, Y=2450)          */}
          {/* ============================================================== */}
          <g className="map-coimbatore-beacon" filter="url(#coimbatoreGlow)">
            {/* Concentric Pulsing Radar Rings */}
            <circle cx="753" cy="2450" r="45" className="radar-circle radar-circle-1" />
            <circle cx="753" cy="2450" r="90" className="radar-circle radar-circle-2" />
            <circle cx="753" cy="2450" r="145" className="radar-circle radar-circle-3" />

            {/* Target Crosshairs */}
            <line x1="680" y1="2450" x2="826" y2="2450" stroke="#38bdf8" strokeWidth="5" />
            <line x1="753" y1="2377" x2="753" y2="2523" stroke="#38bdf8" strokeWidth="5" />

            {/* Glowing Core Pin */}
            <circle cx="753" cy="2450" r="22" fill="#38bdf8" />
            <circle cx="753" cy="2450" r="10" fill="#ffffff" />
          </g>

          {/* ============================================================== */}
          {/* LARGE, CLEAR, READABLE CALLOUT BOX ON THE MAP                  */}
          {/* ============================================================== */}
          <g className="map-coimbatore-card">
            {/* Thick Pointer Leader Line */}
            <polyline
              points="753,2450 630,2330 380,2330"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <circle cx="380" cy="2330" r="8" fill="#38bdf8" />

            {/* Large Callout Box for Coimbatore */}
            <g transform="translate(40, 2060)">
              <rect
                x="0"
                y="0"
                width="640"
                height="240"
                rx="14"
                fill="#040812"
                stroke="#38bdf8"
                strokeWidth="5"
                className="callout-rect"
              />

              {/* Status Pill */}
              <rect x="28" y="24" width="220" height="42" rx="6" fill="rgba(56, 189, 248, 0.18)" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
              <text x="44" y="52" fill="#38bdf8" fontSize="24" fontFamily="'3ds', sans-serif" fontWeight="700" letterSpacing="1.5">REDECOS HQ</text>

              {/* Large, Bold City Title (Clearly Visible) */}
              <text x="28" y="128" fill="#ffffff" fontSize="62" fontFamily="'3ds', sans-serif" fontWeight="800" letterSpacing="1">COIMBATORE</text>
              <text x="28" y="174" fill="#38bdf8" fontSize="36" fontFamily="'3ds', sans-serif" fontWeight="700">Tamil Nadu, India</text>
              <text x="28" y="212" fill="#94a3b8" fontSize="28" fontFamily="'3ds', sans-serif" fontWeight="500">Precision Mould &amp; Tooling Hub</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Official Business Registration & Banking Details (Under the Map) */}
      <div className="location-business-card">
        <div className="business-card-header">
          <div className="business-badge-row">
            <span className="business-status-pill">
              <ShieldCheck size={14} className="badge-shield-icon" />
              OFFICIAL BUSINESS CREDENTIALS
            </span>
          </div>
          <h3 className="business-reg-title">Business registration</h3>
        </div>

        <div className="business-reg-content">
          <p className="business-reg-text">
            SSI Registered under Micro Service Sector, Tamil Nadu<br />
            <span className="reg-field">UAN:</span> <strong>TN03D0028741</strong><br />
            <span className="reg-field">GSTIN:</span> <strong>33BTPPS3330A1ZY</strong><br />
            <span className="reg-field">Legal name:</span> Kanneri Puthan Veettil Sreeraj<br />
            <span className="reg-field">Trade name:</span> REDECOS Technologies<br />
            <span className="reg-field">Constitution:</span> Proprietorship
          </p>
        </div>

        {/* Bank & Payment Details */}
        <details className="bank-details">
          <summary>Bank &amp; payment details</summary>
          <p>
            South Indian Bank · Current account<br />
            Account: 0206073000005553<br />
            NGGO Colony Branch, Coimbatore – 641022<br />
            IFSC: SIBL0000206<br />
            UPI: redecostechnologies@oksbi
          </p>
        </details>
      </div>
    </div>
  );
}
