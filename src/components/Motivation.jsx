import { useState } from 'react'

export default function Motivation({ content }) {
  const [expanded, setExpanded] = useState(false)

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
          <div className={`motivation-body${expanded ? ' is-expanded' : ''}`}>
            {content.body.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-text read-more"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? content.showLess : content.readMore}
          </button>
        </div>
      </div>
    </section>
  )
}
