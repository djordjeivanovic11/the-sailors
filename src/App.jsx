import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Motivation from './components/Motivation.jsx'
import SponsorBox from './components/SponsorBox.jsx'
import Projects from './components/Projects.jsx'
import { languages, siteContent } from './content/siteContent.js'
import './App.css'

function App() {
  const [language, setLanguage] = useState('me')
  const content = siteContent[language]

  useEffect(() => {
    const languageMeta = languages.find((item) => item.code === language)

    document.documentElement.lang = languageMeta?.htmlLang ?? language
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.meta.ogTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.meta.ogDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', content.meta.locale)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', content.meta.ogTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', content.meta.ogDescription)
  }, [content.meta, language])

  return (
    <div className="site">
      <div className="hero-shell">
        <Header
          content={content.header}
          language={language}
          languages={languages}
          onLanguageChange={setLanguage}
        />
        <Hero content={content.hero} />
      </div>
      <main>
        <Motivation content={content.motivation} />
        <SponsorBox content={content.sponsor} />
        <Projects content={content.projects} />
      </main>
      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <p>{content.footer.text}</p>
          <nav className="footer-links" aria-label={content.footer.navLabel}>
            {content.footer.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
