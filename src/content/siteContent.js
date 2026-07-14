export const languages = [
  { code: 'me', label: 'ME', htmlLang: 'cnr' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
]

export const siteContent = {
  me: {
    meta: {
      title: 'Anchor Labs — otvorena tehnološka infrastruktura',
    },
    header: {
      menuOpenLabel: 'Otvori meni',
      menuCloseLabel: 'Zatvori meni',
      navLabel: 'Primarna navigacija',
      languageLabel: 'Promijeni jezik',
      navItems: [
        { label: 'Zašto je ovo važno', href: '#why' },
        { label: 'Zašto firme podržavaju ovo', href: '#support' },
        { label: 'Projekti', href: '#projects' },
      ],
    },
    hero: {
      eyebrow: 'Otvorena tehnološka infrastruktura',
      headline: 'Gradimo otvorenu tehnološku infrastrukturu za Crnu Goru.',
      subheadline:
        'Anchor Labs okuplja inženjere, istraživače, studente, dijasporu, institucije i firme oko jednog cilja: open-source AI, jezički i infrastrukturni projekti koje Crna Gora zaista može koristiti.',
      primaryCta: 'Postani osnivački podržavalac',
      secondaryCta: 'Istraži projekte',
      credibility: 'Open-source. Javni interes. Prvo Crna Gora.',
    },
    motivation: {
      eyebrow: 'Crna Gora na prvom mjestu',
      title: 'Zašto je ovo važno',
      readMore: 'Pročitaj više',
      showLess: 'Prikaži manje',
      body: `Crna Gora je mala, ali nije nebitna. Na raskrsnici je Jadrana i Balkana, ima dijasporu razbacanu po pola Evrope, mladu populaciju koja govori nekoliko jezika i sve više inženjera i tehnologa koji hoće da grade, ne samo da koriste tuđe.

Problem je što sistemi koji će oblikovati narednu deceniju — vještačka inteligencija, glasovni interfejsi, pravna i građanska podatkovna infrastruktura, softver za javni sektor, jezičke tehnologije — u Crnu Goru uglavnom stižu gotovi. Napravljeni negdje drugo, podešeni za tuđi kontekst, održavani od ljudi koje mi ne biramo.

Nije problem u pameti. Imamo inženjere, i ovdje i u dijaspori. Imamo studente koji uče mašinsko učenje, lingvistiku, softversko inženjerstvo. Imamo institucije koje žele modernizaciju i firme kojima je jasno da digitalna transformacija više nije izbor. Ono što fali jeste infrastruktura koja to sve povezuje: zajednički open-source alati, dostupni javni podaci, mjesta gdje se istraživanje pretvara u praksu i jasan put za ljude da doprinesu ovdje, umjesto da ekspertizu ostave na granici.

Kad tehnologija dolazi samo kao gotov proizvod, zemlja uči da zavisi od drugih. Kad se gradi lokalno — makar djelimično, makar nesavršeno — zemlja uči da razumije, prilagođava i, na kraju, vodi. To je bitno za suverenitet, za institucije, za obrazovanje i za obične ljude kojima bi trebalo da rade sistemi na njihovom jeziku, po njihovim zakonima, za njihov interes.

Anchor Labs postoji da popuni tu prazninu. Nismo klub, nismo jednokratna kampanja, nismo nečiji lični projekat. Okupljamo inženjere, istraživače, dizajnere, studente, dijasporu, institucije i firme oko konkretnog open-source rada. Projekti su praktični, standardi ozbiljni, a fokus je jasan — javni interes i Crna Gora, uz otvorenost za saradnju u regionu i šire.

Vjerujemo da ovo treba da grade ljudi kao mi. Inženjer iz Crne Gore ne bi trebalo da bira između odlaska iz zemlje i odustajanja od ambicije. Student bi trebalo da vidi pravi projekat kojem može doprinijeti prije nego što diplomira. Neko iz dijaspore treba da ima ozbiljno mjesto gdje može uložiti vrijeme i znanje u zemlju iz koje potiče. Institucija treba moći da usvoji alat napravljen za njen kontekst. Firma treba da vidi nacionalni napor vrijedan podrške — ne kao donaciju, nego kao ulaganje u digitalni sloj o kom će jednog dana zavisiti njen posao.

AI ovdje nije daleka budućnost, već nešto što već mijenja kako se traže informacije, pružaju usluge, predstavljaju jezici u softveru i kako institucije komuniciraju s građanima. Glasovni interfejsi biće bitni za pristupačnost i javne usluge. Pravna i građanska podatkovna infrastruktura biće bitna da AI sistemi obučeni na javnim podacima budu transparentni i pouzdani. Open-source alati su bitni jer zatvoreni, vlasnički sistemi nijesu dobar temelj za javne institucije — niti za zemlju koja ne može cio digitalni stack unedogled da iznajmljuje od drugih.

Ovo nije poziv na donacije. Ovo je poziv da uložite u nacionalni kapacitet: open-source alate, javnu infrastrukturu, vidljivost talenata i dugoročnu digitalnu samostalnost. Rad je tek počeo. Standardi su visoki. Potreba je stvarna. Ljudi koji treba da grade tehničku budućnost Crne Gore već su tu — čekaju samo infrastrukturu, projekte i mjesto gdje mogu raditi zajedno.`,
    },
    sponsor: {
      eyebrow: 'Osnivački podržavaoci',
      title: 'Zašto firme podržavaju ovo',
      text: 'Osnivački podržavaoci pomažu Crnoj Gori da izgradi kapacitet od kog koristi ima cio ekosistem: bolji jezički alati, bolji pristup javnim informacijama, jači domaći talenat i open-source infrastruktura na kojoj mogu graditi institucije, studenti, startapi i firme.',
      points: [
        {
          title: 'Javna vrijednost',
          text: 'Korisni alati, objavljeni otvoreno gdje god je to moguće.',
        },
        {
          title: 'Vidljivost talenata',
          text: 'Signal inženjerima, studentima i dijaspori da se Crna Gora isplati graditi.',
        },
        {
          title: 'Strateška pozicija',
          text: 'Mjesto među prvima u AI i digitalnoj infrastrukturi Crne Gore.',
        },
      ],
    },
    projects: {
      eyebrow: 'Projekti',
      title: 'Projekti',
      learnMore: 'Saznaj više',
      items: [
        {
          title: 'MNE-MCP',
          status: 'U razvoju',
          description:
            'Otvorena alatska infrastruktura za crnogorske pravne, institucionalne, javne i građanske podatke — lakši pristup provjerenim informacijama, i za ljude i za AI sisteme.',
          href: '#',
        },
        {
          title: 'Montenegrina Voice AI',
          status: 'U razvoju',
          description:
            'Glasovni AI za crnogorski govor — za pristupačnost, obrazovanje, javne usluge i interakciju čovjek–računar na maternjem jeziku.',
          href: '#',
        },
        {
          title: 'Budući open-source projekti',
          status: 'U formiranju',
          description:
            'Pipeline za nove AI, građanske, infrastrukturne i obrazovne projekte od javnog interesa, rađene zajedno s crnogorskom tehničkom zajednicom.',
          href: '#',
        },
      ],
    },
    footer: {
      text: 'Anchor Labs · Crna Gora',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/djordjeiv',
        },
        {
          label: 'djordjeivanovic65@gmail.com',
          href: 'mailto:djordjeivanovic65@gmail.com',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Anchor Labs — Open Technology Infrastructure',
    },
    header: {
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
      navLabel: 'Primary navigation',
      languageLabel: 'Change language',
      navItems: [
        { label: 'Why this matters', href: '#why' },
        { label: 'Why companies support this', href: '#support' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    hero: {
      eyebrow: 'Open technology infrastructure',
      headline: 'Building open technology infrastructure for Montenegro.',
      subheadline:
        'Anchor Labs brings together engineers, researchers, students, diaspora, institutions, and companies to build open-source AI, civic, language, and infrastructure projects that Montenegro can actually use.',
      primaryCta: 'Become a founding supporter',
      secondaryCta: 'Explore projects',
      credibility: 'Open-source. Public-interest. Montenegro-first.',
    },
    motivation: {
      eyebrow: 'Montenegro-first',
      title: 'Why this matters',
      readMore: 'Read more',
      showLess: 'Show less',
      body: `Montenegro is small, but it is not insignificant. It sits at the crossroads of the Adriatic and the Balkans, with a diaspora spread across Europe and beyond, a multilingual younger generation, and a growing community of engineers, researchers, and technologists who want to build — not only consume. Yet the systems that will define the next decade — artificial intelligence, voice interfaces, legal and civic data infrastructure, public-sector software, and language technology — most often arrive in Montenegro as finished products built elsewhere.

The problem is not a lack of intelligence. Montenegro has talented engineers in local companies and abroad. It has students learning machine learning, linguistics, and software engineering. It has institutions that want to modernize. It has companies that understand digital transformation is no longer optional. What Montenegro lacks is organized infrastructure: shared open-source tools, accessible public datasets, technical institutions that connect research to practice, and visible paths for people to contribute to national capability.

When technology arrives only as consumption, a country learns to depend. When technology is built locally — even partially, imperfectly, and incrementally — a country learns to understand, adapt, and eventually lead. That distinction matters for sovereignty, institutions, education, and the everyday experience of citizens who deserve systems that understand their language and public context.

Anchor Labs exists to help close that gap. It is not a club, a campaign, or a one-person project. It is a builder collective: engineers, researchers, designers, students, diaspora members, institutions, and companies gathering around concrete open-source work. The projects are practical, the standards are serious, and the orientation is public-interest and Montenegro-first.

This is not a donation appeal. It is an invitation to invest in national capability: open-source tools, public infrastructure, talent visibility, and long-term digital sovereignty. The work is early. The standards are high. The need is real. The people who should build Montenegro’s technical future are already here — they need the infrastructure, projects, and institution that let them work together.`,
    },
    sponsor: {
      eyebrow: 'Founding supporters',
      title: 'Why companies support this',
      text: 'Founding supporters help Montenegro build technical capacity that benefits the whole ecosystem: better language tools, better access to public information, stronger local talent, and open-source infrastructure that institutions, students, startups, and companies can build on.',
      points: [
        {
          title: 'Public value',
          text: 'Useful tools released openly where possible.',
        },
        {
          title: 'Talent visibility',
          text: 'A signal to engineers, students, and diaspora that Montenegro is worth building for.',
        },
        {
          title: 'Strategic positioning',
          text: 'Early support for Montenegro’s AI and digital infrastructure layer.',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects',
      learnMore: 'Learn more',
      items: [
        {
          title: 'MNE-MCP',
          status: 'In development',
          description:
            'Open tool infrastructure for Montenegrin legal, institutional, public, and civic data — making verified information easier for people and AI systems to use.',
          href: '#',
        },
        {
          title: 'Montenegrina Voice AI',
          status: 'In development',
          description:
            'Voice AI for Montenegrin speech, accessibility, education, public services, and local-language human-computer interaction.',
          href: '#',
        },
        {
          title: 'Future open-source projects',
          status: 'Forming',
          description:
            'A pipeline for new AI, civic, infrastructure, education, and public-interest technology projects built with Montenegro’s technical community.',
          href: '#',
        },
      ],
    },
    footer: {
      text: 'Anchor Labs · Montenegro',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/djordjeiv',
        },
        {
          label: 'djordjeivanovic65@gmail.com',
          href: 'mailto:djordjeivanovic65@gmail.com',
        },
      ],
    },
  },
}
