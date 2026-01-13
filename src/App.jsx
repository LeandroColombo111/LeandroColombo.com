const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const subject = form.elements.subject.value.trim();
  const message = form.elements.body.value.trim();
  const body = `Email: ${email}\n\n${message}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=leandronahuelcolombo@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:leandronahuelcolombo@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  if (!newWindow) {
    window.location.href = mailtoUrl;
  }
};

const App = () => {
  return (
    <div className="page">
      <header className="hero" id="inicio">
        <div className="container">
          <nav className="topbar">
            <a className="logo" href="#inicio">
              LC
            </a>
            <div className="nav-links">
              <a href="#sobre-mi">Sobre mi</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#stack">Stack</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </div>
            <a className="nav-cta" href="#contacto">
              Enviar email
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy reveal" style={{ '--delay': '0.1s' }}>
              <p className="eyebrow">Data Engineer | Automatizacion | Visualizacion</p>
              <h1>Leandro Nahuel Colombo</h1>
              <p className="hero-text">
                Tengo 2 años de experiencia como data engineer, trabajando con datos
                desde la visualizacion hasta la creacion de automatizaciones, manejo
                de estructuras y bases de datos.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contacto">
                  Enviar email
                </a>
                <a
                  className="button ghost"
                  href="https://www.linkedin.com/in/leancolombo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="chips">
                <span>TypeScript</span>
                <span>Python</span>
                <span>Java</span>
                <span>R</span>
              </div>
            </div>

            <div className="hero-card reveal" style={{ '--delay': '0.2s' }}>
              <h3>Enfoque en datos de punta a punta</h3>
              <ul className="checklist">
                <li>Visualizacion clara para decisiones rapidas.</li>
                <li>Automatizaciones y pipelines reproducibles.</li>
                <li>Modelado, estructuras y bases de datos solidas.</li>
              </ul>
              <div className="highlight">
                <span className="highlight-title">2 años</span>
                <span className="highlight-subtitle">Experiencia continua en datos</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="sobre-mi" className="section">
          <div className="container split">
            <div className="reveal" style={{ '--delay': '0.1s' }}>
              <p className="section-eyebrow">Sobre mi</p>
              <h2>Conecto datos con resultados de negocio</h2>
              <p>
                Me gusta transformar informacion dispersa en productos claros y
                accionables. Combino ingenieria, automatizacion y analisis para
                mejorar procesos, ahorrar tiempo y encontrar oportunidades reales.
              </p>
              <p className="muted">
                Hoy trabajo con equipos que necesitan datos confiables y faciles de
                consumir, desde dashboards hasta flujos de ingesta y procesamiento.
              </p>
            </div>
            <div className="card reveal" style={{ '--delay': '0.2s' }}>
              <h3>Lo que aporto</h3>
              <ul className="list">
                <li>Diseno de pipelines y arquitecturas simples de mantener.</li>
                <li>Automatizaciones que reducen tareas manuales.</li>
                <li>Insights visuales para equipos de marketing y negocio.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container">
            <p className="section-eyebrow">Experiencia</p>
            <h2>Experiencias que resumen mi trabajo</h2>
            <div className="experience-grid">
              <article className="experience-card reveal" style={{ '--delay': '0.1s' }}>
                <img src="images/data-pipeline.svg" alt="Ilustracion de pipelines de datos" />
                <h3>Pipelines y calidad de datos</h3>
                <p>
                  Construyo flujos estables que conectan fuentes, limpian informacion
                  y dejan datos listos para analisis.
                </p>
              </article>
              <article className="experience-card reveal" style={{ '--delay': '0.2s' }}>
                <img src="images/automation.svg" alt="Ilustracion de automatizacion" />
                <h3>Automatizacion inteligente</h3>
                <p>
                  Creo scripts, bots y procesos que reducen tiempos operativos y
                  mejoran la consistencia del trabajo.
                </p>
              </article>
              <article className="experience-card reveal" style={{ '--delay': '0.3s' }}>
                <img
                  src="images/visualization.svg"
                  alt="Ilustracion de visualizacion de datos"
                />
                <h3>Visualizacion con foco en decisiones</h3>
                <p>
                  Diseno dashboards y reportes para entender resultados, detectar
                  oportunidades y medir impacto.
                </p>
              </article>
            </div>

            <div className="timeline">
              <div className="timeline-card reveal" style={{ '--delay': '0.1s' }}>
                <h3>JSD</h3>
                <p className="role">AI Engineer | Oct 2025 - Actualidad</p>
                <ul className="list">
                  <li>Desarrollo de soluciones con IA para automatizar procesos.</li>
                  <li>Implementacion de modelos y mejoras en flujos de datos.</li>
                </ul>
              </div>
              <div className="timeline-card reveal" style={{ '--delay': '0.2s' }}>
                <h3>RunRabbit Agency</h3>
                <p className="role">Junior Media Buyer | Dic 2024 - Sep 2025</p>
                <ul className="list">
                  <li>Optimizacion de campanas y performance con modelos de IA.</li>
                  <li>Lectura de datos publicitarios para mejorar conversiones.</li>
                </ul>
              </div>
              <div className="timeline-card reveal" style={{ '--delay': '0.3s' }}>
                <h3>Remitz Inc.</h3>
                <p className="role">Data Engineer | Dic 2023 - Nov 2024</p>
                <ul className="list">
                  <li>Scraping con Selenium y Requests para nuevas fuentes de datos.</li>
                  <li>Automatizaciones con CI/CD para desplegar procesos confiables.</li>
                  <li>Optimizacion de pipelines para mayor velocidad y calidad.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="container">
            <p className="section-eyebrow">Stack</p>
            <h2>Lenguajes que uso</h2>
            <div className="stack-grid">
              <div className="stack-card reveal" style={{ '--delay': '0.1s' }}>
                TypeScript
              </div>
              <div className="stack-card reveal" style={{ '--delay': '0.2s' }}>
                Python
              </div>
              <div className="stack-card reveal" style={{ '--delay': '0.3s' }}>
                Java
              </div>
              <div className="stack-card reveal" style={{ '--delay': '0.4s' }}>
                R
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="container">
            <p className="section-eyebrow">Proyectos</p>
            <h2>Trabajos y herramientas que publique</h2>
            <div className="project-grid">
              <article className="project-card reveal" style={{ '--delay': '0.1s' }}>
                <h3>Analysis of CO2 Emissions using ML</h3>
                <p>
                  Exploracion de emisiones de CO2 con modelos de machine learning para
                  detectar tendencias.
                </p>
                <a
                  className="text-link"
                  href="https://github.com/LeandroColombo111/Analysis-of-CO2-emissions-using-ML"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </article>
              <article className="project-card reveal" style={{ '--delay': '0.2s' }}>
                <h3>Calculadora de Interes Compuesto</h3>
                <p>Herramienta para estimar ganancias en dolares a largo plazo.</p>
                <a
                  className="text-link"
                  href="https://leandrocolombo111.github.io/calculadora-ahorro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                </a>
                <a
                  className="text-link"
                  href="https://github.com/LeandroColombo111/calculadora-ahorro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </article>
              <article className="project-card reveal" style={{ '--delay': '0.3s' }}>
                <h3>Dashboard Meta Analysis</h3>
                <p>Visualizacion del rendimiento de campanas con dispersion y analisis.</p>
                <a
                  className="text-link"
                  href="https://leandrocolombo111.github.io/gauss-dasahboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                </a>
                <a
                  className="text-link"
                  href="https://github.com/LeandroColombo111/gauss-dasahboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="container contact-grid">
            <div className="reveal" style={{ '--delay': '0.1s' }}>
              <p className="section-eyebrow">Contacto</p>
              <h2>Hablemos sobre tu proximo desafio de datos</h2>
              <p>
                Estoy disponible para colaborar en proyectos de automatizacion,
                visualizacion o ingenieria de datos.
              </p>
              <div className="contact-buttons">
                <a
                  className="button ghost"
                  href="https://www.linkedin.com/in/leancolombo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a className="button ghost" href="mailto:leandronahuelcolombo@gmail.com">
                  Email directo
                </a>
              </div>
            </div>
            <div className="contact-card reveal" style={{ '--delay': '0.2s' }}>
              <p className="contact-title">Formulario rapido</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="email">Tu email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="subject">Asunto</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Consulta sobre datos"
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="body"
                      rows="5"
                      placeholder="Contame sobre tu proyecto"
                      required
                    ></textarea>
                </div>
                <button className="button primary" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <span>Leandro Nahuel Colombo - Data Engineer</span>
          <span>Datos, automatizacion y visualizacion con enfoque en impacto.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
