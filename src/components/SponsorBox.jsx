export default function SponsorBox({ content }) {
  return (
    <section id="support" className="section sponsor" aria-labelledby="support-heading">
      <div className="section-inner">
        <div className="sponsor-box">
          <div className="sponsor-intro">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="support-heading" className="sponsor-title">
              {content.title}
            </h2>
            <p className="sponsor-text">{content.text}</p>
          </div>
          <ul className="sponsor-points">
            {content.points.map((point) => (
              <li key={point.title}>
                <strong>{point.title}:</strong> {point.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
