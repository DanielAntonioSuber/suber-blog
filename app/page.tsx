import { ReactElement } from 'react'
import Image from 'next/image'
import styles from './home.module.css'

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Inicio</a>
        <a href="#projects" className={styles.navLink}>Proyectos</a>
        <a href="/blog" className={styles.navLink}>Blog</a>
        <a href="#contact" className={styles.navLink}>Contacto</a>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.animateFadeIn}`}>
        <h1 className={styles.heroTitle}>Hola, soy Daniel Antonio Eugenio</h1>
        <h2 className={styles.heroSubtitle}>Científico de Datos y Desarrollador Web</h2>
        <p className={styles.heroText}>
          Ayudo a empresas a tomar decisiones basadas en datos y a crear soluciones web eficientes.
        </p>
        <a href='#contact' className={styles.ctaButton}>Contáctame</a>
      </section>

      {/* Image Grid */}
      <div className={styles.imageGrid}>
        <div className={styles.magicCard}>
          <Image
            src='/code.png'
            width={500}
            height={300}
            alt='Coding Interface'
            priority
          />
        </div>
        <div className={styles.magicCard}>
          <Image
            src='/graphics.png'
            width={500}
            height={300}
            alt='Data Graphics'
          />
        </div>
      </div>

      {/* Quote Section */}
      <figure className={styles.quoteSection}>
        <div className='py-8 md:p-8 space-y-4'>
          <blockquote>
            <p className={styles.quoteText}>
              "La mayoría de las personas sobrestiman lo que pueden hacer en un año y subestiman lo que puedes hacer en diez años"
            </p>
          </blockquote>
          <figcaption className={styles.quoteAuthor}>
            — John C. Maxwell
          </figcaption>
        </div>
      </figure>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <p className={styles.paragraph}>
          Durante los últimos años, he estado dedicado a la creación y desarrollo de proyectos web, tanto para empresas como para clientes particulares. En este tiempo, he trabajado en una amplia variedad de proyectos, abarcando desde sitios web corporativos hasta aplicaciones web más complejas, adaptándome a las necesidades específicas de cada cliente y proyecto.
        </p>
        <p className={styles.paragraph}>
          Las tecnologías que más he utilizado en el desarrollo de estos proyectos incluyen principalmente JavaScript, con un enfoque particular en el uso de React. Esta biblioteca de JavaScript me ha permitido construir interfaces de usuario interactivas y dinámicas, ofreciendo experiencias de usuario fluidas y optimizadas.
        </p>
      </section>

      {/* Project Preview Placeholder (Title from user request) */}
      <figure className={styles.quoteSection} style={{ background: 'transparent', border: '1px solid var(--border-card)' }}>
        <h3 className={styles.heroSubtitle} style={{ marginBottom: 0 }}>Vista de los proyectos</h3>
      </figure>

      {/* Competencias Section */}
      <section className={`${styles.section} ${styles.competencies}`}>
        <h2 className={styles.sectionTitle}>Competencias</h2>
        <p className={styles.paragraph} style={{ textAlign: 'center' }}>
          Soy una persona resiliente, enfocada a objetivos
        </p>
      </section>
    </div>
  )
}
