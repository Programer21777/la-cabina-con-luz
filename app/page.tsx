"use client";

import { useMemo, useState } from "react";

const socials = [
  {
    label: "Facebook",
    short: "f",
    href: "https://www.facebook.com/EntretenimientoLuz15?locale=es_LA",
  },
  {
    label: "Instagram",
    short: "ig",
    href: "https://www.instagram.com/lacabinaconluz/",
  },
  {
    label: "TikTok",
    short: "tk",
    href: "https://www.tiktok.com/@lacabinaconluz",
  },
  {
    label: "YouTube",
    short: "yt",
    href: "https://www.youtube.com/@LaCabinaConLuz",
  },
];

const notes = [
  {
    category: "Agenda",
    title: "La agenda que prende la región este fin de semana",
    excerpt:
      "Música, cultura y planes para salir: una guía breve con lo que vale la pena tener en el radar.",
    image: "/images/concierto.jpg",
    time: "Hace 18 min",
    tone: "red",
  },
  {
    category: "Fotos",
    title: "Detrás del lente: Carmona Pics captura la energía del escenario",
    excerpt:
      "Una mirada cercana al oficio de guardar en una imagen esos segundos que no se repiten.",
    image: "/images/fotografo.jpg",
    time: "Hace 1 h",
    tone: "blue",
  },
  {
    category: "Comunidad",
    title: "La Cabina abre un nuevo espacio para las voces locales",
    excerpt:
      "Historias de la comunidad, personajes y proyectos que merecen más luz y mejores preguntas.",
    image: "/images/cabina.jpg",
    time: "Hace 3 h",
    tone: "red",
  },
  {
    category: "Ciudad",
    title: "Cinco historias que quizá se te pasaron esta semana",
    excerpt:
      "El resumen directo para entender la conversación de la ciudad sin perderte entre tanto ruido.",
    image: "/images/ciudad.jpg",
    time: "Ayer",
    tone: "blue",
  },
  {
    category: "Fotos",
    title: "Fotogalería: color, música y calle en una sola noche",
    excerpt:
      "La selección visual de Carmona Pics con los gestos, luces y detalles que contaron la noche.",
    image: "/images/concierto.jpg",
    time: "Ayer",
    tone: "red",
  },
  {
    category: "Comunidad",
    title: "El talento local ya tiene un nuevo escaparate",
    excerpt:
      "Emprendedores, artistas y colectivos podrán compartir su trabajo con una audiencia de la región.",
    image: "/images/fotografo.jpg",
    time: "Lun 10",
    tone: "blue",
  },
];

const categories = ["Todo", "Ciudad", "Agenda", "Fotos", "Comunidad"];

export default function Home() {
  const [category, setCategory] = useState("Todo");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return notes.filter((note) => {
      const matchesCategory = category === "Todo" || note.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${note.title} ${note.excerpt} ${note.category}`
          .toLocaleLowerCase("es")
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main>
      <div className="topline">
        <div className="shell topline-inner">
          <p><span className="live-dot" /> AL AIRE · EDICIÓN DIGITAL</p>
          <p className="topline-location">Tijuana, Baja California</p>
          <a href="#publicidad">Publicidad <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell masthead">
          <a className="wordmark" href="#inicio" aria-label="La Cabina con Luz, inicio">
            <span className="wordmark-signal" aria-hidden="true" />
            <span className="wordmark-main">LA CABINA</span>
            <span className="wordmark-sub">CON LUZ</span>
          </a>

          <p className="brand-line">Noticias, fotos y voces<br />conectadas a la ciudad.</p>

          <div className="socials" aria-label="Redes sociales">
            {socials.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
                aria-label={`La Cabina con Luz en ${social.label}`}
                title={social.label}
              >
                {social.short}
              </a>
            ))}
          </div>

          <a className="button button-primary header-cta" href="#publicidad">
            Anúnciate aquí <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="nav-wrap">
          <div className="shell nav-inner">
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span> Menú
            </button>
            <nav id="main-nav" className={menuOpen ? "main-nav is-open" : "main-nav"}>
              <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#ultimas" onClick={() => setMenuOpen(false)}>Últimas</a>
              <a href="#ciudad" onClick={() => setMenuOpen(false)}>Ciudad</a>
              <a href="#fotos" onClick={() => setMenuOpen(false)}>Fotos</a>
              <a href="#equipo" onClick={() => setMenuOpen(false)}>Nosotros</a>
            </nav>
            <label className="nav-search">
              <span className="sr-only">Buscar notas</span>
              <input
                type="search"
                placeholder="Buscar una historia..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span aria-hidden="true">⌕</span>
            </label>
          </div>
        </div>
      </header>

      <section className="breaking shell" aria-label="Última hora">
        <p className="breaking-label"><span className="live-dot" /> AHORA</p>
        <p className="breaking-copy">La Cabina con Luz prepara una nueva forma de contar lo que pasa cerca de ti.</p>
        <a href="#equipo">Conoce el proyecto <span aria-hidden="true">→</span></a>
      </section>

      <section className="hero shell" id="inicio">
        <article className="lead-story">
          <img src="/images/concierto.jpg" alt="Concierto iluminado en azul frente a una multitud" />
          <div className="lead-gradient" />
          <div className="lead-content">
            <p className="eyebrow"><span>Especial de portada</span> · La Cabina con Luz</p>
            <h1>La ciudad se cuenta mejor <em>desde la calle.</em></h1>
            <p>Noticias, imágenes y conversaciones con contexto, ritmo y la mirada de quienes sí están ahí.</p>
            <a className="story-link" href="#ultimas">Descubrir las historias <span aria-hidden="true">→</span></a>
          </div>
          <span className="photo-credit">Foto de muestra · Unsplash</span>
        </article>

        <aside className="hero-rail">
          <div className="rail-heading">
            <span>RADAR LOCAL</span>
            <span>04 HISTORIAS</span>
          </div>
          {notes.slice(0, 3).map((note, index) => (
            <a className="rail-story" href="#ultimas" key={note.title}>
              <span className="rail-number">0{index + 1}</span>
              <span>
                <small>{note.category} · {note.time}</small>
                <strong>{note.title}</strong>
              </span>
              <span className="rail-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="rail-ad" href="#publicidad">
            <span>ESPACIO PARA TU MARCA</span>
            <strong>Tu anuncio también puede tener luz.</strong>
            <span className="rail-ad-link">Ver opciones →</span>
          </a>
        </aside>
      </section>

      <section className="latest section shell" id="ultimas">
        <div className="section-heading">
          <div>
            <p className="kicker">Actualidad / Comunidad</p>
            <h2>Lo último <span>en la cabina</span></h2>
          </div>
          <p>Historias claras, imágenes con intención y la conversación que está moviendo a nuestra comunidad.</p>
        </div>

        <div className="filters" aria-label="Filtrar notas por categoría">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredNotes.length ? (
          <div className="story-grid">
            {filteredNotes.map((note, index) => (
              <article className="story-card" key={note.title} id={note.category === "Ciudad" ? "ciudad" : undefined}>
                <a className="card-image" href="#contacto" aria-label={note.title}>
                  <img src={note.image} alt="" loading={index < 3 ? "eager" : "lazy"} />
                  <span className={`category-tag ${note.tone}`}>{note.category}</span>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </a>
                <div className="card-copy">
                  <p className="card-meta">La Cabina con Luz <span>·</span> {note.time}</p>
                  <h3><a href="#contacto">{note.title}</a></h3>
                  <p>{note.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <strong>No encontramos esa historia.</strong>
            <p>Prueba otra palabra o selecciona “Todo”.</p>
          </div>
        )}
      </section>

      <section className="photo-feature section" id="fotos">
        <div className="shell photo-feature-grid">
          <div className="photo-copy">
            <p className="kicker kicker-light">El ojo de Carmona Pics</p>
            <h2>Momentos que hablan <span>sin pedir permiso.</span></h2>
            <p>Crónica visual de conciertos, eventos y vida cotidiana. Porque una buena foto no adorna la historia: también la cuenta.</p>
            <a
              className="button button-light"
              href="https://www.instagram.com/carmona.pics_/"
              target="_blank"
              rel="noreferrer"
            >
              Ver a Carmona Pics en Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="photo-collage" aria-label="Muestra de fotografía editorial">
            <figure className="photo-large">
              <img src="/images/fotografo.jpg" alt="Fotógrafo trabajando durante un evento" loading="lazy" />
              <figcaption>Detrás de cada gran momento hay alguien listo para verlo.</figcaption>
            </figure>
            <figure>
              <img src="/images/concierto.jpg" alt="Escenario y público bajo luces azules" loading="lazy" />
              <figcaption>LUZ / MÚSICA / CIUDAD</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="team section shell" id="equipo">
        <div className="section-heading team-heading">
          <div>
            <p className="kicker">Dos miradas / una señal</p>
            <h2>Quién está <span>detrás del proyecto</span></h2>
          </div>
        </div>

        <div className="team-grid">
          <article className="team-card team-blue">
            <span className="team-index">01</span>
            <div>
              <p className="kicker kicker-light">La conversación</p>
              <h3>La Cabina<br />con Luz</h3>
              <p>Entretenimiento, entrevistas y noticias contadas con cercanía. Un espacio para escuchar a la ciudad y amplificar lo que importa.</p>
              <a href="https://www.instagram.com/lacabinaconluz/" target="_blank" rel="noreferrer">@lacabinaconluz ↗</a>
            </div>
          </article>
          <article className="team-card team-red">
            <span className="team-index">02</span>
            <div>
              <p className="kicker kicker-light">La imagen</p>
              <h3>Carmona<br />Pics</h3>
              <p>Fotografía que observa, espera y dispara en el segundo exacto. El pulso visual que acompaña cada historia de esta colaboración.</p>
              <a href="https://www.instagram.com/carmona.pics_/" target="_blank" rel="noreferrer">@carmona.pics_ ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="advertise section" id="publicidad">
        <div className="shell advertise-inner">
          <div className="ad-stamp" aria-hidden="true"><span>PUBLICIDAD</span><strong>+</strong></div>
          <div className="advertise-copy">
            <p className="kicker kicker-light">Tu negocio también es noticia</p>
            <h2>Pon tu marca <em>bajo los reflectores.</em></h2>
            <p>Conecta con una comunidad local a través de banners, menciones, coberturas, contenido patrocinado y paquetes para redes sociales.</p>
          </div>
          <div className="ad-actions">
            <a
              className="button button-light"
              href="https://m.me/EntretenimientoLuz15"
              target="_blank"
              rel="noreferrer"
            >
              Quiero anunciarme <span aria-hidden="true">→</span>
            </a>
            <a
              className="text-link-light"
              href="https://www.instagram.com/lacabinaconluz/"
              target="_blank"
              rel="noreferrer"
            >
              O escríbenos por Instagram ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contacto">
        <div className="shell footer-main">
          <div>
            <a className="wordmark wordmark-footer" href="#inicio">
              <span className="wordmark-signal" aria-hidden="true" />
              <span className="wordmark-main">LA CABINA</span>
              <span className="wordmark-sub">CON LUZ</span>
            </a>
            <p>Noticias, fotos y voces conectadas a la ciudad.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Secciones</strong>
              <a href="#ultimas">Últimas notas</a>
              <a href="#ciudad">Ciudad</a>
              <a href="#fotos">Fotogalerías</a>
            </div>
            <div>
              <strong>Síguenos</strong>
              {socials.map((social) => (
                <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label} ↗</a>
              ))}
            </div>
            <div>
              <strong>Colaboración</strong>
              <a href="https://www.instagram.com/carmona.pics_/" target="_blank" rel="noreferrer">Carmona Pics ↗</a>
              <a href="#publicidad">Publicidad</a>
              <a href="https://m.me/EntretenimientoLuz15" target="_blank" rel="noreferrer">Contacto ↗</a>
            </div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© 2026 La Cabina con Luz. Todos los derechos reservados.</p>
          <p>Imágenes demostrativas: Unsplash.</p>
        </div>
      </footer>
    </main>
  );
}
