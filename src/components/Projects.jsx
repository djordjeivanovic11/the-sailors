export default function Projects({ content }) {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="section-inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="projects-heading" className="section-title">
          {content.title}
        </h2>
        <div className="project-grid">
          {content.items.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="status-badge">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              {project.href ? (
                <a href={project.href} className="project-link">
                  {content.learnMore}
                  <span aria-hidden="true"> →</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
