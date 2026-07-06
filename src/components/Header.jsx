import { useState } from 'react'
import Wordmark from './Wordmark.jsx'

export default function Header({
  content,
  language,
  languages,
  onLanguageChange,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const scrollToTarget = (event, href) => {
    event.preventDefault()
    closeMenu()

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  const renderLanguageToggle = (className = '') => (
    <div
      className={`language-toggle${className ? ` ${className}` : ''}`}
      aria-label={content.languageLabel}
    >
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={item.code === language ? 'is-active' : ''}
          onClick={() => {
            onLanguageChange(item.code)
            closeMenu()
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <header className="site-header">
        <a
          href="#"
          className="wordmark-link"
          onClick={(event) => scrollToTarget(event, '#')}
        >
          <Wordmark />
        </a>
        <div className="header-actions">
          {renderLanguageToggle('is-compact')}
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? content.menuCloseLabel : content.menuOpenLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="menu-nav" aria-label={content.navLabel}>
          {renderLanguageToggle()}
          <ul>
            {content.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => scrollToTarget(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
