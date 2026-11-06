import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/redecos-logo.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Industries", to: "/industries" },
  { name: "Our Approach", to: "/approach" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact Us", to: "/contact-us" },
] as const;
export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!glow || !ring) {
      return;
    }
    let raf = 0,
      tx = innerWidth / 2,
      ty = innerHeight / 2,
      rx = tx,
      ry = ty,
      isActive = false,
      isHovering = false;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!isActive) {
        isActive = true;
        document.body.classList.add("cursor-active");
      }
    };
    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      glow.style.transform = `translate3d(${tx}px,${ty}px,0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest('a,button,[role="button"]');
      const nextHover = !!t;
      if (nextHover !== isHovering) {
        isHovering = nextHover;
        document.body.classList.toggle("cursor-hover", nextHover);
      }
    };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("pointermove", move);
      removeEventListener("pointerover", over);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-active", "cursor-hover");
    };
  }, []);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    const sections = document.querySelectorAll(
      "main .section, main .approach-band, main .page-heading, .cta-band",
    );
    sections.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    const targets =
      path === "/about"
        ? document.querySelectorAll(
          "main .about-feature-row, main .prose-layout > h2, main .prose-layout > p, main blockquote, main .about-quote-container",
        )
        : path === "/services"
          ? document.querySelectorAll(
            "main .service-index a, main .detail-number, main .service-detail h2, main .service-spec, main .service-detail p",
          )
          : path === "/"
            ? document.querySelectorAll("main .intro-grid > div, main .services-grid > a")
            : [];
    targets.forEach((el, i) => {
      el.classList.add("motion-item");
      el.setAttribute("data-motion-step", String(i % 3));
      io.observe(el);
    });
    const heading = document.querySelector("main .page-heading");
    if (path === "/about" || path === "/services") {
      heading?.classList.add("engineering-heading");
      document.querySelector("main .prose-layout")?.classList.add("motion-prose");
      document
        .querySelectorAll("main .service-detail")
        .forEach((el) => el.classList.add("motion-detail"));
      document.querySelector("main .service-index")?.classList.add("motion-index");
    }
    return () => io.disconnect();
  }, [path]);
  const whatsappUrl =
    "https://wa.me/919500899626?text=Hello%20REDECOS%20Technologies,%20I%20would%20like%20to%20enquire%20about%20your%20services";
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <img src={logo} alt="REDECOS logo" width="60" height="48" />
            <span className="brand-title brand-desktop">REDECOS TECHNOLOGIES</span>
            <span className="brand-text brand-mobile">
              <span className="brand-title">REDECOS</span>
              <span className="brand-sub">TECHNOLOGIES</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className={path === item.to ? "active" : ""}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="header-tools">
            <ThemeToggle />
            <Button asChild className="quote-button">
              <Link to="/contact-us">
                Request a Quote <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp-link"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              <span>WhatsApp (+91 95008 99626)</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>
        )}
      </header>
      <main key={path} className="page-transition">
        {children}
      </main>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">YOUR NEXT PROJECT</span>
            <h2>Let’s turn your idea into reality.</h2>
            <p>From a first sketch to a manufacturing-ready design.</p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact-us">
              Discuss your project <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div>
            <Link to="/" className="brand footer-brand">
              <img src={logo} alt="REDECOS logo" width="60" height="48" />
              <span className="brand-text">
                <span className="brand-title">REDECOS</span>
                <span className="brand-sub">TECHNOLOGIES</span>
              </span>
            </Link>
            <p>Delivering the Real Design</p>
            <p className="footer-motto">Manufacturability &amp; the Real design</p>
          </div>
          <div>
            <h3>Explore</h3>
            {navigation.slice(1, 5).map((i) => (
              <Link key={i.to} to={i.to}>
                {i.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>Get in touch</h3>
            <a href="mailto:sreeraj@redecos.in">
              sreeraj@redecos.in <ArrowUpRight size={14} />
            </a>
            <a href="tel:+919500899626">+91 95008 99626</a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={14} /> WhatsApp (+91 95008 99626) <ArrowUpRight size={14} />
            </a>
            <a href="mailto:info@redecos.in">info@redecos.in</a>
            <Link to="/contact-us">
              Contact details <ArrowRight size={14} />
            </Link>
          </div>
          <div>
            <h3>Visit us</h3>
            <p>
              #5/2-49, Plot No-4W, Sri Vinayaga Garden,
              <br />
              Opp. to RVS Nagar, Pannimadai,
              <br />
              Coimbatore – 641017,
              <br />
              Tamil Nadu, India
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getUTCFullYear()} REDECOS Technologies</span>
          <span>SSI Registered · GSTIN 33BTPPS3330A1ZY</span>
          <Link to="/faq">FAQ</Link>
        </div>
      </footer>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}
export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
      <i />
    </div>
  );
}
export function PageHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-heading">
      <div className="container">
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | REDECOS Technologies` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | REDECOS Technologies` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
