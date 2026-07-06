export default function Hero({ content }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id="hero-heading" className="hero-headline">
          {content.headline}
        </h1>
        <p className="hero-subheadline">{content.subheadline}</p>
        <div className="hero-actions">
          <a href="#support" className="btn btn-primary">
            {content.primaryCta}
          </a>
          <a href="#projects" className="btn btn-secondary">
            {content.secondaryCta}
          </a>
        </div>
        <p className="hero-credibility">{content.credibility}</p>
      </div>
    </section>
  )
}
