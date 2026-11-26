import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { profile, projects } from '@/data/portfolio'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  return (
    <>
      <Head>
        <title>{`Projects — ${profile.name}`}</title>
        <meta
          name="description"
          content="AI/ML and full-stack projects including rebar take-off, IT helpdesk, and analytics platforms"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.projects}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Imagination Trumps Knowledge!</h1>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  {project.impact && (
                    <p className={styles.projectImpact}>{project.impact}</p>
                  )}
                  <div className={styles.techRow}>
                    {project.tech.map((tag) => (
                      <span key={tag} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      View Project
                      <Image
                        src="/images/svgs/external-link.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
