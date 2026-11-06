import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Layers, Check, Sparkles, Building2, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLayout, SectionLabel, pageHead } from '@/components/site-layout';
import { originalContent, technologies, newTechnologies } from '@/lib/site-content';
import hero from '@/assets/mould-hero.jpg';
import { ProjectCarousel } from '@/components/project-carousel';
import { projectSlides } from '@/lib/projects';
import { TechnologyLogo } from '@/components/technology-logo';
import { ServicesVisualGrid } from '@/components/services-visual-grid';
import { cadModels } from '@/lib/cad-models';
import { CadModelCard, CadInspectModal, type CadModelData } from '@/components/cad-model-card';
import { industriesData } from '@/lib/industries-data';
export const Route = createFileRoute("/")({
  head:()=>pageHead('Precision Mould Design & Engineering','REDECOS Technologies delivers product design, precision mould design, DFM, flow analysis and manufacturing support in Coimbatore.'),
  component: Index,
});
const metrics = [
  {
    number: "1200",
    suffix: "+",
    label: "Mould Design Projects",
    tag: "Tooling & Moulds",
    description: "High-precision injection moulds engineered in 3D CAD for first-time-right manufacturability.",
    icon: Layers,
  },
  {
    number: "50",
    suffix: "+",
    label: "New Product Designs",
    tag: "R&D & Modeling",
    description: "Complete product development, Class-A surfacing, parametric modeling, and reverse engineering.",
    icon: Sparkles,
  },
  {
    number: "50",
    suffix: "+",
    label: "Customers",
    tag: "Enterprise Trust",
    description: "Serving leading manufacturers across automotive, appliance, and precision tooling sectors.",
    icon: Building2,
  },
  {
    number: "25",
    suffix: "+",
    label: "Anchor Clients",
    tag: "Strategic Partners",
    description: "Long-standing partners who rely on REDECOS as their dedicated extended tooling division.",
    icon: Anchor,
  },
] as const;
function Index() {
  const [inspectModel, setInspectModel] = useState<CadModelData | null>(null);

  return (
    <SiteLayout>
      <section className="hero">
        <img className="hero-image" src={hero} alt="Illustrative precision injection mould assembly" width={1920} height={1024}/>
        <div className="hero-shade"/>
        <div className="hero-scan" aria-hidden/>
        <div className="container hero-content">
          <span className="eyebrow"><i/> PRECISION ENGINEERING. REAL SOLUTIONS.</span>
          <h1>REDECOS<br/><span>Technologies.</span></h1>
          <h2>Delivering the Real Design.</h2>
          <p>Precision mould design, product development and engineering support. Built around one thing: manufacturability.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><Link to="/services">Explore our services <ArrowUpRight/></Link></Button>
            <Button asChild variant="ghost" size="lg"><Link to="/contact-us">Discuss a project <ArrowRight/></Link></Button>
          </div>
          <div className="hero-foot">
            <span>PRODUCT DESIGN</span><i/><span>PRECISION TOOLING</span><i/><span>MANUFACTURING SUPPORT</span>
          </div>
        </div>
        <div className="hero-caption">INJECTION MOULD ASSEMBLY <span> / ILLUSTRATIVE RENDER</span></div>
      </section>

      <div className="value-strip">
        <div className="container">
          {['Systematic approach','Demand-driven design','Shorter lead time','Schedule commitment','Platform adaptability'].map(t=><span key={t}><Check size={15}/>{t}</span>)}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionLabel number="01">ENGINEERING WITH PURPOSE</SectionLabel>
          <div className="intro-grid items-center">
            <div>
              <h2>Design expertise.<br/>Manufacturing mindset.</h2>
              <p className="lead">
                A team of professionals with <strong className="highlight-kw">over a decade of experience</strong> in <strong className="highlight-kw">precision tooling and mould design</strong>.
              </p>
              <p>
                We provide need-based design services and manufacturing support to the plastic moulding industry — combining product knowledge with <strong className="highlight-kw">practical tooling expertise</strong>.
              </p>
              <div className="intro-note"><span>OUR CORE STRENGTH</span><strong>Manufacturability &amp; the Real design</strong></div>
              <div className="pt-3">
                <Link className="text-link" to="/about">Explore full about &amp; CAD model showcase <ArrowUpRight size={17}/></Link>
              </div>
            </div>
            <div>
              <CadModelCard model={cadModels[0]} onInspect={setInspectModel} />
            </div>
          </div>
        </div>
      </section>
<section className="section metrics-section">
  <div className="container">
    <div className="metrics-header">
      <div>
        <span className="eyebrow"><i /> PROVEN TRACK RECORD</span>
        <h2>Engineering delivered at scale.</h2>
      </div>
      <p>Over a decade of manufacturing-ready tooling and product engineering delivered to demanding industry standards.</p>
    </div>
    <div className="metrics-grid">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div key={m.label} className="metric-card">
            <div className="metric-card-top">
              <span className="metric-icon-wrap" aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="metric-tag">{m.tag}</span>
            </div>
            <div className="metric-number">
              <span>{m.number}</span>
              <span className="metric-plus">{m.suffix}</span>
            </div>
            <h3 className="metric-title">{m.label}</h3>
            <p className="metric-desc">{m.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>
<section className="section services-section">
  <div className="container">
    <SectionLabel number="02">WHAT WE DO</SectionLabel>
    <div className="section-heading">
      <h2>From concept to<br/>manufacturing-ready.</h2>
      <Link className="text-link" to="/services">All services <ArrowUpRight size={17}/></Link>
    </div>
    <ServicesVisualGrid expandOnPage={true} />
  </div>
</section><section className="section"><div className="container"><SectionLabel number="03">CORE AREAS OF EXPERTISE</SectionLabel><div className="expertise-grid">{originalContent.home.slice(8,16).map((item,i)=><div className="expertise-item" key={item}><span>0{i+1}</span><h3>{item}</h3></div>)}</div></div></section><section className="approach-band"><div className="container approach-grid"><div><span className="eyebrow">A CONNECTED APPROACH</span><h2>Not over the wall.<br/>Alongside your team.</h2></div><div><p>Our designers understand both products and tooling. Our <strong className="highlight-kw">synchronized design approach</strong> considers manufacturing from the start — so your design is ready for what comes next.</p><Button asChild variant="outline"><Link to="/approach">Our engineering approach <ArrowUpRight/></Link></Button></div></div></section><section className="section projects-section"><div className="container"><SectionLabel number="04">SHOWCASE</SectionLabel><div className="section-heading"><h2>Our Projects</h2></div><ProjectCarousel slides={projectSlides}/></div></section><section className="section industries-home-section">
  <div className="container">
    <SectionLabel number="05">INDUSTRIES WE SERVE</SectionLabel>
    <div className="section-heading">
      <h2>Proven cross-sector expertise.</h2>
      <Link className="text-link" to="/industries">
        All industries <ArrowUpRight size={17} />
      </Link>
    </div>
    <div className="industry-row">
      {industriesData.slice(0, 4).map((item) => (
        <Link
          to="/industries"
          key={item.id}
          className="industry-row-card"
          aria-label={`View ${item.title} industry details`}
        >
          <img
            src={item.image}
            alt={item.imageAlt}
            className="industry-row-bg"
            loading="lazy"
            decoding="async"
            width={700}
            height={500}
          />
          <div className="industry-row-overlay" aria-hidden="true" />
          <div className="industry-row-top">
            <span className="industry-row-num">{item.number}</span>
            <span className="industry-row-cat">{item.category}</span>
          </div>
          <div className="industry-row-bottom">
            <h3 className="industry-row-title">{item.title}</h3>
            <span className="industry-row-cta">
              Explore capabilities <ArrowUpRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section><section className="technology-section section"><div className="container"><SectionLabel number="06">THE TOOLS BEHIND THE SOLUTIONS</SectionLabel><div className="technology-heading"><h2>We are powered by.</h2><p>“Software is only a tool. It’s our people<br/>that provide the real solutions.”</p></div><div className="technology-grid">{technologies.map(t=><div key={t} className="technology-name"><TechnologyLogo name={t}/><span>{t}</span></div>)}</div><div className="new-software"><span className="eyebrow">NEWLY PURCHASED ENGINEERING SOFTWARE</span>{newTechnologies.map(t=><div key={t}><TechnologyLogo name={t}/><strong>{t}</strong><span>NEW</span></div>)}</div></div></section><section className="section pilot-section"><div className="container"><span className="eyebrow">START WITH A PILOT PROJECT</span><h2>Build confidence before<br/>the bigger commitment.</h2><p>Try our services with a pilot project on a Fair Payment Term.<br/>No payment required until the mould designs are completed and approved by you.</p><Link to="/contact-us" className="text-link">Let’s talk about your first design <ArrowUpRight size={18}/></Link></div></section>
      <CadInspectModal model={inspectModel} onClose={() => setInspectModel(null)} />
    </SiteLayout>
  );
}
