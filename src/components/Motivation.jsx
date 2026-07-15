export default function Motivation({ content }) {
  return (
    <section id="why" className="section motivation" aria-labelledby="why-heading">
      <div className="section-inner motivation-grid">
        <div className="section-heading-block">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="why-heading" className="section-title">
            {content.title}
          </h2>
        </div>
        <div className="motivation-copy">
          <div className="motivation-body">
            <p>{content.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
