import hero from "@/content/hero.json";
import type { HeroContent } from "@/types/content";
import "./HeroSection.css";

const heroContent = hero as HeroContent;

const HeroSection = () => {
  const { name, title, tagline, description, cta, metrics } = heroContent;

  return (
    <section className="container hero-section surface" id="hero">
      <div className="hero-intro">
        <p className="tag">Always building</p>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="hero-tagline">{tagline}</p>
        <p>{description}</p>
        <div className="hero-actions">
          <a
            className="cta"
            href={cta.primary.href}
            target={cta.primary.external ? "_blank" : undefined}
            rel={cta.primary.external ? "noreferrer" : undefined}
          >
            {cta.primary.label}
          </a>
          {cta.secondary ? (
            <a className="outline" href={cta.secondary.href}>
              {cta.secondary.label}
            </a>
          ) : null}
        </div>
      </div>
      <div className="hero-metrics">
        {metrics.map((metric) => (
          <div className="metric-card surface" key={metric.label}>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-label">{metric.label}</p>
            <p className="metric-detail">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
